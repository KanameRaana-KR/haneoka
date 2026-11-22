import{a as nt,b as Oi}from"./chunk-ABE7DZU3.js";import{a as q,b as me,c as Ie,d as C,e as te,f as O,g as jt,h as Pe,i as Wi,k as Ft,l as Gi,m as Ae,n as En,o as Ki,p as Ji}from"./chunk-U2BEH5SM.js";import{b as Ir,c as Bi,d as Lt,e as xn,f as Ot,g as Tr,h as Di,i as Sn,j as Mr,k as _r,l as Rn,n as Cn,p as Vi,r as gt}from"./chunk-PDSGC7CT.js";import{a as Q,d as g,e as et,f as Li,g as ee,h as f,i as Y,j as tt,k as W}from"./chunk-M5MXLSCC.js";import{A as Zi,B as Xi,D as Ar,J as Qi,a as We,b as Ni,e as ji,f as Fi,l as Nt,m as Bt,p as Ui,q as zi,r as qi,s as Hi,t as Dt,u as Pr,w as Yi,y as Tn,z as Mn}from"./chunk-KHUU3QJZ.js";import{c as In}from"./chunk-YGDUS3XU.js";import{b as Ai}from"./chunk-NP5BHW4E.js";import{A as Ei,B as Ii,C as Ee,j as Ri,w as Ci,x as J,y as ke}from"./chunk-Z3V2L3UY.js";import{a as Ve,b as _i,c as At,d as Pi,e as kn,f as _e,g as Er}from"./chunk-P7BNVELI.js";import{j as Mi}from"./chunk-JDP3ULEX.js";import{a as Ti}from"./chunk-OBBKONHV.js";import{b as $n}from"./chunk-ELSXYJOP.js";var pe=e=>typeof e=="number"?e:null;function Ku(e){let t=new Map,n=new Map,r={characterRanks:{},characterTotalRank:null,bandItems:{},vipRank:null,characterMemory:{},musicMemory:{}},a={},i=[],o={},s=u=>{let d=t.get(u);return d||t.set(u,d={cardId:u,use:!0,lock:!1,level:null,awake:null,rank:null,skill:null,gekisoSkill:null}),d},l=u=>{let d=n.get(u);return d||n.set(u,d={cardId:u,use:!0,lock:!1,level:null,rank:null}),d},c={m:new Set,s:new Set};for(let[u,d]of Object.entries(e)){let m=u.split("."),p=m[0];if(p==="m"||p==="s"){let h=Number(m[1]),b=m[2];if(b==="own"){d.v===!0&&c[p].add(h);continue}if(p==="m"){let v=s(h);b==="use"?v.use=d.v!==!1:b==="lock"?v.lock=d.v===!0:b==="lvl"?v.level=pe(d.v):b==="awk"?v.awake=pe(d.v):b==="rnk"?v.rank=pe(d.v):b==="sk"?v.skill=pe(d.v):b==="gsk"&&(v.gekisoSkill=pe(d.v))}else{let v=l(h);b==="use"?v.use=d.v!==!1:b==="lock"?v.lock=d.v===!0:b==="lvl"?v.level=pe(d.v):b==="rnk"&&(v.rank=pe(d.v))}}else if(p==="cr")r.characterRanks[m[1]]=pe(d.v);else if(p==="bi")r.bandItems[m[1]]=pe(d.v);else if(p==="br")a[m[1]]=pe(d.v);else if(p==="cm")r.characterMemory[m[1]]=pe(d.v);else if(p==="mm")r.musicMemory[m[1]]=pe(d.v);else if(u==="p.vip")r.vipRank=pe(d.v);else if(p==="team"&&d.v&&typeof d.v=="object"&&!Array.isArray(d.v)){let h=d.v;i.push({id:m.slice(1).join("."),name:String(h.name??""),members:Array.isArray(h.members)?h.members.map(Number):[],snaps:Array.isArray(h.snaps)?h.snaps.map(b=>b===null?null:Number(b)):[],leader:typeof h.leader=="number"?h.leader:null,song:h.song&&typeof h.song=="object"?h.song:null,note:typeof h.note=="string"?h.note:void 0,createdAt:typeof h.createdAt=="number"?h.createdAt:d.t})}else p==="pref"&&(o[m.slice(1).join(".")]=d.v)}for(let u of[...t.keys()])c.m.has(u)||t.delete(u);for(let u of[...n.keys()])c.s.has(u)||n.delete(u);for(let u of c.m)s(u);for(let u of c.s)l(u);return i.sort((u,d)=>d.createdAt-u.createdAt),{members:t,snaps:n,player:r,bandRanks:a,teams:i,prefs:o}}function Ju(e,t=!1){return{members:[...e.members.values()].filter(n=>t||n.use).map(n=>({key:`m${n.cardId}`,cardId:n.cardId,level:n.level,awake:n.awake,rank:n.rank,liveSkillLevel:n.skill,gekisoSkillLevel:n.gekisoSkill})),snaps:[...e.snaps.values()].filter(n=>t||n.use).map(n=>({key:`s${n.cardId}`,cardId:n.cardId,level:n.level,rank:n.rank}))}}var Yu=e=>`m${e}`,Zu=e=>`s${e}`,le=e=>Number(e.slice(1));function Xu(e,t){let n=[{key:`m.${e}.own`,value:!0}],r=[["use","use"],["lock","lock"],["level","lvl"],["awake","awk"],["rank","rnk"],["skill","sk"],["gekisoSkill","gsk"]];for(let[a,i]of r)a in t&&n.push({key:`m.${e}.${i}`,value:t[a]});return n}function Qu(e,t){let n=[{key:`s.${e}.own`,value:!0}],r=[["use","use"],["lock","lock"],["level","lvl"],["rank","rnk"]];for(let[a,i]of r)a in t&&n.push({key:`s.${e}.${i}`,value:t[a]});return n}var Ut=["jp","intl"],Lr=e=>e==="jp"||e==="intl"?e:void 0,_n=e=>e==="jp"||e==="intl",ft=e=>e.filter(_n);var Dl=["event","band","link","birthday","home","afterlive","tutorial"],jl={event:"local_activity",band:"groups",link:"diversity_1",birthday:"cake",home:"home",afterlive:"celebration",tutorial:"school"},Fl=["event","band","main","afterlive","card"],Ul={event:"event",band:"groups",main:"auto_stories",afterlive:"celebration",card:"style"},zl=["event","unit","character","card","area","special","mysekai","live"],ql={event:"event",unit:"groups",character:"person",card:"style",area:"map",special:"auto_awesome",mysekai:"chair",live:"mic"},es=[{route:"/account",icon:"account_circle",label:"navigation.account"},{route:"/settings",icon:"settings",label:"navigation.settings"}],Pn=[{route:"/friend-links",icon:"link",label:"legal.friendLinks.title"},{route:"/license",icon:"copyright",label:"legal.license.title"},{route:"/terms",icon:"description",label:"legal.terms.title"},{route:"/privacy",icon:"privacy_tip",label:"legal.privacy.title"}],ts=[{id:"home",route:"/",icon:"home",label:"navigation.home",match:["/","/announcements","/calendar","/join","/sponsor","/download","/about",...Pn.map(e=>e.route)]},{id:"catalog",route:"/catalog",icon:"category",label:"navigation.catalog",match:["/catalog"],exclude:["/catalog/stories","/catalog/live2d","/catalog/spine","/catalog/assets","/catalog/help"]},{id:"stories",route:"/catalog/stories",icon:"auto_stories",label:"navigation.stories",match:["/catalog/stories"]},{id:"tools",route:"/tools",icon:"construction",label:"navigation.tools",match:["/tools","/team-builder","/song-progress","/gacha-history","/stamp-maker","/chart-editor","/story-editor","/catalog/live2d","/catalog/spine","/catalog/assets","/catalog/help"],exclude:["/tools/song-puzzle"]},{id:"games",route:"/games",icon:"sports_esports",label:"navigation.games",match:["/games","/sonolus","/song-puzzle","/song-guess","/tools/song-puzzle"]},{id:"community",route:"/community",icon:"forum",label:"navigation.community",match:["/community"]},{id:"search",route:"/search",icon:"search",label:"common.actions.search",match:["/search"]}],Hl=[{id:"home",label:"navigation.home",items:[{route:"/announcements",icon:"newspaper",label:"home.announcements.title"},{route:"/calendar",icon:"calendar_month",label:"tools.calendar.title"},{route:"/join",icon:"handshake",label:"legal.join.title"},{route:"/sponsor",icon:"favorite",label:"legal.sponsor.title"},{route:"/download",icon:"download",label:"download.title"},{route:"/about",icon:"info",label:"navigation.about",children:Pn.map(e=>({...e}))}]},{id:"library",label:"navigation.library",items:[{route:"/catalog/songs",icon:"library_music",label:"navigation.songs"},{route:"/catalog/song-meta",icon:"monitoring",label:"catalog.songs.fields.songMeta"},{route:"/catalog/events",icon:"event",label:"navigation.events"},{route:"/catalog/events/tracker",icon:"leaderboard",label:"tools.eventTracker.title"},{route:"/catalog/arena",icon:"emoji_events",label:"navigation.arena"},{route:"/catalog/characters",icon:"group",label:"navigation.characters"},{route:"/catalog/member-cards",icon:"style",label:"navigation.memberCards"},{route:"/catalog/support-cards",icon:"collections",label:"navigation.supportCards"},{route:"/catalog/skills",icon:"bolt",label:"catalog.cards.fields.skills"},{route:"/catalog/comics",icon:"menu_book",label:"navigation.comics"},{route:"/catalog/gacha",icon:"redeem",label:"navigation.gacha"},{route:"/catalog/login-campaigns",icon:"event_available",label:"navigation.loginCampaigns"},{route:"/catalog/missions",icon:"fact_check",label:"navigation.systemNavMissions"},{route:"/catalog/passes",icon:"workspace_premium",label:"navigation.systemNavPasses"},{route:"/catalog/tgw-card",icon:"credit_card",label:"catalog.tgwCard.card"},{route:"/catalog/studio",icon:"piano",label:"catalog.studio.title"},{route:"/catalog/player-ranks",icon:"trending_up",label:"catalog.progression.playerRank"},{route:"/catalog/friendship-ranks",icon:"diversity_1",label:"catalog.progression.friendshipRank"},{route:"/catalog/band-rating",icon:"monitoring",label:"catalog.progression.bandRating"},{route:"/catalog/high-score-rating",icon:"leaderboard",label:"catalog.progression.highScoreRating"},{route:"/catalog/shop",icon:"storefront",label:"navigation.shop"},{route:"/catalog/exchange",icon:"swap_horiz",label:"navigation.exchange"},{route:"/catalog/stamps",icon:"emoji_emotions",label:"navigation.stamps"},{route:"/catalog/stickers",icon:"style",label:"navigation.stickers"},{route:"/catalog/backgrounds",icon:"wallpaper",label:"navigation.backgrounds"},{route:"/catalog/chat-customizations",icon:"chat",label:"navigation.chatCustomizations"},{route:"/catalog/items",icon:"inventory_2",label:"navigation.items"},{route:"/catalog/band-items",icon:"piano",label:"navigation.bandItems"},{route:"/catalog/real-lives",icon:"festival",label:"navigation.realLives"}]},{id:"stories",label:"navigation.stories",items:Dl.map(e=>({route:`/catalog/stories/${e}`,icon:jl[e],label:e==="birthday"?"story.labels.birthdayStory":`story.navigation.${e}`}))},{id:"tools",label:"navigation.tools",items:[{route:"/catalog/live2d",icon:"animation",label:"navigation.live2d"},{route:"/catalog/spine",icon:"accessibility_new",label:"navigation.spine"},{route:"/catalog/assets",icon:"folder_open",label:"navigation.assets"},{route:"/catalog/help",icon:"help",label:"navigation.help"},{route:"/team-builder",icon:"groups",label:"tools.teamBuilder.title"},{route:"/song-progress",icon:"check_circle",label:"catalog.songProgress.title"},{route:"/gacha-history",icon:"history",label:"catalog.gachaHistory.title"},{route:"/stamp-maker",icon:"image",label:"tools.stampMaker.title"},{route:"/story-editor/create",icon:"edit_note",label:"community.stories.editor"},{route:"/chart-editor/create",icon:"edit",label:"navigation.chartEditor"}]},{id:"games",label:"navigation.games",items:[{route:"/sonolus",icon:"sports_esports",label:"catalog.sonolus.title"},{route:"/song-puzzle",icon:"extension",label:"tools.songPuzzle.title"},{route:"/song-guess",icon:"help",label:"catalog.songGuess.title"}]},{id:"anon-tokyo",label:"navigation.anonTokyo",collapsible:!0,items:[{route:"/catalog/anon-tokyo/characters",icon:"group",label:"catalog.anonTokyo.characters"},{route:"/catalog/anon-tokyo/outfits",icon:"checkroom",label:"catalog.anonTokyo.dressingRoom"},{route:"/catalog/anon-tokyo/shop",icon:"storefront",label:"catalog.anonTokyo.shop"},{route:"/catalog/anon-tokyo/goods",icon:"sell",label:"catalog.anonTokyo.goodsEconomy"},{route:"/catalog/anon-tokyo/decorations",icon:"chair",label:"catalog.anonTokyo.decorations"},{route:"/catalog/anon-tokyo/staff",icon:"badge",label:"catalog.anonTokyo.staffSection"},{route:"/catalog/anon-tokyo/customers",icon:"group",label:"catalog.anonTokyo.customersPage"},{route:"/catalog/anon-tokyo/tasks",icon:"fact_check",label:"catalog.anonTokyo.tasks"},{route:"/catalog/anon-tokyo/guide",icon:"menu_book",label:"catalog.anonTokyo.guide"},{route:"/catalog/anon-tokyo/fever",icon:"music_note",label:"catalog.anonTokyo.fever"}]},{id:"community",label:"navigation.community",hideHeading:!0,items:[{route:"/community/feeds",icon:"dynamic_feed",label:"community.page.feedRecommended",children:[{route:"/community/latest",icon:"schedule",label:"community.page.feedLatest"},{route:"/community/tags",icon:"sell",label:"community.page.tags"}]},{route:"/community/mine",icon:"person",label:"community.page.navigation.mine",children:[{route:"/community/following",icon:"group",label:"community.page.feedFollowing"},{route:"/community/bookmarks",icon:"bookmarks",label:"community.page.bookmarks"},{route:"/community/notifications",icon:"notifications",label:"community.page.notifications"},{route:"/community/activity",icon:"comment",label:"community.page.activity"}]},{route:"/community/playlists",icon:"queue_music",label:"community.page.playlistPage.title"},{route:"/community/stories",icon:"auto_stories",label:"community.stories.title"},{route:"/community/charts",icon:"music_note",label:"community.charts.title"},{route:"/community/forums",icon:"forum",label:"community.page.forums"}]},{id:"mirrors",label:"navigation.gbpArchive",collapsible:!0,items:[{route:"/community/gbp/songs",icon:"library_music",label:"community.page.songsBestDori"},...Fl.map(e=>({route:`/community/gbp/stories/${e}`,icon:Ul[e],label:`story.navigation.bestdori${e.charAt(0).toUpperCase()}${e.slice(1)}`}))]},{id:"sekai",label:"navigation.projectSekai",collapsible:!0,items:[{route:"/community/sekai/songs",icon:"library_music",label:"community.page.sekai.title"},...zl.map(e=>({route:`/community/sekai/stories/${e}`,icon:ql[e],label:`community.page.sekai.stories.${e}`}))]}],ns=Hl.filter(e=>e.id!=="anon-tokyo"),Vl=[{route:"/catalog/songs",icon:"library_music",label:"navigation.songs",resource:"songs"},{route:"/catalog/characters",icon:"group",label:"navigation.characters",resource:"characters"},{route:"/catalog/member-cards",icon:"style",label:"navigation.memberCards",resource:"cards"},{route:"/catalog/support-cards",icon:"collections",label:"navigation.supportCards",resource:"support-cards"},{route:"/catalog/stories",icon:"auto_stories",label:"navigation.stories",resource:"stories",countKey:"episodes"},{route:"/catalog/comics",icon:"menu_book",label:"navigation.comics",resource:"comics"},{route:"/catalog/events",icon:"event",label:"navigation.events",resource:"events"},{route:"/catalog/arena",icon:"emoji_events",label:"navigation.arena",resource:"arena"},{route:"/catalog/gacha",icon:"redeem",label:"navigation.gacha",resource:"gacha"},{route:"/catalog/login-campaigns",icon:"event_available",label:"navigation.loginCampaigns",resource:"login-campaigns"},{route:"/catalog/missions",icon:"fact_check",label:"navigation.systemNavMissions",resource:"missions"},{route:"/catalog/passes",icon:"workspace_premium",label:"navigation.systemNavPasses",resource:"passes"},{route:"/catalog/tgw-card",icon:"credit_card",label:"catalog.tgwCard.card",resource:"tgw-card"},{route:"/catalog/player-ranks",icon:"trending_up",label:"catalog.progression.playerRank"},{route:"/catalog/friendship-ranks",icon:"diversity_1",label:"catalog.progression.friendshipRank"},{route:"/catalog/band-rating",icon:"monitoring",label:"catalog.progression.bandRating"},{route:"/catalog/high-score-rating",icon:"leaderboard",label:"catalog.progression.highScoreRating"},{route:"/catalog/shop",icon:"storefront",label:"navigation.shop",resource:"shop"},{route:"/catalog/exchange",icon:"swap_horiz",label:"navigation.exchange",resource:"exchange"},{route:"/catalog/stamps",icon:"emoji_emotions",label:"navigation.stamps",resource:"stamps"},{route:"/catalog/stickers",icon:"style",label:"navigation.stickers",resource:"stickers"},{route:"/catalog/backgrounds",icon:"wallpaper",label:"navigation.backgrounds",resource:"backgrounds"},{route:"/catalog/chat-customizations",icon:"chat",label:"navigation.chatCustomizations",resource:"chat-customizations"},{route:"/catalog/items",icon:"inventory_2",label:"navigation.items",resource:"items"},{route:"/catalog/band-items",icon:"piano",label:"navigation.bandItems",resource:"band-items"},{route:"/catalog/live2d",icon:"animation",label:"navigation.live2d",resource:"live2d"},{route:"/catalog/spine",icon:"accessibility_new",label:"navigation.spine",resource:"spine"},{route:"/catalog/assets",icon:"folder_open",label:"navigation.assets"},{route:"/catalog/help",icon:"help",label:"navigation.help",resource:"help"},{route:"/catalog/anon-tokyo/characters",icon:"storefront",label:"navigation.anonTokyo"},{route:"/catalog/real-lives",icon:"festival",label:"navigation.realLives",resource:"real-lives"}],rm=Vl.filter(e=>!Oi(e.route));var Or=[["filter","common.actions.filter"],["reset","common.actions.reset"],["search","common.actions.search"],["sort","common.actions.sort"],["id","common.fields.id"],["title","common.fields.title"],["release","catalog.fields.release"],["availability","catalog.systems.common.availability"],["order","common.layout.order"],["ascending","common.layout.ascending"],["descending","common.layout.descending"],["view","common.actions.view"],["downloadChart","common.actions.downloadChart"],["grid","common.layout.grid"],["list","common.layout.list"],["loading","common.states.loading"],["chartPending","catalog.pageData.chartPending"],["unavailable","common.states.unavailable"],["unknown","common.states.unknown"],["unlimited","common.states.unlimited"],["retry","common.actions.retry"],["empty","common.states.empty"],["close","common.actions.close"],["character","catalog.fields.character"],["band","catalog.fields.band"],["rarity","catalog.cards.fields.rarity"],["type","catalog.fields.type"],["chatInitialOwnership","catalog.chatCustomizations.initialOwnership"],["attribute","catalog.fields.attribute"],["genre","catalog.songs.fields.genre"],["subtitle","common.fields.subtitle"],["category","common.fields.category"],["initial","catalog.cards.types.permanent"],["rankUpItem","catalog.cards.fields.rankUpItem"],["notes","editors.chart.labels.notes"],["battle","navigation.battle"],["performance","catalog.cards.fields.performance"],["technique","catalog.cards.fields.technique"],["visual","catalog.cards.fields.visual"],["composer","catalog.songs.fields.composer"],["lyricist","catalog.songs.fields.lyricist"],["arranger","catalog.songs.fields.arranger"],["birthday","catalog.characters.fields.birthday"],["height","catalog.characters.fields.height"],["voiceActor","navigation.voiceActor"],["school","catalog.characters.fields.school"],["hobby","catalog.characters.fields.hobby"],["value","common.fields.value"],["red","catalog.songs.liveTypes.red"],["blue","catalog.songs.liveTypes.blue"],["green","catalog.songs.liveTypes.green"],["yellow","catalog.songs.liveTypes.yellow"],["purple","catalog.songs.liveTypes.purple"],["original","catalog.songs.types.original"],["virtual","catalog.songs.types.virtual"],["jpop","catalog.songs.types.jpop"],["anime","catalog.songs.types.anime"],["game","catalog.songs.types.game"],["skills","catalog.cards.fields.skills"],["stats","catalog.fields.stats"],["details","common.actions.details"],["difficulty","catalog.songs.fields.difficulty"],["metaR","catalog.analysis.fields.metaR"],["metaOfficialLevel","catalog.analysis.fields.metaOfficialLevel"],["metaTime","catalog.analysis.fields.metaTime"],["metaScore","catalog.analysis.fields.metaScore"],["metaNativeScore","catalog.analysis.fields.metaNativeScore"],["metaScoreFactor","catalog.analysis.fields.metaScoreFactor"],["metaEff","catalog.analysis.fields.metaEff"],["metaBpm","catalog.analysis.fields.metaBpm"],["metaN","catalog.analysis.fields.metaN"],["metaNps","catalog.analysis.fields.metaNps"],["metaSr","catalog.analysis.fields.metaSr"],["combo","editors.chart.labels.combo"],["metaMode","catalog.analysis.fields.metaMode"],["metaModeLive","catalog.analysis.fields.metaModeLive"],["metaModeGekisou","catalog.analysis.fields.metaModeGekisou"],["metaTierTheory","catalog.analysis.fields.metaTierTheory"],["metaTierCurrent","catalog.analysis.fields.metaTierCurrent"],["justableRate","catalog.analysis.fields.justableRate"],["justable","catalog.analysis.fields.justable"],["luck","catalog.analysis.fields.luck"],["metaEffCurrent","catalog.analysis.fields.metaEffCurrent"],["metaTier","catalog.analysis.fields.metaTier"],["metaTierTheorySub","catalog.analysis.fields.metaTierTheorySub"],["metaTierCurrentSub","catalog.analysis.fields.metaTierCurrentSub"],["gekisouSegment","catalog.analysis.fields.gekisouSegment"],["gekisouStages","navigation.gekisouStages"],["gekisouJustable","catalog.analysis.fields.gekisouJustable"],["gekisouMissionCombo","catalog.songs.gekisou.gekisouMissionCombo"],["gekisouMissionLuck","catalog.songs.gekisou.gekisouMissionLuck"],["gekisouMissionJustCount","catalog.songs.gekisou.gekisouMissionJustCount"],["gekisouMissionAll","catalog.songs.gekisou.gekisouMissionAll"],["gekisouMissionNone","catalog.songs.gekisou.gekisouMissionNone"],["gekisouPhase1","catalog.analysis.fields.gekisouPhase1"],["gekisouPhase2","catalog.analysis.fields.gekisouPhase2"],["gekisouPhase3","catalog.analysis.fields.gekisouPhase3"],["diary","catalog.characters.fields.diary"],["rewards","catalog.fields.rewards"],["content","common.fields.content"],["level","common.fields.level"],["maximum","common.fields.maximum"],["training","catalog.cards.fields.training"],["awakening","catalog.cards.fields.awakening"],["liveSkill","catalog.cards.fields.liveSkill"],["gekisouSkill","catalog.cards.fields.gekisouSkill"],["leaderSkill","catalog.cards.fields.leaderSkill"],["supportSkill","catalog.cards.fields.supportSkill"],["gekisouSupportSkill","catalog.cards.fields.gekisouSupportSkill"],["rank","catalog.cards.fields.rank"],["required","common.fields.required"],["memberPiece","catalog.cards.fields.memberPiece"],["total","common.fields.total"],["exp","catalog.cards.fields.exp"],["stage","media.models.labels.stage"],["memberCards","navigation.memberCards"],["supportCards","navigation.supportCards"],["songs","navigation.songs"],["characters","navigation.characters"],["lyrics","catalog.songs.fields.lyrics"],["arrangement","catalog.songs.fields.arrangement"],["size","common.layout.size"],["musicType","catalog.songs.fields.musicType"],["time","common.fields.time"],["score","catalog.analysis.fields.score"],["eff","catalog.analysis.fields.eff"],["bpm","catalog.analysis.fields.bpm"],["n","catalog.analysis.fields.n"],["nps","catalog.analysis.fields.nps"],["sr","catalog.analysis.fields.sr"],["play","common.actions.play"],["pause","common.actions.pause"],["chart","navigation.chart"],["media","navigation.media"],["mv","catalog.songs.fields.mv"],["playAll","media.audio.playAll"],["previous","common.actions.previous"],["next","common.actions.next"],["friendship","catalog.characters.fields.friendship"],["effectsByLevel","catalog.cards.fields.effectsByLevel"],["profile","catalog.characters.fields.profile"],["cards","navigation.cards"],["stamps","navigation.stamps"],["voices","navigation.voices"],["story","navigation.story"],["characterBonds","catalog.characters.fields.characterBonds"],["bandStories","story.navigation.band"],["linkStories","story.navigation.link"],["homeStories","story.navigation.home"],["afterliveStories","story.navigation.afterlive"],["tutorialStories","story.navigation.tutorial"],["schoolClass","catalog.characters.fields.schoolClass"],["constellation","catalog.characters.fields.constellation"],["favoriteFood","catalog.characters.fields.favoriteFood"],["hatedFood","catalog.characters.fields.hatedFood"],["missions","navigation.missions"],["simple","common.layout.simple"],["watch","common.actions.watch"],["density","common.layout.density"],["comfortable","common.layout.comfortable"],["compact","common.layout.compact"],["remove","common.actions.remove"],["status","catalog.systems.common.status"],["price","catalog.shop.price"],["ongoing","catalog.systems.common.ongoing"],["upcoming","catalog.systems.common.upcoming"],["ended","catalog.systems.common.ended"],["retired","catalog.systems.common.retired"],["starts","catalog.systems.common.starts"],["ends","catalog.systems.common.ends"],["MemberCard","catalog.resources.types.MemberCard"],["SupportCard","catalog.resources.types.SupportCard"],["Item","catalog.resources.types.Item"],["stars","catalog.recruitments.types.stars"],["ticket","catalog.recruitments.types.ticket"],["ad","catalog.recruitments.types.ad"],["pass","catalog.recruitments.types.pass"],["featured","catalog.systems.common.featured"],["drawOptions","catalog.recruitments.drawOptions"],["draw","catalog.recruitments.draw"],["drawCount","catalog.recruitments.drawCount"],["rates","catalog.recruitments.rates"],["simulator","catalog.recruitments.simulator"],["simulateDraw","catalog.recruitments.simulateDraw"],["guaranteedDraws","catalog.recruitments.guaranteedDraws"],["simulationUnavailable","catalog.recruitments.simulationUnavailable"],["spent","catalog.recruitments.spent"],["gachaPoint","catalog.recruitments.gachaPoint"],["guaranteed","catalog.recruitments.guaranteed"],["pickup","catalog.recruitments.pickup"],["firstTime","catalog.shop.firstTime"],["bonus","catalog.systems.common.bonus"],["prizePool","catalog.recruitments.prizePool"],["dailyRewards","catalog.passes.dailyRewards"],["dayN","catalog.passes.day"],["contents","catalog.systems.common.contents"],["eventRewards","catalog.events.labels.eventRewards"],["achievementRewards","catalog.events.labels.achievementRewards"],["boxGachaRewards","catalog.events.labels.boxGachaRewards"],["rankingRewards","catalog.events.labels.rankingRewards"],["liveEventRewards","catalog.events.labels.liveEventRewards"],["challengeRewards","catalog.events.labels.challengeRewards"],["loopRewards","catalog.events.labels.loopRewards"],["rewardUnavailable","catalog.events.labels.rewardUnavailable"],["eventWindow","catalog.events.labels.eventWindow"],["displayEnd","catalog.events.labels.displayEnd"],["eventRankings","catalog.events.labels.eventRankings"],["liveRanking","catalog.events.labels.liveRanking"],["challengeRanking","catalog.events.labels.challengeRanking"],["loopStart","catalog.events.labels.loopStart"],["eventDetailsUnavailable","catalog.events.labels.eventDetailsUnavailable"],["eventEffects","catalog.events.labels.eventEffects"],["eventEffect","catalog.events.labels.eventEffect"],["eventLinks","catalog.events.labels.eventLinks"],["eventItem","catalog.events.labels.eventItem"],["eventSong","catalog.events.labels.eventSong"],["storyEpisode","catalog.events.labels.storyEpisode"],["goal","catalog.events.labels.goal"],["eventMainStory","story.navigation.event"],["eventExtraStory","story.labels.extraStory"],["eventAnotherStory","story.labels.anotherStory"],["exchangeGoods","catalog.exchange.exchangeGoods"],["exchangeCurrency","catalog.exchange.currency"],["exchangeFiniteTotal","catalog.exchange.finiteTotal"],["exchangeUnknownCost","catalog.exchange.unknownCost"],["exchangeFiniteOnly","catalog.exchange.finiteOnly"],["exchangePurchaseLimit","catalog.exchange.purchaseLimit"],["rankRewards","catalog.systems.common.rankRewards"],["levelRewards","catalog.systems.common.levelRewards"],["passMissions","catalog.passes.passMissions"],["points","catalog.systems.common.points"],["premium","catalog.passes.premium"],["free","catalog.passes.free"],["limit","catalog.shop.limit"],["viewSong","catalog.systems.common.viewSong"],["watchAd","catalog.passes.watchAd"],["inAppPurchase","catalog.shop.inAppPurchase"],["requiresRank","catalog.systems.common.requiresRank"],["bands","catalog.fields.band"],["game-event","catalog.events.kind.gameEvent"],["real-live","catalog.events.kind.realLive"],["gacha","navigation.gacha"],["login","navigation.loginCampaigns"],["shop","navigation.shop"],["exchange","navigation.exchange"],["circle","navigation.circle"],["challenge","navigation.challenge"],["regular-mission","catalog.missions.regularMission"],["limited-mission","catalog.missions.limitedMission"],["season-pass","catalog.passes.seasonPass"],["monthly-pass","catalog.passes.monthlyPass"]],im=Object.freeze(Object.fromEntries(Or));var Nr="(?:ja|en|zh-TW|zh-CN|ko)",as="[0-9a-f-]{36}",dm=new RegExp(`^/(${Nr})/community/stories/(${as})(/story)?/?$`,"u"),um=new RegExp(`^/(?:(?:jp|intl)/)?(${Nr})/community-stories(?:/(${as})(/story)?)?/?$`,"u"),mm=new RegExp(`^/(?:(?:jp|intl)/)?(${Nr})/story-creation/?$`,"u");function Br(e,t,n=""){return`/${t}/community/stories/${n?`${encodeURIComponent(n)}/`:""}`}var is="(?:ja|en|zh-TW|zh-CN|ko)",ss="[0-9a-f-]{36}",bm=new RegExp(`^/(${is})/community/charts/(${ss})(/chart)?/?$`,"u"),ym=new RegExp(`^/(?:(?:jp|intl)/)?(${is})/charts(?:/(${ss})(/chart)?)?/?$`,"u");function An(e,t,n=""){return`/${t}/community/charts/${n?`${encodeURIComponent(n)}/`:""}`}var zt=(e,t=Ut)=>_n(e)&&t.includes(e),Dr="haneoka.release-server";function jr(e){let t=/(?:^|;\s*)haneoka\.release-server=([^;]*)/u.exec(e)?.[1];if(t)try{let n=decodeURIComponent(t);return zt(n)?n:void 0}catch{return}}function qt(e,t=Ut){let n=e.split("/")[1];return zt(n,t)?n:void 0}var ls=["community-stories","charts","characters","songs","member-cards","support-cards","stories","comics","stamps","stickers","backgrounds","chat-customizations","band-items","items","events","arena","real-lives","gacha","login-campaigns","shop","exchange","circle","challenge","passes","missions","tgw-card","live2d","spine","help","skills"],Gl=["event","band","link","birthday","home","afterlive","tutorial"],Kl=["characters","outfits","shop","goods","decorations","staff","customers","tasks","guide","fever"],cs=e=>typeof e=="string"&&ls.includes(e),ds=e=>typeof e=="string"&&Gl.includes(e),Jl=e=>typeof e=="string"&&Kl.includes(e),Yl=e=>e.length>0&&e!=="."&&e!==".."&&!/[\\/\u0000-\u001f\u007f]/u.test(e);function Fr({server:e,locale:t,kind:n,id:r}){if(!_n(e)||!Ve(t)||!cs(n))throw new TypeError("Invalid resource route");if(r!==void 0&&!Yl(r))throw new TypeError("Invalid resource identity");return n==="community-stories"?Br(e,t,r):n==="charts"?An(e,t,r):`/${e}/${t}/${n}/${r===void 0?"":`${encodeURIComponent(r)}/`}`}function Zl({server:e,locale:t,mode:n}){if(!ds(n))throw new TypeError("Invalid story collection");return`${Fr({server:e,locale:t,kind:"stories"})}${n}/`}var Xl={cards:"member-cards","member-cards":"member-cards","support-cards":"support-cards","song-meta":"songs"};function Ql(e){let t=Xl[e]??e;return cs(t)?t:void 0}function us(e,t,n){let r=new URL(e,"https://route.invalid");if(r.pathname==="/community/stories")return`${Br(t,n)}${r.search}`;if(r.pathname==="/community/charts")return`${An(t,n)}${r.search}`;let a=r.pathname.replace(/^\/+|\/+$/gu,"").split("/");if(a.length===1&&a[0]==="charts")return`${An(t,n)}${r.search}`;if(a.length===1&&a[0]==="calendar")return`/${t}/${n}/calendar/${r.search}`;if(a[0]!=="catalog")return;if(a.length===1){let l=new URL(`/${t}/${n}/catalog/`,r);return l.search=r.search,`${l.pathname}${l.search}`}let i=a[1]||"";if(i==="events"&&a[2]==="tracker"&&a.length===3)return`/${t}/${n}/events/tracker/${r.search}`;if(a.length>2&&!(i==="stories"||i==="anon-tokyo"))return;if(i==="skills")return a.length===2?`/${t}/${n}/skills/${r.search}`:void 0;if(i==="studio")return a.length===2?`/${t}/${n}/studio/${r.search}`:void 0;if(i==="player-ranks"||i==="friendship-ranks"||i==="band-rating"||i==="high-score-rating")return a.length===2?`/${t}/${n}/${i}/${r.search}`:void 0;if(i==="song-meta"){if(a.length!==2)return;let l=new URL(`/${t}/${n}/song-meta/`,r);return l.search=r.search,`${l.pathname}${l.search}`}if(i==="assets"){if(a.length!==2)return;let l=new URL(`/${t}/${n}/assets/`,r);return l.search=r.search,`${l.pathname}${l.search}`}if(i==="anon-tokyo"){if(a.length!==3||!Jl(a[2]))return;let l=new URL(`/${t}/${n}/anon-tokyo/${a[2]}/`,r);return l.search=r.search,`${l.pathname}${l.search}`}let o=Ql(i);if(!o||a.length>2&&o!=="stories")return;if(o==="stories"&&a[2]){if(!ds(a[2]))return;let l=new URL(Zl({server:t,locale:n,mode:a[2]}),r);return l.search=r.search,l.searchParams.delete("mode"),`${l.pathname}${l.search}`}let s=new URL(Fr({server:t,locale:n,kind:o}),r);return s.search=r.search,`${s.pathname}${s.search}`}var Em=new Set([...ls,"cards","catalog","assets","song-meta","studio","announcements","calendar","anon-tokyo","player-ranks","friendship-ranks","band-rating","high-score-rating"]);var os;function ec(e,t){return os?os(e,t):e}function ms(e){let t=new URL(Fr(e),"https://route.invalid");if(e.query){let r=typeof e.query=="string"?new URLSearchParams(e.query):e.query instanceof URLSearchParams?e.query:new URLSearchParams(Object.entries(e.query));for(let[a,i]of r)t.searchParams.append(a,i)}let n=`${t.pathname}${t.search}`;return ec(n,e.returnTo)}var Le="common",zr="catalog",tc="download",nc="home",rc="calendar",ac="story",ic="voice",sc="media",oc="account",lc="community",cc="editor",dc="legal",uc="admin",mc="anon",pc="spine",gc="live2d",fc="help",hc="songSlidePuzzle",bc="stampMaker",yc="teamBuilder",vc="eventTracker",qr=[Le,zr,nc,tc,rc,ac,ic,sc,oc,lc,cc,dc,uc,mc,pc,gc,fc,hc,bc,yc,vc],Ur={common:["common","navigation","settings","media.audio","media.images.actions","media.capture","catalog.bands.names","community.page.forums","account.page.openSaveImport","account.page.saveImportGuide","account.page.toolAccounts"],catalog:["catalog","tools.playerProfile","editors.chart.labels.notes","editors.chart.labels.combo","editors.chart.importGbp","story.labels.eventStory","story.labels.extraStory","story.labels.anotherStory"],home:["home"],download:["download"],calendar:["tools.calendar"],story:["story"],voice:["media.voice","media.audio"],media:["media"],account:["account","saveWorkspace","community.page.appeal","community.page.appealStatement","community.page.submitAppeal","community.page.appealSubmitted","community.page.appealFailed","home.dashboard.privacy","home.dashboard.terms"],community:["community"],editor:["editors","tools.teamBuilder.songBandFilter","tools.teamBuilder.songAttributeFilter","tools.teamBuilder.gekiso","tools.teamBuilder.level","tools.teamBuilder.difficulty","tools.teamBuilder.sc.minLevel","tools.teamBuilder.sc.maxLevel","tools.teamBuilder.maxDuration","tools.teamBuilder.allChartDifficulties","tools.teamBuilder.clearFilters","tools.teamBuilder.durationFailed"],legal:["legal"],admin:["admin"],anon:["catalog.anonTokyo"],spine:["media.spine"],live2d:["media.models"],help:["common.help"],songSlidePuzzle:["tools.songPuzzle"],stampMaker:["tools.stampMaker"],teamBuilder:["tools.teamBuilder"],eventTracker:["tools.eventTracker"]},wc=(e,t)=>{let n=e;for(let r of t.split(".")){if(!n||typeof n!="object"||Array.isArray(n))return;n=n[r]}return n},kc=(e,t,n)=>{let r=t.split("."),a=e;for(let i of r.slice(0,-1)){let o=a[i];if(!o||typeof o!="object"||Array.isArray(o)){let s={};a[i]=s,a=s}else a=o}a[r[r.length-1]]=n},ps=(e,t)=>{t.add(e.label);for(let n of e.children??[])ps(n,t)},$c=()=>{let e=new Set;for(let t of ts)e.add(t.label);for(let t of[...es,...Pn])e.add(t.label);for(let t of ns){e.add(t.label);for(let n of t.items)ps(n,e)}return[...e]};var xc={catalog:["media"],home:["catalog","media"],calendar:["catalog"],story:["catalog","media"],voice:["catalog","media"],editor:["catalog","media","story","community"],anon:["catalog","media"],spine:["catalog","media"],live2d:["catalog","media"],songSlidePuzzle:["catalog"],stampMaker:["catalog","media"],teamBuilder:["catalog","media"],eventTracker:["catalog","media"],community:["catalog","media","story"],admin:["catalog","community"]},Hr=e=>{let t=new Set([Le]),n=r=>{if(!t.has(r)){t.add(r);for(let a of xc[r]??[])n(a)}};for(let r of e)n(r);return[...t]};var Sc=e=>e===Le?[...Ur.common,...$c()]:e===zr?[...Ur.catalog,...Or.map(([,t])=>t)]:Ur[e],Bm=(e,t)=>{let n={},r=new Set(Sc(t));for(let a of r){let i=a.split(".");if(i.some((s,l)=>l>0&&r.has(i.slice(0,l).join("."))))continue;let o=wc(e,a);o!==void 0&&kc(n,a,o)}return n};var Vr="unseeded";var Rc="haneoka-i18n-seed",Cc="haneoka:locale-ready",rt=e=>{if(!e||typeof e!="object"||Object.isFrozen(e))return e;for(let t of Object.values(e))rt(t);return Object.freeze(e)},Ln=e=>{let t={};for(let n of e){let r=Pi(t,n);r&&typeof r=="object"&&!Array.isArray(r)&&(t=r)}return rt(t)},Ht=()=>new DOMException("The i18n request was aborted","AbortError"),Ec=(e,t)=>{if(!e)return()=>{};let n=()=>t.abort();return e.aborted?n():e.addEventListener("abort",n,{once:!0}),()=>e.removeEventListener("abort",n)},Wr=e=>{if(!e||typeof e!="object")return null;let t=e;if(!Ve(t.locale)||typeof t.version!="string"||!t.namespaces||typeof t.namespaces!="object")return null;let n={};for(let[i,o]of Object.entries(t.namespaces)){if(!At(o))return null;n[i]=rt(o)}if(!Object.keys(n).length)return null;let r={};if(t.fallbacks!==void 0){if(!t.fallbacks||typeof t.fallbacks!="object")return null;for(let[i,o]of Object.entries(t.fallbacks)){if(!At(o))return null;r[i]=rt(o)}}let a=t.requiredNamespaces?[...t.requiredNamespaces]:Object.keys(n);return!a.length||a.some(i=>typeof i!="string"||!n[i])?null:{version:t.version,locale:t.locale,namespaces:n,requiredNamespaces:a,fallbacks:r}},Ic=(e=globalThis.document)=>{if(typeof e?.getElementById!="function")return null;let t=e.getElementById(Rc);if(!t?.textContent)return null;try{return Wr(JSON.parse(t.textContent))}catch{return null}},Gr=class{catalogVersion;allowedNamespaces;loader;namespaceCache=new Map;fallbackCache=new Map;namespaceInFlight=new Map;bundleInFlight=new Map;listeners=new Set;currentCatalog;displayCatalog;overlay;currentLocale;pendingLocale=null;requiredNamespaces;generation=0;activeLocaleRequest;readyPromise;constructor(t={}){let n=t.seed===void 0?Ic():Wr(t.seed);this.catalogVersion=t.version||n?.version||Vr,this.allowedNamespaces=new Set(Hr(t.namespaces||[...qr])),this.loader=t.load;let r=typeof document>"u"?void 0:document.documentElement?.dataset?.locale;this.currentLocale=n?.locale||_i(r);let a=n?.requiredNamespaces?.length?n.requiredNamespaces:t.namespaces?.length?t.namespaces:[Le];this.requiredNamespaces=this.validateNamespaces(a),this.currentCatalog=kn(this.currentLocale,{}),n&&n.version===this.version&&this.acceptsSeed(n)&&(this.installSeed(n),this.currentCatalog=this.catalogFromSeed(n),this.readyPromise=Promise.resolve(this.currentCatalog))}get version(){return this.catalogVersion}get committed(){return this.currentLocale}get pending(){return this.pendingLocale}get namespaces(){return this.requiredNamespaces}current(){return this.displayCatalog??this.currentCatalog}setInterfaceOverlay(t){this.overlay=t,this.displayCatalog=this.currentLocale==="en"?t?.(this.currentCatalog):void 0,this.notify()}notify(){for(let t of this.listeners)t(this.current());typeof globalThis.dispatchEvent=="function"&&globalThis.dispatchEvent(new CustomEvent(Cc))}adoptSeed(t){let n=Wr(t);if(!n||!this.acceptsSeed(n))return!1;this.generation+=1,this.activeLocaleRequest?.abort(),this.activeLocaleRequest=void 0,n.version!==this.version&&(this.catalogVersion=n.version,this.namespaceCache.clear(),this.fallbackCache.clear()),this.installSeed(n),this.requiredNamespaces=[...n.requiredNamespaces||Object.keys(n.namespaces)];let r=this.catalogFromSeed(n);return this.readyPromise=Promise.resolve(r),this.commit(r,this.generation)}async ready(){if(!this.readyPromise){let t=this.generation,n=this.requiredNamespaces;this.readyPromise=this.ensure(this.currentLocale,n).then(a=>(t===this.generation&&this.commit(a,t),this.currentCatalog));let r=this.readyPromise;r.catch(()=>{this.readyPromise===r&&(this.readyPromise=void 0)})}return this.readyPromise}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}async ensure(t,n,r){if(r?.aborted)throw Ht();if(!Ve(t))throw new Error(`Unsupported UI locale: ${String(t)}`);let a=this.validateNamespaces(n),i=this.version,o=await Promise.all(a.map(async u=>{let d=this.bundleNamespaceFor(a,u),m=this.loadCatalog(t,u,i,r,d);if(t==="ja")return{preferred:await m,fallback:void 0};let p=this.cacheKey(t,u,i),h=this.fallbackCache.get(p);if(this.loader){let[x,S]=await Promise.all([m,h??this.loadCatalog("ja",u,i,r,d)]);return{preferred:x,fallback:S}}let b=await m,v=this.fallbackCache.get(p)??await this.loadCatalog("ja",u,i,r,d);return{preferred:b,fallback:v}}));if(r?.aborted)throw Ht();let s=Ln(o.map(({preferred:u})=>u)),l=Ln(o.flatMap(({fallback:u})=>u?[u]:[])),c={[t]:s,...t==="ja"?{}:{ja:l}};return kn(t,c)}async requestLocale(t,n=this.requiredNamespaces,r){if(!Ve(t))throw new Error(`Unsupported UI locale: ${String(t)}`);let a=this.validateNamespaces(n),i=++this.generation;this.activeLocaleRequest?.abort();let o=new AbortController;this.activeLocaleRequest=o;let s=Ec(r,o);this.pendingLocale=t;try{let l=await this.ensure(t,a,o.signal);return i!==this.generation||o.signal.aborted?!1:(this.requiredNamespaces=a,this.commit(l,i))}catch(l){if(o.signal.aborted&&!r?.aborted)return!1;throw l}finally{s(),o.abort(),this.activeLocaleRequest===o&&(this.activeLocaleRequest=void 0),i===this.generation&&(this.pendingLocale=null)}}commit(t,n=this.generation){return n!==this.generation?!1:(this.currentCatalog=t,this.currentLocale=t.locale,this.pendingLocale=null,this.displayCatalog=this.currentLocale==="en"?this.overlay?.(t):void 0,this.notify(),!0)}acceptsSeed(t){let n=Object.keys(t.namespaces);return n.length>0&&n.every(r=>this.allowedNamespaces.has(r))&&Object.keys(t.fallbacks).every(r=>this.allowedNamespaces.has(r))&&(t.requiredNamespaces||n).every(r=>this.allowedNamespaces.has(r)&&n.includes(r))}installSeed(t){for(let[n,r]of Object.entries(t.namespaces))this.namespaceCache.set(this.cacheKey(t.locale,n),r),t.locale!=="ja"&&this.fallbackCache.set(this.cacheKey(t.locale,n),t.fallbacks[n]||{})}catalogFromSeed(t){let n=Ln(Object.values(t.namespaces)),r=Ln(Object.values(t.fallbacks));return kn(t.locale,{[t.locale]:n,...t.locale==="ja"?{}:{ja:r}})}validateNamespaces(t){if(!t.length)throw new Error("At least one i18n namespace is required");let n=[...Hr([...new Set(t)])];for(let r of n)if(!this.allowedNamespaces.has(r))throw new Error(`Unsupported i18n namespace: ${r}`);return n}cacheKey(t,n,r=this.version){return`${r}:${t}:${n}`}bundleNamespaceFor(t,n){return n!==Le?n:t.find(r=>r!==Le)??Le}acquireShared(t,n,r,a,i){let o=t.get(n);if(!o){let d=new AbortController,m;try{m=Promise.resolve(r(d.signal))}catch(h){m=Promise.reject(h)}o={controller:d,promise:m,waiters:0,settled:!1,invalidated:!1},t.set(n,o);let p=o;m.then(h=>{p.settled=!0,!p.invalidated&&t.get(n)===p&&i?.(h),t.get(n)===p&&t.delete(n)},()=>{p.settled=!0,t.get(n)===p&&t.delete(n)})}let s=o;s.waiters+=1;let l=!1,c=()=>{l||(l=!0,s.waiters-=1,s.waiters===0&&!s.settled&&(s.invalidated=!0,t.get(n)===s&&t.delete(n),s.controller.abort()))};return new Promise((d,m)=>{if(a?.aborted){c(),m(Ht());return}let p=()=>{c(),m(Ht())};a?.addEventListener("abort",p,{once:!0}),s.promise.then(h=>{a?.removeEventListener("abort",p),c(),d(h)},h=>{a?.removeEventListener("abort",p),c(),m(h)})})}loadCatalog(t,n,r=this.version,a,i=n){let o=this.cacheKey(t,n,r),s=this.namespaceCache.get(o);if(s)return Promise.resolve(s);if(a?.aborted)return Promise.reject(Ht());if(this.loader){let u=this.loader;return this.acquireShared(this.namespaceInFlight,o,d=>u(t,n,d).then(m=>rt(m)),a,d=>this.namespaceCache.set(o,d))}if(r===Vr)return Promise.reject(new Error("Default i18n loading requires a versioned SSR seed or explicit version"));let l=`${r}:${t}:${i}`;return this.acquireShared(this.bundleInFlight,l,u=>this.loadNamespaceBundle(t,i,r,u),a,u=>this.cacheNamespaceBundle(u,r)).then(u=>{let d=u.namespaces[n];if(!d)throw new Error(`i18n bundle is missing namespace: ${n}`);return d})}cacheNamespaceBundle(t,n){for(let[r,a]of Object.entries(t.namespaces)){let i=this.cacheKey(t.locale,r,n);this.namespaceCache.set(i,a),t.locale!=="ja"&&this.fallbackCache.set(i,t.fallbacks?.[r]||{})}}loadNamespaceBundle(t,n,r,a){return fetch(`/i18n/${encodeURIComponent(r)}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json`,{signal:a,headers:{accept:"application/json"},cache:"force-cache"}).then(async i=>{if(!i.ok)throw new Error(`i18n ${i.status}`);let o=await i.json();if(!o||typeof o!="object")throw new Error(`Invalid i18n bundle: ${t}/${n}`);let s=o;if(s.version!==r||s.locale!==t||!Array.isArray(s.requiredNamespaces)||!s.namespaces||typeof s.namespaces!="object")throw new Error(`Invalid i18n bundle metadata: ${t}/${n}`);if(s.requiredNamespaces.some(u=>typeof u!="string"||!this.allowedNamespaces.has(u))||!s.requiredNamespaces.includes(n))throw new Error(`Invalid i18n bundle namespace list: ${t}/${n}`);let l={};for(let[u,d]of Object.entries(s.namespaces)){if(!this.allowedNamespaces.has(u))throw new Error(`Unsupported i18n namespace: ${u}`);if(!At(d))throw new Error(`Invalid i18n namespace: ${t}/${u}`);l[u]=rt(d)}if(s.requiredNamespaces.some(u=>!l[u]))throw new Error(`Invalid i18n bundle namespace payload: ${t}/${n}`);let c={};if(s.fallbacks!==void 0){if(!s.fallbacks||typeof s.fallbacks!="object")throw new Error(`Invalid i18n fallback metadata: ${t}/${n}`);for(let[u,d]of Object.entries(s.fallbacks)){if(!this.allowedNamespaces.has(u))throw new Error(`Unsupported i18n fallback namespace: ${u}`);if(!At(d))throw new Error(`Invalid i18n fallback: ${t}/${u}`);c[u]=rt(d)}}return{version:r,locale:t,requiredNamespaces:[...s.requiredNamespaces],namespaces:l,...Object.keys(c).length?{fallbacks:c}:{}}})}},ht,Tc=e=>ht||(ht=new Gr(e),ht.ready().catch(()=>{}),ht),On=()=>ht;var he=(e,t,n=t,r)=>(Ve(e)||(e="en"),Tc().current().text(t,r,n));var Oe=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},Vt=e=>{if(Array.isArray(e))return e.map(Vt).find(i=>i>0)??0;if(!e)return 0;let t=Number(e);if(Number.isFinite(t))return t;let n=String(e),r=/^(\d{4})[/-](\d{1,2})[/-](\d{1,2}) (\d{1,2}):(\d{2})(?::(\d{2}))?$/u.exec(n),a=r?Date.UTC(Number(r[1]),Number(r[2])-1,Number(r[3]),Number(r[4])-9,Number(r[5]),Number(r[6]||0)):Date.parse(n);return Number.isFinite(a)?a:0};function Nn(e,t){let n=Oe(e)._allData??Oe(e).entries??e,r=Array.isArray(n)?Object.fromEntries(n.map(o=>[String(Oe(o).id??Oe(o)._id),Oe(o)])):Oe(n),a=Array.isArray(t)?t:Oe(t)._allData,i={};for(let o of Array.isArray(a)?a:[]){let s=Oe(o),l=Oe(r[String(s.eventId??s._eventId)]),c=Vt(l.startAt??l._startAt),u=s.liveMusicId??s._liveMusicId;if(!c||!u)continue;let d=Math.max(c,Vt(s.stratAt??s.startAt??s._stratAt??s._startAt)),m=String(u);i[m]=Math.min(i[m]??1/0,d)}return i}function Kr(e,t){let n=t[String(e.musicId)];if(!n||e.eventPublishedAt===n)return e;let r=Vt(e.publishedAt);return{...e,eventPublishedAt:n,...Array.isArray(e.difficulty)?{difficulty:e.difficulty.map(a=>Vt(a.publishedAt)<=r?{...a,eventPublishedAt:n}:a)}:{}}}function gs(e,t,n){return{kind:e,id:n??Sn(e,t),publication:Ni(t)}}var Mc=!1,_c;function Jr(e,t,n){if(Lt(e))return!0;if(e&&!We(t)){let r=gs(e,t,n);_c?.set(JSON.stringify(r),r)}return!Mc||We(t)}var cp=new Ti;var fs="",Yr=Ot;function Zr(){if(typeof document>"u"||!document.documentElement)return Ot;let e=document.documentElement.dataset.contentVisibilityPolicy||"";if(e!==fs){fs=e;try{Yr=Di(JSON.parse(e))??Ot}catch{Yr=Ot}}return Yr}function Xr(){let e=typeof document>"u"?void 0:document.documentElement?.dataset.contentGroup;return Bi(e)?e:"guest"}var bs=()=>JSON.stringify([Xr(),Cn(),Zr()]);var hs,Pc,Ac=new Promise(e=>{Pc=e});async function dp(){if(!hs){let e;await Promise.race([Ac,new Promise(t=>{e=setTimeout(t,1500)})]),clearTimeout(e)}return hs?.preparePageData()}function Bn(){return typeof document>"u"||!document.documentElement||typeof location>"u"?!1:Ir(Rn())}function ys(e,t){return We(e,t)}function Qr(e){let t=e&&typeof e=="object"&&!Array.isArray(e)?e:void 0,n=t&&Mr(t);return typeof document>"u"||!document.documentElement?Jr(n,t??{}):n?Lc(n,t):Bn()||ys(e,Date.now())}function Lc(e,t,n){let r=t&&typeof t=="object"&&!Array.isArray(t)?t:{},a=Tr(e);if(Lt(a))return!0;let i=a?Zr().types[a]??xn:xn;if(typeof document>"u"||!document.documentElement)return Jr(a,r,n);if(ys(t,Date.now()))return!0;if(document.documentElement.dataset.contentFunctional==="1"&&(document.documentElement.dataset.contentVisibilityPending==="1"||!document.documentElement.dataset.contentVisibilityPolicy))return!1;if(i.allowOverride&&Bn())return!0;if(!i.groups.includes(Xr()))return!1;let o=n??(a?Sn(a,r):"");return i.hide.includes(o)?!1:i.show.includes(o)||i.mode==="visible"?!0:i.mode==="spoiler"&&Cn()}var ea=Dr,Dn;function vs(){try{return import.meta.env?.SSR||typeof document>"u"?void 0:jr(document.cookie)}catch{return}}function ta(e){if(!(import.meta.env?.SSR||typeof document>"u"||Dn===e))try{jr(document.cookie)!==e&&(document.cookie=`${Dr}=${e}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol==="https:"?"; Secure":""}`),Dn=e}catch{}}function ks(e){return e==="jp"?"jp":"intl"}function Oc(){let e=typeof location>"u"?void 0:Rn(),t=e&&qt(e.pathname);if(t)return ws(t);let n=e?.pathname.endsWith("/team-builder/")&&e.searchParams.get("appBox")==="1",r=e?.searchParams.get("server");if(!n&&zt(r))return ws(r);try{let a=localStorage.getItem(ea),i=ks(a??Dn??vs());return a&&a!==i&&localStorage.setItem(ea,i),ta(i),i}catch{let a=Dn??vs()??"intl";return ta(a),a}}function Nc(){return Oc()}function ws(e){let t=ks(e);try{localStorage.setItem(ea,t)}catch{}return ta(t),t}function L(e,t=24){return g`
    <svg class="material-icon" width=${t} height=${t} aria-hidden="true">
      <use href=${`/icons.svg#${e}`}></use>
    </svg>
  `}function Bp(e,t){return g`
    <span
      class="game-glyph"
      aria-hidden="true"
      style=${`${t===void 0?"":`--game-glyph-size:${t}px;`}mask-image:url("${e}");-webkit-mask-image:url("${e}")`}
    ></span>
  `}function $s(e,t){return e?g`
        <img class="rarity-icon" src=${e} alt=${t} title=${t} width="24" height="24" decoding="async" />
      `:g`
        <span class="rarity-icon" role="img" aria-label=${t||f} title=${t||f}></span>
      `}var{I:Bc}=Y,xs=e=>e,Rs=e=>e===null||typeof e!="object"&&typeof e!="function";var Wt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,jn=e=>e?._$litType$?.h!=null;var bt=e=>e.strings===void 0,Ss=()=>document.createComment(""),Ne=(e,t,n)=>{let r=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){let i=r.insertBefore(Ss(),a),o=r.insertBefore(Ss(),a);n=new Bc(i,o,e,e.options)}else{let i=n._$AB.nextSibling,o=n._$AM,s=o!==e;if(s){let l;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(l=e._$AU)!==o._$AU&&n._$AP(l)}if(i!==a||s){let l=n._$AA;for(;l!==i;){let c=xs(l).nextSibling;xs(r).insertBefore(l,a),l=c}}}return n},Ge=(e,t,n=e)=>(e._$AI(t,n),e),Dc={},at=(e,t=Dc)=>e._$AH=t,Gt=e=>e._$AH,Fn=e=>{e._$AR(),e._$AA.remove()},Cs=e=>{e._$AR()};var Un=me(class extends Ie{constructor(e){if(super(e),e.type!==q.PROPERTY&&e.type!==q.ATTRIBUTE&&e.type!==q.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!bt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ee||t===f)return t;let n=e.element,r=e.name;if(e.type===q.PROPERTY){if(t===n[r])return ee}else if(e.type===q.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return ee}else if(e.type===q.ATTRIBUTE&&n.getAttribute(r)===t+"")return ee;return at(e),t}});var Es=me(class extends Ie{render(e){return e}update(e,[t]){return e.type===q.PROPERTY&&e.element.matches(":focus-within")?ee:Un(t)}});function yt(e){let t=["icon-button",e.variant&&e.variant!=="standard"?`icon-button--${e.variant}`:"",e.toggle?"icon-button--toggle":"",e.className||""].filter(Boolean).join(" "),n=g`
    <button
      class=${t}
      type="button"
      aria-label=${e.label}
      title=${e.shortcut?`${e.label} (${e.shortcut})`:e.label}
      aria-pressed=${e.pressed===void 0?f:String(e.pressed)}
      ?disabled=${e.disabled}
      @click=${e.onClick}
    >
      ${e.content??L(e.icon,e.size??24)}
    </button>
  `;return e.badge?g`
        <span class="badge-anchor">
          ${n}
          <span class="badge" aria-hidden="true">${e.badge>99?"99+":e.badge}</span>
        </span>
      `:n}function ug(e){let t=(n,r)=>{let a=n.currentTarget;if(!r&&e.commitOnChange)return;if(!a.value.trim()){e.nullable?e.onInput(null):r&&(a.value=String(e.value));return}let i=Number(a.value);if(!Number.isFinite(i))return;let o=Math.min(e.max??1/0,Math.max(e.min??-1/0,i));e.onInput(o),(r||o!==i)&&(a.value=String(o))};return g`
    <md-outlined-text-field class="number-field" type="number" label=${e.label} aria-label=${e.ariaLabel??e.label}
      min=${e.min??f} max=${e.max??f} step=${e.step??1}
      suffix-text=${e.suffix??f} inputmode=${e.step===1||e.step===void 0?"numeric":"decimal"}
      .value=${Es(e.value===null?"":String(e.value))}
      ?disabled=${e.disabled}
      ?error=${e.invalid} aria-invalid=${e.invalid?"true":f}
      @input=${n=>t(n,!1)} @change=${n=>t(n,!0)}>
    </md-outlined-text-field>
  `}function Is(e,t,n,r){return a=>{let i={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1},o=Math.max(0,e.indexOf(t)),s=a.key in i?(o+i[a.key]+e.length)%e.length:a.key==="Home"?0:a.key==="End"?e.length-1:-1;if(s<0||!e.length)return;a.preventDefault();let l=a.currentTarget,c=l.querySelectorAll('[role="tab"], [role="radio"], [role="checkbox"]'),u=i[a.key]??(a.key==="End"?-1:1),d=0;for(;c[s]?.matches(":disabled, [aria-disabled=true]")&&d<e.length;)s=(s+u+e.length)%e.length,d++;d===e.length||s===o&&e[o]===t||(n(e[s]),requestAnimationFrame(()=>l.querySelectorAll('[role="tab"], [role="radio"], [role="checkbox"]')[s]?.focus(r)))}}function V(e){let t=e.options.find(r=>r.value===e.value)??e.options[0],n=["segmented",e.iconOnly?"segmented--icon":"",e.grow===!1?"segmented--compact":e.grow?"segmented--grow":""].filter(Boolean).join(" ");return g`
    <div
      class=${n}
      data-app-bar-switch=${e.appBarSwitch??f}
      role="radiogroup"
      aria-label=${e.label}
      @keydown=${Is(e.options.map(r=>r.value),e.value,r=>{e.options.find(a=>a.value===r)?.disabled||e.onSelect(r)})}
    >
      ${e.options.map(r=>g`
          <button
            type="button"
            role="radio"
            aria-checked=${String(r.value===e.value)}
            aria-label=${e.iconOnly?r.label:f}
            title=${r.shortcut?`${r.label} (${r.shortcut})`:e.iconOnly?r.label:f}
            tabindex=${r===t?"0":"-1"}
            ?disabled=${r.disabled}
            @click=${()=>e.onSelect(r.value)}
          >
            ${r.leading??(r.icon?L(r.icon,20):f)}
            ${e.iconOnly?f:g`
                    <span>${r.label}</span>
                  `}
            ${e.showShortcuts&&r.shortcut?g`<kbd>${r.shortcut.split(" / ")[0]}</kbd>`:f}
          </button>
        `)}
    </div>
  `}function Ts(e){return g`
    <button
      class=${e.imageOnly?"chip chip--rarity":"chip"}
      type="button"
      role="checkbox"
      aria-checked=${String(e.selected)}
      aria-label=${e.imageOnly?e.label:f}
      title=${e.imageOnly?e.label:f}
      @click=${e.onToggle}
    >
      ${e.selected?L("check",18):e.image&&!e.imageOnly?g`
                <span class="chip__avatar"><img src=${e.image} alt="" loading="lazy" decoding="async" /></span>
              `:f}
      <span class="chip__label">
        ${e.imageOnly?$s(e.image||"",e.label):e.label}
      </span>
      ${e.count===void 0?f:g`
              <span class="chip__count">${e.count}</span>
            `}
    </button>
  `}function mg(e,t,n,r=e){return g`
    <button class="chip chip--input" type="button" @click=${n} aria-label=${`${t}: ${e}`}>
      <span class="chip__label">${r}</span>
      <span class="chip__remove">${L("close",18)}</span>
    </button>
  `}var _s="haneoka:song-display:v1",Ms="haneoka:song-display",Kt;function jc(){if(Kt!==void 0)return Kt;try{let e=JSON.parse(localStorage.getItem(_s)||"{}").forceJapaneseTitles;return Kt=typeof e=="boolean"?e:null}catch{return null}}var Fc=e=>e!=="en"&&e!=="ko";function zn(e){return jc()??Fc(e)}function fg(e){let t=r=>{Kt=r.detail,e()},n=r=>{(r.key===_s||r.key===null)&&(Kt=void 0,e())};return addEventListener(Ms,t),addEventListener("storage",n),()=>{removeEventListener(Ms,t),removeEventListener("storage",n)}}function na(e,t){let n=zn(t)?"ja":t,r=[e.musicTitle,e.title,e.name].map(a=>_e(a,n)).find(a=>a.text)??_e(void 0,n);return{...r,text:r.text||String(e.musicId||e.id||"\u2014")}}var As=["liveScoreRankGroup","scoreRankRewardGroup","comboRewardGroup"];function Ps(e,t){let n={...J(t)},r=J(n.raw),a=n.bestMusicTagIds??r._bestMusicTagIDs;if(Array.isArray(a)&&(n.bestMusicTagIds=a),e==="songs"){for(let i of As)n[i]===void 0&&Number.isSafeInteger(r[`_${i}`])&&(n[i]=r[`_${i}`]);Array.isArray(n.difficulty)&&(n.difficulty=n.difficulty.map(i=>{let o={...J(i)};if(!Number.isSafeInteger(o.scoreId)){let s=o.difficultyName,l=typeof s=="string"?r[`_${s}ID`]:void 0;Number.isSafeInteger(l)&&Number(l)>0&&(o.scoreId=l)}return o}))}return n}async function Ls(e,t,n){let r={...e};for(let a of["cards","support-cards","songs"]){let i=Object.fromEntries(Object.entries(J(e[a])).map(([s,l])=>[s,Ps(a,l)])),o=Object.entries(i).filter(([,s])=>{let l=J(s);if(a==="support-cards"){let c=J(l.raw);return["supportSkillId01","supportSkillId02","gekisouSupportSkillId01","gekisouSupportSkillId02"].some(u=>!Number.isSafeInteger(l[u]??c[`_${u}`]))}return!Array.isArray(l.bestMusicTagIds)||a==="songs"&&(As.some(c=>!Number.isSafeInteger(l[c]))||Array.isArray(l.difficulty)&&l.difficulty.some(c=>!Number.isSafeInteger(J(c).scoreId)))});for(let s=0;s<o.length;s+=4){n?.throwIfAborted();let l=await Promise.all(o.slice(s,s+4).map(async([c,u])=>{let d=J(await t(a,c));if(!Object.keys(d).length)throw new Error(`Runtime entity missing:${a}/${c}`);let m=Ps(a,{...J(u),...d});return[c,m]}));n?.throwIfAborted();for(let[c,u]of l)i[c]=u}r[a]=i}return r}var Os=e=>{if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(e))throw new TypeError("Invalid resource server")};function ra(e,t){let n=e.headers.get("x-haneoka-release-id")||"",r=e.headers.get("x-haneoka-source-id")||"";if(!/^r-[a-f0-9]{20}$/u.test(n)||!/^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/u.test(r))throw new Error("Invalid team data release identity");return{server:t,releaseId:n,sourceId:r}}async function Jt(e,t,n=fetch){Os(e),t?.throwIfAborted();let r=await n(`/api/v1/servers/${encodeURIComponent(e)}/release?projection=identity`,{method:"HEAD",cache:"no-store",signal:t});if(!r.ok)throw new Error(`Team data release unavailable: ${r.status}`);let a=ra(r,e);return t?.throwIfAborted(),a}async function $g(e,t,n=fetch,r){Os(e);let a=`/api/v1/servers/${encodeURIComponent(e)}/`;t?.throwIfAborted();let i=r??await Jt(e,t,n).catch(()=>null),o=await n(`/api/v1/team-builder/${encodeURIComponent(e)}${i?`?release=${encodeURIComponent(i.releaseId)}&v=4`:"?v=4"}`,i?{signal:t}:{cache:"no-store",signal:t});if(o.ok){let b=ra(o,e),v=await o.json();if(v.schema!=="haneoka-team-builder-data-v1"||v.identity?.server!==e||v.identity.releaseId!==b.releaseId||v.identity.sourceId!==b.sourceId)throw new Error("Team data DTO identity mismatch");if(!Object.hasOwn(v.liveTools,"judgementAreaOffsets")){let x=await n(`${a}options?release=${encodeURIComponent(b.releaseId)}`,{signal:t});if(!x.ok)throw new Error(`Native input options unavailable: ${x.status}`);let S=ra(x,e);if(S.releaseId!==b.releaseId||S.sourceId!==b.sourceId)throw new Error("Native input options release mismatch");v.liveTools={...v.liveTools,judgementAreaOffsets:Ei(await x.json())}}return v.identity=Ci(v.identity),t?.throwIfAborted(),v}if(o.status!==404)throw new Error(`Team data DTO unavailable: ${o.status}`);let{releaseId:s,sourceId:l}=r??await Jt(e,t,n),c=["cards","support-cards","characters","bands","band-items","songs","events","progression","leader-skills","skills","gekisou-skills","support-skills","gekisou-support-skills","skill-reference","live-tools","options","gekisou"],u={};for(let b=0;b<c.length;b+=4){t?.throwIfAborted();let v=await Promise.all(c.slice(b,b+4).map(async x=>{let S=await n(`${a}${x}?release=${encodeURIComponent(s)}`,{signal:t,cache:"no-store"});if(!S.ok)throw new Error(`Team data collection unavailable: ${x}/${S.status}`);if(S.headers.get("x-haneoka-release-id")!==s||S.headers.get("x-haneoka-source-id")!==l)throw new Error("Team data release mismatch");let y=await S.json();return t?.throwIfAborted(),[x,y]}));for(let[x,S]of v)u[x]=S}let d={...J(u.events)},m=Object.keys(J(J(u.events).entries)),p={...J(d.entries)};for(let b=0;b<m.length;b+=4){let v=await Promise.all(m.slice(b,b+4).map(async x=>{let S=await n(`${a}events/${encodeURIComponent(x)}?release=${encodeURIComponent(s)}`,{signal:t,cache:"no-store"});if(!S.ok)throw new Error(`Team event detail unavailable:${x}/${S.status}`);if(S.headers.get("x-haneoka-release-id")!==s||S.headers.get("x-haneoka-source-id")!==l)throw new Error("Team event detail release mismatch");let y=await S.json();return t?.throwIfAborted(),[x,{...J(p[x]),...J(y)}]}));for(let[x,S]of v)p[x]=S}u.events={...d,entries:p};let h=await Ls(u,async(b,v)=>{let x=await n(`${a}${b}/${encodeURIComponent(v)}?release=${encodeURIComponent(s)}`,{signal:t,cache:"no-store"});if(!x.ok)throw new Error(`Runtime entity unavailable:${b}/${v}/${x.status}`);if(x.headers.get("x-haneoka-release-id")!==s||x.headers.get("x-haneoka-source-id")!==l)throw new Error("Runtime entity release mismatch");return x.json()},t);return Ii({server:e,releaseId:s,sourceId:l},h)}var Ns={cards:{ids:["cardId","id"]},"support-cards":{ids:["supportCardId","id"]},songs:{ids:["musicId","songId","id"]},"song-meta":{ids:["musicId","id"]},characters:{ids:["characterId","id"]},bands:{ids:["bandId","id"]},comics:{ids:["comicId","id"]},stamps:{ids:["stampId","id"]},stickers:{ids:["stickerId","id"],rows:"entries"},backgrounds:{ids:["backgroundId","id"],rows:"entries"},"chat-customizations":{ids:["id"],rows:"entries",opaque:!0},"band-items":{ids:["bandItemId","itemId","id"],rows:"items"},items:{ids:["itemId","id"],rows:"items"},events:{ids:["id"],rows:"entries"},"real-lives":{ids:["id"],rows:"entries",opaque:!0},gacha:{ids:["id"],rows:"entries"},"login-campaigns":{ids:["id"],rows:"entries"},shop:{ids:["id"],rows:"entries"},exchange:{ids:["id"],rows:"entries"},circle:{ids:["id"],rows:"entries"},challenge:{ids:["id"],rows:"entries"},passes:{ids:["id"],rows:"entries",opaque:!0},missions:{ids:["id"],rows:"entries",opaque:!0},"tgw-card":{ids:["id"],rows:"entries"},live2d:{ids:["live2dKey","key","id"],opaque:!0},spine:{ids:["id"],rows:"models",opaque:!0},stories:{ids:["storyId","id"],rows:"episodes",opaque:!0},help:{ids:["helpSubcategoryId","id"],rows:"categories"},"help-tips":{ids:["tipId","id"],rows:"loadingTips",api:"help"},"anon-tokyo/characters":{ids:["id"],rows:"characters",api:"anon-tokyo",opaque:!0},"anon-tokyo/outfits":{ids:["id"],rows:"goods.reloading",api:"anon-tokyo",opaque:!0},"anon-tokyo/shop":{ids:["id"],rows:"shop.stores",api:"anon-tokyo",opaque:!0},"anon-tokyo/goods":{ids:["id"],rows:"goods.items",api:"anon-tokyo",opaque:!0},"anon-tokyo/decorations":{ids:["id"],rows:"shop.decorations",api:"anon-tokyo",opaque:!0},"anon-tokyo/staff":{ids:["id"],rows:"staffing.clerks",api:"anon-tokyo",opaque:!0},"anon-tokyo/customers":{ids:["id"],rows:"staffing.customers",api:"anon-tokyo",opaque:!0},"anon-tokyo/tasks":{ids:["id"],rows:"tasks.main",api:"anon-tokyo",opaque:!0},"anon-tokyo/guide":{ids:["id"],rows:"guides.steps",api:"anon-tokyo",opaque:!0},"anon-tokyo/fever":{ids:["id"],rows:"stages.music",api:"anon-tokyo",opaque:!0}},Sg=Object.keys(Ns);var Uc=e=>Ns[e],Bs=e=>Uc(e).api||e;var zc=e=>!!e&&typeof e=="object"&&!Array.isArray(e),aa=class{constructor(t,n={}){this.fetcher=t;this.maxEntries=n.maxEntries??48,this.maxBytes=n.maxBytes??16*1024*1024,this.identityFreshMs=n.identityFreshMs??5e3,this.identityStaleMs=n.identityStaleMs??3e4,this.now=n.now??Date.now;for(let r of[this.maxEntries,this.maxBytes,this.identityFreshMs,this.identityStaleMs])if(!Number.isSafeInteger(r)||r<0)throw new RangeError("Invalid public cache limit");if(this.identityStaleMs<this.identityFreshMs)throw new RangeError("Invalid identity cache lifetime")}documents=new Map;pending=new Map;identities=new Map;bytes=0;maxEntries;maxBytes;identityFreshMs;identityStaleMs;now;observe(t,n,r){r?.throwIfAborted();let a=this.pending.get(t);if(!a||a.controller.signal.aborted){if(this.pending.size>=128)throw new Error("Public data request budget exceeded");let o=new AbortController,s={controller:o,observers:0,settled:!1,promise:Promise.resolve()};s.promise=Promise.resolve().then(()=>n(o.signal)).finally(()=>{s.settled=!0,this.pending.get(t)===s&&this.pending.delete(t)}),this.pending.set(t,s),a=s}let i=a;return i.observers++,new Promise((o,s)=>{let l=!1,c=()=>l?!1:(l=!0,r?.removeEventListener("abort",u),i.observers--,!i.settled&&i.observers===0&&i.controller.abort(),!0),u=()=>{c()&&s(r.reason)};r?.addEventListener("abort",u,{once:!0}),r?.aborted&&u(),i.promise.then(d=>{if(c())try{o(structuredClone(d))}catch(m){s(m)}},d=>{c()&&s(d)})})}store(t,n,r){if(!this.maxEntries||r>this.maxBytes)return;let a=this.documents.get(t);for(a&&(this.bytes-=a.bytes,this.documents.delete(t)),this.documents.set(t,{value:n,bytes:r}),this.bytes+=r;this.documents.size>this.maxEntries||this.bytes>this.maxBytes;){let i=this.documents.entries().next().value;if(!i)break;this.documents.delete(i[0]),this.bytes-=i[1].bytes}}async readIdentity(t,n,r=!1){if(!ft([t]).length)throw new Error("Source access is unavailable");if(n?.throwIfAborted(),!nt(t)){let l=await Jt(t,n,this.fetcher);if(n?.throwIfAborted(),!ft([t]).length)throw new Error("Source access is unavailable");return{...l,server:t}}let a=this.identities.get(t),i=a?this.now()-a.observedAt:1/0,o=async l=>{let c=await Jt(t,l,this.fetcher);l.throwIfAborted();let u={...c,server:t};return this.identities.set(t,{value:u,observedAt:this.now()}),u},s=JSON.stringify(["current",t]);if(a&&i>=0&&i<this.identityStaleMs){if(i>=this.identityFreshMs){if(r)return await this.observe(s,o,n);this.observe(s,o).catch(()=>{})}return structuredClone(a.value)}return await this.observe(s,o,n)}async readDocument(t,n,r,a,i){if(!ft([n.server]).length)throw new Error("Source access is unavailable");a?.throwIfAborted();let o=`/api/v1/servers/${n.server}/${t==="live-tools"?t:Bs(t)}${r===void 0?"":`/${encodeURIComponent(r)}`}`,s=new URLSearchParams({release:n.releaseId});for(let m of i||[])s.append("id",m);let l=JSON.stringify([bs(),Bn(),n.server,n.releaseId,n.sourceId,o,i||[]]),c=nt(n.server),u=c?this.documents.get(l):void 0;if(u){this.documents.delete(l),this.documents.set(l,u);let m=structuredClone(u.value);return a?.throwIfAborted(),m}let d=async m=>{let p=this.fetcher,h=await p(`${o}?${s}`,{signal:m,...c?{}:{cache:"no-store"}});if(!h.ok)throw new Error(`Cross-server data unavailable:${o}/${h.status}`);if(h.headers.get("x-haneoka-release-id")!==n.releaseId||h.headers.get("x-haneoka-source-id")!==n.sourceId)throw new Error("Cross-server data release mismatch");let b=await h.text();m?.throwIfAborted();let v=JSON.parse(b);if(!zc(v)&&!(r===void 0&&Array.isArray(v)))throw new Error("Cross-server data must be an object");if(r!==void 0&&!Object.keys(v).length)throw new Error("Cross-server entity is empty");if(m?.throwIfAborted(),c)this.store(l,v,new TextEncoder().encode(b).byteLength);else if(!ft([n.server]).length)throw new Error("Source access is unavailable");return v};return c?this.observe(l,d,a):d(a)}async readEventSongReleases(t,n){if(!ft([t.server]).length)throw new Error("Source access is unavailable");n?.throwIfAborted();let r=JSON.stringify(["event-song-releases",t]),a=nt(t.server)?this.documents.get(r):void 0;return a?structuredClone(a.value):await this.observe(r,async i=>{let o=new URLSearchParams({release:t.releaseId,v:"4"}),s=this.fetcher,l=await s(`/api/v1/servers/${t.server}/song-release-times?release=${t.releaseId}`,{signal:i});if(l.status===404&&(await l.body?.cancel(),l=await s(`/api/v1/team-builder/${t.server}?${o}`,{signal:i})),!l.ok)throw new Error("Event songs are unavailable");let c=await l.json();if(c.identity.server!==t.server||c.identity.releaseId!==t.releaseId||c.identity.sourceId!==t.sourceId)throw new Error("Event song release mismatch");let u=c.releases??Nn(c.events,c.challengeMusicTable?.rows);return nt(t.server)&&this.store(r,u,JSON.stringify(u).length),u},n)}readCollection(t,n,r){return this.readDocument(t,n,void 0,r)}readEntity(t,n,r,a){return this.readDocument(t,n,r,a)}readEntities(t,n,r,a){return this.readDocument(t,n,void 0,a,r)}},Ds=new WeakMap;function js(e=fetch){let t=Ds.get(e);return t||(t=new aa(e),Ds.set(e,t)),t}function qc(e){let t=new URL(e,"https://catalog.invalid");return/^\/api\/v1\/servers\/[^/]+\/ui-marks$/u.test(t.pathname)?(t.searchParams.set("projection",String(2)),/^[A-Za-z][A-Za-z\d+.-]*:/u.test(e)?t.toString():`${t.pathname}${t.search}${t.hash}`):e}function Fs(e){return{memberRanks:Array.from({length:6},(t,n)=>e(`CardRank${n}.png`)),supportRanks:Array.from({length:6},(t,n)=>e(`snaplimit_${n}.png`)),training:e("SpecialTraining.png")}}var Hc="haneoka.date-format.v3";var oa={order:["auto","mdy","dmy","ymd"],month:["short","long","numeric","2-digit"],day:["numeric","2-digit","ordinal"],separator:["/","-","."," "],year:["auto","always","never"],yearDigits:["numeric","2-digit"],weekday:["none","short","long","narrow"],cycle:["h23","h12"],hour:["2-digit","numeric"],seconds:["off","on"],zoneName:["none","short","shortOffset","long"]},Vc={...Object.fromEntries(Object.entries(oa).map(([e,t])=>[e,t[0]])),zone:"local"};var Wc=(e,t)=>oa[e].includes(t);function Gc(e){if(e==="local")return!0;if(typeof e!="string"||!e)return!1;try{return new Intl.DateTimeFormat("en",{timeZone:e}),!0}catch{return!1}}var ia;function Kc(){if(ia)return ia;let e={};try{e=JSON.parse(globalThis.localStorage?.getItem(Hc)||"{}")||{}}catch{}let t={...Vc};for(let n of Object.keys(oa))Wc(n,e[n])&&(t[n]=e[n]);return Gc(e.zone)&&(t.zone=e.zone),ia=t,t}var Yt=new Map;function la(e,t){let n=`${e}|${JSON.stringify(t)}`,r=Yt.get(n);return r||(Yt.size>=128&&Yt.delete(Yt.keys().next().value),r=new Intl.DateTimeFormat(e,t),Yt.set(n,r)),r}function Jc(e){if(e==null||e==="")return null;let t=e instanceof Date?e:new Date(typeof e=="string"&&/^\d+$/u.test(e)?Number(e):e);return Number.isFinite(t.getTime())&&t.getTime()>0?t:null}function Yc(e,t){let n={...Kc(),...t.preferences},r=t.weekday===!1?"none":t.weekday&&n.weekday==="none"?"short":n.weekday;return{...n,locale:e,order:n.order==="auto"?e.startsWith("en")?"mdy":"ymd":n.order,weekday:r,seconds:t.seconds===void 0?n.seconds:t.seconds?"on":"off",year:t.year==="never"||t.year==="always"?t.year:n.year,timeZone:t.timeZone??(n.zone==="local"?void 0:n.zone),instant:t.timeZone===void 0,time:t.time===!0}}function sa(e,t){let n=la("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),r=a=>n.find(i=>i.type===a)?.value??"";return{year:r("year"),month:r("month"),day:r("day")}}function Zc(e,t){if(t.year!=="auto")return t.year==="always";let n=sa(new Date,t.timeZone).year;return e.some(r=>sa(r,t.timeZone).year!==n)}function Xc(e,t){return la(t.locale,{timeZone:t.timeZone,hour:t.hour,minute:"2-digit",...t.seconds==="on"?{second:"2-digit"}:{},...t.instant&&t.zoneName!=="none"?{timeZoneName:t.zoneName}:{},hourCycle:t.cycle}).format(e)}var Qc=/^(?:ja|zh)/u,Us=new Map,ed={one:"st",two:"nd",few:"rd",other:"th"};function td(e,t,n){let{locale:r,order:a,timeZone:i}=t,o=d=>la(r,{timeZone:i,...d}).format(e),s=sa(e,i),l=t.yearDigits==="2-digit"?s.year.slice(-2):s.year,c;if(t.month==="numeric"||t.month==="2-digit"){let d=(v,x)=>x?v:String(Number(v)),m=d(s.month,t.month==="2-digit"),p=d(s.day,t.day==="2-digit"),h=n?l:"";c=(a==="mdy"?[m,p,h]:a==="dmy"?[p,m,h]:[h,m,p]).filter(Boolean).join(t.separator)}else{let d=o({month:t.month}),m=o({day:t.day==="2-digit"?"2-digit":"numeric"});if(t.day==="ordinal"&&r.startsWith("en")){let v=Us.get(r);v||Us.set(r,v=new Intl.PluralRules(r,{type:"ordinal"})),m=`${Number(s.day)}${ed[v.select(Number(s.day))]??"th"}`}let p=n?o({year:t.yearDigits}):"",h=Qc.test(r),b=v=>v.filter(Boolean).join(h?"":" ");a==="ymd"?c=b([p,d,m]):a==="dmy"?c=b([m,d,p]):h?c=b([d,m,p&&` ${p}`]):c=`${d} ${m}${p?`, ${p}`:""}`}if(t.weekday==="none")return c;let u=o({weekday:t.weekday});return r.startsWith("en")?`${u}, ${c}`:`${c} ${u}`}function nd(e,t,n){let r=td(e,t,n);return t.time?`${r} ${Xc(e,t)}`:r}function rd(e,t,n={}){let r=Jc(t);if(!r)return"";let a=Yc(e,n);return nd(r,a,Zc([r],a))}var ad=["ja","en","zh-TW","zh-CN","ko"];function id(e="ja"){let t=On()?.committed;if(t)return t;let n="";try{n=localStorage.getItem("haneoka.locale")||""}catch{}let r=(typeof document>"u"?"":document.documentElement.dataset.locale)||n||e;return ad.includes(r)?r:e}function Be(e,t){return he(e,t,t)}var Zt=new Map;function zs(e,t,n="conjunction"){let r=e.map(a=>String(a||"").trim()).filter(Boolean);if(r.length<2)return r[0]||"";try{let a=`${t}:${n}`,i=Zt.get(a);return i||(i=new Intl.ListFormat(t,{style:"long",type:n}),Zt.size>=32&&Zt.delete(Zt.keys().next().value),Zt.set(a,i)),i.format(r)}catch{return r.join(", ")}}var vt=class extends Error{status;body;constructor(t,n,r=`HTTP ${t}`){super(r),this.name="JsonResponseError",this.status=t,this.body=n}};async function qs(e,t){let n=new Headers(t?.headers);n.has("accept")||n.set("accept","application/json");let r=new AbortController,a=t?.signal,i=()=>r.abort(a?.reason);a?.aborted?i():a?.addEventListener("abort",i,{once:!0});let o,s=()=>{clearTimeout(o),o=setTimeout(()=>r.abort(new DOMException(Be(id(),"requestTimedOut"),"TimeoutError")),3e4)};s();let l;try{let c=await fetch(e,{...t,headers:n,signal:r.signal});c.ok||(l=c.status);let u=c.body?.getReader(),d=new TextDecoder,m="";if(u)try{for(;;){s();let{done:h,value:b}=await u.read();if(h)break;m+=d.decode(b,{stream:!0})}m+=d.decode()}finally{u.releaseLock()}else m=await c.text();let p;try{p=m||c.status!==204?JSON.parse(m):null}catch(h){throw c.ok?h:new vt(c.status,null)}if(!c.ok){let h=p&&typeof p=="object"?p:{},b=h.error&&typeof h.error=="object"?h.error:{};throw new vt(c.status,p,String(b.message||h.message||`HTTP ${c.status}`))}return p}catch(c){throw a?.aborted?a.reason:l!==void 0?c instanceof vt&&c.status===l?c:new vt(l,null):r.signal.aborted?r.signal.reason:c}finally{clearTimeout(o),a?.removeEventListener("abort",i)}}var sd={Combo:{key:"gekisouMissionCombo",fallback:"COMBO",icon:"combo"},Luck:{key:"gekisouMissionLuck",fallback:"LUCK",icon:"luck"},JustCount:{key:"gekisouMissionJustCount",fallback:"JUST",icon:"just"}};function Hs(e){let t=typeof e=="number"||typeof e=="string"&&e.trim()?Number(e):NaN,n=Number.isInteger(t)?["","Combo","Luck","JustCount"][t]:String(e||"");return sd[n]}function Vs(e,t){let n=e&&typeof e=="object"?e:{},r=Array.isArray(n.outputs)?n.outputs:[],a={};for(let i of r){if(!i||typeof i!="object")continue;let o=i,s=String(o.path||""),l=/^runtime\/unity\/Assets\/AddressableResources\/Live\/Images\/Atlas\/LiveAtlas\.spriteatlasv2\/Icon_gekisou_(combo|luck|just)--Sprite-?-?\d+\.png$/u.exec(s);o.type==="Sprite"&&l&&(a[l[1]]=`/runtime/${t}/${s.slice(8)}`)}return a}function wt(e){if(e.type==="buttons")return g`
    <div class="tb-choice stack stack--tight">
      <span class="tb-field__label">${e.label}</span>
      ${V(e)}
    </div>
  `;let t=e.options.find(n=>n.value===e.value);return g`
    <md-outlined-select
      label=${e.label}
      .value=${e.value}
      ?disabled=${e.options.every(n=>n.disabled)}
      @change=${n=>e.onSelect(n.target.value)}
    >
      ${t?.leading?g`<span slot="leading-icon" class="tb-game-icon">${t.leading}</span>`:f}
      ${e.options.map(n=>g`
        <md-select-option value=${n.value} ?disabled=${n.disabled}>
          ${n.leading?g`<span slot="start" class="tb-game-icon">${n.leading}</span>`:f}
          <div slot="headline">${n.label}</div>
        </md-select-option>
      `)}
    </md-outlined-select>
  `}var kt=e=>[...new Set((Array.isArray(e)?e:e===void 0?[]:[e]).map(Number).filter(t=>Number.isSafeInteger(t)&&t>0))],Xt=e=>(Array.isArray(e)?e:[e]).filter(t=>typeof t=="string"&&!!t.trim()),it=e=>e.normalize("NFKC").replace(/\s+/gu,"").toLocaleLowerCase("ja"),Ws=e=>Xt(e).flatMap(t=>t.split(/\s*[×＋+&＆]|\s+x\s+|\s+(?:feat\.?|with)\s+/iu).map(n=>n.trim()).filter(Boolean)),od=["\u9AD8\u677E\u71C8","\u9577\u5D0E\u305D\u3088","\u690E\u540D\u7ACB\u5E0C","\u82E5\u8449\u7766","\u8C4A\u5DDD\u7965\u5B50"],Gs=new WeakMap;function Ks(e){let t=(n,r)=>{if(n instanceof Map)return n;let a=Array.isArray(n)?n:Object.values(n??{});return new Map(a.map(i=>[Number(i[r]),i]))};return{...e,bands:t(e.bands,"bandId"),characters:t(e.characters,"characterId")}}function Js(e,t){let n=Gs.get(t)??new WeakMap,r=n.get(e);if(r)return r;Gs.set(t,n);let a=new Set,i=new Set,o=new Set,s=new Map,l=[],c=[],u=new Set,d=[],m=$=>t.game==="our-notes"?$.official!==!1:$.official===!0,p=($,w)=>{let E=[...w==="band"?t.bands:t.characters],M=E.filter(([,A])=>Xt(w==="band"?A.bandName??A.name:A.characterName??A.name).flatMap(j=>w==="character"?j.split(/[／/]/u):[j]).some(j=>it(j)===it($)));return(M.length||w==="band"?M:E.filter(([,A])=>[A.firstName,A.nickname].flatMap(Xt).some(j=>it(j)===it($)))).map(([A])=>A)},h=($,w=!0,E=w)=>{let M=t.characters.get($);if(M&&(E&&!o.has($)&&l.push(M.characterName??M.name),o.add($),w)){E&&i.add($);let P={key:`${t.game}:${t.server}:${t.sourceId??""}:${$}`,provider:t.game,server:t.server,sourceId:t.sourceId,id:$,name:M.characterName??M.name,image:String(M.faceImage??M.thumbnailImage??"")};s.set(P.key,P)}},b=$=>{if(a.has($))return;let w=t.bands.get($);if(!w||!m(w))return;a.add($),l.push(w.bandName??w.name);let E=kt(w.memberCharacterIds);for(let[P,A]of t.characters)Number(A.bandId)===$&&E.push(P);let M=String(w.icon??"");M&&d.push({id:$,name:w.bandName??w.name,image:M});for(let P of new Set(E))h(P,!M,!1)},v=($,w=!0)=>{if(it($)==="crychic"){l.push("CRYCHIC");for(let P of od){let A=p(P,"character");if(A.length===1)h(A[0],!0,!1);else{let j=t.portraitFallbacks?.filter(K=>Xt(K.name).some(ve=>it(ve)===it(P)));j?.length===1?s.set(j[0].key,j[0]):u.add(P)}}return}let E=p($,"band").filter(P=>m(t.bands.get(P)));if(E.length===1){b(E[0]);return}let M=p($,"character");if(M.length===1){h(M[0]);return}w&&u.add($)},x=kt(e.bandIds??e.bandId);for(let $ of x){let w=t.bands.get($);if(w){if(m(w)){b($);continue}(w.bandName??w.name)&&c.push(w.bandName??w.name);for(let E of kt(w.memberBandIds))b(E);for(let E of kt(w.memberCharacterIds))h(E);for(let E of Xt(w.memberNames))v(E);for(let E of Ws(w.bandName))v(E,!1)}}if(!x.length)for(let $ of Ws(e.artistName??e.bandName))v($);let S=kt(e.characterIds??e.characters??e.characterId),y=kt(e.vocalCharacterIds);for(let $ of[...S,...y])o.has($)||h($);let k={bandIds:[...a],participantCharacterIds:[...o],explicitCharacterIds:[...i],portraits:[...s.values()],names:(u.size&&c.length?c:[...l,...u]).filter(($,w,E)=>E.findIndex(M=>JSON.stringify(M)===JSON.stringify($))===w),logos:d,unresolvedNames:[...u]};return n.set(e,k),k}function qn(e){return g`<span class="avatar-stack">${e.filter((t,n,r)=>t.image&&r.findIndex(a=>a.key===t.key)===n).map(t=>g`<img src=${t.image} alt="" loading="lazy" decoding="async" />`)}</span>`}function Hn(e,t=n=>n){let n=[...e.logos.map(r=>({...r,key:`band:${r.id}`})),...e.portraits];return n.length?qn(n.map(r=>({...r,image:t(r.image)}))):f}function Ys(e){let t=o=>o??e.unknown??"?",r=(e.kind==="member"?e.icons.memberRanks:e.icons.supportRanks)[e.rank??0],i=[e.liveSkill,e.gekisoSkill].map(o=>o?.icon?g`<span title=${`${o.label} ${t(o.level)}`} aria-label=${`${o.label} ${t(o.level)}`}>
        <img src=${o.icon} alt="" /><span>${t(o.level)}</span>
      </span>`:f);return g`<span class=${`card-growth card-growth--${e.kind}`}>
    ${e.level!==void 0?g`<span class="card-growth__level"><small>Lv.</small>${t(e.level)}</span>`:f}
    ${e.kind==="member"&&e.training!==void 0?g`<span class="card-growth__training" title=${`${e.trainingLabel} ${t(e.training)}`}>
          ${e.icons.training?g`<img src=${e.icons.training} alt=${e.trainingLabel} />`:e.trainingLabel}
          <span>${t(e.training)}</span>
        </span>`:f}
    ${e.liveSkill||e.gekisoSkill?g`<span class="card-growth__skills">
          ${i}
        </span>`:f}
    ${e.rank!==void 0?g`<span class="card-growth__rank" title=${`${e.rankLabel} ${t(e.rank)}`}>
          ${r?g`<img src=${r} alt=${`${e.rankLabel} ${t(e.rank)}`} />`:g`<span>${e.rankLabel} ${t(e.rank)}</span>`}
          ${e.rank===null&&r?g`<strong>${t(e.rank)}</strong>`:f}
        </span>`:f}
  </span>`}function Zs(e){return{kind:e.kind,title:e.title,titleLanguage:e.titleLanguage,subtitle:e.subtitle,label:e.label,image:e.image,fit:"contain",placeholder:L("image",32),mediaOverlay:e.growth?Ys(e.growth):void 0,adornment:e.adornment??g`
        <span class="avatar-stack">
          ${(e.avatars??[]).filter(t=>t.image).slice(0,5).map(t=>g`
                <img src=${t.image} alt=${t.name} loading="lazy" decoding="async" />
              `)}
        </span>
      `,marks:[e.attributeIcon?{at:"start",image:e.attributeIcon,label:e.attributeLabel}:e.attributeLabel?{at:"start",text:e.attributeLabel,label:e.attributeLabel}:null,e.rarityIcon?{at:"end",image:e.rarityIcon,label:e.rarityLabel}:e.rarityLabel?{at:"end",text:e.rarityLabel,label:e.rarityLabel}:null]}}var ld="haneoka:difficulty-display:v1";function cd(e){let t=e&&typeof e=="object"&&!Array.isArray(e)?e:void 0;return{showDifficultyEstimates:!!t&&Object.hasOwn(t,"showDifficultyEstimates")&&t.showDifficultyEstimates===!0}}var Vn,Wn=!1,Xs=!1;function dd(e=!1){if(Xs&&!e){Wn=!0;return}let t;try{t=localStorage.getItem(ld)}catch{Vn??=!1,Wn=!0;return}try{Vn=cd(JSON.parse(t||"null")).showDifficultyEstimates}catch{Vn=!1}Xs=!1,Wn=!0}function Qs(){return typeof window>"u"?!1:(Wn||dd(),Vn??!1)}function ca(e){if(!Qs())return f;let t=e.difficultyEstimate,n=t?.quality,r=t?.estimatedConstant;return t?.target==="fc-operation-load"&&(n?.status==="estimated"||n?.status==="low-confidence")&&typeof r=="number"&&Number.isFinite(r)&&r>0?g`
        <small class="difficulty-constant">${r.toFixed(1)}</small>
      `:f}var eo=["easy","normal","hard","expert","master"],ud=["special","append"];function Gn(e,t=0){let n=String(e.difficultyName||e.difficulty||"").toLowerCase();return eo.includes(n)||ud.includes(n)?n:eo[Number(n)||t]||"master"}var md={1:"CardType-Red.png",2:"CardType-Blue.png",3:"CardType-Green.png",4:"CardType-Yellow.png",5:"CardType-Purple.png"};function da(e,t){let n=Number(t||0),r=e.get(`sp_icon_live_music_type_${n}.png`);if(r)return r;let a=md[n];return a&&e.get(a)||""}function pd(e,t=""){return[e.jacketUrl,t,e.jacketThumbUrl].filter((n,r,a)=>typeof n=="string"&&!!n&&a.indexOf(n)===r)}function to(e,t,n,r=[],a){let i=t.title(e),o=[...new Set((Array.isArray(e.bandIds)?e.bandIds:[]).map(Number).filter(d=>Number.isFinite(d)&&d>0))],s=[...new Set((o.length?o.map(d=>t.bandIcon({...e,bandId:d})):[t.bandIcon(e)]).filter(Boolean))],l=t.attributeMark(e),c=pd(e,t.image(e)),u=c[0]||"";return{kind:"song",title:i.text,titleLanguage:i.locale,subtitle:t.artist(e),adornment:t.performerAdornment?t.performerAdornment(e):s.length?qn(s.map(d=>({key:d,name:"",image:t.imageForLocale(d)}))):f,label:i.text,image:u,imageCandidates:c,onImageError:gt,href:n,marks:[l?{at:"start",image:l,label:t.attributeLabel(e)}:null,...r,a?{at:"end",text:g`
              <span class="song-tile__difficulty">
                <span>
                  ${Gn(a).toUpperCase()}
                  ${a.displayLevel??a.playLevel??a.level??"\u2014"}
                </span>
                ${ca(a)}
              </span>
            `}:null]}}var no="../assets/bushimo-circle-ZYR4DBSW.svg?url";var ro=`<!--\r
  Circular presentation of the Bushimo mark for nominative server identification.\r
  Source mark: https://www.bushimo.jp/assets/images/com/logo_bushimo.svg\r
  Archived provenance: https://commons.wikimedia.org/wiki/File:Bushiroad_Mobile_Japanese_Logo.svg\r
  Bushimo and its logo are trademarks of Bushiroad Inc.\r
-->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\r
  <circle cx="256" cy="256" r="256" fill="#fff" />\r
  <path\r
    fill="#e60019"\r
    transform="translate(93.5 72) scale(3.5)"\r
    d="M57.6 19.9 31.7 21.2 0 0l5.5 27.9 3.2 63.4-1.5 10.2 50.4 3.8c19.4 0 35.3-15.9 35.3-35.4V55.2c0-19.4-15.9-35.3-35.3-35.3Zm-16.4 55H29.9l-3-29.5h14.3Zm28.1 0H58V45.4h14.3Z"\r
  />\r
</svg>\r
`;var ao='<svg fill="#00A1D6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>';function io(e){let t=e.includes("jp"),n=e.includes("intl");if(t&&n)return;if(t)return"jp";if(n)return"intl";let r=e.filter(a=>a!=="jp"&&a!=="intl");return r.length===1?r[0]:void 0}var fd=ao.replace(/^<svg[^>]*>/,"").replace(/<title>.*?<\/title>/,"").replace(/<\/svg>$/,""),so=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#00a1d6"/><g fill="#fff" transform="translate(76 76) scale(15)">${fd}</g></svg>`)}`;function ua(e){return io(e)}var Kn=e=>e==="jp"||e==="intl",hd=e=>e.split("-").map(t=>t.toUpperCase()).filter((t,n,r)=>n===0||n===r.length-1).join(" "),Qt=new Map;function bd(e){if(e.length===1&&Kn(e[0]))return e[0]==="jp"?no:so;let t=`${e.join("|")}:${e.map(Lr).join("|")}`,n=Qt.get(t);if(n)return n;let r=Lr(e[0]||"")==="jp"?`data:image/svg+xml,${encodeURIComponent(ro)}`:so,a=e.map(c=>(c.split("-").at(-1)||"").replace(/^0+(?=\d)/u,"").slice(0,2).toUpperCase()),o=(a.slice(0,3).join("/")+(a.length>3?"+":"")).replace(/[&<>"']/gu,c=>`&#${c.charCodeAt(0)};`),s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><image href="${r}" width="27" height="27"/><rect x="5" y="21" width="27" height="11" rx="5.5" fill="#fff" stroke="#555" stroke-width=".6"/><text x="18.5" y="29" font-family="sans-serif" font-size="8" font-weight="700" text-anchor="middle" fill="#222">${o}</text></svg>`,l=`data:image/svg+xml,${encodeURIComponent(s)}`;return Qt.size>=64&&Qt.delete(Qt.keys().next().value),Qt.set(t,l),l}function yd(e,t){let n=e.filter(a=>!Kn(a));if(n.length)return n.map(hd).join(" / ");let r=ua(e);return r==="jp"?he(t,"catalog.availability.catalogJapanOnly","JP only"):r==="intl"?he(t,"catalog.availability.catalogInternationalOnly","Global only"):""}function oo(e,t){if(!e)return;let n=e.sourceIds?.filter(a=>!Kn(a)),r=n?.length?n:e.exclusive?[e.exclusive]:[];if(r.length)return{image:bd(r),label:yd(r,t),size:r.some(a=>!Kn(a))?24:18}}var vd=["","Red","Blue","Green","Yellow","Purple"],lo=class{constructor(t,n,r){this.host=t;this.data=n;this.master=r}missionIcons={};missionIconRequest;missionIcon(t){if(!this.missionIconRequest){let n=this.missionIconRequest=new AbortController,{server:r,releaseId:a}=this.data.identity;qs(`/api/v1/servers/${r}/chart-assets?projection=${5}&release=${encodeURIComponent(a)}`,{signal:n.signal}).then(i=>{if(n.signal.aborted||this.host.catalog!==this)return;let o=Object.entries(i.sources).find(([s])=>s.endsWith("/LiveAtlas.spriteatlasv2"))[1];this.missionIcons=Vs(o,r),this.host.requestUpdate()}).catch(()=>{})}return this.missionIcons[Hs(t)?.icon??""]??""}rewardIcon(t,n){if(t==="items"){let a=this.data.events[String(n)]?.eventItem;return String(a?.image??"")}let{server:r}=this.data.identity;return`/assets/${r}/Assets/AddressableResources/Item/event/item_icon_event_point_00${t==="points"?1:2}.png`}dispose(){this.missionIconRequest?.abort(),this.missionIconRequest=void 0}eventReleases;visuals=null;songMetadata=new Map;metadataLoads=new Map;songIdentity(t){let n=this.data.crossServer?.owners.songs?.[String(t)]??this.data.identity.server;return this.data.crossServer?.identities[n]??this.data.identity}songVisible(t){let n=this.eventReleases??=Nn(this.data.events,this.data.crossServer?.challengeMusics??this.data.challengeMusicTable?.rows);return Qr(Kr(this.data.songs[String(t)]||{},n))}chartMetadata(t){return this.songMetadata.get(this.songIdentity(t.songId).server)?.[String(t.songId)]?.[String(t.difficulty)]?.chart}metadataStatus(t){return this.metadataLoads.get(this.songIdentity(t).server)}retrySongMetadata(t){for(let n of t){let r=this.songIdentity(n).server;this.metadataLoads.get(r)==="error"&&this.metadataLoads.delete(r)}this.loadSongMetadata(t),this.host.requestUpdate()}loadSongMetadata(t){for(let n of t){let r=this.songIdentity(n);if(!this.metadataLoads.has(r.server)){if(!r.sourceId){this.metadataLoads.set(r.server,"error");continue}this.metadataLoads.set(r.server,"loading"),js().readCollection("song-meta",{...r,sourceId:r.sourceId}).then(a=>{this.songMetadata.set(r.server,a),this.metadataLoads.set(r.server,"ready")},()=>this.metadataLoads.set(r.server,"error")).finally(()=>{this.host.catalog===this&&this.host.requestUpdate()})}}}performerRegistry;songRows=new Map;songTiles=new Map;songTitles=new Map;songMessages;songDisplayChoice;setVisuals(t){this.visuals=t,this.performerRegistry=void 0,this.songRows.clear(),this.songTiles.clear(),this.songTitles.clear()}serverMark(t,n){let r=this.data.crossServer;if(!r?.identities.jp||!r.identities.intl)return;let a=(r.availability[t]?.[String(n)]??[]).filter(i=>Ut.includes(i));return oo({exclusive:ua(a)??null,sourceIds:a},this.host.locale)}text(t){return _e(t,this.host.locale).text}member(t){return this.data.members[String(t)]}snap(t){return this.data.snapshots[String(t)]}characterName(t){return this.text(this.data.characters[String(t)]?.characterName)}characterFace(t){let n=this.visuals?.characters[String(t)]??this.data.characters[String(t)];return String(n?.faceImage??n?.thumbnailImage??"")}characterColor(t){let n=String(this.data.characters[String(t)]?.colorCode??"").replace(/^#?/u,"");return/^[0-9a-f]{6}$/iu.test(n)?`#${n}`:"var(--md-sys-color-primary)"}bandName(t){let n=this.data.bands[String(t)];return this.text(n?.bandName??n?.name)}bandIcon(t){let n=this.visuals?.bands?.[String(t)]??this.data.bands[String(t)];return String(n?.icon??"")}attributeName(t){if(t===99)return"ALL";let n=["","red","blue","green","yellow","purple"][t];return n?he(this.host.locale,`catalog.songs.liveTypes.${n}`,n):""}attributeIcon(t){let n=vd[t];return n?this.visuals?.marks.get(`CardType-${n}.png`)??"":t===99?da(this.visuals?.marks??new Map,99):""}rarityIcon(t){return this.visuals?.marks.get(`RarityIconCenter_${$n(t)}.png`)??""}cardName(t,n){let r=t==="members"?this.member(n):this.snap(n);return r?this.text(r.name):`#${n}`}characterIds(t,n){if(t==="members"){let r=this.member(n);return r?[r.characterId]:[]}return this.snap(n)?.characterIds??[]}bandIds(t,n){if(t==="members"){let r=this.member(n);return r?[r.bandId]:[]}return[...new Set(this.characterIds("snaps",n).map(r=>Number(this.data.characters[String(r)]?.bandId??0)).filter(Boolean))]}cardFilterItem(t,n){let r=t==="members"?this.member(n):this.snap(n);if(!r)return{};let a=t==="members"?{leader:[r.leaderSkillId],live:[r.liveSkillId],gekisou:[r.gekisoSkillId]}:{support:r.supportSkillIds,gekisouSupport:r.gekisoSupportSkillIds},i=this.visuals?(t==="members"?this.visuals.cards:this.visuals.supportCards)[String(n)]??r.catalogMetadata:r.catalogMetadata,o={...i?.resolvedSkills};for(let[s,l]of Object.entries(a)){let c=s.replace("gekisou","gekiso"),u=l.flatMap(d=>this.data.skills[c]?.[String(d)]?[this.data.skills[c][String(d)]]:[]);u.length&&!o[s]&&(o[s]=u)}return{id:n,cardType:r.attribute,rarity:r.rarity,stat:r.statMax,images:{thumbnail:r.image},...i,resolvedSkills:o}}cardOptions(t,n,r){let a=t==="members"?this.member(n):this.snap(n);if(!a)return null;let i=$n(a.rarity),o=this.attributeName(a.attribute),s=_e(a.name,this.host.locale),l=this.characterIds(t,n),c=zs(l.map(u=>this.characterName(u)),this.host.locale);return{...Zs({kind:t==="members"?"member":"support",title:s.text,titleLanguage:s.locale,subtitle:c,label:[s.text,c,i,o].filter(Boolean).join(" / "),image:a.image,avatars:[...new Set(l)].map(u=>({image:this.characterFace(u),name:this.characterName(u)})),attributeIcon:this.attributeIcon(a.attribute),attributeLabel:o,rarityIcon:this.rarityIcon(a.rarity),rarityLabel:i,growth:r===void 0?this.cardGrowth(t,n):r??void 0}),serverMark:this.serverMark(t==="members"?"members":"snapshots",n),aspectRatio:t==="members"?"3 / 4":"16 / 9"}}cardGrowth(t,n){let r=t==="members"?this.host.view?.members.get(n):this.host.view?.snaps.get(n),a=t==="members"?this.memberLimits(n,r?.awake??null):this.snapLimits(n,r?.rank??null);if(!(!a||!r))return this.growthDisplay(t,n,{level:r.level===null?null:Math.min(r.level,a.levelCap),rank:r.rank,awake:t==="members"?r.awake:void 0,liveSkillLevel:t==="members"?r.skill:void 0,gekisoSkillLevel:t==="members"?r.gekisoSkill:void 0},this.host.settings.unknownPolicy==="max"?"\u2605":"?")}resolvedGrowth(t,n,r){if(t==="members"){let i=this.master.members.get(n.cardId);return i?this.growthDisplay(t,n.cardId,qi(this.master,i,n,r)):null}let a=this.master.snaps.get(n.cardId);return a?this.growthDisplay(t,n.cardId,Hi(this.master,a,n,r)):null}growthDisplay(t,n,r,a="?"){let i=t==="members"?this.member(n):void 0,o=i?String(this.data.skills.live?.[String(i.liveSkillId)]?.icon??""):"",s=i?String(this.data.skills.gekiso?.[String(i.gekisoSkillId)]?.icon??""):"";return{kind:t==="members"?"member":"support",icons:Fs(l=>this.visuals?.marks.get(l)??""),level:r.level,rank:r.rank,training:r.awake,liveSkill:r.liveSkillLevel!==void 0?{level:r.liveSkillLevel,icon:o,label:this.host.t("liveSkill","Live skill")}:void 0,gekisoSkill:r.gekisoSkillLevel!==void 0?{level:r.gekisoSkillLevel,icon:s,label:this.host.t("gekisoSkill","GEKISO skill")}:void 0,unknown:a,trainingLabel:this.host.t("training","Training"),rankLabel:this.host.t("awakening","Awakening")}}memberLimits(t,n){let r=this.master.members.get(t);if(!r)return null;let a=Ui(this.master,r);return{...a,levelCap:ji(this.master,r,n??a.awake)}}snapLimits(t,n){let r=this.master.snaps.get(t);if(!r)return null;let a=zi(this.master,r);return{...a,levelCap:Fi(this.master,r,n??a.rank)}}song(t){let n=this.songRows.get(t);return n||(n={...this.data.songs[String(t)],...this.visuals?.songs[String(t)]},this.songRows.set(t,n)),n}songPerformer(t){return this.performerRegistry??=Ks({game:"our-notes",server:this.data.identity.server,sourceId:this.data.identity.sourceId,bands:{...this.data.bands,...this.visuals?.bands},characters:{...this.data.characters,...this.visuals?.characters}}),Js(this.song(t),this.performerRegistry)}songArtist(t){return Er(this.songPerformer(t).names,this.host.locale).text}songTitleValue(t){let n=`${this.host.locale}:${zn(this.host.locale)}:${t}`,r=this.songTitles.get(n);return r||(r=na(this.song(t),this.host.locale),this.songTitles.set(n,r)),r}songTitle(t){return this.songTitleValue(t).text}songTitleLanguage(t){return this.songTitleValue(t).locale}songBands(t){let n=this.data.songs[String(t)];return(Array.isArray(n?.bandIds)?n.bandIds:n?.bandId?[n.bandId]:[]).map(Number).filter(Boolean)}difficultyRows(t){return ke(this.data.songs[String(t)]?.difficulty)}difficultyLabel(t,n){let r=this.difficultyRows(t).find(a=>Number(a.difficulty)===n);return r?`${Gn(r).toUpperCase()} ${r.displayLevel??r.playLevel??""}`:""}songOptions(t,n){let r=On()?.current(),a=zn(this.host.locale);(r!==this.songMessages||a!==this.songDisplayChoice)&&(this.songTiles.clear(),this.songMessages=r,this.songDisplayChoice=a);let i=`${this.host.locale}:${t}:${n??"default"}`,o=this.songTiles.get(i);if(o)return o;let s=this.song(t),l=this.difficultyRows(t),c=n!==void 0?l.find(m=>Number(m.difficulty)===n):[...l].sort((m,p)=>Number(p.playLevel)-Number(m.playLevel))[0],d={...to(s,{locale:this.host.locale,title:m=>na(m,this.host.locale),image:m=>String(m.jacketThumbUrl??m.jacketUrl??""),artist:()=>this.songArtist(t),bandIcon:()=>this.bandIcon(this.songBands(t)[0]??0),performerAdornment:()=>Hn(this.songPerformer(t)),imageForLocale:m=>m,attributeMark:m=>da(this.visuals?.marks??new Map,m.musicType),attributeLabel:m=>this.attributeName(Number(m.musicType))},"",[],c),aspectRatio:1,serverMark:this.serverMark("songs",t)};return this.songTiles.set(i,d),d}events(){return[...this.master.events.values()].filter(t=>{let n=this.data.events[String(t.id)];return n.kind==="planner-event"?n.planner.active:Qr(n)}).filter(t=>t.livePoints.size||t.challengePoints.size||t.effects.length).sort((t,n)=>(n.startAt??0)-(t.startAt??0)).map(t=>({id:t.id,name:this.text(this.data.events[String(t.id)]?.name??this.data.events[String(t.id)]?.title)||`#${t.id}`,event:t,serverMark:this.serverMark("events",t.id)}))}challengeSongs(t){return this.master.challengeMusics.filter(n=>t===null||n.eventId===t)}normalEventSongIds(t){let n=t===null?void 0:this.data.events[String(t)]?.plannerRules;if(n?.normalSongs.length)return n.normalSongs;let r=Date.now();return Object.entries(this.data.songs).filter(([,a])=>We({...a,eventPublishedAt:void 0},r)).map(([a])=>Number(a))}};function Jn(e){let t=g`
    <span class="detail-section-title__icon" aria-hidden="true">${L(e.icon,18)}</span>
    <span class="detail-section-title__label">${e.label}</span>
    ${e.count===void 0?f:g`
            <small class="detail-section-title__count">${e.count}</small>
          `}
  `;return e.level===3?g`
        <h3 class="detail-section-title detail-section-title--h3">${t}</h3>
      `:g`
        <h2 class="detail-section-title detail-section-title--h2">${t}</h2>
      `}var wd=["count","window","conversion","score"],ma=()=>({member:{count:[0,5],window:[0,5],conversion:[0,5],score:[0,5]},snap:{count:[0,5],window:[0,5],conversion:[0,5],score:[0,5]}}),ch=e=>Object.values(e).some(t=>Object.values(t).some(([n,r])=>n>0||r<5));function co(e){let t=ma();if(!e||typeof e!="object")return t;let n=e;for(let r of["member","snap"])for(let a of wd){let i=n[r]?.[a];Array.isArray(i)&&i.length===2&&i.every(o=>Number.isInteger(o)&&o>=0&&o<=5)&&i[0]<=i[1]&&(t[r][a]=[...i])}return t}var uo=()=>({templateId:null,attributes:null,targetKind:"band",targets:[],members:[],snaps:[]}),mo=e=>({...e,characterId:0,bandId:0,cardType:0,tagId:0,memberCardId:0,supportCardId:0,perRank:[...e.perRank]}),kd=e=>[...new Map(e.map(t=>[JSON.stringify(t),t])).values()],po=e=>{let t=kd(e).sort((n,r)=>n.resourceType-r.resourceType||n.bonusType-r.bonusType);return{key:JSON.stringify(t.map(n=>[n.bonusType,n.perRank])),effects:t}};function go(e,t){let n=t.some(a=>a.bandId)?"band":t.some(a=>a.characterId)?"character":"none",r=a=>[...new Set(t.map(i=>i[a]).filter(Boolean))].map(i=>({cardId:i,tier:po(t.filter(o=>o[a]===i).map(mo)).key}));return{templateId:e,attributes:[...new Set(t.map(a=>a.cardType).filter(Boolean))],targetKind:n,targets:n==="none"?[]:[...new Set(t.map(a=>n==="band"?a.bandId:a.characterId).filter(Boolean))],members:r("memberCardId"),snaps:r("supportCardId")}}function $d(e,t){if(!e.livePoints.size||!e.liveRewards.length||!e.itemId||!e.effects.length||[...new Set([t.params.skipRank,...[...t.scoreRanks.values()].flatMap(s=>s.map(l=>l.rank))])].some(s=>!e.livePoints.has(s)||!e.liveRewards.some(l=>l.scoreRank===s&&l.resourceId===e.itemId))||[...e.livePoints.values()].some(s=>!Number.isSafeInteger(s)||s<0)||e.liveRewards.some(s=>!Number.isSafeInteger(s.count)||s.count<0||!Number.isSafeInteger(s.probability)||s.probability<0||s.probability>1e4))return null;let r={attribute:new Map,target:new Map,member:new Map,snap:new Map};for(let s of e.effects){if(![2,3].includes(s.resourceType)||![0,1,2].includes(s.bonusType)||s.tagId||s.perRank.length!==5||s.perRank.some(m=>!Number.isSafeInteger(m)||m<0)||[s.cardType,s.bandId,s.characterId,s.memberCardId,s.supportCardId].filter(Boolean).length!==1||s.memberCardId&&s.resourceType!==2||s.supportCardId&&s.resourceType!==3)return null;let c=s.memberCardId?"member":s.supportCardId?"snap":s.cardType?"attribute":"target",u=s.memberCardId||s.supportCardId||s.cardType||s.bandId||-s.characterId,d=r[c].get(u)??[];d.push(mo(s)),r[c].set(u,d)}let a=s=>[...new Map([...r[s].values()].map(l=>{let c=po(l);return[c.key+JSON.stringify(c.effects.map(u=>u.resourceType)),c]})).values()],i=a("attribute"),o=a("target");return i.length!==1||o.length!==1?null:{event:e,attribute:i[0].effects,target:o[0].effects,members:a("member"),snaps:a("snap")}}function uh(e,t){let n=t.templateId===null?void 0:e.events.get(t.templateId),r=n&&$d(n,e);if(!r)return{effects:null,issue:"rules"};if(t.attributes===null||t.attributes.some(i=>![1,2,3,4,5].includes(i)))return{effects:null,issue:"attribute"};if(!["none","band","character"].includes(t.targetKind)||t.targetKind!=="none"&&(!t.targets.length||t.targets.some(i=>t.targetKind==="character"?!e.characters.has(i):![...e.members.values()].some(o=>o.bandId===i))))return{effects:null,issue:"targets"};let a=[...new Set(t.attributes)].flatMap(i=>r.attribute.map(o=>({...o,cardType:i})));if(t.targetKind!=="none")for(let i of new Set(t.targets))a.push(...r.target.map(o=>({...o,[t.targetKind==="band"?"bandId":"characterId"]:i})));for(let i of["members","snaps"]){let o=new Set;for(let s of t[i]){let l=r[i].find(c=>c.key===s.tier);if(!e[i].has(s.cardId)||!l||o.has(s.cardId))return{effects:null,issue:"cards"};o.add(s.cardId),a.push(...l.effects.map(c=>({...c,[i==="members"?"memberCardId":"supportCardId"]:s.cardId})))}}return{effects:a,issue:null}}var en={aggregation:"individual",play:"solo",playMode:"ap",great:3,good:0,miss:0,missEvery:0,measure:"points",weighted:!1,weightPoints:1,weightItems:0,weightCp:0,rewardPlan:null,rewardRoomMode:"battle",rewardPlayers:5,rewardOtherScore:null,requireGrowth:!0,unknownPolicy:"min",includeMemory:!1,fullRanking:!1,k:1,timeLimit:null,ptCycle:!1},pa=!0,$t={aggregation:"individual",rewardMode:"recommendation",farming:en,manualScoreMode:"score",fullRanking:!1,ptCycle:!1,ptMode:"solo",ptJust:25,ptSamplingMode:"auto",ptLuckSamples:32,goal:"score",songs:[],criterion:"mean",scoreTiming:"nominal",frameRate:60,scoreTarget:"none",targetScore:null,targetRank:7,playMode:"ap",great:3,good:0,miss:0,missEvery:0,eventId:null,manualEventEnabled:!1,manualEvent:uo(),measure:"points",weighted:!1,weightPoints:1,weightItems:0,weightCp:0,rewardPlan:null,rewardRoomMode:"battle",rewardPlayers:5,rewardOtherScore:null,route:"live",boosts:3,challengePoints:200,challengeRules:!1,manualChallengeRules:!1,powerSong:!0,window:120,planBudget:100,planBoostsPerLive:3,planStartingCp:0,planChallengeSongs:[],k:1,unknownPolicy:"max",scope:"box",maxAccountBonuses:!1,leader:null,bindings:[],required:{members:[],snaps:[]},theoreticalExcluded:{members:[],snaps:[]},noSnaps:!1,minBonus:null,attributes:[],bands:[],minRarity:0,timeLimit:null,just:100,gekisoRank:1,gekisoRanks:[1,1,1],gekisoPlacementMode:"rank",minComboBonus:1,minMissionMembers:[0,0,0],skillRoles:ma(),justWindowUnit:"percent",justWindowPercent:0,justWindowMs:0,justWindowMode:"off",justCoveragePercent:0,justDurationSeconds:0,justContinuousSeconds:0,gekisoSamplingMode:"auto",gekisoSeeds:0,gekisoOpponents:["","",""]};var ho=new WeakMap,fo=new WeakMap,Ke=e=>ho.get(e),vh=(e,t)=>ho.set(e,t);function bo(e,t){let n=Ke(t)?.input??re(e)??e,r=JSON.stringify([t.song,t.members,t.snaps,F(e,t).route]),a=fo.get(n);return a||fo.set(n,a=new Map),{choices:a,key:r}}function yo(e,t){let{choices:n,key:r}=bo(e,t);return Ke(t)?.selectedOrder??n.get(r)??t.score?.orders.reduce((a,i,o,s)=>i>s[a]?o:a,0)??0}function vo(e,t,n){let{choices:r,key:a}=bo(e,t);r.set(a,n);let i=Ke(t);i&&(i.selectedOrder=n,i.onOrderChange?.(n))}var tn={mean:{label:["criterionMean","Average score"],help:["criterionMeanHelp","Rank by the average of 120 skill orders for everyday play."],metric:["expectedScore","Average score"],proven:["provenMean","Average score proven optimal within this search"],unproven:["unprovenMean","Average score: best found so far"]},max:{label:["criterionMax","Single-run maximum (ranking)"],help:["criterionMaxHelp","Rank by the best skill order for repeated attempts at a high score."],metric:["bestScore","Best-order score"],proven:["provenMax","Single-run maximum proven optimal within this search"],unproven:["unprovenMax","Single-run maximum: best found so far"]},"max-best-timing":{label:["criterionMaxBestTiming","Maximum score \xB7 best timing"],help:["criterionMaxBestTiming","Maximum score \xB7 best timing"],metric:["bestTimingScore","Best-timing score"],proven:["provenMax","Single-run maximum proven optimal within this search"],unproven:["unprovenMax","Single-run maximum: best found so far"]},"max-worst-timing":{label:["criterionMaxWorstTiming","Maximum score \xB7 worst timing"],help:["criterionMaxWorstTiming","Maximum score \xB7 worst timing"],metric:["worstTimingScore","Worst-timing score"],proven:["provenMax","Single-run maximum proven optimal within this search"],unproven:["unprovenMax","Single-run maximum: best found so far"]},min:{label:["criterionMin","Minimum score (floor)"],help:["criterionMinHelp","Rank by the worst skill order to raise the score floor."],metric:["worstScore","Worst-order score"],proven:["provenMin","Minimum score proven optimal within this search"],unproven:["unprovenMin","Minimum score: best found so far"]},"at-least":{label:["criterionReach","Reach rate"],help:["criterionReachHelp","Rank by the share of the 120 skill orders that reach the target score."],metric:["reachRate","Orders reaching the target"],proven:["provenReach","Reach rate proven optimal within this search"],unproven:["unprovenReach","Reach rate: best found so far"]},capped:{label:["criterionCapped","Capped average"],help:["criterionCappedHelp","Rank by the average score with every order counted up to the target score."],metric:["cappedScore","Capped average"],proven:["provenCapped","Capped average proven optimal within this search"],unproven:["unprovenCapped","Capped average: best found so far"]}};function wh(e,t,n){let r=t.goal==="score"?["mean","max","max-best-timing","max-worst-timing","min","at-least","capped"]:["mean","max","min"];return wt({type:"select",label:e.t("criterion","Score goal"),value:nn(t),options:r.map(a=>({value:a,label:rn(e,tn[a].label),disabled:t.aggregation==="mean"})),onSelect:a=>n(a==="max-best-timing"||a==="max-worst-timing"?{scoreTiming:a==="max-best-timing"?"best":"worst",criterion:"max",scoreTarget:"none"}:t.goal==="gekiso"&&(a==="mean"||a==="max"||a==="min")?{criterion:a}:a==="at-least"||a==="capped"?{scoreTarget:a,criterion:"mean",scoreTiming:"nominal"}:{scoreTarget:"none",criterion:a,scoreTiming:"nominal"})})}var Yn=e=>["","","D","C","B","A","S","SS"][e]??"";function ga(e,t,n,r,a){return wt({type:"select",label:a,value:String(t??0),options:[...n===null?[]:[{value:"0",label:n}],...[3,4,5,6,7].map(i=>({value:String(i),label:Yn(i)}))],onSelect:i=>r(Number(i)||null)})}var nn=e=>e.goal==="score"&&e.scoreTarget!=="none"?e.scoreTarget:e.goal==="score"&&e.criterion==="max"&&e.scoreTiming==="best"?"max-best-timing":e.goal==="score"&&e.criterion==="max"&&e.scoreTiming==="worst"?"max-worst-timing":e.criterion,st=e=>e.tab==="pt"&&e.settings.rewardMode!=="plan"&&(e.farmResultMode??e.settings.rewardMode)==="recommendation",re=(e,t)=>{let n=t&&Ke(t);if(n)return n.input;let r=st(e)?e.pt.job?.request??null:e.resultInputs;if(!r||!t||t!==e.results?.cpChallenge||r.goal.kind!=="event")return r;let a=r.goal.rewardPlan?.autoCp;if(!a)return r;let{aggregation:i,shard:o,floors:s,cutoff:l,rewardCutoff:c,rewardPhase:u,completed:d,seeds:m,seedOnly:p,seeded:h,resolveRewardPlan:b,...v}=r,{autoCp:x,...S}=r.goal.rewardPlan;return{...v,k:1,goal:{...r.goal,route:"challenge",songs:a.songs,consumption:a.consumption,ranking:"primary",gekiso:void 0,cpExchange:void 0,rewardPlan:{...S,levels:S.levels.slice(0,1)}}}},F=(e,t,n)=>{let r=t&&Ke(t);if(r)return r.settings;if(st(e)){let i=e.pt.job,o=i?.request,s=o?.goal,l=n??(t?i?.tasks.find(c=>c.result?.hits.includes(t)):void 0);return{...$t,...s?.kind==="event"&&s.eventEffects!==void 0?{manualEventEnabled:!0,manualEvent:go(s.eventId,s.eventEffects)}:{},eventId:s?.kind==="event"&&s.eventId>=0?s.eventId:null,goal:"event",route:l?.route??"live",challengePoints:i?.cycle?.consumption??$t.challengePoints,measure:l?.measure??(s?.kind==="event"?s.measure:"points"),weighted:!1,ptCycle:!!i?.cycle,scope:i?.presentation?.scope??"box",maxAccountBonuses:i?.presentation?.maxAccountBonuses??!1,unknownPolicy:o?.unknownPolicy??"min",boosts:s?.kind==="event"?s.consumption:0,ptMode:s?.kind==="event"&&s.gekiso?"gekiso":"solo",ptJust:s?.kind==="event"&&s.gekiso?s.gekiso.just*100:$t.ptJust,minComboBonus:s?.kind==="event"?s.gekiso?.minComboBonus??1:1,songs:s?.kind==="event"?s.songs:[]}}let a=e.resultSettings??e.searchSettings;if(t&&t===e.results?.cpChallenge){let i=re(e,t);if(i?.goal.kind==="event")return{...a,route:"challenge",aggregation:"individual",ptCycle:!1,ptMode:"solo",songs:i.goal.songs,challengePoints:i.goal.consumption,farming:{...a.farming,play:"challenge",ptCycle:!1}}}return a.goal==="plan"&&t?{...a,route:t===e.results?.plan?.challenge?"challenge":"live",boosts:a.planBoostsPerLive,measure:"points"}:a};function rn(e,t){return e.t(t[0],t[1])}function wo(e,t,n=!1){return t&&n?e.t("sampledProven","Optimal within samples"):t?e.t("proven","Proven optimal"):e.t("recommendation","Recommendation")}var an=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let r of n)r._$AO?.(t,!1),an(r,t);return!0},Zn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},ko=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Rd(t)}};function xd(e){this._$AN!==void 0?(Zn(this),this._$AM=e,ko(this)):this._$AM=e}function Sd(e,t=!1,n=0){let r=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(r))for(let i=n;i<r.length;i++)an(r[i],!1),Zn(r[i]);else r!=null&&(an(r,!1),Zn(r));else an(this,e)}var Rd=e=>{e.type==q.CHILD&&(e._$AP??=Sd,e._$AQ??=xd)},xt=class extends Ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),ko(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(an(this,t),Zn(this))}setValue(t){if(bt(this._$Ct))this._$Ct._$AI(t,this);else{let n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};var Xn=new WeakMap,fa=class extends xt{element;dismiss;previous;locked=[];generation=0;constructor(t){if(super(t),t.type!==q.ELEMENT)throw new Error("modal() requires a dialog element")}render(t){return this.dismiss=t,ee}cancel=t=>{t.target===this.element&&(t.preventDefault(),this.dismiss?.())};update(t,[n]){this.dismiss=n;let r=t.element;return this.element!==r&&(this.release(),this.element=r,r.addEventListener("cancel",this.cancel)),this.open(),ee}open(){let t=++this.generation;queueMicrotask(()=>{let n=this.element;if(!n?.isConnected||!this.isConnected||t!==this.generation||n.open)return;let r=n.ownerDocument.activeElement;this.previous=r instanceof HTMLElement?r:void 0,n.showModal();for(let a=n.parentElement;a;a=a.parentElement){let i=getComputedStyle(a);if(!/auto|scroll|overlay/u.test(i.overflowY)&&a!==n.ownerDocument.scrollingElement)continue;let o=Xn.get(a);o?++o.count:(Xn.set(a,{count:1,value:a.style.getPropertyValue("overflow"),priority:a.style.getPropertyPriority("overflow")}),a.style.setProperty("overflow","hidden","important")),this.locked.push(a)}})}release(){++this.generation,this.element?.removeEventListener("cancel",this.cancel),this.element?.open&&this.element.close();for(let t of this.locked){let n=Xn.get(t);!n||--n.count>0||(n.value?t.style.setProperty("overflow",n.value,n.priority):t.style.removeProperty("overflow"),Xn.delete(t))}this.locked=[],this.previous?.isConnected&&this.previous.focus({preventScroll:!0}),this.previous=void 0}disconnected(){this.release()}reconnected(){this.element?.addEventListener("cancel",this.cancel),this.open()}},Qn=me(fa),ha=new WeakMap,$o=(e,t)=>{let n=e.getBoundingClientRect();return t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom};function Lh(e){let t=e.currentTarget;ha.set(t,e.target===t&&$o(t,e))}function Oh(e){let t=e.currentTarget,n=ha.get(t)===!0;return ha.delete(t),n&&e.target===t&&$o(t,e)}var ba=null,xo={boundAttributeSuffix:Y.M,marker:Y.P,markerMatch:Y.A,HTML_RESULT:Y.C,getTemplateHtml:Y.L,overrideDirectiveResolve:(e,t)=>class extends e{_$AS(n,r){return t(this,r)}},patchDirectiveResolve:(e,t)=>{if(e.prototype._$AS.name!==t.name){ba??=e.prototype._$AS.name;for(let n=e.prototype;n!==Object.prototype;n=Object.getPrototypeOf(n))if(n.hasOwnProperty(ba))return void(n[ba]=t);throw Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527")}},setDirectiveClass(e,t){e._$litDirective$=t},getAttributePartCommittedValue:(e,t,n)=>{let r=ee;return e.j=a=>r=a,e._$AI(t,e,n),r},connectedDisconnectable:e=>({...e,_$AU:!0}),resolveDirective:Y.V,AttributePart:Y.H,PropertyPart:Y.B,BooleanAttributePart:Y.N,EventPart:Y.U,ElementPart:Y.F,TemplateInstance:Y.R,isIterable:Y.D,ChildPart:Y.I};var{TemplateInstance:Cd,isIterable:Ed,resolveDirective:Ro,ChildPart:sn,ElementPart:Id}=xo,Co=(e,t,n={})=>{if(t._$litPart$!==void 0)throw Error("container already contains a live render");let r,a,i,o=[],s=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT),l;for(;(l=s.nextNode())!==null;){let c=l.data;if(c.startsWith("lit-part")){if(o.length===0&&r!==void 0)throw Error(`There must be only one root part per container. Found a part marker (${l}) when we already have a root part marker (${a})`);i=Td(e,l,o,n),r===void 0&&(r=i),a??=l}else if(c.startsWith("lit-node"))_d(l,o,n);else if(c.startsWith("/lit-part")){if(o.length===1&&i!==r)throw Error("internal error");i=Md(l,i,o)}}if(r===void 0){let c=t instanceof ShadowRoot?"{container.host.localName}'s shadow root":t instanceof DocumentFragment?"DocumentFragment":t.localName;console.error(`There should be exactly one root part in a render container, but we didn't find any in ${c}.`)}t._$litPart$=r},Td=(e,t,n,r)=>{let a,i;if(n.length===0)i=new sn(t,null,void 0,r),a=e;else{let o=n[n.length-1];if(o.type==="template-instance")i=new sn(t,null,o.instance,r),o.instance._$AV.push(i),a=o.result.values[o.instancePartIndex++],o.templatePartIndex++;else if(o.type==="iterable"){i=new sn(t,null,o.part,r);let s=o.iterator.next();if(s.done)throw a=void 0,o.done=!0,Error("Unhandled shorter than expected iterable");a=s.value,o.part._$AH.push(i)}else i=new sn(t,null,o.part,r)}if(a=Ro(i,a),a===ee)n.push({part:i,type:"leaf"});else if(Rs(a))n.push({part:i,type:"leaf"}),i._$AH=a;else if(Wt(a)){if(jn(a))throw Error("compiled templates are not supported");let o="lit-part "+Pd(a);if(t.data!==o)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{let s=sn.prototype._$AC(a),l=new Cd(s,i);n.push({type:"template-instance",instance:l,part:i,templatePartIndex:0,instancePartIndex:0,result:a}),i._$AH=l}}else Ed(a)?(n.push({part:i,type:"iterable",value:a,iterator:a[Symbol.iterator](),done:!1}),i._$AH=[]):(n.push({part:i,type:"leaf"}),i._$AH=a??"");return i},Md=(e,t,n)=>{if(t===void 0)throw Error("unbalanced part marker");t._$AB=e;let r=n.pop();if(r.type==="iterable"&&!r.iterator.next().done)throw Error("unexpected longer than expected iterable");if(n.length>0)return n[n.length-1].part},_d=(e,t,n)=>{let r=/lit-node (\d+)/.exec(e.data),a=parseInt(r[1]),i=e.nextElementSibling;if(i===null)throw Error("could not find node for attribute parts");i.removeAttribute("defer-hydration");let o=t[t.length-1];if(o.type!=="template-instance")throw Error("Hydration value mismatch: Primitive found where TemplateResult expected. This usually occurs due to conditional rendering that resulted in a different value or template being rendered between the server and client.");{let s=o.instance;for(;;){let l=s._$AD.parts[o.templatePartIndex];if(l===void 0||l.type!==q.ATTRIBUTE&&l.type!==q.ELEMENT||l.index!==a)break;if(l.type===q.ATTRIBUTE){let c=new l.ctor(i,l.name,l.strings,o.instance,n),u=bt(c)?o.result.values[o.instancePartIndex]:o.result.values,d=!(c.type===q.EVENT||c.type===q.PROPERTY);c._$AI(u,c,o.instancePartIndex,d),o.instancePartIndex+=l.strings.length-1,s._$AV.push(c)}else{let c=new Id(i,o.instance,n);Ro(c,o.result.values[o.instancePartIndex++]),s._$AV.push(c)}o.templatePartIndex++}}},So=new WeakMap,Pd=e=>{let t=So.get(e.strings);if(t!==void 0)return t;let n=new Uint32Array(2).fill(5381);for(let a of e.strings)for(let i=0;i<a.length;i++)n[i%2]=33*n[i%2]^a.charCodeAt(i);let r=String.fromCharCode(...new Uint8Array(n.buffer));return t=btoa(r),So.set(e.strings,t),t};globalThis.litElementHydrateSupport=({LitElement:e})=>{let t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"observedAttributes").get;Object.defineProperty(e,"observedAttributes",{get(){return[...t.call(this),"defer-hydration"]}});let n=e.prototype.attributeChangedCallback;e.prototype.attributeChangedCallback=function(o,s,l){o==="defer-hydration"&&l===null&&r.call(this),n.call(this,o,s,l)};let r=e.prototype.connectedCallback;e.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||r.call(this)};let a=e.prototype.createRenderRoot;e.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):a.call(this)};let i=Object.getPrototypeOf(e.prototype).update;e.prototype.update=function(o){let s=this.render();if(i.call(this,o),this._$AG){this._$AG=!1;for(let l of this.getAttributeNames())if(l.startsWith("hydrate-internals-")){let c=l.slice(18);this.removeAttribute(c),this.removeAttribute(l)}Co(s,this.renderRoot,this.renderOptions)}else tt(s,this.renderRoot,this.renderOptions)}};var ya="__haneokaLoadingProgressCoordinator",Ad=1400,Ld=450,Od=0;function ae(e){return typeof e=="number"&&Number.isFinite(e)&&e>=0}function Nd(e){let t={};return typeof e.stageLabel=="string"&&e.stageLabel.trim()&&(t.stageLabel=e.stageLabel),ae(e.completedFiles)&&(t.completedFiles=e.completedFiles),ae(e.totalFiles)&&(t.totalFiles=e.totalFiles),ae(e.loadedBytes)&&(t.loadedBytes=e.loadedBytes),ae(e.totalBytes)&&(t.totalBytes=e.totalBytes),(e.byteBasis==="decoded"||e.byteBasis==="identity")&&(t.byteBasis=e.byteBasis),ae(e.processedTasks)&&(t.processedTasks=e.processedTasks),ae(e.totalTasks)&&(t.totalTasks=e.totalTasks),typeof e.countLabel=="string"&&e.countLabel.trim()&&(t.countLabel=e.countLabel),t}function va(e){if(!e)return"";try{let t=new URL(String(e),location.href);return`${t.origin}${t.pathname}${t.search}`}catch{return String(e).split("#",1)[0]}}function Eo(e=globalThis.document){return e?.documentElement?.dataset.locale||e?.documentElement?.lang?.split("-")[0]||"en"}function wa(e,t){let n=["B","KB","MB","GB","TB"],r=e>0?Math.min(n.length-1,Math.floor(Math.log(e)/Math.log(1024))):0,a=e/1024**r;try{return`${new Intl.NumberFormat(t,{maximumFractionDigits:r?1:0}).format(a)} ${n[r]}`}catch{return`${Math.round(a)} ${n[r]}`}}function Bd(e,t,n){let r=he(n,e===1?"common.loading.file":"common.loading.files",e===1?"file":"files");return t===void 0?`${e} ${r}`:`${e} / ${t} ${r}`}function Io(){return{update(){},finish(){},fail(){},cancel(){}}}var $a=class{tasks=new Map;installed=!1;routeEpoch=0;route;statusTimer;announcedStatus="";pendingStatus="";upgradePromise;onBeforePreparation=t=>this.beforePreparation(t);onBeforeSwap=t=>this.beforeSwap(t);onAfterSwap=()=>this.render();onPageLoad=()=>this.pageLoad();install(){this.installed||typeof document>"u"||(this.installed=!0,document.addEventListener("astro:before-preparation",this.onBeforePreparation),document.addEventListener("astro:before-swap",this.onBeforeSwap),document.addEventListener("astro:after-swap",this.onAfterSwap),document.addEventListener("astro:page-load",this.onPageLoad),this.ensureUpgrade(document),this.render())}dispose(){if(!(!this.installed||typeof document>"u")){document.removeEventListener("astro:before-preparation",this.onBeforePreparation),document.removeEventListener("astro:before-swap",this.onBeforeSwap),document.removeEventListener("astro:after-swap",this.onAfterSwap),document.removeEventListener("astro:page-load",this.onPageLoad),this.installed=!1,this.statusTimer&&window.clearTimeout(this.statusTimer);for(let t of[...this.tasks.values()])this.remove(t);this.announcedStatus="",this.pendingStatus="",this.route?.signal&&this.route.abortListener&&this.route.signal.removeEventListener("abort",this.route.abortListener),this.route=void 0}}begin(t,n={}){if(typeof document>"u")return Io();this.install();let r=n.scope||"owner",a=n.signal||(r==="route"?this.route?.signal:void 0),i={id:`loading-${++Od}`,label:t.trim()||"Loading",scope:r,routeEpoch:r==="route"?this.route?.epoch:void 0,signal:a,metrics:{},state:"active"};return this.tasks.set(i.id,i),a?.aborted?(this.remove(i),this.reporterFor(i)):(a&&(i.abortListener=()=>this.cancelTask(i),a.addEventListener("abort",i.abortListener,{once:!0})),this.render(),this.reporterFor(i))}reporterFor(t){let n=!0,r=()=>n&&this.tasks.get(t.id)===t,a=()=>n&&this.tasks.get(t.id)===t&&t.state==="active";return{update:i=>{a()&&(t.metrics={...t.metrics,...Nd(i)},this.render())},finish:()=>{a()&&(n=!1,this.remove(t),this.render())},fail:()=>{a()&&(t.state="failed",t.failureTimer=window.setTimeout(()=>{this.tasks.get(t.id)===t&&(this.remove(t),this.render())},Ad),this.render())},cancel:()=>{r()&&(n=!1,this.cancelTask(t))}}}remove(t){t.failureTimer&&window.clearTimeout(t.failureTimer),t.signal&&t.abortListener&&t.signal.removeEventListener("abort",t.abortListener),this.tasks.get(t.id)===t&&this.tasks.delete(t.id)}cancelTask(t){this.remove(t),this.render()}cancelRoute(t){if(this.route===t){t.signal&&t.abortListener&&t.signal.removeEventListener("abort",t.abortListener);for(let n of[...this.tasks.values()])n.scope==="route"&&n.routeEpoch===t.epoch&&this.remove(n);this.route=void 0,this.render()}}beforePreparation(t){this.route&&this.cancelRoute(this.route);let n={epoch:++this.routeEpoch,signal:t.signal,to:va(t.to),swapped:!1};if(this.route=n,t.signal?.aborted){this.cancelRoute(n);return}n.abortListener=()=>this.cancelRoute(n),t.signal?.addEventListener("abort",n.abortListener,{once:!0}),this.begin(this.loadingLabel(),{signal:t.signal,scope:"route"}),this.render()}beforeSwap(t){let n=t.newDocument;!n||!this.route||this.route.signal?.aborted||(this.route.to=va(t.to)||this.route.to,this.route.swapped=!0,this.renderInto(n,this.snapshot()))}pageLoad(){let t=this.route;if(!(!t||t.signal?.aborted||!t.swapped)&&!(t.to&&t.to!==va(location.href))){for(let n of[...this.tasks.values()])n.scope==="route"&&n.routeEpoch===t.epoch&&this.remove(n);t.signal&&t.abortListener&&t.signal.removeEventListener("abort",t.abortListener),this.route=void 0,this.render()}}loadingLabel(){let t=Eo();return he(t,"common.states.loading","Loading")}snapshot(){let t=[...this.tasks.values()].filter(y=>y.state==="active"),n=[...this.tasks.values()].filter(y=>y.state==="failed"),r=t[0]||n[0];if(!r)return{active:t,failed:n,indeterminate:!1,label:""};let a=new Set(t.filter(y=>ae(y.metrics.loadedBytes)&&y.metrics.byteBasis).map(y=>y.metrics.byteBasis)),i=t.length>0&&a.size===1&&t.every(y=>ae(y.metrics.loadedBytes)&&ae(y.metrics.totalBytes)&&y.metrics.byteBasis===[...a][0]),o=t.length>0&&t.every(y=>ae(y.metrics.completedFiles)&&ae(y.metrics.totalFiles)),s=new Set(t.filter(y=>ae(y.metrics.processedTasks)).map(y=>y.metrics.countLabel)),l=t.length>0&&s.size===1&&t.every(y=>ae(y.metrics.processedTasks)&&ae(y.metrics.totalTasks)&&y.metrics.totalTasks>0&&y.metrics.processedTasks<=y.metrics.totalTasks),c=s.size===1?t.reduce((y,k)=>y+(k.metrics.processedTasks||0),0):void 0,u=l?t.reduce((y,k)=>y+k.metrics.totalTasks,0):void 0,d=s.size===1?[...s][0]:void 0,m=i||o||l,p=a.size===1?t.reduce((y,k)=>y+(k.metrics.byteBasis===[...a][0]&&k.metrics.loadedBytes||0),0):void 0,h=i?t.reduce((y,k)=>y+(k.metrics.totalBytes||0),0):void 0,b=t.some(y=>ae(y.metrics.completedFiles))?t.reduce((y,k)=>y+(k.metrics.completedFiles||0),0):void 0,v=o?t.reduce((y,k)=>y+(k.metrics.totalFiles||0),0):void 0,x=m?l?c/u:i?h?Math.min(1,p/h):0:v?Math.min(1,b/v):0:void 0,S=t.find(y=>y.metrics.stageLabel)?.metrics.stageLabel;return{active:t,failed:n,indeterminate:t.length>0&&!m,determinateValue:x,label:r.label,stageLabel:S,loadedBytes:p,totalBytes:h,byteBasis:a.size===1?[...a][0]:void 0,completedFiles:b,totalFiles:v,processedTasks:c,totalTasks:u,countLabel:d}}statusText(t,n){let r=Eo(n);if(t.failed.length&&!t.active.length)return`${t.label} / ${he(r,"common.loading.failed","Loading failed")}`;let a=t.stageLabel||t.label;if(t.processedTasks!==void 0){let i=t.totalTasks===void 0?String(t.processedTasks):`${t.processedTasks} / ${t.totalTasks}`;return`${a} / ${i} ${t.countLabel||he(r,"story.playback.preparationTasks","preparation tasks")}`}if(t.loadedBytes!==void 0){let i=t.totalBytes===void 0?wa(t.loadedBytes,r):`${wa(t.loadedBytes,r)} / ${wa(t.totalBytes,r)}`;return`${a} / ${i}`}return t.completedFiles!==void 0?`${a} / ${Bd(t.completedFiles,t.totalFiles,r)}`:a}snapshotVisible(t){return t.active.length>0||t.failed.length>0}render(){typeof document>"u"||(this.ensureUpgrade(document),this.renderInto(document,this.snapshot(),!0))}renderInto(t,n,r=!1){let a=t.querySelector("[data-page-progress]");if(!a)return;let i=this.snapshotVisible(n);a.dataset.pageProgressActive=String(i),a.dataset.pageProgressIndeterminate=String(n.indeterminate||!n.active.length),a.setAttribute("aria-hidden",String(!i));let o=a.querySelector("[data-page-progress-control]"),s=a.querySelector("[data-page-progress-fallback]");o&&(o.toggleAttribute("indeterminate",n.indeterminate||!n.active.length),n.determinateValue===void 0?o.removeAttribute("value"):o.setAttribute("value",String(n.determinateValue)),"indeterminate"in o&&(o.indeterminate=n.indeterminate||!n.active.length),n.determinateValue!==void 0&&"value"in o&&(o.value=n.determinateValue)),s&&s.style.setProperty("--page-progress-scale",String(n.determinateValue??.38));let l=a.querySelector("[data-page-progress-status]");if(l){let c=i?this.statusText(n,t):"";r?this.announceStatus(l,c):l.textContent=c}}announceStatus(t,n){if(!n){this.statusTimer&&window.clearTimeout(this.statusTimer),this.statusTimer=void 0,this.announcedStatus="",this.pendingStatus="",t.textContent="";return}if(n===this.announcedStatus){t.textContent=n;return}this.pendingStatus=n,(!this.announcedStatus||!this.statusTimer)&&(t.textContent=n,this.announcedStatus=n,this.pendingStatus="",this.statusTimer&&window.clearTimeout(this.statusTimer),this.statusTimer=window.setTimeout(()=>{if(this.statusTimer=void 0,this.pendingStatus){let r=document.querySelector("[data-page-progress-status]");r&&(r.textContent=this.pendingStatus),this.announcedStatus=this.pendingStatus,this.pendingStatus=""}},Ld))}ensureUpgrade(t){if(typeof customElements>"u")return;let n=r=>{customElements.get("md-linear-progress")&&r.querySelectorAll("[data-page-progress]").forEach(a=>{a.dataset.pageProgressMd3="true",on(a.querySelector("[data-page-progress-control]")??void 0)})};if(customElements.get("md-linear-progress")){n(t);return}this.upgradePromise||(this.upgradePromise=import("./linear-progress-IFZXFN3V.js").then(()=>customElements.whenDefined("md-linear-progress")).then(()=>{}).catch(()=>{})),this.upgradePromise.then(()=>n(t))}};function Dd(){if(typeof window>"u"||typeof document>"u")return;let e=window;return e[ya]||(e[ya]=new $a),e[ya]}var ka=new WeakSet;function on(e){let t=e;!t||!["md-linear-progress","md-circular-progress"].includes(t.localName)||typeof customElements>"u"||ka.has(t)||(ka.add(t),customElements.whenDefined(t.localName).then(async()=>{await t.updateComplete;let n=t.shadowRoot;if(!n){ka.delete(t);return}let r=document.createElement("style");r.textContent=`@media (prefers-reduced-motion: reduce) {
      .progress, .spinner, .circle, .bar, .bar-inner, .dots, .active-track, .inactive-track {
        animation: none !important;
        transition: none !important;
      }
      .indeterminate .primary-bar { inset-inline-start: 0 !important; width: 38% !important; transform: none !important; }
      .indeterminate .secondary-bar { display: none !important; }
      .indeterminate .bar-inner { transform: none !important; }
    }`,n.append(r)}))}function To(e,t={}){return Dd()?.begin(e,t)||Io()}var xa=new WeakMap,St=me(class extends xt{render(e){return f}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),f}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){let t=this.ht??globalThis,n=xa.get(t);n===void 0&&(n=new WeakMap,xa.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?xa.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Sa=class extends W{static properties={label:{},local:{type:Boolean},shell:{state:!0}};report;constructor(){super(),this.label="",this.local=!1,this.shell=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.syncReport()}disconnectedCallback(){this.report?.cancel(),this.report=void 0,super.disconnectedCallback()}updated(){this.syncReport()}syncReport(){if(!this.isConnected)return;let t=!this.local&&!this.closest("dialog")&&!!document.querySelector("[data-page-progress]");this.shell=t,this.toggleAttribute("data-shell-loading",t),t?this.report?this.report.update({stageLabel:this.label}):this.report=To(this.label):(this.report?.cancel(),this.report=void 0)}render(){return this.shell?f:g`
      <md-linear-progress ${St(on)} indeterminate aria-label=${this.label}></md-linear-progress>
    `}};typeof customElements<"u"&&!customElements.get("haneoka-loading-state")&&customElements.define("haneoka-loading-state",Sa);function Mo(e,t={}){return g`<haneoka-loading-state label=${e} ?local=${t.local}></haneoka-loading-state>`}function lb(e){return g`
    <div class="state" role="status">
      <span class="state__icon">${L(e.icon||"search_off",28)}</span>
      <p class="state__title">${e.title}</p>
      ${e.body?g`
              <p class="state__body">${e.body}</p>
            `:f}
      ${e.action?g`
              <div class="state__actions">${e.action}</div>
            `:f}
    </div>
  `}function _o(e,t,n,r){return g`
    <div class="state state--error" role="alert">
      <span class="state__icon">${L("cloud_off",28)}</span>
      <p class="state__title">${e}</p>
      ${r?g`
              <p class="state__body">${r}</p>
            `:f}
      <div class="state__actions">
        <button class="button button--tonal" type="button" @click=${n}>
          ${L("refresh",18)}
          <span>${t}</span>
        </button>
      </div>
    </div>
  `}var Po=Symbol("attachableController"),Ao;Ao=new MutationObserver(e=>{for(let t of e)t.target[Po]?.hostConnected()});var Rt=class{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){t===null?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,n){this.host=t,this.onControlChange=n,this.currentControl=null,t.addController(this),t[Po]=this,Ao?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}};var jd=["focusin","focusout","pointerdown"],Ct=class extends W{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Rt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[Lo]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}t[Lo]=!0}}onControlChange(t,n){if(!!1)for(let r of jd)t?.removeEventListener(r,this),n?.addEventListener(r,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}};C([O({type:Boolean,reflect:!0})],Ct.prototype,"visible",void 0);C([O({type:Boolean,reflect:!0})],Ct.prototype,"inward",void 0);var Lo=Symbol("handledByFocusRing");var Ra=Q`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`,yb=Ra.styleSheet;var Ca=class extends Ct{};Ca.styles=[Ra];Ca=C([te("md-focus-ring")],Ca);var ot={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};function Oo(){let e=null;return{start(){return e?.abort(),e=new AbortController,e.signal},finish(){e=null}}}var Fd=450,No=225,Ud=.2,zd=10,qd=75,Hd=.35,Vd="::after",Wd="forwards",ie;(function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(ie||(ie={}));var Gd=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Kd=150,Jd=window.matchMedia("(forced-colors: active)"),Je=class extends W{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=ie.INACTIVE,this.attachableController=new Rt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){let t={hovered:this.hovered,pressed:this.pressed};return g`<div class="surface ${Ae(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==ie.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state===ie.HOLDING){this.state=ie.WAITING_FOR_CLICK;return}if(this.state===ie.TOUCH_DELAY){this.state=ie.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t)){this.state=ie.WAITING_FOR_CLICK,this.startPressAnimation(t);return}this.state=ie.TOUCH_DELAY,await new Promise(n=>{setTimeout(n,Kd)}),this.state===ie.TOUCH_DELAY&&(this.state=ie.HOLDING,this.startPressAnimation(t))}}handleClick(){if(!this.disabled){if(this.state===ie.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===ie.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){let{height:t,width:n}=this.getBoundingClientRect(),r=Math.max(t,n),a=Math.max(Hd*r,qd),i=this.currentCSSZoom??1,o=Math.floor(r*Ud/i),l=Math.sqrt(n**2+t**2)+zd;this.initialSize=o;let c=(l+a)/o;this.rippleScale=`${c/i}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(t){let{scrollX:n,scrollY:r}=window,{left:a,top:i}=this.getBoundingClientRect(),o=n+a,s=r+i,{pageX:l,pageY:c}=t,u=this.currentCSSZoom??1;return{x:(l-o)/u,y:(c-s)/u}}getTranslationCoordinates(t){let{height:n,width:r}=this.getBoundingClientRect(),a=this.currentCSSZoom??1,i={x:(r/a-this.initialSize)/2,y:(n/a-this.initialSize)/2},o;return t instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(t):o={x:r/a/2,y:n/a/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:i}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:n,endPoint:r}=this.getTranslationCoordinates(t),a=`${n.x}px, ${n.y}px`,i=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${a}) scale(1)`,`translate(${i}) scale(${this.rippleScale})`]},{pseudoElement:Vd,duration:Fd,easing:ot.STANDARD,fill:Wd})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=ie.INACTIVE;let t=this.growAnimation,n=1/0;if(typeof t?.currentTime=="number"?n=t.currentTime:t?.currentTime&&(n=t.currentTime.to("ms").value),n>=No){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,No-n)}),this.growAnimation===t&&(this.pressed=!1)}shouldReactToEvent(t){if(this.disabled||!t.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if(t.type==="pointerenter"||t.type==="pointerleave")return!this.isTouch(t);let n=t.buttons===1;return this.isTouch(t)||n}isTouch({pointerType:t}){return t==="touch"}async handleEvent(t){if(!Jd?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t);break;default:break}}onControlChange(t,n){if(!!1)for(let r of Gd)t?.removeEventListener(r,this),n?.addEventListener(r,this)}};C([O({type:Boolean,reflect:!0})],Je.prototype,"disabled",void 0);C([jt()],Je.prototype,"hovered",void 0);C([jt()],Je.prototype,"pressed",void 0);C([Pe(".surface")],Je.prototype,"mdRoot",void 0);var Ea=Q`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`,Ob=Ea.styleSheet;var Ia=class extends Je{};Ia.styles=[Ea];Ia=C([te("md-ripple")],Ia);var Do=Symbol("dispatchHooks");function jo(e,t){let n=e[Do];if(!n)throw new Error(`'${e.type}' event needs setupDispatchHooks().`);n.addEventListener("after",t,{once:!0})}var Bo=new WeakMap;function Fo(e,...t){let n=Bo.get(e);n||(n=new Set,Bo.set(e,n));for(let r of t)n.has(r)||(e.addEventListener(r,a=>{let i=new EventTarget;a[Do]=i;let o=new AbortController,s=()=>{o.abort(),i.dispatchEvent(new Event("after"))},l=d=>function(){d.call(this),s()};a.stopPropagation=l(a.stopPropagation),a.stopImmediatePropagation=l(a.stopImmediatePropagation);let c=a.composedPath(),u;a.composed&&a.bubbles?u=c[c.length-1]:a.bubbles?u=c[0].getRootNode():u=c[0],u.addEventListener(r,()=>{s()},{once:!0,signal:o.signal})},{capture:!0}),n.add(r))}function Uo(e){let t=new MouseEvent("click",{bubbles:!0});return e.dispatchEvent(t),t}function zo(e){return e.currentTarget!==e.target||e.composedPath()[0]!==e.target||e.target.disabled?!1:!Yd(e)}function Yd(e){let t=Ta;return t&&(e.preventDefault(),e.stopImmediatePropagation()),Zd(),t}var Ta=!1;async function Zd(){Ta=!0,await null,Ta=!1}function qo(e,t){t.bubbles&&(!e.shadowRoot||t.composed)&&t.stopPropagation();let n=Reflect.construct(t.constructor,[t.type,t]),r=e.dispatchEvent(n);return r||t.preventDefault(),r}var ye=Symbol("internals"),Ma=Symbol("privateInternals");function Ho(e){class t extends e{get[ye](){return this[Ma]||(this[Ma]=this.attachInternals()),this[Ma]}}return t}var tr=Symbol("createValidator"),nr=Symbol("getValidityAnchor"),_a=Symbol("privateValidator"),De=Symbol("privateSyncValidity"),er=Symbol("privateCustomValidationMessage");function Vo(e){var t;class n extends e{constructor(){super(...arguments),this[t]=""}get validity(){return this[De](),this[ye].validity}get validationMessage(){return this[De](),this[ye].validationMessage}get willValidate(){return this[De](),this[ye].willValidate}checkValidity(){return this[De](),this[ye].checkValidity()}reportValidity(){return this[De](),this[ye].reportValidity()}setCustomValidity(a){this[er]=a,this[De]()}requestUpdate(a,i,o){super.requestUpdate(a,i,o),this[De]()}firstUpdated(a){super.firstUpdated(a),this[De]()}[(t=er,De)](){if(!1)return;this[_a]||(this[_a]=this[tr]());let{validity:a,validationMessage:i}=this[_a].getValidity(),o=!!this[er],s=this[er]||i;this[ye].setValidity({...a,customError:o},s,this[nr]()??void 0)}[tr](){throw new Error("Implement [createValidator]")}[nr](){throw new Error("Implement [getValidityAnchor]")}}return n}var ln=Symbol("getFormValue"),rr=Symbol("getFormState");function Wo(e){class t extends e{get form(){return this[ye].form}get labels(){return this[ye].labels}get name(){return this.getAttribute("name")??""}set name(r){this.setAttribute("name",r)}get disabled(){return this.hasAttribute("disabled")}set disabled(r){this.toggleAttribute("disabled",!!r)}attributeChangedCallback(r,a,i){if(r==="name"||r==="disabled"){let o=r==="disabled"?a!==null:a;this.requestUpdate(r,o);return}super.attributeChangedCallback(r,a,i)}requestUpdate(r,a,i){super.requestUpdate(r,a,i),this[ye].setFormValue(this[ln](),this[rr]())}[ln](){return this.getAttribute("value")}[rr](){return this[ln]()}formDisabledCallback(r){this.disabled=r}}return t.formAssociated=!0,C([O({noAccessor:!0})],t.prototype,"name",null),C([O({type:Boolean,noAccessor:!0})],t.prototype,"disabled",null),t}var ar=class{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){let t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;let{validity:r,validationMessage:a}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:a,validity:{badInput:r.badInput,customError:r.customError,patternMismatch:r.patternMismatch,rangeOverflow:r.rangeOverflow,rangeUnderflow:r.rangeUnderflow,stepMismatch:r.stepMismatch,tooLong:r.tooLong,tooShort:r.tooShort,typeMismatch:r.typeMismatch,valueMissing:r.valueMissing}},this.currentValidity}};var ir=class extends ar{computeValidity(t){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=t.checked,this.checkboxControl.required=t.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(t,n){return t.checked===n.checked&&t.required===n.required}copy({checked:t,required:n}){return{checked:t,required:n}}};var Xd=En(Vo(Wo(Ho(W)))),$e=class extends Xd{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",!!1&&(this.addEventListener("click",t=>{!zo(t)||!this.input||(this.focus(),Uo(this.input))}),Fo(this,"keydown"),this.addEventListener("keydown",t=>{jo(t,()=>{t.defaultPrevented||t.key!=="Enter"||this.disabled||!this.input||this.input.click()})}))}render(){return g`
      <div class="switch ${Ae(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||f}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){let t={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return g`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${Ae(t)}">
          ${this.shouldShowIcons()?this.renderIcons():g``}
        </span>
      </span>
    `}renderIcons(){return g`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?g``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return g`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return g`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return g`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(t){let n=t.target;this.selected=n.checked}handleChange(t){qo(this,t)}[ln](){return this.selected?this.value:null}[rr](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(t){this.selected=t==="true"}[tr](){return new ir(()=>({checked:this.selected,required:this.required}))}[nr](){return this.input}};$e.shadowRootOptions={mode:"open",delegatesFocus:!0};C([O({type:Boolean})],$e.prototype,"selected",void 0);C([O({type:Boolean})],$e.prototype,"icons",void 0);C([O({type:Boolean,attribute:"show-only-selected-icon"})],$e.prototype,"showOnlySelectedIcon",void 0);C([O({type:Boolean})],$e.prototype,"required",void 0);C([O()],$e.prototype,"value",void 0);C([Pe("input")],$e.prototype,"input",void 0);var Pa=Q`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;background:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`,vy=Pa.styleSheet;var Aa=class extends $e{};Aa.styles=[Pa];Aa=C([te("md-switch")],Aa);var Go=e=>[{value:"max",label:e.t("unknownMax","Count as max")},{value:"min",label:e.t("unknownMin","Count as minimum")}];function cn(e,t){return t.scope==="box"?e.t("scopeBox","My cards"):t.maxAccountBonuses?e.t("scopeAllMax","Max cards and account"):e.t("scopeAll","All cards, full growth")}function My(e,t,n,r="search"){return V({label:e.t("scope","Cards"),value:t.scope==="box"?"box":t.maxAccountBonuses?"max-account":"theoretical",options:[{value:"box",label:e.t("scopeBox","My cards")},{value:"theoretical",label:r==="manual"?e.t("manualAllCards","All cards; unowned at max growth"):e.t("scopeAll","All cards, full growth")},{value:"max-account",label:e.t("scopeAllMax","Max cards and account")}],onSelect:a=>n({scope:a==="box"?"box":"theoretical",maxAccountBonuses:a==="max-account"})})}function _y(e,t,n){return g`<div class="tb-field"><span class="tb-field__label">${e.t("unknownPolicy","Growth not entered")}</span>
    ${V({label:e.t("unknownPolicy","Growth not entered"),value:t,options:Go(e),onSelect:n})}
  </div>`}function Py(e,t,n,r=!1){return wt({type:"select",label:e.t("unknownPolicy","Growth not entered"),value:t,options:[{value:"required",label:e.t("farm.requireGrowth","Complete before calculating")},...Go(e).reverse()].map(a=>({...a,disabled:r})),onSelect:n})}function je(e){let t=`${e.id}-trigger`,n=`${e.id}-panel`;return g`
    <section class=${`md-accordion${e.className?` ${e.className}`:""}`} ?hidden=${e.hidden}>
      <div
        class="md-accordion__heading"
        role=${e.headingLevel?"heading":f}
        aria-level=${e.headingLevel??f}
      >
        <button
          class="button md-accordion__trigger"
          type="button"
          id=${t}
          aria-expanded=${String(e.expanded)}
          aria-controls=${n}
          ?disabled=${e.disabled}
          @click=${r=>{e.disabled||(r.currentTarget.closest(".md-accordion")?.setAttribute("data-toggled",""),e.onExpandedChange(!e.expanded,r))}}
        >
          ${e.leading==null?f:g`
                  <span class="md-accordion__leading" aria-hidden="true">${e.leading}</span>
                `}
          <span class="md-accordion__identity">
            <span class="md-accordion__label">${e.label}</span>
            ${e.supportingText==null?f:g`
                    <span class="md-accordion__supporting">${e.supportingText}</span>
                  `}
          </span>
          ${e.metadata==null?f:g`
                  <span class="md-accordion__metadata">${e.metadata}</span>
                `}
          <span class="md-accordion__chevron" aria-hidden="true">${L("expand_more")}</span>
        </button>
      </div>
      <div
        ${St(r=>{if(!r||e.expanded)return;let a=r.getRootNode().activeElement;a&&r.contains(a)&&r.parentElement?.querySelector(".md-accordion__trigger")?.focus()})}
        class="md-accordion__panel"
        id=${n}
        role=${e.region?"region":f}
        aria-labelledby=${t}
        ?hidden=${!e.expanded}
      >
        ${e.content}
      </div>
    </section>
  `}function La(e){return g`
    <ul class="list collection-list">
      ${e.map(t=>{let n=g`
          <span class="list-item__leading">
            ${t.media??(t.image?g`
                    <img data-src=${t.image} alt="" decoding="async" @error=${gt} />
                  `:L("image",24))}
          </span>
          <span class="list-item__body">
            <strong class="list-item__headline" lang=${t.titleLanguage||f}>${t.title}</strong>
            <span class="list-item__supporting">${t.subtitle||"\u2014"}</span>
          </span>
          <span class="list-item__trailing">${t.trailing??f}${L("chevron_right",20)}</span>
        `;return g`
          <li>
            ${t.href?g`
                    <a
                      class=${`list-item ${t.threeLine?"list-item--three-line":"list-item--two-line"} list-item--interactive`}
                      href=${t.href}
                      data-open-item=${t.id}
                    >
                      ${n}
                    </a>
                  `:g`
                    <button
                      class=${`list-item ${t.threeLine?"list-item--three-line":"list-item--two-line"} list-item--interactive`}
                      type="button"
                      data-open-item=${t.id}
                      @click=${t.onOpen}
                    >
                      ${n}
                    </button>
                  `}
          </li>
        `})}
    </ul>
  `}function dn(e,t,n,r={}){let a=r.numeric?"is-numeric":"";return g`
    <div class="table-scroll" role="region" aria-label=${e} tabindex="0" data-scroll-region>
      <table class=${r.numeric?"data-table data-table--numeric":"data-table"}>
        <thead>
          <tr>
            ${t.map((i,o)=>g`
                <th scope="col" class=${o===0?"is-sticky":a}>${i}</th>
              `)}
          </tr>
        </thead>
        <tbody>
          ${n.map(i=>g`
              <tr>
                ${i.map((o,s)=>s===0?g`
                        <th scope="row" class="is-sticky">${o}</th>
                      `:g`
                        <td class=${a}>${o}</td>
                      `)}
              </tr>
            `)}
        </tbody>
      </table>
    </div>
  `}function lt(e,t={}){let n=e.filter(a=>!!(a&&a.value!==""&&a.value!==void 0));if(!n.length)return f;let r=["spec-list",t.split?"spec-list--split":"",t.numeric?"spec-list--numeric":"",t.className||""].filter(Boolean).join(" ");return g`
    <dl class=${r}>
      ${n.map(a=>g`
          <div class=${a.wide?"spec-list__wide":f}>
            <dt>${a.label}</dt>
            <dd>${a.value}</dd>
          </div>
        `)}
    </dl>
  `}function Ko(e,t,n){let r=t.sectionPerformance;if(!r)return f;let a=(b,v)=>e.t(`arena.sections.${b}`,v),i=(b,v=0)=>new Intl.NumberFormat(e.locale,{maximumFractionDigits:v}).format(b),o=b=>`${i(b*100,2)}%`,s=b=>`${b>0?"+":""}${o(b)}`,c=re(e,t)?.goal,u=c?.kind==="gekiso"?c.arena?.missions:[],d=b=>`${e.t("gekisoRange","Section {n}",{n:b+1})} ${["","COMBO","LUCK","JUST"][u?.[b]??0]}`,m=t.aggregate?.songs.flatMap(b=>b.song?[b.song]:[])??(t.song?[t.song]:[]),p=`section-${t.song?.songId??"all"}-${t.members.join("-")}`,h=(b,v,x)=>je({id:`${p}-${b}`,label:v,expanded:e.expanded.has(`${p}-${b}`),onExpandedChange:S=>{S?e.expanded.add(`${p}-${b}`):e.expanded.delete(`${p}-${b}`),e.requestUpdate()},content:x});return g`<div class="stack">
    ${lt([{label:a("baseScore","Base score"),value:i(r.baseMean)},{label:a("referenceBase","Reference base score"),value:i(r.referenceBaseMean)},{label:a("baseChange","Base score change"),value:s(r.referenceBaseMean?r.baseMean/r.referenceBaseMean-1:0)},{label:a("rankingBonus","Placement bonus"),value:i(r.bonusMean)},{label:e.t("expectedScore","Average score"),value:i(r.totalMean)},r.allWin===null?null:{label:a("allWin","All three sections won"),value:o(r.allWin)}],{numeric:!0})}
    ${dn(a("performance","Section performance"),[a("section","Section"),r.versus?a("winRate","Scenario win rate"):a("change","Improvement")],r.ranges.map((b,v)=>[d(v),r.versus?o(b):s(b-1)]),{numeric:!0})}
    ${h("details",a("details","Section details"),dn(a("details","Section details"),[e.t("song","Song"),a("section","Section"),a("metric","Task count"),a("reference","Reference"),a("low","10th percentile"),a("range","Range"),...r.versus?[a("winRate","Scenario win rate")]:[]],r.songs.flatMap((b,v)=>b.metrics.map((x,S)=>[m[v]?e.catalog.songTitle(m[v].songId):"\u2014",d(S),i(x,1),i(r.baseline[v].metrics[S],1),i(b.lowerDecile[S],1),`${i(b.minimum[S],1)} \u2013 ${i(b.maximum[S],1)}`,...b.wins?[o(b.wins[S])]:[]])),{numeric:!0}))}
    ${h("reference",a("referenceTeam","Score reference team"),n)}
  </div>`}function Oa(e,t){let n=t.coverage;if(!n)return f;let r=n.ranges.flatMap((c,u)=>c.notes?[{...c,index:u}]:[]);if(!r.length)return f;let a=(c,u)=>e.t(`justCoverage.${c}`,u),i=(c,u=2)=>new Intl.NumberFormat(e.locale,{maximumFractionDigits:u}).format(c),o=c=>`${i(c*100)}%`,s=c=>`${i(c/1e3)} s`,l=Math.max(...r.map(c=>c.peakMs));return g`
    <div class="stack">
      ${lt([{label:a("target","Target window"),value:`\xB1${i(n.targetMs)} ms`},{label:a("peak","Effective peak window"),value:`\xB1${i(l)} ms`},{label:a("minimumCoverage","Minimum note coverage"),value:o(Math.min(...r.map(c=>c.minimumCoverage)))}],{numeric:!0})}
      ${dn(a("stats","Window statistics"),[e.t("arena.sections.section","Section"),a("peak","Effective peak window"),a("minimumCoverage","Minimum note coverage"),a("minimumDuration","Minimum total duration"),a("minimumContinuous","Minimum continuous duration")],r.map(c=>[e.t("gekisoRange","Section {n}",{n:c.index+1}),`\xB1${i(c.peakMs)} ms`,g`
          ${o(c.minimumCoverage)}
          <small>${c.minimumCoveredNotes} / ${c.notes}</small>
        `,s(c.minimumCoveredMs),s(c.minimumLongestMs)]),{numeric:!0})}
    </div>
  `}var Jo=new WeakMap,Yo=e=>Math.ceil(e*60/1e3),Na=e=>Math.floor(e*1e3/60),Ba={active:!0,until:0};function Qo(e,t,n,r){let a=Jo.get(t.chart);a||(a=In(t.chart),Jo.set(t.chart,a));let i=[...new Set([e.gekisoSkills,e.gekisoSupportSkills].flatMap(s=>[...s.values()].flatMap(l=>l.effects.filter(c=>c.type===4004&&c.seconds>0).map(c=>c.seconds*1e3))))].sort((s,l)=>s-l),o=s=>i.reduce((l,c)=>c<s?c+1:l,0);return a.feverMs.flatMap(([s,l],c)=>{if(n[c]!==3)return[];let u=Yo(s),d=a.notes.filter(h=>h.judged&&e.live.justTypes.has(h.judgementType)).map(h=>({note:h,at:Yo(h.timeMs)})).filter(({at:h})=>Na(h)>=s&&Na(h)<l).map(({note:h,at:b})=>({tap:h.operateType===1,phase:{active:b>u,until:o(Math.max(0,Na(b-1)-s)),...r.get(h.judgementType)}}));if(!d.length)return[];let m=[...new Set([s,l,...i.map(h=>Math.min(l,s+h+34))])].sort((h,b)=>h-b),p=m.slice(1).map((h,b)=>({start:m[b],end:h,phase:{active:!0,until:o(Math.max(0,m[b]-s-1))}}));return[{notes:d,spans:p}]})}function Zo(e,t,n){return t===0||(e.conditionSets.get(t)??[]).some(r=>r.every(a=>{let i=e.conditions.get(a);return i.type!==5e3||i.targetIds.some(o=>Tn(n,e.targets.get(o)))===i.positive}))}function un(e,t,n,r,a,i,o){return t.filter(s=>s.level===n&&s.type===4004&&Zo(e,s.conditionGroup,r)&&Zo(e,s.triggerGroup,r)).reduce((s,l)=>{if(l.targetIds.length&&l.targetIds.every(m=>e.targets.get(m).judgement>6))return s;if(l.cumulativeId||l.executeLimit||l.limitCount||l.maxValue||l.resetGroup||l.releaseGroup)return o;let c=e.conditionSets.get(l.triggerGroup),u=c?.length===1&&c[0].length===1?e.conditions.get(c[0][0]):void 0;return u?.positive&&!u.values.length&&u.targetIds.length>0&&u.targetIds.every(m=>e.targets.get(m).gekisouMissionType===3)&&(u.type===7010||u.type===7020)&&(!a.active||u.type===7010&&l.triggerType===1&&l.seconds>0&&l.seconds*1e3<a.until)?s:s+Math.max(0,Yi(Pr(Pr(l.value/1e4)*i)))},0)}function Xo(e,t){let n=0;for(let r of[...e].sort((a,i)=>i.value-a.value))if(n+=r.weight,n+1e-8>=t)return r.value;return 0}function el(e,t,n){return e.length?Math.min(...e.map(r=>{if(!t){let o=r.notes.filter(c=>c.tap),s=o.filter(c=>c.phase.active),l=s.length?s:o;return l.length?Math.min(...l.map(c=>n(c.phase))):1/0}let a=Xo(r.notes.map(o=>({value:n(o.phase),weight:1})),Math.max(1,Math.ceil(r.notes.length*t.minCoverage-1e-12))),i=r.spans.map(o=>({...o,value:n(o.phase)}));if(t.minDurationMs>0&&(a=Math.min(a,Xo(i.map(o=>({value:o.value,weight:o.end-o.start})),t.minDurationMs))),t.minContinuousMs>0){let o=0;for(let s of[...new Set(i.map(l=>l.value))].sort((l,c)=>c-l)){let l=0,c=0;for(let u of i)l=u.value>=s?l+u.end-u.start:0,c=Math.max(c,l);if(c+1e-8>=t.minContinuousMs){o=s;break}}a=Math.min(a,o)}return a})):n(Ba)}var Da=2147483647,Qd=(e,t)=>Number.isSafeInteger(e)&&e>=t&&e<=Da;function eu(e,t,n,r){let a=new Map(n.bindings),i=new Set([...n.requiredMembers,...a.keys(),...n.leader?[n.leader]:[]]),o=new Set([...n.requiredSnaps,...n.bindings.flatMap(([,w])=>w?[w]:[])]),s=new Map(e.filter(w=>i.has(w.key)).map(w=>[w.card.characterId,w.key]));if(s.size!==i.size)return null;let l=new Map;for(let w of e){if(n.excludedMembers.includes(w.key)||s.has(w.card.characterId)&&s.get(w.card.characterId)!==w.key)continue;let E=l.get(w.card.characterId)??[];E.push(w),l.set(w.card.characterId,E)}if(l.size<5)return null;let c=n.noSnaps?[]:t.filter(w=>!n.excludedSnaps.includes(w.key)),u=new Set([...a.values()].filter(w=>w!==null)),d=[...l.values()],m=c.length+d.length,p=c.length+5,h=-Number.MAX_SAFE_INTEGER/4,b=d.map(w=>Float64Array.from({length:m},(E,M)=>{if(M>=p)return 0;let P=c[M]??null;return Math.max(h,...w.flatMap(A=>{if(a.has(A.key)?a.get(A.key)!==P?.key&&!(a.get(A.key)===null&&P===null):P&&u.has(P.key))return[];let j=r(A,P);return j===void 0?[]:[j]}))})),x=Math.max(1,...b.flatMap(w=>[...w].filter(E=>E!==h)))*d.length+1,S=x*(i.size+o.size+1),y=b.map((w,E)=>Float64Array.from(w,(M,P)=>M===h?h:P>=p?s.has(d[E][0].card.characterId)?h:S:M+(s.has(d[E][0].card.characterId)?x:0)+(o.has(c[P]?.key??"")?x:0))),k=new Int32Array(d.length);Zi(y,m,k);let $=[...k].flatMap((w,E)=>w<p?[{row:E,column:w}]:[]);return $.length!==5||$.some(({row:w,column:E})=>b[w][E]===h)||[...s.keys()].some(w=>!$.some(({row:E})=>d[E][0].card.characterId===w))||[...o].some(w=>!$.some(({column:E})=>c[E]?.key===w))?null:$.reduce((w,{row:E,column:M})=>w+b[E][M],0)}function ja(e,t,n,r=[]){let a=e.filter(m=>!t.excludedMembers.includes(m.key)),i=new Map(a.map(m=>[m.key,m])),o=t.bindings.map(([m])=>m);if(i.size!==a.length||new Set(o).size!==o.length)return null;let l=[...new Set([...t.requiredMembers,...o,...t.leader===null?[]:[t.leader]])].map(m=>i.get(m));if(l.length>5||l.some(m=>!m))return null;let c=new Set(l.map(m=>m.card.characterId));if(c.size!==l.length)return null;if(r.length){if(r.some(k=>{let $=ja(e,t,k.value);return $!==null&&$<k.minimum}))return null;let m=(k,$)=>$?m($,k%$):k;r=r.map(k=>{let $=a.reduce((w,E)=>m(w,k.value(E)),0)||1;return{minimum:Math.ceil(k.minimum/$),value:w=>k.value(w)/$}});let p=1,h=r.map(k=>{let $=p;return p*=k.minimum+1,{...k,stride:$}}),b=k=>h.map($=>$.value(k)),v=(k,$)=>h.reduce((w,E,M)=>{let P=Math.floor(k/E.stride)%(E.minimum+1);return w+(Math.min(E.minimum,P+$[M])-P)*E.stride},k+p),x=l.reduce((k,$)=>v(k,b($)),0),S=new Map([[x,l.reduce((k,$)=>k+n($),0)]]),y=new Map;for(let k of a){if(c.has(k.card.characterId))continue;let $=y.get(k.card.characterId)??[];$.push(k),y.set(k.card.characterId,$)}for(let k of y.values()){let $=new Map;for(let E of k){let M=b(E),P=M.join(),A=n(E);(!$.has(P)||$.get(P).amount<A)&&$.set(P,{values:M,amount:A})}let w=new Map(S);for(let[E,M]of S)if(Math.floor(E/p)!==5)for(let P of $.values()){let A=v(E,P.values);w.set(A,Math.max(w.get(A)??-1/0,M+P.amount))}S=w}return S.get(6*p-1)??null}let u=new Map;for(let m of a)c.has(m.card.characterId)||u.set(m.card.characterId,Math.max(u.get(m.card.characterId)??0,n(m)));let d=5-l.length;return u.size<d?null:l.reduce((m,p)=>m+n(p),0)+[...u.values()].sort((m,p)=>p-m).slice(0,d).reduce((m,p)=>m+p,0)}function tl(e,t,n){let r=e.filter(l=>!t.excludedSnaps.includes(l.key)),a=new Map(r.map(l=>[l.key,l])),i=t.bindings.flatMap(([,l])=>l===null?[]:[l]),o=new Set([...t.requiredSnaps,...i]),s=t.bindings.length-i.length;return new Set(i).size!==i.length||a.size!==r.length||o.size>5-s||[...o].some(l=>!a.has(l))||t.noSnaps&&o.size>0?null:t.noSnaps?0:[...o].reduce((l,c)=>l+n(a.get(c)),0)+r.filter(l=>!o.has(l.key)).map(n).sort((l,c)=>c-l).slice(0,5-s-o.size).reduce((l,c)=>l+c,0)}function hv(e,t,n,r=[]){let{members:a,snaps:i,unknown:o}=Dt(e,n.members,n.snaps,n.unknownPolicy),s={combo:null,justMs:null,members:[null,null,null],eventBonus:null,memberConditionsUnreachable:!1};if(o.length)return s;let l=n.goal,c=l.kind==="gekiso"?l.arena:void 0,u=c?a.filter(_=>_.card.bandId===c.bandId):a,d=new Map,m=(_,B=[])=>{let D=JSON.stringify([u.map(_),B.map(se=>[se.minimum,u.map(se.value)])]);return d.has(D)||d.set(D,ja(u,n.constraints,_,B)),d.get(D)},p=new Map,h=!1;if("songs"in l)for(let _ of l.songs){let B=e.songs.get(_.songId)?.gekisoMissions.map((D,se)=>c?.missions[se]||n.songRules?.missions[se]||D)??[];h||=B.includes(3),B.some(D=>D===1||D===4)&&p.set([...B].sort().join(),B)}let b=new Map;for(let _ of p.values()){let B=new Map(u.map(D=>{let se=Mn(e,D,null),Re=X=>X===0||(e.conditionSets.get(X)??[]).some(ut=>ut.every(wr=>{let G=e.conditions.get(wr),Te=G.values[0];if(G.type===0)return!0;if(G.type===5e3)return G.targetIds.some(He=>Tn(se,e.targets.get(He)))===G.positive;if(G.type===2e3)return Te!==void 0&&e.live.lifeBase>Te===G.positive;if(G.type===2001)return Te!==void 0&&e.live.lifeBase>=Te===G.positive;if(G.type===7005)return G.positive&&Te!==void 0&&Te<=1;if(G.type===7020){let He=G.targetIds.map(T=>e.targets.get(T)).filter(T=>T.skillTargetType===5&&T.gekisouMissionType!==0);return G.positive&&(!He.length||He.some(T=>[1,4].includes(T.gekisouMissionType)&&_.includes(T.gekisouMissionType)))}return!1})),de=e.gekisoSkills.get(D.card.gekisoSkillId),qe=de&&[1,4].includes(de.missionType)?Math.max(0,de.effects.filter(X=>X.level===D.growth.gekisoSkillLevel&&X.type===12e3&&X.triggerType===2&&X.seconds===0&&!X.cumulativeId&&!X.resetGroup&&!X.releaseGroup&&Re(X.triggerGroup)&&Re(X.conditionGroup)).reduce((X,ut)=>X+ut.value,0)):0;return[D.key,qe]}));b.set(JSON.stringify([...B.values()]),B)}let v=[...b.values()].map(_=>B=>_.get(B.key)),x=_=>B=>{let D=e.gekisoSkills.get(B.card.gekisoSkillId)?.missionType;return+(D===_+1||D===4)},y=(n.constraints.minMissionMembers??[0,0,0]).flatMap((_,B)=>Number.isInteger(_)&&_>0&&_<=5?[{minimum:_,value:x(B),role:B}]:[]),k=v.map(_=>m(_,y)??m(_)),$=k.some(_=>_===null)?null:Math.min(...k),w=l.kind==="gekiso"?l.minComboBonus:l.kind==="event"?l.gekiso?.minComboBonus:void 0,E=w!==void 0&&Qd(w,1)&&w>1?v.map(_=>({minimum:w-1,value:_})):[],M=[...y,...E],P=l.kind==="gekiso"?l:l.kind==="event"?l.gekiso:void 0,A=P?.justWindow?.minimumMs??P?.minJustWindowMs??0,j=[],K=null,ve=ke(t.liveTools.judgementTiming).filter(_=>Number(_.assistLevel)===0&&Number(_.noteJudgementType)===1),ce=ve.find(_=>Number(_.noteSimulateJudgement)===6),Ue=ve.find(_=>Number(_.noteSimulateJudgement)===1),R=null;if(ce&&Ue&&h&&A>0){let _=Math.min(Number(ce.beforeMs),Number(ce.afterMs)),B=Math.min(Number(Ue.beforeMs),Number(Ue.afterMs)),D=ke(t.liveTools.judgementTiming).filter(T=>Number(T.assistLevel)===0),se=new Map(D.filter(T=>Number(T.noteSimulateJudgement)===6).map(T=>{let ue=D.find(Me=>Number(Me.noteJudgementType)===Number(T.noteJudgementType)&&Number(Me.noteSimulateJudgement)===1);return[Number(T.noteJudgementType),{base:Math.min(Number(T.beforeMs),Number(T.afterMs)),cap:Math.min(Math.max(Number(T.beforeMs),Number(ue.beforeMs)),Math.max(Number(T.afterMs),Number(ue.afterMs)))}]})),Re=new Map(n.constraints.bindings.flatMap(([T,ue])=>ue===null?[]:[[ue,T]])),de=new Set(n.constraints.bindings.map(([T])=>T)),qe=new Set([...n.constraints.requiredMembers,...de,...n.constraints.leader===null?[]:[n.constraints.leader]]),X=new Set(u.filter(T=>qe.has(T.key)).map(T=>T.card.characterId)),ut=u.filter(T=>!n.constraints.excludedMembers.includes(T.key)&&(qe.has(T.key)||qe.size<5&&!X.has(T.card.characterId))),wr=n.constraints.noSnaps?[]:i.filter(T=>!n.constraints.excludedSnaps.includes(T.key)),G=new Map,Te=T=>{let ue=`${T.active}:${T.until}:${T.base??_}:${T.cap??B}`,Me=G.get(ue);if(Me)return Me;let we=T.base??_,bn=new Map(u.map(H=>{let Ce=Mn(e,H,null);return[H.key,un(e,e.gekisoSkills.get(H.card.gekisoSkillId)?.effects??[],H.growth.gekisoSkillLevel,Ce,T,we,B)+un(e,e.liveSkills.get(H.card.liveSkillId)??[],H.growth.liveSkillLevel,Ce,T,we,B)]})),yn=H=>bn.get(H.key),vn=new Map;for(let H of ut){let Ce=n.constraints.bindings.find(([oe])=>oe===H.key),mt=new Map;for(let oe of wr){if(Ce?Ce[1]!==oe.key:Re.has(oe.key))continue;let pt=Mn(e,H,oe),wn=(pt.gekisouSkill?oe.card.gekisoSupportSkillIds.reduce((Sr,Rr,Cr)=>Sr+un(e,e.gekisoSupportSkills.get(Rr)?.effects??[],oe.gekisoSkillLevels[Cr],pt,T,we,B),0):0)+oe.card.supportSkillIds.reduce((Sr,Rr,Cr)=>Sr+un(e,e.supportSkills.get(Rr)??[],oe.skillLevels[Cr],pt,T,we,B),0);mt.set(oe.key,wn)}vn.set(H.key,mt)}let wi=tl(i,n.constraints,H=>Math.max(0,...ut.map(Ce=>vn.get(Ce.key)?.get(H.key)??0))),ki=m(yn,M)??m(yn),kr=H=>yn(H)+Math.max(0,...vn.get(H.key)?.values()??[]),$r=m(kr,M)??m(kr),xr=new Map,$i=(H,Ce)=>{let mt=JSON.stringify([u.map(H),Ce]);return xr.has(mt)||xr.set(mt,eu(u,i,n.constraints,(oe,pt)=>{let wn=pt?vn.get(oe.key)?.get(pt.key):0;return wn===void 0?void 0:H(oe)+Ce*(yn(oe)+wn)})),xr.get(mt)},xi=$i(()=>0,1),Si={upper:wi===null||ki===null||$r===null?B:Math.min(T.cap??B,we+Math.min(ki+wi,$r,xi??1/0)),base:we,member:kr,maximum:xi??$r??B,assignment:$i};return G.set(ue,Si),Si},He=r.flatMap(T=>{if(!("songs"in l)||!l.songs.some(we=>we.songId===T.song.songId&&we.difficulty===T.song.difficulty))return[];let ue=e.songs.get(T.song.songId);if(!ue)return[];let Me=ue.gekisoMissions.map((we,bn)=>c?.missions[bn]||n.songRules?.missions[bn]||we);return Qo(e,T,Me,se)});if(R=r.length&&!He.length?null:el(He,P?.justWindow,T=>Te(T).upper),R!==null&&!Number.isFinite(R)&&(R=null),A>_&&r.length&&R!==null){let T=!P?.justWindow&&He.length?[...G.values()].sort((ue,Me)=>ue.upper-Me.upper)[0]:Te(Ba);A-T.base>0&&(j.push({minimum:Math.ceil(A-T.base),value:T.member}),K={minimum:A-T.base,maximum:T.maximum,bound:T.assignment})}}let N=[...y,...j],U=(_,B)=>{let D=m(_,B);if(D===null||!K||K.minimum>K.maximum)return D;let se=2**-Math.ceil(Math.log2(K.maximum+1)),Re=K.bound(_,se);if(Re!==null){let de=Math.floor(Re+1e-8);if(D=Math.min(D,de),de===D&&(Re-de)/se+1e-8>=K.minimum)return D}for(let de of[.25,.5,1,2]){let qe=K.bound(_,de);qe!==null&&(D=Math.min(D,Math.floor(qe-de*K.minimum+1e-8)))}return Math.max(0,D)},Se=j.length?v.map(_=>U(_,N)):k,ze=Se.some(_=>_===null)?$:Math.min(...Se);return{combo:ze===null||!Number.isFinite(ze)?null:1+ze,justMs:R,members:[0,1,2].map(_=>U(x(_),[...y.filter(B=>B.role!==_),...E,...j])??m(x(_),y.filter(B=>B.role!==_))??m(x(_))),eventBonus:tu(e,n,u,i),memberConditionsUnreachable:M.length+j.length>0&&m(()=>0,[...M,...j])===null}}function tu(e,t,n,r){let{goal:a,constraints:i}=t;if(a.kind!=="event"||!a.rewardPlan&&a.measure==="challenge-points")return null;let o=a.rewardPlan?a.rewardPlan.levels.flat().find(d=>d.metric!=="challenge-points")?.metric??"points":a.measure,s=a.eventEffects??e.events.get(a.eventId)?.effects;if(!s)return null;let l=o==="items"?1:0,c=ja(n,i,d=>Math.max(0,Nt(s,d,l))),u=tl(r,i,d=>Math.max(0,Bt(s,d,l)));return c===null||u===null?null:(c+u)/100}function nl(e,t){let n=[0,0,0];for(let r of t){let a=e.members.get(r),i=a&&e.gekisoSkills.get(a.gekisoSkillId)?.missionType;for(let o=0;o<3;o++)(i===o+1||i===4)&&n[o]++}return n}var Ze=["points","challenge-points","items"];function rl(e="points"){return{primary:e,options:{points:{mode:"ignore",rate:null,auto:!1},"challenge-points":{mode:"ignore",rate:null,auto:!1},items:{mode:"ignore",rate:null,auto:!1}},tieOrder:[]}}function Ye(e,t,n){let r=e.tieOrder.filter(a=>a!==t);return{...e,options:{...e.options,[t]:{...e.options[t],mode:n}},tieOrder:n==="tie"?[...r,t]:r}}function Fa(e,t){if(t===e.primary)return e;let n=Ye(e,t,"ignore");return n.options[e.primary].mode==="ignore"&&(n=Ye(n,e.primary,"tie")),{...n,primary:t,options:Object.fromEntries(Ze.map(r=>[r,{...n.options[r],rate:null}]))}}function al(e,t){return e.tieOrder.includes(t)?{...e,tieOrder:[t,...e.tieOrder.filter(n=>n!==t)]}:e}function mn(e){if(!e.weighted){let a=rl(e.measure);return e.measure!=="challenge-points"&&(a=Ye(a,e.measure==="points"?"items":"points","tie")),e.ptCycle&&e.measure!=="challenge-points"&&(a=Ye(a,"challenge-points","convert"),a.options["challenge-points"].auto=!0),a}let t={points:e.weightPoints,items:e.weightItems,"challenge-points":e.weightCp},n=Ze.find(a=>t[a]>0)??e.measure,r=rl(n);for(let a of Ze)a!==n&&t[a]>0&&(r=Ye(r,a,"convert"),r.options[a].rate=t[a]/t[n]);return r}function il(e,t){if(!t)return e;let n=e.primary==="challenge-points"?Fa(e,"points"):e;return Ye(n,"challenge-points","ignore")}function yv(e,t,n=!1){if(e.bonus&&!n)return{unit:1,minimumRank:e.minimumRank??7,maximizeBonus:!0,levels:[[{metric:e.bonus,weight:1}]]};let r=[{metric:e.primary,weight:1e4}],a=!1;for(let o of Ze){let s=e.options[o];if(o===e.primary||s.mode!=="convert")continue;if(o==="challenge-points"&&s.auto){a=!0;continue}if(s.rate===null||!Number.isFinite(s.rate)||s.rate<0||s.rate>1e5)return null;let l=Math.round(s.rate*1e4);l>0&&r.push({metric:o,weight:l})}if(a&&(!t.songs.length||t.consumption<=0))return null;let i=e.tieOrder.filter(o=>o!==e.primary&&e.options[o].mode==="tie");return{unit:1e4,criterion:e.criterion??"mean",...e.minimumRank?{minimumRank:e.minimumRank}:{},tieBreak:n?"power":"score",levels:[r,...i.map(o=>[{metric:o,weight:1}])],...a?{autoCp:{songs:t.songs,consumption:t.consumption}}:{}}}var ge=(e,t)=>t==="points"?"PT":t==="challenge-points"?"CP":e.t("rewardPlan.badges","Badges"),sr=(e,t)=>t==="items"?e.t("itemsBonus","Item bonus"):e.t("pointsBonus","Point bonus"),sl=(e,t)=>{let n=e.searchSettings,r=n.manualEventEnabled?n.manualEvent.templateId:n.eventId,a=e.catalog.rewardIcon(t,r);return g`<span class="tb-game-icon">${a?g`<img src=${a} width="24" height="24" alt="" loading="lazy" />`:f}</span>`},ol=(e,t)=>[...t==="score"?[e.t("expectedScore","Average score")]:[],...t?[e.t("power","Power")]:[]],ll=(e,t)=>[...t.levels.map((n,r)=>{let a=n.map(i=>t.maximizeBonus?sr(e,i.metric):`${ge(e,i.metric)}${r===0&&i.weight!==t.unit?` \xD7 ${new Intl.NumberFormat(e.locale,{maximumFractionDigits:4}).format(i.weight/t.unit)}`:""}`).join(" + ");return r?`${e.t("rewardPlan.tie","Tie-break")} ${a}`:a}),...ol(e,t.tieBreak)].join(" \u203A ");function Cv(e,t){let n=s=>e.updateFarming({rewardPlan:s,ptCycle:!1,weighted:!1,measure:s.primary}),r=e.searchSettings.route!=="skip",a=r?t.bonus:void 0,i=Ze.filter(s=>e.searchSettings.route!=="challenge"||s!=="challenge-points"),o=[ge(e,t.primary),...Ze.filter(s=>s!==t.primary&&t.options[s].mode==="convert").map(s=>`${ge(e,s)} \xD7 ${t.options[s].auto?e.t("rewardPlan.auto","Automatic"):t.options[s].rate??"\u2014"}`)].join(" + ")+t.tieOrder.filter(s=>t.options[s].mode==="tie").map(s=>` \u203A ${e.t("rewardPlan.tie","Tie-break")} ${ge(e,s)}`).join("")+ol(e,e.searchSettings.rewardPlan||e.searchSettings.weighted?e.searchSettings.route==="skip"?"power":"score":void 0).map(s=>` \u203A ${s}`).join("");return g`
    <section class="surface stack" id="tb-reward-plan" data-tb-field tabindex="-1">
      ${Jn({icon:"emoji_events",label:e.t("rewardPlan.title","Reward plan")})}
      ${r?V({label:e.t("rewardPlan.objective","Optimization target"),value:a?"bonus":"reward",options:[{value:"reward",label:e.t("rewardPlan.rewards","Rewards")},{value:"bonus",label:e.t("rewardPlan.maximizeBonus","Maximum bonus")}],onSelect:s=>n({...t,bonus:s==="bonus"?t.primary==="items"?"items":"points":void 0})}):f}
      ${a?g`
        ${ga(e,t.minimumRank??7,null,s=>n({...t,minimumRank:s??7}),e.t("analysis.minimumRank","Every order reaches"))}
        ${V({label:e.t("rewardPlan.maximizeBonus","Maximum bonus"),value:a,options:["points","items"].map(s=>({value:s,label:sr(e,s)})),onSelect:s=>n({...t,bonus:s})})}
      `:g`
      ${V({label:e.t("rewardPlan.criterion","Reward target"),value:t.criterion??"mean",options:[{value:"mean",label:e.t("rewardPlan.mean","Average reward")},{value:"max",label:e.t("rewardPlan.max","Highest reward")},{value:"min",label:e.t("rewardPlan.min","Minimum reward")}],onSelect:s=>n({...t,criterion:s})})}
      ${r?ga(e,t.minimumRank??null,e.t("skillRoles.unlimited","Any"),s=>n({...t,minimumRank:s??void 0}),e.t("analysis.minimumRank","Every order reaches")):f}
      <span class="tb-field__label">${e.t("rewardPlan.primary","Main reward")}</span>
      ${V({label:e.t("rewardPlan.primary","Main reward"),value:t.primary,options:i.map(s=>({value:s,label:ge(e,s),leading:sl(e,s)})),onSelect:s=>n(Fa(t,s))})}
      ${Ze.filter(s=>s!==t.primary&&(e.searchSettings.route!=="challenge"||s!=="challenge-points")).map(s=>{let l=t.options[s];return g`
          <div class="stack">
            <span class="tb-field__label"><span class="cluster">${sl(e,s)}<span>${ge(e,s)}</span></span></span>
            ${V({label:ge(e,s),value:l.mode,options:[{value:"ignore",label:e.t("rewardPlan.ignore","Ignore")},{value:"convert",label:e.t("rewardPlan.convert","Convert")},{value:"tie",label:e.t("rewardPlan.tie","Tie-break")}],onSelect:c=>n(Ye(t,s,c))})}
            ${l.mode==="convert"?g`
                  ${s==="challenge-points"&&!e.searchSettings.manualEventEnabled?V({label:e.t("rewardPlan.rate","Conversion rate"),value:l.auto?"auto":"manual",options:[{value:"manual",label:e.t("rewardPlan.manual","Manual")},{value:"auto",label:e.t("rewardPlan.auto","Automatic")}],onSelect:c=>n({...t,options:{...t.options,[s]:{...l,auto:c==="auto"}}})}):f}
                  ${l.auto?f:g`
                        <md-outlined-text-field
                          type="number"
                          min="0"
                          max=${1e5}
                          step="0.0001"
                          label=${`${ge(e,t.primary)} / ${ge(e,s)}`}
                          .value=${Un(l.rate===null?"":String(l.rate))}
                          @change=${c=>{let u=c.target.value;n({...t,options:{...t.options,[s]:{...l,rate:u.trim()?Number(u):null}}})}}
                        ></md-outlined-text-field>
                      `}
                `:f}
            ${l.mode==="tie"&&t.tieOrder.indexOf(s)>0?g`
                  <button type="button" class="button button--outlined" @click=${()=>n(al(t,s))}>
                    ${e.t("rewardPlan.first","Compare this first")}
                  </button>
                `:f}
          </div>
        `})}
      <span class="tb-results__meta">${e.t("rewardPlan.order","Ranking")}: ${o}</span>
      `}
    </section>
  `}var Ev=e=>il(e.searchSettings.rewardPlan??mn(e.searchSettings),e.searchSettings.route==="challenge");var cl=e=>jn(e)?e._$litType$.h:e.strings,or=me(class extends Ie{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){let n=Wt(this.it)?cl(this.it):null,r=Wt(t)?cl(t):null;if(n!==null&&(r===null||n!==r)){let a=Gt(e).pop(),i=this.et.get(n);if(i===void 0){let o=document.createDocumentFragment();i=tt(f,o),i.setConnected(!1),this.et.set(n,i)}at(i,[a]),Ne(i,void 0,a)}if(r!==null){if(n===null||n!==r){let a=this.et.get(r);if(a!==void 0){let i=Gt(a).pop();Cs(e),Ne(e,void 0,i),at(e,[i])}}this.it=t}else this.it=void 0;return this.render(t)}});function Et(e,t){if(t.sectionPerformance)return t.sectionPerformance.sampled;if(t.sectionSummary)return t.sectionSummary.sampled;if(t.gekiso)return t.gekiso.sampled;if(t.aggregate)return t.aggregate.songs.some(s=>Et(e,s));let n=re(e,t);if(!t.song||!n)return!1;let r=n.goal;if((r.kind==="gekiso"?r.seeds:r.kind==="event"&&t.event&&F(e,t).route==="live"?r.gekiso?.luckSamples??0:0)<=0)return!1;let i=r.kind==="gekiso"?r.arena:void 0,o=e.master?.songs.get(t.song.songId)?.gekisoMissions??[];return[0,1,2].some(s=>(i?.missions[s]||n.songRules?.missions[s]||o[s])===2)}function Ua(e,t,n){let r=(a,i,o,s=0,l="",c=!0)=>({id:a,label:t.aggregate&&t.event?e.t("multiSong.average","Average {metric}",{metric:i}):i,value:o,digits:s,unit:l,relative:c});if(t.sectionReference)return r("arena-section-reference",e.t("arena.sections.referenceTeam","Score reference team"),t.score?.mean??0);if(t.sectionPerformance)return t.sectionPerformance.versus?r("arena-section-wins",e.t("arena.sections.expectedWins","Expected sections won"),t.key,2,"",!1):r("arena-section-strength",e.t("arena.sections.weakestGain","Weakest section improvement"),(t.key-1)*100,2,"%",!1);if(t.aggregate&&!t.event)return r("arena-shared-mean",e.t("arena.mean","Average across songs"),t.key);if(n.goal==="potential"&&t.potential)return r("potential",e.t("potential","Potential"),t.potential.value);if((n.goal==="event"||n.goal==="plan")&&t.event){let a=t.event,i=!t.aggregate&&Et(e,t),o=i?e.t("averagePointsPerPlay","Average event points per play"):e.t("pointsPerPlay","Event points per play"),s=i?e.t("averageItemsPerPlay","Average items per play"):e.t("itemsPerPlay","Items per play"),l=i?e.t("averageCpPerPlay","Average challenge points per play"):e.t("cpPerPlay","Challenge points per play");if(a.rewardPlan){let m=a.rewardPlan,p=m.levels[0][0].metric;if(m.maximizeBonus)return r(`reward-plan:${JSON.stringify(m)}`,sr(e,p),a.mean,2,"%");let h=m.criterion==="min"?e.t("rewardPlan.min","Minimum reward"):m.criterion==="max"?e.t("rewardPlan.max","Highest reward"):m.levels[0].length>1?e.t("rewardPlan.converted","Converted rewards"):p==="points"?o:p==="items"?i?s:e.t("rewardPlan.itemsPerPlay","Badges per play"):l;return r(`reward-plan:${JSON.stringify(m)}`,h,a.mean,4,p==="points"?"PT":p==="challenge-points"?"CP":"")}if(n.weighted){let m=a.directMean??a.mean,p=a.otherMean??0,h=n.weightPoints>0?m:p,b=n.weightPoints>0?p:m;return r("weighted",e.t("weightedTotal","Weighted total per play"),n.weightPoints*h+n.weightItems*b+(n.route==="live"?n.weightCp*a.challengePoints:0),1)}let c=n.goal==="plan"?"points":n.measure,u=c==="items"?s:c==="challenge-points"?l:o,d=n.ptCycle&&n.route!=="challenge";return r(`${c}:${d?"converted":"direct"}`,d?`${u} / ${e.t("farm.converted","Direct rewards + CP conversion")}`:u,c==="challenge-points"?a.challengePoints:a.mean,1,c==="points"?"pt":c==="challenge-points"?"CP":"")}if(n.goal!=="power"&&t.score){let a=nn(n),i=t.score.orders,o=n.targetScore??0;if(a==="at-least"&&i.length){let s=n.targetRank===null?i.filter(l=>l>=o).length:Object.entries(t.score.ranks).reduce((l,[c,u])=>Number(c)>=n.targetRank?l+u:l,0);return r(a,rn(e,tn[a].metric),s/i.length*100,1,"%",!1)}return a==="capped"&&i.length?r(a,rn(e,tn[a].metric),i.reduce((s,l)=>s+Math.min(l,o),0)/i.length):r(a,rn(e,tn[a].metric),t.score[n.criterion])}return r("power",e.t("power","Power"),t.power)}function Dv(e){return typeof e=="number"&&Number.isFinite(e)?`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`:"\u2014"}var dl=(e,t,n)=>{let r=new Map;for(let a=t;a<=n;a++)r.set(e[a],a);return r},ul=me(class extends Ie{constructor(e){if(super(e),e.type!==q.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let a=[],i=[],o=0;for(let s of e)a[o]=r?r(s,o):o,i[o]=n(s,o),o++;return{values:i,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let a=Gt(e),{values:i,keys:o}=this.dt(t,n,r);if(!Array.isArray(a))return this.ut=o,i;let s=this.ut??=[],l=[],c,u,d=0,m=a.length-1,p=0,h=i.length-1;for(;d<=m&&p<=h;)if(a[d]===null)d++;else if(a[m]===null)m--;else if(s[d]===o[p])l[p]=Ge(a[d],i[p]),d++,p++;else if(s[m]===o[h])l[h]=Ge(a[m],i[h]),m--,h--;else if(s[d]===o[h])l[h]=Ge(a[d],i[h]),Ne(e,l[h+1],a[d]),d++,h--;else if(s[m]===o[p])l[p]=Ge(a[m],i[p]),Ne(e,a[d],a[m]),m--,p++;else if(c===void 0&&(c=dl(o,p,h),u=dl(s,d,m)),c.has(s[d]))if(c.has(s[m])){let b=u.get(o[p]),v=b!==void 0?a[b]:null;if(v===null){let x=Ne(e,a[d]);Ge(x,i[p]),l[p]=x}else l[p]=Ge(v,i[p]),Ne(e,a[d],v),a[b]=null;p++}else Fn(a[m]),m--;else Fn(a[d]),d++;for(;p<=h;){let b=Ne(e,l[h+1]);Ge(b,i[p]),l[p++]=b}for(;d<=m;){let b=a[d++];b!==null&&Fn(b)}return this.ut=o,at(e,l),ee}});var lr=class extends W{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return g`<span class="shadow"></span>`}};var za=Q`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`,Yv=za.styleSheet;var qa=class extends lr{};qa.styles=[za];qa=C([te("md-elevation")],qa);function Ha(e,t=Fe){let n=pn(e,t);return n&&(n.tabIndex=0,n.focus()),n}function Va(e,t=Fe){let n=Wa(e,t);return n&&(n.tabIndex=0,n.focus()),n}function It(e,t=Fe){for(let n=0;n<e.length;n++){let r=e[n];if(r.tabIndex===0&&t(r))return{item:r,index:n}}return null}function pn(e,t=Fe){for(let n of e)if(t(n))return n;return null}function Wa(e,t=Fe){for(let n=e.length-1;n>=0;n--){let r=e[n];if(t(r))return r}return null}function ru(e,t,n=Fe,r=!0){for(let a=1;a<e.length;a++){let i=(a+t)%e.length;if(i<t&&!r)return null;let o=e[i];if(n(o))return o}return e[t]?e[t]:null}function au(e,t,n=Fe,r=!0){for(let a=1;a<e.length;a++){let i=(t-a+e.length)%e.length;if(i>t&&!r)return null;let o=e[i];if(n(o))return o}return e[t]?e[t]:null}function Ga(e,t,n=Fe,r=!0){if(t){let a=ru(e,t.index,n,r);return a&&(a.tabIndex=0,a.focus()),a}else return Ha(e,n)}function Ka(e,t,n=Fe,r=!0){if(t){let a=au(e,t.index,n,r);return a&&(a.tabIndex=0,a.focus()),a}else return Va(e,n)}function Fe(e){return!e.disabled}var Z={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"},cr=class{constructor(t){this.handleKeydown=u=>{let d=u.key;if(u.defaultPrevented||!this.isNavigableKey(d))return;let m=this.items;if(!m.length)return;let p=It(m,this.isActivatable);u.preventDefault();let h=this.isRtl(),b=h?Z.ArrowRight:Z.ArrowLeft,v=h?Z.ArrowLeft:Z.ArrowRight,x=null;switch(d){case Z.ArrowDown:case v:x=Ga(m,p,this.isActivatable,this.wrapNavigation());break;case Z.ArrowUp:case b:x=Ka(m,p,this.isActivatable,this.wrapNavigation());break;case Z.Home:x=Ha(m,this.isActivatable);break;case Z.End:x=Va(m,this.isActivatable);break;default:break}x&&p&&p.item!==x&&(p.item.tabIndex=-1)},this.onDeactivateItems=()=>{let u=this.items;for(let d of u)this.deactivateItem(d)},this.onRequestActivation=u=>{this.onDeactivateItems();let d=u.target;this.activateItem(d),d.focus()},this.onSlotchange=()=>{let u=this.items,d=!1;for(let p of u){if(!p.disabled&&p.tabIndex>-1&&!d){d=!0,p.tabIndex=0;continue}p.tabIndex=-1}if(d)return;let m=pn(u,this.isActivatable);m&&(m.tabIndex=0)};let{isItem:n,getPossibleItems:r,isRtl:a,deactivateItem:i,activateItem:o,isNavigableKey:s,isActivatable:l,wrapNavigation:c}=t;this.isItem=n,this.getPossibleItems=r,this.isRtl=a,this.deactivateItem=i,this.activateItem=o,this.isNavigableKey=s,this.isActivatable=l,this.wrapNavigation=c??(()=>!0)}get items(){let t=this.getPossibleItems(),n=[];for(let r of t){if(this.isItem(r)){n.push(r);continue}let i=r.item;i&&this.isItem(i)&&n.push(i)}return n}activateNextItem(){let t=this.items,n=It(t,this.isActivatable);return n&&(n.item.tabIndex=-1),Ga(t,n,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){let t=this.items,n=It(t,this.isActivatable);return n&&(n.item.tabIndex=-1),Ka(t,n,this.isActivatable,this.wrapNavigation())}};function iu(e,t){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:e,reason:t,itemPath:[e]}})}var Ya=iu;var Ja={SPACE:"Space",ENTER:"Enter"},ct={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},su={ESCAPE:"Escape",SPACE:Ja.SPACE,ENTER:Ja.ENTER};function dr(e){return Object.values(su).some(t=>t===e)}function ow(e){return Object.values(Ja).some(t=>t===e)}function Za(e,t){let n=new Event("md-contains",{bubbles:!0,composed:!0}),r=[],a=o=>{r=o.composedPath()};return t.addEventListener("md-contains",a),e.dispatchEvent(n),t.removeEventListener("md-contains",a),r.length>0}var Xe={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"};var gn={END_START:"end-start",END_END:"end-end",START_START:"start-start",START_END:"start-end"},ur=class{constructor(t,n){this.host=t,this.getProperties=n,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){let{surfaceEl:t,anchorEl:n,anchorCorner:r,surfaceCorner:a,positioning:i,xOffset:o,yOffset:s,disableBlockFlip:l,disableInlineFlip:c,repositionStrategy:u}=this.getProperties(),d=r.toLowerCase().trim(),m=a.toLowerCase().trim();if(!t||!n)return;let p=window.innerWidth,h=window.innerHeight,b=document.createElement("div");b.style.opacity="0",b.style.position="fixed",b.style.display="block",b.style.inset="0",document.body.appendChild(b);let v=b.getBoundingClientRect();b.remove();let x=window.innerHeight-v.bottom,S=window.innerWidth-v.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,t.popover&&t.isConnected&&t.showPopover();let y=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),k=n.getSurfacePositionClientRect?n.getSurfacePositionClientRect():n.getBoundingClientRect(),[$,w]=m.split("-"),[E,M]=d.split("-"),P=getComputedStyle(t).direction==="ltr",{blockInset:A,blockOutOfBoundsCorrection:j,surfaceBlockProperty:K}=this.calculateBlock({surfaceRect:y,anchorRect:k,anchorBlock:E,surfaceBlock:$,yOffset:s,positioning:i,windowInnerHeight:h,blockScrollbarHeight:x});if(j&&!l){let R=$==="start"?"end":"start",N=E==="start"?"end":"start",U=this.calculateBlock({surfaceRect:y,anchorRect:k,anchorBlock:N,surfaceBlock:R,yOffset:s,positioning:i,windowInnerHeight:h,blockScrollbarHeight:x});j>U.blockOutOfBoundsCorrection&&(A=U.blockInset,j=U.blockOutOfBoundsCorrection,K=U.surfaceBlockProperty)}let{inlineInset:ve,inlineOutOfBoundsCorrection:ce,surfaceInlineProperty:Ue}=this.calculateInline({surfaceRect:y,anchorRect:k,anchorInline:M,surfaceInline:w,xOffset:o,positioning:i,isLTR:P,windowInnerWidth:p,inlineScrollbarWidth:S});if(ce&&!c){let R=w==="start"?"end":"start",N=M==="start"?"end":"start",U=this.calculateInline({surfaceRect:y,anchorRect:k,anchorInline:N,surfaceInline:R,xOffset:o,positioning:i,isLTR:P,windowInnerWidth:p,inlineScrollbarWidth:S});Math.abs(ce)>Math.abs(U.inlineOutOfBoundsCorrection)&&(ve=U.inlineInset,ce=U.inlineOutOfBoundsCorrection,Ue=U.surfaceInlineProperty)}u==="move"&&(A=A-j,ve=ve-ce),this.surfaceStylesInternal={display:"block",opacity:"1",[K]:`${A}px`,[Ue]:`${ve}px`},u==="resize"&&(j&&(this.surfaceStylesInternal.height=`${y.height-j}px`),ce&&(this.surfaceStylesInternal.width=`${y.width-ce}px`)),this.host.requestUpdate()}calculateBlock(t){let{surfaceRect:n,anchorRect:r,anchorBlock:a,surfaceBlock:i,yOffset:o,positioning:s,windowInnerHeight:l,blockScrollbarHeight:c}=t,u=s==="fixed"||s==="document"?1:0,d=s==="document"?1:0,m=i==="start"?1:0,p=i==="end"?1:0,b=(a!==i?1:0)*r.height+o,v=m*r.top+p*(l-r.bottom-c),x=m*window.scrollY-p*window.scrollY,S=Math.abs(Math.min(0,l-v-b-n.height));return{blockInset:u*v+d*x+b,blockOutOfBoundsCorrection:S,surfaceBlockProperty:i==="start"?"inset-block-start":"inset-block-end"}}calculateInline(t){let{isLTR:n,surfaceInline:r,anchorInline:a,anchorRect:i,surfaceRect:o,xOffset:s,positioning:l,windowInnerWidth:c,inlineScrollbarWidth:u}=t,d=l==="fixed"||l==="document"?1:0,m=l==="document"?1:0,p=n?1:0,h=n?0:1,b=r==="start"?1:0,v=r==="end"?1:0,S=(a!==r?1:0)*i.width+s,y=b*i.left+v*(c-i.right-u),k=b*(c-i.right-u)+v*i.left,$=p*y+h*k,w=b*window.scrollX-v*window.scrollX,E=v*window.scrollX-b*window.scrollX,M=p*w+h*E,P=Math.abs(Math.min(0,c-$-S-o.width)),A=d*$+S+m*M,j=r==="start"?"inset-inline-start":"inset-inline-end";return(l==="document"||l==="fixed")&&(r==="start"&&n||r==="end"&&!n?j="left":j="right"),{inlineInset:A,inlineOutOfBoundsCorrection:P,surfaceInlineProperty:j}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){let t=this.getProperties(),n=!1;for(let[o,s]of Object.entries(t))if(n=n||s!==this.lastValues[o],n)break;let r=this.lastValues.isOpen!==t.isOpen,a=!!t.anchorEl,i=!!t.surfaceEl;n&&a&&i&&(this.lastValues.isOpen=t.isOpen,t.isOpen?(this.lastValues=t,await this.position(),t.onOpen()):r&&(await t.beforeClose(),this.close(),t.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();let t=this.getProperties().surfaceEl;t?.popover&&t?.isConnected&&t.hidePopover()}};var xe={INDEX:0,ITEM:1,TEXT:2},mr=class{constructor(t){this.getProperties=t,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=n=>{this.isTypingAhead?this.typeahead(n):this.beginTypeahead(n)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(t){this.active&&(t.code==="Space"||t.code==="Enter"||t.code.startsWith("Arrow")||t.code==="Escape"||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((n,r)=>[r,n,n.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(n=>n[xe.ITEM].tabIndex===0)??null,this.lastActiveRecord&&(this.lastActiveRecord[xe.ITEM].tabIndex=-1),this.typeahead(t)))}typeahead(t){if(t.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),t.code==="Enter"||t.code.startsWith("Arrow")||t.code==="Escape"){this.endTypeahead(),this.lastActiveRecord&&(this.lastActiveRecord[xe.ITEM].tabIndex=-1);return}t.code==="Space"&&t.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=t.key.toLowerCase();let n=this.lastActiveRecord?this.lastActiveRecord[xe.INDEX]:-1,r=this.typeaheadRecords.length,a=l=>(l[xe.INDEX]+r-n)%r,i=this.typeaheadRecords.filter(l=>!l[xe.ITEM].disabled&&l[xe.TEXT].startsWith(this.typaheadBuffer)).sort((l,c)=>a(l)-a(c));if(i.length===0){clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[xe.ITEM].tabIndex=-1),this.endTypeahead();return}let o=this.typaheadBuffer.length===1,s;this.lastActiveRecord===i[0]&&o?s=i[1]??i[0]:s=i[0],this.lastActiveRecord&&(this.lastActiveRecord[xe.ITEM].tabIndex=-1),this.lastActiveRecord=s,s[xe.ITEM].tabIndex=0,s[xe.ITEM].focus()}};var ou=200,ml=new Set([Z.ArrowDown,Z.ArrowUp,Z.Home,Z.End]),lu=new Set([Z.ArrowLeft,Z.ArrowRight,...ml]);function cu(e=document){let t=e.activeElement;for(;t&&t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}var z=class extends W{get openDirection(){return this.menuCorner.split("-")[0]==="start"?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(t){this.currentAnchorElement=t,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=ou,this.anchorCorner=gn.END_START,this.menuCorner=gn.START_START,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=Xe.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=Oo(),this.listController=new cr({isItem:t=>t.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:t=>{t.selected=!1,t.tabIndex=-1},activateItem:t=>{t.selected=!0,t.tabIndex=0},isNavigableKey:t=>{if(!this.isSubmenu)return lu.has(t);let r=getComputedStyle(this).direction==="rtl"?Z.ArrowLeft:Z.ArrowRight;return t===r?!0:ml.has(t)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new mr(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new ur(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:this.positioning==="popover"?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&this.positioning!=="popover"?"move":"resize"})),this.onWindowResize=()=>{this.isRepositioning||this.positioning!=="document"&&this.positioning!=="fixed"&&this.positioning!=="popover"||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async t=>{let n=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(n))return;if(t.relatedTarget){if(Za(t.relatedTarget,this)||this.pointerPath.length!==0&&Za(t.relatedTarget,n))return}else if(this.pointerPath.includes(this))return;let r=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=r},this.onOpened=async()=>{this.lastFocusedElement=cu();let t=this.items,n=It(t);n&&this.defaultFocus!==Xe.NONE&&(n.item.tabIndex=-1);let r=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):r=!!await this.animateOpen(),this.defaultFocus){case Xe.FIRST_ITEM:let a=pn(t);a&&(a.tabIndex=0,a.focus(),await a.updateComplete);break;case Xe.LAST_ITEM:let i=Wa(t);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case Xe.LIST_ROOT:this.focus();break;default:case Xe.NONE:break}r||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=t=>{this.pointerPath=t.composedPath()},this.onDocumentClick=t=>{if(!this.open)return;let n=t.composedPath();!this.stayOpenOnOutsideClick&&!n.includes(this)&&!n.includes(this.anchorElement)&&(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(t){if(t.has("open")){if(this.open){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}update(t){t.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),t.has("positioning")&&this.positioning==="popover"&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return g`
      <div
        class="menu ${Ae(this.getSurfaceClasses())}"
        style=${Ki(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning==="popover"?"manual":f}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return g`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return g`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:this.positioning==="fixed","has-overflow":this.hasOverflow}}captureKeydown(t){t.target===this&&!t.defaultPrevented&&dr(t.code)&&(t.preventDefault(),this.close()),this.typeaheadController.onKeydown(t)}async animateOpen(){let t=this.surfaceEl,n=this.slotEl;if(!t||!n)return!0;let r=this.openDirection;this.dispatchEvent(new Event("opening")),t.classList.toggle("animating",!0);let a=this.openCloseAnimationSignal.start(),i=t.offsetHeight,o=r==="UP",s=this.items,l=500,c=50,u=250,d=(l-u)/s.length,m=t.animate([{height:"0px"},{height:`${i}px`}],{duration:l,easing:ot.EMPHASIZED}),p=n.animate([{transform:o?`translateY(-${i}px)`:""},{transform:""}],{duration:l,easing:ot.EMPHASIZED}),h=t.animate([{opacity:0},{opacity:1}],c),b=[];for(let S=0;S<s.length;S++){let y=o?s.length-1-S:S,k=s[y],$=k.animate([{opacity:0},{opacity:1}],{duration:u,delay:d*S});k.classList.toggle("md-menu-hidden",!0),$.addEventListener("finish",()=>{k.classList.toggle("md-menu-hidden",!1)}),b.push([k,$])}let v=S=>{},x=new Promise(S=>{v=S});return a.addEventListener("abort",()=>{m.cancel(),p.cancel(),h.cancel(),b.forEach(([S,y])=>{S.classList.toggle("md-menu-hidden",!1),y.cancel()}),v(!0)}),m.addEventListener("finish",()=>{t.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),v(!1)}),await x}animateClose(){let t,n=new Promise($=>{t=$}),r=this.surfaceEl,a=this.slotEl;if(!r||!a)return t(!1),n;let o=this.openDirection==="UP";this.dispatchEvent(new Event("closing")),r.classList.toggle("animating",!0);let s=this.openCloseAnimationSignal.start(),l=r.offsetHeight,c=this.items,u=150,d=50,m=u-d,p=50,h=50,b=.35,v=(u-h-p)/c.length,x=r.animate([{height:`${l}px`},{height:`${l*b}px`}],{duration:u,easing:ot.EMPHASIZED_ACCELERATE}),S=a.animate([{transform:""},{transform:o?`translateY(-${l*(1-b)}px)`:""}],{duration:u,easing:ot.EMPHASIZED_ACCELERATE}),y=r.animate([{opacity:1},{opacity:0}],{duration:d,delay:m}),k=[];for(let $=0;$<c.length;$++){let w=o?$:c.length-1-$,E=c[w],M=E.animate([{opacity:1},{opacity:0}],{duration:p,delay:h+v*$});M.addEventListener("finish",()=>{E.classList.toggle("md-menu-hidden",!0)}),k.push([E,M])}return s.addEventListener("abort",()=>{x.cancel(),S.cancel(),y.cancel(),k.forEach(([$,w])=>{w.cancel(),$.classList.toggle("md-menu-hidden",!1)}),t(!1)}),x.addEventListener("finish",()=>{r.classList.toggle("animating",!1),k.forEach(([$])=>{$.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),t(!0)}),n}handleKeydown(t){this.pointerPath=[],this.listController.handleKeydown(t)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(t){t.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(t){t.stopPropagation(),this.listController.onRequestActivation(t)}handleDeactivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1,this.slotItems.forEach(n=>{n.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}};C([Pe(".menu")],z.prototype,"surfaceEl",void 0);C([Pe("slot")],z.prototype,"slotEl",void 0);C([O()],z.prototype,"anchor",void 0);C([O()],z.prototype,"positioning",void 0);C([O({type:Boolean})],z.prototype,"quick",void 0);C([O({type:Boolean,attribute:"has-overflow"})],z.prototype,"hasOverflow",void 0);C([O({type:Boolean,reflect:!0})],z.prototype,"open",void 0);C([O({type:Number,attribute:"x-offset"})],z.prototype,"xOffset",void 0);C([O({type:Number,attribute:"y-offset"})],z.prototype,"yOffset",void 0);C([O({type:Boolean,attribute:"no-horizontal-flip"})],z.prototype,"noHorizontalFlip",void 0);C([O({type:Boolean,attribute:"no-vertical-flip"})],z.prototype,"noVerticalFlip",void 0);C([O({type:Number,attribute:"typeahead-delay"})],z.prototype,"typeaheadDelay",void 0);C([O({attribute:"anchor-corner"})],z.prototype,"anchorCorner",void 0);C([O({attribute:"menu-corner"})],z.prototype,"menuCorner",void 0);C([O({type:Boolean,attribute:"stay-open-on-outside-click"})],z.prototype,"stayOpenOnOutsideClick",void 0);C([O({type:Boolean,attribute:"stay-open-on-focusout"})],z.prototype,"stayOpenOnFocusout",void 0);C([O({type:Boolean,attribute:"skip-restore-focus"})],z.prototype,"skipRestoreFocus",void 0);C([O({attribute:"default-focus"})],z.prototype,"defaultFocus",void 0);C([O({type:Boolean,attribute:"no-navigation-wrap"})],z.prototype,"noNavigationWrap",void 0);C([Ft({flatten:!0})],z.prototype,"slotItems",void 0);C([jt()],z.prototype,"typeaheadActive",void 0);var Xa=Q`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`,Ew=Xa.styleSheet;var Qa=class extends z{};Qa.styles=[Xa];Qa=C([te("md-menu")],Qa);var Tt=class extends W{constructor(){super(...arguments),this.multiline=!1}render(){return g`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let t=!1,n=0;for(let r of this.textSlots)if(du(r)&&(n+=1),n>1){t=!0;break}this.multiline=t}};C([O({type:Boolean,reflect:!0})],Tt.prototype,"multiline",void 0);C([Wi(".text slot")],Tt.prototype,"textSlots",void 0);function du(e){for(let t of e.assignedNodes({flatten:!0})){let n=t.nodeType===Node.ELEMENT_NODE,r=t.nodeType===Node.TEXT_NODE&&t.textContent?.match(/\S/);if(n||r)return!0}return!1}var ei=Q`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`,zw=ei.styleSheet;var ti=class extends Tt{};ti.styles=[ei];ti=C([te("md-item")],ti);var gl=Symbol.for(""),uu=e=>{if(e?.r===gl)return e?._$litStatic$};var pr=(e,...t)=>({_$litStatic$:t.reduce((n,r,a)=>n+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[a+1],e[0]),r:gl}),pl=new Map,ni=e=>(t,...n)=>{let r=n.length,a,i,o=[],s=[],l,c=0,u=!1;for(;c<r;){for(l=t[c];c<r&&(i=n[c],(a=uu(i))!==void 0);)l+=a+t[++c],u=!0;c!==r&&s.push(i),o.push(l),c++}if(c===r&&o.push(t[r]),u){let d=o.join("$$lit$$");(t=pl.get(d))===void 0&&(o.raw=o,pl.set(d,t=o)),n=s}return e(t,...n)},fl=ni(g),Zw=ni(et),Xw=ni(Li);var gr=class{constructor(t,n){this.host=t,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(Ya(this.host,{kind:ct.CLICK_SELECTION}))},this.onKeydown=r=>{if(this.host.href&&r.code==="Enter"){let i=this.getInteractiveElement();i instanceof HTMLAnchorElement&&i.click()}if(r.defaultPrevented)return;let a=r.code;this.host.keepOpen&&a!=="Escape"||dr(a)&&(r.preventDefault(),this.host.dispatchEvent(Ya(this.host,{kind:ct.KEYDOWN,key:a})))},this.getHeadlineElements=n.getHeadlineElements,this.getSupportingTextElements=n.getSupportingTextElements,this.getDefaultElements=n.getDefaultElements,this.getInteractiveElement=n.getInteractiveElement,this.host.addController(this)}get typeaheadText(){if(this.internalTypeaheadText!==null)return this.internalTypeaheadText;let t=this.getHeadlineElements(),n=[];return t.forEach(r=>{r.textContent&&r.textContent.trim()&&n.push(r.textContent.trim())}),n.length===0&&this.getDefaultElements().forEach(r=>{r.textContent&&r.textContent.trim()&&n.push(r.textContent.trim())}),n.length===0&&this.getSupportingTextElements().forEach(r=>{r.textContent&&r.textContent.trim()&&n.push(r.textContent.trim())}),n.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:case"menuitem":case"option":return"li"}}get role(){return this.host.type==="option"?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(t){this.internalTypeaheadText=t}};var mu=En(W),ne=class extends mu{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new gr(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(t){this.menuItemController.setTypeaheadText(t)}render(){return this.renderListItem(g`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){let n=this.type==="link",r;switch(this.menuItemController.tagName){case"a":r=pr`a`;break;case"button":r=pr`button`;break;default:case"li":r=pr`li`;break}let a=n&&this.target?this.target:f;return fl`
      <${r}
        id="item"
        tabindex=${this.disabled&&!n?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||f}
        aria-selected=${this.ariaSelected||f}
        aria-checked=${this.ariaChecked||f}
        aria-expanded=${this.ariaExpanded||f}
        aria-haspopup=${this.ariaHasPopup||f}
        class="list-item ${Ae(this.getRenderClasses())}"
        href=${this.href||f}
        target=${a}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${t}</${r}>
    `}renderRipple(){return g` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return g` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return g`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}};ne.shadowRootOptions={...W.shadowRootOptions,delegatesFocus:!0};C([O({type:Boolean,reflect:!0})],ne.prototype,"disabled",void 0);C([O()],ne.prototype,"type",void 0);C([O()],ne.prototype,"href",void 0);C([O()],ne.prototype,"target",void 0);C([O({type:Boolean,attribute:"keep-open"})],ne.prototype,"keepOpen",void 0);C([O({type:Boolean})],ne.prototype,"selected",void 0);C([Pe(".list-item")],ne.prototype,"listItemRoot",void 0);C([Ft({slot:"headline"})],ne.prototype,"headlineElements",void 0);C([Ft({slot:"supporting-text"})],ne.prototype,"supportingTextElements",void 0);C([Gi({slot:""})],ne.prototype,"defaultElements",void 0);C([O({attribute:"typeahead-text"})],ne.prototype,"typeaheadText",null);var ri=Q`:host{display:flex;gap:16px;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;gap:inherit;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px);gap:inherit}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`,hk=ri.styleSheet;var ai=class extends ne{};ai.styles=[ri];ai=C([te("md-menu-item")],ai);function hl(e){return g`
    <span class="action-menu">
      <button
        id=${e.id}
        class="button button--text"
        type="button"
        aria-haspopup="menu"
        aria-controls=${`${e.id}-menu`}
        aria-expanded="false"
        @click=${t=>t.currentTarget.parentElement.querySelector("md-menu").show()}
      >
        ${e.label}
      </button>
      <md-menu
        id=${`${e.id}-menu`}
        anchor=${e.id}
        positioning="popover"
        @opened=${t=>t.currentTarget.parentElement.querySelector("button").setAttribute("aria-expanded","true")}
        @closed=${t=>t.currentTarget.parentElement.querySelector("button").setAttribute("aria-expanded","false")}
      >
        ${e.items.map(t=>g`
            <md-menu-item
              type=${t.href?"link":"button"}
              href=${t.href??f}
              ?disabled=${t.disabled}
              @close-menu=${n=>{let r=n.detail.reason;if(!t.run||t.disabled||r.kind!==ct.CLICK_SELECTION&&!(r.kind===ct.KEYDOWN&&(r.key==="Enter"||r.key==="Space")))return;n.currentTarget.closest("md-menu").addEventListener("closed",()=>t.run(),{once:!0})}}
            >
              ${t.leading||t.icon?g`
                      <span slot="start">${t.leading??L(t.icon,20)}</span>
                    `:f}
              <span slot="headline">${t.label}</span>
            </md-menu-item>
          `)}
      </md-menu>
    </span>
  `}var pu=e=>{let t=Math.max(0,Math.floor(e/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},ii=e=>`${(e/1e3).toFixed(1)}s`;function bl(e){let t=Math.max(1,e.durationMs),n=d=>`${Math.min(100,Math.max(0,d/t*100)).toFixed(3)}%`,r=e.bucketMs??500,a=Math.max(1,...e.density),i=d=>d.color?`--window-color:${d.color};--window-on-color:#fff;--window-text-shadow:0 0 2px rgb(0 0 0 / 0.6)`:"",o=e.density.map((d,m)=>`${m*r/t*1e3},${40-d/a*40}`).join(" "),s=[...e.windows].sort((d,m)=>d.startMs-m.startMs),l=[],c=s.map(d=>{let m=l.findIndex(p=>p<=d.startMs);return m<0&&(m=l.length),l[m]=d.endMs,{window:d,lane:m}}),u=Array.from({length:Math.floor(t/3e4)+1},(d,m)=>m*3e4).filter(d=>d<t);return g`
    <figure class="skill-timeline" style=${`--skill-lanes:${Math.max(1,l.length)}`}>
      <div class="skill-timeline__plot" role="img" aria-label=${e.label}>
        ${e.fever.map(([d,m],p)=>{let h=e.feverLabel?.(p);return g`<span class="skill-timeline__fever" style=${`inset-inline-start:${n(d)};width:calc(${n(m)} - ${n(d)})`}
            >${h?g`<span aria-hidden="true">${p+1}</span><span class="sr-only">${h}</span>`:f}</span
          >`})}
        <svg class="skill-timeline__density" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
          ${et`<polygon points=${`0,40 ${o} 1000,40`}></polygon>`}
        </svg>
        <div class="skill-timeline__lanes">
          ${c.map(({window:d,lane:m},p)=>g`
              <span
                class="skill-timeline__window"
                style=${`inset-inline-start:${n(d.startMs)};width:max(14px, calc(${n(d.endMs)} - ${n(d.startMs)}));--lane:${m};${i(d)}`}
                title=${`${p+1} / ${ii(d.startMs)}\u2013${ii(d.endMs)}`}
              >${p+1}</span>
            `)}
        </div>
      </div>
      <div class="skill-timeline__axis tabular" aria-hidden="true">
        ${u.map(d=>g`<span style=${`inset-inline-start:${n(d)}`}>${pu(d)}</span>`)}
      </div>
      <ol class="skill-timeline__events" role="list">
        ${s.map((d,m)=>g`
            <li style=${i(d)}>
              <span class="skill-timeline__index">${m+1}</span>
              ${d.image?g`<img src=${d.image} alt="" width="28" height="28" loading="lazy" decoding="async" />`:f}
              <span class="skill-timeline__label">${d.label}</span>
              <span class="skill-timeline__time tabular">${ii(d.startMs)}</span>
              ${d.value===void 0?f:g`<strong class="tabular">${d.value}</strong>`}
            </li>
          `)}
      </ol>
    </figure>
  `}var gu=[[/\/Gacha\/Banner\/gacha_banner_/u,{width:420,height:180}],[/\/Gacha\/Logo\/gacha_logo_/u,{width:460,height:240}],[/\/Image\/Event\/[^/]+\/Top\/event_top_/u,{width:1920,height:1440}],[/\/Image\/Event\/[^/]+\/Logo\/event_logo_/u,{width:460,height:240}],[/\/Story\/Banner\/Chapter\/ui_banner_chapter_/u,{width:420,height:180}],[/\/Story\/Banner\/Episode\/ui_banner_storyfriend_/u,{width:370,height:160}],[/\/Story\/Banner\/Episode\/ui_banner_chapter_/u,{width:490,height:160}],[/\/Story\/Image\/Episode\/ui_image_chapter_/u,{width:1024,height:768}],[/\/Story\/Image\/Chapter\/ui_image_chapter_/u,{width:1564,height:1268}],[/\/Story\/Icon\/ui_icon_chapter_event_/u,{width:460,height:240}],[/\/Story\/Icon\/ui_icon_chapter_/u,{width:750,height:290}],[/\/Adv\/Still\/[^/]+\/adv_still_/u,{width:1920,height:1080}],[/\/Character\/Image\/[^/]+\/character_thumbnail/u,{width:270,height:740}],[/\/Character\/Image\/[^/]+\/character_face_icon/u,{width:256,height:256}]],yl="haneoka.image-sizes.v1",fu=1500,vl=e=>(e.split("?")[0]||e).replace(/^https?:\/\/[^/]+/u,"").replace(/\((?:en|ko|ja|zh-Hant|zh-Hans)\)(?=\.[a-z0-9]+$)/iu,"");function hu(){let e=new Map;if(typeof localStorage>"u")return e;try{let t=JSON.parse(localStorage.getItem(yl)||"{}");for(let[n,r]of Object.entries(t))Array.isArray(r)&&r[0]>0&&r[1]>0&&e.set(n,{width:r[0],height:r[1]})}catch{}return e}var wl=hu(),dt=new Map(wl),si=0;function kl(e){if(typeof e!="string"||!e)return;let t=/\/public-media\/[a-f0-9]{64}\.[a-z]+\?size=(\d+)x(\d+)(?:&|$)/u.exec(e);if(t)return{width:Number(t[1]),height:Number(t[2])};let n=e.split("?")[0]||e;for(let[r,a]of gu)if(r.test(n))return a}function $l(e){if(!(typeof e!="string"||!e))return kl(e)??wl.get(vl(e))}function xl(e,t,n){if(typeof e!="string"||!e||!(t>0)||!(n>0)||kl(e))return;let r=vl(e),a=dt.get(r);if(!(a&&a.width===t&&a.height===n)){for(dt.delete(r),dt.set(r,{width:t,height:n});dt.size>fu;)dt.delete(dt.keys().next().value);si||typeof localStorage>"u"||(si=window.setTimeout(()=>{si=0;try{localStorage.setItem(yl,JSON.stringify(Object.fromEntries([...dt].map(([i,o])=>[i,[o.width,o.height]]))))}catch{}},1500))}}var fr=class extends Ji{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){let t=(1-this.value/this.max)*100;return g`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${t}></circle>
      </svg>
    `}renderIndeterminateContainer(){return g` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}};var oi=Q`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`,Fk=oi.styleSheet;var li=class extends fr{};li.styles=[oi];li=C([te("md-circular-progress")],li);function bu(e={}){let t=typeof e.value=="number"&&Number.isFinite(e.value)?Math.min(1,Math.max(0,e.value)):void 0;return t===void 0?Vi({label:e.label,className:"media-loading__progress"}):g`
    <md-circular-progress
      ${St(on)}
      class="media-loading__progress"
      .value=${t}
      aria-label=${e.label??f}
      aria-hidden=${e.label?f:"true"}
    ></md-circular-progress>
  `}var yu=e=>["tile__mark",`tile__mark--${e.at}`,e.image&&e.text==null?"tile__mark--image":e.accent?"tile__mark--accent":""].filter(Boolean).join(" ");function vu(e,t){let n=Number(e),r=Number(t);return Number.isFinite(n)&&n>0&&Number.isFinite(r)&&r>0?n/r:void 0}var wu={member:"3 / 4",support:"16 / 9",character:"3 / 4",comic:"4 / 3",story:"16 / 9",background:"16 / 9",system:"16 / 9",band:"3 / 1",song:1,stamp:1,item:1,"band-item":1,model:1};function Mt(e){let t=e.natural&&!(Number(e.width)>0&&Number(e.height)>0)?$l(e.image):void 0,n=Number(e.width)>0?Number(e.width):Number(t?.width),r=Number(e.height)>0?Number(e.height):Number(t?.height),i=vu(n,r)??e.aspectRatio??wu[e.kind??""],o=i===void 0?void 0:`--tile-ratio:${i};aspect-ratio:${i}`,s=e.onImageError||gt,l=c=>{if(!e.natural)return;let u=c.currentTarget;xl(e.image,u.naturalWidth,u.naturalHeight)};return g`
    <span
      class=${`tile__media media-loading ${e.fit?`tile__media--${e.fit}`:""}${e.serverMark?.image?" tile__media--server-mark":""}${e.kind==="member"||e.kind==="support"?` card-media card-media--${e.kind}`:""}`}
      style=${o||f}
    >
      ${e.media??(e.image?g`
              <img
                data-src=${e.image}
                data-fallback=${e.imageFallback||f}
                data-fallbacks=${e.imageCandidates?JSON.stringify(e.imageCandidates):f}
                alt=${e.label}
                width=${Number.isFinite(n)&&n>0?String(n):f}
                height=${Number.isFinite(r)&&r>0?String(r):f}
                decoding="async"
                referrerpolicy=${e.referrerPolicy??f}
                @load=${l}
                @error=${s}
              />
            `:e.placeholder??L("image",32))}
      <span class="tile__media-state" role="img" aria-label=${e.label} title=${e.label}>
        ${L("broken_image",24)}
      </span>
      ${bu()}
      ${(e.marks||[]).map(c=>c?g`
              <span
                class=${yu(c)}
                title=${c.label||f}
                style=${c.accent?`--mark:${c.accent}`:f}
              >
                ${c.image?g`
                        <img src=${_r(c.image)} alt="" width="16" height="16" />
                      `:f}
                ${c.text??f}
              </span>
            `:f)}
      ${e.mediaOverlay??f}
      ${e.serverMark?.image?g`<span class="tile__server-mark" style=${`--server-mark-size:${e.serverMark.size||18}px`} title=${e.serverMark.label}>
            <img src=${_r(e.serverMark.image)} alt=${e.serverMark.label} width=${e.serverMark.size||18} height=${e.serverMark.size||18} decoding="async" />
          </span>`:f}
    </span>
  `}function r$(e){let t=[e.label,e.serverMark?.image?e.serverMark.label:""].filter(Boolean).join(" / "),n=["tile","tile--interactive",e.kind?`tile--${e.kind}`:"",e.selected?"is-selected":""].filter(Boolean).join(" "),r=g`
    ${Mt(e)}
    <span class="tile__identity">
      <strong class="tile__title" lang=${e.titleLanguage||f}>${e.title}</strong>
      ${e.subtitle===null||e.subtitle===void 0?f:g`
              <small class="tile__subtitle">
                ${e.adornment??f}
                <span>${e.subtitle||" "}</span>
              </small>
            `}
    </span>
  `;return e.static?g`
      <div
        id=${e.id||f}
        class=${n.replace(" tile--interactive","")}
        role=${e.role??f}
        aria-controls=${e.controls??f}
        aria-selected=${e.selected===void 0?f:String(e.selected)}
        style=${e.style||f}
      >
        ${r}
      </div>
    `:e.href?g`
      <a
        id=${e.id||f}
        class=${n}
        href=${e.href}
        data-open-item=${e.itemId??f}
        role=${e.role??f}
        aria-controls=${e.controls??f}
        tabindex=${e.tabIndex??f}
        aria-selected=${e.selected===void 0?f:String(e.selected)}
        aria-label=${t}
        style=${e.style||f}
        @click=${e.onOpen??f}
      >
        ${r}
      </a>
    `:g`
    <button
      id=${e.id||f}
      class=${n}
      type="button"
      data-open-item=${e.itemId??f}
      aria-label=${t}
      role=${e.role??f}
      aria-controls=${e.controls??f}
      tabindex=${e.tabIndex??f}
      aria-selected=${e.selected===void 0?f:String(e.selected)}
      style=${e.style||f}
      @click=${e.onOpen??f}
    >
      ${r}
    </button>
  `}function Sl(e){let t=e.searchSettings,n=e.tab==="teams"||e.tab==="build"&&e.buildMode==="manual",r=e.tab==="song-comparison"?e.songComparison.effectiveSettings.songs:t.songs,a=n?e.manualGoal():e.goal(),i=e.tab==="song-comparison"||n?r.length:a?.kind==="power"?+!!a.song:a?.kind==="potential"||a?.kind==="event"&&a.route==="skip"?0:r.length,o=e.tab==="song-comparison"||t.goal==="gekiso"||t.goal==="event"&&t.ptMode==="gekiso",s=e.tab!=="song-comparison"&&!n?[...t.goal==="gekiso"?[[0,"COMBO"],[2,"JUST"],[1,"LUCK"]].filter(([l])=>t.minMissionMembers[l]>0).map(([l,c])=>`${e.t("missionMemberMinimum","{role} members (minimum)",{role:c})} ${t.minMissionMembers[l]}`):[],...o&&e.hasComboSongs()&&t.minComboBonus>1?[`COMBO BONUS \u2265 \xD7${t.minComboBonus}`]:[],...o&&t.justWindowMs>0?[`${e.t(t.justWindowMode==="partial"?"justCoverage.title":"justWindowTarget","JUST window")} ${t.justWindowUnit==="percent"?`+${t.justWindowPercent}%`:`\xB1${t.justWindowMs} ms`}${t.justWindowMode==="partial"?` / ${t.justCoveragePercent?`${t.justCoveragePercent}%`:e.t("justCoverage.oneNote","At least one note")}`:""}`]:[]]:[];return e.tab==="arena"?[`${e.catalog.bandName(e.arena.bandId)} ${e.t("chartCount","{count} charts",{count:i})}`,...s].join(" / "):[e.tab==="song-comparison"||n?e.t("manualTeam","Build a team by hand"):cn(e,t),e.t("chartCount","{count} charts",{count:i}),...o?[e.tab==="song-comparison"?`${e.t("placementRank","Specified placement")} ${e.songComparison.settings.ranks.map(l=>l??"\u2014").join(" / ")}`:n?`${e.t("placementRank","Specified placement")} ${t.gekisoRanks.join(" / ")}`:t.goal==="gekiso"?t.gekisoPlacementMode==="opponents"?e.t("placementOpponents","Opponent scores"):`${e.t("placementRank","Specified placement")} ${t.gekisoRanks.join(" / ")}`:`${e.t("placementRank","Specified placement")} 1`,...s]:[]].join(" / ")}function ci(e,t=e.inputIssues()){e.submitted||(t=t.filter(l=>!l.validation));let n=e.view?e.engineCards():{members:[],snaps:[]},r=n.members.length+n.snaps.length,a=t.find(l=>l.field==="tb-cards"),i=!!a&&e.searchSettings.scope==="box"&&!r,o=t.filter(l=>l.field!=="tb-cards"),s=(l,c,u,d,m)=>g`
    <li class=${`list-item list-item--two-line tb-check-row${l?" is-done":""}`}>
      <span class="list-item__leading tb-check-row__mark" aria-hidden="true">${l?L("check",20):c}</span>
      <span class="list-item__body">
        <strong class="list-item__headline">${u}</strong>
        ${d?g`<span class="list-item__supporting">${d}</span>`:f}
      </span>
      ${m?g`<span class="list-item__trailing"><button class=${`button ${m.primary?"button--tonal":"button--text"}`} type="button" @click=${m.run}>${m.label}</button></span>`:f}
    </li>
  `;return g`
    <section class="surface tb-results tb-checklist" role=${e.submitted&&t.length?"alert":f}>
      <h2 class="detail-section-title detail-section-title--h2">
        <span class="detail-section-title__icon" aria-hidden="true">${L("checklist",18)}</span>
        <span class="detail-section-title__label">${e.t("stepsLabel","Steps")}</span>
      </h2>
      <ol class="list">
        ${s(!a,1,cn(e,e.searchSettings),a?i?e.t("emptyBoxTitle","No cards imported yet"):a.message:e.t("stepCardsDone","{count} cards",{count:r}),i?{label:e.t("importMyCards","Import my cards"),run:()=>e.imports.openBox(),primary:!0}:a?{label:e.t("adjustCardRange","Adjust card range"),run:()=>void e.focusInput("tb-cards")}:{label:e.t("manageCards","Manage"),run:()=>e.setTab("box")})}
        ${o.length?o.map((l,c)=>s(!1,c+2,l.message,l.validation?"":e.t("stepRequired","Required"),{label:e.t("pt.fixInput","Edit"),run:async()=>{await e.focusInput(l.field),(l.field==="tb-songs"||l.field==="tb-challenge-songs")&&e.querySelector(`#${l.field} .tb-songs__add`)?.click()},primary:!a&&c===0})):s(!0,2,e.t("conditionsTitle","Conditions"),Sl(e))}
        ${s(!1,o.length+2,t.length?e.t("fixConditions","Adjust {count} conditions",{count:t.length}):e.t("readyToCalculate","Ready to calculate"),t.length?"":e.t("stepRun","Start from the settings"))}
      </ol>
    </section>
  `}function d$(e,t,n,r,a){let i=()=>typeof t=="function"?t():t,o=a?.summary??Sl(e),s=a?.validate!==!1&&e.submitted&&(e.tab==="arena"||e.tab==="pt"||e.tab==="build"&&e.buildMode!=="manual")?e.inputIssues(e.tab==="pt"&&e.searchSettings.rewardMode==="recommendation"):[],l=e.tab==="build"?g`<div class="tb-mode">${e.renderBuildMode()}</div>`:f,c=g`
    <div class="tb-operation">${n}${e.renderCompareTray()}</div>
  `;return g`
    <div class=${`tb-tool${e.compactConditions?" tb-tool--compact":" tb-tool--desktop"}`}>
      ${e.compactConditions?g`
              <section class="tb-condition-summary">
                ${l}
                <button id="tb-adjust" class="tb-condition-summary__open" type="button" @click=${()=>e.openConditions()}>
                  ${L("tune",20)}
                  <span class="tb-condition-summary__text">
                    <strong>${e.t("conditionsTitle","Conditions")}</strong>
                    <span>${o}</span>
                  </span>
                  ${L("chevron_right",20)}
                </button>
              </section>
              ${e.conditionsOpen?g`
                      <dialog
                        class="dialog tb-conditions"
                        data-managed-modal
                        ${Qn(()=>e.closeConditions())}
                        aria-labelledby="tb-conditions-title"
                      >
                        <header class="tb-conditions__header">
                          ${yt({icon:"close",label:e.common("common.actions.close","Close"),onClick:()=>e.closeConditions()})}
                          <h2 id="tb-conditions-title">${e.t("conditionsTitle","Conditions")}</h2>
                        </header>
                        <div class="tb-config-body stack">${i()}</div>
                        ${c}
                      </dialog>
                    `:f}
            `:g`
              <aside class="tb-config" aria-label=${e.t("conditionsTitle","Conditions")}>
                <div class="tb-config-body stack">${l}${i()}</div>
                ${c}
              </aside>
            `}
      <div class="tb-results-column" id="tb-progress" tabindex="-1">${s.length?ci(e,s):r}</div>
      ${e.compactConditions&&!e.conditionsOpen?g`
              <div class="tb-mobile-operation">${c}</div>
            `:f}
    </div>
  `}var hr=e=>`${e.songId}:${e.difficulty}`,y$=e=>[...new Map(e.map(t=>[hr(t),{...t}])).values()];function v$(e){let t=e.map(n=>n==="Combo"?"COMBO":n==="Luck"?"LUCK":n==="JustCount"?"JUST":"\u2014");return!t.length||t.every(n=>n==="\u2014")?"":t.every(n=>n===t[0])?`${t[0]} \xD7${t.length}`:t.join(" / ")}function ku(e){let t=e.map(a=>a.trim()?a.trim().split(/[\s,，、]+/u):[]),n=t.map(a=>a.map(Number).filter(i=>Number.isFinite(i)&&i>0)),r=t.map((a,i)=>a.length>4||a.length!==n[i].length);return{ranges:n,invalid:r,empty:n.every(a=>!a.length)}}function w$(e,t="score"){return t==="rewards"?e.ptSamplingMode==="manual"?e.ptLuckSamples:32:e.gekisoSamplingMode==="manual"?e.gekisoSeeds:e.arena?.objective==="sections"?32:0}var Rl=new WeakMap;function $u(e){if(!e)return null;let t=Rl.get(e);if(t!==void 0)return t;let n=ke(e?.liveTools.judgementTiming).find(a=>Number(a.noteJudgementType)===1&&Number(a.noteSimulateJudgement)===6&&Number(a.assistLevel)===0);if(!n)return null;let r=Math.min(Number(n.beforeMs),Number(n.afterMs));return Rl.set(e,r),r}function k$(e,t){if(e.justWindowUnit==="ms")return e.justWindowMs;let n=$u(t);return n===null?NaN:n*(1+e.justWindowPercent/100)}var $$=e=>{let t=e.justWindowUnit==="percent"?e.justWindowPercent:e.justWindowMs;return Number.isFinite(t)&&t>=0&&t<=Da};function x$(e){return e.justWindowMode==="off"||e.justWindowMs<=0?{}:e.justWindowMode==="steady"?{minJustWindowMs:e.justWindowMs}:{justWindow:{minimumMs:e.justWindowMs,minCoverage:e.justCoveragePercent/100,minDurationMs:e.justDurationSeconds*1e3,minContinuousMs:e.justContinuousSeconds*1e3}}}function S$(e){return e?.kind==="score"||e?.kind==="power"?e.challengeEventId:e?.kind==="event"&&e.route==="challenge"?e.eventId:null}function R$(e={},t){let n={...structuredClone($t),...e,songRules:Ri(e.songRules)};e.scopedSongAttribute!==!0&&n.songRules.musicType===t&&(n.songRules.musicType=0),n.scopedSongAttribute=!0,n.minRarity===2&&(n.minRarity=0),e.targetRank===void 0&&e.scoreTarget==="at-least"&&e.targetScore&&(n.targetRank=null),n.maxAccountBonuses=e.maxAccountBonuses===!0,n.skillRoles=co(e.skillRoles),n.minMissionMembers=e.minMissionMembers?.length===3?[...e.minMissionMembers]:[0,0,0],n.justWindowUnit=e.justWindowUnit??((e.justWindowMs??0)>0?"ms":"percent"),n.justWindowMode=e.justWindowMode??((e.justWindowMs??0)>0||(e.justWindowPercent??0)>0?"steady":"off"),n.gekisoRanks=e.gekisoRanks?[...e.gekisoRanks]:[n.gekisoRank,n.gekisoRank,n.gekisoRank],n.frameRate=[30,60,90,120].includes(n.frameRate)?n.frameRate:60,n.required={members:[],snaps:[]};let r=s=>Array.isArray(s)?[...new Set(s.filter(l=>typeof l=="number"&&Number.isSafeInteger(l)&&l>0))]:[];n.theoreticalExcluded={members:r(e.theoreticalExcluded?.members),snaps:r(e.theoreticalExcluded?.snaps)},pa||(n.playMode="ap"),n.gekisoSamplingMode=e.gekisoSamplingMode==="manual"&&(e.gekisoSeeds??0)!==0?"manual":"auto",n.ptSamplingMode=e.ptSamplingMode==="manual"?"manual":"auto";let{attribute:a,...i}=n.manualEvent;n.manualEvent={...i,attributes:i.attributes??(a?[a]:a===0?[]:null)},e.gekisoPlacementMode===void 0&&(n.gekisoPlacementMode=ku(n.gekisoOpponents).empty?"rank":"opponents");let o=e.goal==="event"||e.goal==="plan"?e.goal:n.rewardMode;if(!e.farming){let s=o==="event";n.farming={...en,play:s?n.route==="live"?"solo":n.route:n.ptMode,measure:n.measure==="items"||s?n.measure:"points",ptCycle:n.ptCycle,...s?Object.fromEntries(Object.keys(en).filter(l=>l in n).map(l=>[l,n[l]])):{},requireGrowth:!s,includeMemory:s}}return n.farming={...structuredClone(en),...n.farming,...pa?{}:{playMode:"ap"}},n.farming.weighted&&!n.farming.rewardPlan&&(n.farming.rewardPlan=mn(n.farming)),n.rewardMode=o==="plan"&&!n.manualEventEnabled?"plan":Su(n).rewardMode,n}function Cl(e){return e.play!=="gekiso"?{...e,playMode:e.play==="skip"?"ap":e.playMode,measure:e.play==="challenge"&&e.measure==="challenge-points"?"points":e.measure}:{...e,playMode:"ap",requireGrowth:!0,unknownPolicy:"min",includeMemory:!1,measure:e.measure==="items"?"items":"points",weighted:!1,fullRanking:!1,k:1,timeLimit:null}}function xu(e){let t=Cl(e);return(t.play!=="gekiso"||t.rewardRoomMode==="battle"&&t.rewardPlayers===5&&t.rewardOtherScore===null)&&t.aggregation!=="mean"&&!t.rewardPlan&&(t.play==="solo"||t.play==="gekiso")&&t.playMode==="ap"&&t.requireGrowth&&!t.includeMemory&&t.measure!=="challenge-points"&&!t.weighted&&!t.fullRanking&&t.k===1&&t.timeLimit===null?"recommendation":"event"}function Su(e){let t=e.manualEventEnabled?{...e.farming,play:e.farming.play==="challenge"?"solo":e.farming.play,ptCycle:!1}:e.farming,n=Cl(t),r=xu(n),a=n.rewardPlan??(n.aggregation==="mean"&&n.ptCycle?mn(n):null),i=e.manualEventEnabled&&a?{...a,options:{...a.options,"challenge-points":{...a.options["challenge-points"],auto:!1}}}:a;return{...e,...n,rewardPlan:i,rewardMode:r,goal:"event",farming:t,eventId:e.manualEventEnabled?e.manualEvent.templateId:e.eventId,route:n.play==="solo"||n.play==="gekiso"?"live":n.play,ptMode:n.play==="gekiso"?"gekiso":"solo",unknownPolicy:n.requireGrowth?"min":n.unknownPolicy,ptCycle:n.ptCycle}}var di=class extends W{static properties={source:{attribute:!1},window:{attribute:!1},active:{type:Boolean},locale:{},label:{},errorLabel:{},phase:{state:!0},numberNotes:{type:Boolean},whole:{type:Boolean},kinds:{attribute:!1},currentNote:{state:!0},coverage:{attribute:!1},annotations:{attribute:!1}};sourceKey="";controller;chart;geometry;skin;renderer;observer;drawFrame=0;marksKey="";needsFocus=!0;constructor(){super(),this.active=!1,this.locale="en",this.label="",this.errorLabel="",this.phase="idle",this.numberNotes=!1,this.whole=!1,this.kinds=new Map,this.annotations=new Map,this.currentNote=0}createRenderRoot(){return this}disconnectedCallback(){this.controller?.abort(),this.observer?.disconnect(),this.observer=void 0,cancelAnimationFrame(this.drawFrame),this.drawFrame=0,this.sourceKey="",this.chart=void 0,this.geometry=void 0,this.skin=void 0,this.phase="idle",this.marksKey="",super.disconnectedCallback()}willUpdate(){let t=JSON.stringify([this.window.steps.map(r=>[r.step,r.timeMs,r.noteIndices]),[...this.annotations],this.coverage]);t!==this.marksKey&&(this.marksKey=t,this.currentNote=0,this.needsFocus=!0);let n=JSON.stringify(this.source);n!==this.sourceKey&&(this.controller?.abort(),this.sourceKey=n,this.chart=void 0,this.geometry=void 0,this.skin=void 0,this.phase="idle",this.needsFocus=!0),this.active&&this.phase==="idle"&&this.load()}async load(){this.controller?.abort();let t=this.controller=new AbortController,{signal:n}=t,r=this.source;this.phase="loading";try{let[{buildChart:a,parseScore:i},{downloadChart:o},{ChartCanvasSkin:s},l]=await Promise.all([import("./dist-GVXR4X52.js"),import("./charts-DCM5UQ5F.js"),import("./overview-56SSPLS3.js"),import("./chart-overview-renderer-TKX6W7YX.js")]);n.throwIfAborted();let c=s.loadBundled();n.addEventListener("abort",()=>{c.then(p=>p.dispose(),()=>{})},{once:!0});let[u,d]=await Promise.all([o(r,n),c,l.loadChartCanvasFonts(this.locale,[...this.annotations.values()].join(" "))]);n.throwIfAborted();let m=i(u);this.chart=a(m),this.geometry=In(u,!0).geometry,this.skin=d,this.renderer=l,this.phase="ready"}catch(a){if(n.aborted)return;t.abort(),this.phase="error",console.warn("Unable to load timing chart",a)}}updated(){this.observer||(this.observer=new ResizeObserver(()=>this.queueDraw()),this.observer.observe(this.querySelector(".tb-timing__chart"))),this.queueDraw()}focusNote(t){this.currentNote=t-1,this.needsFocus=!0,this.requestUpdate()}queueDraw(){this.drawFrame||(this.drawFrame=requestAnimationFrame(()=>{this.drawFrame=0,this.draw()}))}draw(){if(!this.active||this.phase!=="ready")return;let t=this.querySelector(".tb-timing__chart");if(!t.clientWidth)return;let n=this.querySelector("canvas"),r=this.numberNotes?1.6:1,a=this.whole?0:Math.max(0,this.window.startMs-750),i=this.whole?this.chart.durationMs:Math.min(this.chart.durationMs,this.window.endMs+750),o=this.renderer.chartOverviewLayout(i-a,360,r);if(this.whole&&this.needsFocus&&this.window.steps.length){if(t.scrollWidth+1<o.width){this.queueDraw();return}let d=this.window.steps[this.currentNote],m=Math.floor(d.timeMs/o.panelDuration),p=Math.max(0,Math.min(t.scrollWidth-t.clientWidth,m*o.panelWidth-(t.clientWidth-o.panelWidth)/2));if(t.scrollLeft=p,Math.abs(t.scrollLeft-p)>1){this.queueDraw();return}this.needsFocus=!1}let s=this.whole?Math.max(0,Math.floor(t.scrollLeft/o.panelWidth)-1):0,l=this.whole?Math.min(o.panelCount-s,Math.ceil(t.clientWidth/o.panelWidth)+2):o.panelCount;n.style.position=this.whole?"absolute":"static",n.style.insetInlineStart=this.whole?`${s*o.panelWidth}px`:"",n.style.marginInline=this.whole?"0":"auto";let c=getComputedStyle(this),u={combo:c.getPropertyValue("--md-sys-color-primary-fixed-dim").trim(),skill:c.getPropertyValue("--md-sys-color-tertiary-fixed-dim").trim(),both:c.getPropertyValue("--md-sys-color-secondary-fixed-dim").trim()};this.renderer.drawDetailedChartOverview(n,this.chart,this.skin,360,{startMs:a,endMs:i,highlights:this.window.steps.map(d=>({...d,targets:d.noteIndices.map(m=>this.geometry[m]),color:u[this.kinds.get(d.step)??"combo"],selected:this.whole&&d.step===this.window.steps[this.currentNote]?.step,label:this.annotations.get(d.step)})),color:u.combo,labelEachTarget:this.numberNotes,bands:this.coverage?.segments.map(d=>({startMs:d.startMs,endMs:d.endMs,label:d.beforeMs===d.afterMs?`\xB1${d.beforeMs} ms`:`\u2212${d.beforeMs} / +${d.afterMs} ms`,color:u.combo,active:Math.min(d.beforeMs,d.afterMs)>=this.coverage.window.coverage.targetMs})),zoom:r},{first:s,count:l})}render(){let t=this.window.steps[this.currentNote],n=this.whole&&this.chart&&this.renderer?this.renderer.chartOverviewLayout(this.chart.durationMs,360,1.6):void 0;return g`${this.whole&&t?g`<div class="row row--between">
      <button class="button button--text button--icon" type="button" ?disabled=${this.currentNote===0}
        aria-label=${Be(this.locale,"tools.teamBuilder.timingPreviousNote")} @click=${()=>this.focusNote(t.step-1)}>${L("arrow_back")}</button>
      <span class="tabular">${Be(this.locale,"tools.teamBuilder.timingNoteNumber").replace("{number}",String(t.step))} / ${this.window.steps.length}</span>
      <button class="button button--text button--icon" type="button" ?disabled=${this.currentNote===this.window.steps.length-1}
        aria-label=${Be(this.locale,"tools.teamBuilder.timingNextNote")} @click=${()=>this.focusNote(t.step+1)}>${L("arrow_forward")}</button>
    </div>`:f}
    <div class="tb-timing__chart" tabindex="0" role="region" aria-label=${this.label} aria-busy=${String(this.phase==="loading")}
      @scroll=${()=>this.queueDraw()}>
      ${this.phase==="loading"?Mo(Be(this.locale,"common.states.loading"),{local:!0}):f}
      ${this.phase==="error"?_o(this.errorLabel,Be(this.locale,"common.actions.retry"),()=>void this.load()):f}
      <div class="tb-timing__chart-strip" style=${n?`inline-size:${n.width}px;block-size:${n.height}px`:""}>
        <canvas ?hidden=${this.phase!=="ready"} role="img" aria-label=${this.label}></canvas>
      </div>
    </div>`}};customElements.get("timing-chart-preview")||customElements.define("timing-chart-preview",di);var fn={1:"E",2:"D",3:"C",4:"B",5:"A",6:"S",7:"SS"};function Ru(e,t){let n=I(e,t.beforeMs,2),r=I(e,t.afterMs,2);return g`<span class="cluster"><span class="tabular">${n===r?`\xB1${n} ms`:`\u2212${n} / +${r} ms`}</span>
    ${t.meetsTarget?f:g`<span class="chip">${e.t("justWindowUnmet","Below the desired window")}</span>`}</span>`}var fe=re;function Cu(e,t){let n=fe(e);return n?t.goal==="event"&&(t.rewardMode==="recommendation"||t.farming.requireGrowth)?e.t("farm.requireGrowth","Complete growth first"):n.unknownPolicy==="max"?e.t("unknownMax","Count as max"):e.t("unknownMin","Count as minimum"):"\u2014"}function Eu(e,t){let n=F(e,t),r=fe(e,t);return[(t.song?e.catalog.songIdentity(t.song.songId):e.catalog.data.identity).server.toUpperCase(),...(st(e)?e.pt.stale:e.stale)?[e.t("stale","Conditions changed")]:[],`${e.t("unknownPolicy","Growth")}: ${Cu(e,n)}`,`${e.t("scope","Cards")}: ${cn(e,n)}`,`${e.t("goal","Goal")}: ${pi(e,t).label}`,...n.goal==="event"||n.goal==="plan"?[`${e.t("farm.memory","Character / song memory bonuses")}: ${n.goal==="plan"||n.farming.includeMemory&&n.rewardMode!=="recommendation"?e.t("farm.included","Included"):e.t("farm.excluded","Excluded")}`]:[],...t.event?.rewardPlan?[`${e.t("rewardPlan.order","Ranking")}: ${ll(e,t.event.rewardPlan)}`,...t.event.rewardPlan.minimumRank?[`${e.t("analysis.minimumRank","Every order reaches")} ${Yn(t.event.rewardPlan.minimumRank)}`]:[],...Object.entries(t.event.rewardValues??{}).map(([i,o])=>`${ge(e,i)}: ${I(e,o.value,4)}`)]:[],...r?.goal.kind==="event"&&r.goal.weights?[`${e.t("weightPoints","Weight per event point")}: ${r.goal.weights.points} / ${e.t("weightItems","Weight per shop item")}: ${r.goal.weights.items} / ${e.t("weightCp","Weight per challenge point")}: ${r.goal.weights.challengePoints}`]:[],...r?.goal.kind==="event"&&r.goal.gekiso&&r.goal.rewardRoom?[r.goal.rewardRoom.mode==="solo"?e.t("rewardPlan.solo","Solo Mission"):`${e.t("rewardPlan.battle","Multiplayer")} / ${e.t("rewardPlan.players","Players")}: ${r.goal.rewardRoom.players} / ${e.t("rewardPlan.otherScore","Other players\u2019 average score")}: ${r.goal.rewardRoom.otherAverageScore===void 0?e.t("rewardPlan.equalScore","Same score as you"):I(e,r.goal.rewardRoom.otherAverageScore)}`]:[],...r?.goal.kind==="score"&&r.goal.target?["rank"in r.goal.target?`${e.t("targetGrade","Target grade")}: ${Yn(r.goal.target.rank)}`:`${e.t("targetScore","Target score")}: ${I(e,r.goal.target.score)}`]:[],...r&&"play"in r.goal?[Object.entries(r.goal.play).map(([i,o])=>i==="cumulativeTiming"?e.t(o==="best"?"criterionMaxBestTiming":"criterionMaxWorstTiming",o==="best"?"Maximum score \xB7 best timing":"Maximum score \xB7 worst timing"):i==="frameRate"?`${e.t("frameRate","Game frame rate (FPS)")}: ${o}`:i==="missEvery"?`${e.t("missEvery","Miss every N notes")}: ${o}`:`${i.toUpperCase()} ${I(e,o*100,2)}%`).join(" / ")]:[],...r?.goal.kind==="gekiso"?[`GREAT ${I(e,r.goal.accuracy.great*100,2)}% / JUST ${I(e,r.goal.accuracy.just*100,2)}% / ${e.t("missEvery","Miss every N notes")}: ${r.goal.accuracy.missEvery??0}`,r.goal.seeds===0?`${e.t("pt.luckSampling","LUCK calculation")}: ${e.t("luckExpectation","Probability expectation")}`:`${e.t("luckSimulationCount","Simulation runs")}: ${r.goal.seeds}`,`${e.t("gekisoPlacements","Scoring placements")}: ${r.goal.opponents?e.results?.results.find(i=>i.hits.includes(t))?.placements?.join(" / ")??"\u2014":r.goal.ranks?.join(" / ")??r.goal.rank}`]:r?.goal.kind==="event"&&r.goal.gekiso&&n.route!=="challenge"?[`JUST ${I(e,r.goal.gekiso.just*100,2)}% / ${e.t("gekisoPlacements","Scoring placements")}: 1`,`${e.t("pt.luckSamples","Luck samples")}: ${r.goal.gekiso.luckSamples}`]:[],...(n.goal==="event"||n.goal==="plan")&&n.eventId!==null?[`${n.manualEventEnabled?e.t("manualEvent.summary","Manual / Rules"):e.t("event","Event")}: ${e.catalog.events().find(i=>i.id===n.eventId)?.name??n.eventId}`,n.route==="challenge"?e.t("routeChallenge","Challenge live"):n.route==="skip"?e.t("routeSkip","Skip"):e.t("routeLive","Normal live")]:[],...n.goal==="event"&&n.manualEventEnabled?[e.t("manualEvent.attribute","Bonus attribute")+": "+(n.manualEvent.attributes?.length?n.manualEvent.attributes.map(i=>e.catalog.attributeName(i)).join(" / "):e.t("manualEvent.none","None")),e.t("manualEvent.targets","Bonus targets")+": "+(n.manualEvent.targetKind==="none"?e.t("manualEvent.none","None"):n.manualEvent.targets.map(i=>n.manualEvent.targetKind==="band"?e.catalog.bandName(i):e.catalog.characterName(i)).join(" / ")),...["members","snaps"].flatMap(i=>n.manualEvent[i].map(o=>e.catalog.cardName(i,o.cardId)+" / "+JSON.parse(o.tier).filter(s=>s[0]!==2).map(s=>e.t(s[0]===0?"measurePoints":"measureItems",s[0]===0?"Event points":"Shop items")+" +"+s[1].map(l=>l/100).join("/")+"%").join(" / ")))]:[],...n.goal==="plan"?[`${e.t("planBudget","Boosts to spend")}: ${n.planBudget} / ${e.t("planStartCp","Challenge points now")}: ${n.planStartingCp}`]:[],...n.goal==="event"||n.goal==="plan"?[`${n.route==="challenge"?"CP":"Boost"}: ${n.route==="challenge"?n.challengePoints:n.boosts}`]:[]]}function ui(e,t,n=F(e).arena??fe(e)?.songRules??null){let r=e.catalog,a=n?.musicType||Number(r.song(t.songId).musicType),i=r.attributeIcon(a),o=r.songTitle(t.songId),s=ms({server:r.songIdentity(t.songId).server,locale:e.locale,kind:"songs",id:String(t.songId)});return g`
    <div class="tb-result-song">
      <a class="tb-result-song__cover" href=${s} aria-label=${o}>
        ${Mt({...r.songOptions(t.songId,t.difficulty),marks:[],serverMark:void 0})}
      </a>
      <div class="stack stack--tight">
        <div class="row tb-result-song__heading">
          ${i?g`
                <img
                  class="tb-result-song__attribute"
                  src=${i}
                  width="24"
                  height="24"
                  alt=${r.attributeName(a)}
                  title=${r.attributeName(a)}
                  decoding="async"
                />
              `:f}
          <a href=${s} lang=${r.songTitleLanguage(t.songId)}>${o}</a>
        </div>
        <div class="cluster tb-result-song__meta">
          <span class="supporting-text">${r.difficultyLabel(t.songId,t.difficulty)}</span>
          <span class="row tb-result-song__band">
            ${Hn(r.songPerformer(t.songId))}
            <span>${r.songArtist(t.songId)}</span>
          </span>
        </div>
      </div>
    </div>
  `}function El(e,t,n){let r=fe(e),a=t==="members"?r?.members.find(i=>i.key===n):r?.snaps.find(i=>i.key===n);return a&&r?e.catalog.resolvedGrowth(t,a,r.unknownPolicy):null}var Il=new Map;function I(e,t,n=0){let r=`${e.locale}:${n}`,a=Il.get(r);return a||(a=new Intl.NumberFormat(e.locale,{maximumFractionDigits:n}),Il.set(r,a)),a.format(t)}function Iu(e,t){if(!t.event)return f;let n=fe(e,t),r=e.master,a=null;if(n&&r&&(n.goal.kind==="event"||n.goal.kind==="plan")){let i=(n.goal.kind==="event"?n.goal.eventEffects:void 0)??r.events.get(n.goal.eventId)?.effects,o=t.snaps.filter(l=>l!==null),s=Dt(r,n.members.filter(l=>t.members.includes(l.key)),n.snaps.filter(l=>o.includes(l.key)),n.unknownPolicy);i&&s.members.length===t.members.length&&s.snaps.length===o.length&&(a=[0,1].map(l=>(s.members.reduce((c,u)=>c+Nt(i,u,l),0)+s.snaps.reduce((c,u)=>c+Bt(i,u,l),0))/100))}return g`
    <dl class="spec-list spec-list--split spec-list--numeric">
      ${[e.t("pointsBonus","Point bonus"),e.t("itemsBonus","Item bonus")].map((i,o)=>g`
        <div>
          <dt>${i}</dt>
          <dd>${a?`${a[o]>=0?"+":""}${I(e,a[o],Number.isInteger(a[o])?0:2)}%`:"\u2014"}</dd>
        </div>
      `)}
    </dl>
  `}var mi=e=>`${e.song?`${e.song.songId}:${e.song.difficulty}`:"-"}|${e.members.join(",")}|${e.snaps.join(",")}`;function Tu(e,t){let n=t.directMean??t.mean,r=t.otherMean??0;return e.weightPoints>0?{points:n,items:r}:{points:r,items:n}}function pi(e,t){let n=Ua(e,t,F(e,t));return{label:n.label,value:`${I(e,n.value,n.digits)}${n.unit?` ${n.unit}`:""}`}}function Al(e,t){if(!Et(e,t))return;if(t.event)return e.t("sampledScoreRange","Sampled score range");let n=fe(e,t)?.goal;if(n?.kind==="gekiso"&&n.criterion==="mean")return e.t("orderMeanScoreRange","Range of skill-order averages")}function yr(e,t,n=!1){let r=F(e,t),a=r.weighted?r.weightPoints>0?e.t("pointsBonus","Point bonus"):e.t("itemsBonus","Item bonus"):r.measure==="items"?e.t("itemsBonus","Item bonus"):e.t("pointsBonus","Point bonus"),i=[],o,s=new Map,l=(p,h,b)=>{let v=g`
      <span class="tb-chip">
        ${b??f}
        <span class="tb-chip__label">${p}</span>
        <strong class="tabular">${h}</strong>
      </span>
    `;return s.set(v,p),v},c=(p,h,b)=>g`
    <span class="tb-number">${I(e,p,b)}</span> – <span class="tb-number">${I(e,h,b)}</span>
  `;if(t.aggregate)return i.push(l(e.t("arena.meanPower","Average power"),I(e,t.power),L("bolt",16))),Et(e,t)&&(t.score&&i.push(l(e.t("averageSongScoreRanges","Average of song score ranges"),c(t.score.min,t.score.max))),t.event&&i.push(l(e.t("averageSongRewardRanges","Average of song direct reward ranges"),c(t.event.perPlayMin,t.event.perPlayMax,2)))),i;if(r.goal!=="power"&&i.push(l(e.t("power","Power"),I(e,t.power),L("bolt",16))),t.score){(r.goal!=="score"&&r.goal!=="gekiso"||nn(r)!=="mean")&&i.push(l(e.t("expectedScore","Average score"),I(e,t.score.mean))),i.push(l(Al(e,t)??e.t("scoreRange","Range"),c(t.score.min,t.score.max)));let h=Object.entries(t.score.ranks).sort((b,v)=>Number(v[0])-Number(b[0]))[0];h&&(o=fn[h[0]]??h[0],i.push(l(r.goal==="score"?`${o} ${e.t("rankReachRate","Clear rate")}`:o,`${I(e,h[1]/Object.values(t.score.ranks).reduce((b,v)=>b+v,0)*100,h[1]===Object.values(t.score.ranks).reduce((b,v)=>b+v,0)?0:1)}%`,L("workspace_premium",16))))}let u=re(e,t);if(r.goal==="gekiso"&&u&&e.master){let p=new Map(u.members.map(b=>[b.key,b.cardId])),h=nl(e.master,t.members.map(b=>p.get(b)).filter(b=>b!==void 0));for(let[b,v]of[[0,"COMBO"],[2,"JUST"],[1,"LUCK"]])i.push(l(e.t("missionMemberCount","{role} members",{role:v}),String(h[b])))}if(t.comboBonus!=null&&i.push(l(e.t("comboBonus","Base COMBO BONUS"),`\xD7${I(e,t.comboBonus)}`)),t.event?.rewardValues)for(let[p,h]of Object.entries(t.event.rewardValues))i.push(l(ge(e,p),I(e,h.value,4)));else if(t.event){if(r.goal==="event"&&(r.measure==="challenge-points"&&!r.weighted||r.weighted&&r.weightPoints===0&&r.weightItems===0)||i.push(l(a,`+${I(e,Math.floor(t.event.bonusPercent),0)}%`,L("trending_up",16))),r.goal==="event"&&r.weighted&&(r.weightPoints>0||r.weightItems>0)){let{points:p,items:h}=Tu(r,t.event);i.push(l(e.t("pointsPerPlay","Event points per play"),I(e,p,1))),i.push(l(e.t("itemsPerPlay","Items per play"),I(e,h,1)))}(r.goal==="event"||r.goal==="plan")&&!r.weighted&&r.measure!=="challenge-points"&&t.event.otherMean!=null&&i.push(l(r.measure==="items"?e.t("pointsPerPlay","Event points per play"):e.t("itemsPerPlay","Items per play"),I(e,t.event.otherMean,1))),t.event.challengePoints&&r.measure!=="challenge-points"&&i.push(l(e.t("cpPerPlay","Challenge points per play"),I(e,t.event.challengePoints,1)))}t.event&&!n&&Et(e,t)&&i.push(l(e.t("sampledDirectRewardRange","Sampled direct reward range"),c(t.event.perPlayMin,t.event.perPlayMax,2)));let d=r.goal==="gekiso"&&r.gekisoPlacementMode==="opponents"?e.results?.results.find(p=>p.song?.songId===t.song?.songId&&p.song?.difficulty===t.song?.difficulty)?.placements:void 0;if(d&&i.push(l(e.t("gekisoPlacements","Placements"),d.join(" / "),L("leaderboard",16))),t.skipScore!==null&&i.push(l(e.t("skipScore","Skip score"),I(e,t.skipScore),L("fast_forward",16))),t.potential&&i.push(l(e.t("skillCoverage","Skill coverage"),`${I(e,t.potential.area*100,0)}%\xB7s`)),!n)return i;let m=t.event?.rewardPlan?["PT","CP",ge(e,"items")]:r.goal==="event"||r.goal==="plan"?[r.measure==="items"?e.t("pointsPerPlay","Event points per play"):e.t("itemsPerPlay","Items per play"),t.comboBonus!=null?e.t("comboBonus","Base COMBO BONUS"):a,o??e.t("power","Power")]:r.goal==="gekiso"?[e.t("comboBonus","Base COMBO BONUS"),e.t("gekisoPlacements","Placements"),e.t("power","Power")]:[e.t("power","Power"),e.t("scoreRange","Range"),...r.goal==="score"&&o?[`${o} ${e.t("rankReachRate","Clear rate")}`]:[]];return[...m.flatMap(p=>i.filter(h=>s.get(h)===p)),...i.filter(p=>!m.includes(s.get(p)))].slice(0,3)}function gi(e,t,n=0,r=!0){let a=e.catalog,i=t.map((o,s)=>s).filter(o=>o!==n);return n>=0&&i.splice(Math.min(2,i.length),0,n),g`
    <ol class=${r?"tb-formation":"tb-formation tb-formation--readonly"} aria-label=${e.t("formation","Formation")}>
      ${i.map(o=>{let{member:s,snap:l,memberGrowth:c,snapGrowth:u,title:d,flag:m}=t[o],p=a.cardOptions("members",s,c),h=l!==null?a.cardOptions("snaps",l,u):null;return g`
          <li
            class=${`tb-slot${o===n?" is-leader":""}`}
            aria-label=${o===n?e.t("leader","Leader"):f}
            title=${d??a.characterName(a.member(s)?.characterId??0)}
          >
            <button
              class="tb-slot__member"
              type="button"
              ?disabled=${!r}
              aria-label=${r?`${e.t("editGrowth","Edit growth")}: ${p?.label??s}`:p?.label??String(s)}
              @click=${()=>{e.editing={kind:"members",cardId:s},e.requestUpdate()}}
            >
              ${p?Mt(p):f}
            </button>
            <button
              class="tb-slot__snap"
              type="button"
              ?disabled=${!r||l===null}
              aria-label=${h?r?`${e.t("editGrowth","Edit growth")}: ${h.label}`:h.label:e.t("noSnap","No snap")}
              @click=${()=>{l!==null&&(e.editing={kind:"snaps",cardId:l},e.requestUpdate())}}
            >
              ${h?Mt(h):g`
                      <span class="tb-slot__empty"><small>${e.t("noSnap","No snap")}</small></span>
                    `}
            </button>
            ${m??f}
          </li>
        `})}
    </ol>
  `}function Ll(e,t){let n=e.catalog;return gi(e,t.members.map((r,a)=>{let i=le(r),o=t.snaps[a];return{member:i,snap:o?le(o):null,memberGrowth:El(e,"members",r),snapGrowth:o?El(e,"snaps",o):null,title:`${n.characterName(n.member(i)?.characterId??0)} / ${e.t("slotPower","Slot power")} ${I(e,t.slotPowers[a]??0)}`,flag:!e.view?.members.has(i)&&F(e).scope==="theoretical"?g`<span class="tb-slot__flag">${e.t("notOwned","Not owned")}</span>`:void 0}}))}function fi(e,t){let n=fe(e,t)?.goal,r=F(e,t);return r.goal==="gekiso"?{players:5}:n?.kind!=="event"||!n.gekiso||r.route!=="live"||n.rewardRoom?.mode==="solo"?null:n.rewardRoom??{players:5}}function _t(e,t){if(!t)return e.required;let n=Math.trunc(Math.sqrt(5/t.players)*e.battleRequired*t.players);return t.otherAverageScore===void 0?Math.ceil(n/t.players):Math.max(0,n-t.otherAverageScore*(t.players-1))}function Mu(e,t,n){let r=t.score;if(!r)return g``;let a=fi(e,t),i=(n?e.master?.scoreRanks.get(e.master.songs.get(n.songId)?.rankGroup??0)??[]:[]).filter(u=>!a||u.battleRequired!==0).map(u=>({rank:u.rank,required:_t(u,a)})),o=Math.min(r.min,...i.filter(u=>u.required>=r.min*.9&&u.required<=r.max*1.05).map(u=>u.required)),s=Math.max(r.max,...i.filter(u=>u.required<=r.max*1.1&&u.required>=r.min).map(u=>u.required)),l=Math.max(1,s-o),c=u=>`${((u-o)/l*100).toFixed(2)}%`;return g`
    <div
      class="tb-dist"
      role="img"
      aria-label=${`${Al(e,t)??e.t("scoreRange","Range")}: ${I(e,r.min)} \u2013 ${I(e,r.max)}, ${e.t("median","median")} ${I(e,r.median)}`}
    >
      <div class="tb-dist__track">
        <span
          class="tb-dist__range"
          style=${`inset-inline-start:${c(r.min)};inset-inline-end:calc(100% - ${c(r.max)})`}
        ></span>
        <span
          class="tb-dist__mark tb-dist__mark--median"
          style=${`inset-inline-start:${c(r.median)}`}
          title=${e.t("median","median")}
        ></span>
        <span
          class="tb-dist__mark tb-dist__mark--mean"
          style=${`inset-inline-start:${c(r.mean)}`}
          title=${e.t("mean","mean")}
        ></span>
        ${i.filter(u=>u.required>o&&u.required<s).map(u=>g`
              <span class="tb-dist__threshold" style=${`inset-inline-start:${c(u.required)}`}>
                <small>${fn[String(u.rank)]}</small>
              </span>
            `)}
      </div>
      <div class="row row--between tb-dist__labels tabular">
        <span>${I(e,r.min)}</span>
        <span>${e.t("median","median")} ${I(e,r.median)}</span>
        <span>${I(e,r.max)}</span>
      </div>
      <div class="cluster">
        ${Object.entries(r.ranks).sort((u,d)=>Number(d[0])-Number(u[0])).map(([u,d])=>g`
              <span class="tb-chip">
                <span class="tb-chip__label">${fn[u]??u}</span>
                <strong class="tabular">
                  ${I(e,d/Object.values(r.ranks).reduce((m,p)=>m+p,0)*100,d===Object.values(r.ranks).reduce((m,p)=>m+p,0)?0:1)}%
                </strong>
              </span>
            `)}
      </div>
    </div>
  `}function _u(e,t,n){let r=t.score,a=n?e.master?.songs.get(n.songId):void 0;if(!r?.orders.length||!a||!t.power)return g``;let i=a.difficulties.find(u=>u.difficulty===n.difficulty)?.noteCount??0,o=fi(e,t),s=F(e,t).goal==="gekiso"?[1,2,3,4,5].map(u=>({players:u})):o?[o]:[],l=(e.master?.scoreRanks.get(a.rankGroup)??[]).filter(u=>u.rank>=3&&(!s.length||u.battleRequired!==0)).sort((u,d)=>d.rank-u.rank);if(!l.length)return g``;let c=u=>Qi(u,r.orders,t.power,i);return g`
    <div
      class="table-scroll"
      role="region"
      tabindex="0"
      aria-label=${e.t("powerNeeded","Power needed")}
      data-scroll-region
    >
      <table class="data-table">
        <thead>
          <tr>
            <th scope="col">${e.t("powerNeeded","Power needed")}</th>
            ${s.length?s.map(({players:u})=>g`
                      <th scope="col" class="is-numeric">
                        ${(u===1?e.t("roomPlayer","1 player"):e.t("roomPlayers","{count} players")).replace("{count}",String(u))}
                      </th>
                    `):g`
                    <th scope="col" class="is-numeric">${e.t("averageOrder","Average of the orders")}</th>
                    <th scope="col" class="is-numeric">${e.t("everyOrder","Every order")}</th>
                    <th scope="col" class="is-numeric">${e.t("bestOrder","Best order")}</th>
                  `}
          </tr>
        </thead>
        <tbody>
          ${l.map(u=>g`
              <tr>
                <th scope="row">${fn[String(u.rank)]}</th>
                ${s.length?s.map(d=>g`
                          <td class="is-numeric tabular">
                            ${I(e,c(_t(u,d)).mean)}
                          </td>
                        `):(()=>{let d=c(_t(u,null));return g`
                          <td class="is-numeric tabular">${I(e,d.mean)}</td>
                          <td class="is-numeric tabular">${I(e,d.every)}</td>
                          <td class="is-numeric tabular">${I(e,d.best)}</td>
                        `})()}
              </tr>
            `)}
        </tbody>
      </table>
    </div>
  `}var Pu=new Map(Ee.map((e,t)=>[e.join(","),t])),Tl=new WeakMap,Au=0;function hi(e,t){let n=Ke(t)?.input??fe(e)??e,r=Tl.get(n);return r||(r={id:++Au,swapPick:new Map,firingOrder:new Map,shownTimeline:new Map,timelines:new Map},Tl.set(n,r)),r}function bi(e,t){return`${hi(e,t).id}|${F(e,t).route}|${mi(t)}`}function Ml(e,t,n,r=!1){let{timelines:a}=hi(e,t),i=`${bi(e,t)}|${n}|${r?"timing":"chart"}`,o=a.get(i);if(o)return o;let s=fe(e,t),l=e.engine;if(s&&l&&t.song&&!e.running&&!e.manualBusy){a.set(i,"loading");let c=()=>e.isConnected&&e.engine===l,u=r?Qe({hit:t,input:s}):void 0;l.explain({songRules:s.songRules,...s.goal.kind==="gekiso"&&s.goal.arena?{arena:s.goal.arena}:{},members:s.members,snaps:s.snaps,unknownPolicy:s.unknownPolicy,team:{members:t.members,snaps:t.snaps,leader:t.members[0]},song:t.song,eventOrder:Ee[n].map(d=>t.members[d]),play:"play"in s.goal?s.goal.play:s.goal.kind==="gekiso"?{great:s.goal.accuracy.great,good:0,bad:0,miss:0,missEvery:s.goal.accuracy.missEvery}:{great:0,good:0,bad:0,miss:0},...u?{timing:{player:s.player,play:u.play,gekiso:u.gekiso,challengeEventId:s.goal.kind==="score"?s.goal.challengeEventId:s.goal.kind==="event"&&s.goal.route==="challenge"?s.goal.eventId:null}}:{}}).then(d=>{c()?a.set(i,d):a.delete(i)}).catch(d=>{c()&&!(d instanceof DOMException&&d.name==="AbortError")?a.set(i,"error"):a.delete(i)}).finally(()=>{c()&&e.requestUpdate()})}return"loading"}function Pt(e,t,n){let r=e.catalog,a=r.member(le(t.members[n])),i=a?.characterId??0,o=a?.image||r.characterFace(i);return{name:r.characterName(i),card:o,color:r.characterColor(i)}}function _l(e,t,n,r){let a=r.map(i=>Pt(e,t,Ee[n][i]).name);return g`
    <ol class="tb-order-faces" aria-label=${a.map((i,o)=>`${o+1} ${i}`).join(", ")}>
      ${r.map((i,o)=>{let s=Pt(e,t,Ee[n][i]);return g`
          <li title=${`${o+1} / ${s.name}`} style=${`--member-color:${s.color}`}>
            <img class="tb-order-card" src=${s.card} alt="" width="28" height="28" loading="lazy" decoding="async" />
            <span aria-hidden="true">${o+1}</span>
          </li>
        `})}
    </ol>
  `}function Lu(e,t,n=!1,r,a=17){if(!t&&!n)return f;let i=t===null?r:void 0,o=l=>l===void 0?"\u2014":I(e,l),s=t&&t.guideAvailable!==!1?t.best-(t.planBaseScore??t.score):t===null?0:void 0;return g`
    <div><dt>${e.t("worstTimingScore","Worst-timing score")}</dt><dd>${o(t?.worst??i)}</dd></div>
    <div><dt>${e.t("nominalTimingScore","Nominal-timing score")}</dt><dd>${o(t?.score??i)}</dd></div>
    <div><dt>${e.t("bestTimingScore","Best-timing score")}</dt><dd>${o(t?.optimal??i)}</dd></div>
    <div><dt>${e.t("timingFrameOrigin","Plan frame origin")}</dt><dd>${t?`${I(e,t.frameOriginMs??0,2)} ms`:"\u2014"}</dd></div>
    <div><dt>${e.t("timingPlanBaseScore","Plan baseline score")}</dt><dd>${o(t?.planBaseScore??t?.score??i)}</dd></div>
    <div>
      <dt>${!t||t.planIsOptimal?e.t("timingOptimalPlanScore","Optimal timing plan"):e.t("timingFramePlanScore","{ms} ms plan",{ms:t?.advanceMs??a})}</dt>
      <dd>${o(t?.guideAvailable===!1?void 0:t?.best??i)} <span class="tb-delta" data-sign=${s===void 0?"":s>=0?"up":"down"}>${s===void 0?"\xA0":`${s>=0?"+":""}${I(e,s)}`}</span></dd>
    </div>
  `}var br=e=>{let t=e/1e3;return`${Math.floor(t/60)}:${(t%60).toFixed(3).padStart(6,"0")}`};function Ou(e){return!e||e.guideAvailable===!1?[]:e.windows.flatMap(t=>t.steps.map(n=>({kind:"skill",event:t.event,range:null,timeMs:n.timeMs,noteIndices:n.noteIndices,noteTimesMs:n.noteTimesMs??n.noteIndices.map(()=>n.timeMs),inputTimesMs:n.inputTimesMs??n.noteIndices.map(()=>n.timeMs-e.advanceMs),inputKinds:n.inputKinds,deliveryTimesMs:n.deliveryTimesMs,included:!1,gain:n.gain}))).sort((t,n)=>t.timeMs-n.timeMs)}function Ol(e,t,n,r,a=!1){let i=t-n,o=a||i===0?e.t("timingOnBeat","On time"):i<0?e.t("timingEarlyExact","{ms} ms early",{ms:-i}):e.t("timingLateExact","{ms} ms late",{ms:i});return[r==="hold"?e.t("timingInputHold","Hold"):r==="release"?e.t("timingInputRelease","Release"):r==="flick"?e.t("timingInputFlick","Flick"):r==="miss"?e.t("timingInputMiss","Do not hit"):"",r==="miss"?"":o].filter(Boolean).join(" ")}function Nu(e,t,n,r,a,i){let o=r.event===null?void 0:Pt(e,t,Ee[n][r.event]),s=r.kind==="combo-opening"?e.t("timingComboOpening","Split the opening chord"):r.kind==="combo-chord"?e.t("timingComboChord","Split the chord at the COMBO threshold"):r.kind==="combo-ending"?e.t("timingComboEnding","Hit the ending notes early"):r.inputKinds?e.t("timingOptimalInputs","Adjust note timing"):e.t("timingSkillStep","Advance the skill bonus"),l=o?.name??e.t("timingComboRange","COMBO section {section}",{section:(r.range??0)+1}),c=r.noteIndices.map(d=>a.get(d)),u=()=>{let d=e.querySelector(`#${i}`);d.focusNote(c[0]),d.scrollIntoView({block:"center"})};return g`<li class="tb-timing__window" data-notes=${c.join(" ")} style=${o?`--member-color:${o.color}`:""}>
    <div class="tb-timing__head">
      <span class="tb-timing__badge tb-timing__badge--group">${c.join(", ")}</span>
      <button class="button button--text button--small tabular tb-timing__jump" type="button" @click=${u}
        aria-label=${e.t("timingLocate","Show {time} on the chart",{time:br(r.timeMs)})}>${br(r.timeMs)}</button>
      <span>${r.included?e.t("timingIncluded","Included in result"):r.gain?g`<span class="tb-delta" data-sign="up">+${I(e,r.gain)}</span>`:f}</span>
    </div>
    <div class="tb-timing__head">
      ${o?g`<img class="tb-order-card" src=${o.card} alt="" width="28" height="28" loading="lazy" decoding="async" />`:f}
      <span class="tb-timing__advance" data-kind=${o?"skill":"combo"}>${l}</span>
      <strong>${s}</strong>
    </div>
    ${r.comboGain?g`<strong class="tb-delta" data-sign="up">${e.t("timingComboGain","Gekiso COMBO +{count}",{count:I(e,r.comboGain,2)})}</strong>`:f}
    <div class="scroll-x" role="region" tabindex="0" aria-label=${s} data-scroll-region>
      <table class="tb-timing__steps"><thead><tr>
        <th scope="col">${e.t("timingInputNote","Note")}</th>
        <th scope="col">${e.t("timingInputAction","Input")}</th>
        <th scope="col">${r.inputKinds?e.t("timingActualInputTime","Input time"):e.t("timingInputTime","Judgement time")}</th>
        ${r.deliveryTimesMs?g`<th scope="col">${e.t("timingDeliveryTime","Delivery time")}</th>`:f}
      </tr></thead><tbody>${r.noteIndices.map((d,m)=>{let p=r.inputTimesMs[m],h=r.noteTimesMs[m],b=Ol(e,p,h,r.inputKinds?.[m],(r.kind==="combo-opening"||r.kind==="combo-chord")&&m===0);return g`<tr><th scope="row">${e.t("timingNoteNumber","Note {number}",{number:c[m]})}</th>
          <td>${b}</td><td class="tabular">${br(p)}</td>
          ${r.deliveryTimesMs?g`<td class="tabular">${br(r.deliveryTimesMs[m])}</td>`:f}</tr>`})}</tbody></table>
    </div>
  </li>`}function Bu(e,t,n,r,a,i){let o=a?.actions??Ou(r),s=r?.guideAvailable===!1||r===null||a===null;if(!o.length&&!i)return g`<div class="row row--between row--wrap"><strong>${e.t("timingGuide","Timing guide")}</strong>
    <span>${s?e.t("timingPlanUnavailable","Early-input plan unavailable"):r?r.planIsOptimal?e.t("timingOnBeat","On time"):r.optimal>r.score?e.t("timingPlanNoGain","No gain with this plan"):e.t("timingOrderNoGain","No extra gain in this order"):a?e.t("timingPlanNoGain","No gain with this plan"):f}</span></div>`;let l=new Map;for(let y of o)y.noteIndices.forEach((k,$)=>{let w=y.kind==="skill"?"skill":"combo",E=l.get(k),M=y.noteTimesMs[$];l.set(k,{timeMs:M,kind:E&&E.kind!==w?"both":w,instruction:Ol(e,y.inputTimesMs[$],M,y.inputKinds?.[$],(y.kind==="combo-opening"||y.kind==="combo-chord")&&$===0)})});let c=[...l].sort((y,k)=>y[1].timeMs-k[1].timeMs||y[0]-k[0]),u=new Map(c.map(([y],k)=>[y,k+1])),d=new Map(c.map(([,y],k)=>[k+1,y.kind])),m=new Map(c.map(([,y],k)=>[k+1,y.instruction])),p={event:0,startMs:0,endMs:0,notes:c.map(([,y])=>y.timeMs),unit:1,steps:c.map(([y,k],$)=>({step:$+1,timeMs:k.timeMs,notes:1,noteIndices:[y],gain:0}))},h=`tb-guide-chart-${bi(e,t).replace(/[^a-z0-9]/giu,"-")}-${n}`,b=e.catalog,v=t.song,x=ke(b.data.songs[String(v.songId)].difficulty).find(y=>Number(y.difficulty)===v.difficulty),S=new Set(d.values());return g`<section class="tb-timing stack stack--flex stack--tight" aria-label=${e.t("timingGuide","Timing guide")}>
    <div class="row row--between row--wrap"><strong class="tb-subtitle">${e.t("timingGuide","Timing guide")}</strong>
      <span class="tb-timing__advance">${a?.frameRate??F(e,t).frameRate??60} FPS</span></div>
    ${i?g`<div class="stack">${Oa(e,i.window)}<div class="cluster"><span class="chip">${a?.actions.some(y=>!y.included)?e.t("justCoverage.plan","Combined timing plan"):e.t("justCoverage.selected","Selected skill order")}</span>${i.sampled?g`<span class="chip">${e.t("justCoverage.sampleCurve","Sample 1 curve")}</span>`:f}</div></div>`:f}
    <div class="cluster">${i?g`<span class="chip">${e.t("justCoverage.title","JUST HIT Zone")}</span>`:f}${["combo","skill","both"].filter(y=>S.has(y)).map(y=>g`
      <span class="tb-timing__advance" data-kind=${y}>${y==="combo"?e.t("timingLegendCombo","COMBO inputs"):y==="skill"?e.t("timingLegendSkill","Skill inputs"):e.t("timingLegendBoth","COMBO and skill inputs")}</span>`)}</div>
    <timing-chart-preview id=${h} .source=${{identity:b.songIdentity(v.songId),file:x.file}}
      .window=${p} .kinds=${d} .annotations=${m} .coverage=${i} .numberNotes=${!0} .whole=${!0} .active=${!0} .locale=${e.locale}
      .label=${e.t("timingFullChart","Annotated full chart")} .errorLabel=${e.t("timingChartFailed","Chart could not be loaded")}></timing-chart-preview>
    <div class="row row--between row--wrap"><strong class="tb-subtitle">${e.t("timingChartOrder","In chart order")}</strong>
      <span>${e.t("timingMarkedNotes","{count} marked notes",{count:l.size})}</span></div>
    <small class="tb-timing__hint">${e.t("timingKeepOtherNotes","Play all other notes as usual")}</small>
    <ol class="tb-timing__windows" role="list">${o.map(y=>Nu(e,t,n,y,u,h))}</ol>
  </section>`}function Du(e,t){let n=t.score;if(!t.song||!n?.orders?.length)return g``;let r=bi(e,t),{swapPick:a,firingOrder:i,shownTimeline:o}=hi(e,t),s=n.orders.map((R,N)=>({value:R,index:N})).sort((R,N)=>N.value-R.value||R.index-N.index),l=s[0],c=yo(e,t),u=Ml(e,t,c);typeof u=="object"&&o.set(r,u);let d=typeof u=="object"?u:o.get(r)??u;typeof d=="object"&&!i.has(r)&&i.set(r,[...d.windows].sort((R,N)=>R.startMs-N.startMs||R.event-N.event).map(R=>R.event));let m=i.get(r)??[0,1,2,3,4],p=n.orders[c],h=fe(e,t),b=e.master,v=h?.goal.kind==="gekiso"||h?.goal.kind==="event"&&!!h.goal.gekiso,x=v||(h?.goal.kind==="score"||h?.goal.kind==="event")&&!!b&&t.snaps.some(R=>{let N=h.snaps.find(U=>U.key===R);return N&&b.snaps.get(N.cardId)?.supportSkillIds.some(U=>b.supportSkills.get(U)?.some(Se=>Se.type===2001))}),S=`${r}|timing`,y=e.expanded.has(S),k=x&&y?Ml(e,t,c,!0):void 0,$=typeof k=="object"?k.timing:void 0,w=typeof k=="object"?k.guide:void 0,E=n.orders.filter(R=>R>p).length+1,M=R=>R===l.value?"\xB10":`\u2212${I(e,l.value-R)}`,P=R=>{vo(e,t,R),a.delete(r),e.requestUpdate()},A=a.get(r),j=R=>{if(A===void 0)a.set(r,R);else if(A===R)a.delete(r);else{let N=[...Ee[c]],U=m[A],Se=m[R];[N[U],N[Se]]=[N[Se],N[U]],P(Pu.get(N.join(",")));return}e.requestUpdate()},K=m[0],ve=[0,1,2,3,4].filter(R=>R<t.members.length).map(R=>s.find(N=>Ee[N.index][K]===R)).sort((R,N)=>N.value-R.value),ce=e.expanded.has(`${r}|orders`),Ue=R=>n.orders.filter(N=>N>R).length+1;return g`
    <section class="tb-order stack stack--flex">
      <div class="row row--wrap row--between">
        <strong class="tb-subtitle">${e.t("skillOrder","Skill order")}</strong>
        <div class="cluster">
          <button
            class="button button--text button--small"
            type="button"
            ?disabled=${c===l.index}
            @click=${()=>P(l.index)}
          >
            ${e.t("bestOrder","Best order")}
          </button>
          <button
            class="button button--text button--small"
            type="button"
            ?disabled=${c===s.at(-1).index}
            @click=${()=>P(s.at(-1).index)}
          >
            ${e.t("worstOrder","Worst order")}
          </button>
        </div>
      </div>
      <ol class="tb-order-editor" role="list" aria-label=${e.t("skillOrder","Skill order")}>
        ${m.map((R,N)=>{let U=Pt(e,t,Ee[c][R]);return g`
            <li>
              <button
                type="button"
                class="tb-order-slot"
                aria-pressed=${String(A===N)}
                ?data-swap=${A!==void 0&&A!==N}
                aria-label=${`${N+1} / ${U.name}`}
                title=${U.name}
                style=${`--member-color:${U.color}`}
                @click=${()=>j(N)}
              >
                <span class="tb-order-slot__index">${N+1}</span>
                <img class="tb-order-card" src=${U.card} alt="" width="48" height="48" decoding="async" />
                <span class="tb-order-slot__swap">${L("swap_horiz",18)}</span>
              </button>
            </li>
          `})}
      </ol>
      <dl class="spec-list spec-list--split spec-list--numeric">
        <div>
          <dt>${e.t("score","Score")}</dt>
          <dd>${I(e,p)}</dd>
        </div>
        <div>
          <dt>${e.t("orderRank","Rank")}</dt>
          <dd>${E} / ${n.orders.length}</dd>
        </div>
        <div>
          <dt>${e.t("orderGap","From best")}</dt>
          <dd>${M(p)}</dd>
        </div>
      </dl>
      ${x?je({id:`tb-timing-analysis-${r.replace(/[^a-z0-9]/giu,"-")}`,label:e.t("timingAnalysis","Judgement timing"),expanded:y,metadata:k==="loading"?e.common("common.states.loading","Loading"):k==="error"?e.t("timingFailed","Timing could not be calculated"):f,onExpandedChange:R=>{R?e.expanded.add(S):e.expanded.delete(S),e.requestUpdate()},content:g`<div class="stack stack--flex">
          <dl class="spec-list spec-list--split spec-list--numeric">
            ${v?w?.score!=null&&w.best!=null?g`
              <div><dt>${e.t("nominalTimingScore","Nominal-timing score")}</dt><dd>${I(e,w.score)}</dd></div>
              <div><dt>${e.t("timingCombinedScore","Combined plan score")}</dt><dd>${I(e,w.best)}
                <span class="tb-delta" data-sign="up">+${I(e,w.best-w.score)}</span></dd></div>`:f:Lu(e,$,!0,p,Math.ceil(1e3/(F(e,t).frameRate??60)))}
          </dl>
          ${Bu(e,t,c,$,w,typeof k=="object"?k.windowProfile:void 0)}
        </div>`}):f}
      <div class="tb-order__timeline" aria-busy=${String(typeof u!="object")}>
        ${typeof d=="object"?bl({label:e.t("timeline","Skill timeline"),durationMs:d.durationMs,density:d.density,fever:d.fever,feverLabel:R=>`${e.t("gekiso","GEKISO")} ${R+1}`,windows:d.windows.map(R=>{let N=Pt(e,t,t.members.indexOf(R.member)),U=B=>`${B>=0?"+":""}${I(e,B,0)}%`,Se=R.lifeBranches?.map(({minLife:B,maxLifeExclusive:D,percent:se,perfectPercent:Re})=>`${B===null?`LIFE < ${I(e,D)}`:D===null?`LIFE \u2265 ${I(e,B)}`:`${I(e,B)} \u2264 LIFE < ${I(e,D)}`} ${U(se+Re)}`),ze=R.extensionMs?`+${(R.extensionMs/1e3).toFixed(1)}s`:"",_=Se?g`${Se.map((B,D)=>g`${D?g`<br>`:f}${B}`)}${ze?g`<br>${ze}`:f}`:`${U(R.percent+R.perfectPercent)}${ze?` / ${ze}`:""}`;return{startMs:R.startMs,endMs:R.endMs,color:N.color,image:N.card,label:N.name,value:_}})}):d==="error"?g`
                  <p class="inline-message">${e.t("timelineFailed","The timeline could not be drawn.")}</p>
                `:g`
                  <div
                    class="skill-timeline__plot"
                    aria-label=${e.t("loadingTimeline","Loading skill timeline")}
                  ></div>
                `}
      </div>
      <div class="stack stack--flex stack--tight">
        <strong class="tb-subtitle">${e.t("firstSkill","Best order by first skill")}</strong>
        ${La(ve.map(R=>{let N=Pt(e,t,Ee[R.index][K]);return{id:String(R.index),title:N.name,subtitle:g`
                <span class="tb-order-line">
                  <span class="tabular" title=${I(e,R.value)}>${M(R.value)}</span>
                  ${_l(e,t,R.index,m)}
                </span>
              `,media:g`
                <img class="tb-order-card" src=${N.card} alt="" width="42" height="42" loading="lazy" decoding="async" />
              `,onOpen:()=>P(R.index)}}))}
      </div>
      ${je({id:`tb-orders-${r.replace(/[^a-z0-9]/giu,"-")}`,label:e.t("topOrders","Top orders"),metadata:"10",expanded:ce,onExpandedChange:R=>{R?e.expanded.add(`${r}|orders`):e.expanded.delete(`${r}|orders`),e.requestUpdate()},content:or(ce?La(s.slice(0,10).map(R=>({id:String(R.index),title:_l(e,t,R.index,m),subtitle:g`
              <span class="tabular">${I(e,R.value)} / ${M(R.value)}</span>
            `,media:g`
              <span class="tb-order-rank tabular">${Ue(R.value)}</span>
            `,onOpen:()=>P(R.index)}))):f)})}
    </section>
  `}function ju(e,t){return g`
    <div class="tb-hit__detail stack stack--flex">
      ${e.results&&!st(e)&&!Ke(t)?g`<span class="tb-results__meta">
            ${e.results.results.some(n=>n.stats.exact>0)?e.t("resultMeta","{ms} ms / {exact} teams simulated exactly",{ms:I(e,e.results.elapsedMs),exact:e.results.results.reduce((n,r)=>n+r.stats.exact,0)}):e.t("resultElapsed","{ms} ms",{ms:I(e,e.results.elapsedMs)})}
          </span>`:f}
      <div class="cluster">${yr(e,t)}</div>
      ${t.sectionPerformance?Ko(e,t,Ll(e,t.sectionPerformance.reference)):f}
      ${Iu(e,t)}
      ${t.justWindow?lt([{label:e.t("justWindowActual","JUST tap window"),value:Ru(e,t.justWindow)}]):f}
      ${t.justWindow?.coverage?Oa(e,t.justWindow):f}
      ${t.event&&t.score&&t.song?(()=>{let n=e.analysis.targetRank,r=fi(e,t),a=e.master?.scoreRanks.get(e.master.songs.get(t.song.songId)?.rankGroup??0)??[],i=a.find(c=>c.rank===n),o=vr(t,n),s=i?_t(i,r):null,l=a.filter(c=>_t(c,r)>t.score.min).sort((c,u)=>c.rank-u.rank)[0];return lt([{label:`${fn[String(n)]} \xB7 ${e.t("analysis.margin","Score margin")}`,value:s===null?"\u2014":I(e,t.score.min-s)},{label:e.t("analysis.dropRisk","Orders below target"),value:o===null?"\u2014":`${I(e,o*100,1)}%`},{label:e.t("analysis.nextRank","Next grade gap"),value:l?I(e,_t(l,r)-t.score.min):"\u2014"}])})():f}
      ${Mu(e,t,t.song)} ${_u(e,t,t.song)} ${Du(e,t)}
    </div>
  `}function Fu(e,t,n=location.href){let r=fe(e,t),a=t.song??(r?.goal.kind==="power"?r.goal.song:r&&"songs"in r.goal&&r.goal.songs.length===1?r.goal.songs[0]:null),i=a?ui(e,a):f,o=yr(e,t),s=e.catalog,l={...s.data.crossServer?.identities,[s.data.identity.server]:s.data.identity};return c=>{let u=c.querySelector(".tb-hit__chips");if(u&&(u.replaceChildren(),tt(o,u)),a&&!c.querySelector(".tb-result-song")){let d=document.createElement("div");tt(i,d),c.prepend(...Array.from(d.childNodes))}for(let d of c.querySelectorAll("img")){let m=d.dataset.src||d.getAttribute("src");if(!m||m.startsWith("data:"))continue;let p=new URL(m,n),h=/^\/(?:assets|runtime)\/([^/]+)\//u.exec(p.pathname)?.[1];h&&l[h]&&p.searchParams.set("release",l[h].releaseId),d.dataset.src?d.dataset.src=p.href:d.src=p.href}}}async function Uu(e,t,n){let r=[...e.querySelectorAll(".tb-hit")].find(a=>a.dataset.resultKey===t);if(r)try{let{renderTeamResultImage:a}=await import("./team-result-image-IBPYDINL.js");if(!r.isConnected)return;let i=await a(r,{decorate:Fu(e,n)});await Ai(i,"team.png")}catch{e.error=e.common("common.states.captureFailed","The image could not be captured. Try again."),e.requestUpdate()}}function zu(e,t){let n=e.catalog,r=pi(e,t),a=[t.song?`${n.songTitle(t.song.songId)} ${n.difficultyLabel(t.song.songId,t.song.difficulty)}`:"",`${r.label}: ${r.value} / ${e.t("power","Power")}: ${I(e,t.power)}`,...Eu(e,t),...t.members.map((i,o)=>{let s=t.snaps[o];return`${o===0?`[${e.t("leader","Leader")}] `:""}${n.cardName("members",le(i))} (${n.characterName(n.member(le(i))?.characterId??0)}) + ${s?n.cardName("snaps",le(s)):"\u2014"}`})].filter(Boolean);navigator.clipboard?.writeText(a.join(`
`)).then(()=>{e.notice=e.t("copied","Copied"),e.requestUpdate()})}function qu(e,t,n,r,a){let i=(crypto.randomUUID?.()??`${Date.now()}`).replace(/[^a-z0-9-]/gu,"").slice(0,36),o=e.catalog,s=a??`${o.characterName(o.member(t[0])?.characterId??0)} / ${r?o.songTitle(r.songId):e.t("noSong","No song")}`;e.write([{key:`team.${i}`,value:{name:s.slice(0,80),members:t,snaps:n,leader:t[0]??null,song:r,createdAt:Date.now()}}]),e.notice=e.t("savedTeam","Saved to Teams"),e.requestUpdate()}function Hu(e,t){let n=fe(e,t),r=e.master;if(!n||!r||t.members.length!==5)return null;let a=Dt(r,n.members.filter(d=>t.members.includes(d.key)),n.snaps.filter(d=>t.snaps.includes(d.key)),n.unknownPolicy),i=t.members.map(d=>a.members.find(m=>m.key===d)),o=t.snaps.map(d=>d?a.snaps.find(m=>m.key===d)??null:null),s=i.map((d,m)=>{if(!d)return"0:0:0";let p=Xi(r,d,o[m]??null);return`${Ar(p,2e3)}:${Ar(p,2004)}:${p.extensionMs}`}),l=new URLSearchParams({deckPower:String(t.power),deckSlots:s.join(",")}),c=F(e,t);if(c.arena||n.songRules||c.manualEventEnabled&&c.goal==="event")return null;let u=c.eventId!==null?r.events.get(c.eventId):void 0;if(t.event&&(c.goal==="event"||c.goal==="plan")&&c.route!=="challenge"&&u){let d=m=>Math.floor((i.reduce((p,h)=>p+(h?Nt(u.effects,h,m):0),0)+o.reduce((p,h)=>p+(h?Bt(u.effects,h,m):0),0))/100);l.set("deckPointBonus",String(d(0))),l.set("deckItemBonus",String(d(1))),l.set("deckEvent",String(c.eventId)),l.set("deckBoosts",String(c.boosts))}return us(`catalog/song-meta?${l}`,t.song?e.catalog.songIdentity(t.song.songId).server:e.server,e.locale)??null}function Pl(e,t,n,r={}){let a=mi(t),i=e.expanded.has(a),o=`${a}|songs`,s=e.expanded.has(o),l=e.comparison.idFor(e,t),c=!!l&&e.comparison.items.some(p=>p.id===l),u=r.stale??e.stale,d=Hu(e,t),m=pi(e,t);return g`
    <article
      data-result-key=${a}
      class=${`card card--outlined tb-hit${n===0?" is-best":""}`}
      aria-label=${`${r.subtitle??`#${n+1}`} / ${m.label} ${m.value}`}
    >
      ${t.song?ui(e,t.song):f}
      <header class="tb-hit__header">
        <div class="tb-hit__main">
          <span class="tb-hit__label">
            <span class="tb-hit__rank">${r.rank??`#${n+1}`}</span>
            ${m.label}${r.subtitle?g`
                    / ${r.subtitle}
                  `:f}
          </span>
          <strong class="tb-hit__value tabular">${m.value}</strong>
        </div>
      </header>
      <div class="cluster tb-hit__chips">${yr(e,t,!0)}</div>
      ${r.content??f} ${Ll(e,t)}
      ${t.aggregate?je({id:`tb-songs-${a.replace(/[^a-z0-9]/giu,"-")}`,label:e.t("arena.scoreDetails","Scores by song"),metadata:String(t.aggregate.songs.length),expanded:s,onExpandedChange:p=>{p?e.expanded.add(o):e.expanded.delete(o),e.requestUpdate()},content:or(s?g`<div class="stack">
                ${t.aggregate.songs.map(p=>{let h=Ua(e,p,F(e));return g`
            <div class="surface stack">
              ${p.song?ui(e,p.song):f}
              <div class="row row--between row--wrap">
                <span class="supporting-text">${h.label}</span>
                <strong class="tabular">${I(e,h.value,h.digits)}</strong>
              </div>
              <div class="cluster">${yr(e,p,!0)}</div>
            </div>
          `})}
              </div>`:f)}):f}
      <div class="tb-hit__actions">
        ${t.song&&t.score&&F(e,t).route!=="skip"?g`<button class="button button--text" ?disabled=${e.running||u} @click=${()=>e.analysis.openMistakes(t)}>${e.t("analysis.mistakes","Mistake positions")}</button>`:f}
        ${re(e,t)?.goal.kind==="gekiso"?g`<button class="button button--text" ?disabled=${e.running||u} @click=${()=>e.analysis.openPressure(t)}>${e.t("analysis.pressure","Opponent scenarios")}</button>`:f}
        ${F(e,t).scope!=="theoretical"&&F(e,t).goal!=="plan"?g`
          <button class="button button--tonal" type="button" ?disabled=${e.running}
            @click=${()=>e.teamGrowth.openResult(t)}>${e.t("tg.title","Team growth comparison")}</button>`:f}
        <button
          class="button button--tonal"
          ?disabled=${u}
          @click=${()=>qu(e,t.members.map(le),t.snaps.map(p=>p?le(p):null),t.song)}
        >
          ${e.t("saveTeam","Save team")}
        </button>
        ${F(e).arena||F(e).scope==="theoretical"||st(e)&&!e.pt.job?.presentation?f:g`
                <button
                  class="button button--text"
                  type="button"
                  ?disabled=${u}
                  @click=${()=>{e.openSongComparison({members:t.members.map(le),snaps:t.snaps.map(p=>p?le(p):null),leader:0},fe(e,t))}}
                >
                  ${e.t("sc.useTeam","Compare songs with this team")}
                </button>
              `}
        ${F(e).arena||!t.song||t.aggregate||st(e)&&!e.pt.job?.presentation?f:g`
                <button class="button button--text" type="button" ?disabled=${u||e.running} @click=${()=>e.compareTeam(t)}>
                  ${e.t("editCompare","Edit and compare")}
                </button>
              `}
        ${l?g`
                <button
                  class="button button--text"
                  aria-pressed=${c}
                  @click=${()=>e.comparison.toggle(e,t)}
                >
                  ${e.t(c?"comparisonAdded":"addComparison",c?"Added to comparison":"Add to comparison")}
                </button>
              `:f}
        ${hl({id:`tb-result-actions-${n}`,label:e.common("common.actions.moreActions","More"),items:[{label:e.t("copyTeam","Copy as text"),icon:"content_copy",run:()=>zu(e,t)},{label:e.t("saveImage","Save image"),icon:"image",run:()=>void Uu(e,a,t)},...(()=>{let p=re(e,t)?.goal;if(u||!t.event||!t.score||!t.song||t.aggregate||p?.kind!=="event"||p.measure!=="points"||p.rewardPlan||p.eventEffects||p.gekiso||p.route==="skip")return[];let h={eventId:p.eventId,song:t.song,team:{members:t.members.map(le),snaps:t.snaps.map(b=>b?le(b):null),leader:0},challenge:p.route==="challenge",consumption:p.consumption??0};return[{label:e.t("parking.useTeam","Park with this team"),icon:"emoji_events",run:()=>{import("./parking-view-PNDO6D7B.js").then(b=>b.openParking(e,h))}}]})(),...d?[{label:e.t("songMetaWithTeam","Song analysis with this team"),icon:"query_stats",href:d}]:[]]})}
      </div>
      ${t.aggregate?f:je({id:`tb-detail-${a.replace(/[^a-z0-9]/giu,"-")}`,label:e.t("moreDetail","Details"),expanded:i,onExpandedChange:p=>{p?e.expanded.add(a):e.expanded.delete(a),e.requestUpdate()},content:or(i?g`
                ${ju(e,t)}
              `:f)})}
    </article>
  `}function Vu(e,t){let n=e.catalog,r=e.growth?.context===e.calculationContext()?e.growth:null,a=r?.result?.upgrades.filter(o=>o.gain>1e-9).slice(0,8)??[],i=r?.result?.base??0;return g`
    <section class="surface stack tb-growth">
      ${Jn({icon:"trending_up",label:e.t("growthTitle","Training priorities")})}
      <button class="button" type="button" ?disabled=${e.running} @click=${()=>e.teamGrowth.openTraining(t)}>
        ${e.t("trainingPlan.title","Plan with materials")}
      </button>
      ${r?.result?a.length?g`
                <ul class="list">
                  ${a.map(o=>{let s=le(o.key);return g`
                      <li class="list-item">
                        <span class="list-item__leading tb-suggest__art">
                          ${Mt(n.cardOptions(o.kind,s))}
                        </span>
                        <span class="list-item__body">
                          <strong class="list-item__headline">${n.cardName(o.kind,s)}</strong>
                          <span class="list-item__supporting tabular">
                            +${I(e,o.gain,Math.abs(o.gain)<100?2:0)}${i>0?` (+${I(e,o.gain/i*100,2)}%)`:""}
                          </span>
                        </span>
                        <button class="button button--text" type="button" ?disabled=${e.running}
                          @click=${()=>{let l=e.results?.overall[0];l&&e.teamGrowth.openResult(l,o)}}>
                          ${e.t("tg.title","Team growth comparison")}
                        </button>
                      </li>
                    `})}
                </ul>
              `:g`
                <p class="supporting-text">${e.t("growthNone","No single card upgrade improves the best team.")}</p>
              `:g`
              <button
                class="button button--tonal"
                type="button"
                ?disabled=${!!r||e.running}
                @click=${()=>void e.recommendGrowth()}
              >
                ${L("trending_up",18)}${r?e.t("growthProgress","Checking cards {done}/{total}",{done:r.done,total:r.total||"\u2026"}):e.t("growthRun","Find the best card to train")}
              </button>
            `}
    </section>
  `}function Wu(e,t){let n=new Map;for(let r of e){if(!r.song)continue;let a=-1/0;for(let o of r.hits){let s=o.score?.[t]??o.skipScore;typeof s=="number"&&Number.isFinite(s)&&(a=Math.max(a,s))}let i=n.get(r.song.songId);(!i||a>i.score)&&n.set(r.song.songId,{result:r,score:a})}return n}function ux(e){let t=e.results;if(!t||["event","plan"].includes(e.resultSettings?.goal??"score")!==(e.tab==="pt")||e.tab==="pt"&&e.resultSettings?.goal==="plan"!=(e.settings.rewardMode==="plan"))return ci(e);let n=e.catalog,r=e.stale,a=F(e),i=t.results.length>1&&a.goal!=="plan",o=i?t.results.filter(y=>y.song):[],s=new Set(o.map(y=>y.song.songId)).size<o.length,l=s&&e.bestDifficultyOnly?Wu(o,a.criterion):void 0,c=l?o.filter(y=>l.get(y.song.songId)?.result===y):o,u=o.find(y=>hr(y.song)===e.resultTab),d=u&&(l?.get(u.song.songId)?.result??u),m=i?d?hr(d.song):"overall":"all",p=t.plan?[t.plan.normal,t.plan.challenge].filter(y=>y!==null):m==="overall"||!i?i?t.overall:t.results[0]?.hits??[]:d?.hits??[],h=F(e).goal==="event"&&F(e).route!=="skip"?e.analysis.filter(p):p,b=d?[d]:t.results,v=b.length>0&&b.every(y=>y.proven),x=v?null:Mi(b),S=re(e)?.goal;return g`
    <section class="tb-results stack stack--flex">
      <div class="row row--wrap row--between tb-results__summary">
        ${F(e).goal==="event"&&F(e).route!=="skip"?e.analysis.filters():f}
        <span class=${`tb-proof${v?" is-proven":""}`}>
          ${L(v?"verified":"hourglass_bottom",18)}${wo(e,v,b.some(y=>y.hits.some(k=>k.gekiso?.sampled)))}
        </span>
        ${S?.kind==="score"?g`
          <span class="tb-results__meta">${e.t("calculationChartCount","{count} charts in this search",{count:S.songs.length})}</span>
        `:f}
        ${x===null?f:g`
                <span class="tb-results__meta">
                  ${e.t("improvementBound","Up to {percent}% improvement",{percent:I(e,x,1)})}
                </span>
              `}
        ${i?g`
                <md-outlined-select
                  class="tb-results__selector"
                  label=${e.t("songs","Songs")}
                  .value=${m}
                  @change=${y=>{e.resultTab=y.target.value,e.requestUpdate()}}
                >
                  <md-select-option value="overall">
                    <div slot="headline">${e.t("overall","Overall")}</div>
                  </md-select-option>
                  ${c.map(y=>g`
                      <md-select-option value=${`${y.song.songId}:${y.song.difficulty}`}>
                        <div slot="headline">
                          <span lang=${n.songTitleLanguage(y.song.songId)}>${n.songTitle(y.song.songId)}</span>
                          ${n.difficultyLabel(y.song.songId,y.song.difficulty)}
                        </div>
                      </md-select-option>
                    `)}
                </md-outlined-select>
                ${s?g`
                  <label class="tb-check">
                    <md-checkbox touch-target="wrapper"
                      .checked=${e.bestDifficultyOnly}
                      @change=${y=>{e.bestDifficultyOnly=y.target.checked,e.requestUpdate()}}
                    ></md-checkbox>
                    <span>${e.t("bestDifficultyOnly","Only show each song\u2019s highest-scoring difficulty")}</span>
                  </label>
                `:f}
              `:f}
      </div>
      ${t.unknownCards.length?g`
              <p class="inline-message">
                ${e.t("unknownCards","{count} saved cards are not in this data release and were skipped.",{count:t.unknownCards.length})}
              </p>
            `:f}
      ${t.plan?g`
              <section class="surface surface--tonal stack tb-plan">
                <strong class="tb-subtitle">${e.t("planTotal","Total event points")}</strong>
                <strong class="tb-hit__value tabular">${I(e,t.plan.eventPoints)}</strong>
                <div class="cluster">
                  <span class="tb-chip">
                    <span class="tb-chip__label">${e.t("normalLives","Normal lives")}</span>
                    <strong>${t.plan.normalLives}</strong>
                  </span>
                  <span class="tb-chip">
                    <span class="tb-chip__label">${e.t("challengeLives","Challenge lives")}</span>
                    <strong>
                      ${t.plan.challengeLives.toLocaleString(e.locale,{maximumFractionDigits:2})}
                    </strong>
                  </span>
                  <span class="tb-chip">
                    <span class="tb-chip__label">${e.t("cpEarned","Challenge points earned")}</span>
                    <strong>
                      ${t.plan.challengePointsEarned.toLocaleString(e.locale,{maximumFractionDigits:2})}
                    </strong>
                  </span>
                  <span class="tb-chip">
                    <span class="tb-chip__label">${e.t("cpLeft","Left over")}</span>
                    <strong>
                      ${t.plan.leftoverChallengePoints.toLocaleString(e.locale,{maximumFractionDigits:2})}
                    </strong>
                  </span>
                  <span class="tb-chip">
                    <span class="tb-chip__label">${e.t("perBoost","Per boost")}</span>
                    <strong>${I(e,t.plan.perBoost,1)}</strong>
                  </span>
                </div>
              </section>
            `:f}
      ${t.cpChallenge?Pl(e,t.cpChallenge,-1,{rank:L("swords",18),subtitle:e.t("pt.challengeBest","Challenge team"),stale:r}):f}
      ${h.length?ul(h,mi,(y,k)=>Pl(e,y,k,t.plan?{stale:r,subtitle:y===t.plan.challenge?e.t("routeChallenge","Challenge live"):e.t("routeLive","Normal live")}:{stale:r})):g`
              <div class="state">
                <p class="state__title">
                  ${v?e.t("noTeams","No team meets these conditions"):e.t("noCandidate","No recommendation yet")}
                </p>
              </div>
            `}
      ${h.length&&F(e).goal!=="plan"&&F(e).scope!=="theoretical"&&!r?Vu(e,h[0]):f}
    </section>
  `}function hn(e,t){let n=t.input.goal;if(n.kind!=="gekiso"&&!(n.kind==="event"&&n.gekiso))return[];let r=n.kind==="gekiso"?n.arena:void 0,a=t.hit.aggregate?.songs.flatMap(i=>i.song?[i.song]:[])??(t.hit.song?[t.hit.song]:[]);return[0,1,2].filter(i=>a.some(o=>(r?.missions[i]||t.input.songRules?.missions[i]||e.master?.songs.get(o.songId)?.gekisoMissions[i])===2))}function yi(e,t){let n=e.filter(a=>a.missions[t]===2),r=new Map;for(let a of n)for(let{points:i,count:o}of a.distributions[t])r.set(i,(r.get(i)??0)+o/a.samples/n.length);return[...r].sort((a,i)=>a[0]-i[0])}function Nl(e,t){let n=d=>e.t(`analysis.${d}`,d),r=e.catalog,a=(d,m=1)=>new Intl.NumberFormat(e.locale,{maximumFractionDigits:m}).format(d),i=t.sources.map((d,m)=>yi(t.rows[m]??[],t.range)),o=Number(t.threshold),s=t.threshold.trim()!==""&&Number.isInteger(o)&&o>=0&&o<=2147483647,l=hn(e,t.sources[0]),c=Math.max(1,...i.flatMap(d=>d.map(([m])=>m))),u=(d,m)=>d.reduce((p,[h,b])=>p+(h>m?b:0),0);return g`
    <div class="tb-analysis-controls">
      <div class="tb-analysis-field">
        <span class="tb-field__label">${n("luckSection")}</span>
        ${V({label:n("luckSection"),value:String(t.range),grow:!1,options:l.map(d=>({value:String(d),label:String(d+1)})),onSelect:d=>t.onRange(Number(d))})}
      </div>
      <md-outlined-text-field type="number" min="0" max="2147483647" step="1" required
        label=${n("luckOpponentPoints")} .value=${t.threshold} .error=${t.submitted&&!s}
        @input=${d=>t.onThreshold(d.target.value)}
      ></md-outlined-text-field>
      <span class="supporting-text">${n("luckRuns")} ${a(t.samples,0)}</span>
      ${t.action}
    </div>
    <span class="tb-luck-state supporting-text" role="status">${t.error?n("failed"):t.submitted&&!s?n("luckThresholdInvalid"):"\xA0"}</span>
    <figure class="tb-luck-plot">
      <svg viewBox="0 0 360 144" role="img" aria-label=${n("luckLeadCurve")}>
        <path class="tb-luck-plot__axes" d="M28 8V120H348"></path>
        <text x="24" y="14" text-anchor="end">100%</text><text x="24" y="120" text-anchor="end">0%</text>
        <text x="28" y="140">0</text><text x="348" y="140" text-anchor="end">${a(c,0)}</text>
        ${i.map((d,m)=>d.length?et`<polyline class=${`tb-luck-plot__line tb-luck-series-${m}`}
          points=${[[0,u(d,0)],...d.flatMap(([p])=>[[p,u(d,p-1)],[p,u(d,p)]])].map(([p,h])=>`${28+p/c*320},${120-h*112}`).join(" ")}
        ></polyline>`:f)}
        ${s&&o<=c?et`<path class="tb-luck-plot__threshold" d=${`M${28+o/c*320} 8V120`}></path>`:f}
      </svg>
      <figcaption>${n("luckLeadCurve")}</figcaption>
    </figure>
    <div class="table-scroll" tabindex="0" role="region" aria-label=${n("luckComparison")}>
      <table class="data-table"><thead><tr>
        <th>${n("team")}</th><th>${n("luckMean")}</th><th>${n("luckLowerDecile")}</th><th>${e.t("scoreRange","Range")}</th>
        <th>${n("luckLead")}</th><th>${n("luckTie")}</th><th>${n("luckBehind")}</th><th>${n("luckMeanScore")}</th>
      </tr></thead><tbody>${t.sources.map((d,m)=>{let p=i[m],h=p.reduce((k,[$,w])=>k+$*w,0),b=0,v=p.find(([,k])=>(b+=k)>=.1-1e-12)?.[0],x=u(p,o),S=p.find(([k])=>k===o)?.[1]??0,y=k=>p.length&&s?`${a(Math.max(0,Math.min(1,k))*100)}%`:"\u2014";return g`<tr><th scope="row"><span class=${`tb-luck-series-${m}`}>#${m+1}</span></th>
          <td class="tabular">${p.length?a(h):"\u2014"}</td><td class="tabular">${v===void 0?"\u2014":a(v,0)}</td>
          <td class="tabular">${p.length?`${a(p[0][0],0)} \u2013 ${a(p.at(-1)[0],0)}`:"\u2014"}</td>
          <td class="tabular">${y(x)}</td><td class="tabular">${y(S)}</td><td class="tabular">${y(1-x-S)}</td>
          <td class="tabular">${d.conditions===t.sources[0].conditions&&d.hit.score?a(d.hit.score.mean,0):"\u2014"}</td>
        </tr>`})}</tbody></table>
    </div>
    <div class="stack">${t.sources.map((d,m)=>g`
      <article class="card card--outlined tb-hit stack stack--tight">
        <strong class=${`tb-luck-series-${m}`}>#${m+1}</strong>
        ${gi(e,d.hit.members.map((p,h)=>{let b=d.input.members.find(S=>S.key===p),v=d.hit.snaps[h],x=d.input.snaps.find(S=>S.key===v);return{member:b.cardId,snap:x?.cardId??null,memberGrowth:r.resolvedGrowth("members",b,d.input.unknownPolicy),snapGrowth:x?r.resolvedGrowth("snaps",x,d.input.unknownPolicy):null}}),0,!1)}
      </article>`)}
    </div>
  `}var vi=["C","B","A","S","SS"];function Qe(e){let{hit:t,input:n}=e,r=n.goal,a=r.kind==="gekiso"?{accuracy:r.accuracy,rank:r.rank,ranks:r.ranks,seeds:r.seeds,arena:r.arena,minJustWindowMs:r.minJustWindowMs,justWindow:r.justWindow}:r.kind==="event"&&r.gekiso?{accuracy:{great:0,just:r.gekiso.just,missEvery:0},rank:r.gekiso.rank,seeds:r.gekiso.luckSamples}:void 0;return{members:n.members.filter(i=>t.members.includes(i.key)),snaps:n.snaps.filter(i=>t.snaps.includes(i.key)),player:n.player,unknownPolicy:n.unknownPolicy,songRules:n.songRules,team:{members:[...t.members],snaps:[...t.snaps],leader:t.members[0]},songs:t.aggregate?t.aggregate.songs.flatMap(i=>i.song?[i.song]:[]):t.song?[t.song]:[],play:r.kind==="score"||r.kind==="event"?r.play:{great:0,good:0,bad:0,miss:0},gekiso:a,challengeEventId:r.kind==="score"?r.challengeEventId:null,event:r.kind==="event"?{eventId:r.eventId,route:r.route==="challenge"?"challenge":"live",consumption:r.consumption,rewardRoom:r.rewardRoom,eventEffects:r.eventEffects}:null}}function vr(e,t){if(e.aggregate){let a=e.aggregate.songs.map(i=>vr(i,t));return a.some(i=>i===null)?null:Math.max(...a)}let n=Object.entries(e.score?.ranks??{}),r=n.reduce((a,[,i])=>a+i,0);return r?n.reduce((a,[i,o])=>a+(Number(i)<t?o:0),0)/r:null}var Bl=class{constructor(t){this.host=t}mode=null;targetRank=7;maxRisk=1;onlyHighest=!1;count=1;full=!1;error=!1;progress=0;total=0;baseline;samples=[];pressureRows=[];luckRows=[];luckRange=0;luckThreshold="0";luckThresholdAuto=!0;luckSubmitted=!1;luckSamples=32;selected=0;position=0;detailed=!1;sources=[];task=null;generation=0;identity="";cache=new Map;sync(){let t=JSON.stringify([this.host.snapshot?.owner,this.host.data?.identity,this.host.data?.crossServer?.identities]);t!==this.identity&&(this.close(),this.cache.clear(),this.identity=t)}t(t){return this.host.t(`analysis.${t}`,t)}threshold(t){let n=this.sources.find(s=>s.hit===t)??this.sources[0],r=t.song,a=n?.input,i=this.host.master?.scoreRanks.get(this.host.master.songs.get(r?.songId??0)?.rankGroup??0)?.find(s=>s.rank===this.targetRank);if(!i)return 1/0;let o=a?.goal;if(o?.kind==="gekiso"||o?.kind==="event"&&o.gekiso&&o.rewardRoom?.mode!=="solo"){let s=o.kind==="event"?o.rewardRoom:void 0,l=s?.mode==="battle"?s.players:5,c=Math.trunc(Math.sqrt(5/l)*i.battleRequired*l);return s?.mode==="battle"&&s.otherAverageScore!==void 0?Math.max(0,c-s.otherAverageScore*(l-1)):Math.ceil(c/l)}return i.required}number(t){return new Intl.NumberFormat(this.host.locale,{maximumFractionDigits:1}).format(t)}remember(t,n){for(this.cache.delete(t),this.cache.set(t,n);this.cache.size>384;)this.cache.delete(this.cache.keys().next().value)}stop(){this.generation++,this.task&&this.host.ownsTask(this.task)&&(this.host.engine?.cancel(),this.host.releaseTask(this.task)),this.task=null,this.host.requestUpdate()}close(){this.stop(),this.mode=null,this.sources=[],this.baseline=void 0,this.samples=[],this.pressureRows=[],this.luckRows=[]}openMistakes(t){let n=re(this.host,t);!n||!t.song||(this.close(),this.sources=[{hit:structuredClone(t),input:structuredClone(n)}],this.mode="mistakes",this.error=!1,this.progress=0,this.total=0,this.host.requestUpdate())}openPressure(t){let n=re(this.host,t);if(!n||n.goal.kind!=="gekiso")return;let r=[{hit:t,input:n},...(this.host.results?.overall??[]).map(i=>({hit:i,input:n})),...this.host.comparison.items.filter(i=>i.input.goal.kind==="gekiso").map(({hit:i,input:o})=>({hit:i,input:o}))],a=[...new Map(r.map(i=>[JSON.stringify([i.hit.members,i.hit.snaps]),i])).values()].slice(0,3);this.openPressureSources(a)}openPressureEntries(t){this.openPressureSources(t.map(n=>({hit:n.hit,input:n.input})))}canCompareLuck(t){return t.length>=2&&t.every(({input:{goal:n}})=>n.kind==="gekiso"||n.kind==="event"&&n.gekiso)&&hn(this.host,t[0]).length>0}openLuckEntries(t){if(!this.canCompareLuck(t))return;this.close(),this.sources=structuredClone(t.map(({hit:r,input:a,conditions:i})=>({hit:r,input:a,conditions:i}))),this.mode="luckComparison",this.luckRange=hn(this.host,this.sources[0])[0];let n=Qe(this.sources[0]).gekiso.seeds;this.luckSamples=n>0?n:32,this.luckThreshold="0",this.luckThresholdAuto=!0,this.luckSubmitted=!1,this.error=!1,this.host.requestUpdate()}openPressureSources(t){this.close(),this.sources=structuredClone(t),this.mode="pressure",this.error=!1,this.progress=0,this.total=0,this.host.requestUpdate()}filter(t){if(this.maxRisk===1&&!this.onlyHighest)return t;let n=a=>a.event?.mean??a.key,r=Math.max(...t.map(n));return t.filter(a=>(!this.onlyHighest||n(a)===r)&&(this.maxRisk===1||(vr(a,this.targetRank)??1/0)<=this.maxRisk))}filters(){let t=+(this.maxRisk<1)+Number(this.onlyHighest);return g`
      <button
        class=${t?"button button--tonal":"button button--text"}
        type="button"
        aria-haspopup="dialog"
        @click=${()=>{this.mode="filters",this.host.requestUpdate()}}
      >
        ${L("filter_list",18)} ${this.t("filters")}
        ${t?g`<span class="tabular">${t}</span>`:f}
      </button>
    `}async run(){if(!this.host.engine||this.task)return;if(this.mode==="luckComparison"){this.luckSubmitted=!0;let a=Number(this.luckThreshold);if(!this.luckThreshold.trim()||!Number.isInteger(a)||a<0||a>2147483647){this.host.requestUpdate();return}}let t=this.host.acquireTask("analysis");if(!t)return;this.task=t;let n=++this.generation;this.error=!1,this.progress=0;let r=async a=>{let i=JSON.stringify([this.identity,"sample",a]),o=this.cache.get(i);if(o)return o;let s=await this.host.engine.sample(a);if(n!==this.generation)throw new DOMException("Cancelled","AbortError");return this.remember(i,s),s};try{if(this.mode==="mistakes"){this.samples=[];let a=this.sources[0],i=Qe(a),o=a.hit.score?.orders??[],s=o.length?o.indexOf(Math.min(...o)):0,l={...i,order:s,includeNotes:!0,gekiso:i.gekiso?{...i.gekiso,accuracy:{...i.gekiso.accuracy,great:0,missEvery:0}}:void 0,play:{...i.play,great:0,good:0,bad:0,miss:0,missEvery:0}};this.baseline=await r(l);let c=this.baseline.notes.filter(u=>[1,20,40,41,42,101,102].includes(u.op));this.total=24;for(let u of[4,1])for(let d=0;d<12;d++){if(n!==this.generation)return;let m=Math.min(this.count,c.length),p=new Set;for(let v=0;v<m;v++)p.add(d<6?(Math.floor(v*c.length/Math.max(1,m))+Math.floor(d*c.length/6))%Math.max(1,c.length):(Math.floor((d-6)*c.length/6)+v)%Math.max(1,c.length));let h=[...p].flatMap(v=>c[v]?[c[v].index]:[]),b=await r({...l,includeNotes:!1,play:{...l.play,mistakes:{indices:h,judgement:u}}});this.samples.push({grade:u,pattern:d,indices:h,score:b.score,life:b.lowestLife}),this.progress++,this.host.requestUpdate()}}else if(this.mode==="luckComparison"){let a=Qe(this.sources[0]);this.total=this.sources.length;let i=this.sources.map(c=>({...Qe(c),player:a.player,songs:a.songs,songRules:a.songRules,gekiso:{...a.gekiso,seeds:this.luckSamples,arena:a.gekiso?.arena?{...a.gekiso.arena,objective:"score",opponents:void 0}:void 0}})),o=i.map(c=>JSON.stringify([this.identity,"luck",c])),s=o.map(c=>this.cache.get(c)),l=i.flatMap((c,u)=>s[u]?[]:[{request:c,index:u}]);if(l.length){let c=await this.host.engine.sectionMetricsBatch(l.map(u=>u.request));if(n!==this.generation)return;l.forEach((u,d)=>{s[u.index]=c[d],this.remember(o[u.index],c[d])})}if(this.luckRows=s,this.progress=this.total,this.luckThresholdAuto){let c=0;this.luckThreshold=String(yi(this.luckRows[0],this.luckRange).find(([,u])=>(c+=u)>=.5-1e-12)?.[0]??0)}}else if(this.mode==="pressure"){this.pressureRows=[];let a=this.sources[0];if(!a||this.sources.length<2)throw Error("teams");let i=Qe(a);if(!i.songs.length||!i.gekiso)throw Error("scope");let o=this.full?Array.from({length:125},(l,c)=>[Math.floor(c/25)+1,Math.floor(c/5)%5+1,c%5+1]):[[1,1,1],[3,3,3],[5,5,5],[1,3,5],[1,5,3],[3,1,5],[3,5,1],[5,1,3],[5,3,1]];this.total=o.length*this.sources.length;let s=this.sources.map(()=>[]);for(let l of o){let c=this.sources.map(m=>({...Qe(m),songs:i.songs,songRules:i.songRules,player:i.player,gekiso:{...i.gekiso,ranks:l,rank:l[0],arena:i.gekiso.arena?{...i.gekiso.arena,objective:"score",opponents:void 0}:void 0}})),u=c.map(m=>this.cache.get(JSON.stringify([this.identity,"pressure",m]))),d=c.flatMap((m,p)=>u[p]?[]:[{request:m,index:p}]);if(d.length){let m=await this.host.engine.evaluateBatch(d.map(p=>p.request));if(n!==this.generation)return;d.forEach((p,h)=>{u[p.index]=m[h],this.remember(JSON.stringify([this.identity,"pressure",p.request]),m[h])})}u.forEach((m,p)=>{if(!m?.length||m.some(h=>!h.score))throw Error("score");s[p].push(m.reduce((h,b)=>h+b.score.mean,0)/m.length)}),this.progress+=this.sources.length,this.host.requestUpdate()}this.pressureRows=this.sources.map((l,c)=>{let u=s[c],d=u.map((p,h)=>Math.max(...s.map(b=>b[h]))-p),m=Math.max(...d);return{source:l,low:Math.min(...u),high:Math.max(...u),loss:m,ranks:o[d.indexOf(m)]}}).sort((l,c)=>l.loss-c.loss)}}catch(a){n===this.generation&&!(a instanceof DOMException&&a.name==="AbortError")&&(this.error=!0)}finally{this.task===t&&(this.task=null,this.host.releaseTask(t)),this.host.requestUpdate()}}hasLuck(t){return hn(this.host,t).length>0}delta(t){return new Intl.NumberFormat(this.host.locale,{maximumFractionDigits:0,signDisplay:"exceptZero"}).format(t)}reached(t){return t.score>=this.threshold(this.sources[0].hit)&&t.life>0}patternLabel(t){return`${t.grade===4?"GREAT":"MISS"} ${this.t(t.pattern<6?"spread":"cluster")} ${t.pattern%6+1}`}choose(t){this.selected=t,this.position=0,this.host.requestUpdate()}preview(){let t=this.samples[this.selected],n=this.sources[0]?.hit;if(!t||!n?.song||!this.baseline)return g`<div class="tb-analysis-chart" aria-hidden="true"></div>`;let r=t.indices.map(u=>this.baseline.notes[u]).filter(Boolean).sort((u,d)=>u.timeMs-d.timeMs),a=Math.min(this.position,r.length-1),i=r[a];if(!i)return f;let o=this.host.catalog,s=ke(o.data.songs[String(n.song.songId)].difficulty).find(u=>Number(u.difficulty)===n.song.difficulty),l={event:0,member:0,startMs:i.timeMs,endMs:i.timeMs+3e3,notes:r.map(u=>u.timeMs),steps:r.map((u,d)=>({step:d+1,timeMs:u.timeMs,notes:1,noteIndices:[u.index],gain:0}))},c=u=>{this.position=a+u,this.host.requestUpdate()};return g`
      <div class="tb-analysis-chart">
        <div class="tb-analysis-chart__nav">
          ${yt({icon:"chevron_left",label:this.t("previousPosition"),disabled:a===0,onClick:()=>c(-1)})}
          <span class="tabular">${a+1} / ${r.length}</span>
          <span class="tabular tb-analysis-chart__time">${new Date(i.timeMs).toISOString().slice(14,23)}</span>
          ${yt({icon:"chevron_right",label:this.t("nextPosition"),disabled:a>=r.length-1,onClick:()=>c(1)})}
        </div>
        <timing-chart-preview
          .source=${{identity:o.songIdentity(n.song.songId),file:s.file}}
          .window=${l}
          .active=${!0}
          .locale=${this.host.locale}
          .label=${this.t("positions")}
          .errorLabel=${this.t("failed")}
        ></timing-chart-preview>
      </div>
    `}rankControl(t=!1){return V({label:this.t("targetRank"),value:String(this.targetRank),grow:t,options:[3,4,5,6,7].map(n=>({value:String(n),label:vi[n-3]})),onSelect:n=>{this.targetRank=Number(n),this.host.requestUpdate()}})}field(t,n){return g`
      <div class="tb-analysis-field">
        <span class="tb-field__label">${t}</span>
        ${n}
      </div>
    `}renderFilters(){let t=n=>this.t(n);return g`
      ${this.field(t("targetRank"),this.rankControl(!0))}
      ${this.field(t("maxRisk"),g`
          <div class="cluster" role="group" aria-label=${t("maxRisk")}>
            ${[1,0,.05,.1,.25,.5].map(n=>Ts({label:n===1?t("all"):`\u2264 ${n*100}%`,selected:this.maxRisk===n,onToggle:()=>{this.maxRisk=n,this.host.requestUpdate()}}))}
          </div>
        `)}
      <label class="tb-switch-row tb-analysis-switch">
        <span>${t("highestOnly")}</span>
        <md-switch
          .selected=${this.onlyHighest}
          aria-label=${t("highestOnly")}
          @change=${n=>{this.onlyHighest=n.target.selected,this.host.requestUpdate()}}
        ></md-switch>
      </label>
    `}runButton(){let t=!!this.task;return g`
      <button
        class=${t?"button button--tonal tb-analysis-run":"button button--filled tb-analysis-run"}
        type="button"
        ?disabled=${!t&&(this.host.running||this.mode==="pressure"&&this.sources.length<2)}
        @click=${()=>t?this.stop():void this.run()}
      >
        ${t?g`${this.host.common("common.actions.cancel","Cancel")}
              <span class="tabular">${this.progress} / ${this.total}</span>`:this.t("run")}
      </button>
    `}renderMistakes(){let t=c=>this.t(c),n=this.sources[0],r=V({label:t("inputCount"),value:String(this.count),grow:!1,options:[1,3,5,10,20].map(c=>({value:String(c),label:String(c)})),onSelect:c=>{this.stop(),this.count=Number(c),this.samples=[],this.position=0,this.host.requestUpdate()}}),a=this.selected<12?4:1,i=c=>this.samples.filter(u=>u.grade===c),o=c=>{let u=i(c);return u.length?`${u.filter(d=>this.reached(d)).length}/${u.length}`:""},s=this.samples[this.selected],l=this.baseline;return g`
      <div class="tb-analysis-controls">
        ${this.field(t("targetRank"),this.rankControl())} ${this.field(t("inputCount"),r)}
        ${this.runButton()}
      </div>
      ${this.error?g`<span class="tb-analysis-error" role="alert">${t("failed")}</span>`:f}
      ${l?g`
            <div class="tb-analysis-summary">
              <span class="tb-field__label">${t("fixedOrder")}</span>
              <strong class="tabular">${this.number(l.score)}</strong>
              ${this.hasLuck(n)?g`<span class="chip chip--static">${t("seed")}</span>`:f}
            </div>
            <div class="tb-analysis-split">
              <div class="tb-analysis-picker">
                ${V({label:t("pattern"),value:String(a),options:[4,1].map(c=>({value:String(c),label:`${c===4?"GREAT":"MISS"} ${o(c)}`.trim()})),onSelect:c=>this.choose((c==="4"?0:12)+this.selected%12)})}
                ${[0,6].map(c=>g`
                    <div class="tb-analysis-group" role="group" aria-label=${t(c?"cluster":"spread")}>
                      <span class="tb-field__label">${t(c?"cluster":"spread")}</span>
                      <div class="tb-analysis-tiles">
                        ${[0,1,2,3,4,5].map(u=>{let d=c+u,m=(a===4?0:12)+d,p=this.samples[m];return g`
                            <button
                              class="tb-analysis-tile"
                              type="button"
                              aria-pressed=${String(this.selected===m)}
                              data-state=${p?this.reached(p)?"reached":"below":f}
                              ?disabled=${!p}
                              aria-label=${p?`${this.patternLabel(p)}: ${this.number(p.score)}, ${t(this.reached(p)?"reached":"below")}`:`${u+1}`}
                              @click=${()=>this.choose(m)}
                            >
                              <span class="tb-analysis-tile__index">${u+1}</span>
                              <span class="tabular">${p?this.delta(p.score-l.score):"\u2014"}</span>
                            </button>
                          `})}
                      </div>
                    </div>
                  `)}
                <dl class="tb-analysis-stats">
                  <div>
                    <dt>${t("score")}</dt>
                    <dd class="tabular">${s?this.number(s.score):"\u2014"}</dd>
                  </div>
                  <div>
                    <dt>${t("lowestLife")}</dt>
                    <dd class="tabular">${s?this.number(s.life):"\u2014"}</dd>
                  </div>
                  <div>
                    <dt>${vi[this.targetRank-3]}</dt>
                    <dd data-state=${s?this.reached(s)?"reached":"below":f}>
                      ${s?t(this.reached(s)?"reached":"below"):"\u2014"}
                    </dd>
                  </div>
                </dl>
              </div>
              ${this.preview()}
            </div>
            ${this.samples.length?je({id:"tb-analysis-samples",label:t("samples"),metadata:String(this.samples.length),expanded:this.detailed,onExpandedChange:c=>{this.detailed=c,this.host.requestUpdate()},content:g`
                    <div class="table-scroll" tabindex="0" role="region" aria-label=${t("samples")}>
                      <table class="data-table">
                        <thead>
                          <tr>
                            <th>${t("pattern")}</th>
                            <th class="tabular">${t("score")}</th>
                            <th class="tabular">${t("lowestLife")}</th>
                            <th>${vi[this.targetRank-3]}</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${this.samples.map((c,u)=>g`
                              <tr>
                                <th scope="row">
                                  <button class="button button--text" type="button" @click=${()=>this.choose(u)}>
                                    ${this.patternLabel(c)}
                                  </button>
                                </th>
                                <td class="tabular">${this.number(c.score)}</td>
                                <td class="tabular">${this.number(c.life)}</td>
                                <td>${t(this.reached(c)?"reached":"below")}</td>
                              </tr>
                            `)}
                        </tbody>
                      </table>
                    </div>
                  `}):f}
          `:f}
    `}renderPressure(){let t=a=>this.t(a),n=this.host.catalog,r=this.pressureRows.length?this.pressureRows:this.sources.map(a=>({source:a}));return g`
      <div class="tb-analysis-controls">
        ${this.field(t("scenario"),V({label:t("scenario"),value:this.full?"all":"basic",grow:!1,options:[{value:"basic",label:t("basicScenarios")},{value:"all",label:t("allScenarios")}],onSelect:a=>{this.stop(),this.full=a==="all",this.pressureRows=[],this.host.requestUpdate()}}))}
        ${this.runButton()}
      </div>
      ${this.error?g`<span class="tb-analysis-error" role="alert">${t("failed")}</span>`:f}
      <ol class="tb-analysis-teams">
        ${r.map(a=>{let i="loss"in a?a:null,o=this.sources.indexOf(a.source)+1,s=a.source.hit.members.map(l=>n.characterName(n.member(Number(l.slice(1)))?.characterId??0));return g`
            <li class="tb-analysis-team">
              <span class="tb-analysis-team__number tabular">${o}</span>
              <div class="tb-analysis-team__main">
                <ol class="tb-analysis-team__faces" aria-label=${s.join(", ")}>
                  ${a.source.hit.members.map((l,c)=>{let u=n.member(Number(l.slice(1)));return g`
                      <li title=${s[c]}>
                        <img
                          class="tb-order-card"
                          src=${u?.image||n.characterFace(u?.characterId??0)}
                          alt=""
                          width="32"
                          height="32"
                          loading="lazy"
                          decoding="async"
                        />
                      </li>
                    `})}
                </ol>
                <dl class="tb-analysis-team__facts">
                  <div>
                    <dt>${t("scoreRange")}</dt>
                    <dd class="tabular">${i?`${this.number(i.low)} \u2013 ${this.number(i.high)}`:"\u2014"}</dd>
                  </div>
                  <div>
                    <dt>${t("worstScenario")}</dt>
                    <dd class="tabular">${i?i.ranks.join(" / "):"\u2014"}</dd>
                  </div>
                </dl>
              </div>
              <div class="tb-analysis-team__loss">
                <span class="tb-field__label">${t("loss")}</span>
                <strong class="tabular">${i?this.number(i.loss):"\u2014"}</strong>
              </div>
            </li>
          `})}
      </ol>
    `}render(){if(!this.mode)return f;let t=this.t(this.mode);return g`
      <dialog
        class=${`dialog tb-result-analysis tb-result-analysis--${this.mode}`}
        data-managed-modal
        ${Qn(()=>this.close())}
        aria-labelledby="tb-analysis-title"
      >
        <header class="tb-analysis-header">
          <h2 id="tb-analysis-title">${t}</h2>
          ${yt({icon:"close",label:this.host.common("common.actions.close","Close"),onClick:()=>this.close()})}
        </header>
        <div class="dialog__body stack tb-analysis-body">
          ${this.mode==="filters"?this.renderFilters():this.mode==="mistakes"?this.renderMistakes():this.mode==="luckComparison"?Nl(this.host,{sources:this.sources,rows:this.luckRows,range:this.luckRange,threshold:this.luckThreshold,samples:this.luckSamples,action:this.runButton(),error:this.error,submitted:this.luckSubmitted,onRange:n=>{this.luckRange=n,this.host.requestUpdate()},onThreshold:n=>{this.luckThreshold=n,this.luckThresholdAuto=!1,this.host.requestUpdate()}}):this.renderPressure()}
        </div>
      </dialog>
    `}};export{Ku as a,Ju as b,Yu as c,Zu as d,le as e,Xu as f,Qu as g,qc as h,Fs as i,Ut as j,ft as k,Bm as l,Tc as m,he as n,Xr as o,bs as p,dp as q,Bn as r,Lc as s,$g as t,Nc as u,rd as v,zs as w,L as x,Bp as y,Un as z,yt as A,ug as B,Is as C,V as D,Ts as E,mg as F,wt as G,fg as H,no as I,lo as J,Jn as K,wd as L,ch as M,uo as N,go as O,$d as P,uh as Q,pa as R,$t as S,ot as T,Uo as U,zo as V,qo as W,ye as X,Ho as Y,tr as Z,nr as _,Vo as $,ln as aa,rr as ba,Wo as ca,ar as da,ir as ea,Ke as fa,vh as ga,yo as ha,tn as ia,wh as ja,ga as ka,nn as la,st as ma,re as na,F as oa,rn as pa,xt as qa,Qn as ra,Lh as sa,Oh as ta,St as ua,je as va,Co as wa,To as xa,Mo as ya,lb as za,Bl as Aa,cn as Ba,My as Ca,_y as Da,Py as Ea,lt as Fa,Da as Ga,Qd as Ha,hv as Ia,Ye as Ja,mn as Ka,il as La,yv as Ma,Cv as Na,Ev as Oa,or as Pa,Ua as Qa,Dv as Ra,ul as Sa,It as Ta,ow as Ua,Za as Va,Xe as Wa,xe as Xa,ou as Ya,pr as Za,fl as _a,gr as $a,ri as ab,hl as bb,Mt as cb,r$ as db,ci as eb,d$ as fb,hr as gb,y$ as hb,v$ as ib,ku as jb,w$ as kb,$u as lb,k$ as mb,$$ as nb,x$ as ob,S$ as pb,R$ as qb,Cl as rb,xu as sb,Su as tb,ui as ub,gi as vb,ju as wb,Fu as xb,qu as yb,Pl as zb,ux as Ab};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/private-ssr-support.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/ssr-client/lib/hydrate-lit-html.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/controller/attachable-controller.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/md-focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/motion/animation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/events/dispatch-hooks.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/events/form-label-activation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/events/redispatch-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/constraint-validation.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/form-associated.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/checkbox-validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/switch/internal/switch.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/switch/internal/switch-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/switch/switch.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/cache.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/elevation/internal/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/internal/elevation-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/list/internal/list-navigation-helpers.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/list/internal/list-controller.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/shared.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/surfacePositionController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/typeaheadController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menu.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menu-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/menu.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/item/internal/item.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/item/internal/item-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/item/item.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/menu/internal/controllers/menuItemController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menuitem/menu-item.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menuitem/menu-item-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/menu-item.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/internal/circular-progress.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/internal/circular-progress-styles.cssresult.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/circular-progress.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
