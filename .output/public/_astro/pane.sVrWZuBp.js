import"./lit-element.Bc_VOJIm.js";import{e as f,f as g,t as b,A as n,b as s}from"./lit-html.DhDqt3I2.js";import{t as y}from"./overlay.CAlyPMjs.js";import{i as m}from"./icon.BSt8MVsq.js";import{b as v,e as $,d as p,a as k}from"./app-bar.CQ9Fi2qQ.js";let _=0;class w extends g{owner=`takeover-${++_}`;options;saved;scheduled=!1;constructor(e){if(super(e),e.type!==b.ELEMENT)throw new Error("appBarTakeover belongs on an element")}render(e){return n}update(e,[a]){return this.options=a??void 0,this.scheduled||(this.scheduled=!0,queueMicrotask(()=>{this.scheduled=!1,this.isConnected&&this.options?this.apply(this.options):this.restore()})),n}disconnected(){this.restore()}reconnected(){this.options&&this.apply(this.options)}apply(e){const a=document.querySelector("[data-top-app-bar] h1"),d=document.querySelector("[data-top-app-bar-leading]"),o=document.querySelector("[data-top-app-bar-actions]"),u=document.querySelector("[data-top-app-bar-identity]");if(!a||!d||!o)return;if(!this.saved){const i=document.createElement("a");i.className="icon-button",i.href=location.pathname+location.search,i.dataset.entityBack="",i.innerHTML='<svg class="material-icon" width="24" height="24" aria-hidden="true"><use href="/icons.svg#arrow_back"></use></svg>',i.addEventListener("click",r=>{r.button||r.metaKey||r.ctrlKey||r.shiftKey||(r.preventDefault(),this.options?.onBack())});const h=d.querySelector("[data-nav-toggle]");let l;if(h){const r=document.createElement("div");r.className="top-app-bar__group",r.append(h),o.prepend(r),l={node:h,home:d,group:r}}d.prepend(i),this.saved={heading:a,title:a.textContent??"",lang:a.getAttribute("lang"),entityTitle:a.dataset.entityTitle,back:i,...l?{menu:l}:{},hidden:[]}}const c=this.saved;c.back.href=e.backHref??location.pathname+location.search,c.back.setAttribute("aria-label",e.backLabel);for(const i of d.querySelectorAll("[data-entity-back]"))i!==c.back&&!i.hidden&&(i.hidden=!0,c.hidden.push(i));a.textContent!==e.title&&(a.textContent=e.title),a.dataset.entityTitle="true",e.titleLanguage?a.lang=e.titleLanguage:a.removeAttribute("lang"),v(this.owner,e.actions&&e.actions!==n?e.actions:s``),e.identity&&e.identity!==n?$(this.owner,e.identity):p(this.owner);for(const i of[o,u])for(const h of i?.children??[]){const l=h;l.dataset.appBarOwner===this.owner||l===c.menu?.group||l.hidden||(l.hidden=!0,c.hidden.push(l))}}restore(){const e=this.saved;if(e){this.saved=void 0,k(this.owner),p(this.owner),e.back.remove(),e.menu&&(e.menu.home.append(e.menu.node),e.menu.group.remove());for(const a of e.hidden)a.hidden=!1;e.heading.textContent=e.title,e.entityTitle===void 0?delete e.heading.dataset.entityTitle:e.heading.dataset.entityTitle=e.entityTitle,e.lang?e.heading.lang=e.lang:e.heading.removeAttribute("lang")}}}const A=f(w);function E(t){const e=["sheet","sheet--detail",t.kind?`sheet--detail-${t.kind}`:"",t.page?"sheet--detail-page":"",t.open?"is-open":""].filter(Boolean).join(" "),a=s`
    <div class="sheet__body">${t.body}</div>
    ${t.footer?s`
            <footer class="sheet__footer">${t.footer}</footer>
          `:n}
  `;return t.page?s`
        <article
          class=${e}
          aria-label=${t.title}
          ?inert=${!t.open}
          tabindex="-1"
          data-detail-pane
          style=${t.style||n}
        >
          ${a}
        </article>
      `:s`
        <aside
          class=${e}
          role="dialog"
          aria-modal="true"
          aria-label=${typeof t.title=="string"?t.title:n}
          ${A(t.open&&!t.hideHeader?{title:typeof t.title=="string"?t.title:"",titleLanguage:t.titleLanguage,backLabel:t.backLabel,onBack:t.onClose,identity:t.leading||t.subtitle?s`${t.leading??n}${t.subtitle?s`<div class="browse__crumbs">${m("chevron_right",20)}<span>${t.subtitle}</span></div>`:n}`:n,actions:t.actions?s`${t.actions}`:n}:null)}
          ?inert=${!t.open}
          tabindex="-1"
          data-detail-pane
          style=${t.style||n}
        >
          ${a}
        </aside>
      `}class S{release;current;sync(e,a){if(e?.closest("dialog")){this.detach();return}if(!e){this.detach();return}this.current!==e&&(this.detach(),this.current=e,this.release=y(e,{onDismiss:a}))}detach(){this.release?.(),this.release=void 0,this.current=void 0}}function C(t,e,a,d,o=2){const u=s`
    <span class="detail-section-title__icon">${e}</span>
    <span class="detail-section-title__label">${t}</span>
    ${d===void 0?n:s`
            <span class="detail-section-title__count">${d}</span>
          `}
  `;return s`
    <section class="detail-section">
      ${o===2?s`
              <h2 class="detail-section-title detail-section-title--h2">${u}</h2>
            `:s`
              <h3 class="detail-section-title">${u}</h3>
            `}
      ${a}
    </section>
  `}export{S as P,A as a,C as p,E as r};
