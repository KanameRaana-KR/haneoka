import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import{i as n}from"./lit-element.Bc_VOJIm.js";import{A as s,n as r,b as e}from"./lit-html.DhDqt3I2.js";import{b as c,p as d}from"./loading-progress.C8Gf5z9T.js";import"./linear-progress.Du-QQIqh.js";import{i as l}from"./icon.BSt8MVsq.js";class p extends n{static properties={label:{},local:{type:Boolean},shell:{state:!0}};report;constructor(){super(),this.label="",this.local=!1,this.shell=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.syncReport()}disconnectedCallback(){this.report?.cancel(),this.report=void 0,super.disconnectedCallback()}updated(){this.syncReport()}syncReport(){if(!this.isConnected)return;const a=!this.local&&!this.closest("dialog")&&!!document.querySelector("[data-page-progress]");this.shell=a,this.toggleAttribute("data-shell-loading",a),a?this.report?this.report.update({stageLabel:this.label}):this.report=c(this.label):(this.report?.cancel(),this.report=void 0)}render(){return this.shell?s:e`
      <md-linear-progress ${r(d)} indeterminate aria-label=${this.label}></md-linear-progress>
    `}}typeof customElements<"u"&&!customElements.get("haneoka-loading-state")&&customElements.define("haneoka-loading-state",p);function _(t,a={}){return e`<haneoka-loading-state label=${t} ?local=${a.local}></haneoka-loading-state>`}function $(t){return e`
    <div class="notice notice--construction" role="status">
      <div class="notice__art"><img src="/images/maintenance-characters.png" alt="" decoding="async" /></div>
      <span class="notice__icon">${l(t.icon||"construction",36)}</span>
      <h2>${t.title}</h2>
      ${t.body?e`
              <p>${t.body}</p>
            `:s}
      ${t.action??s}
    </div>
  `}function v(t){return e`
    <div class="state" role="status">
      <span class="state__icon">${l(t.icon||"search_off",28)}</span>
      <p class="state__title">${t.title}</p>
      ${t.body?e`
              <p class="state__body">${t.body}</p>
            `:s}
      ${t.action?e`
              <div class="state__actions">${t.action}</div>
            `:s}
    </div>
  `}function y(t,a,i,o){return e`
    <div class="state state--error" role="alert">
      <span class="state__icon">${l("cloud_off",28)}</span>
      <p class="state__title">${t}</p>
      ${o?e`
              <p class="state__body">${o}</p>
            `:s}
      <div class="state__actions">
        <button class="button button--tonal" type="button" @click=${i}>
          ${l("refresh",18)}
          <span>${a}</span>
        </button>
      </div>
    </div>
  `}export{v as a,y as e,_ as l,$ as n};
