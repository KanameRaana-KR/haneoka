import{i as d}from"./lit-element.Bc_VOJIm.js";import{A as p,b as l,o as n}from"./lit-html.DhDqt3I2.js";import"./outlined-select.BLpyNoqZ.js";import"./select-option.DfVQFXUn.js";import"./outlined-text-field.omMPAN5q.js";import{c as g}from"./client.BYho01b_.js";import{m as b}from"./modal.D-GY7Vdy.js";import{s as z,g as c}from"./SongSlidePuzzleDocument.astro_astro_type_script_index_0_lang.D-C73CrB.js";import"./delegate.qnlMPWy4.js";import"./outlined-field.BML1F-r4.js";import"./on-report-validity.BygZsmbx.js";import"./animation.BI-yjTPx.js";import"./query-assigned-elements.N5HHHkzR.js";import"./redispatch-event.Dod3cBoe.js";import"./elevation.CV0mocre.js";import"./md-focus-ring.BFbx9fcs.js";import"./list-controller.DhsW2nnj.js";import"./shared.Z0K3ZZvG.js";import"./validator.Cz1PymV-.js";import"./item.aw-mMCVK.js";import"./ripple.DU62FgSE.js";import"./shared-styles.cssresult.CDtq61Of.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";/* empty css                         */import"./preload-helper.BlTxHScW.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./locales.BBzJ2au5.js";import"./resource-route.BR5kLHYo.js";import"./song-display.BUM043oH.js";import"./catalog.CfAhzaok.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./hydrate-workspace.CqzYTlrg.js";import"./page-data.CoUysx63.js";import"./content-policy-browser.sJlSzFcH.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./request-scope.N4apwAcW.js";import"./content-release.T5Qse4HZ.js";import"./event-song-release.Cm_gWyb9.js";import"./cache.CqSBusMV.js";import"./fetch.D18jK1jC.js";import"./data.CTobvNqO.js";import"./definitions.Csu7nG6K.js";import"./slider.OMsc13G9.js";import"./form-label-activation.C-ZPsH8j.js";import"./switch.Cn4cAa2V.js";import"./checkbox-validator.BT-H8ZRB.js";import"./linear-progress.Du-QQIqh.js";import"./progress.BYlJSdrk.js";import"./app-bar.CQ9Fi2qQ.js";import"./icon.BSt8MVsq.js";/* empty css                        */import"./snackbar.D8p2-_Nm.js";import"./controls.BCr1YKFS.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./state.Ck623oKm.js";import"./loading-progress.C8Gf5z9T.js";import"./selection-pane.D5KApqnp.js";/* empty css                               */import"./checkbox.zvQH7SV2.js";import"./tile.DFwS0rEz.js";import"./loading-indicator.dXh2gc3V.js";import"./lazy-images.2hwWuBaG.js";import"./image-dimensions.lsZdhmjC.js";import"./circular-progress.Derl8Va3.js";import"./chooser-filters.TFq4Gm2y.js";/* empty css                                */import"./accordion.CRbde2Jj.js";/* empty css                          */import"./song-tile.-ra_W6Ij.js";import"./difficulty-display.DtJcy4Kk.js";/* empty css                        */import"./catalog-relationships.Cko_f-QP.js";import"./song-performer-adornment.Dd169nPp.js";import"./song-card.D6fAT8NQ.js";import"./chart-assets.Pj54wu7t.js";import"./song-performer.D1gPJ3l4.js";async function u(m,s,t){const i=new Image;i.src=m,await i.decode(),t.throwIfAborted();const a=Math.min(1,s/Math.max(i.naturalWidth,i.naturalHeight)),o=document.createElement("canvas");if(o.width=Math.round(i.naturalWidth*a),o.height=Math.round(i.naturalHeight*a),Math.min(o.width,o.height)<64)throw new Error("image");const e=o.getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("canvas");e.imageSmoothingQuality="high",e.drawImage(i,0,0,o.width,o.height);const r=e.getImageData(0,0,o.width,o.height);return o.width=o.height=0,{width:r.width,height:r.height,data:r.data}}class $ extends d{static properties={locale:{type:String},cover:{type:String},songName:{type:String},songLanguage:{type:String},size:{type:Number},goalBlank:{type:Number}};image;reference;imageUrl="";crop;result;selected=-1;busy=!1;error="";worker;token=0;timeout;controller=new AbortController;gesture;constructor(){super(),this.locale="en",this.cover="",this.songName="",this.songLanguage="ja",this.size=3,this.goalBlank=8}createRenderRoot(){return this}disconnectedCallback(){this.controller.abort(),this.stop(),this.imageUrl&&URL.revokeObjectURL(this.imageUrl),super.disconnectedCallback()}text(s,t={}){let i=g(this.locale,`tools.songPuzzle.${s}`,s);for(const[a,o]of Object.entries(t))i=i.replaceAll(`{${a}}`,String(o));return i}stop(){++this.token,clearTimeout(this.timeout),this.worker?.terminate(),this.worker=void 0,this.busy=!1}close(){this.dispatchEvent(new CustomEvent("puzzle-import-close",{bubbles:!0,composed:!0}))}async chooseFile(s){const t=s.target,i=t.files?.[0];if(t.value="",!i)return;if(this.stop(),this.result=void 0,this.image=void 0,this.crop=void 0,this.error="",this.imageUrl&&URL.revokeObjectURL(this.imageUrl),this.imageUrl="",i.size>20*1024*1024){this.error="imageTooLarge",this.requestUpdate();return}const a=this.token,o=URL.createObjectURL(i);this.imageUrl=o,this.busy=!0,this.requestUpdate();try{const e=await u(o,2048,this.controller.signal);if(!this.isConnected||a!==this.token)return;this.image=e;const r=Math.min(e.width,e.height);this.crop={x:(e.width-r)/2,y:(e.height-r)/2,side:r},await this.analyze(!0)}catch{this.isConnected&&a===this.token&&(this.busy=!1,this.error="imageError",this.requestUpdate())}}async analyze(s=!1){if(!this.image)return;this.stop();const t=this.token;this.busy=!0,this.error="",this.result=void 0,this.selected=-1,this.requestUpdate();try{if(!this.reference){const e=await fetch(this.cover,{signal:this.controller.signal});if(!e.ok)throw new Error("cover");const r=URL.createObjectURL(await e.blob());try{this.reference=await u(r,1024,this.controller.signal)}finally{URL.revokeObjectURL(r)}}if(!this.isConnected||t!==this.token)return;const i=new Worker(new URL("/_astro/song-puzzle-import.worker-hC3ll5VL.js",import.meta.url),{type:"module"});this.worker=i;const a=()=>this.isConnected&&this.worker===i&&this.token===t,o=()=>{a()&&(this.stop(),this.error="imageNoMatch",this.requestUpdate())};i.onmessage=({data:e})=>{if(!(!a()||e.token!==t)){if(!e.result){o();return}this.stop(),this.result=e.result,this.crop=e.result.crop,this.requestUpdate()}},i.onerror=o,this.timeout=setTimeout(o,3e4),i.postMessage({token:t,image:this.image,cover:this.reference,size:this.size,crop:s?void 0:this.crop,goalBlank:this.goalBlank<0?void 0:this.goalBlank})}catch{this.isConnected&&t===this.token&&(this.stop(),this.error="imageError",this.requestUpdate())}}setCrop(s){if(!this.image)return;this.stop(),this.result=void 0,this.selected=-1,this.error="";const t=Math.max(this.size*8,Math.min(this.image.width,this.image.height,s.side));this.crop={x:Math.max(0,Math.min(this.image.width-t,s.x)),y:Math.max(0,Math.min(this.image.height-t,s.y)),side:t},this.requestUpdate()}point(s){const t=s.currentTarget.getBoundingClientRect();return{x:(s.clientX-t.left)*this.image.width/t.width,y:(s.clientY-t.top)*this.image.height/t.height}}pointerDown(s){if(!s.isPrimary||s.button!==0||!this.crop)return;const t=this.point(s),i=this.crop,a=t.x>=i.x&&t.y>=i.y&&t.x<=i.x+i.side&&t.y<=i.y+i.side;this.gesture={pointer:s.pointerId,...t,crop:{...i},mode:a?"move":"draw"},s.currentTarget.setPointerCapture(s.pointerId)}pointerMove(s){const t=this.gesture;if(!t||t.pointer!==s.pointerId)return;const i=this.point(s),a=i.x-t.x,o=i.y-t.y;if(t.mode==="move")this.setCrop({...t.crop,x:t.crop.x+a,y:t.crop.y+o});else{const e=Math.max(Math.abs(a),Math.abs(o));this.setCrop({x:a<0?t.x-e:t.x,y:o<0?t.y-e:t.y,side:e})}}swap(s){if(this.result){if(this.selected<0)this.selected=s;else{const t=this.selected,i=[...this.result.tiles];[i[t],i[s]]=[i[s],i[t]],this.result={...this.result,tiles:i,repair:void 0,uncertain:this.result.uncertain.filter(a=>a!==t&&a!==s)},this.selected=-1}this.requestUpdate()}}valid(){return this.result&&z({size:this.size,tiles:this.result.tiles,goal:c(this.size,this.result.goalBlank)})}apply(){!this.result||!this.valid()||this.dispatchEvent(new CustomEvent("puzzle-import",{bubbles:!0,composed:!0,detail:{size:this.size,tiles:[...this.result.tiles],goalBlank:this.result.goalBlank}}))}render(){const s=this.image,t=this.crop,i=this.result,a=i?c(this.size,i.goalBlank):[],o=this.busy?"imageRecognizing":this.error||(i?this.valid()?i.uncertain.length?"imageReview":"imageMatched":"unsolvable":s?"imageCrop":"imageEmpty");return l`
      <dialog class="dialog puzzle-import" aria-labelledby="puzzle-import-title" ${b(()=>this.close())}>
        <div class="dialog__surface">
          <header class="dialog__header"><h2 id="puzzle-import-title">${this.text("imageImport")}</h2></header>
          <div class="dialog__body stack">
            <div class="cluster">
              <label class="button button--tonal puzzle-import__choose">
                ${this.text("imageChoose")}
                <input
                  class="puzzle-import__file"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  @change=${e=>void this.chooseFile(e)}
                />
              </label>
              <md-outlined-select
                label=${this.text("size")}
                .value=${String(this.size)}
                @change=${e=>{this.size=Number(e.target.value),this.goalBlank>=0&&(this.goalBlank=this.size*this.size-1),this.stop(),this.result=void 0,this.requestUpdate(),this.image&&this.analyze(!0)}}
              >
                ${[3,4,5,6,7,8].map(e=>l`
                    <md-select-option value=${String(e)}>
                      <span slot="headline">${e} × ${e}</span>
                    </md-select-option>
                  `)}
              </md-outlined-select>
              <md-outlined-select
                label=${this.text("goalBlank")}
                .value=${String(this.goalBlank)}
                @change=${e=>{this.goalBlank=Number(e.target.value),this.image&&this.analyze()}}
              >
                <md-select-option value="-1"><span slot="headline">${this.text("imageAuto")}</span></md-select-option>
                ${Array.from({length:this.size*this.size},(e,r)=>l`
                    <md-select-option value=${String(r)}>
                      <span slot="headline">
                        ${this.text("position",{row:Math.floor(r/this.size)+1,column:r%this.size+1})}
                      </span>
                    </md-select-option>
                  `)}
              </md-outlined-select>
            </div>
            <div class="puzzle-import__status" role="status" aria-live="polite">
              ${this.text(o,{count:i?.uncertain.length??0})}
            </div>
            ${i?.repair?l`
                    <button
                      type="button"
                      class="button button--tonal"
                      @click=${()=>{this.result={...i,tiles:i.repair,repair:void 0},this.selected=-1,this.requestUpdate()}}
                    >
                      ${this.text("imageResolveSimilar")}
                    </button>
                  `:p}
            ${s&&t?l`
                    <div
                      class="puzzle-import__image"
                      style=${n({"--puzzle-image-ratio":String(s.width/s.height)})}
                      @pointerdown=${e=>this.pointerDown(e)}
                      @pointermove=${e=>this.pointerMove(e)}
                      @pointerup=${()=>{this.gesture=void 0}}
                      @pointercancel=${()=>{this.gesture=void 0}}
                    >
                      <img src=${this.imageUrl} alt=${this.text("imageScreenshot")} draggable="false" />
                      <div
                        class="puzzle-import__crop"
                        style=${n({left:`${t.x/s.width*100}%`,top:`${t.y/s.height*100}%`,width:`${t.side/s.width*100}%`,height:`${t.side/s.height*100}%`})}
                      >
                        ${Array.from({length:this.size-1},(e,r)=>l`
                            <span
                              class="puzzle-import__line puzzle-import__line--x"
                              style=${n({left:`${(r+1)/this.size*100}%`})}
                            ></span>
                            <span
                              class="puzzle-import__line puzzle-import__line--y"
                              style=${n({top:`${(r+1)/this.size*100}%`})}
                            ></span>
                          `)}
                      </div>
                    </div>
                    <div class="puzzle-import__coordinates">
                      ${["x","y","side"].map(e=>l`
                          <md-outlined-text-field
                            type="number"
                            label=${this.text(e==="x"?"imageX":e==="y"?"imageY":"imageSide")}
                            min=${e==="side"?this.size*8:0}
                            max=${e==="side"?Math.min(s.width,s.height):e==="x"?s.width-t.side:s.height-t.side}
                            .value=${String(Math.round(t[e]))}
                            @change=${r=>{const h=Number(r.target.value);Number.isFinite(h)&&this.setCrop({...t,[e]:h})}}
                          ></md-outlined-text-field>
                        `)}
                    </div>
                    <div class="cluster">
                      <button
                        type="button"
                        class="button button--tonal"
                        ?disabled=${this.busy}
                        @click=${()=>void this.analyze(!0)}
                      >
                        ${this.text("imageLocate")}
                      </button>
                      <button
                        type="button"
                        class="button button--tonal"
                        ?disabled=${this.busy}
                        @click=${()=>void this.analyze()}
                      >
                        ${this.text("imageRecognize")}
                      </button>
                      ${this.busy?l`
                              <button
                                type="button"
                                class="button button--text"
                                @click=${()=>{this.stop(),this.requestUpdate()}}
                              >
                                ${this.text("cancel")}
                              </button>
                            `:p}
                    </div>
                  `:p}
            ${i?l`
                    <section class="stack">
                      <h3 class="detail-section-title" lang=${this.songLanguage}>${this.songName}</h3>
                      <div
                        class="puzzle-import__preview"
                        role="region"
                        aria-label=${this.text("imagePreview")}
                        tabindex="0"
                      >
                        <div
                          class="puzzle-import__board"
                          style=${n({"--puzzle-columns":String(this.size),"--puzzle-cover":`url(${JSON.stringify(this.cover)})`})}
                        >
                          ${i.tiles.map((e,r)=>{const h=a.indexOf(e);return l`
                              <button
                                type="button"
                                class="puzzle-import__tile"
                                data-empty=${String(e===0)}
                                data-uncertain=${String(i.uncertain.includes(r))}
                                aria-pressed=${String(this.selected===r)}
                                aria-label=${`${e===0?this.text("blank"):this.text("tile",{tile:e})}, ${this.text("position",{row:Math.floor(r/this.size)+1,column:r%this.size+1})}${i.uncertain.includes(r)?`, ${this.text("imageReview",{count:1})}`:""}`}
                                style=${n({"--puzzle-fragment-x":`${h%this.size/(this.size-1)*100}%`,"--puzzle-fragment-y":`${Math.floor(h/this.size)/(this.size-1)*100}%`})}
                                @click=${()=>this.swap(r)}
                              >
                                <span>${e||this.text("blank")}</span>
                              </button>
                            `})}
                        </div>
                      </div>
                    </section>
                  `:p}
          </div>
          <footer class="dialog__actions">
            <button type="button" class="button button--text" @click=${()=>this.close()}>
              ${this.text("cancel")}
            </button>
            <button type="button" class="button" ?disabled=${this.busy||!this.valid()} @click=${()=>this.apply()}>
              ${this.text("imageApply")}
            </button>
          </footer>
        </div>
      </dialog>
    `}}customElements.get("song-puzzle-import")||customElements.define("song-puzzle-import",$);export{$ as SongPuzzleImport};
