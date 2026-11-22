import"./lit-element.Bc_VOJIm.js";import{b as n,A as r,e as m,h as f,E as y,t as k,l as x}from"./lit-html.DhDqt3I2.js";import{i as b}from"./icon.BSt8MVsq.js";/* empty css                        */import"./card-rarity.Bj6Ka5JZ.js";function w(e,l){return e?n`
        <img class="rarity-icon" src=${e} alt=${l} title=${l} width="24" height="24" decoding="async" />
      `:n`
        <span class="rarity-icon" role="img" aria-label=${l||r} title=${l||r}></span>
      `}const v=m(class extends f{render(e){return e}update(e,[l]){return e.type===k.PROPERTY&&e.element.matches(":focus-within")?y:x(l)}});function C(e){const l=["icon-button",e.variant&&e.variant!=="standard"?`icon-button--${e.variant}`:"",e.toggle?"icon-button--toggle":"",e.className||""].filter(Boolean).join(" "),t=n`
    <button
      class=${l}
      type="button"
      aria-label=${e.label}
      title=${e.shortcut?`${e.label} (${e.shortcut})`:e.label}
      aria-pressed=${e.pressed===void 0?r:String(e.pressed)}
      ?disabled=${e.disabled}
      @click=${e.onClick}
    >
      ${e.content??b(e.icon,e.size??24)}
    </button>
  `;return e.badge?n`
        <span class="badge-anchor">
          ${t}
          <span class="badge" aria-hidden="true">${e.badge>99?"99+":e.badge}</span>
        </span>
      `:t}function E(e){const l=(t,a)=>{const c=t.currentTarget;if(!a&&e.commitOnChange)return;if(!c.value.trim()){e.nullable?e.onInput(null):a&&(c.value=String(e.value));return}const i=Number(c.value);if(!Number.isFinite(i))return;const d=Math.min(e.max??1/0,Math.max(e.min??-1/0,i));e.onInput(d),(a||d!==i)&&(c.value=String(d))};return n`
    <md-outlined-text-field class="number-field" type="number" label=${e.label} aria-label=${e.ariaLabel??e.label}
      min=${e.min??r} max=${e.max??r} step=${e.step??1}
      suffix-text=${e.suffix??r} inputmode=${e.step===1||e.step===void 0?"numeric":"decimal"}
      .value=${v(e.value===null?"":String(e.value))}
      ?disabled=${e.disabled}
      ?error=${e.invalid} aria-invalid=${e.invalid?"true":r}
      @input=${t=>l(t,!1)} @change=${t=>l(t,!0)}>
    </md-outlined-text-field>
  `}function S(e,l,t,a){return c=>{const i={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1},d=Math.max(0,e.indexOf(l));let u=c.key in i?(d+i[c.key]+e.length)%e.length:c.key==="Home"?0:c.key==="End"?e.length-1:-1;if(u<0||!e.length)return;c.preventDefault();const s=c.currentTarget,g=s.querySelectorAll('[role="tab"], [role="radio"], [role="checkbox"]'),h=i[c.key]??(c.key==="End"?-1:1);let $=0;for(;g[u]?.matches(":disabled, [aria-disabled=true]")&&$<e.length;)u=(u+h+e.length)%e.length,$++;$===e.length||u===d&&e[d]===l||(t(e[u]),requestAnimationFrame(()=>s.querySelectorAll('[role="tab"], [role="radio"], [role="checkbox"]')[u]?.focus(a)))}}function T(e){const l=e.options.find(a=>a.value===e.value)??e.options[0],t=["segmented",e.iconOnly?"segmented--icon":"",e.grow===!1?"segmented--compact":e.grow?"segmented--grow":""].filter(Boolean).join(" ");return n`
    <div
      class=${t}
      data-app-bar-switch=${e.appBarSwitch??r}
      role="radiogroup"
      aria-label=${e.label}
      @keydown=${S(e.options.map(a=>a.value),e.value,a=>{e.options.find(c=>c.value===a)?.disabled||e.onSelect(a)})}
    >
      ${e.options.map(a=>n`
          <button
            type="button"
            role="radio"
            aria-checked=${String(a.value===e.value)}
            aria-label=${e.iconOnly?a.label:r}
            title=${a.shortcut?`${a.label} (${a.shortcut})`:e.iconOnly?a.label:r}
            tabindex=${a===l?"0":"-1"}
            ?disabled=${a.disabled}
            @click=${()=>e.onSelect(a.value)}
          >
            ${a.leading??(a.icon?b(a.icon,20):r)}
            ${e.iconOnly?r:n`
                    <span>${a.label}</span>
                  `}
            ${e.showShortcuts&&a.shortcut?n`<kbd>${a.shortcut.split(" / ")[0]}</kbd>`:r}
          </button>
        `)}
    </div>
  `}function q(e){return n`
    <button
      class=${e.imageOnly?"chip chip--rarity":"chip"}
      type="button"
      role="checkbox"
      aria-checked=${String(e.selected)}
      aria-label=${e.imageOnly?e.label:r}
      title=${e.imageOnly?e.label:r}
      @click=${e.onToggle}
    >
      ${e.selected?b("check",18):e.image&&!e.imageOnly?n`
                <span class="chip__avatar"><img src=${e.image} alt="" loading="lazy" decoding="async" /></span>
              `:r}
      <span class="chip__label">
        ${e.imageOnly?w(e.image||"",e.label):e.label}
      </span>
      ${e.count===void 0?r:n`
              <span class="chip__count">${e.count}</span>
            `}
    </button>
  `}function F(e,l,t,a=e){return n`
    <button class="chip chip--input" type="button" @click=${t} aria-label=${`${l}: ${e}`}>
      <span class="chip__label">${a}</span>
      <span class="chip__remove">${b("close",18)}</span>
    </button>
  `}export{w as a,F as b,v as c,q as f,C as i,E as n,S as r,T as s};
