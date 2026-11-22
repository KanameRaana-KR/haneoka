import"./lit-element.Bc_VOJIm.js";import{A as d,b as o}from"./lit-html.DhDqt3I2.js";import{n as $}from"./lazy-images.2hwWuBaG.js";import{u as k}from"./catalog.CfAhzaok.js";import{r as C}from"./controls.BCr1YKFS.js";import{d as v}from"./difficulty-display.DtJcy4Kk.js";/* empty css                        */import{c as x}from"./catalog-relationships.Cko_f-QP.js";function u(e){if(!v())return d;const t=e.difficultyEstimate,a=t?.quality,n=t?.estimatedConstant;return t?.target==="fc-operation-load"&&(a?.status==="estimated"||a?.status==="low-confidence")&&typeof n=="number"&&Number.isFinite(n)&&n>0?o`
        <small class="difficulty-constant">${n.toFixed(1)}</small>
      `:d}const b=["easy","normal","hard","expert","master"],p=["special","append"];function f(e,t=0){const a=String(e.difficultyName||e.difficulty||"").toLowerCase();return b.includes(a)||p.includes(a)?a:b[Number(a)||t]||"master"}function P(e,t=u(e)){const a=f(e),n=String(e.difficultyName||e.difficulty||a);return o`
    <span
      class="difficulty-picker"
      style=${`--chart-color:var(--md-extended-color-difficulty-${p.includes(a)?"master":a})`}
    >
      <span class="difficulty-picker__value">
        <small class="truncate">${n.toUpperCase()}</small>
        <b class="truncate">${e.displayLevel??e.playLevel??e.level??"—"}</b>
        ${t??d}
      </span>
    </span>
  `}function B(e){const t=e.rows.map(f),a=n=>e.onSelect(n,t.indexOf(n));return o`
    <span
      class=${`difficulty-picker${e.compact?" difficulty-picker--compact":""}`}
      role="radiogroup"
      aria-label=${k(e.locale,"catalog.songs.fields.difficulty")}
      @click=${n=>n.stopPropagation()}
      @keydown=${C(t,e.selected,a)}
    >
      ${e.rows.map((n,l)=>{const r=t[l],c=n.displayLevel??n.playLevel??n.level??"—",i=r===e.selected;return o`
          <button
            type="button"
            role="radio"
            aria-checked=${i}
            tabindex=${i||!t.includes(e.selected)&&l===0?0:-1}
            aria-label=${`${r.toUpperCase()} ${c}`}
            title=${`${r.toUpperCase()} ${c}`}
            style=${`--chart-color:var(--md-extended-color-difficulty-${p.includes(r)?"master":r})`}
            @click=${()=>a(r)}
          >
            <small>${r.toUpperCase()}</small>
            <b>${c}</b>
            ${u(n)}
          </button>
        `})}
    </span>
  `}const T={1:"CardType-Red.png",2:"CardType-Blue.png",3:"CardType-Green.png",4:"CardType-Yellow.png",5:"CardType-Purple.png"};function F(e,t){const a=Number(t||0),n=e.get(`sp_icon_live_music_type_${a}.png`);if(n)return n;const l=T[a];return l&&e.get(l)||""}function _(e,t=""){return[e.jacketUrl,t,e.jacketThumbUrl].filter((a,n,l)=>typeof a=="string"&&!!a&&l.indexOf(a)===n)}function M(e,t,a,n=[],l){const r=t.title(e),c=[...new Set((Array.isArray(e.bandIds)?e.bandIds:[]).map(Number).filter(s=>Number.isFinite(s)&&s>0))],i=[...new Set((c.length?c.map(s=>t.bandIcon({...e,bandId:s})):[t.bandIcon(e)]).filter(Boolean))],m=t.attributeMark(e),y=_(e,t.image(e)),g=y[0]||"";return{kind:"song",title:r.text,titleLanguage:r.locale,subtitle:t.artist(e),adornment:t.performerAdornment?t.performerAdornment(e):i.length?x(i.map(s=>({key:s,name:"",image:t.imageForLocale(s)}))):d,label:r.text,image:g,imageCandidates:y,onImageError:$,href:a,marks:[m?{at:"start",image:m,label:t.attributeLabel(e)}:null,...n,l?{at:"end",text:o`
              <span class="song-tile__difficulty">
                <span>
                  ${f(l).toUpperCase()}
                  ${l.displayLevel??l.playLevel??l.level??"—"}
                </span>
                ${u(l)}
              </span>
            `}:null]}}export{B as a,f as b,P as d,F as l,M as s};
