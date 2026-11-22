import{a as U}from"./chunk-XS5FZPZ5.js";import{f as j,g as K}from"./chunk-YZG4HCPP.js";import"./chunk-UKLRKQTE.js";import"./chunk-IR5XPXYH.js";import{U as F,r as M}from"./chunk-FGXXSPGV.js";import"./chunk-7SZRL6FY.js";var H="portable",G=String.raw`
[data-vega-theme="portable"] {
  color: #fff;
  color-scheme: dark;
  font-family: "A-OTF Shin Go Pro", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans CJK JP", Inter, ui-sans-serif, system-ui, sans-serif;
  --vega-portable-line: rgb(218 241 255 / 28%);
  --vega-portable-surface: rgb(7 21 40 / 78%);
  --vega-portable-accent: #87c7ff;
  --vega-portable-text-shadow: 0 1px 3px rgb(0 0 0 / 95%), 0 0 6px rgb(0 0 0 / 72%);
}
[data-vega-theme="portable"][data-vega-high-contrast="true"] {
  --vega-portable-line: currentColor;
  --vega-portable-surface: #071528;
}
[data-vega-theme="portable"] .vega-portable-ui {
  position: absolute;
  inset: 0;
  color: #fff;
  pointer-events: none;
  text-shadow: var(--vega-portable-text-shadow);
}
[data-vega-theme="portable"] .vega-portable-ui [hidden] {
  display: none !important;
}
[data-vega-theme="portable"] .vega-portable-dialogue {
  position: absolute;
  inset: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  pointer-events: auto;
}
[data-vega-theme="portable"] .vega-portable-dialogue::before {
  position: absolute;
  bottom: -6.111111cqh;
  left: 50%;
  width: calc(100% + 74.074074cqh);
  height: 32.962963cqh;
  background: linear-gradient(
    180deg,
    rgb(24 18 41 / 0%) 0%,
    rgb(24 18 41 / 4.39%) 10%,
    rgb(24 18 41 / 10.7%) 20%,
    rgb(24 18 41 / 18.12%) 30%,
    rgb(24 18 41 / 26.36%) 40%,
    rgb(24 18 41 / 34.86%) 50%,
    rgb(24 18 41 / 43.37%) 60%,
    rgb(24 18 41 / 51.88%) 70%,
    rgb(24 18 41 / 59.3%) 80%,
    rgb(24 18 41 / 65.33%) 90%,
    rgb(24 18 41 / 70%) 100%
  );
  content: "";
  pointer-events: none;
  transform: translateX(-50%);
}
[data-vega-theme="portable"] .vega-portable-dialogue[data-window="center"] {
  inset: 0;
}
[data-vega-theme="portable"] .vega-portable-dialogue[data-window="center"]::before {
  top: 50%;
  bottom: auto;
  width: 100%;
  height: 18.518519cqh;
  background: rgb(0 0 0 / 49.02%);
  transform: translate(-50%, -50%);
}
[data-vega-theme="portable"] .vega-portable-dialogue[data-window="psych"]::before {
  right: auto;
  bottom: 4.62963cqh;
  width: 125cqh;
  height: 28.703704cqh;
  background:
    linear-gradient(90deg, rgb(114 181 255 / 25%), rgb(190 248 236 / 18%) 72%, transparent),
    rgb(19 14 36 / 74%);
  transform: translateX(-50%);
}
[data-vega-theme="portable"] .vega-portable-speaker {
  position: absolute;
  bottom: 21.759259cqh;
  left: calc(50% - 56.111111cqh);
  display: flex;
  width: max-content;
  min-width: 18.518519cqh;
  max-width: 74.074074cqh;
  height: 5.555556cqh;
  box-sizing: border-box;
  align-items: center;
  overflow: visible;
  padding: 0 9.027778cqh 0 2.256944cqh;
  background: linear-gradient(
    90deg,
    rgb(114 181 255 / 40%) 0%,
    rgb(198 255 234 / 27.45%) 69.65%,
    rgb(198 255 234 / 0%) 100%
  );
  font-size: 3.333333cqh;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}
[data-vega-theme="portable"] .vega-portable-text {
  position: absolute;
  bottom: .176852cqh;
  left: calc(50% - 54.749074cqh);
  width: 111.111111cqh;
  height: 18.518519cqh;
  overflow: hidden;
  font-size: calc(3.333333cqh * var(--vega-text-size, 1) * var(--vega-dialogue-font-scale, 1));
  font-weight: 400;
  line-height: 1.2;
  white-space: pre-wrap;
}
[data-vega-theme="portable"] .vega-portable-rich-text ruby {
  ruby-position: over;
}
[data-vega-theme="portable"] .vega-portable-rich-text rt {
  font-size: .46em;
  font-weight: 700;
  line-height: 1;
}
[data-vega-theme="portable"] .vega-portable-dialogue[data-window="center"] .vega-portable-speaker {
  display: none;
}
[data-vega-theme="portable"] .vega-portable-dialogue[data-window="center"] .vega-portable-text {
  top: 50%;
  bottom: auto;
  left: 50%;
  display: flex;
  width: 111.111111cqh;
  height: 18.518519cqh;
  align-items: center;
  font-size: calc(3.703704cqh * var(--vega-text-size, 1) * var(--vega-dialogue-font-scale, 1));
  transform: translate(-50%, -50%);
}
[data-vega-theme="portable"] .vega-portable-dialogue[data-window="psych"] .vega-portable-speaker {
  bottom: 26.388889cqh;
  left: calc(50% - 55.277778cqh);
  min-width: 55.555556cqh;
  height: 6.944444cqh;
}
[data-vega-theme="portable"] .vega-portable-dialogue[data-window="psych"] .vega-portable-text {
  bottom: 5.555556cqh;
  left: calc(50% - 52.5cqh);
  font-size: calc(3.703704cqh * var(--vega-text-size, 1) * var(--vega-dialogue-font-scale, 1));
}
[data-vega-theme="portable"] .vega-portable-choices {
  position: absolute;
  z-index: 1;
  top: calc(50% - 9.259259cqh);
  left: 50%;
  display: grid;
  width: min(64.814815cqh, calc(100% - 32px));
  max-height: 50cqh;
  align-content: safe center;
  gap: 1.111111cqh;
  overflow: auto;
  pointer-events: none;
  transform: translate(-50%, -50%);
}
[data-vega-theme="portable"] .vega-portable-choice {
  min-height: 11.111111cqh;
  padding: .87963cqh 3.703704cqh;
  border: 1px solid rgb(218 241 255 / 44%);
  border-radius: 5.555556cqh;
  background:
    linear-gradient(180deg, rgb(255 255 255 / 10%), transparent 42%),
    linear-gradient(90deg, rgb(79 80 155 / 88%), rgb(75 136 177 / 84%));
  box-shadow: 0 .740741cqh 2.222222cqh rgb(2 9 22 / 28%);
  color: #fff;
  font-family: inherit;
  font-size: 3.888889cqh;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-shadow: var(--vega-portable-text-shadow);
  pointer-events: auto;
}
[data-vega-theme="portable"] .vega-portable-choice:not(:disabled):hover,
[data-vega-theme="portable"] .vega-portable-choice:not(:disabled):focus-visible {
  border-color: rgb(255 255 255 / 76%);
  outline: 2px solid var(--vega-portable-accent);
  outline-offset: 2px;
}
[data-vega-theme="portable"] .vega-portable-choice:disabled {
  cursor: not-allowed;
  filter: saturate(.35);
  opacity: .48;
}
[data-vega-theme="portable"] .vega-portable-title,
[data-vega-theme="portable"] .vega-portable-location,
[data-vega-theme="portable"] .vega-portable-subtitles {
  position: absolute;
  border: 0;
}
[data-vega-theme="portable"] .vega-portable-title {
  top: 2.777778cqh;
  left: 0;
  max-width: 100%;
  padding: 1.388889cqh 7.407407cqh;
  background: linear-gradient(
    90deg,
    rgb(114 181 255 / 40%) 0%,
    rgb(190 248 236 / 35.2941%) 90.02%,
    transparent 100%
  );
  font-size: 3.333333cqh;
  font-weight: 700;
  text-align: center;
}
[data-vega-theme="portable"] .vega-portable-location {
  top: 50%;
  left: 50%;
  display: flex;
  width: min(129.62963cqh, 100%);
  height: 5.740741cqh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgb(131 196 251 / 40%) 20%,
    rgb(181 239 240 / 40%) 80%,
    transparent 100%
  );
  font-size: 3.333333cqh;
  font-weight: 700;
  transform: translate(-50%, -50%);
}
[data-vega-theme="portable"] .vega-portable-subtitles {
  right: 0;
  bottom: 5.555556cqh;
  left: 0;
  display: flex;
  min-height: 13.055556cqh;
  align-items: center;
  justify-content: center;
  padding: 0 11.111111cqh;
  background: transparent;
  font-size: 3.333333cqh;
  text-align: center;
}
[data-vega-theme="portable"] .vega-portable-subtitles[hidden] {
  display: none;
}
[data-vega-theme="portable"] .vega-portable-error,
[data-vega-theme="portable"] .vega-portable-loading {
  position: absolute;
  padding: 10px 16px;
  border: 1px solid var(--vega-portable-line);
  background: rgb(5 14 28 / 84%);
}
[data-vega-theme="portable"] .vega-portable-loading {
  top: 50%;
  left: 50%;
  min-width: min(70%, 360px);
  transform: translate(-50%, -50%);
  text-align: center;
}
[data-vega-theme="portable"] .vega-portable-loading progress {
  display: block;
  width: 100%;
  margin-top: 8px;
  accent-color: var(--vega-portable-accent);
}
[data-vega-theme="portable"] .vega-portable-error {
  top: 24px;
  right: 24px;
  left: 24px;
  border-color: rgb(255 160 166 / 58%);
  color: #ffd7da;
}
[data-vega-theme="portable"] .vega-portable-chat {
  position: absolute;
  top: 6%;
  right: 8%;
  bottom: 8%;
  width: min(410px, 84%);
  overflow: auto;
  padding: 18px;
  border: 1px solid var(--vega-portable-line);
  border-radius: 18px;
  background: rgb(244 247 252 / 94%);
  color: #182235;
  text-shadow: none;
  pointer-events: auto;
}
[data-vega-theme="portable"] .vega-portable-chat h2 { margin: 0 0 14px; font-size: 16px; }
[data-vega-theme="portable"] .vega-portable-chat-message {
  max-width: 86%;
  margin: 7px 0;
  padding: 8px 11px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 9px rgb(32 50 75 / 12%);
  white-space: pre-wrap;
}
[data-vega-theme="portable"] .vega-portable-chat-message[data-self="true"] {
  margin-left: auto;
  background: #dff7cf;
}
[data-vega-theme="portable"] .vega-portable-chat-message b { display: block; margin-bottom: 3px; font-size: 11px; }
@container (max-aspect-ratio: 4 / 3) {
  [data-vega-theme="portable"] .vega-portable-speaker {
    left: 4cqh;
    max-width: calc(100% - 8cqh);
  }
  [data-vega-theme="portable"] .vega-portable-text {
    left: 4cqh;
    width: calc(100% - 8cqh);
  }
}
@media (prefers-reduced-motion: reduce) {
  [data-vega-theme="portable"] *, [data-vega-theme="portable"] *::before, [data-vega-theme="portable"] *::after {
    scroll-behavior: auto !important;
    transition-duration: .001ms !important;
    animation-duration: .001ms !important;
  }
}
[data-vega-theme="portable"][data-vega-reduced-motion="true"] *,
[data-vega-theme="portable"][data-vega-reduced-motion="true"] *::before,
[data-vega-theme="portable"][data-vega-reduced-motion="true"] *::after {
  scroll-behavior: auto !important;
  transition-duration: .001ms !important;
  animation-duration: .001ms !important;
}
`,le=M({manifest:{id:"haneoka.vega-portable-ui",name:"Vega Portable UI",version:"0.1.0",apiVersion:1,description:"Asset-free dialogue, choice, chat, and story status presentation",capabilities:["theme","ui-slot"],dependencies:{"haneoka.vega-richtext":"^0.1.0"}},setup(e){e.contribute("theme",{id:H,name:"Vega Portable",tokens:{accent:"#87c7ff",text:"#ffffff"},cssText:G}),e.contribute("ui-slot",{id:"portable-story-ui",name:"Portable story UI",hostKind:"web",slot:"dialogue",mount:J})}}),S=new WeakMap;function O(e){let t=S.get(e);if(!t){let l=e.createElement("style");l.dataset.vegaPortableStyles="",l.textContent=G.replaceAll('[data-vega-theme="portable"]',"[data-vega-portable-ui]"),e.head.prepend(l),t={element:l,references:0},S.set(e,t)}t.references++;let o=!1;return()=>{o||(o=!0,--t.references===0&&(t.element.remove(),S.delete(e)))}}var J=(e,t)=>{let o=e.ownerDocument,l=O(o);t.root.dataset.vegaPortableUi="";let r=ee(t.services(K)),i=s(o,"section","vega-portable-ui");i.setAttribute("aria-live","polite");let n=s(o,"div","vega-portable-dialogue vega-dialogue");n.tabIndex=0,n.setAttribute("role","button"),n.setAttribute("aria-label","Advance dialogue");let d=s(o,"div","vega-portable-speaker vega-dialogue__speaker"),c=s(o,"div","vega-portable-text vega-dialogue__text");n.append(d,c);let b=U(i,t),p=s(o,"div","vega-portable-choices vega-choice-list"),v=s(o,"div","vega-portable-title"),u=s(o,"div","vega-portable-location"),f=s(o,"div","vega-portable-subtitles"),k=s(o,"div","vega-portable-loading"),E=s(o,"span"),q=o.createElement("progress");q.max=1,k.append(E,q);let m=s(o,"div","vega-portable-error");m.setAttribute("role","alert");let h=s(o,"section","vega-portable-chat"),T=o.createElement("h2"),A=s(o,"div");h.append(T,A),i.append(n,p,v,u,f,k,m,h),e.append(i);let P=j(i,{textSelector:".vega-portable-rich-text",enabled:()=>t.root.dataset.vegaWebText==="true",revision:()=>`${t.state.commandIndex}:${t.player.seekRevision}`,signal:t.signal}),C=a=>{a.stopPropagation(),P.requestAdvance(a,()=>t.actions.dispatch({type:"advance"}))},L=a=>{a.target!==n||a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),C(a))};n.addEventListener("click",C),n.addEventListener("keydown",L);let $="",z="",_=()=>{let a=t.state,x=t.root.lang||o.documentElement.lang||o.defaultView?.navigator.language||"en",w=/^ja/iu.test(x)?["会話を進める","読み込み中","メッセージ"]:/^ko/iu.test(x)?["대화 진행","불러오는 중","메시지"]:/^zh/iu.test(x)?/TW|HK|Hant/iu.test(x)?["繼續對話","正在載入","訊息"]:["继续对话","正在加载","消息"]:["Advance dialogue","Loading","Chat"];n.setAttribute("aria-label",w[0]),n.hidden=!a.talk.enabled||!a.talk.visible||(a.talk.presentation??"default")!=="default",b.update(),n.dataset.window=te(a.talk.window),c.style.setProperty("--vega-dialogue-font-scale",String(a.talk.fontScale??1)),n.style.transform=`translate(${D(a.talk.shakeX)}px, ${D(a.talk.shakeY)}px)`,d.hidden=!a.talk.speaker,R(d,a.talk.speaker),g(d,a.talk.speakerLang);let y=a.talk.textFormat?.toLowerCase(),B=!a.talk.textComplete&&(y==="latex"||y==="tex"||y==="typst"||y==="typ");r.render(c,F(a.talk.displayedText,{format:B?"plain":a.talk.textFormat,displayMode:a.talk.textDisplayMode,language:a.talk.textLang})),g(c,a.talk.textLang);let V=ae(a.choices.items,a.choices.visible);V!==$&&($=V,X(o,p,a.choices.visible?a.choices.items:[],t)),p.hidden=!a.choices.visible,v.hidden=!a.title.visible,r.render(v,a.title.text),g(v,a.title.lang),u.hidden=!a.location.visible,r.render(u,a.location.text),g(u,a.location.lang),f.hidden=!a.subtitles.visible,r.render(f,a.subtitles.text),g(f,a.subtitles.lang),k.hidden=!a.loading,E.textContent=a.preload.total?`${w[1]} ${a.preload.done} / ${a.preload.total}`:w[1],q.value=a.preload.total?Math.min(1,a.preload.done/a.preload.total):0,m.hidden=!a.error,R(m,a.error);let I=oe(a);I!==z&&(z=I,Y(o,T,A,a.chat.title||w[2],a.chat.messages),h.scrollTop=h.scrollHeight),h.hidden=!a.chat.visible},W=Q(e,t.signal,_);return _(),{dispose(){W(),b.dispose(),r.dispose(),l(),delete t.root.dataset.vegaPortableUi,P.dispose(),n.removeEventListener("click",C),n.removeEventListener("keydown",L),i.remove()}}},X=(e,t,o,l)=>{t.replaceChildren();for(let r of o){let i=s(e,"button","vega-portable-choice vega-choice-list__item");i.type="button",i.textContent=r.text,i.disabled=r.enabled===!1,i.setAttribute("aria-disabled",String(i.disabled)),g(i,r.lang),i.disabled||i.addEventListener("click",n=>{n.stopPropagation(),l.actions.dispatch({type:"choose",key:r.key})}),t.append(i)}},Y=(e,t,o,l,r)=>{t.textContent=l||"Chat",o.replaceChildren();for(let i of r){let n=s(e,"article","vega-portable-chat-message");if(n.dataset.self=String(!!i.self),i.speaker){let c=e.createElement("b");c.textContent=i.speaker,g(c,i.speakerLang),n.append(c)}let d=e.createElement("span");d.textContent=i.text||(i.stamp?`[${i.stamp}]`:""),g(d,i.textLang),n.append(d),o.append(n)}},Q=(e,t,o)=>{let l=e.ownerDocument.defaultView,r=!0,i=0,n=l?.requestAnimationFrame?.bind(l)??(p=>l?.setTimeout(()=>p(Date.now()),16)??0),d=l?.cancelAnimationFrame?.bind(l)??(p=>l?.clearTimeout(p)),c=()=>{!r||t.aborted||(o(),i=n(c))};i=n(c);let b=()=>{r&&(r=!1,d(i))};return t.addEventListener("abort",b,{once:!0}),()=>{t.removeEventListener("abort",b),b()}},s=(e,t,o="")=>{let l=e.createElement(t);return l.className=o,l},R=(e,t)=>{let o=typeof t=="string"?t:t==null?"":String(t);e.textContent!==o&&(e.textContent=o)},N=e=>e&&typeof e=="object"&&"source"in e&&typeof e.source=="string"?e.source:typeof e=="string"?e:e==null?"":String(e),Z=e=>{if(e&&typeof e=="object"&&"source"in e&&typeof e.source=="string"){let t=e;return JSON.stringify([t.format,t.source,t.displayMode,t.language])}return JSON.stringify(["adv",N(e)])},ee=e=>{let t=new WeakMap,o=new Map,l=r=>{o.get(r)?.dispose(),o.delete(r),t.delete(r)};return{render(r,i){let n=Z(i);if(t.get(r)===n)return;r.classList.add("vega-portable-rich-text");let d=o.get(r);if(e&&d?.update)try{d.update(i,{defaultFormat:"adv"}),t.set(r,n);return}catch{l(r)}else l(r);if(!e){r.removeAttribute("data-vega-rich-text-error"),r.removeAttribute("data-vega-rich-text-format"),r.textContent=N(i),t.set(r,n);return}o.set(r,e.render(r,i,{defaultFormat:"adv"})),t.set(r,n)},dispose(){for(let r of o.values())r.dispose();o.clear()}}},g=(e,t)=>{let o=typeof t=="string"?t:"";e.lang!==o&&(e.lang=o)},D=e=>typeof e=="number"&&Number.isFinite(e)?e:0,te=e=>{let t=e.toLowerCase();return t.includes("center")?"center":t.includes("psych")?"psych":"default"},ae=(e,t)=>t?e.map(({key:o,text:l,lang:r,enabled:i})=>`${o}\0${l}\0${r??""}\0${i===!1?"0":"1"}`).join(""):"",oe=e=>e.chat.visible?`${e.chat.title}\0${e.chat.messages.map(({id:t,speaker:o,text:l,stamp:r,self:i})=>`${t}\0${o??""}\0${l}\0${r??""}\0${!!i}`).join("")}`:"";export{G as VEGA_PORTABLE_UI_CSS,H as VEGA_PORTABLE_UI_THEME_ID,le as vegaPortableUiPlugin};
/*! For license information please see dist-BTX6PIBT.js.LEGAL.txt */
