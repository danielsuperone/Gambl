/*
Crash Game - single-file ES module
Usage:
import { initCrashGame } from './crash-game.js';
const crash = initCrashGame(document.getElementById('crash-root'), { clientSeed: 'demo' });
// crash.destroy() to remove

This module exports initCrashGame(container, opts) -> { destroy }
- Injects Shadow DOM with scoped CSS and minimal DOM
- Implements seeded RNG (clientSeed -> deterministic rounds)
- Emits CustomEvents on the container: 'roundStart','cashout','crash','roundEnd'
- Keeps last 20 multipliers
- No external assets
*/

export function initCrashGame(container, opts = {}){
  if (!container) throw new Error('container required');
  const clientSeed = String(opts.clientSeed || (Math.random()+''));
  // create shadow root for isolated styles
  const host = document.createElement('div');
  const shadow = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
  container.appendChild(host);

  // simple seeded PRNG: xmur3 -> mulberry32
  function xmur3(str){
    let h = 1779033703 ^ str.length;
    for(let i=0;i<str.length;i++){ h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h<<13)|(h>>>19); }
    return function(){ h = Math.imul(h ^ (h>>>16), 2246822507); h = Math.imul(h ^ (h>>>13), 3266489909); return (h ^= h>>>16) >>> 0; };
  }
  function mulberry32(a){ return function(){ a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  const seedFn = xmur3(clientSeed);
  let rng = mulberry32(seedFn());

  // state
  let raf = null;
  let running = false;
  let paused = false;
  let multiplier = 1;
  let crashPoint = 1;
  let startTs = 0;
  let last20 = [];
  let balance = Number(opts.startBalance || 1000);
  let bet = Number(opts.startBet || 10);
  let autoCash = Number(opts.autoCash || 0);

  // create UI
  const style = document.createElement('style');
  style.textContent = `
  :host{all:initial}
  .crash{font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;color:#e6eef8}
  .wrap{width:100%;max-width:760px;background:#071025;border-radius:12px;padding:12px;box-shadow:0 8px 30px rgba(0,0,0,.6);display:flex;flex-direction:column;gap:10px}
  .top{display:flex;align-items:center;gap:8px;justify-content:space-between}
  .balance{font-weight:700;background:linear-gradient(90deg,#00ffa2,#00b3ff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .controls{display:flex;gap:8px;flex-wrap:wrap}
  input[type=number]{background:#081524;border:1px solid rgba(255,255,255,0.04);color:#cfefff;padding:8px;border-radius:8px;min-width:80px}
  button{background:#06d6a0;border:none;padding:8px 12px;border-radius:10px;color:#002a22;font-weight:700;cursor:pointer;transition:transform .12s}
  button.secondary{background:#ffd166;color:#2b1a00}
  button:active{transform:translateY(1px)}
  .mult{font-size:34px;font-weight:900;letter-spacing:0.02em;color:#9be7ff}
  .graph{height:100px;background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);border-radius:8px;overflow:hidden}
  canvas{width:100%;height:100%;display:block}
  .rocket{font-size:28px;transform-origin:50% 100%;transition:transform .08s linear}
  .chips{display:flex;gap:6px;flex-wrap:wrap}
  .chip{background:rgba(255,255,255,0.04);padding:6px 8px;border-radius:999px;font-size:12px}
  .footer{display:flex;justify-content:space-between;align-items:center}
  .mutebtn{background:transparent;border:1px solid rgba(255,255,255,0.04);color:#9bdcff;padding:6px 8px;border-radius:8px}
  @media(max-width:540px){ .wrap{padding:10px} .mult{font-size:28px} }
  `;

  const root = document.createElement('div');
  root.className = 'crash';
  root.innerHTML = `
  <div class="wrap">
    <div class="top">
      <div>
        <div style="font-size:12px;color:#7fb7d8">Balance</div>
        <div class="balance">€<span id="balance">${balance.toFixed(2)}</span></div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;color:#7fb7d8">Round hash</div>
        <div id="roundHash" style="font-family:monospace;font-size:12px;color:#bfe9ff">-</div>
      </div>
    </div>

    <div class="controls">
      <input id="bet" type="number" min="1" value="${bet}" />
      <input id="auto" type="number" step="0.01" min="0" placeholder="auto cashout (e.g. 2.5)" value="${autoCash || ''}" />
      <button id="start">Start</button>
      <button id="cash" class="secondary">Cash Out</button>
      <button id="mute" class="mutebtn">🔈</button>
    </div>

    <div style="display:flex;align-items:center;gap:12px">
      <div class="mult">×<span id="multVal">1.00</span></div>
      <div style="flex:1">
        <div class="graph"><canvas id="graph"></canvas></div>
      </div>
      <div style="width:36px;height:100px;display:flex;align-items:flex-end;justify-content:center"><div id="rocket" class="rocket">🚀</div></div>
    </div>

    <div class="footer">
      <div class="chips" id="chips"></div>
      <div style="font-size:12px;color:#7fb7d8">Hotkeys: Enter=Start · Space=Cash Out</div>
    </div>
  </div>
  `;

  shadow.appendChild(style);
  shadow.appendChild(root);

  // elements
  const el = shadow.querySelector.bind(shadow);
  const betEl = el('#bet');
  const autoEl = el('#auto');
  const startBtn = el('#start');
  const cashBtn = el('#cash');
  const muteBtn = el('#mute');
  const balanceEl = el('#balance');
  const multEl = el('#multVal');
  const chipsEl = el('#chips');
  const rocketEl = el('#rocket');
  const roundHashEl = el('#roundHash');
  const canvas = el('#graph');
  const ctx = canvas.getContext('2d');

  // responsive canvas sizing
  function resizeCanvas(){ const r = canvas.getBoundingClientRect(); canvas.width = Math.max(100, Math.floor(r.width*devicePixelRatio)); canvas.height = Math.max(40, Math.floor(r.height*devicePixelRatio)); ctx.scale(devicePixelRatio, devicePixelRatio); }
  // ensure clear scale on resize: recreate context transform
  function recomputeCanvas(){ canvas.width = canvas.clientWidth * devicePixelRatio; canvas.height = canvas.clientHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); }
  recomputeCanvas(); window.addEventListener('resize', recomputeCanvas);

  // draw line buffer
  let points = [];
  function draw(){
    const w = canvas.clientWidth; const h = canvas.clientHeight;
    ctx.clearRect(0,0,w,h);
    // background grid subtle
    ctx.fillStyle = 'rgba(255,255,255,0.01)'; ctx.fillRect(0,0,w,h);
    if (!points.length) return;
    ctx.beginPath();
    ctx.lineWidth = 2; ctx.strokeStyle = '#00e6ff';
    for(let i=0;i<points.length;i++){ const x = (i/(points.length-1))*w; const y = h - Math.min(h, (points[i]-1)/(Math.max(1.5, Math.max(...points)-1)) * h); if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y); }
    ctx.stroke();
  }

  // RNG helpers: skewed distribution via inverse-transform on exponential tail + occasional big tails
  function seededRand(){ return rng(); }
  function generateCrash(){
    const u = seededRand();
    // small probability for very large result
    if (u < 0.02){ // 2% chance heavy tail
      // pareto-ish: xm * (1 - u_small)^(-1/alpha)
      const u2 = seededRand() * 0.999; const alpha = 1.6; const xm = 10; return xm * Math.pow(1 - u2, -1/alpha);
    }
    // exponential-like tail: x = 1 + (-ln(u))/lambda
    const lambda = 0.9; const x = 1 + (-Math.log(Math.max(1e-9,u)))/lambda;
    return Math.max(1, Number(x.toFixed(2)));
  }

  // compute a round hash (demo) from clientSeed + nonce
  function roundHashFor(nonce){
    // simple hex of seededRand sequence (not cryptographic) for demo
    const s = clientSeed + '|' + nonce + '|' + Math.floor(seededRand()*1e9);
    // simple hash-like string
    let h = 2166136261 >>> 0;
    for(let i=0;i<s.length;i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
    return '0x' + ('00000000' + (h >>> 0).toString(16)).slice(-8);
  }

  // event dispatch helper
  function emit(name, detail){ const ev = new CustomEvent(name, { detail }); (host.dispatchEvent || host).dispatchEvent(ev); }

  // game lifecycle
  let nonce = 0;
  function newRound(){
    multiplier = 1; points = [1]; draw(); startTs = performance.now(); crashPoint = Math.max(1, generateCrash()); roundHashEl.textContent = roundHashFor(nonce);
    emit('roundStart', { nonce, crashPoint, roundHash: roundHashEl.textContent });
  }

  function start(){
    if (running) return; // already running
    // take bet
    bet = Math.max(1, Number(betEl.value) || bet);
    autoCash = Number(autoEl.value) || 0;
    if (bet > balance) { alert('Insufficient balance'); return; }
    balance -= bet; updateBalance();
    nonce++;
    newRound();
    running = true; paused = false; startTs = performance.now();
    loop(startTs);
  }

  function loop(ts){
    if (!running || paused) return;
    // time delta
    const t = (ts - startTs) / 1000; // seconds
    // growth function - gentle exponential feel
    const growth = 1 + Math.exp(0.5 * t) / 10; // not used directly
    // simple multiplicative growth per frame
    const dt = Math.max(0.001, Math.min(0.05, (performance.now() - (loop._last || startTs))/1000));
    loop._last = performance.now();
    multiplier = multiplier * (1 + dt * 0.9) ;
    // clamp growth so it doesn't explode before crash
    if (multiplier > crashPoint) multiplier = crashPoint;
    points.push(Number(multiplier.toFixed(3)));
    if (points.length > 200) points.shift();
    multEl.textContent = multiplier.toFixed(2);
    // rocket position: translateY based on normalized multiplier
    const maxDisp = 64; const norm = Math.min(1, (Math.log(multiplier) / Math.log(Math.max(2, crashPoint))));
    rocketEl.style.transform = `translateY(${-norm * maxDisp}px)`;
    draw();

    // auto-cash
    if (autoCash && multiplier >= autoCash && running){ doCashout(true); return; }

    if (multiplier >= crashPoint){ // crash
      running = false; emit('crash', { nonce, crashPoint });
      onCrash(); return; }

    raf = requestAnimationFrame(loop);
  }

  function doCashout(auto=false){ if (!running) return; running = false; const winMult = multiplier; const payout = Math.floor((bet * winMult) * 100) / 100; balance += payout; updateBalance(); last20.unshift(Number(winMult.toFixed(2))); if (last20.length>20) last20.pop(); emit('cashout', { nonce, winMult, payout, auto }); showResult(true, winMult, payout); emit('roundEnd',{ nonce, winMult, payout }); }

  function onCrash(){ last20.unshift(0); if (last20.length>20) last20.pop(); showResult(false, 0, 0); emit('roundEnd',{ nonce, crashPoint }); }

  function updateBalance(){ balanceEl.textContent = balance.toFixed(2); }

  function showResult(win, mult, payout){
    // flash chips
    chipsEl.innerHTML = '';
    if (win){ const c = document.createElement('div'); c.className='chip'; c.textContent = `WIN ×${mult.toFixed(2)} → €${payout.toFixed(2)}`; chipsEl.appendChild(c); }
    else { const c = document.createElement('div'); c.className='chip'; c.textContent = `CRASH @ ${crashPoint.toFixed(2)}×`; chipsEl.appendChild(c); }
    // keep history
    last20.slice(0,10).forEach(v=>{ const d = document.createElement('div'); d.className='chip'; d.textContent = v===0? 'CR' : `×${v.toFixed(2)}`; chipsEl.appendChild(d); });
  }

  // controls
  startBtn.addEventListener('click', start);
  cashBtn.addEventListener('click', ()=>doCashout(false));
  muteBtn.addEventListener('click', ()=>{ muteBtn.textContent = muteBtn.textContent === '🔈' ? '🔇' : '🔈'; });

  // hotkeys
  function onKey(e){ if (e.code === 'Space'){ e.preventDefault(); doCashout(false); } else if (e.key === 'Enter'){ start(); } }
  window.addEventListener('keydown', onKey);

  // visibility pause
  function onVis(){ if (document.hidden){ paused = true; if (raf) cancelAnimationFrame(raf); } else { if (running){ paused = false; loop(performance.now()); } } }
  document.addEventListener('visibilitychange', onVis);

  // ensure canvas draws initially
  draw();

  // expose destroy
  function destroy(){
    running = false; paused = true; if (raf) cancelAnimationFrame(raf);
    window.removeEventListener('keydown', onKey);
    document.removeEventListener('visibilitychange', onVis);
    try{ container.removeChild(host); }catch(e){}
  }

  // return control API
  return { destroy };
}
