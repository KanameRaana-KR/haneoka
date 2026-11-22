import{l as g,u,h as $}from"./catalog.CfAhzaok.js";import"./image-gallery.jDvuAiLp.js";import{r as h}from"./pane.sVrWZuBp.js";import{d as b}from"./detail-layout.D3-kIBfL.js";/* empty css                      */import"./lit-element.Bc_VOJIm.js";import{A as m,b as a}from"./lit-html.DhDqt3I2.js";import{r as y}from"./detail-section-heading.BWPPd7ek.js";import{l as S}from"./loading-indicator.dXh2gc3V.js";import"./client.BYho01b_.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./release-server.j-atVW2C.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./resource-route.BR5kLHYo.js";import"./preload-helper.BlTxHScW.js";import"./modal.D-GY7Vdy.js";/* empty css                         */import"./overlay.CAlyPMjs.js";import"./controls.BCr1YKFS.js";import"./icon.BSt8MVsq.js";/* empty css                        *//* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";import"./lazy-images.2hwWuBaG.js";import"./content-request.DQ1rIr6o.js";import"./user-roles.BBzq6-HC.js";import"./spoiler-content.Ir13N6R6.js";import"./image-dimensions.lsZdhmjC.js";/* empty css                        *//* empty css                        */import"./app-bar.CQ9Fi2qQ.js";const I=(r,t=20)=>a`
  <svg class="material-icon" width=${t} height=${t}><use href=${`/icons.svg#${r}`}></use></svg>
`;function or(r,t){const{locale:o,label:l}=r;if(r.card){const e=r.card,n=g(e.prefix,o)||String(e.cardId||"—"),c=e.cardImages,d=Array.isArray(e.episodes)?e.episodes:[],s=[{id:"normal",source:String(c?.normal||e.cardImage||""),label:u(o,"story.labels.illustration")},{id:"trained",source:String(c?.trained||""),label:u(o,"catalog.cards.fields.training")}].filter(i=>i.source);return h({kind:"card",page:r.page,hideHeader:r.page,id:`gbp-card-${e.cardId}`,title:n,titleLanguage:$(e.prefix,o).locale,open:!0,backLabel:l("close","Close"),onClose:t.closeCard,body:b(s.length?a`
              <image-gallery .images=${s} .locale=${o} .title=${n}></image-gallery>
            `:m,a`
          <section class="detail-section">
            ${y(l("stories","Stories"),"stories",{count:d.length,level:2})}
            ${r.busy?a`
                    ${S({label:l("loading","Loading")})}
                  `:m}
            ${d.map((i,f)=>{const p=`card.${i.resourceSetName||e.resourceSetName}.${i.scenarioId}`;return a`
                <a class="surface surface--outlined bestdori-episode" href=${t.storyHref(p)}>
                  <span>${String(f+1).padStart(2,"0")}</span>
                  <strong lang=${$(i.title,o).locale}>
                    ${g(i.title,o)||String(i.scenarioId||p)}
                  </strong>
                  ${I("chevron_right")}
                </a>
              `})}
          </section>
        `,r.comments?{comments:r.comments,hasMedia:s.length>0,placement:"media"}:void 0)})}return m}export{or as renderBestdoriDetail};
