const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/client.Dm1jMS8u.js","_astro/data.CTobvNqO.js","_astro/request-scope.N4apwAcW.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./preload-helper.BlTxHScW.js";import{o as G,a as S}from"./song-display.BUM043oH.js";import{i as q}from"./lit-element.Bc_VOJIm.js";import{A as h,b as o,l as T,c as N}from"./lit-html.DhDqt3I2.js";import"./outlined-text-field.omMPAN5q.js";import"./outlined-select.BLpyNoqZ.js";import"./select-option.DfVQFXUn.js";import"./switch.Cn4cAa2V.js";import{fetchTeamBuilderData as F}from"./fetch.D18jK1jC.js";import{o as D,d as _}from"./data.CTobvNqO.js";import{c as C}from"./client.BYho01b_.js";import{l as E,a as P}from"./catalog.CfAhzaok.js";import{i as k}from"./icon.BSt8MVsq.js";import{m as j}from"./modal.D-GY7Vdy.js";import{a as A}from"./accordion.CRbde2Jj.js";import{l as I}from"./state.Ck623oKm.js";/* empty css                        */import"./delegate.qnlMPWy4.js";import"./outlined-field.BML1F-r4.js";import"./on-report-validity.BygZsmbx.js";import"./animation.BI-yjTPx.js";import"./query-assigned-elements.N5HHHkzR.js";import"./redispatch-event.Dod3cBoe.js";import"./shared-styles.cssresult.CDtq61Of.js";import"./validator.Cz1PymV-.js";import"./elevation.CV0mocre.js";import"./md-focus-ring.BFbx9fcs.js";import"./list-controller.DhsW2nnj.js";import"./shared.Z0K3ZZvG.js";import"./item.aw-mMCVK.js";import"./ripple.DU62FgSE.js";import"./form-label-activation.C-ZPsH8j.js";import"./checkbox-validator.BT-H8ZRB.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./resource-route.BR5kLHYo.js";/* empty css                        *//* empty css                         *//* empty css                          */import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./loading-progress.C8Gf5z9T.js";import"./linear-progress.Du-QQIqh.js";import"./progress.BYlJSdrk.js";const w=new Map;async function V(g,t){const{server:e,releaseId:s,sourceId:a}=g.identity,i=`${e}/${s}`,r=w.get(i);if(r)return r;const l=await Promise.all(["character-missions","stamps","friendships","progression"].map(async u=>{const p=await fetch(`/api/v1/servers/${e}/${u}?release=${encodeURIComponent(s)}`,{signal:t});if(!p.ok||p.headers.get("x-haneoka-release-id")!==s||p.headers.get("x-haneoka-source-id")!==a)throw new Error("character-growth-source-unavailable");return D(await p.json())})),c={missions:_(l[0].missions),stamps:_(l[1]),friendships:_(l[2].friendships),friendshipRanks:_(l[3].friendshipRanks)};return t.throwIfAborted(),w.set(i,c),w.size>4&&w.delete(w.keys().next().value),c}let z=0;const y=2147483647,L=g=>!!g?.totalPower&&g.cards.length===5&&g.cards.every(t=>t.memberCardId!==null&&t.memberExp!==null&&t.memberAwakeCount!==null&&t.memberRank!==null&&(!t.supportCardId||t.supportExp!==null&&t.supportRank!==null)),v=new Map;async function B(g,t){const e=v.get(g);if(e&&Date.now()-e.at<45e3)return e.value;const s=await P(g,{signal:t});return v.set(g,{at:Date.now(),value:s}),v.size>32&&v.delete(v.keys().next().value),s}class O extends q{static properties={result:{state:!0},error:{state:!0},ready:{state:!0},busy:{state:!0},expanded:{state:!0},paging:{state:!0},rangeError:{state:!0}};locale="en";region="jp";options;boards=[];primaryChallengeId;rankRange;draftMin="";draftMax="";draftVip="";defaultCharacter="18";defaultInstrument="75";characterRadius="3";instrumentRadius="10";allowGrowth=!1;rangeExpanded=!1;characterLevels=new Map;instrumentLevels=new Map;related=[];preferences;invalidFields=new Set;dirty=!1;coverageId=`ranking-team-analysis-coverage-${++z}`;data;growthSources;asOf=0;percent=new Intl.NumberFormat("en",{style:"percent",maximumFractionDigits:1});engine;requestId=0;lifetime=new AbortController;constructor(){super(),this.result=void 0,this.error="",this.ready=!1,this.busy=!1,this.paging=!1,this.expanded=new Set,this.rangeError=!1}disposeSongDisplay;setup(t){this.disposeSongDisplay?.(),this.disposeSongDisplay=G(()=>this.requestUpdate()),this.options=t,this.locale=t.locale,this.region=t.region,this.percent=new Intl.NumberFormat(this.locale,{style:"percent",maximumFractionDigits:1}),document.addEventListener("visibilitychange",()=>this.engine?.pauseEventGrowth(document.hidden),{signal:this.lifetime.signal}),this.load()}text(t){return C(this.locale,`catalog.rankings.analysis.${t}`,"")}createRenderRoot(){return this}close=()=>this.remove();disconnectedCallback(){this.disposeSongDisplay?.(),this.lifetime.abort(),this.engine?.dispose(),super.disconnectedCallback()}async readObservation(t,e){const{row:s,event:a}=this.options;if(t.challengeId===this.primaryChallengeId)return L(s)?{...t,status:"included",row:s}:{...t,status:"missingGrowth"};if(!s.profileId)return{...t,status:"identityMissing"};const i=t.challengeId===0?"total":`challenges/${t.challengeId}`;try{const l=(await B(`/api/v2/game/records/${this.region}/events/${a.id}/${i}/latest`,AbortSignal.any([e,AbortSignal.timeout(5e3)]))).rows.find(c=>c.profileId===s.profileId);return L(l)?{...t,status:"included",row:l}:{...t,status:l?"missingGrowth":"notFound"}}catch{return e.throwIfAborted(),{...t,status:"readFailed"}}}async load(){try{const t=this.lifetime.signal,{event:e,challengeId:s,kind:a}=this.options,i=this.region==="jp"?"jp":"intl";this.primaryChallengeId=a==="challenge"?Number(s):a==="total"?0:void 0;const r=e.challenges.filter(n=>n.enabled&&n.status!=="upcoming"||n.id===s).map(n=>({challengeId:Number(n.id),musicId:n.musicId}));(e.totalRankingEnabled&&e.totalRankingStatus!=="upcoming"||a==="total")&&r.unshift({challengeId:0});const l=F(i,t).then(n=>(t.throwIfAborted(),this.data=n,this.setRelated([this.options.row]),this.requestUpdate(),n)),[c,u,p]=await Promise.all([l,Promise.all(r.map(n=>this.readObservation(n,t))),l.then(n=>V(n,t))]);t.throwIfAborted(),this.data=c,this.boards=u,this.setRelated(u.filter(n=>n.status==="included").map(n=>n.row)),this.growthSources=p,this.asOf=Date.now(),this.primaryChallengeId??=u.find(n=>n.status==="included")?.challengeId;const d=u.find(n=>n.challengeId===this.primaryChallengeId);if(d?.status!=="included"){this.error=d?.status==="missingGrowth"||u.some(n=>n.status==="missingGrowth")?"missingGrowth":u.some(n=>n.status==="readFailed")?"loadError":"noSongRecord";return}const{EngineClient:m}=await M(async()=>{const{EngineClient:n}=await import("./client.Dm1jMS8u.js").then(f=>f.k);return{EngineClient:n}},__vite__mapDeps([0,1,2]));t.throwIfAborted(),this.engine=new m(c,void 0,{maxWorkers:1}),this.ready=!0}catch{this.lifetime.signal.aborted||(this.error="loadError")}}calculate(){const{engine:t,growthSources:e,primaryChallengeId:s}=this;if(!t||!e||s===void 0)return;const a=++this.requestId;this.paging&&t.cancel(),t.pauseEventGrowth(document.hidden),this.busy=!0,this.paging=!0,this.error="",this.result=void 0,this.expanded=new Set;const i=this.boards.filter(r=>r.status==="included");t.analyzeEventGrowth({eventId:Number(this.options.event.id),asOf:this.asOf,sources:e,primaryChallengeId:s,rankRange:this.rankRange,preferences:this.preferences,total:i.find(r=>r.challengeId===0)?.row,observations:i.filter(r=>r.challengeId!==0).map(({challengeId:r,row:l})=>({row:l,challengeId:r}))},r=>{this.acceptPage(a,r)}).catch(()=>{a!==this.requestId||this.engine!==t||this.lifetime.signal.aborted||(this.busy=!1,this.paging=!1,this.error="missingRules")})}setRelated(t){const e=new Set(t.flatMap(a=>a.cards.map(i=>i.memberCardId).map(i=>i===null?void 0:this.data?.members[String(i)]?.characterId).filter(i=>i!==void 0))),s=new Map;for(const a of[...e].sort((i,r)=>i-r)){const i=this.character(a).band;s.has(i)||s.set(i,[]),s.get(i).push(a)}this.related=[...s].sort(([a],[i])=>a-i).map(([a,i])=>({band:a,characters:i}))}edit(t,e){t==="min"?this.draftMin=e:t==="max"?this.draftMax=e:t==="vip"?this.draftVip=e:t==="defaultCharacter"?this.defaultCharacter=e:t==="defaultInstrument"?this.defaultInstrument=e:t==="characterRadius"?this.characterRadius=e:t==="instrumentRadius"?this.instrumentRadius=e:t==="allowGrowth"?this.allowGrowth=e==="true":t.startsWith("character-")?this.characterLevels.set(Number(t.slice(10)),e):t.startsWith("instrument-")&&this.instrumentLevels.set(Number(t.slice(11)),e),this.dirty||(this.dirty=!0,++this.requestId,this.paging&&this.engine?.cancel(),this.busy=this.paging=!1,this.result=void 0,this.expanded=new Set),this.requestUpdate()}applyRange=t=>{t.preventDefault(),this.invalidFields=new Set;const e=(u,p,d,m,n=!1)=>{const f=p.trim().normalize("NFKC");if(n&&!f)return;const b=/^[0-9]+$/u.test(f)?Number(f):NaN;return(!Number.isInteger(b)||b<d||b>m)&&this.invalidFields.add(u),b},s=e("min",this.draftMin,0,y,!0),a=e("max",this.draftMax,0,y,!0);(s??0)>(a??y)&&(this.invalidFields.add("min"),this.invalidFields.add("max"));const i=e("characterRadius",this.characterRadius,0,50),r=e("instrumentRadius",this.instrumentRadius,0,1e3);e("defaultCharacter",this.defaultCharacter,10,1e3),e("defaultInstrument",this.defaultInstrument,40,1e3);const l=Object.fromEntries(this.related.flatMap(u=>u.characters.map(p=>[p,e(`character-${p}`,this.characterLevels.get(p)??this.defaultCharacter,10,1e3)]))),c=Object.fromEntries(this.related.map(u=>[u.band,e(`instrument-${u.band}`,this.instrumentLevels.get(u.band)??this.defaultInstrument,40,1e3)]));this.rangeError=this.invalidFields.size>0,!this.rangeError&&(this.rankRange=s===void 0&&a===void 0?void 0:{min:s,max:a},this.preferences={vipBonus:this.draftVip===""?void 0:Number(this.draftVip),characterLevels:l,instrumentLevels:c,characterRadius:i,instrumentRadius:r,allowGrowth:this.allowGrowth},this.dirty=!1,this.calculate(),matchMedia("(max-width: 599px)").matches&&this.updateComplete.then(()=>this.querySelector(".ranking-team-analysis__output")?.scrollIntoView({block:"start",behavior:"smooth"})))};clearRange=()=>{this.draftMin=this.draftMax=this.draftVip="",this.defaultCharacter="18",this.defaultInstrument="75",this.characterRadius="3",this.instrumentRadius="10",this.allowGrowth=!1,this.characterLevels.clear(),this.instrumentLevels.clear(),this.rangeError=!1,this.invalidFields.clear(),this.edit("min","")};acceptPage(t,e){t!==this.requestId||!this.engine||this.lifetime.signal.aborted||(e.rejectedChallenges.length&&(this.boards=this.boards.map(s=>e.rejectedChallenges.includes(s.challengeId)?{challengeId:s.challengeId,musicId:s.musicId,status:"missingGrowth"}:s)),this.busy=e.rows.length===0&&!e.complete,this.paging=!e.complete&&!e.awaitingPage,this.result=e)}async page(t){if(!this.engine||this.paging)return;this.paging=!0;const e=this.requestId;try{await this.engine.eventGrowthPage(t,s=>this.acceptPage(e,s))}catch{e===this.requestId&&(this.paging=!1,this.error="missingRules")}}retry=()=>{const t=`/api/v2/game/records/${this.region}/events/${this.options.event.id}/`;for(const e of v.keys())e.startsWith(t)&&v.delete(e);this.engine?.dispose(),this.engine=void 0,++this.requestId,this.ready=!1,this.error="",this.result=void 0,this.expanded=new Set,this.boards=[],this.load()};span(t,e){return t!==void 0&&t<e?`${t}–${e}`:String(e)}character(t){const e=this.data.characters[String(t)];return{name:E(e?.characterName,this.locale),face:String(e?.faceImage??""),band:Number(e?.bandId??0)}}band(t){return E(this.data.bands[String(t)]?.bandName,this.locale)}song(t){if(t===0)return{title:this.text("totalRanking"),titleLanguage:this.locale,jacket:""};const e=this.boards.find(a=>a.challengeId===t),s=e?.musicId?this.data?.songs[e.musicId]:void 0;return{title:s?S(s,this.locale).text:`#${t}`,titleLanguage:s?S(s,this.locale).locale:this.locale,jacket:String(s?.jacketThumbUrl??s?.jacketUrl??"")}}renderCoverage(){if(!this.boards.length)return h;const t=this.boards.filter(s=>s.status==="included").length,e=this.text("coverage").replace("{n}",String(t)).replace("{total}",String(this.boards.length));return o`
      <button class="button button--tonal" type="button" popovertarget=${this.coverageId}>${e}</button>
      <div class="menu ranking-team-analysis__coverage" id=${this.coverageId} popover="auto" role="region" aria-label=${e}>
        <ul class="stack">
          ${this.boards.map(s=>o`<li class="row row--between">
            <span lang=${this.song(s.challengeId).titleLanguage}>${this.song(s.challengeId).title}</span>
            <span class="md-label-medium">${this.text(s.status)}</span>
          </li>`)}
        </ul>
      </div>`}field(t,e,s,a,i){return o`<md-outlined-text-field id=${`${this.coverageId}-${t}`} name=${t} inputmode="numeric"
      type="number" min=${String(a)} max=${String(i)} step="1" label=${e} title=${e} ?error=${this.invalidFields.has(t)}
      .value=${T(s)} @input=${r=>this.edit(t,r.currentTarget.value)}></md-outlined-text-field>`}renderControls(){const t=[...new Set([0,...(this.data?.runtimeRules?.tables.vipRankBonuses.rows??[]).filter(e=>e.vipBonusType===7).map(e=>Number(e.value))])].sort((e,s)=>e-s);return o`<form class="surface stack ranking-team-analysis__filter" novalidate @submit=${this.applyRange}>
      <h3 class="detail-section-title">${this.text("expectedGrowth")}</h3>
      <md-outlined-select label=${this.text("vipBonus")} .value=${this.draftVip}
        @change=${e=>this.edit("vip",e.currentTarget.value)}>
        <md-select-option value="" ?selected=${this.draftVip===""}><div slot="headline">${this.text("allBonuses")}</div></md-select-option>
        ${t.map(e=>o`<md-select-option value=${String(e)} ?selected=${this.draftVip===String(e)}>
          <div slot="headline">${this.percent.format(e/1e4)}</div></md-select-option>`)}
      </md-outlined-select>
      <div class="ranking-team-analysis__fields">
        ${this.field("defaultCharacter",this.text("characterLevel"),this.defaultCharacter,10,1e3)}
        ${this.field("defaultInstrument",this.text("instrumentTotal"),this.defaultInstrument,40,1e3)}
      </div>
      <div class="ranking-team-analysis__related stack">
        ${this.related.map(e=>o`<section class="stack">
          <h4 class="detail-section-title">${this.band(e.band)}</h4>
          ${this.field(`instrument-${e.band}`,this.text("instrumentTotal"),this.instrumentLevels.get(e.band)??this.defaultInstrument,40,1e3)}
          <div class="ranking-team-analysis__fields">
            ${e.characters.map(s=>this.field(`character-${s}`,this.character(s).name,this.characterLevels.get(s)??this.defaultCharacter,10,1e3))}
          </div>
        </section>`)}
      </div>
      ${A({id:`${this.coverageId}-range`,label:this.text("searchRange"),expanded:this.rangeExpanded,onExpandedChange:e=>{this.rangeExpanded=e,this.requestUpdate()},content:o`<div class="stack">
          <div class="ranking-team-analysis__fields">
            ${this.field("characterRadius",this.text("characterRadius"),this.characterRadius,0,50)}
            ${this.field("instrumentRadius",this.text("instrumentRadius"),this.instrumentRadius,0,1e3)}
          </div>
          <label class="row row--between">
            <span>${this.text("allowGrowth")}</span>
            <md-switch aria-label=${this.text("allowGrowth")} .selected=${this.allowGrowth}
              @change=${e=>this.edit("allowGrowth",String(e.currentTarget.selected))}></md-switch>
          </label>
          <span class="md-label-large">${this.text("rankSum")}</span>
          <div class="ranking-team-analysis__fields">
            ${this.field("min",this.text("rankMin"),this.draftMin,0,y)}
            ${this.field("max",this.text("rankMax"),this.draftMax,0,y)}
          </div>
        </div>`})}
      <div class="ranking-team-analysis__validation" role="status">
        ${this.rangeError?o`<span>${this.text("rangeInvalid")}</span>
          ${[...this.invalidFields].map(e=>o`<a href=${`#${this.coverageId}-${e}`} @click=${s=>{s.preventDefault();const a=this.querySelector(`#${this.coverageId}-${e}`);(e==="min"||e==="max"||e.endsWith("Radius"))&&(this.rangeExpanded=!0),this.requestUpdate(),this.updateComplete.then(()=>a?.focus())}}>${e.startsWith("character-")?this.character(Number(e.slice(10))).name:e.startsWith("instrument-")?this.band(Number(e.slice(11))):this.text({min:"rankMin",max:"rankMax",defaultCharacter:"characterLevel",defaultInstrument:"instrumentTotal"}[e]??e)}</a>`)}
        `:h}
      </div>
      <button class="button button--full" type="submit" ?disabled=${!this.ready}>${this.text("search")}</button>
      <button class="button button--text" type="button" @click=${this.clearRange}>${this.text("resetGrowth")}</button>
    </form>`}failure(t){return o`<div class="row row--between ranking-team-analysis__failure">
      <p class="md-body-medium" role="status">${this.text(t)}</p>
      <button class="button button--tonal" type="button" @click=${this.retry}>${this.text("refresh")}</button></div>`}groups(t){const e=t.instruments.map(a=>({band:a.id,characters:[]})),s=[];for(const a of t.characters)(e.find(i=>i.band===this.character(a.id).band)?.characters??s).push(a.id);return s.length?[...e,{characters:s}]:e}cells(t,e,s){return t.map(a=>o`
      ${a.band===void 0?h:o`<td class="is-numeric ranking-team-analysis__instrument ranking-team-analysis__start">${e(a.band)}</td>`}
      ${a.characters.map((i,r)=>o`<td class=${`is-numeric ranking-team-analysis__level${a.band===void 0&&r===0?" ranking-team-analysis__start":""}`}>${s(i)}</td>`)}`)}toggle(t){const e=new Set(this.expanded);e.delete(t)||e.add(t),this.expanded=e}renderPlan(t,e,s,a){const i=new Map(t.characters.map((d,m)=>[d.id,{entry:d,position:m}])),r=new Map(t.instruments.map((d,m)=>[d.id,{entry:d,position:m}])),l=t.id,c=this.expanded.has(l),u=this.text("plan").replace("{n}",(e+1).toLocaleString(this.locale)),p=`ranking-team-analysis-plan-${encodeURIComponent(l)}`;return o`<tbody class="ranking-team-analysis__plan">
      <tr>
        <th scope="row" class="is-sticky ranking-team-analysis__key">
          <button class="button button--text ranking-team-analysis__toggle" type="button" aria-label=${u}
            title=${this.text("equivalents").replace("{n}",t.equivalents.length.toLocaleString(this.locale))}
            aria-expanded=${String(c)} aria-controls=${p} @click=${()=>this.toggle(l)}>
            <span>${(e+1).toLocaleString(this.locale)}</span>
            ${a?o`<span class="md-label-small">${this.text("provisional")}</span>`:h}
            ${t.equivalents.length>1?o`<span class="md-label-small">${this.text("equivalentCount").replace("{n}",t.equivalents.length.toLocaleString(this.locale))}</span>`:h}${k("expand_more")}</button></th>
        <td class="is-numeric ranking-team-analysis__minor">${this.percent.format(t.vipBonus/1e4)}</td>
        ${this.cells(s,d=>{const m=r.get(d)?.entry;return m?this.span(m.minTotal,m.total):h},d=>{const m=i.get(d)?.entry;return m?this.span(m.minLevel,m.level):h})}
        <td class="is-numeric ranking-team-analysis__minor">${this.span(t.totalRank.min,t.totalRank.max)}</td>
      </tr>
      <tr class="ranking-team-analysis__detail" id=${p} ?hidden=${!c}>
        <th scope="row" class="is-sticky ranking-team-analysis__key">${this.text("taskCap")}</th>
        <td></td>
        ${this.cells(s,()=>h,d=>i.get(d)?.entry.cap??h)}
        <td></td>
      </tr>
      ${t.equivalents.map((d,m)=>o`
        ${t.equivalents.length>1?this.renderEquivalent(d,m,s,c):h}
        ${c?d.witnesses.map(n=>{const{title:f,titleLanguage:b,jacket:R}=this.song(n.challengeId);return o`<tr class="ranking-team-analysis__detail" ?hidden=${!c}>
            <th scope="row" class="is-sticky ranking-team-analysis__key" title=${f} lang=${b}>
              ${R?o`<img class="ranking-team-analysis__jacket" width="32" height="32" src=${R} alt=${f} loading="lazy" decoding="async" />`:o`<span class="truncate">${f}</span>`}</th>
            <td></td>
            ${this.cells(s,x=>{const $=r.get(x);return $?n.instruments[$.position]:h},x=>{const $=i.get(x);return $?n.levels[$.position]:h})}
            <td class="is-numeric">
              ${this.span(n.totalRank.min,n.totalRank.max)}
              <span class="ranking-team-analysis__outside">${this.text("outsideRank").replace("{range}",this.span(n.outsideRank.min,n.outsideRank.max))}</span>
            </td>
          </tr>`}):h}`)}
    </tbody>`}renderEquivalent(t,e,s,a){const i=new Map(t.characters.map(l=>[l.id,l])),r=new Map(t.instruments.map(l=>[l.id,l]));return o`<tr class="ranking-team-analysis__detail" ?hidden=${!a}>
      <th scope="row" class="is-sticky ranking-team-analysis__key">${this.text("combination").replace("{n}",(e+1).toLocaleString(this.locale))}</th>
      <td></td>
      ${this.cells(s,l=>{const c=r.get(l);return c?this.span(c.minTotal,c.total):h},l=>{const c=i.get(l);return c?this.span(c.minLevel,c.level):h})}
      <td class="is-numeric">${this.span(t.totalRank.min,t.totalRank.max)}</td>
    </tr>`}renderResult(){const t=this.result;if(!t)return h;if(t.complete&&t.status!=="ready")return t.status==="noMatch"||t.status==="conflictingRecords"?o`<p class="md-body-medium" role="status">${this.text(t.status)}</p>`:this.failure(t.status);const e=t.rows;if(!e.length)return I(this.text("loading"));const s=this.groups(e[0]);return o`
      <div class="row row--between ranking-team-analysis__toolbar">
        <span class="chip chip--static chip--tonal"><span class="chip__label">${this.text("found").replace("{n}",t.certified.toLocaleString(this.locale))}</span></span>
        <span class="md-label-medium truncate">${this.text(e[0].matchedTotal?e[0].matchedChallenges.length?"matchedWithTotal":"matchedTotal":"matched").replace("{n}",e[0].matchedChallenges.length.toLocaleString(this.locale))}</span>
        <span class="md-label-large ranking-team-analysis__status truncate" role="status">${this.text(t.complete?"complete":t.awaitingPage?"pageReady":"searching")}</span>
      </div>
      <div class="table-scroll ranking-team-analysis__scroll">
        <table class="data-table data-table--numeric ranking-team-analysis__table">
          <thead>
            <tr>
              <th scope="col" rowspan="2" class="is-sticky ranking-team-analysis__key">#</th>
              <th scope="col" rowspan="2" class="is-numeric">${this.text("vipBonus")}</th>
              ${s.map(a=>o`<th scope="colgroup" class="ranking-team-analysis__band ranking-team-analysis__start"
                colspan=${a.characters.length+(a.band===void 0?0:1)}>
                <span class="truncate">${a.band===void 0?"":this.band(a.band)}</span></th>`)}
              <th scope="col" rowspan="2" class="is-numeric">${this.text("rankSum")}</th>
            </tr>
            <tr>
              ${s.map(a=>o`
                ${a.band===void 0?h:o`<th scope="col" class="ranking-team-analysis__instrument ranking-team-analysis__start"
                  title=${this.text("instrumentTotal")}>${this.text("instrument")}</th>`}
                ${a.characters.map((i,r)=>{const{name:l,face:c}=this.character(i);return o`<th scope="col" aria-label=${l} title=${l} class=${`ranking-team-analysis__member${a.band===void 0&&r===0?" ranking-team-analysis__start":""}`}>
                    <img width="32" height="32" src=${c} alt="" loading="lazy" decoding="async" />
                    <span title=${l}>${l}</span></th>`})}`)}
            </tr>
          </thead>
          ${N(e,a=>a.id,(a,i)=>{const r=t.page*t.pageSize+i;return this.renderPlan(a,r,s,r>=t.certified)})}
        </table>
      </div>`}render(){return this.options?o`
      <dialog class="dialog ranking-team-analysis" ${j(this.close)} aria-label=${this.text("title")}>
        <div class="dialog__surface">
          <header class="dialog__header"><h2 class="row row--between"><span class="truncate" title=${this.options.row.name}>${this.options.row.name}</span>
            <span class="md-label-large ranking-team-analysis__kind">${this.text("title")}</span></h2></header>
          <div class="dialog__body ranking-team-analysis__workspace">
            ${this.renderControls()}
            <div class="ranking-team-analysis__output stack">
              <div class="row ranking-team-analysis__controls">${this.renderCoverage()}</div>
              <div class="ranking-team-analysis__result" aria-busy=${this.paging?"true":"false"}>
                ${this.error?this.failure(this.error):this.ready?this.busy?I(this.text("loading")):this.result?this.renderResult():o`<span class="md-label-large ranking-team-analysis__status">${this.text("waiting")}</span>`:I(this.text("reading"))}
              </div>
            </div>
          </div>
          <footer class="dialog__actions">
            ${this.result?.rows.length?o`
              <button class="button button--text button--icon" type="button" aria-label=${this.text("previousPage")}
                ?disabled=${this.paging||this.result.page===0} @click=${()=>void this.page(this.result.page-1)}>${k("chevron_left")}</button>
              <span class="md-label-large">${this.text("page").replace("{n}",(this.result.page+1).toLocaleString(this.locale))}</span>
              <button class="button button--text button--icon" type="button" aria-label=${this.text("nextPage")}
                ?disabled=${this.paging||!this.result.hasMore} @click=${()=>void this.page(this.result.page+1)}>${k("chevron_right")}</button>`:h}
            <span class="row__spacer"></span>
            <button class="button button--text" type="button" @click=${this.close}>
            ${C(this.locale,"common.actions.close","Close")}</button></footer>
        </div>
      </dialog>`:h}}customElements.get("event-team-analysis")||customElements.define("event-team-analysis",O);function Pt(g){const t=document.createElement("event-team-analysis");return document.body.append(t),t.setup(g),()=>t.remove()}export{Pt as showEventTeamAnalysis};
