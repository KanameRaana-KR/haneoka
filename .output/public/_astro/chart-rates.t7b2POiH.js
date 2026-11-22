import{i as y}from"./lit-element.Bc_VOJIm.js";import{A as $,n as A,b as h}from"./lit-html.DhDqt3I2.js";import{c as T}from"./client.BYho01b_.js";import{s as E}from"./controls.BCr1YKFS.js";import"./slider.OMsc13G9.js";/* empty css                        *//* empty css                        */const p=new WeakMap;function L(e,t,n,o,i=String,s={}){if(t.length<2)return $;const u=n!==null&&t.includes(n),a=u?t.indexOf(n):0,l=t.every((r,c)=>r===t[0]+c),g=u?i(n):s.unknownLabel??"Not set",f=t[u?Math.max(0,a-1):0],x=t[u?Math.min(t.length-1,a+1):0],C=t.join(","),S=(r,c)=>{const d=c??n,m=d!==null&&t.includes(d),v=m?t.indexOf(d):0,M=m?i(d):g;r.value=l?t[v]:v,r.valueLabel=M,r.ariaValueText=M;const N=r.closest(".detail-level-switch")?.querySelector(".detail-level-switch__value strong");N&&(N.textContent=M)},k=r=>{let c=p.get(r);return(!c||c.committed!==n||c.domain!==C||c.context!==s.context||c.label!==e||c.commitOnChange!==!!s.commitOnChange)&&(c={committed:n,domain:C,context:s.context,label:e,commitOnChange:!!s.commitOnChange},p.set(r,c)),s.disabled&&(c.value=void 0),S(r,c.value),c},b=r=>{const c=r.currentTarget,d=p.get(c);d&&(d.value=void 0),S(c)},_=r=>{const c=r.currentTarget;if(s.disabled){b(r);return}const d=Number(c.value),m=l?d:t[d];if(!Number.isSafeInteger(m)||!t.includes(m)){b(r);return}const v=p.get(c)??k(c);v.value=s.commitOnChange?m:void 0,S(c,m),s.commitOnChange||o(m)},I=r=>{const c=r.currentTarget,d=p.get(c),m=d?.value;if(s.disabled||m===void 0){b(r);return}d.value=void 0,o(m)},R=(r,c)=>{if(s.disabled)return;const d=r.currentTarget.closest(".detail-level-switch")?.querySelector("md-slider");if(d){const m=p.get(d);m&&(m.value=void 0)}o(c)};return h`
    <div class="detail-level-switch">
      <span class="detail-level-switch__value">
        <small>${e}</small>
        <strong></strong>
      </span>
      <button
        class="icon-button"
        ?disabled=${s.disabled||u&&a===0}
        @click=${r=>R(r,f)}
        aria-label=${`${e} ${i(f)}`}
      >
        <svg class="material-icon" width="18" height="18"><use href="/icons.svg#remove"></use></svg>
      </button>
      <md-slider
        class="md3-slider"
        min=${l?t[0]:0}
        max=${l?t.at(-1):t.length-1}
        step="1"
        ?disabled=${s.disabled}
        labeled
        @input=${_}
        @change=${s.commitOnChange?I:$}
        @pointercancel=${b}
        @keydown=${r=>{r.key==="Escape"&&p.get(r.currentTarget)?.value!==void 0&&(r.preventDefault(),r.stopPropagation(),b(r))}}
        aria-label=${e}
        ${A(r=>{r&&k(r)})}
      ></md-slider>
      <button
        class="icon-button"
        ?disabled=${s.disabled||u&&a===t.length-1}
        @click=${r=>R(r,x)}
        aria-label=${`${e} ${i(x)}`}
      >
        <svg class="material-icon" width="18" height="18"><use href="/icons.svg#add"></use></svg>
      </button>
    </div>
  `}function q(e,t,n){if(!Number.isSafeInteger(t)||!Number.isSafeInteger(n)||t<0||n<t)return{items:[],complete:!1,missing:[]};const o=new Map,i=new Set;for(const a of e)a.to<=t||a.to>n||(o.has(a.to)&&i.add(a.to),o.set(a.to,a));const s=[],u=new Map;for(let a=t+1;a<=n;a++){const l=o.get(a);if(!l||l.from!==a-1||i.has(a)){s.push(a);continue}for(const g of l.items){if(!g.identity||!Number.isSafeInteger(g.count)||g.count<0){s.includes(a)||s.push(a);continue}const f=(u.get(g.identity)?.count??0)+g.count;if(!Number.isSafeInteger(f)){s.includes(a)||s.push(a);continue}u.set(g.identity,{...g,count:f})}}return{items:s.length?[]:[...u.values()],complete:!s.length,missing:s}}function V(e){return e.steps?h`
      <catalog-upgrade-cost .options=${e}></catalog-upgrade-cost>
    `:O(e)}function O(e){return h`
    <section class="upgrade-cost" aria-label=${e.label}>
      <header>
        <strong>${e.label}</strong>
        <span>
          ${e.from}
          <span aria-hidden="true">→</span>
          ${e.to}
        </span>
      </header>
      <ul>
        ${e.items.map(t=>h`
            <li>
              ${t.image?h`
                      <img src=${t.image} alt="" loading="lazy" />
                    `:$}
              ${t.href?h`
                      <a href=${t.href}>${t.name}</a>
                    `:h`
                      <span>${t.name}</span>
                    `}
              <strong>×${t.count.toLocaleString(e.locale)}</strong>
            </li>
          `)}
      </ul>
    </section>
  `}class D extends y{static properties={options:{attribute:!1},mode:{state:!0},current:{state:!0}};constructor(){super(),this.mode="step",this.current=1}createRenderRoot(){return this}willUpdate(t){const n=t.get("options");t.has("options")&&n?.scope!==this.options?.scope&&(this.mode="step",this.current=this.options?.initial??1),this.options&&(this.current=Math.min(this.current,this.options.to))}render(){const t=this.options;if(!t)return $;const n=(a,l)=>T(t.locale??"en",`catalog.cards.costs.${a}`,l),o=t.initial??1,i=this.mode==="step"?t.from:this.mode==="cumulative"?o:this.current,s=q(t.steps??[],i,t.to),u=Array.from({length:Math.max(1,t.to-o+1)},(a,l)=>l+o);return h`
      <div class="card-detail-controls">
        ${E({label:n("mode","Material calculation"),value:this.mode,options:[{value:"step",label:n("step","One upgrade")},{value:"cumulative",label:n("cumulative","Cumulative")},{value:"range",label:n("range","Current → target")}],onSelect:a=>{this.mode=a}})}
        ${this.mode==="range"?L(n("current","Current"),u,this.current,a=>{this.current=a},String,{context:t.scope}):$}
        ${s.complete?O({...t,from:i,items:s.items}):h`
                <p role="status">
                  ${n("missing","Material data is unavailable for stages: {stages}").replace("{stages}",s.missing.join(", "))}
                </p>
              `}
      </div>
    `}}typeof customElements<"u"&&!customElements.get("catalog-upgrade-cost")&&customElements.define("catalog-upgrade-cost",D);const K=Array.from({length:25},(e,t)=>5e3+t*250),P=["","E","D","C","B","A","S","SS"],U=[3,4,5,6,7],tt=e=>U.includes(e);function B(e){return P[e]||""}function et(e,t){const n=B(t);return n?`/assets/${e}/Assets/AddressableResources/UI/Texture/BandRank/ImgScorerank_${n}.png`:""}function nt(e,t){return[...e].sort((n,o)=>t(n)-t(o))}function st(e,t,n,o,i){const s=(a,l)=>a+(l-a)*n;let u=0;for(let a=0;a<4;a++){let l=s(e.base[0][a],e.base[1][a]);for(let f=0;f<5;f++)l+=(i[f]??0)/100*s(e.events[0][f][a],e.events[1][f][a]);const g=a?e.percents[a-1]?.[(t[a-1]??1)-1]??0:0;u+=l*(1+g/100)}return u*o}const at="haneoka-chart-rates-v11";function ot(e){return e.format==="gzip-delta-v1"}const W=(()=>{const e=[],t=n=>{if(n.length===5)e.push(n);else for(let o=0;o<5;o++)n.includes(o)||t([...n,o])};return t([]),e})(),w=2147483647;function j(e,t){if(t<1)return w;const n=Math.trunc(Math.sqrt(5/t)*e*t);return n>w?-w-1:n}function rt(e,t,n){let o=2;for(const[i,s]of e){const u=j(s,n);if(u>t)return{rank:o,next:{rank:i,required:u}};o=i}return{rank:Math.max(2,o),next:null}}function it(e,t){let n=2;for(const o of e)o[1]<=t&&(n=Math.max(n,o[0]));return n}function ct(e,t,n){const o=1-t*(1-n);return{base:e.base*o,general:e.windows.map(i=>i.map(s=>s*o)),perfect:e.windows.map(i=>i.map(s=>s*(1-t)))}}function ut(e,t){const n=o=>Math.min(K.length-1,Math.max(0,Math.round(o.extensionMs/250)));return W.map(o=>{let i=e.base;for(let s=0;s<(e.general[0]?.length??0);s++){const u=t[o[s]];if(!u)continue;const a=n(u);i+=u.score/100*e.general[a][s]+u.perfect/100*e.perfect[a][s]}return i})}const z=(e,t,n)=>e*t*(1-2e-6)-n;function H(e,t,n){if(e<=0)return{mean:0,every:0,best:0};const o=i=>Math.ceil((e+n)/(i*(1-2e-6)));return{mean:o(t.reduce((i,s)=>i+s,0)/t.length),every:o(Math.min(...t)),best:o(Math.max(...t))}}function lt(e,t,n,o){return n.filter(i=>z(t,i,o)>=e).length/n.length}function dt(e,t,n){return Math.trunc(Math.imul(Math.imul(Math.round(t*100)+1e4,n),e)/1e4)}function mt(e,t,n,o){let i=0;for(const[s,u,a]of e)s===t&&(i+=Math.trunc(Math.imul(Math.imul(u,Math.round(n*100)+1e4),o)/1e4)*a/1e4);return i}function gt(e,t,n,o){return H(e,t.map(i=>i/n),o)}export{at as C,K as S,et as a,B as b,tt as c,j as d,rt as e,nt as f,st as g,H as h,ot as i,lt as j,q as k,ct as l,it as m,mt as n,dt as o,z as p,L as r,ut as s,gt as t,V as u};
