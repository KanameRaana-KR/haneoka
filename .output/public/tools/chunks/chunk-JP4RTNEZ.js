import{$ as xt,A as ae,Ab as Ja,B as ua,C as Je,Ca as Pe,D as G,Da as Ae,E as J,Ea as Ma,F as Qe,Fa as Re,G as de,Ga as Oe,Ha as Ct,K as H,L as bn,M as ba,N as fa,P as fn,Pa as La,R as gt,Ra as Na,Sa as Ba,T as va,U as ya,V as ha,W as ft,X as xa,Y as vt,Z as yt,Za as Rt,_ as ht,_a as Pa,aa as $t,b as pt,ba as $a,bb as Aa,ca as kt,cb as _e,da as ka,db as Oa,e as Ce,ea as Sa,fa as St,fb as we,ga as vn,gb as ue,ha as _a,hb as It,ib as hn,ja as wa,jb as Mt,ka as Ta,la as _t,lb as Ye,n as ca,na as Ca,nb as qa,ra as Be,rb as Fa,s as pn,sa as wt,sb as ja,ta as Tt,tb as za,ub as Ze,va as re,vb as Nt,w as da,wb as Ka,x as z,y as gn,ya as Ra,yb as Wa,z as j,za as Ia}from"./chunk-IPPTZHJ3.js";import{d as T,e as Ne,f as N,g as ie,h as ve,k as Xe,m as Se,n as bt,o as yn}from"./chunk-U2BEH5SM.js";import{a as fe,d,h as g,j as We,k as ke}from"./chunk-M5MXLSCC.js";import{a as Et,b as qe,j as Ga,t as Lt,v as Ha,x as Va}from"./chunk-LR65LRNF.js";import{F as Da,H as Ua,l as ma,m as pa,t as ga,x as Ea}from"./chunk-KHUU3QJZ.js";import{b as oa}from"./chunk-3IUW3SAC.js";import{C as ut,a as on,b as ln,c as sn,d as cn,e as dn,f as un,g as te,h as ta,i as na,j as aa,k as ra,n as Ke,x as dt}from"./chunk-Z3V2L3UY.js";import{a as mn}from"./chunk-JDP3ULEX.js";import{a as ia}from"./chunk-AJELJGJP.js";import{a as la,b as mt,c as $e,d as sa}from"./chunk-ELSXYJOP.js";function Qa(e){let t=e.searchSettings.skillRoles,n=r=>e.t(`skillRoles.${r}`,r),a=Object.values(t).flatMap(r=>Object.values(r)).filter(([r,i])=>r>0||i<5).length;return re({id:"tb-skill-roles",label:n("title"),expanded:e.expanded.has("skill-roles"),metadata:ba(t)?String(a):void 0,onExpandedChange:r=>{r?e.expanded.add("skill-roles"):e.expanded.delete("skill-roles"),e.requestUpdate()},content:d`
      <div class="tb-role-grid" role="table" aria-label=${n("title")}>
        <div class="tb-role-grid__row" role="row">
          <span role="columnheader"></span>
          ${bn.map(r=>d`<span class="tb-role-grid__head" role="columnheader">${n(r)}</span>`)}
        </div>
        ${["member","snap"].map(r=>d`
            <div class="tb-role-grid__row" role="row">
              <span class="tb-role-grid__kind" role="rowheader">${n(r)}</span>
              ${bn.map(i=>{let[o,l]=t[r][i],s=o>0||l<5,m=s?o===l?String(o):`${o}\u2013${l}`:n("unlimited");return d`
                  <span role="cell">
                    <button
                      class="tb-role-cell"
                      type="button"
                      aria-haspopup="dialog"
                      aria-pressed=${String(s)}
                      aria-label=${`${n(r)} ${n(i)}: ${m}`}
                      @click=${()=>{e.skillRoleEditor={kind:r,role:i,range:[o,l]},e.requestUpdate()}}
                    >
                      ${m}
                    </button>
                  </span>
                `})}
            </div>
          `)}
      </div>
    `})}function Mi(e){let t=e.skillRoleEditor;if(!t)return g;let n=i=>e.t(`skillRoles.${i}`,i),a=()=>{e.skillRoleEditor=null,e.requestUpdate()},r=["0","1","2","3","4","5"];return d`
    <dialog class="dialog tb-role-dialog" data-managed-modal ${Be(a)} aria-labelledby="tb-role-dialog-title">
      <header class="tb-analysis-header">
        <hgroup>
          <h2 id="tb-role-dialog-title">${n(t.role)}</h2>
          <p>${n(t.kind)}</p>
        </hgroup>
        ${ae({icon:"close",label:e.common("common.actions.close","Close"),onClick:a})}
      </header>
      <div class="dialog__body tb-analysis-body">
        ${[0,1].map(i=>d`
            <div class="tb-analysis-field">
              <span class="tb-field__label">${n(i?"max":"min")}</span>
              ${G({label:n(i?"max":"min"),value:String(t.range[i]),options:r.map(o=>({value:o,label:o})),onSelect:o=>{t.range[i]=Number(o),t.range[0]>t.range[1]&&(t.range[1-i]=Number(o)),e.requestUpdate()}})}
            </div>
          `)}
      </div>
      <footer class="dialog__actions tb-role-dialog__actions">
        <button
          class="button button--text"
          type="button"
          ?disabled=${t.range[0]===0&&t.range[1]===5}
          @click=${()=>{t.range=[0,5],e.requestUpdate()}}
        >
          ${n("unlimited")}
        </button>
        <button class="button button--text" type="button" @click=${a}>
          ${e.common("common.actions.cancel","Cancel")}
        </button>
        <button
          class="button button--filled"
          type="button"
          @click=${()=>{let i=structuredClone(e.searchSettings.skillRoles);i[t.kind][t.role]=[...t.range],e.updateSettings({skillRoles:i}),a()}}
        >
          ${n("apply")}
        </button>
      </footer>
    </dialog>
  `}var xn=new WeakMap;function Ie(e,t){return d`
    <button
      class="icon-button"
      type="button"
      aria-label=${e.t("gekisoHelp.open","Help: {topic}",{topic:e.t(`gekisoHelp.${t}Title`,t)})}
      @click=${()=>{xn.set(e,t),e.requestUpdate()}}
    >
      ${z("help",20)}
    </button>
  `}function Ai(e){let t=xn.get(e);if(!t)return g;let n=()=>{xn.delete(e),e.requestUpdate()},a=Ye(e.data??null),r={base:a??"\u2014",expanded:a===null?"\u2014":a*11};return d`
    <dialog
      class="dialog"
      aria-labelledby="tb-gekiso-help-title"
      ${Be(n)}
      @pointerdown=${wt}
      @click=${i=>{Tt(i)&&n()}}
    >
      <header class="dialog__header">
        <h2 id="tb-gekiso-help-title">${e.t(`gekisoHelp.${t}Title`,t)}</h2>
      </header>
      <div class="dialog__body stack">
        <p>${e.t(`gekisoHelp.${t}Body`,"",r)}</p>
        <p>${e.t(`gekisoHelp.${t}Example`,"",r)}</p>
        ${t==="members"&&[...e.master?.gekisoSkills.values()??[]].some(i=>i.missionType===4)?d`
              <p>${e.t("gekisoHelp.membersAll","ALL members count toward each type.")}</p>
            `:g}
      </div>
      <footer class="dialog__actions">
        <button class="button button--text" type="button" @click=${n}>
          ${e.common("common.actions.close","Close")}
        </button>
      </footer>
    </dialog>
  `}function Fe(e,t,n,a=5){return d`<div class="stack" role="group" aria-label=${e.t("gekisoRank","Placement in each range")}>
    ${[0,1,2].map(r=>d`<div class="stack stack--tight">
      <span class="tb-field__label">${e.t("gekisoRange","Range {n}",{n:r+1})}</span>
      ${G({label:`${e.t("gekisoRange","Range {n}",{n:r+1})} / ${e.t("placementRank","Specified placement")}`,value:t[r]==null?"":String(t[r]),options:Array.from({length:a},(i,o)=>({value:String(o+1),label:String(o+1)})),onSelect:i=>n(r,Number(i))})}
    </div>`)}
  </div>`}function Xa(e){return e.catalog.events().filter(t=>ia(e.data,"events",t.id).server===e.data.identity.server&&fn(t.event,e.master))}function Ya(e){let t=Xa(e),n=e.settings.manualEvent??fa();e.updateSettings({manualEventEnabled:!0,rewardMode:za({...e.settings,manualEventEnabled:!0}).rewardMode,manualEvent:{...n,templateId:n.templateId??t[0]?.id??null}})}function Za(e){let t=e.settings.manualEvent,n=e.catalog,a=e.master,r=c=>e.t("manualEvent."+c,c),i=c=>{e.updateSettings({manualEvent:{...t,...c}})},o=t.templateId===null?void 0:a.events.get(t.templateId),l=o&&fn(o,a),s=c=>{let x=(c.effects.find(h=>h.bonusType!==2)??c.effects[0]).perRank,$=Math.min(...x)/100,p=Math.max(...x)/100;return"+"+$+(p===$?"":"\u2013"+p)+"%"},m=c=>{let x=l?.[c]??[];if(!x.length&&!t[c].length)return g;let $=p=>da(n.characterIds(c,p).map(h=>n.characterName(h)),e.locale);return d`
      <div class="stack">
        <button class="button button--tonal" type="button" ?disabled=${!x.length}
          @click=${()=>{e.slotPicker={target:"manual-event",kind:c,ids:t[c].map(p=>p.cardId)},e.requestUpdate()}}>${r(c)}</button>
        ${t[c].map(p=>d`
            <div class="stack stack--tight">
              <div class="row row--start">
                <div class="detail-object row__spacer">
                  <img
                    src=${(c==="members"?n.member(p.cardId):n.snap(p.cardId))?.image??""}
                    alt=""
                    width="36"
                    height="36"
                    loading="lazy"
                  />
                  <span>
                    ${n.cardName(c,p.cardId)}
                    <small>${$(p.cardId)}</small>
                  </span>
                </div>
                ${ae({icon:"close",label:e.common("common.actions.remove","Remove")+" "+n.cardName(c,p.cardId),onClick:()=>i({[c]:t[c].filter(h=>h.cardId!==p.cardId)})})}
              </div>
              <md-outlined-select
                label=${e.t("eventBonus","Event bonus")}
                ?disabled=${!x.length}
                .value=${p.tier}
                @change=${h=>i({[c]:t[c].map(k=>k.cardId===p.cardId?{...k,tier:h.target.value}:k)})}
              >
                ${x.map(h=>d`
                    <md-select-option value=${h.key}>
                      <div slot="headline">${s(h)}</div>
                    </md-select-option>
                  `)}
              </md-outlined-select>
            </div>
          `)}
      </div>
    `};return d`
    <div id="tb-manual-rules" data-tb-field tabindex="-1">
      <md-outlined-select
        label=${r("rules")}
        .value=${String(t.templateId??"")}
        @change=${c=>i({templateId:Number(c.target.value),members:[],snaps:[]})}
      >
        <md-select-option value="" disabled><div slot="headline">${r("chooseRules")}</div></md-select-option>
        ${Xa(e).map(c=>d`
            <md-select-option value=${String(c.id)}><div slot="headline">${c.name}</div></md-select-option>
          `)}
      </md-outlined-select>
    </div>
    <div class="tb-field" id="tb-manual-attribute" data-tb-field tabindex="-1">
      <span class="tb-field__label">${r("attribute")}</span>
      <div class="cluster">
        ${J({label:r("none"),selected:t.attributes?.length===0,onToggle:()=>i({attributes:[]})})}
        ${[1,2,3,4,5].map(c=>J({label:n.attributeName(c),image:n.attributeIcon(c)||void 0,selected:!!t.attributes?.includes(c),onToggle:()=>i({attributes:t.attributes?.includes(c)?t.attributes.filter(x=>x!==c):[...t.attributes??[],c]})}))}
      </div>
    </div>
    <div class="stack" id="tb-manual-targets" data-tb-field tabindex="-1">
      ${G({label:r("targets"),value:t.targetKind,options:["band","character","none"].map(c=>({value:c,label:r(c)})),onSelect:c=>i({targetKind:c,targets:[]})})}
      <div class="cluster">
        ${(t.targetKind==="none"?[]:t.targetKind==="band"?[...new Set([...a.members.values()].map(c=>c.bandId))]:[...a.characters.keys()]).map(c=>J({label:t.targetKind==="band"?n.bandName(c):n.characterName(c),image:t.targetKind==="band"&&n.bandIcon(c)||void 0,selected:t.targets.includes(c),onToggle:()=>i({targets:t.targets.includes(c)?t.targets.filter(x=>x!==c):[...t.targets,c]})}))}
      </div>
    </div>
    <div id="tb-manual-cards" data-tb-field tabindex="-1">
      ${re({id:"tb-manual-pickups",label:r("pickups"),metadata:String(t.members.length+t.snaps.length),expanded:e.expanded.has("manual-pickups"),onExpandedChange:c=>{c?e.expanded.add("manual-pickups"):e.expanded.delete("manual-pickups"),e.requestUpdate()},content:d`
          <div class="stack">${m("members")}${m("snaps")}</div>
        `})}
    </div>
  `}function to(e,t){let n=e.catalog,a=n.attributeIcon(t.musicType),r=l=>{let s=l?n.missionIcon(l):"";return d`<span class="tb-game-icon">${s?gn(s,20):g}</span>`},i=l=>l?["","COMBO","LUCK","JUST"][l]:e.t("arena.original","Original song"),o=t.missions.every(l=>l===t.missions[0]);return d`
    <div class="cluster" role="group" aria-label=${e.t("arena.current","Current rules")}>
      <span class="cluster">
        ${a?d`<img src=${a} width="20" height="20" alt="" />`:z("music_note",20)}
        <strong>${t.musicType?n.attributeName(t.musicType):e.t("arena.original","Original song")}</strong>
      </span>
      ${o?d`<span class="cluster">${r(t.missions[0])}<strong>${i(t.missions[0])} ×3</strong></span>`:t.missions.map((l,s)=>d`
          <span class="cluster" aria-label=${`${e.t("arena.range","Range {count}",{count:s+1})} \xB7 ${i(l)}`}>
            ${r(l)}<span>${i(l)}</span>
          </span>
        `)}
    </div>
  `}function Kr(e,t,n,a=!0,r=!1){let i=e.catalog,o=s=>d`<span class="tb-game-icon">${s?gn(s,20):g}</span>`,l=e.t("arena.original","Original song");return d`
    ${de({type:"select",label:e.t("arena.attribute","Song attribute"),value:String(t.musicType),options:[0,1,2,3,4,5,99].map(s=>({value:String(s),label:s?i.attributeName(s):l,disabled:r,leading:s&&i.attributeIcon(s)?d`<img src=${i.attributeIcon(s)} width="20" height="20" alt="" loading="lazy" />`:void 0})),onSelect:s=>n({musicType:Number(s)})})}
    ${a?t.missions.map((s,m)=>de({type:"select",label:e.t("arena.range","Range {count}",{count:m+1}),value:String(s),options:[0,1,2,3].map(c=>({value:String(c),label:c?["","COMBO","LUCK","JUST"][c]:l,leading:c?o(i.missionIcon(c)):void 0})),onSelect:c=>{let x=[...t.missions];x[m]=Number(c),n({missions:x})}})):g}
  `}function je(e,t,n=r=>e.updateSettings({songRules:r}),a){let r=e.searchSettings,i=a??(r.goal==="gekiso"||r.goal==="event"&&r.ptMode==="gekiso"&&r.route==="live"),o=(e.tab==="song-comparison"?t:t??r.songRules)??na,l=e.tab==="song-comparison"?void 0:e.challengeSongTypeForSettings(r);return re({id:"tb-song-rules",label:e.t("songRules","Song rules"),expanded:e.expanded.has("song-rules"),onExpandedChange:s=>{s?e.expanded.add("song-rules"):e.expanded.delete("song-rules"),e.requestUpdate()},content:d`
      <div class="stack">${Kr(e,{...o,musicType:l??o.musicType},s=>n({...o,...s}),i,l!==void 0)}</div>
    `})}function er(e){let t=e.searchSettings;return!["score","gekiso","event"].includes(t.goal)||t.goal==="event"&&t.route==="skip"?g:G({label:e.t("arena.objective","Team objective"),value:t.aggregation,options:[{value:"individual",label:e.t("arena.individual","A team for each song")},{value:"mean",label:e.t("multiSong.mean","Best average across songs")}],onSelect:n=>e.tab==="pt"?e.updateFarming({aggregation:n}):e.updateSettings({aggregation:n})})}function Bt(e,t,n,a=e.settlementMaster.boosts){return de({type:"select",label:e.t("boosts","Boosts per live"),value:String(t),options:Et.map(r=>({value:String(r),label:String(r),disabled:!qe(a,r)})),onSelect:r=>n(Number(r))})}function Pt(e,t,n,a=e.settlementMaster.challengeBoosts){return de({type:"buttons",label:e.t("cpPerLive","CP per live"),value:String(t),options:a.filter(r=>r.consumed>0).map(r=>({value:String(r.consumed),label:`${r.consumed} CP`})),onSelect:r=>n(Number(r))})}var At={schema:"haneoka-catalog-query-aliases-v1",bands:[["poppinparty","popipa","poppin'party","\u30DD\u30D4\u30D1"],["afterglow","ag"],["pastelpalettes","pasupare","pastel*palettes","\u30D1\u30B9\u30D1\u30EC"],["roselia"],["hellohappyworld","hhw","harohapi","\u30CF\u30ED\u30FC\u3001\u30CF\u30C3\u30D4\u30FC\u30EF\u30FC\u30EB\u30C9\uFF01","\u30CF\u30ED\u30CF\u30D4"],["morfonica","monica","\u30E2\u30CB\u30AB"],["raiseasuilen","ras","raise a suilen"],["mygo","mygo!!!!!"],["avemujica","ave mujica"],["mugendaimyutype","yumemita","\u5922\u9650\u5927\u307F\u3085\u30FC\u305F\u3044\u3077","\u5922\u307F\u305F"],["leoneed","leo/need","ln"],["moremorejump","mmj","more more jump\uFF01"],["vividbadsquad","vbs","vivid bad squad"],["\u30EF\u30F3\u30C0\u30FC\u30E9\u30F3\u30BA\xD7\u30B7\u30E7\u30A6\u30BF\u30A4\u30E0","wonderlandsxshowtime","wxs","wandasho","\u30EF\u30F3\u30C0\u30B7\u30E7"],["25\u6642\u3001\u30CA\u30A4\u30C8\u30B3\u30FC\u30C9\u3067\u3002","nightcordat25","niigo","n25","\u30CB\u30FC\u30B4"],["virtualsinger","virtual singer","vs"]],characters:[["\u5E02\u30F6\u8C37\u6709\u54B2","\u5E02\u8C37\u6709\u54B2","arisa","\u6709\u54B2"],["\u6238\u5C71\u9999\u6F84","\u6237\u5C71\u9999\u6F84","kasumi","\u9999\u6F84"],["\u82B1\u5712\u305F\u3048","\u82B1\u56ED\u591A\u60E0","tae","\u591A\u60E0"],["\u725B\u8FBC\u308A\u307F","\u725B\u8FBC\u91CC\u7F8E","rimi","\u91CC\u7F8E"],["\u5C71\u5439\u6C99\u7DBE","\u5C71\u5439\u6C99\u7EEB","saaya","saya","\u6C99\u7DBE","\u6C99\u7EEB"],["\u9AD8\u677E\u71C8","\u9AD8\u677E\u706F","tomori","\u71C8","\u706F"],["\u5343\u65E9\u611B\u97F3","\u5343\u65E9\u7231\u97F3","anon","\u611B\u97F3","\u7231\u97F3"],["\u8981\u697D\u5948","\u8981\u4E50\u5948","rana","\u697D\u5948","\u4E50\u5948"],["\u9577\u5D0E\u305D\u3088","\u957F\u5D0E\u7D20\u4E16","soyo","\u7D20\u4E16"],["\u690E\u540D\u7ACB\u5E0C","taki","\u7ACB\u5E0C"]],attributes:{"our-notes":{"1":["red","\u8D64","\u7D05","\u7EA2","\uBE68\uAC15","Ruby Type","Ruby","\u7D05\u8D64\u30BF\u30A4\u30D7","\u7D05\u8D64","\u7EEF\u7EA2\u5C5E\u6027","\u7EEF\u7EA2","\u7DCB\u7D05\u5C6C\u6027","\u7DCB\u7D05","\uB808\uB4DC \uD0C0\uC785","\uB808\uB4DC"],"2":["blue","\u9752","\u85CD","\u84DD","\uD30C\uB791","Azure Type","Azure","\u7D3A\u78A7\u30BF\u30A4\u30D7","\u7D3A\u78A7","\u7EC0\u78A7\u5C5E\u6027","\u7EC0\u78A7","\u7D3A\u78A7\u5C6C\u6027","\uBE14\uB8E8 \uD0C0\uC785","\uBE14\uB8E8"],"3":["green","\u7DD1","\u7DA0","\u7EFF","\uCD08\uB85D","Jade Type","Jade","\u7FE1\u7FE0\u30BF\u30A4\u30D7","\u7FE1\u7FE0","\u7FE1\u7FE0\u5C5E\u6027","\u7FE1\u7FE0\u5C6C\u6027","\uADF8\uB9B0 \uD0C0\uC785","\uADF8\uB9B0"],"4":["yellow","\u9EC4","\u9EC3","\uB178\uB791","Amber Type","Amber","\u5C71\u5439\u30BF\u30A4\u30D7","\u5C71\u5439","\u7409\u91D1\u5C5E\u6027","\u7409\u91D1","\u7409\u91D1\u5C6C\u6027","\uC610\uB85C\uC6B0 \uD0C0\uC785","\uC610\uB85C\uC6B0"],"5":["purple","\u7D2B","\uBCF4\uB77C","Violet Type","Violet","\u7D2B\u82D1\u30BF\u30A4\u30D7","\u7D2B\u82D1","\u7D2B\u82D1\u5C5E\u6027","\u7D2B\u82D1\u5C6C\u6027","\uD37C\uD50C \uD0C0\uC785","\uD37C\uD50C"]},gbp:{powerful:["powerful","red","\u30D1\u30EF\u30D5\u30EB","\u5F3A\u529B","\u5F37\u529B","\uD30C\uC6CC\uD480"],cool:["cool","blue","\u30AF\u30FC\u30EB","\u9177\u70AB","\uCFE8"],pure:["pure","green","\u30D4\u30E5\u30A2","\u7EAF\u771F","\u7D14\u771F","\uD4E8\uC5B4"],happy:["happy","orange","yellow","\u30CF\u30C3\u30D4\u30FC","\u5FEB\u4E50","\u5FEB\u6A02","\uD574\uD53C"]},sekai:{cute:["cute","pink","\u30AD\u30E5\u30FC\u30C8","\u53EF\u7231","\u53EF\u611B","\uD050\uD2B8"],cool:["cool","blue","\u30AF\u30FC\u30EB","\uCFE8"],pure:["pure","green","\u30D4\u30E5\u30A2","\u7EAF\u771F","\u7D14\u771F","\uD4E8\uC5B4"],happy:["happy","orange","\u30CF\u30C3\u30D4\u30FC","\u5FEB\u4E50","\u5FEB\u6A02","\uD574\uD53C"],mysterious:["mysterious","purple","\u30DF\u30B9\u30C6\u30EA\u30A2\u30B9","\u795E\u79D8","\uBBF8\uC2A4\uD14C\uB9AC\uC5B4\uC2A4"]}}};var Ot=e=>e.normalize("NFKC").toLowerCase(),qt=e=>Ot(e).replace(/[^\p{L}\p{N}]/gu,"");function Me(e,t){let a=(t==="character"?[e.characterName,e.englishName]:[e.bandName,e.englishName,e.shortName]).flatMap(o=>Array.isArray(o)?o:[o]).filter(o=>typeof o=="string"&&!!o.trim()),r=new Set(a.map(qt)),i=t==="character"?At.characters:At.bands;for(let o of i)o.some(l=>r.has(qt(l)))&&a.push(...o);if(t==="character")for(let o of[...a])a.push(...o.split(/\s+/u).filter(l=>l.length>1));return[...new Set(a)]}function et(e,t,n){let a={},r=(m,c)=>{let x=a[m]??=[];/^(min|max)/u.test(m)?a[m]=[String((m.startsWith("min")?Math.max:Math.min)(...x.map(Number),Number(c)))]:x.includes(c)||x.push(c)},i=new Map,o=(m,c,x)=>{let $=qt(m);if(!$)return;let p=i.get($)??[];p.some(h=>h.key===c&&h.value===x)||p.push({key:c,value:x}),i.set($,p)};for(let m of t.aliases)for(let c of m.names)o(c,m.key,m.value);for(let[m,c]of Object.entries(t.kind==="card"||t.game==="our-notes"?At.attributes[t.game]:{}))for(let x of c)o(x,t.attributeKey??"type",m);let l=[...e.matchAll(/"([^"]*)"|'([^']*)'|\S+/gu)].map(m=>({value:m[1]??m[2]??m[0],quoted:m[1]!==void 0||m[2]!==void 0,start:m.index,end:m.index+m[0].length})),s=[];for(let m=0;m<l.length;m++){let c=l[m];if(c.quoted){s.push(c.value);continue}let x=!1;for(let h=Math.min(5,l.length-m);h>=1;h--){let k=l.slice(m,m+h);if(k.some(L=>L.quoted))continue;let u=Ot(k.map(L=>L.value).join(" ")),b=/^(?:(lv|level|rarity|stars?|星[级級]?|稀有度|等[级級]|[级級]|レベル|[★☆*])\s*:?\s*)?(>=|<=|>|<|=|≥|≤)?\s*(\d+(?:\.\d+)?|ssr|sr|ex|bd|r)\s*(星[级級]?|等[级級]|[级級]|レベル|[★☆*])?\s*(?:(\+)|-\s*(\d+(?:\.\d+)?|ssr|sr|ex|bd|r)|(以上|以下))?$/u.exec(u);if(!b||!b.slice(1).some((L,V)=>V!==2&&L)||t.kind==="card"&&Number(b[3])>5&&!b[1]&&!b[4])continue;let I=L=>/^(rarity|stars?|星[级級]?|稀有度|[★☆*])$/u.test(L)?"Rarity":"Level";if(b[1]&&b[4]&&I(b[1])!==I(b[4]))continue;let w=b[1]||b[4]?I(b[1]||b[4]):t.kind==="song"?"Level":"Rarity",E=w==="Rarity"&&t.game==="our-notes",y=L=>E?$e(sa(L)??L):Number(L),_=y(b[3]),S=b[6]?y(b[6]):_;if(!Number.isFinite(_)||!Number.isFinite(S)||E&&(!_||!S))continue;let C=E?"RarityRank":w,M=b[2]||(b[7]==="\u4EE5\u4E0A"||b[5]?">=":b[7]==="\u4EE5\u4E0B"?"<=":"");M===">="||M==="\u2265"?r(`min${C}`,String(_)):M===">"?r(`min${C}`,String(_+(w==="Rarity"?1:1e-6))):M==="<="||M==="\u2264"?r(`max${C}`,String(_)):M==="<"?r(`max${C}`,String(_-(w==="Rarity"?1:1e-6))):(r(`min${C}`,String(_)),r(`max${C}`,String(S))),n?.(c.start,l[m+h-1].end,[`min${C}`,`max${C}`]),m+=h-1,x=!0;break}if(x)continue;let $=/^(?:(only|contains):)?(combo|just|luck|mix)$/u.exec(Ot(c.value));if(t.kind==="song"&&t.game==="our-notes"&&$){r("gekisouType",{combo:"Combo",just:"JustCount",luck:"Luck",mix:"Mix"}[$[2]]),$[1]&&(a.gekisouMatch=[$[1]]),n?.(c.start,c.end,["gekisouType","gekisouMatch"]);continue}let p=!1;for(let h=Math.min(5,l.length-m);h>=1;h--){if(l.slice(m,m+h).some(b=>b.quoted||/^[-+★☆*<>=≥≤]+$/u.test(Ot(b.value))))continue;let k=i.get(qt(l.slice(m,m+h).map(b=>b.value).join(" ")));if(!k?.length)continue;let u=new Set(k.map(b=>b.key));if(!(u.size>1)){for(let b of k)r(b.key,b.value);n?.(c.start,l[m+h-1].end,[...u]),m+=h-1,p=!0;break}}p||s.push(c.value)}return{schema:"haneoka-catalog-query-v1",text:Object.keys(a).length?s.join(" "):e.trim(),facets:a}}function tr(e,t,n){let{minRarity:a,maxRarity:r,minRarityRank:i,maxRarityRank:o}=t;if(!a?.length&&!r?.length&&!i?.length&&!o?.length)return!0;let l=n?$e:Number,s=l(e);return!Number.isFinite(s)||n&&!s?!1:(!a?.length||s>=l(a[0]))&&(!r?.length||s<=l(r[0]))&&(!i?.length||s>=Number(i[0]))&&(!o?.length||s<=Number(o[0]))}function $n(e,t,n){let a=[];et(e,t,(r,i,o)=>{(!n||o.some(l=>n.includes(l)))&&a.push([r,i])});for(let[r,i]of a.reverse())e=e.slice(0,r)+e.slice(i);return e.trim()}function me(e,t){return d`<div class="chooser-facet" role="group" aria-label=${e}>
    <strong>${e}</strong><div class="chooser-filter-options">${t}</div>
  </div>`}function nr(e){return me(e.label,d`
    ${J({label:e.allLabel,selected:!e.value,onToggle:()=>e.change("")})}
    ${e.options.map(t=>J({...t,selected:e.value===t.value,onToggle:()=>e.change(e.value===t.value?"":t.value)}))}
  `)}function ar(e,t){return d`<div class="chooser-filters" ?hidden=${!e}>${t}</div>`}function rr(e){return d`<header class="sheet__header chooser-header"><strong>${e.title}</strong>
    <div class="sheet__actions chooser-header__actions">${e.actions??g}
      ${ae({label:e.filterLabel,icon:"filter_alt",toggle:!0,pressed:e.filtersOpen,onClick:e.toggleFilters})}
      ${ae({label:e.closeLabel,icon:"close",onClick:e.close})}
    </div>
  </header>`}function ir(e){let{state:t,t:n,common:a,change:r}=e,i=(l,s,m)=>m.length?nr({label:s,value:t[l],allLabel:a("common.states.all","All"),options:m,change:c=>r({[l]:c})}):g,o=(l,s)=>d`
    <md-outlined-text-field type="number" min="1" label=${s}
      .value=${t[l]===null?"":String(t[l])}
      @input=${m=>{let c=m.currentTarget.value;r({[l]:c===""?null:Number(c)})}}></md-outlined-text-field>
  `;return d`
    ${i("category",a("catalog.songs.fields.genre","Genre"),e.categories)}
    ${i("band",n("songBandFilter","Song band"),e.bands)}
    ${i("attribute",n("songAttributeFilter","Song attribute"),e.attributes)}
    ${e.gekisou?me(n("gekiso","GEKISO"),d`
      <div class="stack stack--tight">
        <div class="cluster">
          ${["Combo","Luck","JustCount","Mix"].map((l,s)=>{let m=t.gekisouTypes.includes(l);return J({label:["COMBO","LUCK","JUST",a("catalog.songs.gekisou.mixed","Mixed")][s],selected:m,onToggle:()=>r({gekisouTypes:m?t.gekisouTypes.filter(c=>c!==l):[...t.gekisouTypes,l]})})})}
        </div>
        ${G({label:a("catalog.songs.gekisou.matchMode","Match mode"),value:t.gekisouMatch,options:[{value:"only",label:a("catalog.songs.gekisou.only","Only selected types")},{value:"contains",label:a("catalog.songs.gekisou.contains","Contains a selected type")}],onSelect:l=>r({gekisouMatch:l})})}
      </div>
    `):g}
    ${me(n("level","Level"),d`<div class="row">
      ${o("minLevel",n("sc.minLevel","Minimum level"))}
      ${o("maxLevel",n("sc.maxLevel","Maximum level"))}
    </div>`)}
    ${e.duration?me(a("common.fields.duration","Duration"),o("maxSeconds",n("maxDuration","Maximum chart duration (seconds)"))):g}
    ${me(a("common.actions.sort","Sort"),e.sort)}
  `}function or(e){let{selected:t,choices:n,change:a}=e;return d`<div class="cluster" role="group" aria-label=${e.label}>
    ${n.map(({value:r,label:i})=>J({label:i,selected:t.includes(r),onToggle:()=>a(t.includes(r)?t.filter(o=>o!==r):[...t,r])}))}
    ${e.allLabel?J({label:e.allLabel,selected:n.every(({value:r})=>t.includes(r)),onToggle:()=>a(n.map(({value:r})=>r))}):g}
  </div>`}function lr(e){return d`<div class="cluster tb-picker-applied">
    ${e.items.map(t=>Qe(t.label,e.removeLabel,t.clear))}
    ${e.items.length?d`<button class="button button--text" type="button" @click=${e.clear}>${e.clearLabel}</button>`:g}
  </div>`}function sr(e){let t=e.state==="initial"&&e.layout==="cards"?Math.max(1,Math.min(5,Math.trunc(e.columns||2))):void 0,n=e.state==="ready"||e.state==="refreshing"?e.content:e.state==="error"?e.retainedContent:g;return d`
    <section class="async-region" aria-busy=${String(e.state==="initial"||e.state==="refreshing")}>
      ${e.state==="initial"?d`
              ${Ra(e.label,{local:!!e.local})}
              <div
                class=${`async-region__placeholder async-region__placeholder--${e.layout||"list"}`}
                style=${t?`--async-region-columns:${t}`:g}
                aria-hidden="true"
              >
                ${Array.from({length:t?t*2:e.layout==="detail"?2:6},()=>d`
                    <div class="async-region__skeleton">
                      <span></span>
                      <span></span>
                    </div>
                  `)}
              </div>
            `:g}
      ${e.state==="error"?d`
              <div class="inline-message error async-region__error" role="alert">
                <span>${e.message}</span>
                ${e.onRetry?d`
                        <button class="button button--text" type="button" @click=${e.onRetry}>
                          ${e.retryLabel}
                        </button>
                      `:g}
              </div>
            `:g}
      <div class="async-region__content">${n??g}</div>
    </section>
  `}var Ee=null,kn=0,Sn=0;function cr(e=Sn){e!==Sn||!Ee||(window.clearTimeout(kn),We(g,Ee))}function dr(e,t={}){if(typeof document>"u")return 0;Ee?.isConnected||(Ee=document.createElement("div"),Ee.className="snackbar-host",document.body.append(Ee));let n=++Sn;window.clearTimeout(kn);let a=t.action;We(d`<div class="snackbar" role=${t.error?"alert":"status"}>
      <span class="snackbar__text">${e}</span>
      ${a?d`<button class="button button--text" type="button" @click=${()=>{cr(n),a.run()}}>${a.label}</button>`:g}
    </div>`,Ee);let r=t.durationMs??(a?8e3:5e3);return r&&(kn=window.setTimeout(()=>cr(n),r)),n}var Jr=bt(xt(kt(vt(ke)))),oe=class extends Jr{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.required=!1,this.value="on",this.prevChecked=!1,this.prevDisabled=!1,this.prevIndeterminate=!1,this.addEventListener("click",t=>{!ha(t)||!this.input||(this.focus(),ya(this.input))})}update(t){(t.has("checked")||t.has("disabled")||t.has("indeterminate"))&&(this.prevChecked=t.get("checked")??this.checked,this.prevDisabled=t.get("disabled")??this.disabled,this.prevIndeterminate=t.get("indeterminate")??this.indeterminate),super.update(t)}render(){let t=!this.prevChecked&&!this.prevIndeterminate,n=this.prevChecked&&!this.prevIndeterminate,a=this.prevIndeterminate,r=this.checked&&!this.indeterminate,i=this.indeterminate,o=Se({disabled:this.disabled,selected:r||i,unselected:!r&&!i,checked:r,indeterminate:i,"prev-unselected":t,"prev-checked":n,"prev-indeterminate":a,"prev-disabled":this.prevDisabled}),{ariaLabel:l,ariaInvalid:s}=this;return d`
      <div class="container ${o}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${i?"mixed":g}
          aria-label=${l||g}
          aria-invalid=${s||g}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `}handleInput(t){let n=t.target;this.checked=n.checked,this.indeterminate=n.indeterminate}handleChange(t){ft(this,t)}[$t](){return!this.checked||this.indeterminate?null:this.value}[$a](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(t){this.checked=t==="true"}[yt](){return new Sa(()=>this)}[ht](){return this.input}};oe.shadowRootOptions={...ke.shadowRootOptions,delegatesFocus:!0};T([N({type:Boolean})],oe.prototype,"checked",void 0);T([N({type:Boolean})],oe.prototype,"indeterminate",void 0);T([N({type:Boolean})],oe.prototype,"required",void 0);T([N()],oe.prototype,"value",void 0);T([ie()],oe.prototype,"prevChecked",void 0);T([ie()],oe.prototype,"prevDisabled",void 0);T([ie()],oe.prototype,"prevIndeterminate",void 0);T([ve("input")],oe.prototype,"input",void 0);var wn=fe`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}
`,Vo=wn.styleSheet;var Tn=class extends oe{};Tn.styles=[wn];Tn=T([Ne("md-checkbox")],Tn);var D=class extends ke{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){let t=this.count??-1,n=this.max??-1;return t<0||n<=0?"":`${t} / ${n}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&t.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){let t=this.renderLabel(!0),n=this.renderLabel(!1),a=this.renderOutline?.(t),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return d`
      <div class="field ${Se(r)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${a}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${n} ${a?g:t}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){let{supportingOrErrorText:t,counterText:n}=this;if(!t&&!n)return g;let a=d`<span>${t}</span>`,r=n?d`<span class="counter">${n}</span>`:g,o=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":g;return d`
      <div class="supporting-text" role=${o}>${a}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(let t of this.slottedAriaDescribedBy)We(d`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return g;let n;t?n=this.focused||this.populated||this.isAnimating:n=!this.focused&&!this.populated&&!this.isAnimating;let a={hidden:!n,floating:t,resting:!t},r=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return d`
      <span class="label ${Se(a)}" aria-hidden=${!n}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:n}){if(!this.label)return;t??=this.focused,n??=this.populated;let a=t||n,r=this.focused||this.populated;if(a===r)return;let i=this.getLabelKeyframes();i.length&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(i,{duration:150,easing:va.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){let{floatingLabelEl:t,restingLabelEl:n}=this;if(!t||!n)return[];let{x:a,y:r,height:i}=t.getBoundingClientRect(),{x:o,y:l,height:s}=n.getBoundingClientRect(),m=t.scrollWidth,c=n.scrollWidth;if(m===0||c===0)return[];let x=c/m,$=o-a,p=l-r+Math.round((s-i*x)/2),h=`translateX(${$}px) translateY(${p}px) scale(${x})`,k="translateX(0) translateY(0) scale(1)",u=n.clientWidth,I=c>u?`${u/x}px`:"";return this.focused||this.populated?[{transform:h,width:I},{transform:k,width:I}]:[{transform:k,width:I},{transform:h,width:I}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}};T([N({type:Boolean})],D.prototype,"disabled",void 0);T([N({type:Boolean})],D.prototype,"error",void 0);T([N({type:Boolean})],D.prototype,"focused",void 0);T([N()],D.prototype,"label",void 0);T([N({type:Boolean,attribute:"no-asterisk"})],D.prototype,"noAsterisk",void 0);T([N({type:Boolean})],D.prototype,"populated",void 0);T([N({type:Boolean})],D.prototype,"required",void 0);T([N({type:Boolean})],D.prototype,"resizable",void 0);T([N({attribute:"supporting-text"})],D.prototype,"supportingText",void 0);T([N({attribute:"error-text"})],D.prototype,"errorText",void 0);T([N({type:Number})],D.prototype,"count",void 0);T([N({type:Number})],D.prototype,"max",void 0);T([N({type:Boolean,attribute:"has-start"})],D.prototype,"hasStart",void 0);T([N({type:Boolean,attribute:"has-end"})],D.prototype,"hasEnd",void 0);T([Xe({slot:"aria-describedby"})],D.prototype,"slottedAriaDescribedBy",void 0);T([ie()],D.prototype,"isAnimating",void 0);T([ie()],D.prototype,"refreshErrorAlert",void 0);T([ie()],D.prototype,"disableTransitions",void 0);T([ve(".label.floating")],D.prototype,"floatingLabelEl",void 0);T([ve(".label.resting")],D.prototype,"restingLabelEl",void 0);T([ve(".container")],D.prototype,"containerEl",void 0);var Ft=class extends D{renderOutline(t){return d`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}};var Cn=fe`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,dl=Cn.styleSheet;var Rn=fe`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`,pl=Rn.styleSheet;var In=class extends Ft{};In.styles=[Rn,Cn];In=T([Ne("md-outlined-field")],In);var Mn=fe`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`,Sl=Mn.styleSheet;var ur={fromAttribute(e){return e??""},toAttribute(e){return e||null}};var Gt=Symbol("onReportValidity"),jt=Symbol("privateCleanupFormListeners"),zt=Symbol("privateDoNotReportInvalid"),Dt=Symbol("privateIsSelfReportingValidity"),Ut=Symbol("privateCallOnReportValidity");function mr(e){var t,n,a;class r extends e{constructor(...o){super(...o),this[t]=new AbortController,this[n]=!1,this[a]=!1,!!1&&this.addEventListener("invalid",l=>{this[zt]||!l.isTrusted||this.addEventListener("invalid",()=>{this[Ut](l)},{once:!0})},{capture:!0})}checkValidity(){this[zt]=!0;let o=super.checkValidity();return this[zt]=!1,o}reportValidity(){this[Dt]=!0;let o=super.reportValidity();return o&&this[Ut](null),this[Dt]=!1,o}[(t=jt,n=zt,a=Dt,Ut)](o){let l=o?.defaultPrevented;l||(this[Gt](o),!(!l&&o?.defaultPrevented))||(this[Dt]||Yr(this[xa].form,this))&&this.focus()}[Gt](o){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(o){super.formAssociatedCallback&&super.formAssociatedCallback(o),this[jt].abort(),o&&(this[jt]=new AbortController,Qr(this,o,()=>{this[Ut](null)},this[jt].signal))}}return r}function Qr(e,t,n,a){let r=Xr(t),i=!1,o,l=!1;r.addEventListener("before",()=>{l=!0,o=new AbortController,i=!1,e.addEventListener("invalid",()=>{i=!0},{signal:o.signal})},{signal:a}),r.addEventListener("after",()=>{l=!1,o?.abort(),!i&&n()},{signal:a}),t.addEventListener("submit",()=>{l||n()},{signal:a})}var En=new WeakMap;function Xr(e){if(!En.has(e)){let t=new EventTarget;En.set(e,t);for(let n of["reportValidity","requestSubmit"]){let a=e[n];e[n]=function(){t.dispatchEvent(new Event("before"));let r=Reflect.apply(a,this,arguments);return t.dispatchEvent(new Event("after")),r}}}return En.get(e)}function Yr(e,t){if(!e)return!0;let n;for(let a of e.elements)if(a.matches(":invalid")){n=a;break}return n===t}var Ht=class extends ka{computeValidity({state:t,renderedControl:n}){let a=n;tt(t)&&!a?(a=this.inputControl||document.createElement("input"),this.inputControl=a):a||(a=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=a);let r=tt(t)?a:null;if(r&&(r.type=t.type),a.value!==t.value&&(a.value=t.value),a.required=t.required,r){let i=t;i.pattern?r.pattern=i.pattern:r.removeAttribute("pattern"),i.min?r.min=i.min:r.removeAttribute("min"),i.max?r.max=i.max:r.removeAttribute("max"),i.step?r.step=i.step:r.removeAttribute("step")}return(t.minLength??-1)>-1?a.setAttribute("minlength",String(t.minLength)):a.removeAttribute("minlength"),(t.maxLength??-1)>-1?a.setAttribute("maxlength",String(t.maxLength)):a.removeAttribute("maxlength"),{validity:a.validity,validationMessage:a.validationMessage}}equals({state:t},{state:n}){let a=t.type===n.type&&t.value===n.value&&t.required===n.required&&t.minLength===n.minLength&&t.maxLength===n.maxLength;return!tt(t)||!tt(n)?a:a&&t.pattern===n.pattern&&t.min===n.min&&t.max===n.max&&t.step===n.step}copy({state:t}){return{state:tt(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){let{type:n,pattern:a,min:r,max:i,step:o}=t;return{...this.copySharedState(t),type:n,pattern:a,min:r,max:i,step:o}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:n,minLength:a,maxLength:r}){return{value:t,required:n,minLength:a,maxLength:r}}};function tt(e){return e.type!=="textarea"}var Zr=bt(mr(xt(kt(vt(ke))))),B=class extends Zr{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){let t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){let n=this.getInput();n&&(n.valueAsNumber=t,this.value=n.value)}get valueAsDate(){let t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){let n=this.getInput();n&&(n.valueAsDate=t,this.value=n.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,n,a){this.getInputOrTextarea().setSelectionRange(t,n,a)}showPicker(){let t=this.getInput();t&&t.showPicker()}stepDown(t){let n=this.getInput();n&&(n.stepDown(t),this.value=n.value)}stepUp(t){let n=this.getInput();n&&(n.stepUp(t),this.value=n.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,n,a){t==="value"&&this.dirty||super.attributeChangedCallback(t,n,a)}render(){let t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return d`
      <span class="text-field ${Se(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){let n=this.getInputOrTextarea().value;this.value!==n&&(this.value=n)}renderField(){return Pa`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return d`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return d`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){let t={direction:this.textDirection},n=this.ariaLabel||this.label||g,a=this.autocomplete,r=(this.maxLength??-1)>-1,i=(this.minLength??-1)>-1;if(this.type==="textarea")return d`
        <textarea
          class="input"
          style=${yn(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${n}
          autocomplete=${a||g}
          name=${this.name||g}
          ?disabled=${this.disabled}
          maxlength=${r?this.maxLength:g}
          minlength=${i?this.minLength:g}
          placeholder=${this.placeholder||g}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${j(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;let o=this.renderPrefix(),l=this.renderSuffix(),s=this.inputMode;return d`
      <div class="input-wrapper">
        ${o}
        <input
          class="input"
          style=${yn(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${n}
          autocomplete=${a||g}
          name=${this.name||g}
          ?disabled=${this.disabled}
          inputmode=${s||g}
          max=${this.max||g}
          maxlength=${r?this.maxLength:g}
          min=${this.min||g}
          minlength=${i?this.minLength:g}
          pattern=${this.pattern||g}
          placeholder=${this.placeholder||g}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||g}
          type=${this.type}
          .value=${j(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${l}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,n){return t?d`<span class="${Se({suffix:n,prefix:!n})}">${t}</span>`:g}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){ft(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[$t](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[yt](){return new Ht(()=>({state:this,renderedControl:this.inputOrTextarea}))}[ht](){return this.inputOrTextarea}[Gt](t){t?.preventDefault();let n=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,n===this.getErrorText()&&this.field?.reannounceError()}};B.shadowRootOptions={...ke.shadowRootOptions,delegatesFocus:!0};T([N({type:Boolean,reflect:!0})],B.prototype,"error",void 0);T([N({attribute:"error-text"})],B.prototype,"errorText",void 0);T([N()],B.prototype,"label",void 0);T([N({type:Boolean,attribute:"no-asterisk"})],B.prototype,"noAsterisk",void 0);T([N({type:Boolean,reflect:!0})],B.prototype,"required",void 0);T([N()],B.prototype,"value",void 0);T([N({attribute:"prefix-text"})],B.prototype,"prefixText",void 0);T([N({attribute:"suffix-text"})],B.prototype,"suffixText",void 0);T([N({type:Boolean,attribute:"has-leading-icon"})],B.prototype,"hasLeadingIcon",void 0);T([N({type:Boolean,attribute:"has-trailing-icon"})],B.prototype,"hasTrailingIcon",void 0);T([N({attribute:"supporting-text"})],B.prototype,"supportingText",void 0);T([N({attribute:"text-direction"})],B.prototype,"textDirection",void 0);T([N({type:Number})],B.prototype,"rows",void 0);T([N({type:Number})],B.prototype,"cols",void 0);T([N({reflect:!0})],B.prototype,"inputMode",void 0);T([N()],B.prototype,"max",void 0);T([N({type:Number})],B.prototype,"maxLength",void 0);T([N()],B.prototype,"min",void 0);T([N({type:Number})],B.prototype,"minLength",void 0);T([N({type:Boolean,attribute:"no-spinner"})],B.prototype,"noSpinner",void 0);T([N()],B.prototype,"pattern",void 0);T([N({reflect:!0,converter:ur})],B.prototype,"placeholder",void 0);T([N({type:Boolean,reflect:!0})],B.prototype,"readOnly",void 0);T([N({type:Boolean,reflect:!0})],B.prototype,"multiple",void 0);T([N()],B.prototype,"step",void 0);T([N({reflect:!0})],B.prototype,"type",void 0);T([N({reflect:!0})],B.prototype,"autocomplete",void 0);T([ie()],B.prototype,"dirty",void 0);T([ie()],B.prototype,"focused",void 0);T([ie()],B.prototype,"nativeError",void 0);T([ie()],B.prototype,"nativeErrorText",void 0);T([ve(".input")],B.prototype,"inputOrTextarea",void 0);T([ve(".field")],B.prototype,"field",void 0);T([Xe({slot:"leading-icon"})],B.prototype,"leadingIcons",void 0);T([Xe({slot:"trailing-icon"})],B.prototype,"trailingIcons",void 0);var Vt=class extends B{constructor(){super(...arguments),this.fieldTag=Rt`md-outlined-field`}};var Ln=fe`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`,Yl=Ln.styleSheet;var Nn=class extends Vt{constructor(){super(...arguments),this.fieldTag=Rt`md-outlined-field`}};Nn.styles=[Ln,Mn];Nn=T([Ne("md-outlined-text-field")],Nn);function Kt(e){let t=`${e.id}-preview`,n=e.groups&&e.renderGroup?e.groups.flatMap(o=>e.items.filter(l=>o.values.has(l.value))):e.items,a=new Map(n.map((o,l)=>[o,l])),r=e.items.some(o=>o.value===e.selected),i=(o,l=!1)=>d`
    <div
      class=${e.collectionClass??`collection collection--${e.kind}`}
      role=${l?g:e.selectedValues?"group":"tablist"}
      aria-label=${e.title}
      @keydown=${l||e.selectedValues?g:Je(e.items.map(s=>s.value),e.selected,e.select)}
    >
      ${o.map(s=>{let m=a.get(s);return e.selectedValues?d`
                  <label
                    class=${`tile tile--${s.kind??e.kind} selection-pane__choice${e.selectedValues.has(s.value)?" is-selected":""}`}
                    style=${s.style||g}
                  >
                    <span class="selection-pane__choice-media">
                      ${_e(s)}
                      <md-checkbox
                        class="selection-pane__choice-checkbox"
                        touch-target="wrapper"
                        ?disabled=${e.disabled||s.disabled}
                        .checked=${j(e.selectedValues.has(s.value))}
                        aria-label=${s.label}
                        @change=${()=>{!e.disabled&&!s.disabled&&e.select(s.value)}}
                      ></md-checkbox>
                    </span>
                    <span class="tile__identity">
                      <strong class="tile__title" lang=${s.titleLanguage||g}>${s.title}</strong>
                      ${s.subtitle===void 0||s.subtitle===null?g:d`
                              <small class="tile__subtitle">
                                ${s.adornment??g}
                                <span>${s.subtitle}</span>
                              </small>
                            `}
                    </span>
                  </label>
                `:e.renderItem?e.renderItem(s,m):Oa({...s,selected:s.value===e.selected,role:"tab",controls:t,tabIndex:s.value===e.selected||!r&&m===0?0:-1,onOpen:()=>e.select(s.value)})})}
    </div>
  `;return d`
    <dialog
      ?data-managed-modal=${e.managed}
      ${e.managed?Be(e.close):g}
      class=${`selection-pane${e.layout==="list"?" selection-pane--list":""}${e.filtersOpen?" is-filtering":""}`}
      aria-label=${e.title}
      @cancel=${o=>{o.preventDefault(),e.close()}}
      @pointerdown=${wt}
      @click=${o=>{Tt(o)&&e.close()}}
    >
      ${rr({title:e.title,filterLabel:e.filterLabel,filtersOpen:e.filtersOpen,toggleFilters:e.toggleFilters,closeLabel:e.closeLabel,close:e.close,actions:e.filterCount?d`
              <span class="badge">${e.filterCount}</span>
            `:g})}
      ${ar(e.filtersOpen,e.filterLayout==="facets"?e.filters:d`
              <div class="chooser-facet">
                <div class="team-builder__fields" aria-label=${e.filterLabel}>${e.filters}</div>
              </div>
            `)}
      <div class="selection-pane__body">
        <md-outlined-text-field
          type="search"
          label=${e.searchLabel}
          .value=${j(e.query)}
          @input=${o=>e.search(o.currentTarget.value)}
        ></md-outlined-text-field>
        ${e.quickFilters??g}
        <p role="status" class="team-builder__hint">${e.countLabel}</p>
        ${e.status??g}
        ${e.groups&&e.renderGroup?d`
                <div
                  role="tablist"
                  aria-label=${e.title}
                  @keydown=${Je(n.map(o=>o.value),e.selected,e.select)}
                >
                  ${e.groups.map(o=>{let l=e.items.filter(s=>o.values.has(s.value));return e.renderGroup(o.title,l.length,i(l,!0))})}
                </div>
              `:i(e.items)}
        ${e.items.length?g:d`
                <p>${e.emptyLabel}</p>
              `}
        ${e.more?d`
                <button class="button button--text" @click=${e.more}>${e.moreLabel??"More"}</button>
              `:g}
      </div>
      <footer class="selection-pane__footer">
        <div id=${t} role=${e.selectedValues?"group":"tabpanel"} class="team-builder__picker-preview">
          ${e.preview}
        </div>
      </footer>
    </dialog>
  `}var ei=[["id","common.fields.id","ID","id"],["title","common.fields.title","Title","title"],["character","catalog.fields.character","Character","character"],["band","catalog.fields.band","Band","band"],["cardType","catalog.fields.attribute","Attribute","attribute"],["rarity","catalog.cards.fields.rarity","Rarity","rarity"],["performance","catalog.cards.fields.performance","Performance","performance"],["technique","catalog.cards.fields.technique","Technique","technique"],["visual","catalog.cards.fields.visual","Visual","visual"],["total","common.fields.total","Total","total"]],pr=["release","catalog.fields.release","Release","release"],ti=[["deckScore","catalog.analysis.fields.metaDeckScore","Average score"],["deckPower","catalog.analysis.fields.metaDeckPower","Power needed"],["deckPowerEvery","catalog.analysis.fields.metaDeckPowerEvery","Power needed in every order"],["deckReach","catalog.analysis.fields.metaDeckReach","Reach rate"],["deckPerMinute","catalog.analysis.fields.metaDeckPerMinute","Score per minute"],["deckSkip","catalog.analysis.fields.metaDeckSkip","Skip score"]];function gr(e,t,n={}){return(e==="song"?[["order","common.layout.order","Order","order"],["id","common.fields.id","ID","id"],["title","common.fields.title","Title","title"],["musicType","catalog.songs.fields.musicType","Music type","musicType"],["band","catalog.fields.band","Band","band"],["level","common.fields.level","Level","level"],["time","common.fields.time","Time","time"],...n.nativeScore?[["nativeScore","catalog.analysis.fields.metaNativeScore","Score","metaNativeScore"]]:[],["score","catalog.analysis.fields.metaScoreFactor",t("catalog.analysis.fields.metaScore","Factor","metaScore"),"metaScoreFactor"],["eff","catalog.analysis.fields.eff","Efficiency","eff"],...n.liveDeck?ti:[],["bpm","catalog.analysis.fields.bpm","BPM","bpm"],["n","catalog.analysis.fields.n","Notes","n"],["nps","catalog.analysis.fields.nps","NPS","nps"],["sr","catalog.analysis.fields.sr","Skill ratio","sr"],...n.ranks?[...["C","B","A","S","SS"].map(r=>[`rank${r}`,"catalog.analysis.fields.metaRankScore","{rank} score"]),["deckPower","catalog.analysis.fields.metaDeckPower","Power needed","metaDeckPower"]]:[],["category","common.fields.category","Category","category"],["composer","catalog.songs.fields.composer","Composer","composer"],["lyrics","catalog.songs.fields.lyrics","Lyrics","lyrics"],["arrangement","catalog.songs.fields.arrangement","Arrangement","arrangement"],pr]:[...ei,...e==="member"?[["leaderSkill","catalog.cards.fields.leaderSkill","Leader skill","leaderSkill"],["liveSkill","catalog.cards.fields.liveSkill","Live skill","liveSkill"],["gekisouSkill","catalog.cards.fields.gekisouSkill","GEKISO skill","gekisouSkill"]]:[["supportSkill","catalog.cards.fields.supportSkill","Support skill","supportSkill"],["gekisouSupportSkill","catalog.cards.fields.gekisouSupportSkill","GEKISO support skill","gekisouSupportSkill"]],pr]).map(([r,i,o,l])=>({value:r,label:/^rank(?:C|B|A|S|SS)$/u.test(r)?t(i,o,l).replace("{rank}",r.slice(4)):t(i,o,l)}))}function Bn(e,t,n){let a=n.order==="asc"?1:-1,r=Array.isArray(e)?Number(e[0]):Number(e),i=Array.isArray(t)?Number(t[0]):Number(t),o=Number.isFinite(r),l=Number.isFinite(i);if(n.numeric){if(o!==l)return o?-1:1;if(!o&&!l)return n.leftId.localeCompare(n.rightId,"en",{numeric:!0})*a}let s=o&&l?r-i:(n.text?.(e)??String(e??"")).localeCompare(n.text?.(t)??String(t??""),n.locale,{numeric:!0,sensitivity:"base"}),m=n.leftId.localeCompare(n.rightId,"en",{numeric:!0,sensitivity:"base"});return(s||m)*a}function br(e){return d`<div class="row full" data-catalog-sort>
    <md-outlined-select class="grow" label=${e.label} .value=${e.sort}
      @change=${t=>e.changeSort(t.currentTarget.value)}>
      ${e.options.map(t=>d`<md-select-option value=${t.value} ?selected=${e.sort===t.value}>
        <div slot="headline">${t.label}</div>
      </md-select-option>`)}
    </md-outlined-select>
    ${ae({label:e.order==="asc"?e.ascendingLabel:e.descendingLabel,icon:e.order==="asc"?"arrow_upward":"arrow_downward",variant:"outlined",onClick:()=>e.changeOrder(e.order==="asc"?"desc":"asc")})}
  </div>`}var Pn=new WeakMap;function Wt(e,t){return Pn.get(e)?.get(t)??{sort:"release",order:"desc"}}function fr(e,t){let n=Wt(e,t),a=r=>{let i=Pn.get(e);i||Pn.set(e,i=new Map),i.set(t,{...n,...r}),e.requestUpdate()};return br({...n,label:e.common("common.actions.sort","Sort"),options:gr(t==="members"?"member":t==="snaps"?"support":"song",(r,i)=>e.common(r,i)),ascendingLabel:e.common("common.layout.ascending","Ascending"),descendingLabel:e.common("common.layout.descending","Descending"),changeSort:r=>a({sort:r}),changeOrder:r=>a({order:r})})}function vr(e){let t=e.releasedAt??e.publishedAt??e.publicStartAt??e.startAt;return Number((Array.isArray(t)?t.find(n=>Number(n)>0):t)||0)}function nt(e,t,n){let a=dt(t.resolvedSkills)[n],r=dt(Array.isArray(a)?a[0]:a);return e.catalog.text(r.skillName)||String(r.id??"")}function Cs(e,t,n){let a=e.catalog,r=Wt(e,t),i=new Map(n.map(o=>{let l=a.cardFilterItem(t,o),s=c=>Number(dt(l.stat)[c]||l[c]||0),m;switch(r.sort){case"id":m=String(o);break;case"title":m=a.cardName(t,o);break;case"character":m=a.characterIds(t,o)[0]||0;break;case"band":m=Number(l.bandId||a.bandIds(t,o)[0]||0);break;case"performance":case"technique":case"visual":m=s(r.sort);break;case"total":m=s("performance")+s("technique")+s("visual");break;case"leaderSkill":m=nt(e,l,"leader");break;case"liveSkill":m=nt(e,l,"live");break;case"gekisouSkill":m=nt(e,l,"gekisou");break;case"supportSkill":m=nt(e,l,"support");break;case"gekisouSupportSkill":m=nt(e,l,"gekisouSupport");break;case"release":m=vr(l);break;case"rarity":m=$e(l.rarity);break;default:m=l[r.sort]}return[o,m]}));return[...n].sort((o,l)=>Bn(i.get(o),i.get(l),{...r,locale:e.locale,leftId:String(o),rightId:String(l)}))}var yr=["time","score","eff","bpm","n","nps","sr"];function hr(e){return yr.includes(Wt(e,"songs").sort)}function xr(e,t,n=a=>e.catalog.song(a)){let a=e.catalog,r=Wt(e,"songs"),i=l=>{let s=n(l.songId);if(r.sort==="id")return String(l.songId);if(r.sort==="title")return a.songTitle(l.songId);if(r.sort==="band")return a.songArtist(l.songId);if(r.sort==="release")return vr(s);if(r.sort==="order")return Number(s.displayOrder??s.order??s.sortOrder??l.songId);if(r.sort==="category")return Number((Array.isArray(s.musicCategories)?s.musicCategories[0]:99)||99);if(r.sort==="lyrics")return a.text(s.lyricist);if(r.sort==="arrangement")return a.text(s.arranger);if(r.sort==="composer")return a.text(s.composer);if(r.sort==="musicType")return Number(s.musicType||0);if(r.sort==="level"){let c=a.difficultyRows(l.songId).find(x=>Number(x.difficulty)===l.difficulty);return Number(c?.sortLevel??c?.displayLevel??c?.playLevel??Number.NaN)}let m=a.chartMetadata(l);return m?r.sort==="bpm"?Number(m.firstBpm??m.minBpm??m.maxBpm):r.sort==="n"?Number(m.n??m.noteCount??m.canonicalNoteCount):m[r.sort]==null?Number.NaN:Number(m[r.sort]):Number.NaN},o=new Map(t.map(l=>[`${l.songId}:${l.difficulty}`,i(l)]));return[...t].sort((l,s)=>Bn(o.get(`${l.songId}:${l.difficulty}`),o.get(`${s.songId}:${s.difficulty}`),{...r,locale:e.locale,leftId:`${l.songId}:${l.difficulty}`,rightId:`${s.songId}:${s.difficulty}`,numeric:r.sort==="level"||yr.includes(r.sort)}))}var $r=new WeakMap,kr=e=>`${e.server}:${e.releaseId}:${e.sourceId}`;async function ni(e,t,n){let a=$r.get(e);a||$r.set(e,a=new Map);let r=new Map(t.map(({songId:i})=>{let o=e.songIdentity(i);return[kr(o),o]}));return await Promise.all([...r].map(async([i,o])=>{if(a.has(i)||!o.sourceId||o.server!=="intl"&&o.server!=="jp")return;let l=await fetch(`/data/chart-rates/${o.server}.json`,{signal:n});if(!l.ok)return;let s=await l.json();!n.aborted&&s?.schema===Da&&s.releaseId===o.releaseId&&s.sourceId===o.sourceId&&s.charts&&typeof s.charts=="object"&&a.set(i,s)})),i=>a.get(kr(e.songIdentity(i.songId)))}var Sr=5,_r=10,ai=["query","bands","categories","attributes","gekisouTypes","gekisouMatch","difficulties","minLevel","maxLevel","maxSeconds"],wr=["EASY","NORMAL","HARD","EXPERT","SPECIAL"];function An(e,t,n,a){if(n===null)return It(t);let r=[...new Set(t.map(i=>i.songId))].flatMap(i=>e.catalog.difficultyRows(i).map(o=>({songId:i,difficulty:Number(o.difficulty)})).filter(o=>o.difficulty<=n&&a(o)));return It([...t,...r])}function On(e,t,n){return d`
    <md-outlined-select
      label=${e.t("includeDifficultiesThrough","Include difficulties up to")}
      .value=${t===null?"off":String(t)}
      @change=${a=>{let r=a.target.value;n(r==="off"?null:Number(r))}}
    >
      <md-select-option value="off"><div slot="headline">${e.t("selectedDifficultiesOnly","Selected charts only")}</div></md-select-option>
      ${wr.map((a,r)=>d`<md-select-option value=${String(r)}><div slot="headline">${a}</div></md-select-option>`)}
    </md-outlined-select>
  `}function Ds(e){let t=e.songPicker,n=e.catalog,a=f=>t.songRules?Ke(n.song(f),t.songRules):n.song(f),r=t.context??`${e.tab}:${t.single?"single":"charts"}`;t.initialized||(t=e.songPicker={...t,...e.songPickerPreferences.get(r),difficulties:e.songDifficulties,includeThrough:t.expandDifficulties?e.songDifficultyCeiling:null,initialized:!0,opener:typeof document>"u"?void 0:document.activeElement});let i=f=>{let R=e.songPicker,P=ai.some(Vr=>Vr in f);P&&R.recommendationRequest?.abort();let X=e.songPicker={...R,...P?{recommendation:void 0,recommendationRequest:void 0,recommendationError:void 0,...R.view==="recommended"?{view:"all"}:{}}:{},...f},{query:U,bands:ee,categories:an,attributes:rn,gekisouTypes:He,gekisouMatch:st,difficulties:Ve,minLevel:ct,maxLevel:Gr,maxSeconds:Hr}=X;e.songPickerPreferences.set(r,{query:U,bands:ee,categories:an,attributes:rn,gekisouTypes:He,gekisouMatch:st,difficulties:Ve,minLevel:ct,maxLevel:Gr,maxSeconds:Hr}),f.difficulties&&e.setSongPickerPreferences(f.difficulties,e.songDifficultyCeiling),e.requestUpdate()},o=()=>{e.songPicker?.recommendationRequest?.abort(),e.songPicker=null,e.requestUpdate(),e.updateComplete.then(()=>t.opener?.isConnected&&t.opener.focus())},l=f=>{let R=n.songBands(f).map(String);if(R.length)return R;let P=n.song(f),X=Array.isArray(P.artistName??P.bandName)?P.artistName??P.bandName:[P.artistName??P.bandName],U=String(P.artistId||X.find(ee=>typeof ee=="string"&&ee.trim())||"").normalize("NFKC");return U?[`credit:${U}`]:[]},s=new Map(Object.keys(n.data.bands).map(f=>[f,{value:f,label:n.bandName(Number(f))}])),m=f=>{let R=["original","virtual","jpop","anime","game"][Number(f)-1];return R?e.common(`catalog.songs.types.${R}`,f):f},c=f=>(n.song(f).musicCategories??[]).map(String),x=[...new Set(Object.keys(n.data.songs).flatMap(f=>c(Number(f))))].sort((f,R)=>Number(f)-Number(R)).map(f=>({value:f,label:m(f)})),$=new Map;for(let f of Object.keys(n.data.songs).map(Number))for(let R of l(f))R.startsWith("credit:")&&($.set(R,f),s.set(R,{value:R,label:n.songArtist(f)}));let p={game:"our-notes",kind:"song",aliases:[...[...$].map(([f,R])=>({key:"collectionBand",value:f,names:Me({bandName:n.song(R).artistName??n.song(R).bandName},"band")})),...Object.entries(n.data.characters).map(([f,R])=>({key:"character",value:f,names:Me(R,"character")})),...Object.entries(n.data.bands).map(([f,R])=>({key:"collectionBand",value:f,names:Me({...R,bandName:R.bandName??R.name},"band")}))]},h=et(t.query,p),k=h.text.normalize("NFKC").toLocaleLowerCase(e.locale),u=h.facets,b=[t.minLevel,...u.minLevel?.map(Number)??[]].filter(f=>f!=null),I=[t.maxLevel,...u.maxLevel?.map(Number)??[]].filter(f=>f!=null),w=b.length?Math.max(...b):null,E=I.length?Math.min(...I):null,y=u.gekisouMatch?.[0]??t.gekisouMatch,_=t.difficulties??[t.difficulty],S=f=>(!t.allowedSongIds||t.allowedSongIds.includes(f.songId))&&(!t.allowedCharts||t.allowedCharts.some(R=>R.songId===f.songId&&R.difficulty===f.difficulty))&&n.difficultyRows(f.songId).some(R=>Number(R.difficulty)===f.difficulty),C=Object.keys(n.data.songs).map(Number).filter(f=>n.songVisible(f)).sort((f,R)=>R-f).flatMap(f=>n.difficultyRows(f).map(R=>({songId:f,difficulty:Number(R.difficulty)})).filter(S));n.loadSongMetadata(C.map(f=>f.songId));let M=hr(e),L=t.maxSeconds!=null||M,V=L&&C.some(f=>n.metadataStatus(f.songId)==="loading"),Q=L&&C.some(f=>n.metadataStatus(f.songId)==="error"),W=t.maxSeconds!=null&&(V||Q),v=C.filter(f=>{let R=f.songId,P=a(R);if(!_.includes(f.difficulty)||t.bands.length&&!l(R).some(ee=>t.bands.map(String).includes(ee))||!te(c(R),(t.categories??[]).map(String))||t.attributes.length&&!t.attributes.includes(Number(P.musicType))||!un(P,t.gekisouTypes,y)||!te(l(R),u.collectionBand||[])||!te(c(R),u.category||[])||!te((Array.isArray(P.vocalCharacterIds)?P.vocalCharacterIds:[]).map(String),u.character||[])||!te([String(P.musicType)],u.type||[])||!un(P,u.gekisouType||[],y))return!1;let X=n.difficultyRows(R).find(ee=>Number(ee.difficulty)===f.difficulty),U=Number(X.displayLevel??X.playLevel??X.sortLevel);if((w!==null||E!==null)&&!Number.isFinite(U)||w!==null&&U<w||E!==null&&U>E)return!1;if(t.maxSeconds!=null){let ee=n.chartMetadata(f)?.time;if(typeof ee!="number"||!Number.isFinite(ee)||ee>t.maxSeconds)return!1}return!k||`${n.songTitle(R)} ${n.songArtist(R)}`.normalize("NFKC").toLocaleLowerCase(e.locale).includes(k)}),O=new Set(v.map(ue)),q=t.songs.filter(S),se=An(e,q,t.includeThrough??null,S),ne=t.songs.filter(f=>!S(f)),Y=q.filter(f=>!O.has(ue(f))),A=t.recommend&&e.canRecommendCharts,K=f=>f&&JSON.stringify([e.snapshot?.owner,f]),Le=t.recommendation,F=A&&Le&&Le.input===K(e.chartRecommendationRequest(v))?Le:void 0,xe=F&&t.view==="recommended",ce=xe?F.charts.slice(0,F.count):xr(e,t.view==="outside"?Y:t.view==="unavailable"?ne:v,a),ge=new Set(t.songs.map(ue)),Ge=new Set(ce.map(ue)),it=ce.filter(S),be=(f,R)=>{let P=e.songPicker;P.recommendationRequest?.abort(),i({songs:It(f),undo:P.songs,recommendationRequest:void 0,recommendationError:void 0,...R}),dr(e.t("selectionUpdated","Selection updated"))},ot=async()=>{let f=e.chartRecommendationRequest(v),R=e.master;if(!R||!f||f.goal.kind!=="score"||f.members.length<5){i({recommendationError:"team"});return}let P=K(f),X=new AbortController;e.songPicker?.recommendationRequest?.abort();let U=()=>e.catalog===n&&e.songPicker?.recommendationRequest===X,ee=()=>U()&&!X.signal.aborted&&e.isConnected&&K(e.chartRecommendationRequest(v))===P;i({recommendationRequest:X,recommendationError:void 0});try{let[{rankPickerCharts:an},rn]=await Promise.all([import("./chart-recommendation-EJKYIZ4Y.js"),ni(n,f.goal.songs,X.signal)]);if(!ee())return;let He=await an(R,f,rn,X.signal);if(!ee())return;if(!He?.length){i({recommendationError:He?"team":"data"});return}let st=!e.songPicker.songs.length,Ve={input:P,charts:He.slice(0,_r),count:Sr,adopted:st},ct={view:"recommended",recommendation:Ve};st?be(Ve.charts.slice(0,Ve.count),ct):i(ct)}catch{ee()&&i({recommendationError:"data"})}finally{U()&&i({recommendationRequest:void 0})}},Z=()=>{!F||K(e.chartRecommendationRequest(v))!==F.input||be(F.charts.slice(0,F.count),{recommendation:{...F,adopted:!0}})},lt=()=>{if(!F||K(e.chartRecommendationRequest(v))!==F.input)return;let f={...F,count:_r};F.adopted?be([...e.songPicker.songs,...f.charts.slice(F.count)],{recommendation:f}):i({recommendation:f})},Ur=f=>{let R=ce.find(P=>ue(P)===f);e.songPicker?.recommendationRequest?.abort(),i({recommendationRequest:void 0,recommendationError:void 0,songs:ge.has(f)?t.songs.filter(P=>ue(P)!==f):t.single?[R]:[...t.songs,R],undo:t.songs})},Zn=(f,R)=>i({...R,query:$n(t.query,p,f)}),Te=[];(w!=null||E!=null)&&Te.push({label:`Lv. ${w??"\u2014"}\u2013${E??"\u2014"}`,clear:()=>Zn(["minLevel","maxLevel"],{minLevel:null,maxLevel:null})}),t.maxSeconds!=null&&Te.push({label:`\u2264 ${Na(t.maxSeconds)}`,clear:()=>i({maxSeconds:null})});for(let[f,R,P,X]of[["collectionBand",[...t.bands.map(String),...u.collectionBand??[]],{bands:[]},U=>s.get(U)?.label??n.bandName(Number(U))],["category",[...(t.categories??[]).map(String),...u.category??[]],{categories:[]},m],["type",[...t.attributes.map(String),...u.type??[]],{attributes:[]},U=>n.attributeName(Number(U))],["character",u.character??[],{},U=>n.characterName(Number(U))],["gekisouType",[...t.gekisouTypes,...u.gekisouType??[]],{gekisouTypes:[],gekisouMatch:"only"},U=>U==="Mix"?e.common("catalog.songs.gekisou.mixed","Mixed"):U==="JustCount"?"JUST":U.toUpperCase()]])R.length&&Te.push({label:[...new Set(R)].map(X).join(" / ")+(f==="gekisouType"?` / ${y==="contains"?e.common("catalog.songs.gekisou.contains","Contains a selected type"):e.common("catalog.songs.gekisou.only","Only selected types")}`:""),clear:()=>Zn(f==="gekisouType"?[f,"gekisouMatch"]:[f],P)});let ea=()=>i({bands:[],categories:[],attributes:[],gekisouTypes:[],gekisouMatch:"only",minLevel:null,maxLevel:null,maxSeconds:null,query:$n(t.query,p)});return Kt({id:"tb-song-picker",title:t.title??e.t("chooseSongs","Choose songs"),closeLabel:e.common("common.actions.close","Close"),close:o,searchLabel:e.common("common.actions.search","Search"),query:t.query,search:f=>i({query:f}),filterLabel:`${e.t("filters","Filters")}${Te.length?` / ${Te.length}`:""}`,filtersOpen:t.filtersOpen,layout:"grid",filterCount:Te.length,toggleFilters:()=>i({filtersOpen:!t.filtersOpen}),filterLayout:"facets",quickFilters:d`
      <div class="stack tb-picker-quick">
        ${or({label:e.t("difficulty","Difficulty"),choices:wr.map((f,R)=>({label:f,value:R})),selected:_,change:f=>i({difficulties:f}),allLabel:t.single?void 0:e.t("allChartDifficulties","All difficulties")})}
        ${t.expandDifficulties?On(e,t.includeThrough??null,f=>i({includeThrough:f})):g}
        ${lr({items:Te,removeLabel:e.common("common.actions.remove","Remove"),clearLabel:e.t("clearFilters","Clear filters"),clear:ea})}
        ${A?d`
          <div class="row row--wrap" aria-busy=${String(!!t.recommendationRequest)}>
            <button class="button button--tonal" type="button"
              ?disabled=${!F&&(W||!v.length||!!t.recommendationRequest)}
              @click=${()=>F?i({view:xe?"all":"recommended"}):void ot()}>
              ${xe?e.t("browseCharts","Browse charts"):F?e.t("recommendedCharts","Recommended charts"):t.recommendationRequest?e.t("chartRecommendationLoading","Finding charts\u2026"):e.t("recommendChartCount","Recommend {count} charts",{count:Sr})}
            </button>
            ${xe&&F.charts.length>F.count?d`
              <button class="button button--text" type="button" @click=${lt}>
                ${e.t("expandChartRecommendations","Expand to {count}",{count:F.charts.length})}
              </button>
            `:g}
            ${xe&&!F.adopted?d`
              <button class="button button--text" type="button" @click=${Z}>
                ${e.t("applyChartRecommendations","Replace with recommendations")}
              </button>
            `:g}
          </div>
        `:g}
      </div>
    `,filters:ir({t:(f,R)=>e.t(f,R),common:(f,R)=>e.common(f,R),state:{category:String(t.categories?.[0]??""),band:String(t.bands[0]??""),attribute:String(t.attributes[0]??""),gekisouTypes:t.gekisouTypes,gekisouMatch:t.gekisouMatch??"only",minLevel:w,maxLevel:E,maxSeconds:t.maxSeconds??null},categories:x,bands:[...s.values()].filter(f=>f.label),attributes:(t.songRules?[1,2,3,4,5,99]:[1,2,3,4,5]).map(f=>({value:String(f),label:n.attributeName(f)})),gekisou:!0,duration:!0,sort:fr(e,"songs"),change:({category:f,band:R,attribute:P,gekisouTypes:X,...U})=>i({...U,...f===void 0?{}:{categories:f?[Number(f)]:[]},...R===void 0?{}:{bands:R?[R.startsWith("credit:")?R:Number(R)]:[]},...P===void 0?{}:{attributes:P?[Number(P)]:[]},...X===void 0?{}:{gekisouTypes:[...X]}})}),kind:"song",items:ce.map(f=>{let R=n.songOptions(f.songId,f.difficulty),P=Number(a(f.songId).musicType);return{...R,value:ue(f),label:`${n.songTitle(f.songId)} ${n.difficultyLabel(f.songId,f.difficulty)}`,marks:[{at:"start",image:n.attributeIcon(P),label:n.attributeName(P)},...(R.marks??[]).filter(X=>X?.at!=="start")]}}),selected:"",selectedValues:ge,select:Ur,countLabel:t.recommendationError==="data"?e.t("chartRecommendationMissing","Chart recommendation data unavailable"):t.recommendationError==="team"?e.t("chartRecommendationUnavailable","Check cards and calculation settings"):e.t("chartCount","{count} charts",{count:ce.length}),emptyLabel:W?"":e.t("noSongs","No songs match"),status:Q?sr({state:"error",message:M?e.common("common.loading.failed","Loading failed"):e.t("durationFailed","Duration could not be loaded"),retryLabel:e.common("common.actions.retry","Retry"),onRetry:()=>n.retrySongMetadata(C.map(f=>f.songId))}):d`
          <span role="status">
            ${V?M?e.common("common.states.loading","Loading"):e.t("durationLoading","Loading durations"):t.maxSeconds!=null?e.t("unknownDuration","Unknown duration {count}",{count:C.filter(f=>n.metadataStatus(f.songId)==="ready"&&typeof n.chartMetadata(f)?.time!="number").length}):""}
          </span>
          ${!ce.length&&!W?d`
                  <button class="button button--text" @click=${ea}>
                    ${e.t("clearFilters","Clear filters")}
                  </button>
                `:g}
        `,preview:d`
      <div class="stack tb-picker-footer">
        <div class="tb-picker-tools">
          <div class="cluster tb-picker-count" role="status">
            <span>${e.t("selectedCharts","Selected {count}",{count:q.length})}</span>
            ${Y.length||t.view==="outside"?d`
                    <button
                      class="button button--text"
                      @click=${()=>i({view:t.view==="outside"?"all":"outside"})}
                      aria-pressed=${String(t.view==="outside")}
                    >
                      ${e.t("outsideCharts","Outside filters {count}",{count:Y.length})}
                    </button>
                  `:g}
            ${ne.length||t.view==="unavailable"?d`
                    <button
                      class="button button--text"
                      @click=${()=>i({view:t.view==="unavailable"?"all":"unavailable"})}
                      aria-pressed=${String(t.view==="unavailable")}
                    >
                      ${e.t("unavailableCharts","Unavailable {count}",{count:ne.length})}
                    </button>
                  `:g}
          </div>
          <div class="cluster tb-picker-actions">
            ${t.single?g:d`
              <button class="button button--text" type="button"
                ?disabled=${W||!it.length||it.every(f=>ge.has(ue(f)))}
                @click=${()=>be([...t.songs,...it])}>
                ${e.t("selectAllCharts","Select all")}
              </button>
            `}
            <button class="button button--text" type="button" ?disabled=${!t.songs.some(f=>Ge.has(ue(f)))}
              @click=${()=>be(t.songs.filter(f=>!Ge.has(ue(f))))}>
              ${e.t("deselectAllCharts","Deselect all")}
            </button>
            ${t.single?g:Aa({id:"tb-selection-actions",label:e.t("selectionActions","Selection actions"),items:[{label:e.t("replaceSelection","Use only filtered charts"),disabled:W,run:()=>be(v,{view:"all",recommendation:void 0})},{label:e.t("selectFullChartPool","Select full chart pool"),disabled:!C.length,run:()=>be(C,{view:"all",recommendation:void 0})},{label:e.t("clearAllCharts","Clear all selections"),disabled:!t.songs.length,run:()=>be([])}]})}
            <button class="button button--text" type="button" ?disabled=${!t.undo}
              @click=${()=>{e.songPicker?.recommendationRequest?.abort(),t.undo&&i({songs:t.undo,undo:void 0,view:"all",recommendation:void 0,recommendationRequest:void 0,recommendationError:void 0})}}>
              ${e.t("undoSelection","Undo")}
            </button>
          </div>
        </div>
        <button
          class="button"
          @click=${()=>{t.expandDifficulties&&e.setSongPickerPreferences(e.songDifficulties,t.includeThrough??null),t.change(se),o()}}
        >
          ${e.t("applyCharts","Use {count} charts",{count:se.length})}
        </button>
      </div>
    `})}function qn(e,t=!1){if(!e||!/^\d{4}-\d{2}-\d{2}$/.test(e))return;let n=new Date(`${e}T00:00:00`);if(Number.isFinite(n.getTime()))return t&&n.setDate(n.getDate()+1),n.getTime()}var ri={attribute:"catalog.fields.attribute",availableImage:"media.availability.availableImage",band:"catalog.fields.band",bands:"catalog.fields.bands",character:"catalog.fields.character",characters:"navigation.characters",gekisouSupportSkill:"catalog.cards.fields.gekisouSupportSkill",maximum:"common.fields.maximum",minimum:"common.fields.minimum",no:"common.states.no",performance:"catalog.cards.fields.performance",rarity:"catalog.cards.fields.rarity",release:"catalog.fields.release",support:"navigation.support",supportSkill:"catalog.cards.fields.supportSkill",technique:"catalog.cards.fields.technique",total:"common.fields.total",visual:"catalog.cards.fields.visual",yes:"common.states.yes"};function Cr(e){return e.trim().replace(/\s*(?:\([^()]+(?:ボーナス| Bonus| 보너스)\)|（[^（）]+加成）)$/u,"")}var Tr=new WeakMap;function ii(e,t){let n=e.catalog,a=Tr.get(n);if(a?.query===t)return a.plan;let r=et(t,{game:"our-notes",kind:"card",aliases:[...Object.entries(n.data.characters).map(([i,o])=>({key:"character",value:i,names:Me(o,"character")})),...Object.entries(n.data.bands).map(([i,o])=>({key:"collectionBand",value:i,names:Me({...o,bandName:o.bandName??o.name},"band")}))]});return Tr.set(n,{query:t,plan:r}),r}function Rr(e,t,n,a){let r=e.catalog,i=t==="members"?r.member(n):r.snap(n);if(!i||a.facets.hideRequired?.includes("yes")&&((t==="members"?e.view?.members:e.view?.snaps)?.get(n)?.lock||e.searchSettings.required[t].includes(n)))return!1;let o=Ga(i);if(o.active===!1||o.active!==!0&&!pn(t==="members"?"cards":"support-cards",i,String(n))||!te(r.bandIds(t,n).map(String),a.bands.map(String))||!te(r.characterIds(t,n).map(String),a.characters.map(String))||!te([String(i.attribute)],a.attributes.map(String))||!te([String(i.rarity)],a.rarities.map(String)))return!1;let l=r.cardFilterItem(t,n),s=t==="snaps"?Cr:sn;for(let w of on){if(!w.kinds.includes(t==="members"?"member":"support"))continue;let E=a.facets[w.key]?.map(s);if(E?.length&&!ln(l,w.role).some(y=>E.includes(s(cn(y)))))return!1}if(!te([ta(l)?"yes":"no"],a.facets.artwork||[]))return!1;let m=["performance","technique","visual"].reduce((w,E)=>{let y=l.stat?.[E],_=typeof y=="number"&&!Number.isFinite(y)?y:y||l[E]||0;return w+Number(_)},0),c=a.facets.minTotal?.[0],x=a.facets.maxTotal?.[0];if((c||x)&&(!Number.isFinite(m)||m<=0||c&&m<Number(c)||x&&m>Number(x)))return!1;let $=l.releasedAt,p=Array.isArray($)?Number($.find(w=>Number(w)>0)||0):Number($||0),h=qn(a.facets.releaseFrom?.[0]),k=qn(a.facets.releaseTo?.[0],!0);if(h!==void 0&&(!p||p<h)||k!==void 0&&(!p||p>=k))return!1;let u=ii(e,a.query);if(!te(r.bandIds(t,n).map(String),u.facets.collectionBand||[])||!te(r.characterIds(t,n).map(String),u.facets.character||[])||!te([String(i.attribute)],u.facets.type||[])||!te([String(i.rarity)],u.facets.rarity||[])||!tr(i.rarity,u.facets,!0))return!1;let b=u.text.normalize("NFKC").toLocaleLowerCase(e.locale).trim(),I=[`#${n}`,r.cardName(t,n),...r.characterIds(t,n).map(w=>r.characterName(w)),...r.bandIds(t,n).map(w=>r.bandName(w))].join(" ").normalize("NFKC").toLocaleLowerCase(e.locale);return!b||I.includes(b)}function Ir(e,t,n){let a=e.catalog,r=t.kind,i=Object.values(r==="members"?a.data.members:a.data.snapshots).filter(p=>pn(r==="members"?"cards":"support-cards",p,String(p.id))),o=p=>ca(e.locale,ri[p]??p,p),l=e.common("common.states.all","All"),s=(p,h,k,u)=>me(p,d`
    ${J({label:l,selected:!h.length,onToggle:()=>u([])})}
    ${k.map(b=>J({...b,selected:h.includes(b.value),onToggle:()=>u(h.includes(b.value)?h.filter(I=>I!==b.value):[...h,b.value])}))}
  `),m=(p,h,k)=>s(h,t[p].map(String),k,u=>n({[p]:u.map(Number)})),c=(p,h)=>n({facets:{...t.facets,[p]:h}}),x=r==="members"?"member":"support",$=r==="snaps"?Cr:sn;return d`
    ${me(e.t("required","Always include"),J({label:e.t("hideRequired","Hide required cards"),selected:t.facets.hideRequired?.includes("yes")??!1,onToggle:()=>c("hideRequired",t.facets.hideRequired?.includes("yes")?[]:["yes"])}))}
    ${m("bands",o("band"),[...new Set(i.flatMap(p=>a.bandIds(r,p.id)))].sort((p,h)=>p-h).map(p=>({value:String(p),label:a.bandName(p),image:a.bandIcon(p)||void 0})))}
    ${m("characters",o("character"),[...new Set(i.flatMap(p=>a.characterIds(r,p.id)))].sort((p,h)=>p-h).map(p=>({value:String(p),label:a.characterName(p),image:a.characterFace(p)||void 0})))}
    ${m("attributes",o("attribute"),[...new Set(i.map(p=>p.attribute))].filter(p=>p>=1&&p<=5).sort().map(p=>({value:String(p),label:a.attributeName(p),image:a.attributeIcon(p)||void 0})))}
    ${m("rarities",o("rarity"),[...new Set(i.map(p=>p.rarity))].sort((p,h)=>$e(h)-$e(p)).map(p=>({value:String(p),label:mt(p),image:a.rarityIcon(p)||void 0,imageOnly:!!a.rarityIcon(p)})))}
    ${on.filter(p=>p.kinds.includes(x)).map(p=>{let h=new Map;for(let k of i)for(let u of ln(a.cardFilterItem(r,k.id),p.role)){let b=$(cn(u));b&&!h.has(b)&&h.set(b,{value:b,label:$(a.text(u.skillName)),image:String(u.icon||"")||void 0})}return s(o(p.key),[...new Set((t.facets[p.key]||[]).map($))],[...h.values()],k=>c(p.key,k))})}
    ${s(o("availableImage"),t.facets.artwork||[],["yes","no"].map(p=>({value:p,label:o(p)})),p=>c("artwork",p))}
    ${me(o("total"),d`<div class="chooser-filter-options">${["minTotal","maxTotal"].map(p=>d`<md-outlined-text-field type="number" min="0" label=${o(p.startsWith("min")?"minimum":"maximum")} .value=${j(t.facets[p]?.[0]||"")} @input=${h=>{let k=h.target.value;c(p,k?[k]:[])}}></md-outlined-text-field>`)}</div>`)}
    ${me(o("release"),d`<div class="chooser-filter-options">${["releaseFrom","releaseTo"].map(p=>d`<md-outlined-text-field type="date" label=${o(p==="releaseFrom"?"minimum":"maximum")} .value=${j(t.facets[p]?.[0]||"")} @input=${h=>{let k=h.target.value;c(p,k?[k]:[])}}></md-outlined-text-field>`)}</div>`)}
    <button class="button button--text" type="button" @click=${()=>n({bands:[],characters:[],attributes:[],rarities:[],facets:{}})}>${e.t("clearFilters","Clear filters")}</button>
  `}function oi(e){if(e.code==="practice"||e.code==="player")return e.target;if(e.code==="constraint")return e.target==="minBonus"?"minBonus":"constraints";if(e.code==="inventory")return"inventory";if(e.code==="chart")return e.target.startsWith("challenge")?"challenge-selection":"selection";if(e.code==="mode")return e.target==="gekiso-input"?"gekiso-input":null;if(e.code==="event")return["consumption","challenge-consumption"].includes(e.target)?e.target:"event";if(e.code==="skill"){let t=/^(m\d+|s\d+)(?:[.:/]|$)/u.exec(e.target)?.[1];if(t)return`${t}.use`}return null}function Fn(e,t){return e.pt.showIssues&&e.pt.issues.some(n=>oi(n)===t)||t==="minBonus"&&e.submitted&&e.inputIssues().some(n=>n.field==="tb-min-bonus")}function jn(e,t,n){let a=Fn(e,t);return d`
    <div
      id=${t==="minBonus"?"tb-min-bonus":g}
      ?data-tb-field=${t==="minBonus"}
      class=${`pt-field${a&&t!=="minBonus"?" pt-field--invalid":""}`}
      data-pt-field=${t}
      tabindex="-1"
      role="group"
      aria-invalid=${a?"true":g}
    >
      ${n}
    </div>
  `}var Mr=[{id:"score",icon:"music_note"},{id:"gekiso",icon:"local_fire_department"},{id:"power",icon:"bolt"},{id:"potential",icon:"auto_awesome"}];function Er(e,t="score"){let n=e.tab==="arena"?e.arena.draft.build:e.settings,a=t==="rewards"?n.ptSamplingMode:n.gekisoSamplingMode,r=t==="rewards"?n.ptLuckSamples:n.gekisoSeeds,i=t==="score"&&e.searchSettings.arena?.objective==="sections",o=t==="score"&&a==="auto"&&!i,l=i?e.t("arena.sections.sampling","Random sampling"):e.t("pt.luckSampling","LUCK calculation");return d`
    <div class="stack">
      <div class="row row--between">
        <span class="tb-field__label">${l}</span>
        ${Ie(e,i?"sections":"luck")}
      </div>
      ${G({label:l,value:a,options:[{value:"auto",label:t==="score"&&!i?e.t("luckExpectation","Probability expectation"):e.t("luckAutomaticSamples","Automatic ({count} runs)",{count:32})},{value:"manual",label:e.t("luckSimulation","Random simulations")}],onSelect:s=>e.updateSettings(t==="rewards"?{ptSamplingMode:s}:{gekisoSamplingMode:s,...s==="manual"&&r<=0?{gekisoSeeds:32}:{}})})}
      ${a==="manual"&&!o?d`
            <md-outlined-text-field
              id="tb-luck-samples"
              data-tb-field
              type="number"
              min="1"
              max=${String(Oe)}
              step="1"
              inputmode="numeric"
              label=${e.t("luckSimulationCount","Simulation runs")}
              .value=${j(String(r))}
              ?error=${e.submitted&&!Ct(r,1)}
              @change=${s=>e.updateSettings(t==="rewards"?{ptLuckSamples:Number(s.target.value)}:{gekisoSeeds:Number(s.target.value)})}
            ></md-outlined-text-field>
          `:g}
    </div>
  `}function li(e){let t=e.searchSettings,n=e.constraintLimits(),a=t.minMissionMembers.reduce((i,o)=>i+o,0),r=(i,o)=>{let l=[...t.minMissionMembers];l[i]=o,e.updateSettings({minMissionMembers:l})};return d`<div class="stack" id="tb-mission-members" data-tb-field tabindex="-1">
    <div class="row row--between">
      <span class="tb-field__label">${e.t("missionMembers","GEKISO skill members")}</span>
      <span class="tb-results__meta tabular" role="status" aria-label=${e.t("missionMemberTotal","Minimums set: {count} / 5",{count:a})}>${a} / 5</span>
      ${Ie(e,"members")}
    </div>
    ${[[0,"COMBO"],[2,"JUST"],[1,"LUCK"]].map(([i,o])=>{let l=e.t("missionMemberMinimum","{role} members (minimum)",{role:o});return d`<div class="stack stack--tight">
        <div class="row row--between">
          <span class="tb-field__label">${l}</span>
          <span class="cluster"><span class="tb-results__meta tabular">${e.t("constraintUpperBound","Upper limit: {value}",{value:n?.members[i]==null?"\u2014":Math.min(n.members[i],5-a+t.minMissionMembers[i])})}</span><button class="button button--text" type="button" data-tb-role-reset ?disabled=${t.minMissionMembers[i]===0}
            aria-label=${`${l} / ${e.t("unlimitedCombo","No minimum")}`} @click=${()=>r(i,0)}>${e.t("unlimitedCombo","No minimum")}</button>
          </span>
        </div>
        ${G({label:l,value:t.minMissionMembers[i]?String(t.minMissionMembers[i]):"",options:[1,2,3,4,5].map(s=>({value:String(s),label:String(s),disabled:s>Math.min(n?.members[i]??5,5-a+t.minMissionMembers[i])})),onSelect:s=>r(i,Number(s))})}
      </div>`})}
  </div>`}function zn(e){let t=e.searchSettings;return t.arena?.objective==="sections"?re({id:"tb-section-sampling",label:e.t("arena.sections.sampling","Random sampling"),expanded:e.expanded.has("section-sampling"),onExpandedChange:n=>{n?e.expanded.add("section-sampling"):e.expanded.delete("section-sampling"),e.requestUpdate()},metadata:t.gekisoSamplingMode==="auto"?e.t("luckAutomaticSamples","Automatic ({count} runs)",{count:32}):String(t.gekisoSeeds),content:Er(e)}):t.gekisoSamplingMode==="manual"||e.hasMission("Luck",t.songs)?Er(e):g}function si(e){if(!e.hasComboSongs())return g;let t=e.searchSettings,n=e.constraintLimits()?.combo;return d`
    <div class="row">
      <md-outlined-text-field
        class="row__spacer"
        id="tb-combo"
        data-tb-field
        type="number"
        min="1"
        max=${String(Oe)}
        step="1"
        inputmode="numeric"
        label=${e.t("openingComboMinimum","Opening COMBO BONUS minimum")}
        prefix-text="×"
        .value=${j(t.minComboBonus===1?"":String(t.minComboBonus))}
        placeholder=${e.t("unlimitedCombo","No minimum")}
        supporting-text=${e.t("constraintUpperBound","Upper limit: {value}",{value:n==null?"\u2014":`\xD7${n}`})}
        ?error=${e.submitted&&e.inputIssues().some(a=>a.field==="tb-combo"||a.fields?.includes("tb-combo"))}
        @change=${a=>e.updateSettings({minComboBonus:a.target.value===""?1:Number(a.target.value)})}
      ></md-outlined-text-field>
      ${Ie(e,"combo")}
    </div>
  `}function Dn(e){let t=e.searchSettings;if(!e.hasMission("JustCount",t.songs))return g;let n=t.justWindowUnit==="percent",a=n?t.justWindowPercent:t.justWindowMs,r=e.constraintLimits()?.justMs,i=Ye(e.data),o=r==null?"\u2014":r===0?e.common("common.states.unavailable","Unavailable"):n&&i?`+${Math.floor((r/i-1)*100)}%`:`\xB1${r} ms`,l=(c,x)=>e.t(`justCoverage.${c}`,x),s=()=>e.submitted&&e.inputIssues().some(c=>c.field==="tb-just-coverage"||c.fields?.includes("tb-just-coverage")),m=(c,x)=>d`<md-outlined-text-field
    type="number" min="0" step="0.1" suffix-text="s" label=${x}
    .value=${j(t[c]?String(t[c]):"")} placeholder=${e.t("unlimitedCombo","No minimum")}
    ?error=${s()} @change=${$=>e.updateSettings({[c]:Number($.target.value)})}></md-outlined-text-field>`;return d`
    <div class="stack">
      <div class="row row--between">
        <span class="tb-field__label">${l("title","JUST window coverage")}</span>
        ${Ie(e,"just")}
      </div>
      ${G({label:l("title","JUST window coverage"),value:t.justWindowMode,options:[{value:"off",label:l("off","Unrestricted")},{value:"partial",label:l("partial","Partial coverage")},{value:"steady",label:l("steady","Sustained window")}],onSelect:c=>e.updateSettings({justWindowMode:c,...c!=="off"&&!a?n?{justWindowPercent:100}:i?{justWindowMs:i*2}:{}:{}})})}
      ${t.justWindowMode==="off"?g:d`
      ${G({label:e.t("justWindowUnit","JUST window unit"),value:t.justWindowUnit,options:[{value:"percent",label:"+%"},{value:"ms",label:"\xB1ms"}],onSelect:c=>{let x=Ye(e.data??null);e.updateSettings({justWindowUnit:c,...c==="ms"?{justWindowMs:t.justWindowMs}:x&&t.justWindowMs>0?{justWindowPercent:Math.max(0,(t.justWindowMs/x-1)*100)}:{justWindowPercent:0}})}})}
      <md-outlined-text-field
        id="tb-just-window"
        data-tb-field
        type="number"
        min="0"
        max=${String(Oe)}
        step=${n?"100":"0.1"}
        inputmode="numeric"
        label=${n?e.t("justWindowPercent","JUST window increase (minimum)"):e.t("justWindow","Ideal JUST tap window")}
        prefix-text=${n?"+":"\xB1"}
        suffix-text=${n?"%":"ms"}
        .value=${j(a===0?"":String(a))}
        placeholder=${e.t("unlimitedCombo","No minimum")}
        supporting-text=${e.t("constraintUpperBound","Upper limit: {value}",{value:o})}
        ?error=${e.submitted&&e.inputIssues().some(c=>c.field==="tb-just-window"||c.fields?.includes("tb-just-window"))}
        @change=${c=>e.updateSettings(n?{justWindowPercent:Number(c.target.value)}:{justWindowMs:Number(c.target.value)})}
      ></md-outlined-text-field>
      ${t.justWindowMode==="partial"?d`<div class="stack" id="tb-just-coverage" data-tb-field tabindex="-1">
        <md-outlined-text-field type="number" min="0" max="100" step="1" suffix-text="%"
          label=${l("minimumCoverage","Minimum note coverage")} .value=${j(t.justCoveragePercent?String(t.justCoveragePercent):"")}
          placeholder=${l("oneNote","At least one note")} ?error=${s()}
          @change=${c=>e.updateSettings({justCoveragePercent:Number(c.target.value)})}></md-outlined-text-field>
        ${re({id:"tb-just-duration",label:l("duration","Coverage duration"),expanded:e.expanded.has("just-duration"),onExpandedChange:c=>{c?e.expanded.add("just-duration"):e.expanded.delete("just-duration"),e.requestUpdate()},content:d`<div class="stack">${m("justDurationSeconds",l("minimumDuration","Minimum total duration"))}${m("justContinuousSeconds",l("minimumContinuous","Minimum continuous duration"))}</div>`})}
      </div>`:g}`}
    </div>
  `}function ci(e){let t=e.searchSettings,n=r=>e.updateSettings(r),a=r=>{let i=e.catalog.song(r.songId);return dn(t.arena?Ke(i,t.arena):i)};return d`
    <div id="tb-placement" class="stack" tabindex="-1">
      <div class="row row--between"><span class="tb-field__label">${e.t("gekisoPlacements","Scoring placements")}</span>${Ie(e,"placements")}</div>
      ${G({label:e.t("placementMode","Placement basis"),value:t.gekisoPlacementMode,options:[{value:"rank",label:e.t("placementRank","Specified placement")},{value:"opponents",label:e.t("placementOpponents","Opponent scores")}],onSelect:r=>n({gekisoPlacementMode:r})})}
      ${t.gekisoPlacementMode==="rank"?Fe(e,t.gekisoRanks,(r,i)=>{let o=[...t.gekisoRanks];o[r]=i,n({gekisoRanks:o})}):d`
          <div class="tb-number-grid">
            ${[0,1,2].map(r=>d`
                <div class="stack">
                  <md-outlined-text-field
                    label=${`${e.t("gekisoRange","Range {n}",{n:r+1})} ${hn([...new Set(t.songs.map(i=>a(i)[r]))])}`}
                    .value=${j(t.gekisoOpponents[r])}
                    ?error=${e.submitted&&Mt(t.gekisoOpponents).invalid[r]}
                    @change=${i=>{let o=[...t.gekisoOpponents];o[r]=i.target.value,n({gekisoOpponents:o})}}
                  ></md-outlined-text-field>
                  <span class="tb-results__meta">
                    ${Mt(t.gekisoOpponents).ranges[r].length?e.t("opponentCount","{count} opponents",{count:Mt(t.gekisoOpponents).ranges[r].length}):e.t("emptyOpponentRank","1st place (no opponents entered)")}
                  </span>
                </div>
              `)}
          </div>
        `}
    </div>
  `}function di(e,t){switch(t){case"score":return e.t("goalScore","Live score");case"gekiso":return e.t("goalGekiso","GEKISO score");case"event":return e.t("goalEvent","Event rewards");case"plan":return e.t("goalPlan","Event resource plan");case"power":return e.t("goalPower","Highest power");case"potential":return e.t("goalPotential","Songless potential")}}function ze(e,t,n,a=!1,r,i="tb-songs",o,l){let s=e.catalog,m=()=>l?.songRules===null?void 0:l?.songRules??(e.tab==="arena"?e.arena.rule:e.songRules()),c=m(),x=l?.showMissions??(e.tab!=="arena"&&e.searchSettings.goal==="gekiso"||e.tab==="pt"&&e.settings.rewardMode==="recommendation"&&e.searchSettings.ptMode==="gekiso"),$=p=>(!r||r.includes(p.songId))&&(!o||o.some(h=>h.songId===p.songId&&h.difficulty===p.difficulty))&&s.difficultyRows(p.songId).some(h=>Number(h.difficulty)===p.difficulty);return d`
    <div class="tb-songs" id=${i} data-tb-field tabindex="-1">
      <div class="row row--between row--wrap tb-input-summary">
        <span class="tb-results__meta">
          ${e.t("chartCount","{count} charts",{count:t.filter($).length})}
        </span>
        <div class="row row--wrap tb-song-actions">
        ${l?.poolAction??g}
        <button
          class="button button--tonal tb-songs__add"
          type="button"
          @click=${()=>{e.songPicker={songs:t.map(p=>({...p})),context:l?.context??`${e.tab}:${e.searchSettings.goal}:${a?"single":r?"restricted":"songs"}${e.tab==="arena"?`:${e.arena.draft.leagueId}`:""}`,single:a,expandDifficulties:!a,recommend:!a&&i==="tb-songs",query:"",filtersOpen:!1,bands:[],attributes:[],gekisouTypes:[],difficulty:3,allowedSongIds:r,allowedCharts:o?[...o]:void 0,songRules:m(),change:n},e.requestUpdate()}}
        >
          ${z("add",18)}${t.length?e.t("editSongs","Change songs"):e.t("addSongs","Choose songs")}
        </button>
        </div>
      </div>
      ${!a&&l?.poolAction&&l.poolAction!==g?On(e,e.songDifficultyCeiling,p=>{e.setSongPickerPreferences(e.songDifficulties,p),p!==null&&t.length&&n(An(e,t,p,$))}):g}
      ${t.length?d`
              <div class="tb-songs__list" role="region" aria-label=${e.t("songs","Songs")} tabindex="0">
                ${t.map((p,h)=>d`
                    <div class="list-item list-item--two-line tb-song">
                      <span class="list-item__leading tb-song__art">
                        ${_e({...s.songOptions(p.songId,p.difficulty),marks:[]})}
                      </span>
                      <span class="list-item__body">
                        <strong class="list-item__headline clamp-1" lang=${s.songTitleLanguage(p.songId)}>${s.songTitle(p.songId)}</strong>
                        <span class="list-item__supporting">
                          ${s.difficultyLabel(p.songId,p.difficulty)}${x?` / ${hn(dn(c?Ke(s.song(p.songId),c):s.song(p.songId)))}`:""}${$(p)?"":` / ${e.t("unavailable","Unavailable")}`}
                        </span>
                      </span>
                      <span class="list-item__trailing">
                        ${ae({icon:"close",label:e.common("common.actions.remove","Remove"),onClick:()=>n(t.filter((k,u)=>u!==h))})}
                      </span>
                    </div>
                  `)}
              </div>
            `:g}
    </div>
  `}function Lr(e){return d`<button class="button button--text" type="button" @click=${()=>e.planner.open("events")}>${e.t("planner.manageEvents","Manage events")}</button>`}function Jt(e,t){return d`<div class="row row--between row--wrap">${H(t)}${Lr(e)}</div>`}function De(e,t=e.searchSettings,n={}){let r=e.catalog.events(),i=c=>e.updateSettings(c),o=!n.rulesOnly&&e.tab==="pt"&&t.goal!=="plan",l=o&&t.manualEventEnabled,s=e.settings.eventId??r[0]?.id??null,m=s!==null&&!l&&e.planner.events.some(c=>c.id===s);return e.settings.eventId===null&&s!==null&&!l&&queueMicrotask(()=>i({eventId:s})),d`
    <md-outlined-select
      id="tb-event"
      data-tb-field
      label=${e.t("event","Event")}
      .value=${j(l?"manual":String(s??""))}
      @change=${c=>{let x=c.target.value;x==="manual"?Ya(e):i({eventId:Number(x),manualEventEnabled:!1,rewardMode:t.goal==="plan"?"plan":ja(e.settings.farming)})}}
    >
      ${r.length?g:d`<md-select-option value="" disabled><div slot="headline">${e.t("manualEvent.choose","Choose an event")}</div></md-select-option>`}
      ${o?d`<md-select-option value="manual"><div slot="headline">${e.t("manualEvent.manual","Manual setup")}</div></md-select-option>`:g}
      ${r.map(c=>d`
          <md-select-option value=${String(c.id)}>
            ${c.serverMark?d`
                    <img
                      slot="start"
                      src=${c.serverMark.image}
                      alt=${c.serverMark.label}
                      title=${c.serverMark.label}
                      width="18"
                      height="18"
                    />
                  `:g}
            <div slot="headline">${c.name}</div>
          </md-select-option>
        `)}
    </md-outlined-select>
    ${!n.manageInHeading||m?d`<div class="cluster">
      ${n.manageInHeading?g:Lr(e)}
      ${m?d`<button class="button button--text" type="button" @click=${()=>e.planner.editEvent(s)}>${e.t("planner.edit","Edit")}</button>`:g}
    </div>`:g}
    ${l?Za(e):g}
  `}function Qt(e,t,n,a=!1){if(!t.length)return g;let r=e.catalog;return d`
    <button class="button button--text" type="button" @click=${()=>{let i=a?e.songDifficulties:e.songPoolDifficulties,o=[...new Set(t)].flatMap(l=>r.difficultyRows(l).filter(s=>i.includes(Number(s.difficulty))).map(s=>({songId:l,difficulty:Number(s.difficulty)})));n(o)}}>${z("swords",18)}${e.t("useChallengeSongs","Use challenge songs")}</button>
  `}function Xt(e,t=e.searchSettings){let n=`play-${e.tab}-${e.tab==="build"?e.buildMode:t.goal}`;return re({id:`tb-${n}`,label:e.t("playJudgements","Play judgements"),supportingText:t.playMode==="ap"?e.t("playAp","All Perfect"):e.t("playCustom","Custom"),leading:z("piano",20),expanded:e.expanded.has(n),onExpandedChange:a=>{a?e.expanded.add(n):e.expanded.delete(n),e.requestUpdate()},content:d`
      <div class="stack">${ui(e,t)}</div>
    `})}function ui(e,t=e.searchSettings,n=a=>e.updateSettings(a)){let a=(i,o,l)=>d`
    <div class="tb-field">
      <span class="tb-field__label">
        ${i}
        <output>${t[o]}%</output>
      </span>
      <md-slider
        class="md3-slider"
        labeled
        min="0"
        max=${l}
        step="1"
        .value=${t[o]}
        aria-label=${i}
        @change=${s=>n({[o]:Number(s.target.value)})}
      ></md-slider>
    </div>
  `,r=d`
    <md-outlined-text-field
      class="tb-miss-every"
      type="number"
      min="0"
      step="1"
      inputmode="numeric"
      label=${e.t("missEvery","Miss every N notes")}
      .value=${String(t.missEvery||"")}
      placeholder="0"
      @change=${i=>n({missEvery:Math.max(0,Math.floor(Number(i.target.value)||0))})}
    ></md-outlined-text-field>
  `;return d`
    ${G({label:e.t("playJudgements","Play judgements"),value:t.playMode,options:[{value:"ap",label:e.t("playAp","All Perfect"),icon:"workspace_premium"},{value:"custom",label:e.t("playCustom","My accuracy"),icon:"tune",disabled:!gt}],onSelect:i=>n({playMode:i})})}
    ${t.goal==="score"?d`<div class="tb-field">
      <span class="tb-field__label">${e.t("frameRate","Game frame rate (FPS)")}</span>
      ${G({label:e.t("frameRate","Game frame rate (FPS)"),value:String(t.frameRate),options:[30,60,90,120].map(i=>({value:String(i),label:String(i)})),onSelect:i=>n({frameRate:Number(i)})})}
    </div>`:g}
    ${t.goal==="gekiso"?d`
            <div class="tb-sliders">
              ${t.playMode==="custom"?d`
                      ${a("GREAT","great",40)}${r}
                    `:g}
              ${e.hasMission("JustCount",t.songs)?d`
                      <div class="tb-field">
                        <div class="row row--between"><span class="tb-field__label">
                          JUST
                          <output>${t.just}%</output>
                        </span>${Ie(e,"accuracy")}</div>
                        <md-slider
                          class="md3-slider"
                          labeled
                          min="0"
                          max="100"
                          step="1"
                          .value=${t.just}
                          aria-label="JUST"
                          @change=${i=>n({just:Number(i.target.value)})}
                        ></md-slider>
                      </div>
                    `:g}
            </div>
          `:t.playMode==="custom"?d`
              <div class="tb-sliders">
                ${a("GREAT","great",40)}${a("GOOD","good",20)}${a("MISS","miss",20)}${r}
              </div>
            `:g}
  `}function mi(e){let t=e.searchSettings,n=e.tab==="pt",a=e.catalog,r=e.view,i=u=>e.updateSettings(u),o=e.engineCards(),l=(u,b)=>u.includes(b)?u.filter(I=>I!==b):[...u,b],s=[...new Set([...t.scope==="box"?[...r.members.values()].filter(u=>u.use&&u.lock).map(u=>u.cardId):[],...t.bindings.map(([u])=>u),...t.leader===null?[]:[t.leader],...t.required.members])],m=[...new Set([...t.scope==="box"?[...r.snaps.values()].filter(u=>u.use&&u.lock).map(u=>u.cardId):[],...t.bindings.flatMap(([,u])=>u===null?[]:[u]),...t.required.snaps])],c=s.length+m.length,x=(u,b=!1)=>d`
    <div class="tb-field">
      <span class="tb-field__label">${b?e.t(u==="members"?"excludedMembers":"excludedSnaps",u==="members"?"Excluded members":"Excluded Snapshots"):e.t(u==="members"?"requiredMembers":"requiredSnaps",u==="members"?"Required members":"Required snaps")}</span>
      <div class="cluster">
        <button class="button button--text button--small" type="button" @click=${()=>{e.requiredPicker=b?null:u,e.excludedPicker=b?u:null,e.requestUpdate()}}>
          ${z("add",18)}${e.t("add","Add card")}
        </button>
        ${b&&t.theoreticalExcluded[u].length?d`<button class="button button--text button--small" type="button"
          @click=${()=>i({theoreticalExcluded:{...t.theoreticalExcluded,[u]:[]}})}>${e.t("clearAll","Clear")}</button>`:g}
      </div>
      ${b?d`<div class="cluster">${t.theoreticalExcluded[u].map(I=>Qe(a.cardName(u,I),e.common("common.actions.remove","Remove"),()=>i({theoreticalExcluded:{...t.theoreticalExcluded,[u]:t.theoreticalExcluded[u].filter(w=>w!==I)}})))}</div>`:g}
    </div>
  `,$=(u,b)=>t.required[u].includes(b)?Qe(a.cardName(u,b),e.common("common.actions.remove","Remove"),()=>i({required:{...t.required,[u]:t.required[u].filter(I=>I!==b)}})):d`<span class="tb-chip">${a.cardName(u,b)}</span>`,p=o.members.map(u=>u.cardId),h=Object.keys(a.data.bands).map(Number).filter(u=>a.bandName(u)),k=d`
    <div class="stack">
      <div class="tb-field">
        <span class="tb-field__label">${e.t("cardAttribute","Card attribute")}</span>
        <div class="cluster">
          ${[1,2,3,4,5].map(u=>J({label:a.attributeName(u),image:a.attributeIcon(u)||void 0,selected:t.attributes.includes(u),onToggle:()=>i({attributes:l(t.attributes,u)})}))}
        </div>
      </div>
      ${e.tab!=="arena"?d`
              <div class="tb-field">
        <span class="tb-field__label">${e.t("memberBand","Member band")}</span>
        <div class="cluster">
          ${h.map(u=>J({label:a.bandName(u),image:a.bandIcon(u)||void 0,selected:t.bands.includes(u),onToggle:()=>i({bands:l(t.bands,u)})}))}
        </div>
      </div>
            `:g}
      <div class="tb-field">
        <span class="tb-field__label">${e.t("minRarity","Minimum rarity")}</span>
        ${G({label:e.t("minRarity","Minimum rarity"),value:String(t.minRarity),options:[{value:"0",label:e.common("common.states.all","All")},...la.slice(1).map(u=>({value:String(u),label:`${mt(u)}+`}))],onSelect:u=>i({minRarity:Number(u)})})}
      </div>
      ${x("members")}${t.noSnaps?g:x("snaps")}
      ${t.scope==="theoretical"?d`${x("members",!0)}${t.noSnaps?g:x("snaps",!0)}`:g}
      ${de({type:"select",label:e.t("leader","Leader"),value:t.leader===null?"auto":String(t.leader),options:[{value:"auto",label:e.t("leaderAuto","Best leader (automatic)")},...p.map(u=>({value:String(u),label:`${a.cardName("members",u)} / ${a.characterName(a.member(u)?.characterId??0)}`}))],onSelect:u=>i({leader:u==="auto"?null:Number(u)})})}
      <label class="tb-check">
        <md-checkbox
          touch-target="wrapper"
          .checked=${j(t.noSnaps)}
          @change=${u=>i({noSnaps:u.target.checked})}
        ></md-checkbox>
        <span>${e.t("noSnaps","No snaps")}</span>
      </label>
      ${n?d`
              ${jn(e,"minBonus",d`
                  <md-outlined-text-field
                    type="number"
                    min="0"
                    supporting-text=${e.t("constraintUpperBound","Upper limit: {value}",{value:e.constraintLimits()?.eventBonus==null?"\u2014":`${e.constraintLimits().eventBonus}%`})}
                    step="5"
                    .error=${Fn(e,"minBonus")}
                    label=${e.t("minBonus","Minimum event bonus (%)")}
                    .value=${j(t.minBonus===null?"":String(t.minBonus))}
                    @change=${u=>{let b=u.target.value;i({minBonus:b===""?null:Number(b)})}}
                  ></md-outlined-text-field>
                `)}
            `:g}
      ${t.bindings.length?d`
              <ul class="pt-bindings">
                ${t.bindings.map(([u,b],I)=>d`
                    <li>
                      <span>
                        ${a.cardName("members",u)} →
                        ${b===null?e.t("noSnap","No snap"):a.cardName("snaps",b)}
                      </span>
                      ${ae({icon:"close",label:e.common("common.actions.remove","Remove"),onClick:()=>i({bindings:t.bindings.filter((w,E)=>E!==I)})})}
                    </li>
                  `)}
              </ul>
            `:g}
      ${n&&t.rewardMode!=="plan"?g:d`
              <div class="row row--wrap">
                ${de({type:"select",label:e.t("resultCount","Results"),value:String(t.k),options:[1,3,5,10,15,20].map(u=>({value:String(u),label:String(u)})),onSelect:u=>i({k:Number(u)})})}
              </div>
            `}
    </div>
  `;return d`
    <section class="surface stack" id="tb-cards" data-tb-field tabindex="-1">
      ${H({icon:"style",label:e.t("scope","Cards")})}
      ${Pe(e,t,i)}
      ${n&&t.rewardMode!=="plan"&&t.scope==="box"?d`
              <span class="tb-results__meta">
                ${e.t("manualGrowth","Recorded growth for owned cards; full growth for unowned cards")}
              </span>
            `:g}
      ${t.scope==="box"&&(!n||t.rewardMode==="plan")?Ae(e,t.unknownPolicy,u=>i({unknownPolicy:u})):g}
      ${n&&t.rewardMode!=="plan"&&t.scope==="box"?d`
              ${Ma(e,Fa(t.farming).requireGrowth?"required":t.unknownPolicy,u=>e.updateFarming(u==="required"?{requireGrowth:!0}:{requireGrowth:!1,unknownPolicy:u}),t.farming.play==="gekiso")}
            `:g}
      <div class="row row--between tb-input-summary">
        <span class="tb-results__meta">
          ${e.t("candidateSummary","{members} member cards / {snaps} Snapshots",{members:o.members.length,snaps:o.snaps.length})}${c?` / ${e.t("requiredCount","{count} fixed",{count:c})}`:""}
        </span>
        ${r.members.size?g:d`
                <button class="button button--tonal" @click=${()=>e.setTab("box")}>
                  ${e.t("enterCards","Enter cards")}
                </button>
              `}
      </div>
      ${c?d`
              <div class="cluster">
                ${s.map(u=>$("members",u))}${m.map(u=>$("snaps",u))}
              </div>
            `:g}
      ${re({id:"tb-candidates",className:"tb-accordion",leading:z("tune",20),label:e.t("candidates","Cards and limits"),metadata:t.scope==="theoretical"&&(t.theoreticalExcluded.members.length||t.theoreticalExcluded.snaps.length)?e.t("excludedCount","{count} excluded",{count:t.theoreticalExcluded.members.length+t.theoreticalExcluded.snaps.length}):void 0,content:n?jn(e,"constraints",k):k,expanded:e.expanded.has("candidates"),onExpandedChange:u=>{u?e.expanded.add("candidates"):e.expanded.delete("candidates"),e.requestUpdate()}})}
    </section>
    ${pi(e)}
  `}function pi(e){let t=e.excludedPicker!==null,n=e.excludedPicker??e.requiredPicker;if(!n)return g;let a=e.catalog,r=e.searchSettings,i=()=>{e.requiredPicker=null,e.excludedPicker=null,e.slotFilters={...e.slotFilters,query:"",bands:[],characters:[],attributes:[],rarities:[],facets:{}},e.slotFiltersOpen=!1,e.requestUpdate()},o={...e.slotFilters,kind:n},l=c=>{e.slotFilters={...o,...c},e.requestUpdate()},s=n==="members"?e.view.members:e.view.snaps,m=(r.scope==="theoretical"?Object.keys(n==="members"?a.data.members:a.data.snapshots).map(Number):[...s.keys()]).filter(c=>Rr(e,n,c,o)).sort((c,x)=>x-c);return Kt({id:t?"tb-excluded-picker":"tb-required-picker",title:t?e.t(n==="members"?"excludedMembers":"excludedSnaps",n==="members"?"Excluded members":"Excluded Snapshots"):e.t(n==="members"?"requiredMembers":"requiredSnaps",n==="members"?"Required members":"Required snaps"),closeLabel:e.common("common.actions.close","Close"),close:i,searchLabel:e.common("common.actions.search","Search"),filterLabel:e.t("filters","Filters"),filtersOpen:e.slotFiltersOpen,toggleFilters:()=>{e.slotFiltersOpen=!e.slotFiltersOpen,e.requestUpdate()},query:o.query,search:c=>l({query:c}),filterLayout:"facets",filters:Ir(e,o,l),kind:n==="members"?"member":"support",items:m.map(c=>({...a.cardOptions(n,c),value:String(c)})),selected:"",selectedValues:new Set((t?r.theoreticalExcluded:r.required)[n].map(String)),select:c=>{let x=Number(c),$=e.searchSettings;if(t){let p=!$.theoreticalExcluded[n].includes(x),h=p?[...$.theoreticalExcluded[n],x]:$.theoreticalExcluded[n].filter(u=>u!==x),k={...$.required,[n]:p?$.required[n].filter(u=>u!==x):$.required[n]};p&&n==="snaps"&&(k.members=[...new Set([...k.members,...$.bindings.filter(([,u])=>u===x).map(([u])=>u)])]),e.updateSettings({theoreticalExcluded:{...$.theoreticalExcluded,[n]:h},required:k,...p?{leader:n==="members"&&$.leader===x?null:$.leader,bindings:$.bindings.filter(([u,b])=>n==="members"?u!==x:b!==x)}:{}})}else{let p=!$.required[n].includes(x),h=p?[...$.required[n],x]:$.required[n].filter(k=>k!==x);e.updateSettings({required:{...$.required,[n]:h},...p?{theoreticalExcluded:{...$.theoreticalExcluded,[n]:$.theoreticalExcluded[n].filter(k=>k!==x)}}:{}})}},countLabel:e.t("cardCount","{count} cards",{count:m.length}),emptyLabel:e.t("noMatches","No cards match"),preview:d``})}function Bc(e,t){let n=e.searchSettings,a=n.eventId===null?[]:e.catalog.challengeSongs(n.eventId).map(s=>s.liveMusicId),r=n.goal==="event"?n.route==="challenge":(n.goal==="score"||n.goal==="power")&&n.challengeRules,i=r?a:n.goal==="event"||n.goal==="plan"?e.catalog.normalEventSongIds(n.manualEventEnabled?null:n.eventId):void 0,o=s=>e.updateSettings(s),l=n.goal==="score"||n.goal==="gekiso"||n.goal==="plan"||n.goal==="event"&&n.route!=="skip"||n.goal==="power"&&n.powerSong;return we(e,()=>d`
      ${t??g}
      ${e.tab==="build"?d`
              <section class="surface stack">
                ${H({icon:"flag",label:e.t("goal","Goal")})}
                <div
                  class="cluster tb-goals"
                  role="radiogroup"
                  aria-label=${e.t("goal","Goal")}
                  @keydown=${Je(Mr.map(({id:s})=>s),n.goal,s=>o({goal:s}))}
                >
                  ${Mr.map(({id:s,icon:m})=>d`
                      <button
                        class="chip"
                        type="button"
                        role="radio"
                        aria-checked=${String(n.goal===s)}
                        tabindex=${n.goal===s?"0":"-1"}
                        @click=${()=>o({goal:s})}
                      >
                        ${z(n.goal===s?"check":m,18)}<span class="chip__label">${di(e,s)}</span>
                      </button>
                    `)}
                </div>
                ${n.goal==="score"||n.goal==="gekiso"?d`
                        ${wa(e,n,o)}
                        ${_t(n)==="at-least"?Ta(e,n.targetRank,e.t("targetScore","Target score"),s=>o({targetRank:s}),e.t("targetGrade","Target grade")):g}
                        ${_t(n)==="at-least"&&n.targetRank===null||_t(n)==="capped"?d`
                                <md-outlined-text-field
                                  type="number"
                                  min="1"
                                  step="1"
                                  inputmode="numeric"
                                  id="tb-target-score"
                                  data-tb-field
                                  label=${e.t("targetScore","Target score")}
                                  .value=${j(n.targetScore?String(n.targetScore):"")}
                                  @change=${s=>{let m=Math.floor(Number(s.target.value)||0);o({targetScore:m>0?m:null})}}
                                ></md-outlined-text-field>
                              `:g}
                      `:g}
                ${n.goal==="gekiso"?d`
                        ${li(e)} ${Qa(e)} ${si(e)} ${Dn(e)} ${ci(e)}
                      `:g}
                ${n.goal==="potential"?G({label:e.t("window","Reference window"),value:String(n.window),options:[60,120,180].map(s=>({value:String(s),label:`${s} s`})),onSelect:s=>o({window:Number(s)})}):g}
                ${n.goal==="power"?d`
                        <label class="tb-check">
                          <md-checkbox
                            touch-target="wrapper"
                            .checked=${j(n.powerSong)}
                            @change=${s=>o({powerSong:s.target.checked})}
                          ></md-checkbox>
                          <span>${e.t("powerSong","Include a song's type and tag bonus")}</span>
                        </label>
                      `:g}
                ${n.goal==="score"||n.goal==="gekiso"?Xt(e,n):g}
                ${n.goal==="gekiso"?zn(e):g}
              </section>
            `:g}
      ${e.tab==="build"&&n.goal!=="plan"?d`
              <section class="surface stack">
                ${Jt(e,{icon:"event",label:e.t("event","Event")})}
                ${De(e,n,{manageInHeading:!0})}
                ${n.goal==="score"||n.goal==="power"?d`
                  <label class="tb-check">
                    <md-checkbox
                      touch-target="wrapper"
                      .checked=${j(n.challengeRules)}
                      @change=${s=>o({challengeRules:s.target.checked})}
                    ></md-checkbox>
                    <span>${e.t("challengeRules","Challenge live rules (event parameter bonus)")}</span>
                  </label>
                `:g}
              </section>
            `:g}
      ${n.goal==="plan"?d`
              <section class="surface stack">
                ${H({icon:"cycle",label:e.t("planSetup","Resource plan")})}
                ${Jt(e,{icon:"event",label:e.t("event","Event")})}
                ${De(e,n,{manageInHeading:!0})}
                ${Xt(e,n)}
                <span class="tb-results__meta">
                  ${e.t("farm.memory","Character / song memory bonuses")}: ${e.t("farm.included","Included")}
                </span>
                <div class="tb-number-grid">
                  <md-outlined-text-field
                    type="number"
                    min="0"
                    label=${e.t("planBudget","Boosts to spend")}
                    .value=${j(String(n.planBudget))}
                    @change=${s=>o({planBudget:Math.max(0,Number(s.target.value)||0)})}
                  ></md-outlined-text-field>
                  ${Bt(e,n.planBoostsPerLive,s=>o({planBoostsPerLive:s}))}
                  <md-outlined-text-field
                    type="number"
                    min="0"
                    label=${e.t("planStartCp","Challenge points now")}
                    .value=${j(String(n.planStartingCp))}
                    @change=${s=>o({planStartingCp:Math.max(0,Number(s.target.value)||0)})}
                  ></md-outlined-text-field>
                </div>
                ${Pt(e,n.challengePoints,s=>o({challengePoints:s}))}
                <span class="tb-field__label">${e.t("planChallengeSongs","Challenge songs")}</span>
                ${ze(e,e.settings.planChallengeSongs,s=>o({planChallengeSongs:s}),!1,a,"tb-challenge-songs",void 0,{poolAction:Qt(e,a,s=>o({planChallengeSongs:s}))})}
              </section>
            `:g}
      ${mi(e)}
      ${l?d`
              <section class="surface stack">
                ${H({icon:"library_music",label:r?e.t("planChallengeSongs","Challenge songs"):n.goal==="plan"?e.t("planNormalSongs","Normal-live songs"):e.t("songs","Songs"),count:n.songs.length||void 0})}
                ${ze(e,n.goal==="power"?n.songs:e.settings.songs,s=>o({songs:s}),n.goal==="power",i,"tb-songs",void 0,{poolAction:r&&!n.manualEventEnabled?Qt(e,a,s=>o({songs:n.goal==="power"?s.slice(0,1):s}),n.goal==="power"):g})}
                ${er(e)}
              ${je(e)}
              </section>
            `:g}
    `,gi(e),Ja(e))}function gi(e,t=!0){let n=e.searchSettings,a=e.progress,r=!e.stale&&!!e.results&&e.results.results.some(l=>!l.proven),i=a?.proof,o=e.computationStatus();if(i&&a&&(a.done>0||i.checkedTeams!==void 0)){let l={done:a.done,total:a.total};i.unit==="charts"?o=e.t("provenChartProgress","Charts proven {done}/{total}",l):i.unit==="shards"&&(o=e.t("provenShardProgress","Search parts proven {done}/{total}",l)),i.checkedTeams!==void 0&&(o+=" / "+e.t("teamChecks","{count} team checks",{count:new Intl.NumberFormat(e.locale).format(i.checkedTeams)}))}return d`
    <div class="tb-run">
      ${t?d`
              ${de({type:"select",label:e.t("timeLimit","Time limit"),value:String(n.timeLimit??0),options:[3,5,15,60,0].map(l=>({value:String(l),label:l?e.t("secondsShort","{count} s",{count:l}):e.t("noLimit","Until proven")})),onSelect:l=>e.updateSettings({timeLimit:Number(l)||null})})}
            `:g}
      ${e.hasTaskResults?d`
              <button
                class="button button--text tb-run__results"
                @click=${()=>e.querySelector(".tb-results-column")?.scrollIntoView({block:"start"})}
              >
                ${e.t("viewResults","View results")}
              </button>
            `:g}
      ${e.taskKind==="build"?d`
              <button
                class="button button--tonal button--full tb-run__button"
                type="button"
                @click=${()=>e.cancel()}
              >
                ${z("stop",18)}${e.common("common.actions.cancel","Cancel")}
              </button>
              <span role="status">${o}</span>
              <md-linear-progress
                .value=${a&&a.total?a.done/a.total:0}
                ?indeterminate=${!a||a.total<=1||!!i&&a.done===0}
                aria-label=${e.t("searching","Searching teams")}
              ></md-linear-progress>
            `:d`
              <button
                class="button button--full tb-run__button"
                type="button"
                ?disabled=${e.running}
                @click=${()=>void e.run(r)}
              >
                ${e.running?e.t("sc.busy","Another calculation is running"):e.submitted&&e.inputIssues().length?e.t("fixConditions","Adjust {count} conditions",{count:e.inputIssues().length}):r?e.t("continueOptimal","Continue verifying optimality"):e.stale?e.t("rerun","Search again"):d`
                            ${z("search",20)}${e.tab==="pt"?n.goal==="plan"?e.t("farm.planRun","Calculate resource plan"):n.route==="skip"?e.t("farm.skipRun","Recommend skip team"):e.t("farm.run","Recommend songs and teams"):e.t("findTeams","Find teams")}
                          `}
              </button>
            `}
    </div>
  `}var Un=new WeakMap,Ue=e=>Un.get(e),Nr=new WeakMap;function Gn(e){let t=JSON.stringify([e.snapshot?.owner,e.data?.identity,e.data?.crossServer?.identities]),n=Nr.get(e);return(!n||n.scope!==t)&&(n={scope:t,orders:new Map},Nr.set(e,n)),n.orders}var Yt=e=>Gn(e).clear();function qc(e,t){let n=_a(e,t);Yt(e),t.song&&Gn(e).set(`${t.song.songId}:${t.song.difficulty}`,[...ut[n]])}function Br(e,t,n){let a=e.manualInputs(t),r=t.members.map(o=>`m${o}`),i=t.snaps.map(o=>o===null?null:`s${o}`);return structuredClone({...a,player:a.player,songRules:e.songRules(n),goal:n,constraints:{requiredMembers:r,requiredSnaps:i.filter(o=>o!==null),excludedMembers:[],excludedSnaps:[],leader:r[t.leader],bindings:r.map((o,l)=>[o,i[l]??null]),noSnaps:!1,minBonusPercent:null},k:1,timeLimitMs:null})}function Pr(e,t){return structuredClone({...e.searchSettings,goal:t.kind,criterion:"mean",scoreTiming:"nominal",scoreTarget:"none",aggregation:"individual",gekisoPlacementMode:"rank",eventId:t.kind==="score"?t.challengeEventId:null,challengeRules:t.kind==="score"&&t.challengeEventId!==null,route:t.kind==="score"&&t.challengeEventId!==null?"challenge":"live",songs:"songs"in t?t.songs:[]})}function Ar(e,t,n,a,r,i){let o=[n.leader,...[0,1,2,3,4].filter(m=>m!==n.leader)],l=crypto.randomUUID(),s=Gn(e);for(let m of t){let c=`${m.song.songId}:${m.song.difficulty}`,x={song:m.song,members:o.map(k=>`m${n.members[k]}`),snaps:o.map(k=>n.snaps[k]===null?null:`s${n.snaps[k]}`),power:m.power,slotPowers:m.slotPowers,key:m.score.mean,score:m.score,skipScore:r.goal==="gekiso"?null:m.skipScore,justWindow:m.justWindow,event:null,potential:null},$=i?.find(k=>k.song.songId===m.song.songId&&k.song.difficulty===m.song.difficulty),p=s.get(c),h=$?St(Ue($)).selectedOrder:p?ut.findIndex(k=>k.every((u,b)=>o[u]===p[b])):m.score.orders.reduce((k,u,b,I)=>u>I[k]?b:k,0);Un.set(m,x),vn(x,{input:a,settings:r,session:l,selectedOrder:h,onOrderChange:i?void 0:k=>s.set(c,ut[k].map(u=>o[u]))})}return t}function Hn(e){return e.map(t=>{let n=structuredClone(t),a=structuredClone(Ue(t));return Un.set(n,a),vn(a,{...St(Ue(t)),onOrderChange:void 0}),n})}function Zt(e){let t=Ue(e);return e.score.orders[St(t).selectedOrder]}var bi=()=>({songs:[],target:"SS",players:5,mode:null,great:0,just:null,missEvery:0,rank:null,ranks:[null,null,null],sort:"contribution"}),at=e=>`${e.songId}:${e.difficulty}`,en=e=>typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=100,pe=(e,t,n)=>typeof e=="number"&&Number.isInteger(e)&&e>=t&&e<=n;function Hc(e){let t=bi();if(!e||typeof e!="object")return t;let n=e,a=pe(n.players,2,5)?n.players:5,r=Array.isArray(n.songs)?n.songs.filter(i=>i&&pe(i.songId,1,Number.MAX_SAFE_INTEGER)&&pe(i.difficulty,0,4)):[];return{songs:[...new Map(r.map(i=>[at(i),{songId:i.songId,difficulty:i.difficulty}])).values()],players:a,songRules:aa(n.songRules),target:n.target==="S"?"S":"SS",mode:n.mode==="ap"||n.mode==="custom"?n.mode:null,great:en(n.great)?n.great:null,just:en(n.just)?n.just:null,missEvery:pe(n.missEvery,0,Number.MAX_SAFE_INTEGER)?n.missEvery:null,rank:pe(n.rank,1,a)?n.rank:null,ranks:[0,1,2].map(i=>{let o=Array.isArray(n.ranks)?n.ranks[i]:n.rank;return pe(o,1,a)?o:null}),sort:n.sort==="score"||n.sort==="remaining"?n.sort:"contribution"}}function Vc(e,t,n){let a=pt(t,!0),r=n.members.flatMap(c=>a.members.filter(x=>x.cardId===c)),i=n.snaps.flatMap(c=>a.snaps.filter(x=>x.cardId===c)),o=[],l=new Set;for(let c=0;c<5;c++){let x=n.members[c],$=x==null?void 0:e.members.get(x);!$||!r.some(h=>h.cardId===x)?o.push({field:`sc-slot-${c}`,reason:"memberMissing",slot:c}):l.has($.characterId)?o.push({field:`sc-slot-${c}`,reason:"duplicateCharacter",slot:c}):l.add($.characterId);let p=n.snaps[c];p!==null&&(p===void 0||!e.snaps.has(p)||!i.some(h=>h.cardId===p))?o.push({field:`sc-slot-${c}`,reason:"snapMissing",slot:c}):p!==null&&n.snaps.indexOf(p)!==c&&o.push({field:`sc-slot-${c}`,reason:"duplicateSnap",slot:c})}(n.members.length!==5||n.snaps.length!==5||!pe(n.leader,0,4))&&o.push({field:"sc-formation",reason:"formation"});let s=ga(e,r,i,"min");s.unknown.length&&o.push({field:"sc-formation",reason:"formation"});let m=n.members.map((c,x)=>[`m${c}`,n.snaps[x]===null?null:`s${n.snaps[x]}`]);return{members:r,snaps:i,player:t.player,unknownPolicy:"min",box:s,issues:o,bindings:m,leader:`m${n.members[n.leader]}`}}function Kc(e){let t=[];return e.songs.length||t.push({field:"sc-songs",reason:"songs"}),pe(e.players,2,5)||t.push({field:"sc-players",reason:"players"}),e.mode||t.push({field:"sc-mode",reason:"mode"}),en(e.just)||t.push({field:"sc-just",reason:"percent"}),e.mode==="custom"&&!en(e.great)&&t.push({field:"sc-great",reason:"percent"}),e.mode==="custom"&&!pe(e.missEvery,0,Number.MAX_SAFE_INTEGER)&&t.push({field:"sc-miss",reason:"miss"}),e.ranks.some(n=>!pe(n,1,e.players))&&t.push({field:"sc-rank",reason:"rank"}),t}function Wc(e,t,n,a){return{songRules:ra(t.songRules,!0),members:e.members,snaps:e.snaps,player:e.player,unknownPolicy:"min",goal:{kind:"gekiso",songs:[n],criterion:"mean",accuracy:{great:t.mode==="ap"?0:t.great/100,just:t.just/100,missEvery:t.mode==="ap"?0:t.missEvery},rank:t.ranks[0],ranks:t.ranks,seeds:0},constraints:{requiredMembers:e.members.map(r=>r.key),excludedMembers:[],requiredSnaps:e.snaps.map(r=>r.key),excludedSnaps:[],leader:e.leader,bindings:e.bindings,noSnaps:!1,minBonusPercent:null},k:1,timeLimitMs:null,requestId:crypto.randomUUID(),contextKey:a}}function Vn(e,t,n){return e.crossServer?!!e.crossServer.availability[t]?.[String(n)]?.includes(e.identity.server):!0}function Jc(e,t,n,a,r){let i=e.songs.get(n.songId);if(!i||!Vn(t,"songs",n.songId)||!["jp","intl"].includes(t.identity.server))return"source";if(!i.difficulties.find(s=>s.difficulty===n.difficulty)?.file)return"chart";let o=i.gekisoMissions.map((s,m)=>r?.missions[m]||s);if(o.length!==3||o.some(s=>![1,2,3].includes(s)))return"missions";let l=Ea(o[0],o[1],o[2]);return a.every(s=>[1,2,3].every(m=>e.live.gekiso.rankingBonuses.some(c=>c.pattern===l&&c.count===m&&c.rank===s&&Number.isFinite(c.percent))))?null:"rewards"}function Qc(e,t){let n=e.goal.kind==="gekiso"?e.goal.songs[0]:null;if(!n||t.error||t.unknownCards.length)throw new Error("incomplete-score");let r=t.results.find(l=>l.song&&at(l.song)===at(n))?.hits[0],i=r?.score,o=new Map(e.constraints.bindings);if(!r||!r.song||at(r.song)!==at(n)||r.members.length!==5||new Set(r.members).size!==5||r.snaps.length!==5||r.members[0]!==e.constraints.leader||r.members.some((l,s)=>!o.has(l)||o.get(l)!==r.snaps[s])||!i||i.orders.length!==120||[...i.orders,i.mean,i.min,i.max,i.median].some(l=>!Number.isFinite(l)||l<0))throw new Error("incomplete-score");return structuredClone(r)}function fi(e,t,n){if(!pe(t,2,5)||!Number.isFinite(n)||n<0||e===void 0||!Number.isFinite(e)||e<=0)return null;let a=Ua(e,t);if(!Number.isFinite(a)||a<=0||a>=2147483647)return null;let r=a/t;return{total:a,average:r,contribution:n/r*100,remaining:Math.max(0,a-n)/(t-1)}}function ye(e,t,n,a){let r=e.songs.get(t.songId)?.rankGroup,i=r===void 0?void 0:e.scoreRanks.get(r)?.find(o=>o.rank===(n.target==="SS"?7:6))?.battleRequired;return fi(i,n.players,a)}function Xc(e,t,n){let a=new Map;for(let i of e){let o=a.get(i.song.songId)??[];o.push(i),a.set(i.song.songId,o)}let r=i=>t.songs.get(i.song.songId)?.difficulties.find(o=>o.difficulty===i.song.difficulty)?.playLevel??1/0;return[...a].map(([i,o])=>{let l=o.filter(m=>m.status==="complete"&&m.hit?.score&&ye(t,m.song,n,m.hit.score.mean));l.sort((m,c)=>ye(t,c.song,n,c.hit.score.mean).contribution-ye(t,m.song,n,m.hit.score.mean).contribution||r(m)-r(c)||m.song.difficulty-c.song.difficulty);let s=l[0]??o.filter(m=>m.status==="complete"&&m.hit?.score).sort((m,c)=>c.hit.score.mean-m.hit.score.mean||r(m)-r(c)||m.song.difficulty-c.song.difficulty)[0];return{id:i,charts:[...o].sort((m,c)=>m.song.difficulty-c.song.difficulty),representative:s,metrics:s?ye(t,s.song,n,s.hit.score.mean):null}}).sort((i,o)=>!i.metrics||!o.metrics?+!!o.metrics-+!!i.metrics||i.id-o.id:(n.sort==="score"?o.representative.hit.score.mean-i.representative.hit.score.mean:n.sort==="remaining"?i.metrics.remaining-o.metrics.remaining:o.metrics.contribution-i.metrics.contribution)||i.id-o.id)}var vi={title:"GEKISO song comparison",tab:"GEKISO songs",chooseTeam:"Use a saved team",useTeam:"Compare songs with this team",choose:"Playable charts",minLevel:"Minimum level",maxLevel:"Maximum level",target:"Room target",players:"Room size",mode:"Performance",ap:"AP reference",custom:"Custom",just:"JUST (%)",great:"GREAT (%)",miss:"MISS interval (0 = none)",rank:"Placement in every section",select:"Choose",start:"Compare songs",stop:"Stop",retry:"Retry",remove:"Remove chart",busy:"Another calculation is running",score:"Personal expected score",contribution:"Per-player requirement met",remaining:"Other players need on average",total:"Room target score",average:"Per-player requirement",sort:"Sort",conditions:"Conditions",play:"Normal play / Assist off",orders:"120 skill orders / Average score",luck:"LUCK / Nominal expectation",placement:"Every section: #{rank}",coverage:"{done}/{total} charts complete",empty:"Choose playable charts to compare",pending:"Pending",running:"Calculating",complete:"Complete",failed:"Failed",cancelled:"Stopped",threshold:"Target threshold unavailable",source:"Unavailable on this server",chart:"Chart unavailable",missions:"GEKISO sections unavailable",rewards:"Placement rewards unavailable",scoreFailed:"Scoring failed",memberMissing:"Choose an owned member",snapMissing:"Choose an owned Snapshot",duplicateCharacter:"Character already in the team",duplicateSnap:"Snapshot already in the team",formation:"Complete the five slots",songs:"Choose playable charts",percent:"Enter 0\u2013100",issues:"Review these fields",slot:"Slot {slot}",unknown:"Unfilled growth / Minimum values",recorded:"Recorded",defaultValue:"Base value",unset:"Unfilled",adopted:"Value used",greatRule:"GREAT: share of judged nodes",justRule:"JUST: share of eligible non-GREAT nodes",missRule:"MISS: every N judged nodes; overrides earlier judgements",event:"Current event bonuses",pt:"Event PT bonus",items:"Item bonus",unavailable:"Unavailable",account:"Account values",rankTotal:"Total character rank",vip:"T.G.W card rank",facilities:"Facilities",characterRank:"Character rank",characterMemory:"Character memories",songMemory:"Song memories",sourceValue:"Source",difficulty:"Difficulty",song:"Song",details:"Details",noAssist:"Assist off",card:"Card"},Kn=(e,t,n)=>e.t(`sc.${t}`,vi[t],n);function yi(e){let t=e.songComparison,n=t.team(),a=t.settings,r=e.master,i=c=>Kn(e,c),o=Va(r,n.player),l={level:e.t("level","Level"),awake:e.t("training","Training"),rank:e.t("awakening","Awakening"),liveSkillLevel:e.t("liveSkill","Live skill"),gekisoSkillLevel:e.t("gekisoSkill","GEKISO skill")},s=[...n.members,...n.snaps].flatMap(c=>{let x=(c.key.startsWith("m")?n.box.members:n.box.snaps).find($=>$.key===c.key)?.growth;return Object.entries(c).filter(([,$])=>$===null).map(([$])=>({name:e.catalog.cardName(c.key.startsWith("m")?"members":"snaps",c.cardId),field:$==="rank"&&c.key.startsWith("s")?e.t("limitBreak","Limit break"):l[$]??$,value:x?x[$]:void 0}))}),m=[{label:i("rankTotal"),value:o.totalRank,recorded:n.player.characterTotalRank!==null},{label:i("vip"),value:o.vipRank,recorded:n.player.vipRank!==null},...[...r.characters.keys()].map(c=>({label:`${e.catalog.characterName(c)} / ${i("characterRank")}`,value:o.characterRanks.get(c)??1,recorded:n.player.characterRanks[String(c)]!=null})),...[...r.characters.keys()].map(c=>({label:`${e.catalog.characterName(c)} / ${i("characterMemory")}`,value:o.characterMemory.get(c)??0,recorded:n.player.characterMemory[String(c)]!=null})),...a.songs.filter((c,x,$)=>$.findIndex(p=>p.songId===c.songId)===x).map(c=>({label:d`<span lang=${e.catalog.songTitleLanguage(c.songId)}>${e.catalog.songTitle(c.songId)}</span> / ${i("songMemory")}`,value:o.musicMemory.get(c.songId)??0,recorded:n.player.musicMemory[String(c.songId)]!=null})),...[...r.bandItems.keys()].map(c=>({label:`${e.catalog.text(e.data.bandItems[String(c)]?.name)||"#"+c} / ${i("facilities")}`,value:o.bandItems.get(c)??0,recorded:n.player.bandItems[String(c)]!=null}))];return d`
    <div class="stack">
      <dl class="spec-list">
        <dt>${i("play")}</dt>
        <dd>${i("orders")}</dd>
        <dt>LUCK</dt>
        <dd>${i("luck")}</dd>
        <dt>GREAT</dt>
        <dd>${a.mode==="ap"?0:a.great??"\u2014"}%</dd>
        ${e.hasMission("JustCount",t.effectiveSettings.songs)?d`
                <dt>JUST</dt>
                <dd>${a.just??"\u2014"}%</dd>
              `:g}
        <dt>MISS</dt>
        <dd>${a.mode==="ap"?0:a.missEvery??"\u2014"}</dd>
      </dl>
      <ul>
        <li>${i("greatRule")}</li>
        <li>${i("justRule")}</li>
        <li>${i("missRule")}</li>
      </ul>
      ${s.length?d`
              <strong>${i("unknown")}</strong>
              <div class="table-scroll">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>${i("card")}</th>
                      <th>${i("unset")}</th>
                      <th>${i("adopted")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${s.map(c=>d`
                        <tr>
                          <th>${c.name}</th>
                          <td>${c.field}</td>
                          <td>${c.value??"\u2014"}</td>
                        </tr>
                      `)}
                  </tbody>
                </table>
              </div>
            `:g}
      <strong>${i("account")}</strong>
      <div class="table-scroll sc-account">
        <table class="data-table">
          <thead>
            <tr>
              <th>${i("account")}</th>
              <th>${i("adopted")}</th>
              <th>${i("sourceValue")}</th>
            </tr>
          </thead>
          <tbody>
            ${m.map(c=>d`
                <tr>
                  <th>${c.label}</th>
                  <td>${c.value}</td>
                  <td>${c.recorded?i("recorded"):i("defaultValue")}</td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </div>
  `}function hi(e){let t=e.songComparison,n=t.team(),a=Date.now(),r=e.catalog.events().filter(({id:o,event:l})=>Vn(e.data,"events",o)&&l.startAt!==null&&l.endAt!==null&&l.startAt<=a&&a<l.endAt&&l.livePoints.size);if(!r.length)return g;let i=o=>Kn(e,o);return d`
    <section class="surface stack">
      ${H({icon:"emoji_events",label:i("event")})}
      ${r.map(({event:o,name:l})=>{let s=m=>Math.floor((n.box.members.reduce((c,x)=>c+ma(o.effects,x,m),0)+n.box.snaps.reduce((c,x)=>c+pa(o.effects,x,m),0))/100);return d`
          <strong>${l}</strong>
          <dl class="spec-list">
            <dt>${i("pt")}</dt>
            <dd>${n.issues.length||!o.effects.length?i("unavailable"):"+"+s(0)+"%"}</dd>
            <dt>${i("items")}</dt>
            <dd>${n.issues.length||!o.effects.length?i("unavailable"):"+"+s(1)+"%"}</dd>
          </dl>
        `})}
    </section>
  `}function Wn(e,t){let n=e.songComparison,a=n.settings,r=n.resultSettings,i=n.resultRows,o=e.catalog,l=(u,b)=>Kn(e,u,b),s=(u,b=0)=>new Intl.NumberFormat(e.locale,{maximumFractionDigits:b}).format(u),m=(u,b,I,w,E,y)=>d`<div id=${u} data-sc-field>
    ${de({type:b,label:I,value:w,options:E,onSelect:y})}
  </div>`,c=(u,b,I,w,E)=>d`
    <md-outlined-text-field
      id=${u}
      data-sc-field
      type="number"
      min="0"
      max=${E??g}
      label=${b}
      .value=${j(I===null?"":String(I))}
      @input=${y=>{let _=y.target.value;w(_===""?null:Number(_))}}
    ></md-outlined-text-field>
  `,x=u=>{let b=u?.status==="complete"?u.hit?.score?.mean:void 0,I=b===void 0?null:ye(e.master,u.song,r,b);return d`
      <td class="tabular">${b===void 0?"\u2014":s(b)}</td>
      <td class="tabular">${I?s(I.contribution,1)+"%":"\u2014"}</td>
      <td class="tabular">${I?s(Math.ceil(I.remaining)):"\u2014"}</td>
    `},$=u=>{let b=u.status==="complete"?u.hit?.score?.mean:void 0,I=b===void 0?null:ye(e.master,u.song,r,b);return d`
      <dl class="spec-list sc-primary">
        <dt>${l("score")}</dt>
        <dd>${b===void 0?"\u2014":s(b)}</dd>
        <dt>${l("remaining")}</dt>
        <dd>${I?s(Math.ceil(I.remaining)):"\u2014"}</dd>
        <dt>${l("contribution")}</dt>
        <dd>${I?`${s(I.contribution,1)}%`:"\u2014"}</dd>
      </dl>
    `},p=()=>d`
    <div class="sc-mobile">
      ${n.groups().map(u=>{let b=u.representative??u.charts[0],I=n.expanded.has(u.id);return d`
          <article class="surface stack">
            ${Ze(e,b.song)}${$(b)}
            <button
              class="button button--text"
              aria-expanded=${String(I)}
              aria-controls=${`sc-mobile-${u.id}`}
              @click=${()=>{I?n.expanded.delete(u.id):n.expanded.add(u.id),e.requestUpdate()}}
            >
              ${l("coverage",{done:u.charts.filter(w=>w.status==="complete").length,total:u.charts.length})}
              / ${l("details")}
            </button>
            <div id=${`sc-mobile-${u.id}`} class="stack" ?hidden=${!I}>
              ${u.charts.map(w=>{let E=w.hit?.score?ye(e.master,w.song,r,w.hit.score.mean):null;return d`
                  <section class="stack">
                    <strong>${o.difficultyLabel(u.id,w.song.difficulty)}</strong>
                    <span>
                      ${w.reason?l(w.reason):w.status==="running"?e.computationStatus():w.status==="complete"&&!E?l("threshold"):l(w.status)}
                    </span>
                    ${$(w)}
                    <dl class="spec-list">
                      <dt>${l("total")}</dt>
                      <dd>${E?s(E.total):"\u2014"}</dd>
                      <dt>${l("average")}</dt>
                      <dd>${E?s(Math.ceil(E.average)):"\u2014"}</dd>
                    </dl>
                    <div class="cluster">
                      ${w.status==="failed"||w.status==="cancelled"?d`
                              <button
                                class="button button--text"
                                ?disabled=${e.running}
                                @click=${()=>void n.start(w.song)}
                              >
                                ${l("retry")}
                              </button>
                            `:g}
                      <button
                        class="button button--text"
                        @click=${()=>n.update({songs:a.songs.filter(y=>y.songId!==w.song.songId||y.difficulty!==w.song.difficulty)})}
                      >
                        ${l("remove")}
                      </button>
                    </div>
                  </section>
                `})}
            </div>
          </article>
        `})}
    </div>
  `,h=d`
    <th>${l("score")}</th>
    <th>${l("contribution")}</th>
    <th>${l("remaining")}</th>
  `,k=i.filter(u=>u.status==="complete").length;return we(e,d`
      <section class="surface stack">
        ${H({icon:"tune",label:l("conditions")})}
        <button
          id="sc-songs"
          data-sc-field
          class="button button--tonal button--full"
          type="button"
          @click=${()=>n.choose()}
        >
          ${l("choose")} / ${n.rows.length}
        </button>
        ${je(e,a.songRules,u=>n.update({songRules:u}),!0)}
        ${m("sc-target","buttons",l("target"),a.target,[{value:"SS",label:"SS"},{value:"S",label:"S"}],u=>n.update({target:u}))}
        ${m("sc-players","buttons",l("players"),String(a.players),[2,3,4,5].map(u=>({value:String(u),label:String(u)})),u=>n.update({players:Number(u)}))}
        ${m("sc-mode","buttons",l("mode"),a.mode??"",[{value:"",label:l("select")},{value:"ap",label:l("ap")},{value:"custom",label:l("custom"),disabled:!gt}],u=>n.update({mode:u==="ap"||u==="custom"?u:null}))}
        ${e.hasMission("JustCount",n.effectiveSettings.songs)?c("sc-just",l("just"),a.just,u=>n.update({just:u}),100):g}
        ${a.mode==="custom"?d`
                ${c("sc-great",l("great"),a.great,u=>n.update({great:u}),100)}${c("sc-miss",l("miss"),a.missEvery,u=>n.update({missEvery:u}))}
              `:g}
        <div id="sc-rank" tabindex="-1">
          ${Fe(e,a.ranks,(u,b)=>{let I=[...a.ranks];I[u]=b,n.update({ranks:I})},a.players)}
        </div>
        ${re({id:"sc-conditions",label:l("details"),supportingText:[...n.team().members,...n.team().snaps].some(u=>Object.values(u).includes(null))?l("unknown"):l("play"),expanded:n.expanded.has(-1),onExpandedChange:u=>{u?n.expanded.add(-1):n.expanded.delete(-1),e.requestUpdate()},content:yi(e)})}
        ${n.submitted&&n.issues.length?d`
                <div id="sc-issues" tabindex="-1">
                  <strong>${l("issues")}</strong>
                  <ul>
                    ${n.issues.map(u=>d`
                        <li>
                          <a
                            href=${"#"+u.field}
                            @click=${b=>{b.preventDefault(),e.focusInput(u.field)}}
                          >
                            ${u.slot===void 0?"":l("slot",{slot:u.slot+1})+" / "}${l(u.reason)}
                          </a>
                        </li>
                      `)}
                  </ul>
                </div>
              `:g}
      </section>
      ${i.length?d`
              <button
                class="button button--text tb-run__results"
                type="button"
                @click=${()=>e.querySelector("#sc-results")?.scrollIntoView({block:"start"})}
              >
                ${e.t("viewResults","View results")}
              </button>
            `:g}
      ${hi(e)}
    `,d`
      <div class="tb-run">
        <button
          class="button button--full tb-run__button"
          type="button"
          ?disabled=${e.running&&!n.running}
          @click=${()=>n.running?n.stop():void n.start()}
        >
          ${n.running?l("stop"):e.running?l("busy"):l("start")}
        </button>
      </div>
    `,d`
      <div class="stack stack--loose">
        ${t}
        <section id="sc-results" class="surface stack">
          ${H({icon:"music_note",label:l("title")})}
          ${i.length?d`
                  <div class="row row--wrap">
                    <span role="status" class="tabular">${l("coverage",{done:k,total:i.length})}</span>
                  </div>
                  <md-linear-progress
                    .value=${i.length?k/i.length:0}
                    aria-label=${l("coverage",{done:k,total:i.length})}
                  ></md-linear-progress>
                  ${m("sc-sort","buttons",l("sort"),a.sort,[{value:"contribution",label:l("contribution")},{value:"score",label:l("score")},{value:"remaining",label:l("remaining")}],u=>n.update({sort:u}))}
                `:g}
          ${i.length?d`
                  ${p()}
                  <div class="table-scroll sc-desktop" role="region" tabindex="0" aria-label=${l("title")}>
                    <table class="data-table sc-results">
                      <thead>
                        <tr>
                          <th>${l("song")}</th>
                          <th>${l("difficulty")}</th>
                          ${h}
                        </tr>
                      </thead>
                      <tbody>
                        ${Ba(n.groups(),u=>u.id,u=>{let b=u.representative,I=n.expanded.has(u.id),w=u.charts.filter(E=>E.status==="complete").length;return d`
                              <tr data-sc-song=${u.id}>
                                <th scope="row">
                                  ${Ze(e,b?.song??u.charts[0].song)}
                                  <button
                                    class="button button--text"
                                    type="button"
                                    aria-expanded=${String(I)}
                                    aria-controls=${`sc-chart-${u.id}`}
                                    @click=${()=>{I?n.expanded.delete(u.id):n.expanded.add(u.id),e.requestUpdate()}}
                                  >
                                    ${l("coverage",{done:w,total:u.charts.length})}
                                  </button>
                                </th>
                                <td>${b?o.difficultyLabel(u.id,b.song.difficulty):"\u2014"}</td>
                                ${x(b)}
                              </tr>
                              <tr id=${`sc-chart-${u.id}`} ?hidden=${!I}>
                                <td colspan="5">
                                  <table class="data-table">
                                    <thead>
                                      <tr>
                                        <th>${l("difficulty")}</th>
                                        ${h}
                                        <th>${l("details")}</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      ${u.charts.map(E=>{let y=E.hit?.score?ye(e.master,E.song,r,E.hit.score.mean):null,_=e.master.songs.get(u.id)?.gekisoMissions.map(S=>({1:"COMBO",2:"LUCK",3:"JUST"})[S]??"\u2014").join(" / ");return d`
                                        <tr>
                                          <th>${o.difficultyLabel(u.id,E.song.difficulty)}</th>
                                          ${x(E)}
                                          <td>
                                            <span>
                                              ${E.reason?l(E.reason):E.status==="complete"&&!y?l("threshold"):E.status==="running"?e.computationStatus():l(E.status)}
                                            </span>
                                            <dl class="spec-list">
                                              <dt>${l("total")}</dt>
                                              <dd>${y?s(y.total):"\u2014"}</dd>
                                              <dt>${l("average")}</dt>
                                              <dd>${y?s(Math.ceil(y.average)):"\u2014"}</dd>
                                              <dt>${l("score")}</dt>
                                              <dd>${E.hit?.score?s(E.hit.score.mean):"\u2014"}</dd>
                                              <dt>${l("rank")}</dt>
                                              <dd>${_} / ${r.rank??"\u2014"}</dd>
                                            </dl>
                                            ${E.status==="failed"||E.status==="cancelled"?d`
                                                    <button
                                                      class="button button--text"
                                                      type="button"
                                                      ?disabled=${e.running}
                                                      @click=${()=>void n.start(E.song)}
                                                    >
                                                      ${l("retry")}
                                                    </button>
                                                  `:g}
                                            <button
                                              class="button button--text"
                                              type="button"
                                              @click=${()=>n.update({songs:a.songs.filter(S=>S.songId!==E.song.songId||S.difficulty!==E.song.difficulty)})}
                                            >
                                              ${l("remove")}
                                            </button>
                                          </td>
                                        </tr>
                                      `})}
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            `})}
                      </tbody>
                    </table>
                  </div>
                `:d`
                  <div class="state">
                    <p class="state__title">${l("empty")}</p>
                    <button class="button button--tonal" @click=${()=>n.choose()}>${l("choose")}</button>
                  </div>
                `}
        </section>
      </div>
    `)}var he=(e,t,n=0)=>new Intl.NumberFormat(e.locale,{maximumFractionDigits:n}).format(t);function le(e,t=e.manual){let n=e.manualInputs(t);return t.members.every(a=>a!==null)&&n.members.length===5&&n.snaps.length===t.snaps.filter(a=>a!==null).length&&new Set(t.members.map(a=>e.catalog.member(a)?.characterId)).size===5}function xi(e,t=e.manual){let{members:n,snaps:a,leader:r}=t;return{members:n.map(i=>`m${i}`),snaps:a.map(i=>i===null?null:`s${i}`),leader:`m${n[r]}`}}function Or(e){let t=e.manualGoal();if(t.kind!=="gekiso")return!0;let n=!Ct(t.seeds,e.searchSettings.gekisoSamplingMode==="manual"?1:0),a=e.hasMission("JustCount",t.songs)?e.searchSettings.justWindowMs:0;return!n&&qa(e.searchSettings)&&Number.isFinite(a)?!0:(e.submitted=!0,e.error=e.t("invalidIntegerRange","Enter an integer from {min} to {max}",{min:0,max:Oe}),e.requestUpdate(),e.focusInput(n?"tb-luck-samples":"tb-just-window"),!1)}async function $i(e){if(!le(e)||!e.engine||!e.manualGoal().songs.length||e.running||!Or(e))return;let t=e.acquireTask("evaluation");if(!t)return;let n=e.manualContext();e.activeManualContext=n,e.manualBusy=!0,e.requestUpdate();let a=e.manualGoal(),r=e.manualConditions(),i=Pr(e,a),o=async(l,s)=>{let m=Br(e,l,a),c=await e.engine.evaluate({members:m.members,snaps:m.snaps,player:m.player,unknownPolicy:m.unknownPolicy,songRules:m.songRules,team:xi(e,l),songs:a.songs,play:a.kind==="score"?a.play:{great:0,good:0,bad:0,miss:0},...a.kind==="gekiso"?{gekiso:{accuracy:a.accuracy,rank:a.rank,ranks:a.ranks,seeds:a.seeds,minJustWindowMs:a.minJustWindowMs,justWindow:a.justWindow}}:{},challengeEventId:a.kind==="score"?a.challengeEventId:null,event:null});return Ar(e,c,l,m,i,s)};try{let l=await o(e.manual),s=e.manualBaseline,m=s&&s.conditions!==r&&!e.manualPin?await o(s.team,s.results):null;e.ownsTask(t)&&n===e.manualContext()&&(e.manualResultsFor=n,e.manualResults=l,e.manualPin?e.manualBaseline={team:structuredClone(e.manual),results:Hn(l),conditions:r}:s&&m&&e.manualBaseline===s&&(e.manualBaseline={...s,results:m,conditions:r}),e.manualPin=!1)}catch(l){e.ownsTask(t)&&!(l instanceof DOMException&&l.name==="AbortError")&&(e.error=e.errorReason(l))}finally{e.ownsTask(t)&&(e.manualBusy=!1,e.activeManualContext=""),e.releaseTask(t),e.requestUpdate()}}function Jn(e,t,n){if(t===void 0||n===void 0)return g;let a=t-n;return d`
    <small class="tb-delta" data-sign=${a>0?"up":a<0?"down":"same"}>
      ${a>0?"+":a<0?"\u2212":"\xB1"}${he(e,Math.abs(a))}
    </small>
  `}function ki(e,t){let n=e.manualBaseline,a=e.catalog,r=()=>{e.manualBaseline={team:structuredClone(e.manual),results:Hn(e.manualResults),conditions:e.manualConditions()},e.manualPin=!1,e.requestUpdate()},{members:i,snaps:o,leader:l}=n?.team??{members:[null,null,null,null,null],snaps:[null,null,null,null,null],leader:2},s=[0,1,2,3,4].filter(m=>m!==l);return s.splice(2,0,l),d`
    <div class="tb-baseline cluster">
      <span class="tb-baseline__label">${e.t("baseline","Baseline")}</span>
      <span class="tb-baseline__faces">
        ${s.map(m=>{let c=i[m]===null?void 0:a.member(i[m]),x=o[m]===null?void 0:a.snap(o[m]);return d`
            <span class="tb-baseline__slot" title=${c?a.characterName(c.characterId):""}>
              ${c?d`<img src=${c.image||a.characterFace(c.characterId)} alt="" width="32" height="32" loading="lazy" decoding="async" />`:g}
              ${x?d`<img class="tb-baseline__snap" src=${x.image} alt="" width="20" height="20" loading="lazy" decoding="async" />`:g}
            </span>
          `})}
      </span>
      <button class="icon-button" type="button" ?disabled=${!t||e.running||e.manualBusy}
        aria-label=${e.t(n?"replaceBaseline":"pinBaseline",n?"Update baseline":"Set as baseline")}
        title=${e.t(n?"replaceBaseline":"pinBaseline",n?"Update baseline":"Set as baseline")}
        @click=${r}>${z("push_pin",20)}</button>
      ${ae({icon:"close",label:e.t("clearBaseline","Clear baseline"),size:18,disabled:!n,onClick:()=>{e.manualBaseline=null,e.manualPin=!1,e.requestUpdate()}})}
    </div>
  `}async function Si(e,t){let n=e.request(e.manualGoal());if(!n||!e.engine||!le(e)||e.running||!Or(e))return;let a=e.acquireTask("suggestion");if(!a)return;let r=e.manualSuggestionContext();e.activeManualContext=r,e.manualSuggesting=t,e.manualSuggestions=null,e.requestUpdate();let{members:i,snaps:o,leader:l}=e.manual,s=i.flatMap((b,I)=>I===t||b===null?[]:[{member:b,snap:o[I]??null,leader:I===l}]),m=e.manualInputs(),c=pt(e.view,!0),x=new Map(c.members.map(b=>[b.key,b])),$=new Map(c.snaps.map(b=>[b.key,b])),p=[...new Map([...n.members.map(b=>x.get(b.key)??b),...m.members].map(b=>[b.key,b])).values()],h=[...new Map([...n.snaps.map(b=>$.get(b.key)??b),...m.snaps].map(b=>[b.key,b])).values()],k={requiredMembers:s.map(b=>`m${b.member}`),leader:t===l?null:`m${i[l]}`,bindings:s.map(b=>[`m${b.member}`,b.snap===null?null:`s${b.snap}`]),excludedMembers:[`m${i[t]}`],requiredSnaps:[],excludedSnaps:[],noSnaps:!1,minBonusPercent:null},u={...n,members:p,snaps:h,unknownPolicy:e.settings.unknownPolicy,constraints:k,k:3,deadline:n.timeLimitMs===null?1/0:mn()+n.timeLimitMs};try{let b=[],I=t===l?p.filter(w=>!i.includes(w.cardId)).map(w=>w.key):[k.leader];for(let w of I){if(!e.ownsTask(a)||r!==e.manualSuggestionContext()||mn()>=u.deadline)break;let E=await e.engine.run({...u,constraints:{...k,leader:w}});if(E.error)throw new Error(E.error);b.push(...E.overall)}if(e.ownsTask(a)&&r===e.manualSuggestionContext()){let w=new Set;b=b.sort(oa).filter(E=>{let y=E.members.find(_=>!s.some(S=>_===`m${S.member}`));return w.has(y)?!1:(w.add(y),!0)}),e.manualSuggestionsFor=r,e.manualSuggestions={slot:t,hits:b.slice(0,3)}}}catch(b){e.ownsTask(a)&&!(b instanceof DOMException&&b.name==="AbortError")&&(e.error=e.errorReason(b))}finally{e.ownsTask(a)&&(e.manualSuggesting=-1,e.activeManualContext=""),e.releaseTask(a),e.requestUpdate()}}function rt(e){let t=e.leader===null?0:e.members.indexOf(e.leader);return{members:[...e.members],snaps:[...e.snaps],leader:t<0?0:t}}function Od(e){return Qn(e,"teams")}function qd(e){return Qn(e,"comparison")}function Fd(e){return Qn(e,"manual")}function Qn(e,t){let n=t==="comparison",a=e.catalog,r=e.view,i=[0,1,2,3,4].filter(y=>y!==e.manual.leader);i.splice(2,0,e.manual.leader);let o=e.manual.members.map(y=>y===null?null:a.member(y)?.characterId??null),l=o.some((y,_)=>y!==null&&o.indexOf(y)!==_),s=e.manualContext(),m=e.manualResultsFor===s?e.manualResults:null,c=e.manualGoal().songs.map(y=>({song:y,row:m?.find(_=>_.song.songId===y.songId&&_.song.difficulty===y.difficulty)??null})),x=e.manualBaseline&&e.manualBaseline.conditions===e.manualConditions()?e.manualBaseline:null,$=y=>x?.results.find(_=>_.song.songId===y.songId&&_.song.difficulty===y.difficulty),p=e.manualSuggestions&&e.manualSuggestionsFor===e.manualSuggestionContext()?e.manualSuggestions:null,h=e.manualSuggesting,k=e.taskKind==="evaluation"||e.taskKind==="suggestion",u=e.settings.manualScoreMode!=="gekiso",{eventId:b,manualChallengeRules:I}=e.settings,w=u&&I&&b!==null?a.challengeSongs(b).map(y=>y.liveMusicId):void 0,E=d`
    <section id="sc-formation" data-sc-field class="surface stack">
      <div class="row row--between row--wrap">
        ${H({icon:"edit_square",label:e.t("manualTeam","Build a team by hand")})}
        <div class="cluster">
          <button class="button button--text" type="button" ?disabled=${!le(e)}
            @click=${()=>{import("./parking-view-PNDO6D7B.js").then(y=>y.openParking(e,{team:e.manual,...e.settings.songs[0]?{song:e.settings.songs[0]}:{}}))}}>
            ${e.t("parking.useTeam","Park with this team")}
          </button>
          ${n?g:d`
                  <button
                    class="button button--text"
                    type="button"
                    ?disabled=${!le(e)}
                    @click=${()=>{let y=e.manualGoal();e.openSongComparison(void 0,{goal:y,songRules:e.songRules(y)})}}
                  >
                    ${e.t("sc.useTeam","Compare songs with this team")}
                  </button>
                `}
          <button
            class="button button--text button--small"
            type="button"
            ?disabled=${!le(e)}
            @click=${()=>Wa(e,[e.manual.members[e.manual.leader],...e.manual.members.filter((y,_)=>_!==e.manual.leader)],[e.manual.snaps[e.manual.leader]??null,...e.manual.snaps.filter((y,_)=>_!==e.manual.leader)],(n?e.songComparison.settings.songs[0]:e.settings.songs[0])??null)}
          >
            ${z("bookmark_add",18)}${e.t("saveTeam","Save team")}
          </button>
          <button
            class="button button--text button--small"
            type="button"
            @click=${()=>{Yt(e),e.manual={members:[null,null,null,null,null],snaps:[null,null,null,null,null],leader:2},e.manualResults=null,e.manualSuggestions=null,e.requestUpdate()}}
          >
            ${e.common("common.actions.clear","Clear")}
          </button>
        </div>
      </div>
      ${n&&r.teams.length?d`
              <md-outlined-select
                label=${e.t("sc.chooseTeam","Use a saved team")}
                .value=${""}
                @change=${y=>{let _=r.teams.find(S=>S.id===y.target.value);_&&(e.manualSuggestions=null,e.openSongComparison(rt(_))),y.target.value=""}}
              >
                <md-select-option value="">
                  <div slot="headline">${e.t("sc.select","Choose")}</div>
                </md-select-option>
                ${r.teams.map(y=>d`
                    <md-select-option .value=${y.id}><div slot="headline">${y.name}</div></md-select-option>
                  `)}
              </md-outlined-select>
            `:g}
      ${n?g:d`
              ${Pe(e,e.settings,y=>e.updateSettings(y),"manual")}
              <span class="tb-results__meta">${e.t("manualGrowth","Owned cards: recorded growth")}</span>
            `}
      <ol class="tb-formation tb-formation--edit" aria-label=${e.t("formation","Formation")}>
        ${i.map(y=>{let _=e.manual.members[y],S=e.manual.snaps[y],C=_!=null?a.cardOptions("members",_):null,M=S!=null?a.cardOptions("snaps",S):null,L=y===e.manual.leader;return d`
            <li id=${`sc-slot-${y}`} data-sc-field tabindex="-1" class=${`tb-slot${L?" is-leader":""}`}>
              <button
                class="tb-slot__member"
                type="button"
                @click=${()=>{e.slotPicker={slot:y,kind:"members"},e.requestUpdate()}}
                aria-label=${C?`${e.t("pickMember","Choose a member")}: ${C.label}`:e.t("pickMember","Choose a member")}
              >
                ${C?_e(C):d`
                        <span class="tb-slot__empty">${z("person_add",24)}</span>
                      `}
              </button>
              <button
                class="tb-slot__snap"
                type="button"
                @click=${()=>{e.slotPicker={slot:y,kind:"snaps"},e.requestUpdate()}}
                aria-label=${M?`${e.t("pickSnap","Choose a snap")}: ${M.label}`:e.t("pickSnap","Choose a snap")}
              >
                ${M?_e(M):d`
                        <span class="tb-slot__empty">${z("add_photo_alternate",20)}</span>
                      `}
              </button>
              <span class="tb-slot__tools">
                <button
                  class=${`chip tb-slot__leader${L?" is-selected":""}`}
                  type="button"
                  aria-pressed=${String(L)}
                  ?disabled=${_===null}
                  @click=${()=>{e.manual={...e.manual,leader:y},e.manualResults=null,e.requestUpdate()}}
                >
                  ${z(L?"star":"star_outline",18)}<span class="chip__label">${e.t("leader","Leader")}</span>
                </button>
                ${n?g:d`<button
                        class="button button--text button--small tb-slot__suggest"
                        type="button"
                        title=${e.t("suggestSlot","Best card for this slot")}
                        ?disabled=${e.running||!le(e)||h>=0||!e.manualGoal().songs.length}
                        @click=${()=>void Si(e,y)}
                      >
                        ${z("auto_fix_high",18)}<span>${e.t("suggestShort","Suggest")}</span>
                      </button>`}
            </li>
          `})}
      </ol>
      ${!n&&l?d`
              <p class="field-note field-note--error">
                ${e.t("duplicateCharacter","Each character can appear once.")}
              </p>
            `:g}
      ${!n&&p?d`
              <div class="stack tb-suggest">
                <strong class="tb-subtitle">${e.t("suggestions","Best replacements")}</strong>
                ${p.hits.length?p.hits.map(y=>{let _=y.members.find(M=>!e.manual.members.includes(Ce(M))),S=_?y.members.indexOf(_):-1,C=S>=0?y.snaps[S]:null;return _?d`
                          <div class="list-item list-item--two-line">
                            <span class="list-item__leading tb-suggest__art">
                              ${_e(a.cardOptions("members",Ce(_)))}
                            </span>
                            <span class="list-item__body">
                              <strong class="list-item__headline">
                                ${a.cardName("members",Ce(_))}
                              </strong>
                              <span class="list-item__supporting">
                                ${C?a.cardName("snaps",Ce(C)):e.t("noSnap","No snap")}
                                / ${e.t("power","Power")}
                                ${he(e,y.power)}${y.score?` / ${he(e,y.score.mean)}`:""}${y.event?` / ${he(e,y.event.mean,1)} pt`:""}
                              </span>
                            </span>
                            <span class="list-item__trailing">
                              <button
                                class="button button--tonal button--small"
                                type="button"
                                @click=${()=>{let M=[...e.manual.members],L=[...e.manual.snaps];M[p.slot]=Ce(_),L[p.slot]=C?Ce(C):null,e.manual={...e.manual,members:M,snaps:L},e.manualSuggestions=null,e.manualResults=null,e.requestUpdate()}}
                              >
                                ${e.t("apply","Apply")}
                              </button>
                            </span>
                          </div>
                        `:g}):d`
                        <p class="card__supporting">${e.t("noSuggestion","No better card found.")}</p>
                      `}
              </div>
            `:g}
    </section>
  `;return t==="manual"?d`
      <div class="tb-teams stack stack--loose">
        ${we(e,d`
            <section class="surface stack">
              ${H({icon:"flag",label:e.t("goal","Goal")})}
              ${G({label:e.t("goal","Goal"),value:e.settings.manualScoreMode,options:[{value:"score",label:e.t("goalScore","Live score")},{value:"gekiso",label:e.t("goalGekiso","GEKISO score")}],onSelect:y=>e.updateSettings({manualScoreMode:y})})}
            </section>
            <section class="surface stack">
              ${H({icon:"library_music",label:e.t("songs","Songs"),count:e.manualGoal().songs.length||void 0})}
              ${ze(e,e.settings.songs,y=>e.updateSettings({songs:y}),!1,w,"tb-songs",void 0,{poolAction:Qt(e,w??[],y=>e.updateSettings({songs:y}))})}
              ${je(e)}
            </section>
            <section class="surface stack">
              ${H({icon:"piano",label:e.t("farm.conditions","Play and account conditions")})}
              ${Xt(e,{...e.searchSettings,goal:u?"score":"gekiso"})}
              ${u?g:Dn(e)}
              ${u?d`
                    <label class="tb-check">
                      <md-checkbox
                        touch-target="wrapper"
                        .checked=${j(e.settings.manualChallengeRules)}
                        @change=${y=>e.updateSettings({manualChallengeRules:y.target.checked})}
                      ></md-checkbox>
                      <span>${e.t("challengeRules","Challenge live rules (event parameter bonus)")}</span>
                    </label>
                    ${I?d`
                      ${Jt(e,{icon:"event",label:e.t("event","Event")})}
                      ${De(e,e.searchSettings,{manageInHeading:!0})}
                    `:g}
                  `:d`
                    ${Fe(e,e.settings.gekisoRanks,(y,_)=>{let S=[...e.settings.gekisoRanks];S[y]=_,e.updateSettings({gekisoRanks:S})})}
                    ${zn(e)}
                  `}
              ${Ae(e,e.settings.unknownPolicy,y=>e.updateSettings({unknownPolicy:y}))}
            </section>
          `,d`
            <div class="tb-run">
              <button
                class="button tb-run__button"
                type="button"
                ?disabled=${!k&&(!le(e)||l||!e.manualGoal().songs.length||e.running||u&&e.settings.manualChallengeRules&&e.settings.eventId===null)}
                @click=${()=>k?e.cancel():void $i(e)}
              >
                ${k?z("close",18):z("calculate",18)}${k?e.common("common.actions.cancel","Cancel"):e.t("evaluateTeam","Evaluate on the chosen songs")}
              </button>
              <div class="tb-manual__progress">
                ${k?d`
                      <md-linear-progress
                        indeterminate
                        aria-label=${e.t("evaluating","Evaluating")}
                      ></md-linear-progress>
                    `:g}
              </div>
            </div>
          `,d`
            <div class="stack stack--flex stack--loose">
              ${E}
              <section class="surface stack stack--flex tb-manual__scores">
                <div class="row row--between row--wrap">
                  ${H({icon:"query_stats",label:u?e.t("goalScore","Live score"):e.t("goalGekiso","GEKISO score"),count:c.length||void 0})}
                  ${ki(e,!!m&&le(e))}
                </div>
                <div class="stack stack--flex stack--loose">
                  ${c.map(({song:y,row:_})=>{let S=_?Ue(_):null,C=`manual:${y.songId}:${y.difficulty}`,M=e.expanded.has(C),L=$(y),V=S?e.comparison.idFor(e,S):null,Q=!!V&&e.comparison.items.some(W=>W.id===V);return d`
                      <article class="card card--outlined tb-hit">
                        ${Ze(e,y,(S?Ca(e,S)?.songRules:e.songRules(e.manualGoal()))??null)}
                        <div class="card__body stack stack--flex">
                          <div class="tb-manual__metrics">${Re([{label:e.t("expectedScore","Average score"),value:_?d`${he(e,_.score.mean)} ${Jn(e,_.score.mean,L?.score.mean)}`:"\u2014"},{label:e.t("selectedOrderScore","Selected-order score"),value:_?d`${he(e,Zt(_))} ${Jn(e,Zt(_),L?Zt(L):void 0)}`:"\u2014"},{label:e.t("power","Power"),value:_?d`${he(e,_.power)} ${Jn(e,_.power,L?.power)}`:"\u2014"},{label:e.t("scoreRange","Range"),value:_?`${he(e,_.score.min)} \u2013 ${he(e,_.score.max)}`:"\u2014"}],{numeric:!0})}</div>
                          ${_&&S?d`
                            <div class="cluster">
                              <button class="button button--tonal" type="button" ?disabled=${e.running}
                                @click=${()=>e.teamGrowth.openManual(_)}>${e.t("tg.title","Team growth comparison")}</button>
                              <button class="button button--text" type="button" aria-pressed=${Q}
                                @click=${()=>e.comparison.toggle(e,S)}>${e.t(Q?"comparisonAdded":"addComparison",Q?"Added to comparison":"Add to comparison")}</button>
                            </div>
                            ${re({id:`tb-${C.replaceAll(":","-")}`,label:e.t("moreDetail","Details"),expanded:M,onExpandedChange:W=>{W?e.expanded.add(C):e.expanded.delete(C),e.requestUpdate()},content:La(M?Ka(e,S):g)})}
                          `:g}
                        </div>
                      </article>
                    `})}
                </div>
              </section>
            </div>
          `)}

      </div>
    `:n?d`
      <div class="tb-teams stack stack--loose">${Wn(e,E)}</div>
    `:d`
    <div class="tb-teams stack stack--loose">
      ${n?Wn(e):g}
      ${t==="teams"?d`
              <section class="surface stack">
                <div class="row row--between row--wrap">
                  ${H({icon:"bookmarks",label:e.t("savedTeams","Saved teams"),count:r.teams.length||void 0})}
                  <button
                    class="button button--tonal"
                    type="button"
                    @click=${()=>{e.buildMode="manual",e.setTab("build")}}
                  >
                    ${z("add",18)}${e.t("manualTeam","Build a team by hand")}
                  </button>
                </div>
                ${r.teams.length?d`
                        <div class="tb-saved">
                          ${r.teams.map(y=>d`
                              <article class="card card--outlined tb-saved__team">
                                <div class="tb-saved__head">
                                  <md-outlined-text-field
                                    class="tb-saved__name"
                                    label=${e.t("teamName","Name")}
                                    .value=${j(y.name)}
                                    @change=${_=>e.write([{key:`team.${y.id}`,value:{...y,name:_.target.value.slice(0,80)}}])}
                                  ></md-outlined-text-field>
                                  ${ae({icon:"delete",label:e.t("delete","Delete"),onClick:()=>{e.write([{key:`team.${y.id}`,value:null}]),e.notice=e.t("deletedTeam","Team deleted"),e.requestUpdate()}})}
                                </div>
                                ${Nt(e,y.members.map((_,S)=>({member:_,snap:y.snaps[S]??null})),y.leader===null?-1:y.members.indexOf(y.leader))}
                                ${y.song?d`
                                        <span class="tb-saved__song">
                                          ${z("music_note",18)}<span lang=${a.songTitleLanguage(y.song.songId)}>${a.songTitle(y.song.songId)}</span>
                                          <small>${a.difficultyLabel(y.song.songId,y.song.difficulty)}</small>
                                        </span>
                                      `:g}
                                <div class="tb-saved__actions">
                                  <button
                                    class="button button--tonal"
                                    type="button"
                                    @click=${()=>{Yt(e),e.buildMode="manual",e.setTab("build"),e.manual=rt(y),e.manualResults=null,e.manualSuggestions=null,y.song&&!e.settings.songs.some(_=>_.songId===y.song.songId&&_.difficulty===y.song.difficulty)&&e.updateSettings({songs:[...e.settings.songs,y.song]}),e.requestUpdate()}}
                                  >
                                    ${z("edit",18)}${e.t("loadTeam","Open in the editor")}
                                  </button>
                                  <button
                                    class="button button--text"
                                    type="button"
                                    @click=${()=>{e.manualSuggestions=null,e.openSongComparison(rt(y))}}
                                  >
                                    ${e.t("sc.useTeam","Compare songs with this team")}
                                  </button>
                                </div>
                              </article>
                            `)}
                        </div>
                      `:d`
                        <div class="state"><span class="state__icon">${z("bookmarks",40)}</span><p class="state__title">${e.t("noSavedTeamsShort","No saved teams")}</p></div>
                      `}
              </section>
            `:g}

    </div>
  `}function Fr(e,t,n,a,r,i,o,l){let s=Lt(e,t,a),m=s.events.get(t),c=s.songs.get(n);if(!m||!c)return[];if(a&&r<=0)return[];let $=(a?s.challengeBoosts.find(u=>u.consumed===r):qe(s.boosts,r))?.eventPointRate;if($===void 0)return[];let p=new Map([[2,0]]);for(let u of s.scoreRanks.get(c.rankGroup)??[])u.rank>2&&p.set(u.rank,Math.min(p.get(u.rank)??1/0,u.required));let h=[...p].sort((u,b)=>u[0]-b[0]),k=a?m.challengePoints:m.livePoints;return h.flatMap(([u,b],I)=>{let w=Math.max(o,b),E=Math.min(l,Math.min(2147483648,...h.slice(I+1).map(_=>_[1]))-1),y=Ha(k.get(u)??0,i,$);return w<=E&&y>0?[{rank:u,points:y,scoreMin:w,scoreMax:E,boosts:a?0:r,cpCost:a?r:0,cpGain:a?0:Math.imul(s.liveChallengePoints.get(u)??0,$)}]:[]})}var tn=(e,t)=>t?tn(t,e%t):e;function qr(e,t){let n=null,a=1/0;for(let r=0;r<t.length;r++){e%t[r]===0&&e/t[r]<a&&(n=t.map((i,o)=>o===r?e/t[r]:0),a=e/t[r]);for(let i=r+1;i<t.length;i++){let o=t[r],l=t[i],s=tn(o,l);if(e%s)continue;let[m,c,x,$]=[o/s,l/s,1,0];for(;c;){let u=Math.floor(m/c);[m,c,x,$]=[c,m-u*c,$,x-u*$]}let p=BigInt(l/s),h=Number((BigInt(e/s)*BigInt(x)%p+p)%p),k=(e-o*h)/l;k>=0&&h+k<a&&(n=t.map((u,b)=>b===r?h:b===i?k:0),a=h+k)}}return n}function Xn(e,t){let n=[...t].sort((S,C)=>S.points-C.points||S.rank-C.rank).filter((S,C,M)=>!C||S.points!==M[C-1].points),a=S=>({points:S.reduce((C,M,L)=>C+M*n[L].points,0),plays:S.reduce((C,M)=>C+M,0),steps:S.flatMap((C,M)=>C?[{play:n[M],count:C}]:[]).sort((C,M)=>M.play.points-C.play.points)}),r=a(n.map(()=>0));if(e===0)return{exact:r,below:r,above:r};if(!n.length)return{exact:null,below:r,above:null};let i=n.map(S=>S.points).reduce(tn),o=n.map(S=>S.points/i),l=Math.floor(e/i),s=Math.ceil(e/i),m=o[0];if(l<m)return{exact:null,below:r,above:a(o.map((S,C)=>C===0?1:0))};if(s<=2e5){let S=s+m,C=new Int32Array(S+1).fill(1073741823),M=new Int16Array(S+1).fill(-1);C[0]=0;for(let v=m;v<=S;v++)for(let O=0;O<o.length&&o[O]<=v;O++){let q=C[v-o[O]]+1;q<C[v]&&(C[v]=q,M[v]=O)}let L=v=>{let O=o.map(()=>0);for(;v>0;){let q=M[v];O[q]++,v-=o[q]}return a(O)},V=l,Q=s;for(;V&&M[V]===-1;)V--;for(;M[Q]===-1;)Q++;let W=l===s&&V===l?L(l):null;return{exact:W,below:W??L(V),above:W??L(Q)}}let c=qr(l,o),x=s===l?c:qr(s,o);if(c&&x){let S=a(c),C=a(x);return{exact:l===s?S:null,below:S,above:C}}let $={residue:0,amount:0,count:0,previous:null,coin:-1},p=new Map([[0,$]]),h=[$],k=S=>{let C=h.length;for(h.push(S);C;){let M=C-1>>1;if(h[M].amount<=S.amount)break;h[C]=h[M],C=M}h[C]=S};for(;h.length;){let S=h[0],C=h.pop();if(h.length){let M=0;for(;M*2+1<h.length;){let L=M*2+1;if(L+1<h.length&&h[L+1].amount<h[L].amount&&L++,h[L].amount>=C.amount)break;h[M]=h[L],M=L}h[M]=C}if(p.get(S.residue)===S)for(let M=1;M<o.length;M++){let L=S.amount+o[M],V=L%m,Q=p.get(V);if(L>s+m||Q&&(Q.amount<L||Q.amount===L&&Q.count<=S.count+1))continue;let W={residue:V,amount:L,count:S.count+1,previous:S,coin:M};p.set(V,W),k(W)}}let u=$,b=0,I=$,w=Math.ceil(s/m)*m;for(let S of p.values()){if(S.amount<=l){let M=S.amount+Math.floor((l-S.amount)/m)*m;M>b&&(b=M,u=S)}let C=S.amount+Math.max(0,Math.ceil((s-S.amount)/m))*m;C<w&&(w=C,I=S)}let E=(S,C)=>{let M=o.map(()=>0);for(M[0]=(C-S.amount)/m;S.previous;)M[S.coin]++,S=S.previous;for(let L=o.length-1;L>0;L--){let V=tn(m,o[L]),Q=o[L]/V,W=Math.floor(M[0]/Q);M[0]-=W*Q,M[L]+=W*m/V}return a(M)},y=E(u,b),_=E(I,w);return{exact:y.points===e?y:null,below:y,above:_}}var Yn=class{owner="";current=null;target=null;challenge=!1;consumption=0;songId=0;difficulty=3;includeManual=!1;teamIds=new Set;submitted=!1;running=!1;error="";revision=0;prefetched="";evaluations=new Map;result=null;rows=[];rowsSignature="";resultInput=null;resultSignature=""},jr=new WeakMap,_i=["","E","D","C","B","A","S","SS"];function zr(e){let t=JSON.stringify([e.snapshot?.owner??"local",e.data.identity]),n=jr.get(e);if(!n||t!==n.owner){n=new Yn,n.owner=t,n.includeManual=le(e);let a=e.settings.songs[0]??(n.includeManual?null:e.view.teams[0]?.song);n.songId=a?.songId??0,n.difficulty=e.songDifficulties[0]??a?.difficulty??3,!n.includeManual&&e.view.teams[0]&&n.teamIds.add(e.view.teams[0].id),jr.set(e,n)}return n}function Dr(e,t){return[...t.includeManual?[{key:"manual",name:e.t("parking.currentTeam","Current manual team"),team:e.manual}]:[],...e.view.teams.filter(a=>t.teamIds.has(a.id)).map(a=>({key:a.id,name:a.name,team:rt(a)}))].map(a=>({...a,inputs:e.manualInputs(a.team)}))}function nn(e,t,n=!0){return JSON.stringify([e.snapshot?.owner,e.data.identity,e.settings.eventId,e.settings.scope,e.settings.frameRate,n?t.current:null,n?t.target:null,t.challenge,t.consumption,t.songId,t.difficulty,e.view.player,Dr(e,t)])}function iu(e,t={}){e.cancel(),t.team&&(e.manual=structuredClone(t.team));let n=zr(e);n.includeManual=!0,n.teamIds.clear(),n.result=null,n.rows=[],n.submitted=!1,t.song&&(n.songId=t.song.songId,n.difficulty=t.song.difficulty),t.challenge!==void 0&&(n.challenge=t.challenge),t.consumption!==void 0&&(n.consumption=t.consumption),e.setTab("pt"),e.pt.parking=!0,t.eventId!==void 0&&e.updateSettings({eventId:t.eventId}),e.openConditions(),e.requestUpdate()}function ou(e,t){let n=zr(e),a=(v,O)=>e.t(`parking.${v}`,O),r=v=>new Intl.NumberFormat(e.locale).format(v),i=e.settings.eventId,l=!!(i===null?void 0:e.master.events.get(i))?.challengePoints.size&&e.master.challengeMusics.some(v=>v.eventId===i);l||(n.challenge=!1);let s=Lt(e.master,i,n.challenge),m=i===null?void 0:s.events.get(i),c=[...s.songs.values()].filter(v=>n.challenge?s.challengeMusics.some(O=>O.eventId===i&&O.liveMusicId===v.id):!m?.plannerRules?.normalSongs.length||m.plannerRules.normalSongs.includes(v.id));n.songId&&!c.some(v=>v.id===n.songId)&&(n.songId=0);let x=n.songId?e.catalog.difficultyRows(n.songId).filter(v=>v.file):[];x.some(v=>Number(v.difficulty)===n.difficulty)||(n.difficulty=Number(x[0]?.difficulty??3));let $=n.challenge?s.challengeBoosts:Et.flatMap(v=>{let O=qe(s.boosts,v);return O?[O]:[]});$.some(v=>v.consumed===n.consumption)||(n.consumption=$[0]?.consumed??0);let p=Dr(e,n),h=nn(e,n),k=n.current!==null&&Number.isInteger(n.current)&&n.target===n.current,u=`${n.songId}:${n.difficulty}`;e.engine&&x.length&&p.some(v=>le(e,v.team))&&n.prefetched!==u&&(n.prefetched=u,e.engine.prefetchCharts([{songId:n.songId,difficulty:n.difficulty}]));let b=[...n.current===null||!Number.isInteger(n.current)?[{field:"current",message:a("currentRequired","Enter current PT")}]:[],...n.target===null||!Number.isInteger(n.target)?[{field:"target",message:a("targetMissing","Enter target PT")}]:n.target<(n.current??0)?[{field:"target",message:a("targetRequired","Enter target PT at or above current PT")}]:[],...!k&&!m?[{field:"event",message:a("eventRequired","Choose an event")}]:[],...!k&&(!p.length||p.some(v=>!le(e,v.team)))?[{field:"teams",message:a("needTeams","Choose complete teams")}]:[],...!k&&!x.length?[{field:"song",message:e.t("chooseSongs","Choose songs")}]:[]],I=n.submitted&&(b.some(v=>v.field==="teams")||n.resultSignature===h&&n.rows.length>0&&!n.rows.some(v=>v.option)),w=v=>{n.running&&e.cancel(),n.revision++,v(),n.error="",e.requestUpdate()},E=()=>{n.running&&e.cancel(),!n.includeManual&&p[0]&&(e.manual=structuredClone(p[0].team)),n.includeManual=!0,e.buildMode="manual",e.setTab("build")},y=(v,O)=>d`<div id=${`parking-${v}`} class="stack">
    ${ua({label:O,value:n[v],nullable:!0,min:0,max:2147483647,invalid:n.submitted&&b.some(q=>q.field===v),onInput:q=>w(()=>{n[v]=q})})}</div>`,_=v=>Nt(e,v.team.members.flatMap((O,q)=>{if(O===null)return[];let se=v.inputs.members.find(A=>A.cardId===O),ne=v.team.snaps[q]??null,Y=v.inputs.snaps.find(A=>A.cardId===ne);return[{member:O,snap:ne,memberGrowth:se?e.catalog.resolvedGrowth("members",se,v.inputs.unknownPolicy):null,snapGrowth:Y?e.catalog.resolvedGrowth("snaps",Y,v.inputs.unknownPolicy):null}]}),v.team.leader,!1),S=d`${t}
    <section class="surface stack">${H({icon:"emoji_events",label:e.t("event","Event")})}
      <div class=${`stack${n.submitted&&b.some(v=>v.field==="event")?" pt-field--invalid":""}`} id="parking-event">${De(e,e.settings,{rulesOnly:!0})}</div></section>
    <section class="surface stack">${H({icon:"emoji_events",label:a("title","Parking calculator")})}
      ${y("current",a("current","Current PT"))}${y("target",a("target","Target PT"))}
      ${G({label:a("route","Live type"),value:n.challenge?"challenge":"live",options:[{value:"live",label:a("solo","Normal live (solo)")},{value:"challenge",label:e.t("routeChallenge","Challenge live"),disabled:!l}],onSelect:v=>w(()=>{n.challenge=v==="challenge"})})}
      ${n.challenge?Pt(e,n.consumption,v=>w(()=>{n.consumption=v}),s.challengeBoosts):Bt(e,n.consumption,v=>w(()=>{n.consumption=v}),s.boosts)}
      <div class=${`stack${n.submitted&&b.some(v=>v.field==="song")?" pt-field--invalid":""}`} id="parking-song">
        ${ze(e,n.songId?[{songId:n.songId,difficulty:n.difficulty}]:[],v=>w(()=>{n.songId=v[0]?.songId??0,v[0]&&(n.difficulty=v[0].difficulty)}),!0,c.map(v=>v.id),"parking-chart-selection",void 0,{context:`parking:${n.challenge?"challenge":"live"}`,songRules:null,showMissions:!1})}
      </div>
      ${Re([{label:e.t("playJudgements","Play judgements"),value:e.t("playAp","All Perfect")}])}
    </section>
    <section class=${`surface stack${I?" pt-field--invalid":""}`} aria-invalid=${String(I)} id="parking-teams">${H({icon:"group",label:a("teams","Available teams")})}
      ${Pe(e,e.settings,v=>e.updateSettings(v),"manual")}
      ${Ae(e,e.settings.unknownPolicy,v=>e.updateSettings({unknownPolicy:v}))}
      <div class="cluster">${J({label:a("currentTeam","Current manual team"),selected:n.includeManual,onToggle:()=>w(()=>{n.includeManual=!n.includeManual})})}
        ${e.view.teams.map(v=>J({label:v.name,selected:n.teamIds.has(v.id),onToggle:()=>w(()=>{n.teamIds.has(v.id)?n.teamIds.delete(v.id):n.teamIds.add(v.id)})}))}</div>
      <button class="button button--tonal" type="button" @click=${E}>${a("editTeam","Edit team")}</button>
      ${p.filter(v=>le(e,v.team)).map(v=>d`<div class="stack"><strong>${v.name}</strong>${_(v)}</div>`)}
    </section>`,C=async()=>{if(n.running){e.cancel();return}if(n.submitted=!0,n.error="",b.length){e.requestUpdate();return}if(k){n.result=Xn(0,[]),n.rows=[],n.resultSignature=h,n.resultInput={current:n.current,target:n.target,songId:n.songId,difficulty:n.difficulty,challenge:n.challenge},e.closeConditions(),e.requestUpdate();return}if(!e.engine)return;let v=e.acquireTask("parking");if(!v)return;let O=e.engine,q=n.revision,se=structuredClone(p),ne=[];n.running=!0,e.requestUpdate();try{for(let A of se){let K=JSON.stringify([n.owner,i,n.songId,n.difficulty,n.challenge,n.consumption,e.settings.frameRate,e.view.player,A]),Le=n.evaluations.get(K);if(Le){ne.push(Le);continue}let F=(await O.evaluate({...A.inputs,player:structuredClone(A.inputs.player),team:{members:A.team.members.map(Z=>`m${Z}`),snaps:A.team.snaps.map(Z=>Z===null?null:`s${Z}`),leader:`m${A.team.members[A.team.leader]}`},songs:[{songId:n.songId,difficulty:n.difficulty}],play:{frameRate:e.settings.frameRate,great:0,good:0,bad:0,miss:0},challengeEventId:n.challenge?i:null,event:{eventId:i,route:n.challenge?"challenge":"live",consumption:n.consumption,rewardRoom:{mode:"solo"}}}))[0];if(!e.ownsTask(v)||q!==n.revision||h!==nn(e,n))return;let xe=F.event.bonusPercent,ce=Fr(s,i,n.songId,n.challenge,n.consumption,Math.round(xe*100),Math.floor(F.score.min),Math.floor(F.score.max)).filter(Z=>F.score.orders.some(lt=>Z.scoreMin<=lt&&lt<=Z.scoreMax)),ge=[...new Set(ce.map(Z=>Z.points))],Ge=[...new Set(ce.map(Z=>_i[Z.rank]))].join(" / "),be=!F.unsupported?.length&&ge.length===1&&F.event.points===ge[0]?{...ce[0],scoreMin:F.score.min,scoreMax:F.score.max,teamKey:A.key,teamName:A.name,rankLabel:Ge,cpGain:Math.min(...ce.map(Z=>Z.cpGain)),cpGainMax:Math.max(...ce.map(Z=>Z.cpGain))}:null,ot={...A,evaluation:F,bonus:xe,lowPoints:ge.length?Math.min(...ge):F.event.points,highPoints:ge.length?Math.max(...ge):F.event.points,rankLabel:Ge,option:be};n.evaluations.size>=64&&n.evaluations.delete(n.evaluations.keys().next().value),n.evaluations.set(K,ot),ne.push(ot)}let Y=ne.flatMap(A=>A.option?[A.option]:[]);n.rows=ne,n.rowsSignature=nn(e,n,!1),n.result=Y.length?Xn(n.target-n.current,Y):null,n.resultInput={current:n.current,target:n.target,songId:n.songId,difficulty:n.difficulty,challenge:n.challenge},n.resultSignature=h,Y.length||(n.error=a("noStableTeams","No selected team has stable PT per play")),e.closeConditions()}catch(Y){e.ownsTask(v)&&q===n.revision&&!(Y instanceof DOMException&&Y.name==="AbortError")&&(n.error=e.errorReason(Y))}finally{n.running=!1,e.releaseTask(v),e.requestUpdate()}},M=(v,O)=>{let q=n.resultInput,se=q.current,ne=v.steps.reduce((A,K)=>A+K.count*K.play.cpGain,0),Y=v.steps.reduce((A,K)=>A+K.count*(K.play.cpGainMax??K.play.cpGain),0);return d`<section class="surface stack">${H({icon:"emoji_events",label:O})}
      ${Re([{label:a("current","Current PT"),value:r(q.current)},{label:a("target","Target PT"),value:r(q.target)},{label:a("finish","Final PT"),value:r(se+v.points)},{label:a("difference","Difference from target"),value:r(se+v.points-q.target)},{label:a("conditions","Conditions"),value:a(n.resultSignature===h?"currentConditions":"changedConditions",n.resultSignature===h?"Current conditions":"Conditions changed")},{label:a("song","Song"),value:`${e.catalog.songTitle(q.songId)} / ${e.catalog.difficultyLabel(q.songId,q.difficulty)}`},{label:a("route","Live type"),value:q.challenge?e.t("routeChallenge","Challenge live"):a("solo","Normal live (solo)")},{label:a("plays","Plays"),value:r(v.plays)},{label:a("boostsTotal","LIVE BOOST required"),value:r(v.steps.reduce((A,K)=>A+K.count*K.play.boosts,0))},{label:a("cpCost","CP required"),value:r(v.steps.reduce((A,K)=>A+K.count*K.play.cpCost,0))},{label:a("cpGain","CP gained"),value:ne===Y?r(ne):`${r(ne)} \u2013 ${r(Y)}`}],{numeric:!0})}
      ${v.steps.length?d`<ol class="list stack" role="list" aria-label=${O}>${v.steps.map((A,K)=>(se+=A.count*A.play.points,d`<li class="card card--outlined"><div class="card__body stack">
          <div class="row row--between row--wrap"><strong>${K+1}. ${A.play.teamName}</strong><span class="chip">${A.play.rankLabel}</span></div>
          ${Re([{label:a("perPlay","PT per play"),value:r(A.play.points)},{label:a("plays","Plays"),value:r(A.count)},{label:a("runningTotal","PT after plays"),value:r(se)}],{numeric:!0})}
        </div></li>`))}</ol>`:g}
    </section>`},L=async v=>{e.openConditions(),await e.updateComplete;let O=e.querySelector(`#parking-${v}`);O?.scrollIntoView({block:"center"});let q=O?.querySelector("md-outlined-text-field, md-outlined-select, button");q&&"updateComplete"in q&&await q.updateComplete,q?.focus()},V=n.rowsSignature===nn(e,n,!1),Q=n.rows.map(v=>d`<section class="surface stack">${H({icon:"group",label:v.name})}${_(v)}
    ${Re([{label:a("conditions","Conditions"),value:a(V?"currentConditions":"changedConditions",V?"Current conditions":"Conditions changed")},{label:e.t("power","Power"),value:r(v.evaluation.power)},{label:a("normalRange","Normal-play score range"),value:`${r(v.evaluation.score.min)} \u2013 ${r(v.evaluation.score.max)}`},{label:a("rank","Score rank"),value:v.rankLabel},{label:a("bonus","Event PT bonus (%)"),value:`${r(v.bonus)}%`},{label:a("perPlay","PT per play"),value:v.lowPoints===v.highPoints?r(v.lowPoints):`${r(v.lowPoints)} \u2013 ${r(v.highPoints)}`},{label:a("payout","PT payout"),value:v.evaluation.unsupported?.length?a("unsupportedTeam","Unsupported skill"):a(v.option?"stable":"variable",v.option?"All skill orders agree":"Varies with skill order")}],{numeric:!0})}
  </section>`),W=n.submitted&&b.length?d`<section class="surface stack" role="alert">${b.map(v=>d`<a href=${`#parking-${v.field}`} @click=${O=>{O.preventDefault(),L(v.field)}}>${v.message}</a>`)}</section>`:d`${n.error?d`<section class="surface" role="alert">${n.error}</section>`:g}
      ${n.result?n.result.exact?M(n.result.exact,a("exact","Exact target")):d`<section class="surface">${H({icon:"emoji_events",label:a("notExact","Selected teams cannot reach this exact target")})}</section>${M(n.result.below,a("below","Closest below target"))}${n.result.above?M(n.result.above,a("above","Closest above target")):g}`:n.rows.length?g:d`<section class="surface">${Ia({title:a("normalEmpty","No parking plan"),icon:"emoji_events"})}</section>`}
      ${Q}`;return we(e,S,d`<button class="button button--filled" type="button" @click=${()=>void C()}>${n.running?e.common("common.actions.cancel","Cancel"):a("calculate","Calculate parking")}</button>`,W,{summary:a("title","Parking calculator"),validate:!1})}export{Qa as a,Mi as b,Ie as c,Ai as d,Fe as e,to as f,Kr as g,je as h,er as i,Bt as j,Pt as k,me as l,dr as m,Gt as n,mr as o,Kt as p,fr as q,Cs as r,Ds as s,Rr as t,Ir as u,oi as v,Fn as w,jn as x,Er as y,li as z,zn as A,si as B,Dn as C,ci as D,ze as E,Jt as F,De as G,Qt as H,Xt as I,ui as J,mi as K,Bc as L,gi as M,Ue as N,Yt as O,qc as P,bi as Q,at as R,Hc as S,Vc as T,Kc as U,Wc as V,Vn as W,Jc as X,Qc as Y,Xc as Z,le as _,$i as $,Od as aa,qd as ba,Fd as ca,iu as da,ou as ea};
/*! Bundled license information:

@material/web/checkbox/internal/checkbox.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/internal/checkbox-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/checkbox.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/outlined-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/outlined-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/shared-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/outlined-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/outlined-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/string-converter.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/on-report-validity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/text-field-validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/outlined-text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/shared-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/outlined-text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
