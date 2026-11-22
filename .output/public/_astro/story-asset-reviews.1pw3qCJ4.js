import{i as p}from"./lit-element.Bc_VOJIm.js";import{b as s,A as o}from"./lit-html.DhDqt3I2.js";import{c as b,i as v}from"./client.BYho01b_.js";import{s as d,a as c}from"./community.DukYLvEE.js";import{s as y,c as f}from"./app-bar.CQ9Fi2qQ.js";import{c as g,r as $}from"./browse.DDmaNTY0.js";import{b as w,a as T,c as k,v as q}from"./collection-view.C0Iap7sK.js";import{t as C}from"./tile.DFwS0rEz.js";import{s as U}from"./controls.BCr1YKFS.js";import{i as l}from"./icon.BSt8MVsq.js";import{L as x}from"./lazy-images.2hwWuBaG.js";import{l as S,e as N,a as R}from"./state.Ck623oKm.js";import{m as K}from"./modal.D-GY7Vdy.js";import{s as m}from"./snackbar.D8p2-_Nm.js";import"./image-gallery.jDvuAiLp.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./preload-helper.BlTxHScW.js";import"./community-upload.CXmClWig.js";import"./image-dimensions.lsZdhmjC.js";import"./scrollable-tabs.B0s0LWO4.js";import"./catalog.CfAhzaok.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./resource-route.BR5kLHYo.js";import"./loading-progress.C8Gf5z9T.js";import"./loading-indicator.dXh2gc3V.js";import"./circular-progress.Derl8Va3.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";/* empty css                        */import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./linear-progress.Du-QQIqh.js";/* empty css                         */import"./overlay.CAlyPMjs.js";/* empty css                        *//* empty css                        */const u=a=>a==="automatic"||a==="allow"||a==="block"?a:"review";class M extends p{static properties={locale:{},rows:{state:!0},selected:{state:!0},phase:{state:!0},busy:{state:!0},loading:{state:!0},issue:{state:!0},total:{state:!0},next:{state:!0},view:{state:!0},mode:{state:!0},attentionTotal:{state:!0},automaticTotal:{state:!0},allowedTotal:{state:!0},blockedTotal:{state:!0}};pollTimer=0;query="";loadGeneration=0;pageCursor="";pages=[];lifetime=new AbortController;images=new x;decisionKeys=new Map;stopLocale;constructor(){super(),this.locale="en",this.rows=[],this.phase="loading",this.busy=!1,this.loading=!0,this.issue="",this.total=0,this.next=null,this.view="grid",this.mode="review",this.attentionTotal=0,this.automaticTotal=0,this.allowedTotal=0,this.blockedTotal=0}createRenderRoot(){return this}t=t=>b(this.locale,`community.stories.${t}`);connectedCallback(){super.connectedCallback(),this.lifetime.signal.aborted&&(this.lifetime=new AbortController);const t=new URL(location.href).searchParams;this.query=t.get("q")||"",this.view=w(t.get("view")),this.mode=u(t.get("queue")),this.stopLocale=v().subscribe(e=>{this.locale=e.locale,this.requestUpdate()}),y("story-reviews",{value:this.query,label:this.t("searchAssets"),onInput:e=>{this.query=e,this.pageCursor="",this.pages=[],this.syncUrl(),this.refresh()}}),this.refresh()}disconnectedCallback(){this.lifetime.abort(),clearTimeout(this.pollTimer),this.stopLocale?.(),this.images.disconnect(),this.pauseMedia(),this.rows=[],this.selected=void 0,g(),f("story-reviews"),super.disconnectedCallback()}updated(){this.images.observe(this)}syncUrl(){const t=new URL(location.href);this.query?t.searchParams.set("q",this.query):t.searchParams.delete("q"),this.view==="grid"?t.searchParams.delete("view"):t.searchParams.set("view",this.view),this.mode!=="review"?t.searchParams.set("queue",this.mode):t.searchParams.delete("queue"),history.replaceState(history.state,"",t)}refresh(){this.load()}async load(){const t=++this.loadGeneration;this.loading=!0;try{const e=new URLSearchParams({q:this.query,queue:this.mode,...this.pageCursor?{before:this.pageCursor}:{}}),i=await d(`/api/v1/admin/story-asset-reviews?${e}`,{signal:this.lifetime.signal});if(t!==this.loadGeneration||this.lifetime.signal.aborted)return;this.rows=i.items,this.total=i.total,this.attentionTotal=i.pendingTotal,this.automaticTotal=i.automaticTotal,this.allowedTotal=i.allowedTotal,this.blockedTotal=i.blockedTotal,this.next=i.next,this.phase="ready",this.dispatchEvent(new CustomEvent("admin-review-count",{detail:i.pendingTotal}))}catch(e){if(!this.lifetime.signal.aborted&&t===this.loadGeneration){this.rows=[],this.selected=void 0,this.phase="error";const i=e instanceof c&&[401,403].includes(e.status);this.issue=this.t(`errors.${i?"forbidden":"service_unavailable"}`),i&&this.dispatchEvent(new CustomEvent("admin-access-denied"))}}finally{t===this.loadGeneration&&(this.loading=!1,clearTimeout(this.pollTimer),this.automaticTotal&&!this.lifetime.signal.aborted&&document.visibilityState==="visible"&&(this.pollTimer=window.setTimeout(()=>this.refresh(),5e3)))}}pauseMedia=t=>{this.querySelectorAll("audio,video").forEach(e=>{e!==t?.currentTarget&&e.pause()})};open(t){this.pauseMedia(),this.selected=t}async decide(t,e){if(this.busy||this.loading)return;this.busy=!0;const i=`${t.id}:${t.reviewToken}:${e}`,r=this.decisionKeys.get(i)||crypto.randomUUID();this.decisionKeys.set(i,r);try{await d(`/api/v1/admin/story-asset-reviews/${t.id}/decision`,{method:"POST",signal:this.lifetime.signal,headers:{"Idempotency-Key":r},body:JSON.stringify({decision:e,expectedStatus:t.status,expectedToken:t.reviewToken})}),this.decisionKeys.delete(i),this.pauseMedia(),this.selected=void 0,await this.load(),m(this.t("reviewed"))}catch(n){if(this.lifetime.signal.aborted)return;const h=n instanceof c&&n.status===409;h&&(this.decisionKeys.delete(i),this.selected=void 0,await this.load()),m(this.t(h?"reviewChanged":"errors.service_unavailable"))}finally{this.busy=!1}}mediaKind(t){return t.mediaType.startsWith("audio/")?"audio":t.mediaType.startsWith("video/")?"video":"image"}mediaIcon(t){return t.mediaType.startsWith("audio/")?l("graphic_eq",40):l("play_circle",40)}size(t){return new Intl.NumberFormat(this.locale,{style:"unit",unit:t.bytes<1024**2?"kilobyte":"megabyte",unitDisplay:"narrow",maximumFractionDigits:1}).format(t.bytes/(t.bytes<1024**2?1024:1024**2))}metadata(t){return[this.t(`assetTypes.${this.mediaKind(t)}`),t.width&&t.height?`${t.width} × ${t.height}`:"",this.size(t)].filter(Boolean).join(" · ")}actions(t){return t.automatic?s`
        <span class="chip">${this.t("automaticReview")}</span>
      `:s`
      <button
        class="button button--text"
        aria-label=${`${this.t("reject")} ${t.fileName}`}
        ?disabled=${this.busy||this.loading||t.status==="block"}
        @click=${()=>void this.decide(t,"block")}
      >
        ${this.t("reject")}
      </button>
      <button
        class="button button--tonal"
        aria-label=${`${this.t("approve")} ${t.fileName}`}
        ?disabled=${this.busy||this.loading||t.status==="allow"}
        @click=${()=>void this.decide(t,"allow")}
      >
        ${this.t("approve")}
      </button>
    `}results(){return this.phase==="loading"?S(this.t("loading")):this.phase==="error"?N(this.issue,this.t("retry"),()=>this.refresh()):this.rows.length?this.view==="list"?T(this.rows.map(t=>({id:t.id,title:t.fileName,subtitle:this.metadata(t),image:t.thumbnailUrl||void 0,media:t.thumbnailUrl?void 0:this.mediaIcon(t),onOpen:()=>this.open(t)}))):this.view==="table"?k(this.t("review"),[this.t("reviewColumns.file"),this.t("reviewColumns.type"),this.t("reviewColumns.size"),this.t("actions")],this.rows.map(t=>[s`
            <button class="button button--text admin-story-asset-file" @click=${()=>this.open(t)}>
              ${t.thumbnailUrl?s`
                      <img src=${t.thumbnailUrl} alt="" loading="lazy" decoding="async" width="64" height="48" />
                    `:this.mediaIcon(t)}
              <span>${t.fileName}</span>
            </button>
          `,this.t(`assetTypes.${this.mediaKind(t)}`),this.size(t),s`
            <div class="cluster">${this.actions(t)}</div>
          `])):s`
      <div class="collection collection--story">
        ${this.rows.map(t=>s`
            <article class="surface admin-story-asset">
              ${C({title:t.fileName,subtitle:this.metadata(t),label:t.fileName,image:t.thumbnailUrl||"",placeholder:this.mediaIcon(t),aspectRatio:"4 / 3",fit:"contain",mediaOverlay:this.mediaKind(t)==="video"?s`
                        <span class="admin-story-asset-play">${l("play_circle",40)}</span>
                      `:o,onOpen:()=>this.open(t)})}
              ${this.mediaKind(t)==="audio"?s`
                      <audio
                        controls
                        preload="none"
                        aria-label=${t.fileName}
                        src=${t.contentUrl}
                        @play=${this.pauseMedia}
                      ></audio>
                    `:o}
              <div class="admin-story-asset-actions">${this.actions(t)}</div>
            </article>
          `)}
      </div>
    `:R({title:this.t(this.mode==="automatic"?"automaticEmpty":this.mode==="review"?"reviewEmpty":"reviewHistoryEmpty"),icon:"verified"})}render(){const t=this.selected;return s`
      ${$({count:{value:this.phase==="loading"?null:this.total,label:this.t("review")},heading:{title:this.t("review")},controls:s`
          ${U({label:this.t("review"),value:this.mode,onSelect:e=>{this.pauseMedia(),this.selected=void 0,this.mode=u(e),this.pages=[],this.pageCursor="",this.syncUrl(),this.refresh()},options:[{value:"review",label:`${this.t("needsReview")} ${this.attentionTotal}`},{value:"automatic",label:`${this.t("automaticReview")} ${this.automaticTotal}`},{value:"allow",label:`${this.t("reviewAllowed")} ${this.allowedTotal}`},{value:"block",label:`${this.t("reviewBlocked")} ${this.blockedTotal}`}]})}
          <button
            class="button button--text"
            ?disabled=${!this.pages.length||this.loading||this.busy}
            @click=${()=>{this.pageCursor=this.pages.pop()||"",this.refresh()}}
          >
            ${this.t("previous")}
          </button>
          <button
            class="button button--text"
            ?disabled=${!this.next||this.loading||this.busy}
            @click=${()=>{this.pages.push(this.pageCursor),this.pageCursor=this.next,this.refresh()}}
          >
            ${this.t("next")}
          </button>
        `,modes:q(this.locale,this.view,e=>{this.view=e,this.syncUrl()}),results:s`
          <div aria-busy=${String(this.loading)}>${this.results()}</div>
        `})}
      ${t?s`
              <dialog
                class="dialog admin-story-asset-dialog"
                aria-label=${t.fileName}
                ${K(()=>{this.busy||(this.selected=void 0)})}
              >
                <div class="dialog__body stack">
                  <h2>${t.fileName}</h2>
                  ${t.mediaType.startsWith("audio/")?s`
                          <audio
                            controls
                            preload="metadata"
                            aria-label=${t.fileName}
                            src=${t.contentUrl}
                            @play=${this.pauseMedia}
                          ></audio>
                        `:t.mediaType.startsWith("video/")?s`
                            <video
                              controls
                              playsinline
                              preload="metadata"
                              poster=${t.thumbnailUrl||o}
                              src=${t.contentUrl}
                              @play=${this.pauseMedia}
                            ></video>
                          `:s`
                            <image-gallery
                              locale=${this.locale}
                              title=${t.fileName}
                              .images=${[{id:t.id,source:t.contentUrl,label:t.fileName}]}
                            ></image-gallery>
                          `}
                </div>
                <div class="dialog__actions">
                  <button
                    class="button button--text"
                    ?disabled=${this.busy}
                    @click=${()=>{this.pauseMedia(),this.selected=void 0}}
                  >
                    ${this.t("cancel")}
                  </button>
                  ${this.actions(t)}
                </div>
              </dialog>
            `:o}
    `}}customElements.define("story-asset-reviews",M);export{M as StoryAssetReviews};
