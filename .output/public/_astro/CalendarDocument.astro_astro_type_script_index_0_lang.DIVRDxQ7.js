import{i as I}from"./lit-element.Bc_VOJIm.js";import{b as l,A as p}from"./lit-html.DhDqt3I2.js";import"./list-item.Dd-1TF2d.js";import{g as B,c as A}from"./client.BYho01b_.js";import{r as E}from"./page-data.CoUysx63.js";import{a as M}from"./content-release.T5Qse4HZ.js";import{q as z}from"./resource-route.BR5kLHYo.js";import{h as v,f as U,k as W}from"./catalog.CfAhzaok.js";import{a as q,d as j,b as V,e as H}from"./app-bar.CQ9Fi2qQ.js";import{n as Y}from"./document-url.BFFpyWb5.js";import{i as $}from"./icon.BSt8MVsq.js";import{i as b,s as G}from"./controls.BCr1YKFS.js";import{f as Z}from"./facet.DHanKGGX.js";import{P as J}from"./pane.sVrWZuBp.js";import{a as R,l as K}from"./state.Ck623oKm.js";import{a as w,b as S,c as x}from"./arena-rule.BaC6mEXo.js";import"./delegate.qnlMPWy4.js";import"./query-assigned-elements.N5HHHkzR.js";import"./animation.BI-yjTPx.js";import"./list-controller.DhsW2nnj.js";import"./md-focus-ring.BFbx9fcs.js";import"./item.aw-mMCVK.js";import"./ripple.DU62FgSE.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./content-policy-browser.sJlSzFcH.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./request-scope.N4apwAcW.js";import"./release-server.j-atVW2C.js";import"./document-address.dywC0kBs.js";/* empty css                        *//* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./hydrate-workspace.CqzYTlrg.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./facet-order.wTm3gWmx.js";import"./checkbox.zvQH7SV2.js";import"./form-label-activation.C-ZPsH8j.js";import"./redispatch-event.Dod3cBoe.js";import"./validator.Cz1PymV-.js";import"./checkbox-validator.BT-H8ZRB.js";import"./overlay.CAlyPMjs.js";import"./loading-progress.C8Gf5z9T.js";import"./preload-helper.BlTxHScW.js";import"./linear-progress.Du-QQIqh.js";import"./progress.BYlJSdrk.js";import"./gekisou.DviiKDhl.js";/* empty css                        */const f=["our-notes:character","our-notes:cast","garupa:character","garupa:cast","event","gacha","login","pass","game-live","arena","external-live"],P=864e5,L=new Map;function m(c){const e=/^(\d{4})-(\d{2})-(\d{2})$/u.exec(c);if(!e)return;const[t,a,i]=e.slice(1).map(Number);if(t<1e3||t>9999||a<1||a>12||i<1||i>31)return;const r=new Date(Date.UTC(t,a-1,i));return r.getUTCFullYear()===t&&r.getUTCMonth()===a-1&&r.getUTCDate()===i?{year:t,month:a,day:i}:void 0}function C(c,e,t){const a=`${c}-${String(e).padStart(2,"0")}-${String(t).padStart(2,"0")}`;if(!m(a))throw new RangeError("Invalid calendar date");return a}function D(c,e){let t=L.get(e);t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}),L.set(e,t));const a=Object.fromEntries(t.formatToParts(c).map(i=>[i.type,i.value]));return C(Number(a.year),Number(a.month),Number(a.day))}function g(c){const e=m(c);if(!e)throw new RangeError("Invalid calendar date");return Date.UTC(e.year,e.month-1,e.day,12)}function y(c,e){const t=new Date(g(c)+e*P);return C(t.getUTCFullYear(),t.getUTCMonth()+1,t.getUTCDate())}function _(c,e){const t=m(c),a=new Date(Date.UTC(t.year,t.month-1+e,1)),i=new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth()+1,0)).getUTCDate();return C(a.getUTCFullYear(),a.getUTCMonth()+1,Math.min(t.day,i))}function Q(c,e=0){const t=m(c),a=C(t.year,t.month,1),i=(new Date(g(a)).getUTCDay()-e+7)%7,r=y(a,-i),s=_(a,1),d=Math.ceil((g(s)-g(r))/P/7);return Array.from({length:d*7},(n,o)=>y(r,o))}function F(c){const e=new Intl.Locale(c);return(e.getWeekInfo?.().firstDay??e.weekInfo?.firstDay??7)%7}function X(c,e,t,a){const i=m(e),r=m(t),s=[];for(const n of c.birthdays)for(let o=i.year;o<=r.year;o++){const h=`${o}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`;!m(h)||h<e||h>t||s.push({id:`${n.id}@${o}`,kind:n.kind,title:n.name,start:h,end:h,href:n.href,image:n.image,game:n.game,voices:n.voices,facets:(n.games??[n.game]).map(u=>`${u}:${n.kind}`)})}for(const n of c.activities){const o=n.allDay!==!0&&Number.isFinite(n.startAtMs)&&Number(n.startAtMs)>0;if(!o&&(!n.date||!m(n.date)))continue;const h=o?D(n.startAtMs,a):n.date,u=o&&Number.isFinite(n.endAtMs)&&n.endAtMs>n.startAtMs?D(n.endAtMs-(n.endExclusive===!1?0:1),a):o?h:n.endDate&&m(n.endDate)?n.endExclusive?y(n.endDate,-1):n.endDate:h;u<h||u<e||h>t||s.push({...n,start:h,end:u,facets:n.facets??[n.kind==="live"?"external-live":n.kind]})}const d=n=>n==="character"?0:n==="cast"?1:2;return s.sort((n,o)=>n.start.localeCompare(o.start)||d(n.kind)-d(o.kind)||o.end.localeCompare(n.end)||n.id.localeCompare(o.id))}function ee(c,e){return c.filter(t=>t.start<=e&&t.end>=e)}function te(c,e){const t=e[0],a=e[6],i=[];return c.filter(r=>r.start<=a&&r.end>=t).map(r=>{const s=r.start<t?t:r.start,d=r.end>a?a:r.end,n=e.indexOf(s),o=e.indexOf(d);let h=i.findIndex(u=>u<n);return h<0&&(h=i.length),i[h]=o,{item:r,column:n,span:o-n+1,lane:h,before:r.start<t,after:r.end>a}})}const ae={character:"catalog.fields.character",close:"common.actions.close",empty:"common.states.empty",filter:"common.actions.filter",gacha:"navigation.gacha",live:"catalog.songs.fields.live",next:"common.actions.next",previous:"common.actions.previous",reset:"common.actions.reset",source:"common.fields.source",unavailable:"common.states.unavailable",view:"common.actions.view"},se={title:"Calendar",today:"Today",month:"Month",agenda:"Agenda",previous:"Previous month",next:"Next month",chooseDate:"Choose date",birthdays:"Birthdays",activities:"Game events",lives:"Live events",character:"Character birthday",cast:"Voice actor birthday",event:"Event",gacha:"Gacha",login:"Login bonus",pass:"Pass",live:"Live","game-live":"Game live event",arena:"Arena",starts:"Starts",ends:"Ends",allDay:"All day",empty:"No events",more:"{count} more",view:"View",unavailable:"Some dates are unavailable",source:"Live information",date:"Date",invalidDate:"Invalid date"},ne=c=>c==="character"||c==="cast"?"birthdays":c==="live"?"lives":"activities",ie={"our-notes:character":"ourNotesCharacterBirthday","our-notes:cast":"ourNotesCastBirthday","garupa:character":"garupaCharacterBirthday","garupa:cast":"garupaCastBirthday",event:"event",gacha:"gacha",login:"login",pass:"pass","game-live":"game-live",arena:"arena","external-live":"externalLive"};let re=0;const N=3,O=["event","birthday"],k=c=>c==="character"||c==="cast"?"birthday":c==="live"||c==="game-live"?"live":c==="gacha"?"gacha":c==="event"?"event":"other";class le extends I{static properties={locale:{},data:{attribute:!1},selected:{state:!0},view:{state:!0},categories:{state:!0},filtersOpen:{state:!0},today:{state:!0},labels:{attribute:!1}};paneFocus=new J;zone="UTC";owner=`calendar-${++re}`;clock;localeReady=()=>{this.locale=B()?.committed||this.locale,this.labels={}};constructor(){super(),this.locale="en",this.zone=Intl.DateTimeFormat().resolvedOptions().timeZone,this.today=D(Date.now(),this.zone),this.selected=this.today,this.view="month",this.categories=new Set(f),this.filtersOpen=!1,this.labels={}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback();const e=E(this);this.data??=e?.calendar,this.labels=e?.labels||{},this.hasAttribute("data-prerendered")&&(this.replaceChildren(),this.removeAttribute("data-prerendered"));const t=Y().searchParams,a=t.get("kinds")?.split(",").filter(s=>f.includes(s));a?.length&&(this.categories=new Set(a));const i=t.get("date")||"";m(i)&&(this.selected=i);const r=t.get("view");this.view=r==="agenda"?"agenda":"month",window.addEventListener("haneoka:locale-ready",this.localeReady),this.clock=window.setInterval(()=>{this.today=D(Date.now(),this.zone)},6e4)}disconnectedCallback(){clearInterval(this.clock),window.removeEventListener("haneoka:locale-ready",this.localeReady),this.paneFocus.detach(),q(this.owner),j(this.owner),super.disconnectedCallback()}updated(e){V(this.owner,l`${b({label:this.t("previous"),icon:"chevron_left",onClick:()=>this.select(_(this.selected,-1))})}
      ${b({label:this.t("next"),icon:"chevron_right",onClick:()=>this.select(_(this.selected,1))})}
      <button type="button" class="button button--text" @click=${()=>this.select(this.today)}>${this.t("today")}</button>
      ${b({label:this.t("filter"),icon:"filter_alt",toggle:!0,pressed:this.filtersOpen,badge:this.availableFacets.filter(t=>!this.categories.has(t)).length,className:"browse__filter-toggle",onClick:()=>{this.filtersOpen=!this.filtersOpen}})}
      ${G({label:this.t("view"),appBarSwitch:"view",value:this.view,iconOnly:!0,options:[{value:"month",label:this.t("month"),icon:"event"},{value:"agenda",label:this.t("agenda"),icon:"view_list"}],onSelect:t=>{this.view=t,this.sync()}})}`),H(this.owner,l`<span class="calendar-month-name" aria-live="polite">${this.monthName}</span>`),this.paneFocus.sync(this.filtersOpen?this.querySelector(".browse__filters.is-open"):null,()=>{this.filtersOpen=!1})}t(e){return this.labels[e]||(["filter","close","reset"].includes(e)?A(this.locale,ae[e]??e,e==="filter"?"Filter":e==="close"?"Close":"Reset"):A(this.locale,`tools.calendar.${e}`,se[e]||e))}itemTitle(e){return v(e.title,this.locale)}dateLabel(e,t=!1){return U(this.locale,g(e),{timeZone:"UTC",weekday:t})}select(e,t=!1){this.selected=e,this.sync(),t&&this.updateComplete.then(()=>this.querySelector(`button[data-calendar-date="${e}"]`)?.focus())}sync(){const e=new URL(location.href);e.searchParams.set("date",this.selected),e.searchParams.set("view",this.view),history.replaceState(history.state,"",e)}get days(){return Q(this.selected,F(this.locale))}get items(){const e=this.days;return this.data?X(this.data,e[0],e.at(-1),this.zone).filter(t=>(t.facets??[]).some(a=>this.categories.has(a))&&this.occurrenceVisible(t)):[]}occurrenceVisible(e){const t={character:"characters",cast:"",event:"events",gacha:"gacha",login:"login-campaigns",pass:"passes",live:"real-lives","game-live":"real-lives",arena:"arena"}[e.kind];if(!t)return!0;const a=e.href?z(new URL(e.href,"https://calendar.invalid").pathname):void 0,i=e.kind==="character"||e.sourceUrl?0:e.gameWindow?.startAtMs??e.startAtMs;return M(t,{startAt:i},a?.id??e.id)}get availableFacets(){if(!this.data)return[...f];const e=new Set;for(const t of this.data.birthdays)for(const a of t.games??[t.game])e.add(`${a}:${t.kind}`);for(const t of this.data.activities)for(const a of t.facets??[t.kind==="live"?"external-live":t.kind])e.add(a);return f.filter(t=>e.has(t))}filterPanel(){const e=(t,a)=>Z(a,this.locale,t.filter(i=>this.availableFacets.includes(i)).map(i=>({value:i,label:this.t(ie[i])})),[...this.categories].filter(i=>t.includes(i)&&this.availableFacets.includes(i)),i=>{const r=new Set(this.categories);r.has(i)?r.delete(i):r.add(i),this.categories=r});return l`<aside class=${`browse__filters sheet sheet--side ${this.filtersOpen?"is-open":""}`} role="dialog" aria-modal="true" aria-label=${this.t("filter")} ?inert=${!this.filtersOpen} tabindex="-1">
      <header class="sheet__header"><span class="detail-section-title__icon">${$("filter_alt",20)}</span><span class="sheet__title"><strong>${this.t("filter")}</strong></span>
        <span class="sheet__actions"><button class="button button--text" type="button" @click=${()=>{this.categories=new Set(f)}}>${this.t("reset")}</button>
          ${b({label:this.t("close"),icon:"close",className:"browse__filters-close",onClick:()=>{this.filtersOpen=!1}})}</span></header>
      <div class="browse__filters-body">
        ${e(f.filter(t=>t.includes(":")),this.t("birthdays"))}
        ${e(f.filter(t=>!t.includes(":")),this.t("activities"))}
      </div></aside>
      ${this.filtersOpen?l`<button type="button" class="scrim sheet-scrim" aria-label=${this.t("close")} @click=${()=>{this.filtersOpen=!1}}></button>`:p}`}key(e,t){const a={ArrowLeft:-1,ArrowRight:1,ArrowUp:-7,ArrowDown:7};if(e.key in a)e.preventDefault(),this.select(y(t,a[e.key]),!0);else if(e.key==="Home"||e.key==="End"){e.preventDefault();const i=(new Date(g(t)).getUTCDay()-F(this.locale)+7)%7;this.select(y(t,e.key==="Home"?-i:6-i),!0)}else(e.key==="PageUp"||e.key==="PageDown")&&(e.preventDefault(),this.select(_(t,e.key==="PageUp"?-1:1),!0))}timedRange(e,t){const a={time:!0,timeZone:this.zone};return t?W(this.locale,e,t,a):U(this.locale,e,a)}gameRange(e){const t=e.gameWindow;return t?.startAtMs?this.timedRange(t.startAtMs,t.endAtMs):this.t("allDay")}range(e){return e.kind==="character"||e.kind==="cast"?this.t("allDay"):e.allDay||!e.startAtMs?e.kind==="live"?`${this.dateLabel(e.start)}${e.end!==e.start?` – ${this.dateLabel(e.end)}`:""} / ${this.t("allDay")}`:this.t("allDay"):this.timedRange(e.startAtMs,e.endAtMs)}entries(e){return e.length?l`<md-list class="calendar-list">
      ${e.map((t,a)=>{const i=this.itemTitle(t),r=t.kind==="cast"&&t.voices?.length===1?t.voices[0].href:void 0,s=t.kind==="cast"?r:t.href,d=r?`${i.text} / ${this.t("voiceRoles").replace("{roles}",v(t.voices[0].name,this.locale).text)}${r.startsWith("https://bestdori.com/")?" / Bestdori":""}`:void 0;return l`
          ${a?l`<md-divider></md-divider>`:p}
          <md-list-item type=${t.kind!=="cast"&&t.href?"link":"text"} href=${t.kind!=="cast"?t.href||p:p}>
            <span slot="start" class=${`calendar-avatar calendar-avatar--${ne(t.kind)}`}>
              ${t.image?l`<img src=${t.image} alt="" width="56" height="56" loading="lazy" decoding="async"
                @error=${n=>{n.target.hidden=!0}} />`:p}
              ${$(t.kind==="character"||t.kind==="cast"?"cake":t.kind==="live"?"festival":"event",24)}
            </span>
            <span slot="headline" lang=${i.lang}>${r?l`<a href=${r} aria-label=${d}>${i.text}</a>`:i.text}</span>
            <span slot="supporting-text" class="calendar-list-supporting">
              <span>${this.t(t.kind)}</span>
              ${t.kind==="cast"&&t.voices?.length?l`<span class="calendar-voice-roles">${this.t("voiceRoles").split("{roles}")[0]}${new Intl.ListFormat(this.locale,{style:"short",type:"conjunction"}).formatToParts(t.voices.map(n=>v(n.name,this.locale).text)).map(n=>{const o=t.voices.findIndex(u=>v(u.name,this.locale).text===n.value),h=t.voices[o];return n.type==="element"&&h?.href?l`<a href=${h.href}>${n.value}</a>`:n.value})}</span>`:p}
              <time>${this.range(t)}</time>
              ${t.venue?l`<span>${t.venue}</span>`:p}
            </span>
            ${s?l`<span slot="end">${$("chevron_right",24)}</span>`:p}
          </md-list-item>
          ${t.gameWindow?l`<a class="calendar-source-link" href=${t.gameWindow.href}>${this.t("game-live")} / ${this.gameRange(t)}${$("chevron_right",16)}</a>`:p}
          ${t.sourceUrl&&t.sourceUrl!==t.href?l`<a class="calendar-source-link" href=${t.sourceUrl} rel="noopener noreferrer">${this.t("source")}${$("open_in_new",16)}</a>`:p}
        `})}
    </md-list>`:R({title:this.t("empty"),icon:"event"})}get monthName(){return new Intl.DateTimeFormat(this.locale,{month:"long",year:"numeric",timeZone:"UTC"}).format(g(this.selected))}get arenaShown(){return!!this.data?.arena&&this.categories.has("arena")&&M("arena",this.data?.arena)}get arenaContext(){const e=this.data?.arena;return e?{locale:this.locale,server:this.data.server,catalog:{identity:{releaseId:e.releaseId},images:{missions:e.missions}},marks:e.marks}:null}arenaRules(e){return this.arenaShown?this.data.arena.days[e]??[]:[]}dayArena(e){const t=this.arenaRules(e),a=this.arenaContext;if(!t.length||!a)return p;const i=this.data.arena.leagues;return l`
      <span class="calendar-day__arena" aria-hidden="true">
        ${t.map((r,s)=>r?l`
                <span class="calendar-day__league">
                  <img src=${i[s].image} alt="" width="16" height="16" loading="lazy" />
                  ${w(a,r.missions[0],16)}
                  ${S(a,r.musicType,16)}
                </span>
              `:l`<span class="calendar-day__league"></span>`)}
      </span>
      <span class="calendar-day__dots" aria-hidden="true">
        ${t.map(r=>l`<i data-mission=${r?.missions[0]??0}></i>`)}
      </span>
    `}arenaDescription(e){const t=this.data?.arena?.leagues??[];return this.arenaRules(e).flatMap((a,i)=>a?[`${this.leagueName(t[i])} ${x(this.locale,a.missions[0])}`]:[]).join(", ")}leagueName(e){return v(e.name,this.locale).text}week(e,t){const a=this.selected.slice(0,7),i=te(t.filter(s=>s.kind==="event"||s.kind==="character"||s.kind==="cast").sort((s,d)=>O.indexOf(k(s.kind))-O.indexOf(k(d.kind))),e),r=e.map((s,d)=>i.filter(n=>n.lane>=N&&d>=n.column&&d<n.column+n.span).length);return l`
      <div class="calendar-week" role="row">
        ${e.map((s,d)=>{const n=[this.dateLabel(s,!0),this.arenaDescription(s)].filter(Boolean).join(", ");return l`
            <button
              type="button"
              role="gridcell"
              class="calendar-day"
              style=${`grid-column:${d+1}`}
              data-calendar-date=${s}
              tabindex=${s===this.selected?0:-1}
              aria-label=${n}
              aria-selected=${String(s===this.selected)}
              aria-current=${s===this.today?"date":p}
              ?data-outside=${!s.startsWith(a)}
              @click=${()=>this.select(s)}
              @keydown=${o=>this.key(o,s)}
            >
              <span class="calendar-day__number">${Number(s.slice(-2))}</span>
              ${r[d]?l`<span class="calendar-day__more">+${r[d]}</span>`:p}
            </button>
          `})}
        ${e.map((s,d)=>l`
          <span class="calendar-day__marks" style=${`grid-column:${d+1};grid-row:2`} ?data-outside=${!s.startsWith(a)} aria-hidden="true">
            ${this.dayArena(s)}
          </span>
        `)}
        ${i.filter(s=>s.lane<N).map(s=>{const d=this.itemTitle(s.item);return l`
              <span
                class=${`calendar-bar calendar-bar--${k(s.item.kind)}`}
                style=${`grid-column:${s.column+1} / span ${s.span};grid-row:${s.lane+3}`}
                ?data-before=${s.before}
                ?data-after=${s.after}
                lang=${d.lang}
                title=${d.text}
              >${d.text}</span>
            `})}
      </div>
    `}month(e){const t=this.days,a=Array.from({length:Math.ceil(t.length/7)},(r,s)=>t.slice(s*7,s*7+7)),i=this.selected.slice(0,7);return l`
      <div class="calendar-month surface" role="grid" aria-label=${this.monthName}>
        <div class="calendar-weekdays" role="row">
          ${t.slice(0,7).map(r=>l`
              <span role="columnheader">${new Intl.DateTimeFormat(this.locale,{weekday:"short",timeZone:"UTC"}).format(g(r))}</span>
            `)}
        </div>
        ${a.filter(r=>r.some(s=>s.startsWith(i))).map(r=>this.week(r,e))}
        ${this.arenaShown&&this.data.arena?this.missionLegend():p}
      </div>
    `}missionLegend(){const e=this.arenaContext,t=[...new Set(this.days.flatMap(a=>this.arenaRules(a).flatMap(i=>i?[i.missions[0]]:[])))].sort();return t.length?l`
          <p class="calendar-legend">
            ${t.map(a=>l`<span><i data-mission=${a}></i>${w(e,a,16)}${x(this.locale,a)}</span>`)}
          </p>
        `:p}dayArenaPanel(e){const t=this.arenaRules(e),a=this.arenaContext;if(!t.length||!a)return p;const{leagues:i,href:r}=this.data.arena;return l`
      <section class="calendar-arena">
        <h3 class="detail-section-title">
          <span class="detail-section-title__icon" aria-hidden="true">${$("swords",18)}</span>
          <span class="detail-section-title__label">${this.t("arena")}</span>
        </h3>
        <ul>
          ${t.map((s,d)=>s?l`
                  <li>
                    <a href=${r}>
                      <img src=${i[d].image} alt="" width="28" height="28" loading="lazy" />
                      <span>${this.leagueName(i[d])}</span>
                      ${S(a,s.musicType,20)}
                      ${w(a,s.missions[0],20)}
                      <small>${x(this.locale,s.missions[0])}</small>
                    </a>
                  </li>
                `:p)}
        </ul>
      </section>
    `}dayPanel(e){return l`
      <aside class="calendar-detail surface" aria-live="polite">
        <header>
          <h2>${this.dateLabel(this.selected,!0)}</h2>
          <small>${this.zone}</small>
        </header>
        ${this.dayArenaPanel(this.selected)}
        ${this.entries(ee(e,this.selected).filter(t=>t.kind!=="arena"))}
      </aside>
    `}agenda(e){const t=this.selected.slice(0,7),a=this.days.filter(s=>s.startsWith(t)),i=this.arenaContext,r=a.flatMap(s=>{const d=e.filter(o=>o.kind!=="arena"&&(o.start===s||o.end===s)),n=this.arenaRules(s);return d.length||s===this.today?[{date:s,changes:d,rules:n}]:[]});return r.length?l`
      <ol class="calendar-agenda">
        ${r.map(({date:s,changes:d,rules:n})=>l`
            <li class="calendar-agenda__day surface" ?data-today=${s===this.today}>
              <button type="button" class="calendar-agenda__date" aria-label=${this.dateLabel(s,!0)} @click=${()=>{this.selected=s,this.view="month",this.sync()}}>
                <small>${new Intl.DateTimeFormat(this.locale,{weekday:"short",timeZone:"UTC"}).format(g(s))}</small>
                <strong>${Number(s.slice(-2))}</strong>
              </button>
              <div>
                ${n.length&&i?l`<span class="calendar-agenda__arena">
                        ${n.map((o,h)=>o?l`<span><img src=${this.data.arena.leagues[h].image} alt="" width="20" height="20" loading="lazy" />${w(i,o.missions[0],18)}</span>`:p)}
                      </span>`:p}
                ${d.map(o=>{const h=this.itemTitle(o),u=o.start===o.end?"":this.t(o.start===s?"starts":"ends"),T=l`<i class=${`calendar-tone calendar-tone--${k(o.kind)}`}></i><span lang=${h.lang}>${h.text}</span><small>${[u,this.t(o.kind)].filter(Boolean).join(" / ")}</small>`;return o.kind!=="cast"&&o.href?l`<a class="calendar-agenda__item" href=${o.href}>${T}</a>`:l`<span class="calendar-agenda__item">${T}</span>`})}
              </div>
            </li>
          `)}
      </ol>
    `:R({title:this.t("empty"),icon:"event"})}render(){const e=this.items;return l`
      <section class="calendar-page">
        <div class="calendar-view" ?inert=${this.filtersOpen}>
          ${this.data?this.view==="month"?l`<div class="calendar-layout">${this.month(e)}${this.dayPanel(e)}</div>`:this.agenda(e):l`<div class="calendar-loading">${K(A(this.locale,"common.states.loading","Loading"))}</div>`}
        </div>
        ${this.filterPanel()}
      </section>
    `}}customElements.get("calendar-page")||customElements.define("calendar-page",le);
