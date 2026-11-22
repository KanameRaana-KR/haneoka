import"./lit-element.Bc_VOJIm.js";import{A as n,b as a}from"./lit-html.DhDqt3I2.js";import{r as d}from"./detail-section-heading.BWPPd7ek.js";/* empty css                        */function r(t,i,e){return a`
    <section class="detail-section song-detail-section">${d(t,i)}${e}</section>
  `}function g(t){return r(t.title,"difficulty",a`
      ${t.difficulty}
      <dl class="song-data-grid song-meta-strip">
        ${t.metrics.map(i=>a`
          <div>
            <dt>${i.label}</dt>
            <dd lang=${i.lang||n}>${i.value}</dd>
          </div>
        `)}
      </dl>
    `)}export{r as a,g as s};
