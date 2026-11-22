import"./lit-element.Bc_VOJIm.js";import{A as n,b as a}from"./lit-html.DhDqt3I2.js";import{l as r}from"./state.Ck623oKm.js";/* empty css                        */function y(t){const s=t.state==="initial"&&t.layout==="cards"?Math.max(1,Math.min(5,Math.trunc(t.columns||2))):void 0,o=t.state==="ready"||t.state==="refreshing"?t.content:t.state==="error"?t.retainedContent:n;return a`
    <section class="async-region" aria-busy=${String(t.state==="initial"||t.state==="refreshing")}>
      ${t.state==="initial"?a`
              ${r(t.label,{local:!!t.local})}
              <div
                class=${`async-region__placeholder async-region__placeholder--${t.layout||"list"}`}
                style=${s?`--async-region-columns:${s}`:n}
                aria-hidden="true"
              >
                ${Array.from({length:s?s*2:t.layout==="detail"?2:6},()=>a`
                    <div class="async-region__skeleton">
                      <span></span>
                      <span></span>
                    </div>
                  `)}
              </div>
            `:n}
      ${t.state==="error"?a`
              <div class="inline-message error async-region__error" role="alert">
                <span>${t.message}</span>
                ${t.onRetry?a`
                        <button class="button button--text" type="button" @click=${t.onRetry}>
                          ${t.retryLabel}
                        </button>
                      `:n}
              </div>
            `:n}
      <div class="async-region__content">${o??n}</div>
    </section>
  `}export{y as a};
