import{m as s,_ as e,n as r}from"./delegate.qnlMPWy4.js";import{i}from"./lit-element.Bc_VOJIm.js";import{A as o,a as n,b as l}from"./lit-html.DhDqt3I2.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const m=s(i);class t extends m{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:a}=this;return l`
      <div
        class="progress ${n(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${a||o}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?o:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}e([r({type:Number})],t.prototype,"value",void 0);e([r({type:Number})],t.prototype,"max",void 0);e([r({type:Boolean})],t.prototype,"indeterminate",void 0);e([r({type:Boolean,attribute:"four-color"})],t.prototype,"fourColor",void 0);export{t as P};
