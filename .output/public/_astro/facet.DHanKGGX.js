import{i as o}from"./lit-element.Bc_VOJIm.js";import{A as l,b as t}from"./lit-html.DhDqt3I2.js";import{u as r}from"./catalog.CfAhzaok.js";import{h as n}from"./hydrate-workspace.CqzYTlrg.js";import{o as h}from"./facet-order.wTm3gWmx.js";import{a as m}from"./controls.BCr1YKFS.js";import"./checkbox.zvQH7SV2.js";class u extends o{static properties={label:{},locale:{},options:{attribute:!1},selected:{attribute:!1},onToggle:{attribute:!1},query:{state:!0},limit:{state:!0}};constructor(){super(),this.label="",this.locale="en",this.options=[],this.selected=[],this.onToggle=()=>{},this.query="",this.limit=40}createRenderRoot(){return this}update(a){this.hasAttribute("data-prerendered")&&(n(this.render(),this,this.renderOptions),this.removeAttribute("data-prerendered")),super.update(a)}render(){const a=this.query.normalize("NFKC").toLocaleLowerCase(this.locale),s=this.options.filter(e=>e.label.normalize("NFKC").toLocaleLowerCase(this.locale).includes(a));return t`
      <details class="filter-facet" ?open=${this.selected.length>0||this.options.length<=8}>
        <summary>
          <span>${this.label}</span>
          <span class="filter-facet__summary">${this.selected.length||this.options.length}</span>
        </summary>
        ${this.options.length>8?t`
                <input
                  class="filter-facet__search"
                  type="search"
                  .value=${this.query}
                  aria-label=${`${r(this.locale,"common.actions.search")} / ${this.label}`}
                  placeholder=${r(this.locale,"common.actions.search")}
                  @input=${e=>{this.query=e.target.value,this.limit=40}}
                />
              `:l}
        <div class="filter-facet__options">
          ${s.slice(0,this.limit).map(e=>t`
              <label
                class=${`filter-facet__option${e.imageOnly?" filter-facet__option--icon":""}`}
                title=${e.imageOnly?e.label:l}
              >
                <md-checkbox
                  .checked=${this.selected.includes(e.value)}
                  ?disabled=${e.count===0&&!this.selected.includes(e.value)}
                  aria-label=${e.label}
                  @change=${()=>this.onToggle(e.value)}
                ></md-checkbox>
                ${e.imageOnly?m(e.image||"",e.label):e.image?t`
                          <img
                            src=${e.image}
                            alt=""
                            loading="lazy"
                            @error=${i=>{i.target.hidden=!0}}
                          />
                        `:l}
                ${e.imageOnly?l:t`
                        <span lang=${e.language||l}>${e.label}</span>
                      `}
                ${e.count===void 0?l:t`
                        <small>${e.count.toLocaleString(this.locale)}</small>
                      `}
              </label>
            `)}
        </div>
        ${s.length>this.limit?t`
                <button
                  class="button button--text"
                  type="button"
                  @click=${()=>{this.limit+=80}}
                >
                  ${r(this.locale,"common.actions.loadMore")}
                </button>
              `:l}
      </details>
    `}}customElements.get("filter-facet")||customElements.define("filter-facet",u);const _=(c,a,s,e,i)=>t`
  <filter-facet
    .label=${c}
    .locale=${a}
    .options=${h(s)}
    .selected=${e}
    .onToggle=${i}
  ></filter-facet>
`;export{_ as f};
