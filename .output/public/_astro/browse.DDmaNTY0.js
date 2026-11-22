import"./lit-element.Bc_VOJIm.js";import{b as a,A as l}from"./lit-html.DhDqt3I2.js";import{k as d}from"./image-dimensions.lsZdhmjC.js";import{a as _,d as x,b as $,e as m}from"./app-bar.CQ9Fi2qQ.js";import{i as o}from"./icon.BSt8MVsq.js";import{i as p,r as h}from"./controls.BCr1YKFS.js";import{t as f}from"./tile.DFwS0rEz.js";import{s as w}from"./scrollable-tabs.B0s0LWO4.js";import{n as u}from"./lazy-images.2hwWuBaG.js";const c="browse-results",i="browse";function T(){_(i),x(i)}function v(e){return a`
    <nav class="browse__rail" aria-label=${e.label} aria-busy="true">
      <div class="collection collection--rail collection--skeleton" aria-hidden="true">
        ${Array.from({length:6},()=>a`
            <span class="tile tile--rail tile--skeleton">
              <span class="tile__media"></span>
              <span class="tile__identity">
                <strong class="tile__title"><span class="skeleton-line">Xxxxxxxxxx</span></strong>
                <small class="tile__subtitle"><span class="skeleton-line">00 Xxxxx</span></small>
              </span>
            </span>
          `)}
      </div>
    </nav>
  `}function k(e){return w(e.locale,a`
    <nav
      class="browse__rail"
      role="tablist"
      aria-label=${e.label}
      aria-orientation="vertical"
      @keydown=${h(e.items.map(s=>s.value),e.value,e.onSelect)}
    >
      <div class="collection collection--rail">
        ${e.items.map(s=>{const t=s.value===e.value;return f({kind:"rail",fit:"contain",onImageError:u,title:s.label,titleLanguage:s.language,subtitle:s.meta??null,label:s.label,image:s.image||"",placeholder:o("image",24),selected:t,role:"tab",controls:c,tabIndex:t?0:-1,onOpen:()=>e.onSelect(s.value)})})}
      </div>
    </nav>
  `,"browse__rail-frame")}function y(e){return e.pending&&!e.items.length?v(e):k(e)}const W=c;function B(e){const{filters:s}=e;return a`
    <p class="browse__count" role="status" aria-live="polite" aria-busy=${String(e.count.value===null)}>
      ${e.count.value===null?a`<strong class="browse__count-pending" aria-hidden="true"></strong>`:a`<strong>${e.count.value.toLocaleString()}</strong>`}
      <span>${e.count.label}</span>
    </p>
    ${e.controls}
    ${s?p({label:s.label,icon:"filter_alt",onClick:()=>s.open?s.onClose():s.onOpen(),pressed:s.open,toggle:!0,badge:s.count,className:"browse__filter-toggle"}):l}
    ${e.modes}
  `}function j(e){const{filters:s,rail:t,heading:n}=e,b=!!s?.open;$(i,B(e)),(Array.isArray(e.applied)?e.applied.length>0:!!e.applied)?m(i,a`<div class="browse__crumbs">${o("chevron_right",20)}${e.applied}</div>`):x(i);const r=!!(t&&(t.pending&&!t.items.length||t.single||t.items.length>1)),g=["browse",e.kind?`browse--${e.kind}`:"",r?"browse--railed":""].filter(Boolean).join(" ");return a`
    <section class=${g} style=${e.style||l}>
      ${r&&t?y(t):l}
      <div class="browse__main">
        ${n?a`
                <header class="browse__heading">
                  ${n.pending&&n.image?a`<span class="browse__heading-art browse__heading-art--pending" aria-hidden="true"></span>`:n.image?a`
                          <img
                            class="browse__heading-art"
                            data-src=${n.image}
                            alt=""
                            width=${d(n.image)?.width??128}
                            height=${d(n.image)?.height??64}
                            decoding="async"
                            @error=${u}
                          />
                        `:l}
                  <div class="browse__heading-copy">
                    ${n.pending?a`
                            <h2 aria-hidden="true"><span class="skeleton-line">Xxxxxxxxxxxxxxxx</span></h2>
                            <p aria-hidden="true"><span class="skeleton-line">Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></p>
                          `:l}
                    <h2 lang=${n.titleLanguage||l} ?hidden=${n.pending}>${n.title}</h2>
                    ${n.supporting?a`
                            <p lang=${n.supportingLanguage||l}>${n.supporting}</p>
                          `:l}
                  </div>
                </header>
              `:l}
        <div
          class="browse__results"
          id=${c}
          role=${r?"tabpanel":l}
          style=${e.style||l}
        >
          ${e.results}
        </div>
      </div>
      ${s?a`
              <aside
                class=${`browse__filters sheet sheet--side ${s.open?"is-open":""}`}
                role="dialog"
                aria-modal="true"
                aria-label=${s.label}
                ?inert=${!s.open}
                tabindex="-1"
              >
                <header class="sheet__header">
                  <span class="detail-section-title__icon">${o("filter_alt",20)}</span>
                  <span class="sheet__title"><strong>${s.label}</strong></span>
                  <span class="sheet__actions">
                    ${s.count&&s.onReset?a`
                            <button class="button button--text" type="button" @click=${s.onReset}>
                              ${s.resetLabel}
                            </button>
                          `:l}
                    ${p({label:s.closeLabel,icon:"close",onClick:s.onClose,className:"browse__filters-close"})}
                  </span>
                </header>
                <div class="browse__filters-body">${s.body}</div>
              </aside>
            `:l}
    </section>
    ${b?a`
            <button
              class="scrim sheet-scrim"
              type="button"
              aria-label=${s?.closeLabel}
              @click=${s?.onClose}
            ></button>
          `:l}
  `}function z(e,s,t){return a`
    <section class="browse__filter-group">
      <h3>${e}${t??l}</h3>
      ${s}
    </section>
  `}function D(e,s=12){return a`
    <div class=${`collection collection--${e} collection--skeleton`} aria-hidden="true">
      ${Array.from({length:s},()=>a`
          <span class="tile tile--skeleton">
            <span class="tile__media"></span>
            <span class="tile__identity">
              <strong class="tile__title"><span class="skeleton-line">Xxxxxxxxx xxxxx</span></strong>
              <small class="tile__subtitle"><span class="skeleton-line">Xxxxxxx</span></small>
            </span>
          </span>
        `)}
    </div>
  `}export{y as a,W as b,T as c,D as d,z as f,j as r};
