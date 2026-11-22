import"./lit-element.Bc_VOJIm.js";import{D as d,b as s}from"./lit-html.DhDqt3I2.js";import{c as m}from"./client.BYho01b_.js";import{f as c}from"./catalog.CfAhzaok.js";import{m as p}from"./modal.D-GY7Vdy.js";function $(a,n,r){const i=(l,t)=>m(a,`common.appAccounts.${l}`,t),e=document.createElement("div");return document.body.append(e),new Promise(l=>{const t=o=>{d(s``,e),e.remove(),l(o)};d(s`
        <dialog class="dialog" ${p(()=>t(null))}>
          <div class="dialog__surface">
            <header class="dialog__header"><h2>${r??i("choose","Choose a game account")}</h2></header>
            <div class="dialog__body">
              <ul class="detail-object-list" role="list">
                ${n.map(o=>s`
                    <li>
                      <button class="detail-object" type="button" @click=${()=>t(o.key)}>
                        <span>
                          ${o.name||o.profileId}
                          <small class="md-body-small">
                            ${[o.region??"",o.profileId,o.savedAt===null?"":c(a,o.savedAt)].filter(Boolean).join(" / ")}
                          </small>
                        </span>
                      </button>
                    </li>
                  `)}
              </ul>
            </div>
            <footer class="dialog__actions">
              <button class="button button--text" type="button" @click=${()=>t(null)}>
                ${i("close","Close")}
              </button>
            </footer>
          </div>
        </dialog>
      `,e)})}export{$ as c};
