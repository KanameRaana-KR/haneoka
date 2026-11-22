const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/audio-dock.MdYjDeWm.js","_astro/preload-helper.BlTxHScW.js","_astro/resource-route.BR5kLHYo.js","_astro/interface-route.C7eSW2gB.js","_astro/locales.DtpYD_uK.js","_astro/locales.BBzJ2au5.js","_astro/provider-entity-data._K00Fr93.js","_astro/provider-page-data.DnMv3Sc3.js","_astro/provider-entity-routing.4abDgZn8.js","_astro/song-display.BUM043oH.js","_astro/catalog.CfAhzaok.js","_astro/client.BYho01b_.js","_astro/temporary-public-routing.BsxzEC6B.js","_astro/release-server.j-atVW2C.js","_astro/document-url.BFFpyWb5.js","_astro/document-address.dywC0kBs.js","_astro/lit-element.Bc_VOJIm.js","_astro/lit-html.DhDqt3I2.js","_astro/controls.BCr1YKFS.js","_astro/icon.BSt8MVsq.js","_astro/card-rarity.Bj6Ka5JZ.js","_astro/wavy-progress.D8BsCBgm.js","_astro/overlay.CAlyPMjs.js","_astro/content-request.DQ1rIr6o.js","_astro/user-roles.BBzq6-HC.js","_astro/spoiler-content.Ir13N6R6.js","_astro/_slug_.BW9JY8Uu.css"])))=>i.map(i=>d[i]);
import{_ as st}from"./preload-helper.BlTxHScW.js";import{f as at}from"./document-title.DDLPQ8NX.js";import{s as rt}from"./community-viewer.C7_AH-Ek.js";import{i as nt}from"./lit-element.Bc_VOJIm.js";import{b as c,A as p,c as C,l as B}from"./lit-html.DhDqt3I2.js";import{e as ot}from"./entity-discussion.DASzzmbm.js";import{r as z}from"./page-data.CoUysx63.js";import{a as lt}from"./workspace-page-data.BEx4Qoy8.js";import"./outlined-text-field.omMPAN5q.js";import"./switch.Cn4cAa2V.js";import{c as M}from"./client.BYho01b_.js";import{i as u,a as q}from"./icon.BSt8MVsq.js";import{i as b,s as j,f as F}from"./controls.BCr1YKFS.js";import{e as J,l as S,a as L}from"./state.Ck623oKm.js";import{m as x}from"./modal.D-GY7Vdy.js";import{a as Q,c as W,s as ct,b as K}from"./app-bar.CQ9Fi2qQ.js";import{o as dt,a as ht,c as pt}from"./detail-navigation.DDRFcg4B.js";import{c as R,l as I,f as ut}from"./catalog.CfAhzaok.js";import{o as gt,a as H}from"./song-display.BUM043oH.js";import{u as yt}from"./community-upload.CXmClWig.js";import{l as V,a as mt}from"./playlist-tracks.BLifrlXg.js";import{r as ft}from"./song-performer.D1gPJ3l4.js";import{i as bt,l as vt}from"./resource-route.BR5kLHYo.js";import{p as $t}from"./provider-entity-data._K00Fr93.js";/* empty css                        */import{s as A}from"./snackbar.D8p2-_Nm.js";import{n as kt}from"./document-url.BFFpyWb5.js";import"./user-roles.BBzq6-HC.js";import"./site-community.DYGqCiYM.js";import"./comments-state.BFUQ1tZ9.js";/* empty css                        *//* empty css                      */import"./content-policy-browser.sJlSzFcH.js";import"./content-request.DQ1rIr6o.js";import"./spoiler-content.Ir13N6R6.js";import"./request-scope.N4apwAcW.js";import"./content-release.T5Qse4HZ.js";import"./delegate.qnlMPWy4.js";import"./outlined-field.BML1F-r4.js";import"./on-report-validity.BygZsmbx.js";import"./animation.BI-yjTPx.js";import"./query-assigned-elements.N5HHHkzR.js";import"./redispatch-event.Dod3cBoe.js";import"./shared-styles.cssresult.CDtq61Of.js";import"./validator.Cz1PymV-.js";import"./md-focus-ring.BFbx9fcs.js";import"./ripple.DU62FgSE.js";import"./form-label-activation.C-ZPsH8j.js";import"./checkbox-validator.BT-H8ZRB.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";/* empty css                        *//* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./loading-progress.C8Gf5z9T.js";import"./linear-progress.Du-QQIqh.js";import"./progress.BYlJSdrk.js";/* empty css                         */import"./release-server.j-atVW2C.js";import"./provider-page-data.DnMv3Sc3.js";import"./document-address.dywC0kBs.js";function _t(r){const t=n=>({...n,released:n.released===null?Number.POSITIVE_INFINITY:n.released}),e=r.songs.map(t),i=r.bgm.map(t),s=new Map;for(const n of[...e,...i])for(const o of[n.key,...n.aliases])s.set(o,n);const a=r.bands.map(({songKeys:n,...o})=>({...o,songs:n.map(d=>{const l=s.get(d);if(!l)throw new TypeError(`Missing serialized playlist song ${d}`);return l})}));return{songs:e,bgm:i,byKey:s,bands:a,partial:r.partial}}function wt(r,t){const e=_t(t);return U.set(r,Promise.resolve(e)),e}const f=r=>`${r.provider}:${r.server}:${r.musicId}`;function E(r){if(!r||typeof r!="object")return null;const t=r,e=t.provider;if(e!=="our-notes"&&e!=="bestdori")return null;const i=String(t.server||""),s=String(t.musicId??"");return i&&/^\d+$/u.test(s)?{provider:e,server:i,musicId:s}:null}const N=r=>Array.isArray(r)?String(r.find(t=>typeof t=="string"&&t)??""):typeof r=="string"?r:"",T=r=>r.normalize("NFKC").replace(/\s+/gu,"").toLocaleLowerCase("ja"),St=r=>{const t=[...Array.isArray(r.publishedAt)?r.publishedAt:[],r.releaseAt].map(Number).filter(e=>Number.isFinite(e)&&e>0);return t.length?Math.min(...t):Number.POSITIVE_INFINITY};function X(r){const t=r.provider==="bestdori";return Object.entries(r.songs).map(([e,i])=>{const s=ft(i,r.registry),a=Number(s.bandIds[0]??(Array.isArray(i.bandIds)?i.bandIds[0]:i.bandId)),n=r.registry.bands.get(a),o=n?t?n.official===!0:n.official!==!1:!1,d=n?.bandName??i.bandName,l={provider:r.provider,server:r.server,musicId:String(i.musicId??e)};return{key:f(l),ref:l,row:i,title:i.musicTitle??i.title,bandKey:o?T(N(d)):"",bandName:d,jacket:String(i.jacketUrl||i.jacketThumbUrl||""),thumb:String(i.jacketThumbUrl||i.jacketUrl||""),audio:String(i.musicUrl||""),released:St(i),performer:s,aliases:[]}})}const U=new Map;function Pt(r){let t=U.get(r);return t||(t=Ot(r),U.set(r,t),t.catch(()=>U.delete(r))),t}const G=["sound_bgm_home","sound_bgm_livetop","sound_bgm_liveresult","sound_bgm_gachatop","sound_bgm_gacharesult","sound_bgm_birthday","sound_bgm_snapdiary_positive","sound_bgm_snapdiary_neutral","sound_bgm_snapdiary_negative","sound_bgm_mygo_offline","sound_bgm_mujica_offline","sound_bgm_yumemita_offline","sound_bgm_millsage_offline","sound_bgm_kadan_offline","spot_1_1","timing_adjust"],Ct={mygo:1,mujica:2,yumemita:3,millsage:4,kadan:5};async function Lt(r,t){const e=await fetch(`/api/v1/servers/${encodeURIComponent(r)}/audio/views/master-bgms`);return e.ok?It(r,t,await e.json()):[]}function It(r,t,e){const i=Object.values(e),s=new Set,a=n=>(G.indexOf(n)+G.length+1)%(G.length+1);return i.sort((n,o)=>a(String(n.cueName))-a(String(o.cueName))),i.flatMap(n=>{const o=String(n.cueName||""),d=String(n.outputPath||"");if(n.missing!==!1||!/^runtime\/cri\/sound\/(?:bgm|ambientbgm)\//u.test(d)||s.has(o))return[];s.add(o);const l=t.get(Ct[o.match(/^sound_bgm_(\w+)_offline$/u)?.[1]??""]??0),g=String(l?.logo||l?.icon||"/android-chrome-192x192.png"),m={provider:"our-notes",server:r,musicId:`bgm-${o}`};return[{key:f(m),ref:m,row:{},title:o,bandKey:"",bandName:l?.bandName??l?.name??"",jacket:g,thumb:g,audio:String(n.playableUrl||""),released:0,aliases:[],bgm:o}]})}async function Ot(r){const[t,e]=await Promise.allSettled([V("our-notes",r),V("bestdori","jp")]),i=await Lt(r,t.status==="fulfilled"?t.value.registry.bands:new Map).catch(()=>[]);return qt(t,e,i)}function qt(r,t,e){if(r.status==="rejected"&&t.status==="rejected")throw r.reason;const i=[];r.status==="rejected"&&i.push("our-notes"),t.status==="rejected"&&i.push("bestdori"),t.status==="fulfilled"&&r.status==="fulfilled"&&!t.value.registry.portraitFallbacks&&(t={status:"fulfilled",value:{...t.value,registry:{...t.value.registry,portraitFallbacks:mt(r.value)}}});const s=r.status==="fulfilled"?X(r.value):[],a=t.status==="fulfilled"?X(t.value):[],n=h=>`${T(N(h.title))}|${T(N(h.bandName))}`,o=new Map(s.map(h=>[n(h),h])),d=new Map,l=[];for(const h of s)l.push(h),d.set(h.key,h);for(const h of a){const y=o.get(n(h));if(y){y.aliases.push(h.key),y.released=Math.min(y.released,h.released),y.bandKey||(y.bandKey=h.bandKey),d.set(h.key,y);continue}l.push(h),d.set(h.key,h)}l.sort((h,y)=>h.released-y.released||h.key.localeCompare(y.key));const g=new Map,m=[r,t].flatMap(h=>h.status==="fulfilled"?[h.value]:[]);for(const h of m)for(const[y,$]of h.registry.bands){if(!(h.provider==="bestdori"?$.official===!0:$.official!==!1))continue;const O=T(N($.bandName??$.name));if(!O)continue;const D=g.get(O)??{key:O,name:$.bandName??$.name,logo:"",songs:[],sources:[]};D.logo||=String($.logo||$.icon||""),D.sources.push(`${h.provider}:${h.server}:${y}`),g.set(O,D)}for(const h of l)g.get(h.bandKey)?.songs.push(h);for(const h of e)d.set(h.key,h);return{songs:l,byKey:d,bands:[...g.values()].filter(h=>h.songs.length),partial:i,bgm:e}}function Y(r,t){const{provider:e,server:i,musicId:s}=r.ref;return e==="bestdori"?$t("bestdori",t,s):bt(i)?vt({server:i,locale:t,kind:"songs",id:s}):`/catalog/songs?song=${encodeURIComponent(s)}`}const k=r=>r.map(t=>t.ref);function At(r,t,e=Date.now()){const s=[...r.songs.filter(n=>n.released<=e)].reverse().slice(0,40),a=[];s.length&&a.push({id:"official:new",kind:"official",group:"featured",title:{key:"playlistPage.newReleases"},cover:{kind:"song",song:s[0].ref},refs:k(s),trackCount:s.length,preview:k(s.slice(0,4)),complete:!0});for(const n of r.bands){const o=n.songs,d=[...o].reverse().find(l=>l.released<=e)??o[o.length-1];a.push({id:`official:band:${encodeURIComponent(n.key)}`,kind:"official",group:"band",title:n.name,cover:{kind:"band",song:d.ref,logo:n.logo},refs:k(o),trackCount:o.length,preview:k(o.slice(-4)),complete:!0,aliases:n.sources.flatMap(l=>{const[g,m,h]=l.split(":");return[`${g}:${m}:band:${h}`,...g==="bestdori"?[`catalog:${m}:band:${h}`,`${g}:${h}`,h]:[`${g}:${h}`]]})})}r.songs.length&&a.push({id:"official:all",kind:"official",group:"featured",title:{key:"playlistPage.allSongs"},cover:{kind:"auto"},refs:k(r.songs),trackCount:r.songs.length,preview:k(r.songs.slice(-4).reverse()),complete:!0}),r.bgm.length&&a.push({id:"official:bgm",kind:"official",group:"featured",title:{key:"playlistPage.gameBgm"},cover:{kind:"auto"},refs:k(r.bgm),trackCount:r.bgm.length,preview:k(r.bgm.slice(0,4)),complete:!0});for(const n of t){const o=String(n.source||n.type||"");if(o==="band")continue;const l=(Array.isArray(n.tracks)?n.tracks:[]).flatMap(m=>E(m.assetRef)??[]),g=String(n.assetBundleName||"").match(/(\d+)$/u)?.[1]||String(n.sourceId||"");a.push({id:String(n.id),kind:"game",group:o==="stage-challenge"?"stage-challenge":"other",title:n.title,description:typeof n.description=="string"?n.description:null,cover:{kind:"auto",url:g?`/api/v1/garupa/bestdori/jp/media/stage-challenge/${encodeURIComponent(g)}`:null},refs:l,trackCount:l.length,preview:l.slice(0,4),complete:!0,publishedAt:Number(n.startsAt)||null})}return a}function w(r,t=!1){const e=r.cover??{},i=Array.isArray(r.tracks)?r.tracks.flatMap(s=>E(s)??[]):[];return{id:String(r.id),kind:"community",title:String(r.title||""),description:typeof r.description=="string"?r.description:null,cover:{kind:e.kind==="song"||e.kind==="upload"?e.kind:"auto",song:E(e.song),url:typeof e.url=="string"?e.url:null,attachmentId:typeof e.attachmentId=="string"?e.attachmentId:null,pending:!!e.pending},refs:i,trackCount:Number(r.trackCount)||i.length,preview:Array.isArray(r.preview)?r.preview.flatMap(s=>E(s)??[]):[],owner:r.owner,likeCount:Number(r.likeCount)||0,viewerLiked:!!r.viewerLiked,viewerOwns:!!r.viewerOwns,visibility:r.visibility==="private"?"private":"public",version:Number(r.version)||1,updatedAt:Number(r.updatedAt)||0,publishedAt:Number(r.publishedAt)||null,complete:t}}function Z(r,t){if(r.cover.kind==="upload"&&r.cover.url)return{single:r.cover.url,mosaic:[]};const e=s=>s&&t?.byKey.get(f(s))?.jacket||"";if((r.cover.kind==="song"||r.cover.kind==="band")&&e(r.cover.song))return{single:e(r.cover.song),mosaic:[]};const i=[...new Set((r.preview.length?r.preview:r.refs.slice(0,4)).map(e).filter(Boolean))];return i.length>=4?{mosaic:i.slice(0,4)}:{single:i[0],mosaic:[]}}class it extends Error{constructor(t,e,i){super(t),this.status=e,this.code=i}}async function v(r,t={}){const e=await fetch(`/api/v1/community/playlists${r}`,{credentials:"same-origin",cache:"no-store",...t,headers:{accept:"application/json",...t.body?{"content-type":"application/json"}:{},...t.headers}}),i=await e.json().catch(()=>({}));if(!e.ok){const s=i.error??{};throw new it(String(s.message||`HTTP ${e.status}`),e.status,String(s.code||""))}return i}const _="playlist-hub",tt=60,Et=1e3,et=500,P=(r,t)=>!!(r&&t&&f(r)===f(t));class Nt extends nt{static properties={locale:{type:String}};view="hub";targetId="";library=null;official=[];communityLists=[];communityCursor=null;communitySort="new";communityLoading=!1;mine=[];liked=[];mineTab="created";signedIn=!1;signedInChecked=!1;loadError="";gameError="";query="";current=null;detailError="";detailLoading=!1;descriptionOpen=!1;heroHidden=!1;draft=null;draftBaseline="";saving=!1;editorError="";uploadProgress=-1;pickerOpen=!1;pickerQuery="";pickerBand="";addTarget=null;deleteOpen=!1;nowPlaying="";dragIndex=-1;sequence=0;releaseLocation;releaseSongDisplay;heroObserver;leadingBack;movedMenu;shellHeading="";releaseSearch;sourcePath="";preparedServer="";createRenderRoot(){return this}preparePage(t,e,i,s=""){lt(this),this.locale=e,this.sourcePath=`/${e}/community/playlists/`,this.isConnected||(this.communityLoading=!0);const a=Object.fromEntries(Object.entries(t.variants).map(([n,o])=>[n,wt(n,o)]));a[i]&&(this.preparedServer=i,this.gameError=t.gameError,this.applyLibrary(a[i],t.gamePlaylists),s&&(this.view="detail",this.targetId=s,this.current=this.findOfficial(s),this.detailError=this.current?"":this.t("notFound","Playlist not found")))}selectedTitle(){return this.current?this.titleOf(this.current):""}applyLibrary(t,e){this.library=t,this.official=At(t,e)}reportLibraryStatus(t,e){t.partial.length?A(this.t("partial","Some songs could not be loaded; the lists show what is available.")):this.gameError&&!e.length&&A(`${this.t("gameUnavailable","In-game playlists are unavailable")} / ${this.gameError}`)}renderStaticChrome(){this.view==="hub"?this.syncHubBar():this.renderBarActions()}connectedCallback(){super.connectedCallback();const t=z(this);t?.schema==="haneoka-playlist-page-v1"&&this.preparePage(t,this.locale,R()),this.releaseLocation=dt(()=>this.route(),this),this.releaseSongDisplay=gt(()=>this.requestUpdate()),window.addEventListener("haneoka-audio-state",this.onAudioState),window.addEventListener("haneoka:session-changed",this.onSession);const e=this.heading();this.shellHeading=e?.innerHTML??"",this.route(),this.loadAll()}disconnectedCallback(){super.disconnectedCallback(),this.releaseLocation?.(),this.releaseSongDisplay?.(),this.releaseSearch?.(),this.heroObserver?.disconnect(),window.removeEventListener("haneoka-audio-state",this.onAudioState),window.removeEventListener("haneoka:session-changed",this.onSession),Q(_),W(_),this.restoreShell()}onAudioState=t=>{const e=t.detail;this.nowPlaying=e?.playing?e.id:"",this.requestUpdate()};onSession=()=>{this.loadPersonal(),this.view==="detail"&&this.openDetail(this.targetId)};t(t,e,i){const a=M(this.locale,`community.page.playlistPage.${t}`,"\0",i);return a==="\0"?M(this.locale,`communityPage.playlistPage.${t}`,e,i):a}titleOf(t){const e=t.title;if(e&&typeof e=="object"&&"key"in e){const i=String(e.key).replace(/^playlistPage\./u,"");return this.t(i,i==="newReleases"?"New releases":i==="gameBgm"?"Game BGM":"All songs")}return I(e,this.locale)||String(e||"—")}songName(t){return t.bgm?this.t(`bgm.${t.bgm}`,t.bgm):H(t.row,this.locale).text}songLanguage(t){return t.bgm?this.locale:H(t.row,this.locale).locale}artistOf(t){const e=t.performer?.names??[];return e.length?e.map(i=>I(i,this.locale)).filter(Boolean).join(" / "):I(t.bandName,this.locale)}href(t={}){const e=new URL(this.sourcePath,"https://haneoka.org");return e.search=new URLSearchParams(t).toString(),e.hash="",`${e.pathname}${e.search}`}route(){const t=kt(),e=t.searchParams,i=t.pathname.split("/").filter(Boolean),s=i.indexOf("playlists"),a=s>=0?decodeURIComponent(i[s+1]||""):"",n=e.get("edit"),o=e.get("playlist")||a;this.sequence++,this.pickerOpen=!1,this.addTarget=null,this.deleteOpen=!1,n?(this.view="edit",this.targetId=n,this.openEditor(n)):o?(this.view="detail",this.targetId=o,this.descriptionOpen=!1,this.openDetail(o)):(this.view="hub",this.targetId="",this.current=null,this.draft=null),this.syncShell(),this.requestUpdate(),this.closest("#main-content, main")?.scrollTo?.({top:0}),document.querySelector("#main-content")?.scrollTo({top:0})}go(t){ht(this.href(t)),this.route()}back(){if(this.view==="edit"&&this.draftDirty()&&!confirm(this.t("discardChanges","Discard unsaved changes?")))return;const t=this.view==="edit"&&this.draft?.id?this.href({playlist:this.draft.id}):this.href();if(this.view==="edit"&&this.draft?.id){history.replaceState(history.state,"",t),this.route();return}pt(t),this.route()}heading(){return document.querySelector("[data-top-app-bar] h1")}syncShell(){const t=document.querySelector("[data-top-app-bar-leading]");if(this.view==="hub"){this.restoreShell(),this.syncHubBar();return}if(this.releaseSearch?.(),this.releaseSearch=void 0,W(_),t&&!this.leadingBack){const e=t.querySelector("[data-entity-back]")||document.createElement("a");e.className="icon-button",e.href=this.href(),e.dataset.playlistBack="",e.dataset.entityBack="",e.setAttribute("aria-label",this.t("backAction","Back")),e.innerHTML='<svg class="material-icon" width="24" height="24" aria-hidden="true"><use href="/icons.svg#arrow_back"></use></svg>',e.addEventListener("click",a=>{a.button||a.metaKey||a.ctrlKey||a.shiftKey||(a.preventDefault(),this.back())}),t.prepend(e),this.leadingBack=e;const i=document.querySelector("[data-top-app-bar-actions]"),s=t.querySelector("[data-nav-toggle]")||i?.querySelector("[data-entity-menu-first]");if(s&&i){const a=s.closest("[data-entity-menu-first-group]")||document.createElement("div");a.className="top-app-bar__group",a.append(s),i.prepend(a),this.movedMenu={menu:s,leading:t,group:a}}}this.syncHeading(),this.renderBarActions()}syncHubBar(){this.releaseSearch?.(),this.releaseSearch=ct(_,{value:this.query,label:this.t("search","Search playlists"),onInput:t=>{this.query=t,this.requestUpdate()},onSubmit:t=>{this.query=t,this.requestUpdate()}}),K(_,this.signedIn?b({icon:"add",label:this.t("create","New playlist"),onClick:()=>this.createNew()}):c``)}restoreShell(){this.leadingBack?.remove(),this.leadingBack=void 0,this.movedMenu&&(this.movedMenu.leading.append(this.movedMenu.menu),this.movedMenu.group.remove(),this.movedMenu=void 0);const t=this.heading();t&&this.shellHeading&&t.innerHTML!==this.shellHeading&&(t.innerHTML=this.shellHeading),Q(_)}syncHeading(){const t=this.heading();if(!t||this.view==="hub")return;let e=this.t("title","Playlists");this.view==="edit"?e=this.draft?.id?this.t("editTitle","Edit playlist"):this.t("create","New playlist"):this.view==="detail"&&this.current&&this.heroHidden&&(e=this.titleOf(this.current)),t.textContent!==e&&(t.textContent=e);const i=M(this.locale,"common.seo.siteTitle");document.title=at(this.view==="detail"&&this.current?this.titleOf(this.current):e,i)}renderBarActions(){if(this.view==="detail"){const t=this.current;K(_,t?c`
              ${b({icon:"share",label:this.t("share","Share"),onClick:()=>void this.share(t)})}
              ${t.viewerOwns?b({icon:"edit",label:this.t("edit","Edit"),onClick:()=>this.go({edit:t.id})}):p}
            `:c``)}else this.view==="edit"&&K(_,c`
          <button
            class="button playlist-save"
            type="button"
            ?disabled=${this.saving||!this.draft||!this.draft.title.trim()}
            @click=${()=>void this.save()}
          >
            ${u("check",20)}
            <span>${this.saving?this.t("saving","Saving…"):this.t("saveAction","Save")}</span>
          </button>
        `)}async loadAll(){this.loadError="";const t=z(this),e=R();if(t?.schema==="haneoka-playlist-page-v1"&&t.variants[e]){this.preparedServer!==e&&this.preparePage(t,this.locale,e),this.loadPersonal(),this.loadCommunity(!1),this.library&&this.reportLibraryStatus(this.library,t.gamePlaylists),this.requestUpdate(),this.view==="detail"&&this.openDetail(this.targetId);return}const i=fetch("/api/v1/garupa/playlists",{headers:{accept:"application/json"}}).then(async s=>{if(!s.ok)throw new Error(`HTTP ${s.status}`);const a=await s.json();return Array.isArray(a.playlists)?a.playlists:[]}).catch(s=>(this.gameError=s instanceof Error?s.message:String(s),[]));this.loadPersonal(),this.loadCommunity(!1);try{const[s,a]=await Promise.all([Pt(R()),i]);this.applyLibrary(s,a),this.reportLibraryStatus(s,a)}catch(s){this.loadError=s instanceof Error?s.message:String(s)}this.requestUpdate(),this.view==="detail"&&this.openDetail(this.targetId)}async loadPersonal(){try{const t=await fetch("/api/auth/get-session",{credentials:"same-origin",cache:"no-store"}).then(e=>e.ok?e.json():null);this.signedIn=!!t?.user?.id}catch{this.signedIn=!1}if(this.signedInChecked=!0,!this.signedIn)this.mine=[],this.liked=[];else{const[t,e]=await Promise.all([v("?scope=mine&limit=60").catch(()=>({playlists:[]})),v("?scope=liked&limit=60").catch(()=>({playlists:[]}))]);this.mine=t.playlists.map(i=>w(i)),this.liked=e.playlists.map(i=>w(i))}this.view==="hub"&&this.syncShell(),this.requestUpdate()}async loadCommunity(t){if(!this.communityLoading){this.communityLoading=!0,this.requestUpdate();try{const e=t&&this.communityCursor?`&cursor=${encodeURIComponent(this.communityCursor)}`:"",i=await v(`?scope=public&sort=${this.communitySort}${e}`),s=i.playlists.map(a=>w(a));this.communityLists=t?[...this.communityLists,...s]:s,this.communityCursor=i.nextCursor}catch{t||(this.communityLists=[]),this.communityCursor=null}finally{this.communityLoading=!1,this.requestUpdate()}}}findOfficial(t){return this.official.find(e=>e.id===t||e.aliases?.includes(t))??null}async openDetail(t){const e=this.sequence;if(this.detailError="",this.heroHidden=!1,!/^[0-9a-f-]{36}$/iu.test(t)){this.current=this.findOfficial(t),!this.current&&this.library&&(this.detailError=this.t("notFound","Playlist not found")),this.syncShell(),this.requestUpdate();return}const i=[...this.communityLists,...this.mine,...this.liked].find(s=>s.id===t);i&&(!this.current||this.current.id!==t)&&(this.current=i),this.detailLoading=!0,this.requestUpdate();try{const s=await v(`/${t}`);if(e!==this.sequence)return;this.current=w(s.playlist,!0)}catch(s){if(e!==this.sequence)return;this.detailError=s instanceof it&&s.status===404?this.t("notFound","Playlist not found"):s instanceof Error?s.message:String(s)}finally{e===this.sequence&&(this.detailLoading=!1,this.syncShell(),this.requestUpdate())}}songsOf(t){return t.refs.map(e=>({ref:e,song:this.library?.byKey.get(f(e))??null}))}async play(t,e){const i=this.songsOf(t).flatMap(({song:d})=>d?.audio?[d]:[]);if(!i.length){this.notify(this.t("audioUnavailable","Audio unavailable"));return}const{AudioDock:s}=await st(async()=>{const{AudioDock:d}=await import("./audio-dock.MdYjDeWm.js");return{AudioDock:d}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]));let a=document.querySelector("audio-dock");a||(a=new s,a.setAttribute("data-astro-transition-persist","haneoka-audio"),document.body.append(a));const n=i.map(d=>{if(d.bgm)return{id:d.key,title:this.songName(d),artist:this.artistOf(d),artistSource:d.bandName,cover:d.thumb,url:d.audio};const l=H(d.row,this.locale);return{id:d.key,title:l.text,titleSource:d.title,titleLanguage:l.locale,artistSource:d.bandName,artist:this.artistOf(d),cover:d.thumb,url:d.audio,detailPath:Y(d,this.locale)}}),o=e&&n.find(d=>d.id===e.key)||n[0];await a.playTrack(o,n)}notify(t){A(t)}async share(t){const e=new URL(this.href({playlist:t.id}),location.origin).href;try{navigator.share?await navigator.share({title:this.titleOf(t),url:e}):(await navigator.clipboard.writeText(e),this.notify(this.t("linkCopied","Link copied")))}catch{}}requireSignIn(){return this.signedIn?!0:(this.notify(this.t("signInRequired","Sign in to use playlists")),!1)}async toggleLike(t){if(!this.requireSignIn())return;const e=!t.viewerLiked;t.viewerLiked=e,t.likeCount=Math.max(0,(t.likeCount??0)+(e?1:-1)),this.requestUpdate();try{const i=await v(`/${t.id}/like`,{method:"PUT",body:JSON.stringify({liked:e})});t.viewerLiked=i.liked,t.likeCount=i.likeCount,this.liked=e?[t,...this.liked.filter(s=>s.id!==t.id)]:this.liked.filter(s=>s.id!==t.id)}catch(i){t.viewerLiked=!e,t.likeCount=Math.max(0,(t.likeCount??0)+(e?-1:1)),this.notify(i instanceof Error?i.message:String(i))}this.requestUpdate()}async addToPlaylist(t,e){this.addTarget=null;try{const i=await v(`/${t.id}/tracks`,{method:"POST",body:JSON.stringify(e.ref)});i.added&&(t.trackCount+=1,t.preview.length<4&&(t.preview=[...t.preview,e.ref])),this.notify(i.duplicate?this.t("alreadyInPlaylist","Already in {title}",{title:this.titleOf(t)}):this.t("addedToPlaylist","Added to {title}",{title:this.titleOf(t)}))}catch(i){this.notify(i instanceof Error?i.message:String(i))}this.requestUpdate()}emptyDraft(t=[],e=""){return{id:null,version:1,title:e,description:"",visibility:"public",coverKind:"auto",coverSong:null,coverAttachmentId:null,coverPreview:"",tracks:t}}createNew(t=[],e=""){this.requireSignIn()&&(this.pendingDraft=this.emptyDraft(t,e),this.go({edit:"new"}))}pendingDraft=null;async openEditor(t){const e=this.sequence;if(this.editorError="",this.saving=!1,this.uploadProgress=-1,t==="new"){this.draft=this.pendingDraft??this.emptyDraft(),this.pendingDraft=null,this.draftBaseline=JSON.stringify(this.emptyDraft()),this.syncShell(),this.requestUpdate();return}this.draft=null,this.requestUpdate();try{const i=await v(`/${t}`);if(e!==this.sequence)return;const s=w(i.playlist,!0);if(!s.viewerOwns)throw new Error(this.t("notFound","Playlist not found"));this.draft={id:s.id,version:s.version??1,title:this.titleOf(s),description:s.description??"",visibility:s.visibility??"public",coverKind:s.cover.kind==="song"||s.cover.kind==="upload"?s.cover.kind:"auto",coverSong:s.cover.song??null,coverAttachmentId:s.cover.attachmentId??null,coverPreview:s.cover.url??"",tracks:s.refs},this.draftBaseline=JSON.stringify(this.draft)}catch(i){if(e!==this.sequence)return;this.editorError=i instanceof Error?i.message:String(i)}this.syncShell(),this.requestUpdate()}draftDirty(){return!!(this.draft&&JSON.stringify(this.draft)!==this.draftBaseline)}patchDraft(t){this.draft&&(this.draft={...this.draft,...t},this.renderBarActions(),this.requestUpdate())}async save(){const t=this.draft;if(!t||this.saving)return;if(!t.title.trim()){this.editorError=this.t("titleRequired","Give the playlist a name"),this.requestUpdate();return}this.saving=!0,this.editorError="",this.renderBarActions(),this.requestUpdate();const e={title:t.title.trim(),description:t.description.trim()||null,visibility:t.visibility,coverKind:t.coverKind,coverSong:t.coverKind==="song"?t.coverSong:null,coverAttachmentId:t.coverKind==="upload"?t.coverAttachmentId:null,tracks:t.tracks,...t.id?{version:t.version}:{}};try{const i=await v(t.id?`/${t.id}`:"",{method:t.id?"PUT":"POST",body:JSON.stringify(e)}),s=w(i.playlist,!0);this.draftBaseline=JSON.stringify(this.draft),this.current=s,this.mine=[s,...this.mine.filter(a=>a.id!==s.id)],this.communityLists=this.communityLists.map(a=>a.id===s.id?s:a),history.replaceState(history.state,"",this.href({playlist:s.id})),this.route(),this.notify(this.t("savedToast","Playlist saved")),s.visibility==="public"&&this.loadCommunity(!1)}catch(i){this.editorError=i instanceof Error?i.message:String(i)}finally{this.saving=!1,this.renderBarActions(),this.requestUpdate()}}async deletePlaylist(){const t=this.draft;if(this.deleteOpen=!1,!!t?.id)try{await v(`/${t.id}`,{method:"DELETE"}),this.mine=this.mine.filter(e=>e.id!==t.id),this.communityLists=this.communityLists.filter(e=>e.id!==t.id),this.draftBaseline=JSON.stringify(this.draft),history.replaceState(history.state,"",this.href()),this.route(),this.notify(this.t("deleted","Playlist deleted"))}catch(e){this.editorError=e instanceof Error?e.message:String(e),this.requestUpdate()}}async uploadCover(t){if(!this.draft)return;if(!/^image\/(jpeg|png|webp|gif)$/u.test(t.type)){this.editorError=this.t("coverType","Choose a JPEG, PNG, WebP or GIF image"),this.requestUpdate();return}const e=URL.createObjectURL(t);this.patchDraft({coverKind:"upload",coverPreview:e,coverAttachmentId:null}),this.uploadProgress=0,this.editorError="";const i=async(s,a={})=>{const n=await fetch(s,{credentials:"same-origin",...a,headers:{accept:"application/json","content-type":"application/json",...a.headers}}),o=await n.json().catch(()=>({}));if(!n.ok)throw new Error(String((o.error??{}).message||`HTTP ${n.status}`));return o};try{const s=await i("/api/v1/community/uploads/intents",{method:"POST",headers:{"Idempotency-Key":crypto.randomUUID()},body:JSON.stringify({fileName:t.name||"cover",mediaType:t.type,size:t.size})});let a=s.attachment||s;String(a.status)==="reserved"&&(a=await yt(a,t,{signal:new AbortController().signal,unavailable:this.t("uploadFailed","Upload failed"),request:i,progress:(n,o)=>{this.uploadProgress=Math.round(n/o*100),this.requestUpdate()}})),this.draft?.coverPreview===e&&this.patchDraft({coverAttachmentId:String(a.id)})}catch(s){this.draft?.coverPreview===e&&this.patchDraft({coverKind:"auto",coverPreview:""}),this.editorError=s instanceof Error?s.message:String(s)}finally{this.uploadProgress=-1,this.requestUpdate()}}toggleTrack(t){const e=this.draft;if(!e)return;const i=e.tracks.some(s=>P(s,t.ref));if(!i&&e.tracks.length>=et){this.notify(this.t("playlistFull","A playlist holds at most {count} songs",{count:et}));return}this.patchDraft({tracks:i?e.tracks.filter(s=>!P(s,t.ref)):[...e.tracks,t.ref],...i&&P(e.coverSong,t.ref)?{coverKind:"auto",coverSong:null}:{}})}moveTrack(t,e){const i=this.draft;if(!i||t===e||e<0||e>=i.tracks.length)return;const s=[...i.tracks],[a]=s.splice(t,1);s.splice(e,0,a),this.patchDraft({tracks:s})}cover(t,e="card"){const i=Z(t,this.library),s=t.cover.kind==="band"&&t.cover.logo;return c`
      <span class=${`playlist-cover playlist-cover--${e}${i.mosaic.length?" playlist-cover--mosaic":""}`}>
        ${i.mosaic.length?i.mosaic.map(a=>c`
                  <img src=${a} alt="" loading="lazy" decoding="async" />
                `):i.single?c`
                  <img src=${i.single} alt="" loading="lazy" decoding="async" />
                `:c`
                  <span class="playlist-cover__empty">${u("queue_music",e==="tile"?24:40)}</span>
                `}
        ${s?c`
                <span class="playlist-cover__band">
                  <img src=${t.cover.logo} alt="" loading="lazy" decoding="async" />
                </span>
              `:p}
      </span>
    `}ownerLine(t){if(t.kind!=="community")return c`
        <span class="playlist-owner playlist-owner--official">
          ${u("verified",16)}${t.kind==="game"?this.t("inGamePlaylist","In-game playlist"):this.t("official","haneoka picks")}
        </span>
      `;const e=t.owner;return c`
      <span class="playlist-owner">
        ${e?.image?c`
                <img class="playlist-owner__avatar" src=${e.image} alt="" loading="lazy" decoding="async" />
              `:c`
                <span class="playlist-owner__avatar">${u("person",14)}</span>
              `}
        <span class="playlist-owner__name">${e?.name||this.t("member","Member")}</span>
      </span>
    `}card(t,e="card"){const i=this.href({playlist:t.id});return c`
      <li class=${`playlist-tile playlist-tile--${e}`}>
        <a
          class="playlist-tile__link"
          href=${i}
          @click=${s=>{s.button||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),this.current=t,this.go({playlist:t.id}))}}
        >
          <span class="playlist-tile__art">
            ${this.cover(t)}
            <span class="playlist-tile__count">${u("music_note",14)}${t.trackCount}</span>
            ${t.visibility==="private"?c`
                    <span class="playlist-tile__lock">${u("lock",14)}</span>
                  `:p}
          </span>
          <span class="playlist-tile__title">${this.titleOf(t)}</span>
          ${e==="card"&&t.kind==="community"?c`
                  <span class="playlist-tile__meta">${this.ownerLine(t)}</span>
                `:p}
        </a>
        <span class="playlist-tile__overlay">
          <button
            class="playlist-tile__play"
            type="button"
            aria-label=${`${this.t("playAll","Play all")} / ${this.titleOf(t)}`}
            ?disabled=${!t.trackCount}
            @click=${async()=>{let s=t;if(!t.complete&&t.kind==="community")try{s=w((await v(`/${t.id}`)).playlist,!0)}catch(a){this.notify(a instanceof Error?a.message:String(a));return}this.play(s)}}
          >
            ${q("play_arrow",24)}
          </button>
        </span>
      </li>
    `}shelf(t,e,i){if(!e.length&&!i.lead)return p;const s=a=>n=>{const o=n.currentTarget.closest(".playlist-shelf")?.querySelector(".playlist-shelf__track");o?.scrollBy({left:a*o.clientWidth*.85,behavior:"smooth"})};return c`
      <section class="playlist-shelf" aria-labelledby=${`playlist-shelf-${i.id}`}>
        <header class="playlist-section__head">
          <h2 id=${`playlist-shelf-${i.id}`}>${t}</h2>
          ${i.action??p}
          <span class="playlist-shelf__nav">
            ${b({icon:"chevron_left",label:this.t("previous","Previous"),onClick:s(-1)})}
            ${b({icon:"chevron_right",label:this.t("next","Next"),onClick:s(1)})}
          </span>
        </header>
        <ul class=${`playlist-shelf__track playlist-shelf__track--${i.variant??"card"}`} role="list">
          ${i.lead??p}
          ${C(e,a=>a.id,a=>this.card(a,i.variant))}
        </ul>
      </section>
    `}listed(t){const e=this.query.trim().toLocaleLowerCase();return e?`${this.titleOf(t)} ${t.owner?.name??""} ${t.description??""}`.toLocaleLowerCase().includes(e):!0}renderHub(){if(this.loadError&&!this.library)return J(this.t("unavailable","Playlists are unavailable"),this.t("retry","Retry"),()=>void this.loadAll(),this.loadError);if(!this.library)return S(this.t("loading","Loading playlists"));const t=this.official.filter(o=>o.kind==="official"&&this.listed(o)),e=this.official.filter(o=>o.group==="stage-challenge"&&this.listed(o)),i=this.official.filter(o=>o.group==="other"&&this.listed(o)),s=(this.mineTab==="created"?this.mine:this.liked).filter(o=>this.listed(o)),a=this.communityLists.filter(o=>this.listed(o)),n=c`
      <li class="playlist-tile playlist-tile--card playlist-tile--create">
        <button class="playlist-tile__link" type="button" @click=${()=>this.createNew()}>
          <span class="playlist-tile__art">
            <span class="playlist-cover playlist-cover--card playlist-cover--create">${u("add",40)}</span>
          </span>
          <span class="playlist-tile__title">${this.t("create","New playlist")}</span>
        </button>
      </li>
    `;return c`
      ${this.shelf(this.t("featured","haneoka picks"),t,{variant:"feature",id:"featured"})}
      ${this.signedIn?this.shelf(this.t("mine","My playlists"),s,{id:"mine",lead:this.mineTab==="created"&&!this.query?n:void 0,action:j({label:this.t("mine","My playlists"),value:this.mineTab,grow:!1,options:[{value:"created",label:this.t("created","Created")},{value:"liked",label:this.t("liked","Saved")}],onSelect:o=>{this.mineTab=o,this.requestUpdate()}})}):this.signedInChecked||!rt()?c`
                <section class="playlist-invite">
                  <span class="playlist-invite__mark shape-cookie-9">${u("library_music",28)}</span>
                  <div>
                    <h2>${this.t("inviteTitle","Make your own playlists")}</h2>
                  </div>
                  <a class="button button--tonal" href=${`/${this.locale}/account/`}>${this.t("signIn","Sign in")}</a>
                </section>
              `:p}
      ${this.shelf(this.t("stageChallenges","Stage Challenge"),e,{id:"stage"})}
      ${this.shelf(this.t("inGame","In-game"),i,{id:"other"})}
      <section class="playlist-community" aria-labelledby="playlist-community-heading">
        <header class="playlist-section__head">
          <h2 id="playlist-community-heading">${this.t("community","Community playlists")}</h2>
          ${j({label:this.t("sort","Sort"),value:this.communitySort,grow:!1,options:[{value:"new",label:this.t("sortNew","Newest")},{value:"popular",label:this.t("sortPopular","Popular")}],onSelect:o=>{this.communitySort=o,this.loadCommunity(!1)}})}
        </header>
        ${a.length?c`
                <ul class="playlist-wall" role="list">
                  ${C(a,o=>o.id,o=>this.card(o))}
                </ul>
              `:this.communityLoading?S(this.t("loading","Loading playlists"),{local:!0}):L({icon:"queue_music",title:this.query?this.t("noResults","No matching playlists"):this.t("communityEmpty","No community playlists yet"),body:this.query?void 0:this.t("communityEmptyBody","Be the first to publish one."),action:this.signedIn&&!this.query?c`
                          <button class="button" type="button" @click=${()=>this.createNew()}>
                            ${u("add",18)}${this.t("create","New playlist")}
                          </button>
                        `:void 0})}
        ${this.communityCursor&&!this.query?c`
                <div class="playlist-more">
                  <button
                    class="button button--tonal"
                    type="button"
                    ?disabled=${this.communityLoading}
                    @click=${()=>void this.loadCommunity(!0)}
                  >
                    ${this.t("loadMore","Load more")}
                  </button>
                </div>
              `:p}
      </section>
    `}observeHero(){const t=this.querySelector(".playlist-head__title");this.heroObserver?.disconnect(),t&&(this.heroObserver=new IntersectionObserver(([e])=>{const i=!e?.isIntersecting;i!==this.heroHidden&&(this.heroHidden=i,this.syncHeading())},{rootMargin:"-64px 0px 0px 0px"}),this.heroObserver.observe(t))}renderDetail(){const t=this.current;if(!t)return this.detailError?L({icon:"queue_music",title:this.detailError,action:c`
            <a
              class="button button--tonal"
              href=${this.href()}
              @click=${l=>{l.preventDefault(),this.back()}}
            >
              ${this.t("back","Back to playlists")}
            </a>
          `}):S(this.t("loading","Loading playlists"));const e=this.songsOf(t),i=Z(t,this.library),s=t.cover.url||i.single||i.mosaic[0]||"",a=e.filter(({song:l})=>l?.audio).length,n=t.description?.trim(),o=e.filter(({song:l})=>l?.ref.provider==="our-notes").length,d=e.filter(({song:l})=>l?.ref.provider==="bestdori").length;return c`
      <article class="playlist-view">
        <header class="playlist-head">
          ${s?c`
                  <span
                    class="playlist-head__backdrop"
                    style=${`background-image:url("${s.replace(/"/gu,"%22")}")`}
                  ></span>
                `:p}
          <div class="playlist-head__content">
            ${this.cover(t,"hero")}
            <div class="playlist-head__copy">
              <p class="playlist-head__eyebrow">
                ${this.t("communityPlaylist","Playlist")}
                ${t.visibility==="private"?c`
                        <span class="playlist-head__private">${u("lock",14)}${this.t("private","Private")}</span>
                      `:p}
              </p>
              <h2 class="playlist-head__title">${this.titleOf(t)}</h2>
              ${t.kind==="community"&&t.owner?c`
                      <a class="playlist-head__owner" href=${`/${this.locale}/community/users/${t.owner.uid}/`}>
                        ${this.ownerLine(t)}
                      </a>
                    `:c`
                      <span class="playlist-head__owner">${this.ownerLine(t)}</span>
                    `}
              ${n?c`
                      <button
                        class=${`playlist-head__description${this.descriptionOpen?" is-open":""}`}
                        type="button"
                        aria-expanded=${String(this.descriptionOpen)}
                        @click=${()=>{this.descriptionOpen=!this.descriptionOpen,this.requestUpdate()}}
                      >
                        ${n}
                      </button>
                    `:p}
              <p class="playlist-head__stats">
                <span>${this.t("songCount","{count} songs",{count:t.trackCount})}</span>
                ${o&&d?c`
                        <span>Our Notes ${o} / GBP ${d}</span>
                      `:p}
                ${a<e.length&&this.library?c`
                        <span>${this.t("playableCount","{count} playable",{count:a})}</span>
                      `:p}
                ${t.updatedAt?c`
                        <span>
                          ${this.t("updated","Updated {date}",{date:ut(this.locale,t.updatedAt)})}
                        </span>
                      `:p}
              </p>
            </div>
          </div>
          <div class="playlist-head__actions">
            <button
              class="button playlist-head__play"
              type="button"
              ?disabled=${!a}
              @click=${()=>void this.play(t)}
            >
              ${q("play_arrow",24)}
              <span>${this.t("playAll","Play all")}</span>
            </button>
            ${t.kind==="community"&&!t.viewerOwns&&t.visibility==="public"?c`
                    <button
                      class=${`button ${t.viewerLiked?"button--tonal is-selected":"button--outlined"}`}
                      type="button"
                      aria-pressed=${String(!!t.viewerLiked)}
                      @click=${()=>void this.toggleLike(t)}
                    >
                      ${t.viewerLiked?q("favorite",20):u("favorite",20)}
                      <span>
                        ${t.viewerLiked?this.t("collected","Saved"):this.t("collect","Save")}${t.likeCount?` / ${t.likeCount}`:""}
                      </span>
                    </button>
                  `:p}
            ${t.kind==="community"&&t.viewerOwns?c`
                    <button
                      class="button button--outlined"
                      type="button"
                      @click=${()=>this.go({edit:t.id})}
                    >
                      ${u("edit",20)}
                      <span>${this.t("edit","Edit")}</span>
                    </button>
                  `:p}
            ${t.id==="official:bgm"?p:c`<button
              class="button button--outlined"
              type="button"
              ?disabled=${!e.length}
              @click=${()=>this.createNew(t.refs,this.t("copyTitle","{title} (copy)",{title:this.titleOf(t)}).slice(0,tt))}
            >
              ${u("content_copy",20)}
              <span>${this.t("copyToMine","Save as my playlist")}</span>
            </button>`}
          </div>
        </header>
        <section class="playlist-songlist" aria-label=${this.t("tracks","Songs")}>
          <header class="playlist-songlist__bar">
            <button
              class="playlist-songlist__play"
              type="button"
              ?disabled=${!a}
              @click=${()=>void this.play(t)}
            >
              <span class="playlist-songlist__play-icon">${q("play_arrow",20)}</span>
              <span>${this.t("playAll","Play all")}</span>
              <span class="playlist-songlist__count">(${e.length})</span>
            </button>
          </header>
          ${!t.complete||this.detailLoading&&!e.length?S(this.t("loading","Loading playlists"),{local:!0}):e.length?c`
                    <ol class="playlist-songs" role="list">
                      ${C(e,({ref:l})=>f(l),({song:l},g)=>this.trackRow(t,l,g))}
                    </ol>
                  `:L({icon:"music_note",title:this.t("emptyPlaylist","No songs yet"),action:t.viewerOwns?c`
                          <button class="button" type="button" @click=${()=>this.go({edit:t.id})}>
                            ${u("add",18)}${this.t("addSongs","Add songs")}
                          </button>
                        `:void 0})}
        </section>
        ${t.kind==="community"&&t.visibility==="public"?ot({type:"community-playlists",id:t.id,server:"intl",locale:this.locale,title:this.titleOf(t)}):p}
      </article>
    `}trackRow(t,e,i){if(!e)return c`
        <li class="playlist-song is-unavailable">
          <span class="playlist-song__index">${i+1}</span>
          <span class="playlist-song__art">${u("music_off",20)}</span>
          <span class="playlist-song__text">
            <span class="playlist-song__title">${this.t("songUnavailable","Song unavailable")}</span>
          </span>
        </li>
      `;const s=this.nowPlaying===e.key;return c`
      <li class=${`playlist-song${s?" is-playing":""}${e.audio?"":" is-silent"}`}>
        <button
          class="playlist-song__main"
          type="button"
          ?disabled=${!e.audio}
          aria-label=${`${this.t("play","Play")} / ${this.songName(e)}`}
          @click=${()=>void this.play(t,e)}
        >
          <span class="playlist-song__index">${s?u("graphic_eq",18):i+1}</span>
          <span class="playlist-song__art"><img src=${e.thumb} alt="" loading="lazy" decoding="async" /></span>
          <span class="playlist-song__text">
            <span class="playlist-song__title" lang=${this.songLanguage(e)}>${this.songName(e)}</span>
            <span class="playlist-song__artist">
              <span class=${`playlist-source playlist-source--${e.ref.provider}`}>
                ${e.ref.provider==="our-notes"?"Our Notes":"GBP"}
              </span>
              ${this.artistOf(e)}
            </span>
          </span>
        </button>
        ${e.bgm?p:c`<span class="playlist-song__actions">
          ${b({icon:"add",label:this.t("addToPlaylist","Add to playlist"),onClick:()=>{this.requireSignIn()&&(this.addTarget=e,this.requestUpdate())}})}
          <a
            class="icon-button"
            href=${Y(e,this.locale)}
            aria-label=${this.t("songDetails","Song details")}
            title=${this.t("songDetails","Song details")}
          >
            ${u("chevron_right",24)}
          </a>
        </span>`}
      </li>
    `}renderEditor(){const t=this.draft;if(!t)return this.editorError?J(this.editorError,this.t("retry","Retry"),()=>void this.openEditor(this.targetId)):S(this.t("loading","Loading playlists"));const e=this.library,i={id:t.id??"draft",kind:"community",title:t.title,cover:{kind:t.coverKind,song:t.coverSong,url:t.coverKind==="upload"?t.coverPreview:null},refs:t.tracks,preview:t.tracks.slice(0,4),trackCount:t.tracks.length,complete:!0},s=t.tracks.map(a=>({ref:a,song:e?.byKey.get(f(a))??null}));return c`
      <form
        class="playlist-editor"
        @submit=${a=>{a.preventDefault(),this.save()}}
      >
        <section class="playlist-editor__head">
          <div class="playlist-editor__cover">
            ${this.cover(i,"hero")}
            ${this.uploadProgress>=0?c`
                    <span class="playlist-editor__progress">${this.uploadProgress}%</span>
                  `:p}
          </div>
          <div class="playlist-editor__fields">
            <md-outlined-text-field
              label=${this.t("name","Name")}
              required
              maxlength=${tt}
              .value=${B(t.title)}
              @input=${a=>this.patchDraft({title:a.target.value})}
            ></md-outlined-text-field>
            <md-outlined-text-field
              type="textarea"
              rows="3"
              label=${this.t("description","Description")}
              maxlength=${Et}
              .value=${B(t.description)}
              @input=${a=>this.patchDraft({description:a.target.value})}
            ></md-outlined-text-field>
            <label class="playlist-editor__switch">
              <span>
                <strong>${this.t("public","Public")}</strong>
                <small>
                  ${t.visibility==="public"?this.t("publicHint","Shown in community playlists"):this.t("privateHint","Only you can see it")}
                </small>
              </span>
              <md-switch
                ?selected=${t.visibility==="public"}
                @change=${a=>this.patchDraft({visibility:a.target.selected?"public":"private"})}
              ></md-switch>
            </label>
          </div>
        </section>
        <section class="playlist-editor__section" aria-labelledby="playlist-cover-heading">
          <header class="playlist-section__head">
            <h2 id="playlist-cover-heading">${this.t("cover","Cover")}</h2>
          </header>
          ${j({label:this.t("cover","Cover"),value:t.coverKind,options:[{value:"auto",label:this.t("coverAuto","Automatic"),icon:"auto_awesome"},{value:"song",label:this.t("coverSong","Song jacket"),icon:"music_note"},{value:"upload",label:this.t("coverUpload","Upload"),icon:"upload"}],onSelect:a=>{if(a==="upload"){this.querySelector(".playlist-editor__file")?.click();return}this.patchDraft({coverKind:a,coverSong:a==="song"?t.coverSong??t.tracks[0]??null:t.coverSong})}})}
          <input
            class="playlist-editor__file"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            hidden
            @change=${a=>{const n=a.target,o=n.files?.[0];n.value="",o&&this.uploadCover(o)}}
          />
          ${t.coverKind==="song"?s.length?c`
                    <ul
                      class="playlist-editor__jackets"
                      role="listbox"
                      aria-label=${this.t("coverSong","Song jacket")}
                    >
                      ${s.map(({ref:a,song:n})=>n?c`
                              <li>
                                <button
                                  type="button"
                                  role="option"
                                  aria-selected=${String(P(t.coverSong,a))}
                                  aria-label=${this.songName(n)}
                                  title=${this.songName(n)}
                                  @click=${()=>this.patchDraft({coverSong:a})}
                                >
                                  <img src=${n.thumb} alt="" loading="lazy" decoding="async" />
                                  ${P(t.coverSong,a)?c`
                                      <span class="playlist-editor__check">${u("check",18)}</span>
                                    `:p}
                                </button>
                              </li>
                            `:p)}
                    </ul>
                  `:c`
                    <p class="playlist-editor__hint">
                      ${this.t("coverSongHint","Add songs first, then pick one of their jackets.")}
                    </p>
                  `:t.coverKind==="upload"?c`
                    <p class="playlist-editor__hint">
                      ${this.t("coverUploadHint","Square images look best. Uploaded covers appear publicly after review.")}
                      <button
                        class="button button--text"
                        type="button"
                        @click=${()=>this.querySelector(".playlist-editor__file")?.click()}
                      >
                        ${u("photo_library",18)}${this.t("chooseImage","Choose image")}
                      </button>
                    </p>
                  `:c`
                    <p class="playlist-editor__hint">
                      ${this.t("coverAutoHint","Uses the jackets of the first four songs.")}
                    </p>
                  `}
        </section>
        <section class="playlist-editor__section" aria-labelledby="playlist-songs-heading">
          <header class="playlist-section__head">
            <h2 id="playlist-songs-heading">
              ${this.t("tracks","Songs")}
              <span class="playlist-section__count">${t.tracks.length}</span>
            </h2>
            <button
              class="button button--tonal"
              type="button"
              @click=${()=>{this.pickerOpen=!0,this.requestUpdate()}}
            >
              ${u("add",18)}${this.t("addSongs","Add songs")}
            </button>
          </header>
          ${s.length?c`
                  <ol class="playlist-songs playlist-songs--edit" role="list">
                    ${C(s,({ref:a})=>f(a),({ref:a,song:n},o)=>this.editRow(a,n,o,s.length))}
                  </ol>
                `:L({icon:"music_note",title:this.t("emptyPlaylist","No songs yet"),body:this.t("emptyEditorBody","Add songs from Our Notes and GBP.")})}
        </section>
        ${t.id?c`
                <section class="playlist-editor__danger">
                  <button
                    class="button button--danger"
                    type="button"
                    @click=${()=>{this.deleteOpen=!0,this.requestUpdate()}}
                  >
                    ${u("delete",18)}${this.t("delete","Delete playlist")}
                  </button>
                </section>
              `:p}
      </form>
      ${this.pickerOpen?this.renderPicker():p}
      ${this.deleteOpen?c`
              <dialog
                class="dialog"
                ${x(()=>{this.deleteOpen=!1,this.requestUpdate()})}
              >
                <div class="dialog__surface">
                  <header class="dialog__header"><h2>${this.t("deleteTitle","Delete this playlist?")}</h2></header>
                  <div class="dialog__body">
                    ${this.t("deleteBody","It disappears for everyone who saved it. This cannot be undone.")}
                  </div>
                  <footer class="dialog__actions">
                    <button
                      class="button button--text"
                      type="button"
                      @click=${()=>{this.deleteOpen=!1,this.requestUpdate()}}
                    >
                      ${this.t("cancel","Cancel")}
                    </button>
                    <button class="button button--danger" type="button" @click=${()=>void this.deletePlaylist()}>
                      ${this.t("deleteAction","Delete")}
                    </button>
                  </footer>
                </div>
              </dialog>
            `:p}
    `}editRow(t,e,i,s){return c`
      <li
        class=${`playlist-song playlist-song--edit${this.dragIndex===i?" is-dragging":""}`}
        @dragover=${a=>{this.dragIndex<0||(a.preventDefault(),this.dragIndex!==i&&(this.moveTrack(this.dragIndex,i),this.dragIndex=i))}}
        @drop=${a=>a.preventDefault()}
      >
        <span
          class="playlist-song__handle"
          draggable="true"
          aria-hidden="true"
          @dragstart=${a=>{this.dragIndex=i,a.dataTransfer?.setData("text/plain",f(t)),a.dataTransfer&&(a.dataTransfer.effectAllowed="move"),this.requestUpdate()}}
          @dragend=${()=>{this.dragIndex=-1,this.requestUpdate()}}
        >
          ${u("drag_indicator",20)}
        </span>
        <span class="playlist-song__art">
          ${e?c`
                  <img src=${e.thumb} alt="" loading="lazy" decoding="async" />
                `:u("music_off",20)}
        </span>
        <span class="playlist-song__text">
          <span class="playlist-song__title">
            <span lang=${e?this.songLanguage(e):this.locale}>${e?this.songName(e):this.t("songUnavailable","Song unavailable")}</span>
          </span>
          ${e?c`
                  <span class="playlist-song__artist">
                    <span class=${`playlist-source playlist-source--${e.ref.provider}`}>
                      ${e.ref.provider==="our-notes"?"Our Notes":"GBP"}
                    </span>
                    ${this.artistOf(e)}
                  </span>
                `:p}
        </span>
        <span class="playlist-song__actions">
          ${b({icon:"arrow_upward",label:this.t("moveUp","Move up"),disabled:i===0,onClick:()=>this.moveTrack(i,i-1)})}
          ${b({icon:"arrow_downward",label:this.t("moveDown","Move down"),disabled:i===s-1,onClick:()=>this.moveTrack(i,i+1)})}
          ${b({icon:"close",label:this.t("removeSong","Remove"),onClick:()=>{const a=this.draft;this.patchDraft({tracks:a.tracks.filter((n,o)=>o!==i),...P(a.coverSong,t)?{coverKind:"auto",coverSong:null}:{}})}})}
        </span>
      </li>
    `}renderPicker(){const t=this.library,e=this.draft,i=()=>{this.pickerOpen=!1,this.requestUpdate()},s=this.pickerQuery.trim().toLocaleLowerCase(),a=new Set(e?.tracks.map(f)??[]),n=t?.bands.find(l=>l.key===this.pickerBand),d=[...n?n.songs:t?.songs??[]].reverse().filter(l=>!s||`${this.songName(l)} ${I(l.title,"ja")} ${this.artistOf(l)}`.toLocaleLowerCase().includes(s)).slice(0,200);return c`
      <dialog class="dialog playlist-picker" ${x(i)} aria-labelledby="playlist-picker-title">
        <div class="dialog__surface">
          <header class="dialog__header playlist-picker__header">
            <div class="playlist-picker__title">
              <h2 id="playlist-picker-title">${this.t("addSongs","Add songs")}</h2>
              ${b({icon:"close",label:this.t("close","Close"),onClick:i})}
            </div>
            <label class="playlist-picker__search">
              ${u("search",20)}
              <input
                type="search"
                .value=${B(this.pickerQuery)}
                placeholder=${this.t("searchSongs","Search songs or artists")}
                aria-label=${this.t("searchSongs","Search songs or artists")}
                @input=${l=>{this.pickerQuery=l.target.value,this.requestUpdate()}}
              />
            </label>
            <div class="playlist-picker__bands" role="group" aria-label=${this.t("bands","Band")}>
              ${F({label:this.t("allBands","All"),selected:!this.pickerBand,onToggle:()=>{this.pickerBand="",this.requestUpdate()}})}
              ${(t?.bands??[]).map(l=>F({label:I(l.name,this.locale),selected:this.pickerBand===l.key,onToggle:()=>{this.pickerBand=this.pickerBand===l.key?"":l.key,this.requestUpdate()}}))}
            </div>
          </header>
          <div class="dialog__body playlist-picker__body">
            ${t?d.length?c`
                      <ul class="playlist-songs" role="list">
                        ${C(d,l=>l.key,l=>{const g=a.has(l.key)||l.aliases.some(m=>a.has(m));return c`
                            <li class=${`playlist-song playlist-song--pick${g?" is-selected":""}`}>
                              <button
                                class="playlist-song__main"
                                type="button"
                                aria-pressed=${String(g)}
                                @click=${()=>this.toggleTrack(l)}
                              >
                                <span class="playlist-song__art">
                                  <img src=${l.thumb} alt="" loading="lazy" decoding="async" />
                                </span>
                                <span class="playlist-song__text">
                                  <span class="playlist-song__title" lang=${this.songLanguage(l)}>${this.songName(l)}</span>
                                  <span class="playlist-song__artist">
                                    <span class=${`playlist-source playlist-source--${l.ref.provider}`}>
                                      ${l.ref.provider==="our-notes"?"Our Notes":"GBP"}
                                    </span>
                                    ${this.artistOf(l)}
                                  </span>
                                </span>
                                <span class="playlist-song__toggle">
                                  ${g?u("check",20):u("add",20)}
                                </span>
                              </button>
                            </li>
                          `})}
                      </ul>
                    `:L({title:this.t("noSongs","No matching songs")}):S(this.t("loading","Loading playlists"),{local:!0})}
          </div>
          <footer class="dialog__actions">
            <span class="playlist-picker__selected">
              ${this.t("songCount","{count} songs",{count:e?.tracks.length??0})}
            </span>
            <button class="button" type="button" @click=${i}>${this.t("done","Done")}</button>
          </footer>
        </div>
      </dialog>
    `}renderAddDialog(){const t=this.addTarget,e=()=>{this.addTarget=null,this.requestUpdate()};return c`
      <dialog class="dialog playlist-add" ${x(e)} aria-labelledby="playlist-add-title">
        <div class="dialog__surface">
          <header class="dialog__header">
            <h2 id="playlist-add-title">${this.t("addToPlaylist","Add to playlist")}</h2>
            <p class="playlist-add__song" lang=${this.songLanguage(t)}>${this.songName(t)}</p>
          </header>
          <div class="dialog__body">
            <ul class="playlist-add__list" role="list">
              <li>
                <button
                  type="button"
                  class="playlist-add__item"
                  @click=${()=>{e(),this.createNew([t.ref])}}
                >
                  <span class="playlist-cover playlist-cover--tile playlist-cover--create">${u("add",24)}</span>
                  <span>${this.t("create","New playlist")}</span>
                </button>
              </li>
              ${this.mine.map(i=>c`
                  <li>
                    <button
                      type="button"
                      class="playlist-add__item"
                      @click=${()=>void this.addToPlaylist(i,t)}
                    >
                      ${this.cover(i,"tile")}
                      <span>
                        <strong>${this.titleOf(i)}</strong>
                        <small>${this.t("songCount","{count} songs",{count:i.trackCount})}</small>
                      </span>
                    </button>
                  </li>
                `)}
            </ul>
          </div>
          <footer class="dialog__actions">
            <button class="button button--text" type="button" @click=${e}>${this.t("cancel","Cancel")}</button>
          </footer>
        </div>
      </dialog>
    `}render(){const t=this.view==="detail"?this.renderDetail():this.view==="edit"?this.renderEditor():this.renderHub();return c`
      <section class=${`page playlist-page playlist-page--${this.view}`}>${t}</section>
      ${this.addTarget?this.renderAddDialog():p}
    `}shownErrors=["",""];updated(){[this.detailError,this.editorError].forEach((t,e)=>{t!==this.shownErrors[e]&&(this.shownErrors[e]=t,t&&A(t,{error:!0}))}),this.view==="detail"?this.observeHero():this.heroObserver?.disconnect(),this.view!=="hub"&&this.renderBarActions(),this.syncHeading()}}customElements.get("playlist-hub")||customElements.define("playlist-hub",Nt);export{Nt as PlaylistHub};
