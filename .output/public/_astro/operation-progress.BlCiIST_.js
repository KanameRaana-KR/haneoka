import"./lit-element.Bc_VOJIm.js";import{n as a,b as i}from"./lit-html.DhDqt3I2.js";import{p as o}from"./loading-progress.C8Gf5z9T.js";import"./linear-progress.Du-QQIqh.js";function l(t,r){const e=typeof r=="number"&&Number.isFinite(r);return i`
    <md-linear-progress
      ${a(o)}
      aria-label=${t}
      ?indeterminate=${!e}
      .value=${e?Math.max(0,Math.min(1,r)):0}
    ></md-linear-progress>
  `}export{l as o};
