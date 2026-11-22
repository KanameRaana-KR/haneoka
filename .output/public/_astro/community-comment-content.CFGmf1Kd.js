const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/community-editor.CghOp24J.js","_astro/lit-element.Bc_VOJIm.js","_astro/lit-html.DhDqt3I2.js","_astro/client.BYho01b_.js","_astro/temporary-public-routing.BsxzEC6B.js","_astro/interface-route.C7eSW2gB.js","_astro/locales.DtpYD_uK.js","_astro/community-markup.svGuDLM2.js","_astro/parse.D3VWRPZL.js","_astro/community-sticker.CPTBXKIm.js","_astro/catalog.CfAhzaok.js","_astro/release-server.j-atVW2C.js","_astro/document-url.BFFpyWb5.js","_astro/document-address.dywC0kBs.js","_astro/resource-route.BR5kLHYo.js","_astro/icon.BSt8MVsq.js","_astro/loading-indicator.dXh2gc3V.js"])))=>i.map(i=>d[i]);
import{i as g}from"./lit-element.Bc_VOJIm.js";import{A as r,b as a,d as _}from"./lit-html.DhDqt3I2.js";import{c as x,a as L}from"./community-markup.svGuDLM2.js";import{f as E}from"./catalog.CfAhzaok.js";/* empty css                        */import{i as m}from"./icon.BSt8MVsq.js";import{i as A}from"./controls.BCr1YKFS.js";import{_ as M}from"./preload-helper.BlTxHScW.js";import{e as N,l as R}from"./state.Ck623oKm.js";import"./community-sticker.CPTBXKIm.js";function T(t,e){return t.author?.displayName||t.authorName||e}const p=new Map;function D(t,e){if(!t||typeof t!="object"||Array.isArray(t))return"";const o=String(t.countryCode||"").trim().toUpperCase();if(!/^[A-Z]{2}$/u.test(o)||o==="XX")return"";try{let n=p.get(e);n||(n=new Intl.DisplayNames([e],{type:"region"}),p.set(e,n),p.size>8&&p.delete(p.keys().next().value));const i=n.of(o)||"";return i===o?"":i}catch{return""}}const I=10080*60*1e3,F=new Map,B=(t,e,o)=>{let n=t.get(e);return n||(n=o(),t.size>=8&&t.delete(t.keys().next().value),t.set(e,n)),n},y=t=>{if(typeof t=="number"&&Number.isFinite(t)){const i=Math.abs(t)<1e12?t*1e3:t;return Number.isFinite(i)?i:null}if(typeof t!="string")return null;const e=t.trim();if(!e)return null;const o=Number(e);if(Number.isFinite(o)){const i=Math.abs(o)<1e12?o*1e3:o;return Number.isFinite(i)?i:null}const n=Date.parse(e);return Number.isFinite(n)?n:null},O=t=>{const e=y(t.createdAt),o=y(t.lastEditedAt);return e!==null&&o!==null&&o>e},P=t=>{const e=t/1e3,o=Math.abs(e);return o>=86400?{value:Math.round(e/86400),unit:"day"}:o>=3600?{value:Math.round(e/3600),unit:"hour"}:o>=60?{value:Math.round(e/60),unit:"minute"}:{value:Math.round(e),unit:"second"}},H=(t,e,o=Date.now())=>{const n=y(t);if(n===null)return null;const i=new Date(n);if(!Number.isFinite(i.getTime()))return null;const u=E(e,i,{time:!0}),s=n-o,l=P(s);return{text:Math.abs(s)<I?B(F,e,()=>new Intl.RelativeTimeFormat(e,{numeric:"auto"})).format(l.value,l.unit):u,dateTime:i.toISOString(),title:u}};function q(t){return a`
    <article
      class=${`community-comment${t.reply?" is-reply":""}`}
      id=${`comment-${t.id}`}
      data-comment-id=${t.focused===void 0?r:t.id}
      data-comment-target=${t.focused===void 0?r:String(t.focused)}
      tabindex=${t.focused?"-1":r}
    >
      <a href=${t.authorHref} aria-label=${t.name}>${t.avatar}</a>
      <div class="community-comment__main">
        <header>
          <a class="community-comment__name" href=${t.authorHref}>${t.name}</a>
          ${t.authorMark??r}
          <span class="community-comment__actions">${t.headerActions}</span>
        </header>
        ${t.body}
        <div class="community-comment__context">${t.context}</div>
        <footer>${t.actions}</footer>
      </div>
    </article>
  `}class U extends g{static properties={label:{type:String},closeLabel:{type:String},actions:{attribute:!1},position:{state:!0}};constructor(){super(),this.label="",this.closeLabel="",this.actions=[],this.position=null}createRenderRoot(){return this}disconnectedCallback(){this.position=null,super.disconnectedCallback()}close=()=>{this.querySelector("[popover]")?.hidePopover?.(),this.position=null,this.querySelector(".community-comment__more")?.focus()};open=e=>{const o=e.currentTarget.getBoundingClientRect();this.position={x:Math.max(8,Math.min(o.right-224,innerWidth-232)),y:Math.max(8,Math.min(o.bottom,innerHeight-(this.actions.length*48+24)))},this.updateComplete.then(()=>{const n=this.querySelector("[role=menu]");!this.isConnected||!this.position||!n||(n.showPopover?.(),n.querySelector("[role=menuitem]")?.focus())})};keys=e=>{if(e.key==="Escape"){e.preventDefault(),e.stopPropagation(),this.close();return}if(e.key==="Tab"){this.position=null;return}if(!["ArrowDown","ArrowUp","Home","End"].includes(e.key))return;e.preventDefault();const o=[...this.querySelectorAll("[role=menuitem]")],n=o.indexOf(document.activeElement);o[e.key==="Home"?0:e.key==="End"?o.length-1:(n+(e.key==="ArrowDown"?1:-1)+o.length)%o.length]?.focus()};render(){return this.actions.length?a`
      ${A({icon:"more_horiz",label:this.label,className:"community-comment__more",onClick:this.open})}
      ${this.position?a`
              <div
                class="menu community-card-menu community-comment-menu"
                role="menu"
                popover="auto"
                aria-label=${this.label}
                style=${`left:${this.position.x}px;top:${this.position.y}px;margin:0;border:0;right:auto;bottom:auto`}
                @keydown=${this.keys}
                @toggle=${e=>{e.newState==="closed"&&(this.position=null)}}
              >
                ${this.actions.map(e=>a`
                    <button
                      class="menu-item"
                      type="button"
                      role="menuitem"
                      @click=${()=>{this.close(),e.run()}}
                    >
                      ${m(e.icon,20)}${e.label}
                    </button>
                  `)}
              </div>
              ${typeof HTMLElement.prototype.showPopover!="function"?a`<button
                class="scrim community-menu-scrim"
                type="button"
                aria-label=${this.closeLabel}
                @click=${this.close}
              ></button>`:r}
            `:r}
    `:r}}customElements.get("community-comment-actions")||customElements.define("community-comment-actions",U);let f;const z=()=>f??=M(()=>import("./community-editor.CghOp24J.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).catch(t=>{throw f=void 0,t});class W extends g{static properties={value:{},locale:{},loadingLabel:{},errorLabel:{},retryLabel:{},maxLength:{type:Number},labels:{attribute:!1},allowStickers:{type:Boolean},focusOnReady:{type:Boolean},ready:{state:!0},failed:{state:!0}};generation=0;constructor(){super(),this.value="",this.locale="en",this.loadingLabel="",this.errorLabel="",this.retryLabel="",this.maxLength=5e3,this.allowStickers=!0,this.focusOnReady=!1,this.ready=!!customElements.get("community-editor"),this.failed=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.ready||this.prepare()}disconnectedCallback(){++this.generation,super.disconnectedCallback()}prepare=async()=>{const e=++this.generation;this.failed=!1;try{await z(),this.isConnected&&e===this.generation&&(this.ready=!0)}catch{this.isConnected&&e===this.generation&&(this.failed=!0)}};firstUpdated(){this.focusOnReady&&this.focus()}focus(){(async()=>{this.ready||await this.prepare(),await this.updateComplete;const e=this.querySelector("community-editor");await e?.updateComplete,this.isConnected&&e?.isConnected&&e.focus()})()}render(){return this.ready?a`
      <community-editor
        compact
        .locale=${this.locale}
        .value=${this.value}
        .maxLength=${this.maxLength}
        .labels=${this.labels}
        .allowStickers=${this.allowStickers}
      ></community-editor>
    `:this.failed?N(this.errorLabel,this.retryLabel,()=>void this.prepare()):R(this.loadingLabel,{local:!0})}}typeof customElements<"u"&&!customElements.get("community-comment-editor")&&customElements.define("community-comment-editor",W);const k=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:{};function j(t,e){const o=k(t.author).displayName;return T({authorName:typeof t.authorName=="string"?t.authorName:void 0,author:typeof o=="string"?{displayName:o}:void 0},e("member","Member"))}const X=D;function $(t,e){const o=H(t,e);return o?a`
        <time datetime=${o.dateTime} title=${o.title} aria-label=${o.title}>${o.text}</time>
      `:r}function S(t,e,o,n,i=!0,u=!1){return a`
    <community-comment-editor
      .value=${t}
      .locale=${e}
      .maxLength=${5e3}
      .labels=${(s,l=s,d)=>o(s,l,d)}
      .allowStickers=${i}
      .focusOnReady=${u}
      .loadingLabel=${o("loading","Loading")}
      .errorLabel=${o("unavailable","Unavailable")}
      .retryLabel=${o("retry","Retry")}
      @body-change=${s=>n(s.detail)}
    ></community-comment-editor>
  `}function et(t){const{record:e,label:o,actions:n}=t,i=k(e.viewer),u=j(e,o),s=String(e.id||""),l=Number(e.floor),d=Number.isSafeInteger(l)&&l>0?o("commentFloor","Floor {floor}").replace("{floor}",String(l)):"",b=X(e.ipLocation,t.locale),C=[...i.canEdit&&n.edit?[{label:o("edit","Edit"),icon:"edit",run:n.edit}]:[],...i.canReport!==!1&&n.report?[{label:o("report","Report"),icon:"flag",run:n.report}]:[],...e.moderationStatus==="block"&&i.canEdit&&n.appeal?[{label:o("appeal","Appeal"),icon:"gavel",run:n.appeal}]:[],...i.canDelete&&n.remove?[{label:o("delete","Delete"),icon:"delete",run:n.remove}]:[]],c=i.canEdit?t.editing:void 0;return q({id:s,name:u,authorHref:t.authorHref,reply:t.reply,focused:t.focused,avatar:a`
      <span class=${`community-avatar community-avatar--${t.reply?28:40}`} aria-hidden="true">
        ${e.authorImage?a`
                <img src=${String(e.authorImage)} alt="" loading="lazy" decoding="async" />
              `:u.slice(0,1)}
      </span>
    `,authorMark:t.authorMark?a`
          <span class="community-comment__author-mark">${t.authorMark}</span>
        `:r,headerActions:a`
      ${d?a`
              <span class="community-comment__floor" aria-label=${d}>${d}</span>
            `:r}
      <community-comment-actions
        .label=${o("commentActions","Comment actions")}
        .closeLabel=${o("close","Close")}
        .actions=${C}
      ></community-comment-actions>
    `,body:c?a`
          <form class="community-comment-edit" @submit=${c.onSave}>
            ${S(c.body,t.locale,o,c.onBody,t.allowStickers!==!1,!0)}
            <div class="dialog-actions">
              <button class="button button--text" type="button" @click=${c.onCancel}>
                ${o("cancel","Cancel")}
              </button>
              <button
                class="button button--tonal"
                type="submit"
                ?disabled=${c.busy||!c.body.trim()||c.body.length>5e3}
              >
                ${o("save","Save")}
              </button>
            </div>
          </form>
        `:a`
          <div class=${`community-bbcode community-comment__body${t.preview?" community-comment__body--preview":""}`}>
            ${t.replyToName?a`
                    <span class="community-comment__reply-name">
                      ${o("replyingTo","Replying to")} ${t.replyToName}
                    </span>
                  `:r}
            ${t.preview?x(String(e.body||"")):_(L(String(e.body||""),o("spoiler","Spoiler"),t.locale,{allowStickers:t.allowStickers!==!1}))}
          </div>
          ${t.preview&&t.allowStickers!==!1?t.previewStickers?.slice(0,1).map(h=>a`
                <community-sticker
                  .token=${h.token}
                  .locale=${t.locale}
                  .label=${h.label||o("stickers","Stickers")}
                ></community-sticker>
              `):r}
        `,context:a`
      ${$(e.createdAt,t.locale)}
      ${O({createdAt:e.createdAt,lastEditedAt:e.lastEditedAt})?a`
              <span>${o("lastEdited","Last edited")} ${$(e.lastEditedAt,t.locale)}</span>
            `:r}
      ${b?a`
              <span>${o("ipLocation","IP location")}: ${b}</span>
            `:r}
      ${e.moderationStatus&&e.moderationStatus!=="allow"?a`
              <span role="status">
                ${o(e.moderationStatus==="block"?"moderationBlocked":"moderationPending","Reviewing")}
              </span>
            `:r}
    `,actions:a`
      <button
        type="button"
        aria-label=${o(i.liked?"unlike":"like","Like")}
        aria-pressed=${String(!!i.liked)}
        ?disabled=${i.canLike===!1}
        @click=${n.like}
      >
        ${m(i.liked?"favorite-filled":"favorite_border",18)}
        <span>${Number(e.likeCount||0)||o("like","Like")}</span>
      </button>
      ${t.canReply!==!1&&n.reply?a`
              <button type="button" @click=${n.reply}>
                ${m("chat_bubble_outline",18)}${o("reply","Reply")}
              </button>
            `:r}
    `})}function ot(t){const{label:e}=t;return t.signedIn?t.canComment?!t.open&&t.onOpen?a`
      <div class="community-engagement">
        <button class="community-comment-prompt" type="button" @click=${t.onOpen}>
          ${m("edit",20)}
          <span>${e("writeComment","Write a comment")}</span>
        </button>
      </div>
    `:a`
    <form class="community-comment-form" @submit=${t.onSubmit}>
      ${t.replyName?a`
              <div class="community-reply-banner">
                <span>${e("replyingTo","Replying to")} / ${t.replyName}</span>
                <button
                  class="icon-button"
                  type="button"
                  aria-label=${e("cancel","Cancel")}
                  @click=${t.onCancelReply}
                >
                  ${m("close",20)}
                </button>
              </div>
            `:r}
      ${S(t.body,t.locale,e,t.onBody,t.allowStickers!==!1)}
      <div class="community-comment-form__actions">
        ${t.onClose?a`
                <button class="button button--text" type="button" @click=${t.onClose}>
                  ${e("cancel","Cancel")}
                </button>
              `:r}
        <button class="button" type="submit" ?disabled=${t.busy||!t.body.trim()||t.body.length>5e3}>
          ${m("send",18)}${e(t.sending?"publishing":"comment",t.sending?"Publishing…":"Comment")}
        </button>
      </div>
    </form>
  `:a`
      <p class="community-comments__empty">${e("commentsClosed","Comments are closed for this post")}</p>
    `:a`
      <div class="community-engagement">
        <button class="button button--tonal" type="button" @click=${t.onSignIn}>
          ${e("signInToComment","Sign in to comment")}
        </button>
      </div>
    `}function nt(t){const e=typeof t.remaining=="number"&&t.remaining>0?t.label("expandReplies","Show {count} more replies").replace("{count}",String(t.remaining)):t.label("loadMoreComments","Load more comments");return a`
    ${t.hasMore||t.expanded?a`
            <button
              class="button button--text community-replies-toggle"
              type="button"
              aria-expanded=${String(t.expanded)}
              aria-busy=${String(t.loading)}
              ?disabled=${t.loading}
              @click=${t.onToggle}
            >
              ${t.expanded?t.label("collapseReplies","Collapse replies"):e}${m(t.expanded?"expand_less":"expand_more",18)}
            </button>
          `:r}
    ${t.expanded&&t.onMore?a`
            <button
              class="button button--text community-replies-toggle"
              type="button"
              aria-busy=${String(t.loading)}
              ?disabled=${t.loading}
              @click=${t.onMore}
            >
              ${e}${m("expand_more",18)}
            </button>
          `:r}
  `}export{T as a,nt as b,D as c,j as d,ot as e,H as f,O as i,et as r};
