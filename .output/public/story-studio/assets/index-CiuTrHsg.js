const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CqBozPzQ.js","./purify.es-2FREwzWT.js","./three-DVEmkC7O.js","./index-B17ugBVS.js","./index-UQpo_8wf.js","./index-DfFlO_mo.js","./preload-helper-DMGCcr4D.js","./react-Bag7Dygb.js","./react-BnuhLJ6X.css","./index-BnqvsVql.css","./index-C9Nk7Xyz.js","./index-DKB7ua-Y.js","./index-BI2g8OlC.js","./index-SdIUEuyX.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./preload-helper-DMGCcr4D.js";import{createCompositePlugin as R}from"./index-CcQvGblu.js";import{d as k}from"./three-DVEmkC7O.js";import{c as A}from"./index-BeW0GfiJ.js";import{createSpinePlugin as S}from"./index-CIcA7fnO.js";import{V as O}from"./index-UQpo_8wf.js";import{createVegaRichTextPlugin as D}from"./index-B17ugBVS.js";import{createWebGalCompatibilityPlugin as z}from"./index-LAJuJBNn.js";import{createThreeRendererPlugin as I}from"./index-Bn1OGfAe.js";import{a as j}from"./index-DLc1X46h.js";import q,{HANEOKA_POST_TEXTURE_ASSETS as F}from"./index-Ds9wSG9x.js";import{vegaPortableUiPlugin as E}from"./index-BEq2myqN.js";import"./descriptor-qLqH6UCY.js";import"./index-DfFlO_mo.js";import"./react-Bag7Dygb.js";import"./TalkPortrait-sTNbsBC4.js";const H=e=>{const n=e.toLowerCase();return n==="ja"||n.startsWith("ja-")?["おわり","もう一度","タイトルへ"]:n==="ko"||n.startsWith("ko-")?["끝","다시 보기","타이틀로"]:n.startsWith("zh")?/(?:tw|hk|mo|hant)/u.test(n)?["故事結束","重新播放","返回標題"]:["故事结束","重新播放","返回标题"]:["The End","Replay","Title"]},N=String.raw`
.vega-ending {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  padding: clamp(24px, 7cqh, 72px);
  background:
    radial-gradient(circle at 50% 42%, rgb(25 35 58 / 20%), transparent 44%),
    linear-gradient(180deg, rgb(2 5 12 / 28%), rgb(2 5 12 / 82%));
  color: #fff;
  font-family: inherit;
  opacity: 0;
  pointer-events: none;
  transition: opacity 420ms ease;
}
.vega-ending[hidden] {
  display: none !important;
}
.vega-ending[data-visible="true"] {
  opacity: 1;
  pointer-events: auto;
}
.vega-ending__content {
  width: min(38rem, 100%);
  text-align: center;
  text-shadow: 0 2px 16px rgb(0 0 0 / 72%);
  transform: translateY(10px);
  transition: transform 420ms ease;
}
.vega-ending[data-visible="true"] .vega-ending__content {
  transform: translateY(0);
}
.vega-ending__rule {
  width: 44px;
  height: 1px;
  margin: 0 auto 22px;
  border: 0;
  background: currentColor;
  opacity: .72;
}
.vega-ending__heading {
  margin: 0;
  font-size: clamp(2rem, 7cqh, 4.75rem);
  font-weight: 500;
  letter-spacing: .12em;
  line-height: 1.08;
}
.vega-ending__message {
  max-width: 34rem;
  margin: 18px auto 0;
  font-size: clamp(.9rem, 2.4cqh, 1.1rem);
  line-height: 1.7;
  opacity: .78;
}
.vega-ending__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: clamp(28px, 5cqh, 48px);
}
.vega-ending__button {
  min-width: 8.5rem;
  min-height: 44px;
  padding: 10px 22px;
  border: 1px solid rgb(255 255 255 / 42%);
  border-radius: 999px;
  background: rgb(8 13 26 / 34%);
  color: inherit;
  font: inherit;
  font-size: .9rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
}
.vega-ending__button:hover,
.vega-ending__button:focus-visible {
  border-color: rgb(255 255 255 / 86%);
  background: rgb(255 255 255 / 14%);
  outline: none;
}
.vega-ending__button:disabled {
  cursor: wait;
  opacity: .5;
}
@media (prefers-reduced-motion: reduce) {
  .vega-ending,
  .vega-ending__content {
    transition-duration: .001ms;
  }
}
`,g=(e,n,a)=>{const t=e.createElement(n);return t.className=a,t},B=(e,n,a)=>{const t=e.ownerDocument.defaultView,s=t?.requestAnimationFrame?.bind(t)??(c=>t?.setTimeout(()=>c(Date.now()),16)??0),o=t?.cancelAnimationFrame?.bind(t)??(c=>t?.clearTimeout(c));let i=!0,d=0;const l=()=>{!i||n.aborted||(a(),d=s(l))};d=s(l);const u=()=>{i&&(i=!1,o(d))};return n.addEventListener("abort",u,{once:!0}),()=>{n.removeEventListener("abort",u),u()}},G=async(e,n)=>{if(e.state.finished=!1,n){await n.start();return}e.player.pause(),await e.player.replayFromStartTo(0),e.state.finished=!1,e.player.resume(),await e.player.play()},U=(e,n,a)=>{const t=e.ownerDocument,s=t.createElement("style");s.textContent=N;const o=g(t,"section","vega-ending");o.dataset.visible="false",o.hidden=!0,o.setAttribute("aria-label",a.heading??"The End");const i=g(t,"div","vega-ending__content"),d=g(t,"hr","vega-ending__rule"),l=g(t,"h2","vega-ending__heading");if(l.textContent=a.heading??"The End",l.tabIndex=-1,i.append(d,l),a.message){const r=g(t,"p","vega-ending__message");r.textContent=a.message,i.append(r)}const u=n.services(O);let c,b;const _=g(t,"div","vega-ending__actions"),p=[];let v=!1;const T=async r=>{if(!v){v=!0;for(const m of p)m.disabled=!0;try{await r()}finally{v=!1;for(const m of p)m.disabled=!1}}};if(a.replay!==!1){const r=g(t,"button","vega-ending__button");r.type="button",r.textContent=a.replayLabel??"Replay",c=r,r.addEventListener("click",()=>{T(()=>G(n,u))}),p.push(r),_.append(r)}if(a.returnToTitle!==!1&&typeof u?.returnToTitle=="function"){const r=g(t,"button","vega-ending__button");r.type="button",r.textContent=a.titleLabel??"Title",b=r,r.addEventListener("click",()=>{T(()=>(n.state.finished=!1,u.returnToTitle?.()))}),p.push(r),_.append(r)}p.length&&i.append(_),o.append(i),e.append(s,o);let y=!1;const x=()=>{const r=!!n.state.finished;if(r!==y&&(y=r,o.hidden=!r,o.dataset.visible=String(r),n.root.dataset.vegaEnding=r?"true":"false",r)){const m=u?.snapshot().settings.uiLanguage,P=m&&m!=="auto"?m:t.documentElement.lang||t.defaultView?.navigator.language||"en",[w,V,C]=H(P);l.textContent=a.heading??w,o.setAttribute("aria-label",a.heading??w),c&&(c.textContent=a.replayLabel??V),b&&(b.textContent=a.titleLabel??C),(p[0]??l).focus({preventScroll:!0})}},L=B(e,n.signal,x);return x(),{dispose(){L(),delete n.root.dataset.vegaEnding,o.remove(),s.remove()}}},W=(e={})=>k({manifest:{id:"haneoka.vega-ending",name:"Vega Ending",version:"0.1.0",apiVersion:1,description:"Configurable story completion presentation",capabilities:["ui-slot"]},setup(n){n.contribute("ui-slot",{id:"ending",name:"Ending presentation",slot:"after-stage",hostKind:"web",mount:(a,t)=>U(a,t,e)})}}),M=Object.freeze({bbcode:{id:"haneoka.vega-richtext-bbcode",name:"Vega Rich Text — BBCode",load:()=>h(()=>import("./index-CqBozPzQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)},html:{id:"haneoka.vega-richtext-html",name:"Vega Rich Text — HTML",load:()=>h(()=>import("./index-C9Nk7Xyz.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8,9]),import.meta.url)},latex:{id:"haneoka.vega-richtext-latex",name:"Vega Rich Text — LaTeX",load:()=>h(()=>import("./index-DKB7ua-Y.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9]),import.meta.url)},markdown:{id:"haneoka.vega-richtext-markdown",name:"Vega Rich Text — Markdown",load:()=>h(()=>import("./index-BI2g8OlC.js"),__vite__mapDeps([12,2,3,4,5,6,7,8,9,10,1]),import.meta.url)},typst:{id:"haneoka.vega-richtext-typst",name:"Vega Rich Text — Typst",load:()=>h(()=>import("./index-SdIUEuyX.js"),__vite__mapDeps([13,6,1,2,3,4,5,7,8,9]),import.meta.url)}}),X=({id:e,name:n,load:a})=>k({manifest:{id:e,name:n,version:"0.1.0",apiVersion:1,description:`${n} lazy format adapter`,dependencies:{"haneoka.vega-richtext":"^0.1.0"},capabilities:["rich-text"]},async setup(t){return(await a()).default.setup(t)}}),f=(e,n,a=!0)=>({manifest:e.manifest,setup(t){const s={...t,contribute:((o,i,d)=>{if(o!=="theme")return t.contribute(o,i,d);if(!a)return()=>{};const l=i;return t.contribute("theme",Object.freeze({...l,default:l.id===n}),d)})};return e.setup(s)}}),ue=(e={})=>{const n=e.renderer??"three",a=e.theme??(e.shell===!1?"portable":"haneoka");if(a==="haneoka"&&e.shell===!1)throw new TypeError("The Haneoka theme requires the portable UI and default shell");const t=[],s=e.richText&&typeof e.richText=="object"?e.richText:void 0;if(n==="three"&&t.push(I({...a==="haneoka"?{postTextureAssets:F}:{}})),(a==="webgal"||n==="three"&&e.webgal!==!1)&&t.push(f(z({enableTheme:a==="webgal",enableCommands:n==="three"}),a==="webgal"?"webgal":void 0,a==="webgal")),(a==="portable"||a==="haneoka"||a==="webgal"||s!==void 0)&&t.push(D()),s)for(const i of["bbcode","html","latex","markdown","typst"])s[i]&&t.push(X(M[i]));a==="portable"&&t.push(f(E,"portable")),(a==="haneoka"||a==="webgal")&&t.push(f(E)),e.composite!==!1&&n==="three"&&t.push(R()),e.cubism&&t.push(A({adapter:e.cubism})),e.spine&&t.push(S({adapter:e.spine})),e.shell!==!1&&t.push(f(j(typeof e.shell=="object"?e.shell:{}),void 0,a!==!1)),a==="haneoka"&&t.push(f(q,"haneoka")),e.ending!==!1&&t.push(W(e.ending&&typeof e.ending=="object"?e.ending:{})),t.push(...(e.additionalPlugins??[]).map(i=>f(i,a===!1?void 0:a,a!==!1)));const o=new Set;for(const i of t){if(o.has(i.manifest.id))throw new Error(`Vega full preset contains duplicate plugin ${i.manifest.id}`);o.add(i.manifest.id)}return Object.freeze(t)};export{ue as createVegaFullPreset};
