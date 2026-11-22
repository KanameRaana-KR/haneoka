import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import{i as g}from"./lit-element.Bc_VOJIm.js";import{b as r,A as h}from"./lit-html.DhDqt3I2.js";import{h as f}from"./hydrate-workspace.CqzYTlrg.js";import{r as v}from"./page-data.CoUysx63.js";import{b}from"./loading-progress.C8Gf5z9T.js";import{l as k}from"./resource-route.BR5kLHYo.js";import{o as $,a as p,j as y,d as x}from"./song-display.BUM043oH.js";import{p as S,c as u,l as _,u as l,a as w,b as j}from"./catalog.CfAhzaok.js";import{s as T}from"./controls.BCr1YKFS.js";import{l as D,e as M}from"./state.Ck623oKm.js";import{i as d}from"./icon.BSt8MVsq.js";import{c as C}from"./client.BYho01b_.js";/* empty css                            */import"./content-policy-browser.sJlSzFcH.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./document-url.BFFpyWb5.js";import"./interface-route.C7eSW2gB.js";import"./document-address.dywC0kBs.js";import"./spoiler-content.Ir13N6R6.js";import"./request-scope.N4apwAcW.js";import"./content-release.T5Qse4HZ.js";import"./preload-helper.BlTxHScW.js";import"./locales.DtpYD_uK.js";import"./release-server.j-atVW2C.js";import"./temporary-public-routing.BsxzEC6B.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./linear-progress.Du-QQIqh.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";/* empty css                        */const m=[6,3.5,2,1];class L extends g{static properties={locale:{type:String},phase:{state:!0},pool:{state:!0},round:{state:!0}};songs=[];pageData;server="intl";stats={played:0,firstTry:0,streak:0,best:0};constructor(){super(),this.locale="ja",this.phase="loading",this.pool="all",this.round=null}createRenderRoot(){return this}disposeSongDisplay;connectedCallback(){const s=v(this);s?.schema==="haneoka-public-songs-page-v1"&&this.preparePage(s),super.connectedCallback(),this.disposeSongDisplay=$(()=>{for(const t of this.songs){const a=p(t.source,this.locale);t.title=a.text,t.titleLanguage=a.locale}this.requestUpdate()}),this.locale=S(this.locale),s?this.updateComplete.then(()=>{this.server=u(),this.load()}):(this.server=u(),this.load())}disconnectedCallback(){this.disposeSongDisplay?.(),super.disconnectedCallback()}preparePage(s,t=s.server){this.pageData=s,this.server=t;const a=s.variants[t];if(!a){this.phase="error",this.round=null;return}this.applySongs(a.songs),this.phase="ready";const e=this.songs.slice(0,4);this.round=e.length===4?{answer:e[0],options:e,misses:[],focus:[50,50],solved:!1}:null}update(s){this.hasAttribute("data-prerendered")&&y(this.locale)!==x(this.locale)&&(this.replaceChildren(),this.removeAttribute("data-prerendered")),this.hasAttribute("data-prerendered")&&(f(this.render(),this,this.renderOptions),this.removeAttribute("data-prerendered")),super.update(s)}applySongs(s){this.songs=Object.values(s).map(t=>({id:Number(t.musicId),title:p(t,this.locale).text,titleLanguage:p(t,this.locale).locale,source:t,band:_(t.bandName,this.locale),bandId:Number(t.bandId||0),jacket:String(t.jacketUrl||t.jacketThumbUrl||"")})).filter(t=>t.id&&t.jacket&&t.title)}text(s,t){return C(this.locale,`catalog.songGuess.${s}`,t)}async load(){if(this.pageData?.variants[this.server]){this.preparePage(this.pageData,this.server),this.next();return}const s=b(l(this.locale,"common.states.loading"),{scope:"owner"});try{const t=await w(j("songs","",this.server));this.applySongs(t),this.phase="ready",this.next(),s.finish()}catch(t){this.phase="error",s.fail(t)}}pick(s){return s[Math.floor(Math.random()*s.length)]}next(){if(this.songs.length<4)return;const s=this.pick(this.songs),t=this.pool==="band"?this.songs.filter(o=>o.bandId===s.bandId):this.songs,a=(t.length>=4?t:this.songs).filter(o=>o.id!==s.id),e=[s];for(;e.length<4;){const o=this.pick(a);e.includes(o)||e.push(o)}e.sort(()=>Math.random()-.5),this.round={answer:s,options:e,misses:[],focus:[10+Math.random()*80,10+Math.random()*80],solved:!1}}choose(s){const t=this.round;!t||t.solved||t.misses.includes(s.id)||(s.id===t.answer.id?(this.stats.played++,t.misses.length?this.stats.streak=0:(this.stats.firstTry++,this.stats.streak++,this.stats.best=Math.max(this.stats.best,this.stats.streak)),this.round={...t,solved:!0}):this.round={...t,misses:[...t.misses,s.id]})}render(){if(this.phase==="loading")return r`<section class="page song-guess">${D(l(this.locale,"common.states.loading"))}</section>`;if(this.phase==="error")return r`<section class="page song-guess">${M(l(this.locale,"common.states.unavailable"),l(this.locale,"common.actions.retry"),()=>void this.load())}</section>`;const s=this.round;if(!s)return h;const t=s.solved?1:m[Math.min(s.misses.length,m.length-1)],[a,e]=s.focus,o=k({server:this.server,locale:this.locale,kind:"songs",id:String(s.answer.id)}),n=i=>i.toLocaleString(this.locale);return r`
      <section class="page song-guess">
        <div class="song-guess__layout">
          <div class="song-guess__stage">
            <div class="song-guess__jacket" role="img" aria-label=${s.solved?s.answer.title:this.text("jacket","Jacket")}>
              <img
                src=${s.answer.jacket}
                alt=""
                decoding="async"
                style=${`transform-origin:${a}% ${e}%;transform:scale(${t})`}
              />
            </div>
            <ol class="song-guess__options" role="list">
              ${s.options.map(i=>{const c=s.solved&&i.id===s.answer.id?"correct":s.misses.includes(i.id)?"wrong":"";return r`<li>
                  <button
                    class="song-guess__option"
                    type="button"
                    data-state=${c||h}
                    ?disabled=${s.solved||s.misses.includes(i.id)}
                    @click=${()=>this.choose(i)}
                  >
                    ${c==="correct"?d("check_circle",20):c==="wrong"?d("close",20):h}
                    <span lang=${i.titleLanguage}>${i.title}</span>
                  </button>
                </li>`})}
            </ol>
            <div class="song-guess__bar">
              ${s.solved?r`<a class="button button--text" href=${o}>${d("library_music",18)}<span lang=${s.answer.titleLanguage}>${s.answer.title}</span></a>`:r`<span></span>`}
              <button class="button" type="button" @click=${()=>this.next()}>
                ${d(s.solved?"arrow_forward":"skip_next",18)}${s.solved?this.text("next","Next"):this.text("skip","Skip")}
              </button>
            </div>
          </div>
          <aside class="surface stack song-guess__panel">
            ${T({label:this.text("choices","Choices"),value:this.pool,options:[{value:"all",label:this.text("anyBand","All songs")},{value:"band",label:this.text("sameBand","Same band")}],onSelect:i=>{this.pool=i,this.next()}})}
            <dl class="spec-list spec-list--split spec-list--numeric">
              <div><dt>${this.text("played","Played")}</dt><dd>${n(this.stats.played)}</dd></div>
              <div><dt>${this.text("firstTry","First try")}</dt><dd>${n(this.stats.firstTry)}</dd></div>
              <div><dt>${this.text("streak","Streak")}</dt><dd>${n(this.stats.streak)}</dd></div>
              <div><dt>${this.text("best","Best streak")}</dt><dd>${n(this.stats.best)}</dd></div>
            </dl>
          </aside>
        </div>
      </section>
    `}}customElements.get("song-guess")||customElements.define("song-guess",L);
