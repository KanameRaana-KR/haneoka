const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/circular-progress.Derl8Va3.js","_astro/delegate.qnlMPWy4.js","_astro/lit-element.Bc_VOJIm.js","_astro/lit-html.DhDqt3I2.js","_astro/progress.BYlJSdrk.js","_astro/model-preview.BtUk3in4.js","_astro/preload-helper.BlTxHScW.js","_astro/loading-indicator.dXh2gc3V.js","_astro/viewport-render-loop.DWx2noHu.js"])))=>i.map(i=>d[i]);
import{_ as w}from"./preload-helper.BlTxHScW.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import{c as q}from"./content-request.DQ1rIr6o.js";import{n as b}from"./document-url.BFFpyWb5.js";import{R as C}from"./request-scope.N4apwAcW.js";import{i as I}from"./lit-element.Bc_VOJIm.js";import{A as v,b as c}from"./lit-html.DhDqt3I2.js";import{h as N}from"./hydrate-workspace.CqzYTlrg.js";import{r as $}from"./page-data.CoUysx63.js";import{l as A,e as z,a as T}from"./state.Ck623oKm.js";import{p as o,t as g,u as d,b as _,a as k,c as U}from"./catalog.CfAhzaok.js";import{l as L}from"./locales.BBzJ2au5.js";import{b as O,e as B,d as S,s as V,a as M}from"./app-bar.CQ9Fi2qQ.js";import{v as W}from"./collection-view.C0Iap7sK.js";import{i as m}from"./icon.BSt8MVsq.js";import{a as F,b as E,c as K}from"./asset-item.BCdeKzeN.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./interface-route.C7eSW2gB.js";import"./document-address.dywC0kBs.js";import"./content-policy-browser.sJlSzFcH.js";import"./content-release.T5Qse4HZ.js";import"./loading-progress.C8Gf5z9T.js";import"./client.BYho01b_.js";import"./temporary-public-routing.BsxzEC6B.js";import"./locales.DtpYD_uK.js";import"./linear-progress.Du-QQIqh.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";import"./release-server.j-atVW2C.js";import"./resource-route.BR5kLHYo.js";import"./controls.BCr1YKFS.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./lazy-images.2hwWuBaG.js";import"./loading-indicator.dXh2gc3V.js";/* empty css                        *//* empty css                       */function D(l){const e=l.split(".").pop()?.toLowerCase()||"";return["png","jpg","jpeg","webp","gif","svg"].includes(e)?"image":["mp3","wav","ogg","m4a"].includes(e)?"audio":["mp4","webm"].includes(e)?"video":["glb","gltf"].includes(e)?"model":["json","txt","xml","csv","md","atlas"].includes(e)?"text":"binary"}const H=new Set(["en","ko","zh-Hans","zh-Hant","zh-CN","zh-TW"]);function y(l){const e=/\(([^)]+)\)(\.[^.]+)$/u.exec(l),t=e?.[1]??"";return e&&H.has(t)?{base:l.slice(0,e.index),mark:t,ext:e[2]??""}:null}function J(l){return l.replace(/\((?:en|ko|zh-Hans|zh-Hant|zh-CN|zh-TW)\)(?=\.|--|\/|$)/gu,"")}function j(l,e){const t=Object.keys(l),s=new Set(t.filter(i=>!y(i))),a=new Map;for(const i of t){const n=y(i);if(!n)continue;const h=`${n.base}${n.ext}`;if(s.has(h))continue;const p=a.get(h);p?p.push(i):a.set(h,[i])}const r=[...s].map(i=>({name:i,label:i,value:l[i]}));for(const[i,n]of a){const h=e.map(p=>n.find(f=>y(f)?.mark===p)).find(p=>p!==void 0)??n[0];r.push({name:h,label:i,value:l[h]})}return r.sort((i,n)=>i.label.localeCompare(n.label,"en",{numeric:!0}))}const P=l=>l.normalize("NFKC").toLowerCase();function R(l,e){const t=[],s=[{parts:[],node:l}];for(;s.length;){const{parts:a,node:r}=s.pop();for(const i of j(r,e)){const n=[...a,i.name];if(typeof i.value=="number"){const h=n.join("/"),p=[...a,i.label].join("/");t.push({path:h,parts:n,label:p,searchable:P(`${p}
${h}`)})}else i.value&&typeof i.value=="object"&&!Array.isArray(i.value)&&s.push({parts:n,node:i.value})}}return t.sort((a,r)=>a.label.localeCompare(r.label,"en",{numeric:!0})||a.path.localeCompare(r.path))}function G(l,e,t=[]){const s=P(e).trim().split(/\s+/u).filter(Boolean);if(!s.length)return[];const a=t.length?`${t.join("/")}/`:"";return l.filter(r=>(!a||r.path.startsWith(a))&&s.every(i=>r.searchable.includes(i)))}const x=new WeakMap;class u extends I{static properties={tree:{state:!0},path:{state:!0},files:{state:!0},selected:{state:!0},phase:{state:!0},error:{state:!0},textPreview:{state:!0},query:{state:!0},view:{state:!0}};rows=[];previewRequest=new C;releaseSearch;sourceServer;sourceRelease;constructor(){super(),this.tree={},this.path=[],this.files=[],this.selected="",this.phase="loading",this.error="",this.textPreview="",this.query="",this.view="list"}createRenderRoot(){return this}preparePage(e,t){this.sourceServer=e.server,this.sourceRelease=e.releaseId,t?.schema==="haneoka-asset-view-v1"&&t.server===e.server&&t.releaseId===e.releaseId&&(this.path=[...t.path],this.files=t.files,this.selected=t.selected),this.applyTree(e.tree)}applyTree(e){this.tree=e;const t=o();let s=x.get(e);s||(s=new Map,x.set(e,s));let a=s.get(t);a||(a=R(this.tree,g(t)),s.set(t,a)),this.rows=a,this.phase="ready",this.rebuildVariants(this.siblingNames())}renderStaticChrome(){this.syncSearch(),this.syncIdentity(),this.syncActions()}syncActions(){O("asset-explorer",W(o(),this.view,e=>{this.view=e;try{localStorage.setItem("haneoka.assets.view.v1",this.view)}catch{}this.syncActions()}))}update(e){this.hasAttribute("data-prerendered")&&(N(this.render(),this,this.renderOptions),this.removeAttribute("data-prerendered")),super.update(e)}syncIdentity(){this.path.length||this.selected?B("asset-explorer",c`
          <div class="browse__crumbs">
            ${this.path.map((e,t)=>c`
                ${m("chevron_right",20)}
                <button type="button" class="chip" @click=${()=>this.choose(this.path.slice(0,t+1))}>
                  ${u.plainName(e)}
                </button>
              `)}${this.selected?c`
                    ${m("chevron_right",20)}
                    <span class="chip">
                      ${u.plainName(this.displayName(this.selected).split("/").at(-1)||"")}
                    </span>
                  `:v}
          </div>
        `,this):S("asset-explorer")}firstUpdated(){try{const e=localStorage.getItem("haneoka.assets.view.v1");(e==="grid"||e==="table")&&(this.view=e,this.syncActions())}catch{}}updated(){this.syncIdentity(),requestAnimationFrame(()=>{const e=document.querySelector(".top-app-bar .browse__crumbs");e&&(e.scrollLeft=e.scrollWidth)})}variants=new Map;static parseVariant(e){return y(e)}rebuildVariants(e){this.variants=new Map;const t=new Map;for(const s of e){const a=u.parseVariant(s);if(!a)continue;const r=`${a.base}${a.ext??""}`;let i=t.get(r);i||t.set(r,i=new Map),i.set(a.mark,s)}if(t.size)for(const[s,a]of t)for(const r of g(o())){if(r==="ja")break;const i=a.get(r);if(i){this.variants.set(s,i);break}}}localized(e){return this.variants.get(e)??e}displayName(e){for(const[t,s]of this.variants)if(s===e)return t;return e}onLocale=()=>{this.rows=R(this.tree,g(o())),this.rebuildVariants(this.siblingNames()),this.sync(),this.selected&&this.prepareSelected(this.selected)};connectedCallback(){const e=$(this),t=$(this,"data-view-data");e?.schema==="haneoka-asset-page-v1"&&this.preparePage(e,t),super.connectedCallback(),addEventListener("haneoka:locale-ready",this.onLocale),this.syncActions(),w(()=>import("./circular-progress.Derl8Va3.js"),__vite__mapDeps([0,1,2,3,4]));const s=b(),a=s.searchParams,i=(s.pathname.replace(/^\/(?:(?:jp|intl|jp-cbt|intl-cbt)\/(?:ja|en|zh-TW|zh-CN|ko)\/assets|(?:ja|en|zh-TW|zh-CN|ko)\/catalog\/assets)\/?/u,"")||a.get("path")||"").split("/").filter(Boolean).map(f=>decodeURIComponent(f)),n=a.get("file")||"",h=!!t&&JSON.stringify(t.path)===JSON.stringify(i)&&t.selected===n,p=a.get("q")||"";if(h&&e)this.syncSearch(),this.selected&&this.prepareSelected(this.selected),p&&this.updateComplete.then(()=>{this.query=p,this.syncSearch()});else{const f=()=>{this.path=i,this.selected=n,this.query=p,this.syncSearch(),this.loadTree()};t&&e?this.updateComplete.then(f):f()}}syncSearch(){this.releaseSearch=V("asset-explorer",{value:this.query,label:d(o(),"common.actions.search"),onInput:e=>{this.query=e,this.sync()}})}disconnectedCallback(){removeEventListener("haneoka:locale-ready",this.onLocale),this.previewRequest.cancel(),this.releaseSearch?.(),S("asset-explorer"),M("asset-explorer"),super.disconnectedCallback()}siblingNames(){const e=this.node(this.path.slice(0,-1)),t=this.path.slice(0,-1).join("/");return e&&typeof e=="object"?Object.keys(e).map(s=>`${t}/${s}`):[]}node(e=this.path){let t=this.tree;for(const s of e){if(!t||typeof t!="object")return;t=t[s]}return t}static plainName(e){return J(e)}entries(e){const t=this.node(e);return!t||typeof t!="object"?[]:j(t,g(o()))}async loadTree(){try{const e=$(this);if(e?.schema==="haneoka-asset-page-v1"&&this.preparePage(e),!e||this.node()===void 0){const t=new URL(_("sources/tree","",this.server()),b().origin);t.searchParams.set("projection","asset-browser-v1"),this.sourceRelease&&t.searchParams.set("release",this.sourceRelease),this.applyTree(await k(t.toString()))}typeof this.node()=="number"&&await this.loadFiles(),this.selected&&await this.prepareSelected(this.selected)}catch(e){this.phase="error",this.error=e instanceof Error?e.message:String(e)}}sync(){const e=new URLSearchParams,t=b().searchParams.get("spoiler");t!==null&&e.set("spoiler",t),this.query.trim()&&e.set("q",this.query.trim()),this.selected&&e.set("file",this.selected);const s=L(location.pathname)||o(),a=`/${this.server()}/${s}/assets/${this.path.map(encodeURIComponent).join("/")}${this.path.length?"/":""}`;history.replaceState(history.state,"",`${a}${e.size?`?${e}`:""}`)}async choose(e){this.previewRequest.cancel(),this.path=e,this.files=[],this.selected="",this.textPreview="",this.error="",this.sync(),typeof this.node()=="number"&&await this.loadFiles()}async loadFiles(){try{this.rebuildVariants(this.siblingNames());const e=this.path.join("/"),t=new URL(_(`sources/${this.localized(e)}`,"",this.server()),b().origin);this.sourceRelease&&t.searchParams.set("release",this.sourceRelease),t.searchParams.set("projection","asset-browser-v1");const s=await k(t.toString());if(this.path.join("/")!==e)return;this.files=[...(s.outputs||[]).map(a=>String(a.path||"")).filter(Boolean),...s.objectArchive?.path?[s.objectArchive.path]:[]]}catch(e){this.error=e instanceof Error?e.message:String(e)}}assetPath(e){const[t,...s]=this.localized(e).split("/").filter(Boolean);return["assets","runtime","objects"].includes(t||"")?`/${t}/${encodeURIComponent(this.server())}/${s.map(encodeURIComponent).join("/")}`:""}previewRequestUrl(e){const t=this.assetPath(e);return t?q(`${t}?asset=1${this.sourceRelease?`&release=${encodeURIComponent(this.sourceRelease)}`:""}`):""}server(){return this.sourceServer||U()}kind(e){return D(e)}async select(e){this.selected=e,this.sync(),await this.prepareSelected(e)}async prepareSelected(e){const t=this.previewRequest.begin();if(this.textPreview="",this.kind(e)==="model"&&await w(()=>import("./model-preview.BtUk3in4.js"),__vite__mapDeps([5,6,2,3,7,8])),this.kind(e)!=="text")return;const s=d(o(),"common.states.unavailable");try{const a=await fetch(this.previewRequestUrl(e),{signal:t}),r=a.ok?(await a.text()).slice(0,2e5):s;this.previewRequest.current(t)&&(this.textPreview=r)}catch{this.previewRequest.current(t)&&(this.textPreview=s)}}fileIcon(e){const t=this.kind(e);return F(t)}renderTree(e=[],t=0){const s=this.entries(e).filter(({value:a})=>typeof a=="object");return s.length?c`
      <ul class="asset-tree" role=${t?"group":"tree"}>
        ${s.map(({name:a,label:r})=>{const i=[...e,a],n=this.path.slice(0,i.length).join("/")===i.join("/"),h=n&&this.path.length===i.length;return c`
            <li role="treeitem" aria-expanded=${String(n)} aria-selected=${String(h)}>
              <button class=${`asset-tree__item${h?" is-current":""}`} style=${`--depth:${t}`} @click=${()=>this.choose(i)}>
                ${m(n?"folder_open":"folder",20)}
                <span class="md-label-large">${r}</span>
              </button>
              ${n?this.renderTree(i,t+1):v}
            </li>
          `})}
      </ul>
    `:v}renderContents(){const e=this.node(),t=this.path.length?c`
          <button class="asset-item asset-item--up" @click=${()=>this.choose(this.path.slice(0,-1))}>
            <span class="asset-item__media">${m("arrow_upward",24)}</span>
            <span class="asset-item__name md-body-medium">..</span>
          </button>
        `:v;return typeof e=="number"?c`
        ${t}
        ${this.files.map(s=>{const a=u.plainName(this.displayName(s).split("/").at(-1)||""),r=this.view!=="table"&&this.kind(s)==="image"?this.assetPath(s):"";return E({name:a,image:r,icon:this.fileIcon(s),selected:this.selected===s,meta:K(this.kind(s),o()),onOpen:()=>this.select(s)})})}
      `:c`
      ${t}
      ${this.entries(this.path).map(({name:s,label:a,value:r})=>c`
          <button class="asset-item" title=${a} @click=${()=>this.choose([...this.path,s])}>
            <span class="asset-item__media">${m(typeof r=="number"?"inventory_2":"folder",24)}</span>
            <span class="asset-item__name md-body-medium">${a}</span>
            <span class="asset-item__meta md-body-small">${(typeof r=="number"?r:Object.keys(r).length).toLocaleString(o())}</span>
          </button>
        `)}
    `}render(){const e=this.query.trim()?G(this.rows,this.query):null;return c`
      <section class="asset-workspace">
        ${this.phase==="loading"?A(d(o(),"common.states.loading")):this.phase==="error"?z(d(o(),"common.states.unavailable"),d(o(),"common.actions.retry"),()=>void this.loadTree(),this.error):c`
                  <div class=${`asset-manager${this.selected?" has-preview":""}`}>
                    <nav class="asset-manager__tree" aria-label=${d(o(),"navigation.assets")}>${this.renderTree()}</nav>
                    <div class=${`asset-manager__contents asset-manager__contents--${e?"list":this.view}`}>
                      ${e&&!e.length?T({title:d(o(),"common.states.empty"),icon:"search"}):e?e.map(t=>c`
                                  <button class="asset-item" title=${t.label} @click=${()=>this.choose([...t.parts])}>
                                    <span class="asset-item__media">${m("inventory_2",24)}</span>
                                    <span class="asset-item__name md-body-medium">${t.label.split("/").at(-1)}</span>
                                    <span class="asset-item__meta md-body-small">${t.label.split("/").slice(0,-1).join("/")}</span>
                                  </button>
                                `):this.renderContents()}
                    </div>
                    ${this.selected?this.renderPreview():v}
                  </div>
                `}
      </section>
    `}renderPreview(){const e=this.assetPath(this.selected),t=this.kind(this.selected),s=u.plainName(this.displayName(this.selected).split("/").at(-1)||"");return c`
      <section class="asset-preview">
        <header class="asset-preview__header">
          <strong class="md-title-small">${s}</strong>
          <button
            class="icon-button"
            type="button"
            aria-label=${d(o(),"common.actions.close")}
            title=${d(o(),"common.actions.close")}
            @click=${()=>{this.previewRequest.cancel(),this.selected="",this.textPreview="",this.sync()}}
          >
            ${m("close",20)}
          </button>
        </header>
        <a
          class="icon-button asset-preview__download"
          href=${e}
          download
          aria-label=${d(o(),"common.actions.download")}
          title=${d(o(),"common.actions.download")}
        >
          ${m("download",20)}
        </a>
        <div>
          ${t==="image"?c`
                  <img src=${e} alt="" />
                `:t==="audio"?c`
                    <audio src=${e} controls preload="metadata"></audio>
                  `:t==="video"?c`
                      <video src=${e} controls preload="metadata" playsinline></video>
                    `:t==="model"?c`
                        <model-preview-stage src=${this.previewRequestUrl(this.selected)}></model-preview-stage>
                      `:t==="text"?c`
                          <pre>${this.textPreview}</pre>
                        `:c`
                          <div class="notice">
                            <svg class="material-icon" width="40" height="40"><use href="/icons.svg#draft"></use></svg>
                            <p>${d(o(),"navigation.assetOther")}</p>
                          </div>
                        `}
        </div>
      </section>
    `}}customElements.define("asset-explorer",u);
