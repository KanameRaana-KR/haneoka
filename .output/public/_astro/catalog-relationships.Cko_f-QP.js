import"./lit-element.Bc_VOJIm.js";import{b as s,A as u}from"./lit-html.DhDqt3I2.js";import{h as l,j as $}from"./catalog.CfAhzaok.js";function k(o){return s`<span class="avatar-stack">${o.filter((t,i,r)=>t.image&&r.findIndex(c=>c.key===t.key)===i).map(t=>s`<img src=${t.image} alt="" loading="lazy" decoding="async" />`)}</span>`}function I(o,t,i,r=()=>"",c={}){const g=o.map(a=>({id:a,character:i(a)})),d=g.map(({id:a,character:n})=>{for(const e of[n?.characterName,n?.englishName])if(l(e,t).text)return e;return r(a)}),p=$(d,t,c),f=s`
    ${p.parts.map(a=>s`
        <span lang=${a.lang}>${a.text}</span>
      `)}
  `,x=s`
    <span class="avatar-stack">
      ${g.filter(({id:a},n,e)=>e.findIndex(m=>m.id===a)===n).slice(0,5).map(({id:a,character:n})=>{const e=String(n?.faceImage||n?.thumbnailImage||""),m=l(n?.characterName,t).text||l(n?.englishName,t).text||r(a);return e?s`
              <img src=${e} alt=${m} loading="lazy" decoding="async" />
            `:u})}
    </span>
  `;return{content:f,adornment:x,label:p.text}}export{I as a,k as c};
