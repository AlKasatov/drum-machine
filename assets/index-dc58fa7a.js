import{r as e,j as t,c as r}from"./vendor-36ba57f3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const n=e=>{let t=e;const r=new Set;return{subscribe:e=>(r.add(e),()=>{r.delete(e)}),setData:e=>{t="function"==typeof e?e(t):e,r.forEach((e=>{e(t)}))},getValue:()=>t}},o=n(new Array(3).fill(new Array(16).fill(!1))),a=(e,t)=>{o.setData((r=>r.map(((r,n)=>r.map(((r,o)=>n===e&&o===t?!r:r))))))},s=()=>{o.setData((e=>e.map((e=>e.map((()=>!1))))))},c=n([]),l=new AudioContext;async function i(e,t){const r=await fetch(`./${e}`),n=await r.arrayBuffer();return{name:t,audioBuffer:await l.decodeAudioData(n)}}Promise.all([i("sounds/h.wav","HiHat"),i("sounds/s.wav","Snare"),i("sounds/k.wav","Kick")]).then((e=>{c.setData(e)}));const d=t=>e.useSyncExternalStore(t.subscribe,t.getValue),u=n({rowIndex:0,colIndex:0}),f=(e,t)=>{u.setData({rowIndex:e,colIndex:t})},m=n(0),b=(e=>{let t=!1;const r=new Set;return{subscribe:e=>(r.add(e),()=>{r.delete(e)}),on:()=>{t=!0,r.forEach((e=>{e(t)}))},off:()=>{t=!1,r.forEach((e=>{e(t)}))},toggle:()=>{t=!t,r.forEach((e=>{e(t)}))},getValue:()=>t}})(),g=t=>e.useSyncExternalStore(t.subscribe,t.getValue),v=()=>{const e=d(o),r=d(u),n=g(b),s=d(m);return t.jsx("div",{onKeyDown:e=>{(e=>{var t,r,n,s;const{rowIndex:c,colIndex:l}=u.getValue(),i=o.getValue();switch(e){case"Enter":a(c,l);break;case"ArrowLeft":void 0!==(null==(t=i[c])?void 0:t[l-1])&&f(c,l-1);break;case"ArrowDown":void 0!==(null==(r=i[c+1])?void 0:r[l])&&f(c+1,l);break;case"ArrowRight":void 0!==(null==(n=i[c])?void 0:n[l+1])&&f(c,l+1);break;case"ArrowUp":void 0!==(null==(s=i[c-1])?void 0:s[l])&&f(c-1,l)}})(e.code)},children:e.map(((o,c)=>t.jsx("div",{className:"flex gap-1 outline-none",tabIndex:1,children:o.map(((o,l)=>t.jsx("div",{onClick:()=>{var e,t;a(e=c,t=l),f(e,t)},className:`mb-1 w-12 h-8 cursor-pointer ${r.rowIndex===c&&r.colIndex===l?"border-4 border-violet-400":""} ${o?"bg-blue-700":l%4==0?"bg-blue-200":"bg-blue-100"} ${n&&s%e[0].length===l?"opacity-50":""}`},`${c}-${l}`)))},c)))})},h=n({bpm:120,ms:125});let p=null;const x=()=>{b.on();const e=c.getValue();p=setInterval((()=>{const t=m.getValue(),r=o.getValue();r.forEach(((n,o)=>{n.forEach(((n,a)=>{n&&t%r[0].length===a&&(e=>{const t=l.createBufferSource();t.buffer=e;const r=l.createGain();t.connect(r),r.connect(l.destination),t.playbackRate.value=1,t.start()})(e[o].audioBuffer)}))})),m.setData((e=>e+1))}),h.getValue().ms)},w=()=>{b.off(),clearInterval(p),m.setData(0),p=null},y=()=>{const e=g(b),r=d(m);return t.jsxs("button",{className:"border p-3 rounded",onClick:e?w:x,children:[e?"Stop":"Play"," - ",r]})};r.createRoot(document.getElementById("root")).render(t.jsx((()=>{const e=d(c);return t.jsxs("div",{className:"",children:[t.jsx("button",{onClick:s,children:"Clear"}),t.jsx(y,{}),t.jsxs("div",{className:"flex g-2",children:[t.jsx("div",{children:null==e?void 0:e.map((e=>t.jsx("div",{className:"mb-1 w-20 h-8",children:e.name},e.name)))}),t.jsx(v,{})]})]})}),{}));
//# sourceMappingURL=index-dc58fa7a.js.map
