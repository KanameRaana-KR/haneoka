import"./lit-element.Bc_VOJIm.js";import{A as t,b as a}from"./lit-html.DhDqt3I2.js";import{l as e,e as o}from"./state.Ck623oKm.js";/* empty css                        */function p(r){return a`
    <div class="comments-state" data-comments-placeholder aria-busy=${String(r.phase==="loading")}>
      ${r.phase==="loading"?e(r.label,{local:!0}):r.phase==="error"?o(r.title,r.retryLabel,r.onRetry):t}
    </div>
  `}export{p as r};
