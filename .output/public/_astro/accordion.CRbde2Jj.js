import"./lit-element.Bc_VOJIm.js";import{A as d,b as r,n as l}from"./lit-html.DhDqt3I2.js";import{i as t}from"./icon.BSt8MVsq.js";/* empty css                          */function o(a){const n=`${a.id}-trigger`,c=`${a.id}-panel`;return r`
    <section class=${`md-accordion${a.className?` ${a.className}`:""}`} ?hidden=${a.hidden}>
      <div
        class="md-accordion__heading"
        role=${a.headingLevel?"heading":d}
        aria-level=${a.headingLevel??d}
      >
        <button
          class="button md-accordion__trigger"
          type="button"
          id=${n}
          aria-expanded=${String(a.expanded)}
          aria-controls=${c}
          ?disabled=${a.disabled}
          @click=${e=>{a.disabled||(e.currentTarget.closest(".md-accordion")?.setAttribute("data-toggled",""),a.onExpandedChange(!a.expanded,e))}}
        >
          ${a.leading==null?d:r`
                  <span class="md-accordion__leading" aria-hidden="true">${a.leading}</span>
                `}
          <span class="md-accordion__identity">
            <span class="md-accordion__label">${a.label}</span>
            ${a.supportingText==null?d:r`
                    <span class="md-accordion__supporting">${a.supportingText}</span>
                  `}
          </span>
          ${a.metadata==null?d:r`
                  <span class="md-accordion__metadata">${a.metadata}</span>
                `}
          <span class="md-accordion__chevron" aria-hidden="true">${t("expand_more")}</span>
        </button>
      </div>
      <div
        ${l(e=>{if(!e||a.expanded)return;const i=e.getRootNode().activeElement;i&&e.contains(i)&&e.parentElement?.querySelector(".md-accordion__trigger")?.focus()})}
        class="md-accordion__panel"
        id=${c}
        role=${a.region?"region":d}
        aria-labelledby=${n}
        ?hidden=${!a.expanded}
      >
        ${a.content}
      </div>
    </section>
  `}export{o as a};
