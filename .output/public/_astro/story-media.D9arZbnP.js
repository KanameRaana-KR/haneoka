import"./lit-element.Bc_VOJIm.js";import{b as t,A as m}from"./lit-html.DhDqt3I2.js";import{n as e}from"./lazy-images.2hwWuBaG.js";/* empty css                        */function $(a,s="",n){return t`
    <span class=${`story-cast-media ${s?"story-cast-media--home":""}`}>
      ${s?t`
              <img
                class="story-cast-media__background"
                data-src=${s}
                alt=""
                referrerpolicy=${n||m}
                @error=${e}
              />
            `:m}
      <span class="story-cast-media__people">
        ${a.map(r=>t`
            <span title=${r.name}>
              ${r.image?t`
                      <img
                        data-src=${r.image}
                        alt=${r.name}
                        referrerpolicy=${n||m}
                        @error=${e}
                      />
                    `:t`
                      <span>${r.name}</span>
                    `}
            </span>
          `)}
      </span>
    </span>
  `}function g(a){const s=a.cardThumbnails,n=a.cardImages,r=["normal","trained"].flatMap(i=>{const o=String(s?.[i]||n?.[i]||i==="normal"&&a.cardImage||"");return o?[{image:o,fallback:String(n?.[i]||"")}]:[]});return r.length?t`
        <span class="story-card-media">
          ${r.map(({image:i,fallback:o})=>t`
        <img data-src=${i} data-fallback=${o} alt="" decoding="async" @error=${e} />
      `)}
        </span>
      `:void 0}function u(a,s=""){return t`
    <img
      class="story-thumbnail"
      data-src=${a}
      data-fallback=${s}
      style="width:100%;height:auto;aspect-ratio:16/9;object-fit:fill"
      alt=""
      @error=${e}
    />
  `}function f(a,s,n){return t`
    <section class="story-episode-group">
      <h3>
        ${a}
        <small>${s}</small>
      </h3>
      ${n}
    </section>
  `}export{g as a,u as b,$ as c,f as s};
