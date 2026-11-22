import{i as b}from"./lit-element.Bc_VOJIm.js";import{b as l,A as o,w as d}from"./lit-html.DhDqt3I2.js";const g=i=>Number.isFinite(i)?Math.min(1,Math.max(0,i)):0,p=(i,t)=>i!==void 0&&Number.isFinite(i)?Math.max(0,i):t;function x(i){const t=g(i);return t<=.1||t>=.95?0:1}function f(i,t,e){const r=e/24,a=i+e*2,s=[`M ${-e} 0`];for(let n=-e+r;n<=a;n+=r)s.push(`L ${n.toFixed(3)} ${(-Math.sin(n/e*Math.PI*2)*t).toFixed(3)}`);return s.join(" ")}class M extends b{static properties={options:{attribute:!1},width:{state:!0},reduced:{state:!0}};observer;intersections;inViewport=!0;syncAnimation=()=>{this.toggleAttribute("data-wave-suspended",!this.inViewport||document.hidden)};media;shapeKey="";shapePath="";onMotion=()=>{this.reduced=this.media?.matches??!1};constructor(){super(),this.options={value:0},this.width=0,this.reduced=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(t=>{const e=t[0]?.contentRect.width??0;Math.abs(e-this.width)>.1&&(this.width=e)}),this.observer.observe(this),typeof IntersectionObserver<"u"&&(this.intersections=new IntersectionObserver(([t])=>{this.inViewport=t.isIntersecting&&t.intersectionRect.width>0&&t.intersectionRect.height>0,this.syncAnimation()}),this.intersections.observe(this)),document.addEventListener("visibilitychange",this.syncAnimation),this.syncAnimation(),this.media=matchMedia("(prefers-reduced-motion: reduce)"),this.onMotion(),this.media.addEventListener("change",this.onMotion)}disconnectedCallback(){this.observer?.disconnect(),this.intersections?.disconnect(),document.removeEventListener("visibilitychange",this.syncAnimation),this.media?.removeEventListener("change",this.onMotion),super.disconnectedCallback()}render(){const t=g(this.options.value),e=Math.max(1,p(this.options.thickness,4)),r=p(this.options.amplitude,6),a=Math.max(8,p(this.options.wavelength,40)),s=Math.max(1,this.width),n=r*2+e*2,h=n/2,v=this.options.still||this.reduced,y=v?0:x(t),m=t*s,u=t===1?s:Math.max(0,m-2),$=t===0?e/2:Math.min(s,m+2+e/2),c=this.options.label,w=`${s}:${r}:${a}`;return w!==this.shapeKey&&(this.shapeKey=w,this.shapePath=f(s,r,a)),l`
      <div
        class=${`wavy-progress ${v?"is-still":""}`}
        style=${`--wavy-thickness:${e}px;--wavy-wavelength:${a}px;--wavy-height:${n}px`}
        role=${c?"progressbar":"presentation"}
        aria-label=${c??o}
        aria-valuemin=${c?"0":o}
        aria-valuemax=${c?"100":o}
        aria-valuenow=${c?String(t*100):o}
      >
        ${d`<svg viewBox="0 0 ${s} ${n}" preserveAspectRatio="none" aria-hidden="true">
          ${$<s&&t<1?d`<path class="wavy-progress__track" d="M ${$} ${h} L ${s-e/2} ${h}" />`:o}
          ${t<1?d`<circle class="wavy-progress__stop" cx=${s-2} cy=${h} r="2" />`:o}
        </svg>`}
        ${u>0?l`
          <span class="wavy-progress__clip" style=${`width:${u}px;border-radius:${e/2}px`} aria-hidden="true">
            <span class="wavy-progress__travel" style=${`width:${s+a*2}px`}>
              ${d`<svg viewBox="0 0 ${s+a*2} ${n}" preserveAspectRatio="none">
                <g transform="translate(0 ${h})">
                  <g class="wavy-progress__amplitude" style=${`transform:scaleY(${Math.max(.001,y)})`}>
                    <path class="wavy-progress__wave" d=${this.shapePath} />
                  </g>
                </g>
              </svg>`}
            </span>
          </span>
        `:o}
      </div>
    `}}typeof customElements<"u"&&!customElements.get("haneoka-wavy-progress")&&customElements.define("haneoka-wavy-progress",M);function A(i){return l`
    <haneoka-wavy-progress .options=${i}></haneoka-wavy-progress>
  `}export{A as w};
