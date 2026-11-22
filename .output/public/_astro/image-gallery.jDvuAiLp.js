import{_}from"./preload-helper.BlTxHScW.js";import{i as M}from"./lit-element.Bc_VOJIm.js";import{A as n,b as c}from"./lit-html.DhDqt3I2.js";import{b as x,m as I,i as k}from"./modal.D-GY7Vdy.js";import{t as S}from"./overlay.CAlyPMjs.js";import{u as s}from"./catalog.CfAhzaok.js";import{i as v,r as L}from"./controls.BCr1YKFS.js";import{i as g}from"./icon.BSt8MVsq.js";import{n as O}from"./lazy-images.2hwWuBaG.js";import{r as C,k as R}from"./image-dimensions.lsZdhmjC.js";import{p as m}from"./document-address.dywC0kBs.js";/* empty css                        *//* empty css                        *//* empty css                         */import"./client.BYho01b_.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./resource-route.BR5kLHYo.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";/* empty css                        */import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./loading-indicator.dXh2gc3V.js";class V extends M{static properties={images:{attribute:!1},locale:{},active:{},title:{},natural:{type:Boolean,reflect:!0},lazy:{type:Boolean},busy:{state:!0},error:{state:!0},clipIndex:{state:!0},animated:{state:!0},movieReady:{state:!0},downloadsOpen:{state:!0}};movieVideo;movieVideos=new Set;movieIdentity="";movieGeneration=0;movieDeadline;nextMovie;currentMovieUrl;movieFetchLifetime;movieBlobs=new Map;viewer;releaseFocus;generation=0;dimensions=new Map;constructor(){super(),this.images=[],this.locale="ja",this.active="",this.title="",this.natural=!1,this.lazy=!1,this.busy=!1,this.error="",this.clipIndex=0,this.animated=!1,this.movieReady=this.downloadsOpen=!1}createRenderRoot(){return this}shouldUpdate(e){return this.hasAttribute("data-prerendered")&&!this.images.length?!1:super.shouldUpdate(e)}update(e){this.hasAttribute("data-prerendered")&&(this.removeAttribute("data-prerendered"),this.replaceChildren()),super.update(e)}dropMovieDownloads(){this.movieFetchLifetime?.abort(),this.movieFetchLifetime=void 0,this.movieBlobs.clear()}disconnectedCallback(){this.generation++,this.stopMovie(),this.dropMovieDownloads(),this.viewer?.destroy(),this.releaseFocus?.(),super.disconnectedCallback()}willUpdate(e){e.has("active")&&e.get("active")!==this.active&&(this.stopMovie(),this.clipIndex=0,this.animated=this.downloadsOpen=!1);const i=e.get("images");i&&JSON.stringify(i)!==JSON.stringify(this.images)&&(this.generation++,this.stopMovie(),this.viewer?.destroy(),this.busy=!1,this.error="",this.dimensions.clear(),this.dropMovieDownloads())}updated(e){if(e.has("active")){const i=this.querySelector(".image-gallery__thumbnails"),t=i?.querySelector('[aria-current="true"]');if(i&&t){const a=t.getBoundingClientRect().left-i.getBoundingClientRect().left;(a<0||a+t.offsetWidth>i.clientWidth)&&(i.scrollLeft+=a)}}this.syncMovie()}clearMovieDeadline(){clearTimeout(this.movieDeadline),this.movieDeadline=void 0}waitForMovie=()=>{this.clearMovieDeadline();const e=this.movieGeneration;this.movieDeadline=setTimeout(()=>{this.isConnected&&e===this.movieGeneration&&this.failMovie()},3e4)};stopMovie(){this.movieGeneration++,this.clearMovieDeadline(),this.releaseNextMovie();for(const e of this.movieVideos)e.pause(),e.classList.remove("is-current"),e.removeAttribute("src"),e.load();this.movieVideos.clear(),this.currentMovieUrl&&URL.revokeObjectURL(this.currentMovieUrl),this.currentMovieUrl=void 0,this.movieVideo=void 0,this.movieIdentity="",this.movieReady=!1}failMovie(){const e=this.movieIdentity;this.stopMovie(),this.movieIdentity=e,this.error=s(this.locale,"common.states.unavailable")}releaseNextMovie(){const e=this.nextMovie;this.nextMovie=void 0,e&&(e.controller.abort(),e.video.pause(),e.video.removeAttribute("src"),e.video.load(),e.url&&URL.revokeObjectURL(e.url))}clipIdentity(e,i,t){return JSON.stringify([e.id,i,t.url])}movieBlob(e){let i=this.movieBlobs.get(e);if(i)return i;this.movieFetchLifetime??=new AbortController;const t=AbortSignal.any([this.movieFetchLifetime.signal,AbortSignal.timeout(3e4)]);return i=fetch(e,{signal:t}).then(async a=>{if(!a.ok)throw new Error(`Video preload failed (${a.status})`);const r=await a.blob();return t.throwIfAborted(),r}),i.catch(()=>{this.movieBlobs.get(e)===i&&this.movieBlobs.delete(e)}),this.movieBlobs.set(e,i),i}prepareNextMovie(e){const i=e.videoSequence?.clips;if(!i||i.length<2||!this.movieVideo)return;const t=this.clipIndex+1<i.length?this.clipIndex+1:0,a=i[t],r=this.clipIdentity(e,t,a);if(this.nextMovie?.identity===r)return;this.releaseNextMovie();const o=[...this.querySelectorAll("video.image-gallery__clip")].find(u=>u!==this.movieVideo);if(!o)return;this.movieVideos.add(o);const d=new AbortController,l={index:t,identity:r,video:o,controller:d,ready:Promise.resolve(),url:void 0,error:void 0};this.nextMovie=l;const h=setTimeout(()=>d.abort(new DOMException("Video preload timed out","TimeoutError")),3e4);l.ready=(async()=>{const u=await this.movieBlob(a.url);d.signal.throwIfAborted(),!(this.nextMovie!==l||!this.isConnected)&&(l.url=URL.createObjectURL(u),o.muted=!0,o.playsInline=!0,o.loop=!!a.loop,o.width=a.width,o.height=a.height,await new Promise((p,b)=>{const f=()=>{o.removeEventListener("loadeddata",$),o.removeEventListener("error",w),d.signal.removeEventListener("abort",y)},$=()=>{f(),p()},w=()=>{f(),b(new Error("Video preload decode failed"))},y=()=>{f(),b(d.signal.reason)};o.addEventListener("loadeddata",$,{once:!0}),o.addEventListener("error",w,{once:!0}),d.signal.addEventListener("abort",y,{once:!0}),o.src=l.url,o.load()}),d.signal.throwIfAborted())})().catch(u=>{l.error=u}).finally(()=>clearTimeout(h))}syncMovie(){if(!this.isConnected)return;const e=this.images.find(h=>h.id===this.active)||this.images[0],i=e?.videoSequence?e.videoSequence.clips[this.clipIndex]:this.animated?e?.animatedOverlay:void 0;if(!i){this.movieVideo&&this.stopMovie();return}const t=this.clipIdentity(e,this.clipIndex,i);if(t===this.movieIdentity)return;const a=this.nextMovie?.identity===t?this.nextMovie:void 0,r=this.movieVideo,o=a?.video??[...this.querySelectorAll("video.image-gallery__clip")].find(h=>h!==r);if(!o)return;this.movieVideos.add(o),this.movieGeneration++;const d=this.movieGeneration;this.movieIdentity=t,this.error="",this.waitForMovie(),a||this.releaseNextMovie();const l=a?void 0:this.movieBlob(i.url);(async()=>{if(a&&(await a.ready,a.error))throw a.error;const h=l?await l:void 0;if(!this.isConnected||d!==this.movieGeneration)return;a&&(this.nextMovie=void 0);const u=this.currentMovieUrl;this.currentMovieUrl=a?.url??URL.createObjectURL(h),a||(o.src=this.currentMovieUrl,o.load()),this.movieVideo=o,o.muted=!0,o.playsInline=!0,o.loop=!!(i.loop||!e?.videoSequence),o.width=i.width,o.height=i.height;for(const p of e.videoSequence?.clips.slice(this.clipIndex+2)??[])this.movieBlob(p.url).catch(()=>{});try{if(await o.play(),!this.isConnected||d!==this.movieGeneration)return;o.classList.add("is-current"),r&&r!==o&&(r.classList.remove("is-current"),r.pause()),this.clearMovieDeadline(),this.movieReady=!0,this.prepareNextMovie(e)}finally{u&&URL.revokeObjectURL(u)}})().catch(()=>{this.isConnected&&d===this.movieGeneration&&this.failMovie()})}onClipEnded(e){if(e.currentTarget!==this.movieVideo||!this.movieVideo?.ended)return;const i=this.images.find(t=>t.id===this.active)||this.images[0];i?.videoSequence&&this.clipIndex<i.videoSequence.clips.length-1&&this.clipIndex++}renderDownloads(e){const i=e.videoSequence?.clips;return!this.downloadsOpen||!i?n:c`
      <dialog
        class="dialog"
        aria-label=${s(this.locale,"common.actions.download")}
        ${I(()=>{this.downloadsOpen=!1})}
        @pointerdown=${x}
        @click=${t=>{k(t)&&(this.downloadsOpen=!1)}}
      >
        <div class="dialog__header"><h2>${s(this.locale,"common.actions.download")}</h2></div>
        <div class="dialog__body stack">
          ${i.map(t=>c`
              <a class="button button--tonal" href=${m(t.url)} download=${t.filename}>
                ${g("download",20)}${t.label}
              </a>
            `)}
        </div>
        <div class="dialog__actions">
          <button
            class="button button--text"
            type="button"
            @click=${()=>{this.downloadsOpen=!1}}
          >
            ${s(this.locale,"common.actions.close")}
          </button>
        </div>
      </dialog>
    `}select(e){this.clipIndex=0,this.animated=this.downloadsOpen=!1,this.movieIdentity="",this.active=this.images[e]?.id||"",this.error="",this.requestUpdate(),this.dispatchEvent(new CustomEvent("image-change",{detail:this.active,bubbles:!0,composed:!0}))}remember(e,i){e.naturalWidth&&this.dimensions.set(i,{src:e.currentSrc||e.src,width:e.naturalWidth,height:e.naturalHeight}),C(i,e.naturalWidth,e.naturalHeight)}stageRatio(e){const i=e.width&&e.height?{width:e.width,height:e.height}:R(e.source);return i?`${i.width} / ${i.height}`:"16 / 9"}async imageData(e){const i=this.dimensions.get(e.source);if(i)return{...i,alt:e.label};if(e.width&&e.height)return{src:m(e.source),width:e.width,height:e.height,alt:e.label};for(const t of e.candidates||[e.source]){const a=m(t);try{const r=new Image;return r.src=a,await r.decode(),this.remember(r,e.source),{src:a,width:r.naturalWidth,height:r.naturalHeight,alt:e.label}}catch{}}throw new Error(s(this.locale,"common.states.unavailable"))}async open(e,i){if(i.ctrlKey||i.metaKey||i.shiftKey||i.altKey||i.button!==0||(i.preventDefault(),this.busy||this.viewer))return;const t=++this.generation,a=i.currentTarget;this.busy=!0,this.error="";try{const[{default:r},o]=await Promise.all([_(()=>import("./photoswipe.esm.CKV1Bsxh.js"),[]),Promise.all(this.images.map(h=>this.imageData(h).catch(()=>null)))]);if(!this.isConnected||t!==this.generation)return;if(!o[e])throw new Error(s(this.locale,"common.states.unavailable"));const d=o.flatMap((h,u)=>h?[u]:[]),l=new r({dataSource:o.filter(h=>h!==null),index:d.indexOf(e),bgOpacity:1,showHideAnimationType:"fade",trapFocus:!1,returnFocus:!1,wheelToZoom:!0,imageClickAction:"zoom",padding:{top:64,bottom:24,left:12,right:12},closeTitle:s(this.locale,"common.actions.close"),zoomTitle:s(this.locale,"media.models.labels.zoom"),arrowPrevTitle:s(this.locale,"media.images.actions.previousImage"),arrowNextTitle:s(this.locale,"media.images.actions.nextImage"),errorMsg:s(this.locale,"common.states.unavailable")});this.viewer=l,l.on("afterInit",()=>{l.element&&(l.element.setAttribute("aria-label",this.title||s(this.locale,"image")),this.releaseFocus=S(l.element,{onDismiss:()=>l.close(),returnFocus:a}))}),l.on("change",()=>this.select(d[l.currIndex]??e)),l.on("destroy",()=>{this.releaseFocus?.(),this.releaseFocus=void 0,this.viewer=void 0}),l.init()}catch(r){this.error=r instanceof Error?r.message:String(r)}finally{t===this.generation&&(this.busy=!1)}}picture(e,i=!1){const t=i?e.thumbnail||e.candidates?.[0]||e.source:e.candidates?.[0]||e.source;return e.bounds&&e.width&&e.height?c`
        <svg
          viewBox=${e.bounds.join(" ")}
          preserveAspectRatio="xMidYMid meet"
          role=${i?n:"img"}
          aria-label=${i?n:e.label}
          aria-hidden=${i?"true":n}
        >
          <image
            href=${m(t)}
            width=${e.width}
            height=${e.height}
            @error=${()=>{this.error=s(this.locale,"common.states.unavailable")}}
          ></image>
        </svg>
      `:c`
      <img
        src=${m(t)}
        data-candidates=${JSON.stringify((e.candidates||[e.source]).map(m))}
        data-candidate-index="0"
        alt=${i?"":e.label}
        decoding="async"
        loading=${i||this.lazy?"lazy":"eager"}
        @error=${O}
        @load=${a=>{(!i||!e.thumbnail)&&this.remember(a.currentTarget,e.source)}}
      />
    `}render(){const e=Math.max(0,this.images.findIndex(a=>a.id===this.active)),i=this.images[e];if(!i)return n;const t=i.candidates||[i.source];if(i.videoSequence||i.animatedOverlay&&this.animated){const a=i.animatedOverlay;return c`
        <section class="image-gallery" aria-label=${this.title||s(this.locale,"image")}>
          <div class="image-gallery__stage image-gallery__stage--cinema">
            <img
              class="image-gallery__cinema-poster${this.movieReady?"":" is-visible"}"
              src=${m(i.source)}
              alt=""
              decoding="async"
            />
            ${[0,1].map(()=>c`
                <video
                  class="image-gallery__clip"
                  muted
                  playsinline
                  preload="auto"
                  disablepictureinpicture
                  disableremoteplayback
                  @ended=${r=>this.onClipEnded(r)}
                  @waiting=${r=>{r.currentTarget===this.movieVideo&&this.waitForMovie()}}
                  @playing=${r=>{r.currentTarget===this.movieVideo&&this.clearMovieDeadline()}}
                  @error=${r=>{r.currentTarget===this.movieVideo&&this.failMovie()}}
                  aria-hidden="true"
                ></video>
              `)}
            ${a?c`
                    <a
                      class="image-gallery__download icon-button"
                      href=${m(a.url)}
                      download=${a.filename}
                      aria-label=${s(this.locale,"common.actions.download")}
                      title=${s(this.locale,"common.actions.download")}
                    >
                      ${g("download",22)}
                    </a>
                  `:c`
                    <button
                      class="image-gallery__download icon-button"
                      type="button"
                      aria-label=${s(this.locale,"common.actions.download")}
                      title=${s(this.locale,"common.actions.download")}
                      @click=${()=>{this.downloadsOpen=!0}}
                    >
                      ${g("download",22)}
                    </button>
                  `}
          </div>
          <div class="image-gallery__toolbar">
            ${this.images.length>1?v({icon:"chevron_left",label:s(this.locale,"media.images.actions.previousImage"),disabled:e===0,onClick:()=>this.select(e-1)}):n}
            <span class="image-gallery__caption">
              <strong>${i.label}</strong>
              ${this.images.length>1?c`
                      <small>${e+1} / ${this.images.length}</small>
                    `:n}
            </span>
            ${this.images.length>1?v({icon:"chevron_right",label:s(this.locale,"media.images.actions.nextImage"),disabled:e===this.images.length-1,onClick:()=>this.select(e+1)}):n}
            <a
              class="icon-button"
              href=${m(i.videoSequence?.clips[0]?.url||t[0]||i.source)}
              target="_blank"
              rel="noopener"
              aria-label=${s(this.locale,"media.images.actions.originalImage")}
              title=${s(this.locale,"media.images.actions.originalImage")}
            >
              ${g("open_in_new",20)}
            </a>
          </div>
          ${this.renderThumbnails(e)} ${this.renderDownloads(i)}
          ${this.error?c`
                  <p class="image-gallery__status" role="alert">${this.error}</p>
                `:n}
        </section>
      `}return c`
      <section class="image-gallery" aria-label=${this.title||s(this.locale,"image")}>
        <div class="image-gallery__stagewrap">
          <a
            class="image-gallery__stage"
            style=${this.natural?`--gallery-ratio:${this.stageRatio(i)}`:n}
            href=${m(t[0]||i.source)}
            target="_blank"
            rel="noopener"
            aria-label=${`${s(this.locale,"media.models.labels.zoom")} / ${i.label}`}
            @click=${a=>this.open(e,a)}
          >
            ${this.picture(i)}
            <span class="image-gallery__expand" aria-hidden="true">${g("zoom_in",20)}</span>
          </a>
          ${i.animatedOverlay?c`
                  <button
                    class="image-gallery__animate icon-button"
                    type="button"
                    aria-label=${s(this.locale,"catalog.cards.animations.animated")}
                    title=${s(this.locale,"catalog.cards.animations.animated")}
                    @click=${()=>{this.animated=!0}}
                  >
                    ${g("play_arrow",22)}
                  </button>
                `:n}
        </div>
        <div class="image-gallery__toolbar">
          ${this.images.length>1?v({icon:"chevron_left",label:s(this.locale,"media.images.actions.previousImage"),disabled:e===0,onClick:()=>this.select(e-1)}):n}
          <span class="image-gallery__caption">
            <strong>${i.label}</strong>
            ${this.images.length>1?c`
                    <small>${e+1} / ${this.images.length}</small>
                  `:n}
          </span>
          ${this.images.length>1?v({icon:"chevron_right",label:s(this.locale,"media.images.actions.nextImage"),disabled:e===this.images.length-1,onClick:()=>this.select(e+1)}):n}
          <a
            class="icon-button"
            href=${m(this.dimensions.get(i.source)?.src||t[0]||i.source)}
            target="_blank"
            rel="noopener"
            aria-label=${s(this.locale,"media.images.actions.originalImage")}
            title=${s(this.locale,"media.images.actions.originalImage")}
          >
            ${g("open_in_new",20)}
          </a>
        </div>
        ${this.renderThumbnails(e)}
        ${this.busy?c`
                <p class="image-gallery__status" role="status">${s(this.locale,"common.states.loading")}</p>
              `:n}
        ${this.error?c`
                <p class="image-gallery__status" role="alert">${this.error}</p>
              `:n}
      </section>
    `}renderThumbnails(e){return this.images.length<2?n:c`
      <div
        class="image-gallery__thumbnails"
        role="radiogroup"
        aria-label=${s(this.locale,"image")}
        @keydown=${L(this.images.map((i,t)=>t),e,i=>this.select(i))}
      >
        ${this.images.map((i,t)=>c`
            <button
              type="button"
              role="radio"
              class=${i.videoSequence?"image-gallery__thumb--video":n}
              aria-checked=${t===e}
              aria-current=${t===e?"true":n}
              aria-label=${i.label}
              title=${i.label}
              tabindex=${t===e?0:-1}
              @click=${()=>this.select(t)}
            >
              ${this.picture(i,!0)}
            </button>
          `)}
      </div>
    `}}customElements.get("image-gallery")||customElements.define("image-gallery",V);export{V as ImageGallery};
