import"./lit-element.Bc_VOJIm.js";import{b as t}from"./lit-html.DhDqt3I2.js";import{i as r}from"./icon.BSt8MVsq.js";import{c as l}from"./card-growth.Cv0vV_gt.js";function g(a){return{kind:a.kind,title:a.title,titleLanguage:a.titleLanguage,subtitle:a.subtitle,label:a.label,image:a.image,fit:"contain",placeholder:r("image",32),mediaOverlay:a.growth?l(a.growth):void 0,adornment:a.adornment??t`
        <span class="avatar-stack">
          ${(a.avatars??[]).filter(e=>e.image).slice(0,5).map(e=>t`
                <img src=${e.image} alt=${e.name} loading="lazy" decoding="async" />
              `)}
        </span>
      `,marks:[a.attributeIcon?{at:"start",image:a.attributeIcon,label:a.attributeLabel}:a.attributeLabel?{at:"start",text:a.attributeLabel,label:a.attributeLabel}:null,a.rarityIcon?{at:"end",image:a.rarityIcon,label:a.rarityLabel}:a.rarityLabel?{at:"end",text:a.rarityLabel,label:a.rarityLabel}:null]}}export{g as c};
