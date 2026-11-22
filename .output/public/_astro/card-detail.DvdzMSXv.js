import{s as q,m as T}from"./card-growth.CS90rkXd.js";import"./lit-element.Bc_VOJIm.js";import{A as f,b as m}from"./lit-html.DhDqt3I2.js";/* empty css                        */import{r as g}from"./chart-rates.t7b2POiH.js";import{r as A}from"./detail-section-heading.BWPPd7ek.js";import"./character-voices.BwVh_j9b.js";import"./client.BYho01b_.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./controls.BCr1YKFS.js";import"./icon.BSt8MVsq.js";/* empty css                        *//* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./slider.OMsc13G9.js";import"./delegate.qnlMPWy4.js";import"./elevation.CV0mocre.js";import"./md-focus-ring.BFbx9fcs.js";import"./ripple.DU62FgSE.js";import"./animation.BI-yjTPx.js";import"./form-label-activation.C-ZPsH8j.js";import"./redispatch-event.Dod3cBoe.js";/* empty css                        */import"./catalog.CfAhzaok.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./resource-route.BR5kLHYo.js";import"./locales.BBzJ2au5.js";import"./dialogue-row.Bd_HDt2v.js";/* empty css                        */import"./state.Ck623oKm.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./loading-progress.C8Gf5z9T.js";import"./preload-helper.BlTxHScW.js";import"./linear-progress.Du-QQIqh.js";import"./progress.BYlJSdrk.js";/* empty css                        */import"./loading-indicator.dXh2gc3V.js";import"./accordion.CRbde2Jj.js";/* empty css                          */import"./server-availability.q3NOHCqi.js";import"./content-release.T5Qse4HZ.js";import"./spoiler-content.Ir13N6R6.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./content-policy-browser.sJlSzFcH.js";import"./request-scope.N4apwAcW.js";import"./definitions.Csu7nG6K.js";import"./bushimo-circle.BaHAxlWi.js";function y(e,i){const t=e.detailAux.gachaVoice;return e.profile.presentation!=="member"||!t?f:m`
    <character-voices
      compact
      .entries=${[t]}
      .characters=${e.characters}
      .characterId=${Number(i.characterId)}
      locale=${e.contentLocale}
      .server=${e.contentServer}
    ></character-voices>
  `}function N(e,i){const t=(r,o)=>{if(!r.length){const k=Number(o);return Number.isFinite(k)&&k>0?k:1}const p=Number(o);return Number.isFinite(p)?p<=r[0]?r[0]:p>=r.at(-1)?r.at(-1)||1:r.includes(p)?p:r.reduce((k,S)=>Math.abs(S-p)<Math.abs(k-p)?S:k):r.at(-1)||1},s=e.profile.presentation==="support",u=s?"support-card-levels":"member-card-levels",d=Number(s?i.supportCardLevelGroup:i.memberCardLevelGroup),v=e.itemsFrom(e.detailAux[u]).filter(r=>Number(r.group)===d).sort((r,o)=>Number(r.level)-Number(o.level)),l=e.progressionRows("memberCardAwake").filter(r=>Number(r._group)===Number(i.memberCardAwakeGroup||1)).sort((r,o)=>Number(r._awakeCount)-Number(o._awakeCount)),a=e.progressionRows("memberCardRanks").filter(r=>Number(r._group)===Number(i.memberCardRankGroup||1)).sort((r,o)=>Number(r._rank)-Number(o._rank)),n=e.progressionRows("supportCardRanks").filter(r=>Number(r._group)===Number(i.supportCardRankGroup||i.supportCardLevelGroup)).sort((r,o)=>Number(r._rank)-Number(o._rank)),b=e.uniqueNumbers(l.map(r=>r._awakeCount)),c=e.uniqueNumbers(a.map(r=>r._rank)),L=e.uniqueNumbers(n.map(r=>r._rank)),w=r=>i.resolvedSkills?.[r],h=r=>e.uniqueNumbers((Array.isArray(r?.effects)?r.effects:[]).map(o=>o.level)),C=h(w("live")),R=h(w("gekisou"));e.detailTraining=t(b,e.detailTraining),e.detailAwakening=t(c,e.detailAwakening),e.detailRank=t(L,e.detailRank),e.detailLiveLevel=t(C,e.detailLiveLevel),e.detailGekisouLevel=t(R,e.detailGekisouLevel);const G=e.detailTraining||b.at(-1)||0,x=e.progressionRows("memberCardLevelLimits").find(r=>Number(r._rarity)===Number(i.rarity)&&Number(r._awakeCount)===G)?._limitLevel,D=n.find(r=>Number(r._rank)===e.detailRank)?._limitLevel,$=Number(s?D||0:x||0),_=e.uniqueNumbers(v.map(r=>r.level)).filter(r=>!$||r<=$);return e.detailLevel=t(_,e.detailLevel),{support:s,levelRows:v,awakeRows:l,rankRows:a,supportRankRows:n,training:b,awakening:c,rank:L,live:C,gekisou:R,levels:_}}function Te(e,i){if(!["member","support"].includes(e.profile.presentation))return;const t=N(e,i);e.detailTraining=t.training.at(-1)||1,e.detailAwakening=t.awakening.at(-1)||1,e.detailRank=t.rank.at(-1)||1,e.detailLiveLevel=t.live.at(-1)||1,e.detailGekisouLevel=t.gekisou.at(-1)||1,e.detailLevel=N(e,i).levels.at(-1)||1}function ye(e,i){if(!["member","support"].includes(e.profile.presentation))return f;const t=N(e,i),s=t.levelRows.find(a=>Number(a.level)===e.detailLevel)||t.levelRows.at(-1),u=t.support?{}:t.awakeRows.find(a=>Number(a._awakeCount)===e.detailTraining)||{},d=t.support?{}:t.rankRows.find(a=>Number(a._rank)===e.detailAwakening)||{},v=a=>{const n=a==="technique"?"technic":a,b=e.stat(i,a),c=Number(s?.[`${n}Rate`]??1e4);return t.support?q(b,c):T(b,c,Number(u[`_${n}Rate`]??0),Number(d[`_${n}Rate`]??0))},l=[v("performance"),v("technique"),v("visual")];return m`
    <section class="detail-section card-stat-section">
      ${A(e.label("stats","Stats"),"stats")}
      <div class="card-detail-controls">
        ${g(e.label("level","Level"),t.levels,e.detailLevel,a=>{e.detailLevel=a,e.persistCardDetailQuery()})}${t.support?g(e.label("rank","Rank"),t.rank,e.detailRank,a=>{e.detailRank=a;const n=N(e,i).levels;n.includes(e.detailLevel)||(e.detailLevel=n.at(-1)||1),e.persistCardDetailQuery()}):m`
                <div class="card-detail-controls__pair">
                  ${g(e.label("training","Training"),t.training,e.detailTraining,a=>{e.detailTraining=a;const n=N(e,i).levels;n.includes(e.detailLevel)||(e.detailLevel=n.at(-1)||1),e.persistCardDetailQuery()})}${g(e.label("awakening","Awakening"),t.awakening,e.detailAwakening,a=>{e.detailAwakening=a,e.persistCardDetailQuery()})}
                </div>
                <div class="card-detail-controls__pair">
                  ${g(e.label("liveSkill","LIVE Skill"),t.live,e.detailLiveLevel,a=>{e.detailLiveLevel=a,e.persistCardDetailQuery()})}${g(e.label("gekisouSkill","GEKISO Skill"),t.gekisou,e.detailGekisouLevel,a=>{e.detailGekisouLevel=a,e.persistCardDetailQuery()})}
                </div>
              `}
      </div>
      <div class="card-stat-grid">
        ${[["performance",l[0]],["technique",l[1]],["visual",l[2]],...t.support?[]:[["total",l.reduce((a,n)=>a+n,0)]],["exp",Number(s?.exp||0)]].map(([a,n])=>m`
            <div>
              <span>${e.label(String(a),String(a))}</span>
              <strong>
                ${t.support&&a!=="exp"?`${(Number(n)/100).toFixed(2)}%`:Number(n).toLocaleString()}
              </strong>
            </div>
          `)}
      </div>
      ${e.renderCardCosts(i,t)}
    </section>
  `}function Ie(e,i){if(!["member","support"].includes(e.profile.presentation))return f;const t=e.itemCharacterIds(i);return t.length?m`
        <section class="detail-section">
          ${A(e.label("characters","Characters"),"characters",{count:t.length})}
          <div class="card-relation-list">
            ${t.map(s=>{const u=e.character(s),d=String(u?.faceImage||u?.thumbnailImage||"");return m`
                <a href=${e.relatedEntityHref("characters",String(s))}>
                  ${d?m`
                          <img src=${d} alt="" />
                        `:f}
                  <span>${e.characterName(s)}</span>
                  <svg class="material-icon" width="16" height="16"><use href="/icons.svg#north_east"></use></svg>
                </a>
              `})}
          </div>
          ${y(e,i)}
        </section>
      `:f}export{N as cardControlData,Te as initializeCardDetailState,Ie as renderCardRelations,ye as renderCardStats};
