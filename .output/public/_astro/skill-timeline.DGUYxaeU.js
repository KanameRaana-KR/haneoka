import"./lit-element.Bc_VOJIm.js";import{A as c,b as t,w as k}from"./lit-html.DhDqt3I2.js";/* empty css                        */const u=e=>{const a=Math.max(0,Math.floor(e/1e3));return`${Math.floor(a/60)}:${String(a%60).padStart(2,"0")}`},$=e=>`${(e/1e3).toFixed(1)}s`;function y(e){const a=Math.max(1,e.durationMs),i=s=>`${Math.min(100,Math.max(0,s/a*100)).toFixed(3)}%`,d=e.bucketMs??500,h=Math.max(1,...e.density),o=s=>s.color?`--window-color:${s.color};--window-on-color:#fff;--window-text-shadow:0 0 2px rgb(0 0 0 / 0.6)`:"",M=e.density.map((s,l)=>`${l*d/a*1e3},${40-s/h*40}`).join(" "),m=[...e.windows].sort((s,l)=>s.startMs-l.startMs),r=[],_=m.map(s=>{let l=r.findIndex(n=>n<=s.startMs);return l<0&&(l=r.length),r[l]=s.endMs,{window:s,lane:l}}),g=Array.from({length:Math.floor(a/3e4)+1},(s,l)=>l*3e4).filter(s=>s<a);return t`
    <figure class="skill-timeline" style=${`--skill-lanes:${Math.max(1,r.length)}`}>
      <div class="skill-timeline__plot" role="img" aria-label=${e.label}>
        ${e.fever.map(([s,l],n)=>{const p=e.feverLabel?.(n);return t`<span class="skill-timeline__fever" style=${`inset-inline-start:${i(s)};width:calc(${i(l)} - ${i(s)})`}
            >${p?t`<span aria-hidden="true">${n+1}</span><span class="sr-only">${p}</span>`:c}</span
          >`})}
        <svg class="skill-timeline__density" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
          ${k`<polygon points=${`0,40 ${M} 1000,40`}></polygon>`}
        </svg>
        <div class="skill-timeline__lanes">
          ${_.map(({window:s,lane:l},n)=>t`
              <span
                class="skill-timeline__window"
                style=${`inset-inline-start:${i(s.startMs)};width:max(14px, calc(${i(s.endMs)} - ${i(s.startMs)}));--lane:${l};${o(s)}`}
                title=${`${n+1} / ${$(s.startMs)}–${$(s.endMs)}`}
              >${n+1}</span>
            `)}
        </div>
      </div>
      <div class="skill-timeline__axis tabular" aria-hidden="true">
        ${g.map(s=>t`<span style=${`inset-inline-start:${i(s)}`}>${u(s)}</span>`)}
      </div>
      <ol class="skill-timeline__events" role="list">
        ${m.map((s,l)=>t`
            <li style=${o(s)}>
              <span class="skill-timeline__index">${l+1}</span>
              ${s.image?t`<img src=${s.image} alt="" width="28" height="28" loading="lazy" decoding="async" />`:c}
              <span class="skill-timeline__label">${s.label}</span>
              <span class="skill-timeline__time tabular">${$(s.startMs)}</span>
              ${s.value===void 0?c:t`<strong class="tabular">${s.value}</strong>`}
            </li>
          `)}
      </ol>
    </figure>
  `}export{y as s};
