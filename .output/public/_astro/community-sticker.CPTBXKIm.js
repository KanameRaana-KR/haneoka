import{i as p}from"./lit-element.Bc_VOJIm.js";import{b as l,A as d}from"./lit-html.DhDqt3I2.js";import{l as f,a as g,b as k}from"./catalog.CfAhzaok.js";import{r as u}from"./release-server.j-atVW2C.js";import{v as b}from"./community-markup.svGuDLM2.js";import{i as m}from"./resource-route.BR5kLHYo.js";import"./client.BYho01b_.js";import"./temporary-public-routing.BsxzEC6B.js";import"./interface-route.C7eSW2gB.js";import"./locales.DtpYD_uK.js";import"./document-url.BFFpyWb5.js";import"./document-address.dywC0kBs.js";import"./parse.D3VWRPZL.js";const a=new Map;function x(t,e=!1){if(!m(t))return Promise.resolve({});const s=a.get(t);if(!e&&s&&s.expires>Date.now())return s.promise;const i=g(k("stamps","",t)).catch(n=>{throw a.delete(t),n});return a.set(t,{expires:Date.now()+3e5,promise:i}),i}function A(t){return[...new Set([t,u(),"intl","jp"])].filter(e=>m(e))}function S(t,e){const s=String(t.image||""),i=t.imageVariants?.[s]||{},n=e==="zh-CN"?"zh-Hans":e==="zh-TW"?"zh-Hant":e;return[...new Set([i[n],i.ja,s,...Object.values(i)].filter(r=>!!r&&r.startsWith("/assets/")))]}class w extends p{static properties={token:{},locale:{},label:{},sources:{state:!0},index:{state:!0}};sequence=0;constructor(){super(),this.token="",this.locale="en",this.label="",this.sources=[],this.index=0}createRenderRoot(){return this}updated(e){(e.has("token")||e.has("locale"))&&this.resolve()}disconnectedCallback(){this.sequence++,super.disconnectedCallback()}async resolve(){const e=++this.sequence;if(this.sources=[],this.index=0,!b(this.token))return;const[s,i,n]=this.token.split(":");for(const r of[...new Set([s,u(),"intl","jp"])])try{const h=await x(r);if(!this.isConnected||e!==this.sequence)return;const o=h[i];if(!o)continue;const c=S(o,n||this.locale);if(!c.length)continue;this.sources=c,this.label||(this.label=f(o.name,n||this.locale));return}catch{if(e!==this.sequence)return}}render(){const e=this.sources[this.index];return e?l`
          <img
            src=${e}
            alt=${this.label}
            title=${this.label}
            width="48"
            height="48"
            loading="lazy"
            decoding="async"
            @error=${()=>this.index++}
          />
        `:l`
          <span>${this.label||d}</span>
        `}}customElements.get("community-sticker")||customElements.define("community-sticker",w);export{w as CommunitySticker,x as communityStamps,A as stampServers,S as stampSources};
