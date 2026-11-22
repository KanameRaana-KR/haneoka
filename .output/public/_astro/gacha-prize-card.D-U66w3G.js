import"./lit-element.Bc_VOJIm.js";import{A as c,b as a}from"./lit-html.DhDqt3I2.js";/* empty css                               */function e({label:s,kind:r,rarity:$,image:t,href:d,attribute:i,rarityMark:g,pickup:p,pickupCount:l=0,count:n=0}){const o=a`
    ${t?a`
            <img class="gacha-card__art" src=${t} alt="" loading="lazy" decoding="async" />
          `:c}
    ${i?a`
            <img class="gacha-card__attribute" src=${i} alt="" />
          `:c}
    ${g?a`
            <img class="gacha-card__rarity" src=${g} alt="" />
          `:c}
    ${p?a`
            <span class="gacha-card__pickup">${l?`UP ×${l}`:"UP"}</span>
          `:c}
    ${n?a`
            <span class="gacha-card__count tabular">×${n}</span>
          `:c}
  `;return d?a`
        <a class="gacha-card" data-kind=${r} data-rarity=${$} href=${d} title=${s} aria-label=${s}>
          ${o}
        </a>
      `:a`
        <span class="gacha-card" data-kind=${r} data-rarity=${$} title=${s} role="img" aria-label=${s}>
          ${o}
        </span>
      `}export{e as g};
