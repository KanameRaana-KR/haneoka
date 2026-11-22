const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/circular-progress.Derl8Va3.js","_astro/delegate.qnlMPWy4.js","_astro/lit-element.Bc_VOJIm.js","_astro/lit-html.DhDqt3I2.js","_astro/progress.BYlJSdrk.js"])))=>i.map(i=>d[i]);
import{_ as A}from"./preload-helper.BlTxHScW.js";import{u as C}from"./unpublished-state.CJcNYaJQ.js";import{S as h}from"./spoiler-content.Ir13N6R6.js";import{i as p,a as w}from"./content-release.T5Qse4HZ.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import{h as T}from"./hydrate-workspace.CqzYTlrg.js";import{r as d}from"./page-data.CoUysx63.js";import{n as E}from"./document-url.BFFpyWb5.js";import{i as $}from"./lit-element.Bc_VOJIm.js";import{A as m,b as o}from"./lit-html.DhDqt3I2.js";import{a as u,b as k}from"./app-bar.CQ9Fi2qQ.js";import{b as _}from"./loading-progress.C8Gf5z9T.js";import{u as H}from"./detail-navigation.DDRFcg4B.js";import{g as q}from"./resource-route.BR5kLHYo.js";import{p as g,r as c,c as f,l as x,u as a,a as N,b as V}from"./catalog.CfAhzaok.js";import{f as L}from"./releases.C4sS2qjT.js";import{c as y}from"./presentation.RLPoHaeN.js";import{O as b,c as O}from"./server-availability.q3NOHCqi.js";import{s as D}from"./controls.BCr1YKFS.js";import{l as v,e as I}from"./state.Ck623oKm.js";import"./client.BYho01b_.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./content-policy-browser.sJlSzFcH.js";import"./request-scope.N4apwAcW.js";import"./document-address.dywC0kBs.js";import"./icon.BSt8MVsq.js";/* empty css                        */import"./release-server.j-atVW2C.js";import"./cache.CqSBusMV.js";import"./fetch.D18jK1jC.js";import"./data.CTobvNqO.js";import"./definitions.Csu7nG6K.js";import"./event-song-release.Cm_gWyb9.js";import"./bushimo-circle.BaHAxlWi.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./linear-progress.Du-QQIqh.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";class F extends ${static properties={locale:{type:String},entityId:{type:String,attribute:"entity-id"},phase:{state:!0},categories:{state:!0},tips:{state:!0},mode:{state:!0},selectedCategory:{state:!0},selectedTopic:{state:!0},error:{state:!0}};request;unionHelp;unionTips;sourceServer;loading;initialViewApplied=!1;constructor(){super(),this.locale="ja",this.entityId="",this.phase="loading",this.categories=[],this.tips=[],this.mode="manual",this.selectedCategory=0,this.selectedTopic="",this.error=""}createRenderRoot(){return this}contentAccessChanged=()=>{this.request?.abort(),this.request=void 0,this.loading?.cancel(),this.unionHelp=void 0,this.unionTips=void 0,this.categories=[],this.tips=[],this.load()};connectedCallback(){addEventListener(h,this.contentAccessChanged);const t=d(this);this.locale=g(this.locale),t?.schema==="haneoka-workspace-collection-v1"&&t.resource==="help"&&this.prepareCollection(t,this.locale),super.connectedCallback(),this.hasAttribute("data-prerendered")?this.updateComplete.then(()=>this.connectHelp()):this.connectHelp()}update(t){this.hasAttribute("data-prerendered")&&(T(this.render(),this,this.renderOptions),this.removeAttribute("data-prerendered")),super.update(t)}connectHelp(){if(!this.isConnected)return;const t=E(),e=q(t.pathname);e?.source==="canonical"&&e.route.kind==="help"&&(this.entityId=e.route.id,this.sourceServer=e.route.server),this.locale=g(this.locale),Promise.all([A(()=>import("./circular-progress.Derl8Va3.js"),__vite__mapDeps([0,1,2,3,4]))]);const i=t.searchParams;this.mode=i.get("mode")==="tips"?"tips":"manual",this.selectedTopic=this.entityId||i.get("topic")||"",this.load()}disconnectedCallback(){removeEventListener(h,this.contentAccessChanged),this.request?.abort(),this.request=void 0,this.loading?.cancel(),u("help"),super.disconnectedCallback()}prepareCollection(t,e,i){this.locale=e,this.initialViewApplied||(this.initialViewApplied=!0,t.helpView&&(this.mode=t.helpView.mode,this.selectedTopic=t.helpView.topic||"")),this.prepareDocument(this.collectionDocument(t.catalogs)),this.phase="ready"}collectionDocument(t){const e=t.help.selectedServer;this.sourceServer=e,this.unionHelp=y(t.help),this.unionTips=y(t["help-tips"]);const i=new Map;for(const s of[e,...b.filter(r=>r!==e)])for(const r of c(t.help.documents[s]?.categories))i.has(String(r.categoryId))||i.set(String(r.categoryId),{...r,subcategories:[]});for(const s of this.unionHelp.items){const r=i.get(String(s.helpCategoryId));r&&r.subcategories.push(s)}return{categories:Object.fromEntries(i),loadingTips:Object.fromEntries(this.unionTips.items.map(s=>[this.unionTips.entries.get(s).key,s]))}}prepareDocument(t){this.categories=c(t.categories).sort((s,r)=>Number(s.order)-Number(r.order)),this.tips=c(t.loadingTips).sort((s,r)=>Number(s.tipId)-Number(r.tipId));const e=this.topicForId(this.categories.flatMap(s=>Array.isArray(s.subcategories)?s.subcategories:[]),this.selectedTopic),i=e?this.categories.find(s=>Array.isArray(s.subcategories)?s.subcategories.some(r=>r===e):!1):void 0;return this.selectedCategory=Number(i?.categoryId??this.categories[0]?.categoryId??0),i}topicForId(t,e){if(!e)return;const i=t.filter(n=>String(n.helpSubcategoryId??"")===e),s=this.sourceServer||f(),r=i.filter(n=>this.unionHelp?.entries.get(n)?.perServer[s]);return r.length===1?r[0]:i.length===1?i[0]:void 0}text(t){return x(t,this.locale)}async load(){const t=d(this);if(t?.schema==="haneoka-workspace-collection-v1"&&t.resource==="help"&&!this.entityId){this.prepareCollection(t,this.locale);return}this.request?.abort(),this.loading?.cancel();const e=new AbortController,i=_(a(this.locale,"common.states.loading"),{scope:"owner",signal:e.signal});this.request=e,this.loading=i,this.phase="loading",this.error="";try{let s;const r=this.sourceServer||f();if(!this.entityId&&b.includes(r)){const l=await L(["help","help-tips"],r,this.locale,{signal:e.signal});if(Object.values(l.help.sourceAvailability).every(S=>S!=="loaded"))throw new Error("Help catalog unavailable");if(e.signal.aborted||this.request!==e)return;s=this.collectionDocument(l)}else this.unionHelp=void 0,this.unionTips=void 0,s=await N(V("help","",r),{signal:e.signal});if(this.request!==e||e.signal.aborted){i.cancel();return}const n=this.prepareDocument(s);if(this.entityId){const l=this.topicForId(this.filteredEntries(),this.entityId);l&&H(this,this.text(l.title))}this.dataset.entityReady=String(!!(this.entityId&&n)),this.phase="ready",i.finish()}catch(s){if(e.signal.aborted||this.request!==e){i.cancel();return}this.phase="error",this.error=s instanceof Error?s.message:String(s),i.fail(s)}finally{this.request===e&&this.phase!=="error"&&(this.request=void 0,this.loading=void 0)}}sync(){const t=new URLSearchParams;this.mode!=="manual"&&t.set("mode",this.mode),history.replaceState(history.state,"",`${location.pathname}${t.size?`?${t}`:""}`)}filteredEntries(){if(this.mode==="tips")return this.entityId?this.tips:this.tips.filter(i=>p("help-tips",i,String(i.tipId)));const t=this.categories.find(i=>Number(i.categoryId)===this.selectedCategory),e=Array.isArray(t?.subcategories)?t.subcategories:[];return this.entityId?e:e.filter(i=>p("help",i,String(i.helpSubcategoryId)))}render(){if(this.entityId&&!w(this.mode==="tips"?"help-tips":"help",this.topicForId(this.filteredEntries(),this.entityId)||{},this.entityId))return C(this.locale);const t=this.filteredEntries();if(this.entityId){if(u("help"),this.phase==="loading")return v(a(this.locale,"common.states.loading"));if(this.phase==="error")return I(a(this.locale,"common.states.unavailable"),a(this.locale,"common.actions.retry"),()=>void this.load(),this.error);const e=this.topicForId(t,this.entityId);return o`
        <section class="help-workspace help-workspace--entity">
          <main class="help-entries">
            ${e?o`
                    <details class="help-entry" open>
                      <summary><span>${this.text(e.title)||"—"}</span></summary>
                      <div>
                        ${this.text(e.description).split(`
`).map(i=>i?o`
                                  <p>${i}</p>
                                `:o`
                                  <br />
                                `)}
                      </div>
                    </details>
                  `:m}
          </main>
        </section>
      `}return k("help",D({label:a(this.locale,"common.actions.view"),appBarSwitch:"view",value:this.mode,options:[{value:"manual",label:a(this.locale,"settings.labels.manual"),icon:"menu_book"},{value:"tips",label:a(this.locale,"settings.labels.loadingTips"),icon:"lightbulb"}],onSelect:e=>{this.mode=e,this.sync()}})),o`
      <section class="help-workspace">
        ${this.phase==="loading"?v(a(this.locale,"common.states.loading")):this.phase==="error"?I(a(this.locale,"common.states.unavailable"),a(this.locale,"common.actions.retry"),()=>void this.load(),this.error):o`
                  ${this.mode==="manual"?o`
                          <aside class="help-categories">
                            ${this.categories.map(e=>o`
                                <button
                                  class=${Number(e.categoryId)===this.selectedCategory?"selected":""}
                                  @click=${()=>this.selectedCategory=Number(e.categoryId)}
                                >
                                  <svg class="material-icon" width="20" height="20">
                                    <use href="/icons.svg#topic"></use>
                                  </svg>
                                  <span>${this.text(e.title)||"—"}</span>
                                  <small>
                                    ${Array.isArray(e.subcategories)?e.subcategories.length:0}
                                  </small>
                                </button>
                              `)}
                          </aside>
                        `:m}
                  <main class="help-entries">
                    ${t.map((e,i)=>o`
                        <details
                          class="help-entry ${e===this.topicForId(t,this.selectedTopic)?"selected":""}"
                          ?open=${e===this.topicForId(t,this.selectedTopic)||i===0&&t.length<8}
                        >
                          <summary>
                            <span>${this.text(e.title)||"—"}</span>
                            ${(()=>{const s=(this.mode==="tips"?this.unionTips:this.unionHelp)?.entries.get(e);return O(s,this.locale)})()}
                            <svg class="material-icon" width="20" height="20">
                              <use href="/icons.svg#expand_more"></use>
                            </svg>
                          </summary>
                          <div>
                            ${this.text(e.description).split(`
`).map(s=>s?o`
                                      <p>${s}</p>
                                    `:o`
                                      <br />
                                    `)}
                          </div>
                        </details>
                      `)}
                  </main>
                `}
      </section>
    `}}customElements.define("help-workspace",F);
