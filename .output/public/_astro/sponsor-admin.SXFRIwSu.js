import{i as T}from"./lit-element.Bc_VOJIm.js";import{A as l,b as n}from"./lit-html.DhDqt3I2.js";import{i as $,c as N}from"./client.BYho01b_.js";import{a as E,J as b,f as U}from"./catalog.CfAhzaok.js";import{c as C,s as L}from"./app-bar.CQ9Fi2qQ.js";import{a as O}from"./collection-view.C0Iap7sK.js";import{s as x}from"./controls.BCr1YKFS.js";import{i as c}from"./icon.BSt8MVsq.js";import{l as I,e as P,a as F}from"./state.Ck623oKm.js";import{m as p}from"./modal.D-GY7Vdy.js";import{s as m}from"./snackbar.D8p2-_Nm.js";import{a as v,S as y,b as g,c as _,d as q,e as R,g as w,h as V,s as S,f as j}from"./sponsor.UvxeR8eq.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./resource-route.BR5kLHYo.js";import"./lazy-images.2hwWuBaG.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./loading-indicator.dXh2gc3V.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";/* empty css                        */import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./loading-progress.C8Gf5z9T.js";import"./preload-helper.BlTxHScW.js";import"./linear-progress.Du-QQIqh.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";/* empty css                         */import"./locales.BBzJ2au5.js";const u="/api/v1/admin/sponsors",z=["name","avatar","message","channel","tier","status","firstAt","lastAt"],k={ja:"日本語",en:"English","zh-TW":"繁體中文","zh-CN":"简体中文",ko:"한국어"},D=h=>typeof h=="number"&&h>0?new Date(h*1e3).toISOString().slice(0,10):"",H=()=>new Date().toISOString().slice(0,10);class J extends T{static properties={locale:{},document:{state:!0},phase:{state:!0},filter:{state:!0},query:{state:!0},draft:{state:!0},tierDraft:{state:!0},removing:{state:!0},busy:{state:!0}};lifetime=new AbortController;generation=0;stopLocale;constructor(){super(),this.locale=$().committed,this.document=null,this.phase="loading",this.filter="all",this.query="",this.draft=null,this.tierDraft=null,this.removing=!1,this.busy=!1}createRenderRoot(){return this}t=t=>N(this.locale,`admin.page.sponsors.${t}`);channelName=t=>this.t(`channels.${t}`);tierName=t=>this.document?.tiers.find(s=>s.id===t)?.labels[this.locale]??t;connectedCallback(){super.connectedCallback(),this.lifetime.signal.aborted&&(this.lifetime=new AbortController);const t=$();this.locale=t.committed,this.stopLocale=t.subscribe(s=>{this.locale=s.locale,this.requestUpdate(),this.syncSearch()}),this.syncSearch(),this.refresh()}disconnectedCallback(){this.lifetime.abort(),this.stopLocale?.(),C("sponsor-admin"),this.document=null,this.draft=null,this.tierDraft=null,super.disconnectedCallback()}syncSearch(){L("sponsor-admin",{value:this.query,label:this.t("search"),onInput:t=>{this.query=t.trim().toLocaleLowerCase()}})}refresh(){this.load()}async request(t,s={},i){const e=new Headers({accept:"application/json"});return s.body&&e.set("content-type","application/json"),i&&e.set("Idempotency-Key",i),E(t,{credentials:"same-origin",cache:"no-store",...s,headers:e,signal:this.lifetime.signal})}denied(t){return t instanceof b&&(t.status===401||t.status===403)?(this.document=null,this.draft=null,this.tierDraft=null,this.dispatchEvent(new CustomEvent("admin-access-denied")),!0):!1}async load(){const t=++this.generation;this.document||(this.phase="loading");try{const{sponsors:s}=await this.request(u);if(t!==this.generation)return;this.document=s,this.phase="ready"}catch(s){if(this.lifetime.signal.aborted||t!==this.generation)return;this.denied(s)||(this.phase=this.document?"ready":"error"),this.document&&m(this.t("loadFailed"),{error:!0})}}async write(t,s,i,e,a){if(this.busy)return!1;this.busy=!0;try{const r=await this.request(t,{method:s,body:JSON.stringify(i)},e);return r.sponsors?this.document=r.sponsors:await this.load(),m(this.t(a)),!0}catch(r){if(this.lifetime.signal.aborted||this.denied(r))return!1;if(r instanceof b&&r.status===409)return await this.load(),m(this.t("conflict"),{error:!0}),!0;const o=r.body;return m(this.t(o?.error?.code==="invalid_sponsor"||o?.error?.code==="invalid_sponsor_tiers"?"invalid":"saveFailed"),{error:!0}),!1}finally{this.busy=!1}}open(t){this.draft={entry:t,fields:t?{}:{channel:"other",firstAt:H(),name:""},hidden:t?.hidden??!1,attempted:!1,key:`sponsor-${crypto.randomUUID()}`}}close=()=>{this.busy||(this.draft=null,this.removing=!1)};sourceText(t){const s=this.draft?.entry?.source;return!s||t==="status"?"":t==="firstAt"||t==="lastAt"?D(s[t]):String(s[t]??"")}value(t){const s=this.draft;if(t in s.fields)return s.fields[t]??this.sourceText(t);const i=s.entry?.overrides[t];return i==null?this.sourceText(t):t==="firstAt"||t==="lastAt"?D(i):String(i)}overridden(t){const s=this.draft;return t in s.fields?s.fields[t]!==null:s.entry?.overrides[t]!==null&&s.entry?.overrides[t]!==void 0}set(t,s){this.draft={...this.draft,fields:{...this.draft.fields,[t]:s},key:`sponsor-${crypto.randomUUID()}`}}amountChoice(){const t=this.draft;return t.amount!==void 0?t.amount:t.entry?.overrides.amount??null}amountValue(){const t=this.amountChoice();return(t===null?this.draft.entry?.source?.amount??null:t||null)??{value:"",currency:""}}setAmount(t){const s=t===null||t===""?t:{...this.amountValue(),...t};this.draft={...this.draft,amount:s,key:`sponsor-${crypto.randomUUID()}`}}amountPayload(t){return t===null||t===""?t:v(t.value,t.currency)??(this.draft.entry?.origin==="source"?"":null)}missing(){const t=this.draft,s=[],i=this.amountValue();return(i.value.trim()||i.currency.trim())&&!v(i.value,i.currency)&&s.push("amount"),this.value("name").trim()||s.push("name"),(!t.entry||t.entry.origin==="manual")&&!this.value("firstAt")&&s.push("firstAt"),[...this.value("name")].length>y&&s.push("name"),g(this.value("avatar").trim())||s.push("avatar"),[...this.value("message")].length>_&&s.push("message"),[...new Set(s)]}async save(t){t.preventDefault();const s=this.draft;if(this.missing().length){this.draft={...s,attempted:!0};return}const i=Object.fromEntries(Object.entries(s.fields).map(([a,r])=>[a,(a==="status"||a==="firstAt"||a==="lastAt")&&r===""?null:r]));s.amount!==void 0&&(i.amount=this.amountPayload(s.amount)),(s.entry?await this.write(`${u}/${s.entry.id}`,"PUT",{expectedVersion:s.entry.version,fields:i,...s.hidden!==s.entry.hidden?{hidden:s.hidden}:{}},s.key,"saved"):await this.write(u,"POST",{fields:i},s.key,"saved"))&&(this.draft=null)}async removeDonor(){const t=this.draft?.entry;if(!t)return;await this.write(`${u}/${t.id}`,"DELETE",{expectedVersion:t.version},this.draft.key,"removed")&&(this.draft=null,this.removing=!1)}restore(t){const s=this.draft?.entry?.source;if(!s||!this.overridden(t))return l;const i=this.t("follow").replace("{channel}",this.channelName(s.channel));return n`<button class="icon-button" type="button" aria-label=${i} title=${i} ?disabled=${this.busy}
      @click=${()=>this.set(t,null)}>${c("undo",20)}</button>`}field(t,s){return n`<div class="admin-sponsor-field">${s}${this.restore(t)}</div>`}textField(t,s={}){const i=this.draft.attempted&&this.missing().includes(t);return this.field(t,n`<md-outlined-text-field
        id=${`admin-sponsor-${t}`}
        label=${this.t(t)}
        type=${s.type??"text"}
        rows=${s.rows??l}
        maxlength=${s.maxlength??l}
        .value=${this.value(t)}
        ?error=${i}
        ?disabled=${this.busy}
        @input=${e=>this.set(t,e.target.value)}
      ></md-outlined-text-field>`)}select(t,s){return this.field(t,n`<md-outlined-select
        id=${`admin-sponsor-${t}`}
        label=${this.t(t)}
        .value=${this.value(t)}
        ?disabled=${this.busy}
        @change=${i=>this.set(t,i.target.value)}
      >
        ${s.map(i=>n`<md-select-option value=${i.value} ?selected=${i.value===this.value(t)}>
          <div slot="headline">${i.label}</div>
        </md-select-option>`)}
      </md-outlined-select>`)}amountField(){const t=this.draft,s=t.attempted&&this.missing().includes("amount"),{value:i,currency:e}=this.amountValue(),a=t.entry?.source,r=a?this.t("follow").replace("{channel}",this.channelName(a.channel)):"",o=d=>d.target.value;return n`<div class="admin-sponsor-field admin-sponsor-amount">
      <md-outlined-text-field id="admin-sponsor-amount" label=${this.t("amount")} inputmode="decimal" .value=${i}
        ?error=${s} ?disabled=${this.busy} @input=${d=>this.setAmount({value:o(d)})}></md-outlined-text-field>
      <md-outlined-text-field id="admin-sponsor-currency" label=${this.t("currency")} maxlength="3" .value=${e}
        ?error=${s} ?disabled=${this.busy}
        @input=${d=>this.setAmount({currency:o(d).toUpperCase()})}></md-outlined-text-field>
      ${i||e?n`<button class="icon-button" type="button" aria-label=${this.t("clearAmount")} title=${this.t("clearAmount")} ?disabled=${this.busy}
            @click=${()=>this.setAmount(t.entry?.origin==="source"?"":null)}>${c("close",20)}</button>`:l}
      ${a&&this.amountChoice()!==null?n`<button class="icon-button" type="button" aria-label=${r} title=${r} ?disabled=${this.busy}
            @click=${()=>this.setAmount(null)}>${c("undo",20)}</button>`:l}
    </div>`}avatarPreview(t,s,i=40){return n`<span class="list-item__avatar admin-sponsor-avatar" style=${`--avatar-size: ${i}px`}>
      ${t&&g(t)?n`<img src=${t} alt="" width=${i} height=${i} decoding="async" referrerpolicy="no-referrer" />`:n`<span aria-hidden="true">${[...s][0]?.toUpperCase()??""}</span>`}
    </span>`}renderEditor(){const t=this.draft;if(!t)return l;const s=t.entry,i=s?.origin==="source",e=t.attempted?this.missing():[],a=this.document?.tiers??[],r=i?this.t("statusSource"):this.t("statusAuto");return n`<dialog class="dialog admin-sponsor-dialog" aria-labelledby="admin-sponsor-title" ${p(this.close)}>
      <header class="dialog__header"><h2 id="admin-sponsor-title">${s?this.t("edit"):this.t("add")}</h2></header>
      <div class="dialog__body">
        <form id="admin-sponsor-form" class="stack" novalidate @submit=${o=>void this.save(o)}>
          <div class="cluster admin-sponsor-identity">
            ${this.avatarPreview(this.value("avatar").trim(),this.value("name"),64)}
            <span class="stack">
              <strong>${this.value("name")||"—"}</strong>
              ${i?n`<span class="chip chip--static">${this.channelName(s.source.channel)}</span>`:l}
            </span>
          </div>
          ${this.textField("name",{maxlength:y})}
          ${this.textField("avatar",{type:"url"})}
          ${this.textField("message",{type:"textarea",rows:3,maxlength:_})}
          ${this.select("channel",q.map(o=>({value:o,label:this.channelName(o)})))}
          ${this.select("tier",a.map(o=>({value:o.id,label:this.tierName(o.id)})))}
          ${this.amountField()}
          ${this.select("status",[{value:"",label:r},{value:"active",label:this.t("current")},{value:"past",label:this.t("past")}])}
          ${this.textField("firstAt",{type:"date"})}
          ${this.textField("lastAt",{type:"date"})}
          <label class="check-row admin-sponsor-shown">
            <md-switch ?selected=${!t.hidden} ?disabled=${this.busy}
              @change=${o=>this.draft={...t,hidden:!o.target.selected}}></md-switch>
            ${this.t("shown")}
          </label>
          <div class="cluster" role="status">${e.length?n`<span>${this.t("checkFields")}</span>${e.map(o=>n`<a href=${`#admin-sponsor-${o}`} @click=${d=>{d.preventDefault(),this.querySelector(`#admin-sponsor-${o}`)?.focus()}}>${this.t(o)}</a>`)}`:l}</div>
        </form>
      </div>
      <footer class="dialog__actions">
        ${s&&!i?n`<button class="button button--text admin-sponsor-remove" type="button" ?disabled=${this.busy} @click=${()=>this.removing=!0}>${this.t("remove")}</button>`:l}
        <button class="button button--text" type="button" ?disabled=${this.busy} @click=${this.close}>${this.t("cancel")}</button>
        <button class="button" type="submit" form="admin-sponsor-form" ?disabled=${this.busy}>${this.t("save")}</button>
      </footer>
    </dialog>
    ${this.removing&&s?n`<dialog class="dialog" aria-labelledby="admin-sponsor-remove-title" ${p(()=>{this.busy||(this.removing=!1)})}>
          <header class="dialog__header"><h2 id="admin-sponsor-remove-title">${this.t("confirmRemove")}</h2></header>
          <div class="dialog__body"><strong>${s.effective.name}</strong></div>
          <footer class="dialog__actions">
            <button class="button button--text" type="button" ?disabled=${this.busy} @click=${()=>this.removing=!1}>${this.t("cancel")}</button>
            <button class="button button--danger" type="button" ?disabled=${this.busy} @click=${()=>void this.removeDonor()}>${this.t("remove")}</button>
          </footer>
        </dialog>`:l}`}openTiers(){this.tierDraft={tiers:(this.document?.tiers??[]).map(t=>({...t,cny:String(t.cny),usd:String(t.usd),existing:!0})),attempted:!1,key:`sponsor-tiers-${crypto.randomUUID()}`}}closeTiers=()=>{this.busy||(this.tierDraft=null)};editTier(t,s){const i=[...this.tierDraft.tiers];i[t]={...i[t],...s},this.tierDraft={...this.tierDraft,tiers:i,key:`sponsor-tiers-${crypto.randomUUID()}`}}moveTier(t,s){const i=[...this.tierDraft.tiers],[e]=i.splice(t,1);i.splice(t+s,0,e),this.tierDraft={...this.tierDraft,tiers:i,key:`sponsor-tiers-${crypto.randomUUID()}`}}tierProblems(){const t=this.tierDraft.tiers,s=[];return t.forEach((i,e)=>{(!R.test(i.id)||t.findIndex(a=>a.id===i.id)!==e)&&s.push(`${e}-id`);for(const a of w)i.labels[a]?.trim()||s.push(`${e}-${a}`);for(const a of["cny","usd"]){const r=Number(i[a]);(i[a].trim()===""||!Number.isFinite(r)||r<0)&&s.push(`${e}-${a}`)}}),s}async saveTiers(t){t.preventDefault();const s=this.tierDraft;if(this.tierProblems().length){this.tierDraft={...s,attempted:!0};return}const i=s.tiers.map(({id:e,labels:a,cny:r,usd:o,card:d})=>({id:e,labels:a,cny:Number(r),usd:Number(o),card:d}));await this.write(`${u}/tiers`,"PUT",{expectedVersion:this.document.tiersVersion,tiers:i},s.key,"saved")&&(this.tierDraft=null)}renderTierEditor(){const t=this.tierDraft;if(!t)return l;const s=t.attempted?this.tierProblems():[],i=(e,a,r,o,d,f={})=>n`<md-outlined-text-field
        id=${`admin-sponsor-tier-${e}-${a}`}
        label=${r}
        type=${f.type??"text"}
        .value=${o}
        ?readonly=${f.readonly}
        ?error=${s.includes(`${e}-${a}`)}
        ?disabled=${this.busy}
        @input=${A=>d(A.target.value)}
      ></md-outlined-text-field>`;return n`<dialog class="dialog admin-sponsor-dialog" aria-labelledby="admin-sponsor-tiers-title" ${p(this.closeTiers)}>
      <header class="dialog__header"><h2 id="admin-sponsor-tiers-title">${this.t("editTiers")}</h2></header>
      <div class="dialog__body">
        <form id="admin-sponsor-tiers-form" class="stack" novalidate @submit=${e=>void this.saveTiers(e)}>
          ${t.tiers.map((e,a)=>n`<section class="surface stack admin-sponsor-tier" aria-label=${e.labels[this.locale]||e.id||this.t("addTier")}>
              <div class="cluster">
                <span class="chip chip--static">${a+1}</span>
                <span class="row__spacer"></span>
                <button class="icon-button" type="button" aria-label=${this.t("moveUp")} title=${this.t("moveUp")} ?disabled=${this.busy||a===0}
                  @click=${()=>this.moveTier(a,-1)}>${c("arrow_upward",20)}</button>
                <button class="icon-button" type="button" aria-label=${this.t("moveDown")} title=${this.t("moveDown")} ?disabled=${this.busy||a===t.tiers.length-1}
                  @click=${()=>this.moveTier(a,1)}>${c("arrow_downward",20)}</button>
                <button class="icon-button" type="button" aria-label=${this.t("removeTier")} title=${this.t("removeTier")} ?disabled=${this.busy||t.tiers.length===1}
                  @click=${()=>{this.tierDraft={...t,tiers:t.tiers.filter((r,o)=>o!==a),key:`sponsor-tiers-${crypto.randomUUID()}`}}}>${c("delete",20)}</button>
              </div>
              ${i(a,"id",this.t("tierId"),e.id,r=>this.editTier(a,{id:r.trim().toLowerCase()}),{readonly:e.existing})}
              <fieldset class="stack admin-sponsor-labels">
                <legend class="detail-section-title">${this.t("label")}</legend>
                ${w.map(r=>i(a,r,k[r],e.labels[r]??"",o=>this.editTier(a,{labels:{...e.labels,[r]:o}})))}
              </fieldset>
              <div class="grid grid--fit admin-sponsor-amounts">
                ${i(a,"cny",this.t("cny"),e.cny,r=>this.editTier(a,{cny:r}),{type:"number"})}
                ${i(a,"usd",this.t("usd"),e.usd,r=>this.editTier(a,{usd:r}),{type:"number"})}
              </div>
              <md-outlined-select label=${this.t("card")} .value=${e.card??""} ?disabled=${this.busy}
                @change=${r=>this.editTier(a,{card:r.target.value||null})}>
                <md-select-option value="" ?selected=${!e.card}><div slot="headline">${this.t("noCard")}</div></md-select-option>
                ${V.map(r=>n`<md-select-option value=${r} ?selected=${e.card===r}>
                  <img slot="start" src=${S(r)} alt="" width="36" height="17" loading="lazy" decoding="async" />
                  <div slot="headline">${r.replace(/^tgwcard_|_small$/gu,"")}</div>
                </md-select-option>`)}
              </md-outlined-select>
            </section>`)}
          <button class="button button--tonal" type="button" ?disabled=${this.busy||t.tiers.length>=20}
            @click=${()=>{this.tierDraft={...t,tiers:[...t.tiers,{id:"",labels:{},cny:"0",usd:"0",card:null,existing:!1}],key:`sponsor-tiers-${crypto.randomUUID()}`}}}>${c("add",20)}${this.t("addTier")}</button>
          <div class="cluster" role="status">${s.length?n`<span>${this.t("checkFields")}</span>${t.tiers.map((e,a)=>{const r=s.filter(o=>o.startsWith(`${a}-`));return r.length?n`<span class="cluster admin-sponsor-problem">
                      <span class="chip chip--static">${a+1}</span>
                      ${r.map(o=>n`<a href=${`#admin-sponsor-tier-${o}`} @click=${d=>{d.preventDefault(),this.querySelector(`#admin-sponsor-tier-${o}`)?.focus()}}>${this.problemLabel(o)}</a>`)}
                    </span>`:l})}`:l}</div>
        </form>
      </div>
      <footer class="dialog__actions">
        <button class="button button--text" type="button" ?disabled=${this.busy} @click=${this.closeTiers}>${this.t("cancel")}</button>
        <button class="button" type="submit" form="admin-sponsor-tiers-form" ?disabled=${this.busy}>${this.t("save")}</button>
      </footer>
    </dialog>`}problemLabel(t){const s=t.slice(t.indexOf("-")+1);return s==="id"?this.t("tierId"):s==="cny"||s==="usd"?this.t(s):k[s]}visible(t){return t.filter(s=>(this.filter==="hidden"?!s.hidden:this.filter!=="all"&&(s.hidden||s.effective.active!==(this.filter==="active")))?!1:!this.query||s.effective.name.toLocaleLowerCase().includes(this.query))}renderList(){if(this.phase==="loading")return I(this.t("loading"));if(this.phase==="error"||!this.document)return P(this.t("loadFailed"),this.t("retry"),()=>this.refresh());const t=this.document,s=this.visible(t.entries),i=e=>t.entries.filter(a=>e==="all"?!0:e==="hidden"?a.hidden:!a.hidden&&a.effective.active===(e==="active")).length;return n`
      <div class="cluster admin-sponsor-toolbar">
        ${x({label:this.t("title"),value:this.filter,onSelect:e=>this.filter=e,options:["all","active","past","hidden"].map(e=>({value:e,label:`${this.t(`filters.${e}`)} ${i(e)}`}))})}
        <span class="row__spacer"></span>
        <span class="admin-sponsor-sync">${t.sourceUpdatedAt?this.t("synced").replace("{date}",U(this.locale,Date.parse(t.sourceUpdatedAt),{time:!0})):this.t("notSynced")}</span>
        <button class="button button--tonal" type="button" ?disabled=${this.busy} @click=${()=>this.open(null)}>${c("person_add",20)}${this.t("add")}</button>
      </div>
      ${s.length?O(s.map(e=>{const a=e.overrides.amount!==null||z.some(r=>e.overrides[r]!==null);return{id:e.id,title:e.effective.name,subtitle:n`<span class="admin-sponsor-meta">
                    <span>${this.channelName(e.effective.channel)}</span>
                    <span>${e.effective.active?this.tierName(e.effective.tier):this.t("past")}</span>
                    ${e.effective.amount?n`<span>${j(this.locale,e.effective.amount)}</span>`:l}
                  </span>${e.effective.message?n`<span class="admin-sponsor-message">${e.effective.message}</span>`:l}`,media:this.avatarPreview(e.effective.avatar??"",e.effective.name),trailing:n`<span class="cluster admin-sponsor-marks">
                  ${e.origin==="manual"?n`<span class="chip chip--static">${this.t("manual")}</span>`:l}
                  ${a?n`<span class="chip chip--static chip--tonal">${this.t("edited")}</span>`:l}
                  ${e.hidden?n`<span class="chip chip--static">${c("visibility_off",18)}${this.t("hidden")}</span>`:l}
                </span>`,onOpen:()=>this.open(e)}})):F({title:this.t("empty"),icon:"favorite"})}
    `}renderTiers(){const t=this.document?.tiers;return t?n`<section class="admin-summary surface stack" aria-labelledby="admin-sponsor-tiers-heading">
      <div class="cluster">
        <h3 id="admin-sponsor-tiers-heading" class="detail-section-title">${this.t("tiers")}</h3>
        <span class="row__spacer"></span>
        <button class="button button--text" type="button" ?disabled=${this.busy} @click=${()=>this.openTiers()}>${c("edit",20)}${this.t("editTiers")}</button>
      </div>
      <ul class="list admin-sponsor-tier-list">
        ${t.map(s=>{const i=[s.cny?`¥${s.cny}`:"",s.usd?`$${s.usd}`:""].filter(Boolean).join(" / ");return n`<li class="list-item">
            <span class="list-item__leading admin-sponsor-card">${s.card?n`<img src=${S(s.card)} alt="" width="48" height="22" loading="lazy" decoding="async" />`:c("favorite",20)}</span>
            <span class="list-item__body">
              <strong class="list-item__headline">${this.tierName(s.id)}</strong>
              <span class="list-item__supporting">${i||this.t("anyAmount")}</span>
            </span>
          </li>`})}
      </ul>
    </section>`:l}render(){return n`
      <section class="admin-ledger admin-sponsors stack" aria-busy=${String(this.phase==="loading"||this.busy)}>
        <h3 class="detail-section-title">${this.t("title")}</h3>
        ${this.renderList()}
      </section>
      ${this.renderTiers()}
      ${this.renderEditor()}
      ${this.renderTierEditor()}
    `}}customElements.define("sponsor-admin",J);export{J as SponsorAdmin};
