import{i as m}from"./lit-element.Bc_VOJIm.js";import{A as i,l as $,b as r}from"./lit-html.DhDqt3I2.js";import{c}from"./client.BYho01b_.js";import{l as h,q as k}from"./catalog.CfAhzaok.js";import{i as f}from"./icon.BSt8MVsq.js";import{l as u}from"./resource-route.BR5kLHYo.js";import{l as b}from"./loading-indicator.dXh2gc3V.js";import{c as _}from"./card-growth.Cv0vV_gt.js";const v={ja:"",en:"(en)",ko:"(ko)","zh-CN":"(zh-Hans)","zh-TW":"(zh-Hant)"};function C(g,a){const e=`img_PFC2_mini${v[g]}.png`;return`/assets/intl/Assets/AddressableResources/UI/Texture/Tmp1/${encodeURIComponent(e)}?asset=1`}class T extends m{cardCatalogs={};readyImages=new Set;failedImages=new Set;createRenderRoot(){return this}label(a,e){return c(this.locale,`catalog.rankings.songs.${a}`,e)}formatScore(a){return a===null?"—":a.toLocaleString(this.locale)}initials(a){const e=a.trim();return Array.from(e||"?").slice(0,2).join("").toLocaleUpperCase(this.locale)}profileMedia(a,e,s=!0){return e?r`
          <span
            class=${$(`song-ranking__player-media${this.failedImages.has(e)?" is-error":this.readyImages.has(e)?" is-loaded":""}`)}
          >
            ${s&&!this.readyImages.has(e)?r`
                    ${b({label:this.label("loading","Loading")})}
                  `:i}
            <img
              src=${e}
              alt=""
              loading="lazy"
              decoding="async"
              @load=${l=>{this.readyImages.add(e),this.failedImages.delete(e);const n=l.currentTarget.parentElement;n?.classList.remove("is-error"),n?.classList.add("is-loaded")}}
              @error=${l=>{this.failedImages.add(e),l.currentTarget.parentElement?.classList.add("is-error")}}
            />
          </span>
        `:r`
          <span class="song-ranking__initial" aria-hidden="true">${this.initials(a)}</span>
        `}cardArtwork(a,e){if(a==null)return;const s=this.region==="jp"?"jp":"intl",l=this.cardCatalogs[s],n=this.cardCatalogs[s==="jp"?"intl":"jp"],t=e?"support":"member";return l?.[t][String(a)]||n?.[t][String(a)]}sourceCatalog(){return this.cardCatalogs[this.region==="jp"?"jp":"intl"]}levelFromExp(a,e){if(e==null||!a?.length)return null;let s=1;for(const l of a){if(l.exp>e)break;s=l.level}return s}cardLevel(a,e,s){const l=this.cardCatalogs[a.server],n=this.levelFromExp(l?.levels[s?"support":"member"][String(a.levelGroup)],s?e.supportExp:e.memberExp),t=s?l?.supportLimits[`${a.rankGroup}:${e.supportRank??1}`]:l?.memberLimits[`${a.rarity}:${e.memberAwakeCount??1}`];return n==null?null:t?Math.min(n,t):n}renderCard(a,e=!1){const s=e?a.supportCardId:a.memberCardId,l=this.cardArtwork(s,e),n=l?h(l.name,this.locale):this.label("unavailableCard","Card unavailable"),t=l?this.cardLevel(l,a,e):null,o=r`
      <span class=${`song-ranking__card-media card-media card-media--${e?"support":"member"}${e?" song-ranking__card-media--support":""}`}>
        ${l?.image?this.profileMedia(n,l.image,!1):f("broken_image",24)}
        ${l?.attributeIcon?r`
                <img class="card-media__attribute" src=${l.attributeIcon} alt="" />
              `:i}
        ${l?.rarityIcon?r`
                <img class="card-media__rarity" src=${l.rarityIcon} alt="" />
              `:i}
        ${l?this.renderCardProgress(l,{level:t,training:e?void 0:a.memberAwakeCount,rank:e?a.supportRank:a.memberRank},e):i}
      </span>
    `;return l?r`
          <a
            class="song-ranking__card"
            href=${u({server:l.server,locale:this.locale,kind:e?"support-cards":"member-cards",id:String(s)})}
            aria-label=${n}
            title=${n}
          >
            ${o}
          </a>
        `:r`
          <span class="song-ranking__card" aria-label=${n}>${o}</span>
        `}renderRankingRow(a){const e=a.name||this.label("privatePlayer","Unknown player"),s=this.cardArtwork(a.favoriteMemberCardId,!1),l=a.profileCard,n=l?.thumbnailUrls[0]||"",t=this.cardCatalogs.intl?.defaultProfileCardImages?.[this.locale]||this.sourceCatalog()?.defaultProfileCardImages?.[this.locale]||C(this.locale),o=[l?.name,l?.slot!=null?this.label("profileCardSlot","Slot {slot}").replace("{slot}",String(l.slot)):""].filter(Boolean).join(" / "),p=r`
      <strong>${e}</strong>
      <small class="song-ranking__player-stats">
        ${a.level!=null?r`<span>${this.label("cardLevel","Lv. {level}").replace("{level}",String(a.level))}</span>`:i}
        ${a.totalPower!=null?r`<span>${this.label("power","Power")} ${this.formatScore(a.totalPower)}</span>`:i}
      </small>
    `;return r`
      <li class="song-ranking__entry" data-rank=${a.rank} data-profile=${a.profileId??i} data-target=${a.target?"true":i}>
        <div class=${`song-ranking__row${a.cards?"":" song-ranking__row--points"}${a.bare?" song-ranking__row--bare":""}`}>
          <span class="song-ranking__rank" aria-label=${`${this.label("rank","Rank")} ${a.rank}`}>${a.rank}</span>
          ${a.bare?i:n?r`
                    <a class="song-ranking__namecard" href=${n} target="_blank" rel="noopener" title=${o} aria-label=${o||this.label("profileCard","Profile card")}>
                      ${this.profileMedia(e,n)}
                    </a>
                  `:r`
                    <span class="song-ranking__namecard" aria-label=${this.label("noProfileCard","No profile card")}>
                      ${this.profileMedia(e,t,!1)}
                    </span>
                  `}
          <span class="song-ranking__avatar">
            ${s?.avatar?this.profileMedia(e,s.avatar):r`<span class="song-ranking__initial" aria-hidden="true">${this.initials(e)}</span>`}
          </span>
          ${a.href?r`<a class="song-ranking__player-copy state-layer" href=${a.href} data-profile-id=${a.profileId??i}>${p}</a>`:r`<span class="song-ranking__player-copy">${p}</span>`}
          <span class="song-ranking__score" aria-label=${`${a.scoreLabel} ${a.score}`}>
            ${a.scoreAction?r`<button class="button button--text ranking-team-trigger" type="button" @click=${a.scoreAction.onClick}>
              <strong>${a.score}</strong><small>${a.scoreAction.label}</small></button>`:r`<strong>${a.score}</strong>`}
            ${a.tied?r`<small>${this.label("tied","Tied rank")}</small>`:i}
            ${a.detail??i}
          </span>
          ${a.cards?r`
                  <span class="song-ranking__deck-preview" aria-label=${this.label("cards","Cards")}>
                    ${a.cards.map(d=>r`
                        <span class="song-ranking__deck-slot">
                          ${this.renderCard(d)}${d.supportCardId!=null?this.renderCard(d,!0):r`<span class="song-ranking__card-media song-ranking__card-media--support song-ranking__card-empty" aria-label=${this.label("noSupportCard","No support card")}></span>`}
                        </span>
                      `)}
                  </span>
                `:i}
        </div>
      </li>
    `}renderCardProgress(a,e,s=!1){return _({...e,kind:s?"support":"member",icons:this.cardCatalogs[a.server]?.growthIcons??k(()=>""),trainingLabel:c(this.locale,"catalog.cards.fields.training","Training"),rankLabel:c(this.locale,"catalog.cards.fields.awakening","Awakening"),liveSkill:e.liveSkillLevel!==void 0?{level:e.liveSkillLevel,icon:a.liveSkillIcon??"",label:c(this.locale,"catalog.cards.fields.liveSkill","LIVE Skill")}:void 0,gekisoSkill:e.gekisoSkillLevel!==void 0?{level:e.gekisoSkillLevel,icon:a.gekisoSkillIcon??"",label:c(this.locale,"catalog.cards.fields.gekisouSkill","GEKISO Skill")}:void 0})}}export{T as G};
