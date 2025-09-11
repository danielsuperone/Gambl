/* Clean crash-game.js - single ES module export (restored) */

export function initCrashGame(container, opts = {}){
  if (!container) throw new Error('container required');
  const seed = String(opts.clientSeed || Math.random());

  // tiny seeded RNG (xmur3 -> mulberry32)
  function xmur3(s){ let h=1779033703^s.length; for(let i=0;i<s.length;i++){ h=Math.imul(h^s.charCodeAt(i),3432918353); h=(h<<13)|(h>>>19);} return function(){ h=Math.imul(h^(h>>>16),2246822507); h=Math.imul(h^(h>>>13),3266489909); return (h^=h>>>16)>>>0; }; }
  function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
  const rng = mulberry32(xmur3(seed)());

  const host = document.createElement('div');
  const shadow = host.attachShadow ? host.attachShadow({mode:'open'}) : host;
  container.appendChild(host);

  const style = document.createElement('style');
  style.textContent = ':host{all:initial}.wrap{font-family:system-ui;padding:8px;background:#071025;color:#dff4ff;border-radius:8px}';
  const root = document.createElement('div'); root.className='wrap';
  root.innerHTML = `<div>Crash <b id='m'>1.00</b> <button id='s'>Start</button> <button id='c'>Cash</button> <div id='h'></div></div>`;
  shadow.appendChild(style); shadow.appendChild(root);

  const m = shadow.getElementById('m');
  const s = shadow.getElementById('s');
  const c = shadow.getElementById('c');
  const h = shadow.getElementById('h');

  let running=false, multiplier=1, crashPoint=1, raf=null, nonce=0, last=[];
  function gen(){ const u=rng(); if(u<0.02){ const u2=rng(); return Math.max(1, Number((10*Math.pow(1-u2,-1.6)).toFixed(2))); } const lambda=0.9; return Math.max(1, Number((1+(-Math.log(Math.max(1e-9,u)))/lambda).toFixed(2))); }
  function emit(n,d){ host.dispatchEvent(new CustomEvent(n,{detail:d})); }
  function start(){ if(running) return; nonce++; multiplier=1; crashPoint=gen(); running=true; emit('roundStart',{nonce,crashPoint}); tick(); }
  function tick(){ if(!running) return; multiplier*=1.02; if(multiplier>=crashPoint){ running=false; h.textContent=`CRASH @ ${crashPoint.toFixed(2)}`; emit('crash',{nonce,crashPoint}); return; } m.textContent=multiplier.toFixed(2); raf=requestAnimationFrame(tick); }
  function cash(){ if(!running) return; running=false; const win=Number(multiplier.toFixed(2)); last.unshift(win); if(last.length>20) last.pop(); h.textContent='CASH ×'+win; emit('cashout',{nonce,win}); }

  s.addEventListener('click',start); c.addEventListener('click',cash);

  return { destroy(){ running=false; if(raf) cancelAnimationFrame(raf); try{ container.removeChild(host);}catch(e){} } };
}
