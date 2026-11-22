import{s as C}from"./scrollable-tabs.B0s0LWO4.js";import{i as D}from"./lit-element.Bc_VOJIm.js";import{b as h,A as $}from"./lit-html.DhDqt3I2.js";import{c as f}from"./client.BYho01b_.js";import{a as L,b as N}from"./app-bar.CQ9Fi2qQ.js";import{R as P}from"./request-scope.N4apwAcW.js";import{r as y}from"./page-data.CoUysx63.js";import{a as U}from"./workspace-page-data.BEx4Qoy8.js";import{n as x}from"./document-url.BFFpyWb5.js";import{l as V}from"./resource-route.BR5kLHYo.js";import{p as T,a as b,b as A,h as k,k as B,m as z,n as F,j as O}from"./catalog.CfAhzaok.js";import{c as G,r as H}from"./song-performer.D1gPJ3l4.js";import{l as J}from"./playlist-tracks.BLifrlXg.js";import{s as K}from"./song-performer-adornment.Dd169nPp.js";import"./interface-route.C7eSW2gB.js";import{i as W}from"./temporary-public-routing.BsxzEC6B.js";import{d as M,G as Q,g as X}from"./game-records.YqMN_7G0.js";import{r as S}from"./detail-section-heading.BWPPd7ek.js";import{i as Y,r as q}from"./controls.BCr1YKFS.js";import{t as Z}from"./tile.DFwS0rEz.js";import{b as ee,a as te}from"./browse.DDmaNTY0.js";import{s as se,l as ie}from"./song-tile.-ra_W6Ij.js";import{L as ae,l as ne,n as re,a as R}from"./lazy-images.2hwWuBaG.js";import{a as u,e as oe,l as le}from"./state.Ck623oKm.js";import{o as he,a as _}from"./song-display.BUM043oH.js";import"./song-ranking.HXXY-Hvq.js";import"./arena-ranking.Dwkfoif-.js";/* empty css                          *//* empty css                                */import{s as ce}from"./snackbar.D8p2-_Nm.js";import"./locales.DtpYD_uK.js";import"./icon.BSt8MVsq.js";/* empty css                        */import"./content-policy-browser.sJlSzFcH.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./content-release.T5Qse4HZ.js";import"./document-address.dywC0kBs.js";import"./release-server.j-atVW2C.js";import"./provider-entity-data._K00Fr93.js";import"./provider-page-data.DnMv3Sc3.js";import"./catalog-relationships.Cko_f-QP.js";import"./game-records.BcqoVowg.js";import"./kr.DQfuAfK4.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./loading-progress.C8Gf5z9T.js";import"./preload-helper.BlTxHScW.js";import"./loading-indicator.dXh2gc3V.js";import"./image-dimensions.lsZdhmjC.js";import"./circular-progress.Derl8Va3.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";import"./difficulty-display.DtJcy4Kk.js";/* empty css                        */import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./linear-progress.Du-QQIqh.js";import"./hydrate-workspace.CqzYTlrg.js";import"./game-records-cards.DnkuNNO_.js";import"./card-growth.Cv0vV_gt.js";import"./modal.D-GY7Vdy.js";/* empty css                         */let de=0;class ge extends D{static properties={locale:{type:String},server:{type:String},region:{state:!0},phase:{state:!0},data:{state:!0},info:{state:!0},songs:{state:!0},challengeId:{state:!0},eventId:{state:!0},archive:{state:!0},rankingView:{state:!0},now:{state:!0},refreshing:{state:!0}};requests=new P;catalogRequests=new P;infoFor="";railEvents={};lazyImages=new ae({candidates:e=>ne(e,this.locale)});lifetime;clock=0;poll=0;infoServer="intl";cards={};musicTypeMarks={};songPerformers=new Map;owner=`event-tracker-${++de}`;pageAdopted=!1;constructor(){super(),this.locale="en",this.server="intl",this.region="tw",this.phase="loading",this.data=null,this.info=null,this.songs={},this.challengeId="",this.eventId="",this.archive=[],this.rankingView="",this.now=Date.now(),this.refreshing=!1}createRenderRoot(){return this}preparePage(e,t,n,s=M(n,t)){U(this),this.locale=t,this.server=n,this.region=s,this.applyPageCatalogs(e);const a=e.snapshots?.[s];a&&(a.data&&(this.data=a.data),this.phase=a.phase,this.archive=a.archive??[],this.info=a.info,this.songs=a.songs,this.infoServer=a.infoServer,this.infoFor=a.info?a.data?.event?.id??"":"",this.syncChallenge())}applyPageCatalogs(e){this.cards={intl:e.intl,jp:e.jp},this.railEvents=e.events??{},this.musicTypeMarks=Object.fromEntries(Object.entries(e.musicTypeMarks||{}).map(([t,n])=>[t,new Map(Object.entries(n))]));for(const[t,n]of Object.entries(e.songPerformers??{}))this.songPerformers.set(t,G({game:"our-notes",server:t,...n}))}adoptPageData(){const e=y(this);return e?(this.applyPageCatalogs(e),this.requestUpdate(),!0):!1}shownId(){return this.eventId||this.data?.event?.id||""}shownEvent(){const e=this.data?.event??null;return!this.eventId||this.eventId===e?.id?e:this.archive.find(t=>t.id===this.eventId)??null}syncChallenge(){const e=this.shownEvent()?.challenges||[];e.some(t=>t.id===this.challengeId)||(this.challengeId=e.find(t=>t.enabled)?.id||e[0]?.id||"")}async loadShownCatalog(){const e=this.shownId();if(!e||this.infoFor===e)return;this.infoFor=e,this.info=null,this.songs={};const t=this.catalogRequests.begin();await this.loadCatalog(e,this.shownEvent()?.challenges??[],t),this.catalogRequests.current(t)&&!this.info&&(this.infoFor="")}renderStaticChrome(){this.syncAppBar()}disposeSongDisplay;connectedCallback(){super.connectedCallback(),this.disposeSongDisplay=he(()=>this.requestUpdate()),this.lifetime=new AbortController;const e=y(this)||{};this.applyPageCatalogs(e),this.locale=T(this.locale);const t=x().searchParams,n=t.get("region");this.region=Q.some(a=>a.value===n)?n:M(this.server,this.locale),this.challengeId=t.get("challenge")||"",this.eventId=t.get("event")||"";const s=t.get("board");this.rankingView=s==="total"||s==="challenge"||s==="points"?s:this.challengeId?"challenge":"",addEventListener("haneoka:locale-ready",()=>{this.locale=T(this.locale)},{signal:this.lifetime.signal}),this.clock=window.setInterval(()=>{document.visibilityState==="visible"&&(this.now=Date.now())},1e3),addEventListener("online",()=>{document.visibilityState==="visible"&&this.refresh()},{signal:this.lifetime.signal}),this.load()}disconnectedCallback(){this.disposeSongDisplay?.(),this.requests.cancel(),this.catalogRequests.cancel(),this.lazyImages.disconnect(),this.lifetime?.abort(),window.clearInterval(this.clock),window.clearTimeout(this.poll),L(this.owner),super.disconnectedCallback()}label(e,t){return f(this.locale,`tools.eventTracker.${e}`,t)}sourceServer(){return this.region==="jp"?"jp":"intl"}schedulePoll(){window.clearTimeout(this.poll),this.isConnected&&(this.poll=window.setTimeout(()=>{document.visibilityState==="visible"?this.refresh():this.schedulePoll()},this.data?.provider==="official"?3e4:6e4))}async load(){const e=y(this);!this.pageAdopted&&e?.snapshots?.[this.region]&&(this.pageAdopted=!0,this.preparePage(e,this.locale,this.server,this.region));const t=this.region,n=this.requests.begin();this.refreshing=!0,this.data||(this.phase="loading");try{const[s,a]=await Promise.all([b(`/api/v1/game/records/${t}/events/current`,{signal:n,cache:"no-store"}),b(`/api/v1/game/records/${t}/events/archive`,{signal:n}).catch(()=>null)]);if(!this.isConnected||this.region!==t||!this.requests.current(n))return;this.data=s,this.phase="ready",a&&(this.archive=a.events),this.syncChallenge(),this.loadShownCatalog()}catch{if(!this.isConnected||this.region!==t||!this.requests.current(n))return;this.data||(this.phase="error")}finally{this.requests.current(n)&&(this.refreshing=!1,this.schedulePoll())}}async loadCatalog(e,t,n){const a=this.sourceServer()==="jp"?["jp","jp-cbt","intl"]:["intl","jp","jp-cbt"];let l=null;const o={};for(const c of a){if(!this.catalogRequests.current(n))return;const d=new URL(A("songs","",c),location.origin);for(const i of t)o[i.musicId]||d.searchParams.append("id",i.musicId);const[g,p]=await Promise.allSettled([l?Promise.resolve(null):b(A("events",e,c),{signal:n}),d.searchParams.has("id")?b(d.pathname+d.search,{signal:n}):Promise.resolve(null)]);if(!this.catalogRequests.current(n))return;if(!l&&g.status==="fulfilled"&&g.value&&(l=g.value,this.infoServer=c),p.status==="fulfilled"&&p.value)for(const[i,m]of Object.entries(p.value.items))o[i]={...m,catalogSourceServer:c};if(!this.songPerformers.has(c)&&p.status==="fulfilled"&&p.value)try{const i=await J("our-notes",c);if(!this.catalogRequests.current(n))return;this.songPerformers.set(c,i.registry)}catch{}if(l&&t.every(i=>o[i.musicId]))break}this.catalogRequests.current(n)&&(this.info=l,this.songs=o)}selectRegion(e){e!==this.region&&(this.requests.cancel(),this.catalogRequests.cancel(),this.region=e,this.data=null,this.archive=[],this.info=null,this.songs={},this.infoFor="",this.challengeId="",this.syncUrl(),this.load())}selectChallenge(e){this.challengeId=e,this.syncUrl(),this.updateComplete.then(()=>this.querySelector('.collection[role="tablist"] [role="tab"][aria-selected="true"]')?.scrollIntoView({block:"nearest",inline:"nearest"}))}selectEvent(e){this.eventId=e===this.data?.event?.id?"":e,this.syncChallenge(),this.syncUrl(),this.loadShownCatalog()}railItems(){const e=this.railEvents[this.sourceServer()]??[],t=new Map([...this.archive,...this.data?.event?[this.data.event]:[]].map(s=>[s.id,s]));return[...new Set([...e.filter(s=>s.startAtMs&&s.startAtMs<=this.now).map(s=>s.id),...t.keys()])].map(s=>{const a=e.find(g=>g.id===s),l=t.get(s),o=l?.startAtMs||a?.startAtMs||0,c=l?.endAtMs||a?.endAtMs||0,d=k(a?.title,this.locale);return{start:o,item:{value:s,label:d.text||this.label("eventName","Event #{id}").replace("{id}",s),language:d.locale,image:a?.image||"",meta:o&&c?B(this.locale,o,c):""}}}).sort((s,a)=>a.start-s.start||Number(a.item.value)-Number(s.item.value)).map(({item:s})=>s)}selectRanking(e){this.rankingView=e,this.syncUrl()}syncUrl(){const e=new URL(location.href);e.searchParams.set("region",this.region),this.rankingView?e.searchParams.set("board",this.rankingView):e.searchParams.delete("board"),this.eventId?e.searchParams.set("event",this.eventId):e.searchParams.delete("event"),this.challengeId?e.searchParams.set("challenge",this.challengeId):e.searchParams.delete("challenge"),history.replaceState(history.state,"",e)}async refresh(){if(this.refreshing)return;const e=this.region;await this.load(),await this.updateComplete,this.isConnected&&this.region===e&&(this.querySelectorAll("song-ranking").forEach(t=>t.refreshRanking()),this.querySelectorAll("arena-ranking").forEach(t=>t.refresh()))}eventTitle(){return k(this.info?.title,this.locale).text||this.label("eventName","Event #{id}").replace("{id}",this.shownId())}challengeTitle(e){const t=this.songs[e.musicId];return t?_(t,this.locale).text:this.label("songName","Song #{id}").replace("{id}",e.musicId)}countdown(){const e=this.shownEvent();if(!e)return"";const t=!!(e.startAtMs&&e.startAtMs>this.now),n=t?e.startAtMs:e.endAtMs;if(!n)return this.label("unknownDeadline","End time unavailable");if(n<=this.now)return this.label("ended","Ended");const s=Math.max(0,Math.floor((n-this.now)/1e3)),a=Math.floor(s/86400),l=d=>String(d).padStart(2,"0"),o=`${l(Math.floor(s%86400/3600))}:${l(Math.floor(s%3600/60))}:${l(s%60)}`,c=a?this.label("duration","{days}d {time}").replace("{days}",a.toLocaleString(this.locale)).replace("{time}",o):o;return this.label(t?"startsIn":"endsIn",t?"Starts in {time}":"Ends in {time}").replace("{time}",c)}cachedShown=!1;updated(){if(this.phase==="error"!==this.cachedShown&&(this.cachedShown=this.phase==="error",this.cachedShown&&ce(this.label("cached","Showing the last available event information."))),this.lazyImages.observe(this),this.syncAppBar(),this.eventId&&!this.railShown){const e=this.querySelector('.browse__rail [role="tab"][aria-selected="true"]');if(e){this.railShown=!0;const t=()=>e.scrollIntoView({block:"nearest",inline:"nearest"});document.readyState==="complete"?requestAnimationFrame(t):addEventListener("load",t,{once:!0})}}}railShown=!1;syncAppBar(){N(this.owner,h`
        ${X(this.locale,this.region,e=>this.selectRegion(e),"event-tracker-region")}
        ${Y({label:this.label("refresh","Refresh event rankings"),icon:"refresh",disabled:this.refreshing,onClick:()=>void this.refresh()})}
      `,this)}render(){const e=this.railItems();return h`
      <section class="browse browse--railed">
        ${te({locale:this.locale,label:f(this.locale,"navigation.events","Events"),value:this.shownId(),items:e,pending:!this.data&&!e.length,single:!0,onSelect:t=>this.selectEvent(t)})}
        <div class="browse__main" id=${ee} role="tabpanel">${this.renderEvent()}</div>
      </section>
    `}renderEvent(){const e=this.shownEvent();if(!e&&this.eventId)return u({title:this.label("noRecords","No ranking was recorded for this event."),icon:"leaderboard"});if(!this.data)return this.phase==="error"?oe(this.label("error","Event information is unavailable."),this.label("retry","Retry"),()=>void this.load()):le(this.label("loading","Loading event"));if(!e)return u({title:this.label("empty","No event is currently being tracked."),icon:"event"});const t=e.challenges.find(i=>i.id===this.challengeId),n=t?.enabled&&["collecting","finalizing","archived"].includes(t.status),s=e.pointRankingEnabled&&!["pending","missed","disabled","unknown"].includes(e.pointRankingStatus),a=e.totalRankingEnabled&&["collecting","finalizing","archived"].includes(e.totalRankingStatus||""),l=[...e.totalRankingEnabled?["total"]:[],...e.challenges.length?["challenge"]:[],...e.pointRankingEnabled?["points"]:[]];l.length||l.push("challenge");const o=this.rankingView&&l.includes(this.rankingView)?this.rankingView:l[0],c={total:this.label("totalTab","Total"),challenge:this.label("challengeTab","Songs"),points:this.label("pointTab","Points")},d=this.musicTypeMarks[this.sourceServer()]||new Map,g=W(this.infoServer)?V({server:this.infoServer,locale:this.locale,kind:"events",id:e.id}):"",p=this.info?.image||this.info?.logo?h`
            <img
              class="browse__heading-art"
              src=${R(String(this.info.logo||this.info.image),this.locale)}
              alt=""
              width="460"
              height="240"
              decoding="async"
              @error=${re}
            />
          `:$;return h`
      <div class="song-ranking-page song-ranking__content">
        <div class="row row--start">
          <header class="browse__heading grow">
            ${g?h`
                    <a
                      class="browse__heading-art-link"
                      href=${g}
                      aria-label=${`${this.label("event","Event")} / ${this.eventTitle()}`}
                    >
                      ${p}
                    </a>
                  `:h`<span class="browse__heading-art-link">${p}</span>`}
            <div class="browse__heading-copy">
              <h2 lang=${k(this.info?.title,this.locale).locale}>${this.eventTitle()}</h2>
              <p>
                ${this.label("event","Event")} / #${e.id} /
                ${z(this.locale,e.startAtMs||0,e.endAtMs||0)}
              </p>
              <p class="tabular" role="timer" aria-live="off">${this.countdown()}</p>
            </div>
          </header>
        </div>
        ${C(this.locale,h`
          <nav class="tabs tabs--secondary" role="tablist" aria-label=${this.label("title","Event tracker")}
            @keydown=${q(l,o,i=>this.selectRanking(i))}>
            ${l.map(i=>h`
              <button class="tab" type="button" role="tab" id=${`event-board-${i}`}
                aria-controls=${`event-ranking-${i}`} aria-selected=${String(o===i)}
                tabindex=${o===i?0:-1} @click=${()=>this.selectRanking(i)}>
                <span>${c[i]}</span><span class="tab__indicator"></span>
              </button>
            `)}
          </nav>
        `)}
        <section class="detail-section" role="tabpanel" id="event-ranking-challenge"
          aria-labelledby="event-board-challenge" ?hidden=${o!=="challenge"}>
          ${S(this.label("challengeRanking","Challenge song ranking"),"works")}
          ${e.challenges.length?h`
                  ${C(this.locale,h`<nav
                    class="collection collection--song collection--tab-rail"
                    role="tablist"
                    aria-label=${this.label("song","Challenge song")}
                    aria-orientation="horizontal"
                    @keydown=${q(e.challenges.map(i=>i.id),this.challengeId,i=>this.selectChallenge(i))}
                  >
                    ${e.challenges.map(i=>{const m=this.songs[i.musicId]||{musicId:i.musicId,musicTitle:[this.challengeTitle(i)]},I=this.songPerformers.get(String(m.catalogSourceServer??this.infoServer)),v=I?H(m,I):void 0,E=F((Array.isArray(m.musicCategories)?m.musicCategories:[]).map(r=>["","original","virtual","jpop","anime","game"][Number(r)]).filter(Boolean).map(r=>f(this.locale,`catalog.songs.types.${r}`,r)),this.locale,"unit"),j=se(m,{locale:this.locale,title:r=>_(r,this.locale),image:r=>String(r.jacketThumbUrl||r.jacketUrl||r.image||""),artist:r=>v?O(v.names,this.locale).text:k(r.artistName||r.bandName||r.secondary,this.locale).text,bandIcon:r=>String(r.bandDetails?.icon||""),performerAdornment:v?()=>K(v,r=>R(r,this.locale)):void 0,imageForLocale:r=>R(r,this.locale),attributeMark:r=>ie(d,r.musicType),attributeLabel:r=>{const w=["","red","blue","green","yellow","purple"][Number(r.musicType)]||"";return w?f(this.locale,`catalog.songs.liveTypes.${w}`,w):""}},"",[E?{at:"bottom-start",text:E}:null]);return Z({...j,id:`event-challenge-${i.id}`,role:"tab",selected:i.id===this.challengeId,controls:"event-challenge-ranking",tabIndex:i.id===this.challengeId?0:-1,onOpen:()=>this.selectChallenge(i.id)})})}
                  </nav>`)}
                  <div
                    id="event-challenge-ranking"
                    role="tabpanel"
                    aria-labelledby=${`event-challenge-${this.challengeId}`}
                  >
                    ${n?h`
                            <song-ranking
                              .active=${o==="challenge"}
                              embedded
                              .locale=${this.locale}
                              .server=${this.sourceServer()}
                              .region=${this.region}
                              .rankingTitle=${this.label("challengeRanking","Challenge song ranking")}
                              .rankingEndpoint=${`/api/v1/game/records/${this.region}/events/${e.id}/challenges/${t.id}/ranking`}
                              .cardCatalogData=${this.cards}
                              .analysisEvent=${e}
                              .analysisChallengeId=${t.id}
                            ></song-ranking>
                          `:t?.status==="missed"?u({title:this.label("noRecords","No ranking was recorded for this event."),icon:"leaderboard"}):u({title:this.label("pending","Ranking data is being collected."),icon:"hourglass_top"})}
                  </div>
                `:u({title:this.label("noChallenges","This event has no challenge song ranking."),icon:"music_off"})}
        </section>
        ${e.totalRankingEnabled?h`
          <section class="detail-section" role="tabpanel" id="event-ranking-total"
            aria-labelledby="event-board-total" ?hidden=${o!=="total"}>
            ${S(this.label("totalRanking","Total song ranking"),"works")}
            ${a?h`
              <song-ranking
                .active=${o==="total"}
                embedded
                .locale=${this.locale}
                .server=${this.sourceServer()}
                .region=${this.region}
                .rankingTitle=${this.label("totalRanking","Total song ranking")}
                .rankingEndpoint=${`/api/v1/game/records/${this.region}/events/${e.id}/total/latest`}
                .cardCatalogData=${this.cards}
                .analysisEvent=${e}
                .analysisChallengeId=${""}
              ></song-ranking>
            `:u({title:e.totalRankingStatus==="missed"?this.label("noRecords","No ranking was recorded for this event."):this.label("pending","Ranking data is being collected."),icon:e.totalRankingStatus==="missed"?"leaderboard":"hourglass_top"})}
          </section>
        `:$}
        ${e.pointRankingEnabled?h`<section class="detail-section" role="tabpanel" id="event-ranking-points"
          aria-labelledby="event-board-points" ?hidden=${o!=="points"}>
          ${S(this.label("pointRanking","Event point ranking"),"works")}
          ${s?h`
                  <arena-ranking
                    .active=${o==="points"}
                    .locale=${this.locale}
                    .region=${this.region}
                    .eventId=${Number(e.id)}
                    .analysisEvent=${e}
                    .catalogs=${this.cards}
                  ></arena-ranking>
                `:u({title:this.label(e.pointRankingEnabled?"pending":"pointsDisabled",e.pointRankingEnabled?"Ranking data is being collected.":"This event has no point ranking."),icon:"leaderboard"})}
        </section>`:$}
      </div>
    `}}customElements.get("event-tracker")||customElements.define("event-tracker",ge);
