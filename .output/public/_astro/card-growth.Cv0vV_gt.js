import"./lit-element.Bc_VOJIm.js";import{A as e,b as l}from"./lit-html.DhDqt3I2.js";function m(a){const r=n=>n??a.unknown??"?",$=(a.kind==="member"?a.icons.memberRanks:a.icons.supportRanks)[a.rank??0],c=[a.liveSkill,a.gekisoSkill].map(n=>n?.icon?l`<span title=${`${n.label} ${r(n.level)}`} aria-label=${`${n.label} ${r(n.level)}`}>
        <img src=${n.icon} alt="" /><span>${r(n.level)}</span>
      </span>`:e);return l`<span class=${`card-growth card-growth--${a.kind}`}>
    ${a.level!==void 0?l`<span class="card-growth__level"><small>Lv.</small>${r(a.level)}</span>`:e}
    ${a.kind==="member"&&a.training!==void 0?l`<span class="card-growth__training" title=${`${a.trainingLabel} ${r(a.training)}`}>
          ${a.icons.training?l`<img src=${a.icons.training} alt=${a.trainingLabel} />`:a.trainingLabel}
          <span>${r(a.training)}</span>
        </span>`:e}
    ${a.liveSkill||a.gekisoSkill?l`<span class="card-growth__skills">
          ${c}
        </span>`:e}
    ${a.rank!==void 0?l`<span class="card-growth__rank" title=${`${a.rankLabel} ${r(a.rank)}`}>
          ${$?l`<img src=${$} alt=${`${a.rankLabel} ${r(a.rank)}`} />`:l`<span>${a.rankLabel} ${r(a.rank)}</span>`}
          ${a.rank===null&&$?l`<strong>${r(a.rank)}</strong>`:e}
        </span>`:e}
  </span>`}export{m as c};
