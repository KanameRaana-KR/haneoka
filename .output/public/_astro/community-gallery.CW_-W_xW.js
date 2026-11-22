import{_ as u}from"./preload-helper.BlTxHScW.js";import{i as y}from"./lit-element.Bc_VOJIm.js";import{A as a,i as g,b as l}from"./lit-html.DhDqt3I2.js";import{c as f}from"./client.BYho01b_.js";import{t as b}from"./overlay.CAlyPMjs.js";import{i as c}from"./icon.BSt8MVsq.js";/* empty css                        */import{c as $}from"./CommunityDocument.astro_astro_type_script_index_1_lang.CT6lnhza.js";import{l as v}from"./loading-indicator.dXh2gc3V.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";/* empty css                        */import"./document-title.DDLPQ8NX.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./page-data.CoUysx63.js";import"./content-policy-browser.sJlSzFcH.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./spoiler-content.Ir13N6R6.js";import"./request-scope.N4apwAcW.js";import"./content-release.T5Qse4HZ.js";import"./hydrate-workspace.CqzYTlrg.js";import"./community-bootstrap.08K2AxEf.js";import"./catalog.CfAhzaok.js";import"./release-server.j-atVW2C.js";import"./resource-route.BR5kLHYo.js";import"./community-viewer.C7_AH-Ek.js";import"./early-read.BpO_I76o.js";import"./game-tool-account-store.DJRCxc2T.js";import"./app-bridge.GQkWDCHi.js";import"./game-records.BcqoVowg.js";import"./game-tool-accounts.NS7OdMjO.js";import"./entity-comment-activity.BIlYsIUW.js";import"./community-comment-content.CFGmf1Kd.js";import"./community-markup.svGuDLM2.js";import"./parse.D3VWRPZL.js";/* empty css                        */import"./controls.BCr1YKFS.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./state.Ck623oKm.js";import"./loading-progress.C8Gf5z9T.js";import"./linear-progress.Du-QQIqh.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";import"./community-sticker.CPTBXKIm.js";/* empty css                      */import"./community-recommendations.9RR6w2n2.js";import"./lazy-images.2hwWuBaG.js";import"./operation-progress.BlCiIST_.js";import"./community-forum-directory.BGj_suIG.js";import"./async-region.M9pzHsiV.js";/* empty css                        *//* empty css                        */import"./community-reaction.DkoYmsxL.js";import"./community-upload.CXmClWig.js";import"./community-stamp-draft.C6aYr1nm.js";import"./community-forums.tepJ6eL5.js";import"./playlist-tracks.BLifrlXg.js";import"./song-performer.D1gPJ3l4.js";import"./provider-entity-data._K00Fr93.js";import"./provider-page-data.DnMv3Sc3.js";import"./song-performer-adornment.Dd169nPp.js";import"./catalog-relationships.Cko_f-QP.js";import"./song-display.BUM043oH.js";import"./detail-navigation.DDRFcg4B.js";import"./app-bar.CQ9Fi2qQ.js";import"./community-artwork.DoQyX7pN.js";import"./game-records.YqMN_7G0.js";import"./kr.DQfuAfK4.js";import"./facet-order.wTm3gWmx.js";import"./pane.sVrWZuBp.js";import"./scrollable-tabs.B0s0LWO4.js";import"./snackbar.D8p2-_Nm.js";const x={close:"common.actions.close",error:"common.states.error",loading:"common.states.loading",nextImage:"media.images.actions.nextImage",previousImage:"media.images.actions.previousImage",unavailable:"common.states.unavailable",video:"story.labels.video",zoom:"media.models.labels.zoom"};class _ extends y{static properties={images:{attribute:!1},locale:{},index:{state:!0},busy:{state:!0},error:{state:!0}};viewer;isVideo(t){return!!t.playbackUrl||String(t.displayMediaType||t.mediaType||"").startsWith("video/")}displaySource(t){return t.playbackUrl||t.previewUrl||t.contentUrl}updated(){for(const t of this.querySelectorAll("video"))Number(t.dataset.index)!==this.index&&t.pause()}releaseFocus;generation=0;constructor(){super(),this.images=[],this.locale="en",this.index=0,this.busy=!1,this.error=""}createRenderRoot(){return this}disconnectedCallback(){this.generation++;for(const t of this.querySelectorAll("video"))t.pause(),t.removeAttribute("src"),t.load();this.viewer?.destroy(),this.releaseFocus?.(),super.disconnectedCallback()}text(t){return f(this.locale,x[t]??t,t)}select(t){const e=this.querySelector(".community-gallery__track");e?.scrollTo({left:Math.max(0,Math.min(this.images.length-1,t))*e.clientWidth,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}async zoom(t,e){if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||e.button!==0||(e.preventDefault(),this.busy||this.viewer))return;const r=++this.generation;this.busy=!0,this.error="";const h=e.currentTarget;try{const{default:n}=await u(async()=>{const{default:s}=await import("./photoswipe.esm.CKV1Bsxh.js");return{default:s}},[]);if(!this.isConnected||this.generation!==r)return;const m=this.images.flatMap((s,o)=>this.isVideo(s)?[]:[o]),d=m.map(s=>{const o=this.images[s],p=this.querySelector(`img[data-index="${s}"]`);return{src:this.displaySource(o),width:p?.naturalWidth||o.displayWidth||o.width||1200,height:p?.naturalHeight||o.displayHeight||o.height||1500,alt:o.fileName||""}}),i=new n({dataSource:d,index:m.indexOf(t),showHideAnimationType:"fade",bgOpacity:1,trapFocus:!1,returnFocus:!1,wheelToZoom:!0,imageClickAction:"zoom",closeTitle:this.text("close"),zoomTitle:this.text("zoom"),arrowPrevTitle:this.text("previousImage"),arrowNextTitle:this.text("nextImage"),errorMsg:this.text("unavailable")});this.viewer=i,i.on("afterInit",()=>{i.element&&(this.releaseFocus=b(i.element,{onDismiss:()=>i.close(),returnFocus:h}))}),i.on("destroy",()=>{this.releaseFocus?.(),this.releaseFocus=void 0,this.viewer=void 0}),i.on("change",()=>this.select(m[i.currIndex])),i.init()}catch(n){this.error=n instanceof Error?n.message:String(n)}finally{r===this.generation&&(this.busy=!1)}}render(){return this.images.length?l`
      <section
        class="community-gallery"
        aria-label=${this.text("image")}
        style=${`--community-gallery-ratio:${$(this.images[0])}`}
      >
        <div
          class="community-gallery__track"
          @scroll=${t=>{const e=t.currentTarget;this.index=Math.round(e.scrollLeft/Math.max(e.clientWidth,1))}}
        >
          ${this.images.map((t,e)=>g(t.contentUrl,this.isVideo(t)?l`
                    <div class="community-gallery__slide community-gallery__slide--video">
                      <video
                        data-index=${e}
                        controls
                        playsinline
                        preload="none"
                        .muted=${t.mediaType==="image/gif"}
                        ?loop=${t.mediaType==="image/gif"}
                        src=${e===this.index?this.displaySource(t):a}
                        poster=${t.posterUrl||t.thumbnailUrl||a}
                        aria-label=${t.fileName||this.text("video")}
                        @error=${()=>this.error=this.text("unavailable")}
                      ></video>
                    </div>
                  `:l`
                    <a
                      class="community-gallery__slide"
                      href=${this.displaySource(t)}
                      target="_blank"
                      rel="noopener"
                      aria-label=${this.text("zoom")}
                      @click=${r=>this.zoom(e,r)}
                    >
                      ${v({label:this.text("loading")})}
                      <img
                        src=${this.displaySource(t)}
                        data-index=${e}
                        width=${t.displayWidth||t.width||1200}
                        height=${t.displayHeight||t.height||1500}
                        alt=${t.fileName||""}
                        loading=${e===0?"eager":"lazy"}
                        decoding="async"
                        @load=${r=>r.currentTarget.parentElement.dataset.state="ready"}
                        @error=${r=>r.currentTarget.parentElement.dataset.state="error"}
                      />
                      <span class="community-gallery__failure">${this.text("unavailable")}</span>
                      <span class="community-gallery__zoom" aria-hidden="true">${c("zoom_in",20)}</span>
                    </a>
                  `))}
        </div>
        ${this.images.length>1?l`
                <div class="community-gallery__controls">
                  <button
                    class="icon-button"
                    type="button"
                    ?disabled=${this.index===0}
                    aria-label=${this.text("previousImage")}
                    @click=${()=>this.select(this.index-1)}
                  >
                    ${c("chevron_left",20)}
                  </button>
                  <span aria-live="polite">${this.index+1} / ${this.images.length}</span>
                  <button
                    class="icon-button"
                    type="button"
                    ?disabled=${this.index>=this.images.length-1}
                    aria-label=${this.text("nextImage")}
                    @click=${()=>this.select(this.index+1)}
                  >
                    ${c("chevron_right",20)}
                  </button>
                </div>
              `:a}
        ${this.busy?l`
                <span class="sr-only" role="status">${this.text("loading")}</span>
              `:a}
        ${this.error?l`
                <p role="alert">${this.error}</p>
              `:a}
      </section>
    `:a}}customElements.get("community-gallery")||customElements.define("community-gallery",_);export{_ as CommunityGallery,$ as communityImageRatio};
