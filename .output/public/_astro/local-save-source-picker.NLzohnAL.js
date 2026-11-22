import"./lit-element.Bc_VOJIm.js";import{b as t}from"./lit-html.DhDqt3I2.js";import{i as n}from"./app-bridge.GQkWDCHi.js";import{c as o}from"./client.BYho01b_.js";import{i as r}from"./controls.BCr1YKFS.js";import{i as c}from"./icon.BSt8MVsq.js";import{m}from"./modal.D-GY7Vdy.js";/* empty css                               */function $(e){const l=a=>o(e.locale,`catalog.gachaHistory.${a}`,""),s=n(),i={game:{label:s?o(e.locale,"account.page.openSaveImport","Import a save in Account"):l("gameSource"),icon:c("sports_esports")},saved:{label:l("savedSource"),icon:c("account_circle")},files:{label:e.historyGuidance?l("filesSource"):o(e.locale,"common.actions.import","Import files"),icon:c("upload_file")},folder:{label:o(e.locale,"account.page.toolAccounts.folder","Choose a folder"),icon:c("folder_open")},adb:{label:e.title?o(e.locale,"account.page.toolAccounts.usbRead","USB / ADB"):l("adbSource"),icon:c("usb")}};return t`
    <dialog class="selection-pane" aria-label=${e.title??l("importSource")} ${m(e.onClose)}>
      <header class="sheet__header">
        <strong>${e.title??l("importSource")}</strong>
        ${r({icon:"close",label:o(e.locale,"common.actions.close","Close"),onClick:e.onClose})}
      </header>
      <div class="selection-pane__body">
        <ul class="list">
          ${e.sources.map(a=>t`
              <li>
                <button type="button" class="list-item list-item--interactive" @click=${()=>e.onSelect(a)}>
                  <span class="list-item__leading">${i[a].icon}</span>
                  <span class="list-item__body">
                    <span class="list-item__headline">${i[a].label}</span>
                    ${a==="game"&&s?t`<span class="list-item__supporting">${o(e.locale,"account.page.saveImportGuide","Read the game save in Account.")}</span>`:e.historyGuidance&&(a==="files"||a==="adb")?t`
                            <span class="list-item__supporting">
                              ${l(a==="adb"?"usbHistoryHelp":"historyFilesHelp")}
                            </span>
                          `:""}
                  </span>
                  <span class="list-item__trailing">${c("chevron_right")}</span>
                </button>
              </li>
            `)}
        </ul>
      </div>
    </dialog>
  `}export{$ as r};
