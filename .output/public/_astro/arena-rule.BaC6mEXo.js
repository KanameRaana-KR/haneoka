import"./lit-element.Bc_VOJIm.js";import{b as i}from"./lit-html.DhDqt3I2.js";import{c as m}from"./client.BYho01b_.js";import{g as f}from"./gekisou.DviiKDhl.js";import{g as b}from"./icon.BSt8MVsq.js";/* empty css                        */const y=["","Red","Blue","Green","Yellow","Purple"],c=["","red","blue","green","yellow","purple"];function u(a,s){return s===99?"ALL":s===0?m(a,"catalog.arena.originalRule","Original"):m(a,`catalog.songs.liveTypes.${c[s]}`,c[s]||String(s))}function t(a,s){return f(s)?.fallback||m(a,"catalog.arena.originalRule","Original")}function _(a,s){return s.missions.every(r=>r===s.missions[0])?`${t(a,s.missions[0])}×3`:s.missions.map(r=>t(a,r)).join(" / ")}const l=(a,s)=>{const n=a.marks[s];return n?`/runtime/${a.server}/${n.replace(/^runtime\//u,"")}`:""};function d(a,s,n=24){const r=y[s],e=r?l(a,`CardType-${r}.png`):"",p=l(a,`sp_icon_live_music_type_${s}.png`)||e;return p?i`
        <img
          class="arena-attribute"
          src=${p}
          width=${n}
          height=${n}
          alt=""
          @error=${$=>{const o=$.currentTarget;e&&o.getAttribute("src")!==e?o.src=e:o.hidden=!0}}
        />
      `:i`
        <span class="arena-attribute arena-attribute--text">${u(a.locale,s)}</span>
      `}function g(a,s,n=24){const r=a.catalog.images?.missions[s];return r?i`
        <span class="arena-mission" title=${t(a.locale,s)}>${b(r,n)}</span>
      `:i`
        <span class="arena-mission arena-mission--text">${t(a.locale,s)}</span>
      `}function M(a,s,n=24){if(!s)return i`
      <span class="arena-rule arena-rule--empty">—</span>
    `;const r=s.missions.every(e=>e===s.missions[0]);return i`
    <span class="arena-rule">
      <span class="arena-rule__part">
        ${d(a,s.musicType,n)}
        <span>${u(a.locale,s.musicType)}</span>
      </span>
      <span class="arena-rule__part">
        ${r?g(a,s.missions[0],n):s.missions.map(e=>g(a,e,n))}
        <strong>${_(a.locale,s)}</strong>
      </span>
    </span>
  `}export{g as a,d as b,t as c,u as d,_ as e,M as f};
