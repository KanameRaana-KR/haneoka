import"./lit-element.Bc_VOJIm.js";import{b as l}from"./lit-html.DhDqt3I2.js";import{h as a}from"./catalog.CfAhzaok.js";function p(o,n){const e=a(o,n);return l`
    <span lang=${e.locale}>${e.text}</span>
  `}function c(o,n){const e=o.map(t=>a(t,n)).filter(t=>t.text);let s=0;return new Intl.ListFormat(n,{style:"long",type:"conjunction"}).formatToParts(e.map(t=>t.text)).map(t=>t.type==="element"?l`
            <span lang=${e[s++].locale}>${t.value}</span>
          `:t.value)}export{p as a,c as l};
