import"./lit-element.Bc_VOJIm.js";import{A as i,b as r}from"./lit-html.DhDqt3I2.js";function t(a={}){const e=["loading-indicator",a.contained?"loading-indicator--contained":"",a.size?`loading-indicator--${a.size}`:"",a.className??""].filter(Boolean).join(" ");return r`
    <span
      class=${e}
      role=${a.label?"progressbar":i}
      aria-label=${a.label??i}
      aria-hidden=${a.label?i:"true"}
    ></span>
  `}function c(a={}){const e=document.createElement("span");return e.className=["loading-indicator",a.contained?"loading-indicator--contained":"",a.size?`loading-indicator--${a.size}`:"",a.className??""].filter(Boolean).join(" "),a.label?(e.setAttribute("role","progressbar"),e.setAttribute("aria-label",a.label)):e.setAttribute("aria-hidden","true"),e}export{c,t as l};
