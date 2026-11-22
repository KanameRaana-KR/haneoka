import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import{i as h}from"./lit-element.Bc_VOJIm.js";import{b as o,A as p}from"./lit-html.DhDqt3I2.js";import{h as u}from"./hydrate-workspace.CqzYTlrg.js";import{r as m}from"./page-data.CoUysx63.js";import{s as a}from"./sonolus.DPC9YePd.js";import{d,s as n}from"./interface-route.C7eSW2gB.js";import{a as b}from"./resource-route.BR5kLHYo.js";import{r as g}from"./release-server.j-atVW2C.js";import{p as f,u as v}from"./catalog.CfAhzaok.js";import{r as y}from"./detail-section-heading.BWPPd7ek.js";import{t as $}from"./tile.DFwS0rEz.js";import{i as k}from"./controls.BCr1YKFS.js";import{i as l}from"./icon.BSt8MVsq.js";import{l as L}from"./state.Ck623oKm.js";import{L as _}from"./lazy-images.2hwWuBaG.js";import{s as S}from"./snackbar.D8p2-_Nm.js";import{c}from"./client.BYho01b_.js";/* empty css                         */import"./content-policy-browser.sJlSzFcH.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./spoiler-content.Ir13N6R6.js";import"./request-scope.N4apwAcW.js";import"./content-release.T5Qse4HZ.js";import"./locales.DtpYD_uK.js";import"./temporary-public-routing.BsxzEC6B.js";import"./loading-progress.C8Gf5z9T.js";import"./preload-helper.BlTxHScW.js";import"./loading-indicator.dXh2gc3V.js";import"./image-dimensions.lsZdhmjC.js";import"./circular-progress.Derl8Va3.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";/* empty css                        */import"./linear-progress.Du-QQIqh.js";const x={"zh-CN":"zhs","zh-TW":"zht",ja:"ja",en:"en",ko:"ko"};class C extends h{static properties={locale:{type:String},levels:{state:!0},playlists:{state:!0},banner:{state:!0}};images=new _;constructor(){super(),this.locale="ja",this.levels=null,this.playlists=null,this.banner=""}createRenderRoot(){return this}connectedCallback(){const t=m(this);t?.schema==="haneoka-sonolus-hub-page-v1"&&this.preparePage(t),super.connectedCallback(),this.locale=f(this.locale),t||this.load()}preparePage(t){this.banner=this.path(String(t.info.banner?.url||"")),this.levels=this.sections(t.levels,"cover"),this.playlists=this.sections(t.playlists,"thumbnail")}update(t){this.hasAttribute("data-prerendered")&&(u(this.render(),this,this.renderOptions),this.removeAttribute("data-prerendered")),super.update(t)}disconnectedCallback(){this.images.disconnect(),super.disconnectedCallback()}updated(){this.images.observe(this)}text(t,s){return c(this.locale,`catalog.sonolus.${t}`,s)}localize(t){const s=String(t??"");if(!s.startsWith("##LOCALIZE:"))return s;try{const e=JSON.parse(s.slice(11));return e[x[this.locale]??"en"]||e.en||Object.values(e)[0]||""}catch{return s}}path(t){return t?d(t):""}sections(t,s){return(Array.isArray(t.sections)?t.sections:[]).map(r=>({title:String(r.title||""),items:(Array.isArray(r.items)?r.items:[]).map(i=>({name:String(i.name||""),title:this.localize(i.title),subtitle:this.localize(i.artists??i.subtitle),rating:typeof i.rating=="number"?i.rating:void 0,image:this.path(String(i[s]?.url||""))}))}))}async load(){const t=async i=>(await fetch(i,{headers:{accept:"application/json"}})).json(),[s,e,r]=await Promise.all([t("/sonolus/info"),t("/sonolus/levels/info"),t("/sonolus/playlists/info")]);this.banner=this.path(String(s.banner?.url||"")),this.levels=this.sections(e,"cover"),this.playlists=this.sections(r,"thumbnail")}openLink(t,s){return`${a()}/${t}/${encodeURIComponent(s)}`}sectionLabel(t){return t==="#RANDOM"?this.text("random","Random"):t==="#NEWEST"?this.text("newest","Newest"):this.localize(t)}grid(t,s){return o`
      <section class="detail-section">
        ${y(`${t==="levels"?this.text("levels","Charts"):this.text("playlists","Playlists")} / ${this.sectionLabel(s.title)}`,t==="levels"?"songs":"works")}
        <div class="collection collection--song">
          ${s.items.map(e=>$({kind:"song",title:e.title,subtitle:e.subtitle,label:e.title,image:e.image,href:this.openLink(t,e.name),marks:e.rating!==void 0?[{at:"bottom-start",text:`Lv.${e.rating}`}]:[]}))}
        </div>
      </section>
    `}async copy(){await navigator.clipboard?.writeText(new URL(n()).host),S(this.text("copied","Copied"))}render(){return o`
      <section class="page sonolus-hub stack">
        <header class="sonolus-hub__hero surface">
          ${this.banner?o`<img class="sonolus-hub__banner" src=${this.banner} alt="" width="960" height="320" decoding="async" />`:o`<span class="sonolus-hub__banner"></span>`}
          <div class="sonolus-hub__actions">
            <img src="/images/sonolus-icon.png" alt="" width="40" height="40" />
            <code class="sonolus-hub__server">${new URL(n()).host}</code>
            ${k({icon:"content_copy",label:this.text("copy","Copy server address"),onClick:()=>void this.copy()})}
            <a class="button sonolus-hub__open" href=${a()} target="_blank" rel="noreferrer">
              ${l("open_in_new",18)}${this.text("open","Open in Sonolus")}
            </a>
            <a class="button button--tonal" href=${b(g(),this.locale)}>${c(this.locale,"community.charts.title")}</a>
          </div>
        </header>
        ${this.levels===null?L(v(this.locale,"common.states.loading")):o`
              ${this.levels.map(t=>this.grid("levels",t))}
              ${(this.playlists??[]).map(t=>this.grid("playlists",t))}
            `}
        ${this.levels===null?p:o`<div class="sonolus-hub__more">
              <button class="button button--tonal" type="button" @click=${()=>void this.load()}>
                ${l("shuffle",18)}${this.text("shuffle","Shuffle")}
              </button>
            </div>`}
      </section>
    `}}customElements.get("sonolus-hub")||customElements.define("sonolus-hub",C);
