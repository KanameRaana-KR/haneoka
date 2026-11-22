const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/image-gallery.jDvuAiLp.js","_astro/preload-helper.BlTxHScW.js","_astro/lit-element.Bc_VOJIm.js","_astro/lit-html.DhDqt3I2.js","_astro/modal.D-GY7Vdy.js","_astro/overlay.CAlyPMjs.js","_astro/catalog.CfAhzaok.js","_astro/client.BYho01b_.js","_astro/temporary-public-routing.BsxzEC6B.js","_astro/interface-route.C7eSW2gB.js","_astro/locales.DtpYD_uK.js","_astro/release-server.j-atVW2C.js","_astro/document-url.BFFpyWb5.js","_astro/document-address.dywC0kBs.js","_astro/resource-route.BR5kLHYo.js","_astro/controls.BCr1YKFS.js","_astro/icon.BSt8MVsq.js","_astro/card-rarity.Bj6Ka5JZ.js","_astro/lazy-images.2hwWuBaG.js","_astro/content-request.DQ1rIr6o.js","_astro/user-roles.BBzq6-HC.js","_astro/spoiler-content.Ir13N6R6.js","_astro/loading-indicator.dXh2gc3V.js","_astro/image-dimensions.lsZdhmjC.js","_astro/_path_.DOg8h1BU.css"])))=>i.map(i=>d[i]);
import{_ as x}from"./preload-helper.BlTxHScW.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import{h as B}from"./hydrate-workspace.CqzYTlrg.js";import"./linear-progress.Du-QQIqh.js";import"./lit-element.Bc_VOJIm.js";import{b as s,A as l}from"./lit-html.DhDqt3I2.js";import{G as N}from"./game-records-cards.DnkuNNO_.js";import{c}from"./client.BYho01b_.js";import{p as S,a as P,J as R,l as Q,f as j}from"./catalog.CfAhzaok.js";import{r as G}from"./release-server.j-atVW2C.js";import{R as b}from"./request-scope.N4apwAcW.js";import{downloadBlob as z}from"./canvas-capture.DOGm0a10.js";import{i as A}from"./controls.BCr1YKFS.js";import{i as m}from"./icon.BSt8MVsq.js";import{r as L}from"./page-data.CoUysx63.js";import{n as w}from"./document-url.BFFpyWb5.js";import{u as J}from"./detail-navigation.DDRFcg4B.js";import{l as Y}from"./resource-route.BR5kLHYo.js";import"./interface-route.C7eSW2gB.js";import{a as k,e as H}from"./state.Ck623oKm.js";import{a as W,c as K,b as V,s as X}from"./app-bar.CQ9Fi2qQ.js";import{d as U,G as _,a as Z}from"./game-records.YqMN_7G0.js";/* empty css                                */import{s as ee}from"./community-viewer.C7_AH-Ek.js";import{s as te}from"./snackbar.D8p2-_Nm.js";import{P as ie,a as re,b as ae,p as se}from"./game-records.BcqoVowg.js";/* empty css                          *//* empty css                                */import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";import"./loading-indicator.dXh2gc3V.js";import"./card-growth.Cv0vV_gt.js";import"./temporary-public-routing.BsxzEC6B.js";import"./locales.DtpYD_uK.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";/* empty css                        */import"./content-policy-browser.sJlSzFcH.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./content-release.T5Qse4HZ.js";import"./document-address.dywC0kBs.js";import"./loading-progress.C8Gf5z9T.js";import"./kr.DQfuAfK4.js";function O(o){return o==="jp"?"[0-9]{1,19}":`[${o==="tw"?"2":o==="en"?"3":"4"}][0-9]{10}`}function C(o,e){return new RegExp(`^${O(o)}$`,"u").test(e)&&BigInt(e)>0n&&BigInt(e)<=9223372036854775807n}function le(o,e){return o&&new RegExp(`^/api/v1/game/records/${e}/(?:songs/[1-9][0-9]*/ranking|events/[1-9][0-9]*/(?:latest|total/latest|challenges/[1-9][0-9]*/ranking))$`,"u").test(o)?o:null}function oe(o){if(!o||!o.startsWith("/")||o.length>2048)return null;const e=new URL("https://profile.invalid");try{const t=new URL(o,e);return t.origin===e.origin?`${t.pathname}${t.search}${t.hash}`:null}catch{return null}}let ne=0;const D="haneoka.player-profile.recent.v1",ce=20;function pe(){try{const o=JSON.parse(localStorage.getItem(D)||"[]");return Array.isArray(o)?o:[]}catch{return[]}}function M(o){const e=o.trim();return/^[0-9]{1,19}$/u.test(e)?BigInt(e).toString():e}function I(o){return se(o)??(C("jp",o)?"jp":null)}class he extends N{static properties={locale:{type:String},region:{state:!0},profilePhase:{state:!0},profile:{state:!0},profileImageId:{state:!0},profileImageDownloading:{state:!0},selectedEntry:{state:!0},queryInvalid:{state:!0},recent:{state:!0},linked:{state:!0},communityOwner:{state:!0}};profileRequests=new b;profileDownloads=new b;lifetime;selectedProfileId="";profileQuery="";profileObservedAtMs=null;profileClockOffsetMs=0;presenceTimer;rankingEndpoint=null;points=!1;searchInitialized=!1;owner=`player-profile-${++ne}`;constructor(){super(),this.locale="en",this.region="tw",this.profilePhase="idle",this.profile=null,this.profileImageId="",this.profileImageDownloading=!1,this.selectedEntry=null,this.queryInvalid=!1,this.recent=[],this.linked=[],this.communityOwner=null}connectedCallback(){const e=L(this);e&&this.preparePage(e),super.connectedCallback(),this.hasAttribute("data-prerendered")?this.updateComplete.then(()=>this.connectProfile()):this.connectProfile()}preparePage(e){this.cardCatalogs=e,this.region=U("intl",this.locale)}update(e){this.hasAttribute("data-prerendered")&&(B(this.render(),this,this.renderOptions),this.removeAttribute("data-prerendered")),super.update(e)}renderStaticChrome(){this.syncChrome(!0)}connectProfile(){if(!this.isConnected)return;this.lifetime=new AbortController,this.searchInitialized=!1,this.cardCatalogs=L(this)||this.cardCatalogs,this.locale=S(this.locale);const e=w(),t=e.searchParams.get("region");this.profileQuery=M(e.searchParams.get("profileId")||"");const i=_.find(r=>r.value===t)?.value;this.region=I(this.profileQuery)??(this.profileQuery?null:i)??U(G(),this.locale),this.rankingEndpoint=le(e.searchParams.get("ranking"),this.region),this.points=!!(this.rankingEndpoint&&/\/events\/[1-9][0-9]*\/latest$/u.test(this.rankingEndpoint)),addEventListener("haneoka:locale-ready",()=>{this.locale=S(this.locale),this.requestUpdate()},{signal:this.lifetime.signal}),this.recent=pe(),ee()&&P("/api/v1/account/game-accounts",{credentials:"same-origin",signal:this.lifetime.signal}).then(({accounts:r})=>{this.linked=r.map(n=>({region:Z(n.region,this.locale,n.playerUid),id:n.playerUid,name:n.displayName||n.playerUid}))}).catch(()=>{}),this.profileQuery&&(C(this.region,this.profileQuery)?this.loadProfile(this.profileQuery):this.queryInvalid=!0)}disconnectedCallback(){clearTimeout(this.presenceTimer),this.profileRequests.cancel(),this.resetProfileImage(),this.lifetime?.abort(),W(this.owner),K(this.owner),super.disconnectedCallback()}currentProfile(e,t,i){return this.isConnected&&this.region===t&&this.selectedProfileId===i&&this.profileRequests.current(e)}async loadProfile(e,t=0){if(!C(this.region,e)){this.queryInvalid=!0;return}const i=this.region,r=this.profileRequests.begin();clearTimeout(this.presenceTimer),this.resetProfileImage(),this.queryInvalid=!1,this.selectedProfileId=e,this.profileQuery=e,this.selectedEntry=null,this.profile=null,this.profilePhase="loading";const n=this.rankingEndpoint;n&&P(n,{signal:r,cache:"no-store",credentials:"same-origin"}).then(a=>{this.currentProfile(r,i,e)&&(this.selectedEntry=a.rows.find(p=>p.profileId===e)||null)}).catch(()=>{});try{const a=await P(`/api/v1/game/records/${i}/players/${encodeURIComponent(e)}?refresh=1`,{signal:r,cache:"no-store",credentials:"same-origin",headers:{accept:"application/json"}});if(!this.currentProfile(r,i,e))return;const p=a.serverTimeMs==null?0:a.serverTimeMs-Date.now(),f=await this.readCommunityOwner(i,e,r);if(!this.currentProfile(r,i,e))return;this.profile=a.profile,this.profileObservedAtMs=a.provider==="moenotes"?null:a.fetchedAtMs,this.profileClockOffsetMs=p,this.schedulePresenceUpdate(),this.communityOwner=f,this.rememberPlayer({region:i,id:e,name:a.profile.name||e});const g=this.profilePages();this.profileImageId=g.length?String(g[0].page):"",g.length&&x(()=>import("./image-gallery.jDvuAiLp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])),this.profilePhase="ready"}catch(a){const p=a instanceof R&&a.status===503?a.body?.error?.retryAfter:null;if(p&&t<ce&&this.currentProfile(r,i,e))return await new Promise(f=>setTimeout(f,p*1e3)),this.currentProfile(r,i,e)?this.loadProfile(e,t+1):void 0;this.currentProfile(r,i,e)&&(this.profilePhase=a instanceof R&&(a.status===403||a.status===404)?"unavailable":"error")}}async readCommunityOwner(e,t,i){const r=new b,n=r.begin(i),a=setTimeout(()=>r.cancel(),5e3);try{const{owner:p}=await P(`/api/v1/community/game-accounts/${e==="jp"?"jp":"intl"}/${encodeURIComponent(t)}`,{signal:n,credentials:"same-origin"});return p}catch{return null}finally{clearTimeout(a),r.cancel()}}schedulePresenceUpdate(){if(clearTimeout(this.presenceTimer),this.profileObservedAtMs==null||this.profile?.lastUpdatedAtMs==null)return;const e=Date.now()+this.profileClockOffsetMs,t=this.profileObservedAtMs+ie;if(e>=t)return;const i=this.profile.lastUpdatedAtMs+re,r=i>e?Math.min(i,t):t;this.presenceTimer=setTimeout(()=>{this.requestUpdate(),this.schedulePresenceUpdate()},r-e+1)}rememberPlayer(e){this.recent=[e,...this.recent.filter(t=>t.id!==e.id||t.region!==e.region)].slice(0,8);try{localStorage.setItem(D,JSON.stringify(this.recent))}catch{}}openPlayer(e){this.submitProfile(e.id)}renderLanding(){const e=(t,i,r)=>r.length?s`
            <section class="surface song-ranking__landing-group">
              <h2 class="detail-section-title">
                <span class="detail-section-title__icon" aria-hidden="true">${m(i,18)}</span>
                <span class="detail-section-title__label">${t}</span>
              </h2>
              <ul class="list" role="list">
                ${r.map(n=>s`
                    <li>
                      <button class="list-item list-item--two-line list-item--interactive" type="button" @click=${()=>this.openPlayer(n)}>
                        <span class="list-item__avatar">${this.regionFlag(I(n.id)??n.region,24)}</span>
                        <span class="list-item__body">
                          <span class="list-item__headline">${n.name}</span>
                          <span class="list-item__supporting">${n.id}</span>
                        </span>
                      </button>
                    </li>
                  `)}
              </ul>
            </section>
          `:l;return!this.recent.length&&!this.linked.length?k({title:c(this.locale,"tools.playerProfile.queryIdle","Enter a player ID"),icon:"person_search"}):s`
      <div class="song-ranking__landing">
        ${e(c(this.locale,"tools.playerProfile.linked","Your game accounts"),"sports_esports",this.linked)}
        ${e(c(this.locale,"tools.playerProfile.recent","Recent lookups"),"history",this.recent)}
      </div>
    `}syncUrl(e){const t=new URL(w());t.searchParams.set("region",this.region),e?t.searchParams.set("profileId",e):t.searchParams.delete("profileId"),this.rankingEndpoint?t.searchParams.set("ranking",this.rankingEndpoint):t.searchParams.delete("ranking"),t.pathname===location.pathname&&history.replaceState(history.state,"",t)}submitProfile(e){const t=M(e),i=I(t);if(!i){this.profileRequests.cancel(),this.queryInvalid=!0;return}this.openProfile(i,t)}openProfile(e,t){e!==this.region&&(this.region=e,this.rankingEndpoint=null,this.points=!1),this.syncUrl(t),this.loadProfile(t)}regionFlag(e,t){const i=_.find(r=>r.value===e);return i?s`<img src=${i.flag} width=${t} height=${t} alt="" />`:m("person",20)}syncChrome(e=!1){const t=e?null:oe(w().searchParams.get("return"));if(V(this.owner,s`
        ${t?s`
                <a
                  class="icon-button"
                  href=${t}
                  aria-label=${c(this.locale,"common.actions.back","Back")}
                  title=${c(this.locale,"common.actions.back","Back")}
                >
                  ${m("arrow_back",24)}
                </a>
              `:l}
        ${A({label:c(this.locale,"common.actions.refresh","Refresh"),icon:"refresh",disabled:!this.selectedProfileId||this.profilePhase==="loading",onClick:()=>void this.loadProfile(this.selectedProfileId)})}
      `,this),X(this.owner,{value:this.profileQuery,label:this.label("profileSearch","Player profile ID"),onInput:r=>{this.profileQuery=r,this.queryInvalid=!1},onSubmit:r=>this.submitProfile(r),expanded:e&&this.profilePhase==="idle"}),e)return;const i=document.querySelector(`[data-app-bar-search-owner="${this.owner}"] input`);i&&(i.inputMode="numeric",i.maxLength=19,i.pattern=O("jp"),i.required=!0),this.searchInitialized||(this.searchInitialized=!0,this.profilePhase==="idle"&&document.querySelector(`[data-app-bar-search-owner="${this.owner}"] .top-app-bar__search-toggle`)?.click()),J(this,c(this.locale,"tools.playerProfile.title","Player lookup"))}updated(e){this.isConnected&&this.syncChrome()}render(){const e=this.profilePhase==="loading";return s`
      <section class="song-ranking-page player-profile-page" aria-label=${c(this.locale,"tools.playerProfile.title","Player lookup")}>
        <div class="song-ranking__progress" aria-hidden=${e?l:"true"}>
          ${e?s`
                  <md-linear-progress
                    indeterminate
                    aria-label=${c(this.locale,"common.states.loading","Loading")}
                  ></md-linear-progress>
                `:l}
        </div>
        ${this.queryInvalid?k({title:c(this.locale,"tools.playerProfile.invalidId","Check the player ID"),icon:"error"}):this.profilePhase==="idle"?this.renderLanding():this.renderProfile()}
      </section>
    `}resetProfileImage(){this.profileDownloads.cancel(),this.profileImageId="",this.profileImageDownloading=!1}profilePages(){const e=this.profile?.profileCard;return(e?.pages??e?.thumbnailUrls.map((i,r)=>({page:r+1,imageUrl:i,sourceUrl:i}))??[]).filter(i=>!!i.imageUrl)}async downloadProfileImage(){const e=this.profilePages().find(i=>String(i.page)===this.profileImageId);if(!e?.downloadUrl||this.profileImageDownloading)return;const t=this.profileDownloads.begin();this.profileImageDownloading=!0;try{const i=await fetch(e.downloadUrl,{credentials:"omit",signal:AbortSignal.any([t,AbortSignal.timeout(15e3)])});if(!i.ok)throw new Error("Image download failed");const r=await i.blob();if(!r.type.startsWith("image/"))throw new Error("Image download failed");if(!this.isConnected||!this.profileDownloads.current(t))return;const n={"image/png":"png","image/jpeg":"jpg","image/webp":"webp","image/gif":"gif"}[r.type]||"image";await z(r,`profile-${this.selectedProfileId}-${e.page}.${n}`)}catch{this.isConnected&&this.profileDownloads.current(t)&&te(c(this.locale,"tools.playerProfile.downloadFailed","Profile card download failed"),{error:!0})}finally{this.profileDownloads.current(t)&&(this.profileImageDownloading=!1)}}profileFact(e,t){return t==null||t===""?l:s`
          <div>
            <dt>${e}</dt>
            <dd>${t}</dd>
          </div>
        `}renderProfile(){if(this.profilePhase==="loading")return l;if(this.profilePhase==="unavailable")return k({title:this.label("profileUnavailable","Profile unavailable"),icon:"person_off"});if(this.profilePhase==="error")return H(this.label("profileUnavailable","Profile unavailable"),this.label("retry","Retry"),()=>this.selectedProfileId&&void this.loadProfile(this.selectedProfileId));const e=this.profile;if(!e)return l;const t=e.name||this.label("privatePlayer","Unknown player"),i=e.favoriteMemberCard,r=e.favoriteMemberCardMasterId??(i?.cardId==null?null:String(i.cardId)),n=this.sourceCatalog(),a=r?n?.member[r]:void 0,p=a?Q(a.name,this.locale):"",f=a&&r?Y({server:a.server,locale:this.locale,kind:"member-cards",id:r}):"",g=e.level??this.levelFromExp(this.sourceCatalog()?.playerLevels,e.rankExp),u=e.profileCard,y=this.profilePages().map(h=>({id:String(h.page),source:h.imageUrl,label:`${u?.name||this.label("profileCard","Profile card")} / ${h.page}`})),$=a?this.levelFromExp(n?.levels.member[String(a.levelGroup)],i?.exp??null):null,E=a&&i?.awakeCount!=null?n?.memberLimits[`${a.rarity}:${i.awakeCount}`]:null,q=$==null?null:E?Math.min($,E):$,v=e.totalFavoriteExact!=null&&/^\d+$/.test(e.totalFavoriteExact)?BigInt(e.totalFavoriteExact).toLocaleString(this.locale):e.totalFavorite?.toLocaleString(this.locale),d=this.selectedEntry,F=ae(e.lastUpdatedAtMs,this.profileObservedAtMs,Date.now()+this.profileClockOffsetMs),T=_.find(h=>h.value===this.region);return s`
      <div class="song-ranking__profile">
        <header class="player-profile-hero">
          ${f?s`
                  <a class="song-ranking__avatar" href=${f} aria-label=${p} title=${p}>
                    ${this.profileMedia(t,a?.avatar||"")}
                  </a>
                `:s`
                  <span class="song-ranking__avatar">${this.profileMedia(t,a?.avatar||"")}</span>
                `}
          <div class="player-profile-hero__identity">
            <h2>${t}</h2>
            <p class="player-profile-hero__id">
              ${this.regionFlag(this.region,20)}
              <span>${this.label(T.key,this.region)}</span>
              <span aria-hidden="true">/</span>
              <span>${this.selectedProfileId}</span>
            </p>
            ${g!=null||v!=null||e.lastUpdatedAtMs!=null?s`
                    <div class="cluster player-profile-hero__chips">
                      <span class="chip chip--tonal chip--static player-profile-presence" title=${c(this.locale,"tools.playerProfile.presence","Online status")}>
                        ${m("circle",12)}
                        <span class="chip__label">${c(this.locale,`tools.playerProfile.${F??"presenceUnknown"}`,"Unknown")}</span>
                      </span>
                      ${g!=null?s`
                              <span class="chip chip--tonal chip--static">
                                <span class="chip__label">${this.label("cardLevel","Lv. {level}").replace("{level}",String(g))}</span>
                              </span>
                            `:l}
                      ${v!=null?s`
                              <span class="chip chip--tonal chip--static">
                                ${m("favorite",18)}<span class="sr-only">${this.label("favorites","Likes received")}</span><span class="chip__label">${v}</span>
                              </span>
                            `:l}
                    </div>
                  `:l}
            ${e.lastUpdatedAtMs!=null&&Number.isFinite(e.lastUpdatedAtMs)?s`
                  <p class="player-profile-hero__id">
                    ${m("history",18)}
                    <span>${c(this.locale,"tools.playerProfile.lastLogin","Last login")}</span>
                    <time datetime=${new Date(e.lastUpdatedAtMs).toISOString()}>
                      ${j(this.locale,e.lastUpdatedAtMs,{time:!0,year:"always"})}
                    </time>
                  </p>
                `:l}
          </div>
          ${this.communityOwner?s`
                  <a class="player-profile-owner" href=${`/${this.locale}/community/users/${this.communityOwner.uid}/`}>
                    <span class="player-profile-owner__icon" aria-hidden="true">${m("account_circle",24)}</span>
                    <span class="player-profile-owner__copy">
                      <span>${c(this.locale,"tools.playerProfile.communityOwner","Community profile")}</span>
                      <strong>${this.communityOwner.name}</strong>
                    </span>
                    ${m("chevron_right",24)}
                  </a>
                `:l}
        </header>
        <div class="song-ranking__profile-layout">
          ${u&&(y.length||u.name||u.slot!=null)?s`
                  <section class="song-ranking__profile-namecard">
                    <header class="song-ranking__profile-section-head">
                      <h3>${u.name||this.label("profileCard","Profile card")}</h3>
                      ${u.slot!=null?s`
                              <span>
                                ${this.label("profileCardSlot","Slot {slot}").replace("{slot}",String(u.slot))}
                              </span>
                            `:l}
                      ${y.length?A({icon:"download",label:c(this.locale,"common.actions.download","Download"),disabled:this.profileImageDownloading||!this.profilePages().find(h=>String(h.page)===this.profileImageId)?.downloadUrl,onClick:()=>void this.downloadProfileImage()}):l}
                    </header>
                    ${this.profileImageDownloading?s`
                            <md-linear-progress
                              indeterminate
                              aria-label=${c(this.locale,"common.states.loading","Loading")}
                            ></md-linear-progress>
                          `:l}
                    ${y.length?s`
                            <image-gallery
                              natural
                              .images=${y}
                              .active=${this.profileImageId}
                              @image-change=${h=>{this.profileImageId=h.detail}}
                              .locale=${this.locale}
                              .title=${this.label("profileCard","Profile card")}
                            ></image-gallery>
                          `:l}
                  </section>
                `:l}
          ${f?s`
                  <section class="song-ranking__profile-favorite surface">
                    <h3>${this.label("favoriteCard","Favorite member card")}</h3>
                    <a class="song-ranking__profile-favorite-card" href=${f}>
                      <span class="song-ranking__profile-favorite-art card-media card-media--member">
                        ${this.profileMedia(p,a?.image||"")}
                        ${a?.attributeIcon?s`<img class="card-media__attribute" src=${a.attributeIcon} alt="" />`:l}
                        ${a?.rarityIcon?s`<img class="card-media__rarity" src=${a.rarityIcon} alt="" />`:l}
                        ${a?this.renderCardProgress(a,{level:q,training:i?.awakeCount??null,rank:i?.cardRank??null,liveSkillLevel:i?.liveSkillLevel,gekisoSkillLevel:i?.performanceSkillLevel}):l}
                      </span>
                      <strong>${p}</strong>
                    </a>
                  </section>
                `:l}
        </div>
        ${d&&(d.deckName||d.totalPower!=null||d.cards.length||d.score!=null)?s`
                <section class="song-ranking__profile-deck">
                  <header class="song-ranking__profile-section-head">
                    <h3>${d.deckName||this.label("deck","Deck")}</h3>
                  </header>
                  <dl class="spec-list spec-list--split song-ranking__profile-facts">
                    ${this.profileFact(this.label("power","Power"),d.totalPower?.toLocaleString(this.locale))}
                    ${this.profileFact(this.points?this.label("points","Points"):this.label("score","Score"),d.score?.toLocaleString(this.locale))}
                    ${this.profileFact(this.label("rank","Rank"),d.rank)}
                  </dl>
                  ${d.cards.length?s`
                          <div class="song-ranking__deck-cards" aria-label=${this.label("cards","Cards")}>
                            ${d.cards.map(h=>s`
                                <span class="song-ranking__deck-slot">
                                  ${this.renderCard(h)}${h.supportCardId!=null?this.renderCard(h,!0):l}
                                </span>
                              `)}
                          </div>
                        `:l}
                </section>
              `:l}
      </div>
    `}}customElements.get("player-profile-workspace")||customElements.define("player-profile-workspace",he);
