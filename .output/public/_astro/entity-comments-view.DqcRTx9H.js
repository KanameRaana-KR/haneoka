import"./lit-element.Bc_VOJIm.js";import{A as d,c as u,b as n,l as c}from"./lit-html.DhDqt3I2.js";import{m as h}from"./modal.D-GY7Vdy.js";import{s as v}from"./controls.BCr1YKFS.js";import{i as b}from"./icon.BSt8MVsq.js";import{a as C}from"./async-region.M9pzHsiV.js";import{b as w,r as x,d as y,e as D}from"./community-comment-content.CFGmf1Kd.js";/* empty css                      */let $;function _(e){$=e,typeof window<"u"&&window.dispatchEvent(new Event("haneoka:entity-comments-presentation-ready"))}function E(){return $}const s=e=>e.currentTarget.value;function g(e,t,l,a=!1){const o=t.threads.flatMap(m=>[m.root,...m.replies]).find(m=>m.id===e.parentId),r=t.editing?.id===e.id?t.editing:void 0;return x({record:e,locale:t.locale,label:t.label,authorHref:t.authorHref(e),reply:a,focused:e.id===t.focusedCommentId,replyToName:a&&o?.parentId?y(o,t.label):void 0,canReply:t.canComment||!t.signedIn,allowStickers:!0,editing:r?{body:r.body,busy:!!t.busy,onBody:l.editBody,onSave:l.saveEdit,onCancel:l.cancelEdit}:void 0,actions:{like:()=>l.like(e.id),reply:()=>t.signedIn?l.reply(e.id):l.signIn(),edit:()=>l.edit(e.id),report:()=>l.report(e.id),appeal:l.appeal?()=>l.appeal(e.id):void 0,remove:()=>l.remove(e.id)}})}function S(e,t){return n`
    <div class="entity-comments__composer">
      ${D({locale:e.locale,label:e.label,body:e.body,open:e.composerOpen,allowStickers:!0,signedIn:e.signedIn,canComment:e.canComment,busy:!!e.busy,sending:e.busy==="publish",replyName:e.replyTo?y(e.replyTo,e.label):void 0,onSignIn:t.signIn,onOpen:t.openComposer,onClose:t.closeComposer,onCancelReply:t.cancelReply,onBody:t.body,onSubmit:t.submit})}
    </div>
  `}function k(e,t){const l=e.dialog;if(!l)return d;const a=l.kind==="report",o=l.kind==="appeal",r=a?e.label("reportDialog.title","Report"):o?e.label("appeal","Appeal"):e.label("delete","Delete"),m=["spam","harassment","hate","sexual","violence","privacy","copyright","misinformation","other"];return n`
    <dialog
      ${h(()=>{e.busy||t.closeDialog()})}
      aria-label=${r}
      class="dialog-host community-dialog-scrim"
      @click=${()=>{e.busy||t.closeDialog()}}
    >
      <section
        class="community-dialog surface"
        data-entity-comment-dialog
        tabindex="-1"
        @click=${i=>i.stopPropagation()}
      >
        <header>
          <span>${b(a?"flag":o?"gavel":"delete",22)}</span>
          <div>
            <h2>${r}</h2>
            <small>${e.title}</small>
          </div>
          <button
            class="icon-button"
            type="button"
            aria-label=${e.label("close","Close")}
            @click=${t.closeDialog}
          >
            ${b("close",20)}
          </button>
        </header>
        <form @submit=${t.submitDialog}>
          ${a?n`
                  <md-outlined-select
                    label=${e.label("reportDialog.reason","Reason")}
                    .value=${l.reason}
                    required
                    @change=${i=>t.reason(s(i))}
                  >
                    ${m.map(i=>n`
                        <md-select-option value=${i} ?selected=${i===l.reason}>
                          <div slot="headline">${e.label(`reportDialog.reasons.${i}`,i)}</div>
                        </md-select-option>
                      `)}
                  </md-outlined-select>
                  <md-outlined-text-field
                    type="textarea"
                    rows="4"
                    maxlength="5000"
                    .value=${c(l.details)}
                    label=${e.label("reportDialog.details","Details")}
                    ?required=${l.reason==="other"}
                    supporting-text=${l.reason==="other"?e.label("reportDialog.detailsOtherHint","Details are required when you choose Other."):e.label("reportDialog.detailsHint","Describe what happened if helpful.")}
                    @input=${i=>t.details(s(i))}
                  ></md-outlined-text-field>
                `:o?n`
                    <md-outlined-text-field
                      type="textarea"
                      rows="4"
                      maxlength="5000"
                      required
                      .value=${c(l.details)}
                      label=${e.label("appealStatement","Appeal statement")}
                      @input=${i=>t.details(s(i))}
                    ></md-outlined-text-field>
                  `:n`
                    <p class="community-dialog__warning">
                      ${e.label("deleteCommentConfirm","This comment will be removed and cannot be restored.")}
                    </p>
                  `}
          ${e.error?n`
                  <div class="inline-message error" role="alert">${e.error}</div>
                `:d}
          <footer>
            <button
              class="button button--text"
              type="button"
              ?disabled=${!!e.busy}
              @click=${t.closeDialog}
            >
              ${e.label("cancel","Cancel")}
            </button>
            <button
              class=${a||o?"button":"button button--danger"}
              type="submit"
              ?disabled=${!!e.busy||(o||a&&l.reason==="other")&&!l.details.trim()}
            >
              ${a?e.label("reportDialog.submit","Submit report"):o?e.label("submitAppeal","Submit appeal"):r}
            </button>
          </footer>
        </form>
      </section>
    </dialog>
  `}function f(e,t){const l=n`
    <div class="entity-comments__list">
      ${u(e.threads,a=>a.root.id,a=>n`
          <div class="community-comment-thread">
            ${g(a.root,e,t)}
            ${a.replies.length?n`
                    <div class="community-comment-replies">
                      ${u(a.replies,o=>o.id,o=>g(o,e,t,!0))}
                    </div>
                  `:d}
            ${w({label:e.label,expanded:a.expanded,hasMore:a.hasMore,remaining:a.remaining,loading:a.loading,onToggle:()=>t.expand(a.root.id),onMore:a.root.replyCursor?()=>t.moreReplies(a.root.id):void 0})}
          </div>
        `)}
      ${e.threads.length?d:n`
              <p class="entity-comments__status">${e.label("noComments","No comments yet.")}</p>
            `}
    </div>
    ${e.hasMore?n`
            <button class="button button--text" type="button" ?disabled=${e.loadingMore} @click=${t.more}>
              ${e.label("loadMoreComments","Load more comments")}
            </button>
          `:d}
    ${S(e,t)}
  `;return n`
    <section class="entity-comments" aria-label=${e.label("comments","Comments")}>
      <header class="entity-comments__header community-comments__heading">
        <h2>
          ${e.commentCount===null?e.label("comments","Comments"):e.label("commentCount","{count} comments").replace("{count}",e.commentCount.toLocaleString(e.locale))}
        </h2>
        <div class="community-comment-sort">
          ${v({label:e.label("sort","Sort"),value:e.sort,options:[{value:"hot",label:e.label("commentSortPopular","Hot")},{value:"latest",label:e.label("commentSortLatest","Latest")}],onSelect:t.sort})}
        </div>
      </header>
      ${e.message?n`
              <p class="inline-message" role="status">${e.message}</p>
            `:d}
      ${C(e.phase==="loading"?{state:"initial",label:e.label("loading","Loading…"),local:!0,layout:"list"}:e.phase==="error"||e.error&&!e.dialog?{state:"error",message:e.error,retryLabel:e.label("retry","Retry"),onRetry:t.refresh,retainedContent:e.phase==="ready"?l:d}:{state:e.refreshing?"refreshing":"ready",content:l})}
      ${k(e,t)}
    </section>
  `}_(f);const H=Object.freeze(Object.defineProperty({__proto__:null,entityCommentsView:f},Symbol.toStringTag,{value:"Module"}));export{H as a,E as e};
