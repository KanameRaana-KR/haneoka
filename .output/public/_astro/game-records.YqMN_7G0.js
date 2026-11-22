import"./lit-element.Bc_VOJIm.js";import{b as r}from"./lit-html.DhDqt3I2.js";import{c as p}from"./client.BYho01b_.js";import{p as c}from"./game-records.BcqoVowg.js";import{j as u,h as k,e as m,k as d}from"./kr.DQfuAfK4.js";const l=[{value:"jp",key:"regionJp",flag:u},{value:"tw",key:"regionTw",flag:k},{value:"en",key:"regionEn",flag:m},{value:"kr",key:"regionKr",flag:d}],b=(e,n,i="")=>c(i)??(e==="jp"?"jp":f("intl",n));function f(e,n){return e==="jp"||e==="jp-cbt"?"jp":n==="en"?"en":n==="ko"?"kr":"tw"}function j(e,n,i,t="ranking-region",g=l.map(s=>s.value)){const s=(a,o)=>p(e,`catalog.rankings.songs.${a}`,o);return r`
    <div
      class="settings-options song-ranking__regions"
      data-app-bar-switch="server"
      role="radiogroup"
      aria-label=${s("region","Ranking region")}
    >
      ${l.filter(a=>g.includes(a.value)).map(a=>r`
          <label class="settings-option" title=${s(a.key,a.value)}>
            <input
              type="radio"
              name=${t}
              value=${a.value}
              .checked=${n===a.value}
              aria-label=${s(a.key,a.value)}
              @change=${()=>i(a.value)}
            />
            <span class="settings-option__face" aria-hidden="true">
              <span class="settings-option__image"><img src=${a.flag} width="28" height="28" alt="" /></span>
            </span>
            <span class="settings-option__tooltip" aria-hidden="true">${s(a.key,a.value)}</span>
          </label>
        `)}
    </div>
  `}export{l as G,b as a,f as d,j as g};
