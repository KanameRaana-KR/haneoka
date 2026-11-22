import"./lit-element.Bc_VOJIm.js";import{b as l,A as s}from"./lit-html.DhDqt3I2.js";import{f as a,i as c}from"./controls.BCr1YKFS.js";/* empty css                                */function t(e,r){return l`<div class="chooser-facet" role="group" aria-label=${e}>
    <strong>${e}</strong><div class="chooser-filter-options">${r}</div>
  </div>`}function u(e){return t(e.label,l`
    ${a({label:e.allLabel,selected:!e.value,onToggle:()=>e.change("")})}
    ${e.options.map(r=>a({...r,selected:e.value===r.value,onToggle:()=>e.change(e.value===r.value?"":r.value)}))}
  `)}function n(e,r){return l`<div class="chooser-filters" ?hidden=${!e}>${r}</div>`}function g(e){return l`<header class="sheet__header chooser-header"><strong>${e.title}</strong>
    <div class="sheet__actions chooser-header__actions">${e.actions??s}
      ${c({label:e.filterLabel,icon:"filter_alt",toggle:!0,pressed:e.filtersOpen,onClick:e.toggleFilters})}
      ${c({label:e.closeLabel,icon:"close",onClick:e.close})}
    </div>
  </header>`}export{n as a,t as b,g as c,u as d};
