import{m as c,_ as t,n as o,t as g}from"./delegate.qnlMPWy4.js";import{i as p}from"./lit-element.Bc_VOJIm.js";import"./md-focus-ring.BFbx9fcs.js";import"./item.aw-mMCVK.js";import"./ripple.DU62FgSE.js";import{b as i,g as n,A as s,a as y,u as f}from"./lit-html.DhDqt3I2.js";import{a as $}from"./animation.BI-yjTPx.js";import{o as m}from"./query-assigned-elements.N5HHHkzR.js";import{n as x,M as b,s as I}from"./select-option.DfVQFXUn.js";/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const v=c(p);class e extends v{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new b(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(a){this.menuItemController.setTypeaheadText(a)}render(){return this.renderListItem(i`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(a){const d=this.type==="link";let r;switch(this.menuItemController.tagName){case"a":r=n`a`;break;case"button":r=n`button`;break;default:case"li":r=n`li`;break}const u=d&&this.target?this.target:s;return f`
      <${r}
        id="item"
        tabindex=${this.disabled&&!d?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||s}
        aria-selected=${this.ariaSelected||s}
        aria-checked=${this.ariaChecked||s}
        aria-expanded=${this.ariaExpanded||s}
        aria-haspopup=${this.ariaHasPopup||s}
        class="list-item ${y(this.getRenderClasses())}"
        href=${this.href||s}
        target=${u}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${a}</${r}>
    `}renderRipple(){return i` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return i` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return i`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}e.shadowRootOptions={...p.shadowRootOptions,delegatesFocus:!0};t([o({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);t([o()],e.prototype,"type",void 0);t([o()],e.prototype,"href",void 0);t([o()],e.prototype,"target",void 0);t([o({type:Boolean,attribute:"keep-open"})],e.prototype,"keepOpen",void 0);t([o({type:Boolean})],e.prototype,"selected",void 0);t([$(".list-item")],e.prototype,"listItemRoot",void 0);t([m({slot:"headline"})],e.prototype,"headlineElements",void 0);t([m({slot:"supporting-text"})],e.prototype,"supportingTextElements",void 0);t([x({slot:""})],e.prototype,"defaultElements",void 0);t([o({attribute:"typeahead-text"})],e.prototype,"typeaheadText",null);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let l=class extends e{};l.styles=[I];l=t([g("md-menu-item")],l);
