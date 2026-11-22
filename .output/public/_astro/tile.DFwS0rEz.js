import"./lit-element.Bc_VOJIm.js";import{A as a,b as i,n as b}from"./lit-html.DhDqt3I2.js";import{p as h}from"./loading-progress.C8Gf5z9T.js";import{i as $}from"./icon.BSt8MVsq.js";import{l as v}from"./loading-indicator.dXh2gc3V.js";import{n as _}from"./lazy-images.2hwWuBaG.js";import{k as f,r as k}from"./image-dimensions.lsZdhmjC.js";import{p as s}from"./document-address.dywC0kBs.js";import"./circular-progress.Derl8Va3.js";function y(e={}){const t=typeof e.value=="number"&&Number.isFinite(e.value)?Math.min(1,Math.max(0,e.value)):void 0;return t===void 0?v({label:e.label,className:"media-loading__progress"}):i`
    <md-circular-progress
      ${b(h)}
      class="media-loading__progress"
      .value=${t}
      aria-label=${e.label??a}
      aria-hidden=${e.label?a:"true"}
    ></md-circular-progress>
  `}const N=e=>["tile__mark",`tile__mark--${e.at}`,e.image&&e.text==null?"tile__mark--image":e.accent?"tile__mark--accent":""].filter(Boolean).join(" ");function M(e,t){const r=Number(e),l=Number(t);return Number.isFinite(r)&&r>0&&Number.isFinite(l)&&l>0?r/l:void 0}const I={member:"3 / 4",support:"16 / 9",character:"3 / 4",comic:"4 / 3",story:"16 / 9",background:"16 / 9",system:"16 / 9",band:"3 / 1",song:1,stamp:1,item:1,"band-item":1,model:1};function w(e){const t=e.natural&&!(Number(e.width)>0&&Number(e.height)>0)?f(e.image):void 0,r=Number(e.width)>0?Number(e.width):Number(t?.width),l=Number(e.height)>0?Number(e.height):Number(t?.height),m=M(r,l)??e.aspectRatio??I[e.kind??""],g=m===void 0?void 0:`--tile-ratio:${m};aspect-ratio:${m}`,n=e.onImageError||_,u=d=>{if(!e.natural)return;const c=d.currentTarget;k(e.image,c.naturalWidth,c.naturalHeight)};return i`
    <span
      class=${`tile__media media-loading ${e.fit?`tile__media--${e.fit}`:""}${e.serverMark?.image?" tile__media--server-mark":""}${e.kind==="member"||e.kind==="support"?` card-media card-media--${e.kind}`:""}`}
      style=${g||a}
    >
      ${e.media??(e.image?i`
              <img
                data-src=${e.image}
                data-fallback=${e.imageFallback||a}
                data-fallbacks=${e.imageCandidates?JSON.stringify(e.imageCandidates):a}
                alt=${e.label}
                width=${Number.isFinite(r)&&r>0?String(r):a}
                height=${Number.isFinite(l)&&l>0?String(l):a}
                decoding="async"
                referrerpolicy=${e.referrerPolicy??a}
                @load=${u}
                @error=${n}
              />
            `:e.placeholder??$("image",32))}
      <span class="tile__media-state" role="img" aria-label=${e.label} title=${e.label}>
        ${$("broken_image",24)}
      </span>
      ${y()}
      ${(e.marks||[]).map(d=>d?i`
              <span
                class=${N(d)}
                title=${d.label||a}
                style=${d.accent?`--mark:${d.accent}`:a}
              >
                ${d.image?i`
                        <img src=${s(d.image)} alt="" width="16" height="16" />
                      `:a}
                ${d.text??a}
              </span>
            `:a)}
      ${e.mediaOverlay??a}
      ${e.serverMark?.image?i`<span class="tile__server-mark" style=${`--server-mark-size:${e.serverMark.size||18}px`} title=${e.serverMark.label}>
            <img src=${s(e.serverMark.image)} alt=${e.serverMark.label} width=${e.serverMark.size||18} height=${e.serverMark.size||18} decoding="async" />
          </span>`:a}
    </span>
  `}function E(e){const t=[e.label,e.serverMark?.image?e.serverMark.label:""].filter(Boolean).join(" / "),r=["tile","tile--interactive",e.kind?`tile--${e.kind}`:"",e.selected?"is-selected":""].filter(Boolean).join(" "),l=i`
    ${w(e)}
    <span class="tile__identity">
      <strong class="tile__title" lang=${e.titleLanguage||a}>${e.title}</strong>
      ${e.subtitle===null||e.subtitle===void 0?a:i`
              <small class="tile__subtitle">
                ${e.adornment??a}
                <span>${e.subtitle||" "}</span>
              </small>
            `}
    </span>
  `;return e.static?i`
      <div
        id=${e.id||a}
        class=${r.replace(" tile--interactive","")}
        role=${e.role??a}
        aria-controls=${e.controls??a}
        aria-selected=${e.selected===void 0?a:String(e.selected)}
        style=${e.style||a}
      >
        ${l}
      </div>
    `:e.href?i`
      <a
        id=${e.id||a}
        class=${r}
        href=${e.href}
        data-open-item=${e.itemId??a}
        role=${e.role??a}
        aria-controls=${e.controls??a}
        tabindex=${e.tabIndex??a}
        aria-selected=${e.selected===void 0?a:String(e.selected)}
        aria-label=${t}
        style=${e.style||a}
        @click=${e.onOpen??a}
      >
        ${l}
      </a>
    `:i`
    <button
      id=${e.id||a}
      class=${r}
      type="button"
      data-open-item=${e.itemId??a}
      aria-label=${t}
      role=${e.role??a}
      aria-controls=${e.controls??a}
      tabindex=${e.tabIndex??a}
      aria-selected=${e.selected===void 0?a:String(e.selected)}
      style=${e.style||a}
      @click=${e.onOpen??a}
    >
      ${l}
    </button>
  `}export{w as a,E as t};
