import"./lit-element.Bc_VOJIm.js";import{A as i,b as t}from"./lit-html.DhDqt3I2.js";function p(c,s={}){const l=c.filter(e=>!!(e&&e.value!==""&&e.value!==void 0));if(!l.length)return i;const a=["spec-list",s.split?"spec-list--split":"",s.numeric?"spec-list--numeric":"",s.className||""].filter(Boolean).join(" ");return t`
    <dl class=${a}>
      ${l.map(e=>t`
          <div class=${e.wide?"spec-list__wide":i}>
            <dt>${e.label}</dt>
            <dd>${e.value}</dd>
          </div>
        `)}
    </dl>
  `}export{p as s};
