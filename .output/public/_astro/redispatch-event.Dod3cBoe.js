import{_ as u,n as c}from"./delegate.qnlMPWy4.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const a=Symbol("internals"),o=Symbol("privateInternals");function m(s){class e extends s{get[a](){return this[o]||(this[o]=this.attachInternals()),this[o]}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const l=Symbol("getFormValue"),d=Symbol("getFormState");function p(s){class e extends s{get form(){return this[a].form}get labels(){return this[a].labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}attributeChangedCallback(t,r,n){if(t==="name"||t==="disabled"){const b=t==="disabled"?r!==null:r;this.requestUpdate(t,b);return}super.attributeChangedCallback(t,r,n)}requestUpdate(t,r,n){super.requestUpdate(t,r,n),this[a].setFormValue(this[l](),this[d]())}[l](){return this.getAttribute("value")}[d](){return this[l]()}formDisabledCallback(t){this.disabled=t}}return e.formAssociated=!0,u([c({noAccessor:!0})],e.prototype,"name",null),u([c({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function g(s,e){e.bubbles&&(!s.shadowRoot||e.composed)&&e.stopPropagation();const i=Reflect.construct(e.constructor,[e.type,e]),t=s.dispatchEvent(i);return t||e.preventDefault(),t}export{m as a,d as b,l as g,a as i,p as m,g as r};
