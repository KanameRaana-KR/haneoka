import"./lit-element.Bc_VOJIm.js";import{b as a}from"./lit-html.DhDqt3I2.js";import{m as d}from"./modal.D-GY7Vdy.js";import{i}from"./controls.BCr1YKFS.js";function t(e,l){return a`
    <dialog class="dialog" aria-label=${e("readHelpTitle")} ${d(l)}>
      <div class="dialog__surface">
        <header class="dialog__header">
          <div class="row row--between">
            <h2 class="md-headline-small">${e("readHelpTitle")}</h2>
            ${i({icon:"close",label:e("close"),onClick:l})}
          </div>
        </header>
        <div class="dialog__body stack">
          <p class="md-body-medium">${e("readHelpSummary")}</p>
          <ol class="stack stack--tight md-body-medium">
            <li>${e("readHelpStep1")}</li>
            <li>${e("readHelpStep2")}</li>
            <li>${e("readHelpStep3")}</li>
          </ol>
          <p class="md-body-medium">${e("readHelpCredentials")}</p>
          <p class="md-body-medium">${e("readHelpPrivacy")}</p>
          <p class="md-body-medium">${e("readHelpOther")}</p>
        </div>
        <footer class="dialog__actions">
          <button class="button button--text" type="button" @click=${l}>${e("close")}</button>
        </footer>
      </div>
    </dialog>
  `}export{t as g};
