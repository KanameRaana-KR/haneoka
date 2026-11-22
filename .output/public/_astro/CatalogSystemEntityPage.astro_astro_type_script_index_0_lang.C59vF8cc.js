const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/circular-progress.Derl8Va3.js","_astro/delegate.qnlMPWy4.js","_astro/lit-element.Bc_VOJIm.js","_astro/lit-html.DhDqt3I2.js","_astro/progress.BYlJSdrk.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./preload-helper.BlTxHScW.js";import{u as B}from"./unpublished-state.CJcNYaJQ.js";import{S as $}from"./spoiler-content.Ir13N6R6.js";import{S as at}from"./system-labels.I0EW1c17.js";import{i as G}from"./lit-element.Bc_VOJIm.js";import{A as d,b as n}from"./lit-html.DhDqt3I2.js";import{e as O}from"./entity-discussion.DASzzmbm.js";import{m as nt}from"./entity-comments.DHISD54_.js";import{i as z,a as S}from"./content-release.T5Qse4HZ.js";import{r as U}from"./page-data.CoUysx63.js";import{a as V}from"./workspace-page-data.BEx4Qoy8.js";import{a as N,d as ot,e as lt,b as ct}from"./app-bar.CQ9Fi2qQ.js";import{n as C}from"./document-url.BFFpyWb5.js";import{p as _,c as j,l as F,u as p,a as w,b,r as W,T as ht,f as dt}from"./catalog.CfAhzaok.js";import{s as E,u as x}from"./detail-navigation.DDRFcg4B.js";import{b as Y}from"./loading-progress.C8Gf5z9T.js";import{q as J,w as X,z as T,l as mt}from"./resource-route.BR5kLHYo.js";import"./interface-route.C7eSW2gB.js";import{i as L}from"./temporary-public-routing.BsxzEC6B.js";import{a as Q}from"./releases.C4sS2qjT.js";import{c as Z,p as ut}from"./presentation.RLPoHaeN.js";import{O as R,c as tt}from"./server-availability.q3NOHCqi.js";import{s as pt}from"./controls.BCr1YKFS.js";import{l as et,e as st,a as gt}from"./state.Ck623oKm.js";import{i as y}from"./icon.BSt8MVsq.js";import{c as k}from"./client.BYho01b_.js";/* empty css                      */import{crossServerPublicCache as yt}from"./cache.CqSBusMV.js";import"./site-community.DYGqCiYM.js";import"./comments-state.BFUQ1tZ9.js";/* empty css                        *//* empty css                      */import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./content-policy-browser.sJlSzFcH.js";import"./request-scope.N4apwAcW.js";import"./document-address.dywC0kBs.js";import"./locales.DtpYD_uK.js";import"./release-server.j-atVW2C.js";import"./definitions.Csu7nG6K.js";import"./event-song-release.Cm_gWyb9.js";import"./bushimo-circle.BaHAxlWi.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./linear-progress.Du-QQIqh.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";/* empty css                        */import"./fetch.D18jK1jC.js";import"./data.CTobvNqO.js";function ft(h){const t=/^(\/assets\/[^/]+\/Assets\/AddressableResources\/Image\/Tgw\/tgwcard_(normal|gold|platinum|black))_\d+\.png(\?[^#]*)?$/u.exec(String(h??""));if(!t)return;const[,e,s,i=""]=t;return{kind:s,face:`${e}.png${i}`,plate:`${e}_rank.png${i}`,badge:`${e}_small.png${i}`}}class wt extends G{static properties={locale:{type:String},entityId:{state:!0},phase:{state:!0},tiers:{state:!0},pointName:{state:!0},selectedRank:{state:!0},selectedSource:{state:!0}};server="intl";error="";request;unionTiers;loading;localeListener=()=>{this.locale=_(this.locale),this.syncEntityHeading()};constructor(){super(),this.locale="ja",this.entityId="",this.phase="loading",this.tiers=[],this.pointName=[],this.selectedRank=0,this.selectedSource=""}createRenderRoot(){return this}preparePage(t,e,s=""){if(V(this),this.locale=e,this.server=t.server,t.entityId){this.entityId=t.entityId,this.unionTiers=void 0,this.applyTiers([t.document],t.pointName,s);return}const{entities:i,pointName:r}=this.applyCatalog(t.catalog,t.tierDetails);this.applyTiers(i,r,s)}applyCatalog(t,e){const s=Z(t),i=new Map;for(const r of t.entries){const a=r.displayServer,o=t.identities[a],l=e[r.key],c=r.perServer[a];if(!l||String(l.id)!==c.id)throw new Error("T.G.W detail unavailable");const u=ut({...c.row,...l},o);s.entries.set(u,r),i.set(r.key,u)}return this.unionTiers=s,{entities:t.entries.map(r=>i.get(r.key)).sort((r,a)=>r.rank-a.rank),pointName:(t.documents[this.server]||Object.values(t.documents)[0])?.pointName}}applyTiers(t,e,s){this.tiers=this.entityId?t:t.filter(r=>z("tgw-card",r,String(r.id))),this.pointName=e,this.selectedSource="";const i=Number(/^#tgw-rank-(\d+)$/u.exec(s)?.[1]||0);this.selectedRank=t.some(r=>r.rank===i)?i:t[0]?.rank||0,this.phase="ready"}contentAccessChanged=()=>{this.request?.abort(),this.request=void 0,this.loading?.cancel(),this.unionTiers=void 0,this.tiers=[],this.pointName=[],this.load()};connectedCallback(){addEventListener($,this.contentAccessChanged),super.connectedCallback(),this.locale=_(this.locale);const t=J(location.pathname);this.entityId=t?.kind==="tgw-card"&&t.id||"",this.server=t?.kind==="tgw-card"?t.server:j(),addEventListener("haneoka:locale-ready",this.localeListener),M(()=>import("./circular-progress.Derl8Va3.js"),__vite__mapDeps([0,1,2,3,4])),E(),this.load()}disconnectedCallback(){removeEventListener($,this.contentAccessChanged),this.request?.abort(),this.request=void 0,this.loading?.cancel(),removeEventListener("haneoka:locale-ready",this.localeListener),super.disconnectedCallback()}text(t,e,s){return k(this.locale,`catalog.tgwCard.${t}`,e,s)}name(t){return F(t,this.locale)}image(t){const e=String(t.image||""),s=t.imageVariants;if(!e||!s||typeof s!="object")return e;const i=s[e];if(!i||typeof i!="object")return e;const r={"zh-CN":"zh-Hans","zh-TW":"zh-Hant"}[this.locale]||this.locale;return typeof i[r]=="string"?String(i[r]):e}tierEntry(t){return this.unionTiers?.entries.get(t)||this.unionTiers?.byId.get(`${this.server}:${t.id}`)}selectedTier(){const t=this.tiers.filter(s=>s.rank===this.selectedRank);if(this.selectedSource){const s=t.filter(i=>this.tierServer(i)===this.selectedSource);if(s.length===1)return s[0]}const e=t.filter(s=>this.tierEntry(s)?.perServer[this.server]);return e.length===1?e[0]:t.length===1?t[0]:void 0}tierServer(t){return this.tierEntry(t)?.displayServer||this.server}entityLink(t){const e=this.tierServer(t);if(L(e))return X({server:e,locale:this.locale,kind:"tgw-card",id:t.id})}syncEntityHeading(){if(!this.entityId||!this.tiers[0])return;const t=S("tgw-card",this.tiers[0],this.entityId)?this.name(this.tiers[0].title)||this.entityId:p(this.locale,"common.states.unpublished");x(this,t,this.locale),E()}async load(){const t=U(this);if(t?.schema==="haneoka-catalog-system-v1"&&t.kind==="tgw-card"&&(t.entityId||"")===this.entityId){this.preparePage(t,this.locale,location.hash);return}this.request?.abort();const e=new AbortController;this.request=e;const s=Y(p(this.locale,"common.states.loading"),{scope:"owner",signal:e.signal});this.loading=s,this.phase="loading",this.error="";try{let i,r;if(this.entityId){const[a,o]=await Promise.all([w(b("tgw-card",this.entityId,this.server),{signal:e.signal}),w(b("tgw-card","",this.server),{signal:e.signal})]);if(String(a.id||"")!==this.entityId)throw new Error(p(this.locale,"common.states.unavailable"));i=[a],r=o.pointName}else if(R.includes(this.server)){const a=await Q("tgw-card",this.server,this.locale,{signal:e.signal});if(Object.values(a.sourceAvailability).every(l=>l!=="loaded"))throw new Error("T.G.W catalog unavailable");const o={};if(await Promise.all(R.map(async l=>{const c=a.identities[l],u=a.entries.filter(g=>g.displayServer===l);if(!(!c||!u.length))for(let g=0;g<u.length;g+=80){const m=u.slice(g,g+80),f=m.map(v=>v.perServer[l].id),rt=await yt().readEntities("tgw-card",c,f,e.signal);for(const v of m){const A=v.perServer[l].id,I=rt.items?.[A];if(!I||String(I.id)!==A)throw new Error("T.G.W detail unavailable");o[v.key]=I}}})),e.signal.aborted||this.request!==e)return;({entities:i,pointName:r}=this.applyCatalog(a,o))}else{const a=await w(b("tgw-card","",this.server),{signal:e.signal}),o=W(a.entries).map(l=>l).sort((l,c)=>l.rank-c.rank);i=[];for(let l=0;l<o.length;l+=80){const c=o.slice(l,l+80),u=new URL(b("tgw-card","",this.server),location.origin);for(const m of c)u.searchParams.append("id",String(m.id));const g=await w(u.toString(),{signal:e.signal});for(const m of c){const f=g.items?.[String(m.id)];if(!f||String(f.id||"")!==String(m.id))throw new Error(p(this.locale,"common.states.unavailable"));i.push({...m,...f})}}r=a.pointName}if(this.request!==e||e.signal.aborted){s.cancel();return}this.applyTiers(i,r,location.hash),this.syncEntityHeading(),s.finish()}catch(i){if(e.signal.aborted||this.request!==e){s.cancel();return}console.error(i),this.error=i instanceof Error?i.message:String(i),this.phase="error",s.fail(i)}finally{this.request===e&&this.phase!=="error"&&(this.request=void 0,this.loading=void 0)}}rewardItem(t){const e=this.name(t.name)||this.text("reward","Reward"),s=this.image(t),i=this.selectedTier(),r=T(String(t.href||""),i?this.tierServer(i):this.server,this.locale),a=Number(t.count||0),o=n`
      ${s?n`
              <img src=${s} alt="" loading="lazy" decoding="async" />
            `:y("redeem",18)}
      <span>${e}</span>
      ${a>1?n`
              <b class="tabular">×${a.toLocaleString(this.locale)}</b>
            `:d}
    `;return r?n`
          <a class="tgw-chip state-layer" href=${r}>${o}</a>
        `:n`
          <span class="tgw-chip">${o}</span>
        `}benefitDisplay(t){const e=this.name(t.name),s=t.vipBonusType,i=t.value;if(typeof s!="number"||!Number.isInteger(s)||typeof i!="number"||!Number.isSafeInteger(i)||i<0)return{label:e};if(s===9)return{label:i===0?this.text("boostConsumptionUnlocked",e):this.text("boostConsumptionLimit",e,{count:new Intl.NumberFormat(this.locale).format(i)})};const r=new Intl.NumberFormat(this.locale,{maximumFractionDigits:2}),o={1:"bandFormationBonus",3:"boostAutoRecoveryLimitBonus",8:"eventGachaFreeCountBonus"}[s];if(o)return{label:this.text(o,e,{count:r.format(i)})};if(s===6)return{label:this.text("studioTimeExtension",e,{duration:this.benefitDuration(i)})};const c={2:"boostRecoveryTimeReduction",5:"studioRewardBonus",7:"allParametersBoost"}[s];return c?{label:this.text(c,e,{percent:r.format(i/100)})}:{label:e}}benefitDuration(t){const e=new Intl.NumberFormat(this.locale),s=[],i=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return i&&s.push(k(this.locale,"common.time.spanHours",`${e.format(i)} h`,{count:e.format(i)})),r&&s.push(k(this.locale,"common.time.spanMinutes",`${e.format(r)} m`,{count:e.format(r)})),(a||!s.length)&&s.push(this.text("durationSeconds",`${e.format(a)} s`,{count:e.format(a)})),s.join(" ")}cardArt(t){return t.artwork??ft(t.image)}cardTier(t){return this.cardArt(t)?.kind??(t.rank>=16?"black":t.rank>=11?"platinum":t.rank>=6?"gold":"normal")}tierLabel(t){const e={normal:"tierNormal",gold:"tierGold",platinum:"tierPlatinum",black:"tierBlack"},s={normal:"Normal",gold:"Gold",platinum:"Platinum",black:"Black"};return this.text(e[t],s[t])}select(t,e){if(t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;const s=this.tierServer(e);s!==this.server&&L(s)||(t.preventDefault(),this.selectedRank=e.rank,this.selectedSource=s,history.replaceState(history.state,"",`${location.pathname}${location.search}#tgw-rank-${e.rank}`))}rankButton(t,e){const s=this.name(t.title),i=t===this.selectedTier(),r=this.entityLink(t);return r?n`
          <a
            class="tgw-rank-button tabular"
            href=${r}
            aria-current=${i?"true":d}
            aria-label=${s}
            @click=${a=>this.select(a,t)}
          >
            ${e}
          </a>
        `:n`
          <button
            type="button"
            class="tgw-rank-button tabular"
            aria-pressed=${i}
            aria-label=${s}
            @click=${a=>this.select(a,t)}
          >
            ${e}
          </button>
        `}picker(){const t=new Map;for(const s of this.tiers){const i=this.cardTier(s),r=t.get(i);r?r.push(s):t.set(i,[s])}const e=s=>String(s).padStart(2,"0");return n`
      <nav class="tgw-picker" aria-label=${this.text("rank","Rank")}>
        ${[...t].map(([s,i])=>{const r=i[0],a=i[i.length-1],o=this.cardArt(r)?.badge;return n`
            <section class="tgw-tier" data-tier=${s}>
              <header class="tgw-tier__head">
                ${o?n`<img src=${o} alt="" width="60" height="28" decoding="async" />`:d}
                <strong>${this.tierLabel(s)}</strong>
                <small class="tabular">${e(r.rank)}–${e(a.rank)}</small>
              </header>
              <div class="tgw-tier__ranks">
                ${i.map(l=>this.rankButton(l,e(l.rank)))}
              </div>
            </section>
          `})}
      </nav>
    `}tier(t){const e=Array.isArray(t.benefits)?t.benefits:[],s=Array.isArray(t.dailyRewards)?t.dailyRewards:[],i=Array.isArray(t.rankRewards)?t.rankRewards:[],r=Number(t.pointsRequired||0),a=this.tiers.indexOf(t),o=this.entityId?void 0:this.tiers[a+1],l=this.name(this.pointName),c=this.cardTier(t),u=this.cardArt(t),g=e.map(m=>this.benefitDisplay(m)).filter(m=>m.label);return n`
      <article class="tgw-rank" id=${`tgw-rank-${t.rank}`} aria-labelledby=${`tgw-rank-title-${t.rank}`}>
        <section class="tgw-summary surface" data-tier=${c}>
          <figure class="tgw-art" role="img" aria-label=${this.name(t.title)}>
            ${u?n`
              <img class="tgw-art__face" src=${u.face} alt="" width="980" height="630" decoding="async" />
              <img class="tgw-art__plate" src=${u.plate} alt="" decoding="async" />
            `:d}
            ${t.image?n`<img class="tgw-art__number" src=${t.image} alt="" decoding="async" />`:d}
          </figure>
          <div class="tgw-summary__copy">
            <h2 class="tgw-summary__title" id=${`tgw-rank-title-${t.rank}`}>${this.name(t.title)}${(()=>{const m=this.unionTiers?.entries.get(t);return tt(m,this.locale)})()}</h2>
            <span class="tgw-summary__tier">${this.tierLabel(c)}</span>
            <dl class="tgw-summary__points">
              <dt>${this.text("requiredPoints","Total points required")}</dt>
              <dd class="tabular">
                <b>${r.toLocaleString(this.locale)}</b>
                <span>${l}</span>
              </dd>
            </dl>
            ${this.entityId?d:n`
                    <p class="tgw-summary__next">
                      ${o?this.text("toNextRank","{points} to the next rank",{points:`${(Number(o.pointsRequired||0)-r).toLocaleString(this.locale)} ${l}`}):this.text("maxRank","Highest rank")}
                    </p>
                  `}
          </div>
        </section>
        <div class="tgw-panels">
          <section class="tgw-panel surface">
            <h3 class="detail-section-title">${this.text("benefits","Rank benefits")}</h3>
            ${g.length?n`
                    <ul class="tgw-benefits" role="list">
                      ${g.map(({label:m,value:f})=>n`
                          <li>
                            <span class="tgw-benefits__mark">${y("check_circle",20)}</span>
                            <span>${m}</span>
                            ${f!==void 0?n`
                                    <b class="tabular">${f}</b>
                                  `:d}
                          </li>
                        `)}
                    </ul>
                  `:n`
                    <p class="tgw-panel__empty">${this.text("noBenefits","No benefits at this rank")}</p>
                  `}
          </section>
          <section class="tgw-panel surface">
            <h3 class="detail-section-title">${this.text("rewards","Rewards")}</h3>
            ${s.length||i.length?n`
                    <dl class="tgw-grants">
                      ${s.length?n`
                              <div>
                                <dt>${this.text("dailyRewards","Daily rewards")}</dt>
                                <dd>${s.map(m=>this.rewardItem(m.reward||{}))}</dd>
                              </div>
                            `:d}
                      ${i.length?n`
                              <div>
                                <dt>${this.text("rankRewards","Rank-up rewards")}</dt>
                                <dd>${i.map(m=>this.rewardItem(m))}</dd>
                              </div>
                            `:d}
                    </dl>
                  `:n`
                    <p class="tgw-panel__empty">${this.text("noRewards","No rewards at this rank")}</p>
                  `}
          </section>
        </div>
      </article>
    `}render(){const t=this.selectedTier();return n`
      <section class="page tgw-card" aria-label="T.G.W CARD">
        ${this.phase==="loading"?et(p(this.locale,"common.states.loading")):this.phase==="error"?st(p(this.locale,"common.states.unavailable"),p(this.locale,"common.actions.retry"),()=>void this.load(),this.error):this.tiers.length?n`
                    ${this.entityId||this.tiers.length<2?d:this.picker()}
                    ${t?S("tgw-card",t,String(t.id))?n`
                      ${this.tier(t)}
                      ${this.entityId?O({type:"tgw-card",id:String(t.rank),server:this.tierServer(t),locale:this.locale,title:this.name(t.title)}):d}
                    `:B(this.locale):d}
                  `:gt({title:this.text("empty","No rank data in this release"),icon:"credit_card"})}
      </section>
    `}}customElements.get("tgw-card-workspace")||customElements.define("tgw-card-workspace",wt);const D=[1,2,4,5,15,16,6,11,12,8,3,7,10,13,14,9,0];function P(h,t){const e=ht.indexOf(t);return Number(Array.isArray(h)?h[e]??h[0]:h)||0}function it(h){if(h.groupCategory)return h.groupCategory;if(h.category!==void 0)return h.category;const t=/^regular-mission-(\d+)$/u.exec(h.id)?.[1];return t?Math.floor(Number(t)/1e8):0}function q(h,t){return h.window.end&&h.window.end<=t?"ended":h.window.start>t?"upcoming":"ongoing"}function K(h,t){const e=new Map;for(const s of h){const i=it(s),r=i===5?Number(s.releaseDay||0):0,a=P(s.startAt,t),o=P(s.endAt,t),l=[2,3,10,13,14].includes(i)||o>0,c=l?{start:a,end:o}:{start:0,end:0},u=l||i===5?[i,s.kind,s.groupId||0,c.start,c.end,r].join(":"):String(i),g=e.get(u);g?g.rows.push(s):e.set(u,{key:u,category:i,releaseDay:r,timed:l,window:c,rows:[s]})}return[...e.values()].map(s=>({...s,rows:s.rows.sort((i,r)=>Number(i.priority||0)-Number(r.priority||0)||i.id.localeCompare(r.id,"en",{numeric:!0}))})).sort((s,i)=>D.indexOf(s.category)-D.indexOf(i.category)||s.releaseDay-i.releaseDay||i.window.start-s.window.start||s.key.localeCompare(i.key))}const H={0:["categoryOther","Other missions"],1:["categoryDaily","Daily"],2:["categoryPeriod","Limited Time"],3:["categoryEvent","Event"],4:["categoryNormal","Normal"],5:["categoryBeginner","Beginner"],6:["categoryComeback","Comeback"],7:["categoryCharacter","Character"],8:["categoryInvitation","Friend Invite"],9:["categorySecret","Hidden missions"],10:["categoryEventDaily","Event Daily"],11:["categoryCircle","Group"],12:["categoryCircleDaily","Group Daily"],13:["categoryEventCircle","Group Event"],14:["categoryEventCircleDaily","Group Event Daily"],15:["categoryUnlockMusic","Song Unlock"],16:["categoryUnlockHome","Home Unlock"]};function bt(h){return[1,10,12,14].includes(h)?y("event_repeat",24):[2,3,13].includes(h)?y("schedule",24):[15,16].includes(h)?y("lock_open",24):h===9?y("visibility_off",24):[8,11].includes(h)?y("group",24):y("fact_check",24)}class vt extends G{static properties={locale:{type:String},entityId:{state:!0},phase:{state:!0},missions:{state:!0},mode:{state:!0},groupKey:{state:!0},now:{state:!0}};clock;server="intl";error="";request;loading;groupBack;groupMenu;groupHeading;localeListener=()=>{this.locale=_(this.locale),this.syncEntityHeading()};constructor(){super(),this.locale="ja",this.entityId="",this.phase="loading",this.missions=[],this.mode="all",this.groupKey="",this.now=Date.now()}createRenderRoot(){return this}preparePage(t,e){if(V(this),this.locale=e,this.server=t.server,t.entityId){this.entityId=t.entityId,this.unionMissions=void 0,this.applyDocument(t.document),this.isConnected&&this.syncEntityHeading();return}const s=t.catalog?this.applyCatalog(t.catalog):t.document;this.applyDocument(s)}applyCatalog(t){return this.unionMissions=Z(t),{entries:Object.fromEntries(this.unionMissions.items.map(e=>[this.unionMissions.entries.get(e).key,e]))}}applyDocument(t){if(this.entityId){if(String(t.id||"")!==this.entityId)throw new Error(p(this.locale,"common.states.unavailable"));this.missions=[t]}else this.missions=W(t.entries);this.phase="ready"}contentAccessChanged=()=>{this.request?.abort(),this.request=void 0,this.loading?.cancel(),this.unionMissions=void 0,this.missions=[],this.load()};connectedCallback(){addEventListener($,this.contentAccessChanged),super.connectedCallback(),this.locale=_(this.locale);const t=new URL(C()),e=J(t.pathname);this.entityId=e?.kind==="missions"&&e.id||"",this.server=e?.kind==="missions"?e.server:j(),addEventListener("haneoka:locale-ready",this.localeListener),M(()=>import("./circular-progress.Derl8Va3.js"),__vite__mapDeps([0,1,2,3,4]));const s=t.searchParams;this.mode=s.get("mode")==="regular"||s.get("mode")==="limited"?s.get("mode"):"all",this.groupKey=s.get("group")||"",addEventListener("popstate",this.popState),this.clock=setInterval(()=>{this.now=Date.now()},6e4),E(),this.load()}popState=()=>{const t=new URLSearchParams(location.search);this.groupKey=t.get("group")||"",this.mode=t.get("mode")==="regular"||t.get("mode")==="limited"?t.get("mode"):"all",this.groupKey||(this.openedInPlace=!1)};disconnectedCallback(){removeEventListener($,this.contentAccessChanged),clearInterval(this.clock),this.request?.abort(),this.request=void 0,this.loading?.cancel(),N("missions"),ot("missions"),this.restoreGroupShell(),removeEventListener("popstate",this.popState),removeEventListener("haneoka:locale-ready",this.localeListener),super.disconnectedCallback()}text(t,e,s){return k(this.locale,at[t]??t,e,s)}name(t,e=this.locale){return F(t,e)}image(t){const e=String(t.image||""),s=t.imageVariants;if(!e||!s||typeof s!="object")return e;const i=s[e];if(!i||typeof i!="object")return e;const r={"zh-CN":"zh-Hans","zh-TW":"zh-Hant"}[this.locale]||this.locale;return typeof i[r]=="string"?String(i[r]):e}missionEntry(t){return this.unionMissions?.entries.get(t)||this.unionMissions?.byId.get(`${this.server}:${t.id}`)}entityLink(t){const e=this.missionEntry(t)?.displayServer||this.server;if(L(e))return X({server:e,locale:this.locale,kind:"missions",id:t.id})}unionMissions;syncEntityHeading(){if(!this.entityId||!this.missions[0])return;const t=S("missions",this.missions[0],this.entityId)?this.name(this.missions[0].title)||this.entityId:p(this.locale,"common.states.unpublished");x(this,t,this.locale),E()}updated(){if(!this.isConnected)return;this.renderStaticChrome();const t=this.groupKey?this.groups().find(e=>e.key===this.groupKey):void 0;!this.entityId&&t?this.syncGroupShell(t):this.restoreGroupShell(),this.syncEntityHeading()}syncGroupShell(t){const e=this.closest("[data-shell]"),s=e?.querySelector("[data-top-app-bar] h1");s&&!this.groupHeading&&(this.groupHeading={node:s,children:[...s.childNodes],language:s.getAttribute("lang")}),x(this,this.groupTitle(t),this.locale);const i=e?.querySelector("[data-top-app-bar-leading]");if(!i)return;if(!this.groupBack){const a=document.createElement("a");a.className="icon-button",a.dataset.entityBack="",a.innerHTML='<svg class="material-icon" width="24" height="24" aria-hidden="true"><use href="/icons.svg#arrow_back"></use></svg>',a.addEventListener("click",c=>{c.button||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||(c.preventDefault(),this.closeGroup())}),i.prepend(a),this.groupBack=a;const o=i.querySelector("[data-nav-toggle]"),l=e?.querySelector("[data-top-app-bar-actions]");if(o&&l){const c=document.createElement("div");c.className="top-app-bar__group",c.append(o),l.prepend(c),this.groupMenu={menu:o,leading:i,group:c}}}const r=new URL(C());r.searchParams.delete("group"),this.groupBack.href=`${r.pathname}${r.search}`,this.groupBack.dataset.entityFallbackHref=this.groupBack.href,this.groupBack.setAttribute("aria-label",p(this.locale,"common.actions.back"))}restoreGroupShell(){if(this.groupBack?.remove(),this.groupBack=void 0,this.groupMenu){const{menu:t,leading:e,group:s}=this.groupMenu;e.isConnected&&e.append(t),s.remove(),this.groupMenu=void 0}if(this.groupHeading){const{node:t,children:e,language:s}=this.groupHeading;t.isConnected&&(t.replaceChildren(...e),delete t.dataset.entityTitle,s?t.lang=s:t.removeAttribute("lang")),this.groupHeading=void 0}}async load(){const t=U(this);if(t?.schema==="haneoka-catalog-system-v1"&&t.kind==="missions"&&(t.entityId||"")===this.entityId){this.preparePage(t,this.locale);return}this.request?.abort(),this.loading?.cancel();const e=new AbortController,s=Y(p(this.locale,"common.states.loading"),{scope:"owner",signal:e.signal});this.request=e,this.loading=s,this.phase="loading",this.error="";try{let i;if(!this.entityId&&R.includes(this.server)){const r=await Q("missions",this.server,this.locale,{signal:e.signal});if(Object.values(r.sourceAvailability).every(a=>a!=="loaded"))throw new Error("Mission catalog unavailable");if(e.signal.aborted||this.request!==e)return;i=this.applyCatalog(r)}else this.unionMissions=void 0,i=await w(b("missions",this.entityId,this.server),{signal:e.signal});if(this.request!==e||e.signal.aborted){s.cancel();return}this.applyDocument(i),this.syncEntityHeading(),s.finish()}catch(i){if(e.signal.aborted||this.request!==e){s.cancel();return}this.phase="error",this.error=i instanceof Error?i.message:String(i),s.fail(i)}finally{this.request===e&&this.phase!=="error"&&(this.request=void 0,this.loading=void 0)}}sync(){const t=new URLSearchParams(location.search);t.delete("mode"),this.mode!=="all"&&t.set("mode",this.mode),t.delete("group"),this.groupKey&&t.set("group",this.groupKey),history.replaceState(history.state,"",`${location.pathname}${t.size?`?${t}`:""}`)}categoryLabel(t){const[e,s]=H[t]||H[0];return this.text(`catalog.missions.${e}`,s)}groupTitle(t){return this.name(t.rows[0]?.group)||this.categoryLabel(t.category)}groups(){return K(this.missions.filter(t=>z("missions",t,String(t.id))),this.locale).filter(t=>this.mode==="all"||(this.mode==="limited"?t.timed:!t.timed))}rewardTotals(t){const e=new Map;for(const s of t)for(const i of Array.isArray(s.rewards)?s.rewards:[]){if(!this.name(i.name))continue;const r=`${String(i.kind||"")}:${String(i.resourceType??"")}:${String(i.resourceId??this.name(i.name))}`,a=e.get(r);a?a.count=Number(a.count||0)+Number(i.count||1):e.set(r,{...i,count:Number(i.count||1),href:T(String(i.href||""),this.missionEntry(s)?.displayServer||this.server,this.locale)})}return[...e.values()]}windowText(t){if([1,12].includes(t.category)&&!t.timed)return this.text("missionDailyReset","Resets daily");if(t.releaseDay)return this.text("catalog.missions.releaseDay","Day {day}",{day:t.releaseDay});const{start:e,end:s}=t.window;return!e&&!s?this.text("missionNoEnd","No end date"):e&&s?`${this.date(e)} – ${this.date(s)}`:this.date(e||s)}openGroup(t,e){if(t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;t.preventDefault(),this.groupKey=e,this.openedInPlace=!0;const s=new URLSearchParams(location.search);s.set("group",e),history.pushState(history.state,"",`${location.pathname}?${s}`),this.closest("#main-content")?.scrollTo({top:0})}openedInPlace=!1;closeGroup(){if(this.openedInPlace){this.openedInPlace=!1,history.back();return}this.groupKey="",this.sync()}groupHref(t){const e=this.isConnected?C():void 0,s=new URLSearchParams(e?.search);return s.set("group",t),`${this.isConnected?e.pathname:mt({server:this.server,locale:this.locale,kind:"missions"})}?${s}`}groupCard(t){const e=this.rewardTotals(t.rows),s=e.slice(0,4);return n`
      <li>
        <a
          class="mission-card"
          data-category=${t.category}
          href=${this.groupHref(t.key)}
          @click=${i=>this.openGroup(i,t.key)}
        >
          <span class="mission-card__head">
            <span class="mission-card__icon">${bt(t.category)}</span>
            <span class="mission-card__count tabular">
              ${this.text("missionCount","{count} missions",{count:t.rows.length.toLocaleString(this.locale)})}
            </span>
          </span>
          <strong class="mission-card__title">${this.groupTitle(t)}</strong>
          ${t.timed?n`
                  <span class="mission-card__status">${this.text(q(t,this.now),"")}</span>
                `:d}
          <span class="mission-card__window">
            ${y("schedule",16)}
            <span>${this.windowText(t)}</span>
          </span>
          ${s.length?n`
                  <span class="mission-card__rewards" aria-label=${this.text("missionRewardTotal","Total rewards")}>
                    ${s.map(i=>this.reward(i))}
                    ${e.length>s.length?n`
                            <span class="mission-card__more tabular">+${e.length-s.length}</span>
                          `:d}
                  </span>
                `:d}
        </a>
      </li>
    `}groupView(t){return n`
      <section class="mission-group">
        <ul class="mission-list" role="list">
          ${t.rows.map(e=>{const s=this.entityLink(e),i=this.name(e.title)||"—";return n`
              <li class="mission-row">
                <span class="mission-row__condition">
                  ${s?n`
                          <a href=${s}>${i}</a>
                        `:n`
                          <span>${i}</span>
                        `}
                  ${this.goal(e)}
                  ${(()=>{const r=this.missionEntry(e);return tt(r,this.locale)})()}
                </span>
                <span class="mission-row__rewards">
                  ${(Array.isArray(e.rewards)?e.rewards:[]).map(r=>this.reward(r,this.missionEntry(e)?.displayServer||this.server))}
                </span>
              </li>
            `})}
        </ul>
      </section>
    `}date(t){return dt(this.locale,t,{time:!0})}goal(t){const e=Number(t.goal||0);return e>0?n`
          <span class="mission-row__goal tabular">
            ${this.text("catalog.missions.goal","Goal")} /
            <b>${e.toLocaleString(this.locale)}</b>
          </span>
        `:d}overview(t){const e=t.filter(i=>!i.timed&&i.category!==1),s=[{label:this.text("missionDaily","Daily missions"),groups:t.filter(i=>i.category===1&&!i.timed)},...["ongoing","upcoming","ended"].map(i=>({label:`${this.text("limitedMission","Limited missions")} / ${this.text(i,"")}`,groups:t.filter(r=>r.timed&&q(r,this.now)===i).sort((r,a)=>i==="upcoming"?r.window.start-a.window.start:a.window.start-r.window.start)}))];return s.splice(3,0,{label:this.text("catalog.missions.permanent","Permanent missions"),groups:e}),s.filter(i=>i.groups.length).map(i=>n`
          <section class="mission-section stack">
            <h2 class="detail-section-title">${i.label}</h2>
            <ul class="mission-cards" role="list">
              ${i.groups.map(r=>this.groupCard(r))}
            </ul>
          </section>
        `)}reward(t,e=this.server){const s=this.name(t.name)||(t.unresolvedRewardId!==void 0?this.text("rewardUnavailable","Reward unavailable"):"");if(!s)return d;const i=this.image(t),r=Number(t.count||0),a=T(String(t.href||""),e,this.locale),o=n`
      ${i?n`
              <img src=${i} alt="" loading="lazy" decoding="async" />
            `:y("redeem",18)}
      <span>${s}</span>
      ${r>1?n`
              <b class="tabular">×${r.toLocaleString(this.locale)}</b>
            `:d}
    `;return a?n`
          <a class="mission-chip state-layer" href=${a}>${o}</a>
        `:n`
          <span class="mission-chip">${o}</span>
        `}entityView(t){const e=this.name(t.title)||t.id,s=this.name(t.description),i=nt(t.id);return n`
      <section class="mission-group">
        <ul class="mission-list" role="list">
          <li class="mission-row">
            <span class="mission-row__condition">
              <span>${e}</span>
              ${s&&s!==e?n`
                      <small>${s}</small>
                    `:d}
              ${this.goal(t)}
            </span>
            <span class="mission-row__rewards">
              ${(Array.isArray(t.rewards)?t.rewards:[]).map(r=>this.reward(r))}
            </span>
          </li>
        </ul>
        ${i?O({...i,server:this.server,locale:this.locale,title:e}):d}
      </section>
    `}modeFilter(){return n`
      <div class="mission-workspace__filter" data-app-bar-switch="view">
        ${pt({label:p(this.locale,"common.actions.view"),value:this.mode,options:[{value:"all",label:p(this.locale,"common.states.all"),icon:"apps"},{value:"regular",label:this.text("catalog.missions.permanent","Permanent missions"),icon:"fact_check"},{value:"limited",label:this.text("limitedMission","Limited mission"),icon:"schedule"}],onSelect:t=>{this.mode=t,this.sync()}})}
      </div>
    `}renderStaticChrome(){const t=this.groups(),e=this.groupKey?t.find(a=>a.key===this.groupKey):void 0,s=this.entityId?this.missions[0]:void 0,i=s?K([s],this.locale)[0]:e,r=e?e.rows.length:t.reduce((a,o)=>a+o.rows.length,0);lt("missions",n`
      <div class="browse__crumbs">
        ${s?d:n`
          <span class="chip chip--static tabular" role="status">
            ${this.text("missionCount","{count} missions",{count:r.toLocaleString(this.locale)})}
          </span>
        `}
        ${i?n`
          <span class="chip chip--static"><span class="chip__label">${this.categoryLabel(s?it(s):i.category)}</span></span>
          <span class="chip chip--static"><span class="chip__label">${this.windowText(i)}</span></span>
        `:d}
      </div>
    `),s||e?N("missions"):ct("missions",this.modeFilter())}render(){if(this.entityId&&this.missions[0]&&!S("missions",this.missions[0],this.entityId))return B(this.locale);const t=this.groups(),e=this.groupKey?t.find(s=>s.key===this.groupKey):void 0;return n`
      <section class="mission-workspace">
        ${this.phase==="loading"?et(p(this.locale,"common.states.loading")):this.phase==="error"?st(p(this.locale,"common.states.unavailable"),p(this.locale,"common.actions.retry"),()=>void this.load(),this.error):n`
                  ${this.entityId&&this.missions[0]?this.entityView(this.missions[0]):e?this.groupView(e):n`
                            ${this.overview(t)}
                          `}
                `}
      </section>
    `}}customElements.get("mission-workspace")||customElements.define("mission-workspace",vt);
