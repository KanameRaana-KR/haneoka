import"./lit-element.Bc_VOJIm.js";import{D as o,b as y}from"./lit-html.DhDqt3I2.js";import{i as u}from"./icon.BSt8MVsq.js";import{c as S}from"./client.BYho01b_.js";const g="[data-top-app-bar-actions]",$="[data-top-app-bar-identity]",f="[data-app-bar-search]",_=e=>e.replace(/-\d+$/u,"");function d(e,a,t,n){const r=e.querySelector(`[${t}="${a}"]`)||(n?[...e.querySelectorAll(`[data-app-bar-static][${t}]`)].find(c=>c.dataset.appBarOwnerKind===_(a)):null);return r?(n&&r.hasAttribute("data-app-bar-static")&&(r.replaceChildren(),r.removeAttribute("data-app-bar-static"),r.setAttribute(t,a)),r):null}let v=0,B=0;const s=()=>typeof document>"u"?null:document.querySelector(g);function h(e,a){const t=s();if(!t)return null;const n=d(t,e,"data-app-bar-owner",a);if(n||!a)return n??null;const r=document.createElement("div");return r.dataset.appBarOwner=e,r.className="top-app-bar__group",t.append(r),r}function m(e,a){const t=typeof document>"u"?null:document.querySelector($);if(!t)return null;const n=d(t,e,"data-app-bar-owner",a);if(n||!a)return n??null;const r=document.createElement("div");return r.dataset.appBarOwner=e,r.className="top-app-bar__identity-group",t.append(r),r}function i(e,a){const t=s();if(!t)return null;const n=d(t,e,"data-app-bar-search-owner",a);if(n||!a)return n??null;const r=document.createElement("div");return r.dataset.appBarSearch="true",r.dataset.appBarSearchOwner=e,r.className="top-app-bar__search-group",t.prepend(r),r}function p(e,a,t){const n=t??e.dataset.searchExpanded==="true";e.dataset.searchExpanded=String(n);const r=e.dataset.searchInputId??=`app-bar-search-${++B}`;o(A(a,r,n,()=>{p(e,a,!0),queueMicrotask(()=>e.querySelector("input")?.focus())},()=>{const l=e.querySelector("input")?.value??a.value;p(e,{...a,value:l},!1),e.querySelector(".top-app-bar__search-toggle")?.focus()}),e)}function A(e,a,t,n,r){return y`
      <form
        class="top-app-bar__search"
        role="search"
        data-search-expanded=${t}
        @keydown=${c=>{c.key!=="Escape"||!t||(c.preventDefault(),c.stopPropagation(),r())}}
        @submit=${c=>{c.preventDefault();const l=c.currentTarget.querySelector("input");e.onSubmit?.(l?.value??e.value)}}
      >
        <button
          class="icon-button top-app-bar__search-toggle"
          type="button"
          aria-controls=${a}
          aria-expanded=${t}
          aria-keyshortcuts="/"
          aria-label=${e.label}
          @click=${n}
        >
          ${u("search",24)}
        </button>
        <label class="top-app-bar__search-field" for=${a}>
          ${u("search",20)}
          <span class="sr-only">${e.label}</span>
          <input
            id=${a}
            type="search"
            aria-keyshortcuts="/"
            .value=${e.value}
            aria-label=${e.label}
            placeholder=${e.label}
            autocomplete="off"
            @input=${c=>e.onInput(c.target.value)}
          />
        </label>
        <button
          class="icon-button top-app-bar__search-close"
          type="button"
          aria-label=${e.closeLabel??S(document.documentElement.dataset.locale||"en","common.actions.close","Close")}
          @click=${r}
        >
          ${u("close",24)}
        </button>
      </form>
    `}function O(e,a,t,n){if(t&&"isConnected"in t&&t.isConnected===!1)return;const r=h(e,!0);if(r){if(n==="leading"){const c=r.parentElement?.querySelector(":scope > [data-app-bar-player]");c&&c.nextElementSibling!==r&&c.after(r)}o(a,r,{host:t})}}function T(e,a,t){if(t&&"isConnected"in t&&t.isConnected===!1)return;const n=m(e,!0);n&&o(a,n,{host:t})}function x(e){const a=m(e,!1);a&&(o(void 0,a),a.remove())}function D(e){const a=h(e,!1);a&&(o(void 0,a),a.remove())}function q(){b||(b=!0,document.addEventListener("keydown",e=>{if(e.key!=="/"||e.ctrlKey||e.metaKey||e.altKey||e.defaultPrevented||e.target?.closest("input, textarea, select, [contenteditable=''], [contenteditable='true'], dialog[open]"))return;const t=s()?.querySelector(`${f} input`),n=s()?.querySelector(`${f} .top-app-bar__search-toggle`);!t&&!n||(e.preventDefault(),t&&t.offsetParent!==null?t.focus():n?.click())}))}let b=!1;function K(e,a){q();const t=i(e,!0),n=++v;return t&&(t.dataset.appBarSearchGeneration=String(n),p(t,a)),()=>{const r=i(e,!1);r?.dataset.appBarSearchGeneration===String(n)&&r.remove()}}function L(e){i(e,!1)?.remove()}export{D as a,O as b,L as c,x as d,T as e,K as s};
