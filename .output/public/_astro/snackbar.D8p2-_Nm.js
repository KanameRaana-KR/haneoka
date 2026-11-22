import"./lit-element.Bc_VOJIm.js";import{D as d,A as l,b as i}from"./lit-html.DhDqt3I2.js";let t=null,r=0,s=0;function u(e=s){e!==s||!t||(window.clearTimeout(r),d(l,t))}function f(e,a={}){if(typeof document>"u")return 0;t?.isConnected||(t=document.createElement("div"),t.className="snackbar-host",document.body.append(t));const o=++s;window.clearTimeout(r);const n=a.action;d(i`<div class="snackbar" role=${a.error?"alert":"status"}>
      <span class="snackbar__text">${e}</span>
      ${n?i`<button class="button button--text" type="button" @click=${()=>{u(o),n.run()}}>${n.label}</button>`:l}
    </div>`,t);const c=a.durationMs??(n?8e3:5e3);return c&&(r=window.setTimeout(()=>u(o),c)),o}export{u as d,f as s};
