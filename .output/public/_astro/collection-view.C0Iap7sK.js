import"./lit-element.Bc_VOJIm.js";import{A as m,b as a}from"./lit-html.DhDqt3I2.js";import{u as l}from"./catalog.CfAhzaok.js";import{s as $}from"./controls.BCr1YKFS.js";import{i as r}from"./icon.BSt8MVsq.js";import{n as p}from"./lazy-images.2hwWuBaG.js";const w=i=>i==="list"||i==="table"?i:"grid",f=(i,t,e)=>$({label:l(i,"common.actions.view"),value:t,onSelect:e,iconOnly:!0,appBarSwitch:"view",options:[{value:"grid",label:l(i,"common.layout.grid"),icon:"grid_view"},{value:"list",label:l(i,"common.layout.list"),icon:"table_rows"},{value:"table",label:l(i,"common.layout.table"),icon:"view_list"}]});function x(i){return a`
    <ul class="list collection-list">
      ${i.map(t=>{const e=a`
          <span class="list-item__leading">
            ${t.media??(t.image?a`
                    <img data-src=${t.image} alt="" decoding="async" @error=${p} />
                  `:r("image",24))}
          </span>
          <span class="list-item__body">
            <strong class="list-item__headline" lang=${t.titleLanguage||m}>${t.title}</strong>
            <span class="list-item__supporting">${t.subtitle||"—"}</span>
          </span>
          <span class="list-item__trailing">${t.trailing??m}${r("chevron_right",20)}</span>
        `;return a`
          <li>
            ${t.href?a`
                    <a
                      class=${`list-item ${t.threeLine?"list-item--three-line":"list-item--two-line"} list-item--interactive`}
                      href=${t.href}
                      data-open-item=${t.id}
                    >
                      ${e}
                    </a>
                  `:a`
                    <button
                      class=${`list-item ${t.threeLine?"list-item--three-line":"list-item--two-line"} list-item--interactive`}
                      type="button"
                      data-open-item=${t.id}
                      @click=${t.onOpen}
                    >
                      ${e}
                    </button>
                  `}
          </li>
        `})}
    </ul>
  `}function L(i,t,e,n={}){const c=n.numeric?"is-numeric":"";return a`
    <div class="table-scroll" role="region" aria-label=${i} tabindex="0" data-scroll-region>
      <table class=${n.numeric?"data-table data-table--numeric":"data-table"}>
        <thead>
          <tr>
            ${t.map((o,s)=>a`
                <th scope="col" class=${s===0?"is-sticky":c}>${o}</th>
              `)}
          </tr>
        </thead>
        <tbody>
          ${e.map(o=>a`
              <tr>
                ${o.map((s,d)=>d===0?a`
                        <th scope="row" class="is-sticky">${s}</th>
                      `:a`
                        <td class=${c}>${s}</td>
                      `)}
              </tr>
            `)}
        </tbody>
      </table>
    </div>
  `}export{x as a,w as b,L as c,f as v};
