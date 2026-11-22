import"./lit-element.Bc_VOJIm.js";import{A as c,b as m}from"./lit-html.DhDqt3I2.js";import{i as s}from"./icon.BSt8MVsq.js";const i=(...r)=>r.find(t=>typeof t=="string"&&!!t.trim())||"";function b(r,t,e){const a=Number(r.perspectiveCharacterId||0);return r.isAnotherEpisode===!0&&a>0?i(t.find(n=>Number(n.characterId)===a)?.faceImage):i(e)}function g(r){const t=r?.spine&&typeof r.spine=="object"?r.spine:void 0;return i(r?.thumbnail,t?.backgroundPreview,r?.backgroundPreview)}function f(r,t){const e=r.cardImages&&typeof r.cardImages=="object"?r.cardImages:void 0;return i(r.episodeImage,r.banner,r.image,r.thumbnail,r.cardImage,e?.normal,t?.banner)}function p(r,t,e=[]){const{identityImage:a,duration:n,...o}=t;return{...o,kind:"story",label:t.title,aspectRatio:"16 / 9",adornment:a?m`
          <img
            src=${a}
            alt=""
            width="16"
            height="16"
            loading="lazy"
            referrerpolicy=${o.referrerPolicy||c}
          />
        `:void 0,placeholder:s("auto_stories",32),marks:[r.episodeNumber?{at:"start",text:`#${String(r.episodeNumber).padStart(2,"0")}`}:null,n?{at:"bottom-end",text:n}:null,...e]}}export{b as a,p as b,f as e,g as s};
