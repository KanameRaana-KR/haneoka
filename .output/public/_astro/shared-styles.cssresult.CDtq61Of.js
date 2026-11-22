import{m as T,_ as r,n as a}from"./delegate.qnlMPWy4.js";import{i as m,a as I}from"./lit-element.Bc_VOJIm.js";import{a as g,b as h,u as A,A as o,o as x,l as f}from"./lit-html.DhDqt3I2.js";import{r as d,a as v}from"./animation.BI-yjTPx.js";import{o as y}from"./query-assigned-elements.N5HHHkzR.js";import{m as E,a as O,r as w,g as L}from"./redispatch-event.Dod3cBoe.js";import{V as C,m as S,c as k,g as _}from"./validator.Cz1PymV-.js";import{m as D,o as q}from"./on-report-validity.BygZsmbx.js";/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const F={fromAttribute(p){return p??""},toAttribute(p){return p||null}};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class z extends C{computeValidity({state:t,renderedControl:e}){let n=e;u(t)&&!n?(n=this.inputControl||document.createElement("input"),this.inputControl=n):n||(n=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=n);const s=u(t)?n:null;if(s&&(s.type=t.type),n.value!==t.value&&(n.value=t.value),n.required=t.required,s){const l=t;l.pattern?s.pattern=l.pattern:s.removeAttribute("pattern"),l.min?s.min=l.min:s.removeAttribute("min"),l.max?s.max=l.max:s.removeAttribute("max"),l.step?s.step=l.step:s.removeAttribute("step")}return(t.minLength??-1)>-1?n.setAttribute("minlength",String(t.minLength)):n.removeAttribute("minlength"),(t.maxLength??-1)>-1?n.setAttribute("maxlength",String(t.maxLength)):n.removeAttribute("maxlength"),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:t},{state:e}){const n=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return!u(t)||!u(e)?n:n&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step}copy({state:t}){return{state:u(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:n,min:s,max:l,step:c}=t;return{...this.copySharedState(t),type:e,pattern:n,min:s,max:l,step:c}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:n,maxLength:s}){return{value:t,required:e,minLength:n,maxLength:s}}}function u(p){return p.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const M=T(D(S(E(O(m)))));class i extends M{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,n){this.getInputOrTextarea().setSelectionRange(t,e,n)}showPicker(){const t=this.getInput();t&&t.showPicker()}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,n){t==="value"&&this.dirty||super.attributeChangedCallback(t,e,n)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return h`
      <span class="text-field ${g(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return A`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return h`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return h`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||o,n=this.autocomplete,s=(this.maxLength??-1)>-1,l=(this.minLength??-1)>-1;if(this.type==="textarea")return h`
        <textarea
          class="input"
          style=${x(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${n||o}
          name=${this.name||o}
          ?disabled=${this.disabled}
          maxlength=${s?this.maxLength:o}
          minlength=${l?this.minLength:o}
          placeholder=${this.placeholder||o}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${f(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const c=this.renderPrefix(),b=this.renderSuffix(),$=this.inputMode;return h`
      <div class="input-wrapper">
        ${c}
        <input
          class="input"
          style=${x(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${n||o}
          name=${this.name||o}
          ?disabled=${this.disabled}
          inputmode=${$||o}
          max=${this.max||o}
          maxlength=${s?this.maxLength:o}
          min=${this.min||o}
          minlength=${l?this.minLength:o}
          pattern=${this.pattern||o}
          placeholder=${this.placeholder||o}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||o}
          type=${this.type}
          .value=${f(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${b}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){return t?h`<span class="${g({suffix:e,prefix:!e})}">${t}</span>`:o}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){w(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[L](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[k](){return new z(()=>({state:this,renderedControl:this.inputOrTextarea}))}[_](){return this.inputOrTextarea}[q](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}}i.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};r([a({type:Boolean,reflect:!0})],i.prototype,"error",void 0);r([a({attribute:"error-text"})],i.prototype,"errorText",void 0);r([a()],i.prototype,"label",void 0);r([a({type:Boolean,attribute:"no-asterisk"})],i.prototype,"noAsterisk",void 0);r([a({type:Boolean,reflect:!0})],i.prototype,"required",void 0);r([a()],i.prototype,"value",void 0);r([a({attribute:"prefix-text"})],i.prototype,"prefixText",void 0);r([a({attribute:"suffix-text"})],i.prototype,"suffixText",void 0);r([a({type:Boolean,attribute:"has-leading-icon"})],i.prototype,"hasLeadingIcon",void 0);r([a({type:Boolean,attribute:"has-trailing-icon"})],i.prototype,"hasTrailingIcon",void 0);r([a({attribute:"supporting-text"})],i.prototype,"supportingText",void 0);r([a({attribute:"text-direction"})],i.prototype,"textDirection",void 0);r([a({type:Number})],i.prototype,"rows",void 0);r([a({type:Number})],i.prototype,"cols",void 0);r([a({reflect:!0})],i.prototype,"inputMode",void 0);r([a()],i.prototype,"max",void 0);r([a({type:Number})],i.prototype,"maxLength",void 0);r([a()],i.prototype,"min",void 0);r([a({type:Number})],i.prototype,"minLength",void 0);r([a({type:Boolean,attribute:"no-spinner"})],i.prototype,"noSpinner",void 0);r([a()],i.prototype,"pattern",void 0);r([a({reflect:!0,converter:F})],i.prototype,"placeholder",void 0);r([a({type:Boolean,reflect:!0})],i.prototype,"readOnly",void 0);r([a({type:Boolean,reflect:!0})],i.prototype,"multiple",void 0);r([a()],i.prototype,"step",void 0);r([a({reflect:!0})],i.prototype,"type",void 0);r([a({reflect:!0})],i.prototype,"autocomplete",void 0);r([d()],i.prototype,"dirty",void 0);r([d()],i.prototype,"focused",void 0);r([d()],i.prototype,"nativeError",void 0);r([d()],i.prototype,"nativeErrorText",void 0);r([v(".input")],i.prototype,"inputOrTextarea",void 0);r([v(".field")],i.prototype,"field",void 0);r([y({slot:"leading-icon"})],i.prototype,"leadingIcons",void 0);r([y({slot:"trailing-icon"})],i.prototype,"trailingIcons",void 0);/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const N=I`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;N.styleSheet;export{i as T,N as s};
