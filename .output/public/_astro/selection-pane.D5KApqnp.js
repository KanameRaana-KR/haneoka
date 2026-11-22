import"./lit-element.Bc_VOJIm.js";import{A as r,b as s,l as $}from"./lit-html.DhDqt3I2.js";/* empty css                               */import"./checkbox.zvQH7SV2.js";import"./outlined-text-field.omMPAN5q.js";import{a as m,t as g}from"./tile.DFwS0rEz.js";import{r as b}from"./controls.BCr1YKFS.js";import{c as n,a as h}from"./chooser-filters.TFq4Gm2y.js";import{b as _,m as k,i as y}from"./modal.D-GY7Vdy.js";function G(e){const t=`${e.id}-preview`,d=e.groups&&e.renderGroup?e.groups.flatMap(a=>e.items.filter(c=>a.values.has(c.value))):e.items,f=new Map(d.map((a,c)=>[a,c])),v=e.items.some(a=>a.value===e.selected),u=(a,c=!1)=>s`
    <div
      class=${e.collectionClass??`collection collection--${e.kind}`}
      role=${c?r:e.selectedValues?"group":"tablist"}
      aria-label=${e.title}
      @keydown=${c||e.selectedValues?r:b(e.items.map(l=>l.value),e.selected,e.select)}
    >
      ${a.map(l=>{const i=f.get(l);return e.selectedValues?s`
                  <label
                    class=${`tile tile--${l.kind??e.kind} selection-pane__choice${e.selectedValues.has(l.value)?" is-selected":""}`}
                    style=${l.style||r}
                  >
                    <span class="selection-pane__choice-media">
                      ${m(l)}
                      <md-checkbox
                        class="selection-pane__choice-checkbox"
                        touch-target="wrapper"
                        ?disabled=${e.disabled||l.disabled}
                        .checked=${$(e.selectedValues.has(l.value))}
                        aria-label=${l.label}
                        @change=${()=>{!e.disabled&&!l.disabled&&e.select(l.value)}}
                      ></md-checkbox>
                    </span>
                    <span class="tile__identity">
                      <strong class="tile__title" lang=${l.titleLanguage||r}>${l.title}</strong>
                      ${l.subtitle===void 0||l.subtitle===null?r:s`
                              <small class="tile__subtitle">
                                ${l.adornment??r}
                                <span>${l.subtitle}</span>
                              </small>
                            `}
                    </span>
                  </label>
                `:e.renderItem?e.renderItem(l,i):g({...l,selected:l.value===e.selected,role:"tab",controls:t,tabIndex:l.value===e.selected||!v&&i===0?0:-1,onOpen:()=>e.select(l.value)})})}
    </div>
  `;return s`
    <dialog
      ?data-managed-modal=${e.managed}
      ${e.managed?k(e.close):r}
      class=${`selection-pane${e.layout==="list"?" selection-pane--list":""}${e.filtersOpen?" is-filtering":""}`}
      aria-label=${e.title}
      @cancel=${a=>{a.preventDefault(),e.close()}}
      @pointerdown=${_}
      @click=${a=>{y(a)&&e.close()}}
    >
      ${n({title:e.title,filterLabel:e.filterLabel,filtersOpen:e.filtersOpen,toggleFilters:e.toggleFilters,closeLabel:e.closeLabel,close:e.close,actions:e.filterCount?s`
              <span class="badge">${e.filterCount}</span>
            `:r})}
      ${h(e.filtersOpen,e.filterLayout==="facets"?e.filters:s`
              <div class="chooser-facet">
                <div class="team-builder__fields" aria-label=${e.filterLabel}>${e.filters}</div>
              </div>
            `)}
      <div class="selection-pane__body">
        <md-outlined-text-field
          type="search"
          label=${e.searchLabel}
          .value=${$(e.query)}
          @input=${a=>e.search(a.currentTarget.value)}
        ></md-outlined-text-field>
        ${e.quickFilters??r}
        <p role="status" class="team-builder__hint">${e.countLabel}</p>
        ${e.status??r}
        ${e.groups&&e.renderGroup?s`
                <div
                  role="tablist"
                  aria-label=${e.title}
                  @keydown=${b(d.map(a=>a.value),e.selected,e.select)}
                >
                  ${e.groups.map(a=>{const c=e.items.filter(l=>a.values.has(l.value));return e.renderGroup(a.title,c.length,u(c,!0))})}
                </div>
              `:u(e.items)}
        ${e.items.length?r:s`
                <p>${e.emptyLabel}</p>
              `}
        ${e.more?s`
                <button class="button button--text" @click=${e.more}>${e.moreLabel??"More"}</button>
              `:r}
      </div>
      <footer class="selection-pane__footer">
        <div id=${t} role=${e.selectedValues?"group":"tabpanel"} class="team-builder__picker-preview">
          ${e.preview}
        </div>
      </footer>
    </dialog>
  `}export{G as s};
