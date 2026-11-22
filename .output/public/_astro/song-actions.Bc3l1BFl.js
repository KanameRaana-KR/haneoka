import"./lit-element.Bc_VOJIm.js";import{b as e,A as l}from"./lit-html.DhDqt3I2.js";import{c as n}from"./client.BYho01b_.js";import{s}from"./controls.BCr1YKFS.js";import{i}from"./icon.BSt8MVsq.js";function c(a,o){const t=n(a,"editors.chart.importGbp");return o?e`<a class="icon-button" href=${o} aria-label=${t} title=${t}>${i("edit")}</a>`:l}function d(a){const o=t=>n(a.locale,t);return e`
    <span class="detail-header-actions">
      ${a.leading??l}
      ${c(a.locale,a.editor)}
      ${a.onPlay?e`
              <button class="icon-button" @click=${a.onPlay} aria-label=${o("common.actions.play")}>
                <svg class="material-icon" width="21" height="21"><use href="/icons.svg#play_arrow"></use></svg>
              </button>
            `:l}
      ${a.onChart?e`
              <button class="icon-button" @click=${a.onChart} aria-label=${o("navigation.chart")}>
                <svg class="material-icon" width="21" height="21"><use href="/icons.svg#sports_esports"></use></svg>
              </button>
            `:l}
      ${a.sonolus?e`
              <a
                class="icon-button"
                href=${a.sonolus}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sonolus"
              >
                <img class="sonolus-icon" src="/images/sonolus-icon.png" alt="" />
              </a>
            `:l}
    </span>
  `}function g(a){const o=t=>n(a.locale,t);return e`
    ${c(a.locale,a.editor)}
    <button
      class="icon-button"
      @click=${a.onDownload}
      aria-label=${o("common.actions.downloadChart")}
      title=${o("common.actions.downloadChart")}
    >
      <svg class="material-icon" width="20" height="20"><use href="/icons.svg#download"></use></svg>
    </button>
    ${s({label:o("common.actions.view"),appBarSwitch:"view",value:a.mode,iconOnly:!0,options:[{value:"simple",label:o("common.layout.simple"),icon:"view_week"},{value:"watch",label:o("common.actions.watch"),icon:"play_circle"}],onSelect:a.onMode})}
  `}export{g as c,d as s};
