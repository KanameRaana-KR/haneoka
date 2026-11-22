import"./lit-element.Bc_VOJIm.js";import{A as o,b as r}from"./lit-html.DhDqt3I2.js";import"./outlined-select.BLpyNoqZ.js";import"./menu-item.B6eXd3Er.js";import{C as u}from"./shared.Z0K3ZZvG.js";import{i as d}from"./icon.BSt8MVsq.js";function b(n){return r`
    <span class="action-menu">
      <button
        id=${n.id}
        class="button button--text"
        type="button"
        aria-haspopup="menu"
        aria-controls=${`${n.id}-menu`}
        aria-expanded="false"
        @click=${e=>e.currentTarget.parentElement.querySelector("md-menu").show()}
      >
        ${n.label}
      </button>
      <md-menu
        id=${`${n.id}-menu`}
        anchor=${n.id}
        positioning="popover"
        @opened=${e=>e.currentTarget.parentElement.querySelector("button").setAttribute("aria-expanded","true")}
        @closed=${e=>e.currentTarget.parentElement.querySelector("button").setAttribute("aria-expanded","false")}
      >
        ${n.items.map(e=>r`
            <md-menu-item
              type=${e.href?"link":"button"}
              href=${e.href??o}
              ?disabled=${e.disabled}
              @close-menu=${a=>{const t=a.detail.reason;if(!e.run||e.disabled||t.kind!==u.CLICK_SELECTION&&!(t.kind===u.KEYDOWN&&(t.key==="Enter"||t.key==="Space")))return;a.currentTarget.closest("md-menu").addEventListener("closed",()=>e.run(),{once:!0})}}
            >
              ${e.leading||e.icon?r`
                      <span slot="start">${e.leading??d(e.icon,20)}</span>
                    `:o}
              <span slot="headline">${e.label}</span>
            </md-menu-item>
          `)}
      </md-menu>
    </span>
  `}export{b as a};
