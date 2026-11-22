import{i as m}from"./lit-element.Bc_VOJIm.js";import{b as t,A as d}from"./lit-html.DhDqt3I2.js";import{c as v,u as o}from"./catalog.CfAhzaok.js";import{i as _}from"./controls.BCr1YKFS.js";import{i as p}from"./icon.BSt8MVsq.js";import{o as f}from"./facet-order.wTm3gWmx.js";/* empty css                        */const B=[["18.82622%","43.36100%","90.85714%","68.57143%","-11.853991deg"],["27.59146%","77.80083%","93.28571%","33.08571%","-44.430576deg"],["74.16159%","67.20954%","3.51429%","40.37143%","29.744215deg"],["73.93293%","25.82988%","7.42857%","80.62857%","-29.195091deg"]],u=[["19.28354%","30.18672%","90.60000%","75.37143%","29.658096deg"],["20.88415%","69.91701%","96.00000%","44.85714%","-36.740987deg"],["68.90244%","80.18672%","10.71429%","13.57143%","52.050356deg"],["79.64939%","49.48133%","-0.28571%","50.00000%","3.755137deg"],["71.95122%","20.12448%","9.34286%","86.82857%","-43.944990deg"]];class y extends m{static properties={options:{attribute:!1},activeBand:{state:!0},missingBoard:{state:!0}};constructor(){super(),this.activeBand=0,this.missingBoard=!1}createRenderRoot(){return this}willUpdate(s){const e=s.get("options");if(s.has("options")&&(!e||e.first!==this.options.first||e.second!==this.options.second)){const r=this.options.characters.find(c=>c.value===(this.options.second||this.options.first));this.activeBand=r?.bandId||this.options.characters[0]?.bandId||1,this.missingBoard=!1}}imageFallback(s){const e=s.currentTarget;e.classList.contains("story-board__background")?this.missingBoard=!0:e.hidden=!0}render(){if(!this.options)return d;const s=this.options,e=f(s.characters),r=e.find(a=>a.value===s.first),c=e.filter(a=>a.value!==s.first&&a.bandId===this.activeBand&&(!s.partnerValues||s.partnerValues.has(a.value))),$=r?.bandId===this.activeBand,g=$?B:u,h=s.bands||[...new Set(e.map(a=>a.bandId||0))].filter(Boolean).map(a=>({id:a,label:String(a),image:""})),i=`/assets/${s.server||v()}/Assets/AddressableResources`;return t`
      <section class="character-pair" aria-label=${o(s.locale,"navigation.characters")}>
        ${s.onFirst?t`
                <div class="character-pair__toolbar">
                  <details class="character-pair__picker" ?hidden=${!s.onFirst}>
                    <summary>
                      ${r?.image?t`
                              <img src=${r.image} alt="" />
                            `:p("person",24)}
                      <span>${r?.label||o(s.locale,"story.labels.firstCharacter")}</span>
                      ${p("expand_more",20)}
                    </summary>
                    <div class="character-pair__choices">
                      ${e.map(a=>t`
                          <button
                            type="button"
                            aria-pressed=${a.value===s.first}
                            @click=${l=>{s.onFirst?.(a.value),l.currentTarget.closest("details")?.removeAttribute("open")}}
                          >
                            ${a.image?t`
                            <img src=${a.image} alt="" loading="lazy" />
                          `:p("person",24)}
                            <span>${a.label}</span>
                          </button>
                        `)}
                    </div>
                  </details>
                  <button
                    class="button button--tonal"
                    type="button"
                    aria-pressed=${!s.second}
                    @click=${()=>s.onSecond("")}
                  >
                    ${o(s.locale,"common.states.all")}
                  </button>
                  ${s.onSwap?_({icon:"swap_horiz",label:o(s.locale,"common.actions.swap"),disabled:!s.second,onClick:s.onSwap}):d}
                </div>
              `:d}
        <div class="character-pair__bands" role="group" aria-label=${o(s.locale,"catalog.fields.bands")}>
          ${h.map(a=>t`
              <button
                type="button"
                aria-pressed=${this.activeBand===a.id}
                aria-label=${a.label}
                @click=${()=>{this.activeBand=a.id,this.missingBoard=!1}}
              >
                ${a.image?t`
                        <img src=${a.image} alt=${a.label} />
                      `:a.label}
              </button>
            `)}
        </div>
        ${this.missingBoard?t`
                <div class="character-pair__choices character-pair__choices--fallback">
                  ${c.map(a=>t`
                      <button
                        type="button"
                        aria-pressed=${a.value===s.second}
                        @click=${()=>s.onSecond(s.second===a.value?"":a.value)}
                      >
                        ${a.image?t`
                                <img src=${a.image} alt="" />
                              `:p("person",32)}
                        <span>${a.label}</span>
                      </button>
                    `)}
                </div>
              `:t`
                <div class="story-board">
                  <div class="story-board__stage">
                    <img
                      class="story-board__background"
                      src=${`${i}/Band/${this.activeBand}/Friendship/photo_board.png`}
                      alt=""
                      @error=${this.imageFallback}
                    />
                    ${$?t`
                            <img
                              class="story-board__logo"
                              src=${`${i}/Band/${this.activeBand}/band_logo.png`}
                              alt=""
                              @error=${this.imageFallback}
                            />
                          `:d}
                    <img
                      class="story-board__lead"
                      src=${`${i}/Character/Image/${s.first}/character_sprite.png`}
                      alt=${r?.label||""}
                      @error=${this.imageFallback}
                    />
                    <div class="story-board__partners" role="group" aria-label=${o(s.locale,"story.labels.secondCharacter")}>
                      ${c.map((a,l)=>{const n=g[l]||u[0];return t`
                          <button
                            type="button"
                            class=${s.second===a.value?"is-selected":""}
                            aria-pressed=${s.second===a.value}
                            aria-label=${a.label}
                            title=${a.label}
                            style=${`--slot-x:${n[0]};--slot-y:${n[1]};--arrow-x:${n[2]};--arrow-y:${n[3]};--arrow-rotation:${$&&this.activeBand===2&&l===0?"168.146055deg":n[4]}`}
                            @click=${()=>s.onSecond(s.second===a.value?"":a.value)}
                          >
                            <img
                              class="story-board__arrow"
                              src=${`${i}/Band/${this.activeBand}/Friendship/FriendshipArrow_1.png`}
                              alt=""
                              @error=${this.imageFallback}
                            />
                            <span>
                              <img
                                src=${`${i}/Character/Image/${a.value}/board_icon.png`}
                                alt=""
                                @error=${this.imageFallback}
                              />
                            </span>
                          </button>
                        `})}
                    </div>
                  </div>
                </div>
              `}
      </section>
    `}}customElements.define("character-pair-board",y);function T(b){return t`
    <character-pair-board .options=${b}></character-pair-board>
  `}export{T as c};
