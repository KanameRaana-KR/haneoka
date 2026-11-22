import{a as vo,b as Qn,c as yo,d as Zn,e as Oe,f as _e,g as Le,h as Yn,i as Yt,j as wo,k as ko,l as kt,m as gs,n as st,o as tr,p as fs,q as bs,r as vs,s as en,t as tn,u as xo,v as So,w as $o,x as ys,y as ws}from"./chunk-7EBNNNL3.js";import{a as Sn,b as Mi}from"./chunk-52GLZIRV.js";import{$ as mo,A as Xa,B as Gn,C as Vn,D as Qa,E as Qt,F as Za,G as Ya,H as cs,I as eo,J as to,K as Jn,L as Kn,M as Wn,N as ds,O as no,P as ro,Q as so,R as Zt,S as io,T as ao,U as oo,V as lo,W as Se,X as co,Y as uo,Z as us,_ as po,a as qn,aa as ho,b as Aa,ba as go,c as Ma,ca as fo,d as Ba,e as Pa,ea as bo,f as Oa,g as La,h as qa,i as Na,j as Da,k as ss,l as Nn,m as Dn,n as za,o as Fa,p as yt,q as zn,r as jt,s as Ja,t as Wt,u as Xt,v as ls,w as Hn,x as ce,y as Ka,z as Wa}from"./chunk-JP4RTNEZ.js";import{$ as ia,$a as Ca,A as D,Aa as ua,Ab as Xn,Ba as pa,C as mt,D as F,E as qt,F as Cn,G as Te,Ga as Ft,H as ji,Ha as Ut,I as Xi,Ia as ma,J as En,Ja as ha,K as V,Ka as ga,La as Yr,M as Qi,Ma as es,Na as fa,Oa as ba,P as Zi,Q as Kr,Qa as Pe,R as Yi,S as Rn,Ta as va,U as ta,Ua as ya,V as na,Va as wa,W as Dt,Wa as ft,Xa as ka,Y as Tn,Ya as xa,Z as ra,Za as Sa,_ as sa,_a as $a,a as At,aa as An,ab as Ia,b as nt,bb as ts,ca as Mn,cb as Ie,da as aa,db as Ve,e as He,eb as _a,f as Mt,fa as Xr,fb as Pn,g as Bt,ha as Qr,i as Ai,ia as oa,j as Hr,jb as ns,k as Pt,kb as Je,ma as he,mb as Ea,n as G,na as zt,nb as Ra,o as qi,oa as Ge,ob as bt,p as Ni,pa as la,pb as rs,q as Di,qa as ca,qb as On,r as Vr,ra as ie,rb as Ln,s as Jr,sb as Ta,t as zi,tb as vt,u as Fi,ua as da,v as Lt,va as W,wa as Zr,x as O,xa as rt,z as ve,zb as ps}from"./chunk-IPPTZHJ3.js";import{a as $n}from"./chunk-ABE7DZU3.js";import{b as Ui,d as B,e as ht,f as N,g as me,h as xe,j as Wr,k as Nt,l as ea,m as Be,n as gt,o as Bn}from"./chunk-U2BEH5SM.js";import{a as Bi,l as Ot,m as Pi,n as Oi,o as Li,q as Wi}from"./chunk-PDSGC7CT.js";import{a as je,d as p,g as jr,h as k,j as pt,k as te}from"./chunk-M5MXLSCC.js";import{f as wt,g as Ht,h as is,i as Fn,j as Gt,k as Un,l as Vt,m as Ua,n as ja,o as as,p as jn,q as Ha,r as Ga,s as Jt,t as Va,u as Kt,w as os}from"./chunk-LR65LRNF.js";import{a as Gr,c as In,d as _n,e as Hi,f as Gi,o as Vi,p as Ae,q as Me,r as Ji,s as Ki}from"./chunk-KHUU3QJZ.js";import"./chunk-YGDUS3XU.js";import{a as er}from"./chunk-QAFSKORW.js";import{a as P,b as ge,c as ms,d as hs}from"./chunk-LOIKB2BG.js";import{b as xn}from"./chunk-NP5BHW4E.js";import{a as Ri,b as kn}from"./chunk-PNWM6RK4.js";import"./chunk-3IUW3SAC.js";import{a as wi,e as Nr,i as Dr,k as vn,l as zr,m as et,o as ki,p as xi,q as Rt,r as Si,s as yn,t as Tt,u as ke,v as Ce,x as pe,y as le,z as Ue}from"./chunk-Z3V2L3UY.js";import{f as tt}from"./chunk-P7BNVELI.js";import"./chunk-XYDTJM26.js";import{a as wn,c as Ci,d as Ii,g as _i,i as ee,j as Ei}from"./chunk-JDP3ULEX.js";import"./chunk-DKZR44QH.js";import"./chunk-AJELJGJP.js";import{a as $i}from"./chunk-OBBKONHV.js";import{a as Ti,b as Fr,e as Ur}from"./chunk-ELSXYJOP.js";import"./chunk-KOSEFXTV.js";import"./chunk-VC46IEJQ.js";var ks=class extends ca{wrapper;stop;render(){return jr}update({element:e}){return this.wrapper=e,this.stop||this.connect(),jr}disconnected(){this.stop?.(),this.stop=void 0}reconnected(){this.connect()}connect(){queueMicrotask(()=>{let e=this.wrapper;if(!e?.isConnected||!this.isConnected||this.stop)return;let t=e.querySelector(":scope > nav"),r=e.querySelector(".tab-scroll__previous"),s=e.querySelector(".tab-scroll__next"),i=()=>t.querySelector('[aria-selected="true"], [aria-current]:not([aria-current="false"])'),a=()=>{r.setAttribute("aria-disabled",String(t.scrollLeft<=1)),s.setAttribute("aria-disabled",String(t.scrollLeft>=t.scrollWidth-t.clientWidth-1))},o=g=>{if(!g||!e.hasAttribute("data-overflow"))return;let f=t.getBoundingClientRect(),m=g.getBoundingClientRect();m.left<f.left?t.scrollBy({left:m.left-f.left}):m.right>f.right&&t.scrollBy({left:m.right-f.right})},c=()=>{let g=e.clientWidth,f=g>0&&t.scrollWidth>g+1&&/^(auto|scroll)$/u.test(getComputedStyle(t).overflowX);e.toggleAttribute("data-overflow",f),f&&(o(i()),a())},l=new ResizeObserver(c),d=()=>{l.disconnect(),l.observe(e),l.observe(t);for(let g of t.children)l.observe(g)},u=new MutationObserver(g=>{g.some(f=>f.type==="childList"&&f.target===t)&&d(),c()});d(),u.observe(t,{subtree:!0,attributes:!0,attributeFilter:["aria-selected","aria-current"],childList:!0});let h=g=>o(g.target.closest('[role="tab"], .tab'));t.addEventListener("scroll",a,{passive:!0}),t.addEventListener("focusin",h),this.stop=()=>{l.disconnect(),u.disconnect(),t.removeEventListener("scroll",a),t.removeEventListener("focusin",h)}})}},Pc=Ui(ks);function Ss(n,e,t=""){let r=(s,i)=>{let a=s.currentTarget;if(a.getAttribute("aria-disabled")==="true")return;let o=a.parentElement.querySelector(":scope > nav");o.scrollBy({left:i*o.clientWidth*.8,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})};return p`
    <div class=${t?`tab-scroll ${t}`:"tab-scroll"} ${Pc()}>
      ${D({icon:"chevron_left",label:G(n,"common.actions.previous","Previous"),className:"tab-scroll__previous",onClick:s=>r(s,-1)})}
      ${e}
      ${D({icon:"chevron_right",label:G(n,"common.actions.next","Next"),className:"tab-scroll__next",onClick:s=>r(s,1)})}
    </div>
  `}var xs=class extends te{static properties={items:{attribute:!1},value:{},label:{},locale:{},onSelect:{attribute:!1}};constructor(){super(),this.items=[],this.value="",this.label="",this.locale="en",this.onSelect=()=>{}}createRenderRoot(){return this}render(){return Ss(this.locale,p`
      <nav class="tabs tabs--secondary" role="tablist" aria-label=${this.label}
        @keydown=${mt(this.items.map(e=>e.id),this.value,this.onSelect,{preventScroll:!0})}>
        ${this.items.map(e=>p`<button class="tab" type="button" role="tab"
          aria-selected=${String(this.value===e.id)} tabindex=${this.value===e.id?"0":"-1"}
          title=${e.label} @click=${()=>this.onSelect(e.id)}>
          <span class="clamp-1">${e.label}</span><span class="tab__indicator"></span>
        </button>`)}
      </nav>
    `)}};typeof customElements<"u"&&!customElements.get("scrollable-tabs")&&customElements.define("scrollable-tabs",xs);var nr=(n,e)=>`${n==="members"?"m":"s"}.${e}`,$s=n=>n.slice(0,n.lastIndexOf(".")),rr=class{cards=new Map;clock=new Qn;version=0;get size(){return this.cards.size}has(e,t){return this.cards.has(nr(e,t))}ownsKey(e){return this.cards.has($s(e))}value(e){return this.cards.get($s(e))?.[e]?.v}entry(e){return{v:e,t:this.clock.next(),c:"temporary",r:0}}ids(e){let t=e==="members"?"m.":"s.";return[...this.cards.keys()].filter(r=>r.startsWith(t)).map(r=>Number(r.slice(2)))}add(e,t,r){let s=nr(e,t),i={};for(let a of[{key:`${s}.own`,value:!0},...r])i[a.key]=this.entry(a.value);this.cards.set(s,i),this.version++}apply(e){let t=!1;for(let r of e){let s=$s(r.key),i=this.cards.get(s);i&&(r.key===`${s}.own`&&r.value===!1?(this.cards.delete(s),t=!0):(!i[r.key]||!Object.is(i[r.key].v,r.value))&&(i[r.key]=this.entry(r.value),t=!0))}return t&&this.version++,t}remove(e,t){let r=this.cards.delete(nr(e,t));return r&&this.version++,r}clear(){return this.cards.size?(this.cards.clear(),this.version++,!0):!1}changes(e,t){return Object.entries(this.cards.get(nr(e,t))).map(([r,s])=>({key:r,value:s.v}))}merge(e){if(!this.cards.size)return e;let t={...e};for(let r of this.cards.values())Object.assign(t,r);return t}};var j=(n,e=0,t=2147483647)=>typeof n=="number"&&Number.isInteger(n)&&n>=e&&n<=t,Co=n=>typeof n=="number"&&Number.isFinite(n),Io=["performance","technique","visual"],Oc={members:["leader","live","gekiso"],snaps:["support","support","gekisoSupport","gekisoSupport"]},sr=class{constructor(e){this.host=e}document=is();dialog=null;libraryScope="cards";eventTab="basic";eventRank=7;card=null;event=null;previousId=null;submitted=!1;error="";expanded=new Set;visited=new Set;levels=new Map;key="";clock=new Qn;skillReads=new Map;skillAttempts=new WeakSet;skillController=new AbortController;get source(){return this.host.publicData}get cards(){return this.document.cards.filter(e=>e.active)}get events(){return this.document.events.filter(e=>e.active)}get hasDefinitions(){return this.document.cards.length>0||this.document.events.length>0}cardById(e){return this.document.cards.find(t=>t.id===e)}dispose(){this.skillController.abort(),this.skillController=new AbortController,this.skillReads.clear(),this.skillAttempts=new WeakSet}describeSkill(e){if(!e.templateId||e.description!==void 0||this.skillAttempts.has(e))return;this.skillAttempts.add(e);let t=e.family,r=t.replace("gekiso","gekisou"),s=this.source,i=this.key,a=this.source.identity.server,o=e.templateId,c={leader:"leaderSkillId",live:"liveSkillId",gekiso:"gekisoSkillId"};for(let[g,f]of[["members",this.source.members],["snapshots",this.source.snapshots]]){let m=Object.values(f).find(v=>t in c?"leaderSkillId"in v&&v[c[t]]===e.templateId:"supportSkillIds"in v&&(t==="support"?v.supportSkillIds:v.gekisoSupportSkillIds).includes(e.templateId));if(!m)continue;a=this.source.crossServer?.owners[g]?.[String(m.id)]??a;let y=pe(m.catalogMetadata?.resolvedSkills)[r],w=le(Array.isArray(y)?y:[y]),x=t in c?0:(t==="support"?m.supportSkillIds:m.gekisoSupportSkillIds).indexOf(e.templateId);o=Number(w[x]?.id??o);break}let l=this.source.crossServer?.identities[a]??this.source.identity,d={leader:"leader-skills",live:"skills",gekiso:"gekisou-skills",support:"support-skills",gekisoSupport:"gekisou-support-skills"},u=`${a}:${l.releaseId}:${t}`,h=this.skillReads.get(u);h||(h=fetch(`/api/v1/servers/${a}/${d[t]}?release=${encodeURIComponent(l.releaseId)}`,{signal:this.skillController.signal}).then(async g=>{if(!g.ok)throw new Error("planner-skill-description");return pe(await g.json())}),this.skillReads.set(u,h)),h.then(g=>{if(this.source!==s||this.key!==i)return;let f=pe(g[String(o)]);this.card?.skills.includes(e)&&(e.description=f.description??[]);let m=!1;for(let y of this.document.cards)y.skills.forEach((w,x)=>{if(w.family!==t||w.templateId!==e.templateId||w.description!==void 0)return;w.description=f.description??[],m=!0;let v=this.host.data?.skills[t]?.[String(y.id+x)];v&&(v.description=w.description)});m&&this.persist(),this.changed()}).catch(()=>{this.card?.skills.includes(e)&&(e.description=[],this.changed())})}changed(){this.host.requestUpdate()}restore(e){let t=`haneoka.planner.v1.${this.host.server}.${e||"local"}`;if(this.key!==t){this.key=t,this.close(),this.document=is();try{let r=localStorage.getItem(t);r&&(this.document=this.parse(JSON.parse(r)))}catch{this.error=this.host.t("planner.loadFailed","Planning data could not be loaded")}this.host.applyPlanningData(),this.restoreCards()}}persist(e=this.document){try{return localStorage.setItem(this.key,JSON.stringify(e)),!0}catch{return this.error=this.host.t("planner.saveFailed","Planning data could not be saved"),this.changed(),!1}}merge(e){return{...e,...this.document.entries}}owns(e,t){return Object.hasOwn(this.document.entries,e)||/^(?:pref\.|team\.)/u.test(e)&&Ga(t,new Set([...this.document.cards,...this.document.events].map(r=>r.id)))}write(e){if(!e.length)return!0;let t={...this.document,entries:{...this.document.entries}};for(let{key:r,value:s}of e)t.entries[r]={v:s,t:this.clock.next(),c:"planner",r:0};return this.persist(t)?(this.document=t,!0):!1}clearPreferenceOverrides(e){if(!e.some(r=>Object.hasOwn(this.document.entries,r)))return!0;let t={...this.document,entries:{...this.document.entries}};for(let r of e)delete t.entries[r];return this.persist(t)?(this.document=t,!0):!1}saveGrowth(e,t){let r=this.cardById(t);if(!r||!this.host.temporary.has(e,t))return;let s=this.host.temporary.changes(e,t),i=a=>s.find(o=>o.key.endsWith(`.${a}`))?.value;r.growth={level:i("lvl"),rank:i("rnk"),...e==="members"?{awake:i("awk"),liveSkillLevel:i("sk"),gekisoSkillLevel:i("gsk")}:{}},this.persist()}restoreCards(e=this.cards){let{host:t}=this;if(t.master){for(let r of e){let s=r.id;if(!t.temporary.has(r.kind,s))if(r.kind==="members"){let i=t.master.members.get(s),a=Ji(t.master,i,{...Ae(t.master,i),...r.growth,key:`m${s}`,cardId:s},"max");t.temporary.add("members",s,Mt(s,{use:!0,lock:!1,level:a.level,rank:a.rank,awake:a.awake,skill:a.liveSkillLevel,gekisoSkill:a.gekisoSkillLevel}))}else{let i=t.master.snaps.get(s),a=Ki(t.master,i,{...Me(t.master,i),...r.growth,key:`s${s}`,cardId:s},"max");t.temporary.add("snaps",s,Bt(s,{use:!0,lock:!1,level:a.level,rank:a.rank}))}}t.refreshTemporaryView()}}open(e="cards"){e==="events"&&!["build","pt"].includes(this.host.tab)&&this.host.setTab("build"),this.libraryScope=e,this.dialog="library",this.card=null,this.event=null,this.submitted=!1,this.error="",this.changed()}close(){this.dialog=null,this.card=null,this.event=null,this.submitted=!1,this.expanded.clear(),this.visited.clear(),this.changed()}editCard(e,t){this.event=null,this.previousId=t??null;let r=t===void 0?void 0:this.cardById(t),s=Object.keys(e==="members"?this.source.members:this.source.snapshots).map(Number)[0];this.card=r?structuredClone(r):jn(this.source,this.document,e,s,""),this.dialog="card",this.submitted=!1,this.error="",this.levels.clear(),this.expanded.clear(),this.visited.clear(),this.changed()}editEvent(e,t=null){["build","pt"].includes(this.host.tab)||this.host.setTab("build"),this.eventTab="basic",this.card=null,this.previousId=e??null;let r=this.document.events.find(s=>s.id===(e??t));this.event=r?structuredClone(r):Ha(this.source,this.host.master,this.document,t,""),this.dialog="event",this.submitted=!1,this.error="",this.expanded.clear(),this.visited.clear(),this.changed()}issues(){if(this.card){let e=this.card;return[!e.name.trim()&&"name",!e.characterIds.length&&"characters",!Io.every(t=>j(e.stats[t]))&&"stats",e.skills.some(t=>Object.values(t.effects).some(r=>r.value!==void 0&&!j(r.value,-2147483648)||r.maximum!==void 0&&!j(r.maximum,-2147483648)||r.seconds!==void 0&&(!Co(r.seconds)||r.seconds<0||r.seconds>Ht)))&&"skills"].filter(t=>!!t)}if(this.event){let e=this.event,t=[...e.rules.normalRanks,...e.rules.challengeRanks];return[!e.name.trim()&&"name",(e.startAt!==null&&!j(e.startAt,0,Number.MAX_SAFE_INTEGER)||e.endAt!==null&&!j(e.endAt,0,Number.MAX_SAFE_INTEGER)||e.startAt!==null&&e.endAt!==null&&e.endAt<=e.startAt)&&"dates",![...e.livePoints,...e.challengePoints,...e.rules.liveChallengePoints].every(r=>j(r.value))&&"rewards",![...e.liveRewards,...e.challengeRewards].every(r=>j(r.count)&&j(r.resourceType,1)&&j(r.resourceId,1)&&j(r.group)&&j(r.probability,0,1e4))&&"rewards",![...e.rules.boosts,...e.rules.challengeBoosts].every(r=>j(r.consumed)&&j(r.eventPointRate,1)&&j(r.rewardRate,1))&&"boosts",!t.every(r=>j(r.required)&&j(r.battleRequired))&&"ranks",e.effects.some(r=>r.perRank.some(s=>!j(s)))&&"bonuses"].filter(r=>!!r)}return[]}save(){if(this.submitted=!0,this.issues().length){this.changed();return}let e=this.previousId,t=Fn(this.document),r=new Map,s=e===null?void 0:this.cardById(e);s&&this.host.temporary.has(s.kind,e)&&this.saveGrowth(s.kind,s.id);let i=structuredClone(this.document);if(this.card){let a=i.cards.find(o=>o.id===e);if(a&&(a.active=!1),i.cards.push({...structuredClone(this.card),id:t,growth:a?.growth??this.card.growth,active:!0}),e!==null){r.set(e,t);for(let o of[...i.events].filter(c=>c.active&&c.effects.some(l=>l.memberCardId===e||l.supportCardId===e))){let c=Fn(i),l=Jt(structuredClone(o),new Map([[e,t],[o.id,c]]));o.active=!1,l.id=c,l.active=!0,i.events.push(l),r.set(o.id,c)}for(let[o,c]of Object.entries(i.entries))o.startsWith("pref.")&&(c.v=Jt(c.v,r))}}if(this.event){let a=i.events.find(c=>c.id===e);a&&(a.active=!1),e!==null&&r.set(e,t);let o={...structuredClone(this.event),id:t,active:!0};for(let c of[...o.liveRewards,...o.challengeRewards])c.resourceType===1&&[this.event.id,e].includes(c.resourceId)&&(c.resourceId=t);o.itemId===e&&(o.itemId=0),i.events.push(o)}if(this.persist(i)){if(this.document=i,e!==null)for(let a of["members","snaps"])this.host.temporary.remove(a,e);this.host.applyPlanningData(),this.restoreCards(),r.size&&this.replaceReferences(r),this.event&&(["build","pt"].includes(this.host.tab)||this.host.setTab("build"),this.host.updateSettings({eventId:t,manualEventEnabled:!1})),this.close()}}replaceReferences(e){let t=a=>Jt(a,e),{host:r}=this;r.manual=t(r.manual);let s=t(r.settings);if(JSON.stringify(s)!==JSON.stringify(r.settings)){r.settings=s;let{required:a,...o}=s;r.write([{key:"pref.build",value:o}])}let i=t(r.arena.draft.build);JSON.stringify(i)!==JSON.stringify(r.arena.draft.build)&&r.arena.updateBuild(i)}deactivate(e,t){if(e==="card"){this.disableCards([t]);return}let r=structuredClone(this.document),s=r.events.find(i=>i.id===t);s.active=!1,this.persist(r)&&(this.document=r,this.host.applyPlanningData(),this.host.refreshTemporaryView(),e==="event"&&this.host.settings.eventId===t&&this.host.updateSettings({eventId:null}),this.changed())}disableCards(e){let t=new Set(e),r=structuredClone(this.document);for(let i of r.cards)t.has(i.id)&&(i.active=!1);if(!this.persist(r))return!1;this.document=r;for(let i of t){let a=this.cardById(i);a&&this.host.temporary.remove(a.kind,i)}this.host.applyPlanningData(),this.host.refreshTemporaryView();let s=this.host.searchSettings;return this.host.updateSettings({leader:s.leader!==null&&t.has(s.leader)?null:s.leader,bindings:s.bindings.filter(([i,a])=>!t.has(i)&&!(a!==null&&t.has(a))),required:{members:s.required.members.filter(i=>!t.has(i)),snaps:s.required.snaps.filter(i=>!t.has(i))}}),!0}async export(){await xn(new Blob([JSON.stringify(this.document,null,2)],{type:"application/json"}),"haneoka-planner.json")}import(){let e=document.createElement("input");e.type="file",e.accept="application/json,.json",e.onchange=async()=>{let t=e.files?.[0];if(t)try{if(t.size>8*1024*1024)throw new Error("planner-size");let r=this.parse(JSON.parse(await t.text())),s=structuredClone(this.document),i=new Map,a=Fn(s);for(let c of[...r.cards,...r.events])i.set(c.id,a),a+=1e3;let o=Jt(r,i);o.cards.forEach((c,l)=>c.id=i.get(r.cards[l].id)),o.events.forEach((c,l)=>c.id=i.get(r.events[l].id));for(let c of s.cards)c.active=!1;for(let c of s.events)c.active=!1;s.cards.push(...o.cards),s.events.push(...o.events);for(let[c,l]of Object.entries(o.entries))s.entries[c]=l;if(!this.persist(s))return;for(let c of this.cards)this.host.temporary.remove(c.kind,c.id);this.document=s,this.host.applyPlanningData(),this.restoreCards(),this.host.restorePlanningPreferences(),this.error="",this.changed()}catch{this.error=this.host.t("planner.invalidFile","Invalid planning data"),this.changed()}},e.click()}parse(e){let t=pe(e);if(t.schema!=="haneoka-planner-v1"||!Array.isArray(t.cards)||!Array.isArray(t.events))throw new Error("planner-document");let r=new Set;for(let a of[...t.cards,...t.events]){let o=a?.id;if(!j(o,wt,2147482e3)||o%1e3||r.has(o))throw new Error("planner-id");r.add(o)}for(let a of t.cards){if(!["members","snaps"].includes(a.kind)||typeof a.name!="string"||typeof a.active!="boolean"||![1,2,3,4,5].includes(a.attribute)||![2,3,4,10,20].includes(a.rarity)||!Io.every(c=>j(a.stats?.[c]))||!Array.isArray(a.characterIds)||a.characterIds.length<1||a.characterIds.length>(a.kind==="members"?1:5)||a.characterIds.some(c=>!this.source.characters[c]))throw new Error("planner-card");let o=a.kind==="members"?this.source.members:this.source.snapshots;if(!o[a.templateId]||!o[a.materialTemplateId]||!Array.isArray(a.skills)||a.skills.length!==(a.kind==="members"?3:4))throw new Error("planner-template");for(let[c,l]of a.skills.entries()){if(!l||l.family!==Oc[a.kind][c])throw new Error("planner-skill-family");if(l.origin&&(l.origin.kind!==a.kind||!j(l.origin.cardId,1)||!j(l.origin.slot,0,a.kind==="members"?0:1)))throw new Error("planner-skill-origin");if(l.templateId=Ua(this.source,l),l.origin??=Vt(this.source,l.family,l.templateId),!j(l.templateId)||l.templateId&&!this.source.skills[l.family]?.[l.templateId]||typeof l.name!="string"||!l.effects||Array.isArray(l.effects))throw new Error("planner-skill");let d=new Set(le(this.source.skills[l.family]?.[l.templateId]?.effects).map(Un));for(let[u,h]of Object.entries(l.effects))if(!d.has(u)||!h||h.value!==void 0&&!j(h.value,-2147483648)||h.maximum!==void 0&&!j(h.maximum,-2147483648)||h.seconds!==void 0&&(!Co(h.seconds)||h.seconds<0||h.seconds>Ht))throw new Error("planner-effect")}}let s=this.event;try{for(let a of t.events){if(typeof a.name!="string"||typeof a.active!="boolean"||!j(a.eventType)||!j(a.itemId)||!Array.isArray(a.challenges)||a.challenges.some(o=>!this.source.songs[o.songId]||![1,2,3,4,5,99].includes(o.attribute)))throw new Error("planner-event");for(let o of["effects","livePoints","challengePoints","liveRewards","challengeRewards"])if(!Array.isArray(a[o]))throw new Error("planner-event-table");if(!a.rules||!["normalSongs","liveChallengePoints","boosts","challengeBoosts","normalRanks","challengeRanks"].every(o=>Array.isArray(a.rules[o])))throw new Error("planner-event-rules");if(this.event=a,this.issues().length)throw new Error("planner-event-value")}}finally{this.event=s}let i=pe(t.entries);for(let[a,o]of Object.entries(i))if(!/^(pref\.|team\.)/u.test(a)||!o||!j(o.t,0,Number.MAX_SAFE_INTEGER)||typeof o.c!="string"||!j(o.r)||!vo(a,o.v))throw new Error("planner-entry");return{schema:"haneoka-planner-v1",cards:t.cards,events:t.events,entries:i}}};var Lc=["ja","en","zh-TW","zh-CN","ko"];var ar=n=>n&&typeof n=="object"&&!Array.isArray(n)?n:void 0,or=n=>{let e=Array.isArray(n)?n:Object.values(ar(n)||{}),t=[];for(let r of e){let s=ar(r);s&&t.push(s)}return t},nn=n=>ar(n.raw)||n,de=(n,...e)=>{let t=nn(n);for(let r of e){if(n[r]!==void 0&&n[r]!==null)return n[r];if(t[r]!==void 0&&t[r]!==null)return t[r]}},To=n=>{if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string"||!n.trim())return;let e=Number(n);return Number.isFinite(e)?e:void 0},$e=(n,...e)=>To(de(n,...e)),Ao=n=>(Array.isArray(n)?n:[]).flatMap(e=>{let t=To(e);return t===void 0?[]:[t]}),Cs=n=>{let e=new Map;for(let t of or(n)){let r=$e(t,"id","_id");r!==void 0&&e.set(r,t)}return e},qc=n=>{let e=new Map;for(let t of or(n?.conditionSets)){let r=$e(t,"group","_group");if(r===void 0)continue;let s=e.get(r)||[];s.push(t),e.set(r,s)}for(let t of e.values())t.sort((r,s)=>($e(r,"id","_id")||0)-($e(s,"id","_id")||0));return{conditionSetsByGroup:e,conditionsById:Cs(n?.conditions),cumulativeConditionsById:Cs(n?.cumulativeConditions),targetsById:Cs(n?.targets)}},Nc=(n,e)=>{let t=e.targetsById.get(n);if(!t)return{id:n};let r=nn(t),s={...r,id:n,raw:r};return t.name!==void 0&&(s.name=t.name),s},_s=(n,e)=>Ao(n).map(t=>Nc(t,e)),Dc=(n,e)=>{let t=e.conditionsById.get(n);if(!t)return{id:n};let r=nn(t),s=de(t,"values","conditionValues","_conditionValues"),i=de(t,"targetIds","conditionTargetIds","_conditionTargetIDs");return{...r,id:n,raw:r,values:Array.isArray(s)?s:[],targets:_s(i,e)}},Is=(n,e)=>n?(e.conditionSetsByGroup.get(n)||[]).map(t=>{let r=Ao(de(t,"conditionIds","_conditionIds")).map(s=>Dc(s,e));return r.forEach((s,i)=>{r[`values${i+1}`]=s.values}),r}):[],zc=(n,e)=>{if(!n)return;let t=e.cumulativeConditionsById.get(n);if(!t)return{id:n};let r=nn(t),s=de(t,"values","conditionValues","_conditionValues"),i=de(t,"targetIds","conditionTargetIds","_conditionTargetIDs");return{...r,id:n,raw:r,values:Array.isArray(s)?s:[],maxCount:de(t,"maxCount","maxCumulativeCount","_maxCumulativeCount"),targets:_s(i,e)}},_o=n=>$e(n,"level","_level"),Fc=n=>{let e=$e(n,"effectValue","_effectValue");return e===void 0?"":$e(n,"effectType","_skillEffectType")!==11005?String(e):["Invalid","Miss","Hit","SuperHit","Critical"][e]??String(e-1)},Uc=(n,e)=>{let t=n.map(_o).filter(s=>s!==void 0);if(!t.length)return{effects:n};let r=e??Math.max(...t);return{level:r,effects:n.filter(s=>_o(s)===r)}},jc=(n,e,t)=>{let r=Uc(n,t);return{level:r.level,effects:r.effects.map(s=>{let i=de(s,"targetIds","_skillTargetIDs"),a=$e(s,"conditionGroup","_skillConditionGroup"),o=$e(s,"releaseConditionGroup","_skillReleaseConditionGroup"),c=$e(s,"triggerConditionGroup","_skillTriggerConditionGroup"),l=$e(s,"cumulativeConditionId","_skillCumulativeConditionID");return{...s,value:de(s,"effectValue","_effectValue"),valueLabel:Fc(s),maxValue:de(s,"maxEffectValue","_maxEffectValue"),time:de(s,"activationTimeSecond","_activationTimeSecond"),limitCount:de(s,"effectLimitCount","_effectLimitCount"),executeLimitCount:de(s,"executeLimitCount","_effectExecuteLimitCount"),EffectExecuteLimitCount:de(s,"executeLimitCount","_effectExecuteLimitCount"),targets:_s(i,e),con:Is(a,e),rCon:Is(o,e),tCon:Is(c,e),cCon:zc(l,e)}})}},ir=(n,e)=>e.replace(/\[(\d+)]/g,".$1").split(".").filter(Boolean).reduce((t,r)=>t&&typeof t=="object"?t[r]:void 0,n),it=()=>({resolved:!1,value:""}),Mo=(n,e,t)=>{let r=n.trim().match(/^\((effects(?:\[\d+])(?:[.\w]|\[\d+])*)\s*\+\s*(effects(?:\[\d+])(?:[.\w]|\[\d+])*)\)(?:([/*])(\d+(?:\.\d+)?))?(?::F(\d+))?$/);if(r){let a=ir(e,r[1]),o=ir(e,r[2]);if(typeof a!="number"||typeof o!="number")return it();let c=r[4]===void 0?void 0:Number(r[4]),l=a+o,d=r[3]==="/"?l/c:r[3]==="*"?l*c:l;return Number.isFinite(d)?{resolved:!0,value:r[5]===void 0?String(d):d.toFixed(Number(r[5]))}:it()}let s=n.trim().match(/^(effects(?:\[\d+])(?:[.\w]|\[\d+])*)(?:([/*])(\d+(?:\.\d+)?))?(?::F(\d+))?$/);if(!s)return it();let i=ir(e,s[1]);if(typeof i=="number"){let a=s[3]===void 0?void 0:Number(s[3]),o=s[2]==="/"?i/a:s[2]==="*"?i*a:i;return Number.isFinite(o)?{resolved:!0,value:s[4]===void 0?String(o):o.toFixed(Number(s[4]))}:it()}if(typeof i=="string")return{resolved:!0,value:i};if(Array.isArray(i)||i&&typeof i=="object"){let a=t(i);return a?{resolved:!0,value:a}:it()}return i===null?{resolved:!0,value:""}:it()},Hc=(n,e,t)=>{let r=n.trim(),s=r.match(/^"([^"]*)"$/);if(s)return{resolved:!0,value:s[1]||""};let i=[];for(let a of r.split(/\s*~\s*/)){let o=a.match(/^"([\s\S]*)"$/);if(o){i.push(o[1]||"");continue}let c=Mo(a,e,t);if(!c.resolved)return it();i.push(c.value)}return{resolved:!0,value:i.join("")}},Gc=(n,e,t)=>{let r={effects:e};return n.replace(/\{([^{}]+)\}/g,(s,i)=>{let a=i.match(/^0\s*<\s*(effects(?:\[\d+])(?:[.\w]|\[\d+])*)\s*\?\s*(.*?)\s*:\s*(.*)$/);if(a){let c=ir(r,a[1]);if(typeof c!="number")return s;let l=Hc(c>0?a[2]:a[3],r,t);return l.resolved?l.value:s}let o=Mo(i,r,t);return o.resolved?o.value:s})},Eo=n=>[...new Set(n.match(/\{[^{}]+\}/g)||[])],lr=n=>n.replace(/<color=[^>]+>/gi,"").replace(/<\/color>/gi,"").replace(/<[^>]+>/g,"").replace(/\\n/g,`
`).trim(),Ro=new WeakMap;function cr(n,e){let t=Ro.get(e);return t||(t=qc(e),Ro.set(e,t)),Object.entries(ar(n.resolvedSkills)||{}).flatMap(([r,s])=>or(Array.isArray(s)?s:[s]).map((i,a)=>{let o=or(i.effects),c=[...new Set(o.map(l=>Number(l.level??nn(l)._level)))].filter(l=>Number.isFinite(l)&&l>0).sort((l,d)=>l-d);return{group:r,slot:a,name:i.skillName??i.name,levels:(c.length?c:[1]).map(l=>{let d=jc(o,t,l).effects,u=Lc.map(x=>tt(i.description,x)),h=u.map(x=>lr(Gc(x.text,d,v=>tt(v,x.locale).text))),g=[...new Set(h.flatMap(Eo))],f=x=>x.length>0&&!Eo(x).length,m=h.findIndex(f),y=h.map(x=>f(x)?x:m>=0?h[m]:""),w=h.map((x,v)=>f(x)?u[v].locale:m>=0?u[m].locale:"und");return{level:l,description:y,descriptionLocales:w,...g.length?{unresolved:g}:{}}})}}))}var T=(n,e)=>n.t(`planner.${e}`,e),X=n=>n.requestUpdate(),at=n=>n.t("unrestricted","Unrestricted"),qe=n=>`tb-planner-${n}`;function xt(n,e,t,r,s,i="text",a,o,c){let l=n.planner.submitted&&n.planner.issues().includes(e.split("-")[0]);return p`
    <md-outlined-text-field
      id=${qe(e)}
      label=${t}
      type=${i}
      .value=${ve(r)}
      min=${a??k}
      max=${o??k}
      step=${c??k}
      .error=${l}
      @input=${d=>{i!=="number"&&(s(d.target.value),X(n))}}
      @change=${d=>{i==="number"&&(s(d.target.value),X(n))}}
    ></md-outlined-text-field>
  `}var re=(n,e,t,r,s,i=0,a=2147483647,o=1)=>xt(n,e,t,String(r),c=>s(c.trim()?Number(c):NaN),"number",i,a,o);function Q(n,e,t,r,s){return Te({type:"select",label:e,value:String(t),options:r.map(i=>({value:String(i.value),label:i.label})),onSelect:i=>{s(Number(i)),X(n)}})}function ue(n,e,t,r){let s=n.planner;return s.expanded.has(e)&&s.visited.add(e),W({id:qe(e),label:t,expanded:s.expanded.has(e),onExpandedChange:i=>{i?s.expanded.add(e):s.expanded.delete(e),X(n)},content:s.visited.has(e)?r:k})}var sn=(n,e)=>p`
  <div class="table-scroll" tabindex="0">
    <table class="data-table">
      <thead>
        <tr>
          ${n.map(t=>p`
              <th scope="col">${t}</th>
            `)}
        </tr>
      </thead>
      <tbody>${e}</tbody>
    </table>
  </div>
`,dr=(n,e)=>D({icon:"close",label:n.common("common.actions.remove","Remove"),onClick:()=>{e(),X(n)}}),ae=(n,e)=>p`
  <button class="button button--tonal" type="button" @click=${e}>${n}</button>
`,ur=n=>["E","D","C","B","A","S","SS"].map((e,t)=>({value:t+1,label:n.t("planner.rank","{rank}",{rank:e})})),Rs=(n,e=!1)=>[...e?[{value:99,label:n.catalog.attributeName(99)}]:[],...[1,2,3,4,5].map(t=>({value:t,label:n.catalog.attributeName(t)}))];function rn(n,e,t=!1){let r=e==="members"?(t?n.publicData:n.data).members:(t?n.publicData:n.data).snapshots;return Object.values(r).filter(s=>t?Gr(s):n.planner.cardById(s.id)?.active!==!1).map(s=>({value:s.id,label:[n.catalog.text(s.name),...("characterId"in s?[s.characterId]:s.characterIds).map(i=>n.catalog.characterName(i)),Fr(s.rarity)].join(" / ")}))}function Vc(n){let e=n.planner,t=e.card,r=n.catalog,s=e.source,i=o=>{e.card=jn(s,e.document,t.kind,o,t.name),X(n)},a=[...n.master.characters.keys()];return p`
    <div class="stack">
      ${xt(n,"name",T(n,"cardName"),t.name,o=>t.name=o)}
      ${Q(n,T(n,"cardTemplate"),t.templateId,rn(n,t.kind,!0),i)}
      ${Q(n,n.common("catalog.cards.fields.rarity","Rarity"),t.rarity,Ti.map(o=>({value:o,label:Fr(o)})),o=>{t.rarity=o;let c=t.kind==="members"?s.members:s.snapshots;if(c[String(t.materialTemplateId)]?.rarity!==o){let l=Object.values(c).find(d=>d.rarity===o);l&&(t.materialTemplateId=l.id)}})}
      ${Q(n,n.common("catalog.fields.attribute","Attribute"),t.attribute,Rs(n),o=>t.attribute=o)}
      <section id=${qe("characters")} class="stack stack--tight">
        ${V({icon:"person",label:n.common("navigation.characters","Characters"),level:3})}
        ${t.kind==="members"?Q(n,n.common("catalog.fields.character","Character"),t.characterIds[0]??0,a.map(o=>({value:o,label:r.characterName(o)})),o=>t.characterIds=[o]):p`
                <div class="cluster">
                  ${a.map(o=>qt({label:r.characterName(o),image:r.characterFace(o),selected:t.characterIds.includes(o),onToggle:()=>{t.characterIds=t.characterIds.includes(o)?t.characterIds.filter(c=>c!==o):t.characterIds.length<5?[...t.characterIds,o]:t.characterIds,X(n)}}))}
                </div>
              `}
      </section>
      <section id=${qe("stats")} class="stack">
        ${V({icon:"bar_chart",label:T(n,"baseStats"),level:3})}
        ${["performance","technique","visual"].map(o=>re(n,`stats-${o}`,n.common(`catalog.cards.fields.${o}`,o),t.stats[o]/(t.kind==="snaps"?100:1),c=>t.stats[o]=Math.round(c*(t.kind==="snaps"?100:1)),0,2147483647/(t.kind==="snaps"?100:1),t.kind==="snaps"?.01:1))}
      </section>
      <section id=${qe("skills")} class="stack">
        ${V({icon:"bolt",label:n.common("catalog.cards.fields.skills","Skills"),level:3})}
        ${t.skills.map((o,c)=>{e.describeSkill(o);let l=o.family.replace("gekiso","gekisou"),d=n.common(`catalog.cards.fields.${l}Skill`,l),u=s.skills[o.family]?.[String(o.templateId)],h=ja(s,o,c+1),f=(h?cr({resolvedSkills:{[l]:h}},s.skillReference)[0]:void 0)?.levels??[],m=e.levels.get(c)??f.at(-1)?.level??1,y=le(u?.effects).map((b,S)=>({row:Ue(b),key:Un(b,S)})).filter(({row:b})=>Number(b.level)===m),w=Object.entries(s.skills[o.family]??{}).flatMap(([b,S])=>{let $=Vt(s,o.family,Number(b)),M=$?($.kind==="members"?s.members:s.snapshots)[String($.cardId)]:void 0;return!M||!Gr(M)?[]:[{value:Number(b),label:[r.text(S.skillName)||r.text(S.description),r.text(M.name)].filter(Boolean).join(" / ")}]}),x=le(s.skillReference.effectSettings).map(Ue),v=new Set([1e3,1001,1002,1003,1004,1005,2e3,2001,2003,2004,2005,4e3,4001,4002,4003,4004,11e3,11002]);return ue(n,`skill-${c}`,d,p`
              <div class="stack">
                ${Q(n,d,o.templateId,[{value:0,label:T(n,"noSkill")},...w],b=>{t.skills[c]={...o,templateId:b,origin:Vt(s,o.family,b),effects:{},name:"",description:void 0},e.levels.delete(c)})}
                ${h?p`
                        ${xt(n,`skills-name-${c}`,T(n,"skillName"),o.name,b=>o.name=b)}
                        ${f.length>1?F({label:n.common("common.fields.level","Level"),value:String(m),options:f.map(b=>({value:String(b.level),label:`Lv.${b.level}`})),onSelect:b=>{e.levels.set(c,Number(b)),X(n)}}):k}
                        <div class="spec-list">
                          <div>
                            <dt>${n.common("catalog.fields.effects","Effects")}</dt>
                            <dd>
                              ${tt(f.find(b=>b.level===m)?.description,n.locale).text}
                            </dd>
                          </div>
                        </div>
                        ${y.map(({row:b,key:S},$)=>{let M=o.effects[S]??{},C=Number(b.effectType??b.skillEffectType),E=v.has(C)?100:C===15e3?1e3:1,I=r.text(x.find(R=>Number(R.skillEffectType)===C)?.name)||T(n,"effectValue"),A=R=>o.effects={...o.effects,[S]:{...o.effects[S],...R}},_=v.has(C)?"%":C===15e3?"s":"";return p`
                            <div class="stack">
                              ${re(n,`skills-value-${c}-${$}`,`${I}${_?` (${_})`:""}`,(M.value??Number(b.effectValue))/E,R=>A({value:Math.round(R*E)}),-2147483648/E,2147483647/E,1/E)}
                              ${re(n,`skills-time-${c}-${$}`,T(n,"duration"),M.seconds??Number(b.activationTimeSecond??0),R=>A({seconds:R}),0,Ht,.01)}
                              ${Number(b.maxEffectValue)||M.maximum!==void 0?re(n,`skills-maximum-${c}-${$}`,T(n,"maximumEffect"),(M.maximum??Number(b.maxEffectValue))/E,R=>A({maximum:Math.round(R*E)}),-2147483648/E,2147483647/E,1/E):k}
                            </div>
                          `})}
                      `:k}
              </div>
            `)})}
      </section>
      ${ue(n,"materials",T(n,"growthRules"),p`
          <div class="stack">
            ${Q(n,T(n,"materialTemplate"),t.materialTemplateId,rn(n,t.kind,!0),o=>t.materialTemplateId=o)}
          </div>
        `)}
    </div>
  `}function Bo(n,e){let t=n.planner,r=t.event,s=n.catalog;n.songPicker={songs:(e?r.challenges.map(i=>i.songId):r.rules.normalSongs).map(i=>({songId:i,difficulty:n.songDifficulties[0]??3})),single:!1,query:"",filtersOpen:!1,bands:[],attributes:[],gekisouTypes:[],difficulty:n.songDifficulties[0]??3,context:`planner-${e?"challenge":"live"}`,title:T(n,e?"challengeSongs":"normalSongs"),change:i=>{let a=[...new Set(i.map(o=>o.songId))];e?r.challenges=a.map(o=>r.challenges.find(c=>c.songId===o)??{songId:o,attribute:Number(s.song(o).musicType)||99}):r.rules.normalSongs=a,X(n)}},X(n)}function Po(n,e,t){let r=n.catalog,s=[{value:1,label:n.common("navigation.items","Items")},{value:2,label:n.t("members","Members")},{value:3,label:n.t("snapshots","Snapshots")}],i=Object.values(n.publicData.events).flatMap(a=>{let o=a.eventItem;return o?[{value:Number(o.resourceId??o.id),label:r.text(o.name)||r.text(a.title)}]:[]});return p`
    <div class="stack">
      ${sn([T(n,"rankLabel"),T(n,"rewardResource"),T(n,"count"),T(n,"probability"),T(n,"dropGroup"),""],e.map((a,o)=>p`
            <tr>
              <td>
                ${Q(n,T(n,"rankLabel"),a.scoreRank,ur(n),c=>a.scoreRank=c)}
              </td>
              <td>
                <div class="stack stack--tight">
                  ${Q(n,T(n,"resourceType"),a.resourceType,s,c=>a.resourceType=c)}
                  ${Q(n,T(n,"rewardResource"),a.resourceId,[{value:n.planner.event.id,label:T(n,"eventBadge")},...a.resourceType===1?i:rn(n,a.resourceType===2?"members":"snaps")],c=>a.resourceId=c)}
                </div>
              </td>
              <td>
                ${re(n,`rewards-${t}-${o}`,T(n,"count"),a.count,c=>a.count=c)}
              </td>
              <td>
                ${re(n,`rewards-chance-${t}-${o}`,T(n,"probability"),a.probability/100,c=>a.probability=Math.round(c*100),0,100,.01)}
              </td>
              <td>
                ${re(n,`rewards-group-${t}-${o}`,T(n,"dropGroup"),a.group,c=>a.group=c)}
              </td>
              <td>${dr(n,()=>e.splice(o,1))}</td>
            </tr>
          `))}
      ${ae(T(n,"addReward"),()=>{e.push({scoreRank:7,group:0,resourceType:1,resourceId:n.planner.event.id,count:0,probability:1e4}),X(n)})}
    </div>
  `}function Oo(n,e,t){return sn([T(n,"consumption"),T(n,"pointRate"),T(n,"rewardRate")],e.map((r,s)=>p`
        <tr>
          <td>${r.consumed}</td>
          <td>
            ${re(n,`boosts-pt-${t}-${s}`,T(n,"pointRate"),r.eventPointRate,i=>r.eventPointRate=i,1)}
          </td>
          <td>
            ${re(n,`boosts-drop-${t}-${s}`,T(n,"rewardRate"),r.rewardRate,i=>r.rewardRate=i,1)}
          </td>
        </tr>
      `))}function Lo(n,e,t){let r=()=>{let i=[...n.master.scoreRanks.values()].find(a=>a.length)??[];e.splice(0,e.length,...structuredClone(i)),X(n)};return p`
    <div class="stack">
      ${e.length?sn([T(n,"rankLabel"),T(n,"scoreRequired"),T(n,"battleScoreRequired")],e.map((s,i)=>p`
                  <tr>
                    <th scope="row">${ur(n).find(a=>a.value===s.rank)?.label??s.rank}</th>
                    <td>
                      ${re(n,`ranks-score-${t}-${i}`,T(n,"scoreRequired"),s.required,a=>s.required=a)}
                    </td>
                    <td>
                      ${re(n,`ranks-battle-${t}-${i}`,T(n,"battleScoreRequired"),s.battleRequired,a=>s.battleRequired=a)}
                    </td>
                  </tr>
                `)):p`
              <span class="chip">${T(n,"songRankRules")}</span>
            `}
      <div class="cluster">
        ${ae(T(n,"customizeRanks"),r)}${e.length?ae(T(n,"songRankRules"),()=>{e.splice(0),X(n)}):k}
      </div>
    </div>
  `}function Es(n,e,t){let s={attribute:"cardType",band:"bandId",character:"characterId",member:"memberCardId",snap:"supportCardId"}[e],i=e==="snap"?3:2,a=[...n.master.events.values()].filter(g=>g.startAt!==null&&g.startAt<=Date.now()&&n.publicData.events[g.id]),o=g=>g[s]>0&&(["member","snap"].includes(e)?g.resourceType===i:!0),c=a.flatMap(g=>g.effects.filter(o)),l=new Map;for(let g of a){let f=g.effects.find(o);if(!f)continue;let m=g.effects.filter(x=>x[s]===f[s]&&o(x)),y=JSON.stringify(m.map(x=>[x.resourceType,x.bonusType,x.perRank])),w=l.get(y);w?w.count++:l.set(y,{count:1,rows:m})}let d=[...l.values()].sort((g,f)=>f.count-g.count)[0]?.rows??[],u=t??(e==="attribute"||e==="band"?1:Number(e==="character"?Object.keys(n.data.characters)[0]:Object.keys(e==="member"?n.data.members:n.data.snapshots)[0])),h={resourceType:i,characterId:0,bandId:0,cardType:0,tagId:0,memberCardId:0,supportCardId:0,bonusType:0,perRank:[0,0,0,0,0]};n.planner.event.effects.push(...(d.length?d:[c[0]??h]).map(g=>({...h,resourceType:g.resourceType,bonusType:g.bonusType,perRank:[...g.perRank],[s]:u}))),X(n)}function Jc(n,e){let t=n.catalog,r=a=>!a.memberCardId&&!a.supportCardId,s=(a,o)=>{let c=a==="attribute"?"cardType":a==="band"?"bandId":"characterId";e.effects.some(l=>r(l)&&l[c]===o)?e.effects=e.effects.filter(l=>!r(l)||l[c]!==o):Es(n,a,o),X(n)},i=a=>{let o=a==="members"?"memberCardId":"supportCardId",c=a==="members"?"member":"snap",l=[...new Set(e.effects.map(u=>u[o]).filter(Boolean))],d=()=>{n.slotPicker={target:"selection",kind:a,ids:l,change:u=>{e.effects=e.effects.filter(h=>!h[o]||u.includes(h[o]));for(let h of u)l.includes(h)||Es(n,c,h);X(n)}},X(n)};return p`
      <section class="stack">
        ${V({icon:a==="members"?"person":"photo_library",label:n.t(a==="members"?"members":"snapshots",a==="members"?"Members":"Snapshots"),level:3})}
        ${ae(T(n,`addBonus.${c}`),d)}
        ${l.length?p`
                <div class=${`collection collection--${a==="members"?"member":"support"}`}>
                  ${l.map(u=>Ve({...t.cardOptions(a,u),onOpen:d}))}
                </div>
              `:k}
      </section>
    `};return p`
    <div class="stack">
      <section class="stack">
        ${V({icon:"palette",label:n.common("catalog.fields.attribute","Attribute"),level:3})}
        <div class="cluster">
          ${[1,2,3,4,5].map(a=>qt({label:t.attributeName(a),image:t.attributeIcon(a),selected:e.effects.some(o=>r(o)&&o.cardType===a),onToggle:()=>s("attribute",a)}))}
        </div>
      </section>
      <section class="stack">
        ${V({icon:"groups",label:n.common("catalog.fields.band","Band"),level:3})}
        <div class="cluster">
          ${Object.keys(n.publicData.bands).map(Number).map(a=>qt({label:t.bandName(a),image:t.bandIcon(a),selected:e.effects.some(o=>r(o)&&o.bandId===a),onToggle:()=>s("band",a)}))}
        </div>
      </section>
      ${ue(n,"bonus-characters",n.common("navigation.characters","Characters"),p`
          <div class="cluster">
            ${[...n.master.characters.keys()].map(a=>qt({label:t.characterName(a),image:t.characterFace(a),selected:e.effects.some(o=>r(o)&&o.characterId===a),onToggle:()=>s("character",a)}))}
          </div>
        `)}
      ${i("members")}${i("snaps")}
      ${ue(n,"bonuses",T(n,"bonusDetails"),Kc(n,e))}
    </div>
  `}function Kc(n,e){let t=n.catalog;return p`
    <div id=${qe("bonuses")} class="stack">
      <div class="cluster">
        ${["attribute","band","character","member","snap"].map(r=>ae(T(n,`addBonus.${r}`),()=>Es(n,r)))}
      </div>
      ${e.effects.map((r,s)=>ue(n,`bonus-${s}`,`${T(n,"bonusRule")} ${s+1}`,p`
            <div class="stack">
              ${Q(n,T(n,"bonusTarget"),r.resourceType,[{value:2,label:n.t("members","Members")},{value:3,label:n.t("snapshots","Snapshots")}],i=>r.resourceType=i)}
              ${Q(n,n.t("eventBonus","Event bonus"),r.bonusType,[{value:0,label:T(n,"pointBonus")},{value:1,label:T(n,"itemBonus")},{value:2,label:T(n,"parameterBonus")}],i=>r.bonusType=i)}
              ${Q(n,n.common("catalog.fields.attribute","Attribute"),r.cardType,[{value:0,label:at(n)},...Rs(n)],i=>r.cardType=i)}
              ${Q(n,n.common("catalog.fields.band","Band"),r.bandId,[{value:0,label:at(n)},...Object.keys(n.data.bands).map(Number).map(i=>({value:i,label:t.bandName(i)}))],i=>r.bandId=i)}
              ${Q(n,n.common("catalog.fields.character","Character"),r.characterId,[{value:0,label:at(n)},...Object.keys(n.data.characters).map(Number).map(i=>({value:i,label:t.characterName(i)}))],i=>r.characterId=i)}
              ${r.resourceType===2?Q(n,n.t("members","Members"),r.memberCardId,[{value:0,label:at(n)},...rn(n,"members")],i=>{r.memberCardId=i,r.supportCardId=0}):Q(n,n.t("snapshots","Snapshots"),r.supportCardId,[{value:0,label:at(n)},...rn(n,"snaps")],i=>{r.supportCardId=i,r.memberCardId=0})}
              ${sn([T(n,"cardRank"),n.t("eventBonus","Event bonus")],r.perRank.map((i,a)=>p`
                    <tr>
                      <th scope="row">${a+1}</th>
                      <td>
                        ${re(n,`bonuses-${s}-${a}`,`${n.t("eventBonus","Event bonus")} (%)`,i/100,o=>{let c=[...r.perRank];c[a]=Math.round(o*100),r.perRank=c},0,2147483647/100,.01)}
                      </td>
                    </tr>
                  `))}
              ${ue(n,`bonus-extra-${s}`,T(n,"advanced"),re(n,`bonuses-tag-${s}`,T(n,"tagId"),r.tagId,i=>r.tagId=i))}
              <button
                class="button button--text"
                type="button"
                @click=${()=>{e.effects.splice(s,1),X(n)}}
              >
                ${n.common("common.actions.remove","Remove")}
              </button>
            </div>
          `))}
    </div>
  `}function Wc(n){let e=n.planner,t=e.event,r=n.catalog,s=l=>l===null?"":new Date(l+9*36e5).toISOString().slice(0,16),i=l=>l?Date.parse(l+":00+09:00"):null,a=e.eventRank,o=l=>l.find(d=>d.rank===a)?.value??0,c=(l,d)=>{let u=l.find(h=>h.rank===a);u?u.value=d:l.push({rank:a,value:d})};return p`
    <div class="stack">
      ${F({label:T(n,"customEvent"),value:e.eventTab,options:[{value:"basic",label:T(n,"basic")},{value:"bonuses",label:T(n,"bonusTab")},{value:"rewards",label:T(n,"settlement")}],onSelect:l=>{e.eventTab=l,X(n)}})}
      ${e.eventTab==="basic"?p`
              <div class="stack">
                ${xt(n,"name",T(n,"eventName"),t.name,l=>t.name=l)}
                ${Q(n,T(n,"eventType"),t.eventType,[...new Set([1,...Object.values(n.publicData.events).map(l=>Number(l.eventType)).filter(Number.isFinite)])].map(l=>({value:l,label:l===1?T(n,"challengeEvent"):T(n,"eventType")+" "+l})),l=>t.eventType=l)}
                ${ue(n,"dates",T(n,"dates"),p`
                    <div class="stack">
                      ${xt(n,"dates-start",T(n,"startAt"),s(t.startAt),l=>t.startAt=i(l),"datetime-local")}
                      ${xt(n,"dates-end",T(n,"endAt"),s(t.endAt),l=>t.endAt=i(l),"datetime-local")}
                    </div>
                  `)}
                <section class="stack">
                  ${V({icon:"music_note",label:T(n,"normalSongs"),level:3})}
                  ${ae(t.rules.normalSongs.length?n.t("planner.songCount","{count} songs",{count:t.rules.normalSongs.length}):at(n),()=>Bo(n,!1))}
                  ${t.rules.normalSongs.length?ae(at(n),()=>{t.rules.normalSongs=[],X(n)}):k}
                </section>
                <section class="stack">
                  ${V({icon:"swords",label:T(n,"challengeSongs"),level:3})}
                  ${ae(T(n,"chooseSongs"),()=>Bo(n,!0))}
                  ${t.challenges.map((l,d)=>p`
                      <div class="stack">
                        <div class="row">
                          <strong class="row__spacer">${r.songTitle(l.songId)}</strong>
                          ${dr(n,()=>t.challenges.splice(d,1))}
                        </div>
                        ${Q(n,T(n,"challengeAttribute"),l.attribute,Rs(n,!0),u=>l.attribute=u)}
                      </div>
                    `)}
                </section>
              </div>
            `:e.eventTab==="bonuses"?Jc(n,t):p`
                <div class="stack">
                  ${ue(n,"rewards",T(n,"rankRewards"),p`
                      <div class="stack">
                        ${Q(n,T(n,"rankLabel"),a,ur(n),l=>e.eventRank=l)}
                        ${re(n,"rewards-live",T(n,"normalPt"),o(t.livePoints),l=>c(t.livePoints,l))}
                        ${re(n,"rewards-challenge",T(n,"challengePt"),o(t.challengePoints),l=>c(t.challengePoints,l))}
                        ${re(n,"rewards-cp","CP",o(t.rules.liveChallengePoints),l=>c(t.rules.liveChallengePoints,l))}
                      </div>
                    `)}
                  ${sn([T(n,"rankLabel"),T(n,"normalPt"),T(n,"challengePt"),"CP"],t.livePoints.map(l=>p`
                        <tr>
                          <th scope="row">${ur(n).find(d=>d.value===l.rank)?.label??l.rank}</th>
                          <td>${l.value}</td>
                          <td>${t.challengePoints.find(d=>d.rank===l.rank)?.value??0}</td>
                          <td>${t.rules.liveChallengePoints.find(d=>d.rank===l.rank)?.value??0}</td>
                        </tr>
                      `))}
                  ${Q(n,T(n,"eventBadge"),t.itemId,[{value:0,label:T(n,"customBadge")},...Object.values(n.publicData.events).flatMap(l=>{let d=l.eventItem;return d?[{value:Number(d.resourceId??d.id),label:r.text(d.name)||r.text(l.title)}]:[]})],l=>{let d=t.itemId||t.id;t.itemId=l;for(let u of[...t.liveRewards,...t.challengeRewards])u.resourceType===1&&u.resourceId===d&&(u.resourceId=l||t.id)})}
                  ${ue(n,"live-drops",T(n,"normalDrops"),Po(n,t.liveRewards,"live"))}
                  ${ue(n,"challenge-drops",T(n,"challengeDrops"),Po(n,t.challengeRewards,"challenge"))}
                  ${ue(n,"boosts",T(n,"normalBoosts"),Oo(n,t.rules.boosts,"live"))}
                  ${ue(n,"challenge-boosts",T(n,"challengeBoosts"),Oo(n,t.rules.challengeBoosts,"challenge"))}
                  ${ue(n,"normal-ranks",T(n,"normalRanks"),Lo(n,t.rules.normalRanks,"live"))}
                  ${ue(n,"challenge-ranks",T(n,"challengeRanks"),Lo(n,t.rules.challengeRanks,"challenge"))}
                </div>
              `}
    </div>
  `}function Xc(n){let e=n.planner,t=n.catalog,r=n.settings.eventId,s=e.libraryScope==="events"&&r!==null&&!n.searchSettings.manualEventEnabled&&t.events().some(i=>i.id===r);return p`
    <div class="stack">
      <div class="cluster">
        ${e.libraryScope==="cards"?p`
                ${ae(T(n,"newMember"),()=>e.editCard("members"))}${ae(T(n,"newSnap"),()=>e.editCard("snaps"))}
              `:p`${ae(T(n,"newEvent"),()=>e.editEvent())}
                ${s?ae(T(n,"copyEvent"),()=>e.editEvent(void 0,r)):k}`}
      </div>
      ${e.libraryScope==="cards"&&e.cards.length?p`
              <ul class="list">
                ${e.cards.map(i=>p`
                    <li class="list-item list-item--two-line">
                      <img
                        class="list-item__leading"
                        src=${t.cardOptions(i.kind,i.id)?.image??""}
                        alt=""
                        width="48"
                        height="48"
                        loading="lazy"
                      />
                      <span class="list-item__body">
                        <strong class="list-item__headline">${i.name}</strong>
                        <span class="list-item__supporting">
                          ${i.characterIds.map(a=>t.characterName(a)).join(" / ")}
                        </span>
                      </span>
                      <span class="list-item__trailing">
                        ${D({icon:"edit",label:n.t("planner.edit","Edit"),onClick:()=>e.editCard(i.kind,i.id)})}${dr(n,()=>e.deactivate("card",i.id))}
                      </span>
                    </li>
                  `)}
              </ul>
            `:k}
      ${e.libraryScope==="events"&&e.events.length?p`
              <ul class="list">
                ${e.events.map(i=>p`
                    <li class="list-item list-item--two-line">
                      <span class="list-item__body">
                        <strong class="list-item__headline">${i.name}</strong>
                        <span class="list-item__supporting">
                          ${n.t("planner.songCount","{count} songs",{count:i.challenges.length})}
                        </span>
                      </span>
                      <span class="list-item__trailing">
                        ${D({icon:"edit",label:n.t("planner.edit","Edit"),onClick:()=>e.editEvent(i.id)})}${dr(n,()=>e.deactivate("event",i.id))}
                      </span>
                    </li>
                  `)}
              </ul>
            `:k}
      <div class="cluster">
        ${ae(n.common("common.actions.import","Import"),()=>e.import())}${ae(n.common("common.actions.export","Export"),()=>void e.export())}
      </div>
    </div>
  `}function qo(n){let e=n.planner;if(!e.dialog||!n.catalog)return k;let t=T(n,e.dialog==="library"?e.libraryScope==="events"?"manageEvents":"manageCards":e.dialog==="event"?"customEvent":"hypotheticalCard"),r=()=>e.close();return p`
    <dialog class="dialog" aria-labelledby="tb-planner-title" ${ie(r)}>
      <header class="dialog__header">
        <h2 id="tb-planner-title">${t}</h2>
      </header>
      <div class="dialog__body">
        ${e.error?p`
                <p class="field-error" role="alert">${e.error}</p>
              `:k}
        ${e.submitted&&e.issues().length?p`
                <nav aria-label=${T(n,"invalidFields")}>
                  <ul class="list">
                    ${e.issues().map(s=>p`
                        <li>
                          <a
                            class="button button--text"
                            href=${"#"+qe(s)}
                            @click=${async i=>{i.preventDefault(),e.event&&(e.eventTab=["name","dates"].includes(s)?"basic":s==="bonuses"?"bonuses":"rewards");let a={dates:["dates"],bonuses:["bonuses"],rewards:["rewards","live-drops","challenge-drops"],boosts:["boosts","challenge-boosts"],ranks:["normal-ranks","challenge-ranks"],skills:e.card?.skills.map((c,l)=>`skill-${l}`)??[]};for(let c of a[s]??[])e.expanded.add(c);X(n),await n.updateComplete;let o=n.querySelector("#"+qe(s))??n.querySelector("#"+qe(a[s]?.[0]??s)+"-trigger");o?.scrollIntoView({block:"center"}),(o?.querySelector("md-outlined-text-field,md-outlined-select,button")??o)?.focus()}}
                          >
                            ${T(n,"need."+s)}
                          </a>
                        </li>
                      `)}
                  </ul>
                </nav>
              `:k}
        ${e.dialog==="library"?Xc(n):e.dialog==="card"?Vc(n):Wc(n)}
      </div>
      <footer class="dialog__actions">
        ${e.dialog==="library"?ae(n.common("common.actions.close","Close"),r):p`
                <button class="button button--text" type="button" @click=${()=>e.open(e.event?"events":"cards")}>
                  ${n.common("common.actions.cancel","Cancel")}
                </button>
                <button class="button" type="button" @click=${()=>e.save()}>${n.t("planner.save","Save")}</button>
              `}
      </footer>
    </dialog>
  `}function No(n){let e=n.slotPicker;if(!e)return k;let t=n.catalog,r=e.kind,s="target"in e,i=s&&e.target==="manual-event",a="growth"in e,o=a?n.teamGrowth.source:null,c=n.settings.manualEvent,l=n.master.events.get(c.templateId),d=i&&l?Zi(l,n.master)?.[r]??[]:[],u=s?new Set(e.ids.map(String)):void 0,h=()=>{n.slotPicker=null,n.slotFilters={...n.slotFilters,query:"",bands:[],characters:[],attributes:[],rarities:[],facets:{}},n.slotFiltersOpen=!1,n.requestUpdate()},g={...n.slotFilters,kind:r},f=v=>{n.slotFilters={...g,...v},n.requestUpdate()},m=s||n.tab!=="song-comparison"&&n.searchSettings.scope==="theoretical",y=r==="members"?n.view.members:n.view.snaps,w=jt(n,r,(o?o.input[r].map(v=>v.cardId):m?Object.keys(r==="members"?t.data.members:t.data.snapshots).map(Number):[...y.keys()]).filter(v=>Wt(n,r,v,g))),x=o?n.teamGrowth.choice.kind===r?o.input[r].find(v=>v.key===n.teamGrowth.choice.key)?.cardId??null:null:"slot"in e?r==="members"?n.manual.members[e.slot]:n.manual.snaps[e.slot]:null;return yt({id:"tb-slot-picker",managed:a,title:r==="members"?n.t("pickMember","Choose a member"):n.t("pickSnap","Choose a snap"),closeLabel:n.common("common.actions.close","Close"),close:h,searchLabel:n.common("common.actions.search","Search"),filterLabel:n.t("filters","Filters"),filtersOpen:n.slotFiltersOpen,toggleFilters:()=>{n.slotFiltersOpen=!n.slotFiltersOpen,n.requestUpdate()},query:g.query,search:v=>f({query:v}),filterLayout:"facets",filters:p`${Xt(n,g,f)}${Nn(n.common("common.actions.sort","Sort"),zn(n,r))}`,kind:r==="members"?"member":"support",quickFilters:a?F({label:n.t("growthComparison.card","Card"),value:r,options:[{value:"members",label:n.common("navigation.memberCards","Members")},{value:"snaps",label:n.common("navigation.supportCards","Snaps")}],onSelect:v=>{n.slotPicker={growth:!0,kind:v},n.requestUpdate()}}):k,items:w.map(v=>{let b=o?.input[r].find($=>$.cardId===v),S=b?t.resolvedGrowth(r,b,o.input.unknownPolicy):void 0;return{...t.cardOptions(r,v,S),value:String(v)}}),selected:x==null?"":String(x),selectedValues:u,select:v=>{let b=Number(v);if(o){let $=o.input[r].find(M=>M.cardId===b);n.teamGrowth.select({kind:r,key:$.key,actions:["level"],target:"next"}),h();return}if("target"in e){n.slotPicker={...e,ids:e.ids.includes(b)?e.ids.filter($=>$!==b):[...e.ids,b]},n.requestUpdate();return}if(!("slot"in e))return;let S=r==="members"?[...n.manual.members]:[...n.manual.snaps];for(let $=0;$<S.length;$++)S[$]===b&&(S[$]=null);S[e.slot]=b,n.manual=r==="members"?{...n.manual,members:S}:{...n.manual,snaps:S},n.manualResults=null,n.manualSuggestions=null,h()},countLabel:n.t("cardCount","{count} cards",{count:w.length}),emptyLabel:n.t("noMatches","No cards match"),preview:"target"in e?p`<button class="button button--full" @click=${()=>{if(e.target==="selection"){e.change(e.ids),h();return}if(!d.length)return;let v=e.ids.map(b=>c[r].find(S=>S.cardId===b)??{cardId:b,tier:d[0].key});n.updateSettings({manualEvent:{...c,[r]:v}}),h()}}>${n.common("common.actions.confirm","Confirm")} / ${n.t("cardCount","{count} cards",{count:e.ids.length})}</button>`:"slot"in e&&r==="snaps"?p`
            <button
              class="button button--text"
              type="button"
              @click=${()=>{let v=[...n.manual.snaps];v[e.slot]=null,n.manual={...n.manual,snaps:v},n.manualResults=null,h()}}
            >
              ${O("hide_image",18)}${n.t("noSnap","No snap")}
            </button>
          `:p``})}var St="native-reward-settlement-v22";function Y(n){let e=t=>t instanceof Map?[...t].sort(([r],[s])=>String(r).localeCompare(String(s))).map(([r,s])=>[r,e(s)]):t instanceof Set?[...t].sort().map(e):Array.isArray(t)?t.map(e):t&&typeof t=="object"?Object.fromEntries(Object.entries(t).sort(([r],[s])=>r.localeCompare(s)).map(([r,s])=>[r,e(s)])):t;return JSON.stringify(e(n))}async function As(n){let e=new TextEncoder().encode(Y(n)),t=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(t)].map(r=>r.toString(16).padStart(2,"0")).join("")}var Ms=(n,e,t,r=null)=>As({version:St,dataFingerprint:e,owner:t,request:n,cycle:r});async function Fo(n,e,t=null){if(n.goal.kind!=="event"||n.goal.ranking!=="pt-only"||n.goal.route!=="live"||n.goal.measure!=="points"&&n.goal.measure!=="items")throw new Error("pt-mode");if(t&&(!t.songs.length||!Number.isSafeInteger(t.consumption)||t.consumption<=0))throw new Error("pt-cycle-input");let r=[],s=(i,a,o)=>r.push(...o.flatMap(c=>a.map(l=>({route:i,measure:l,song:{...c},status:"queued",result:null,error:""}))));return t&&s("challenge",[n.goal.measure],t.songs),s("live",[n.goal.measure],n.goal.songs),{...structuredClone(e),version:St,id:crypto.randomUUID(),fingerprint:await Ms(n,e.dataFingerprint,e.owner,t),request:structuredClone(n),cycle:structuredClone(t),scope:"top-one",createdAt:Date.now(),updatedAt:Date.now(),tasks:r}}var Do=n=>`${n.songId}:${n.difficulty}`,zo=(n,e)=>e.key-n.key||(e.event?.otherMean??0)-(n.event?.otherMean??0)||(e.score?.mean??0)-(n.score?.mean??0)||n.song.songId-e.song.songId||n.song.difficulty-e.song.difficulty||Y([n.members,n.snaps]).localeCompare(Y([e.members,e.snaps]));function hr(n,e="points",t="live"){let r=new Map;for(let s of n.tasks)if(!(s.measure!==e||s.route!==t))for(let i of s.result?.hits??[]){if(!i.song||!i.event||!Number.isFinite(i.event.mean))continue;let a=r.get(i.song.songId);(!a||zo(i,a)<0)&&r.set(i.song.songId,i)}return[...r.values()].sort(zo)}function an(n,e){let t=n.tasks.filter(r=>r.route==="challenge"&&r.measure===e);return!t.length||!t.every(r=>(r.status==="complete"||r.status==="empty")&&r.result?.proven)?null:hr(n,e,"challenge")[0]??null}function Uo(n,e){if(n.scope==="all"||e.route!=="live")return;let t=hr(n,e.measure)[(n.scope==="top-one"?1:5)-1];if(t)return{key:t.key,comparison:"gte",contextKey:n.fingerprint,ranking:"reward-mean-score-v2"}}var pr=n=>(n.status==="complete"||n.status==="empty")&&n.result?.proven===!0;function Ts(n,e){let t=e.result?.exclusion,r=Uo(n,e);return!!t&&!!r&&e.status==="pruned"&&t.contextKey===n.fingerprint&&t.ranking===r.ranking&&(t.key<r.key||t.key===r.key&&(t.comparison==="gte"||r.comparison==="gt"))}var jo=n=>n.tasks.length>0&&n.tasks.every(pr),gr=n=>n.tasks.length>0&&n.tasks.every(e=>pr(e)||Ts(n,e)),mr=class{constructor(e,t,r,s){this.engine=e;this.store=t;this.changed=r;this.storageFailed=s}running=!1;stopped=!1;stop(){this.stopped=!0,this.engine.cancel()}async run(e,t=e.scope??"top-one",r=wn()+3e3){if(this.running)throw new Error("pt-busy");this.running=!0,this.stopped=!1,e.scope=t;let s=0,i=0,a=async(o=!1)=>{if(e.updatedAt=Date.now(),(o||e.updatedAt-i>=100)&&(i=e.updatedAt,this.changed(e)),!(!o&&e.updatedAt-s<1e3)){s=e.updatedAt;try{await this.store.save(e)}catch{this.storageFailed()}}};try{for(let l of e.tasks)!pr(l)&&!Ts(e,l)&&(l.status="queued",l.error="");await a();let o=[...e.tasks].sort((l,d)=>+(l.route==="live")-+(d.route==="live")||l.song.songId-d.song.songId||l.song.difficulty-d.song.difficulty||+(l.measure==="items")-+(d.measure==="items")),c=async l=>{if(this.stopped||!Ci(r))return!1;if(pr(l)||Ts(e,l))return!0;let d=e.cycle&&l.route==="live"?an(e,l.measure):null;if(e.cycle&&l.route==="live"&&!d)return!0;if(l.status="running",await a(),this.stopped)return l.status="queued",!1;try{let u=structuredClone(e.request);if(u.goal.kind!=="event")throw new Error("pt-mode");u.goal.songs=[l.song],u.goal.route=l.route,u.goal.measure=l.measure,delete u.rewardCutoff,u.cutoff=Uo(e,l),u.deadline=r,u.contextKey=e.fingerprint,u.seeds=l.result?.hits??[],l.route==="challenge"&&(u.goal.consumption=e.cycle.consumption,delete u.goal.gekiso),d&&(u.goal.cpExchange=Kt(d.event.rewardSum,d.event.orders,e.cycle.consumption));let h=l.result?.hits??[],g=m=>{let y=m.results.find(w=>w.song&&Do(w.song)===Do(l.song));if(y){if(!y.hits.length&&!y.proven&&(y.hits=l.result?.hits.length?l.result.hits:h),y.exclusion&&y.hits.length&&y.hits[0].key>=y.exclusion.key&&(y.proven=!0,y.bound=null,delete y.exclusion),l.result=y,m.stopReason==="error"){l.status="failed",l.error=m.error??"engine-error";return}l.status=y.exclusion?"pruned":y.proven?y.hits.length?"complete":"empty":"partial"}},f=await this.engine.run(u,void 0,m=>{if(m.contextKey!==e.fingerprint)return;let y=!e.tasks.some(w=>w.result?.hits.length)&&m.response.overall.length>0;g(m.response),a(y)});g(f)}catch(u){if(this.stopped)return l.status="queued",!1;l.status="failed",l.error=u instanceof Error?u.message:String(u)}return await a(),!0};for(let l of o)if(!await c(l))break}finally{for(let o of e.tasks)o.status==="running"&&(o.status="queued");this.running=!1,await a(!0)}}};function Bs(n,e){let t=n.hit,r=e.hit,s=(o,c)=>c.filter(l=>l&&!o.includes(l)).length,i=new Map(t.members.map((o,c)=>[o,t.snaps[c]??null])),a=(o,c,l)=>o.input[c].find(d=>d.key===l);return{members:s(t.members,r.members),snaps:s(t.snaps,r.snaps),bindings:r.members.filter((o,c)=>i.has(o)&&i.get(o)!==(r.snaps[c]??null)).length,leader:t.members[0]!==r.members[0],growth:["members","snaps"].reduce((o,c)=>o+r[c].filter(l=>l&&t[c].includes(l)&&Y(a(n,c,l))!==Y(a(e,c,l))).length,0)}}function Ho(n,e){if(n.conditions!==e.conditions||n.metric.id!==e.metric.id||n.metric.unit!==e.metric.unit)return null;let t=e.metric.value-n.metric.value;return{absolute:t,relative:n.metric.value>0&&e.metric.relative?t/n.metric.value*100:null}}function Go(n,e,t,r,s,i){let a=[n.members.map(o=>t.members.find(c=>c.key===o)),n.snaps.map(o=>t.snaps.find(c=>c.key===o))];return Y([r,e,s.route,s.measure,n.song,n.members,n.snaps,a,i])}function on(n,e,t,r,s,i,a=Ge(n,e)){let o={...s.goal};e.aggregate||delete o.songs;let c=e.song?n.catalog.songIdentity(e.song.songId):n.data.identity,l=e.score?.orders.length?Qr(n,e):void 0;return{id:Go(e,t,s,i,a,l),source:t,hit:structuredClone(e),settings:structuredClone(a),input:s,conditions:Y([c,e.song,o,s.player,s.songRules,s.aggregation,s.unknownPolicy,r.placements,...o.kind==="event"||o.kind==="plan"?[a.route,a.measure,a.boosts,a.challengePoints,he(n)?n.pt.job?.cycle:a.ptCycle]:[]]),metric:Pe(n,e,a),listed:!0,proven:r.proven,placements:r.placements?.slice(),selectedOrder:l}}var fr=class{session="";scope="";items=[];baseline="";candidate="";open=!1;sync(e){let t=he(e),r=t?e.pt.job?.id??"":e.resultSession,s=Y([e.snapshot?.owner,e.data?.identity,e.data?.crossServer?.identities]);if(s!==this.scope?this.items=[]:r!==this.session&&(this.items=this.items.filter(a=>a.source==="manual")),(r!==this.session||s!==this.scope)&&(this.session=r,this.scope=s,this.items.some(a=>a.id===this.baseline)||(this.baseline=this.items[0]?.id??""),this.candidate="",this.open=!1),!this.items.length)return;let i=this.sources(e);this.items=this.items.map(a=>i.find(o=>o.id===a.id)??{...a,listed:!1})}sources(e){let t=(c,l)=>Y([c,l.song,l.members,l.snaps]),r=new Set(this.items.map(c=>t(c.source,c.hit)));if(he(e)){let c=e.pt.job;return c?c.tasks.flatMap(l=>l.result?.hits.filter(d=>r.has(t(`${l.route}:${l.measure}`,d))).map(d=>on(e,d,`${l.route}:${l.measure}`,l.result,c.request,c.id,Ge(e,d,l)))??[]):[]}let s=e.results?.cpChallenge,i=s?zt(e,s):null,a=s&&i&&r.has(t("cp-challenge",s))?[on(e,s,"cp-challenge",{proven:!0},i,e.resultSession)]:[];return[...e.manualResultsFor===e.manualContext()?(e.manualResults??[]).map(ds).filter(c=>r.has(t("manual",c))).map(c=>{let l=Xr(c);return on(e,c,"manual",{proven:!1},l.input,l.session,l.settings)}):[],...a,...e.resultInputs?e.results?.results.flatMap(c=>c.hits.filter(l=>r.has(t("build",l))).map(l=>on(e,l,"build",c,e.resultInputs,e.resultSession)))??[]:[]]}source(e,t){let r=Xr(t);if(r)return e.manualResultsFor===e.manualContext()&&e.manualResults?.some(c=>ds(c)===t)?{input:r.input,settings:r.settings,session:r.session,source:"manual",result:{proven:!1}}:null;if(t===e.results?.cpChallenge){let c=zt(e,t);return c?{result:{proven:!0},input:c,source:"cp-challenge",settings:Ge(e,t)}:null}let s=he(e),i=s?e.pt.job?.tasks.find(c=>c.result?.hits.includes(t)):void 0,a=s?i?.result:e.results?.results.find(c=>c.hits.includes(t)),o=s?e.pt.job?.request:e.resultInputs;return a&&o?{result:a,input:o,source:i?`${i.route}:${i.measure}`:"build",settings:Ge(e,t,i)}:null}idFor(e,t){let r=this.source(e,t);return r?Go(t,r.source,r.input,r.session??this.session,r.settings,t.score?.orders.length?Qr(e,t):void 0):null}find(e,t){let r=this.source(e,t);return r?on(e,t,r.source,r.result,r.input,r.session??this.session,r.settings):null}toggle(e,t){this.sync(e);let r=this.find(e,t);r&&(this.items.some(s=>s.id===r.id)?this.remove(r.id):this.items.length===3?Dn(e.t("compareLimit","Compare up to 3 teams")):(this.items.push(r),this.baseline||=r.id),e.requestUpdate())}remove(e){this.items=this.items.filter(t=>t.id!==e),this.baseline===e&&(this.baseline=this.items[0]?.id??""),this.items.length<2&&(this.open=!1)}title(e,t){return t.hit.song?`${e.catalog.songTitle(t.hit.song.songId)} / ${e.catalog.difficultyLabel(t.hit.song.songId,t.hit.song.difficulty)}`:t.metric.label}titleView(e,t){return t.hit.song?p`<span lang=${e.catalog.songTitleLanguage(t.hit.song.songId)}>${e.catalog.songTitle(t.hit.song.songId)}</span> / ${e.catalog.difficultyLabel(t.hit.song.songId,t.hit.song.difficulty)}`:t.metric.label}tray(e){return this.items.length?p`
          <div class="tb-compare-tray" aria-label=${e.t("comparison","Comparison")}>
            <div class="cluster">
              ${this.items.map(t=>Cn(`#${this.items.indexOf(t)+1} / ${this.title(e,t)}`,e.common("common.actions.remove","Remove"),()=>{this.remove(t.id),e.requestUpdate()},p`#${this.items.indexOf(t)+1} / ${this.titleView(e,t)}`))}
            </div>
            <button
              class="button button--tonal"
              ?disabled=${this.items.length<2}
              @click=${()=>{this.open=!0,e.requestUpdate()}}
            >
              ${e.t("compareTeams","Compare teams")} / ${this.items.length}/3
            </button>
          </div>
        `:k}dialog(e){if(!this.open||this.items.length<2)return k;let t=this.items.find(l=>l.id===this.baseline);this.items.some(l=>l.id===this.candidate&&l.id!==t.id)||(this.candidate=this.items.find(l=>l.id!==t.id).id);let r=(l,d=0)=>new Intl.NumberFormat(e.locale,{maximumFractionDigits:d}).format(l),s=()=>{this.open=!1,e.requestUpdate()},i=(l,d=0)=>`${l>0?"+":""}${r(l,d)}`,a=this.items.some(l=>r(l.metric.value,l.metric.digits).length>12),o=l=>l.id===t.id?"is-baseline":l.id===this.candidate?"is-candidate":"is-hidden-mobile",c=(l,d,u=!1)=>p`
      <tr class=${u?"tb-comparison-primary":""}>
        <th scope="row">${l}</th>
        ${this.items.map(h=>p`
            <td
              class=${o(h)}
              data-comparison-side=${e.t(h.id===t.id?"comparisonBaseline":"comparisonCandidate",h.id===t.id?"Baseline":"Candidate")}
            >
              ${d(h)}
            </td>
          `)}
      </tr>
    `;return p`
      <dialog
        class="dialog tb-comparison"
        data-managed-modal
        ${ie(s)}
        aria-label=${e.t("compareTeams","Compare teams")}
      >
        <header class="row row--between">
          <strong>${e.t("compareTeams","Compare teams")}</strong>
          <div class="cluster tb-comparison-tools">
            ${e.analysis.canCompareLuck(this.items)?p`<button class="button button--tonal" type="button" aria-haspopup="dialog"
              @click=${()=>{this.open=!1,e.analysis.openLuckEntries(this.items)}}
            >${e.t("analysis.luckComparison","LUCK pt comparison")}</button>`:k}
            ${this.items.length>=2&&this.items.every(l=>l.input.goal.kind==="gekiso")?p`
                    <button
                      class="button button--tonal"
                      type="button"
                      aria-haspopup="dialog"
                      @click=${()=>{this.open=!1,e.analysis.openPressureEntries(this.items)}}
                    >
                      ${e.t("analysis.pressure","Opponent scenarios")}
                    </button>
                  `:k}
            ${D({icon:"close",label:e.common("common.actions.close","Close"),onClick:s})}
          </div>
        </header>
        ${this.items.some(l=>l.source!=="manual")&&(he(e)?e.pt.stale:e.stale)?p`
                <span role="status">${e.t("stale","Conditions changed")}</span>
              `:k}
        <div class="tb-comparison-body">
          <div class="tb-comparison-picker">
            <md-outlined-select
              label=${e.t("comparisonCandidate","Candidate")}
              .value=${this.candidate}
              @change=${l=>{this.candidate=l.target.value,e.requestUpdate()}}
            >
              ${this.items.filter(l=>l.id!==t.id).map(l=>p`
                    <md-select-option value=${l.id}><div slot="headline">#${this.items.indexOf(l)+1} / ${this.titleView(e,l)} / ${e.catalog.cardName("members",He(l.hit.members[0]))}</div></md-select-option>
                  `)}
            </md-outlined-select>
          </div>
          <table class=${`tb-comparison-table${a?" tb-comparison-table--wide":""}`}>
            <thead>
              <tr>
                <th scope="col">${e.t("comparison","Comparison")}</th>
                ${this.items.map(l=>p`
                    <th scope="col" class=${o(l)}>
                      <span class="tb-comparison-title">
                        #${this.items.indexOf(l)+1} / ${this.titleView(e,l)}
                      </span>
                      <button
                        class="button button--text"
                        aria-pressed=${l.id===t.id}
                        @click=${()=>{this.baseline=l.id,e.requestUpdate()}}
                      >
                        ${e.t(l.id===t.id?"comparisonBaseline":"setBaseline",l.id===t.id?"Baseline":"Set as baseline")}
                      </button>
                    </th>
                  `)}
              </tr>
            </thead>
            <tbody>
              ${c(e.t("criterion","Score goal"),l=>p`
                  <span>${l.metric.label}</span>
                  <small>
                    ${l.source==="manual"?e.t("manualTeam","Build a team by hand"):l.proven&&l.hit.gekiso?.sampled?e.t("sampledProven","Optimal within samples"):e.t(l.proven?"proven":"recommendation",l.proven?"Proven optimal":"Recommendation")}
                  </small>
                `)}
              ${c(e.t("comparisonValue","Value"),l=>p`
                  <strong class="tb-hit__value">
                    ${r(l.metric.value,l.metric.digits)}${l.metric.unit?` ${l.metric.unit}`:""}
                  </strong>
                `,!0)}
              ${c(e.t("difference","Difference"),l=>{let d=Ho(t,l);return d?p`
                      <span class=${d.absolute?"tb-difference":"tb-equal"}>
                        ${i(d.absolute,l.metric.digits)}
                        ${l.metric.unit==="%"?e.t("percentagePoints","percentage points"):l.metric.unit}
                      </span>
                    `:"\u2014"})}
              ${c(e.t("relativeDifference","Relative change"),l=>{let d=Ho(t,l);return d?.relative!=null?p`
                      <span class=${d.relative?"tb-difference":"tb-equal"}>${i(d.relative,2)}%</span>
                    `:"\u2014"})}
              ${c(e.t("power","Power"),l=>r(l.hit.power))}
              ${this.items.some(l=>l.selectedOrder!==void 0)?c(e.t("selectedOrderScore","Selected-order score"),l=>{let d=l.selectedOrder===void 0?void 0:l.hit.score?.orders[l.selectedOrder],u=t.selectedOrder===void 0?void 0:t.hit.score?.orders[t.selectedOrder];return d===void 0?"\u2014":p`<span>${r(d)}</span>
                  ${u!==void 0&&l.conditions===t.conditions?p`<small class=${d===u?"tb-equal":"tb-difference"}>${i(d-u)}</small>`:k}`}):k}
              ${this.items.some(l=>l.hit.comboBonus!=null)?c(e.t("comboBonus","Base COMBO BONUS"),l=>l.hit.comboBonus==null?"\u2014":`\xD7${r(l.hit.comboBonus,2)}`):k}
              ${["members","snaps","bindings","growth"].map(l=>c(e.t(`diff${l}`,l),d=>{let u=Bs(t,d)[l];return p`
                    <span class=${u?"tb-difference":"tb-equal"}>${u}</span>
                  `}))}
              ${c(e.t("leader","Leader"),l=>p`
                  <span class=${Bs(t,l).leader?"tb-difference":"tb-equal"}>
                    ${Bs(t,l).leader?e.t("changed","Changed"):"\u2014"}
                  </span>
                  <small>${e.catalog.cardName("members",He(l.hit.members[0]))}</small>
                `)}
              ${c(e.t("originalConditions","Original result conditions"),l=>p`
                  ${l.input.goal.kind==="gekiso"?p`
                          <span>
                            ${e.t("gekisoPlacements","Scoring placements")}:
                            ${l.input.goal.opponents?l.placements?.join(" / ")??"\u2014":l.input.goal.ranks?.join(" / ")??l.input.goal.rank}
                          </span>
                          <span>
                            GREAT ${r(l.input.goal.accuracy.great*100,2)}% / JUST
                            ${r(l.input.goal.accuracy.just*100,2)}%
                          </span>
                        `:k}
                  ${l.input.goal.kind==="event"&&l.input.goal.gekiso&&l.settings.route!=="challenge"?p`
                          <span>
                            ${e.t("gekisoPlacements","Scoring placements")}: 1 / JUST
                            ${r(l.input.goal.gekiso.just*100,2)}%
                          </span>
                        `:k}
                  ${l.settings.goal==="event"||l.settings.goal==="plan"?p`
                          <span>
                            ${l.settings.route==="challenge"?e.t("routeChallenge","Challenge live"):l.settings.route==="skip"?e.t("routeSkip","Skip"):e.t("routeLive","Normal live")}
                            /
                            ${l.settings.route==="challenge"?`${l.settings.challengePoints} CP`:`${l.settings.boosts} Boost`}
                          </span>
                        `:k}
                  <span>
                    ${l.source==="manual"?e.t("manualTeam","Build a team by hand"):pa(e,l.settings)}
                    /
                    ${l.input.unknownPolicy==="max"?e.t("unknownMax","Count as max"):e.t("unknownMin","Count as minimum")}
                  </span>
                  ${!l.listed&&l.source!=="manual"?p`
                          <span>${e.t("outsideRanking","Outside current ranking")}</span>
                        `:k}
                `)}
              ${[0,1,2,3,4].map(l=>c(`${e.t("members","Members")} ${l+1}`,d=>p`
                    <strong>${e.catalog.cardName("members",He(d.hit.members[l]))}</strong>
                    <small>
                      ${d.hit.snaps[l]?e.catalog.cardName("snaps",He(d.hit.snaps[l])):e.t("noSnap","No Snapshot")}
                    </small>
                  `))}
            </tbody>
          </table>
        </div>
      </dialog>
    `}};var ot=n=>n==="members"?["level","training","awakening","live","gekisou"]:["level","break"],Qc=["training","break","awakening","live","gekisou","level"],Vo={level:"level",training:"awake",awakening:"rank",live:"liveSkillLevel",gekisou:"gekisoSkillLevel",break:"rank"};function Ne(n){return structuredClone({members:n.members,snaps:n.snaps,player:n.player,unknownPolicy:n.unknownPolicy,goal:n.goal,constraints:n.constraints,aggregation:n.aggregation,songRules:n.songRules,k:1,timeLimitMs:n.timeLimitMs})}function ln(n,e,t){let r={status:"missing-data",steps:[],request:null},s=e[t.kind].find(g=>g.key===t.key);if(!s)return r;let i=t.kind==="members"?n.members.get(s.cardId):void 0,a=t.kind==="snaps"?n.snaps.get(s.cardId):void 0;if(!i&&!a)return r;let o=ot(t.kind),c=Qc.filter(g=>t.actions.includes(g)&&o.includes(g));if(!c.length)return r;let l=i?Ae(n,i):Me(n,a),d={...s},u=[];for(let g of c){let f=Vo[g],m=d[f];if(m==null&&t.target==="next")return{...r,status:"missing-state"};let y=l[f];if(g==="level"){let x=i?d.awake:d.rank;if(x===null&&t.target==="next")return{...r,status:"missing-state"};y=i?Hi(n,i,x??l.awake):Gi(n,a,x??l.rank)}if(m!=null&&(!Number.isInteger(m)||m<1||m>y))return{...r,status:"invalid-state"};if(m===y||m==null&&e.unknownPolicy==="max")continue;let w=t.target==="cap"?y:m+1;d[f]=w,u.push({action:g,from:m,to:w})}if(!u.length)return{...r,status:"at-cap"};let h=Ne(e);return Object.assign(h[t.kind].find(g=>g.key===t.key),Object.fromEntries(u.map(g=>[Vo[g.action],g.to]))),{status:"ready",steps:u,request:h}}function br(n,e){let t=Ne(n);if(t.timeLimitMs=null,t.members=e.members.map(r=>t.members.find(s=>s.key===r)),t.snaps=t.snaps.filter(r=>e.snaps.includes(r.key)),t.constraints={requiredMembers:[...e.members],excludedMembers:[],requiredSnaps:e.snaps.filter(r=>r!==null),excludedSnaps:[],leader:e.members[0],bindings:e.members.map((r,s)=>[r,e.snaps[s]??null]),noSnaps:e.snaps.every(r=>r===null),minBonusPercent:null},t.goal.kind==="plan")throw new Error("growth-plan-needs-route");return"songs"in t.goal&&(t.goal.songs=e.aggregate?e.aggregate.songs.map(r=>({...r.song})):e.song?[{...e.song}]:[]),t.goal.kind==="power"&&(t.goal.song=e.song),t}function lt(n,e,t){if(!Number.isSafeInteger(e)||!Number.isSafeInteger(t)||e<0||t<e)return{items:[],complete:!1,missing:[]};let r=new Map,s=new Set;for(let o of n)o.to<=e||o.to>t||(r.has(o.to)&&s.add(o.to),r.set(o.to,o));let i=[],a=new Map;for(let o=e+1;o<=t;o++){let c=r.get(o);if(!c||c.from!==o-1||s.has(o)){i.push(o);continue}for(let l of c.items){if(!l.identity||!Number.isSafeInteger(l.count)||l.count<0){i.includes(o)||i.push(o);continue}let d=(a.get(l.identity)?.count??0)+l.count;if(!Number.isSafeInteger(d)){i.includes(o)||i.push(o);continue}a.set(l.identity,{...l,count:d})}}return{items:i.length?[]:[...a.values()],complete:!i.length,missing:i}}var Ps=je`@media(forced-colors: active){:host{--md-slider-active-track-color: CanvasText;--md-slider-disabled-active-track-color: GrayText;--md-slider-disabled-active-track-opacity: 1;--md-slider-disabled-handle-color: GrayText;--md-slider-disabled-inactive-track-color: GrayText;--md-slider-disabled-inactive-track-opacity: 1;--md-slider-focus-handle-color: CanvasText;--md-slider-handle-color: CanvasText;--md-slider-handle-shadow-color: Canvas;--md-slider-hover-handle-color: CanvasText;--md-slider-hover-state-layer-color: Canvas;--md-slider-hover-state-layer-opacity: 1;--md-slider-inactive-track-color: Canvas;--md-slider-label-container-color: Canvas;--md-slider-label-text-color: CanvasText;--md-slider-pressed-handle-color: CanvasText;--md-slider-pressed-state-layer-color: Canvas;--md-slider-pressed-state-layer-opacity: 1;--md-slider-with-overlap-handle-outline-color: CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}.tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='CanvasText'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}.tickmarks::after{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/svg%3E")}:host([disabled]) .tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}}
`,vp=Ps.styleSheet;function vr(n,e,t){return n?e(n):t?.(n)}var Zc=gt(Mn(Tn(te))),z=class extends Zc{get nameStart(){return this.getAttribute("name-start")??this.name}set nameStart(e){this.setAttribute("name-start",e)}get nameEnd(){return this.getAttribute("name-end")??this.nameStart}set nameEnd(e){this.setAttribute("name-end",e)}get renderAriaLabelStart(){let{ariaLabel:e}=this;return this.ariaLabelStart||e&&`${e} start`||this.valueLabelStart||String(this.valueStart)}get renderAriaValueTextStart(){return this.ariaValueTextStart||this.valueLabelStart||String(this.valueStart)}get renderAriaLabelEnd(){let{ariaLabel:e}=this;return this.range?this.ariaLabelEnd||e&&`${e} end`||this.valueLabelEnd||String(this.valueEnd):e||this.valueLabel||String(this.value)}get renderAriaValueTextEnd(){if(this.range)return this.ariaValueTextEnd||this.valueLabelEnd||String(this.valueEnd);let{ariaValueText:e}=this;return e||this.valueLabel||String(this.value)}constructor(){super(),this.min=0,this.max=100,this.valueLabel="",this.valueLabelStart="",this.valueLabelEnd="",this.ariaLabelStart="",this.ariaValueTextStart="",this.ariaLabelEnd="",this.ariaValueTextEnd="",this.step=1,this.ticks=!1,this.labeled=!1,this.range=!1,this.handleStartHover=!1,this.handleEndHover=!1,this.startOnTop=!1,this.handlesOverlapping=!1,this.ripplePointerId=1,this.isRedispatchingEvent=!1,this.addEventListener("click",e=>{!na(e)||!this.inputEnd||(this.focus(),ta(this.inputEnd))})}focus(){this.inputEnd?.focus()}willUpdate(e){this.renderValueStart=e.has("valueStart")?this.valueStart:this.inputStart?.valueAsNumber;let t=e.has("valueEnd")&&this.range||e.has("value");this.renderValueEnd=t?this.range?this.valueEnd:this.value:this.inputEnd?.valueAsNumber,e.get("handleStartHover")!==void 0?this.toggleRippleHover(this.rippleStart,this.handleStartHover):e.get("handleEndHover")!==void 0&&this.toggleRippleHover(this.rippleEnd,this.handleEndHover)}updated(e){if(this.range&&(this.renderValueStart=this.inputStart.valueAsNumber),this.renderValueEnd=this.inputEnd.valueAsNumber,this.range){let t=(this.max-this.min)/3;if(this.valueStart===void 0){this.inputStart.valueAsNumber=this.min+t;let r=this.inputStart.valueAsNumber;this.valueStart=this.renderValueStart=r}if(this.valueEnd===void 0){this.inputEnd.valueAsNumber=this.min+2*t;let r=this.inputEnd.valueAsNumber;this.valueEnd=this.renderValueEnd=r}}else this.value??=this.renderValueEnd;if(e.has("range")||e.has("renderValueStart")||e.has("renderValueEnd")||this.isUpdatePending){let t=this.handleStart?.querySelector(".handleNub"),r=this.handleEnd?.querySelector(".handleNub");this.handlesOverlapping=Yc(t,r)}this.performUpdate()}render(){let e=this.step===0?1:this.step,t=Math.max(this.max-this.min,e),r=this.range?((this.renderValueStart??this.min)-this.min)/t:0,s=((this.renderValueEnd??this.min)-this.min)/t,i={"--_start-fraction":String(r),"--_end-fraction":String(s),"--_tick-count":String(t/e)},a={ranged:this.range},o=this.valueLabelStart||String(this.renderValueStart),c=(this.range?this.valueLabelEnd:this.valueLabel)||String(this.renderValueEnd),l={start:!0,value:this.renderValueStart,ariaLabel:this.renderAriaLabelStart,ariaValueText:this.renderAriaValueTextStart,ariaMin:this.min,ariaMax:this.valueEnd??this.max},d={start:!1,value:this.renderValueEnd,ariaLabel:this.renderAriaLabelEnd,ariaValueText:this.renderAriaValueTextEnd,ariaMin:this.range?this.valueStart??this.min:this.min,ariaMax:this.max},u={start:!0,hover:this.handleStartHover,label:o},h={start:!1,hover:this.handleEndHover,label:c},g={hover:this.handleStartHover||this.handleEndHover};return p` <div
      class="container ${Be(a)}"
      style=${Bn(i)}>
      ${vr(this.range,()=>this.renderInput(l))}
      ${this.renderInput(d)} ${this.renderTrack()}
      <div class="handleContainerPadded">
        <div class="handleContainerBlock">
          <div class="handleContainer ${Be(g)}">
            ${vr(this.range,()=>this.renderHandle(u))}
            ${this.renderHandle(h)}
          </div>
        </div>
      </div>
    </div>`}renderTrack(){return p`
      <div class="track"></div>
      ${this.ticks?p`<div class="tickmarks"></div>`:k}
    `}renderLabel(e){return p`<div class="label" aria-hidden="true">
      <span class="labelContent" part="label">${e}</span>
    </div>`}renderHandle({start:e,hover:t,label:r}){let s=!this.disabled&&e===this.startOnTop,i=!this.disabled&&this.handlesOverlapping,a=e?"start":"end";return p`<div
      class="handle ${Be({[a]:!0,hover:t,onTop:s,isOverlapping:i})}">
      <md-focus-ring part="focus-ring" for=${a}></md-focus-ring>
      <md-ripple
        for=${a}
        class=${a}
        ?disabled=${this.disabled}></md-ripple>
      <div class="handleNub">
        <md-elevation part="elevation"></md-elevation>
      </div>
      ${vr(this.labeled,()=>this.renderLabel(r))}
    </div>`}renderInput({start:e,value:t,ariaLabel:r,ariaValueText:s,ariaMin:i,ariaMax:a}){let o=e?"start":"end";return p`<input
      type="range"
      class="${Be({start:e,end:!e})}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerup=${this.handleUp}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @keydown=${this.handleKeydown}
      @keyup=${this.handleKeyup}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${o}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      aria-valuemin=${i}
      .max=${String(this.max)}
      aria-valuemax=${a}
      .step=${String(this.step)}
      .value=${String(t)}
      .tabIndex=${e?1:0}
      aria-label=${r||k}
      aria-valuetext=${s} />`}async toggleRippleHover(e,t){let r=await e;r&&(t?r.handlePointerenter(new PointerEvent("pointerenter",{isPrimary:!0,pointerId:this.ripplePointerId})):r.handlePointerleave(new PointerEvent("pointerleave",{isPrimary:!0,pointerId:this.ripplePointerId})))}handleFocus(e){this.updateOnTop(e.target)}startAction(e){let t=e.target,r=t===this.inputStart?this.inputEnd:this.inputStart;this.action={canFlip:e.type==="pointerdown",flipped:!1,target:t,fixed:r,values:new Map([[t,t.valueAsNumber],[r,r?.valueAsNumber]])}}finishAction(e){this.action=void 0}handleKeydown(e){this.startAction(e)}handleKeyup(e){this.finishAction(e)}handleDown(e){this.startAction(e),this.ripplePointerId=e.pointerId;let t=e.target===this.inputStart;this.handleStartHover=!this.disabled&&t&&!!this.handleStart,this.handleEndHover=!this.disabled&&!t&&!!this.handleEnd}async handleUp(e){if(!this.action)return;let{target:t,values:r,flipped:s}=this.action;await new Promise(requestAnimationFrame),t!==void 0&&(t.focus(),s&&t.valueAsNumber!==r.get(t)&&t.dispatchEvent(new Event("change",{bubbles:!0}))),this.finishAction(e)}handleMove(e){this.handleStartHover=!this.disabled&&Jo(e,this.handleStart),this.handleEndHover=!this.disabled&&Jo(e,this.handleEnd)}handleEnter(e){this.handleMove(e)}handleLeave(){this.handleStartHover=!1,this.handleEndHover=!1}updateOnTop(e){this.startOnTop=e.classList.contains("start")}needsClamping(){if(!this.action)return!1;let{target:e,fixed:t}=this.action;return e===this.inputStart?e.valueAsNumber>t.valueAsNumber:e.valueAsNumber<t.valueAsNumber}isActionFlipped(){let{action:e}=this;if(!e)return!1;let{target:t,fixed:r,values:s}=e;return e.canFlip&&s.get(t)===s.get(r)&&this.needsClamping()&&(e.canFlip=!1,e.flipped=!0,e.target=r,e.fixed=t),e.flipped}flipAction(){if(!this.action)return!1;let{target:e,fixed:t,values:r}=this.action,s=e.valueAsNumber!==t.valueAsNumber;return e.valueAsNumber=t.valueAsNumber,t.valueAsNumber=r.get(t),s}clampAction(){if(!this.needsClamping()||!this.action)return!1;let{target:e,fixed:t}=this.action;return e.valueAsNumber=t.valueAsNumber,!0}handleInput(e){if(this.isRedispatchingEvent)return;let t=!1,r=!1;this.range&&(this.isActionFlipped()&&(t=!0,r=this.flipAction()),this.clampAction()&&(t=!0,r=!1));let s=e.target;this.updateOnTop(s),this.range?(this.valueStart=this.inputStart.valueAsNumber,this.valueEnd=this.inputEnd.valueAsNumber):this.value=this.inputEnd.valueAsNumber,t&&e.stopPropagation(),r&&(this.isRedispatchingEvent=!0,Dt(s,e),this.isRedispatchingEvent=!1)}handleChange(e){let t=e.target,{target:r,values:s}=this.action??{};r&&r.valueAsNumber===s.get(t)||Dt(this,e),this.finishAction(e)}[An](){if(this.range){let e=new FormData;return e.append(this.nameStart,String(this.valueStart)),e.append(this.nameEnd,String(this.valueEnd)),e}return String(this.value)}formResetCallback(){if(this.range){let t=this.getAttribute("value-start");this.valueStart=t!==null?Number(t):void 0;let r=this.getAttribute("value-end");this.valueEnd=r!==null?Number(r):void 0;return}let e=this.getAttribute("value");this.value=e!==null?Number(e):void 0}formStateRestoreCallback(e){if(Array.isArray(e)){let[[,t],[,r]]=e;this.valueStart=Number(t),this.valueEnd=Number(r),this.range=!0;return}this.value=Number(e),this.range=!1}};z.shadowRootOptions={...te.shadowRootOptions,delegatesFocus:!0};B([N({type:Number})],z.prototype,"min",void 0);B([N({type:Number})],z.prototype,"max",void 0);B([N({type:Number})],z.prototype,"value",void 0);B([N({type:Number,attribute:"value-start"})],z.prototype,"valueStart",void 0);B([N({type:Number,attribute:"value-end"})],z.prototype,"valueEnd",void 0);B([N({attribute:"value-label"})],z.prototype,"valueLabel",void 0);B([N({attribute:"value-label-start"})],z.prototype,"valueLabelStart",void 0);B([N({attribute:"value-label-end"})],z.prototype,"valueLabelEnd",void 0);B([N({attribute:"aria-label-start"})],z.prototype,"ariaLabelStart",void 0);B([N({attribute:"aria-valuetext-start"})],z.prototype,"ariaValueTextStart",void 0);B([N({attribute:"aria-label-end"})],z.prototype,"ariaLabelEnd",void 0);B([N({attribute:"aria-valuetext-end"})],z.prototype,"ariaValueTextEnd",void 0);B([N({type:Number})],z.prototype,"step",void 0);B([N({type:Boolean})],z.prototype,"ticks",void 0);B([N({type:Boolean})],z.prototype,"labeled",void 0);B([N({type:Boolean})],z.prototype,"range",void 0);B([xe("input.start")],z.prototype,"inputStart",void 0);B([xe(".handle.start")],z.prototype,"handleStart",void 0);B([Wr("md-ripple.start")],z.prototype,"rippleStart",void 0);B([xe("input.end")],z.prototype,"inputEnd",void 0);B([xe(".handle.end")],z.prototype,"handleEnd",void 0);B([Wr("md-ripple.end")],z.prototype,"rippleEnd",void 0);B([me()],z.prototype,"handleStartHover",void 0);B([me()],z.prototype,"handleEndHover",void 0);B([me()],z.prototype,"startOnTop",void 0);B([me()],z.prototype,"handlesOverlapping",void 0);B([me()],z.prototype,"renderValueStart",void 0);B([me()],z.prototype,"renderValueEnd",void 0);function Jo({x:n,y:e},t){if(!t)return!1;let{top:r,left:s,bottom:i,right:a}=t.getBoundingClientRect();return n>=s&&n<=a&&e>=r&&e<=i}function Yc(n,e){if(!(n&&e))return!1;let t=n.getBoundingClientRect(),r=e.getBoundingClientRect();return!(t.top>r.bottom||t.right<r.left||t.bottom<r.top||t.left>r.right)}var Os=je`:host{--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, var(--md-sys-shape-corner-full, 9999px));--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, var(--md-sys-shape-corner-full, 9999px));--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, var(--md-sys-shape-corner-full, 9999px));--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-slider-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-slider-label-text-font, var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-slider-label-text-line-height, var(--md-sys-typescale-label-medium-line-height, 1rem));--_label-text-size: var(--md-slider-label-text-size, var(--md-sys-typescale-label-medium-size, 0.75rem));--_label-text-weight: var(--md-slider-label-text-weight, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)));--_start-fraction: 0;--_end-fraction: 0;--_tick-count: 0;display:inline-flex;vertical-align:middle;min-inline-size:200px;--md-elevation-level: var(--_handle-elevation);--md-elevation-shadow-color: var(--_handle-shadow-color)}md-focus-ring{height:48px;inset:unset;width:48px}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level: var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none;user-select:none}.track,.tickmarks{position:absolute;inset:0;display:flex;align-items:center}.track::before,.tickmarks::before,.track::after,.tickmarks::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--_tick-count)) 100%}.track::before,.tickmarks::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape)}.track::before{background:var(--_inactive-track-color)}.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background:var(--_disabled-inactive-track-color)}.track::after,.tickmarks::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)))}.track::after{background:var(--_active-track-color)}.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}.tickmarks:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}:host([disabled]) .track::after{background:var(--_disabled-active-track-color)}:host([disabled]) .tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--_start-fraction));inline-size:calc(100%*(var(--_end-fraction) - var(--_start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:flex;place-content:center;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{outline:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.onTop.isOverlapping .handleNub{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:flex;padding:4px;place-content:center;place-items:center;border-radius:var(--md-sys-shape-corner-full, 9999px);color:var(--_label-text-color);font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_handle-height);inline-size:var(--_handle-width);opacity:0;z-index:2}input.end::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_end-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.end:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}input.start::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_start-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.start:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))) 0 0)}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)))}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)) 0 0)}.onTop{z-index:1}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}
`,Dp=Os.styleSheet;var Ls=class extends z{};Ls.styles=[Os,Ps];Ls=B([ht("md-slider")],Ls);var ct=new WeakMap;function yr(n,e,t,r,s=String,i={}){if(e.length<2)return k;let a=t!==null&&e.includes(t),o=a?e.indexOf(t):0,c=e.every((v,b)=>v===e[0]+b),l=a?s(t):i.unknownLabel??"Not set",d=e[a?Math.max(0,o-1):0],u=e[a?Math.min(e.length-1,o+1):0],h=e.join(","),g=(v,b)=>{let S=b??t,$=S!==null&&e.includes(S),M=$?e.indexOf(S):0,C=$?s(S):l;v.value=c?e[M]:M,v.valueLabel=C,v.ariaValueText=C;let E=v.closest(".detail-level-switch")?.querySelector(".detail-level-switch__value strong");E&&(E.textContent=C)},f=v=>{let b=ct.get(v);return(!b||b.committed!==t||b.domain!==h||b.context!==i.context||b.label!==n||b.commitOnChange!==!!i.commitOnChange)&&(b={committed:t,domain:h,context:i.context,label:n,commitOnChange:!!i.commitOnChange},ct.set(v,b)),i.disabled&&(b.value=void 0),g(v,b.value),b},m=v=>{let b=v.currentTarget,S=ct.get(b);S&&(S.value=void 0),g(b)},y=v=>{let b=v.currentTarget;if(i.disabled){m(v);return}let S=Number(b.value),$=c?S:e[S];if(!Number.isSafeInteger($)||!e.includes($)){m(v);return}let M=ct.get(b)??f(b);M.value=i.commitOnChange?$:void 0,g(b,$),i.commitOnChange||r($)},w=v=>{let b=v.currentTarget,S=ct.get(b),$=S?.value;if(i.disabled||$===void 0){m(v);return}S.value=void 0,r($)},x=(v,b)=>{if(i.disabled)return;let S=v.currentTarget.closest(".detail-level-switch")?.querySelector("md-slider");if(S){let $=ct.get(S);$&&($.value=void 0)}r(b)};return p`
    <div class="detail-level-switch">
      <span class="detail-level-switch__value">
        <small>${n}</small>
        <strong></strong>
      </span>
      <button
        class="icon-button"
        ?disabled=${i.disabled||a&&o===0}
        @click=${v=>x(v,d)}
        aria-label=${`${n} ${s(d)}`}
      >
        <svg class="material-icon" width="18" height="18"><use href="/icons.svg#remove"></use></svg>
      </button>
      <md-slider
        class="md3-slider"
        min=${c?e[0]:0}
        max=${c?e.at(-1):e.length-1}
        step="1"
        ?disabled=${i.disabled}
        labeled
        @input=${y}
        @change=${i.commitOnChange?w:k}
        @pointercancel=${m}
        @keydown=${v=>{v.key==="Escape"&&ct.get(v.currentTarget)?.value!==void 0&&(v.preventDefault(),v.stopPropagation(),m(v))}}
        aria-label=${n}
        ${da(v=>{v&&f(v)})}
      ></md-slider>
      <button
        class="icon-button"
        ?disabled=${i.disabled||a&&o===e.length-1}
        @click=${v=>x(v,u)}
        aria-label=${`${n} ${s(u)}`}
      >
        <svg class="material-icon" width="18" height="18"><use href="/icons.svg#add"></use></svg>
      </button>
    </div>
  `}function Ko(n){return n.steps?p`
      <catalog-upgrade-cost .options=${n}></catalog-upgrade-cost>
    `:Wo(n)}function Wo(n){return p`
    <section class="upgrade-cost" aria-label=${n.label}>
      <header>
        <strong>${n.label}</strong>
        <span>
          ${n.from}
          <span aria-hidden="true">→</span>
          ${n.to}
        </span>
      </header>
      <ul>
        ${n.items.map(e=>p`
            <li>
              ${e.image?p`
                      <img src=${e.image} alt="" loading="lazy" />
                    `:k}
              ${e.href?p`
                      <a href=${e.href}>${e.name}</a>
                    `:p`
                      <span>${e.name}</span>
                    `}
              <strong>×${e.count.toLocaleString(n.locale)}</strong>
            </li>
          `)}
      </ul>
    </section>
  `}var qs=class extends te{static properties={options:{attribute:!1},mode:{state:!0},current:{state:!0}};constructor(){super(),this.mode="step",this.current=1}createRenderRoot(){return this}willUpdate(e){let t=e.get("options");e.has("options")&&t?.scope!==this.options?.scope&&(this.mode="step",this.current=this.options?.initial??1),this.options&&(this.current=Math.min(this.current,this.options.to))}render(){let e=this.options;if(!e)return k;let t=(o,c)=>G(e.locale??"en",`catalog.cards.costs.${o}`,c),r=e.initial??1,s=this.mode==="step"?e.from:this.mode==="cumulative"?r:this.current,i=lt(e.steps??[],s,e.to),a=Array.from({length:Math.max(1,e.to-r+1)},(o,c)=>c+r);return p`
      <div class="card-detail-controls">
        ${F({label:t("mode","Material calculation"),value:this.mode,options:[{value:"step",label:t("step","One upgrade")},{value:"cumulative",label:t("cumulative","Cumulative")},{value:"range",label:t("range","Current \u2192 target")}],onSelect:o=>{this.mode=o}})}
        ${this.mode==="range"?yr(t("current","Current"),a,this.current,o=>{this.current=o},String,{context:e.scope}):k}
        ${i.complete?Wo({...e,from:s,items:i.items}):p`
                <p role="status">
                  ${t("missing","Material data is unavailable for stages: {stages}").replace("{stages}",i.missing.join(", "))}
                </p>
              `}
      </div>
    `}};typeof customElements<"u"&&!customElements.get("catalog-upgrade-cost")&&customElements.define("catalog-upgrade-cost",qs);async function wr(n,e,t){let r=new $i,s=r.begin(t),i=setTimeout(()=>r.cancel(),3e4);try{let a=await fetch(`/${n.server}/${e}/growth-data.json`,{signal:s});if(!a.ok)throw new Error("growth-data-unavailable");let o=await a.json();if(o.schema!=="haneoka-growth-page-v1"||o.identity.server!==n.server||o.identity.sourceId!==n.sourceId||o.identity.releaseId!==n.releaseId||o.locale!==e)throw new Error("growth-data-release");return o}finally{clearTimeout(i),r.cancel()}}var Ee=(n,e)=>n==="break"?e-1:e;function Ns(n,e){let t=n.kind==="member"?"training":"break";return n.tracks[t]?.stages.find(r=>r.value===e[t])?.cap??null}function dn(n,e,t){if(n.group==="live")return t.live??null;if(n.group==="gekisou")return t.gekisou??null;let r=e.kind==="member"?"awakening":"break",s=e.tracks[r]?.stages.find(a=>a.value===t[r]);if(n.group==="leader")return s?.effects.leaderSkillLevel??null;let i=`${n.group==="support"?"support":"gekisouSupport"}Skill0${n.slot+1}Level`;return s?.effects[i]??null}function Ds(n){if(n.length>ge.textBytes||new TextEncoder().encode(n).length>ge.textBytes)throw new P("box_text_budget");let e="",t=0,r=0,s=0;for(;t<n.length;){if(n[t]==='"'){let i=t++;for(;t<n.length;){let a=n[t++];if(a==="\\"){t++;continue}if(a==='"')break}e+=n.slice(i,t);continue}if(n[t]==="-"||/\d/.test(n[t])){let i=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(n.slice(t));if(!i)throw new P("box_invalid_json");e+=JSON.stringify(i[0]),t+=i[0].length}else{let i=n[t++];if(i==="{"||i==="["){if(++r>32||++s>1e5)throw new P("box_json_budget")}else(i==="}"||i==="]")&&r--;e+=i}}try{return JSON.parse(e)}catch{throw new P("box_invalid_json")}}var ed=/password|token|secret|certification|account_?id|session|credential|authorization|auth_?(?:key|code)|cookie|api_?key|device_?id|friendprofile|friendinvitation|friend_?id|friend_?player|chat|iaptransaction|payment|purchase_?(?:history|record)|reportedplayer|world_room|linkedaccount|specialfocus|sendingrequest|pendingapproval/i;function kr(n,e=0){if(e>24)throw new Error("save_invalid");if(n===null||typeof n=="string"||typeof n=="boolean"||typeof n=="number"&&Number.isFinite(n)&&(!Number.isInteger(n)||Number.isSafeInteger(n)))return n;if(Array.isArray(n))return n.map(t=>kr(t,e+1));if(n&&typeof n=="object")return Object.fromEntries(Object.entries(n).filter(([t])=>!ed.test(t)&&!["__proto__","constructor","prototype"].includes(t)).map(([t,r])=>[t,kr(r,e+1)]));throw new Error("save_invalid")}function zs(n){if(new TextEncoder().encode(n).length>16*1024*1024)throw new Error("save_too_large");let e=Ds(n);if(!e||e.schema!=="haneoka-game-save-v1"||!["jp","intl"].includes(String(e.server))||!e.player||typeof e.player!="object"||Array.isArray(e.player))throw new Error("save_invalid");for(let r of["_memberCards","_supportCards","_characters","_bandItems","_items","_liveMusicResults"]){let s=e.player[r];if(s!==void 0&&(!Array.isArray(s)||s.some(i=>!i||typeof i!="object"||Array.isArray(i))))throw new Error("save_invalid")}if(e.savedAt!=null&&(typeof e.savedAt!="string"||!Number.isFinite(Date.parse(e.savedAt))))throw new Error("save_invalid");let t={schema:"haneoka-game-save-v1",server:e.server,savedAt:e.savedAt??null,player:kr(e.player)};if(!Object.keys(t.player).length)throw new Error("save_empty");for(let r of["settings","persist","permanent"]){let s=e[r];if(s!==void 0){if(s!==null&&(typeof s!="object"||Array.isArray(s)))throw new Error("save_invalid");t[r]=kr(s)}}return t}async function td(){return new Promise((n,e)=>{let t=indexedDB.open("haneoka-save-snapshots",1);t.onupgradeneeded=()=>t.result.createObjectStore("snapshots",{keyPath:"id"}),t.onerror=()=>e(new Error("save_storage_failed",{cause:t.error})),t.onblocked=()=>e(new Error("save_storage_busy")),t.onsuccess=()=>{t.result.onversionchange=()=>t.result.close(),n(t.result)}})}async function Xo(n,e){let t=await td().catch(r=>{throw new Error("save_storage_failed",{cause:r})});try{return await new Promise((r,s)=>{let i=t.transaction("snapshots",n==="list"?"readonly":"readwrite"),a=i.objectStore("snapshots");n==="put"&&a.put(e),n==="delete"&&a.delete(e);let o=a.getAll();i.oncomplete=()=>r(o.result),i.onerror=i.onabort=()=>s(i.error??new Error("save_storage_failed"))})}catch(r){throw new Error("save_storage_failed",{cause:r})}finally{t.close()}}var Us=["members","snaps"],Fs={members:"member",snaps:"support"};function Ke(n){let e=typeof n=="string"&&/^\d+$/u.test(n)?Number(n):n;return typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:void 0}function js(n){if(typeof n=="string"&&/^\d{1,19}$/u.test(n))return BigInt(n);let e=Ke(n);return e===void 0?void 0:BigInt(e)}function xr(n,e){let t=new Map;for(let r of Array.isArray(n)?le(n):[]){let s=Ke(r[e]);s&&t.set(s,t.has(s)?null:r)}return t}function Zo(n){let e=new Map;for(let[t,r]of xr(n.player._items,"_masterItemId")){let s=Ke(r?._amount);s!==void 0&&e.set(`items:${t}`,s)}for(let[t,r]of xr(n.player._supportCards,"_masterId")){let s=Ke(r?._duplicateCount);s!==void 0&&e.set(`support-cards:${t}`,s)}return e}function Yo(n,e){return js(n.tracks.level?.stages.find(t=>t.value===e)?.exp)}function Qo(n,e,t){let r=Ns(n,e);if(t===void 0||r===null)return null;let s=null;for(let i of n.tracks.level?.stages??[]){let a=js(i.exp);a!==void 0&&a<=t&&i.value<=r&&i.value>(s??0)&&(s=i.value)}return s}function el(n,e){let t=new Map;for(let r of Us){let s=e.cards.filter(a=>a.kind===Fs[r]&&n[r].some(o=>o.cardId===a.id)),i=e.experienceItems?.[Fs[r]];s.length&&i&&t.set(i.identity,i);for(let a of s)for(let o of Object.values(a.tracks))for(let c of o.costs)for(let l of c.items)l.identity&&t.set(l.identity,l)}return[...t.values()]}function tl(n,e,t){if(t&&t.server!==e.identity.server)throw new Error("training-save-server");let r=structuredClone(n),s=new Map,i=new Map,a={members:xr(t?.player._memberCards,"_masterId"),snaps:xr(t?.player._supportCards,"_masterId")};for(let o of Us)for(let c of r[o]){let l=e.cards.find(u=>u.kind===Fs[o]&&u.id===c.cardId);if(!l){if(t)throw new Error("training-save-team");continue}s.set(c.key,l);let d=Yo(l,c.level);if(t){let u=a[o].get(c.cardId);if(!u)throw new Error("training-save-team");d=js(u._exp),c.rank=Ke(u._rank)??null,"awake"in c?(c.awake=Ke(u._awakeCount)??null,c.liveSkillLevel=Ke(u._liveSkillLevel)??null,c.gekisoSkillLevel=Ke(u._performanceSkillLevel)??null,c.level=Qo(l,{training:c.awake},d)):c.level=Qo(l,{break:c.rank},d)}d!==void 0&&i.set(c.key,d)}return{input:r,cards:s,expByCard:i}}async function nl(n,e,t,r,s,i,a){let o=e.input,[c]=await s([o]);if(!c)throw new Error("growth-no-team");let l=c,d=new Map(r),u=new Map(e.expByCard),h=[],g=!1,f=(y,w,x,v,b)=>{let S=ln(n,b?.request??o,{kind:w,key:x,actions:v,target:"next"});if(S.status==="at-cap")return null;if(!S.request)return g=!0,null;if(S.steps.length!==v.length)return null;let $=new Map(b?.costs.map(I=>[I.identity,I])),M=b?.nextExp??u.get(x);for(let I of S.steps)if(I.action==="level"){let A=t.experienceItems?.[y.kind],_=Yo(y,I.to);if(!A||M===void 0||_===void 0||_-M>BigInt(Number.MAX_SAFE_INTEGER))return g=!0,null;if(_>M){let R=Number(_-M)+($.get(A.identity)?.count??0);$.set(A.identity,{...A,count:R}),M=_}}else{let A=lt(y.tracks[I.action]?.costs??[],I.from,I.to);if(!A.complete)return g=!0,null;for(let _ of A.items)$.set(_.identity,{..._,count:_.count+($.get(_.identity)?.count??0)})}let C=[...$.values()];if(C.some(I=>!d.has(I.identity)))return g=!0,null;if(C.some(I=>I.count>d.get(I.identity)))return null;let E=b?[...b.changes.slice(0,-1),{...b.changes.at(-1),to:S.steps[0].to}]:S.steps;return{kind:w,key:x,cardId:y.id,request:S.request,changes:E,costs:C,nextExp:M}},m=async(y,w)=>{let x=null,v=await s(y.map(b=>b.request));for(let[b,S]of v.entries()){if(!S)continue;let $=i(S)-w;$>(x?.gain??1e-9)&&(x={candidate:y[b],hit:S,gain:$})}return x};for(;;){let y=[];for(let I of Us){let A=ot(I).filter(R=>o.goal.kind!=="power"||R!=="live"&&R!=="gekisou"),_=I==="members"?"training":"break";for(let R of o[I]){let L=e.cards.get(R.key);if(!L||R.level===null){g=!0;continue}let H=A.map(Z=>[Z]);R.level===Ns(L,{training:"awake"in R?R.awake:null,break:R.rank})&&H.push([_,"level"]);for(let Z of H){let se=f(L,I,R.key,Z);se&&y.push(se)}}}let w=i(l),x=null;for(;y.length&&(x=await m(y,w),!x);)y=y.flatMap(I=>{let A=[I.changes.at(-1).action],_=f(e.cards.get(I.key),I.kind,I.key,A,I);return _?[_]:[]});if(!x)break;let{request:v,nextExp:b,kind:S,key:$,cardId:M,changes:C,costs:E}=x.candidate;for(let I of E)d.set(I.identity,d.get(I.identity)-I.count);b!==void 0&&u.set($,b),l=x.hit,o=v,h.push({kind:S,cardId:M,changes:C,costs:E,gain:x.gain}),a({baseline:c,final:l,steps:[...h],remaining:new Map(d),incomplete:g})}return{baseline:c,final:l,steps:h,remaining:d,incomplete:g}}var rl={level:"level",training:"training",awakening:"awakening",live:"liveSkill",gekisou:"gekisoSkill",break:"limitBreak"},Sr=class{constructor(e){this.host=e}source=null;catalog=null;materials=[];records=[];selection="";manual=new Map;materialsOpen=!1;remainingOpen=!1;loading=!1;loadError=!1;saveError=!1;task=null;stopped=!1;error="";plan=null;abortLoad=null;open(e){this.source=e,this.selection="",this.manual.clear(),this.records=[],this.catalog=null,this.materials=[],this.plan=null,this.error="",this.stopped=!1,this.materialsOpen=!1,this.remainingOpen=!1,this.load(e)}async load(e){let t=this.host,r=t.data.crossServer?.identities[t.server]??t.data.identity;this.abortLoad?.abort();let s=this.abortLoad=new AbortController;this.loadError=this.saveError=!1,this.loading=!0,t.requestUpdate();let[i,a]=await Promise.allSettled([wr(r,t.locale,s.signal),this.readSaves(r.server)]);this.source!==e||s.signal.aborted||(i.status==="fulfilled"?(this.catalog=i.value,this.materials=el(e.input,i.value)):this.loadError=!0,a.status==="fulfilled"?this.records=a.value:this.saveError=!0,this.selection=this.records.length===1?this.records[0].id:this.records.length?"":"manual",this.materialsOpen=this.selection==="manual",this.loading=!1,t.requestUpdate())}async readSaves(e){return wo("saveSnapshotV1")?(await Yt("gameAccounts",{})).filter(t=>t.server===e).map(t=>({id:t.key,label:t.name||t.profileId,savedAt:t.savedAt,read:async()=>zs((await Yt("saveSnapshot",{key:t.key})).text)})):(await Xo("list")).filter(t=>t.snapshot.server===e).sort((t,r)=>(r.snapshot.savedAt??r.importedAt).localeCompare(t.snapshot.savedAt??t.importedAt)).map(t=>({id:t.id,label:t.label,savedAt:t.snapshot.savedAt,read:async()=>t.snapshot}))}sync(e){this.source&&this.source.identity!==e&&this.close()}close(){this.abortLoad?.abort(),this.stop(),this.source=null,this.host.requestUpdate()}stop(){this.task&&this.host.ownsTask(this.task)&&(this.stopped=!0,this.host.engine?.cancel(),this.host.requestUpdate())}select(e){this.selection=e,this.plan=null,this.error="",this.stopped=!1,this.materialsOpen=e==="manual",this.host.requestUpdate()}setManualAmount(e,t){t.value&&t.validity.valid?this.manual.set(e,t.valueAsNumber):this.manual.delete(e),this.plan=null,this.error="",this.stopped=!1,this.host.requestUpdate()}async run(){let e=this.host,{source:t,catalog:r}=this,{engine:s,master:i}=e;if(!t||!r||!s||!i||!this.selection)return;let a=e.acquireTask("team-growth");if(!a)return;this.task=a,this.plan=null,this.error="",this.stopped=!1,e.requestUpdate();let o=()=>this.source===t&&e.ownsTask(a)&&!this.stopped,c=this.records.find(l=>l.id===this.selection);try{let l=await c?.read();if(!o())return;if(l&&!Array.isArray(l.player._items))throw new Error("training-save-items");let d=l?Zo(l):new Map(this.manual),u=tl(t.input,r,l),g=await nl(i,u,r,d,async f=>{if(!o())throw new DOMException("Cancelled","AbortError");let m=await s.runBatch(f);if(!o())throw new DOMException("Cancelled","AbortError");return m.map(y=>{if(y.error||!ee(y))throw new Error(y.error??"training-incomplete");return y.overall[0]??null})},f=>Pe(e,f,t.settings).value,f=>{o()&&(this.plan=f),e.requestUpdate()});o()&&(this.plan=g,this.materialsOpen=!1)}catch(l){if(o()){let d=l instanceof Error?l.message:"";this.error=d==="training-save-team"?"saveTeam":d==="training-save-items"?"saveItems":"failed"}}finally{this.task=null,e.releaseTask(a),e.requestUpdate()}}render(){let{host:e,source:t,plan:r,catalog:s,selection:i,materials:a}=this;if(!t)return k;let o=y=>e.t(`trainingPlan.${y}`,y),c=(y,w=0)=>y.toLocaleString(e.locale,{maximumFractionDigits:w}),l=o("title"),d=this.task!==null,u=Pe(e,r?.final??t.hit,t.settings),h=r?u.value-Pe(e,r.baseline,t.settings).value:0,g=a.filter(y=>r?.remaining.has(y.identity)),f=this.records.find(y=>y.id===i),m=this.loading?"loading":this.loadError?"dataFailed":d?"running":this.error||(this.stopped?"stopped":r?.incomplete?"partial":r&&!r.steps.length?"empty":"");return p`
      <dialog
        class="dialog tb-team-growth tb-training-plan"
        data-managed-modal
        ${ie(()=>this.close())}
        aria-label=${l}
      >
        <header class="row row--between">
          <strong>${l}</strong>
          ${D({icon:"close",label:e.common("common.actions.close","Close"),onClick:()=>this.close()})}
        </header>
        <div class="tb-team-growth__body">
          <section class="tb-team-growth__results stack">
            <div class="surface stack">
              <h3 class="detail-section-title">${o("order")}</h3>
              <div class="row row--between">
                <span>${u.label}</span>
                ${r?p`
                        <strong>
                          ${c(u.value-h,u.digits)} → ${c(u.value,u.digits)}
                          ${u.unit}
                        </strong>
                      `:k}
              </div>
              <span role="status" class="supporting-text tb-team-growth__status">
                ${m?o(m):k}
              </span>
              ${r?.steps.length?p`
                      <ol class="list tb-training-plan__steps">
                        ${r.steps.map((y,w)=>{let x=e.catalog?.cardOptions(y.kind,y.cardId),v=y.changes.map(b=>`${e.t(rl[b.action],rl[b.action])} ${Ee(b.action,b.from)} \u2192 ${Ee(b.action,b.to)}`);return p`
                            <li class="list-item">
                              ${x?p`
                                      <span class="list-item__leading tb-suggest__art">${Ie(x)}</span>
                                    `:k}
                              <span class="list-item__body">
                                <strong class="list-item__headline">
                                  ${w+1}. ${e.catalog.cardName(y.kind,y.cardId)}
                                </strong>
                                ${v.map(b=>p`
                                    <span class="list-item__supporting">${b}</span>
                                  `)}
                                ${y.costs.map(b=>p`
                                    <span class="list-item__supporting">${b.name} ×${c(b.count)}</span>
                                  `)}
                              </span>
                              <strong class="list-item__trailing tabular">
                                +${c(y.gain,Math.max(u.digits,2))}
                              </strong>
                            </li>
                          `})}
                      </ol>
                    `:k}
            </div>
            ${g.length?W({id:"tb-training-remaining",label:o("remaining"),expanded:this.remainingOpen,onExpandedChange:y=>{this.remainingOpen=y,e.requestUpdate()},content:p`
                      <dl class="spec-list">
                        ${g.map(y=>p`
                            <div>
                              <dt>${y.name}</dt>
                              <dd>${c(r.remaining.get(y.identity))}</dd>
                            </div>
                          `)}
                      </dl>
                    `}):k}
          </section>
          <aside class="surface stack tb-team-growth__settings is-open">
            <h3 class="detail-section-title">${o("materials")}</h3>
            <label class="stack">
              <span>${o("source")}</span>
              <span class="field">
                <select
                  ?disabled=${this.loading||d}
                  @change=${y=>this.select(y.currentTarget.value)}
                >
                  <option value="" disabled ?selected=${!i}>${o("choose")}</option>
                  ${this.records.map(y=>p`
                      <option value=${y.id} ?selected=${i===y.id}>
                        ${y.label}
                        ${this.records.length>1&&y.savedAt?` ${Lt(e.locale,y.savedAt,{time:!0})}`:k}
                      </option>
                    `)}
                  <option value="manual" ?selected=${i==="manual"}>${o("manual")}</option>
                </select>
              </span>
            </label>
            <span class="supporting-text tb-team-growth__status" role="status">
              ${this.saveError?o("saveFailed"):f?f.savedAt?Lt(e.locale,f.savedAt,{time:!0}):o("unknownDate"):i==="manual"?o("manualExp"):k}
            </span>
            <a class="button button--text" href=${Le()?Yn(e.locale):`/${e.locale}/saves/`}>${Le()?G(e.locale,"account.page.openSaveImport","Import a save in Account"):o("saves")}</a>
            ${i==="manual"&&a.length?W({id:"tb-training-manual",label:o("manual"),expanded:this.materialsOpen,onExpandedChange:y=>{this.materialsOpen=y,e.requestUpdate()},content:p`
                      <div class="stack">
                        ${a.map(y=>p`
                            <label class="stack">
                              <span>${y.name}</span>
                              <span class="field">
                                <input
                                  type="number"
                                  min="0"
                                  max=${Number.MAX_SAFE_INTEGER}
                                  step="1"
                                  placeholder="—"
                                  ?disabled=${d}
                                  .value=${this.manual.has(y.identity)?String(this.manual.get(y.identity)):""}
                                  @change=${w=>this.setManualAmount(y.identity,w.currentTarget)}
                                />
                              </span>
                            </label>
                          `)}
                      </div>
                    `}):k}
            ${this.loadError?p`
                    <button class="button button--tonal" @click=${()=>void this.load(t)}>${o("retry")}</button>
                  `:d?p`
                      <button class="button button--tonal" @click=${()=>this.stop()}>
                        ${e.common("common.actions.cancel","Cancel")}
                      </button>
                    `:p`
                      <button
                        class="button"
                        data-training-run
                        ?disabled=${!s||!i||e.running||i==="manual"&&!this.manual.size}
                        @click=${()=>void this.run()}
                      >
                        ${o("run")}
                      </button>
                    `}
          </aside>
        </div>
      </dialog>
    `}};var sl={level:"level",training:"training",awakening:"awakening",live:"liveSkill",gekisou:"gekisoSkill",break:"limitBreak",full:"tg.full"},$r=class{constructor(e){this.host=e;this.training=new Sr(e)}source=null;choice={kind:"members",key:"",actions:["level"],target:"next"};results={};phase=null;error="";catalogData;catalogError=!1;cache=new Map;cacheIdentity="";cacheKey(e){let t=this.identity();t!==this.cacheIdentity&&(this.cache.clear(),this.cacheIdentity=t);let r=Ne(e);return r.timeLimitMs=null,JSON.stringify([t,r])}cached(e){let t=this.cache.get(e);return t&&(this.cache.delete(e),this.cache.set(e,t)),t}remember(e,t){for(this.cache.delete(e),this.cache.set(e,t);this.cache.size>256;)this.cache.delete(this.cache.keys().next().value)}task=null;stopped=!1;expanded=new Set(["new"]);settingsOpen=!0;training;identity(){return JSON.stringify([this.host.server,this.host.snapshot?.owner,this.host.data?.identity,this.host.data?.crossServer?.identities])}sync(){let e=this.identity();this.training.sync(e),this.source&&this.source.identity!==e&&(this.close(),this.cache.clear())}close(){this.stop(),this.source=null,this.host.slotPicker&&"growth"in this.host.slotPicker&&(this.host.slotPicker=null),this.results={},this.host.requestUpdate()}stop(){this.training.stop(),this.task&&this.host.ownsTask(this.task)&&(this.stopped=!0,this.host.engine?.cancel())}openResult(e,t){let r=this.resultSource(e);r&&this.show(r,t)}openTraining(e){let t=this.resultSource(e);t&&this.showTraining(t)}showTraining(e){let t=br(e.input,e.hit);t.goal.kind==="event"&&e.hit.event?.rewardPlan&&(t.goal.rewardPlan=structuredClone(e.hit.event.rewardPlan)),this.close(),this.training.open({...e,input:t})}resultSource(e){let t=this.host,r=zt(t,e);if(!r||t.running)return;let s=structuredClone(Ge(t,e)),i=Ne(r);if(i.goal.kind!=="plan"){if(i.goal.kind==="event"&&he(t)){let a=t.pt.job;if(i.goal.route=s.route,i.goal.measure=s.measure,i.goal.songs=a.tasks.filter(o=>o.route===s.route&&o.measure===s.measure).map(o=>o.song),s.route==="challenge")i.goal.consumption=a.cycle.consumption,delete i.goal.gekiso;else if(a.cycle){let o=an(a,s.measure==="items"?"items":"points");if(o?.event?.rewardSum==null||o.event.orders==null)return;i.goal.cpExchange=Kt(o.event.rewardSum,o.event.orders,a.cycle.consumption)}}return{input:i,hit:structuredClone(e),settings:s,identity:this.identity(),cycle:he(t)&&s.route==="live"?structuredClone(t.pt.job?.cycle??void 0):void 0}}}openManual(e){let t=this.host;if(t.running||t.manualResultsFor!==t.manualContext()||!t.manualResults?.includes(e))return;let r=t.manualGoal(),s=t.request(r);if(!s||!t.view)return;let i=t.manualInputs(),a=nt(t.view,!0),o=Ne(s);o.aggregation=void 0,o.members=[...new Map([...s.members.map(d=>a.members.find(u=>u.key===d.key)??d),...i.members].map(d=>[d.key,d])).values()],o.snaps=[...new Map([...s.snaps.map(d=>a.snaps.find(u=>u.key===d.key)??d),...i.snaps].map(d=>[d.key,d])).values()],o.unknownPolicy=i.unknownPolicy;let c=[t.manual.leader,...[0,1,2,3,4].filter(d=>d!==t.manual.leader)],l={...e,key:e.score.mean,potential:null,members:c.map(d=>`m${t.manual.members[d]}`),snaps:c.map(d=>t.manual.snaps[d]===null?null:`s${t.manual.snaps[d]}`),slotPowers:e.slotPowers,event:null};this.show({input:o,hit:l,settings:{...t.searchSettings,goal:r.kind,criterion:"mean",scoreTarget:"none"},identity:this.identity()})}show(e,t){this.source=e,this.results={},this.error="",this.settingsOpen=!0,this.choice={kind:t?.kind??"members",key:t?.key??e.hit.members[0],actions:t?ot(t.kind):["level"],target:t?"cap":"next"},this.restoreSearch(),this.loadMaterials(e),this.host.requestUpdate()}select(e){this.phase||(this.choice={...this.choice,...e},delete this.results.fixedAfter,delete this.results.searchAfter,this.error="",this.restoreSearch(),this.source&&this.loadMaterials(this.source),this.host.requestUpdate())}change(){return this.source&&this.host.master?ln(this.host.master,this.source.input,this.choice):null}restoreSearch(){if(!this.source)return;this.results.searchBefore=this.cached(this.cacheKey(this.source.input));let e=this.change();e?.request&&(this.results.searchAfter=this.cached(this.cacheKey(e.request)))}async loadMaterials(e){this.catalogError=!1;let t=`${this.choice.kind}:${this.choice.key}`,r=e.input[this.choice.kind].find(o=>o.key===this.choice.key),s=this.host.data.crossServer?.owners[this.choice.kind==="members"?"members":"snapshots"]?.[String(r.cardId)]??this.host.data.identity.server,i=this.host.data.crossServer?.identities[s]??this.host.data.identity,a=o=>o.identity.server===i.server&&o.identity.releaseId===i.releaseId&&o.identity.sourceId===i.sourceId&&o.locale===this.host.locale;if(!(this.catalogData&&a(this.catalogData))){this.catalogData=void 0;try{let o=await wr(i,this.host.locale);this.source===e&&t===`${this.choice.kind}:${this.choice.key}`&&(this.catalogData=o)}catch{this.source===e&&t===`${this.choice.kind}:${this.choice.key}`&&(this.catalogError=!0)}this.source===e&&this.host.requestUpdate()}}async priorities(e,t){let r=Ne(e),s=this.identity();r.timeLimitMs=null;let a=await(async f=>{let m=this.cacheKey(f),y=this.cached(m);if(y&&ee(y)&&!y.error)return y;let w=await this.host.engine.run({...f,seeds:y?.overall,completed:y?.results.filter(x=>x.proven)});if(s!==this.identity())throw new DOMException("Cancelled","AbortError");if(this.remember(m,w),w.error)throw new Error(w.error);if(!ee(w))throw new DOMException("Cancelled","AbortError");return w})(r);if(!a.overall[0])throw new Error("growth-no-team");let o=["members","snaps"].flatMap(f=>r[f].flatMap(m=>{let y=ln(this.host.master,r,{kind:f,key:m.key,actions:ot(f),target:"cap"});return y.request?[{kind:f,key:m.key,request:y.request}]:[]})),c=[],l=[],d=0;for(let[f,m]of o.entries()){let y=this.cacheKey(m.request),w=this.cached(y);w&&ee(w)&&!w.error?(c[f]=w,t(++d,o.length)):l.push({index:f,key:y,request:{...m.request,seeds:w?.overall,completed:w?.results.filter(x=>x.proven)}})}l.length&&await this.host.engine.runBatch(l.map(f=>f.request),(f,m)=>{if(s!==this.identity())throw new DOMException("Cancelled","AbortError");let y=l[f];if(this.remember(y.key,m),m.error)throw new Error(m.error);if(!ee(m))throw new DOMException("Cancelled","AbortError");c[y.index]=m,t(++d,o.length)});let u=[],h=Ge(this.host),g=f=>Pe(this.host,f,h).value;for(let[f,m]of o.entries()){let y=c[f].overall[0]??null;y&&u.push({kind:m.kind,key:m.key,value:g(y),gain:g(y)-g(a.overall[0]),team:y})}return u.sort((f,m)=>m.gain-f.gain),{base:g(a.overall[0]),upgrades:u}}async run(e=!1){let t=this.source,r=this.change(),s=this.host,i=s.engine;if(!t||t.identity!==this.identity()||!r?.request||!i||s.running||e&&(!this.results.fixedAfter||!ee(this.results.fixedAfter)))return;let a=s.acquireTask("team-growth");if(!a)return;this.task=a,this.stopped=!1,this.error="";let o=()=>s.ownsTask(a)&&this.source===t&&t.identity===this.identity(),c=async(l,d)=>{if(!o()||this.stopped)return!1;let u=this.results[l]??this.cached(this.cacheKey(d));if(u&&(this.results[l]=u),u&&ee(u)&&!u.error)return!0;this.phase=l,s.requestUpdate();let h=Ne(d);if(t.cycle&&h.goal.kind==="event"&&h.goal.route==="live"){let m=l.endsWith("After")?r.request:t.input,y=Ne(m);y.goal={...h.goal,route:"challenge",songs:t.cycle.songs,consumption:t.cycle.consumption},delete y.goal.gekiso,delete y.goal.cpExchange;let w=this.cacheKey(y),x=this.cached(w);if(!x||!ee(x)){if(x=await i.run(y),!o()||this.stopped)return!1;this.remember(w,x)}if(!ee(x)||x.error)throw new Error(x.error??"growth-cp-incomplete");let v=x.overall[0]?.event;if(v?.rewardSum==null||v.orders==null)throw new Error("growth-cp-empty");h.goal.cpExchange=Kt(v.rewardSum,v.orders,t.cycle.consumption)}h.contextKey=`${t.identity}:${l}`,h.seeds=u?.overall,h.completed=u?.results.filter(m=>m.proven);let g=m=>{o()&&(this.results[l]=m,this.remember(this.cacheKey(d),m),s.requestUpdate())},f=await i.run(h,void 0,m=>g(m.response));if(g(f),f.error)throw new Error(f.error);return o()&&!this.stopped&&ee(f)&&f.stopReason!=="cancelled"};try{if(e)await c("searchBefore",t.input)&&await c("searchAfter",r.request);else{let l=t.input,d=r.request;if(l.goal.kind==="event"&&l.goal.rewardPlan?.autoCp){if(!await c("searchBefore",l)||!await c("searchAfter",d))return;let u=(h,g)=>{let f=this.results[g]?.overall[0]?.event?.rewardPlan;if(!f)throw new Error("growth-missing-reward-plan");return{...h,goal:{...h.goal,rewardPlan:f}}};l=u(l,"searchBefore"),d=u(d,"searchAfter")}await c("fixedBefore",br(l,t.hit))&&await c("fixedAfter",br(d,t.hit))}}catch(l){o()&&!this.stopped&&!(l instanceof DOMException&&l.name==="AbortError")&&(this.error=s.t("searchFailed","The search failed: {reason}",{reason:s.errorReason(l)}))}finally{this.task===a&&(this.task=null,this.phase=null),o()&&this.results.fixedAfter?.overall.length&&(this.settingsOpen=!1),s.releaseTask(a),s.requestUpdate(),this.source===t&&s.updateComplete.then(()=>s.querySelector(".tb-team-growth__body")?.scrollTo({top:0}))}}materials(e){let t=this.catalogData?.cards.find(u=>u.id===e&&u.kind===(this.choice.kind==="members"?"member":"support"));if(!t)return p`
        <span>${this.host.t(this.catalogError?"growthComparison.loadError":"tg.pending","\u2014")}</span>
      `;let r=this.source.input[this.choice.kind].find(u=>u.cardId===e),s=Object.fromEntries(Object.entries({level:"level",training:"awake",awakening:"rank",live:"liveSkillLevel",gekisou:"gekisoSkillLevel",break:"rank"}).map(([u,h])=>[u,r[h]])),i=this.change()?.steps??[],a=i.map(u=>u.action),o={...s};for(let u of i)o[u.action]=u.to;let c=u=>{let h=t.tracks.level?.stages.find(m=>m.value===u.level)?.rates;if(!t.maximum||!h)return null;if(t.kind==="support")return t.maximum.map((m,y)=>_n(m,h[y]));let g=t.tracks.training?.stages.find(m=>m.value===u.training)?.rates,f=t.tracks.awakening?.stages.find(m=>m.value===u.awakening)?.rates;return g&&f?t.maximum.map((m,y)=>In(m,h[y],g[y],f[y])):null},l=c(s),d=c(o);return p`
      <div class="stack">
        ${l&&d?p`
                <dl class="spec-list">
                  ${["performance","technique","visual"].map((u,h)=>p`
                      <div>
                        <dt>${this.host.common(`catalog.cards.fields.${u}`,u)}</dt>
                        <dd>
                          ${t.kind==="support"?new Intl.NumberFormat(this.host.locale,{maximumFractionDigits:2}).format(l[h]/100):l[h]}
                          →
                          ${t.kind==="support"?new Intl.NumberFormat(this.host.locale,{maximumFractionDigits:2}).format(d[h]/100):d[h]}${t.kind==="support"?"%":""}
                        </dd>
                      </div>
                    `)}
                </dl>
              `:k}
        ${a.map(u=>{let h=t.tracks[u];if(!h)return k;let g=s[u],f=o[u];if(g==null||f==null)return p`
              <span>${this.host.t("growthComparison.status.missing-state","\u2014")}</span>
            `;if(g===f)return k;let m=this.host.t(sl[u],u);return p`
            <section class="stack">
              ${u==="level"?p`
                      <strong>${m}</strong>
                      <span>${g} → ${f}</span>
                      <span>${this.host.t("growthComparison.expUnknown","\u2014")}</span>
                    `:lt(h.costs,g,f).complete?Ko({label:m,from:Ee(u,g),to:Ee(u,f),items:lt(h.costs,g,f).items,locale:this.host.locale}):p`
                        <span>${this.host.t("growthComparison.status.missing-data","\u2014")}</span>
                      `}
              ${t.skills.filter(y=>dn(y,t,s)!==dn(y,t,{...s,[u]:f})).map(y=>{let w=dn(y,t,s),x=dn(y,t,{...s,[u]:f});return p`
                    <section class="stack">
                      <strong>${y.name}</strong>
                      <dl class="spec-list">
                        <div>
                          <dt>${this.host.t("level","Level")} ${w}</dt>
                          <dd>${y.levels.find(v=>v.level===w)?.description??"\u2014"}</dd>
                        </div>
                        <div>
                          <dt>${this.host.t("level","Level")} ${x}</dt>
                          <dd>${y.levels.find(v=>v.level===x)?.description??"\u2014"}</dd>
                        </div>
                      </dl>
                    </section>
                  `})}
            </section>
          `})}
      </div>
    `}render(){let e=this.source;if(!e)return this.training.render();let t=this.host,r=t.catalog,s=this.choice,i=this.change(),a=v=>t.t(`tg.${v}`,v),o=(v,b=0)=>new Intl.NumberFormat(t.locale,{maximumFractionDigits:b}).format(v),c=v=>this.results[v]?.overall[0]??(v==="fixedBefore"&&!this.results[v]?e.hit:null),l=v=>Pe(t,v,e.settings),d=(v,b)=>{if(!v||!b)return"\u2014";let S=l(v),$=l(b),M=$.value-S.value;return!S.id.startsWith("reward-plan:")&&S.id!==$.id||S.unit!==$.unit?"\u2014":`${M>0?"+":""}${o(M,Math.max($.digits,2))}${$.unit==="%"?t.t("percentagePoints","percentage points"):$.unit?` ${$.unit}`:""}`},u=v=>{if(!v)return"\u2014";let b=l(v);return`${o(b.value,b.digits)}${b.unit?` ${b.unit}`:""}`},h=v=>this.phase===v?t.computationStatus():this.results[v]?this.results[v].error?a("failed"):ee(this.results[v])?c(v)?a("complete"):a("noTeam"):a("partial"):a("pending"),g=e.input[s.kind].find(v=>v.key===s.key),f=ot(s.kind),m=v=>t.t(sl[v],v),y=v=>v.map(b=>`${m(b.action)} ${b.from===null?"\u2014":Ee(b.action,b.from)} \u2192 ${Ee(b.action,b.to)}`).join(" / "),w=(v,b)=>`/${t.data.crossServer?.owners[v==="members"?"members":"snapshots"]?.[String(b)]??t.data.identity.server}/${t.locale}/${v==="members"?"member-cards":"support-cards"}/${b}/`,x=(v,b)=>p`
      <ol class="tb-formation" aria-label=${t.t("formation","Formation")}>
        ${[1,2,0,3,4].map(S=>p`
            <li class=${`tb-slot${S===0?" is-leader":""}`}>
              ${["members","snaps"].map($=>{let M=v[$][S],C=b[$].find(I=>I.key===M),E=C?r.cardOptions($,C.cardId,r.resolvedGrowth($,C,b.unknownPolicy)):null;return E?p`
                      <a
                        class=${$==="members"?"tb-slot__member":"tb-slot__snap"}
                        href=${w($,C.cardId)}
                        aria-label=${E.label}
                      >
                        ${Ie(E)}
                      </a>
                    `:p`
                      <span class="tb-slot__empty">${t.t("noSnap","No snap")}</span>
                    `})}
            </li>
          `)}
      </ol>
    `;return p`
      <dialog class="dialog tb-team-growth" data-managed-modal ${ie(()=>this.close())} aria-label=${a("title")}>
        <header class="row row--between">
          <strong>${a("title")}</strong>
          <div class="cluster">
            <button
              class="button button--text tb-team-growth__settings-toggle"
              aria-expanded=${this.settingsOpen}
              @click=${()=>{this.settingsOpen=!this.settingsOpen,t.requestUpdate()}}
            >
              ${a("scenario")}
            </button>
            ${D({icon:"close",label:t.common("common.actions.close","Close"),onClick:()=>this.close()})}
          </div>
        </header>
        <div class="tb-team-growth__body">
          <div class="tb-team-growth__results stack">
            <div class="stack">
              <strong lang=${e.hit.song?r.songTitleLanguage(e.hit.song.songId):t.locale}>${e.hit.song?r.songTitle(e.hit.song.songId):l(e.hit).label}</strong>
              <div class="cluster supporting-text">
                ${e.hit.song?p`
                        <span>${r.difficultyLabel(e.hit.song.songId,e.hit.song.difficulty)}</span>
                      `:k}
                <span>${a("snapshot")}</span>
              </div>
              <div class="stack">
                <span>${r.cardName(s.kind,g.cardId)}</span>
                <span>${y(i.steps)}</span>
              </div>
            </div>
            <div class="tb-team-growth__values">
              ${["fixedBefore","fixedAfter"].map(v=>p`
                  <section class="surface stack" data-growth-result=${v}>
                    <h3 class="detail-section-title">${a(v)}</h3>
                    <span>${l(e.hit).label}</span>
                    <strong class="tb-team-growth__value tabular">${u(c(v))}</strong>
                    <span class="supporting-text" role="status">
                      ${v==="fixedBefore"&&!this.results.fixedBefore?a("original"):h(v)}
                    </span>
                  </section>
                `)}
            </div>
            <dl class="spec-list">
              <div>
                <dt>${a("fixedGain")}</dt>
                <dd class="tabular" data-growth-delta="fixed">${d(c("fixedBefore"),c("fixedAfter"))}</dd>
              </div>
            </dl>
            ${W({id:"tb-growth-current-team",label:t.t("formation","Formation"),expanded:this.expanded.has("current"),onExpandedChange:v=>{v?this.expanded.add("current"):this.expanded.delete("current"),t.requestUpdate()},content:x(c("fixedAfter")??e.hit,c("fixedAfter")?i.request:e.input)})}
            ${c("searchAfter")?W({id:"tb-growth-new-team",label:a("searchAfter"),expanded:this.expanded.has("new"),onExpandedChange:v=>{v?this.expanded.add("new"):this.expanded.delete("new"),t.requestUpdate()},content:p`
                      <div class="stack">
                        ${c("searchAfter").song?p`
                                <div class="cluster">
                                  <span lang=${r.songTitleLanguage(c("searchAfter").song.songId)}>${r.songTitle(c("searchAfter").song.songId)}</span>
                                  <span>
                                    ${r.difficultyLabel(c("searchAfter").song.songId,c("searchAfter").song.difficulty)}
                                  </span>
                                </div>
                              `:k}
                        ${x(c("searchAfter"),i.request)}
                      </div>
                    `}):k}
            <section class="surface stack">
              <h3 class="detail-section-title">${a("searchBefore")}</h3>
              <div class="row row--between">
                <strong class="tabular">${u(c("searchBefore"))} → ${u(c("searchAfter"))}</strong>
                <span role="status">${h("searchBefore")}</span>
              </div>
              <dl class="spec-list">
                <div>
                  <dt>${a("searchGrowthGain")}</dt>
                  <dd class="tabular" data-growth-delta="search">${d(c("searchBefore"),c("searchAfter"))}</dd>
                </div>
              </dl>
            </section>
          </div>
          <aside class=${`surface stack tb-team-growth__settings${this.settingsOpen?" is-open":""}`}>
            <div class="stack tb-team-growth__fields">
              <h3 class="detail-section-title">${a("scenario")}</h3>
              <span class="tb-field__label">${t.t("growthComparison.card","Card")}</span>
              <button
                class="button button--outlined button--full"
                type="button"
                data-growth-card-picker
                ?disabled=${!!this.phase}
                @click=${()=>{t.slotPicker={growth:!0,kind:s.kind},t.requestUpdate()}}
              >${O("search",20)}<span class="truncate">${r.cardName(s.kind,g.cardId)}</span></button>
              <div class="stack stack--tight" role="group" aria-label=${t.t("growthComparison.action","Training")}>
                <span class="tb-field__label">${t.t("growthComparison.action","Training")}</span>
                <div class="cluster tb-growth-options">
                  ${f.map(v=>{let b=s.actions.includes(v),S=i.steps.find($=>$.action===v);return p`
                      <button class="chip" type="button" role="checkbox" aria-checked=${String(b)} ?disabled=${!!this.phase}
                        @click=${()=>this.select({actions:b?s.actions.filter($=>$!==v):[...s.actions,v]})}>
                        ${b?O("check",18):k}
                        <span class="chip__label">${m(v)}</span>
                        ${S?p`<span class="chip__count tabular">${S.from===null?"\u2014":Ee(v,S.from)} → ${Ee(v,S.to)}</span>`:k}
                      </button>
                    `})}
                </div>
                <div class="cluster tb-growth-actions">
                  <button class="button button--text button--small" type="button" ?disabled=${!!this.phase}
                    @click=${()=>this.select({actions:[...f]})}>${t.t("quickOwnAll","Select all")}</button>
                  <button class="button button--text button--small" type="button" ?disabled=${!!this.phase||!s.actions.length}
                    @click=${()=>this.select({actions:[]})}>${t.common("common.actions.clear","Clear")}</button>
                </div>
              </div>
              ${F({label:t.t("growthComparison.target","Target level"),value:s.target,options:[{value:"next",label:t.t("tg.targetNext","Next stage"),disabled:!!this.phase},{value:"cap",label:t.t("tg.targetMax","Max"),disabled:!!this.phase}],onSelect:v=>this.select({target:v})})}
              <div class="tb-team-growth__transition tabular">
                ${i.status==="ready"?y(i.steps):t.t(`growthComparison.status.${i.status}`,i.status)}
              </div>
              ${i.status==="missing-state"?p`
                      <button
                        class="button button--text"
                        @click=${()=>{this.close(),t.setTab("box"),t.view?.[s.kind].has(g.cardId)&&(t.editing={kind:s.kind,cardId:g.cardId})}}
                      >
                        ${t.t("growthComparison.edit","Enter growth")}
                      </button>
                    `:k}
              <dl class="spec-list supporting-text">
                <div>
                  <dt>${a("pool")}</dt>
                  <dd>${e.input.members.length} / ${e.input.snaps.length}</dd>
                </div>
                <div>
                  <dt>${t.t("unknownPolicy","Growth not entered")}</dt>
                  <dd>
                    ${t.t(e.input.unknownPolicy==="max"?"unknownMax":"unknownMin",e.input.unknownPolicy)}
                  </dd>
                </div>
              </dl>
            </div>
            <div class="tb-team-growth__status" role="status" data-active=${!!(this.error||this.phase)}>
              ${this.error||(this.phase?p`
                      <span>${a(this.phase)}</span>
                      <span>${t.computationStatus()}</span>
                    `:k)}
            </div>
            ${this.phase?p`
                    <button class="button button--tonal" @click=${()=>this.stop()}>
                      ${t.common("common.actions.cancel","Cancel")}
                    </button>
                  `:p`
                    <button
                      class="button"
                      data-growth-run="fixed"
                      ?disabled=${i.status!=="ready"||t.running}
                      @click=${()=>void this.run()}
                    >
                      ${a("runFixed")}
                    </button>
                    <button
                      class="button button--tonal"
                      data-growth-run="search"
                      ?disabled=${!this.results.fixedAfter||!ee(this.results.fixedAfter)||!!this.results.fixedAfter.error||t.running}
                      @click=${()=>void this.run(!0)}
                    >
                      ${a(this.results.searchAfter&&!ee(this.results.searchAfter)?"continue":"runSearch")}
                    </button>
                  `}
            <button class="button button--tonal" ?disabled=${t.running} @click=${()=>this.showTraining(e)}>
              ${t.t("trainingPlan.title","Plan with materials")}
            </button>
            ${W({id:"tb-growth-materials",label:a("materials"),expanded:this.expanded.has("materials"),onExpandedChange:v=>{v?this.expanded.add("materials"):this.expanded.delete("materials"),t.requestUpdate()},content:this.materials(g.cardId)})}
          </aside>
        </div>
      </dialog>
    `}};function il(n,e,t){let r=new Map;for(let s of e.querySelectorAll("[data-prerendered]")){if(s.parentElement?.closest("[data-prerendered]")!==e)continue;let i=e.ownerDocument.createTreeWalker(s,NodeFilter.SHOW_COMMENT),a;for(;a=i.nextNode();)r.has(a)||!/^(?:lit-part|\/lit-part|lit-node)(?: |$)/u.test(a.data)||(r.set(a,a.data),a.data=`workspace-owned:${a.data}`)}try{Zr(n,e,t)}catch{r.clear(),e.replaceChildren()}finally{for(let[s,i]of r)s.data=i}}var nd="\0page-data",Hs="\0";function Gs(n){if(!n||typeof n!="object"||Array.isArray(n))return n;let e=n[nd];if(!Array.isArray(e)||Object.keys(n).length!==2||!("value"in n))return n;let t=new Map,r=i=>{let a=t.get(i);return a===void 0&&(a=s(e[i]),t.set(i,a)),structuredClone(a)},s=i=>{if(i===null||typeof i!="object")return i;if(Array.isArray(i)){for(let o=0;o<i.length;o++)i[o]=s(i[o]);return i}let a=Object.keys(i);if(a.length===1&&a[0]===Hs&&typeof i[Hs]=="number")return r(i[Hs]);for(let o of a)i[o]=s(i[o]);return i};return s(n.value)}var Vs=new WeakMap,Js=new Map,Ks=new WeakSet,al=new WeakSet;function rd(n){let e=Js.get(n);return e||(e=fetch(n,{cache:"force-cache"}).then(t=>t.ok?t.text():void 0).catch(()=>{}).finally(()=>Js.delete(n)),Js.set(n,e)),e}function sd(n){let e=n.head?.querySelector('meta[name="haneoka-public-static"]')?.getAttribute("content");try{if(!e)return Promise.resolve();let t=JSON.parse(e);if(t.private!==!0&&t.functional!==!0)return Promise.resolve()}catch{return Promise.resolve()}return Di().catch(()=>{})}function ol(n,e){let t=n.getAttribute("data-page-data"),r=n.ownerDocument;if(!t)return!1;let s=r.getElementById(t)?.getAttribute("data-src"),i=r.head?.querySelector('meta[name="haneoka-public-static"]');return!s&&(!i||al.has(n))?!1:(Ks.has(n)||(Ks.add(n),n.inert=!0,sd(r).then(async()=>{let a=r.getElementById(t),o=a?.getAttribute("data-src");if(a&&o){let c=await rd(o);a.getAttribute("data-src")===o&&(c!==void 0&&(a.textContent=c),a.removeAttribute("data-src"))}Ks.delete(n),al.add(n),n.inert=!1,n.isConnected&&e()})),!0)}function id(n){let e=n.ownerDocument?.documentElement?.dataset;if(!e)return!1;let t=`view-v1-${e.contentVisibilityVersion}-${qi()}-${Number(Oi())}-${Number(Vr())}`;return!e.contentResponseKey||e.contentResponseKey===t}function Ws(n,e="data-page-data"){if(!id(n))return;let t=JSON.stringify([Ni(),Vr()]),r=Vs.get(n)?.get(e);if(r?.scope===t)return r.value;let s=n.getAttribute(e),i=s?n.ownerDocument.getElementById(s):null;if(i?.textContent)try{let a=Gs(JSON.parse(i.textContent)),o=Vs.get(n)||new Map;return o.set(e,{scope:t,value:a}),Vs.set(n,o),n.isConnected&&i.remove(),a}catch{return}}var Cr=class extends aa{computeValidity(e){return this.selectControl||(this.selectControl=document.createElement("select")),pt(p`<option value=${e.value}></option>`,this.selectControl),this.selectControl.value=e.value,this.selectControl.required=e.required,{validity:this.selectControl.validity,validationMessage:this.selectControl.validationMessage}}equals(e,t){return e.value===t.value&&e.required===t.required}copy({value:e,required:t}){return{value:e,required:t}}};function ll(n){let e=[];for(let t=0;t<n.length;t++){let r=n[t];r.selected&&e.push([r,t])}return e}var cl,Ir=Symbol("value"),ad=gt(Fa(ia(Mn(Tn(te))))),U=class extends ad{get value(){return this[Ir]}set value(e){this.lastUserSetValue=e,this.select(e)}get options(){return this.menu?.items??[]}get selectedIndex(){let[e,t]=(this.getSelectedOptions()??[])[0]??[];return t??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([e])=>e)}get hasError(){return this.error||this.nativeError}constructor(){super(),this.quick=!1,this.required=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.supportingText="",this.error=!1,this.menuPositioning="popover",this.clampMenuWidth=!1,this.typeaheadDelay=xa,this.hasLeadingIcon=!1,this.displayText="",this.menuAlign="start",this[cl]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.defaultFocus=ft.NONE,this.prevOpen=this.open,this.selectWidth=0,!!1&&(this.addEventListener("focus",this.handleFocus.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this)))}select(e){let t=this.options.find(r=>r.value===e);t&&this.selectItem(t)}selectIndex(e){let t=this.options[e];t&&this.selectItem(t)}reset(){for(let e of this.options)e.selected=e.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}showPicker(){this.open=!0}[(cl=Ir,za)](e){e?.preventDefault();let t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}update(e){if(this.hasUpdated||this.initUserSelection(),this.prevOpen!==this.open&&this.open){let t=this.getBoundingClientRect();this.selectWidth=t.width}this.prevOpen=this.open,super.update(e)}render(){return p`
      <span
        class="select ${Be(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `}async firstUpdated(e){await this.menu?.updateComplete,this.lastSelectedOptionRecords.length||this.initUserSelection(),!this.lastSelectedOptionRecords.length&&!!1&&!this.options.length&&setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){let e=this.ariaLabel||this.label;return $a`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${e||k}
          aria-describedby="description"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          ?no-asterisk=${this.noAsterisk}
          .focused=${this.focused||this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return p`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return p`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `}renderLabel(){return p`<div id="label">${this.displayText||p`&nbsp;`}</div>`}renderMenu(){let e=this.label||this.ariaLabel;return p`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${e||k}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${Bn({"--__menu-min-width":`${this.selectWidth}px`,"--__menu-max-width":this.clampMenuWidth?`${this.selectWidth}px`:void 0})}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${this.menuAlign==="start"?"end-start":"end-end"}
        .menuCorner=${this.menuAlign==="start"?"start-start":"start-end"}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`}renderMenuContent(){return p`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;let t=this.menu.typeaheadController,r=e.code==="Space"||e.code==="ArrowDown"||e.code==="ArrowUp"||e.code==="End"||e.code==="Home"||e.code==="Enter";if(!t.isTypingAhead&&r){switch(e.preventDefault(),this.open=!0,e.code){case"Space":case"ArrowDown":case"Enter":this.defaultFocus=ft.NONE;break;case"End":this.defaultFocus=ft.LAST_ITEM;break;case"ArrowUp":case"Home":this.defaultFocus=ft.FIRST_ITEM;break;default:break}return}if(e.key.length===1){t.onKeydown(e),e.preventDefault();let{lastActiveRecord:i}=t;if(!i)return;this.labelEl?.setAttribute?.("aria-live","polite"),this.selectItem(i[ka.ITEM])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!this.open}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&wa(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;let e=this.menu.items;return this.lastSelectedOptionRecords=ll(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await this.menu?.updateComplete,super.getUpdateComplete()}updateValueAndDisplayText(){let e=this.getSelectedOptions()??[],t=!1;if(e.length){let[r]=e[0];t=this.lastSelectedOption!==r,this.lastSelectedOption=r,this[Ir]=r.value,this.displayText=r.displayText}else t=this.lastSelectedOption!==null,this.lastSelectedOption=null,this[Ir]="",this.displayText="";return t}async handleOpening(e){if(this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(e),this.defaultFocus!==ft.NONE)return;let t=this.menu.items,r=va(t)?.item,[s]=this.lastSelectedOptionRecords[0]??[null];r&&r!==s&&(r.tabIndex=-1),s=s??t[0],s&&(s.tabIndex=0,s.focus())}redispatchEvent(e){Dt(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){let t=e.detail.reason,r=e.detail.itemPath[0];this.open=!1;let s=!1;t.kind==="click-selection"?s=this.selectItem(r):t.kind==="keydown"&&ya(t.key)?s=this.selectItem(r):(r.tabIndex=-1,r.blur()),s&&this.dispatchInteractionEvents()}selectItem(e){return(this.getSelectedOptions()??[]).forEach(([r])=>{e!==r&&(r.selected=!1,r.tabIndex=-1)}),e.selected=!0,e.tabIndex=0,this.updateValueAndDisplayText()}handleRequestSelection(e){let t=e.target;this.lastSelectedOptionRecords.some(([r])=>r===t)||this.selectItem(t)}handleRequestDeselection(e){let t=e.target;this.lastSelectedOptionRecords.some(([r])=>r===t)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):this.lastUserSetSelectedIndex!==null&&!this.lastSelectedOptionRecords.length?this.selectIndex(this.lastUserSetSelectedIndex):this.updateValueAndDisplayText()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}[An](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}click(){this.field?.click()}[ra](){return new Cr(()=>this)}[sa](){return this.field}};U.shadowRootOptions={...te.shadowRootOptions,delegatesFocus:!0};B([N({type:Boolean})],U.prototype,"quick",void 0);B([N({type:Boolean})],U.prototype,"required",void 0);B([N({type:String,attribute:"error-text"})],U.prototype,"errorText",void 0);B([N()],U.prototype,"label",void 0);B([N({type:Boolean,attribute:"no-asterisk"})],U.prototype,"noAsterisk",void 0);B([N({type:String,attribute:"supporting-text"})],U.prototype,"supportingText",void 0);B([N({type:Boolean,reflect:!0})],U.prototype,"error",void 0);B([N({attribute:"menu-positioning"})],U.prototype,"menuPositioning",void 0);B([N({type:Boolean,attribute:"clamp-menu-width"})],U.prototype,"clampMenuWidth",void 0);B([N({type:Number,attribute:"typeahead-delay"})],U.prototype,"typeaheadDelay",void 0);B([N({type:Boolean,attribute:"has-leading-icon"})],U.prototype,"hasLeadingIcon",void 0);B([N({attribute:"display-text"})],U.prototype,"displayText",void 0);B([N({attribute:"menu-align"})],U.prototype,"menuAlign",void 0);B([N()],U.prototype,"value",null);B([N({type:Number,attribute:"selected-index"})],U.prototype,"selectedIndex",null);B([me()],U.prototype,"nativeError",void 0);B([me()],U.prototype,"nativeErrorText",void 0);B([me()],U.prototype,"focused",void 0);B([me()],U.prototype,"open",void 0);B([me()],U.prototype,"defaultFocus",void 0);B([xe(".field")],U.prototype,"field",void 0);B([xe("md-menu")],U.prototype,"menu",void 0);B([xe("#label")],U.prototype,"labelEl",void 0);B([Nt({slot:"leading-icon",flatten:!0})],U.prototype,"leadingIcons",void 0);var _r=class extends U{constructor(){super(...arguments),this.fieldTag=Sa`md-outlined-field`}};var Xs=je`:host{--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-outlined-select-text-field-container-shape-start-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-outlined-select-text-field-container-shape-start-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-outlined-select-text-field-container-shape-end-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-start: var(--md-outlined-select-text-field-container-shape-end-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`,Wh=Xs.styleSheet;var Qs=je`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`,Zh=Qs.styleSheet;var Zs=class extends _r{};Zs.styles=[Qs,Xs];Zs=B([ht("md-outlined-select")],Zs);function od(){return new Event("request-selection",{bubbles:!0,composed:!0})}function ld(){return new Event("request-deselection",{bubbles:!0,composed:!0})}var Er=class{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){return this.internalDisplayText!==null?this.internalDisplayText:this.menuItemController.typeaheadText}setDisplayText(e){this.internalDisplayText=e}constructor(e,t){this.host=e,this.internalDisplayText=null,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=r=>{this.menuItemController.onKeydown(r)},this.lastSelected=this.host.selected,this.menuItemController=new Ca(e,t),e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected!==this.host.selected&&!this.firstUpdate&&(this.host.selected?this.host.dispatchEvent(od()):this.host.dispatchEvent(ld())),this.lastSelected=this.host.selected,this.firstUpdate=!1}};var cd=gt(te),oe=class extends cd{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new Er(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(p`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return p`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||k}
        aria-selected=${this.ariaSelected||k}
        aria-checked=${this.ariaChecked||k}
        aria-expanded=${this.ariaExpanded||k}
        aria-haspopup=${this.ariaHasPopup||k}
        class="list-item ${Be(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${e}</li
      >
    `}renderRipple(){return p` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return p` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return p`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}};oe.shadowRootOptions={...te.shadowRootOptions,delegatesFocus:!0};B([N({type:Boolean,reflect:!0})],oe.prototype,"disabled",void 0);B([N({type:Boolean,attribute:"md-menu-item",reflect:!0})],oe.prototype,"isMenuItem",void 0);B([N({type:Boolean})],oe.prototype,"selected",void 0);B([N()],oe.prototype,"value",void 0);B([xe(".list-item")],oe.prototype,"listItemRoot",void 0);B([Nt({slot:"headline"})],oe.prototype,"headlineElements",void 0);B([Nt({slot:"supporting-text"})],oe.prototype,"supportingTextElements",void 0);B([ea({slot:""})],oe.prototype,"defaultElements",void 0);B([N({attribute:"typeahead-text"})],oe.prototype,"typeaheadText",null);B([N({attribute:"display-text"})],oe.prototype,"displayText",null);var Ys=class extends oe{};Ys.styles=[Ia];Ys=B([ht("md-select-option")],Ys);var Eg=Symbol("unresolved-summary");var dl=Hr;var ul=["members","snapshots","characters","bands","bandItems","songs","events"],dd=["memberCardLevels","memberCardAwake","memberCardRanks","supportCardLevels","supportCardRanks"];function ei(n,e=[]){if(!n.length)throw new Error("Team data source missing");let t=n[0],r=structuredClone(t),s={identities:{},owners:{},availability:{},unavailableServers:e,challengeMusics:[]};r.crossServer=s;for(let d of ul)s.owners[d]={},s.availability[d]={},Object.assign(r,{[d]:{}});let i=new Set,a=d=>{if(typeof d=="number"&&Number.isInteger(d)&&d>0&&d<=2147483647)i.add(d);else if(d&&typeof d=="object")for(let[u,h]of Object.entries(d))a(Number(u)),a(h)};n.forEach(a);let o=1,c=()=>{for(;i.has(o);)o++;if(o>2147483647)throw new RangeError("Team data reference namespace exhausted");return i.add(o),o++},l=new Set;for(let d=0;d<n.length;d++){let u=structuredClone(n[d]),h=u.identity.server;u.arena!==void 0&&(r.arena={...r.arena,...u.arena}),s.identities[h]=u.identity;let g=b=>{if(typeof b=="string"&&b.startsWith(`/assets/${h}/`)){let S=new URL(b,"https://release.invalid");return S.searchParams.set("release",u.identity.releaseId),S.pathname+S.search}return Array.isArray(b)?b.map(g):b&&typeof b=="object"?Object.fromEntries(Object.entries(b).map(([S,$])=>[S,g($)])):b},f=new Map,m=(b,S)=>{let $=Number(S);if(!Number.isSafeInteger($)||$<=0||d===0)return S;let M=`${b}:${$}`;return f.has(M)||f.set(M,c()),f.get(M)},y=(b,S,$={})=>{let M=Ue(b);for(let[C,E]of Object.entries(S))M[C]!==void 0&&(M[C]=m(E,M[C]));for(let[C,E]of Object.entries($))Array.isArray(M[C])&&(M[C]=M[C].map(I=>m(E,I)));return M},w=(b,S)=>le(b).map($=>y($,{id:`effect:${S}`,effectId:`effect:${S}`,liveSkillID:"skill:live",liveSkillId:"skill:live",leaderSkillID:"skill:leader",leaderSkillId:"skill:leader",supportSkillID:"skill:support",supportSkillId:"skill:support",gekisouSkillID:"skill:gekiso",gekisouSkillId:"skill:gekiso",gekisouSupportSkillID:"skill:gekisoSupport",gekisouSupportSkillId:"skill:gekisoSupport",skillConditionGroup:"condition-group",conditionGroup:"condition-group",skillTriggerConditionGroup:"condition-group",triggerConditionGroup:"condition-group",skillReleaseConditionGroup:"condition-group",releaseConditionGroup:"condition-group",effectExecuteLimitResetConditionGroup:"condition-group",executeLimitResetConditionGroup:"condition-group",skillCumulativeConditionID:"cumulative",cumulativeConditionId:"cumulative"},{skillTargetIDs:"target",targetIds:"target"}));for(let b of Object.values(u.members))b.levelLimits=Object.fromEntries((u.progression.memberCardLevelLimits??[]).filter(S=>Number(S.rarity)===b.rarity).map(S=>[String(S.awakeCount),Number(S.limitLevel)])),b.levelGroup=Number(m("memberCardLevels",b.levelGroup)),b.trainingGroup=Number(m("memberCardAwake",b.trainingGroup)),b.awakeningGroup=Number(m("memberCardRanks",b.awakeningGroup)),b.leaderSkillId=Number(m("skill:leader",b.leaderSkillId)),b.liveSkillId=Number(m("skill:live",b.liveSkillId)),b.gekisoSkillId=Number(m("skill:gekiso",b.gekisoSkillId));for(let b of Object.values(u.snapshots))b.levelGroup=Number(m("supportCardLevels",b.levelGroup)),b.awakeningGroup=Number(m("supportCardRanks",b.awakeningGroup)),b.supportSkillIds=b.supportSkillIds.map(S=>Number(m("skill:support",S))),b.gekisoSupportSkillIds=b.gekisoSupportSkillIds.map(S=>Number(m("skill:gekisoSupport",S)));for(let b of dd){let S=(u.progression[b]??[]).map($=>y($,{group:b}));d===0?r.progression[b]=S:r.progression[b]=[...r.progression[b]??[],...S]}for(let[b,S]of Object.entries(u.skills)){let $=Object.fromEntries(Object.entries(S).map(([M,C])=>[String(m(`skill:${b}`,M)),g({...C,id:m(`skill:${b}`,C.id??M),effects:w(C.effects,b)})]));r.skills[b]=d===0?$:{...r.skills[b],...$}}let x={targets:[{id:"target"},{}],conditions:[{id:"condition"},{conditionTargetIDs:"target"}],conditionSets:[{id:"condition-set",group:"condition-group"},{conditionIds:"condition"}],cumulativeConditions:[{id:"cumulative"},{conditionTargetIDs:"target"}]};for(let[b,[S,$]]of Object.entries(x)){let M=le(u.skillReference[b]).map(C=>y(C,S,$));r.skillReference[b]=d===0?M:[...le(r.skillReference[b]),...M]}for(let b of Object.values(u.bandItems))b.effects=w(b.effects,"band-item");for(let b of Object.values(u.songs))b.liveScoreRankGroup=m("score-rank",b.liveScoreRankGroup);let v=le(u.liveTools.scoreRanks).map(b=>y(b,{group:"score-rank"}));r.liveTools.scoreRanks=d===0?v:[...le(r.liveTools.scoreRanks),...v];for(let b of Object.values(u.events)){let S={...pe(b.tables)};for(let[$,M]of Object.entries(u.eventRules))Array.isArray(M)&&!Object.hasOwn(S,$)&&(S[$]=M.map(Ue).filter(C=>!C.eventId||Number(C.eventId)===Number(b.id)));b.tables=S}for(let b of ul)for(let[S,$]of Object.entries(u[b])){let M=s.availability[b][S]??[];M.push(h),s.availability[b][S]=M,!Object.hasOwn(r[b],S)&&(Object.assign(r[b],{[S]:g($)}),s.owners[b][S]=h)}for(let b of u.challengeMusicTable?.rows??[]){let S=String(b.eventId),$=Number(b.id);s.owners.events[S]!==h||l.has($)||(l.add($),s.challengeMusics.push(b))}}return r}async function pl(n,e){Pt([n]).length||(n="intl");let t=Pt([n,...dl.filter(a=>a!==n)]),r=await Promise.allSettled(t.map(a=>zi(a,e)));e?.throwIfAborted();let s=r[0];if(s.status==="rejected")throw s.reason;let i=r.flatMap(a=>a.status==="fulfilled"?[a.value]:[]);return ei(i,t.filter((a,o)=>r[o].status==="rejected"))}var ud="[data-top-app-bar-actions]";var ml="[data-app-bar-search]",De;var pd=n=>n.replace(/-\d+$/u,"");function fl(n,e,t,r){let s=n.querySelector(`[${t}="${e}"]`)||(r?[...n.querySelectorAll(`[data-app-bar-static][${t}]`)].find(i=>i.dataset.appBarOwnerKind===pd(e)):null);return s?(r&&s.hasAttribute("data-app-bar-static")&&(s.replaceChildren(),s.removeAttribute("data-app-bar-static"),s.setAttribute(t,e)),s):null}var md=0,hd=0,Rr=()=>typeof document>"u"?null:document.querySelector(ud);function bl(n,e){let t=Rr();if(!t)return null;let r=fl(t,n,"data-app-bar-owner",e);if(r||!e)return r??null;let s=document.createElement("div");return s.dataset.appBarOwner=n,s.className="top-app-bar__group",t.append(s),s}function hl(n,e){let t=Rr();if(!t)return null;let r=fl(t,n,"data-app-bar-search-owner",e);if(r||!e)return r??null;let s=document.createElement("div");return s.dataset.appBarSearch="true",s.dataset.appBarSearchOwner=n,s.className="top-app-bar__search-group",t.prepend(s),s}function ti(n,e,t){let r=t??n.dataset.searchExpanded==="true";n.dataset.searchExpanded=String(r);let s=n.dataset.searchInputId??=`app-bar-search-${++hd}`;pt(vl(e,s,r,()=>{ti(n,e,!0),queueMicrotask(()=>n.querySelector("input")?.focus())},()=>{let a=n.querySelector("input")?.value??e.value;ti(n,{...e,value:a},!1),n.querySelector(".top-app-bar__search-toggle")?.focus()}),n)}function vl(n,e,t,r,s){return p`
      <form
        class="top-app-bar__search"
        role="search"
        data-search-expanded=${t}
        @keydown=${i=>{i.key!=="Escape"||!t||(i.preventDefault(),i.stopPropagation(),s())}}
        @submit=${i=>{i.preventDefault();let a=i.currentTarget.querySelector("input");n.onSubmit?.(a?.value??n.value)}}
      >
        <button
          class="icon-button top-app-bar__search-toggle"
          type="button"
          aria-controls=${e}
          aria-expanded=${t}
          aria-keyshortcuts="/"
          aria-label=${n.label}
          @click=${r}
        >
          ${O("search",24)}
        </button>
        <label class="top-app-bar__search-field" for=${e}>
          ${O("search",20)}
          <span class="sr-only">${n.label}</span>
          <input
            id=${e}
            type="search"
            aria-keyshortcuts="/"
            .value=${n.value}
            aria-label=${n.label}
            placeholder=${n.label}
            autocomplete="off"
            @input=${i=>n.onInput(i.target.value)}
          />
        </label>
        <button
          class="icon-button top-app-bar__search-close"
          type="button"
          aria-label=${n.closeLabel??G(document.documentElement.dataset.locale||"en","common.actions.close","Close")}
          @click=${s}
        >
          ${O("close",24)}
        </button>
      </form>
    `}function un(n,e,t,r){if(De){r==="leading"?(De.actions.delete(n),De.actions=new Map([[n,e],...De.actions])):De.actions.set(n,e);return}if(t&&"isConnected"in t&&t.isConnected===!1)return;let s=bl(n,!0);if(s){if(r==="leading"){let i=s.parentElement?.querySelector(":scope > [data-app-bar-player]");i&&i.nextElementSibling!==s&&i.after(s)}pt(e,s,{host:t})}}function We(n){if(De){De.actions.delete(n);return}let e=bl(n,!1);e&&(pt(void 0,e),e.remove())}function gd(){gl||(gl=!0,document.addEventListener("keydown",n=>{if(n.key!=="/"||n.ctrlKey||n.metaKey||n.altKey||n.defaultPrevented||n.target?.closest("input, textarea, select, [contenteditable=''], [contenteditable='true'], dialog[open]"))return;let t=Rr()?.querySelector(`${ml} input`),r=Rr()?.querySelector(`${ml} .top-app-bar__search-toggle`);!t&&!r||(n.preventDefault(),t&&t.offsetParent!==null?t.focus():r?.click())}))}var gl=!1;function yl(n,e){if(De){let s=De,i=`app-bar-search-${n}`,a={...e,closeLabel:e.closeLabel??G(s.locale,"common.actions.close","Close")};return s.search.set(n,{inputId:i,expanded:e.expanded??!1,content:vl(a,i,e.expanded??!1,()=>{},()=>{})}),()=>{s.search.delete(n)}}gd();let t=hl(n,!0),r=++md;return t&&(t.dataset.appBarSearchGeneration=String(r),ti(t,e)),()=>{let s=hl(n,!1);s?.dataset.appBarSearchGeneration===String(r)&&s.remove()}}var wl=new WeakMap,ni=new WeakMap,fd=(n,e)=>n==="members"?{level:e?.level??null,training:e?.awake??null,awakening:e?.rank??null,live:e?.skill??null,gekisou:e?.gekisoSkill??null}:{level:e?.level??null,break:e?.rank??null};function bd(n){let{kind:e,cardId:t}=n.editing,r=n.catalog,s=n.data.crossServer?.owners[e==="members"?"members":"snapshots"]?.[String(t)]??n.data.identity.server,i=n.data.crossServer?.identities[s]??n.data.identity,a=ni.get(r);a||ni.set(r,a=new Map);let o=JSON.stringify([i,n.locale]),c=a.get(o);if(c)return c;let l={error:!1};a.set(o,l);let d=n.locale;return fetch(`/${s}/${d}/growth-data.json`).then(async u=>{if(!u.ok)throw new Error(String(u.status));let h=await u.json();if(h.schema!=="haneoka-growth-page-v1"||h.locale!==d||h.identity.server!==i.server||h.identity.releaseId!==i.releaseId||h.identity.sourceId!==i.sourceId)throw new Error("growth-data-release");l.data=h}).catch(()=>{l.error=!0}).finally(()=>{n.catalog===r&&n.requestUpdate()}),l}function kl(n){let e=n.editing,{kind:t,cardId:r}=e,s=n.catalog,i=n.master,a=t==="members"?n.view.members.get(r):n.view.snaps.get(r),o=fd(t,a),c=wl.get(n);(!c||c.editing!==e||c.catalog!==s||c.owner!==n.snapshot?.owner)&&(c={editing:e,catalog:s,owner:n.snapshot?.owner,before:o,expanded:new Set},wl.set(n,c));let l=c.before,d=c,u=n.planner.cardById(r),h=u?{error:!1}:bd(n),g=h.data?.cards.find(C=>C.id===r&&C.kind===(t==="members"?"member":"support")),f=(C,E=!1)=>`${new Intl.NumberFormat(n.locale,{maximumFractionDigits:E?2:0}).format(E?C/100:C)}${E?"%":""}`,m=C=>{if(t==="snaps"){let R=i.snaps.get(r),L=C.level==null?void 0:i.snapLevels.get(R.levelGroup)?.get(C.level);return L?R.statMax.map((H,Z)=>_n(H,L[Z])):null}let E=i.members.get(r),I=C.level==null?void 0:i.memberLevels.get(E.levelGroup)?.get(C.level),A=C.training==null?void 0:i.memberAwake.get(E.awakeGroup)?.get(C.training),_=C.awakening==null?void 0:i.memberRanks.get(E.rankGroup)?.get(C.awakening);return I&&A&&_?E.statMax.map((R,L)=>In(R,I[L],A[L],_.rates[L])):null},y=m(l),w=m(o),x=(C,E,I,A=!1)=>{let _=E===null||I===null?null:I-E;return p`
      <div class="tb-editor-stat">
        <dt>${C}</dt>
        <dd class="tb-editor-stat__value">${I===null?"\u2014":f(I,A)}</dd>
        <dd class="tb-editor-stat__comparison">
          <span>${n.t("editorPreview.before","Before")} ${E===null?"\u2014":f(E,A)}</span>
          <span class=${`tb-editor-stat__delta${_?" is-changed":""}`}>
            ${_===null?"\u2014":`${_>0?"+":""}${f(_,A)}`}
          </span>
        </dd>
      </div>
    `},v=(C,E)=>{if(t==="members"){let _=i.members.get(r),R=C.awakening==null?void 0:i.memberRanks.get(_.rankGroup)?.get(C.awakening);return E==="typeLinkRate"?null:R?.[E]??null}let I=i.snaps.get(r);return(C.break==null?void 0:i.snapRanks.get(I.rankGroup)?.get(C.break))?.typeLinkRate??null},b=p`
    <section class="tb-editor__statistics" aria-labelledby="tb-editor-stats-title">
      <div class="tb-editor__section-heading">
        <h3 id="tb-editor-stats-title" class="detail-section-title">
          ${n.t(t==="members"?"editorPreview.stats":"editorPreview.statBonus","Parameter")}
        </h3>
      </div>
      <dl class="tb-editor__stat-grid">
        ${t==="members"?x(n.t("editorPreview.total","Total Power"),y?.reduce((C,E)=>C+E,0)??null,w?.reduce((C,E)=>C+E,0)??null):k}
        ${["performance","technique","visual"].map((C,E)=>x(n.t(`editorPreview.terms.${C}`,{performance:"Performance",technique:"Technique",visual:"Visual"}[C]),y?.[E]??null,w?.[E]??null,t==="snaps"))}
        ${t==="snaps"?x(n.t("editorPreview.typeLink","Type Link"),v(l,"typeLinkRate"),v(o,"typeLinkRate"),!0):k}
      </dl>
    </section>
  `,S=(C,E=0,I)=>{let A=i.members.get(r),_=i.snaps.get(r),R=t==="members"?C==="leader"?A.leaderSkillId:C==="live"?A.liveSkillId:A.gekisoSkillId:C==="support"?_.supportSkillIds[E]:_.gekisoSupportSkillIds[E];if(!R)return k;let L=C==="gekisou"?"gekiso":C==="gekisouSupport"?"gekisoSupport":C,H=s.data.skills[L]?.[String(R)];if(u){let q=u.skills[t==="members"?C==="leader"?0:C==="live"?1:2:C==="support"?E:E+2];q&&n.planner.describeSkill(q)}let Z=u&&H?cr({resolvedSkills:{[C]:H}},s.data.skillReference)[0]:void 0,se=g?.skills.find(q=>q.group===C&&q.slot===E)??(Z?{name:s.text(H?.skillName),levels:Z.levels.map(q=>({level:q.level,description:tt(q.description,n.locale).text}))}:void 0),J=q=>{if(C==="live")return q.live??null;if(C==="gekisou")return q.gekisou??null;if(t==="members")return q.awakening==null?null:i.memberRanks.get(A.rankGroup)?.get(q.awakening)?.leaderSkillLevel??null;let we=q.break==null?void 0:i.snapRanks.get(_.rankGroup)?.get(q.break);return(C==="support"?we?.skillLevels:we?.gekisoSkillLevels)?.[E]??null},ne=J(l),K=J(o),Ze=`${C}-${E}`,Ye=q=>q===null?n.t("growthUnset","Not entered"):q===0?n.t("editorPreview.locked","Locked"):se?.levels.find(we=>we.level===q)?.description!==void 0?lr(se.levels.find(we=>we.level===q).description):h.error?"\u2014":n.t("editorPreview.skillsLoading","Loading skill effects\u2026"),fn=()=>{let q=Ye(K),we=Ye(ne);if(!se||K===ne||ne===null||K===null||q===we)return q;let be=0,Re=q.length,bn=we.length;for(;be<Re&&be<bn&&q[be]===we[be];)be++;for(;Re>be&&bn>be&&q[Re-1]===we[bn-1];)Re--,bn--;for(;be>0&&/[\d.,%]/u.test(q[be-1]);)be--;for(;Re<q.length&&/[\d.,%]/u.test(q[Re]);)Re++;let Bc=p`<mark>${q.slice(be,Re)}</mark>`;return[q.slice(0,be),Bc,q.slice(Re)]},yi=q=>q===null?"\u2014":q===0?n.t("editorPreview.locked","Locked"):`Lv.${q}`,Ac=n.t(`editorPreview.terms.${C==="gekisou"?"gekisouSkill":C==="gekisouSupport"?"gekisouSupportSkill":C==="support"?"supportSkill":C==="leader"?"leaderSkill":"liveSkill"}`,{leader:"Leader Skill",live:"LIVE Skill",gekisou:"GEKISO Skill",support:"Support Skill",gekisouSupport:"GEKISO Support Skill"}[C]),Mc=h.error&&(C==="leader"||C==="support"&&E===0)?M:fn();return p`
      <section class="tb-editor-skill">
        <div class="tb-editor-skill__header">
          ${H?.icon?p`
                  <img src=${H.icon} alt="" width="32" height="32" />
                `:k}
          <div>
            <span class="tb-editor-skill__kind">${Ac}</span>
            <h3>${se?.name??s.text(H?.skillName)}</h3>
          </div>
        </div>
        ${I??k}
        <p class="tb-editor-skill__effect tb-editor-skill__effect--current">
          ${se?.levels.map(q=>p`
              <span
                class="tb-editor-skill__measure"
                aria-hidden="true"
                .textContent=${lr(q.description)}
              ></span>
            `)}
          <span class=${h.error?"tb-editor-skill__error":k}>${Mc}</span>
        </p>
        ${W({id:`tb-editor-before-${Ze}`,className:"tb-editor-skill__comparison",label:p`
            <span class="sr-only">${n.t("editorPreview.originalEffect","Before this edit")}</span>
            <span class="tb-editor-skill__level">
              ${ne!==K?`${ne===null?"\u2014":`Lv.${ne}`} \u2192 `:""}${ne!==K&&K?K:yi(K)}
            </span>
          `,expanded:d.expanded.has(Ze),onExpandedChange:q=>{q?d.expanded.add(Ze):d.expanded.delete(Ze),n.requestUpdate()},content:p`
            <div class="row tb-editor-skill__kind">
              <span>${n.t("editorPreview.originalEffect","Before this edit")}</span>
              <span>${yi(ne)}</span>
            </div>
            <p class="tb-editor-skill__effect">${Ye(ne)}</p>
          `})}
      </section>
    `},$=t==="members"?p`
          <dl class="spec-list tb-editor__bonuses">
            ${[["musicTypeRate","editorPreview.attributeBonus","Type Bonus"],["musicTagRate","editorPreview.tagBonus","Favorite Song Bonus"]].map(([C,E,I])=>p`
                <div>
                  <dt>${n.t(E,I)}</dt>
                  <dd>
                    ${v(l,C)===null?"\u2014":f(v(l,C),!0)}
                    <span aria-hidden="true">→</span>
                    <strong>${v(o,C)===null?"\u2014":f(v(o,C),!0)}</strong>
                  </dd>
                </div>
              `)}
          </dl>
        `:k,M=h.error?p`
        <span class="row">
          <span>${n.t("editorPreview.skillsError","Could not load skill effects")}</span>
          <button
            class="button button--text"
            type="button"
            @click=${()=>{let C=ni.get(s);for(let[E,I]of C??[])I===h&&C.delete(E);n.requestUpdate()}}
          >
            ${n.common("common.actions.retry","Retry")}
          </button>
        </span>
      `:k;return{statistics:b,skill:S,bonuses:$}}function vd(n){let e=n.catalog,t=n.view,r=n.filters,s=r.kind,i=Object.keys(s==="members"?e.data.members:e.data.snapshots).map(Number),a=s==="members"?t.members:t.snaps;return jt(n,s,i.filter(o=>n.boxQuickEntry||(r.show==="owned"?a.has(o):r.show==="unowned"?!a.has(o):!0)).filter(o=>Wt(n,s,o,r))).map(o=>({kind:s,id:o,owned:a.get(o)}))}var Fe=n=>n==="members"?"m":"s";function xl(n){return Object.entries(n.temporary.merge(n.snapshot?.entries??{})).filter(([e,t])=>/^[ms]\.[1-9]\d*\.lock$/u.test(e)&&t.v===!0).map(([e])=>({key:e,value:!1}))}function Xe(n,e,t,r=!1){if(!t.length||!n.snapshot)return;let s=t.map(({key:i})=>{let a=r?void 0:n.temporary.value(i);return{key:i,value:a===void 0?n.snapshot.entries[i]?.v??null:a}});n.write(t,r)&&(n.notice=e,ze={notice:e,changes:s,store:n.store,owner:n.snapshot.owner,temporaryVersion:n.temporary.version,permanent:r},n.requestUpdate())}var ze=null;function Sl(n){if(!ze||ze.notice!==n.notice||ze.store!==n.store||ze.owner!==n.snapshot?.owner||ze.temporaryVersion!==n.temporary.version)return k;let e=ze.changes,t=ze.permanent;return p`<button class="button button--text" type="button" @click=${()=>{n.write(e,t),ze=null,n.notice="",n.requestUpdate()}}>${n.t("undo","Undo")}</button>`}function si(n,e){let t=n.catalog;if(e.kind==="members"){let s=t.memberLimits(e.id,null);return s?Mt(e.id,{level:s.level,awake:s.awake,rank:s.rank,skill:s.liveSkillLevel,gekisoSkill:s.gekisoSkillLevel}):[]}let r=t.snapLimits(e.id,null);return r?Bt(e.id,{level:r.level,rank:r.rank}):[]}function yd(n,e){let t=n.catalog,r=n.boxQuickEntry,s=t.cardOptions(e.kind,e.id,r?null:void 0);if(!s)return p``;let i=e.owned,a=n.temporary.has(e.kind,e.id),o=!!i&&(r||i.use),c=()=>{let u=Fe(e.kind);r?n.write([{key:`${u}.${e.id}.own`,value:!i}]):i?n.write([{key:`${u}.${e.id}.use`,value:!i.use}]):n.write([{key:`${u}.${e.id}.own`,value:!0},{key:`${u}.${e.id}.use`,value:!0}])},l=i?n.t("useInSearch","Use in team search"):n.t("markOwned","Mark as owned"),d=()=>{if(r){c();return}n.editing={kind:e.kind,cardId:e.id},n.requestUpdate()};return p`
    <div class=${`tb-card${i?"":" is-unowned"}${o?" is-used":""}${r&&i?" is-selected":""}${i?.lock?" is-locked":""}`}>
      ${Ve({...i||r?s:{...s,marks:[...s.marks??[],{at:"bottom-start",text:n.t("notOwned","Not owned")}]},kind:e.kind==="members"?"member":"support",label:`${r?n.t("showOwned","Owned"):n.t("editGrowth","Edit growth")}: ${s.label}`,onOpen:d})}
      ${a?p`<span class="badge badge--primary tb-card__temporary">${n.t("temporaryBadge","Temporary")}</span>`:k}
      <button class="tb-card__check" type="button" role="checkbox" aria-checked=${String(o)}
        aria-label=${`${r?n.t("showOwned","Owned"):l}: ${s.label}`} title=${r?n.t("showOwned","Owned"):l} @click=${c}>
        <span class="tb-card__selection" aria-hidden="true">${o?O("check",16):k}</span>
      </button>
      ${!r&&i?.lock?p`<span class="tb-card__lock" title=${n.t("required","Always include")}>${O("push_pin",16)}</span>`:k}
    </div>
  `}var ri=new WeakMap;function wd(n){let e=ri.get(n);if(!e)return k;let t=()=>{ri.delete(n),n.requestUpdate()};return p`
    <dialog ${ie(t)} class="dialog" aria-labelledby="tb-clear-ownership-title">
      <header class="dialog__header"><h2 id="tb-clear-ownership-title">${n.t("clearOwnership","Mark all members and snapshots not owned")}</h2></header>
      <p class="dialog__body">
        ${n.t("clearOwnershipScope","{count} owned cards. Training values, account bonuses, teams and preferences stay saved.",{count:e.changes.length})}
      </p>
      <div class="dialog__actions">
        <button class="button button--text" type="button" @click=${t}>
          ${n.common("common.actions.cancel","Cancel")}
        </button>
        <button
          class="button"
          type="button"
          @click=${()=>{n.store===e.store&&n.snapshot?.owner===e.owner&&Xe(n,n.t("clearedOwnership","Marked {count} members and snapshots not owned",{count:e.changes.length}),e.changes,!0),t()}}
        >
          ${n.t("clearOwnershipConfirm","Mark all not owned")}
        </button>
      </div>
    </dialog>
  `}function $l(n){let e=n.view,t=n.filters,r=vd(n),s=u=>{n.filters={...t,...u},n.requestUpdate()},i=r.filter(u=>u.owned),a=t.bands.length+t.characters.length+t.attributes.length+t.rarities.length+Object.values(t.facets).reduce((u,h)=>u+h.length,0),o=t.kind==="members"?e.members.size:e.snaps.size,c=[...(t.kind==="members"?e.members:e.snaps).values()].filter(u=>u.use).length,l=xl(n).length,d=n.compactConditions;return p`
    <div class=${`tb-box${n.pt.showIssues&&n.pt.issues.some(u=>u.code==="inventory")?" pt-field--invalid":""}`} data-pt-field="inventory" tabindex="-1">
      
      <div class="tb-box__bar">
        <div class="tb-box__kind">${F({label:n.t("cardKind","Card kind"),value:t.kind,grow:!1,options:[{value:"members",label:`${n.t("members","Members")} ${e.members.size}`,icon:"person"},{value:"snaps",label:`${n.t("snapshots","Snaps")} ${e.snaps.size}`,icon:"photo"}],onSelect:u=>{let h=u==="members"?"member":"support",g=new Set(wi.filter(f=>!f.kinds.includes(h)).map(f=>f.key));s({kind:u,facets:Object.fromEntries(Object.entries(t.facets).filter(([f])=>!g.has(f)))})}})}</div>
        ${n.boxQuickEntry?k:p`<div class="tb-box__show">${F({label:n.t("showCards","Show"),value:t.show,grow:!1,options:[{value:"owned",label:n.t("showOwned","Owned")},{value:"all",label:n.t("showAll","All")},{value:"unowned",label:n.t("showUnowned","Not owned")}],onSelect:u=>s({show:u})})}</div>`}
        ${D({icon:"filter_list",label:n.t("filters","Filters"),toggle:!0,pressed:n.filtersOpen,badge:a,onClick:()=>{n.filtersOpen=!n.filtersOpen,n.requestUpdate()}})}
        ${d&&!n.boxQuickEntry?k:p`<span class="row__spacer"></span>
        ${n.boxQuickEntry?k:p`
          <button class="button button--tonal" type="button" @click=${()=>n.imports.openBox()}>${O("upload_file",18)}${n.t("importBox","Import")}</button>
        `}`}
      </div>
      ${n.filtersOpen?p`
            <div class="surface chooser-filters tb-box__filters">${Xt(n,t,s)}${Nn(n.common("common.actions.sort","Sort"),zn(n,t.kind))}</div>
          `:k}
      <div class="tb-box__status">
        <span class="tb-results__meta">${n.boxQuickEntry?n.t("quickEntrySummary","{owned} owned / {shown} shown",{owned:o,shown:r.length}):n.t("boxSummary","{owned} owned / {used} in search / {shown} shown",{owned:o,used:c,shown:r.length})}</span>
        <span class="row__spacer"></span>
        ${n.boxQuickEntry?p`<button class="button button--text" type="button" ?disabled=${!r.length}
              @click=${()=>Xe(n,n.t("bulkOwned","Marked {count} cards as owned",{count:r.length}),r.map(u=>({key:`${Fe(u.kind)}.${u.id}.own`,value:!0})))}>
              ${O("library_add_check",18)}${n.t("quickOwnAll","Select all")}</button>`:ts({id:"tb-box-actions",label:d?n.common("common.actions.moreActions","More"):n.t("bulkActions","Edit shown cards"),items:[...d?[{label:n.t("importBox","Import"),icon:"upload_file",run:()=>n.imports.openBox()}]:[],{label:n.t("bulkOwn","Own all shown"),icon:"library_add_check",disabled:!r.length,run:()=>Xe(n,n.t("bulkOwned","Marked {count} cards as owned",{count:r.length}),r.flatMap(u=>[{key:`${Fe(u.kind)}.${u.id}.own`,value:!0},...u.owned?[]:[{key:`${Fe(u.kind)}.${u.id}.use`,value:!0}]]))},{label:n.t("bulkUse","Use all"),icon:"check_box",disabled:!i.length,run:()=>Xe(n,n.t("bulkUsedDone","{count} cards take part",{count:i.length}),i.map(u=>({key:`${Fe(u.kind)}.${u.id}.use`,value:!0})))},{label:n.t("bulkUnuse","Use none"),icon:"check_box_outline_blank",disabled:!i.length,run:()=>Xe(n,n.t("bulkUnusedDone","{count} cards left out",{count:i.length}),i.map(u=>({key:`${Fe(u.kind)}.${u.id}.use`,value:!1})))},{label:n.t("bulkMax","Full growth"),icon:"upgrade",disabled:!i.length,run:()=>Xe(n,n.t("bulkMaxDone","Set {count} cards to full growth",{count:i.length}),i.flatMap(u=>si(n,u)))},{label:n.t("clearRequired","Clear all required marks"),icon:"push_pin",disabled:!l,run:()=>{let u=xl(n);Xe(n,n.t("clearRequiredDone","Cleared required marks on {count} cards",{count:u.length}),u)}},{label:n.common("common.actions.export","Export"),icon:"download",run:()=>n.imports.exportJson()},{label:n.t("clearOwnership","Mark all members and snapshots not owned"),icon:"remove_circle",disabled:!n.persistentView.members.size&&!n.persistentView.snaps.size,run:()=>{ri.set(n,{store:n.store,owner:n.snapshot?.owner,changes:Object.entries(n.snapshot?.entries??{}).filter(([u,h])=>/^[ms]\.[1-9]\d*\.own$/u.test(u)&&h.v===!0).map(([u])=>({key:u,value:!1}))}),n.requestUpdate()}}]})}
      </div>
      ${wd(n)}
      ${kd(n)}
      ${r.length?p`<div class=${`collection collection--${t.kind==="members"?"member":"support"} tb-grid${n.boxQuickEntry?" tb-grid--quick":""}`}>${r.map(u=>yd(n,u))}</div>`:p`<div class="state"><p class="state__title">${!n.boxQuickEntry&&t.show==="owned"&&!o?n.t("emptyBox","No cards yet"):n.t("noMatches","No cards match")}</p>
            ${!n.boxQuickEntry&&t.show==="owned"&&!o?p`<div class="state__actions"><button class="button" type="button" @click=${()=>s({show:"all"})}>${n.t("showAll","All")}</button><button class="button button--tonal" type="button" @click=${()=>n.imports.openBox()}>${n.t("importBox","Import")}</button></div>`:k}</div>`}
    </div>
  `}function Cl(n){if(!n.catalog||!n.view||!n.snapshot||!n.store)return k;let e=t=>{n.temporaryPicker=t,n.requestUpdate()};return p`<span data-app-bar-keep>${ts({id:"tb-temporary-actions",label:p`${O("add_circle",20)}<span class="sr-only">${n.t("temporaryCards","Temporary cards")}</span>
      ${n.temporary.size?p`<span class="badge">${n.temporary.size}</span>`:k}`,items:[{label:n.t("addTemporaryMembers","Add temporary member"),leading:O("person_add",18),run:()=>e("members")},{label:n.t("addTemporarySnaps","Add temporary Snapshot"),leading:O("library_add",18),run:()=>e("snaps")},{label:n.t("planner.newMember","New hypothetical member"),leading:O("person_add",18),run:()=>n.planner.editCard("members")},{label:n.t("planner.newSnap","New hypothetical Snapshot"),leading:O("library_add",18),run:()=>n.planner.editCard("snaps")},{label:n.t("planner.manageCards","Manage hypothetical cards"),leading:O("edit",18),run:()=>n.planner.open("cards")},{label:n.t("clearTemporaryCards","Clear temporary cards"),leading:O("clear_all",18),disabled:!n.temporary.size,run:()=>{for(let t of["members","snaps"])for(let r of n.temporary.ids(t))n.planner.cardById(r)||n.temporary.remove(t,r);n.refreshTemporaryView(),n.notice=n.t("temporaryCleared","Temporary cards cleared")}}]})}</span>`}function kd(n){let e=n.temporaryPicker;if(!e)return k;let t=n.catalog,r=()=>{n.temporaryPicker=null,n.slotFilters={...n.slotFilters,query:"",bands:[],characters:[],attributes:[],rarities:[],facets:{}},n.slotFiltersOpen=!1,n.requestUpdate()},s={...n.slotFilters,kind:e},i=o=>{n.slotFilters={...s,...o},n.requestUpdate()},a=jt(n,e,Object.keys(e==="members"?t.data.members:t.data.snapshots).map(Number).filter(o=>Wt(n,e,o,s)));return yt({id:"tb-temporary-picker",title:n.t(e==="members"?"addTemporaryMembers":"addTemporarySnaps",e==="members"?"Add temporary member":"Add temporary Snapshot"),closeLabel:n.common("common.actions.close","Close"),close:r,searchLabel:n.common("common.actions.search","Search"),filterLabel:n.t("filters","Filters"),filtersOpen:n.slotFiltersOpen,toggleFilters:()=>{n.slotFiltersOpen=!n.slotFiltersOpen,n.requestUpdate()},query:s.query,search:o=>i({query:o}),filterLayout:"facets",filters:Xt(n,s,i),kind:e==="members"?"member":"support",items:a.map(o=>({...t.cardOptions(e,o),value:String(o)})),selected:"",select:o=>{let c=Number(o),l={kind:e,id:c,owned:(e==="members"?n.view.members:n.view.snaps).get(c)};if(!n.temporary.has(e,c)){let d=l.owned?e==="members"?Mt(c,l.owned):Bt(c,l.owned):[...si(n,l),{key:`${Fe(e)}.${c}.use`,value:!0},{key:`${Fe(e)}.${c}.lock`,value:!1}];n.temporary.add(e,c,d),n.temporaryDraft={kind:e,cardId:c},n.refreshTemporaryView()}r(),n.editing={kind:e,cardId:c},n.requestUpdate()},countLabel:n.t("cardCount","{count} cards",{count:a.length}),emptyLabel:n.t("noMatches","No cards match"),preview:p``})}function Il(n){let e=n.editing;if(!e||!n.catalog||!n.view)return k;let t=n.catalog,{kind:r,cardId:s}=e,i=t.cardOptions(r,s);if(!i)return k;let a=n.temporary.has(r,s),o=n.temporaryDraft?.kind===r&&n.temporaryDraft.cardId===s,c=()=>{n.temporaryDraft?.kind===r&&n.temporaryDraft.cardId===s&&(n.temporaryDraft=null,n.removeTemporary(r,s)),n.editing=null,n.requestUpdate()},l=Fe(r),d=r==="members"?n.view.members.get(s):n.view.snaps.get(s),u=kl(n),h=r==="members"?t.member(s)?.characterId:void 0,g=h!==void 0&&!d?.lock&&[...n.view.members.values()].some(I=>I.cardId!==s&&I.lock&&t.member(I.cardId)?.characterId===h),f=(I,A)=>{let _=[{key:`${l}.${s}.${I}`,value:A}];if(I===(r==="members"?"awk":"rnk")&&typeof A=="number"&&d?.level!=null){let L=(r==="members"?t.memberLimits(s,A):t.snapLimits(s,A))?.levelCap;L!==void 0&&d.level>L&&_.push({key:`${l}.${s}.lvl`,value:L})}n.write([...d?[]:[{key:`${l}.${s}.own`,value:!0},{key:`${l}.${s}.use`,value:!0}],..._])},m=I=>`${r==="members"?"m":"s"}${s}.${{awk:"awake",lvl:"level",rnk:"rank",sk:"liveSkillLevel",gsk:"gekisoSkillLevel"}[I]??I}`,y=Ai(I=>t.visuals?.marks.get(I)??""),w=n.t("growthUnset","Not entered"),x=(I,A,_,R,L,H)=>ce(n,m(A),p`
    <div class="tb-growth-field">
      <span class="tb-growth-field__label">
        ${H?p`<img class="tb-growth-field__icon" src=${H} alt="" width="24" height="24" />`:k}
        <span>${I}</span>
        <output>${_===null?w:k}</output>
      </span>
      <div class="tb-stages" role="radiogroup" aria-label=${I}>
        ${Array.from({length:R},(Z,se)=>se+1).map(Z=>p`
          <button class="tb-stage" type="button" role="radio" aria-checked=${String(_===Z)}
            @click=${()=>f(A,Z)}>${L(Z)}</button>
        `)}
      </div>
    </div>
  `),v=I=>p`<span class="tb-stage__number">${I}</span>`,b=(I,A,_)=>R=>I[R]?p`<img class="tb-stage__mark" src=${I[R]} alt=${`${A} ${_(R)}`} title=${String(_(R))} width="40" height="40" />`:v(_(R)),S=I=>p`${y.training?p`<img class="tb-stage__mark tb-stage__mark--small" src=${y.training} alt="" width="24" height="24" />`:k}<span>${I}</span>`,$=(I,A)=>ce(n,m("lvl"),p`
    <div class="tb-growth-field">
      <span class="tb-growth-field__label">
        <span>${n.t("editorPreview.terms.level","Level")}</span>
        <output>${I===null?w:p`Lv.<strong>${Math.min(I,A)}</strong> / ${A}`}</output>
      </span>
      <div class="tb-level">
        ${D({icon:"remove",label:`${n.t("editorPreview.terms.level","Level")} \u22121`,disabled:I!==null&&I<=1,onClick:()=>f("lvl",Math.max(1,Math.min(A,(I??2)-1)))})}
        <input class="tb-level__value" type="number" inputmode="numeric" min="1" max=${A} step="1" placeholder="—" aria-label=${n.t("editorPreview.terms.level","Level")}
          .value=${ve(I===null?"":String(Math.min(I,A)))}
          @input=${_=>{let R=_.currentTarget;R.validity.valid&&f("lvl",R.value===""?null:R.valueAsNumber)}}
          @change=${_=>{let R=_.currentTarget;if(R.validity.badInput){R.value=I===null?"":String(Math.min(I,A));return}let L=R.value===""?null:Math.max(1,Math.min(A,Math.round(R.valueAsNumber)));R.value=L===null?"":String(L),f("lvl",L)}} />
        ${D({icon:"add",label:`${n.t("editorPreview.terms.level","Level")} +1`,disabled:I!==null&&I>=A,onClick:()=>f("lvl",Math.min(A,(I??0)+1))})}
        <md-slider class="md3-slider" min="1" max=${A} .value=${ve(Math.min(I??A,A))} aria-label=${n.t("editorPreview.terms.level","Level")}
          @change=${_=>f("lvl",Number(_.currentTarget.value))}></md-slider>
        <button class="button button--tonal button--small" type="button" ?disabled=${I===A} @click=${()=>f("lvl",A)}>MAX</button>
      </div>
    </div>
  `),M,C;if(r==="members"){let I=d,A=t.memberLimits(s,I?.awake??null);M=p`
      ${x(n.t("editorPreview.terms.training","Training"),"awk",I?.awake??null,A.awake,S)}
      ${$(I?.level??null,A.levelCap)}
      ${x(n.t("editorPreview.terms.awakening","Awaken"),"rnk",I?.rank??null,A.rank,b(y.memberRanks,n.t("editorPreview.terms.awakening","Awaken"),_=>_))}
    `,C=p`${u.skill("leader")}
      ${u.skill("live",0,x(n.t("editorPreview.terms.liveSkill","LIVE Skill"),"sk",I?.skill??null,A.liveSkillLevel,v))}
      ${u.skill("gekisou",0,x(n.t("editorPreview.terms.gekisouSkill","GEKISO Skill"),"gsk",I?.gekisoSkill??null,A.gekisoSkillLevel,v))}`}else{let I=d,A=t.snapLimits(s,I?.rank??null);M=p`${x(n.t("editorPreview.terms.limitBreak","Limit Break"),"rnk",I?.rank??null,A.rank,b(y.supportRanks,n.t("editorPreview.terms.limitBreak","Limit Break"),_=>_-1))}${$(I?.level??null,A.levelCap)}`,C=p`${["support","gekisouSupport"].map(_=>[0,1].map(R=>u.skill(_,R)))}`}let E=(I,A,_,R=!1)=>p`
    <label class="tb-switch-row">
      <span>${I}</span>
      <md-switch ?disabled=${R} .selected=${ve(_)} aria-label=${I}
        @change=${L=>f(A,L.target.selected)}></md-switch>
    </label>
  `;return p`
    <dialog ${ie(c)} class="dialog tb-editor" aria-labelledby="tb-editor-title">
      <header class="tb-editor__header">
        <span class=${`tb-editor__art tb-editor__art--${r}`}>${Ie(i)}</span>
        <div class="tb-editor__heading">
          <h2 id="tb-editor-title" class="tb-editor__title" lang=${i.titleLanguage||k}>${i.title}</h2>
          <span class="tb-editor__subtitle">${i.subtitle}</span>
          ${a?p`<span class="badge badge--primary tb-editor__state">${n.t("temporaryBadge","Temporary")} / ${n.t("temporaryLifetime","Cleared when leaving this page")}</span>`:k}
          ${d?k:p`<span class="badge badge--primary tb-editor__state">${n.t("notOwned","Not owned")}</span>`}
        </div>
        ${D({icon:"close",label:n.common("common.actions.close","Close"),onClick:c})}
      </header>
      <div class="tb-editor__body">
        ${u.statistics}
        <div class="tb-editor__layout">
        <section class="tb-editor__settings">
        <div class="tb-editor__fields">${M}${u.bonuses}</div>
        ${ce(n,m("use"),p`<div class="tb-editor__flags">
          ${E(n.t("useInSearch","Use in team search"),"use",d?.use??!1)}
          ${E(g?n.t("requiredOnePerCharacter","One required card per character"):n.t("required","Always include"),"lock",d?.lock??!1,g)}
        </div>`)}
        </section>
        <div class="tb-editor__skills">${C}</div>
        </div>
      </div>
      <footer class="tb-editor__actions">
        <button class="button button--text" type="button" @click=${()=>n.write(si(n,{kind:r,id:s,owned:d}))}>${O("upgrade",18)}${n.t("fullGrowth","Full growth")}</button>
        ${d&&!o?p`<button class="button button--text button--danger" type="button" @click=${()=>{a?n.removeTemporary(r,s):Xe(n,n.t("removedCard","Removed from your cards"),[{key:`${l}.${s}.own`,value:!1},{key:`${l}.${s}.lock`,value:!1}]),c()}}>${O("remove_circle",18)}${a?n.t("removeTemporary","Remove temporary card"):n.t("removeOwned","Not owned")}</button>`:k}
        ${a&&!o&&!n.planner.cardById(s)?p`<button class="button button--text" type="button" @click=${()=>{n.saveTemporary(r,s)&&c()}}>${n.t("saveTemporary","Save to My cards")}</button>`:k}
        <span class="row__spacer"></span>
        ${o?p`<button class="button button--text" type="button" @click=${c}>${n.common("common.actions.cancel","Cancel")}</button>`:k}
        <button class="button" type="button" @click=${()=>{o?(n.temporaryDraft=null,n.editing=null,n.notice=n.t("temporaryAdded","Temporary card added"),n.requestUpdate()):c()}}>${o?n.t("addTemporaryConfirm","Add temporary card"):n.t("done","Done")}</button>
      </footer>
    </dialog>
  `}var _l=n=>typeof n=="number"&&Number.isFinite(n)?n:Number.MAX_SAFE_INTEGER;function ii(n,e,t,r,s,i,a,o=""){let c=l=>Math.max(s,Math.min(i,l));return ce(n,e,p`
    <span class="tb-stepper" role="group" aria-label=${t}>
      ${D({icon:"remove",label:`${t} \u22121`,size:18,className:"icon-button--small",disabled:r!==null&&r<=s,onClick:()=>a(c((r??s)-1))})}
      <input class="tb-stepper__value" type="number" inputmode="numeric" min=${s} max=${i} aria-label=${t} placeholder="—"
        .value=${ve(r===null?"":String(r))}
        @change=${l=>{let d=l.target.value.trim();a(d===""?null:c(Math.round(Number(d))||s))}} />${o}
      ${D({icon:"add",label:`${t} +1`,size:18,className:"icon-button--small",disabled:r!==null&&r>=i,onClick:()=>a(c((r??s-1)+1))})}
    </span>
  `)}function El(n){let e=n.catalog,t=e.master,s=n.view.player,i=f=>_l(e.visuals?.characters[String(f)]?.displayOrder??e.data.characters[String(f)]?.displayOrder),a=[...t.characters.values()].filter(f=>e.characterName(f.id)).sort((f,m)=>f.bandId-m.bandId||i(f.id)-i(m.id)||f.id-m.id),o=t.maxCharacterRank,c=[...t.characters.keys()].reduce((f,m)=>f+(s.characterRanks[String(m)]??1),0),l=[...new Set(a.map(f=>f.bandId))].filter(Boolean),d=[...t.vipBonus.keys()].sort((f,m)=>f-m),u=Math.max(1,...d,1),h=Object.values(e.data.bandItems).map(f=>({id:Number(f.bandItemId),bandId:Number(f.bandId),displayOrder:_l(e.visuals?.bandItems[String(f.bandItemId)]?.displayOrder??f.displayOrder),name:e.text(f.name),max:Math.max(0,...(f.levels??[]).map(m=>Number(m.level)||0))})).sort((f,m)=>f.bandId-m.bandId||f.displayOrder-m.displayOrder||f.id-m.id),g=f=>n.write(a.map(m=>({key:`cr.${m.id}`,value:f})));return p`
    <div class="tb-account stack stack--loose">
      <section class="surface stack">
        ${V({icon:"trending_up",label:n.t("accountTitle","Account bonuses")})}
        <div class="tb-account__summary">
          <div class="tb-metric"><span class="tb-metric__label">${n.t("totalRank","Total character rank")}</span><strong class="tb-metric__value tabular">${c}</strong>
            <span class="tb-metric__detail">${n.t("totalRankAuto","Sum of the ranks below")}</span></div>
          <div class="tb-field">
            <span class="tb-field__label">${n.t("vipRank","T.G.W card rank")}</span>
            ${ii(n,"p.vip",n.t("vipRank","T.G.W card rank"),s.vipRank,1,u,f=>n.write([{key:"p.vip",value:f}]))}
            ${t.vipBonus.get(s.vipRank??1)?p`<span class="tb-field__note">+${(t.vipBonus.get(s.vipRank??1)/100).toFixed(2)}%</span>`:k}
          </div>
        </div>
      </section>
      <section class="surface stack">
        <div class="row row--between row--wrap">
          ${V({icon:"face",label:n.t("characterRanks","Character ranks")})}
          <div class="cluster">
            <button class="button button--text button--small" type="button" @click=${()=>g(o)}>${O("keyboard_double_arrow_up",18)}${n.t("allMax","All max")} (${o})</button>
            <button class="button button--text button--small" type="button" @click=${()=>n.write(a.map(f=>({key:`cr.${f.id}`,value:null})))}>${n.t("clearAll","Clear")}</button>
          </div>
        </div>
        ${l.map(f=>p`
            <div class="tb-band">
              <span class="tb-band__name">${e.bandIcon(f)?p`<img src=${e.bandIcon(f)} alt="" />`:k}${e.bandName(f)}</span>
              <div class="tb-rank-grid">
                ${a.filter(m=>m.bandId===f).map(m=>p`
                      <div class="tb-rank" style=${`--character:${e.characterColor(m.id)}`}>
                        ${e.characterFace(m.id)?p`<img class="tb-avatar" src=${e.characterFace(m.id)} alt="" loading="lazy" />`:k}
                        <span class="tb-rank__name">${e.characterName(m.id)}</span>
                        ${ii(n,`cr.${m.id}`,e.characterName(m.id),s.characterRanks[String(m.id)]??null,1,o,y=>n.write([{key:`cr.${m.id}`,value:y}]))}
                      </div>
                    `)}
              </div>
            </div>
          `)}
      </section>
      <section class="surface stack">
        <div class="row row--between row--wrap">
          ${V({icon:"piano",label:n.t("bandItems","Band items")})}
          <button class="button button--text button--small" type="button" @click=${()=>n.write(h.map(f=>({key:`bi.${f.id}`,value:f.max})))}>${O("keyboard_double_arrow_up",18)}${n.t("allMax","All max")}</button>
        </div>
        ${[...new Set(h.map(f=>f.bandId))].map(f=>p`
            <div class="tb-band">
              <span class="tb-band__name">${e.bandIcon(f)?p`<img src=${e.bandIcon(f)} alt="" />`:k}${e.bandName(f)||n.t("allBands","All bands")}</span>
              <div class="tb-item-grid">
                ${h.filter(m=>m.bandId===f).map(m=>p`
                      <div class="tb-item">
                        <span class="tb-item__name">${m.name}</span>
                        ${ii(n,`bi.${m.id}`,m.name,s.bandItems[String(m.id)]??null,0,m.max,y=>n.write([{key:`bi.${m.id}`,value:y}]))}
                      </div>
                    `)}
              </div>
            </div>
          `)}
      </section>
    </div>
  `}var dt=[{packageId:"com.bilibili.sirius.official",server:"intl",label:"Global \xB7 official"},{packageId:"com.bilibili.sirius",server:"intl",label:"Global \xB7 Google Play"},{packageId:"com.bushiroad.sirius",server:"jp",label:"Japan"}],Ct={directories:32,entries:ge.entries,depth:2,files:ge.candidates,milliseconds:6e4},xd=n=>n.length>0&&n.length<=160&&!/[\/\\\x00-\x1f\x7f]/u.test(n)&&n!=="."&&n!=="..",Sd=/^(?:EncryptedBundles|Addressables|Master|RemoteCatalog|il2cpp|Unity|UnityCache|cache|tmp|ChatHistory)$/iu,$d=n=>/^[a-z0-9_-]+(?:\.(?:json|dat|sav|bin|gz|zip))?$/iu.test(n);function $t(n,e){return e.throwIfAborted(),new Promise((t,r)=>{let s=()=>r(e.reason);e.addEventListener("abort",s,{once:!0}),Promise.resolve(n).then(i=>{e.removeEventListener("abort",s),e.aborted?r(e.reason):t(i)},i=>{e.removeEventListener("abort",s),r(i)})})}async function ai(n,e,t,r=Ct.milliseconds){if(!dt.some(m=>m.packageId===e))throw new P("device_channel");let s=new AbortController,i=AbortSignal.any([t,s.signal]),a=setTimeout(()=>s.abort(new P("device_timeout")),r),o=()=>{n.close().catch(()=>{})};i.addEventListener("abort",o,{once:!0});let c=0,l=0,d=0,u=0,h=[],g=`/sdcard/Android/data/${e}/files`,f=async(m,y)=>{if(i.throwIfAborted(),y>Ct.depth||++d>Ct.directories)throw new P("device_scan_budget");if(await $t(n.type(m),i)!=="directory")throw new P("device_path");let w=n.list(m)[Symbol.asyncIterator](),x=[];try{for(;;){let v=await $t(w.next(),i);if(v.done)break;if(++l>Ct.entries)throw new P("device_scan_budget");let b=v.value;if(!(b.name==="."||b.name==="..")){if(!xd(b.name))throw new P("device_path");Sd.test(b.name)||x.push(b)}}}finally{w.return&&w.return().catch(()=>{})}for(let v of x){i.throwIfAborted();let b=`${m}/${v.name}`;if(!b.startsWith(g+"/"))throw new P("device_path");if(v.type==="other")continue;if(v.type==="directory"){await f(b,y+1);continue}if(!$d(v.name))continue;if(++u>Ct.files)throw new P("device_scan_budget");if(await $t(n.type(b),i)!=="file")throw new P("device_path");let S=n.read(b),$=()=>{S.cancel().catch(()=>{})};i.addEventListener("abort",$,{once:!0});let M=[],C=0;try{for(;;){let E=await $t(S.read(),i);if(E.done)break;if(C+=E.value.byteLength,c+=E.value.byteLength,C>ge.fileBytes||c>ge.inputBytes)throw new P("device_read_budget");M.push(Uint8Array.from(E.value))}C&&h.push(new File(M,`candidate-${h.length+1}.bin`))}finally{i.removeEventListener("abort",$),$(),S.releaseLock(),M.forEach(E=>E.fill(0))}}};try{if(!await $t(n.open(i),i))return null;if(await f(g,0),!h.length)throw new P("device_empty");return h}catch(m){throw i.aborted?i.reason:m instanceof P?m:new P("device_read_failed")}finally{clearTimeout(a),i.removeEventListener("abort",o);try{await $t(n.close(),AbortSignal.timeout(2e3))}catch{throw new P("device_close_failed")}}}function Rl(n,e={}){if(e.signal?.throwIfAborted(),"text"in n&&n.text.length>ge.textBytes||"files"in n&&(!n.files.length||n.files.length>ge.entries||n.files.reduce((r,s)=>r+s.size,0)>ge.inputBytes))return Promise.reject(new P("box_input_budget"));let t=e.workerFactory?.()||new Worker(new URL("./worker.ts",import.meta.url),{type:"module"});return new Promise((r,s)=>{let i=crypto.randomUUID(),a=!1,o=(d,u)=>{a||(a=!0,clearTimeout(l),e.signal?.removeEventListener("abort",c),t.terminate(),d?s(d):r(u))},c=()=>o(e.signal?.reason||new DOMException("Aborted","AbortError")),l=setTimeout(()=>o(new P("box_timeout")),3e4);if(t.onmessage=d=>{d.data.id===i&&(d.data.progress?e.progress?.(d.data.progress.completed,d.data.progress.total):d.data.error?o(new P(d.data.error.code)):o(void 0,d.data.result))},t.onerror=()=>o(new P("box_worker_failed")),e.signal?.addEventListener("abort",c,{once:!0}),e.signal?.aborted){c();return}t.postMessage({id:i,..."files"in n?{files:[...n.files]}:{text:n.text}})})}function pn(n,e){return!!n.ownerId&&Number.isSafeInteger(n.revision)&&n.revision>=0&&n.server===e.identity.server&&n.releaseId===e.identity.releaseId&&n.sourceId===e.identity.sourceId}function Tl(n,e,t,r){if(e===null)return null;let s=null;for(let i of n){let a=Ue(i),o=hs(a.exp),c=ms(a[r]);t!==null&&Number(a.group)!==t||o===null||c===null||BigInt(o)<=BigInt(e)&&(s===null||c>s)&&(s=c)}return s}function Al(n,e,t,r){if(!pn(r,t)||!Ce(e,t).valid)throw new P("box_review_context");let s=!!n.declaredIdentity&&n.declaredIdentity.server!==r.server;if(s&&![n.declaredIdentity.server,r.server].every(l=>l==="jp"||l==="intl"))throw new P("box_incompatible_server");let i=[],a=new Map,o=new Map,c=(l,d)=>!t.crossServer||t.crossServer.availability[l][String(d)].includes(r.server);for(let l of["members","snapshots"])for(let d of n[l]){let u=(l==="members"?t.members:t.snapshots)[String(d.cardId)];if(s&&(!u||!c(l,d.cardId))){i.push({kind:l,id:d.cardId,field:"cardId",code:"unavailable_target_card"});continue}if(!u){i.push({kind:l,id:d.cardId,field:"cardId",code:"unknown_current_card"});continue}let h=`${r.server}:${l}:${d.cardId}`,g=e[l].find(x=>x.cardId===d.cardId),f=l==="members"?d:null,m={awakening:d.rank,level:d.level??Tl(t.progression[l==="members"?"memberCardLevels":"supportCardLevels"]||[],d.exp,u.levelGroup,"level"),...f?{training:f.awakeCount,liveSkillLevel:f.liveSkillLevel,gekisoSkillLevel:f.performanceSkillLevel}:{}},y=ke(t,l,d.cardId,m),w=a.get(h);w||(w={key:h,kind:l,cardId:d.cardId,existingInstanceId:g?.instanceId||null,values:{},existing:g?Object.fromEntries(Object.keys(m).map(x=>[x,g[x]??null])):{}},a.set(h,w));for(let[x,v]of Object.entries(m)){if(v===null)continue;if(!y[x]?.includes(v)){i.push({kind:l,id:d.cardId,field:x,code:y[x]?.length?"out_of_current_range":"current_domain_unavailable"});continue}let b=w.values[x]||[];b.includes(v)||b.push(v),w.values[x]=b.sort((S,$)=>S-$)}}for(let[l,d]of[["bandItems",n.bandItems],["characterRanks",n.characters]])for(let u of d){let h=(l==="bandItems"?t.bandItems:t.characters)[String(u.id)];if(s&&(!h||!c(l==="bandItems"?l:"characters",u.id))){i.push({kind:l,id:u.id,field:"id",code:"unavailable_target_entity"});continue}if(!h){i.push({kind:l,id:u.id,field:"id",code:"unknown_current_entity"});continue}let g=l==="bandItems"?u.level:u.rank??Tl(t.progression.characterRanks||[],u.exp,null,"rank");if(g===null)continue;if(!(l==="bandItems"?Si(t,u.id):(t.progression.characterRanks||[]).map(w=>Number(w.rank))).includes(g)){i.push({kind:l,id:u.id,field:"level",code:"out_of_current_range"});continue}let m=`${l}:${u.id}`,y=o.get(m)||{key:m,map:l,id:u.id,values:[],existing:e[l][String(u.id)]??null};y.values.includes(g)||y.values.push(g),o.set(m,y)}return{schema:"haneoka-box-preview-v1",context:{...r},candidateId:n.id,original:structuredClone(e),cards:[...a.values()],maps:[...o.values()],scalars:n.playerScalars?.vipRank==null?[]:[{key:"vipRank",values:[n.playerScalars.vipRank],existing:e.schema==="haneoka-team-inventory-v2"?e.playerModifiers.vipRank:null,exists:e.schema==="haneoka-team-inventory-v2",blocked:!xi(t).vipRanks.includes(n.playerScalars.vipRank)}],notices:n.notices,issues:i}}var Ml=["level","training","awakening","liveSkillLevel","gekisoSkillLevel"],Cd={kind:"kind",id:"id",cardid:"id",name:"name",level:"level",training:"training",awake:"training",awakecount:"training",awakening:"awakening",rank:"awakening",liveskilllevel:"liveSkillLevel",skilllevel:"liveSkillLevel",gekisoskilllevel:"gekisoSkillLevel",gekisouskilllevel:"gekisoSkillLevel"},Id={member:"members",members:"members",support:"snapshots",snapshot:"snapshots",snapshots:"snapshots"},Bl=n=>Id[n.toLowerCase()];function _d(n){if(new TextEncoder().encode(n).byteLength>1024*1024)throw new RangeError("inventory-list-byte-limit");n=n.replace(/^\uFEFF/u,"").replace(/\r\n?/gu,`
`);let e=",",t=!1;for(let d of n){if(d==='"'&&(t=!t),!t&&d==="	"){e="	";break}if(!t&&d===`
`)break}let r=[],s=[],i="",a=!1,o=!1,c=()=>{s.push(i.trim()),i="",o=!1},l=()=>{if(c(),s.some(d=>d.length)&&r.push(s),s=[],r.length>5001)throw new RangeError("inventory-list-row-limit")};for(let d=0;d<n.length;d++){let u=n[d];if(a)u!=='"'?i+=u:n[d+1]==='"'?(i+='"',d++):(a=!1,o=!0);else if(u===e)c();else if(u===`
`)l();else if(u==='"'){if(i.trim()||o)throw new TypeError("inventory-list-invalid-quote");i="",a=!0}else{if(o&&u.trim())throw new TypeError("inventory-list-after-quote");i+=u}}if(a)throw new TypeError("inventory-list-unclosed-quote");return l(),r}function Pl(n,e,t,r,s){if(!pn(r,t)||!Ce(e,t).valid||!["members","snapshots"].includes(s))throw new TypeError("inventory-list-context");let i=_d(n);if(!i.length)throw new TypeError("inventory-list-empty");let a=i[0].map(g=>Cd[g.toLowerCase()]),o=a.includes("id")||a.includes("name");if(o&&(a.some(g=>!g)||new Set(a).size!==a.length))throw new TypeError("inventory-list-header");let c=o?i.slice(1):i;if(!c.length)throw new TypeError("inventory-list-empty");if(c.length>5e3)throw new RangeError("inventory-list-row-limit");let l=new Map,d=[],u=[],h=new Map;for(let g of["members","snapshots"]){let f=new Map;for(let m of Object.values(g==="members"?t.members:t.snapshots))for(let y of new Set(Array.isArray(m.name)?m.name:[m.name]))if(typeof y=="string"&&y.trim()){let w=f.get(y.trim())??[];w.push(m.id),f.set(y.trim(),w)}h.set(g,f)}for(let[g,f]of c.entries()){let m=g+(o?2:1),y,w;try{if(f.length>(o?a.length:1))throw new TypeError("inventory-list-extra-columns");let x=o?Object.fromEntries(a.map((_,R)=>[_,f[R]??""])):{id:f[0]};if(y=x.kind?Bl(x.kind):s,!y)throw new TypeError("inventory-list-kind");let v=x.id||x.name||"",b=/^(member|support)-(?:card-)?([1-9]\d*)$/u.exec(v);if(b){let _=Bl(b[1]);if(x.kind&&_!==y)throw new TypeError("inventory-list-kind-id-mismatch");y=_,w=Number(b[2])}else if(/^[1-9]\d*$/u.test(v))w=Number(v);else{let _=h.get(y).get(v)??[];if(_.length!==1)throw new TypeError(_.length?"inventory-list-name-ambiguous":"inventory-list-card-unknown");w=_[0]}let S=(y==="members"?t.members:t.snapshots)[String(w)];if(!Number.isSafeInteger(w)||!S)throw new TypeError("inventory-list-card-unknown");let $=e[y].find(_=>_.cardId===w),M={};for(let _ of Ml){let R=x[_];if(R){if(y==="snapshots"&&!["level","awakening"].includes(_))throw new TypeError("inventory-list-snapshot-field");if(!/^[1-9]\d*$/u.test(R)||!Number.isSafeInteger(Number(R)))throw new TypeError("inventory-list-practice-value");M[_]=Number(R)}}let C={...$,...M},E=ke(t,y,w,C);for(let[_,R]of Object.entries(M))if(!E[_]?.includes(R))throw new TypeError("inventory-list-practice-range");let I=`${r.server}:${y}:${w}`,A=l.get(I);A||(A={key:I,kind:y,cardId:w,existingInstanceId:$?.instanceId??null,existing:$?Object.fromEntries(Ml.filter(_=>y==="members"||["level","awakening"].includes(_)).map(_=>[_,$[_]??null])):{},values:{}},l.set(I,A));for(let[_,R]of Object.entries(M))A.values[_]=[...new Set([...A.values[_]??[],R])].sort((L,H)=>L-H);u.push({line:m,kind:y,cardId:w})}catch(x){let v=x instanceof Error?x.message:"inventory-list-invalid-row";u.push({line:m,...y?{kind:y}:{},...w===void 0?{}:{cardId:w},code:v}),d.push({kind:w===void 0?"input":y??"input",id:w??m,field:"row",code:v})}}return{rows:u,preview:{schema:"haneoka-box-preview-v1",context:{...r},candidateId:crypto.randomUUID(),original:structuredClone(e),cards:[...l.values()],maps:[],issues:d}}}var Ed=1024*1024,Ol=n=>/\.(csv|tsv)$/iu.test(n.name);function Ll(n){if("files"in n)return n.files.some(Ol);let e=n.text.trim();return!!e&&!e.startsWith("ONPKG1:")&&!/^[{\[]/u.test(e)}async function ql(n,e,t,r,s,i={}){i.signal?.throwIfAborted();let a;if("files"in n){let o=n.files[0];if(n.files.length!==1||!o||!Ol(o)||o.size>Ed)throw new P("box_invalid_list");a=await o.text()}else a=n.text;i.signal?.throwIfAborted();try{let{preview:o}=Pl(a,e,t,r,s);if(!o.cards.length)throw new P("box_no_player");return i.signal?.throwIfAborted(),i.progress?.(1,1),o}catch(o){throw i.signal?.aborted&&i.signal.throwIfAborted(),o instanceof P?o:new P("box_invalid_list")}}function oi(n,e,t,r,s){if(!pn(s,r)||!["ownerId","revision","server","releaseId","sourceId"].every(o=>s[o]===e.context[o])||JSON.stringify(n)!==JSON.stringify(e.original))throw new P("box_review_changed");let i=structuredClone(n),a=new Set;for(let o of t.cards){if(a.has(o.key))throw new P("box_duplicate_confirmation");a.add(o.key);let c=e.cards.find(h=>h.key===o.key);if(!c)throw new P("box_unknown_confirmation");if(!o.include)continue;if(e.issues.some(h=>h.kind===c.kind&&h.id===c.cardId))throw new P("box_unresolved_values");let l=i[c.kind].find(h=>h.cardId===c.cardId);l||(i=yn(i,c.kind,[{cardId:c.cardId}],r));let d=i[c.kind].find(h=>h.cardId===c.cardId),u={};for(let[h,g]of Object.entries(c.values)){let f=o.fields?.[h];if(f==="keep"){if(!l)throw new P("box_unconfirmed_value")}else if(f!==void 0){if(!g.includes(f))throw new P("box_unconfirmed_value");u[h]=f}else if(!l||t.existingValues==="overwrite"||t.existingValues==="updates"){if(g.length>1)throw new P("box_conflict_required");let m=c.existing[h];g.length===1&&(t.existingValues!=="updates"||!l||m==null||g[0]>m)&&(u[h]=g[0])}}if(Object.keys(o.fields||{}).some(h=>!Object.hasOwn(c.values,h)))throw new P("box_unconfirmed_value");i=Tt(i,c.kind,[d.instanceId],u)}a.clear();for(let o of t.maps){if(a.has(o.key))throw new P("box_duplicate_confirmation");a.add(o.key);let c=e.maps.find(u=>u.key===o.key);if(!c)throw new P("box_unknown_confirmation");if(!o.include)continue;let l=Object.hasOwn(e.original[c.map],String(c.id));if(o.value==="keep"){if(!l)throw new P("box_unconfirmed_value");continue}let d=o.value??(c.values.length===1?c.values[0]:void 0);if(d===void 0||!c.values.includes(d))throw new P("box_conflict_required");i={...i,[c.map]:{...i[c.map],[String(c.id)]:d}}}a.clear();for(let o of t.scalars??[]){if(a.has(o.key))throw new P("box_duplicate_confirmation");a.add(o.key);let c=e.scalars?.find(u=>u.key===o.key);if(!c)throw new P("box_unknown_confirmation");if(!o.include)continue;if(c.blocked)throw new P("box_unresolved_values");if(o.value==="keep"){if(!c.exists)throw new P("box_unconfirmed_value");continue}let l=o.value??(c.values.length===1?c.values[0]:void 0);if(l===void 0||!c.values.includes(l))throw new P("box_conflict_required");let d=Rt(i);i={...d,playerModifiers:{...d.playerModifiers,[c.key]:l}}}if(t.ownership==="replace"){let o=new Set(t.cards.filter(c=>c.include).map(c=>c.key));if(!e.cards.some(c=>o.has(c.key)))throw new P("box_unresolved_values");for(let c of["members","snapshots"]){let l=new Set(e.cards.filter(d=>d.kind===c&&o.has(d.key)).map(d=>d.cardId));i={...i,[c]:i[c].filter(d=>l.has(d.cardId))}}}if(!Ce(i,r).valid)throw new P("box_invalid_confirmed_inventory");return i}function mn(n,e){let t=0,r=!1,s=n.cards.map(l=>{let d=e.cards.find(x=>x.key===l.key)??{key:l.key,include:!1},u=n.issues.some(x=>x.kind===l.kind&&x.id===l.cardId),h=l.existingInstanceId!==null,g=e.existingValues??"keep",f=h&&g==="keep",y=(l.kind==="members"?["level","training","awakening","liveSkillLevel","gekisoSkillLevel"]:["level","awakening"]).map(x=>{let v=l.values[x]??[],b=d.fields?.[x],S=l.existing[x],$=f||h&&v.length===0||g==="updates"&&v.length===1&&S!=null&&v[0]<=S,M=$?S??null:v.length===1?v[0]:null,C=$?"saved":v.length>1?"conflict":v.length===1?"box":"unknown";return{field:x,values:v,defaultValue:M,defaultSource:C,value:b==="keep"?l.existing[x]??null:b??M,source:b==="keep"?"saved":b===void 0?C:"box",requiresChoice:b==="keep"?!h:b===void 0?C==="conflict":!v.includes(b)}}),w=Object.keys(d.fields??{}).some(x=>!Object.hasOwn(l.values,x));return d.include&&(t++,(u||w||y.some(x=>x.requiresChoice))&&(r=!0)),{proposal:l,choice:d,fields:y,blocked:u}}),i=n.maps.map(l=>{let d=e.maps.find(y=>y.key===l.key)??{key:l.key,include:!1},u=n.issues.some(y=>y.kind===l.map&&y.id===l.id),h=Object.hasOwn(n.original[l.map],String(l.id)),g=l.values.length===1?l.values[0]:null,f=d.value==="keep"?l.existing:d.value??g,m=d.value==="keep"?!h:f===null||!l.values.includes(f);return d.include&&(t++,(u||m)&&(r=!0)),{proposal:l,choice:d,value:f,defaultValue:g,requiresChoice:m,blocked:u,existing:h}}),a=(n.scalars??[]).map(l=>{let d=e.scalars?.find(f=>f.key===l.key)??{key:l.key,include:!1},u=l.values.length===1?l.values[0]:null,h=d.value==="keep"?l.existing:d.value??u,g=d.value==="keep"?!l.exists:h===null||!l.values.includes(h);return d.include&&(t++,(l.blocked||g)&&(r=!0)),{proposal:l,choice:d,value:h,defaultValue:u,requiresChoice:g,blocked:l.blocked,existing:l.exists}}),o=s.filter(l=>l.choice.include),c=["members","snapshots"].reduce((l,d)=>l+n.original[d].filter(u=>!o.some(h=>h.proposal.kind===d&&h.proposal.cardId===u.cardId)).length,0);return{cards:s,maps:i,scalars:a,included:t,removed:c,canConfirm:t>0&&!r&&(e.ownership!=="replace"||o.length>0)}}function Nl(n,e,t){let r=n.cards.filter(s=>s.key!==e);return r.push({...n.cards.find(s=>s.key===e),key:e,include:t}),{...n,cards:r}}function Dl(n,e,t,r){let s=n.cards.find(a=>a.key===e)??{key:e,include:!1},i={...s.fields};return r===void 0?delete i[t]:i[t]=r,{...n,cards:[...n.cards.filter(a=>a.key!==e),{...s,fields:i}]}}function zl(n,e,t){let r=n.maps.find(s=>s.key===e)??{key:e,include:!1};return{...n,maps:[...n.maps.filter(s=>s.key!==e),{...r,...t}]}}function Fl(n,e,t){let r=n.scalars?.find(s=>s.key===e)??{key:e,include:!1};return{...n,scalars:[...(n.scalars??[]).filter(s=>s.key!==e),{...r,...t}]}}function li(n,e,t){let r=mn(n,e);return{...e,cards:r.cards.map(s=>({...s.choice,include:t&&!s.blocked})),maps:r.maps.map(s=>({...s.choice,include:t&&!s.blocked})),scalars:r.scalars.map(s=>({...s.choice,include:t&&!s.blocked}))}}function Ul(n,e,t){return{...e,existingValues:t,cards:e.cards.map(r=>n.cards.find(s=>s.key===r.key)?.existingInstanceId!=null?{...r,fields:void 0}:r)}}var Tr=class extends Error{code;status;constructor(e,t,r){super(e),this.name="ScreenshotRecognitionError",this.code=t,this.status=r}};function jl(n,e){let t=n.error;return new Tr(String(t?.message||`HTTP ${e}`),typeof t?.code=="string"&&t.code?t.code:"http_error",e)}var Rd="/api/v1/team-builder/recognition/jobs",Hl=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function ci(n,e){if(n!==null&&!Hl.test(n))throw new Error("Invalid recognition job identity");return`${Rd}${n?`/${n}`:""}?${new URLSearchParams(e.context)}`}function Gl(n,e){if(e<200||e>=300)throw jl(n,e);if(!n.job||typeof n.job!="object"||Array.isArray(n.job))throw new Tr("Invalid recognition response","invalid_response",e);return n.job}async function Vl(n,e){if(e.signal.throwIfAborted(),!Hl.test(e.id)||!["image/png","image/jpeg","image/webp"].includes(n.type)||!n.size||n.size>8*1024*1024)throw new Error("Use a PNG, JPEG or WebP screenshot up to 8 MiB");let t=[...new Uint8Array(await crypto.subtle.digest("SHA-256",await n.arrayBuffer()))].map(r=>r.toString(16).padStart(2,"0")).join("");return e.signal.throwIfAborted(),new Promise((r,s)=>{let i=new XMLHttpRequest,a,o=()=>i.abort(),c=()=>{clearTimeout(a),e.signal.removeEventListener("abort",o)},l=()=>{clearTimeout(a),a=setTimeout(()=>i.abort(),9e4)};if(i.open("POST",ci(null,e)),i.setRequestHeader("Content-Type",n.type),i.setRequestHeader("Idempotency-Key",e.id),i.setRequestHeader("X-Image-Sha256",t),i.setRequestHeader("X-Haneoka-Expected-User",e.userId),e.crop&&i.setRequestHeader("X-Recognition-Crop",JSON.stringify(e.crop)),e.kind&&i.setRequestHeader("X-Recognition-Kind",e.kind),i.upload.onprogress=d=>{e.progress(Math.min(n.size,d.loaded),n.size),l()},i.onload=()=>{c();try{r(Gl(JSON.parse(i.responseText),i.status))}catch(d){s(d)}},i.onabort=()=>{c(),s(e.signal.aborted?e.signal.reason:new Error("Recognition upload timed out"))},i.onerror=()=>{c(),s(new Error("Recognition upload failed"))},e.signal.addEventListener("abort",o,{once:!0}),e.signal.aborted){c(),s(e.signal.reason);return}l(),i.send(n)})}async function Jl(n,e){e.signal.throwIfAborted();let t=await fetch(ci(n,e),{credentials:"same-origin",cache:"no-store",headers:{"X-Haneoka-Expected-User":e.userId},signal:e.signal});return Gl(await t.json(),t.status)}async function Kl(n,e){let t=await fetch(ci(n,e),{method:"DELETE",credentials:"same-origin",cache:"no-store",headers:{"X-Haneoka-Expected-User":e.userId},signal:e.signal});if(!t.ok&&t.status!==404){let r=await t.json();throw jl(r,t.status)}}var Ar=/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/iu,di=/^[a-f0-9]{64}$/u;function ui(n){let e=n.result;if(n.state!=="ready"||!e||e.schema!=="haneoka-card-recognition-result-v1"||!["server","releaseId","sourceId"].every(s=>e.identity?.[s]===n.context[s])||e.referenceId!==void 0&&e.referenceId!==n.context.referenceId||!di.test(n.context.referenceId)||!Array.isArray(e.images)||!e.images.length||e.images.length>8||!Array.isArray(e.observations)||e.observations.length>100)throw new RangeError("recognition-result-context");let t=new Set,r=new Set;for(let s of e.images){if(t.has(s.id)||s.coordinateSpace!=="exif_normalized_original"||!di.test(s.sha256)||!Array.isArray(s.size)||s.size.length!==2||s.size.some(i=>!Number.isSafeInteger(i)||i<128||i>4096)||s.size[0]*s.size[1]>8e6||!Array.isArray(s.observationIds))throw new RangeError("recognition-result-image");t.add(s.id)}for(let s of e.observations){let i=e.images.find(a=>a.id===s.imageId);if(!i||r.has(s.id)||!i.observationIds.includes(s.id))throw new RangeError("recognition-result-observation");r.add(s.id)}if(e.images.some(s=>s.observationIds.length!==e.observations.filter(i=>i.imageId===s.id).length))throw new RangeError("recognition-result-observation");return e.images.map(s=>({schema:e.schema,context:{...n.context},algorithmVersion:e.engine.algorithm,image:{width:s.size[0],height:s.size[1],sha256:s.sha256},status:s.status==="needs_crop"?"no-reliable-grid":"candidates",observations:e.observations.filter(i=>i.imageId===s.id).map(i=>({bbox:[...i.bbox],kind:i.kind,cardId:i.cardId,candidates:i.candidates.map(a=>({cardId:a.cardId,variant:a.variant,score:a.score,evidence:{...a}})),...i.fields.detail?{detail:i.fields.detail}:{},level:{value:i.fields.level.status==="recognized"?i.fields.level.value:null,reason:i.fields.level.reason??i.fields.level.status}}))}))}function Wl(n,e={upload:Vl,read:Jl,delete:Kl}){let t={...n};if(!t.ownerId||!t.server||!t.releaseId||!t.sourceId)throw new TypeError("recognition-context");let r=i=>({userId:t.ownerId,context:{server:t.server,releaseId:t.releaseId,sourceId:t.sourceId},signal:i??new AbortController().signal}),s=(i,a)=>{let o=i;if(!Ar.test(a)||o.id!==a||!["queued","processing","ready","failed"].includes(o.state)||o.context?.server!==t.server||o.context.releaseId!==t.releaseId||o.context.sourceId!==t.sourceId||!di.test(o.context.referenceId))throw new Error("recognition-job-context-mismatch");return o};return{async submit(i,a,o=crypto.randomUUID(),c=()=>{}){if(!Ar.test(o))throw new TypeError("recognition-job-id");return s(await e.upload(i,{...r(a),id:o,progress:c}),o)},async poll(i,a){if(!Ar.test(i))throw new TypeError("recognition-job-id");return s(await e.read(i,r(a)),i)},async cancel(i){if(!Ar.test(i))throw new TypeError("recognition-job-id");await e.delete(i,r(AbortSignal.timeout(1e4)))}}}var ut=null,It=new Map;function Td(){return ut||(ut=new Worker(new URL("./worker.ts",import.meta.url),{type:"module",name:"haneoka-screenshot-recognition"}),ut.onmessage=n=>{let e=It.get(n.data.id);e&&(It.delete(n.data.id),n.data.error?e.reject(Object.assign(new Error(n.data.error),{code:n.data.error})):e.resolve(n.data))},ut.onerror=()=>{for(let n of It.values())n.reject(Object.assign(new Error("recognition_failed"),{code:"recognition_failed"}));It.clear(),ut?.terminate(),ut=null}),ut}var Xl={async upload(n,e){e.signal.throwIfAborted();let t=await new Promise((r,s)=>{let i=()=>{It.delete(e.id),s(e.signal.reason)};e.signal.addEventListener("abort",i,{once:!0}),It.set(e.id,{resolve:a=>{e.signal.removeEventListener("abort",i),r(a)},reject:a=>{e.signal.removeEventListener("abort",i),s(a)}}),Td().postMessage({id:e.id,server:e.context.server,identity:e.context,file:n,kind:e.kind})});return e.progress(n.size,n.size),{id:e.id,state:"ready",context:{...e.context,referenceId:t.referenceId},progress:null,expiresAt:Date.now()+36e5,result:t.result}},async read(){throw Object.assign(new Error("recognition_job_not_found"),{code:"recognition_job_not_found"})},async delete(){}};function Ql(n,e,t){return new Promise((r,s)=>{let i=()=>s(t.reason),a=()=>s(new RangeError("image-video"));n.addEventListener(e,()=>{t.removeEventListener("abort",i),n.removeEventListener("error",a),r()},{once:!0}),n.addEventListener("error",a,{once:!0}),t.addEventListener("abort",i,{once:!0})})}var Ad=n=>Math.min(600,Math.max(1,Math.floor(n/.25)+1));async function*Zl(n,e){let t=URL.createObjectURL(n),r=document.createElement("video");r.muted=!0,r.playsInline=!0,r.preload="auto";try{let s=Ql(r,"loadeddata",e);if(r.src=t,await s,!r.videoWidth||!r.videoHeight||!Number.isFinite(r.duration))throw new RangeError("image-video");let i=Math.min(1,4096/Math.max(r.videoWidth,r.videoHeight)),a=document.createElement("canvas");a.width=Math.round(r.videoWidth*i),a.height=Math.round(r.videoHeight*i);let o=a.getContext("2d");if(!o)throw new RangeError("image-video");let c=Ad(r.duration);for(let l=0;l<c;l++){e.throwIfAborted();let d=Ql(r,"seeked",e);r.currentTime=Math.min(r.duration,l*.25),await d,o.drawImage(r,0,0,a.width,a.height),yield{frame:await new Promise((h,g)=>a.toBlob(f=>f?h(f):g(new RangeError("image-video")),"image/jpeg",.92)),index:l,total:c}}}finally{r.removeAttribute("src"),r.load(),URL.revokeObjectURL(t)}}var Md=["training","awakening","liveSkillLevel","gekisoSkillLevel"];function Bd(n,e,t,r){if(e==="snapshots"){let i=n.snapshots[String(t)]?.awakeningGroup,a=(n.progression.supportCardRanks||[]).filter(o=>Number(o.group)===i&&Number(o.limitLevel)===r.cap);return a.length===1?{awakening:Number(a[0].rank)}:{}}let s=ke(n,e,t,{training:r.training});return Object.fromEntries(Md.flatMap(i=>{let a=r[i];return a!==null&&s[i]?.includes(a)?[[i,a]]:[]}))}function pi(n,e="keep"){return n.existingInstanceId!==null&&(e==="keep"||!n.observedLevels.length)?{value:n.existingLevel,source:"saved"}:n.observedLevels.length>1?{value:null,source:"conflict"}:e==="updates"&&n.existingLevel!==null&&n.observedLevels.length===1&&n.observedLevels[0]<=n.existingLevel?{value:n.existingLevel,source:"saved"}:n.observedLevels.length===1?{value:n.observedLevels[0],source:"observed"}:{value:null,source:"unknown"}}var fe=(n,e=0)=>typeof n=="number"&&Number.isSafeInteger(n)&&n>=e&&n<=2147483647,Qe=n=>n===null||typeof n!="object"?JSON.stringify(n):Array.isArray(n)?`[${n.map(Qe).join(",")}]`:`{${Object.entries(n).sort(([e],[t])=>e<t?-1:e>t?1:0).map(([e,t])=>`${JSON.stringify(e)}:${Qe(t)}`).join(",")}}`;function Yl(n,e){return n.server===e.identity.server&&n.releaseId===e.identity.releaseId&&n.sourceId===e.identity.sourceId}function Pd(n,e,t,r,s){if(!Yl(t,e)||!Ce(n,e).valid||!fe(t.revision))throw new RangeError("screenshot-review-context");let i=r.context;if(r.schema!=="haneoka-card-recognition-result-v1"||!["candidates","no-reliable-grid"].includes(r.status)||i.server!==t.server||i.releaseId!==t.releaseId||i.sourceId!==t.sourceId||!/^[a-f0-9]{64}$/u.test(i.referenceId)||!/^[a-f0-9]{64}$/u.test(r.image.sha256)||!fe(r.image.width,128)||!fe(r.image.height,128)||r.image.width>4096||r.image.height>4096||r.image.width*r.image.height>16e6||r.observations.length>100)throw new RangeError("screenshot-result-context");let a=new Map;for(let l of s){if(!fe(l.observation)||l.observation>=r.observations.length||a.has(l.observation))throw new RangeError("screenshot-selection");a.set(l.observation,l.cardId)}let o=new Map,c=[];for(let[l,d]of r.observations.entries()){let[u,h,g,f]=d.bbox;if(!["members","snapshots"].includes(d.kind)||d.bbox.length!==4||!fe(u)||!fe(h)||!fe(g,1)||!fe(f,1)||u+g>r.image.width||h+f>r.image.height||d.candidates.length>5||d.candidates.some(v=>!fe(v.cardId,1)||!Number.isFinite(v.score))||d.level.value!==null&&!fe(d.level.value,1))throw new RangeError("screenshot-observation");let m=a.get(l)??null,y=d.kind==="members"?e.members:e.snapshots;if(m===null){c.push(l);continue}if(!fe(m,1)||!y[String(m)])throw new RangeError("screenshot-card-not-in-catalog");let w=`${t.server}:${d.kind}:${m}`,x=o.get(w);if(!x){let v=n[d.kind].find(b=>b.cardId===m);x={key:w,kind:d.kind,cardId:m,observations:[],existingInstanceId:v?.instanceId??null,existingLevel:v?.level??null,observedLevels:[],observedPractice:{}},o.set(w,x)}x.observations.push({image:0,index:l}),d.level.value!==null&&!x.observedLevels.includes(d.level.value)&&x.observedLevels.push(d.level.value),d.detail&&(x.observedPractice={...Bd(e,d.kind,m,d.detail),...x.observedPractice})}return{context:{...t},original:structuredClone(n),recognitions:[structuredClone(r)],cards:[...o.values()],rejectedObservations:c}}function hn(n,e,t,r,s){if(!r.length||r.length>8||s.some(o=>!fe(o.image)||o.image>=r.length))throw new RangeError("screenshot-batch");let i=new Map,a=[];for(let[o,c]of r.entries()){let l=Pd(n,e,t,c,s.filter(d=>d.image===o));for(let d of l.cards){let u=i.get(d.key),h=d.observations.map(g=>({...g,image:o}));u?(u.observations.push(...h),u.observedLevels=[...new Set([...u.observedLevels,...d.observedLevels])],u.observedPractice={...d.observedPractice,...u.observedPractice}):i.set(d.key,{...d,observations:h})}a.push(...l.rejectedObservations.map(d=>o*100+d))}return{context:{...t},original:structuredClone(n),recognitions:r.map(o=>structuredClone(o)),cards:[...i.values()],rejectedObservations:a}}function mi(n,e,t,r,s,i="keep"){if(!Yl(r,t)||Qe(r)!==Qe(n.context)||Qe(e)!==Qe(n.original)||!Ce(e,t).valid)throw new RangeError("screenshot-review-stale");let a=new Set,o=s.filter(d=>{if(a.has(d.key)||!n.cards.some(u=>u.key===d.key))throw new RangeError("screenshot-confirmation");return a.add(d.key),d.include});if(!o.length)return e;let c=Rt(e);for(let d of o){let u=n.cards.find(m=>m.key===d.key);if(pi(u,i).source==="conflict"&&d.level===void 0)throw new RangeError("screenshot-level-conflict-confirmation-required");if(d.level==="keep"&&u.existingInstanceId===null)throw new RangeError("screenshot-level-evidence-required");if(d.level!==void 0&&d.level!=="keep"&&(!fe(d.level,1)||d.levelSource!=="manual"&&!u.observedLevels.includes(d.level)))throw new RangeError("screenshot-level-evidence-required");c=yn(c,u.kind,[{cardId:u.cardId}],t);let h=d.level==="keep"?void 0:d.level??(u.observedLevels.length===1&&(!u.existingInstanceId||i==="overwrite"||i==="updates"&&(u.existingLevel===null||u.observedLevels[0]>u.existingLevel))?u.observedLevels[0]:void 0);if(h!==void 0){let m=c[u.kind].find(y=>y.cardId===u.cardId);c=Tt(c,u.kind,[m.instanceId],{level:h})}let g=c[u.kind].find(m=>m.cardId===u.cardId),f=Object.entries(u.observedPractice).filter(([m,y])=>{let w=g[m]??null;return w===null||i==="overwrite"||i==="updates"&&y>w});f.length&&(c=Tt(c,u.kind,[g.instanceId],Object.fromEntries(f)))}let l=Ce(c,t);if(!l.valid)throw new RangeError(`screenshot-practice-review:${l.issues[0]?.path}`);return Qe(c)===Qe(Rt(e))?e:c}var Od=n=>new Promise((e,t)=>{n.throwIfAborted();let r=()=>{clearTimeout(s),t(n.reason)},s=setTimeout(()=>{n.removeEventListener("abort",r),e()},1e3);n.addEventListener("abort",r,{once:!0})});async function ec(n,e,t){t.throwIfAborted();let r=await createImageBitmap(n,{imageOrientation:"from-image"}),s={};try{if(t.throwIfAborted(),r.width!==e.image.width||r.height!==e.image.height)throw new RangeError("recognition-image-coordinate-mismatch");for(let[i,a]of e.observations.entries()){t.throwIfAborted();let[o,c,l,d]=a.bbox,u=Math.min(1,320/Math.max(l,d)),h=document.createElement("canvas");h.width=Math.max(1,Math.round(l*u)),h.height=Math.max(1,Math.round(d*u));let g=h.getContext("2d");if(!g)throw new Error("recognition-crop-canvas");g.drawImage(r,o,c,l,d,0,0,h.width,h.height);let f=await new Promise((m,y)=>h.toBlob(w=>w?m(w):y(new Error("recognition-crop-image")),"image/png"));t.throwIfAborted(),s[String(i)]=URL.createObjectURL(f)}return s}catch(i){throw Object.values(s).forEach(a=>URL.revokeObjectURL(a)),i}finally{r.close()}}function tc(n){let e=structuredClone(n.inventory),t={...n.context},r=n.data,s=Wl({...t,ownerId:t.ownerId||"local"},n.transport??Xl),i=n.revoke??URL.revokeObjectURL.bind(URL),a={phase:"select",confirmations:[],crops:{},error:null,canConfirm:!1},o=null,c=!1,l=[],d=[],u=new Set,h=()=>{c||n.onState(a)},g=()=>{Object.values(a.crops).forEach(i),a={...a,crops:{}}},f=async(w=!1)=>Promise.allSettled([...u].map(async x=>{await s.cancel(x),w&&u.delete(x)})),m=()=>{if(a.canConfirm=!1,!(!a.preview||!a.confirmations.some(w=>w.include)))try{mi(a.preview,e,r,t,a.confirmations,a.existingValues),a.canConfirm=!0}catch{}},y=()=>{let w=hn(e,r,t,l,d),x=w.cards.map(v=>{let b=a.confirmations.find($=>$.key===v.key),S=ke(r,v.kind,v.cardId,e[v.kind].find($=>$.cardId===v.cardId)).level??[];return b?{...b,level:b.level==="keep"&&v.existingInstanceId!==null?"keep":typeof b.level=="number"&&(b.levelSource==="manual"?S:v.observedLevels).includes(b.level)?b.level:void 0}:{key:v.key,include:v.observedLevels.length<=1}});a={...a,phase:"review",preview:w,results:[...l],confirmations:x,canConfirm:!1,error:null},m(),h()};return{state:()=>a,async files(w){if(c||o)throw new Error("recognition-session-busy");if(!w.length||w.length>8||w.some(S=>!S.size||S.size>8*1024*1024||!["image/png","image/jpeg","image/webp"].includes(S.type)))throw new RangeError("recognition-image-format-or-size");let x=new AbortController;o=x;let v=!1,b=setTimeout(()=>{v=!0,x.abort()},18e4);g(),l=[],d=[],a={phase:"processing",confirmations:[],crops:{},error:null,canConfirm:!1},h();try{for(let S of w){x.signal.throwIfAborted();let $=crypto.randomUUID();u.add($);let M=await s.submit(S,x.signal,$,n.onUploadProgress);for(;M.state==="queued"||M.state==="processing";)a={...a,phase:M.state},h(),await(n.wait??Od)(x.signal),M=await s.poll($,x.signal);if(x.signal.throwIfAborted(),M.state!=="ready")throw new Error(M.error?.code??"recognition-failed");let C=ui(M);if(C.length!==1)throw new RangeError("recognition-job-image-count");let E=C[0],I=l.length;hn(e,r,t,[E],[]);let A=await(n.crops??ec)(S,E,x.signal);if(x.signal.aborted||c)throw Object.values(A).forEach(i),x.signal.throwIfAborted(),new Error("recognition-session-closed");a={...a,crops:{...a.crops,...Object.fromEntries(Object.entries(A).map(([_,R])=>[`${I}:${_}`,R]))}},l.push(E);for(let[_,R]of E.observations.entries())d.push({image:I,observation:_,cardId:R.cardId!==null&&(R.kind==="members"?r.members:r.snapshots)[String(R.cardId)]?R.cardId:null});await s.cancel($),u.delete($)}x.signal.throwIfAborted(),y()}catch(S){g(),l=[],d=[];let $=S instanceof Error?S.code:void 0;c||(a={phase:x.signal.aborted&&!v?"select":"failed",confirmations:[],crops:{},error:v?"image-timeout":x.signal.aborted?null:$??"recognition-failed",canConfirm:!1},h())}finally{clearTimeout(b),await f(!0),o===x&&(o=null)}},async video(w,x){if(c||o)throw new Error("recognition-session-busy");let v=new AbortController;o=v,g(),l=[],d=[],a={phase:"processing",confirmations:[],crops:{},error:null,canConfirm:!1},h();let b=new Map;try{for await(let{frame:C,index:E,total:I}of Zl(w,v.signal)){x?.(E,I);let A=crypto.randomUUID();u.add(A);let _=await s.submit(C,v.signal,A);if(await s.cancel(A),u.delete(A),_.state!=="ready")continue;let R=ui(_)[0];if(!R)continue;hn(e,r,t,[R],[]);let L=[];for(let J of R.observations){if(J.cardId===null||!(J.kind==="members"?r.members:r.snapshots)[String(J.cardId)])continue;let ne=`${J.kind}:${J.cardId}`,K=b.get(ne);if(K||(K={frames:0,best:0,levels:new Map,detail:!1,fields:new Map,observation:{...J,level:{...J.level}}},b.set(ne,K),L.push(K.observation)),K.frames++,K.best=Math.max(K.best,J.candidates[0]?.score??0),J.level.value!==null&&K.levels.set(J.level.value,(K.levels.get(J.level.value)??0)+(J.detail?2:1)),J.detail){K.detail=!0;for(let[Ze,Ye]of Object.entries(J.detail)){if(Ye===null)continue;let fn=K.fields.get(Ze)??new Map;K.fields.set(Ze,fn.set(Ye,(fn.get(Ye)??0)+1))}}}if(!L.length)continue;let H={...R,observations:L},Z=await(n.crops??ec)(C,H,v.signal),se=l.length;a={...a,crops:{...a.crops,...Object.fromEntries(Object.entries(Z).map(([J,ne])=>[`${se}:${J}`,ne]))}},l.push(H)}v.signal.throwIfAborted();let S=new Set([...b.values()].filter(C=>(C.detail||C.frames>=2)&&C.best>=.8).map(C=>C.observation)),$={},M=[];l.forEach((C,E)=>{let I=C.observations.filter((R,L)=>{let H=a.crops[`${E}:${L}`];return S.has(R)?!0:(H&&i(H),!1)});if(!I.length)return;let A=M.length,_=0;C.observations.forEach((R,L)=>{S.has(R)&&($[`${A}:${_}`]=a.crops[`${E}:${L}`],d.push({image:A,observation:_++,cardId:R.cardId}))}),M.push({...C,observations:I})}),l=M,a={...a,crops:$};for(let{levels:C,fields:E,detail:I,observation:A}of b.values()){if(I){let L=H=>{let[Z,se]=[...E.get(H)??[]].sort((J,ne)=>ne[1]-J[1]);return Z&&(!se||Z[1]>se[1])?Z[0]:null};A.detail={cap:L("cap")??0,training:L("training"),awakening:L("awakening"),liveSkillLevel:L("liveSkillLevel"),gekisoSkillLevel:L("gekisoSkillLevel")}}let[_,R]=[...C.entries()].sort((L,H)=>H[1]-L[1]);A.level=_&&_[1]>=2&&(!R||_[1]>R[1])?{value:_[0],reason:"majority"}:{value:null,reason:"unread-or-disagreeing"}}y()}catch(S){g(),l=[],d=[];let $=S instanceof Error?S.code??(S instanceof RangeError?S.message:void 0):void 0;c||(a={phase:v.signal.aborted?"select":"failed",confirmations:[],crops:{},error:v.signal.aborted?null:$??"recognition-failed",canConfirm:!1},h())}finally{await f(!0),o===v&&(o=null)}},correct(w,x,v){if(c||a.phase!=="review"||!l[w]?.observations[x])throw new RangeError("recognition-review-selection");let b=d.filter(S=>S.image!==w||S.observation!==x);b.push({image:w,observation:x,cardId:v}),hn(e,r,t,l,b),d=b,y()},include(w,x){if(c||a.phase!=="review"||!a.preview?.cards.some(v=>v.key===w))throw new RangeError("recognition-review-selection");a={...a,confirmations:a.confirmations.map(v=>v.key===w?{...v,include:x}:v)},m(),h()},existingValues(w){if(c||a.phase!=="review"||!a.preview)throw new RangeError("recognition-review-selection");let x=new Set(a.preview.cards.filter(v=>v.existingInstanceId!==null).map(v=>v.key));a={...a,existingValues:w,confirmations:a.confirmations.map(v=>x.has(v.key)?{...v,level:void 0,levelSource:void 0}:v)},m(),h()},level(w,x,v="observed"){let b=a.preview?.cards.find($=>$.key===w);if(c||a.phase!=="review"||!b)throw new RangeError("recognition-review-level");let S=v==="manual"?ke(r,b.kind,b.cardId,e[b.kind].find($=>$.cardId===b.cardId)).level??[]:b.observedLevels;if(x==="keep"?b.existingInstanceId===null:x!==void 0&&!S.includes(x))throw new RangeError("recognition-review-level");a={...a,confirmations:a.confirmations.map($=>$.key===w?{...$,level:x,levelSource:typeof x=="number"?v:void 0}:$)},m(),h()},merge(w,x,v){if(c||a.phase!=="review"||!a.preview||!a.canConfirm)throw new RangeError("recognition-review-required");return mi(a.preview,w,x,v,a.confirmations,a.existingValues)},async close(){c=!0,o?.abort(),g(),l=[],d=[],a={phase:"select",confirmations:[],crops:{},error:null,canConfirm:!1},await f()},async cancel(){o?.abort(),await f()}}}function ye({glyph:n,title:e,hint:t,onClick:r,href:s,disabled:i,expanded:a,after:o=k}){let c=p`
    <span class="list-item__avatar">${O(n,20)}</span>
    <span class="list-item__body">
      <span class="list-item__headline">${e}</span>
      <span class="list-item__supporting">${t}</span>
    </span>
    <span class="list-item__trailing">${O(s?"open_in_new":a===void 0?"chevron_right":a?"expand_less":"expand_more",20)}</span>
  `;return p`
    <li class="import-source">
      ${s?p`<a class="list-item list-item--two-line list-item--interactive" href=${s} target="_blank" rel="noopener noreferrer">${c}</a>`:p`<button class="list-item list-item--two-line list-item--interactive" type="button" ?disabled=${i}
            aria-expanded=${a??k} @click=${r}>${c}</button>`}
      ${o}
    </li>
  `}function Ld(n,e,t){let r=e.text,s=o=>e.expanded?.(o)??!1,i=o=>()=>e.expand?.(o,!s(o)),a=(o,c,l)=>p`
    <section class="import-sources__group">
      <header><h3>${o}</h3><span>${c}</span></header>
      <ul class="list" role="list">${l}</ul>
    </section>
  `;return p`
    ${a(r("groupSave","Game save"),r("tagAll","All progress"),p`
      ${e.appAccount?ye({glyph:"sports_esports",title:G(e.locale??"en","account.page.openSaveImport","Import a save in Account"),hint:G(e.locale??"en","account.page.saveImportGuide","Read the game save in Account."),onClick:e.appAccount}):k}
      ${ye({glyph:"upload_file",title:r("sourceFile","Save or export file"),hint:r("sourceFileHint","ZIP, iMazing, JSON or CSV"),onClick:o=>o.currentTarget.nextElementSibling?.click(),after:p`<input hidden type="file" multiple @change=${o=>{let c=o.target;e.files([...c.files??[]]),c.value=""}} />`})}
      ${e.backup?ye({glyph:"phone_iphone",title:r("iosBackup","iPhone / iPad backup"),hint:r("iosBackupHint","Made with Finder, Apple Devices or iTunes"),expanded:s("box-backup"),onClick:i("box-backup"),after:s("box-backup")?e.backup:k}):k}
      ${e.android?ye({glyph:"usb",title:r("android","Read Android phone"),hint:r(n.usbReady?"androidHint":"androidUnavailable",n.usbReady?"Connect by USB with debugging on":"Needs Chrome or Edge on a computer"),disabled:!n.usbReady,onClick:e.android,after:n.usbReady&&t.length>1?p`<div class="import-source__extra"><md-outlined-select
              label=${r("channel","Game channel")}
              .value=${n.usbChannel??""}
              @change=${o=>e.channel?.(o.target.value)}
            >${t.map(o=>p`
              <md-select-option value=${o.packageId}>
                <span slot="headline">${r(o.packageId.endsWith(".official")?"channelOfficial":"channelPlay",o.label)}</span>
              </md-select-option>`)}</md-outlined-select></div>`:k}):k}
      ${e.folder?ye({glyph:"folder_open",title:r("saveFolder","Save folder"),hint:r("saveFolderHint","The game's data folder on this device"),onClick:e.folder.open,after:e.folder.input}):k}
      ${e.appHref?ye({glyph:"install_mobile",title:r("sourceApp","Haneoka App"),hint:r("sourceAppHint","Reads the save on your phone, then syncs here"),href:e.appHref}):k}
    `)}
    ${e.screenshots?a(r("groupScreen","From the game screen"),r("tagCards","Cards and levels"),ye({glyph:"screenshot_monitor",title:r("screenshots","Screenshots or screen recording"),hint:r("screenshotsHint","Recognized on this device"),onClick:e.screenshots})):k}
    ${a(r("groupText","Text"),r("tagList","What the text lists"),ye({glyph:"content_paste",title:r("paste","Paste Box text"),hint:r("pasteHint","A card list or copied Box text"),expanded:s("box-paste"),onClick:i("box-paste"),after:s("box-paste")?p`<div class="import-source__extra team-builder__practice-control">
            <md-outlined-text-field type="textarea" rows="4" label=${r("paste","Paste Box text")}></md-outlined-text-field>
            <button type="button" class="button button--tonal" @click=${o=>{let c=o.currentTarget.parentElement?.querySelector("md-outlined-text-field");c?.value.trim()&&e.parseText(c.value)}}>${r("parse","Read Box")}</button>
          </div>`:k}))}
  `}function nc(n,e){let t=dt.filter(l=>l.server===n.server),r=e.text,s=n.preview?mn(n.preview,n.confirmation):null,i=s?[...s.maps.map(l=>({...l,name:e.mapName(l.proposal.map,l.proposal.id),select:d=>zl(n.confirmation,l.proposal.key,d)})),...s.scalars.map(l=>({...l,name:e.fieldName(l.proposal.key),select:d=>Fl(n.confirmation,l.proposal.key,d)}))]:[],a=[...new Map((n.preview?.notices??[]).map(l=>[`${l.code}:${l.path}`,l])).values()],o=l=>l==="box"?r("boxValue","Box value"):l==="saved"?r("keep","Keep saved value"):l==="conflict"?r("chooseValue","Choose a value"):r("unknown","Unknown"),c=(l,d)=>{let u=n.confirmation.cards.find(m=>m.key===l)?.fields?.[d.field],h=`${o(d.defaultSource)}${d.defaultValue===null?"":`: ${d.defaultValue}`}`,g=n.preview?.cards.find(m=>m.key===l),f=`${r("keep","Keep saved value")}: ${g?.existing[d.field]??r("unknown","Unknown")}`;return d.values.length?p`
          <md-outlined-select
            label=${e.fieldName(d.field)}
            .value=${u===void 0?"auto":String(u)}
            .displayText=${u==="keep"?f:u===void 0?h:String(u)}
            @change=${m=>{let y=m.target.value;e.confirmation(Dl(n.confirmation,l,d.field,y==="auto"?void 0:y==="keep"?"keep":Number(y)))}}
          >
            <md-select-option value="auto"><span slot="headline">${h}</span></md-select-option>
            ${g?.existingInstanceId!=null?p`
              <md-select-option value="keep"><span slot="headline">${f}</span></md-select-option>
            `:k}
            ${d.values.map(m=>p`
          <md-select-option value=${String(m)}><span slot="headline">${m}</span></md-select-option>
        `)}
          </md-outlined-select>
        `:p`
          <span>
            ${e.fieldName(d.field)} / ${o(d.source)}${d.value===null?"":`: ${d.value}`}
          </span>
        `};return p`
    <dialog
      class="selection-pane team-builder__box-review"
      aria-label=${r("title","Import Box")}
      @cancel=${l=>{l.preventDefault(),e.close()}}
    >
      <header class="sheet__header">
        <div class="team-builder__import-heading">
          <strong>${r("title","Import Box")}</strong>
          <span class="team-builder__import-server">
            ${n.sourceServerLabel?r("serverTransfer","{source} \u2192 {target}",{source:n.sourceServerLabel,target:n.serverLabel}):n.serverLabel}
          </span>
        </div>
        ${D({icon:"close",label:r("close","Close"),onClick:e.close})}
      </header>
      <div class="selection-pane__body">
        ${n.error?p`
              <p class="team-builder__error" role="alert">${n.error}</p>
            `:k}
        ${n.phase==="select"?p`
              ${Ld(n,e,t)}
            `:k}
        ${n.phase==="parsing"?p`
              <p role="status">
                ${e.sourceStatus||r("parsing","Reading Box")}${n.progress?` / ${n.progress.completed}/${n.progress.total}`:""}
              </p>
            `:k}
        ${(n.phase==="choose"||n.phase==="review")&&n.candidates.length>1?p`
              <md-outlined-select
                label=${r("candidate","Choose Box data")}
                .value=${n.selectedCandidateId||"choose"}
                @change=${l=>{let d=l.target.value;n.candidates.some(u=>u.id===d)&&e.selectCandidate(d)}}
              >
                <md-select-option value="choose">
                  <span slot="headline">${r("candidate","Choose Box data")}</span>
                </md-select-option>
                ${n.candidates.map((l,d)=>p`
            <md-select-option value=${l.id}>
              <span slot="headline">
                ${r("candidateCounts","Data {index}: {members} members, {snapshots} photos, {characters} characters, {items} items",{index:d+1,members:l.members.length,snapshots:l.snapshots.length,characters:l.characters.length,items:l.bandItems.length})}
              </span>
            </md-select-option>
          `)}
              </md-outlined-select>
            `:k}
        ${s&&n.preview?p`
              <section class="surface team-builder__import-policies">
                  ${n.preview.cards.length?p`
                          <div class="team-builder__practice-control">
                            <strong class="detail-section-title">${r("ownershipMode","Members and snapshots")}</strong>
                            ${F({label:r("ownershipMode","Members and snapshots"),value:n.confirmation.ownership??"merge",options:[{value:"merge",label:r("mergeOwnership","Merge ownership")},{value:"replace",label:r("replaceOwnership","Replace member and snapshot ownership")}],onSelect:l=>e.confirmation({...n.confirmation,ownership:l})})}
                          </div>
                        `:k}
                  ${n.confirmation.ownership==="replace"?p`
                          <p>
                            ${r("replaceScope","Only the selected cards will be marked as owned. {count} cards will be marked as not owned.",{count:n.ownedKeys?.filter(l=>!s.cards.some(d=>d.choice.include&&l===`${d.proposal.kind==="members"?"m":"s"}.${d.proposal.cardId}.own`)).length??s.removed})}
                          </p>
                        `:k}
                  <div class="team-builder__practice-control">
                    <strong class="detail-section-title">${r("existingPolicy","Existing cards")}</strong>
                    ${F({label:r("existingPolicy","Existing cards"),value:n.confirmation.existingValues??"keep",options:[{value:"keep",label:r("existingKeep","Keep all existing values")},{value:"updates",label:r("existingUpdates","Only increases")},{value:"overwrite",label:r("existingOverwrite","Overwrite all existing values")}],onSelect:l=>e.confirmation(Ul(n.preview,n.confirmation,l))})}
              </div>
                </section>
                <div class="team-builder__actions">
                <button
                  type="button"
                  class="button button--text"
                  @click=${()=>e.confirmation(li(n.preview,n.confirmation,!0))}
                >
                  ${r("selectAvailable","Select available entries")}
                </button>
                <button
                  type="button"
                  class="button button--text"
                  @click=${()=>e.confirmation(li(n.preview,n.confirmation,!1))}
                >
                  ${r("clear","Clear selection")}
                </button>
              </div>
              <div class="collection collection--member">
                ${s.cards.map(l=>{let d=e.card(l.proposal.kind,l.proposal.cardId),u=l.proposal.key,h=()=>e.confirmation(Nl(n.confirmation,u,!l.choice.include)),g=l.fields.some(w=>w.values.length),f=l.blocked||(e.expanded?.(`box-card-${u}`)??!1),m=n.confirmation.cards.find(w=>w.key===u)?.fields,y=l.fields.map(w=>{let x=m?.[w.field],v=x==="keep"?l.proposal.existing[w.field]:x??(w.values.length?w.defaultValue:w.value);return`${e.fieldName(w.field)} ${v??"\u2014"}`}).join(" / ");return p`
            <div
              class="team-builder__owned-card"
              ?data-selected=${l.choice.include}
              role="group"
              aria-label=${d?.label??r("review","Needs review")}
            >
              ${d?l.blocked?p`
                      ${Ie(d)}
                      <strong>${d.title}</strong>
                    `:Ve({...d,href:void 0,itemId:void 0,selected:l.choice.include,onOpen:h}):k}
              <small class="team-builder__card-values">${y}</small>
              ${g&&f?p`<div class="team-builder__practice-control">${l.fields.map(w=>c(u,w))}</div>`:g?p`
                      <button class="button button--text button--small" type="button" @click=${()=>e.expand?.(`box-card-${u}`,!0)}>
                        ${O("tune",18)}${r("adjust","Adjust")}
                      </button>
                    `:k}
              ${l.blocked?p`
                    <small role="status">${r("review","Needs review")}</small>
                  `:k}
            </div>
          `})}
              </div>
              ${i.length?W({id:"team-box-maps",label:r("maps","Character and item levels"),expanded:e.expanded?.("box-maps")??!1,onExpandedChange:l=>e.expand?.("box-maps",l),content:p`
                  <div class="team-builder__fields">
                    ${i.map(l=>p`
                        <div class="team-builder__practice-control">
                          <label class="team-builder__check">
                            <md-checkbox
                              .checked=${l.choice.include}
                              ?disabled=${l.blocked&&!l.choice.include}
                              aria-label=${`${r("include","Include")}: ${l.name}`}
                              @change=${d=>e.confirmation(l.select({include:d.target.checked}))}
                            ></md-checkbox>
                            <span>${l.name}</span>
                          </label>
                          <small>${r("saved","Saved")}: ${l.proposal.existing??r("unknown","Unknown")}</small>
                          <md-outlined-select
                            label=${r("boxValue","Box value")}
                            .value=${l.choice.value===void 0?"auto":String(l.choice.value)}
                            .displayText=${l.value===null?l.requiresChoice?r("chooseValue","Choose a value"):r("unknown","Unknown"):String(l.value)}
                            @change=${d=>{let u=d.target.value;e.confirmation(l.select({value:u==="auto"?void 0:u==="keep"?"keep":Number(u)}))}}
                          >
                            <md-select-option value="auto">
                              <span slot="headline">
                                ${l.defaultValue===null?r("chooseValue","Choose a value"):String(l.defaultValue)}
                              </span>
                            </md-select-option>
                            ${l.existing?p`
                      <md-select-option value="keep">
                        <span slot="headline">
                          ${r("keep","Keep saved value")}: ${l.proposal.existing??r("unknown","Unknown")}
                        </span>
                      </md-select-option>
                    `:k}
                            ${l.proposal.values.map(d=>p`
                  <md-select-option value=${String(d)}><span slot="headline">${d}</span></md-select-option>
                `)}
                          </md-outlined-select>
                          ${l.blocked?p`
                    <small role="status">${r("review","Needs review")}</small>
                  `:k}
                        </div>
                      `)}
                  </div>
                `}):k}
              ${a.length?W({id:"team-box-notices",label:r("notImported","Fields not imported"),metadata:a.length,expanded:e.expanded?.("box-notices")??!1,onExpandedChange:l=>e.expand?.("box-notices",l),content:e.expanded?.("box-notices")?p`
                      <ul class="list">
                        ${a.map(l=>p`
                            <li>${e.noticeName(l.path)} / ${r(`notice.${l.code}`,"Needs review")}</li>
                          `)}
                      </ul>
                    `:k}):k}
              ${n.preview.issues.length?W({id:"team-box-issues",label:r("issues","Entries needing review"),metadata:n.preview.issues.length,expanded:e.expanded?.("box-issues")??!1,onExpandedChange:l=>e.expand?.("box-issues",l),content:p`
                  <ul class="list">
                    ${n.preview.issues.map(l=>p`
                        <li>
                          ${l.kind==="input"?l.field==="row"?r("listRow","Row {row}",{row:l.id}):r("review","Needs review"):l.kind==="members"||l.kind==="snapshots"?`${e.text(l.kind,l.kind)} #${l.id}`:l.kind==="bandItems"||l.kind==="characterRanks"?e.mapName(l.kind,l.id):r("review","Needs review")}
                          /
                          ${l.code==="unavailable_target_card"||l.code==="unavailable_target_entity"?r("unavailableTarget","Not in the target server's catalogue"):l.field==="row"?r("listRowCheck","Check the card ID, name, type and training values in this row."):p`
                                  ${e.fieldName(l.field)} / ${r("review","Needs review")}
                                `}
                        </li>
                      `)}
                  </ul>
                `}):k}
            `:k}
      </div>
      <footer class="selection-pane__footer team-builder__actions">
        ${s?p`
          <span class="team-builder__import-count" role="status">
                  ${r("selectedEntries","{count} selected",{count:s.included})}
                </span>
              `:k}
        ${n.phase==="select"&&e.onOpenHistory?p`
          <button type="button" class="button button--tonal" @click=${e.onOpenHistory}>
            ${O("history")}${G(e.locale??"ja","catalog.gachaHistory.title","Gacha history")}
          </button>
        `:k}
        ${n.phase==="parsing"?p`
              <button type="button" class="button button--outlined" @click=${e.cancel}>
                ${r("cancel","Cancel")}
              </button>
            `:k}
        ${n.phase==="review"?p`
              <button
                type="button"
                class="button"
                ?disabled=${!n.canConfirm||!s?.canConfirm}
                @click=${e.confirm}
              >
                ${r("confirm","Confirm import")}
              </button>
            `:k}
      </footer>
    </dialog>
  `}function rc(n,e){let t=e.text,r=["preparing","uploading","queued","processing"].includes(n.phase),s=(i,a,o)=>{let c=n.results?.[i]?.observations[a];if(!c)return k;let l=[...new Set([...c.candidates.map(u=>u.cardId),...o===null?[]:[o]])],d=u=>{let h=e.card(c.kind,u);return typeof h?.title=="string"?h.title:h?.label??""};return p`<div>
      ${n.crops[`${i}:${a}`]?Ie({title:t("reviewCard","Review card"),label:t("reviewCard","Review card"),image:n.crops[`${i}:${a}`],aspectRatio:`${c.bbox[2]} / ${c.bbox[3]}`,fit:"contain"}):k}
      ${l.length?p`<md-outlined-select label=${t("candidate","Card")} .value=${o===null?"choose":String(o)}
        .displayText=${o===null?t("chooseCard","Choose card"):d(o)}
        @change=${u=>{let h=Number(u.target.value);l.includes(h)&&e.candidate(i,a,h)}}>
        ${o===null?p`<md-select-option value="choose"><span slot="headline">${t("chooseCard","Choose card")}</span></md-select-option>`:k}
        ${l.map(u=>p`<md-select-option value=${String(u)}><span slot="headline">${d(u)}</span></md-select-option>`)}
      </md-outlined-select>`:k}
      <button class="button button--outlined" @click=${()=>e.correct(i,a)}>${t("chooseCard","Choose card")}</button>
    </div>`};return p`
    <dialog class="selection-pane team-builder__screenshot-review" aria-label=${t("title","Import screenshots")}
      @cancel=${i=>{i.preventDefault(),e.close()}}>
      <header class="sheet__header">
        <strong>${t("title","Import screenshots")}</strong>
        ${D({icon:"close",label:t("close","Close"),onClick:e.close})}
      </header>
      <div class="selection-pane__body">
        ${n.localImages?.length?p`<div class="team-builder__crops">${n.localImages.map((i,a)=>p`<figure class="team-builder__crop">
          <div class="team-builder__crop-frame"><img src=${i.url} alt="" decoding="async" />
            <span style=${`inset:${i.crop.top}% ${i.crop.right}% ${i.crop.bottom}% ${i.crop.left}%`}></span></div>
          ${["top","bottom","left","right"].map(o=>p`<label class="team-builder__crop-side"><span>${t(o,o)}</span>
            <md-slider min="0" max="45" .value=${i.crop[o]} aria-label=${t(o,o)} labeled
              @change=${c=>e.crop?.(a,o,Number(c.target.value))}></md-slider></label>`)}
        </figure>`)}</div>`:k}
        ${n.phase==="select"||n.phase==="failed"||n.phase==="review"&&n.results?.length&&n.results.every(i=>i.status==="no-reliable-grid")?p`
          <ul class="list" role="list">
            ${ye({glyph:"image",title:t("chooseImages","Choose screenshots"),hint:t("imagesHint","Up to 8 images of the card list"),onClick:i=>i.currentTarget.nextElementSibling?.click(),after:p`<input hidden type="file" accept="image/png,image/jpeg,image/webp,image/heic,image/heif,.heic,.heif" multiple
                @change=${i=>{let a=i.target;e.files([...a.files??[]]),a.value=""}} />`})}
            ${e.video?ye({glyph:"videocam",title:t("chooseVideo","Choose screen recording"),hint:t("videoHint","Scroll through the whole list once, then page through each card's details at a steady pace"),onClick:i=>i.currentTarget.nextElementSibling?.click(),after:p`<input hidden type="file" accept="video/*"
                @change=${i=>{let a=i.target,o=a.files?.[0];o&&e.video(o),a.value=""}} />`}):k}
          </ul>`:k}
        ${r?p`<p role="status">${t(n.phase,"Recognizing screenshots")}</p>`:k}
        ${n.error?p`<p class="team-builder__error" role="alert">${t(n.error.startsWith("image-")?n.error:n.error==="recognition_reference_unavailable"?"unavailable":"failedMessage","Screenshot recognition failed")}</p>`:k}
        ${n.preview?p`
          ${F({label:t("existingPolicy","Existing cards"),value:n.existingValues??"keep",options:[{value:"keep",label:t("existingKeep","Keep all existing values")},{value:"updates",label:t("existingUpdates","Only increases")},{value:"overwrite",label:t("existingOverwrite","Overwrite all existing values")}],onSelect:e.existingValues})}
          <div class="collection collection--member">
            ${n.preview.cards.map(i=>{let a=e.card(i.kind,i.cardId),o=n.confirmations.find(f=>f.key===i.key),c=i.existingInstanceId!==null,l=pi(i,n.existingValues),d=l.source==="conflict",u=l.value,h=l.source==="saved"?t("keepLevel","Keep saved level"):d?t("chooseLevel","Choose level"):l.source==="observed"?t("observedLevel","Screenshot level"):t("unknown","Unknown"),g=u===null?h:`${h}: ${u}`;return p`<div role="group" aria-label=${a?.label??t("reviewCard","Review card")}>
                ${a?Ve({...a,href:void 0,onOpen:()=>{let f=i.observations[0];e.correct(f.image,f.index)}}):k}
                <label class="team-builder__check">
                  <md-checkbox .checked=${o?.include??!1}
                    aria-label=${`${t("include","Include card")}: ${a?.label??t("reviewCard","Review card")}`}
                    @change=${f=>e.include(i.key,f.target.checked)}></md-checkbox>
                  <span>${t("include","Include card")}</span>
                </label>
                <div class="team-builder__practice-control">
                  <p class="team-builder__hint">${g}</p>
                  ${(()=>{let f=[...new Set(e.levels?.(i.kind,i.cardId)??[])].filter(Number.isSafeInteger).sort((x,v)=>x-v),m=o?.level==="keep"?i.existingLevel:o?.level===void 0?u:o.level,y=m!==null&&f.includes(m)?m:null,w=x=>e.level(i.key,x,i.observedLevels.includes(x)?"observed":"manual");return f.length>1?yr(t("level","Visible level"),f,y,w,String,{unknownLabel:m===null?t("chooseLevel","Choose level"):String(m),commitOnChange:!0}):f.length===1?p`<button class="button button--outlined" @click=${()=>w(f[0])}>${t("level","Visible level")}: ${f[0]}</button>`:k})()}
                  ${c&&o?.level!=="keep"?p`<button type="button" class="button button--text" @click=${()=>e.level(i.key,"keep","manual")}>${t("keepLevel","Keep saved level")}: ${i.existingLevel??t("levelUnknown","Level not recognized")}</button>`:k}
                  ${o?.level!==void 0?p`<button class="button button--text" @click=${()=>e.level(i.key,void 0,"manual")}>${g}</button>`:k}
                </div>
                ${i.observedLevels.length?k:p`<small>${t("levelUnknown","Level not recognized")}</small>`}
                ${Object.keys(i.observedPractice).length?p`<small>${Object.entries(i.observedPractice).map(([f,m])=>`${t(`practice_${f}`,f)} ${m}`).join(" / ")}</small>`:k}
                ${d&&o?.include&&o.level===void 0?p`<small role="status">${t("chooseLevel","Choose level")}</small>`:k}
                ${W({id:`team-screenshot-${i.key}`,label:t("sourceImages","Screenshots"),expanded:e.expandedSource?.(i.key)??!1,onExpandedChange:f=>e.expandSource?.(i.key,f),content:p`${i.observations.map(f=>s(f.image,f.index,i.cardId))}`})}
              </div>`})}
          </div>`:k}
        ${(n.results??[]).map((i,a)=>p`
          ${i.status==="no-reliable-grid"?p`<p role="status">${t("noGrid","No reliable card grid found")}</p>`:k}
          <div class="collection collection--member">
            ${i.observations.map((o,c)=>n.preview?.cards.some(l=>l.observations.some(d=>d.image===a&&d.index===c))?k:p`
              <div>
                <span>${o.cardId===null?t("unrecognized","Unrecognized card"):t("reviewCard","Review card")}</span>
                ${s(a,c,null)}
              </div>`)}
          </div>`)}
      </div>
      <footer class="selection-pane__footer team-builder__actions">
        ${n.phase==="preview"?p`<button class="button" @click=${e.upload}>${t("upload","Recognize")}</button>`:k}
        ${r?p`<button class="button button--outlined" @click=${e.cancel}>${t("cancel","Cancel")}</button>`:k}
        ${n.phase==="review"?p`<button class="button" ?disabled=${!n.canConfirm} @click=${e.confirm}>${t("confirm","Confirm import")}</button>`:k}
      </footer>
    </dialog>`}function Mr(n,e,t,r){r.signal.throwIfAborted();let s=new Worker(new URL("./worker.ts",import.meta.url),{type:"module"});return new Promise((i,a)=>{let o=!1,c=(u,h)=>{o||(o=!0,clearTimeout(d),s.terminate(),r.signal.removeEventListener("abort",l),u?a(u):i(h))},l=()=>c(new DOMException("Aborted","AbortError")),d=setTimeout(()=>c(new P("backup_timeout")),18e4);r.signal.addEventListener("abort",l,{once:!0}),s.onmessage=u=>{u.data.progress?r.progress(u.data.progress.completed,u.data.progress.total):u.data.error?c(new P(u.data.error)):c(void 0,u.data.result)},s.onerror=()=>c(new P("backup_invalid"));try{s.postMessage({source:n,kind:e,password:t,archive:n.archive})}catch(u){c(u)}})}var hi={top:0,right:0,bottom:0,left:0},_t={bytes:8*1024*1024,pixels:16e6,side:4096};function qd(n){let e=new DataView(n.buffer,n.byteOffset,n.byteLength),t=(a,o)=>String.fromCharCode(...n.subarray(a,a+o)),r=0,s=0,i="";if(n.length>=24&&n[0]===137&&t(1,3)==="PNG"&&t(12,4)==="IHDR")i="image/png",r=e.getUint32(16),s=e.getUint32(20);else{if(n.length>=12&&t(4,4)==="ftyp")throw new RangeError("image-heic");if(n[0]===255&&n[1]===216){i="image/jpeg";for(let a=2;a+8<n.length&&n[a]===255;){let o=n[a+1];if(o===255){a++;continue}if(o===218||o===217)break;if(o===1||o>=208&&o<=216){a+=2;continue}let c=e.getUint16(a+2);if(c<2||a+c+2>n.length)break;if([192,193,194].includes(o)){s=e.getUint16(a+5),r=e.getUint16(a+7);break}a+=c+2}}else if(n.length>=30&&t(0,4)==="RIFF"&&t(8,4)==="WEBP"){if(i="image/webp",t(12,4)==="VP8X")r=1+n[24]+(n[25]<<8)+(n[26]<<16),s=1+n[27]+(n[28]<<8)+(n[29]<<16);else if(t(12,4)==="VP8 "&&n[23]===157&&n[24]===1&&n[25]===42)r=e.getUint16(26,!0)&16383,s=e.getUint16(28,!0)&16383;else if(t(12,4)==="VP8L"&&n[20]===47){let a=e.getUint32(21,!0);r=(a&16383)+1,s=(a>>>14&16383)+1}}}if(!r||!s||!i)throw new RangeError("image-format");if(r>8192||s>8192||r*s>_t.pixels)throw new RangeError("image-budget");return{type:i,width:r,height:s}}function Nd(n,e,t){if(Object.values(t).some(o=>!Number.isFinite(o)||o<0||o>95)||t.left+t.right>=100||t.top+t.bottom>=100)throw new RangeError("image-crop");let r=Math.floor(n*t.left/100),s=Math.floor(e*t.top/100),i=n-r-Math.floor(n*t.right/100),a=e-s-Math.floor(e*t.bottom/100);if(i<128||a<128)throw new RangeError("image-crop");return{x:r,y:s,width:i,height:a}}async function gi(n,e,t){if(t.throwIfAborted(),!n.size||n.size>_t.bytes)throw new RangeError("image-budget");let r=new Uint8Array(await n.arrayBuffer()),s;try{t.throwIfAborted();let i=qd(r);s=await createImageBitmap(new Blob([r],{type:i.type}),{imageOrientation:"from-image"})}finally{r.fill(0)}try{if(t.throwIfAborted(),s.width*s.height>_t.pixels)throw new RangeError("image-budget");let i=Nd(s.width,s.height,e),a=Math.min(1,_t.side/Math.max(i.width,i.height),Math.sqrt(8e6/(i.width*i.height))),o=document.createElement("canvas");if(o.width=Math.floor(i.width*a),o.height=Math.floor(i.height*a),o.width<128||o.height<128)throw new RangeError("image-crop");try{let c=o.getContext("2d",{alpha:!1,colorSpace:"srgb"});if(!c)throw new RangeError("image-format");c.drawImage(s,i.x,i.y,i.width,i.height,0,0,o.width,o.height);let l=u=>new Promise((h,g)=>o.toBlob(f=>f?h(f):g(new RangeError("image-format")),u,.92)),d=await l("image/png");if(d.size>_t.bytes&&(d=await l("image/jpeg")),d.size>_t.bytes)throw new RangeError("image-budget");return t.throwIfAborted(),d}finally{o.width=1,o.height=1}}finally{s.close()}}var Dd={bandItems:"navigation.bandItems",cancel:"common.actions.cancel",clear:"common.actions.clear",close:"common.actions.close",empty:"common.states.empty",support:"navigation.support"};function Et(n,e){let t=n.data.identity;return{schema:"haneoka-team-inventory-v2",server:t.server,releaseId:t.releaseId,...t.sourceId?{}:{},members:[...e.members.values()].filter(r=>n.catalog.member(r.cardId)).map(r=>({instanceId:`m${r.cardId}`,cardId:r.cardId,level:r.level,training:r.awake,awakening:r.rank,liveSkillLevel:r.skill,gekisoSkillLevel:r.gekisoSkill,locked:r.lock,excluded:!r.use})),snapshots:[...e.snaps.values()].filter(r=>n.catalog.snap(r.cardId)).map(r=>({instanceId:`s${r.cardId}`,cardId:r.cardId,level:r.level,awakening:r.rank,locked:r.lock,excluded:!r.use})),bandItems:{...e.player.bandItems},characterRanks:{...e.player.characterRanks},bandRanks:{...e.bandRanks},playerModifiers:{characterTotalRank:e.player.characterTotalRank,vipRank:e.player.vipRank,musicMemoryPoints:{...e.player.musicMemory},characterMemoryPoints:{...e.player.characterMemory}}}}var Br=class{constructor(e){this.host=e}box=null;boxContext=null;boxBase=null;boxText=null;boxStore=null;boxOwner;boxOwnership="";loading;generation=0;sourceStatus="";parserController=null;deviceController=null;usb=null;expanded={};screenshot=null;session=null;screenshotLoadingCleanup=null;screenshotBase=null;screenshotStore=null;screenshotOwner;screenshotFrames=null;imageController=null;localImages=[];correcting=null;dispose(){this.closeBox(),this.closeScreenshots()}context(){let e=this.host.data;return e?.identity.sourceId?{ownerId:this.host.snapshot?.owner??"local",revision:0,server:e.identity.server,releaseId:e.identity.releaseId,sourceId:e.identity.sourceId}:null}commit(e,t,r=!1){let s=new Map(er(t).map(a=>[a.key,JSON.stringify(a.value)])),i=er(e).filter(a=>s.get(a.key)!==JSON.stringify(a.value));if(r){let a=new Set(er(e).filter(o=>o.key.endsWith(".own")).map(o=>o.key));for(let[o,c]of Object.entries(this.host.snapshot?.entries??{}))/^[ms]\.[1-9]\d*\.own$/u.test(o)&&c.v===!0&&!a.has(o)&&i.push({key:o,value:!1})}this.host.write(i,!0),this.host.notice=this.host.t("imported","Imported {count} changes",{count:i.length})}captureBase(){let e=this.context();return!e||!this.host.persistentView?!1:(this.boxContext=e,this.boxStore=this.host.store,this.boxOwner=this.host.snapshot?.owner,this.boxOwnership=JSON.stringify([...this.host.persistentView.members.keys(),...[...this.host.persistentView.snaps.keys()].map(t=>`s${t}`)]),this.boxBase=Et(this.host,this.host.persistentView),!0)}rebase(){let e=this.boxText;!this.box||e===null||!this.host.persistentView||this.host.store===this.boxStore&&this.host.snapshot?.owner===this.boxOwner&&JSON.stringify(Et(this.host,this.host.persistentView))===JSON.stringify(this.boxBase)||this.captureBase()&&this.parse({text:e})}openBox(){this.dispose(),this.boxText=null;let e=this.context();if(!e||!this.captureBase())return;this.box={phase:"select",ownedKeys:Object.entries(this.host.snapshot?.entries??{}).filter(([r,s])=>/^[ms]\.[1-9]\d*\.own$/u.test(r)&&s.v===!0).map(([r])=>r),candidates:[],selectedCandidateId:"",preview:null,confirmation:{cards:[],maps:[]},serverLabel:"",progress:null,error:null,canConfirm:!1},this.box.server=e.server,this.box.usbChannel=dt.find(r=>r.server===e.server)?.packageId;let t=this.generation;import("./webusb-XM5LZYND.js").then(r=>{this.usb=r,!(t!==this.generation||!this.box)&&(this.box={...this.box,usbReady:r.usbAvailable()},this.host.requestUpdate())}).catch(()=>{}),this.host.requestUpdate()}async android(){if(this.sourceStatus="",!this.box?.usbReady||!this.box.usbChannel||!this.usb)return;let e=this.deviceController=new AbortController,t=++this.generation,r=this.box.usbChannel;this.box={...this.box,phase:"parsing",error:null},this.host.requestUpdate();try{let s=await ai(this.usb.createUsbReader(),r,e.signal);if(t!==this.generation||!this.box)return;if(!s){this.box={...this.box,phase:"select"};return}await this.parse({files:s})}catch(s){t===this.generation&&this.box&&(this.box={...this.box,phase:"select",error:s instanceof P?s.code:"device_read_failed"})}finally{this.deviceController===e&&(this.deviceController=null),this.host.requestUpdate()}}closeBox(){++this.generation,this.parserController?.abort(),this.parserController=null,this.deviceController?.abort(),this.deviceController=null,this.loading?.cancel(),this.box=null,this.boxBase=null,this.boxStore=null,this.host.requestUpdate()}async parse(e){if("files"in e&&e.files.length===1&&/\.(zip|imazingapp)$/i.test(e.files[0].name))return this.importSource((s,i)=>Mr({archive:e.files[0]},"archive","",{signal:s,progress:i}),this.text("readingFolder","Reading local save files"));if(this.sourceStatus="",!this.box||!this.boxBase||!this.boxContext)return;this.boxText="text"in e?e.text:null;let t=++this.generation;this.parserController?.abort();let r=this.parserController=new AbortController;this.box={...this.box,phase:"parsing",candidates:[],preview:null,error:null,canConfirm:!1},this.loading=rt(this.text("parsing","Reading Box locally"),{signal:r.signal,scope:"owner"}),this.host.requestUpdate();try{if(Ll(e)){let i=await ql(e,this.boxBase,this.host.data,this.boxContext,this.host.filters.kind==="members"?"members":"snapshots",{signal:r.signal});if(t!==this.generation||!this.box)return;this.box={...this.box,phase:"review",selectedCandidateId:i.candidateId,preview:i,confirmation:{cards:i.cards.map(a=>({key:a.key,include:!0})),maps:[]}},this.reconfirm(this.box.confirmation);return}let s=await Rl(e,{signal:r.signal,progress:(i,a)=>{t!==this.generation||!this.box||(this.box={...this.box,progress:{completed:i,total:a}},this.loading?.update({processedTasks:i,totalTasks:a}),this.host.requestUpdate())}});if(t!==this.generation||!this.box)return;this.box={...this.box,phase:"choose",candidates:s.candidates,progress:null},s.candidates.length===1&&this.select(s.candidates[0].id)}catch(s){t===this.generation&&this.box&&(this.box={...this.box,phase:"select",error:s instanceof P?s.code:"box_worker_failed"})}finally{t===this.generation&&(this.loading?.finish(),this.loading=void 0,this.parserController=null),this.host.requestUpdate()}}async importSource(e,t){if(!this.box||!this.boxBase||!this.boxContext)return;let r=++this.generation;this.parserController?.abort();let s=new AbortController;this.parserController=s,this.sourceStatus=t,this.box={...this.box,phase:"parsing",candidates:[],preview:null,progress:null,error:null,canConfirm:!1};let i=rt(t,{signal:s.signal,scope:"owner"});this.host.requestUpdate();try{let a=await e(s.signal,(o,c)=>{r!==this.generation||!this.box||(this.box={...this.box,progress:{completed:o,total:c}},i.update({processedTasks:o,totalTasks:c}),this.host.requestUpdate())});if(r!==this.generation||!this.box)return;this.box={...this.box,phase:"choose",candidates:a.candidates,progress:null},a.candidates.length===1&&this.select(a.candidates[0].id)}catch(a){if(r!==this.generation||!this.box||s.signal.aborted)return;this.box={...this.box,phase:"select",progress:null,error:a instanceof P?a.code:"backup_invalid"}}finally{i.finish(),this.parserController===s&&(this.parserController=null),this.host.requestUpdate()}}folder(e,t,r){e.length&&this.importSource((s,i)=>Mr({files:e},t,r,{signal:s,progress:i}),this.text(t==="backup"?"readingBackup":"readingFolder","Reading local save files"))}async chooseFolder(e,t){let r=this.generation,s=e.currentTarget,i=s.closest(".tb-save-sources")?.querySelector("input[type=password]"),a=i?.value??"",o=window.showDirectoryPicker;if(!o){s.nextElementSibling.click();return}i&&(i.value="");try{let c=await o.call(window,{mode:"read"});if(r!==this.generation||!this.box)return;await this.importSource((l,d)=>Mr({directory:c},t,a,{signal:l,progress:d}),this.text(t==="backup"?"readingBackup":"readingFolder","Reading local save files"))}catch(c){if(c instanceof DOMException&&c.name==="AbortError")return;this.box&&(this.box={...this.box,error:"backup_folder_access"},this.host.requestUpdate())}}folderInput(e){return p`
      <input
        hidden
        type="file"
        webkitdirectory
        multiple
        @change=${t=>{let r=t.target,s=r.closest(".tb-save-sources")?.querySelector("input[type=password]"),i=s?.value??"";s&&(s.value=""),this.folder([...r.files??[]],e,i),r.value=""}}
      />
    `}renderBackup(){return p`
      <div class="import-source__extra tb-save-sources">
        <label class="tb-backup-password">
          <span>${this.text("backupPassword","Backup password (encrypted backups)")}</span>
          <input type="password" autocomplete="off" />
        </label>
        <button class="button button--tonal" type="button" @click=${e=>this.chooseFolder(e,"backup")}>
          ${O("folder_open",20)}${this.text("chooseBackup","Choose backup folder")}
        </button>
        ${this.folderInput("backup")}
      </div>
    `}select(e){let t=this.box,r=t?.candidates.find(s=>s.id===e);if(!(!t||!r||!this.boxBase||!this.boxContext)){try{let s=Al(r,this.boxBase,this.host.data,this.boxContext);this.box={...t,phase:"review",selectedCandidateId:e,preview:s,confirmation:{ownership:s.cards.length?t.confirmation.ownership??"replace":"merge",existingValues:t.confirmation.existingValues??"overwrite",cards:s.cards.map(i=>({key:i.key,include:!0})),maps:s.maps.map(i=>({key:i.key,include:!0})),scalars:s.scalars?.map(i=>({key:i.key,include:!0}))}},this.reconfirm(this.box.confirmation)}catch(s){this.box={...t,phase:"choose",error:s instanceof P?s.code:"box_review_context"}}this.host.requestUpdate()}}reconfirm(e){let t=this.box;if(!t?.preview||!this.boxBase||!this.boxContext)return;let r=!1,s=null;if(e.cards.some(i=>i.include)||e.maps.some(i=>i.include)||e.scalars?.some(i=>i.include))try{if(!mn(t.preview,e).canConfirm)throw new P("box_unresolved_values");oi(this.boxBase,t.preview,e,this.host.data,this.boxContext),r=!0}catch(i){s=i instanceof P?i.code:"box_invalid_confirmed_inventory"}this.box={...t,confirmation:e,canConfirm:r,error:s},this.host.requestUpdate()}confirmBox(){let e=this.box;if(!(!e?.canConfirm||!e.preview||!this.boxBase||!this.boxContext))try{let t=this.context();if(!t||!this.host.persistentView||this.host.store!==this.boxStore||this.host.snapshot?.owner!==this.boxOwner||e.confirmation.ownership==="replace"&&JSON.stringify([...this.host.persistentView.members.keys(),...[...this.host.persistentView.snaps.keys()].map(a=>`s${a}`)])!==this.boxOwnership)throw new P("box_review_changed");let r=Et(this.host,this.host.persistentView),s=oi(r,e.preview,e.confirmation,this.host.data,t);this.commit(s,this.boxBase,e.confirmation.ownership==="replace");let i=new URL(location.href);i.searchParams.has("saveImport")&&(sessionStorage.removeItem("haneoka:pending-save-box"),i.searchParams.delete("saveImport"),history.replaceState(history.state,"",i)),this.closeBox()}catch(t){this.box={...e,canConfirm:!1,error:t instanceof P?t.code:"box_invalid_confirmed_inventory"},this.host.requestUpdate()}}text(e,t,r){return e.startsWith("existing")?this.host.t(`importExisting.${e.slice(8).toLowerCase()}`,t,r):["close","cancel","clear"].includes(e)?G(this.host.locale,Dd[e]??e,t,r):["members","snapshots","unknown","notUnlocked"].includes(e)?this.host.t(e,t,r):this.host.t(`boxImport.${e}`,t,r)}boxError(e){let t={backup_invalid:"backupInvalid",backup_password:"backupWrongPassword",backup_password_required:"backupPasswordRequired",backup_select_root:"backupSelectRoot",backup_no_game:"backupNoGame",backup_budget:"sourceTooLarge",backup_timeout:"sourceTimeout",backup_folder_access:"folderAccess"};return t[e]?this.text(t[e],"Could not read this source. Check the selection and try again."):e==="device_unsupported"?this.text("deviceUnsupported","This browser cannot use USB devices."):e==="device_permission"||e==="device_auth_failed"?this.text("devicePermission","Allow USB debugging on the phone."):e==="device_busy"?this.text("deviceBusy","Another ADB program is using the phone."):["device_channel","device_path","device_empty"].includes(e)?this.text("deviceEmpty","No game data found on the phone."):e.startsWith("device_")?this.text("deviceFailed","Could not read the phone."):e==="box_review_changed"||e==="box_review_context"?this.text("changed","Your account, data or inventory changed. Open the import again."):e==="box_incompatible_server"?this.text("incompatibleServer","Card IDs from this server cannot be matched to the target server."):e==="box_no_player"?this.text("empty","No supported Box records found."):e==="box_linked_save_required"?this.text("linkedSave","This backup links to a separate game save. Import that save file."):e==="box_profile_requires_json"?this.text("originalJson","Import the original inventory JSON file."):e==="box_invalid_list"?this.text("invalidList","Choose one CSV or TSV file up to 1 MiB, or paste a card list with IDs, names and levels."):e.endsWith("_budget")?this.text("tooLarge","This file exceeds the supported size or record limit."):["box_conflict_required","box_unconfirmed_value","box_unresolved_values","box_invalid_confirmed_inventory"].includes(e)?this.text("reviewValues","Review the selected training values or exclude the affected entries."):e==="box_timeout"||e==="box_worker_failed"?this.text("failed","Local parsing failed. Check the file and try again."):this.text("invalidFormat","This file is not a supported Box export.")}openScreenshots(){let e=this.context(),t=this.host.persistentView;if(!e||!t||!this.host.data)return;this.dispose(),this.screenshotBase=Et(this.host,t),this.screenshotStore=this.host.store,this.screenshotOwner=this.host.snapshot?.owner;let r,s="",i=tc({inventory:this.screenshotBase,data:this.host.data,context:e,onState:a=>{if(this.session!==i)return;this.screenshot=a;let o=["uploading","queued","processing"].includes(a.phase);o&&s!==a.phase?(r?.finish(),r=rt(this.host.t(`screenshotImport.${a.phase}`,"Recognizing screenshots")),s=a.phase,this.screenshotFrames=(c,l)=>r?.update({processedTasks:c,totalTasks:l})):o||(r?.finish(),r=void 0,s=""),this.host.requestUpdate()},onUploadProgress:(a,o)=>{this.session===i&&r?.update({loadedBytes:a,totalBytes:o,byteBasis:"identity"})}});this.session=i,this.screenshotLoadingCleanup=()=>{r?.finish(),r=void 0},this.screenshot=i.state(),this.host.requestUpdate()}clearLocalImages(){this.localImages.forEach(e=>URL.revokeObjectURL(e.url)),this.localImages=[]}async stageVideo(e){let t=this.session;t&&(this.imageController?.abort(),this.clearLocalImages(),await t.video(e,(r,s)=>this.screenshotFrames?.(r,s)),this.host.requestUpdate())}async stageImages(e){let t=this.session;if(!t||!e.length)return;this.imageController?.abort();let r=this.imageController=new AbortController;this.clearLocalImages(),this.screenshot={...t.state(),phase:"preparing"},this.host.requestUpdate();try{if(e.length>8)throw new RangeError("image-budget");for(let s of e){let i=await gi(s,hi,r.signal);r.signal.throwIfAborted(),this.localImages.push({blob:i,url:URL.createObjectURL(i),crop:{...hi}})}if(this.session!==t)return;this.screenshot={...t.state(),phase:"preview",localImages:this.localImages.map(({url:s,crop:i})=>({url:s,crop:i}))}}catch(s){this.session===t&&!r.signal.aborted&&(this.clearLocalImages(),this.screenshot={...t.state(),phase:"failed",error:s instanceof RangeError?s.message:"image-format"})}finally{this.host.requestUpdate()}}async uploadImages(){let e=this.session;if(!e||this.screenshot?.phase!=="preview")return;let t=this.imageController=new AbortController;this.screenshot={...this.screenshot,phase:"preparing",error:null},this.host.requestUpdate();try{let r=[];for(let s of this.localImages)r.push(await gi(s.blob,s.crop,t.signal));if(t.signal.throwIfAborted(),this.session!==e)return;this.clearLocalImages(),await e.files(r)}catch(r){this.session===e&&!t.signal.aborted&&(this.screenshot={...this.screenshot,phase:"preview",error:r instanceof RangeError?r.message:"image-format"})}finally{this.host.requestUpdate()}}closeScreenshots(){this.screenshotLoadingCleanup?.(),this.screenshotLoadingCleanup=null,this.imageController?.abort(),this.imageController=null,this.clearLocalImages();let e=this.session;this.session=null,this.screenshot=null,this.correcting=null,this.screenshotStore=null,e&&e.close(),this.host.requestUpdate()}exportJson(){let e=this.host.persistentView;if(!e)return;let t=Et(this.host,e);xn(new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),`haneoka-team-box-${t.server}.json`)}async takePending(e){let t=Ot().searchParams.get("saveImport");if(t){this.openBox();try{let r=sessionStorage.getItem("haneoka:pending-save-box");if(!r)throw new P("box_no_player");let s=JSON.parse(r);if(s.id!==t||typeof s.text!="string")throw new P("box_no_player");if(s.server!==this.box?.server||s.accountId&&s.accountId!==this.host.gameAccount?.id)throw new P("box_incompatible_server");await this.parse({text:s.text})}catch(r){this.box&&(this.box={...this.box,error:r instanceof P?r.code:"box_invalid_json"}),this.host.requestUpdate()}return}if(e&&(this.openBox(),!!this.box)){if(e.server!==this.box.server){this.box={...this.box,error:"box_incompatible_server"},this.host.requestUpdate();return}await this.parse({text:e.text})}}render(){let e=this.host;if(this.box){let t=this.box,r=t.candidates.find(a=>a.id===t.selectedCandidateId)?.declaredIdentity?.server,s=a=>this.text(`servers.${a}`,a),i=this.host.gameAccount;return nc({...t,serverLabel:[s(t.server),i?.name||(i?.uid?`UID \u2026${i.uid.slice(-4)}`:"")].filter(Boolean).join(" / "),sourceServerLabel:r&&r!==t.server?s(r):void 0,error:t.error?this.boxError(t.error):null},{locale:e.locale,onOpenHistory:()=>{this.closeBox(),location.assign(`/${e.locale}/gacha-history/`)},appHref:Le()?void 0:`/${e.locale}/download/`,appAccount:Le()?()=>{this.closeBox(),location.assign(Yn(e.locale))}:void 0,folder:{open:a=>void this.chooseFolder(a,"folder"),input:this.folderInput("folder")},backup:this.renderBackup(),sourceStatus:this.sourceStatus,text:(a,o,c)=>this.text(a,o,c),card:(a,o)=>e.catalog.cardOptions(a==="members"?"members":"snaps",o),mapName:(a,o)=>e.catalog.text(a==="bandItems"?e.data.bandItems[String(o)]?.name:e.data.characters[String(o)]?.characterName)||e.t("unknown","Unknown or not entered"),fieldName:a=>{if(a==="characterTotalRank")return e.t("totalRank","Total character rank");let[o,c]=a.split(".");return o==="characterMemoryPoints"?`${e.t("importFlow.characterMemory","Character memory bonus")} / ${e.catalog.characterName(Number(c))}`:o==="musicMemoryPoints"?`${e.t("importFlow.musicMemory","Song memory bonus")} / ${e.catalog.songTitle(Number(c))}`:e.t(a==="liveSkillLevel"?"liveSkill":a==="gekisoSkillLevel"?"gekisoSkill":a,a)},noticeName:a=>{let o={awake:"training",rank:"awakening",skillLevel:"liveSkill",liveSkillLevel:"liveSkill",gekisouSkillLevel:"gekisoSkill"},c=a.split(".").at(-1),l=c==="identity"?this.text("cardIdentity","Card identity"):e.t(o[c]??c,c),d=/^inventory\.growth\.(member|support)-card-(\d+)\./u.exec(a);if(d){let g=d[1]==="member"?"members":"snaps";return`${e.catalog.cardOptions(g,Number(d[2]))?.label||`${this.text(g==="members"?"members":"snapshots","Card")} #${d[2]}`} / ${l}`}let u=/^cards\[(\d+)\]/u.exec(a);if(u)return`${this.text("listRow","Row {row}",{row:Number(u[1])+1})} / ${l}`;let h=/^player\.(characterRanks|bandItems|bandItemStates)\.(\d+)/u.exec(a);return h?e.catalog.text(h[1]==="characterRanks"?e.data.characters[h[2]]?.characterName:e.data.bandItems[h[2]]?.name)||e.t("unknown","Unknown"):a==="player.vipRank"||a==="account.tgwCardRank"?e.t("vipRank","TGW CARD level"):a==="player.characterTotalRank"?e.t("totalRank","Total character rank"):a==="player.memory"?this.text("memory","Memory"):a==="player.eventIds"?G(e.locale,"navigation.events"):a==="account.bandItemTotals"?this.text("itemTotals","Combined instrument bonuses"):this.text("accountGrowth","Account growth")},files:a=>{a.length&&this.parse({files:a})},screenshots:()=>this.openScreenshots(),android:Le()?void 0:()=>void this.android(),channel:a=>{this.box&&dt.some(o=>o.packageId===a&&o.server===this.box?.server)&&(this.box={...this.box,usbChannel:a},e.requestUpdate())},parseText:a=>void this.parse({text:a}),selectCandidate:a=>this.select(a),confirmation:a=>this.reconfirm(a),close:()=>this.closeBox(),cancel:()=>this.closeBox(),confirm:()=>this.confirmBox(),expanded:a=>this.expanded[a]??!1,expand:(a,o)=>{this.expanded={...this.expanded,[a]:o},e.requestUpdate()}})}if(this.screenshot&&this.session){let t=this.session;if(this.correcting){let r=this.correcting,s=r.kind==="members"?"members":"snaps",i=e.catalog,a=Object.keys(s==="members"?i.data.members:i.data.snapshots).map(Number).filter(o=>!r.query||i.cardName(s,o).toLocaleLowerCase(e.locale).includes(r.query.toLocaleLowerCase(e.locale)));return yt({id:"tb-screenshot-correct",title:e.t("correctCard","Choose the right card"),closeLabel:e.common("common.actions.close","Close"),close:()=>{this.correcting=null,e.requestUpdate()},searchLabel:e.common("common.actions.search","Search"),filterLabel:e.t("filters","Filters"),filtersOpen:!1,toggleFilters:()=>{},query:r.query,search:o=>{this.correcting={...r,query:o},e.requestUpdate()},filters:k,kind:s==="members"?"member":"support",items:a.map(o=>({...i.cardOptions(s,o),value:String(o)})),selected:"",select:o=>{t.correct(r.image,r.observation,Number(o)),this.correcting=null,e.requestUpdate()},countLabel:e.t("cardCount","{count} cards",{count:a.length}),emptyLabel:e.t("noMatches","No cards match"),preview:p``})}return rc(this.screenshot,{text:(r,s)=>r.startsWith("existing")||r==="close"||r==="cancel"?this.text(r,s):G(e.locale,`tools.teamBuilder.screenshotImport.${r}`,s),card:(r,s)=>e.catalog.cardOptions(r==="members"?"members":"snaps",s),levels:(r,s)=>ke(e.data,r,s).level??[],files:r=>void this.stageImages(r),video:r=>void this.stageVideo(r),upload:()=>void this.uploadImages(),crop:(r,s,i)=>{let a=this.localImages[r];!a||this.screenshot?.phase!=="preview"||(a.crop={...a.crop,[s]:i},this.screenshot={...this.screenshot,localImages:this.localImages.map(({url:o,crop:c})=>({url:o,crop:c}))},e.requestUpdate())},close:()=>this.closeScreenshots(),cancel:()=>{if(this.screenshot?.phase!=="preparing")return void t.cancel();this.imageController?.abort(),this.clearLocalImages(),this.screenshot=t.state(),e.requestUpdate()},correct:(r,s)=>{let i=this.screenshot?.results?.[r]?.observations[s];i&&(this.correcting={image:r,observation:s,kind:i.kind,query:""}),e.requestUpdate()},candidate:(r,s,i)=>t.correct(r,s,i),include:(r,s)=>t.include(r,s),level:(r,s,i)=>t.level(r,s,i),existingValues:r=>t.existingValues(r),expandedSource:r=>this.expanded[`s-${r}`]??!1,expandSource:(r,s)=>{this.expanded={...this.expanded,[`s-${r}`]:s},e.requestUpdate()},confirm:()=>{let r=this.context();if(!(!r||!this.screenshotBase))try{if(!e.view||e.store!==this.screenshotStore||e.snapshot?.owner!==this.screenshotOwner)throw new RangeError("screenshot-review-stale");let s=t.merge(Et(e,e.persistentView),e.data,r);this.commit(s,this.screenshotBase),this.closeScreenshots()}catch(s){this.closeScreenshots(),e.notice=s instanceof RangeError&&s.message==="screenshot-review-stale"?this.text("changed","Your account, data or inventory changed. Open the import again."):e.t("importFailed","The import could not be applied.")}}})}return k}};var Pr=class{db;open(){if(this.db)return this.db;let e=new Promise((t,r)=>{let s=indexedDB.open("haneoka-pt-trial",2),i=!1,a=o=>{i=!0,this.db===e&&(this.db=void 0),r(o)};s.onupgradeneeded=()=>{s.result.objectStoreNames.contains("jobs")||s.result.createObjectStore("jobs",{keyPath:"id"}).createIndex("by-owner-server",["owner","server"]),s.result.objectStoreNames.contains("results")||s.result.createObjectStore("results")},s.onsuccess=()=>{if(i){s.result.close();return}s.result.onversionchange=()=>{s.result.close(),this.db===e&&(this.db=void 0)},t(s.result)},s.onerror=()=>a(s.error),s.onblocked=()=>a(new Error("pt-storage-blocked"))});return this.db=e}async save(e){let t=structuredClone(e),r=await this.open();await new Promise((s,i)=>{let a=r.transaction("jobs","readwrite");a.objectStore("jobs").put(t),a.oncomplete=()=>s(),a.onerror=()=>i(a.error),a.onabort=()=>i(a.error??new Error("pt-storage-aborted"))})}async latest(e,t){let r=await this.open();return new Promise((s,i)=>{let o=r.transaction("jobs","readonly").objectStore("jobs").index("by-owner-server").getAll(IDBKeyRange.only([t,e]));o.onsuccess=()=>{let c=o.result.filter(l=>l.version===St);c.sort((l,d)=>d.updatedAt-l.updatedAt),s(c[0]??null)},o.onerror=()=>i(o.error)})}async saveResult(e){let t={...structuredClone(e),version:"reward-cycle-result-v1",modelVersion:St},r=await this.open();await new Promise((s,i)=>{let a=r.transaction("results","readwrite");a.objectStore("results").put(t,JSON.stringify([t.owner,t.server])),a.oncomplete=()=>s(),a.onerror=()=>i(a.error),a.onabort=()=>i(a.error??new Error("pt-storage-aborted"))})}async latestResult(e,t){let r=await this.open();return new Promise((s,i)=>{let o=r.transaction("results","readonly").objectStore("results").get(JSON.stringify([t,e]));o.onsuccess=()=>{let c=o.result;s(c?.version==="reward-cycle-result-v1"&&c.modelVersion===St?c:null)},o.onerror=()=>i(o.error)})}};var gn=class{constructor(e){this.host=e}parking=!1;task=null;job=null;running=!1;showAll=!1;get measure(){return vt(this.host.settings).measure==="items"?"items":"points"}set measure(e){this.host.updateFarming({measure:e})}storageError=!1;error="";dataFingerprint="";showIssues=!1;issues=[];correcting=!1;async focusIssue(e){let t=ls(e);if(!t)return;this.correcting=!0;let r=this.host,s=/^(m|s)(\d+)\./u.exec(t);s?(r.tab="pt",r.editing={kind:s[1]==="m"?"members":"snaps",cardId:Number(s[2])}):r.tab=/^(cr|bi|p)\./u.test(t)?"account":t==="inventory"?"box":"pt",(t==="constraints"||t==="minBonus")&&r.expanded.add("candidates"),t==="gekiso-input"&&r.expanded.add("farm-advanced"),r.requestUpdate(),await r.updateComplete,await r.ensureConditionsVisible();let i=r.querySelector(`[data-pt-field="${CSS.escape(t)}"]`);if(!i)return;let a=[];for(let c=i.parentElement;c&&c!==r;c=c.parentElement)c instanceof HTMLDetailsElement&&!c.open&&(c.open=!0,a.push(c));await new Promise(c=>requestAnimationFrame(()=>c())),i.getBoundingClientRect(),await Promise.allSettled(a.flatMap(c=>c.getAnimations({subtree:!0}).map(l=>l.finished))),i.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});let o=i.querySelector("#tb-luck-samples")??i.querySelector("input, md-outlined-text-field, md-outlined-select, md-slider, button:not([disabled]), md-checkbox");o&&"updateComplete"in o&&await o.updateComplete,(o??i).focus({preventScroll:!0})}markFields(){for(let e of this.host.querySelectorAll("[data-pt-field]")){let t=Hn(this.host,e.dataset.ptField);for(let r of e.querySelectorAll("input, md-outlined-text-field, md-outlined-select, md-checkbox")){let s=t||r.closest("[data-tb-field][data-invalid]")?"true":null;r.ariaInvalid!==s&&(r.ariaInvalid=s)}}}signature="";restoreKey="";generation=0;runner=null;store=new Pr;get owner(){return this.host.snapshot?.owner??"local"}request(){let{view:e}=this.host,t=this.host.effectiveSettings("recommendation");if(!e)return null;let r=this.host.request({kind:"event",ranking:"pt-only",measure:this.measure,route:"live",eventId:t.eventId??-1,songs:[...t.songs].sort((s,i)=>s.songId-i.songId||s.difficulty-i.difficulty),consumption:t.boosts,play:{great:0,good:0,bad:0,miss:0},...t.ptMode==="gekiso"?{gekiso:{just:t.ptJust/100,luckSamples:Je(t,"rewards"),rank:1,minComboBonus:t.minComboBonus,...bt(t)}}:{}});return r?{...r,snaps:t.noSnaps?[]:r.snaps,unknownPolicy:"min",player:{...structuredClone(r.player),characterMemory:Object.fromEntries([...this.host.master?.characters.keys()??[]].map(s=>[s,0])),musicMemory:Object.fromEntries([...this.host.master?.songs.keys()??[]].map(s=>[s,0]))},k:1,timeLimitMs:3e3}:null}cycle(){return this.host.effectiveSettings("recommendation").ptCycle?{songs:[...this.host.effectiveSettings("recommendation").planChallengeSongs].sort((e,t)=>e.songId-t.songId||e.difficulty-t.difficulty),consumption:this.host.settings.challengePoints}:null}inputSignature(){return Y([this.request(),this.cycle(),this.owner,this.host.data?.identity])}sync(){let e=this.host.settings.rewardMode==="event",t=e?this.host.request():this.request(),r=e?Y([t,this.host.settings.farming.requireGrowth,this.owner,this.host.data?.identity]):this.inputSignature();if(r!==this.signature){if(this.running&&this.stop(),this.signature=r,this.issues=[],e){if(t?.goal.kind==="event"&&this.host.master&&this.host.settings.farming.requireGrowth){let s={...t,k:1,player:{...t.player,characterMemory:Object.fromEntries([...this.host.master.characters.keys()].map(i=>[i,t.player.characterMemory[i]??0]))},goal:{...t.goal,ranking:"pt-only",route:"live",measure:"points",play:{great:0,good:0,bad:0,miss:0},songs:[]}};this.issues=os(this.host.master,s).filter(i=>["practice","player","inventory","constraint"].includes(i.code))}return}if(t?.goal.kind==="event"&&this.host.master){for(let s of this.cycle()?["live","challenge"]:["live"])for(let i of[this.measure]){let a={...t.goal,route:s,measure:i};s==="live"?a.cpExchange={numerator:0,denominator:1}:(a.songs=this.cycle().songs,a.consumption=this.cycle().consumption,delete a.gekiso),this.issues.push(...os(this.host.master,{...t,goal:a}).filter(o=>o.code!=="skill"))}this.cycle()&&!this.cycle().songs.length&&this.issues.push({code:"chart",target:"challenge-selection"}),this.issues=[...new Map(this.issues.map(s=>[`${s.code}:${s.target}`,s])).values()]}}}get noFeasibleTeams(){if(!this.job||this.stale)return!1;let e=this.job.tasks.filter(t=>t.route==="live");return e.length>0&&e.every(t=>t.status==="empty"&&t.result?.proven&&!t.result.hits.length)}get stale(){return!!this.job&&(this.host.settings.rewardMode!=="recommendation"||Y([this.job.request,this.job.cycle,this.job.owner,this.host.data?.identity])!==this.inputSignature()||this.job.owner!==this.owner||this.job.dataFingerprint!==this.dataFingerprint)}async restore(){let e=this.host.data;if(!e||this.host.snapshot?.owner===void 0)return;let t=`${e.identity.server}|${this.owner}|${e.identity.releaseId}`;if(t===this.restoreKey)return;this.restoreKey=t;let r=++this.generation,s=this.owner,i="";try{i=await As(e);let[a,o]=await Promise.all([this.store.latest(e.identity.server,s),this.store.latestResult(e.identity.server,s)]);if(r!==this.generation)return;for(let c of a?.tasks??[])c.status==="running"&&(c.status="queued");this.dataFingerprint=i,this.job=a?.dataFingerprint===i?a:null,this.host.farmResultMode||(o?.dataFingerprint===i&&o.owner===s&&o.updatedAt>=(this.job?.updatedAt??0)?(this.host.restoreFarmingResult(o.response,o.settings,o.request,o.contextKey,o.session),this.host.farmResultMode="event"):this.job&&(this.host.farmResultMode="recommendation")),this.storageError=!1}catch(a){if(console.warn("pt-checkpoint-restore",a),r!==this.generation)return;this.dataFingerprint=i,this.storageError=!0,i||(this.error="pt-data-fingerprint")}this.host.requestUpdate()}async rememberResult(){let e=this.host;if(!(!e.data||!e.results||!e.resultInputs||!e.resultSettings||!this.dataFingerprint||!ee(e.results)||e.results.stopReason!=="complete"))try{await this.store.saveResult({server:e.data.identity.server,owner:this.owner,dataFingerprint:this.dataFingerprint,contextKey:e.resultsFor,request:e.resultInputs,response:e.results,settings:e.resultSettings,session:e.resultSession,updatedAt:Date.now()})}catch{this.storageError=!0}}stop(){++this.generation,this.task&&this.host.ownsTask(this.task)&&this.runner?.stop(),this.host.requestUpdate()}dispose(){this.correcting=!1,++this.generation,this.stop(),this.task=null,this.running=!1,this.job=null,this.restoreKey="",this.dataFingerprint="",this.storageError=!1,this.error=""}async start(e,t){this.sync();let s=this.host;s.submitted=!0;let i=s.inputIssues(!0);if(i.length){s.requestUpdate(),await s.updateComplete,s.focusInput(i[0].field);return}if(this.issues.length){this.showIssues=!0,s.requestUpdate(),await s.updateComplete,await this.focusIssue(this.issues[0]);return}let a=this.request();if(!a||!s.engine||!s.data||s.running||s.manualBusy||this.issues.length||!this.dataFingerprint)return;let o=s.acquireTask("pt");if(!o)return;this.task=o;let c=this.generation,l=this.cycle(),d=this.inputSignature();this.running=s.running=!0,this.error="",s.requestUpdate();try{let u=this.job,h=await Ms(a,this.dataFingerprint,this.owner,l);if(!e||!u||u.fingerprint!==h){if(e)throw new Error("pt-input-changed");u=await Fo(a,{server:s.data.identity.server,releaseId:s.data.identity.releaseId,sourceId:s.data.identity.sourceId??"",owner:this.owner,dataFingerprint:this.dataFingerprint,assumptions:[]},l),u.presentation={scope:s.settings.scope,maxAccountBonuses:s.settings.maxAccountBonuses}}if(c!==this.generation||d!==this.inputSignature())return;this.job=u,s.calculationSubmitted(),s.farmResultMode="recommendation",this.runner=new mr(s.engine,this.store,g=>{c!==this.generation||d!==this.inputSignature()||(this.job=g,s.requestUpdate())},()=>{c===this.generation&&(this.storageError=!0,s.requestUpdate())}),await this.runner.run(u,t,1/0)}catch(u){c===this.generation&&(this.error=s.errorReason(u))}finally{this.task===o&&(this.running=!1,this.task=null),s.releaseTask(o),s.requestUpdate()}}};function zd(n,e){let[t="",r=""]=e.split("."),s=n.catalog,i={"p.vip":n.t("vipRank","T.G.W card rank"),"five-characters":n.t("pt.fiveCharacters","At least five different characters"),selection:n.t("chooseSongs","Choose songs"),"challenge-selection":n.t("pt.chooseChallenge","Challenge songs"),tables:n.t("pt.eventTables","Event consumption tables"),consumption:n.t("boosts","Boosts per live"),"challenge-consumption":n.t("pt.challengeCost","CP per challenge"),"gekiso-input":n.t("pt.gekiso","GEKISO"),minBonus:n.t("minBonus","Minimum event bonus (%)"),member:n.t("members","Members"),snap:n.t("snapshots","Snapshots"),"required-member-count":n.t("pt.requiredMemberCount","More than five required members"),"photo-bindings":n.t("pt.photoBindings","A snapshot is bound twice")};if(i[e])return i[e];if(t==="required-members"&&r){let l=Number(r);return n.t("pt.requiredMembers","Two required cards share {character}",{character:s.characterName(l)||`#${l}`})}let a={level:n.t("level","Level"),awake:n.t("training","Training"),rank:n.t("awakening","Awakening"),liveSkillLevel:n.t("liveSkill","Live skill"),gekisoSkillLevel:n.t("gekisoSkill","GEKISO skill"),cr:n.t("characterRanks","Character ranks"),bi:n.t("bandItems","Band items")},o=/^([ms])(\d+)(?:[.:/]|$)/u.exec(e);if(o)return`${s.cardName(o[1]==="m"?"members":"snaps",Number(o[2]))}${a[r]?` / ${a[r]}`:""}`;let c=/^(?:challenge:|gekiso:)?(\d+):(\d+)$/u.exec(e);return c?`${s.songTitle(Number(c[1]))} / ${s.difficultyLabel(Number(c[1]),Number(c[2]))}`:t==="cr"?`${s.characterName(Number(r))} / ${a[t]}`:t==="bi"?`${s.text(n.data.bandItems[r]?.name)||`#${r}`} / ${a[t]}`:e}function Fd(n){let e=n.searchSettings,t=Ln(e.farming),r=n.catalog,s=g=>n.updateFarming(g),i=e.eventId===null?void 0:n.master.events.get(e.eventId),a=r.challengeSongs(e.eventId).map(g=>g.liveMusicId),o=!i||!!i.livePoints.size||!!i.liveRewards.length,c=!e.manualEventEnabled&&(!i||(!!i.challengePoints.size||!!i.challengeRewards.length)&&a.length>0),l=[{value:"solo",label:n.t("routeLive","Normal live"),icon:O("play_arrow",20),available:o},{value:"gekiso",label:n.t("pt.gekiso","GEKISO"),icon:O("local_fire_department",20),available:o},{value:"challenge",label:n.t("routeChallenge","Challenge live"),icon:O("swords",20),available:c},{value:"skip",label:n.t("routeSkip","Skip"),icon:O("fast_forward",20),available:o}],d=l.filter(g=>g.available).map(g=>g.value),u=ba(n),h=!u.bonus&&u.options["challenge-points"].mode==="convert"&&u.options["challenge-points"].auto;return p`
    <section class="surface stack">
      ${Za(n,{icon:"emoji_events",label:n.t("eventSetup","Event")})}
      ${ce(n,"event",Ya(n,e,{manageInHeading:!0}))}
      <div
        class="cluster tb-goals"
        role="radiogroup"
        aria-label=${n.t("pt.mode","Play mode")}
        @keydown=${mt(d,t.play,g=>s({play:g}))}
      >
        ${l.filter(g=>g.available||g.value===t.play).map(g=>p`
              <button
                class="chip"
                type="button"
                role="radio"
                aria-checked=${t.play===g.value}
                tabindex=${t.play===g.value?"0":"-1"}
                ?disabled=${!g.available}
                @click=${()=>s({play:g.value})}
              >
                ${t.play===g.value?O("check",18):g.icon}<span class="chip__label">${g.label}</span>
              </button>
            `)}
      </div>
      ${e.route==="challenge"?ss(n,e.challengePoints,g=>n.updateSettings({challengePoints:g})):ce(n,"consumption",Da(n,e.boosts,g=>n.updateSettings({boosts:g})))}
      ${e.route==="live"&&c&&!u.bonus&&u.primary!=="challenge-points"?p`
        <label class="tb-check" id="tb-reward-scope">
          <md-checkbox touch-target="wrapper" .checked=${h}
            @change=${g=>{let f=g.target.checked,m=ha(u,"challenge-points",f?"convert":"ignore");m.options["challenge-points"].auto=f,s({rewardPlan:m,ptCycle:!1,weighted:!1,measure:m.primary})}}></md-checkbox>
          <span>${n.t("farm.cpConversion","Include challenge rewards from earned CP")}</span>
        </label>`:k}
    </section>
    ${e.ptMode==="gekiso"&&e.route==="live"?p`
      <section class="surface stack" id="tb-reward-room" data-tb-field tabindex="-1">
        ${V({icon:"groups",label:n.t("rewardPlan.room","Score grading")})}
        ${F({label:n.t("rewardPlan.room","Score grading"),value:e.rewardRoomMode,options:[{value:"battle",label:n.t("rewardPlan.battle","Multiplayer")},{value:"solo",label:n.t("rewardPlan.solo","Solo Mission")}],onSelect:g=>s({rewardRoomMode:g})})}
        ${e.rewardRoomMode==="battle"?p`
          ${F({label:n.t("rewardPlan.players","Players"),value:String(e.rewardPlayers),options:[1,2,3,4,5].map(g=>({value:String(g),label:String(g)})),onSelect:g=>s({rewardPlayers:Number(g)})})}
          ${e.rewardPlayers>1?p`<md-outlined-text-field type="number" min="0" max="2147483647" step="1"
            label=${n.t("rewardPlan.otherScore","Other players\u2019 average score")}
            .value=${e.rewardOtherScore===null?"":String(e.rewardOtherScore)}
            placeholder=${n.t("rewardPlan.equalScore","Same score as you")}
            @change=${g=>{let f=g.target.value.trim();s({rewardOtherScore:f?Number(f):null})}}
          ></md-outlined-text-field>`:k}
        `:k}
      </section>`:k}
    ${fa(n,u)}
    ${e.route!=="skip"?p`
            <section class="surface stack">
              ${V({icon:"library_music",label:n.t("songs","Songs"),count:e.songs.length})}
              ${ce(n,"selection",Qt(n,n.settings.songs,g=>n.updateSettings({songs:g}),!1,e.route==="challenge"?a:r.normalEventSongIds(e.manualEventEnabled?null:e.eventId),"tb-songs",void 0,{poolAction:e.route==="challenge"&&!e.manualEventEnabled?cs(n,a,g=>n.updateSettings({songs:g})):k}))}
              ${Na(n)}
              ${qa(n)}
              ${h?p`
                      <span class="tb-field__label">${n.t("planChallengeSongs","Challenge songs")}</span>
                      ${ce(n,"challenge-selection",Qt(n,n.settings.planChallengeSongs,g=>n.updateSettings({planChallengeSongs:g}),!1,a,"tb-challenge-songs",void 0,{poolAction:cs(n,a,g=>n.updateSettings({planChallengeSongs:g}))}))}
                      ${ce(n,"challenge-consumption",ss(n,e.challengePoints,g=>n.updateSettings({challengePoints:g})))}
                    `:k}
            </section>
          `:k}
    ${Jn(n)}
      ${n.searchSettings.ptMode==="gekiso"?qn(n):k}
    <section class="surface stack">
      ${V({icon:"piano",label:n.t("farm.conditions","Play and account conditions")})}
      ${t.play==="gekiso"?p`
              <span class="tb-results__meta">
                ${n.t("playAp","All Perfect")} / ${n.t("gekisoPlacements","Scoring placements")}: 1
              </span>
              ${Gn(n)}
              ${Vn(n)}
              ${n.hasMission("JustCount")?ce(n,"gekiso-input",p`
                        <md-outlined-text-field
                          type="number"
                          min="0"
                          max="100"
                          step="1"
                          label=${n.t("pt.baselineJust","Baseline JUST (%)")}
                          .value=${ve(String(e.ptJust))}
                          @change=${g=>n.updateSettings({ptJust:Number(g.target.value)})}
                        ></md-outlined-text-field>
                      `):k}
            `:t.play!=="skip"?to(n,e,g=>s(g)):k}
      ${W({id:"tb-farm-advanced",label:n.t("farm.advanced","Advanced conditions"),expanded:n.expanded.has("farm-advanced"),onExpandedChange:g=>{g?n.expanded.add("farm-advanced"):n.expanded.delete("farm-advanced"),n.requestUpdate()},content:p`
          <div class="stack">
            ${t.play==="gekiso"?ce(n,"gekiso-input",Ka(n,"rewards")):p`
                    <label class="tb-check">
                      <md-checkbox
                        touch-target="wrapper"
                        .checked=${t.includeMemory}
                        @change=${g=>s({includeMemory:g.target.checked})}
                      ></md-checkbox>
                      <span>${n.t("farm.memory","Character and song memory bonuses")}</span>
                    </label>
                    ${e.rewardPlan?k:p`
                    <label class="tb-check">
                      <md-checkbox
                        touch-target="wrapper"
                        .checked=${t.fullRanking}
                        @change=${g=>s({fullRanking:g.target.checked})}
                      ></md-checkbox>
                      <span>${n.t("fullRanking","Full reward ranking")}</span>
                    </label>
                    `}
                    ${Te({type:"select",label:n.t("resultCount","Results"),value:String(t.k),options:[1,3,5,10,15,20].map(g=>({value:String(g),label:String(g)})),onSelect:g=>s({k:Number(g)})})}
                    ${Te({type:"select",label:n.t("timeLimit","Time limit"),value:String(t.timeLimit??0),options:[0,3,5,15,60].map(g=>({value:String(g),label:g?n.t("secondsShort","{count} s",{count:g}):n.t("noLimit","Until proven")})),onSelect:g=>s({timeLimit:Number(g)||null})})}
                  `}
          </div>
        `})}
      <span class="tb-results__meta">
        ${n.t("farm.memory","Character and song memory bonuses")}:
        ${t.includeMemory?n.t("farm.included","Included"):n.t("farm.excluded","Excluded")}
      </span>
    </section>
  `}function Ud(n){let e=n.pt,t=(r,s,i)=>n.t(`pt.${r}`,s,i);return p`
    <section class="surface stack pt-issues" id="pt-issues" tabindex="-1">
      ${V({icon:"error",label:t("needsInput","Inputs to complete"),count:e.issues.length})}
      <ul class="pt-issue-list" role="list">
        ${e.issues.map(r=>{let s=zd(n,r.target);return p`
            <li>
              <span>${s}</span>
              ${ls(r)?p`
                      <button
                        class="button button--text"
                        type="button"
                        aria-label=${t("locateInput","Edit {input}",{input:s})}
                        @click=${()=>void e.focusIssue(r)}
                      >
                        ${t("fixInput","Edit")}${O("arrow_forward",18)}
                      </button>
                    `:k}
            </li>
          `})}
      </ul>
    </section>
  `}function jd(n){let e=n.pt,t=(a,o)=>n.t(`pt.${a}`,o),r=e.job,s=n.running||n.manualBusy||!e.dataFingerprint,i=!!r&&!gr(r)&&!e.stale;return p`
    <div class="tb-run">
      ${e.running?p`
              <span role="status">${n.computationStatus()}</span>
            `:k}
      ${n.hasTaskResults?p`
              <button
                class="button button--text tb-run__results"
                @click=${()=>n.querySelector(".tb-results-column")?.scrollIntoView({block:"start"})}
              >
                ${n.t("viewResults","View results")}
              </button>
            `:k}
      ${e.running?p`
              <button class="button button--tonal button--full tb-run__button" type="button" @click=${()=>e.stop()}>
                ${O("stop",18)}${t("stop","Stop")}
              </button>
            `:p`
              <button
                class="button button--full tb-run__button"
                type="button"
                ?disabled=${s}
                @click=${()=>void e.start(i)}
              >
                ${O("search",20)}${n.submitted&&n.inputIssues(!0).length?n.t("fixConditions","Adjust {count} conditions",{count:n.inputIssues(!0).length}):i?n.t("continueOptimal","Continue verifying optimality"):e.stale?n.t("rerun","Search again"):n.t("farm.run","Recommend songs and teams")}
              </button>
            `}
      ${e.storageError?p`
              <p class="field-note">${t("storageError","Progress can't be saved on this device.")}</p>
            `:k}
      ${e.error?p`
              <p class="field-note" role="alert">${t("runError","Calculation failed.")}</p>
            `:k}
    </div>
  `}function Hd(n){let e=n.pt,t=(h,g,f)=>n.t(`pt.${h}`,g,f),r=e.job;if(!r)return _a(n,n.inputIssues(!0));let s=r.request.goal.kind==="event"&&r.request.goal.measure==="items"?"items":"points",i=hr(r,s),a=an(r,s),o=gr(r)?null:Ei(r.tasks.filter(h=>h.measure===s&&h.route==="live").map(h=>h.result??_i(h.song))),c=n.analysis.filter(i),l=e.showAll?c:c.slice(0,r.scope==="top-one"?1:5),d=h=>new Intl.NumberFormat(n.locale,{maximumFractionDigits:1}).format(h),u=r.tasks.filter(h=>h.status==="complete"||h.status==="empty"||h.status==="pruned").length;return p`
    <section id="pt-results" class="stack">
      <div class="pt-results-bar">
        ${n.analysis.filters()}
        <span class="tb-proof">
          ${gr(r)?i.some(h=>h.gekiso?.sampled)?n.t("sampledProven","Optimal within samples"):n.t("proven","Proven optimal"):n.t("recommendation","Recommendation")}${o===null?k:p`
                  / ${n.t("improvementBound","Up to {percent}% improvement",{percent:d(o)})}
                `}
        </span>
        <span class="pt-progress tabular">${u}/${r.tasks.length}</span>
        ${e.stale?p`
                <span class="chip chip--static"><span class="chip__label">${t("stale","Inputs changed")}</span></span>
              `:k}
      </div>
      <md-linear-progress
        style=${e.running?"":"visibility: hidden"}
        .value=${r.tasks.length?u/r.tasks.length:0}
        aria-label=${t("start","Calculate")}
      ></md-linear-progress>
      ${a?p`
              ${ps(n,a,-1,{rank:O("swords",18),subtitle:t("challengeBest","Challenge team"),stale:e.stale})}
            `:k}
      ${!i.length&&!e.running?p`
              <div class="state"><p class="state__title">${n.t("noCandidate","No recommendation yet")}</p></div>
            `:k}
      ${l.map((h,g)=>ps(n,h,i.indexOf(h)<0?g:i.indexOf(h),{stale:e.stale,content:r.cycle?p`
                <p class="pt-breakdown tabular">
                  ${t("breakdown","Live {direct} + CP {converted}",{direct:d(h.event.directMean??h.event.mean),converted:d(h.event.convertedMean??0)})}
                </p>
              `:void 0}))}
      <button
        class="button button--tonal"
        type="button"
        ?disabled=${n.running||e.stale}
        @click=${()=>void e.start(!0,"top-five")}
      >
        ${t("topFive","Top five")}
      </button>
      ${i.length>5?p`
              <button
                class="button button--text"
                type="button"
                @click=${()=>{e.showAll=!e.showAll,n.requestUpdate()}}
              >
                ${e.showAll?t("topFive","Top five"):t("showAll","All {count} songs",{count:i.length})}
              </button>
            `:k}
      ${!jo(r)&&!e.running?p`
              <button
                class="button button--tonal"
                type="button"
                ?disabled=${n.running||e.stale||!!e.issues.length}
                @click=${()=>void e.start(!0,"all")}
              >
                ${t("calculateAll","Calculate every song")}
              </button>
            `:k}
    </section>
  `}function sc(n){let e=n.settings.rewardMode;e!=="plan"&&!n.pt.parking&&n.pt.sync();let t=p`
    <section class="surface stack">
      ${F({label:n.t("farm.task","Event task"),value:n.pt.parking?"parking":e==="plan"?"plan":"farm",options:[{value:"farm",label:n.t("farm.title","Farming recommendations")},{value:"plan",label:n.t("farm.plan","Resource planning")},{value:"parking",label:n.t("parking.title","Parking calculator")}],onSelect:r=>{if(n.cancel(),n.pt.showIssues=!1,n.pt.parking=r==="parking",n.submitted=!1,r==="parking"){n.requestUpdate();return}n.updateSettings({rewardMode:r==="plan"?"plan":Ta(n.settings.farming)})}})}
    </section>
  `;return n.pt.parking?bo(n,t):e==="plan"?Kn(n,t):Pn(n,p`
      ${t}${Fd(n)} ${n.pt.showIssues&&n.pt.issues.length?Ud(n):k}
    `,e==="recommendation"?jd(n):Wn(n,!1),he(n)?Hd(n):Xn(n))}var ic="song-comparison",Or=class{constructor(e){this.host=e}settings=so();rows=[];previous=null;evaluatedSettings=null;get stale(){return this.previous!==null}get resultRows(){return this.previous?.rows??this.rows}get resultSettings(){return{...this.previous?.settings??this.evaluatedSettings??this.settings,sort:this.settings.sort}}expanded=new Set;issues=[];submitted=!1;running=!1;generation=0;signature="";selection="";owner="";engine=null;token=null;cache=new Map;order=[];team(){return ao(this.host.master,this.host.view,this.host.manual)}restore(){this.settings=io(this.host.view?.prefs[ic]),!Yi&&this.settings.mode==="custom"&&(this.settings.mode="ap"),this.sync()}get effectiveSettings(){let e=this.settings.songs.filter(t=>Se(this.host.data,"songs",t.songId)&&this.host.catalog.difficultyRows(t.songId).some(r=>Number(r.difficulty)===t.difficulty));return{...this.settings,songs:e,just:this.host.hasMission("JustCount",e)?this.settings.just:100}}context(){let e=this.host,t=this.effectiveSettings,r=this.team();return Y([e.snapshot?.owner,e.server,e.data?.identity,e.data?.crossServer,r.members,r.snaps,r.bindings,r.leader,r.player,"min",t.mode,t.mode==="ap"?0:t.great,t.just,t.mode==="ap"?0:t.missEvery,t.ranks,t.songRules,0])}sync(){if(!this.host.master||!this.host.view)return;let e=this.context(),t=Y(this.settings.songs),r=Y([this.host.snapshot?.owner,this.host.server,this.host.data?.identity,this.host.data?.crossServer]);(this.owner!==r||this.engine!==this.host.engine)&&(this.stop(),this.cache.clear(),this.previous=null,this.evaluatedSettings=null,this.rows=[],this.signature="",this.owner=r,this.engine=this.host.engine),!(e===this.signature&&t===this.selection)&&(this.stop(),!this.previous&&this.rows.some(s=>s.hit)&&this.evaluatedSettings&&(this.previous={rows:structuredClone(this.rows),settings:structuredClone(this.evaluatedSettings)}),e!==this.signature&&this.cache.clear(),this.signature=e,this.selection=t,this.rows=this.settings.songs.filter(s=>Se(this.host.data,"songs",s.songId)&&this.host.catalog.difficultyRows(s.songId).some(i=>Number(i.difficulty)===s.difficulty)).map(s=>{let i=this.cache.get(Zt(s));return{song:s,status:i?"complete":"pending",hit:i}}),this.order=[...new Set(this.rows.map(s=>s.song.songId))],this.validate())}update(e){this.settings={...this.settings,...e},this.settings.ranks=this.settings.ranks.map(t=>t!==null&&t>this.settings.players?null:t),this.host.write([{key:`pref.${ic}`,value:this.settings}]),this.sync(),!this.stale&&this.evaluatedSettings&&(this.evaluatedSettings={...this.evaluatedSettings,target:this.settings.target,players:this.settings.players}),(e.sort||e.target||e.players)&&this.reorder(),this.host.requestUpdate()}validate(){let e=this.team();this.issues=[...e.issues,...oo({...this.effectiveSettings,songs:this.rows.map(t=>t.song)})];for(let[t,r]of this.host.manual.members.entries())r!==null&&!Se(this.host.data,"members",r)&&this.issues.push({field:`sc-slot-${t}`,reason:"source",slot:t});for(let[t,r]of this.host.manual.snaps.entries())r!==null&&!Se(this.host.data,"snapshots",r)&&this.issues.push({field:`sc-slot-${t}`,reason:"source",slot:t})}markFields(){for(let e of this.host.querySelectorAll("[data-sc-field]"))e.toggleAttribute("data-invalid",this.host.tab==="song-comparison"&&this.submitted&&this.issues.some(t=>t.field===e.id))}choose(){this.host.songPicker={songs:this.settings.songs.map(e=>({...e})),single:!1,query:"",filtersOpen:!1,bands:[],attributes:[],gekisouTypes:[],difficulty:2,allowedSongIds:[...this.host.master.songs.keys()].filter(e=>Se(this.host.data,"songs",e)),songRules:this.effectiveSettings.songRules,context:"comparison",title:this.host.t("sc.choose","Playable charts"),change:e=>this.update({songs:e})},this.host.requestUpdate()}groups(){return us(this.resultRows,this.host.master,this.resultSettings).sort((t,r)=>this.order.indexOf(t.id)-this.order.indexOf(r.id))}reorder(){let e=[...this.host.querySelectorAll("[data-sc-song]")].find(s=>{let i=s.getBoundingClientRect(),a=s.closest(".table-scroll").getBoundingClientRect();return i.bottom>Math.max(0,a.top)&&i.top<Math.min(window.innerHeight,a.bottom)}),t=e?.dataset.scSong,r=e?.getBoundingClientRect().top;this.order=us(this.resultRows,this.host.master,this.resultSettings).map(s=>s.id),this.host.requestUpdate(),t&&r!==void 0&&this.host.updateComplete.then(()=>{let s=this.host.querySelector(`[data-sc-song="${t}"]`);s&&(s.closest(".table-scroll").scrollTop+=s.getBoundingClientRect().top-r)})}stop(){++this.generation,this.token&&this.host.ownsTask(this.token)&&(this.engine?.cancel(),this.host.releaseTask(this.token)),this.token=null,this.running=!1;for(let e of this.rows)(e.status==="running"||e.status==="pending")&&(e.status="cancelled");this.host.requestUpdate()}dispose(){this.stop(),this.cache.clear(),this.rows=[],this.previous=null,this.evaluatedSettings=null,this.signature="",this.selection=""}async start(e){this.sync(),this.submitted=!0,this.validate();let t=this.host;if(this.issues.length||!t.engine){t.requestUpdate(),await t.updateComplete,this.issues[0]&&await t.focusInput(this.issues[0].field);return}let r=t.acquireTask("comparison");if(!r)return;this.previous=null,this.evaluatedSettings=structuredClone(this.effectiveSettings),this.token=r,this.engine=t.engine;let s=t.engine,i=++this.generation,a=this.signature,o=structuredClone(this.team()),c=structuredClone(this.effectiveSettings),l=()=>i===this.generation&&t.ownsTask(r)&&this.context()===a,d=this.rows.filter(u=>u.status!=="complete"&&(!e||Zt(u.song)===Zt(e)));this.running=!0,t.calculationSubmitted(),t.requestUpdate();try{for(let u of d){if(!l())break;u.status="running",delete u.reason,t.requestUpdate();let h=co(t.master,t.data,u.song,c.ranks,c.songRules);if(h){u.status="failed",u.reason=h;continue}let g=lo(o,c,u.song,a),f=performance.now(),m=!1;try{if(await s.run(g,void 0,void 0,y=>{if(!l()||y.requestId!==g.requestId||y.contextKey!==a)return;let w=uo(g,y.response);m=!0,u.hit=w,u.status="complete",u.elapsedMs=performance.now()-f,this.cache.set(Zt(u.song),w),t.requestUpdate()}),l()&&!m)throw new Error("final-score-missing")}catch(y){if(!l())break;console.error("song-comparison",u.song,y),u.status="failed",u.reason="scoreFailed"}l()&&t.requestUpdate()}}finally{if(i===this.generation){for(let u of this.rows)u.status==="running"&&(u.status="cancelled");this.running=!1,this.token=null,t.releaseTask(r),this.reorder()}}}};var ac=()=>({objective:"score",maxBaseLossPercent:3,leagueId:1,automatic:!0,customized:!1,mode:"shared",rule:{musicType:99,missions:[1,1,1]},build:{...structuredClone(Rn),goal:"gekiso"}}),Lr=class{constructor(e){this.host=e}draft=ac();opponents=[];timer;scheduleKey="";scheduleData=null;scheduleInput="";physicsKey="";restore(e={members:[],snaps:[]}){let t=pe(this.host.view?.prefs.arena),r=ac();this.draft={...r,...t,customized:t.customized===!0||t.automatic===!1,build:{...On({...pe(t.build),goal:"gekiso"}),required:e},rule:{...r.rule,...pe(t.rule)}},this.draft.objective=t.objective==="sections"?"sections":"score",this.draft.maxBaseLossPercent=typeof t.maxBaseLossPercent=="number"?t.maxBaseLossPercent:3;let s=this.host.requestedArenaLeague;s&&s!==this.draft.leagueId&&(this.draft={...this.draft,leagueId:s,build:{...this.draft.build,songs:[],leader:null,bindings:[]}}),this.sync()}get catalog(){return this.host.data?.arena?.[this.host.server]}get period(){return ki(this.catalog,this.draft.leagueId,Date.now())}get bandId(){return this.catalog?.leagues.find(e=>e.id===this.draft.leagueId)?.bandId??this.draft.leagueId}get rule(){let e=this.draft.automatic?this.period.regulation:null;return e?{musicType:e.musicType,missions:[...e.missions]}:this.draft.rule}get goal(){return{...this.rule,bandId:this.bandId,mode:this.draft.mode,server:this.host.server,regulationId:this.draft.automatic?this.period.regulation?.id??null:null,...this.draft.objective==="sections"?{objective:"sections",maxBaseLoss:this.draft.maxBaseLossPercent/100,opponents:this.opponents.map(e=>e.input)}:{}}}get allowedSongIds(){return this.host.data?Object.entries(this.host.data.songs).filter(([e,t])=>{let r=t.bandIds??t.bandIDs??[t.bandId];return Array.isArray(r)&&r.map(Number).includes(this.bandId)&&et(t)&&Se(this.host.data,"songs",Number(e))}).map(([e])=>Number(e)):[]}get allowedCharts(){return this.allowedSongIds.flatMap(e=>this.host.catalog.difficultyRows(e).filter(t=>et(t)).map(t=>({songId:e,difficulty:Number(t.difficulty)})))}get settings(){let e=new Set(this.allowedCharts.map(t=>`${t.songId}:${t.difficulty}`));return{...this.draft.build,goal:"gekiso",bands:[this.bandId],criterion:this.draft.mode==="shared"||this.draft.objective==="sections"?"mean":this.draft.build.criterion,gekisoPlacementMode:this.draft.mode==="shared"||this.draft.objective==="sections"?"rank":this.draft.build.gekisoPlacementMode,arena:this.goal,songs:this.draft.build.songs.filter(t=>e.has(`${t.songId}:${t.difficulty}`))}}update(e){this.host.running&&this.host.tab==="arena"&&this.host.cancel(),e.automatic===!1&&this.draft.automatic&&!this.draft.customized&&!e.rule&&(e.rule=structuredClone(this.rule)),this.draft={...this.draft,...e};let{required:t,...r}=this.draft.build;this.host.write([{key:"pref.arena",value:{...this.draft,build:r}}]),this.sync(),this.host.requestUpdate()}updateBuild(e){this.update({build:{...this.draft.build,...e}})}updateRule(e){this.update({automatic:!1,customized:!0,rule:{...this.rule,...e}})}league(e){this.host.requestedArenaLeague=0,this.opponents=[],this.update({leagueId:e,build:{...this.draft.build,songs:[],leader:null,bindings:[]}})}selectPool(){let e=this.host.songPoolDifficulties;this.updateBuild({songs:this.allowedSongIds.flatMap(t=>this.host.catalog.difficultyRows(t).filter(s=>et(s)).filter(s=>e.includes(Number(s.difficulty))).map(s=>({songId:t,difficulty:Number(s.difficulty)})))})}sync(){if(!this.host.isConnected)return;let e=this.host.tab==="arena"&&this.host.view?this.host.calculationContext():"";e&&(this.physicsKey&&e!==this.physicsKey&&this.host.running&&this.host.cancel(),this.physicsKey=e);let t=this.period,r=this.host.data,s=JSON.stringify([this.host.server,this.catalog?.identity,this.draft.leagueId,t.regulation?.id,t.nextAt]);if(this.scheduleKey&&this.scheduleData===r&&this.scheduleInput===s)return;this.scheduleData=r,this.scheduleInput=s;let a=[...r?[...Object.values(r.members).filter(l=>l.bandId===this.bandId).map(l=>l.catalogMetadata??{}),...Object.values(r.snapshots).map(l=>l.catalogMetadata??{}),...Object.values(r.songs)].flatMap(l=>[zr(l),...Array.isArray(l.difficulty)?l.difficulty.map(d=>zr(pe(d))):[]]).filter(l=>l!==null&&l>Date.now()):[],...t.nextAt===null?[]:[t.nextAt]],o=a.length?Math.min(...a):null,c=JSON.stringify([this.host.server,this.catalog?.identity,this.draft.leagueId,t.regulation?.id,o]);c!==this.scheduleKey&&(this.scheduleKey=c,clearTimeout(this.timer),o!==null&&(this.timer=setTimeout(()=>{this.scheduleKey="",this.sync(),this.host.requestUpdate()},Math.min(2147483647,Math.max(1,o-Date.now()+50)))))}dispose(){this.opponents=[],clearTimeout(this.timer),this.scheduleKey="",this.physicsKey=""}issues(){let e=this.draft.automatic&&!this.period.regulation?[{field:"tb-arena-rules",message:this.host.t("arena.needRules","Choose custom rules or an active league")}]:[];return this.draft.objective==="sections"&&(!Number.isFinite(this.draft.maxBaseLossPercent)||this.draft.maxBaseLossPercent<0||this.draft.maxBaseLossPercent>100)&&e.push({field:"tb-section-loss",message:this.host.t("arena.sections.lossInvalid","Enter a base score loss from 0% to 100%")}),e}};function Gd(n){let e=n.arena,t=e.draft,r=[],s=i=>i.length===5&&i.every(a=>n.master.members.get(a)?.bandId===e.bandId);for(let i of n.view.teams){if(!s(i.members))continue;let a=n.manualInputs({members:i.members,snaps:i.snaps,leader:Math.max(0,i.members.indexOf(i.leader??i.members[0]))},e.settings);a.members.length!==5||a.snaps.length!==i.snaps.filter(o=>o!==null).length||r.push({id:`saved:${i.id}`,name:i.name,input:{members:a.members,snaps:a.snaps,player:a.player,unknownPolicy:e.settings.scope==="theoretical"?"max":e.settings.unknownPolicy,team:{members:i.members.map(o=>`m${o}`),snaps:i.snaps.map(o=>o===null?null:`s${o}`),leader:`m${i.leader??i.members[0]}`},ranks:[...e.settings.gekisoRanks]}})}for(let i of n.comparison.items){let{hit:a,input:o}=i;s(a.members.map(c=>o.members.find(l=>l.key===c).cardId))&&r.push({id:`comparison:${i.id}`,name:`${n.t("comparison","Comparison")} ${n.comparison.items.indexOf(i)+1}`,input:{members:o.members.filter(c=>a.members.includes(c.key)),snaps:o.snaps.filter(c=>a.snaps.includes(c.key)),player:o.player,unknownPolicy:o.unknownPolicy,team:{members:a.members,snaps:a.snaps,leader:a.members[0]},...o.goal.kind==="gekiso"?{accuracy:o.goal.accuracy,ranks:o.goal.ranks??[o.goal.rank,o.goal.rank,o.goal.rank]}:{}}})}return p`<div class="stack" id="tb-arena-objective" data-tb-field tabindex="-1">
    <div class="row row--between"><span class="tb-field__label">${n.t("arena.sections.target","Optimization target")}</span>${Ma(n,"sections")}</div>
    ${F({label:n.t("arena.sections.target","Optimization target"),value:t.objective,options:[{value:"score",label:n.t("arena.sections.score","Total score")},{value:"sections",label:n.t("arena.sections.priority","GEKISO sections")}],onSelect:i=>e.update({objective:i})})}
    ${t.objective==="sections"?p`<md-outlined-text-field id="tb-section-loss" data-tb-field type="number" min="0" max="100" step="0.5" suffix-text="%"
      ?error=${n.submitted&&(!Number.isFinite(t.maxBaseLossPercent)||t.maxBaseLossPercent<0||t.maxBaseLossPercent>100)}
      label=${n.t("arena.sections.maxLoss","Maximum base score loss")} .value=${ve(String(t.maxBaseLossPercent))}
      @change=${i=>e.update({maxBaseLossPercent:Number(i.target.value)})}></md-outlined-text-field>
      ${W({id:"tb-section-opponents",expanded:n.expanded.has("section-opponents"),onExpandedChange:i=>{i?n.expanded.add("section-opponents"):n.expanded.delete("section-opponents"),n.requestUpdate()},label:n.t("arena.sections.opponents","Opponent scenarios"),metadata:String(e.opponents.length),content:p`
        ${Te({type:"select",label:n.t("arena.sections.addOpponent","Add a reference opponent"),value:"",options:[{value:"",label:n.t("arena.sections.chooseOpponent","Choose a saved or comparison team")},...r.filter(i=>!e.opponents.some(a=>a.id===i.id)).map(i=>({value:i.id,label:i.name,disabled:e.opponents.length>=4}))],onSelect:i=>{let a=r.find(o=>o.id===i);a&&e.opponents.length<4&&(n.cancel(),e.opponents=[...e.opponents,structuredClone(a)],n.requestUpdate())}})}
        <div class="cluster">${e.opponents.map(i=>Cn(i.name,n.common("common.actions.remove","Remove"),()=>{n.cancel(),e.opponents=e.opponents.filter(a=>a.id!==i.id),n.requestUpdate()}))}</div>`})}`:k}
  </div>`}function oc(n){let e=n.arena,t=e.draft,r=n.searchSettings,s=n.catalog,i=e.rule,a=e.period;return Pn(n,p`
      <section class="surface stack" id="tb-arena-rules" data-tb-field tabindex="-1">
        ${V({icon:"swords",label:n.t("arena.tab","GEKISO Arena")})}
        ${Te({type:"select",label:n.t("arena.league","League"),value:String(t.leagueId),options:[1,2,3,4,5].map(o=>({value:String(o),label:s.bandName(o),leading:p`<img src=${s.bandIcon(o)} width="24" height="24" alt="" loading="lazy" />`})),onSelect:o=>e.league(Number(o))})}
        <div class="cluster">
          <span class="chip">
            ${a.season?n.t("arena.season","Season {count}",{count:a.season.id}):n.t("arena.noSeason","No active season")}
          </span>
          ${a.regulation?p`
                  <time datetime=${new Date(a.regulation.endAt).toISOString()}>
                    ${n.t("arena.until","Until {time}",{time:Lt(n.locale,a.regulation.endAt,{time:!0})})}
                  </time>
                `:k}
        </div>
        ${F({label:n.t("arena.rules","Rules"),value:t.automatic?"auto":"manual",options:[{value:"auto",label:n.t("arena.current","Current rules")},{value:"manual",label:n.t("arena.custom","Custom")}],onSelect:o=>e.update({automatic:o==="auto"})})}
        ${t.automatic?a.regulation?Oa(n,i):p`<span class="tabular">—</span>`:La(n,i,o=>e.updateRule(o))}
      </section>
      <section class="surface stack">
        ${V({icon:"groups",label:n.t("arena.objective","Team objective")})}
        ${F({label:n.t("arena.objective","Team objective"),value:t.mode,options:[{value:"shared",label:n.t("arena.shared","One team for all songs")},{value:"individual",label:n.t("arena.individual","A team for each song")}],onSelect:o=>e.update({mode:o})})}
        ${Gd(n)}
        ${t.mode==="individual"&&t.objective==="score"?p`
                ${Te({type:"select",label:n.t("criterion","Score goal"),value:r.criterion,options:["mean","max","min"].map(o=>({value:o,label:la(n,oa[o].label)})),onSelect:o=>e.updateBuild({criterion:o})})}
              `:k}
        ${eo(n)}
        ${t.objective==="sections"?k:t.mode==="individual"?Qa(n):p`
                <div id="tb-placement">
                  ${Pa(n,r.gekisoRanks,(o,c)=>{let l=[...r.gekisoRanks];l[o]=c,e.updateBuild({gekisoRanks:l})})}
                </div>
              `}
        ${Wa(n)}${qn(n)}${Gn(n)}${Vn(n)}${Xa(n)}
      </section>
      ${Jn(n)}
      <section class="surface stack">
        ${V({icon:"library_music",label:n.t("songs","Songs"),count:r.songs.length||void 0})}
        ${Qt(n,t.build.songs,o=>e.updateBuild({songs:o}),!1,e.allowedSongIds,"tb-songs",e.allowedCharts,{poolAction:p`<button class="button button--text" type="button" @click=${()=>e.selectPool()}>
            ${n.t("arena.usePool","Use league songs")}
          </button>`})}
      </section>
    `,Wn(n),Xn(n))}var lc="../assets/cn-FVHGDEHO.svg?url";var cc="../assets/en-us-SQ32AOMM.svg?url";var dc="../assets/hk-RMEF7ZRO.svg?url";var uc="../assets/jp-EERAVHIQ.svg?url";var pc="../assets/kr-AQWHLN3E.svg?url";var mc="../assets/de-EBHK6UJP.svg?url";var hc="../assets/es-65NIIW3S.svg?url";var gc="../assets/fr-NI7HH6XU.svg?url";var fc="../assets/id-E7EO7IJS.svg?url";var bc="../assets/it-XMUPWDZH.svg?url";var vc="../assets/pl-4WW3LLR2.svg?url";var yc="../assets/br-YI6YALNU.svg?url";var wc="../assets/ru-UIAX7Z7Q.svg?url";var kc="../assets/th-4SUFKDY4.svg?url";var xc="../assets/vn-NQW2DVM7.svg?url";var ou={de:mc,es:hc,fr:gc,id:fc,it:bc,pl:vc,pt:yc,ru:wc,th:kc,vi:xc},qr=[{value:"ja",image:uc,label:"\u65E5\u672C\u8A9E"},{value:"en",image:cc,label:"English"},{value:"zh-TW",image:dc,label:"\u7E41\u9AD4\u4E2D\u6587"},{value:"zh-CN",image:lc,label:"\u7B80\u4F53\u4E2D\u6587"},{value:"ko",image:pc,label:"\uD55C\uAD6D\uC5B4"},...Bi.map(n=>({...n,image:ou[n.value]}))];var Sc="../assets/bilibili-circle-WQPOCQKY.svg?url";var cu=Array.from({length:96},(n,e)=>{let t=e/96*2*Math.PI,r=46*(1+.085*Math.cos(8*t));return`${(50+r*Math.cos(t)).toFixed(2)},${(50+r*Math.sin(t)).toFixed(2)}`}).join(" "),du={tw:qr.find(n=>n.value==="zh-TW").image,en:qr.find(n=>n.value==="en").image,kr:qr.find(n=>n.value==="ko").image},$c=n=>{let e=n.uid&&Zn(n.uid);return e&&e!=="jp"?du[e]:n.server==="jp"?Xi:Sc},Ic=n=>`game-tool-account-${n}`;function _c(n,e){un(Ic(n.tool),p`
    <game-tool-account-picker data-app-bar-keep tool=${n.tool} .locale=${n.locale} .account=${n.account}
      .legacyServers=${n.legacyServers??[]} .onSelect=${n.onSelect}></game-tool-account-picker>
  `,e,"leading")}var Ec=n=>We(Ic(n)),Cc=n=>{let e=n.uid&&Zn(n.uid);return e?yo[e]:n.server==="jp"?"JP":"Global"},fi=class extends te{static properties={locale:{},tool:{},account:{attribute:!1},legacyServers:{attribute:!1}};onSelect;opened=!1;creating=!1;manage=!1;busy=!1;error="";server="intl";claim;editing;copyModule;art=new Map;loadingArt=new Set;updateAccounts=()=>{this.requestUpdate(),this.loadArtwork()};constructor(){super(),this.locale="en",this.tool="team",this.legacyServers=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(kt,this.updateAccounts),tn().then(this.updateAccounts)}disconnectedCallback(){window.removeEventListener(kt,this.updateAccounts),super.disconnectedCallback()}t(e,t){return G(this.locale,`account.page.toolAccounts.${e}`,t)}name(e){return e.settings?.alias?e.settings.alias:Oe(e.id)?e.name||e.uid||this.t("temporary","Temporary profile"):!this.legacyServers.includes(e.server)&&!tr(this.tool).includes(e.server)?this.t("temporary","Temporary profile"):e.server==="jp"?this.t("legacyJp","Original JP"):this.t("legacyGlobal","Original Global")}close(){this.opened=this.creating=this.manage=!1,this.claim=void 0,this.editing=void 0,this.error="",this.requestUpdate()}finishManagementAction(){this.claim=this.editing=void 0,this.error="",this.requestUpdate()}choose(e){en(e);let t=new URL(location.href);t.searchParams.set("gameAccount",e.id),history.replaceState(history.state,"",t),this.close(),this.onSelect?.(e)}async add(e){if(e.preventDefault(),this.busy)return;let t=e.currentTarget.querySelector("md-outlined-text-field");this.busy=!0,this.error="",this.requestUpdate();try{let r=t?.value?.trim()||`${this.server==="jp"?"JP":"Global"} ${this.t("manual","Manual account")} ${st(this.tool).filter(i=>i.server===this.server&&!i.uid).length+1}`,s=await xo(this.tool,this.server,r);this.isConnected&&this.choose(s)}catch{this.error=this.t("saveFailed","Could not save account")}finally{this.busy=!1,this.requestUpdate()}}async loadArtwork(){if(!(!this.isConnected||!this.opened))for(let e of st(this.tool))!e.favoriteCardId||this.loadingArt.has(e.id)||(this.loadingArt.add(e.id),fetch(`/api/v1/servers/${e.server}/cards/${e.favoriteCardId}`).then(t=>t.ok?t.json():null).then(t=>{let r=t?.images?.full??t?.images?.thumbnail;r?.startsWith("/")&&!r.startsWith("//")&&(this.art.set(e.id,r),this.requestUpdate())}).catch(()=>{}))}async prepareCopy(){let e=this.claim;if(!e||this.busy)return;let t=st(this.tool).find(r=>r.id===e.source)??_e(e.target.server,this.tool);this.busy=!0,this.error="",this.requestUpdate();try{let s=await(this.copyModule??=await import("./game-tool-account-copy-D7O5TJVV.js")).previewGameToolCopy(t,e.target,e.kind);this.claim===e&&(this.claim={...e,preview:s})}catch{this.error=this.t("saveFailed","Could not save account")}finally{this.busy=!1,this.requestUpdate()}}async finishCopy(e){if(!this.claim?.preview||!this.copyModule||this.busy)return;let t=this.claim.preview;this.busy=!0,this.error="",this.requestUpdate();try{await this.copyModule.applyGameToolCopy(t,e),this.finishManagementAction()}catch{this.error=this.t("saveFailed","Could not save account")}finally{this.busy=!1,this.requestUpdate()}}async editAccount(e){e.preventDefault();let t=this.editing;if(!(!t||this.busy)){this.busy=!0,this.error="",this.requestUpdate();try{if(t.kind==="rename"){let r=e.currentTarget.querySelector("md-outlined-text-field")?.value??"";await $o(t.account,r)}else await ys(t.account,!0);this.finishManagementAction()}catch{this.error=this.t("saveFailed","Could not save account")}finally{this.busy=!1,this.requestUpdate()}}}restoreAccount(e){ys(e,!1).catch(()=>{this.error=this.t("saveFailed","Could not save account"),this.requestUpdate()})}copyForm(){let e=this.claim,t=[_e(e.target.server,this.tool),...st(this.tool).filter(r=>r.server===e.target.server&&!r.uid&&r.id!==e.target.id)];return p`<div class="dialog__body stack">
      <div class="tool-account__card">${this.profile(e.target)}</div>
      <md-outlined-select label=${this.t("source","Copy from")} .value=${e.source} ?disabled=${this.busy}
        @change=${r=>{this.claim={...e,source:r.currentTarget.value,preview:void 0},this.requestUpdate()}}>
        ${t.map(r=>p`<md-select-option value=${r.id}><div slot="headline">${this.name(r)}</div></md-select-option>`)}
      </md-outlined-select>
      ${e.preview?p`
        <div class="cluster">
          <span class="chip chip--static">${O("add_circle",18)} ${this.t("missing","Missing entries")} ${e.preview.missing.length}</span>
          <span class="chip chip--static">${O("swap_horiz",18)} ${this.t("conflicts","Conflicting entries")} ${e.preview.conflicts.length}</span>
        </div>
        <div class="cluster">
          <button class="button button--filled" type="button" ?disabled=${this.busy||!e.preview.missing.length}
            @click=${()=>void this.finishCopy(!1)}>${this.t("copyMissing","Fill missing entries")}</button>
          ${e.preview.conflicts.length?p`<button class="button button--outlined" type="button" ?disabled=${this.busy}
            @click=${()=>void this.finishCopy(!0)}>${this.t("copyReplace","Copy and replace conflicts")}</button>`:k}
        </div>`:p`<button class="button button--tonal" type="button" ?disabled=${this.busy} @click=${()=>void this.prepareCopy()}>
          ${O("swap_horiz",18)} ${G(this.locale,"common.actions.preview","Preview")}</button>`}
      ${this.error?p`<p role="alert">${this.error}</p>`:k}
    </div>`}profile(e){let t=this.art.get(e.id),r=!Oe(e.id)&&(this.legacyServers.includes(e.server)||tr(this.tool).includes(e.server));return p`
      ${t?p`<img class="tool-account__art" src=${t} alt="" loading="lazy" decoding="async" />`:k}
      <span class="tool-account__rank" aria-hidden="true">
        <svg viewBox="0 0 100 100"><polygon points=${cu}></polygon></svg>
        ${e.rank===void 0?O(e.uid?"sports_esports":"person",23):p`<span><small>RANK</small><strong>${e.rank}</strong></span>`}
      </span>
      <span class="tool-account__identity">
        <strong class="tool-account__name">${this.name(e)}</strong>
        <span class="tool-account__detail"><img src=${$c(e)} alt="" />${Cc(e)}</span>
        ${e.uid||e.name||r?p`<span class="tool-account__detail">${O(e.uid?"badge":"edit",15)}
          ${e.uid?`UID ${e.uid}`:r?this.t("legacy","Original data"):this.t("manual","Manual account")}
        </span>`:k}
        ${e.savedAt?p`<span class="tool-account__detail">${O("schedule",15)}
          ${new Intl.DateTimeFormat(this.locale,{dateStyle:"short",timeStyle:"short"}).format(e.savedAt)}
        </span>`:k}
      </span>`}render(){let e=[],t=this.account??_e("intl",this.tool);this.opened&&(e.push(...st(this.tool),...fs(this.tool,t,this.legacyServers)),e.sort((m,y)=>(m.settings?.position??0)-(y.settings?.position??0)||m.id.localeCompare(y.id)));let r=this.t("title","Game accounts"),s=this.t("add","Add account"),i=this.t("claim","Copy account data"),a=this.t("manage","Manage accounts"),o=this.manage?[...st(this.tool,!0),...fs(this.tool,void 0,this.legacyServers,!0)].filter(m=>m.settings?.removed):[],c=this.manage?e.filter(m=>Oe(m.id)||this.legacyServers.includes(m.server)||tr(this.tool).includes(m.server)):[],l=this.t("rename","Rename account"),d=this.t("remove","Remove account"),u=this.editing?.kind==="rename"?l:d,h=G(this.locale,"common.actions.close","Close"),g=this.editing?u:this.claim?i:this.creating?s:this.manage?a:r,f=(this.manage?c:e).map(m=>this.manage?p`<article class="tool-account__managed">
          <div class="tool-account__card">${this.profile(m)}</div>
          <div class="tool-account__actions">
            ${this.tool!=="history"&&Oe(m.id)?D({icon:"content_copy",label:i,onClick:()=>{this.tool!=="history"&&(this.claim={target:m,source:_e(m.server,this.tool).id,kind:this.tool},this.requestUpdate())}}):k}
            ${this.copyModule?.hasGameToolCopyBackup(m)?D({icon:"undo",label:this.t("undoCopy","Undo last copy"),onClick:()=>{this.copyModule?.undoGameToolCopy(m).then(()=>this.requestUpdate()).catch(()=>{this.tool!=="history"&&(this.claim={target:m,source:_e(m.server,this.tool).id,kind:this.tool},this.error=this.t("saveFailed","Could not save account"),this.opened=!0,this.requestUpdate())})}}):k}
            ${D({icon:"edit",label:l,onClick:()=>{this.editing={account:m,kind:"rename"},this.opened=!0,this.requestUpdate()}})}
            ${D({icon:"arrow_upward",label:this.t("moveUp","Move up"),disabled:c[0]?.id===m.id,onClick:()=>void ws(m,-1,c)})}
            ${D({icon:"arrow_downward",label:this.t("moveDown","Move down"),disabled:c.at(-1)?.id===m.id,onClick:()=>void ws(m,1,c)})}
            ${D({icon:"delete",label:d,onClick:()=>{this.editing={account:m,kind:"remove"},this.opened=!0,this.requestUpdate()}})}
          </div>
        </article>`:p`<button class="tool-account__card" type="button" aria-pressed=${String(m.id===t.id)}
          @click=${()=>this.choose(m)}>
          ${this.profile(m)}
          <span class="tool-account__select" aria-hidden="true">${O(m.id===t.id?"check_circle":"chevron_right",21)}</span>
        </button>`);return p`
      <button class="button button--tonal tool-account__trigger" type="button" aria-haspopup="dialog"
            aria-label=${`${r} / ${this.name(t)}`} @click=${()=>{this.opened=!0,this.requestUpdate(),tn(),this.loadArtwork()}}>
            <img src=${$c(t)} alt="" title=${Cc(t)} /><span>${this.name(t)}</span>${O("expand_more",17)}
          </button>
      ${this.opened?p`<dialog class="dialog tool-account__dialog" aria-label=${g} ${ie(()=>this.close())}>
        <header class="dialog__header tool-account__header">
          <h2>${O(this.editing?.kind==="remove"?"delete":this.editing?"edit":this.claim?"content_copy":this.creating?"person_add":"manage_accounts",24)}
            ${g}</h2>
          ${D({icon:"close",label:h,onClick:()=>this.close()})}
        </header>
        ${this.editing?p`<form class="dialog__body stack" @submit=${m=>void this.editAccount(m)}>
            ${this.editing.kind==="rename"?p`<md-outlined-text-field label=${this.t("name","Nickname")} maxlength="80"
              .value=${this.editing.account.settings?.alias||this.editing.account.name}></md-outlined-text-field>`:p`<div class="tool-account__card">${this.profile(this.editing.account)}</div>
                <p>${this.t("removeDetail","You can restore this account and its data from Removed accounts.")}</p>`}
            ${this.error?p`<p role="alert">${this.error}</p>`:k}
            <button class="button button--filled" type="submit" ?disabled=${this.busy}>${this.editing.kind==="rename"?G(this.locale,"account.page.save","Save"):d}</button>
          </form>`:this.claim?this.copyForm():this.creating?p`<form class="dialog__body stack" @submit=${m=>void this.add(m)}>
              ${F({label:this.t("server","Game version"),value:this.server,options:[{value:"jp",label:"JP",icon:"language"},{value:"intl",label:"Global",icon:"public"}],onSelect:m=>{this.server=m,this.requestUpdate()}})}
              <md-outlined-text-field label=${this.t("name","Nickname")} maxlength="80"></md-outlined-text-field>
              ${this.error?p`<p role="alert">${this.error}</p>`:k}
              <button class="button button--filled" type="submit" ?disabled=${this.busy}>${O("person_add",18)}${s}</button>
            </form>`:p`<div class="dialog__body tool-account__rows">${f}
              ${o.length?p`<h3 class="detail-section-title">${O("delete",20)}${this.t("removed","Removed accounts")}</h3>
                ${o.map(m=>p`<div class="tool-account__card">
                  ${this.profile(m)}
                  ${D({icon:"undo",label:this.t("restore","Restore account"),onClick:()=>this.restoreAccount(m)})}
                </div>`)}`:k}
            </div>
            <footer class="dialog__actions"><button class="button button--text" type="button" @click=${()=>{this.manage=!this.manage,this.requestUpdate(),this.manage&&this.tool!=="history"&&!this.copyModule&&import("./game-tool-account-copy-D7O5TJVV.js").then(m=>{this.copyModule=m,this.requestUpdate()})}}>${O("manage_accounts",18)}${this.manage?r:a}</button><button class="button button--tonal" type="button" @click=${()=>{this.server=t.server,this.creating=!0,this.requestUpdate()}}>${O("person_add",18)}${s}</button></footer>`}
      </dialog>`:k}
    `}};customElements.get("game-tool-account-picker")||customElements.define("game-tool-account-picker",fi);var uu={account:"navigation.account",all:"common.states.all",challenge:"navigation.challenge",error:"common.states.error",score:"catalog.analysis.fields.score",skip:"common.actions.skip",title:"common.fields.title"},bi="pref.build",Rc=[bi,"pref.arena","pref.song-comparison","pref.song-picker"],Tc="team-builder-sync",pu="team-builder-search",vi=class extends te{static properties={locale:{type:String},server:{type:String}};data=null;publicData=null;master=null;catalog=null;snapshot=null;view=null;persistentBoxView=null;temporary=new rr;planner=new sr(this);temporaryPicker=null;temporaryDraft=null;get persistentView(){return this.persistentBoxView??this.view}store=null;engine=null;farmResultMode=null;imports=new Br(this);pendingImportChecked=!1;pendingAppBoxImport=null;pendingBoxAccount="";gameAccount;gameAccountOwner=null;gameAccountsChanged=()=>{let e=this.gameAccount&&bs(this.gameAccount.id,"team"),t=vs("team",this.server);this.gameAccount&&(this.gameAccountOwner!==gs()||!e||!Oe(e.id)&&Oe(t.id))?this.load(t.server,t):e&&(this.gameAccount=e),this.requestUpdate()};skillRoleEditor=null;analysis=new ua(this);pt=new gn(this);songComparison=new Or(this);teamGrowth=new $r(this);arena=new Lr(this);task=null;acquireTask(e){if(this.task||this.running||this.manualBusy)return null;let t=Symbol(e);return this.task={token:t,kind:e},this.running=!0,this.requestUpdate(),t}ownsTask(e){return this.task?.token===e}get taskKind(){return this.task?.kind}releaseTask(e){this.ownsTask(e)&&(this.task=null,this.running=!1,this.requestUpdate())}confirmReset=!1;resetTasks(){this.catalog?.dispose(),this.skillRoleEditor=null,this.analysis.close(),this.teamGrowth.close(),this.songComparison.dispose(),this.arena.dispose(),this.pt.dispose(),this.farmResultMode=null,this.engine?.cancel(),this.task=null,this.running=!1,this.manualBusy=!1,this.growth=null,this.progress=null,this.manualResults=null,this.manualSuggestions=null,this.manualSuggesting=-1,this.activeManualContext="",this.activeContext="",++this.runGeneration,this.submitted=!1,this.taskResults.clear(),this.comparisons.clear(),this.conditionsOpen=!1,this.scrollPositions.clear(),this.results=null,this.resultInputs=null,this.resultSettings=null,this.resultsFor="",this.songPicker?.recommendationRequest?.abort(),this.songPicker=null,this.slotPicker=null,this.songPickerPreferences.clear()}compactConditions=!1;conditionsOpen=!1;layoutObserver;workspaceTool;workspaceLayout="";conditionScroll=0;openConditions(){this.conditionScroll=this.closest("#main-content")?.scrollTop??0,this.conditionsOpen=!0,this.requestUpdate()}closeConditions(){this.conditionsOpen=!1,this.requestUpdate(),this.updateComplete.then(()=>{let e=this.closest("#main-content");e&&(e.scrollTop=this.conditionScroll),this.querySelector("#tb-adjust")?.focus({preventScroll:!0})})}async ensureConditionsVisible(){this.compactConditions&&!this.conditionsOpen&&["build","arena","pt","song-comparison"].includes(this.tab)&&this.openConditions(),await this.updateComplete}calculationSubmitted(){this.conditionsOpen&&(this.conditionsOpen=!1,this.requestUpdate(),this.updateComplete.then(()=>{let e=this.querySelector("#tb-progress");e?.scrollIntoView({block:"start"}),e?.focus({preventScroll:!0})}))}comparisons=new Map;get comparison(){let e=`${this.resultScope}:${he(this)?"pt":"build"}`;return this.comparisons.has(e)||this.comparisons.set(e,new fr),this.comparisons.get(e)}renderCompareTray(){return this.comparison.tray(this)}get resultSession(){return this.taskResult.session}set resultSession(e){this.taskResult.session=e}buildMode="automatic";tab="build";settings={...Rn};submitted=!1;lastTaskTab="build";songPickerPreferences=new Map;get songDifficulties(){let e=this.view?.prefs["song-picker"];return Array.isArray(e?.difficulties)?e.difficulties.filter(t=>Number.isInteger(t)&&t>=0&&t<=4):[3]}get songDifficultyCeiling(){let e=this.view?.prefs["song-picker"]?.includeThrough;return typeof e=="number"&&Number.isInteger(e)&&e>=0&&e<=4?e:null}get songPoolDifficulties(){let e=this.songDifficultyCeiling;return e===null?this.songDifficulties:[...new Set([...this.songDifficulties,...Array.from({length:e+1},(t,r)=>r)])]}setSongPickerPreferences(e,t){this.write([{key:"pref.song-picker",value:{difficulties:e,includeThrough:t}}])}filters={kind:"members",query:"",show:"owned",bands:[],characters:[],attributes:[],rarities:[],facets:{}};filtersOpen=!1;boxQuickEntry=!1;selection=new Set;editing=null;songPicker=null;bestDifficultyOnly=!1;taskResults=new Map;get resultScope(){let e=["build","arena","pt","song-comparison"].includes(this.tab)?this.tab:this.lastTaskTab;return e==="arena"?"arena":e==="pt"?this.settings.rewardMode==="plan"?"plan":"farm":"build"}get taskResult(){let e=this.resultScope;return this.taskResults.has(e)||this.taskResults.set(e,{results:null,settings:null,inputs:null,context:"",tab:"overall",session:""}),this.taskResults.get(e)}get results(){return this.taskResult.results}set results(e){this.taskResult.results=e}get resultSettings(){return this.taskResult.settings}set resultSettings(e){this.taskResult.settings=e}get resultInputs(){return this.taskResult.inputs}set resultInputs(e){this.taskResult.inputs=e}get resultsFor(){return this.taskResult.context}set resultsFor(e){this.taskResult.context=e}get resultTab(){return this.taskResult.tab}set resultTab(e){this.taskResult.tab=e}restoreFarmingResult(e,t,r,s,i){this.taskResults.set("farm",{results:e,settings:t,inputs:r,context:s,session:i,tab:"overall"})}get hasTaskResults(){return this.tab==="pt"&&this.settings.rewardMode!=="plan"&&(this.farmResultMode??this.settings.rewardMode)==="recommendation"?!!this.pt.job:!!this.results}computationStatus(){if(this.taskKind==="build"&&this.engine?.searchQueued)return this.t("searchQueued","Queued");let e=this.engine?.phases??[];return(e.length?e:["initializationMs"]).map(t=>t==="networkMs"?this.t("loadingCharts","Loading charts"):t==="initializationMs"?this.t("preparingEngine","Preparing"):this.t("sc.running","Calculating")).join(" / ")}running=!1;progress=null;error="";loadError="";expanded=new Set;manual={members:[null,null,null,null,null],snaps:[null,null,null,null,null],leader:2};manualResults=null;manualResultsFor="";manualSuggestions=null;manualSuggestionsFor="";manualSuggesting=-1;activeManualContext="";manualBaseline=null;manualPin=!1;autoEvaluated="";growth=null;manualBusy=!1;slotPicker=null;slotFilters={kind:"members",query:"",show:"all",bands:[],characters:[],attributes:[],rarities:[],facets:{}};slotFiltersOpen=!1;requiredPicker=null;excludedPicker=null;notice="";images=new Wi;unsubscribe;loadedServer="";dataController;visualsController;catalogMetadataError=!1;pageData;pendingPageData;get pageDataBusy(){return!!(this.running||this.manualBusy||this.task||this.slotPicker||this.requiredPicker||this.editing||this.songPicker||this.querySelector("dialog[open]"))}requestedArenaLeague=0;constructor(){super(),this.locale="en",this.server="intl"}createRenderRoot(){return this}disposeSongDisplay;disposeVisibility;connectedCallback(){if(ol(this,()=>this.connectedCallback()))return;let e=Ot().searchParams,t=e.get("tab"),r=Number(e.get("league"));this.pendingImportChecked=!1,t==="arena"&&(this.requestedArenaLeague=Number.isSafeInteger(r)&&r>0?r:0);let s=Ws(this);s?.schema==="haneoka-team-builder-page-v1"&&this.preparePage(s),super.connectedCallback(),this.disposeSongDisplay=ji(()=>this.requestUpdate()),this.disposeVisibility=Li(()=>this.requestUpdate()),this.layoutObserver=new ResizeObserver(()=>{let c=this.querySelector(".team-builder"),l=c?getComputedStyle(c):null,u=(c?.clientWidth??this.clientWidth)-(l?parseFloat(l.paddingInlineStart)+parseFloat(l.paddingInlineEnd):0)<900||(this.closest("#main-content")?.clientHeight??innerHeight)<640;u!==this.compactConditions&&(this.compactConditions=u,this.conditionsOpen=!1,this.requestUpdate()),this.measureWorkspace()}),this.layoutObserver.observe(this),this.closest("#main-content")&&this.layoutObserver.observe(this.closest("#main-content"));let i=e.get("server"),a=$n(i)?i:Fi();window.addEventListener(kt,this.gameAccountsChanged),this.loadToolEntry(a,e),t&&["arena","song-comparison","pt","box","account","teams"].includes(t)&&this.updateComplete.then(()=>{this.isConnected&&this.setTab(t)})}async loadToolEntry(e,t){let r=t.get("gameAccount");r&&!bs(r,"team")&&await tn();let s=vs("team",e,r),i=Le()&&!t.has("saveImport")?await Yt("pendingBoxImport",{}).catch(()=>null):null;if(this.isConnected){if(i&&$n(i.server)){let a=i.key?await So(i.key,"team").catch(()=>{}):_e(i.server,"team");if(!this.isConnected)return;if(!a||a.server!==i.server){this.error=this.t("boxImport.incompatibleServer","The save account does not match the import target."),await this.load(s.server,s);return}this.pendingAppBoxImport=i,this.pendingBoxAccount=a.id,en(a),this.requestUpdate(),await this.load(a.server,a)}else if(!this.loadedServer){let a=!r&&($n(t.get("server"))||t.has("saveImport"))&&s.server!==e?_e(e==="jp"?"jp":"intl","team"):s;r&&a.id===r&&en(a),await this.load(a.server,a)}}}preparePage(e,t=e.server,r){this.pageData=e,this.server=t;let s=r??e.sources.map(o=>o.identity.server).filter(o=>!o.includes("-test")||o===t),i=[...e.sources].filter(o=>s.includes(o.identity.server));if(i.sort((o,c)=>+(c.identity.server===t)-+(o.identity.server===t)),i[0]?.identity.server!==t)throw new Error("Static team source unavailable");this.data=ei(i,e.unavailableServers),this.publicData=this.data,this.planner.hasDefinitions&&this.snapshot&&(this.data=as(this.publicData,this.planner.document,o=>this.catalog?.characterFace(o)??"")),this.master=Sn(this.data),this.catalog=new En(this,this.data,this.master);let a=e.visuals[t];this.catalog.setVisuals({...a,marks:new Map(a.marks)}),this.view=At({})}adoptPageData(){let e=Ws(this);return e?.schema!=="haneoka-team-builder-page-v1"?!1:this.pageDataBusy?(this.pendingPageData=e,!0):this.applyPageData(e)}applyPageData(e){let t=!!(this.engine&&this.view);if(this.dataController?.abort(),this.visualsController?.abort(),!t)return this.preparePage(e,this.server),this.loadedServer="",this.load(this.server),!0;let r=this.view;return this.catalog?.dispose(),this.preparePage(e,this.server),this.view=r,this.engine?.dispose(),this.engine=new kn(this.data,()=>this.requestUpdate()),this.engine.prefetch(this.searchSettings.songs),this.requestUpdate(),!0}update(e){this.hasAttribute("data-prerendered")&&(il(this.render(),this,this.renderOptions),this.removeAttribute("data-prerendered")),super.update(e)}disconnectedCallback(){window.removeEventListener(kt,this.gameAccountsChanged),this.songPicker?.recommendationRequest?.abort(),this.planner.dispose(),this.disposeVisibility?.(),this.temporary.clear(),this.temporaryDraft=null,this.temporaryPicker=null,this.editing=null,this.view=this.persistentBoxView,this.disposeSongDisplay?.(),this.layoutObserver?.disconnect(),clearTimeout(this.noticeTimer),super.disconnectedCallback(),We(Tc),Ec("team"),We("team-builder-quick-entry"),We("team-builder-planner"),this.releaseSearch?.(),this.releaseSearch=void 0,this.dataController?.abort(),this.visualsController?.abort(),this.images.disconnect(),this.unsubscribe?.(),this.resetTasks(),this.store?.dispose(),this.engine?.dispose(),this.store=null,this.engine=null,this.loadedServer=""}noticeTimer;noticeShown="";errorShown="";renderSnackbar(){let e=p`
      <button
        class="icon-button"
        type="button"
        aria-label=${this.common("common.actions.close","Close")}
        @click=${()=>{this.notice="",this.requestUpdate()}}
      >
        ${O("close",20)}
      </button>
    `;return this.notice?p`
        <div class="snackbar" role="status">
          <span>${this.notice}</span>
          ${Sl(this)}${e}
        </div>
      `:this.pt.correcting&&this.tab!=="pt"?p`
        <div class="snackbar" role="status">
          <span>${this.t("pt.correctionHelp","Editing an input for event rewards")}</span>
          <button
            class="button button--text"
            type="button"
            @click=${()=>{this.setTab("pt"),this.updateComplete.then(()=>this.querySelector("#pt-issues")?.focus())}}
          >
            ${this.t("pt.back","Back")}
          </button>
        </div>
      `:this.catalogMetadataError?p`
        <div class="snackbar" role="status">
          <span>
            ${this.common("catalog.availability.catalogFiltersUnavailable","Additional card filters could not be loaded. Your cards are still available.")}
          </span>
          <button class="button button--text" type="button" @click=${()=>void this.loadCatalogMetadata()}>
            ${this.common("common.actions.retry","Retry")}
          </button>
        </div>
      `:k}releaseSearch;updated(){if(this.pendingPageData&&!this.pageDataBusy&&this.isConnected){let i=this.pendingPageData;this.pendingPageData=void 0,this.applyPageData(i);return}let e=this.pendingAppBoxImport;if(!this.pendingImportChecked&&this.data?.identity.sourceId&&this.store&&this.view&&this.snapshot&&(e?e.server===this.data.identity.server&&this.gameAccount?.id===this.pendingBoxAccount:Ot().searchParams.has("saveImport"))&&(this.pendingImportChecked=!0,this.pendingAppBoxImport=null,e&&this.setTab("box",{focusPanel:!1}),this.imports.takePending(e)),!this.isConnected)return;if(this.task?.kind==="build"&&this.activeContext&&this.activeContext!==this.calculationContext()&&this.engine?.cancel(),(this.manualPin||this.manualBaseline)&&this.tab==="build"&&this.buildMode==="manual"&&!this.task&&!this.running){let i=this.manualContext();this.manualResultsFor!==i&&this.autoEvaluated!==i&&po(this)&&(this.autoEvaluated=i,mo(this))}if(this.manualResults||this.task?.kind==="evaluation"){let i=this.manualContext();this.task?.kind==="evaluation"&&this.activeManualContext&&this.activeManualContext!==i&&this.engine?.cancel(),this.manualResultsFor!==i&&(this.manualResults=null)}if(this.manualSuggestions||this.task?.kind==="suggestion"){let i=this.manualSuggestionContext();this.task?.kind==="suggestion"&&this.activeManualContext&&this.activeManualContext!==i&&this.engine?.cancel(),this.manualSuggestionsFor!==i&&(this.manualSuggestions=null)}if(this.syncAppBar(),this.error!==this.errorShown&&(this.errorShown=this.error,this.error&&Dn(this.error,{error:!0,durationMs:8e3})),this.notice!==this.noticeShown){this.noticeShown=this.notice,clearTimeout(this.noticeTimer);let i=this.notice;i&&(this.noticeTimer=setTimeout(()=>{this.notice===i&&(this.notice="",this.requestUpdate())},6e3))}let t=new Set(this.submitted?this.inputIssues().flatMap(i=>i.fields??[i.field]):[]);this.tab==="pt"&&Hn(this,"minBonus")&&t.add("tb-min-bonus");for(let i of this.querySelectorAll("[data-tb-field]")){i.toggleAttribute("data-invalid",t.has(i.id));let a=t.has(i.id)?"true":null;i.ariaInvalid!==a&&(i.ariaInvalid=a)}this.pt.markFields(),this.songComparison.markFields(),this.images.observe(this);let r=this.querySelector(".tb-tool"),s=`${this.tab}:${this.buildMode}:${this.compactConditions}`;(r!==this.workspaceTool||s!==this.workspaceLayout)&&(this.workspaceTool=r??void 0,this.workspaceLayout=s,this.measureWorkspace());for(let i of this.querySelectorAll("dialog.selection-pane"))!i.hasAttribute("data-managed-modal")&&!i.open&&i.isConnected&&i.showModal()}measureWorkspace(){let e=this.closest("#main-content"),t=this.querySelector(".tb-tool");if(!e||!t)return;let r=t.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop,s=`${Math.max(0,e.clientHeight-r-(this.compactConditions?0:24))}px`;this.style.getPropertyValue("--tb-workspace-block")!==s&&this.style.setProperty("--tb-workspace-block",s)}t(e,t,r){let s=t.replace(/\{([^}]+)\}/gu,(i,a)=>r?.[a]===void 0?i:String(r[a]));return G(this.locale,`tools.teamBuilder.${e}`,s,r)}common(e,t){return G(this.locale,uu[e]??e,t)}async load(e,t=this.gameAccount?.server===e?this.gameAccount:_e(e==="jp"?"jp":"intl","team")){let r=gs();if(this.loadedServer===e&&this.gameAccount?.id===t.id&&this.gameAccountOwner===r)return;let s=this.publicData?.identity.server===e?this.publicData:null,i=!!s&&this.data===s&&!!this.engine;this.gameAccount=t,this.gameAccountOwner=r,this.temporary.clear(),this.temporaryDraft=null,this.temporaryPicker=null,this.dataController?.abort();let a=this.dataController=new AbortController;this.visualsController?.abort(),this.catalogMetadataError=!1,this.resetTasks(),this.loadedServer&&(this.imports.dispose(),this.unsubscribe?.(),this.unsubscribe=void 0,this.store?.dispose(),this.store=null,i||(this.engine?.dispose(),this.engine=null),this.snapshot=null,this.view=null,this.persistentBoxView=null,this.data=s,s||(this.catalog=null),this.editing=null,this.notice="",this.error=""),this.server=e,this.loadedServer=e,this.loadError="",this.requestUpdate();let o=this.pageData?void 0:rt(this.t("loadingData","Loading card data"));try{if(this.pageData){if(await this.updateComplete,a.signal.aborted)return;let g=Pt(this.pageData.sources.map(f=>f.identity.server));(this.data?.identity.server!==e||Object.keys(this.data.crossServer?.identities??{}).sort().join()!==[...g].sort().join())&&this.preparePage(this.pageData,e,g)}let c=s||this.data?.identity.server===e&&this.pageData?.sources.every(g=>g.arena!==void 0)&&this.catalog?.visuals,l=c?this.publicData:await pl(e,a.signal),d=c?this.data:l;if(a.signal.aborted)return;if(this.data=d,this.publicData=l,!c){let g=y=>y.server===l.identity.server&&y.releaseId===l.identity.releaseId&&y.sourceId===l.identity.sourceId,f=this.catalog&&g(this.catalog.data.identity)?this.catalog.visuals:null,m=this.pageData?.sources.some(y=>g(y.identity))?this.pageData.visuals[e]:void 0;this.master=Sn(l),this.catalog=new En(this,l,this.master),f?this.catalog.setVisuals(f):m&&this.catalog.setVisuals({...m,marks:new Map(m.marks)})}if(this.pt=new gn(this),await this.updateComplete,!this.isConnected||a.signal.aborted)return;(!i||!this.engine)&&(this.engine?.dispose(),this.engine=new kn(d,()=>this.requestUpdate())),this.engine.prefetch(this.searchSettings.songs);let u=this.engine,h=()=>{this.isConnected&&this.engine===u&&!a.signal.aborted&&u.warm(1)};"requestIdleCallback"in window?requestIdleCallback(h,{timeout:2e3}):setTimeout(h,500),this.unsubscribe?.(),this.store?.dispose(),this.store=new ko({server:e,accountId:Oe(t.id)?t.id:void 0,accountOwner:r}),this.unsubscribe=this.store.subscribe(g=>this.adopt(g)),this.store.start(),this.catalog?.visuals?.marks.size||this.loadCatalogMetadata()}catch{a.signal.aborted||(this.loadError=this.t("loadFailed","Card data could not be loaded."),this.loadedServer="",this.pageData&&(this.data=null,this.catalog=null,this.view=null))}finally{o?.finish(),this.requestUpdate()}}async loadCatalogMetadata(){let e=this.catalog;if(!e)return;this.visualsController?.abort();let t=this.visualsController=new AbortController;this.catalogMetadataError=!1,this.requestUpdate();try{let r=Object.values(e.data.bandItems).some(i=>i.displayOrder===void 0),s=await Mi(e.data.identity,t.signal,!0,r);if(t.signal.aborted||this.catalog!==e)return;e.setVisuals(s)}catch{!t.signal.aborted&&this.catalog===e&&(this.catalogMetadataError=!0)}!t.signal.aborted&&this.catalog===e&&this.requestUpdate()}adopt(e){let t=!this.snapshot||this.snapshot.owner!==e.owner;t&&(this.resetTasks(),this.temporary.clear(),this.temporaryDraft=null,this.temporaryPicker=null,this.editing=null);let r=this.snapshot?.version!==e.version;if(this.snapshot=e,t&&this.planner.restore(e.owner),this.planner.cards.some(s=>!this.temporary.has(s.kind,s.id))&&this.planner.restoreCards(),r||t){let s=this.settings.required;this.persistentBoxView=At(e.entries),this.view=At(this.temporary.merge(this.planner.merge(e.entries))),this.settings=this.readBuildPreferences(),t||(this.settings.required=s),(this.settings.goal==="event"||this.settings.goal==="plan")&&(this.settings={...this.settings,rewardMode:this.settings.goal,goal:"score"},t&&this.tab==="build"&&(this.tab="pt")),this.songComparison.restore(),this.arena.restore(t?void 0:this.arena.draft.build.required),this.engine?.prefetch(this.searchSettings.songs),this.imports.rebase()}this.requestUpdate(),this.pt.restore()}write(e,t=!1){if(!this.store)return!1;if(!e.length)return!0;try{let r=e.flatMap(d=>{let u=/^([ms])\.(\d+)\./u.exec(d.key),h=Number(u?.[2]);return u&&h>=wt?[{...d,id:h,kind:u[1]==="m"?"members":"snaps"}]:[]}),s=r.filter(d=>d.key.endsWith(".own")&&d.value!==!0).map(d=>d.id);if(s.length&&!this.planner.disableCards(s))return!1;s.length&&(e=e.filter(d=>!r.some(u=>s.includes(u.id)&&u.key===d.key)));for(let d of r.filter(u=>!s.includes(u.id))){let u=this.planner.cardById(d.id);if(!u)throw new Error("planner-card-missing");this.temporary.has(d.kind,d.id)||this.planner.restoreCards([u])}let i=e.filter(d=>this.planner.owns(d.key,d.value));if(!this.planner.write(i))return!1;let a=e.filter(d=>!i.includes(d)),o=d=>this.temporary.ownsKey(d)&&(!t||Number(d.split(".")[1])>=wt),c=a.filter(d=>o(d.key)),l=a.filter(d=>!o(d.key));if(l.length&&this.store.set(l),this.temporary.apply(c))for(let d of this.planner.cards)c.some(u=>u.key.startsWith(`${d.kind==="members"?"m":"s"}.${d.id}.`))&&this.planner.saveGrowth(d.kind,d.id);return(c.length||i.length)&&this.refreshTemporaryView(),!0}catch{return this.error=this.t("saveRejected","That value cannot be saved."),this.requestUpdate(),!1}}refreshTemporaryView(){this.snapshot&&(this.view=At(this.temporary.merge(this.planner.merge(this.snapshot.entries)))),this.requestUpdate()}removeTemporary(e,t){if(this.planner.cardById(t)?.active){this.planner.deactivate("card",t);return}this.temporary.remove(e,t)&&this.refreshTemporaryView()}saveTemporary(e,t){return t>=wt||!this.write(this.temporary.changes(e,t),!0)?!1:(this.removeTemporary(e,t),this.notice=this.t("temporarySaved","Saved to My cards"),!0)}applyPlanningData(){if(!this.publicData)return;this.engine?.cancel();let e=this.catalog?.visuals,t=as(this.publicData,this.planner.document,r=>this.catalog?.characterFace(r)??"");t!==this.data&&(this.catalog?.dispose(),this.data=t,this.master=Sn(t),this.catalog=new En(this,t,this.master),e&&this.catalog.setVisuals(e),this.engine?.dispose(),this.engine=new kn(t,()=>this.requestUpdate()),this.engine.prefetch(this.searchSettings.songs),this.requestUpdate())}readBuildPreferences(){let e=this.view?.prefs[bi.slice(5)],t=e&&typeof e=="object"?e:{},r=t.scopedSongAttribute!==!0&&(t.challengeRules||t.route==="challenge"||t.farming?.play==="challenge")?this.challengeSongType(t.eventId??null):void 0;return On(t,r)}restorePlanningPreferences(){this.settings=this.readBuildPreferences(),this.arena.restore(),this.songComparison.restore(),this.requestUpdate()}restoreDefaultOptions(){if(!this.store)return;if(this.confirmReset=!1,!this.planner.clearPreferenceOverrides(Rc)){this.error=this.t("saveRejected","That value cannot be saved."),this.requestUpdate();return}this.resetTasks(),this.expanded.clear(),this.pt.showIssues=!1,this.songComparison.submitted=!1,this.requiredPicker=null,this.excludedPicker=null,this.buildMode="automatic",this.requestedArenaLeague=0;let e=new URL(location.href);e.searchParams.has("league")&&(e.searchParams.delete("league"),history.replaceState(history.state,"",e));let t=Rc.filter(r=>this.persistentView?.prefs[r.slice(5)]!=null).map(r=>({key:r,value:null}));this.write(t),this.refreshTemporaryView(),this.restorePlanningPreferences(),this.engine?.prefetch(this.searchSettings.songs),this.pt.restore()}renderResetOptions(){if(!this.confirmReset)return k;let e=()=>{this.confirmReset=!1,this.requestUpdate()},t=this.t("resetOptions","Restore default settings");return p`
      <dialog class="dialog" aria-labelledby="tb-reset-options-title" ${ie(e)}>
        <header class="dialog__header"><h2 id="tb-reset-options-title">${t}</h2></header>
        <div class="dialog__body">
          <p>
            ${this.t("resetOptionsConfirm","Team-building options will return to their defaults. Your cards, saved teams and account bonuses will be kept.")}
          </p>
        </div>
        <footer class="dialog__actions">
          <button class="button button--text" type="button" @click=${e} autofocus>
            ${this.common("common.actions.cancel","Cancel")}
          </button>
          <button class="button" type="button" @click=${()=>this.restoreDefaultOptions()}>${t}</button>
        </footer>
      </dialog>
    `}updateSettings(e){if(this.tab==="arena"){this.arena.updateBuild(e);return}let t=this.tab==="pt"&&e.rewardMode!==void 0&&e.rewardMode==="plan"!=(this.settings.rewardMode==="plan");if(t&&this.saveScroll(),this.settings={...this.settings,...e},this.engine?.prefetch(this.searchSettings.songs),Object.keys(e).some(r=>r!=="required")){let{required:r,...s}=this.settings;this.write([{key:bi,value:s}])}this.requestUpdate(),t&&(this.submitted=!1,this.restoreScroll())}updateFarming(e){let t={...this.settings.farming,...e},r=this.settings.rewardMode==="plan"?"plan":vt({...this.settings,farming:t}).rewardMode;r!==this.settings.rewardMode&&(this.cancel(),this.pt.showIssues=!1),this.updateSettings({farming:t,rewardMode:r})}openSongComparison(e,t){t&&rs(t.goal)===null&&this.songComparison.update({songRules:t.songRules}),e&&(no(this),this.manual=structuredClone(e),this.manualResults=null),this.slotPicker=null,this.setTab("song-comparison")}scrollPositions=new Map;scrollScope(){return`${this.tab}:${this.tab==="pt"?this.resultScope:this.tab==="build"?this.buildMode:""}`}saveScroll(){this.scrollPositions.set(this.scrollScope(),{main:this.closest("#main-content")?.scrollTop??0,config:this.querySelector(".tb-config-body")?.scrollTop??0})}async restoreScroll(e=!0){let t=this.scrollScope();if(await this.updateComplete,await Promise.all([...this.querySelectorAll("md-outlined-select, md-outlined-text-field, md-slider")].map(a=>a.updateComplete)),await new Promise(a=>requestAnimationFrame(()=>a())),t!==this.scrollScope())return;let r=this.scrollPositions.get(t),s=this.closest("#main-content"),i=this.querySelector(".tb-config-body");s&&(s.scrollTop=r?.main??0),i&&(i.scrollTop=r?.config??0),e&&this.querySelector(".tb-tabpanel")?.focus({preventScroll:!0})}renderBuildMode(){return F({label:this.t("buildMode","Team building"),value:this.buildMode,options:[{value:"automatic",label:this.t("automaticTeam","Find a team"),icon:"auto_awesome"},{value:"manual",label:this.t("manualTeam","Build a team by hand"),icon:"edit_square"}],onSelect:e=>{this.saveScroll(),this.buildMode=e,this.submitted=!1,this.requestUpdate(),this.restoreScroll()}})}setTab(e,{focusPanel:t=!0}={}){if(this.tab===e)return;this.songPicker?.recommendationRequest?.abort(),this.songPicker=null,this.running&&(this.tab==="arena"||e==="arena")&&this.cancel(),this.slotPicker=null,this.saveScroll(),this.boxQuickEntry=!1,["build","arena","pt","song-comparison"].includes(e)&&(this.lastTaskTab=e),this.tab=e,this.submitted=!1;let r=new URL(location.href);e==="build"?r.searchParams.delete("tab"):r.searchParams.set("tab",e),e!=="arena"&&r.searchParams.delete("league"),history.replaceState(history.state,"",r),this.requestUpdate(),this.restoreScroll(t)}engineCards(){if(!this.master||!this.view)return{members:[],snaps:[]};let e=this.tab==="arena"?this.searchSettings:this.settings,t=e.scope==="theoretical"?{members:[...this.master.members.values()].map(d=>({key:`m${d.id}`,cardId:d.id,...Ae(this.master,d)})),snaps:[...this.master.snaps.values()].map(d=>({key:`s${d.id}`,cardId:d.id,...Me(this.master,d)}))}:nt(this.view),r=this.master,s=d=>{let u=r.members.get(d);if(!u)return!1;let h=Gt(this.data.members[String(d)]);return h.active===!1||e.scope==="theoretical"&&h.active!==!0&&!Jr("cards",this.data.members[String(d)],String(d))?!1:(!e.attributes.length||e.attributes.includes(u.cardType))&&(!e.bands.length||e.bands.includes(u.bandId))&&Ur(u.rarity,e.minRarity)},i=d=>{let u=r.snaps.get(d);if(!u)return!1;let h=Gt(this.data.snapshots[String(d)]);return h.active===!1||e.scope==="theoretical"&&h.active!==!0&&!Jr("support-cards",this.data.snapshots[String(d)],String(d))?!1:(!e.attributes.length||e.attributes.includes(u.cardType))&&Ur(u.rarity,e.minRarity)},a=new Set([...e.scope==="theoretical"?[]:[...this.view.members.values()].filter(d=>d.lock&&d.use).map(d=>d.cardId),...e.bindings.map(([d])=>d),...e.required.members,...e.leader===null?[]:[e.leader]]),o=new Set([...e.scope==="theoretical"?[]:[...this.view.snaps.values()].filter(d=>d.lock&&d.use).map(d=>d.cardId),...e.bindings.flatMap(([,d])=>d===null?[]:[d]),...e.required.snaps]),c=new Set(e.scope==="theoretical"?e.theoreticalExcluded.members:[]),l=new Set(e.scope==="theoretical"?e.theoreticalExcluded.snaps:[]);return{members:t.members.filter(d=>!c.has(d.cardId)&&Gt(this.data.members[String(d.cardId)]).active!==!1&&(this.tab!=="arena"||r.members.get(d.cardId)?.bandId===this.arena.bandId&&Se(this.data,"members",d.cardId)&&et(this.data.members[String(d.cardId)]?.catalogMetadata??{}))&&(a.has(d.cardId)||s(d.cardId))),snaps:t.snaps.filter(d=>!l.has(d.cardId)&&Gt(this.data.snapshots[String(d.cardId)]).active!==!1&&(this.tab!=="arena"||Se(this.data,"snapshots",d.cardId)&&et(this.data.snapshots[String(d.cardId)]?.catalogMetadata??{}))&&(o.has(d.cardId)||i(d.cardId)))}}playerInput(e=this.searchSettings){return e.scope==="theoretical"&&e.maxAccountBonuses?Vi(this.master,this.view.player):this.view.player}manualInputs(e=this.manual,t=this.settings){let r=this.view?nt(this.view,!0):{members:[],snaps:[]},s=t.scope==="theoretical",i=s&&t.maxAccountBonuses,a=e.members.flatMap(c=>{let l=r.members.find(h=>h.cardId===c),d=c===null?void 0:this.master?.members.get(c);if(d&&i)return[{key:`m${c}`,cardId:d.id,...Ae(this.master,d)}];if(l)return[l];let u=c===null?void 0:this.planner.cardById(c);return d&&u?[{key:`m${c}`,cardId:d.id,...Ae(this.master,d),...u.growth}]:d&&s?[{key:`m${c}`,cardId:d.id,...Ae(this.master,d)}]:[]}),o=e.snaps.flatMap(c=>{let l=r.snaps.find(h=>h.cardId===c),d=c===null?void 0:this.master?.snaps.get(c);if(d&&i)return[{key:`s${c}`,cardId:d.id,...Me(this.master,d)}];if(l)return[l];let u=c===null?void 0:this.planner.cardById(c);return d&&u?[{key:`s${c}`,cardId:d.id,...Me(this.master,d),...u.growth}]:d&&s?[{key:`s${c}`,cardId:d.id,...Me(this.master,d)}]:[]});return{members:a,snaps:o,player:this.view?this.playerInput(t):void 0,unknownPolicy:i?"max":t.unknownPolicy}}manualGoal(){let e=this.compatibleSettings({...this.settings,challengeRules:this.settings.manualChallengeRules},this.settings.manualScoreMode);return this.settings.manualScoreMode==="gekiso"?{...this.gekisoGoal({...e,gekisoPlacementMode:"rank",minComboBonus:1}),criterion:"mean"}:{kind:"score",songs:e.songs,criterion:"mean",play:{frameRate:e.frameRate,...e.playMode==="ap"?{great:0,good:0,bad:0,miss:0}:{great:e.great/100,good:e.good/100,bad:0,miss:e.miss/100,missEvery:e.missEvery||0}},challengeEventId:e.challengeRules?e.eventId:null}}manualConditions(){return JSON.stringify([this.snapshot?.owner,this.data?.identity,this.data?.crossServer?.identities,this.view&&nt(this.view,!0),this.settings.scope,this.view&&this.playerInput(this.settings),this.settings.unknownPolicy,this.manualGoal(),this.songRules(this.manualGoal())])}compareTeam(e){ro(this,e),this.manual={members:e.members.map(He),snaps:e.snaps.map(t=>t?He(t):null),leader:0},this.updateSettings({...e.song?{songs:[e.song]}:{},manualScoreMode:this.resultInputs?.goal.kind==="gekiso"?"gekiso":"score"}),this.manualResults=null,this.manualBaseline=null,this.manualPin=!0,this.buildMode="manual",this.setTab("build")}manualContext(){return JSON.stringify([this.snapshot?.owner,this.data?.identity,this.data?.crossServer?.identities,this.manual,this.manualInputs(),this.manualGoal(),this.songRules(this.manualGoal())])}manualSuggestionContext(){return JSON.stringify([this.manualContext(),this.engineCards(),this.view&&nt(this.view,!0)])}get workspaceSettings(){let e=this.tab==="arena"?this.arena.settings:this.tab==="pt"&&this.settings.rewardMode!=="plan"?vt(this.settings):this.settings;return this.tab==="teams"||this.tab==="build"&&this.buildMode==="manual"?{...e,goal:e.manualScoreMode,challengeRules:e.manualChallengeRules}:this.tab==="pt"?{...e,goal:e.rewardMode==="plan"?"plan":"event"}:e}get searchSettings(){return this.compatibleSettings(this.workspaceSettings)}get settlementMaster(){let e=this.searchSettings;return this.master?Va(this.master,e.eventId,e.route==="challenge"):null}challengeSongType(e){if(e===null||!this.catalog)return;let t=this.catalog.challengeSongs(e),r=t[0];return r?t.every(s=>s.musicType===r.musicType)?r.musicType:0:void 0}challengeSongTypeForSettings(e=this.workspaceSettings){return(e.goal==="event"?e.route==="challenge":(e.goal==="score"||e.goal==="power"&&e.powerSong)&&e.challengeRules)?this.challengeSongType(e.eventId):void 0}songRules(e){if(this.tab==="arena")return;if(this.tab==="song-comparison")return vn(this.songComparison.settings.songRules,!0);if(e!==void 0){if(!e||e.kind==="potential"||e.kind==="power"&&!e.song||e.kind==="event"&&e.route==="skip")return;let i=rs(e),a=i===null?this.settings.songRules:{...Dr,musicType:this.challengeSongType(i)??0};return vn(a,e.kind==="gekiso"||e.kind==="event"&&!!e.gekiso)}let t=this.workspaceSettings;if(t.goal==="potential"||t.goal==="power"&&!t.powerSong||t.goal==="event"&&t.route==="skip")return;let r=this.challengeSongTypeForSettings(t),s=r===void 0?t.songRules:{...Dr,musicType:r};return vn(s,t.goal==="gekiso"||t.goal==="event"&&t.ptMode==="gekiso")}hasMission(e,t=this.effectiveSettings().songs){let r=this.tab==="arena"?this.arena.rule:this.songRules();return r?r.missions.some((s,i)=>s===0?t.some(a=>Nr(this.catalog.song(a.songId))[i]===e):["","Combo","Luck","JustCount"][s]===e):t.some(s=>Nr(this.catalog.song(s.songId)).includes(e))}hasComboSongs(e=this.effectiveSettings().songs){return this.hasMission("Combo",e)}effectiveSettings(e){return this.compatibleSettings(this.tab==="arena"?this.arena.settings:this.settings,e)}compatibleSettings(e,t){if((t==="recommendation"||this.tab==="pt"&&e.rewardMode!=="plan"&&!t)&&(e=vt(e)),!this.catalog)return e;let r=t??(this.tab==="pt"?e.rewardMode:this.tab==="teams"||this.tab==="build"&&this.buildMode==="manual"?e.manualScoreMode:e.goal),s=new Set(this.catalog.challengeSongs(e.eventId).map(u=>u.liveMusicId)),i=r==="event"?e.route==="challenge":(r==="score"||r==="power")&&e.challengeRules,a=r==="event"||r==="plan"||r==="recommendation";["event","recommendation"].includes(r)||(e={...e,manualEventEnabled:!1});let o=i?s:a&&!e.manualEventEnabled&&e.eventId!==null?new Set(this.catalog.normalEventSongIds(e.eventId)):void 0,c=u=>this.catalog.difficultyRows(u.songId).some(h=>Number(h.difficulty)===u.difficulty),l=e.songs.filter(u=>c(u)&&(!o||o.has(u.songId))),d=r==="power"?e.powerSong?l.slice(0,1):[]:r==="potential"||r==="event"&&e.route==="skip"?[]:l;return{...e,...e.aggregation==="mean"&&(r==="score"||r==="gekiso")?{criterion:"mean",scoreTarget:"none",gekisoPlacementMode:"rank"}:{},minComboBonus:this.hasComboSongs(d)?e.minComboBonus:1,just:this.hasMission("JustCount",d)?e.just:100,ptJust:this.hasMission("JustCount",d)?e.ptJust:100,justWindowMs:this.hasMission("JustCount",d)&&e.justWindowMode!=="off"?Ea(e,this.data??null):0,songs:d,planChallengeSongs:e.planChallengeSongs.filter(u=>c(u)&&s.has(u.songId))}}errorReason(e){let t=e instanceof Error?e.message:String(e);return t==="engine-init-timeout"?this.t("engineInitTimeout","Engine preparation timed out"):t==="engine-start-timeout"?this.t("engineStartTimeout","Engine start timed out"):t==="engine-message-error"||t==="engine-invalid-reply"?this.t("engineMessageError","Engine communication failed"):t.startsWith("native input word search budget exceeded")||t==="native timing search budget exceeded"?this.t("timingIncomplete","Timing calculation did not finish"):t.startsWith("unreachable native judgement")||t==="unreachable native input sequence"?this.t("timingUnreachable","The judgement pattern cannot be reached"):t.startsWith("missing native")?this.t("timingDataMissing","Timing data is missing"):t==="gekiso-members-total"?this.t("missionMemberTotalTooHigh","Member minimums must add up to 5 or less"):t==="gekiso-members-input"?this.t("invalidMissionMembers","Enter a member count from 0 to 5"):t==="just-window-input"?this.t("invalidCombo","Enter a positive integer"):t==="combo-input"||t==="luck-samples-input"?this.t("invalidIntegerRange","Enter an integer from {min} to {max}",{min:t==="combo-input"?1:0,max:Ft}):t==="just-window-timing"?this.t("justWindowTiming","JUST tap timing data is missing"):t==="just-window-coverage-input"?this.t("justCoverageInvalid","Enter coverage from 0% to 100% and nonnegative durations"):t==="just-window-random"?this.t("justWindowRandom","Window targets are unavailable for this random skill"):t}requestUpdate(...e){this.issuesUpdate=null,this.limitsUpdate=null,super.requestUpdate(...e)}issuesUpdate=null;issuesCache=new Map;limitsUpdate=null;limitsValue=null;limitsCharts=null;limitsCache=null;constraintLimits(){let e=this.updateComplete;if(this.limitsUpdate===e)return this.limitsValue;if(this.limitsUpdate=e,this.limitsValue=null,!this.master||!this.data)return null;let t=this.searchSettings,r=this.tab==="pt"&&t.rewardMode==="recommendation"?this.pt.request():this.request()??(t.goal==="gekiso"?this.request({...this.gekisoGoal(t),...t.arena?{arena:t.arena}:{}}):null);if(!r)return null;let{minBonusPercent:s,...i}=r.constraints,a=r.goal.kind==="gekiso"?r.goal:r.goal.kind==="event"?r.goal.gekiso:void 0,o="songs"in r.goal&&t.justWindowMode!=="off"?r.goal.songs.filter(u=>this.hasMission("JustCount",[u])).slice(0,4):[],c=JSON.stringify(o);if(this.engine&&(this.limitsCharts?.engine!==this.engine||this.limitsCharts.key!==c||!this.limitsCharts.rows.length&&this.limitsCharts.mode!==t.justWindowMode)){let u=this.limitsCharts={engine:this.engine,key:c,mode:t.justWindowMode,rows:[]};o.length&&u.engine.constraintCharts(o).then(h=>{this.limitsCharts!==u||this.engine!==u.engine||!this.isConnected||(u.rows=h,this.requestUpdate())})}let l=this.limitsCharts?.engine===this.engine?this.limitsCharts.rows:[],d=JSON.stringify([r.members,r.snaps,r.unknownPolicy,i,a?.minComboBonus,a?.minJustWindowMs,a?.justWindow,"songs"in r.goal?r.goal.songs:null,r.songRules,r.goal.kind==="gekiso"?[r.goal.arena?.bandId,r.goal.arena?.missions]:null,r.goal.kind==="event"?[r.goal.eventId,r.goal.eventEffects,r.goal.measure,r.goal.rewardPlan]:null]);return(this.limitsCache?.master!==this.master||this.limitsCache.key!==d||this.limitsCache.charts!==l)&&(this.limitsCache={master:this.master,key:d,charts:l,value:ma(this.master,this.data,r,l)}),this.limitsValue=o.length&&!l.length?{...this.limitsCache.value,justMs:null}:this.limitsCache.value}inputIssues(e=!1){let t=this.updateComplete;this.issuesUpdate!==t&&(this.issuesUpdate=t,this.issuesCache.clear());let r=this.issuesCache.get(e);if(r)return r;let s=this.searchSettings,i=[],a=(w,x,v,b=!1)=>i.push({field:w,message:this.t(x,v),validation:b}),o=(w,x)=>i.push({field:w,validation:!0,message:this.t("invalidIntegerRange","Enter an integer from {min} to {max}",{min:x,max:Ft})});this.tab==="arena"&&i.push(...this.arena.issues());let c=this.engineCards();if(c.members.length?new Set(c.members.flatMap(w=>this.master.members.get(w.cardId)?.characterId??[])).size<5&&a("tb-cards","fiveCharactersRequired","Add cards for at least five different characters."):a("tb-cards","needCardsShort","Choose cards"),s.goal==="event"&&s.manualEventEnabled&&this.master){let w=Kr(this.master,s.manualEvent).issue;w&&a("tb-manual-"+w,"manualEvent.need."+w,"Complete the manual event conditions")}if(e||((s.goal==="event"||s.goal==="plan"||(s.goal==="score"||s.goal==="power")&&s.challengeRules)&&s.eventId===null&&!s.manualEventEnabled&&a("tb-event","needEvent","Choose an event"),(s.goal==="score"||s.goal==="gekiso"||s.goal==="plan"||s.goal==="power"&&s.powerSong||s.goal==="event"&&s.route!=="skip")&&!s.songs.length&&a("tb-songs","needSongs","Choose playable charts"),s.goal==="plan"&&!s.planChallengeSongs.length&&a("tb-challenge-songs","needChallengeSongs","Choose challenge charts"),s.goal==="score"&&s.scoreTarget!=="none"&&!(s.scoreTarget==="at-least"&&s.targetRank!==null)&&!(s.targetScore&&Number.isFinite(s.targetScore)&&s.targetScore>0)&&a("tb-target-score","needTargetScore","Enter a positive target score"),s.goal==="event"&&!s.rewardPlan&&s.weighted&&!(s.weightPoints>0||s.weightItems>0||s.route==="live"&&s.weightCp>0)&&a("tb-reward-weights","needRewardWeight","Enter at least one positive reward weight")),this.tab==="pt"&&s.rewardMode!=="plan"&&!s.rewardPlan&&s.ptCycle&&s.rewardMode!=="recommendation"){let w=s.farming,x=["solo","gekiso"].includes(w.play)?w.playMode!=="ap"?this.t("playAp","All Perfect"):w.requireGrowth?w.includeMemory?`${this.t("farm.memory","Memories")}: ${this.t("farm.excluded","Excluded")}`:w.weighted?this.t("farm.singleReward","A single reward target"):w.fullRanking?this.t("farm.primaryRanking","Primary reward ranking"):w.k!==1?`${this.t("resultCount","Results")}: 1`:this.t("noLimit","Until proven"):this.t("farm.requireGrowth","Complete before calculating"):this.t("routeLive","Normal live");i.push({field:"tb-reward-scope",message:this.t("farm.conversionConflict","CP conversion requires {condition}",{condition:x})})}s.goal==="event"&&s.ptMode==="gekiso"&&s.route==="live"&&s.rewardRoomMode==="battle"&&(!Number.isInteger(s.rewardPlayers)||s.rewardPlayers<1||s.rewardPlayers>5||s.rewardOtherScore!==null&&(!Number.isInteger(s.rewardOtherScore)||s.rewardOtherScore<0||s.rewardOtherScore>2147483647))&&a("tb-reward-room","rewardPlan.invalidRoom","Enter a valid room size and score"),s.goal==="event"&&s.rewardPlan&&!es(Yr(s.rewardPlan,s.route==="challenge"),{songs:s.planChallengeSongs,consumption:s.challengePoints})&&a("tb-reward-plan","rewardPlan.invalidRate","Enter conversion rates and challenge charts");let l=s.goal==="gekiso"||s.goal==="event"&&s.ptMode==="gekiso"&&s.route==="live";if(l&&s.justWindowMode!=="off"&&this.hasMission("JustCount",s.songs)&&(!Ra(s)||!Number.isFinite(s.justWindowMs)||s.justWindowMs<=0)&&a("tb-just-window","justWindowInvalid","Enter zero or a positive window value",!0),l&&s.justWindowMode==="partial"&&(!Number.isFinite(s.justCoveragePercent)||s.justCoveragePercent<0||s.justCoveragePercent>100||!Number.isFinite(s.justDurationSeconds)||s.justDurationSeconds<0||s.justDurationSeconds*1e3>Ft||!Number.isFinite(s.justContinuousSeconds)||s.justContinuousSeconds<0||s.justContinuousSeconds*1e3>Ft)&&a("tb-just-coverage","justCoverageInvalid","Enter coverage from 0% to 100% and nonnegative durations",!0),s.goal==="gekiso"&&!s.minMissionMembers.every(w=>Number.isInteger(w)&&w>=0&&w<=5)?a("tb-mission-members","invalidMissionMembers","Enter a member count from 0 to 5",!0):s.goal==="gekiso"&&s.minMissionMembers.reduce((w,x)=>w+x,0)>5&&a("tb-mission-members","missionMemberTotalTooHigh","Member minimums must add up to 5 or less",!0),s.goal==="event"&&s.minBonus!==null&&(!Number.isFinite(s.minBonus)||s.minBonus<0)&&a("tb-min-bonus","invalidBonus","Enter zero or a positive event bonus",!0),l&&!Ut(s.minComboBonus,1)&&o("tb-combo",1),s.goal==="gekiso"&&s.gekisoSamplingMode==="manual"&&!Ut(Je(s),1)&&o("tb-luck-samples",1),s.goal==="event"&&s.ptMode==="gekiso"&&s.route==="live"&&s.ptSamplingMode==="manual"&&!Ut(Je(s,"rewards"),1)&&o("tb-luck-samples",1),!e&&s.goal==="gekiso"&&s.gekisoPlacementMode==="opponents"){let w=ns(s.gekisoOpponents);w.empty&&a("tb-placement","needOpponents","Enter opponent scores"),w.invalid.some(Boolean)&&a("tb-placement","invalidOpponents","Use up to four positive scores per range"),s.songs.some(x=>this.hasMission("Luck",[x]))&&a("tb-songs","opponentsLuck","This chart does not support opponent scores")}let d=new Set([...s.required.members,...s.scope==="box"?[...this.view?.members.values()??[]].filter(w=>w.use&&w.lock).map(w=>w.cardId):[],...s.bindings.map(([w])=>w),...s.leader===null?[]:[s.leader]]),u=c,h=new Set(u.members.map(w=>w.cardId)),g=new Set(u.snaps.map(w=>w.cardId)),f=[...d].map(w=>this.master?.members.get(w)?.characterId);(d.size>5||new Set(f).size!==f.length)&&a("tb-cards","fixedConflict","Fixed members must be at most five different characters");let m=new Set([...s.required.snaps,...s.scope==="box"?[...this.view?.snaps.values()??[]].filter(w=>w.use&&w.lock).map(w=>w.cardId):[],...s.bindings.flatMap(([,w])=>w===null?[]:[w])]);if(([...d].some(w=>!h.has(w))||[...m].some(w=>!g.has(w)))&&a("tb-cards","fixedUnavailable","A fixed card is unavailable in this selection"),(m.size>5||new Set(s.bindings.map(([w])=>w)).size!==s.bindings.length||new Set(s.bindings.flatMap(([,w])=>w===null?[]:[w])).size!==s.bindings.filter(([,w])=>w!==null).length)&&a("tb-cards","fixedBindingConflict","Fixed Snapshots or bindings conflict"),s.noSnaps&&m.size&&a("tb-cards","fixedSnapConflict","Remove fixed Snapshots or allow Snapshots"),this.master&&(s.minBonus!==null&&s.goal==="event"||l&&(s.minComboBonus>1||s.justWindowMs>0)||s.goal==="gekiso"&&s.minMissionMembers.some(Boolean))&&(this.tab==="pt"&&s.rewardMode==="recommendation"?this.pt.request():this.request())){let x=this.constraintLimits(),v=l&&x?.memberConditionsUnreachable&&(s.minMissionMembers.some(Boolean)||s.minComboBonus>1&&s.justWindowMs>0);if(v){let b=[...s.minMissionMembers.some(Boolean)?["tb-mission-members"]:[],...s.minComboBonus>1?["tb-combo"]:[],...s.justWindowMs>0?["tb-just-window",...s.justWindowMode==="partial"?["tb-just-coverage"]:[]]:[]];i.some(S=>b.includes(S.field))||i.push({field:b[0],fields:b,validation:!0,message:this.t("conditionsUnreachable","These conditions cannot be met together")})}s.minBonus!==null&&x?.eventBonus!=null&&Math.floor(s.minBonus*100+.5)>Math.round(x.eventBonus*100)&&a("tb-min-bonus","minBonusUnreachable","Minimum event bonus cannot be reached",!0),l&&!v&&Ut(s.minComboBonus,1)&&x?.combo!==null&&x?.combo!==void 0&&s.minComboBonus>x.combo&&a("tb-combo","minComboUnreachable","Minimum base COMBO BONUS cannot be reached",!0),l&&!v&&x?.justMs!==null&&x?.justMs!==void 0&&s.justWindowMs>x.justMs&&i.push({field:"tb-just-window",fields:["tb-just-window",...s.justWindowMode==="partial"?["tb-just-coverage"]:[]],validation:!0,message:this.t("minJustWindowUnreachable","Minimum JUST window cannot be reached")})}let y=this.tab==="pt"&&s.rewardMode==="recommendation"?this.pt.noFeasibleTeams:this.results?.stopReason==="complete"&&this.results.results.length>0&&this.results.results.every(w=>w.proven&&!w.hits.length)&&!this.results.overall.length&&!this.stale;if(!i.length&&y){let w=[...s.arena?.objective==="sections"?["tb-section-loss"]:[],...l&&s.minComboBonus>1?["tb-combo"]:[],...l&&s.justWindowMs>0?["tb-just-window"]:[],...s.goal==="gekiso"&&s.minMissionMembers.some(Boolean)?["tb-mission-members"]:[],...s.goal==="event"&&s.minBonus!==null?["tb-min-bonus"]:[],"tb-cards"];i.push({field:w[0],fields:w,validation:!0,message:this.t("conditionsUnreachable","These conditions cannot be met together")})}return this.issuesCache.set(e,i),i}async focusInput(e){e==="tb-min-bonus"&&(this.expanded.add("candidates"),this.requestUpdate(),await this.updateComplete),e==="tb-luck-samples"&&(this.expanded.add(this.tab==="pt"?"farm-advanced":`sampling-${this.tab}-${this.buildMode}`),this.requestUpdate(),await this.updateComplete),e==="tb-manual-cards"&&(this.expanded.add("manual-pickups"),this.requestUpdate(),await this.updateComplete),this.querySelector(`#${e}`)?.closest(".tb-results-column")?(this.conditionsOpen&&this.closeConditions(),await this.updateComplete):await this.ensureConditionsVisible();let t=this.querySelector(`#${e}`);for(let s=t?.parentElement;s&&s!==this;s=s.parentElement)s instanceof HTMLDetailsElement&&(s.open=!0);if(t?.scrollIntoView({block:"center"}),e==="tb-mission-members"){t?.querySelector("[data-tb-role-reset]:not([disabled]), [role=radio]:not([disabled])")?.focus({preventScroll:!0});return}((t?.matches("md-outlined-text-field, md-outlined-select, input, button")?t:t?.querySelector(".tb-songs__add, input, md-outlined-text-field, md-outlined-select, button"))??t)?.focus({preventScroll:!0})}revealFocusedControl(e){let t=e.target;if(!e.composedPath()[0].matches(":focus-visible")||t.closest("dialog")||!t.closest(".tb-config, .sc, .tb-results-column"))return;let r=this.closest("#main-content");if(!r)return;let s=t.closest(".tb-config-body"),i=s&&getComputedStyle(s).overflowY==="auto"?s:r,a=i.getBoundingClientRect(),o=r.getBoundingClientRect(),c=this.querySelector(".tb-header").getBoundingClientRect(),l=t.getBoundingClientRect(),d=s?.parentElement?.querySelector(".tb-operation"),u=d&&!d.contains(t)?d.getBoundingClientRect():null,h=Math.max(a.top,o.top,c.bottom),g=Math.min(a.bottom,o.bottom,u?.top??1/0);l.height>g-h||(l.top<h?i.scrollTop+=l.top-h:l.bottom>g&&(i.scrollTop+=l.bottom-g))}gekisoGoal(e){return{kind:"gekiso",songs:e.songs,criterion:e.criterion,accuracy:{great:e.playMode==="ap"?0:e.great/100,just:e.just/100,missEvery:e.playMode==="ap"?0:e.missEvery||0},rank:e.gekisoPlacementMode==="opponents"?1:e.gekisoRanks[0],...e.gekisoPlacementMode==="rank"?{ranks:[...e.gekisoRanks]}:{},minComboBonus:e.minComboBonus,...bt(e),...e.gekisoPlacementMode==="opponents"?{opponents:ns(e.gekisoOpponents).ranges}:{},seeds:Je(e)}}goal(e=this.searchSettings){let t={frameRate:e.frameRate,...e.playMode==="ap"?{great:0,good:0,bad:0,miss:0}:{great:e.great/100,good:e.good/100,bad:0,miss:e.miss/100,missEvery:e.missEvery||0}},r=e.challengeRules&&e.eventId!==null?e.eventId:null;if((e.goal==="score"||e.goal==="power")&&e.challengeRules&&r===null)return null;switch(e.goal){case"power":return e.powerSong&&!e.songs.length?null:{kind:"power",song:e.powerSong?e.songs[0]??null:null,challengeEventId:r};case"score":if(!e.songs.length)return null;let s=e.scoreTarget==="at-least"&&e.targetRank!==null?{kind:"at-least",rank:e.targetRank}:e.scoreTarget!=="none"&&e.targetScore&&e.targetScore>0?{kind:e.scoreTarget,score:e.targetScore}:void 0;return e.scoreTarget!=="none"&&!s?null:{kind:"score",songs:e.songs,criterion:e.criterion,play:{...t,...e.criterion==="max"&&e.scoreTarget==="none"&&e.scoreTiming!=="nominal"?{cumulativeTiming:e.scoreTiming}:{}},challengeEventId:r,...s?{target:s}:{}};case"gekiso":return e.songs.length?{...this.gekisoGoal(e),...e.arena?{arena:e.arena}:{}}:null;case"event":if(e.eventId===null||e.route!=="skip"&&!e.songs.length||!e.rewardPlan&&e.weighted&&!(e.weightPoints>0||e.weightItems>0||e.route==="live"&&e.weightCp>0))return null;if(e.rewardPlan||e.weighted){let i=Yr(e.rewardPlan??ga(e),e.route==="challenge"),a=es(i,{songs:e.planChallengeSongs,consumption:e.challengePoints},e.route==="skip");return a?(e.route==="skip"&&delete a.minimumRank,{kind:"event",rewardPlan:a,measure:a.maximizeBonus?i.bonus:i.primary,...e.ptMode==="gekiso"&&e.route==="live"?{rewardRoom:e.rewardRoomMode==="solo"?{mode:"solo"}:{mode:"battle",players:e.rewardPlayers,...e.rewardOtherScore===null?{}:{otherAverageScore:e.rewardOtherScore}}}:{},ranking:e.ptMode==="gekiso"&&e.route==="live"?"pt-only":"primary",route:e.route,eventId:e.eventId,songs:e.route==="skip"?[]:e.songs,consumption:e.route==="challenge"?e.challengePoints:e.boosts,play:t,...e.ptMode==="gekiso"&&e.route==="live"?{gekiso:{just:e.ptJust/100,luckSamples:Je(e,"rewards"),rank:1,minComboBonus:e.minComboBonus,...bt(e)}}:{}}):null}return{kind:"event",...e.ptMode==="gekiso"&&e.route==="live"?{rewardRoom:e.rewardRoomMode==="solo"?{mode:"solo"}:{mode:"battle",players:e.rewardPlayers,...e.rewardOtherScore===null?{}:{otherAverageScore:e.rewardOtherScore}}}:{},measure:e.weighted?e.weightPoints>0?"points":e.weightItems>0?"items":"challenge-points":e.measure,...e.weighted?{weights:{points:e.weightPoints,items:e.weightItems,challengePoints:e.route==="live"?e.weightCp:0}}:{},...e.ptMode==="gekiso"&&e.route==="live"?{gekiso:{just:e.ptJust/100,luckSamples:Je(e,"rewards"),rank:1,minComboBonus:e.minComboBonus,...bt(e)}}:{},ranking:e.ptMode==="gekiso"&&e.route==="live"?"pt-only":e.fullRanking?void 0:"primary",route:e.route,eventId:e.eventId,songs:e.route==="skip"?[]:e.songs,consumption:e.route==="challenge"?e.challengePoints:e.boosts,play:t};case"potential":return{kind:"potential",windowSeconds:e.window};case"plan":return e.eventId===null||!e.songs.length||!e.planChallengeSongs.length?null:{kind:"plan",eventId:e.eventId,normalSongs:e.songs,challengeSongs:e.planChallengeSongs,boostsPerLive:e.planBoostsPerLive,boostBudget:e.planBudget,startingChallengePoints:e.planStartingCp,challengePointsPerLive:e.challengePoints,play:t}}}get canRecommendCharts(){let e=this.settings;return this.tab==="build"&&this.buildMode==="automatic"&&e.goal==="score"&&e.aggregation!=="mean"&&e.criterion==="mean"&&e.scoreTarget==="none"&&!e.challengeRules}chartRecommendationRequest(e){if(!this.canRecommendCharts)return null;let t=this.compatibleSettings({...this.settings,songs:e});return this.request(this.goal(t),t)}request(e=this.goal(),t=this.searchSettings){if(!e||!this.view||this.tab==="pt"&&t.rewardMode==="event"&&!t.rewardPlan&&t.ptCycle)return null;let r=this.engineCards();if(e.kind==="event"&&t.manualEventEnabled){let o=Kr(this.master,t.manualEvent);if(!o.effects||e.route==="challenge"||t.ptCycle)return null;e={...e,eventId:t.manualEvent.templateId,eventEffects:o.effects}}let s=t.scope==="theoretical",i=this.playerInput(t),a=o=>[...new Set([...s?[]:[...(o==="m"?this.view.members:this.view.snaps).values()].filter(c=>c.lock&&c.use).map(c=>`${o}${c.cardId}`),...(o==="m"?t.required.members:t.required.snaps).map(c=>`${o}${c}`)])];return Ii({songRules:this.songRules(e),...t.aggregation==="mean"&&this.tab!=="arena"&&(e.kind==="score"||e.kind==="gekiso"||e.kind==="event"&&e.route!=="skip")?{aggregation:"mean"}:{},members:r.members,snaps:r.snaps,player:this.tab==="pt"&&t.rewardMode!=="plan"&&(!Ln(t.farming).includeMemory||t.rewardMode==="recommendation")?{...i,characterMemory:Object.fromEntries([...this.master?.characters.keys()??[]].map(o=>[o,0])),musicMemory:Object.fromEntries([...this.master?.songs.keys()??[]].map(o=>[o,0]))}:i,unknownPolicy:s?"max":t.unknownPolicy,goal:e,constraints:{requiredMembers:a("m"),excludedMembers:s?t.theoreticalExcluded.members.map(o=>`m${o}`):[],requiredSnaps:a("s"),excludedSnaps:s?t.theoreticalExcluded.snaps.map(o=>`s${o}`):[],leader:t.leader!==null?`m${t.leader}`:null,bindings:t.bindings.map(([o,c])=>[`m${o}`,c===null?null:`s${c}`]),noSnaps:t.noSnaps,...(e.kind==="gekiso"||e.kind==="event"&&e.gekiso)&&Qi(t.skillRoles)?{skillRoles:structuredClone(t.skillRoles),skillRoleMissions:["Combo","Luck","JustCount"].flatMap((o,c)=>this.hasMission(o,t.songs)?[c+1]:[])}:{},minBonusPercent:e.kind==="event"||e.kind==="plan"?t.minBonus:null,...e.kind==="gekiso"&&(this.tab==="arena"||this.buildMode!=="manual")&&t.minMissionMembers.some(Boolean)?{minMissionMembers:[...t.minMissionMembers]}:{}},k:t.k,timeLimitMs:t.timeLimit?t.timeLimit*1e3:null})}activeContext="";runGeneration=0;calculationContext(){let e=this.request();return e&&(e.timeLimitMs=null),JSON.stringify([Ri,this.snapshot?.owner,this.loadedServer,this.data?.identity,this.data?.crossServer?.identities,e])}async run(e=!1){if(this.tab==="pt"&&this.settings.rewardMode==="recommendation"){await this.pt.start(!1);return}this.submitted=!0;let t=this.inputIssues();if(t.length){this.requestUpdate(),await this.updateComplete,this.focusInput(t[0].field);return}if(this.tab==="pt"&&this.settings.rewardMode!=="plan"&&(this.pt.sync(),this.pt.issues.length)){this.pt.showIssues=!0,this.requestUpdate(),await this.updateComplete,await this.pt.focusIssue(this.pt.issues[0]);return}let r=wn(),s=this.request();if(!s||!this.engine||this.running)return;let i=this.acquireTask("build");if(!i)return;let a=this.calculationContext(),o=++this.runGeneration,c=e&&!this.stale,l=!1,d=c?this.resultSession:crypto.randomUUID(),u=structuredClone({...this.searchSettings,unknownPolicy:s.unknownPolicy}),h=structuredClone(s);s.contextKey=a,e&&(s.timeLimitMs=null,this.stale||(s.seeds=this.results?.results.flatMap(m=>m.hits),s.goal.kind!=="plan"&&(s.completed=this.results?.results.filter(m=>m.proven)))),s.deadline=s.timeLimitMs===null?1/0:r+s.timeLimitMs,this.activeContext=a,this.running=!0,this.calculationSubmitted(),this.error="",this.progress={done:0,total:1,started:performance.now()},this.expanded=new Set,this.requestUpdate();let g=m=>{o!==this.runGeneration||a!==this.calculationContext()||(m.stopReason==="error"&&(this.error=this.t("searchFailed","The search failed: {reason}",{reason:this.errorReason(m.error??"engine-error")})),l||(this.resultSession=d,l=!0),this.results=m,this.resultsFor=a,this.resultSettings=u,this.resultInputs=h,u.goal==="event"&&this.tab==="pt"&&(this.farmResultMode="event"),this.resultTab!=="overall"&&!m.results.some(y=>y.song&&`${y.song.songId}:${y.song.difficulty}`===this.resultTab)&&(this.resultTab="overall"),this.requestUpdate())},f=rt(this.t("searching","Searching teams"));try{g(await this.engine.run(s,(m,y,w)=>{o!==this.runGeneration||a!==this.calculationContext()||(this.progress={...this.progress,done:m,total:y,proof:w},this.requestUpdate())},m=>{m.contextKey===a&&g(m.response)})),l&&this.tab==="pt"&&u.goal==="event"&&await this.pt.rememberResult()}catch(m){o===this.runGeneration&&a===this.calculationContext()&&!(m instanceof DOMException&&m.name==="AbortError")&&(this.error=this.t("searchFailed","The search failed: {reason}",{reason:this.errorReason(m)}))}finally{f.finish(),o===this.runGeneration&&(this.activeContext="",this.releaseTask(i),this.progress=null,this.requestUpdate())}}async recommendGrowth(){let e=this.resultInputs?structuredClone(this.resultInputs):null;if(!e||!this.engine||this.running||this.growth?.result===null)return;let t=this.acquireTask("growth");if(!t)return;let r=this.calculationContext();Object.assign(e,{k:1,timeLimitMs:null,deadline:1/0,contextKey:r}),this.growth={context:r,done:0,total:0,result:null},this.requestUpdate();try{let s=await this.teamGrowth.priorities(e,(i,a)=>{!this.ownsTask(t)||this.growth?.context!==r||(this.growth={...this.growth,done:i,total:a},this.requestUpdate())});this.ownsTask(t)&&this.growth?.context===r&&(this.growth={...this.growth,result:s})}catch(s){this.ownsTask(t)&&this.growth?.context===r&&(this.growth=null),this.ownsTask(t)&&!(s instanceof DOMException&&s.name==="AbortError")&&(this.error=this.t("searchFailed","The search failed: {reason}",{reason:this.errorReason(s)}))}this.releaseTask(t),this.requestUpdate()}cancel(){if(this.taskKind==="team-growth"){this.teamGrowth.stop();return}if(this.songComparison.running){this.songComparison.stop();return}this.pt.running?this.pt.stop():this.engine?.cancel()}get stale(){return!!this.results&&(this.tab==="pt"&&this.settings.rewardMode==="recommendation"||this.resultsFor!==this.calculationContext())}renderTabs(){let e=this.view?this.view.members.size+this.view.snaps.size:0,t=[{id:"build",icon:"groups",label:this.t("tabBuild","Build"),count:0},{id:"arena",icon:"swords",label:this.t("arena.tab","GEKISO Arena"),count:0},{id:"song-comparison",icon:"music_note",label:this.t("sc.tab","GEKISO songs"),count:0},{id:"pt",icon:"emoji_events",label:this.t("pt.tab","Event rewards"),count:0},{id:"box",icon:"style",label:this.t("tabBox","My cards"),count:e},{id:"account",icon:"trending_up",label:this.t("tabAccount","Account bonuses"),count:0},{id:"teams",icon:"bookmarks",label:this.t("tabTeams","Teams"),count:this.view?.teams.length??0}];return Ss(this.locale,p`
        <nav
          class="tabs tabs--secondary tb-tabs"
          role="tablist"
          aria-label=${this.t("title","Team builder")}
          @keydown=${mt(t.map(({id:r})=>r),this.tab,r=>this.setTab(r,{focusPanel:!1}),{preventScroll:!0})}
        >
          ${t.map(({id:r,icon:s,label:i,count:a})=>p`
            <button
              class="tab"
              type="button"
              role="tab"
              data-tb-tab=${r}
              aria-selected=${String(this.tab===r)}
              tabindex=${this.tab===r?"0":"-1"}
              aria-controls="tb-panel"
              @click=${()=>this.setTab(r)}
            >
              ${O(s,20)}
              <span>${i}</span>
              ${a?p`
                      <span class="tab__count">${a}</span>
                    `:k}
              <span class="tab__indicator"></span>
            </button>
          `)}
        </nav>
      `)}syncAppBar(){_c({tool:"team",locale:this.locale,account:this.gameAccount,onSelect:o=>void this.load(o.server,o)},this),We("team-builder-planner"),this.tab==="box"?un("team-builder-quick-entry",p`
          <button
            class="button button--tonal"
            type="button"
            aria-pressed=${this.boxQuickEntry}
            ?data-app-bar-keep=${this.boxQuickEntry||!this.compactConditions}
            @click=${()=>{this.boxQuickEntry=!this.boxQuickEntry,this.editing=null,this.requestUpdate()}}
          >
            ${this.boxQuickEntry?this.t("finishQuickEntry","Finish adding"):this.t("quickEntry","Quick add")}
          </button>
          ${Cl(this)}
        `,this):We("team-builder-quick-entry");let e=this.snapshot,t=e?.status??"local",r=!e?.owner||t==="signed-out",s={local:{icon:"save",label:this.t("syncLocal","Saved on this device / sign in to sync")},syncing:{icon:"sync",label:this.t("syncing","Syncing\u2026")},pending:{icon:"schedule",label:this.t("syncPending","Saving\u2026")},synced:{icon:"cloud_done",label:this.t("synced","Synced")},offline:{icon:"cloud_off",label:this.t("syncOffline","Offline / changes are kept and sent later")},"signed-out":{icon:"no_accounts",label:this.t("syncSignedOut","Sign in again to sync")},error:{icon:"error",label:this.t("syncError","Sync paused")}},{icon:i,label:a}=s[t]??s.local;un(Tc,p`
        ${D({icon:"restart_alt",label:this.t("resetOptions","Restore default settings"),disabled:!this.view,onClick:()=>{this.confirmReset=!0,this.requestUpdate()}})}
        <span class=${`tb-sync tb-sync--${t}`} ?data-app-bar-keep=${this.tab!=="box"||!r}>
          ${r?p`
                  <a
                    class="button button--tonal"
                    href=${Pi(`/${this.locale}/account/`,`/${this.locale}/team-builder/`)}
                    title=${a}
                    aria-label=${this.t("syncSignIn","Sign in to sync")}
                  >
                    ${O("cloud_sync",20)}
                    <span class="tb-sync__label">${this.t("syncSignIn","Sign in to sync")}</span>
                  </a>
                `:p`
                  <button
                    class="button button--text"
                    type="button"
                    title=${a}
                    aria-label=${a}
                    @click=${()=>void this.store?.refresh()}
                  >
                    ${O(i,20)}
                    <span class="tb-sync__label">
                      ${t==="offline"?this.t("syncOfflineShort","Offline"):a}
                    </span>
                  </button>
                `}
        </span>
      `,this),this.tab==="box"&&this.data&&!this.releaseSearch?this.releaseSearch=yl(pu,{value:this.filters.query,label:this.common("common.actions.search","Search"),onInput:o=>{this.filters={...this.filters,query:o},this.requestUpdate()}}):this.tab!=="box"&&this.releaseSearch&&(this.releaseSearch(),this.releaseSearch=void 0)}renderStaticChrome(){this.syncAppBar()}render(){if(!this.data||!this.catalog||!this.view)return p`
        <div class="team-builder tb">
          ${this.loadError?p`
                  <div class="state state--error">
                    <p class="state__title">${this.loadError}</p>
                    <div class="state__actions">
                      <button class="button button--tonal" type="button" @click=${()=>void this.load(this.server)}>
                        ${this.common("common.actions.retry","Retry")}
                      </button>
                    </div>
                  </div>
                `:p`
                  <div class="state"><p class="state__title">${this.t("loadingData","Loading card data")}</p></div>
                `}
        </div>
      `;this.pt.correcting&&this.tab!=="pt"&&this.pt.sync(),(this.tab==="song-comparison"||this.songComparison.running)&&this.songComparison.sync(),this.analysis.sync(),this.teamGrowth.sync(),this.arena.sync(),this.comparison.sync(this);let e=()=>this.buildMode==="manual"?fo(this):Kn(this),t=this.tab==="pt"?sc(this):this.tab==="build"?e():this.tab==="box"?$l(this):this.tab==="account"?El(this):this.tab==="arena"?oc(this):this.tab==="song-comparison"?go(this):ho(this);return p`
      <div class=${`team-builder tb${this.tab==="box"&&this.boxQuickEntry?" tb--quick-entry":""}`}>
        <header class="tb-header">${this.renderTabs()}</header>
        <section
          id="tb-panel"
          class="tb-tabpanel"
          role="tabpanel"
          aria-label=${this.t("title","Team builder")}
          tabindex="-1"
          @focusin=${this.revealFocusedControl}
        >
          ${t}
        </section>
        ${Aa(this)} ${this.analysis.render()} ${this.comparison.dialog(this)}
        ${this.teamGrowth.render()} ${No(this)} ${Il(this)}
        ${this.songPicker?Ja(this):k} ${this.renderResetOptions()} ${this.imports.render()}
        ${Ba(this)} ${qo(this)} ${this.renderSnackbar()}
      </div>
    `}};customElements.get("team-builder")||customElements.define("team-builder",vi);export{vi as TeamBuilder};
/*! Bundled license information:

@material/web/slider/internal/forced-colors-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/slider/internal/slider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/slider/internal/slider-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/slider/slider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/select-validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/shared.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/outlined-select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/outlined-select-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/shared-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/outlined-select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/selectoption/selectOptionController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/selectoption/select-option.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/select-option.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
