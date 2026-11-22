const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/slider.OMsc13G9.js","_astro/delegate.qnlMPWy4.js","_astro/lit-element.Bc_VOJIm.js","_astro/lit-html.DhDqt3I2.js","_astro/elevation.CV0mocre.js","_astro/md-focus-ring.BFbx9fcs.js","_astro/ripple.DU62FgSE.js","_astro/animation.BI-yjTPx.js","_astro/form-label-activation.C-ZPsH8j.js","_astro/redispatch-event.Dod3cBoe.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./preload-helper.BlTxHScW.js";import{n as w}from"./resource-route.BR5kLHYo.js";import{i as P,l as _,a as q}from"./locales.BBzJ2au5.js";import{p as T}from"./provider-entity-data._K00Fr93.js";import{l as L}from"./provider-entity-routing.4abDgZn8.js";import{a as I,o as E}from"./song-display.BUM043oH.js";import{p as k,h as O,u as M}from"./catalog.CfAhzaok.js";import{i as A}from"./lit-element.Bc_VOJIm.js";import{D as f,A as p,b as u}from"./lit-html.DhDqt3I2.js";/* empty css                        */import{i as d}from"./controls.BCr1YKFS.js";import{i as l}from"./icon.BSt8MVsq.js";import{w as S}from"./wavy-progress.D8BsCBgm.js";import{t as C}from"./overlay.CAlyPMjs.js";import{c as D}from"./content-request.DQ1rIr6o.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./provider-page-data.DnMv3Sc3.js";import"./client.BYho01b_.js";import"./temporary-public-routing.BsxzEC6B.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";/* empty css                        */import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";function v(a){if(a.songKey){const o=/^(gbp|our-notes):(?:[^:]+:)?(\d+)$/u.exec(a.songKey);return o?`${o[1]}:${o[2]}`:a.songKey}let e;try{e=new URL(a.url,"https://haneoka.invalid")}catch{return`${a.id}\0${a.url}`}const t=e.pathname.startsWith("/api/v1/garupa/bestdori/")||e.hostname==="bestdori.com",i=/^\/(?:runtime|assets)\/(?:jp|intl)(?:-cbt)?\//u.test(e.pathname),s=a.id.split(":").at(-1)?.match(/^(\d+)(?:-\d+)?$/u)?.[1];return s&&(t||i)?`${t?"gbp":"our-notes"}:${s}`:`${a.id}\0${a.url}`}function Q(a,e){if(a.detailPath){if(!P(e)||!_(a.detailPath))return a.detailPath;const i=q(a.detailPath,e),s=new URL(i,"https://route.invalid"),o=s.searchParams.get("return"),r=o&&_(o)?q(o,e):o;s.searchParams.delete("return");const n=L(s.pathname,s.search)??`${s.pathname}${s.search}`;return w(`${n}${s.hash}`,r||void 0)}const t=/^(gbp|sekai):(?:[^:]+:)?([^:]+)$/u.exec(a.songKey||"");return t?T(t[1]==="gbp"?"bestdori":"sekai",e,t[2]):`/catalog/songs?song=${encodeURIComponent(a.id)}`}const N={close:"common.actions.close",closePlayerAndClearQueue:"media.audio.closePlayerAndClearQueue",collapse:"common.actions.collapse",expandPlayer:"media.audio.expandPlayer",musicPlayer:"media.audio.musicPlayer",mute:"common.actions.mute",next:"common.actions.next",none:"common.states.none",pause:"common.actions.pause",play:"common.actions.play",playInOrder:"media.audio.playInOrder",playbackPosition:"media.audio.playbackPosition",previous:"common.actions.previous",queue:"media.audio.queue",remove:"common.actions.remove",reorder:"common.actions.reorder",repeat:"media.audio.repeat",repeatQueue:"media.audio.repeatQueue",repeatTrack:"media.audio.repeatTrack",sequential:"media.audio.sequential",shuffle:"common.actions.shuffle",stop:"common.actions.stop",unmute:"common.actions.unmute",volume:"media.audio.volume"},b="haneoka:audio:v2",c=typeof matchMedia=="function"?matchMedia("(max-width: 599px)"):{matches:!1},g=["sequential","repeat-all","repeat-one","shuffle"],h=(a,e,t)=>Math.max(e,Math.min(t,a)),y=(a,e=0)=>{const t=String(a?.id||""),i=String(a?.url||"");return!t||!i?null:{id:t,songKey:v({id:t,url:i,songKey:typeof a.songKey=="string"?a.songKey:void 0}),queueId:a.queueId||`${t}:${e}:${i}`,title:String(a.title||t),titleSource:a.titleSource,artistSource:a.artistSource,titleLanguage:a.titleLanguage,artist:String(a.artist||""),cover:String(a.cover||""),url:i,...a.detailPath?{detailPath:String(a.detailPath)}:{}}};class $ extends A{static ensure(){let e=document.querySelector("audio-dock");return e||(e=new $,e.setAttribute("data-astro-transition-persist","haneoka-audio"),document.body.append(e)),e}uiLanguage=k();onLocale=()=>{this.uiLanguage=k(),this.refreshLabels()};disposeSongDisplay;refreshLabels(){this.queue=this.queue.map(e=>{const t=e.titleSource==null?{text:e.title,locale:e.titleLanguage||this.uiLanguage}:I({title:e.titleSource},this.uiLanguage);return{...e,title:t.text,titleLanguage:t.locale,artist:e.artistSource==null?e.artist:O(e.artistSource,this.uiLanguage).text}}),this.track&&this.updateMetadata(this.track)}updateMetadata(e){"mediaSession"in navigator&&"MediaMetadata"in window&&(navigator.mediaSession.metadata=new MediaMetadata({title:e.title,artist:e.artist,artwork:e.cover?[{src:e.cover}]:[]}))}t(e){return M(this.uiLanguage,N[e]??e)}static properties={queue:{state:!0},index:{state:!0},playing:{state:!0},currentTime:{state:!0},duration:{state:!0},volume:{state:!0},queueOpen:{state:!0},collapsed:{state:!0},mode:{state:!0},draggedIndex:{state:!0},dropIndex:{state:!0}};audio=new Audio;playbackGeneration=0;restoredTime=0;unmutedVolume=.82;inertTargets=new Set;dockObserver;observedDock;queuePanel;releaseQueueFocus;pendingToggleFocus;afterPageLoad=()=>{const e=this.pendingToggleFocus;this.pendingToggleFocus=void 0,e&&e.href===location.href&&this.collapsed===!e.expanded&&this.focusAfterToggle(e.expanded,!0)};afterNavigation=()=>{this.observedDock=void 0,queueMicrotask(()=>this.syncCollapsedSlots()),c.matches&&!this.collapsed&&(this.collapsed=!0,this.persist()),this.requestUpdate()};sheetDrag;constructor(){super(),this.queue=[],this.index=-1,this.playing=!1,this.currentTime=0,this.duration=0,this.volume=.82,this.queueOpen=!1,this.collapsed=!1,this.mode="repeat-all",this.draggedIndex=-1,this.dropIndex=-1,this.audio.preload="metadata",this.restore(),this.audio.volume=this.volume,this.observeAudio(this.audio)}observeAudio(e){const t=()=>e===this.audio&&!!this.track;e.addEventListener("play",()=>{!t()||e.paused||(this.playing=!0,this.emitState(),"mediaSession"in navigator&&(navigator.mediaSession.playbackState="playing"))}),e.addEventListener("pause",()=>{!t()||!e.paused||(this.playing=!1,this.persist(),this.emitState(),"mediaSession"in navigator&&(navigator.mediaSession.playbackState="paused"))}),e.addEventListener("timeupdate",()=>{t()&&(this.currentTime=e.currentTime||0)}),e.addEventListener("durationchange",()=>{t()&&(this.duration=Number.isFinite(e.duration)?e.duration:0)}),e.addEventListener("loadedmetadata",()=>{t()&&this.restoredTime>0&&(e.currentTime=h(this.restoredTime,0,this.duration||this.restoredTime),this.currentTime=e.currentTime,this.restoredTime=0)}),e.addEventListener("ended",()=>{t()&&e.ended&&this.next(!0)})}createRenderRoot(){return this}connectedCallback(){if(super.connectedCallback(),this.disposeSongDisplay=E(()=>this.refreshLabels()),x(()=>import("./slider.OMsc13G9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),addEventListener("haneoka:locale-ready",this.onLocale),this.onLocale(),addEventListener("pagehide",this.persistBound),document.addEventListener("astro:after-swap",this.afterNavigation),document.addEventListener("astro:page-load",this.afterPageLoad),addEventListener("popstate",this.onPopState),addEventListener("keydown",this.onKeydown),this.track&&this.prepare(!1,!1),"mediaSession"in navigator)try{navigator.mediaSession.setActionHandler("play",()=>{this.track&&this.audio.paused&&this.togglePlayback()}),navigator.mediaSession.setActionHandler("pause",()=>this.audio.pause()),navigator.mediaSession.setActionHandler("stop",()=>this.clearQueue()),navigator.mediaSession.setActionHandler("previoustrack",()=>void this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>void this.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!=null&&this.seek(e.seekTime)})}catch{}}disconnectedCallback(){this.disposeSongDisplay?.(),removeEventListener("haneoka:locale-ready",this.onLocale),removeEventListener("pagehide",this.persistBound),document.removeEventListener("astro:after-swap",this.afterNavigation),document.removeEventListener("astro:page-load",this.afterPageLoad),this.releaseQueueFocus?.(),this.releaseQueueFocus=void 0,this.queuePanel=void 0,removeEventListener("popstate",this.onPopState),removeEventListener("keydown",this.onKeydown),this.setOverlayIsolation(!1),this.dockObserver?.disconnect(),this.observedDock=void 0,document.documentElement.style.removeProperty("--audio-dock-height"),document.documentElement.style.removeProperty("--audio-dock-clearance");for(const e of document.querySelectorAll("[data-nav-player], [data-app-bar-player]"))f(p,e);this.persist(),super.disconnectedCallback()}updated(){if(!this.isConnected)return;this.syncCollapsedSlots();const e=this.queueOpen?this.querySelector(".audio-queue-panel"):null;e!==(this.queuePanel??null)&&(this.releaseQueueFocus?.(),this.queuePanel=e??void 0,this.releaseQueueFocus=e?C(e,{onDismiss:()=>this.closeOverlay()}):void 0);const t=this.querySelector(".player");if(t===this.observedDock)return;if(this.dockObserver?.disconnect(),this.observedDock=t||void 0,!t){document.documentElement.style.removeProperty("--audio-dock-height"),document.documentElement.style.removeProperty("--audio-dock-clearance");return}const i=()=>{if(t!==this.observedDock||!this.track)return;const s=document.documentElement.style,o=t.dataset.state==="full"&&!c.matches;s.setProperty("--audio-dock-height",o?`${Math.ceil(t.offsetHeight)+16}px`:"0px"),s.setProperty("--audio-dock-clearance","0px")};i(),this.dockObserver=new ResizeObserver(i),this.dockObserver.observe(t)}get track(){return this.queue[this.index]}async playTrack(e,t){const i=(t.length?t:[e]).flatMap((r,n)=>{const m=y(r,n);return m?[m]:[]}),s=y(e);if(!s||!i.length)return;if(this.queue.length===i.length&&this.queue.every((r,n)=>r.id===i[n].id&&r.url===i[n].url)&&this.track?.id===s.id&&this.track.url===s.url){await this.togglePlayback();return}this.audio.pause(),this.queue=i,this.index=Math.max(0,this.queue.findIndex(r=>r.id===s.id&&r.url===s.url)),this.collapsed=c.matches,this.currentTime=0,await this.prepare(!0)}async enqueueTrack(e,t=!1){const i=y(e,this.queue.length);if(!i)return;const s=v(i),o=this.track&&v(this.track)===s?this.index:this.queue.findIndex(r=>v(r)===s);if(o>=0){const r=this.index!==o;this.queue=this.queue.map((n,m)=>m===o?{...i,queueId:n.queueId}:n),this.index=o,await this.prepare(r,!0),this.emitState();return}this.queue=[...this.queue,i],this.index<0?(this.index=0,await this.prepare(!0,t)):t?(this.index=this.queue.length-1,await this.prepare(!0,!0)):this.persist(),this.emitState()}restore(){try{const e=JSON.parse(localStorage.getItem(b)||"null");if(!e)return;this.queue=(Array.isArray(e.queue)?e.queue:[]).flatMap((t,i)=>{const s=y(t,i);return s?[s]:[]}),this.index=this.queue.length?h(Math.trunc(Number(e.index)||0),0,this.queue.length-1):-1,this.restoredTime=Math.max(0,Number(e.currentTime)||0),this.currentTime=this.restoredTime,this.volume=h(Number.isFinite(Number(e.volume))?Number(e.volume):.82,0,1),this.unmutedVolume=this.volume||(Number.isFinite(e.unmutedVolume)&&Number(e.unmutedVolume)>0?h(Number(e.unmutedVolume),0,1):.82),this.mode=g.includes(e.mode)?e.mode:"repeat-all",this.collapsed=!!e.collapsed}catch{localStorage.removeItem(b)}}persistBound=()=>this.persist();persist(){try{localStorage.setItem(b,JSON.stringify({queue:this.queue,index:this.index,currentTime:this.currentTime,volume:this.volume,unmutedVolume:this.unmutedVolume,mode:this.mode,collapsed:this.collapsed}))}catch{}}async prepare(e,t=!0){const i=this.track;if(!i)return;const s=++this.playbackGeneration,o=this.audio,r=D(i.url);this.audio.dataset.haneokaSource!==r&&(this.audio.dataset.haneokaSource=r,this.audio.src=r,this.audio.load()),this.duration=Number.isFinite(o.duration)?o.duration:0,e&&(this.restoredTime=0,this.audio.currentTime=0,this.currentTime=0),this.audio.volume=this.volume,this.updateMetadata(i),t&&await o.play().catch(()=>{}),!(s!==this.playbackGeneration||o!==this.audio)&&this.persist()}emitState(){dispatchEvent(new CustomEvent("haneoka-audio-state",{detail:{id:this.track?.id||"",playing:this.playing}}))}async select(e){e>=0&&e<this.queue.length&&(this.index=e,await this.prepare(!0))}randomIndex(){if(this.queue.length<2)return this.index;let e=this.index;for(;e===this.index;)e=Math.floor(Math.random()*this.queue.length);return e}async next(e=!1){if(!this.queue.length)return;if(e&&this.mode==="repeat-one"){this.seek(0),await this.audio.play().catch(()=>{});return}let t=this.index+1;if(this.mode==="shuffle")t=this.randomIndex();else if(t>=this.queue.length){if(e&&this.mode==="sequential"){this.audio.pause(),this.seek(0);return}t=0}await this.select(t)}async previous(){if(this.queue.length){if(this.audio.currentTime>3){this.seek(0);return}await this.select(this.mode==="shuffle"?this.randomIndex():(this.index-1+this.queue.length)%this.queue.length)}}cycleMode(){this.mode=g[(g.indexOf(this.mode)+1)%g.length]||"repeat-all",this.persist()}seek(e){if(!Number.isFinite(this.duration)||this.duration<=0||this.audio.readyState<1)return;const t=h(Number(e)||0,0,this.duration);this.audio.currentTime=t,this.currentTime=t,this.persist()}setVolume(e){this.volume>0&&(this.unmutedVolume=this.volume),this.volume=h(Number(e)||0,0,1),this.audio.volume=this.volume,this.persist()}removeQueueItem(e){if(e<0||e>=this.queue.length)return;const t=e===this.index,i=t&&this.playing,s=this.queue.filter((o,r)=>r!==e);if(!s.length){this.clearQueue();return}this.queue=s,e<this.index?this.index-=1:t&&(this.index=Math.min(e,s.length-1)),t&&this.prepare(!0,i),this.persist()}moveQueueItem(e,t){if(e<0||t<0||e>=this.queue.length||t>=this.queue.length||e===t)return;const i=this.track?.queueId,s=[...this.queue],[o]=s.splice(e,1);o&&(s.splice(t,0,o),this.queue=s,this.index=Math.max(0,s.findIndex(r=>r.queueId===i)),this.persist())}clearQueue(){const e=this.contains(document.activeElement)||!!document.activeElement?.closest("[data-nav-player], [data-app-bar-player]");if(history.state?.__haneoka_audio_overlay){const{__haneoka_audio_overlay:i,...s}=history.state;history.replaceState(s,"",location.href)}++this.playbackGeneration;const t=this.audio;if(this.audio=new Audio,this.audio.preload="metadata",this.audio.volume=this.volume,this.observeAudio(this.audio),t.pause(),t.removeAttribute("src"),t.load(),this.queue=[],this.index=-1,this.playing=!1,this.restoredTime=0,this.currentTime=0,this.duration=0,this.queueOpen=!1,this.draggedIndex=-1,this.dropIndex=-1,this.sheetDrag=void 0,this.pendingToggleFocus=void 0,this.releaseQueueFocus?.(),this.releaseQueueFocus=void 0,this.queuePanel=void 0,this.setOverlayIsolation(!1),this.dockObserver?.disconnect(),this.observedDock=void 0,document.documentElement.style.removeProperty("--audio-dock-height"),document.documentElement.style.removeProperty("--audio-dock-clearance"),this.syncCollapsedSlots(),e&&document.querySelector("#main-content")?.focus({preventScroll:!0}),"mediaSession"in navigator){navigator.mediaSession.metadata=null,navigator.mediaSession.playbackState="none";try{navigator.mediaSession.setPositionState()}catch{}}this.persist(),this.emitState()}reorderByKeyboard(e,t){const i=e.key==="ArrowUp"?t-1:e.key==="ArrowDown"?t+1:e.key==="Home"?0:e.key==="End"?this.queue.length-1:-1;i<0||i>=this.queue.length||(e.preventDefault(),this.moveQueueItem(t,i),this.updateComplete.then(()=>this.querySelector(`[data-drag-index="${i}"]`)?.focus({preventScroll:!0})))}onPopState=()=>{const e=this.track&&history.state?.__haneoka_audio_overlay;this.queueOpen=e==="queue",this.setOverlayIsolation(!!e)};setOverlayIsolation(e){if(!e){this.inertTargets.forEach(t=>t.removeAttribute("inert")),this.inertTargets.clear();return}document.querySelectorAll(".app-shell__body, .nav, .nav-bar, .player").forEach(t=>{t.hasAttribute("inert")||(t.setAttribute("inert",""),this.inertTargets.add(t))})}openOverlay(e){this.track&&(history.state?.__haneoka_audio_overlay!==e&&history.pushState({...history.state,__haneoka_audio_overlay:e},"",location.href),this.queueOpen=!0,this.setOverlayIsolation(!0),this.updateComplete.then(()=>this.querySelector(".audio-queue-panel button")?.focus()))}closeOverlay(){this.queueOpen=!1,this.setOverlayIsolation(!1),history.state?.__haneoka_audio_overlay&&history.back()}format(e){const t=Math.max(0,Math.floor(e||0));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}pausePlayback(){this.audio.pause()}async togglePlayback(){if(!this.track)return;const e=this.playbackGeneration,t=this.audio;this.playing?this.audio.pause():await t.play().catch(()=>{e===this.playbackGeneration&&t===this.audio&&(this.playing=!1)})}setExpanded(e){if(this.collapsed===!e)return;const t=this.contains(document.activeElement)||!!document.activeElement?.closest("[data-nav-player], [data-app-bar-player]")||e&&c.matches;!e&&this.queueOpen&&(t&&history.state?.__haneoka_audio_overlay&&(this.pendingToggleFocus={expanded:e,href:location.href}),this.closeOverlay());const i=document.documentElement,s=async()=>{this.collapsed=!e,this.persist(),await this.updateComplete},o=document.startViewTransition;if(!o||matchMedia("(prefers-reduced-motion: reduce)").matches||i.dataset.playerTransition){s().then(()=>this.focusAfterToggle(e,t));return}i.dataset.playerTransition="true",o.call(document,s).finished.finally(()=>{delete i.dataset.playerTransition,this.focusAfterToggle(e,t)})}focusAfterToggle(e,t){if(!t)return;(e?this.querySelector(".player__collapse"):document.querySelector(c.matches?"[data-app-bar-player] .now-playing":"[data-nav-player] .now-playing__expand"))?.focus({preventScroll:!0})}collapsePlayer(){this.setExpanded(!1)}onKeydown=e=>{e.key!=="Escape"||this.collapsed||this.queueOpen||!c.matches||!this.track||(e.preventDefault(),this.setExpanded(!1))};onSheetPointerDown=e=>{e.button!==0||!c.matches||(e.currentTarget.setPointerCapture(e.pointerId),this.sheetDrag={pointer:e.pointerId,startY:e.clientY,dy:0})};onSheetPointerMove=e=>{const t=this.sheetDrag;if(!t||t.pointer!==e.pointerId)return;t.dy=Math.max(0,e.clientY-t.startY);const i=this.querySelector(".player");i&&(i.style.transition="none",i.style.translate=`0 ${t.dy}px`)};onSheetPointerUp=e=>{const t=this.sheetDrag;if(!t||t.pointer!==e.pointerId)return;this.sheetDrag=void 0;const i=this.querySelector(".player");i&&(i.style.removeProperty("transition"),i.style.removeProperty("translate")),t.dy>96&&this.setExpanded(!1)};renderQueue(){return this.queueOpen?u`
      <button class="scrim" type="button" aria-label=${this.t("close")} @click=${this.closeOverlay}></button>
      <section class="audio-queue-panel" role="dialog" aria-modal="true" aria-label=${this.t("queue")}>
        <header>
          <span>
            <svg class="material-icon" width="19" height="19"><use href="/icons.svg#queue_music"></use></svg>
            <strong>${this.t("queue")}</strong>
            <small>${this.queue.length}</small>
          </span>
          <span>
            <button class="icon-button audio-queue-panel__skip" aria-label=${this.t("previous")} @click=${this.previous}>
              <svg class="material-icon" width="18" height="18"><use href="/icons.svg#skip_previous"></use></svg>
            </button>
            <button class="icon-button audio-queue-panel__skip" aria-label=${this.t("next")} @click=${()=>this.next()}>
              <svg class="material-icon" width="18" height="18"><use href="/icons.svg#skip_next"></use></svg>
            </button>
            ${this.renderCloseButton("audio-queue-panel__clear")}
            <button class="icon-button" aria-label=${this.t("close")} @click=${this.closeOverlay}>
              <svg class="material-icon" width="18" height="18"><use href="/icons.svg#close"></use></svg>
            </button>
          </span>
        </header>
        <div class="audio-queue-panel__compact-actions">
          <button class="button button--text" type="button" @click=${this.cycleMode}>
            ${l(this.modeIconName(),20)}${this.modeLabel()}
          </button>
          <button class="button button--text" type="button" @click=${this.collapsePlayer}>
            ${l("expand_more",20)}${this.t("collapse")}
          </button>
        </div>
        <div class="audio-queue-panel__list">
          ${this.queue.map((e,t)=>u`
              <article
                class=${`audio-queue-panel__row${t===this.index?" selected":""}${t===this.dropIndex?" drop-target":""}`}
                draggable="true"
                @dragstart=${i=>{this.draggedIndex=t,i.dataTransfer?.setData("text/plain",String(t))}}
                @dragover=${i=>{i.preventDefault(),this.dropIndex=t}}
                @drop=${i=>{i.preventDefault(),this.moveQueueItem(this.draggedIndex,t),this.draggedIndex=-1,this.dropIndex=-1}}
                @dragend=${()=>{this.draggedIndex=-1,this.dropIndex=-1}}
              >
                <button
                  class="icon-button audio-queue-panel__drag"
                  data-drag-index=${t}
                  aria-label=${`${this.t("reorder")} / ${e.title}`}
                  aria-keyshortcuts="ArrowUp ArrowDown Home End"
                  @keydown=${i=>this.reorderByKeyboard(i,t)}
                >
                  <svg class="material-icon" width="17" height="17"><use href="/icons.svg#drag_indicator"></use></svg>
                </button>
                <button class="audio-queue-panel__select" @click=${()=>this.select(t)}>
                  ${e.cover?u`
                          <img src=${e.cover} alt="" loading="lazy" />
                        `:u`
                          <span class="audio-queue-panel__placeholder">
                            <svg class="material-icon" width="17" height="17">
                              <use href="/icons.svg#queue_music"></use>
                            </svg>
                          </span>
                        `}
                  <span>
                    <strong lang=${e.titleLanguage||this.uiLanguage}>${e.title}</strong>
                    <small>${e.artist}</small>
                  </span>
                </button>
                <small>${String(t+1).padStart(2,"0")}</small>
                <button
                  class="icon-button audio-queue-panel__remove"
                  aria-label=${`${this.t("remove")} / ${e.title}`}
                  @click=${()=>this.removeQueueItem(t)}
                >
                  <svg class="material-icon" width="17" height="17"><use href="/icons.svg#delete"></use></svg>
                </button>
              </article>
            `)}
        </div>
      </section>
    `:p}renderCover(e,t){return u`
      <span class="player__cover">
        ${e.cover?u`
                <img src=${e.cover} alt="" width=${t} height=${t} decoding="async" />
              `:l("queue_music",Math.round(t/2))}
      </span>
    `}render(){const e=this.track;if(!e)return p;const t=!this.collapsed,i=this.duration>0?h(this.currentTime/this.duration,0,1):0,s=u`
      <strong lang=${e.titleLanguage||this.uiLanguage}>${e.title}</strong>
      <small>${e.artist||" "}</small>
    `,o=Q(e,this.uiLanguage),r=u`
      <button
        class="player__play"
        data-playing=${String(this.playing)}
        type="button"
        aria-label=${this.t(this.playing?"pause":"play")}
        title=${this.t(this.playing?"pause":"play")}
        @click=${()=>void this.togglePlayback()}
      >
        ${this.playing?l("pause",t?32:24):l("play_arrow",t?32:24)}
      </button>
    `;return t?u`
      <button class="player-scrim" type="button" tabindex="-1" aria-label=${this.t("collapse")} @click=${()=>this.setExpanded(!1)}></button>
      <aside class="player" data-state="full" aria-label=${this.t("musicPlayer")}>
        <button
          class="player__handle"
          type="button"
          aria-label=${this.t("collapse")}
          @click=${()=>this.setExpanded(!1)}
          @pointerdown=${this.onSheetPointerDown}
          @pointermove=${this.onSheetPointerMove}
          @pointerup=${this.onSheetPointerUp}
          @pointercancel=${this.onSheetPointerUp}
        >
          <span aria-hidden="true"></span>
        </button>
        <a class="player__identity state-layer" aria-label=${`${e.title} / ${e.artist}`} title=${e.title} href=${o}>
          ${this.renderCover(e,56)}
          <span class="player__copy">${s}</span>
        </a>
        <div class="player__transport">
          ${d({label:this.t("previous"),icon:"skip_previous",className:"player__skip",onClick:()=>void this.previous()})}
          ${r}
          ${d({label:this.t("next"),icon:"skip_next",className:"player__skip",onClick:()=>void this.next()})}
        </div>
        <div class="player__timeline">
          <span class="player__time tabular">${this.format(this.currentTime)}</span>
          <span class="player__seek">
          ${S({value:i,thickness:4,amplitude:3,wavelength:28,still:!this.playing})}
          <md-slider
            class="player__scrub md3-slider"
            labeled
            .min=${0}
            .max=${this.duration||1}
            .step=${.01}
            .value=${this.currentTime}
            .valueLabel=${this.format(this.currentTime)}
            ?disabled=${this.duration<=0}
            aria-label=${this.t("playbackPosition")}
            aria-valuetext=${`${this.format(this.currentTime)} / ${this.format(this.duration)}`}
            @input=${n=>this.seek(Number(n.target.value))}
          ></md-slider>
          </span>
          <span class="player__time tabular">${this.format(this.duration)}</span>
        </div>
        <div class="player__actions">
          ${d({label:this.modeLabel(),icon:this.modeIconName(),onClick:this.cycleMode,pressed:this.mode!=="sequential",toggle:!0})}
          ${d({label:this.t("queue"),icon:"queue_music",onClick:()=>this.queueOpen?this.closeOverlay():this.openOverlay("queue"),pressed:this.queueOpen,toggle:!0,badge:this.queue.length})}
          <div class="player__volume">
            <button
              class="icon-button"
              type="button"
              aria-label=${this.t(this.volume?"mute":"unmute")}
              title=${this.t(this.volume?"mute":"unmute")}
              @click=${()=>this.setVolume(this.volume?0:this.unmutedVolume)}
            >
              ${this.volume?l("volume_up",24):l("volume_off",24)}
            </button>
            <md-slider
              class="player__volume-slider md3-slider"
              labeled
              .min=${0}
              .max=${1}
              .step=${.01}
              .value=${this.volume}
              .valueLabel=${`${Math.round(this.volume*100)}%`}
              aria-label=${this.t("volume")}
              aria-valuetext=${`${Math.round(this.volume*100)}%`}
              @input=${n=>this.setVolume(Number(n.target.value))}
            ></md-slider>
          </div>
          ${d({label:this.t("collapse"),className:"player__collapse",icon:"keyboard_arrow_down",onClick:()=>this.setExpanded(!1)})}
          ${this.renderCloseButton("player__close")}
        </div>
      </aside>
      ${this.renderQueue()}
    `:this.renderQueue()}syncCollapsedSlots(){const e=this.track,t=!!e&&this.collapsed,i=document.querySelector("[data-nav-player]"),s=document.querySelector("[data-app-bar-player]");i&&f(t&&e?this.renderRailPlayer(e):p,i),s&&f(t&&e?this.renderBarPlayer(e):p,s)}progressRatio(){return this.duration>0?h(this.currentTime/this.duration,0,1):0}renderRailPlayer(e){const t=this.progressRatio();return u`
      <section class="now-playing-rail" aria-label=${this.t("musicPlayer")}>
        <button
          class="now-playing__expand"
          type="button"
          aria-label=${`${this.t("expandPlayer")} / ${e.title} / ${e.artist}`}
          title=${this.t("expandPlayer")}
          @click=${()=>this.setExpanded(!0)}
        >
          <span class="now-playing__cover" style=${`--player-progress:${t}`}>
            ${e.cover?u`<img src=${e.cover} alt="" width="40" height="40" decoding="async" />`:l("queue_music",20)}
          </span>
          <span class="now-playing__copy">
            <strong lang=${e.titleLanguage||this.uiLanguage}>${e.title}</strong>
            <small>${e.artist||" "}</small>
          </span>
          <span class="now-playing__chevron" aria-hidden="true">${l("keyboard_arrow_up",20)}</span>
        </button>
        <span class="now-playing__progress" aria-hidden="true">
          ${S({value:t,thickness:3,amplitude:2,wavelength:16,still:!this.playing})}
        </span>
        <span class="now-playing__controls">
          <button
            class="icon-button now-playing__play"
            type="button"
            data-playing=${String(this.playing)}
            aria-label=${this.t(this.playing?"pause":"play")}
            title=${this.t(this.playing?"pause":"play")}
            @click=${()=>void this.togglePlayback()}
          >
            ${this.playing?l("pause",24):l("play_arrow",24)}
          </button>
          ${d({label:this.t("next"),icon:"skip_next",className:"now-playing__next",onClick:()=>void this.next()})}
          ${this.renderCloseButton("now-playing__close")}
        </span>
      </section>
    `}renderBarPlayer(e){const t=this.progressRatio();return u`
      <button
        class="now-playing"
        type="button"
        data-playing=${String(this.playing)}
        aria-label=${`${this.t("expandPlayer")} / ${e.title} / ${e.artist}`}
        title=${`${e.title} / ${e.artist}`}
        style=${`--player-progress:${t}`}
        @click=${()=>this.setExpanded(!0)}
      >
        <span class="now-playing__cover">
          ${e.cover?u`<img src=${e.cover} alt="" width="32" height="32" decoding="async" />`:l("queue_music",18)}
        </span>
      </button>
    `}modeLabel(){return this.t({sequential:"playInOrder","repeat-all":"repeatQueue","repeat-one":"repeatTrack",shuffle:"shuffle"}[this.mode])}renderCloseButton(e){return d({label:this.t("closePlayerAndClearQueue"),icon:"close",className:e,onClick:()=>this.clearQueue()})}modeIconName(){return{sequential:"playlist_play","repeat-all":"repeat","repeat-one":"repeat_one",shuffle:"shuffle"}[this.mode]}}customElements.define("audio-dock",$);export{$ as AudioDock};
