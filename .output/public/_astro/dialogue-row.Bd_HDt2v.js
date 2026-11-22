import"./lit-element.Bc_VOJIm.js";import{A as e,b as r}from"./lit-html.DhDqt3I2.js";import{i as c}from"./icon.BSt8MVsq.js";/* empty css                        */function _(a){const t=a.state||"idle",s=["dialogue-row",a.className||""].filter(Boolean).join(" "),l=a.avatar&&a.avatar!==e?a.avatar:c("person",24),d=!!a.speaker,i=t==="error"?"alert":"status";return r`
    <article
      class=${s}
      data-dialogue-key=${a.key||e}
      data-dialogue-state=${t}
      data-command-index=${a.commandIndex??e}
    >
      ${d||a.avatar&&a.avatar!==e?r`
              <div class="dialogue-row__heading">
                <div class="dialogue-row__avatar" aria-hidden="true">${l}</div>
                ${d?r`
                  <strong class="dialogue-row__speaker" lang=${a.speakerLanguage||e}>
                    ${a.speakerContent??a.speaker}
                  </strong>
                `:e}
              </div>
            `:e}
      <div class="dialogue-row__bubble">
        <div class="dialogue-row__content">
          <div class="dialogue-row__copy">
            ${a.text?r`
                    <!-- prettier-ignore -->
                    <div class="dialogue-row__text" lang=${a.textLanguage||e} dir="auto">${a.text}</div>
                  `:e}
            ${a.meta||e}
          </div>
          ${a.action?r`
                  <div class="dialogue-row__action">${a.action}</div>
                `:e}
        </div>
        ${a.statusMessage&&t!=="loading"?r`
                <p class=${`dialogue-row__status dialogue-row__status--${t}`} role=${i}>
                  ${a.statusMessage}
                </p>
              `:e}
      </div>
    </article>
  `}export{_ as d};
