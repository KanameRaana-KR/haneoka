import"./lit-element.Bc_VOJIm.js";import{A as o,b as r}from"./lit-html.DhDqt3I2.js";import{i as m}from"./icon.BSt8MVsq.js";import{r as e}from"./community-comment-content.CFGmf1Kd.js";/* empty css                      *//* empty css                        */import"./community-markup.svGuDLM2.js";import"./parse.D3VWRPZL.js";import"./catalog.CfAhzaok.js";import"./client.BYho01b_.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./resource-route.BR5kLHYo.js";/* empty css                        */import"./controls.BCr1YKFS.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./preload-helper.BlTxHScW.js";import"./state.Ck623oKm.js";import"./Base.astro_astro_type_script_index_3_lang.DZLFYlg0.js";import"./loading-progress.C8Gf5z9T.js";import"./linear-progress.Du-QQIqh.js";import"./delegate.qnlMPWy4.js";import"./progress.BYlJSdrk.js";import"./community-sticker.CPTBXKIm.js";function F(t){return r`
    <article class="surface entity-comment-tile">
      <div class="entity-comment-context">
        <span>${t.contextLabel}</span>
        ${t.targetHref?r`<a href=${t.targetHref}>${t.targetIcon?m(t.targetIcon,16):o}${t.targetTitle}</a>`:r`<span>${t.targetTitle}</span>`}
        ${t.privateLabel?r`
                <span class="chip">${m("lock",14)}${t.privateLabel}</span>
              `:o}
      </div>
      ${t.referenceLabel?r`
              <div class="entity-comment-reference">${t.referenceLabel}</div>
            `:o}
      ${e(t.comment)}
    </article>
  `}export{F as renderEntityCommentActivity};
