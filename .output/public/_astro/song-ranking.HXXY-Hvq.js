const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/event-team-analysis.BlKMwE-I.js","_astro/preload-helper.BlTxHScW.js","_astro/song-display.BUM043oH.js","_astro/catalog.CfAhzaok.js","_astro/client.BYho01b_.js","_astro/temporary-public-routing.BsxzEC6B.js","_astro/interface-route.C7eSW2gB.js","_astro/locales.DtpYD_uK.js","_astro/release-server.j-atVW2C.js","_astro/document-url.BFFpyWb5.js","_astro/document-address.dywC0kBs.js","_astro/resource-route.BR5kLHYo.js","_astro/lit-element.Bc_VOJIm.js","_astro/lit-html.DhDqt3I2.js","_astro/outlined-text-field.omMPAN5q.js","_astro/delegate.qnlMPWy4.js","_astro/outlined-field.BML1F-r4.js","_astro/on-report-validity.BygZsmbx.js","_astro/animation.BI-yjTPx.js","_astro/query-assigned-elements.N5HHHkzR.js","_astro/redispatch-event.Dod3cBoe.js","_astro/shared-styles.cssresult.CDtq61Of.js","_astro/validator.Cz1PymV-.js","_astro/outlined-select.BLpyNoqZ.js","_astro/elevation.CV0mocre.js","_astro/md-focus-ring.BFbx9fcs.js","_astro/list-controller.DhsW2nnj.js","_astro/shared.Z0K3ZZvG.js","_astro/select-option.DfVQFXUn.js","_astro/item.aw-mMCVK.js","_astro/ripple.DU62FgSE.js","_astro/switch.Cn4cAa2V.js","_astro/form-label-activation.C-ZPsH8j.js","_astro/checkbox-validator.BT-H8ZRB.js","_astro/fetch.D18jK1jC.js","_astro/data.CTobvNqO.js","_astro/icon.BSt8MVsq.js","_astro/modal.D-GY7Vdy.js","_astro/accordion.CRbde2Jj.js","_astro/state.Ck623oKm.js","_astro/Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js","_astro/loading-progress.C8Gf5z9T.js","_astro/linear-progress.Du-QQIqh.js","_astro/progress.BYlJSdrk.js","_astro/_mode_.BURFq5XP.css"])))=>i.map(i=>d[i]);
import{_}from"./preload-helper.BlTxHScW.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import{h as $}from"./hydrate-workspace.CqzYTlrg.js";import{G as R}from"./game-records-cards.DnkuNNO_.js";import"./linear-progress.Du-QQIqh.js";import{c as h}from"./client.BYho01b_.js";import"./lit-element.Bc_VOJIm.js";import{A as l,b as o}from"./lit-html.DhDqt3I2.js";import{p as C,a as k,J as f,f as A}from"./catalog.CfAhzaok.js";import{R as b}from"./request-scope.N4apwAcW.js";import{i as p}from"./icon.BSt8MVsq.js";import{s as u}from"./snackbar.D8p2-_Nm.js";import{m as S}from"./modal.D-GY7Vdy.js";import{i as d}from"./controls.BCr1YKFS.js";/* empty css                          */import{r as m}from"./page-data.CoUysx63.js";import{n as T}from"./document-url.BFFpyWb5.js";import{l as x,e as I,a as M}from"./state.Ck623oKm.js";import{a as P,b as q}from"./app-bar.CQ9Fi2qQ.js";import{G as y,d as w,g as L}from"./game-records.YqMN_7G0.js";const v=300*1e3;let D=0;class E extends R{static properties={locale:{type:String},server:{type:String},songId:{type:String,attribute:"song-id"},rankingEndpoint:{type:String,attribute:"ranking-endpoint"},embedded:{type:Boolean},points:{type:Boolean},summary:{type:Boolean},rankingTitle:{type:String,attribute:"ranking-title"},cardCatalogData:{attribute:!1},summaryHeading:{attribute:!1},summaryActions:{attribute:!1},analysisEvent:{attribute:!1},analysisChallengeId:{type:String,attribute:!1},region:{state:!0},phase:{state:!0},rows:{state:!0},stale:{state:!0},expanded:{state:!0},active:{type:Boolean},limit:{type:Number},start:{state:!0},target:{state:!0},searching:{state:!0},searchMatches:{state:!0},nextSearchCursor:{state:!0}};closeAnalysis;windowed=!1;query="";searchRequests=new b;rankingRequests=new b;lifetime;cache=new Map;rankingFailure=null;retryAt=0;retryTimer=0;pageAppBarOwner=`song-ranking-page-${++D}`;constructor(){super(),this.locale="en",this.server="intl",this.songId="",this.rankingEndpoint="",this.embedded=!1,this.points=!1,this.summary=!1,this.rankingTitle="",this.analysisChallengeId="",this.summaryHeading=l,this.summaryActions=l,this.region="tw",this.phase="idle",this.rows=[],this.stale=!1,this.expanded=!1,this.active=!0,this.limit=0,this.start=1,this.target=0,this.searching=!1,this.searchMatches=null,this.nextSearchCursor=null}initializePage(){this.cardCatalogs=this.cardCatalogData||m(this)||this.cardCatalogs;const e=T().searchParams.get("region");this.embedded||(this.region=y.some(t=>t.value===e)?e:w(this.server,this.locale)),this.phase="loading",this.loadRanking(this.region,!0)}connectedCallback(){this.hasAttribute("data-static-initial")&&this.preparePage(m(this)||{}),super.connectedCallback(),this.lifetime=new AbortController,addEventListener("haneoka:locale-ready",this.onLocale,{signal:this.lifetime.signal}),this.hasAttribute("data-prerendered")?this.updateComplete.then(()=>{this.isConnected&&this.initializePage()}):this.initializePage()}preparePage(e){this.cardCatalogs=e,this.region=w(this.server,this.locale),this.phase="loading"}adoptPageData(){const e=m(this);return e?(this.cardCatalogs=e,this.requestUpdate(),!0):!1}update(e){this.hasAttribute("data-prerendered")&&($(this.render(),this,this.renderOptions),this.removeAttribute("data-prerendered")),super.update(e)}renderStaticChrome(){this.syncChrome()}disconnectedCallback(){this.closeAnalysis?.(),this.rankingRequests.cancel(),this.searchRequests.cancel(),this.lifetime?.abort(),this.lifetime=void 0,window.clearTimeout(this.retryTimer),P(this.pageAppBarOwner),super.disconnectedCallback()}onLocale=()=>{this.locale=C(this.locale),this.requestUpdate()};get boardTitle(){return this.rankingTitle||this.label("title","Song ranking")}rankingUrl(e){return this.rankingEndpoint||`/api/v1/game/records/${e}/songs/${encodeURIComponent(this.songId)}/ranking`}currentRanking(e,t,s){return this.isConnected&&this.region===t&&this.rankingUrl(t)===s&&this.rankingRequests.current(e)}async loadRanking(e,t=!1){this.rankingFailure=null,this.retryAt=0,window.clearTimeout(this.retryTimer);const s=this.cache.get(this.rankingUrl(e));if(!t&&s&&Date.now()-s.storedAt<v){this.rows=s.rows,this.phase="ready",this.stale=s.stale,this.rankingLoaded(s.data);return}const a=this.rankingUrl(e),n=this.rankingRequests.begin();this.rows=s?.rows||[],this.phase="loading",this.stale=!!s;try{const i=await k(a,{signal:n,cache:"no-store",credentials:"same-origin",headers:{accept:"application/json"}});if(!this.currentRanking(n,e,a))return;const r={data:i,rows:i.snapshotId&&i.snapshotId===s?.snapshotId?s.rows:i.rows.slice(0,100),snapshotId:i.snapshotId,provider:i.provider,storedAt:Date.now(),reportedAt:i.observedAtMs??i.fetchedAtMs??0,stale:i.stale,maxRank:i.maxRank};this.cache.set(a,r),this.cache.size>16&&this.cache.delete(this.cache.keys().next().value),this.rows=r.rows,this.phase="ready",this.stale=r.stale,this.rankingLoaded(i),this.target&&this.updateComplete.then(()=>this.scrollToTarget())}catch(i){if(!this.currentRanking(n,e,a))return;if(i instanceof f){const g=i.body?.error;g&&typeof g.kind=="string"&&(this.rankingFailure=g)}const r=this.rankingFailure?.retryAfter;r!=null&&Number.isFinite(r)&&r>0&&(this.retryAt=Date.now()+r*1e3,this.retryTimer=window.setTimeout(()=>this.requestUpdate(),r*1e3));const c=this.rankingFailure?.kind==="not_found";c&&this.cache.delete(a),this.rows=c?[]:s?.rows||[],this.phase=c?"ready":"error",this.stale=!c&&!!s,this.rankingLoaded(c?null:s?.data??null)}}selectRegion(e){if(!y.some(n=>n.value===e)||e===this.region)return;const t=e;this.rankingFailure=null,this.retryAt=0,window.clearTimeout(this.retryTimer),this.region=t;const s=new URL(location.href);s.searchParams.set("region",t),s.searchParams.delete("profileId"),history.replaceState(history.state,"",s),this.expanded=!1,this.rankingRequests.cancel();const a=this.cache.get(this.rankingUrl(t));this.rows=a?.rows||[],this.stale=a?a.stale:!1,this.phase=a&&Date.now()-a.storedAt<v?"ready":"loading",this.phase!=="ready"&&this.loadRanking(t,!0)}refresh(){Date.now()<this.retryAt||(this.rankingRequests.cancel(),this.loadRanking(this.region,!0))}formatTime(e){const s=this.cache.get(this.rankingUrl(e))?.reportedAt||0;return s?A(this.locale,s,{time:!0}):""}renderPageActions(){return o`
      ${L(this.locale,this.region,e=>this.selectRegion(e))}
      ${d({label:this.label("refresh","Refresh ranking"),icon:"refresh",disabled:this.phase==="loading"||Date.now()<this.retryAt,onClick:()=>this.refresh()})}
    `}renderRow(e){const t=e.scoreExact?BigInt(e.scoreExact).toLocaleString(this.locale):this.formatScore(e.score);return this.renderRankingRow({...e,target:e.rank===this.target,bare:this.limit>0,level:this.levelFromExp(this.sourceCatalog()?.playerLevels,e.rankExp),href:"",score:t,scoreLabel:this.points?this.label("points","Points"):this.label("score","Score"),...this.analysisEvent&&e.totalPower?{scoreAction:{label:h(this.locale,"catalog.rankings.analysis.title","Team analysis"),onClick:()=>void this.analyzeTeam(e)}}:{},...this.points||this.summary||this.limit?{cards:void 0}:{}})}async analyzeTeam(e){const t=this.analysisEvent;if(!t)return;const{showEventTeamAnalysis:s}=await _(async()=>{const{showEventTeamAnalysis:a}=await import("./event-team-analysis.BlKMwE-I.js");return{showEventTeamAnalysis:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]));!this.isConnected||!this.active||this.analysisEvent!==t||(this.closeAnalysis?.(),this.closeAnalysis=s({locale:this.locale,region:this.region,event:t,challengeId:this.analysisChallengeId,kind:this.points?"points":this.analysisChallengeId?"challenge":"total",row:e,observedAtMs:this.cache.get(this.rankingUrl(this.region))?.reportedAt??0}))}get skeletonDecks(){return!this.points&&!this.summary&&!this.limit}renderSkeleton(){const e=Array.from({length:this.limit||20});return o`
      <ol
        class="song-ranking__list song-ranking__list--skeleton"
        aria-busy="true"
        aria-label=${this.label("loading","Loading ranking")}
      >
        ${e.map(()=>o`
            <li class="song-ranking__entry" aria-hidden="true">
              <div
                class=${`song-ranking__row${this.skeletonDecks?"":" song-ranking__row--points"}${this.limit?" song-ranking__row--bare":""}`}
              >
                <span class="song-ranking__rank"><span class="skeleton-line">00</span></span>
                ${this.limit?l:o`
                        <span class="song-ranking__namecard song-ranking__namecard--empty"></span>
                      `}
                <span class="song-ranking__avatar"><span class="song-ranking__initial"></span></span>
                <span class="song-ranking__player-copy">
                  <strong><span class="skeleton-line"> </span></strong>
                  <small class="song-ranking__player-stats"><span class="skeleton-line"> </span></small>
                </span>
                <span class="song-ranking__score">
                  <strong><span class="skeleton-line">00,000,000</span></strong>
                </span>
                ${this.skeletonDecks?o`
                        <span class="song-ranking__deck-preview">
                          ${[0,1,2,3,4].map(()=>o`
                              <span class="song-ranking__deck-slot">
                                <span class="song-ranking__card"><span class="song-ranking__card-media"></span></span>
                                <span class="song-ranking__card">
                                  <span class="song-ranking__card-media song-ranking__card-media--support"></span>
                                </span>
                              </span>
                            `)}
                        </span>
                      `:l}
              </div>
            </li>
          `)}
      </ol>
      ${!this.limit&&!this.windowed?o`
              <span class="button button--tonal song-ranking__more song-ranking__more--placeholder" aria-hidden="true">
                ${this.label("showMore","Show top 100")}
              </span>
              ${x(this.label("loading","Loading ranking"))}
            `:l}
    `}renderRanking(){const e=this.rows.slice(0,this.limit||(this.windowed||this.expanded?100:20)),t=!this.limit&&!this.windowed&&this.rows.length>20&&!this.expanded,s=this.rankingFailure?.kind,a=s==="pending"&&this.retryAt>0?this.label("pending","Ranking is being collected. Try again in {seconds}s.").replace("{seconds}",String(Math.max(0,Math.ceil((this.retryAt-Date.now())/1e3)))):s==="timeout"?this.label("timeout","The ranking request timed out."):this.label("error","Ranking unavailable");return o`
      <div class="song-ranking__content">
        ${this.phase==="error"&&!this.rows.length?I(a,this.label("retry","Retry"),()=>this.refresh()):this.phase==="loading"&&!this.rows.length?this.renderSkeleton():this.rows.length?o`
                    <ol
                      class="song-ranking__list"
                      style=${`--rank-digits: ${String(Math.max(0,...e.map(n=>Number(n.rank)||0))).length}`}
                      aria-label=${this.boardTitle}
                    >
                      ${e.map(n=>this.renderRow(n))}
                    </ol>
                    ${t?o`
                            <button
                              class="button button--tonal song-ranking__more"
                              type="button"
                              @click=${()=>this.expanded=!0}
                            >
                              ${this.label("showMore","Show top 100")}
                            </button>
                          `:l}
                  `:M({title:s==="not_found"?this.label("notFound","No ranking is available for this song."):this.label("empty","No scores yet"),icon:"leaderboard"})}
      </div>
    `}rankingLoaded(e){}get identityProperties(){return["rankingEndpoint","region","songId"]}willUpdate(e){(this.identityProperties.some(t=>e.has(t))||e.has("active")&&!this.active)&&(this.closeAnalysis?.(),this.closeAnalysis=void 0),this.identityProperties.some(t=>e.has(t))&&(this.start=1,this.target=0,this.query="",this.searchMatches=null,this.searchRequests.cancel(),this.searching=!1)}updated(e){e.has("cardCatalogData")&&this.cardCatalogData&&(this.cardCatalogs=this.cardCatalogData),(this.identityProperties.some(t=>e.has(t)&&e.get(t)!==void 0)||this.windowed&&e.has("start")&&e.get("start")!==void 0)&&(this.expanded=!1,this.loadRanking(this.region)),this.active||(this.searchRequests.cancel(),this.searching=!1,this.searchMatches=null),this.syncChrome()}syncChrome(){this.embedded||q(this.pageAppBarOwner,this.renderPageActions(),this)}scrollToTarget(){this.querySelector(`[data-rank="${this.target}"]`)?.scrollIntoView({block:"center"})}moveWindow(e){this.searchRequests.cancel(),this.searching=!1,this.searchMatches=null,this.target=0,this.start=e}jump(e){this.searchRequests.cancel(),this.searching=!1,this.target=e,this.searchMatches=null,this.windowed?this.start=Math.floor((e-1)/100)*100+1:this.expanded=!0,this.updateComplete.then(()=>this.scrollToTarget())}async findPlayers(e,t,s=0){if(this.windowed){const n=new URL(this.rankingUrl(this.region),location.origin);for(n.pathname=n.pathname.replace(/\/ranking$/u,"/search"),n.search=new URLSearchParams({query:e,partial:"1",...s?{after:String(s)}:{}}).toString();;)try{return await k(n.pathname+n.search,{signal:t})}catch(i){const r=i instanceof f?i.body?.error:null;if(r?.kind!=="pending"||!r.retryAfter||t.aborted)throw i;await this.waitForSearch(t,r.retryAfter)}}const a=e.normalize("NFKC").toLowerCase();return{searchedTo:this.rows.length,matches:this.rows.filter(n=>n.profileId===e||n.name.normalize("NFKC").toLowerCase().includes(a)).map(n=>({rank:n.rank,profileId:n.profileId,name:n.name,point:n.score??0}))}}waitForSearch(e,t){return new Promise((s,a)=>{const n=()=>{window.clearTimeout(i),a(e.reason)},i=window.setTimeout(()=>{e.removeEventListener("abort",n),s()},Math.max(3,t)*1e3);e.addEventListener("abort",n,{once:!0})})}mergeMatches(e){const t=i=>i.profileId||`${i.rank}/${i.name}/${i.point}`,s=new Map(e.map(i=>[t(i),i])),a=this.searchMatches??[],n=new Set(a.map(t));this.searchMatches=[...a.map(i=>s.get(t(i))??i),...e.filter(i=>!n.has(t(i)))]}async search(e,t=0){const s=this.searchRequests.begin();if(this.searching=!0,!t){const a=e.normalize("NFKC").toLowerCase(),n=this.rows.filter(r=>r.profileId===a||r.name.normalize("NFKC").toLowerCase().includes(a)).map(r=>({rank:r.rank,profileId:r.profileId,name:r.name,point:r.score??0})),i=n.find(r=>r.profileId===a);if(i){this.jump(i.rank);return}this.searchMatches=n.length?n:null,this.nextSearchCursor=null}try{for(;;){const a=await this.findPlayers(e,s,t);if(!this.searchRequests.current(s))return;const n=a.complete!==!1;this.nextSearchCursor=n?a.nextCursor??null:null;const i=a.matches.find(r=>r.profileId===e.normalize("NFKC"));if(i&&!t){this.jump(i.rank);return}if(a.matches.length&&this.mergeMatches(a.matches),n){this.searchMatches?.length||u(h(this.locale,"catalog.arena.ranking.notFound","Not in the top {count}").replace("{count}",a.searchedTo.toLocaleString(this.locale)));return}if(!a.retryAfter){u(this.label("error","Ranking unavailable"));return}await this.waitForSearch(s,a.retryAfter)}}catch{this.searchRequests.current(s)&&u(this.label("error","Ranking unavailable"))}finally{this.searchRequests.current(s)&&(this.searching=!1)}}renderMatches(){if(!this.searchMatches)return l;const e=()=>{this.searchRequests.cancel(),this.searching=!1,this.searchMatches=null};return o`
      <dialog
        class="dialog"
        ${S(e)}
        aria-label=${h(this.locale,"catalog.arena.ranking.searchResults","Matching players")}
      >
        <div class="dialog__surface">
          <header class="dialog__header">
            <h2>${h(this.locale,"catalog.arena.ranking.searchResults","Matching players")}</h2>
          </header>
          <div class="song-ranking__progress" aria-hidden=${this.searching?l:"true"}>
            ${this.searching?o`
                    <md-linear-progress
                      indeterminate
                      aria-label=${this.label("loading","Loading ranking")}
                    ></md-linear-progress>
                  `:l}
          </div>
          <div class="dialog__body">
            <ul class="list">
              ${this.searchMatches.map(t=>o`
                  <li>
                    <button
                      class="list-item list-item--two-line list-item--interactive"
                      type="button"
                      @click=${()=>this.jump(t.rank)}
                    >
                      <span class="list-item__leading" aria-label=${this.label("rank","Rank")}>
                        ${t.rank.toLocaleString(this.locale)}
                      </span>
                      <span class="list-item__body">
                        <span class="list-item__headline">
                          ${t.name||this.label("privatePlayer","Unknown player")}
                        </span>
                        <span class="list-item__supporting">${t.profileId||"—"}</span>
                      </span>
                      <span class="list-item__trailing">${p("arrow_forward")}</span>
                    </button>
                  </li>
                `)}
            </ul>
          </div>
          <footer class="dialog__actions">
            ${this.nextSearchCursor?o`
                    <button
                      class="button button--tonal"
                      type="button"
                      ?disabled=${this.searching}
                      @click=${()=>void this.search(this.query.trim(),this.nextSearchCursor)}
                    >
                      ${h(this.locale,"catalog.arena.ranking.next","Next 100")}
                    </button>
                  `:l}
            <button class="button button--text" type="button" @click=${e}>
              ${h(this.locale,"common.actions.close","Close")}
            </button>
          </footer>
        </div>
      </dialog>
    `}renderTimestamp(){const e=this.cache.get(this.rankingUrl(this.region)),t=e?.reportedAt||0,s=this.formatTime(this.region),a=`${this.label(e?.provider==="official"?"observed":"updated","Updated")} ${s}`;return o`
      <time
        class="ranking-timestamp"
        datetime=${t?new Date(t).toISOString():l}
        title=${a}
        aria-label=${a}
        aria-hidden=${t?l:"true"}
      >
        ${s||(this.phase==="loading"?o`
                <span class="skeleton-line" aria-hidden="true">00/00 00:00</span>
              `:"—")}
      </time>
    `}renderPagination(e=!1){if(!this.windowed||this.limit)return l;const t=this.cache.get(this.rankingUrl(this.region))?.maxRank,s=(n,i)=>h(this.locale,`catalog.arena.ranking.${n}`,i),a=n=>{this.moveWindow(n),e&&this.scrollIntoView({block:"start"})};return o`
      <span class="ranking-pagination">
        <span class="ranking-top">
          ${d({icon:"first_page",label:s("top","Top"),disabled:this.start===1,onClick:()=>a(1)})}
        </span>
        ${d({icon:"chevron_left",label:s("previous","Previous 100"),disabled:this.start===1,onClick:()=>a(Math.max(1,this.start-100))})}
        <span class="ranking-window md-body-medium">
          ${this.start.toLocaleString(this.locale)}–${Math.min(this.start+99,t??1/0).toLocaleString(this.locale)}
          / ${t?.toLocaleString(this.locale)??"—"}
        </span>
        ${d({icon:"chevron_right",label:s("next","Next 100"),disabled:t!=null&&this.start+100>t,onClick:()=>a(this.start+100)})}
      </span>
    `}renderControls(){if(this.limit)return o`
        <div class="ranking-summary-heading row row--between">
          ${this.summaryHeading}
          <span class="ranking-status">${this.renderTimestamp()}${this.summaryActions}</span>
        </div>
      `;const e=this.windowed?this.cache.get(this.rankingUrl(this.region))?.maxRank:this.rows.length,t=(s,a)=>h(this.locale,`catalog.arena.ranking.${s}`,a);return o`
      <div class="ranking-controls">
        <div class="ranking-search cluster">
          <form
            class="ranking-jump ranking-jump--rank"
            @submit=${s=>{s.preventDefault();const a=Number(new FormData(s.currentTarget).get("rank"));Number.isSafeInteger(a)&&a>0&&this.jump(a)}}
          >
            <label class="field">
              <input
                name="rank"
                type="number"
                inputmode="numeric"
                min="1"
                max=${e||l}
                step="1"
                required
                placeholder=${this.label("rank","Rank")}
                aria-label=${t("jump","Go to rank")}
              />
            </label>
            <button
              class="icon-button icon-button--tonal"
              type="submit"
              aria-label=${t("go","Go")}
              title=${t("go","Go")}
            >
              ${p("arrow_forward")}
            </button>
          </form>
          <form
            class="ranking-jump"
            @submit=${s=>{s.preventDefault();const a=String(new FormData(s.currentTarget).get("query")??"").trim();a&&!this.searching&&this.search(a)}}
          >
            <label class="field">
              <input
                name="query"
                type="search"
                maxlength="100"
                required
                .value=${this.query}
                placeholder=${t("playerSearch","Player ID or username")}
                aria-label=${t("playerSearch","Player ID or username")}
                @input=${s=>{this.query=s.target.value,this.searchRequests.cancel(),this.searching=!1}}
              />
            </label>
            <button
              class="button button--tonal"
              type="submit"
              ?disabled=${this.searching||!this.windowed&&this.phase!=="ready"}
            >
              ${p("search")}${t("find","Find")}
            </button>
          </form>
        </div>
        <div class="ranking-secondary">
          ${this.renderPagination()}
          <span class="ranking-status">
            ${this.renderTimestamp()}
            ${d({icon:"refresh",label:this.label("refresh","Refresh ranking"),disabled:this.phase==="loading"||Date.now()<this.retryAt,onClick:()=>this.refresh()})}
          </span>
        </div>
      </div>
    `}refreshRanking(){this.refresh()}render(){const e=this.phase==="loading"||this.searching;return o`
      <section class="song-ranking-page" aria-label=${this.boardTitle}>
        <div class="song-ranking__progress" aria-hidden=${e?l:"true"}>
          ${e?o`
                  <md-linear-progress
                    indeterminate
                    aria-label=${this.label("loading","Loading ranking")}
                  ></md-linear-progress>
                `:l}
        </div>
        ${this.renderControls()} ${this.renderRanking()}
        ${this.windowed&&!this.limit?o`<div class="row row--end">${this.renderPagination(!0)}</div>`:l}
        ${this.renderMatches()}
      </section>
    `}}customElements.get("song-ranking")||customElements.define("song-ranking",E);export{E as S};
