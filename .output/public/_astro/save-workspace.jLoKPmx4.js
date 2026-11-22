const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/game-tool-account-store.DJRCxc2T.js","_astro/app-bridge.GQkWDCHi.js","_astro/game-records.BcqoVowg.js","_astro/game-tool-accounts.NS7OdMjO.js","_astro/temporary-public-routing.BsxzEC6B.js"])))=>i.map(i=>d[i]);
import{_ as Q}from"./preload-helper.BlTxHScW.js";import{o as X,a as Y}from"./song-display.BUM043oH.js";import{c as T}from"./client.BYho01b_.js";import{c as Z,a as M,v as ee}from"./collection-view.C0Iap7sK.js";import{i as $}from"./icon.BSt8MVsq.js";import{t as te}from"./tile.DFwS0rEz.js";import{L as se,n as ae}from"./lazy-images.2hwWuBaG.js";import{a as z}from"./accordion.CRbde2Jj.js";import{i as B}from"./controls.BCr1YKFS.js";import"./scrollable-tabs.B0s0LWO4.js";import{r as I}from"./detail-section-heading.BWPPd7ek.js";import{h as ie,f as E}from"./catalog.CfAhzaok.js";import{i as re}from"./lit-element.Bc_VOJIm.js";import{A as b,b as o,D as ne}from"./lit-html.DhDqt3I2.js";import{c as oe}from"./character-pair.BHYMy6NO.js";import{o as le}from"./operation-progress.BlCiIST_.js";import{m as ce}from"./mission-description.CILX1GtZ.js";import{s as R,d as de}from"./snackbar.D8p2-_Nm.js";import{importSaves as he}from"./import.B4driAzH.js";import{s as D,p as pe}from"./snapshot.CdaC-CBW.js";import{a as H,c as _,i as ue,d as me}from"./app-bridge.GQkWDCHi.js";import{m as U}from"./modal.D-GY7Vdy.js";import{g as ge}from"./game-history-help.B6FDPQjz.js";import{downloadBlob as ve}from"./canvas-capture.DOGm0a10.js";import{a as be,b as fe}from"./app-bar.CQ9Fi2qQ.js";import{a as $e}from"./song-progress-profile.Co8LCDlQ.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";/* empty css                        */import"./loading-progress.C8Gf5z9T.js";import"./loading-indicator.dXh2gc3V.js";import"./image-dimensions.lsZdhmjC.js";import"./document-address.dywC0kBs.js";import"./circular-progress.Derl8Va3.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./document-url.BFFpyWb5.js";import"./spoiler-content.Ir13N6R6.js";/* empty css                          *//* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./release-server.j-atVW2C.js";import"./resource-route.BR5kLHYo.js";import"./facet-order.wTm3gWmx.js";/* empty css                        */import"./linear-progress.Du-QQIqh.js";import"./game-tool-accounts.NS7OdMjO.js";import"./game-records.BcqoVowg.js";import"./formats.D2C542XG.js";import"./browser.BzBbrBKd.js";import"./types.NIQ510pY.js";/* empty css                         */const k=n=>n&&typeof n=="object"&&!Array.isArray(n)?n:{},N=(n,e)=>ie(n,e).text;async function _e(n,e,s=!1){e=AbortSignal.any([e,AbortSignal.timeout(3e4)]);const t=`/api/v1/servers/${n}/`,i=await fetch(`${t}release?projection=identity`,{signal:e});if(!i.ok)throw new Error("catalog_failed");const a=await i.json();if(a.server!==n||typeof a.releaseId!="string"||typeof a.sourceId!="string")throw new Error("catalog_failed");const r=async h=>{const d=await fetch(`${t}${h}?release=${encodeURIComponent(a.releaseId)}`,{signal:e});if(!d.ok||d.headers.get("x-haneoka-release-id")!==a.releaseId||d.headers.get("x-haneoka-source-id")!==a.sourceId)throw new Error("catalog_failed");const p=k(await d.json());return[h,k(p.entries??p.items??p[h]??p)]},[l,g]=await Promise.all([Promise.all(["cards","support-cards","characters","songs","items","band-items","progression"].map(r)),s?Promise.allSettled(["bands","friendships","character-missions","events"].map(r)):[]]);return{...a,resources:Object.fromEntries([...l,...g.flatMap(h=>h.status==="fulfilled"?[h.value]:[])])}}function w(n,e,s){return k(n?.resources[e]?.[String(s)])}function ye(n,e,s){const t=w(n,s?"cards":"support-cards",e._masterId),i=t[s?"memberCardLevelGroup":"supportCardLevelGroup"],a=n?.resources.progression?.[s?"memberCardLevels":"supportCardLevels"];if(i==null||!Array.isArray(a)||!/^\d+$/.test(String(e._exp??"")))return null;let r=null;for(const g of a){const h=k(g);if(String(h.group)!==String(i)||!/^\d+$/.test(String(h.exp??"")))continue;const d=Number(h.level);Number.isSafeInteger(d)&&BigInt(String(h.exp))<=BigInt(String(e._exp))&&(r=Math.max(r??0,d))}if(r===null)return null;const l=n?.resources.progression?.[s?"memberCardLevelLimits":"supportCardRanks"];if(Array.isArray(l))for(const g of l){const h=k(k(g).raw),d=s?String(h._rarity)===String(t.rarity)&&String(h._awakeCount)===String(e._awakeCount):String(h._group)===String(t.supportCardRankGroup)&&String(h._rank)===String(e._rank),p=Number(h._limitLevel);if(d&&Number.isSafeInteger(p)&&p>0)return Math.min(r,p)}return r}const L=n=>/^\d+$/u.test(String(n??""))?BigInt(String(n)):null,S=n=>{const e=L(n);return e!==null&&e>0n?String(e):""},ke=n=>Array.isArray(n)?n.map(k):Object.values(k(n)).map(k),G=n=>S(n._masterCharacterId??n._characterId??n.character_id??n.characterId??n._masterId),Se=n=>S(n._masterCharacterFriendshipId??n._characterFriendshipId??n._friendshipId??n.friendship_id??n.friendshipId??n._masterId);function P(n){return ke(n).flatMap(e=>{const s=L(e.exp),t=S(e.rank);return s===null||!t?[]:[{level:t,experience:s}]}).sort((e,s)=>e.experience<s.experience?-1:e.experience>s.experience?1:Number(e.level)-Number(s.level))}function O(n,e){const s=L(n?._exp??n?.exp??n?._experience),t=S(n?._level??n?.level??n?._rank??n?.rank);if(s===null)return{level:t,experience:s,progress:null};const i=e.findIndex(g=>g.experience>s),a=i===-1?e.at(-1):e[i-1],r=e[i],l=t||a?.level||"";return!a||!r||a.level!==l?{level:l,experience:s,progress:null}:{level:l,experience:s,progress:Number((s-a.experience)*1000n/(r.experience-a.experience))/10}}function A(n,e){const s=Array.isArray(n)?n.map(t=>["",t]):Object.entries(k(n));return new Map(s.flatMap(([t,i])=>{const a=k(i),r=e(a)||S(t);return r?[[r,a]]:[]}))}function we(n,e,s){const t=A(e?.resources["character-missions"]?.missions,a=>S(a.missionId??a.id)),i=new Map;for(const[a,r]of A(n,G)){const l=r._receivedMissionIds??r._missionIds??r.missionIds??r.mission_ids,g=new Set((Array.isArray(l)?l:[]).map(S).filter(Boolean)),h=A(r._missions??r.missions??r._missionProgress,d=>S(d._masterMissionId??d._missionId??d.missionId));for(const d of g)h.has(d)||h.set(d,{});i.set(a,[...h].map(([d,p])=>{const u=t.get(d),m=g.has(d)||p._isReceived===!0||p.isReceived===!0,v=L(p._progress??p.progress??p._count),c=L(u?.achievementCount??p._achievementCount);return{id:d,name:N(u?.title,s),description:N(u?.description,s),received:m,completed:m||p._isCompleted===!0||p.isCompleted===!0||v!==null&&c!==null&&c>0n&&v>=c,progress:v,target:c,value:String(u?.value??"")}}).sort((d,p)=>Number(d.id)-Number(p.id)))}return i}function Ie(n,e,s){const t=e?.resources.progression,i=P(t?.characterRanks),a=P(t?.friendshipRanks),r=A(n._characters,G),l=A(n._characterFriendships,Se),g=we(n._characterMissions,e,s),h=Object.entries(e?.resources.characters??{}).filter(([,v])=>v.faceImage).map(([v])=>v),d=Object.values(e?.resources.friendships??{}).flatMap(v=>Array.isArray(v.characterIds)?v.characterIds.map(S).filter(Boolean):[]),p=new Set([...h,...d,...r.keys(),...g.keys()]),u=new Map([...p].map(v=>{const c=w(e,"characters",v);return[v,{id:v,name:N(c.name??c.characterName,s),image:typeof c.faceImage=="string"?c.faceImage:"",bandId:Number(c.bandId??0),...O(r.get(v),i)}]})),m=[...new Set([...Object.keys(e?.resources.friendships??{}),...l.keys()])].map(v=>{const c=l.get(v),f=w(e,"friendships",v).characterIds??c?.characterIds??[c?._masterCharacterIdA,c?._masterCharacterIdB],C=Array.isArray(f)?f.map(S):[];return{id:v,characters:C.flatMap(x=>u.get(x)?[u.get(x)]:[]),...O(c,a)}});return{characters:[...u.values()],friendships:m,missions:g,playerRank:O(n,P(t?.playerRanks))}}function q(n){return o`<span class="save-portrait" aria-hidden="true">
    ${n?.image?o`<img src=${n.image} alt="" loading="lazy" width="42" height="42" />`:$("person",20)}
  </span>`}function V(n,e,s){const t=new Intl.NumberFormat(s);return o`
    <span class="save-rank-values">
      <strong>${n.level?`Lv. ${t.format(Number(n.level))}`:"—"}</strong>
      <span>${n.experience===null?"—":t.format(n.experience)} ${e("experience")}</span>
    </span>
    ${n.progress===null?b:o`<span class="save-meter">${le(e("experience"),n.progress/100)}</span>`}
  `}function j(n,e,s,t,i,a,r=!1){const l=o`
    <span class="save-row-portraits">${s.length?s.map(q):q()}</span>
    <span class="save-growth-row__text"><strong>${n}</strong>${V(e,t,i)}</span>
    ${a?$("chevron_right",18):b}
  `;return a?o`<button class="save-growth-row" type="button" aria-pressed=${String(r)} @click=${a}>${l}</button>`:o`<div class="save-growth-row">${l}</div>`}const F=(n,e)=>n.name||`${e("id")} ${n.id}`,W=(n,e)=>n.characters.length===2?n.characters.map(s=>F(s,e)).join(" × "):`${e("id")} ${n.id}`;function J(n,e,s){const t=w(n,"bands",e);return{id:e,label:N(t.name??t.bandName,s)||String(e),image:typeof(t.icon??t.logo)=="string"?String(t.icon??t.logo):void 0}}function Ce(n,e,s,t){const i=new Intl.NumberFormat(t);return n.length?o`<ul class="save-missions" role="list">
        ${n.map(a=>o`<li class="save-mission">
          <div class="save-mission__head">
            <strong>${a.name||`${s("_characterMissions")} #${a.id}`}</strong>
            ${a.received||a.completed?o`<span class="chip chip--tonal chip--static">${$("check",16)}${s(a.received?"_isReceived":"missionCompleted")}</span>`:b}
          </div>
          ${a.description&&a.description!==a.name?o`<span>${ce(a.description,{CharacterId:e?.name??"",AchievementCount:a.target===null?"":i.format(a.target),Value:a.value})}</span>`:b}
          ${a.progress!==null?o`
            <span class="tabular">${i.format(a.progress)}${a.target===null?"":` / ${i.format(a.target)}`}</span>
          `:b}
        </li>`)}
      </ul>`:o`<p class="save-empty">${s("noRecords")}</p>`}function xe(n){const{progress:e,catalog:s,t,locale:i,onBand:a,onSelect:r}=n,l=[...new Set(e.characters.map(u=>u.bandId))].map(u=>J(s,u,i)),g=n.band??l[0]?.id,h=e.characters.filter(u=>u.bandId===g),d=h.find(u=>u.id===n.selected)??h[0],p=d?e.missions.get(d.id)??[]:[];return o`
    <div class="save-growth-layout">
      <section class="surface stack">
        ${I(t("_characters"),"characters",{level:2,count:e.characters.length})}
        ${l.length>1?o`
          <div class="cluster save-bands" role="group" aria-label=${t("bands")}>
            ${l.map(u=>o`<button class="chip chip--filter" type="button" aria-pressed=${String(g===u.id)}
              @click=${()=>a(u.id)}>${u.image?o`<img src=${u.image} alt="" width="20" height="20" />`:b}
              <span class="chip__label">${u.label}</span></button>`)}
          </div>`:b}
        <div class="save-growth-list">
          ${h.length?h.map(u=>j(F(u,t),u,[u],t,i,()=>r(u.id),d?.id===u.id)):o`<p class="save-empty">${t("noRecords")}</p>`}
        </div>
      </section>
      <section class="surface stack" aria-live="polite">
        ${d?j(F(d,t),d,[d],t,i):b}
        ${I(t("_characterMissions"),"missions",{level:2,count:p.length})}
        ${p.length?o`
          <dl class="spec-list spec-list--split save-mission-counts">
            <div><dt>${t("missionCompleted")}</dt><dd>${p.filter(u=>u.completed).length}</dd></div>
            <div><dt>${t("_isReceived")}</dt><dd>${p.filter(u=>u.received).length}</dd></div>
          </dl>`:b}
        ${Ce(p,d,t,i)}
      </section>
    </div>
  `}function Re(n){const{progress:e,catalog:s,first:t,second:i,open:a,t:r,locale:l,server:g,onChange:h,onOpen:d}=n,p=e.friendships.filter(c=>(!t||c.characters.some(y=>y.id===t))&&(!i||c.characters.some(y=>y.id===i))),u=t||e.characters[0]?.id||"",m=[...new Set(e.characters.map(c=>c.bandId))].filter(Boolean).map(c=>J(s,c,l)),v=e.characters.filter(c=>c.id===u||e.friendships.some(y=>y.characters.some(f=>f.id===u)&&y.characters.some(f=>f.id===c.id)));return o`<section class="surface stack">
    ${I(r("_characterFriendships"),"friendships",{level:2,count:p.length})}
    ${e.characters.length?z({id:"save-friendship-picker",label:r("selectCharacters"),expanded:a,onExpandedChange:d,content:a?o`<div class="save-friendship-picker">
        ${oe({locale:l,server:g,characters:e.characters.map(c=>({value:c.id,label:F(c,r),image:c.image,bandId:c.bandId})),bands:m,first:u,second:i,partnerValues:new Set(v.map(c=>c.id)),onFirst:c=>h(c,""),onSecond:c=>h(u,c),onSwap:()=>h(i,u)})}
      </div>`:b}):b}
    ${t||i?o`<button class="button button--text save-clear-filter" type="button" @click=${()=>h("","")}>
      ${$("close",18)}${r("allRecords")}
    </button>`:b}
    <div class="save-pair-list">
      ${p.length?p.map(c=>j(W(c,r),c,c.characters,r,l)):o`<p class="save-empty">${r("noRecords")}</p>`}
    </div>
  </section>`}const Ae=["overview","_characters","_characterFriendships","collection","records","saveData"],Ne=["_memberCards","_supportCards","_bandItems","_items","_unlockedCostumes","_currentCostumes","_backgrounds","_stamps","_stampFavorites","_degrees","_playerProfileCards","_liveLaneSkins","_liveNoteSkins","_liveNoteEffectSkins","_liveNoteSeGroups","_memory"],Le=["_liveMusicResults","_challengeMusicResults","_topHighScoreRatings","_liveMusics","_challengeMusics","_events","_challengeLives","_arenaLeagues","_decks","_storyEpisodeRecords","_gachaRecords","_normalMissions","_limitedMissions","_characterMissions","_missionCounters","_characterFriendshipRankRewards","_playerSeasonPass","_monthlyPass","_receivedLoginBonuses","_liveBoost","_liveSkip","_offlineBonus","_exchange","_shop","_spots","_vip"];class je extends re{static properties={locale:{type:String},messages:{attribute:!1},records:{state:!0},selected:{state:!0},busy:{state:!0},expanded:{state:!0},native:{state:!0},sources:{state:!0},sheet:{state:!0},historyHelpOpen:{state:!0},devices:{state:!0},backups:{state:!0},locked:{state:!0},removing:{state:!0},catalog:{state:!0},server:{state:!0},view:{state:!0},section:{state:!0},character:{state:!0},band:{state:!0},first:{state:!0},second:{state:!0},pairPicker:{state:!0},rawLimits:{state:!0}};constructor(){super(),this.view="grid",this.server="jp",this.locale="zh-CN",this.messages={},this.records=[],this.selected="",this.busy=!1,this.expanded=new Set,this.native=[],this.sources=[],this.releases=[],this.sheet=null,this.historyHelpOpen=!1,this.devices=null,this.backups=null,this.locked=null,this.removing=null,this.section="overview",this.character="",this.band=null,this.first="",this.second="",this.pairPicker=!1,this.rawLimits=new Map}shellBack;movedMenu;controller=new AbortController;lazyImages=new se;catalogController;catalogServer="";growth;createRenderRoot(){return this}t(e){return T(this.locale,`saveWorkspace.${e}`,this.messages[e]??e)}disposeSongDisplay;connectedCallback(){super.connectedCallback(),this.disposeSongDisplay=X(()=>this.requestUpdate()),this.controller.signal.aborted&&(this.controller=new AbortController),this.messages=JSON.parse(this.dataset.messages??"{}"),this.selected=location.hash.slice(1),window.addEventListener("hashchange",this.route),window.addEventListener("haneoka-app-accounts",this.nativeChanged),this.run(()=>this.reload())}disconnectedCallback(){this.disposeSongDisplay?.(),super.disconnectedCallback(),this.controller.abort(),this.catalogController?.abort(),this.catalogServer="",window.removeEventListener("hashchange",this.route),window.removeEventListener("haneoka-app-accounts",this.nativeChanged),be("save-workspace"),this.lazyImages.disconnect(),this.restoreShell()}route=()=>{const e=location.hash.slice(1);this.selected!==e&&(this.section="overview",this.character=this.first=this.second="",this.band=null,this.pairPicker=!1,this.expanded=new Set,this.rawLimits=new Map),this.selected=e;const s=this.record;s&&(this.server=s.snapshot.server),s&&s.snapshot.server!==this.catalogServer&&this.loadCatalog(s.snapshot.server)};get record(){return this.records.find(e=>e.id===this.selected)}async loadCatalog(e){this.catalogController?.abort();const s=this.catalogController=new AbortController;this.catalogServer=e,this.catalog=void 0;try{const t=await _e(e,s.signal,!0);s.signal.aborted||(this.catalog=t)}catch{s.signal.aborted||R(this.t("catalogFailed"),{error:!0,durationMs:0,action:{label:this.t("catalogRetry"),run:()=>void this.loadCatalog(e)}})}}nativeChanged=()=>{this.run(()=>this.reload())};async reload(){if(this.records=(await D("list")).sort((e,s)=>s.importedAt.localeCompare(e.importedAt)),H("saveSnapshotV1")&&(this.native=await _("gameAccounts",{})),H("saveSourcesV1")&&!this.sources.length){const e=await _("saveSources",{});this.sources=e.sources,this.releases=e.releases}this.route()}async run(e,s=!1){if(this.busy)return;this.busy=!0;const t=s?R(this.t("loading"),{durationMs:0}):0;try{await e()}catch(i){const a=i instanceof Error?i.message:typeof i=="string"?i:"",r=i instanceof Error?i.name:"Error",l=a==="box_no_player"||a==="save_empty"?"noSave":a.includes("budget")||a==="save_too_large"?"tooLarge":a==="box_timeout"?"timeout":a==="save_worker_failed"?"workerFailed":a.startsWith("save_storage_")?"storageFailed":a==="save_file_unreadable"||r==="NotReadableError"||r==="NotFoundError"?"fileUnreadable":a==="save_invalid"||a.startsWith("box_invalid")||r==="SyntaxError"?"invalidFile":a==="adb_missing"?"adbMissing":a==="adb_access_denied"?"accessDenied":a==="backup_password"?"wrongPassword":"failed";R(this.t(l),{error:!0});return}finally{this.busy=!1}t&&de(t)}async add(e,s,t){const i={id:crypto.randomUUID(),label:s,importedAt:new Date().toISOString(),snapshot:e,profile:t};await D("put",i),await this.reload(),location.hash=i.id}file=e=>{const s=e.target,t=[...s.files??[]];s.value="",t.length&&this.run(async()=>{const i=await he(t,this.server,this.controller.signal);for(const a of i)await this.add(a.snapshot,a.label,a.profile)},!0)};importNative(e){this.run(async()=>{const s=await _("saveSnapshot",{key:e.key,complete:!0});await this.add(pe(s.text),e.name??e.profileId,$e({name:e.name,uid:e.profileId,rank:e.rank,region:e.region,server:e.server}))},!0)}export(e){ve(new Blob([JSON.stringify(e.snapshot,null,2)],{type:"application/json"}),`haneoka-save-${e.id}.json`)}team(e){this.run(async()=>{const{player:s,...t}=e.snapshot,i=typeof s._profileId=="string"||typeof s._profileId=="number"?String(s._profileId):e.profile?.uid;let a;if(i){const{captureGameToolSave:l,refreshGameToolAccounts:g}=await Q(async()=>{const{captureGameToolSave:d,refreshGameToolAccounts:p}=await import("./game-tool-account-store.DJRCxc2T.js");return{captureGameToolSave:d,refreshGameToolAccounts:p}},__vite__mapDeps([0,1,2,3,4]));await g(),a=(await l({key:`${t.server}-${i}`,profileId:i,server:t.server,name:e.profile?.name||e.label,region:e.profile?.region??null,rank:Number(e.profile?.rank)||null,savedAt:t.savedAt?Date.parse(t.savedAt):null,favoriteCardId:Number(s._favoriteMemberCardId)||null},"team"))?.id}const r=Object.fromEntries(["_memberCards","_supportCards","_characters","_bandItems"].flatMap(l=>s[l]===void 0?[]:[[l,s[l]]]));sessionStorage.setItem("haneoka:pending-save-box",JSON.stringify({id:e.id,server:t.server,accountId:a,text:JSON.stringify({...t,player:r})})),location.assign(`/${this.locale}/team-builder/?server=${t.server}&tab=box&saveImport=${encodeURIComponent(e.id)}${a?`&appBox=1&gameAccount=${a}`:""}`)})}removeSave(e){this.removing=e.id}confirmRemove(){const e=this.removing;this.removing=null,e&&this.run(async()=>{await D("delete",e),this.closeRecord(),await this.reload()})}read(e){this.run(async()=>{const s=await e();s&&(this.sheet=null,this.locked=null,R(s.keys.length?this.t("readCount").replace("{count}",String(s.keys.length)):this.t("noSave")),this.native=await _("gameAccounts",{}))},!0)}source(e){e==="files"?this.read(()=>_("readFiles",{})):e==="folder"?this.read(()=>_("readFiles",{folder:!0})):e==="shizuku"?this.read(async()=>{const s=await _("deviceStatus",{}),{installed:t}=s;let{status:i}=s;return i==="needsPermission"&&(i=(await _("shizukuRequest",{})).granted?"ready":i),i==="ready"?_("shizukuRead",{}):(i==="notRunning"&&t?await _("openShizuku",{}):R(this.t("shizukuMissing"),{error:!0}),null)}):e==="gameFolder"?this.read(async()=>{const s=await _("gameFolder",{});return s?.keys.length?s:(this.sheet="gameFolder",null)}):e==="adb"?(this.sheet="adb",this.devices=null,this.run(async()=>{this.devices=await _("adbDevices",{})})):e==="iosBackup"&&this.loadBackups(!1)}loadBackups(e){this.sheet="iosBackup",e||(this.backups=null),this.run(async()=>{const s=await _("iosBackups",{pick:e});s&&(this.backups=e?[...s,...(this.backups??[]).filter(t=>!s.some(i=>i.path===t.path))]:s)})}releaseName(e){return this.t(`release_${e.replaceAll(".","_")}`)}sourceIcon(e){return{files:$("description",24),folder:$("folder_open",24),adb:$("usb",24),iosBackup:$("phone_iphone",24),shizuku:$("smartphone",24),gameFolder:$("folder_open",24)}[e]}renderSheet(){const e=()=>{this.sheet=null,this.locked=null},s=a=>(a.preventDefault(),new FormData(a.target));let t="",i=b;if(this.sheet==="gameFolder")t=this.t("source_gameFolder"),i=o`
        <ul class="detail-object-list" role="list">
          ${this.releases.map(a=>o`
              <li>
                <button
                  class="detail-object"
                  type="button"
                  ?disabled=${this.busy}
                  @click=${()=>this.read(()=>_("gameFolder",{release:a}))}
                >
                  <span>${this.releaseName(a)}</span>
                </button>
              </li>
            `)}
        </ul>
      `;else if(this.sheet==="adb")t=this.t("source_adb"),i=o`
        <div class="stack">
          ${this.devices===null?o`
                  <p>${this.t("loading")}</p>
                `:this.devices.length?o`
                    <ul class="detail-object-list" role="list">
                      ${this.devices.map(a=>o`
                          <li>
                            <button
                              class="detail-object"
                              type="button"
                              ?disabled=${this.busy||a.state!=="device"}
                              @click=${()=>this.read(()=>_("adbRead",{serial:a.serial}))}
                            >
                              <span>
                                ${a.model?.replaceAll("_"," ")||a.serial}
                                <small class="md-body-small">
                                  ${a.state==="device"?a.releases.map(r=>this.releaseName(r)).join(" / ")||this.t("noSave"):this.t("unauthorized")}
                                </small>
                              </span>
                            </button>
                          </li>
                        `)}
                    </ul>
                  `:o`
                    <p>${this.t("noDevices")}</p>
                  `}
          <form
            class="stack"
            @submit=${a=>{const r=s(a),l=String(r.get("address")??"").trim(),g=String(r.get("code")??"").trim();this.run(async()=>{g?await _("adbPair",{address:l,code:g}):await _("adbConnect",{address:l}),this.devices=await _("adbDevices",{})})}}
          >
            <label>
              <span>${this.t("address")}</span>
              <span class="field">
                <input name="address" required inputmode="url" autocomplete="off" placeholder="192.168.1.2:37000" />
              </span>
            </label>
            <label>
              <span>${this.t("pairingCode")}</span>
              <span class="field"><input name="code" inputmode="numeric" autocomplete="one-time-code" /></span>
            </label>
            <button class="button button--tonal" type="submit" ?disabled=${this.busy}>${this.t("connect")}</button>
          </form>
        </div>
      `;else if(this.sheet==="iosBackup"){t=this.t("source_iosBackup");const a=this.locked;i=a?o`
            <form
              class="stack"
              id="backup-password"
              @submit=${r=>{const l=String(s(r).get("password")??"");this.read(()=>_("iosBackupRead",{path:a.path,password:l}))}}
            >
              <p>${a.deviceName??a.path}</p>
              <label>
                <span>${this.t("password")}</span>
                <span class="field"><input name="password" type="password" required autocomplete="off" /></span>
              </label>
            </form>
          `:o`
            <div class="stack">
              ${this.backups===null?o`
                      <p>${this.t("loading")}</p>
                    `:this.backups.length?o`
                        <ul class="detail-object-list" role="list">
                          ${this.backups.map(r=>o`
                              <li>
                                <button
                                  class="detail-object"
                                  type="button"
                                  ?disabled=${this.busy}
                                  @click=${()=>r.encrypted?this.locked=r:this.read(()=>_("iosBackupRead",{path:r.path}))}
                                >
                                  <span>
                                    ${r.deviceName??r.productType??r.path}
                                    <small class="md-body-small">
                                      ${[r.productType??"",r.date===null?"":E(this.locale,r.date)].filter(Boolean).join(" / ")}
                                    </small>
                                  </span>
                                </button>
                              </li>
                            `)}
                        </ul>
                      `:o`
                        <p>${this.t("noBackups")}</p>
                      `}
              <button
                class="button button--tonal"
                type="button"
                ?disabled=${this.busy}
                @click=${()=>this.loadBackups(!0)}
              >
                ${this.t("chooseFolder")}
              </button>
            </div>
          `}return o`
      <dialog class="dialog" ${U(e)}>
        <div class="dialog__surface">
          <header class="dialog__header"><h2>${t}</h2></header>
          <div class="dialog__body">${i}</div>
          <footer class="dialog__actions">
            <button class="button button--text" type="button" @click=${e}>${this.t("close")}</button>
            ${this.locked?o`
                    <button class="button button--filled" type="submit" form="backup-password" ?disabled=${this.busy}>
                      ${this.t("readBackup")}
                    </button>
                  `:b}
          </footer>
        </div>
      </dialog>
    `}serverName(e){return this.t(`servers.${e}`)}value(e){return e==null?this.t("unknown"):typeof e=="boolean"?this.t(e?"yes":"no"):String(e)}name(e,s){const t=w(this.catalog,e,s);return e==="songs"?Y(t,this.locale).text:N(t.prefix??t.musicTitle??t.musicName??t.characterName??t.itemName??t.name??t.title,this.locale)||`${this.t("id")} ${this.value(s)}`}image(e,s){const t=w(this.catalog,e,s),i=k(t.images),a=i.thumbnail??i.jacket??t.jacket??t.image;return typeof a=="string"&&a.startsWith("/assets/")?a:void 0}details(e,s){return s.filter(t=>Object.hasOwn(e.snapshot.player,t)).map(t=>{const i=e.snapshot.player[t],a=Array.isArray(i)?i.map(k):[k(i)];if(t==="_memberCards"||t==="_supportCards"){const g=t==="_memberCards",h=g?"cards":"support-cards",d=["level","experience","rank",...g?["training","liveSkill","performanceSkill"]:[]],p=m=>[ye(this.catalog,m,g),m._exp,m._rank,...g?[m._awakeCount,m._liveSkillLevel,m._performanceSkillLevel]:[]],u=m=>`/${e.snapshot.server}/${this.locale}/${g?"member-cards":h}/${m._masterId}/`;return o`
          <section class="surface stack">
            <h2 class="detail-section-title">
              ${this.t(t)}
              <span class="chip">${a.length}</span>
            </h2>
            ${this.view==="table"?Z(this.t(t),[this.t("name"),...d.map(m=>this.t(m))],a.map(m=>[o`
                        <a href=${u(m)}>${this.name(h,m._masterId)}</a>
                      `,...p(m).map(v=>this.value(v))])):this.view==="list"?M(a.map(m=>({id:String(m._masterId),title:this.name(h,m._masterId),href:u(m),media:o`
                          <img
                            src=${this.image(h,m._masterId)??b}
                            alt=""
                            loading="lazy"
                            width="64"
                            height="64"
                          />
                        `,subtitle:d.map((v,c)=>`${this.t(v)} ${this.value(p(m)[c])}`).join(" / ")}))):o`
                      <div class="collection">
                        ${a.map(m=>{const v=p(m)[0];return te({kind:g?"member":"support",title:this.name(h,m._masterId),subtitle:d.slice(1).map((c,y)=>`${this.t(c)} ${this.value(p(m)[y+1])}`).join(" / "),label:this.name(h,m._masterId),image:this.image(h,m._masterId)??"",aspectRatio:1,fit:"contain",href:u(m),onImageError:ae,placeholder:$(g?"person":"image",32),marks:[v==null?null:{at:"bottom-end",text:`${this.t("level")} ${v}`}]})})}
                      </div>
                    `}
          </section>
        `}if(t==="_liveMusicResults"){const g=["easy","normal","hard","expert"],h={0:this.t("notCleared"),10:this.t("clear"),20:this.t("fullCombo"),30:this.t("allPerfect")},d="song-results",p=this.expanded.has(d),u=this.rawLimits.get(d)??24;return o`
          <section class="surface stack">
            ${I(this.t(t),"songs",{level:2,count:a.length})}
            <div class="save-song-summary">
              ${g.map(m=>{const v=a.map(c=>Number(c[`_${m}ClearedStatus`])||0);return o`<section class="save-mission">
                  <strong>${m.toUpperCase()}</strong>
                  <dl class="save-song-marks">
                    ${[[10,"CLEAR"],[20,"FC"],[30,"AP"]].map(([c,y])=>o`
                        <div><dt>${y}</dt><dd>${v.filter(f=>f>=Number(c)).length}</dd></div>`)}
                  </dl>
                </section>`})}
            </div>
            ${z({id:"save-song-results",label:this.t("allRecords"),expanded:p,onExpandedChange:m=>this.toggleField(d,m),content:p?o`
                ${M(a.slice(0,u).map(m=>{const v=m._mLiveMusicId??m._masterMusicId??m._masterId,c=this.image("songs",v);return{id:String(v),title:this.name("songs",v),href:`/${e.snapshot.server}/${this.locale}/songs/${v}/`,media:c?o`<img src=${c} alt="" width="48" height="48" loading="lazy" />`:b,subtitle:g.map(y=>`${y.toUpperCase()} ${h[String(m[`_${y}ClearedStatus`])]??this.t("unknown")}`).join(" / ")}}))}
                ${u<a.length?this.moreRecords(d,u,a.length):b}
              `:b})}
          </section>
        `}const l={_items:{resource:"items",id:"_masterItemId",columns:["_amount"]},_bandItems:{resource:"band-items",id:"_masterId",columns:["_level"]},_events:{resource:"events",id:"_masterId",columns:["_eventPointCount"]}}[t];return l?o`
          <section class="surface stack">
            <h2 class="detail-section-title">
              ${this.t(t)}
              <span class="chip">${a.length}</span>
            </h2>
            ${M(a.slice(0,this.rawLimits.get(t)??24).map(g=>{const h=g[l.id],d=this.image(l.resource,h);return{id:String(h),title:this.name(l.resource,h),href:`/${e.snapshot.server}/${this.locale}/${l.resource}/${h}/`,media:d?o`<img src=${d} alt="" loading="lazy" width="48" height="48" />`:b,subtitle:l.columns.map(p=>`${this.t(p==="_eventPointCount"?"_point":p)} ${this.value(g[p])}`).join(" / ")}}))}
            ${a.length>(this.rawLimits.get(t)??24)?this.moreRecords(t,this.rawLimits.get(t)??24,a.length):b}
          </section>
        `:this.fieldFold(t,this.t(t),i,!0)})}toggleField(e,s){const t=new Set(this.expanded);s?t.add(e):t.delete(e),this.expanded=t}moreRecords(e,s,t){return o`<button class="button button--text" type="button"
      @click=${()=>{this.rawLimits=new Map(this.rawLimits).set(e,s+24)}}>
      ${this.t("moreRecords")} (${s} / ${t})
    </button>`}fieldFold(e,s,t,i=!1){const a=this.expanded.has(e),r=Array.isArray(t)?t.length:t&&typeof t=="object"?Object.keys(t).length:void 0;return z({id:`save-field-${encodeURIComponent(e)}`,label:s,metadata:r===void 0?b:o`<span class="detail-section-title__count">${r}</span>`,headingLevel:i?2:3,className:i?"surface save-field":"save-field",expanded:a,onExpandedChange:l=>this.toggleField(e,l),content:a?this.facts(t,e):b})}facts(e,s){if(!e||typeof e!="object")return o`<code>${e===null?"null":this.value(e)}</code>`;const t=this.rawLimits.get(s)??24,i=Array.isArray(e)?e.slice(0,t).map((r,l)=>[String(l),r]):Object.entries(e),a=Array.isArray(e)?e.length:i.length;return a?o`<div class="save-fields">
      ${i.map(([r,l])=>{const g=Array.isArray(e)?`${this.t("entry")} ${Number(r)+1}`:this.messages[r]??r;return l&&typeof l=="object"?this.fieldFold(`${s}/${encodeURIComponent(r)}`,g,l):o`<dl class="save-field-value"><dt>${g}</dt><dd>${this.facts(l,s)}</dd></dl>`})}
      ${Array.isArray(e)&&a>t?this.moreRecords(s,t,a):b}
    </div>`:o`<code>${Array.isArray(e)?"[]":"{}"}</code>`}accountProgress(e){const s=e.snapshot.player;if(this.growth?.player===s&&this.growth.catalog===this.catalog&&this.growth.locale===this.locale)return this.growth.data;const t=Ie(s,this.catalog,this.locale);return this.growth={player:s,catalog:this.catalog,locale:this.locale,data:t},t}renderOverview(e,s){const t=f=>this.t(f),i=this.locale,a=e.snapshot.player,r=a._favoriteMemberCardId??a._lastLiveDeckLeaderMemberCardId,l=w(this.catalog,"cards",r),g=k(l.images).full??this.image("cards",r),h=e.profile?.name||e.label,d=new Intl.NumberFormat(i),p=f=>Array.isArray(a[f])?a[f].length:null,u=s.characters.filter(f=>f.experience!==null||f.level),m=s.friendships.filter(f=>f.experience!==null||f.level),c=(Array.isArray(a._topHighScoreRatings)?a._topHighScoreRatings:null)?.reduce((f,C)=>f+(Number(k(C)._highScoreRating)||0),0),y=[{key:"_memberCards",glyph:$("person",20),value:p("_memberCards"),target:"collection"},{key:"_supportCards",glyph:$("photo_library",20),value:p("_supportCards"),target:"collection"},{key:"_characters",glyph:$("group",20),value:p("_characters")===null?null:u.length,target:"_characters"},{key:"_characterFriendships",glyph:$("handshake",20),value:p("_characterFriendships")===null?null:m.length,target:"_characterFriendships"}];return o`
      <section class="surface save-identity">
        <div class="save-identity__body">
          <div class="cluster save-identity__tags">
            <span class="chip chip--tonal chip--static">${e.profile?.region||this.serverName(e.snapshot.server)}</span>
            ${e.profile?.uid?o`<span class="save-identity__id">UID ${e.profile.uid}</span>`:b}
          </div>
          <h2>${h}</h2>
          ${V({...s.playerRank,level:e.profile?.rank||s.playerRank.level},t,i)}
          <dl class="spec-list spec-list--split save-identity__facts">
            <div><dt>${t("saved")}</dt><dd>${this.value(e.snapshot.savedAt?E(i,e.snapshot.savedAt):null)}</dd></div>
            ${c===void 0?b:o`<div><dt>${t("highScoreRating")}</dt><dd>${d.format(c)}</dd></div>`}
          </dl>
        </div>
        ${typeof g=="string"&&g?o`<img class="save-identity__art" src=${g} alt="" width="176" height="176" decoding="async" />`:o`<div class="save-identity__art save-identity__placeholder" aria-hidden="true">${$("sports_esports",48)}</div>`}
      </section>
      <div class="cluster">
        <button class="button button--filled" type="button" ?disabled=${this.busy} @click=${()=>this.team(e)}>
          ${$("groups",18)}${t("team")}
        </button>
        <button class="button button--tonal" type="button" @click=${()=>this.export(e)}>
          ${$("download",18)}${t("export")}
        </button>
        <button class="button button--text" type="button" @click=${()=>this.removeSave(e)}>${t("delete")}</button>
      </div>
      <div class="save-summary">
        ${y.map(({key:f,glyph:C,value:x,target:K})=>o`<button class="save-stat" type="button" @click=${()=>this.changeSection(K)}>
          <span class="save-stat__label">${C}${t(f)}</span>
          <strong>${x===null?"—":d.format(x)}</strong>
        </button>`)}
      </div>
      <div class="save-overview-columns">
        <section class="surface stack">
          ${I(t("_characters"),"characters",{level:2,count:s.characters.length})}
          ${u.length?u.slice(0,4).map(f=>j(F(f,t),f,[f],t,i)):o`<p class="save-empty">${t("noRecords")}</p>`}
          <button class="button button--text save-view-all" type="button" @click=${()=>this.changeSection("_characters")}>
            ${t("allRecords")}${$("chevron_right",18)}
          </button>
        </section>
        <section class="surface stack">
          ${I(t("_characterFriendships"),"friendships",{level:2,count:s.friendships.length})}
          ${m.length?m.slice(0,4).map(f=>j(W(f,t),f,f.characters,t,i)):o`<p class="save-empty">${t("noRecords")}</p>`}
          <button class="button button--text save-view-all" type="button" @click=${()=>this.changeSection("_characterFriendships")}>
            ${t("allRecords")}${$("chevron_right",18)}
          </button>
        </section>
      </div>
    `}changeSection(e){this.section=e,this.updateComplete.then(()=>{this.querySelector(".save-sections")?.scrollIntoView({block:"nearest"})})}renderRecord(e){const s=this.accountProgress(e),t=r=>this.t(r),i=e.snapshot,a={overview:()=>this.renderOverview(e,s),_characters:()=>xe({progress:s,catalog:this.catalog,selected:this.character,band:this.band,t,locale:this.locale,onBand:r=>{this.band=r,this.character=""},onSelect:r=>{this.character=r}}),_characterFriendships:()=>Re({progress:s,catalog:this.catalog,first:this.first,second:this.second,open:this.pairPicker,t,locale:this.locale,server:i.server,onChange:(r,l)=>{this.first=r,this.second=l},onOpen:r=>{this.pairPicker=r}}),collection:()=>this.details(e,Ne),records:()=>this.details(e,Le),saveData:()=>this.saveDocuments(i)}[this.section]();return o`
      <scrollable-tabs class="save-sections" .locale=${this.locale} .label=${this.t("accountDetails")}
        .items=${Ae.map(r=>({id:r,label:this.t(r)}))}
        .value=${this.section} .onSelect=${r=>this.changeSection(r)}></scrollable-tabs>
      <div class="save-section stack" role="tabpanel" aria-label=${t(this.section)}>
        ${Array.isArray(a)&&!a.length?o`<p class="surface save-empty">${t("noRecords")}</p>`:a}
      </div>
    `}saveDocuments(e){return o`
      ${this.fieldFold("document/player",this.t("playerData"),e.player,!0)}
      ${[["settings","saveSettings"],["persist","latestLive"],["permanent","permanentData"]].map(([s,t])=>{const i=e[s];return i===void 0?b:this.fieldFold(`document/${s}`,this.t(t),i,!0)})}
    `}restoreShell(){this.shellBack?.remove(),this.shellBack=void 0,this.movedMenu&&(this.movedMenu.leading.append(this.movedMenu.menu),this.movedMenu.group.remove(),this.movedMenu=void 0)}syncShell(){const e=this.record,s=document.querySelector("[data-top-app-bar] h1");if(s&&(s.textContent=e?.profile?.name||e?.label||this.t("title")),!e){this.restoreShell();return}const t=document.querySelector("[data-top-app-bar-leading]");if(t&&!this.shellBack){const i=document.createElement("a");i.href="#",i.className="icon-button",i.dataset.entityBack="",i.setAttribute("aria-label",this.t("back")),i.addEventListener("click",l=>{l.preventDefault(),this.closeRecord()}),ne($("arrow_back"),i),t.prepend(i),this.shellBack=i;const a=t.querySelector("[data-nav-toggle]"),r=document.querySelector("[data-top-app-bar-actions]");if(a&&r){const l=document.createElement("div");l.className="top-app-bar__group",l.append(a),r.prepend(l),this.movedMenu={menu:a,leading:t,group:l}}}}closeRecord(){const e=new URL(location.href);e.hash="",history.replaceState(history.state,"",e),this.route()}updated(){this.lazyImages.observe(this),this.syncShell();const e=this.record;fe("save-workspace",o`
        <button class="icon-button" type="button" aria-label=${this.t("readHelp")} @click=${()=>{this.historyHelpOpen=!0}}>${$("help")}</button>
        ${e&&this.section==="collection"?ee(this.locale,this.view,s=>{this.view=s}):b}
        ${e&&this.section!=="overview"?o`
          ${B({icon:"groups",label:this.t("team"),disabled:this.busy,onClick:()=>this.team(e)})}
          ${B({icon:"download",label:this.t("export"),disabled:this.busy,onClick:()=>this.export(e)})}
          ${B({icon:"delete",label:this.t("delete"),onClick:()=>this.removeSave(e)})}
        `:o`<button
          class="button button--tonal"
          ?disabled=${this.busy}
          @click=${()=>this.querySelector("input[type=file]")?.click()}
        >
          ${this.t("import")}
        </button>`}
      `)}render(){const e=this.record;return o`
      ${this.historyHelpOpen?ge(s=>this.t(s),()=>{this.historyHelpOpen=!1}):b}
      <input type="file" multiple hidden @change=${this.file} />
      <div class="save-workspace stack" aria-busy=${this.busy}>
        ${e?this.renderRecord(e):o`
                <section class="surface stack">
                  <h2 class="detail-section-title">${this.t("local")}</h2>
                  <label>
                    <span>${this.t("server")}</span>
                    <span class="field">
                      <select
                        .value=${this.server}
                        @change=${s=>{this.server=s.target.value}}
                      >
                        <option value="jp">${this.serverName("jp")}</option>
                        <option value="intl">${this.serverName("intl")}</option>
                      </select>
                    </span>
                  </label>
                  ${this.records.length?o`
                          <ul class="detail-object-list" role="list">
                            ${this.records.map(s=>o`
                                <li>
                                  <a class="detail-object" href=${`#${s.id}`}>
                                    <span>
                                      ${s.label}
                                      <small class="md-body-small">
                                        ${this.serverName(s.snapshot.server)} /
                                        ${E(this.locale,s.importedAt)}
                                      </small>
                                    </span>
                                  </a>
                                </li>
                              `)}
                          </ul>
                        `:o`
                          <p>${this.t("empty")}</p>
                        `}
                </section>
                ${this.native.length?o`
                        <section class="surface stack">
                          <h2 class="detail-section-title">${this.t("native")}</h2>
                          <ul class="detail-object-list" role="list">
                            ${this.native.map(s=>o`
                                <li>
                                  <button
                                    class="detail-object"
                                    type="button"
                                    ?disabled=${this.busy}
                                    @click=${()=>this.importNative(s)}
                                  >
                                    <span>
                                      ${s.name||s.profileId}
                                      <small class="md-body-small">
                                        ${[s.region??"",s.profileId].filter(Boolean).join(" / ")}
                                      </small>
                                    </span>
                                  </button>
                                </li>
                              `)}
                          </ul>
                        </section>
                      `:b}
                ${ue()?o`<a class="button button--tonal" href=${me(this.locale)}>
                        ${T(this.locale,"account.page.openSaveImport","Import a save in Account")}
                      </a>`:this.sources.length?o`
                        <section class="surface stack">
                          <h2 class="detail-section-title">${this.t("sources")}</h2>
                          <ul class="detail-object-list" role="list">
                            ${this.sources.map(s=>o`
                                <li>
                                  <button
                                    class="detail-object"
                                    type="button"
                                    ?disabled=${this.busy}
                                    @click=${()=>this.source(s)}
                                  >
                                    ${this.sourceIcon(s)}
                                    <span>${this.t(`source_${s}`)}</span>
                                  </button>
                                </li>
                              `)}
                          </ul>
                        </section>
                      `:b}
              `}
      </div>
      ${this.sheet?this.renderSheet():b}
      ${this.removing?o`
              <dialog class="dialog" ${U(()=>this.removing=null)}>
                <div class="dialog__surface">
                  <header class="dialog__header"><h2>${this.t("delete")}</h2></header>
                  <footer class="dialog__actions">
                    <button class="button button--text" type="button" @click=${()=>this.removing=null}>
                      ${this.t("cancel")}
                    </button>
                    <button class="button button--danger" type="button" @click=${()=>this.confirmRemove()}>
                      ${this.t("confirm")}
                    </button>
                  </footer>
                </div>
              </dialog>
            `:b}
    `}}customElements.define("save-workspace",je);export{je as SaveWorkspace};
