import"./lit-element.Bc_VOJIm.js";import{b as t,A as d}from"./lit-html.DhDqt3I2.js";const s="(max-width: 959px)";function c(i,l,a){if(!a)return t`
    <div class="detail-layout">
      <div class="detail-layout__media">${i}</div>
      <div class="detail-layout__content pane-sections">${l}</div>
    </div>`;const e=a.hasMedia&&a.placement==="media";return t`
    <div class="detail-layout detail-layout--with-comments" data-comments-placement=${e?"media":"bottom"}>
      ${a.hasMedia?t`
        <div class="detail-layout__left">
          <div class="detail-layout__media">${i}</div>
          ${e?t`<div class="detail-layout__comments">${a.comments}</div>`:d}
        </div>`:d}
      <div class="detail-layout__content pane-sections">${l}</div>
      ${e?d:t`<div class="detail-layout__comments">${a.comments}</div>`}
    </div>`}export{s as D,c as d};
