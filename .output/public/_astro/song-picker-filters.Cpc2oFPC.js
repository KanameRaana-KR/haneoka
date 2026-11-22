import"./lit-element.Bc_VOJIm.js";import{b as i,A as d}from"./lit-html.DhDqt3I2.js";import{b as m,d as v}from"./chooser-filters.TFq4Gm2y.js";import{f as b,s as $,b as p}from"./controls.BCr1YKFS.js";const y=()=>({category:"",band:"",attribute:"",gekisouTypes:[],gekisouMatch:"only",minLevel:null,maxLevel:null,maxSeconds:null});function L(e){const{state:l,t:s,common:n,change:t}=e,r=(a,g,o)=>o.length?v({label:g,value:l[a],allLabel:n("common.states.all","All"),options:o,change:c=>t({[a]:c})}):d,u=(a,g)=>i`
    <md-outlined-text-field type="number" min="1" label=${g}
      .value=${l[a]===null?"":String(l[a])}
      @input=${o=>{const c=o.currentTarget.value;t({[a]:c===""?null:Number(c)})}}></md-outlined-text-field>
  `;return i`
    ${r("category",n("catalog.songs.fields.genre","Genre"),e.categories)}
    ${r("band",s("songBandFilter","Song band"),e.bands)}
    ${r("attribute",s("songAttributeFilter","Song attribute"),e.attributes)}
    ${e.gekisou?m(s("gekiso","GEKISO"),i`
      <div class="stack stack--tight">
        <div class="cluster">
          ${["Combo","Luck","JustCount","Mix"].map((a,g)=>{const o=l.gekisouTypes.includes(a);return b({label:["COMBO","LUCK","JUST",n("catalog.songs.gekisou.mixed","Mixed")][g],selected:o,onToggle:()=>t({gekisouTypes:o?l.gekisouTypes.filter(c=>c!==a):[...l.gekisouTypes,a]})})})}
        </div>
        ${$({label:n("catalog.songs.gekisou.matchMode","Match mode"),value:l.gekisouMatch,options:[{value:"only",label:n("catalog.songs.gekisou.only","Only selected types")},{value:"contains",label:n("catalog.songs.gekisou.contains","Contains a selected type")}],onSelect:a=>t({gekisouMatch:a})})}
      </div>
    `):d}
    ${m(s("level","Level"),i`<div class="row">
      ${u("minLevel",s("sc.minLevel","Minimum level"))}
      ${u("maxLevel",s("sc.maxLevel","Maximum level"))}
    </div>`)}
    ${e.duration?m(n("common.fields.duration","Duration"),u("maxSeconds",s("maxDuration","Maximum chart duration (seconds)"))):d}
    ${m(n("common.actions.sort","Sort"),e.sort)}
  `}function M(e){const{selected:l,choices:s,change:n}=e;return i`<div class="cluster" role="group" aria-label=${e.label}>
    ${s.map(({value:t,label:r})=>b({label:r,selected:l.includes(t),onToggle:()=>n(l.includes(t)?l.filter(u=>u!==t):[...l,t])}))}
    ${e.allLabel?b({label:e.allLabel,selected:s.every(({value:t})=>l.includes(t)),onToggle:()=>n(s.map(({value:t})=>t))}):d}
  </div>`}function S(e){return i`<div class="cluster tb-picker-applied">
    ${e.items.map(l=>p(l.label,e.removeLabel,l.clear))}
    ${e.items.length?i`<button class="button button--text" type="button" @click=${e.clear}>${e.clearLabel}</button>`:d}
  </div>`}export{M as a,S as b,y as e,L as s};
