import"./lit-element.Bc_VOJIm.js";import{A as o,b as e}from"./lit-html.DhDqt3I2.js";const l={details:"info",stats:"monitoring",characters:"group",content:"description",skills:"bolt",effects:"trending_up",difficulty:"bar_chart",media:"videocam",diary:"menu_book",rewards:"emoji_events",cards:"photo_library",memberCards:"person",supportCards:"photo_library",stamps:"sticky_note_2",stories:"auto_stories",storyText:"article",voices:"mic",friendships:"handshake",missions:"checklist",live2d:"accessibility_new",songs:"music_note",comments:"comment",works:"bar_chart",accounts:"account_circle"};function m(c,n,s={}){const t=s.level||3,i=e`
    <span class="detail-section-title__icon" aria-hidden="true">
      <svg class="material-icon" width="18" height="18">
        <use href=${`/icons.svg#${l[n]}`}></use>
      </svg>
    </span>
    <span class="detail-section-title__label">${c}</span>
    ${s.count===void 0?o:e`
            <small class="detail-section-title__count">${s.count}</small>
          `}
  `,a=`detail-section-title detail-section-title--h${t}${s.className?` ${s.className}`:""}`;return t===2?e`
        <h2 class=${a}>${i}</h2>
      `:e`
        <h3 class=${a}>${i}</h3>
      `}export{m as r};
