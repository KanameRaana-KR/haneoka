import"./lit-element.Bc_VOJIm.js";import{A as a,b as t}from"./lit-html.DhDqt3I2.js";import{i as m}from"./icon.BSt8MVsq.js";import{u as s}from"./catalog.CfAhzaok.js";/* empty css                       */function o(e){return e==="image"?"image":e==="audio"?"graphic_eq":e==="video"?"movie":e==="model"?"view_in_ar":e==="text"?"code":"draft"}function u(e,r){return s(r,`navigation.asset${{image:"Images",audio:"Audio",video:"Video",model:"Models",text:"Data"}[e]??"Other"}`)}function $(e){return t`
    <button
      class=${`asset-item${e.selected?" is-selected":""}`}
      title=${e.name}
      role=${e.role||a}
      aria-selected=${e.role?String(!!e.selected):a}
      aria-controls=${e.controls||a}
      tabindex=${e.tabIndex??a}
      @click=${e.onOpen}
    >
      <span class="asset-item__media">
        ${e.image?t`
                <img
                  src=${e.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  referrerpolicy=${e.referrerPolicy||a}
                />
              `:m(e.icon,24)}
      </span>
      <span class="asset-item__name md-body-medium">${e.name}</span>
      <span class="asset-item__meta md-body-small">${e.meta}</span>
    </button>
  `}export{o as a,$ as b,u as c};
