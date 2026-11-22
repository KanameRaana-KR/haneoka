import{c as v}from"./client.BYho01b_.js";import{n as y}from"./locales.DtpYD_uK.js";import"./lit-element.Bc_VOJIm.js";import{A as f,b as h}from"./lit-html.DhDqt3I2.js";import{l as w,n as g}from"./lazy-images.2hwWuBaG.js";/* empty css                        */const T=["jp","en","tw","cn","kr"];function i(t,o,e){const n=`common.time.${o}`;return v(t,n,n,e)}function m(t,o){if(Array.isArray(t)){if(o)return m(t[T.indexOf(o)]);for(const n of t){const r=m(n);if(r!==void 0)return r}return}if(typeof t!="number"&&(typeof t!="string"||!t.trim()))return;const e=Number(t);return Number.isFinite(e)&&e>0&&e<=864e13?e:void 0}function p(t,o){if(!Number.isFinite(o))return"";const e=Math.max(1,Math.round(o/6e4)),n=Math.floor(e/1440),r=Math.floor(e%1440/60),s=c=>new Intl.NumberFormat(y(t)).format(c),a=(c,u)=>i(t,c,{count:s(u)});return n>=1?r?`${a("spanDays",n)} ${a("spanHours",r)}`:a("spanDays",n):r>=1?a("spanHours",r):a("spanMinutes",e)}function A(t,o,e,n={}){const r=n.now??Date.now(),s=m(o,n.region),a=m(e,n.region);return s!==void 0&&a!==void 0&&a<s?"":s!==void 0&&s>r?i(t,"startsIn",{time:p(t,s-r)}):a!==void 0?i(t,a<r?"endedAgo":"endsIn",{time:p(t,Math.abs(a-r))}):s!==void 0?n.ongoing??"":""}function D(t,o,e=Date.now()){const n=m(o);if(n===void 0)return"";const r=n-e,s=Math.round(r/864e5);if(s===0)return r>0?i(t,"releasesIn",{time:p(t,r)}):i(t,"releasedToday");const a=i(t,"spanDays",{count:new Intl.NumberFormat(y(t)).format(Math.abs(s))});return i(t,s<0?"releasedAgo":"releasesIn",{time:a})}function l(t,o,e,n=!0,r="ja"){const s=w(t,r),a=w(o,r),c=u=>{const d=u.currentTarget,b=d.classList.contains("event-artwork__logo")?a:s;d.dataset.candidates=JSON.stringify(b),d.dataset.candidateIndex=String(b.findIndex(I=>new URL(I,document.baseURI).href===d.src)),g(u)};return h`
    <span class="event-artwork" role="img" aria-label=${e}>
      <img
        class="event-artwork__background"
        src=${n?f:s[0]}
        data-src=${n?t:f}
        alt=""
        decoding="async"
        @error=${n?g:c}
      />
      <img
        class="event-artwork__logo"
        src=${n?f:a[0]}
        data-src=${n?o:f}
        alt=""
        decoding="async"
        @error=${n?g:c}
      />
    </span>
  `}export{T,p as a,A as b,D as c,l as e,m as r};
