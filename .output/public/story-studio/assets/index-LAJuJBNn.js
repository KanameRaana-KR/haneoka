import{_ as re}from"./preload-helper-DMGCcr4D.js";import{a4 as ae,d as oe,ad as ie}from"./three-DVEmkC7O.js";import{V as ne}from"./index-UQpo_8wf.js";import{cQ as D,cR as H,cS as se,cT as le}from"./index-DfFlO_mo.js";import{cU as Ne,cV as We,cW as qe,cX as Ve}from"./index-DfFlO_mo.js";import"./react-Bag7Dygb.js";const ce={rain:[{count:50,speed:30,scale:.4,angle:1,horizontal:0},{count:150,speed:20,scale:.3,angle:1,horizontal:0}],snow:[{count:250,speed:3,scale:.4,angle:0,horizontal:0},{count:750,speed:1,scale:.2,angle:0,horizontal:0}],"heavy-snow":[{count:1e3,speed:20,scale:.6,angle:-75,horizontal:0},{count:2e3,speed:10,scale:.3,angle:-80,horizontal:0}],petals:[{count:100,speed:2,scale:.05,angle:0,horizontal:3},{count:300,speed:1,scale:.025,angle:0,horizontal:2}]},A=(r,t)=>typeof r=="number"&&Number.isFinite(r)?r:t,W=r=>r&&typeof r=="object"&&!Array.isArray(r)?r:{};class fe{weather;kind="screenSprites";batches;layers=[];seed;time=0;saved;disposed=!1;constructor(t,e,a={}){this.weather=t,this.seed=Math.trunc(A(a.seed,334462))>>>0;const o=Math.max(1,A(a.width,2560)),n=Math.max(1,A(a.height,1440));for(const[i,s]of ce[t].entries()){const c=i===0?"foreground":"background",f=W(a[c]),m={count:Math.max(0,Math.min(65536,Math.trunc(A(f.count,s.count)))),speed:A(f.speed,s.speed),scale:A(f.scale,s.scale),angle:A(f.angle,s.angle),horizontal:A(f.horizontal,s.horizontal)},d=m.angle*(Math.PI/180),l=Math.cos(d),g=Math.sin(d),u=o*Math.abs(l)+n*Math.abs(g),h=o*Math.abs(g)+n*Math.abs(l),v={id:`${t}/${c}`,layer:c,image:e,width:t==="rain"?128:t==="petals"?e.width:128,height:t==="rain"?640:t==="petals"?e.height:128,referenceWidth:o,referenceHeight:n,transform:[l,g,-g,l,o/2-l*u/2+g*h/2,n/2-g*u/2-l*h/2],instances:new Float32Array(m.count*10),tint:Math.trunc(A(a.color,16777215))&16777215,revision:0},y={profile:m,width:u,height:h,particles:[],batch:v};for(let C=0;C<m.count;C++){const x={x:0,y:0,rotation:0,sx:1,sy:1,alpha:1,frame:0,vx:0,vy:0,spin:0,positionPhase:0,scalePhase:0};if(t==="petals"){const R=this.random()*Math.PI*2;x.x=this.random()*u,x.y=this.random()*h,x.rotation=this.random()*Math.PI*2,x.sx=Math.cos(R)*m.scale,x.sy=Math.sin(R)*m.scale,x.vy=(.5+this.random()*1.5+(.1+this.random()*.9))*m.speed,x.spin=this.random()*.015*(this.random()<.5?1:-1),x.positionPhase=this.random()*Math.PI*2,x.scalePhase=R}else x.frame=this.weighted(t==="rain"?[10,5,2,2,1]:[10,2,2,2,1,1,1,2,2,2]),this.reset(y,x,!0);y.particles.push(x)}this.layers.push(y),this.write(y)}this.batches=this.layers.map(i=>i.batch)}random(){return this.seed=Math.imul(this.seed^this.seed>>>15,this.seed|1)+1831565813>>>0,((this.seed^this.seed>>>14)>>>0)/4294967296}weighted(t){let e=this.random()*t.reduce((a,o)=>a+o,0);for(let a=0;a<t.length;a++){if(e<t[a])return a;e-=t[a]}return t.length-1}reset(t,e,a){const{profile:o}=t;e.sx=e.sy=o.scale*(this.random()*.5+.5),e.x=this.random()*t.width,e.y=a?this.random()*t.height:-this.random()*50-Math.abs(t.batch.height*e.sy),e.alpha=this.weather==="rain"?this.random()*.5+.5:this.random()*.2+.8,e.vy=(this.random()*.4+.8)*o.speed,this.weather!=="rain"&&(e.vx=(this.random()-.5)*.25*o.speed,e.spin=(this.random()-.5)*.005)}update(t){if(this.disposed)return;const e=Math.max(0,A(t,0)),a=e*60;this.time+=e,this.saved=void 0;for(const o of this.layers){const{profile:n}=o;for(const i of o.particles)if(this.weather==="petals"){i.x+=Math.sin(this.time+i.positionPhase)*n.horizontal*a,i.y+=i.vy*a,i.rotation+=i.spin*a,i.sx=Math.cos(this.time+i.scalePhase)*n.scale,i.sy=Math.sin(this.time+i.scalePhase)*n.scale;const s=Math.abs(o.batch.width*i.sx*n.scale),c=Math.abs(o.batch.height*i.sy*n.scale);i.x+s/2<-o.width?i.x=o.width+s/2:i.x-s/2>o.width&&(i.x=-o.width-s/2),i.y-c/2>o.height&&(i.x=this.random()*o.width,i.y=-this.random()*50-c,i.positionPhase=this.random()*Math.PI*2,i.scalePhase=this.random()*Math.PI*2,i.vy=(.5+this.random()*1.5+(.1+this.random()*.9))*n.speed,i.spin=this.random()*.015*(this.random()<.5?1:-1))}else{i.y+=i.vy*a,this.weather!=="rain"&&(i.x+=i.vx*a,i.rotation+=i.spin*a);const s=Math.abs(o.batch.width*i.sx),c=Math.abs(o.batch.height*i.sy);(i.y-c/2>o.height||i.x<-s||i.x>o.width+s)&&this.reset(o,i,!1)}this.write(o)}}write(t){const e=t.batch.instances,a=this.weather==="rain"?5:this.weather==="petals"?1:10;t.particles.forEach((o,n)=>{const i=n*10;e[i]=o.x,e[i+1]=o.y,e[i+2]=o.rotation,e[i+3]=o.sx,e[i+4]=o.sy,e[i+5]=o.alpha,e[i+6]=o.frame/a,e[i+7]=0,e[i+8]=(o.frame+1)/a,e[i+9]=1}),t.batch.revision++}snapshot(){return this.saved??={version:1,weather:this.weather,seed:this.seed,time:this.time,layers:this.layers.map(t=>t.particles.map(e=>({...e})))}}restore(t){const e=W(t);if(e.version!==1||e.weather!==this.weather||!Array.isArray(e.layers)||e.layers.length!==this.layers.length)throw new TypeError("Invalid weather snapshot");this.seed=A(e.seed,334462)>>>0,this.time=A(e.time,0),e.layers.forEach((a,o)=>{const n=this.layers[o];if(!Array.isArray(a)||a.length!==n.particles.length)throw new TypeError("Weather particle count changed");a.forEach((i,s)=>{const c=W(i),f=n.particles[s];for(const m of Object.keys(f)){const d=c[m];if(typeof d!="number"||!Number.isFinite(d))throw new TypeError("Invalid weather particle");f[m]=d}}),this.write(n)}),this.saved=void 0}dispose(){this.disposed=!0}}const G=new WeakMap;function ue(r,t){let e=G.get(r);e||(e=new Map,G.set(r,e));let a=e.get(t);return a||(a=(async()=>{const o=r.resolveRenderable?await r.resolveRenderable(t):await(async()=>{const n=await r.load(t),i=URL.createObjectURL(new Blob([new Uint8Array(n)],{type:ae(t,n)}));return{url:i,release:()=>URL.revokeObjectURL(i)}})();try{const n=new Image;return n.decoding="async",await new Promise((i,s)=>{n.onload=()=>i(),n.onerror=()=>s(new Error("Weather texture could not be decoded")),n.src=o.url}),{source:n,width:n.naturalWidth,height:n.naturalHeight}}finally{o.release()}})(),e.set(t,a),a.catch(()=>{e.get(t)===a&&e.delete(t)})),a}const U=r=>r&&typeof r=="object"&&!Array.isArray(r)?r:{},de={id:"stockWeather",effectType:"webgal.weather",name:"Weather",async create(r,t,e){const a=String(r.weather);if(!["rain","snow","heavy-snow","petals"].includes(a))throw new RangeError(`Unknown weather effect: ${a}`);const o=U(r.options),n=U(t.runtime.stage),{stockTextures:i}=await re(async()=>{const{stockTextures:f}=await import("./StockTextures-DynQPzjK.js");return{stockTextures:f}},[],import.meta.url),s=typeof o.texture=="string"?o.texture:i[a==="heavy-snow"?"snow":a],c=await ue(t.resources,s);return e.throwIfAborted(),new fe(a,c,{width:n.screenReferenceWidth??2560,height:n.screenReferenceHeight??1440,...o})}},_=r=>r&&typeof r=="object"&&!Array.isArray(r)?r:{},X=r=>r.split(/(?<!\\)\|/u).map(t=>t.replace(/\\\|/gu,"|")),ge=r=>_(_(r.pluginState)["haneoka.webgal-runtime"]).intro;async function me(r,t,e){if(t.Model.shouldShortCut||e?.aborted)return;const a=r.userForward===!0,o={text:String(r.text??""),elapsed:0,delay:Math.max(0,Number.isFinite(Number(r.delayTime))?Number(r.delayTime):1500),userForward:a,revealed:1,revealAt:0,backgroundRef:String(r.backgroundRef??""),backgroundColor:String(r.backgroundColor??"rgba(0,0,0,1)"),fontColor:String(r.fontColor??"white"),fontSize:String(r.fontSize??"medium"),animation:String(r.animation??"fadeIn")},n=t.state,i=_(n.pluginState),s=_(i["haneoka.webgal-runtime"]);n.pluginState={...i,"haneoka.webgal-runtime":{...s,intro:o}};const c=X(o.text).length,f=a||r.hold===!0,m=1e3+o.delay*c,d=new AbortController,l=t.SceneRoot.storyClock;let g,u=0,h=l?l.nowSeconds()*1e3:performance.now(),v=!1,y;const C=new Promise(T=>{y=()=>{if(v)return;v=!0,cancelAnimationFrame(u),g?.(),e?.removeEventListener("abort",y),d.abort();const S=_(_(n.pluginState)["haneoka.webgal-runtime"]);if(S.intro===o){const{intro:P,...F}=S;n.pluginState={..._(n.pluginState),"haneoka.webgal-runtime":F}}T()};const p=S=>{const P=Math.max(0,S-h);h=S,n.paused||(o.elapsed+=P*(l?1:t.Model.getCurrentSpeedRate())),!f&&o.elapsed>=m?y():l||(u=requestAnimationFrame(p))};e?.addEventListener("abort",y,{once:!0}),e?.aborted?y():l?g=l.subscribe(S=>p(S*1e3),y):u=requestAnimationFrame(p)}),R=(async()=>{for(;!v;){if(await t.Model.waitForNext(d.signal),v)return;n.paused||((a?o.revealed>=c:o.elapsed>=o.delay*(c-1))?y():a?(o.revealed=c,o.revealAt=o.elapsed):o.elapsed=Math.min(m,o.elapsed+o.delay))}})();await C,await R}function he(r,t){const e=r.ownerDocument,a=e.createElement("div"),o=e.createElement("div");a.className="vega-webgal-intro",a.hidden=!0,Object.assign(a.style,{position:"absolute",inset:"0",zIndex:"11",pointerEvents:"none",overflow:"hidden",boxSizing:"border-box",backgroundPosition:"center",backgroundSize:"cover",fontFamily:'"WebgalUI",serif'}),Object.assign(o.style,{padding:"3em 4em",boxSizing:"border-box",width:"100%",height:"100%"}),a.append(o),r.append(a);let n,i=0,s=!1,c,f=[];const m={fadeIn:[{opacity:0},{opacity:1}],slideIn:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],typingEffect:[{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0 0 0)"}],pixelateEffect:[{opacity:0,filter:"none"},{opacity:.5,filter:"blur(5px)"},{opacity:1,filter:"none"}],revealAnimation:[{opacity:0,clipPath:"inset(0 100% 0 0)"},{opacity:1,clipPath:"inset(0 0 0 0)"}]},d=()=>{if(s||t.signal.aborted)return;const l=ge(t.state);if(a.hidden=!l||!t.state.ready||t.state.loading||t.state.seeking,l!==n&&(f.forEach(g=>g.animation.cancel()),f=[],o.replaceChildren(),c?.(),c=void 0,n=l,a.style.backgroundImage="none",l&&(a.style.backgroundColor=l.backgroundColor,a.style.color=l.fontColor,a.style.fontSize=`${l.fontSize==="small"?2.8:l.fontSize==="large"?4.2:3.5}cqw`,X(l.text).forEach((g,u)=>{const h=e.createElement("div");h.textContent=g||" ",o.append(h);const v=h.animate(m[l.animation]??m.fadeIn,{duration:["pixelateEffect","revealAnimation"].includes(l.animation)?3e3:1500,easing:"ease-out",fill:"both"});v.pause(),f.push({element:h,animation:v,offset:u*l.delay})}),l.backgroundRef&&t.resources&&t.resources.resolveRenderable(l.backgroundRef,t.signal).then(g=>{if(s||n!==l){g.release();return}c=g.release,a.style.backgroundImage=`url(${JSON.stringify(g.url)})`}).catch(()=>{}))),l){const g=e.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches;for(const[u,h]of f.entries()){const v=l.userForward?u===0?0:l.revealAt:h.offset;h.element.style.visibility=(l.userForward?u>=l.revealed:l.elapsed<v)?"hidden":"visible",h.animation.currentTime=g?h.animation.effect.getComputedTiming().endTime:Math.max(0,l.elapsed-v)}}i=requestAnimationFrame(d)};return d(),{dispose(){s=!0,cancelAnimationFrame(i),f.forEach(l=>l.animation.cancel()),c?.(),a.remove()}}}const q="webgal.film",pe=new URL(""+new URL("film-CfM42ps7.woff2",import.meta.url).href,import.meta.url).href,Y="VegaWebGalFilm";function ve(r,t){const e=r.ownerDocument,a=e.defaultView,o=e.createElement("div"),n=e.createElement("div"),i=e.createElement("style");o.className="vega-webgal-film",o.hidden=!0,o.tabIndex=0,o.setAttribute("role","button"),o.setAttribute("aria-label","Advance dialogue"),n.className="vega-webgal-film__text",n.dir="auto";const s=Number(t.player.runtime.stage.screenReferenceHeight)||1440;n.style.fontSize=`calc(${6400/s}cqh * var(--vega-text-size, 1))`,i.textContent=`
    .vega-webgal-film{position:absolute;inset:auto 0 0;height:12%;color:white;background:black;overflow:hidden;box-sizing:border-box;display:flex;flex-flow:column;align-items:center;justify-content:center;pointer-events:auto;font-family:${Y},serif;font-style:italic;letter-spacing:.2em;animation:vega-film-show .7s ease-out both}
    .vega-webgal-film[hidden],[data-vega-ui-hidden=true] .vega-webgal-film{display:none}
    .vega-webgal-film__text>span{animation:vega-film-show .7s ease-out both}
    .vega-webgal-film[data-instant] .vega-webgal-film__text>span{animation:none}
    .vega-webgal-film:focus-visible{outline:2px solid white;outline-offset:-3px}
    @keyframes vega-film-show{from{opacity:0}to{opacity:1}}
    @media(prefers-reduced-motion:reduce){.vega-webgal-film,.vega-webgal-film__text>span{animation:none}}
  `,o.append(n),r.append(i,o);const c=new AbortController,f=t.services(ne),m=p=>{p.stopPropagation(),t.player.requestNext()};o.addEventListener("click",m,{signal:c.signal}),o.addEventListener("keydown",p=>{!p.repeat&&["Enter"," "].includes(p.key)&&(p.preventDefault(),m(p))},{signal:c.signal});let d=f?.snapshot(),l=0,g,u="",h=t.player.seekRevision,v=!1;const y=()=>{if(t.state.seeking)return!o.hidden;const p=t.state.talk,S=d,P=p.presentation===q&&t.state.ready&&!t.state.loading&&(!S||S.screen==="game"),F=o.hidden&&P;if(o.hidden=!P,!P)return!1;const ee=h!==t.player.seekRevision;h=t.player.seekRevision;const I=p.visible?p.text.replace(/ {2,}/g,L=>" ".repeat(L.length)):"",O=p.instantReveal||t.state.instantText||ee||S?.settings.reducedMotion;F?o.style.animation=O?"none":"":O&&(o.style.animation="none"),o.toggleAttribute("data-instant",!!O),n.lang=p.textLang??"";const E=(S?.settings.uiLanguage==="auto"?a?.navigator.language:S?.settings.uiLanguage)??"en";if(o.setAttribute("aria-label",E.startsWith("ja")?"次の台詞へ":E.startsWith("ko")?"다음 대사":/zh-(TW|HK|Hant)/i.test(E)?"下一句對話":E.startsWith("zh")?"下一句对话":"Advance dialogue"),g!==p.sourceCommand||I!==u){n.replaceChildren(),u="",g=p.sourceCommand;const L=Math.max(.1,S?.settings.textSpeed??1),te=80-20*Math.max(0,Math.min(100,100-(78/L-3)/1.5));let N=0;const V=e.createDocumentFragment();for(const j of Array.from(I)){const k=e.createElement("span");k.textContent=j;const B=p.prefixLength??0;N<B?k.style.animation="none":k.style.animationDelay=`${(N-B)*te}ms`,N+=j.length,V.append(k)}n.append(V),u=I}return!0},C=()=>{v||t.signal.aborted||y()&&!l&&(l=a?.requestAnimationFrame(()=>{l=0,C()})??0)},x=t.player.subscribePresentationObserver?.(C),R=t.player.subscribeExecutionObserver(()=>C()),T=f?.subscribe(p=>{d=p,C()});return C(),{dispose(){v=!0,c.abort(),a?.cancelAnimationFrame(l),x?.(),R(),typeof T=="function"?T():T&&"dispose"in T?T.dispose():T&&"destroy"in T?T.destroy():T&&T.close(),o.remove(),i.remove()}}}const ye=String.raw`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Q={adjustment:String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`,"motion-blur":String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`,dot:String.raw`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`,glitch:String.raw`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`,godray:String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}


void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`,"old-film":String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`,reflection:String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`,"rgb-split":String.raw`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`,shockwave:String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`,"kawase-blur":String.raw`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,extract:String.raw`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,bloom:String.raw`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`,"color-matrix":String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,gaussian:String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec2 stepSize;
void main() {
 gl_FragColor = texture2D(uSampler, vTextureCoord - 2.0 * stepSize) * 0.153388
  + texture2D(uSampler, vTextureCoord - stepSize) * 0.221461
  + texture2D(uSampler, vTextureCoord) * 0.250301
  + texture2D(uSampler, vTextureCoord + stepSize) * 0.221461
  + texture2D(uSampler, vTextureCoord + 2.0 * stepSize) * 0.153388;
}`,edge:String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D edgeMask;
uniform vec4 filterArea;
uniform vec2 direction;
uniform vec3 light;
uniform float strength;
void main() {
 vec4 c = texture2D(uSampler, vTextureCoord);
 float edge = texture2D(edgeMask, vTextureCoord - direction / filterArea.xy).a;
 float amount = clamp((c.a - edge) * strength, 0.0, 1.0);
 gl_FragColor = vec4(c.rgb + (vec3(1.0) - c.rgb) * light * amount, c.a);
}`,radius:String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float radius;
void main() {
 float d = length((vTextureCoord - vec2(0.5)) * vec2(16.0/9.0, 1.0));
 gl_FragColor = texture2D(uSampler, vTextureCoord) * (1.0 - smoothstep(radius, radius + 0.05, d));
}`,alpha:String.raw`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float uAlpha;
void main() { gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha; }`},be=Object.fromEntries(Object.keys(Q).map(r=>[r,{}])),z=(r,t,e,a,o)=>{r.draw({program:be[t],vertex:ye,fragment:Q[t],legacy:!0,blend:!1,uniforms:e},a,o)},$=(r,t,e,a)=>{let o=e;try{for(let n=0;n<r.length;n++){const i=n===r.length-1?a:t.acquire();try{r[n](t,o,i)}catch(s){throw i!==a&&t.release(i),s}o!==e&&t.release(o),o=i}}finally{o!==e&&o!==a&&t.release(o)}},Z=(r,t)=>{const e=document.createElement("canvas");e.width=4,e.height=512;const a=e.getContext("2d");let o=0;for(let n=0;n<r.length;n++){const i=Math.floor(t[n]*256),s=r[n]*512;a.fillStyle=`rgba(${Math.max(0,i)}, ${Math.max(0,-i)}, 0, 1)`,a.fillRect(0,o>>0,512,s+1>>0),o+=s}return{source:e,width:4,height:512,revision:0,nearest:!0}},xe=()=>{const r=[],t=[];let e=1;for(let a=0;a<4;a++){const o=Math.max(Math.sqrt(.2)*e*Math.random(),.015625);r.push(o),e-=o}r.push(e);for(let a=4;a>0;a--){const o=Math.floor(Math.random()*a);[r[a],r[o]]=[r[o],r[a]]}for(let a=0;a<5;a++)t.push(Math.random()*(Math.random()<.5?-1:1));return{sizes:r,offsets:t,image:Z(r,t)}};class we{values={};stages=[];glitch;paddingValue=0;get active(){return this.stages.length>0}get padding(){return this.paddingValue}configure(t){const e={...D,...t};if(Object.keys(e).length===Object.keys(this.values).length&&Object.entries(e).every(([n,i])=>i===this.values[n]))return;this.values=e,this.stages=[],this.paddingValue=0;const a=(n,i)=>{this.stages.push((s,c,f)=>z(s,n,i,c,f))},o=(n,i)=>{this.stages.push((s,c,f)=>z(s,n,{...i,dimensions:[s.frameWidth,s.frameHeight],aspect:s.frameHeight/s.frameWidth},c,f))};if((e.brightness!==1||e.contrast!==1||e.saturation!==1||e.gamma!==1||e.colorRed!==255||e.colorGreen!==255||e.colorBlue!==255)&&a("adjustment",{brightness:e.brightness,contrast:e.contrast,saturation:e.saturation,gamma:Math.max(1e-4,e.gamma),red:e.colorRed/255,green:e.colorGreen/255,blue:e.colorBlue/255,alpha:1}),e.bevel!==0||e.bevelThickness!==0||e.bevelRotation!==0||e.bevelSoftness!==0||e.bevelRed!==255||e.bevelGreen!==255||e.bevelBlue!==255){const n=e.bevelRotation*Math.PI/180,i=[Math.cos(n)*e.bevelThickness,Math.sin(n)*e.bevelThickness],s=Math.min(1,Math.max(0,e.bevelSoftness));this.paddingValue+=1,this.stages.push((c,f,m)=>{const d=s>0?c.acquire():f;try{d!==f&&z(c,"motion-blur",{uVelocity:i.map(l=>-l*s),uKernelSize:i.some(l=>l!==0)?11:0,uOffset:0},f,d),z(c,"edge",{direction:i,light:[e.bevelRed/255,e.bevelGreen/255,e.bevelBlue/255],strength:e.bevel,edgeMask:d},f,m)}finally{d!==f&&c.release(d)}})}if(e.godrayFilm&&o("godray",{light:[Math.cos(Math.PI/6),.5],parallel:!0,gain:.5,lacunarity:2.5,time:0,alpha:1}),(e.bloom!==0||e.bloomBrightness!==1||e.bloomBlur!==0||e.bloomThreshold!==0)&&this.stages.push((n,i,s)=>{const c=n.acquire(),f=n.acquire();try{z(n,"extract",{threshold:e.bloomThreshold},i,c);const m=e.bloomBlur>0?[1,.75,.5,.25].map(d=>d*e.bloomBlur):[0];$(m.map(d=>(l,g,u)=>z(l,"kawase-blur",{uOffset:[(d+.5)/g.width,(d+.5)/g.height]},g,u)),n,c,f),z(n,"bloom",{bloomScale:e.bloom,brightness:e.bloomBrightness,bloomTexture:f},i,s)}finally{n.release(c),n.release(f)}}),e.oldFilm&&o("old-film",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0}),e.glitchFilm?(this.glitch??=xe(),this.stages.push((n,i,s)=>z(n,"glitch",{dimensions:[n.frameWidth,n.frameHeight],aspect:n.frameHeight/n.frameWidth,displacementMap:this.glitch.image,offset:100,sinDir:0,cosDir:1,fillMode:0,seed:0,red:[0,0],green:[0,0],blue:[0,0]},i,s))):this.glitch=void 0,e.dotFilm&&a("dot",{scale:1,angle:5}),e.rgbFilm&&a("rgb-split",{red:[-10,0],green:[0,10],blue:[0,0]}),e.blur!==0){this.paddingValue+=Math.abs(e.blur)*2;for(const n of[0,1])for(let i=0;i<4;i++)this.stages.push((s,c,f)=>z(s,"gaussian",{stepSize:n===0?[e.blur/c.width/4,0]:[0,e.blur/c.height/4]},c,f))}e.shockwaveFilter!==0&&a("shockwave",{center:[1280,720],amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1,time:e.shockwaveFilter}),e.radiusAlphaFilter!==0&&a("radius",{radius:e.radiusAlphaFilter}),e.reflectionFilm&&o("reflection",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0}),e.alpha!==1&&a("alpha",{uAlpha:e.alpha}),t.colorMatrixEnabled===1&&a("color-matrix",{m:Array.from({length:20},(n,i)=>t[`colorMatrix${i}`]??+(i%6===0)),uAlpha:1})}render(t){$(this.stages,t,t.input,t.output)}snapshot(){return this.glitch?{glitch:{sizes:[...this.glitch.sizes],offsets:[...this.glitch.offsets]}}:{}}restore(t){const e=t;this.glitch&&e.glitch&&(this.glitch={...e.glitch,image:Z(e.glitch.sizes,e.glitch.offsets)})}dispose(){this.stages=[],this.glitch=void 0,this.values={}}}const Se=Object.freeze({channels:[...Object.keys(D).filter(r=>!["x","y","scaleX","scaleY","rotation"].includes(r)),"colorMatrixEnabled",...Array.from({length:20},(r,t)=>`colorMatrix${t}`)],create:()=>new we});function Ce(r,t){r.cancelPropertyAnimations?.(t),r.clearScreenTransform?r.clearScreenTransform(t):r.writeScreenTransform?.(t,{current:{},planned:{}})}async function J(r,t,e,a,o,n){if(!r.playPropertyAnimation||!r.readScreenTransform)throw Error("The active renderer does not support property animation");if(a.signal?.aborted||!e.length)return;for(const c of e)for(const[f,m]of Object.entries(H(c)))if(!r.screenTransformChannels?.includes(f)&&m!==D[f])throw Error(`Screen transform channel is unavailable in this renderer: ${f}`);const i=r.readScreenTransform(t),s=se(e,(a.animationVersion===2?i?.current:i?.planned)??{},a);await r.playPropertyAnimation(t,s.clip,{...a,immediate:n})}function Te(r,t,e,a,o,n){const i=r.readScreenTransform?.(t)?.planned,s=H(e),c=i?{...D,...i}:{...s,alpha:0},f=a.parallel||a.ignoreDefault?Object.fromEntries(Object.keys(s).map(h=>[h,c[h]])):c,{x:m,y:d,scaleX:l,scaleY:g,...u}=f;return J(r,t,[{...u,position:{x:m,y:d},scale:{x:l,y:g},duration:0},{...e,duration:a.duration??500,ease:a.ease??""}],a,o,n)}const Ae="webgal",Me=String.raw`
[data-vega-theme="webgal"] {
  --vega-stage-background: #000;
  --vega-surface: rgb(19 21 29 / 92%);
  --vega-panel: rgb(22 24 34 / 78%);
  --vega-text: #fff;
  --vega-muted: rgb(255 255 255 / 68%);
  --vega-accent: #8fc8ff;
  color: #fff;
  color-scheme: dark;
}

[data-vega-theme="webgal"] .vega-portable-dialogue {
  inset:0; border:0; background:transparent; padding:0;
  font-family:"WebgalUI",system-ui,sans-serif;
  text-shadow:none;
}
[data-vega-theme="webgal"] .vega-portable-dialogue::before {
  left:.9765625cqw; right:.9765625cqw; bottom:1.388889cqh; top:auto;
  width:auto; height:22.916667cqh; transform:none;
  border-radius:11.458333cqh 1.388889cqh 1.388889cqh 11.458333cqh;
  background:linear-gradient(#f5f7fa,#bdc6de);
}
[data-vega-theme="webgal"] .vega-portable-speaker {
  left:6.8359375cqw; bottom:23.472222cqh; top:auto;
  width:max-content; min-width:0; max-width:80%; height:5.555556cqh;
  padding:0 2em; border:.277778cqh solid rgb(255 255 255 / 75%);
  border-radius:2.777778cqh; background:#0b346e;
  box-shadow:.208333cqh .208333cqh .694444cqh rgb(100 100 100 / 50%);
  color:white; font-size:3.555556cqh; font-weight:bold; line-height:4.722222cqh;
}
[data-vega-theme="webgal"] .vega-portable-text {
  left:8.7890625cqw; right:2.9296875cqw; bottom:6.25cqh; top:auto;
  width:auto; height:16.277778cqh;
  font-size:calc(3.644444cqh * var(--vega-text-size,1)); font-weight:bold; line-height:2.2;
  letter-spacing:.2em; color:#0b346e;
  -webkit-text-stroke:.1em white; paint-order:stroke fill; text-shadow:none;
}
[data-vega-theme="webgal"] .vega-portable-dialogue[data-window="center"]::before {
  inset:40% 0 auto; height:20%; border-radius:0; background:rgb(0 0 0 / 70%);
}
[data-vega-theme="webgal"] .vega-portable-dialogue[data-window="center"] .vega-portable-text {
  top:50%; bottom:auto; left:50%; width:86%; height:20%;
  color:white; -webkit-text-stroke:0; transform:translate(-50%,-50%);
}

[data-vega-theme="webgal"] .vega-default-toolbar {
  right: 2.2%;
  bottom: 2.2%;
  left: auto;
  width: auto;
  border: 0;
  background: transparent;
  box-shadow: none;
}

[data-vega-theme="webgal"] .vega-shell__menu-toggle {
  top: 2.2%;
  right: 2.2%;
}
`,w=r=>r&&typeof r=="object"?r:{},b=(r,t=0)=>{const e=Number(r);return Number.isFinite(e)?e:t},M=(...r)=>r.map(t=>typeof t=="string"?t.trim():"").find(Boolean)??"",ze=r=>{const t=w(r.perform??r.payload),e=M(t.action,r.action,t.content,r.content,r.name,r.effect).toLowerCase();return{action:e==="cherryblossoms"||e==="cherry-blossoms"?"petals":e==="heavysnow"||e==="heavy_snow"?"heavy-snow":e,...M(t.target,r.targetName)?{target:M(t.target,r.targetName)}:{},...(t.value??r.value)!==void 0?{value:b(t.value??r.value)}:{},...Array.isArray(t.values)?{values:t.values.map(Number)}:{},...Object.keys(w(t.options)).length>0?{options:w(t.options)}:{},...(t.x??r.x)!==void 0?{x:b(t.x??r.x)}:{},...(t.y??r.y)!==void 0?{y:b(t.y??r.y)}:{},...(t.scale??r.scale)!==void 0?{scale:b(t.scale??r.scale,1)}:{},...(t.rotation??r.rotation)!==void 0?{rotation:b(t.rotation??r.rotation)}:{}}},K=async(r,t,e)=>{switch(r.action){case"rain":case"snow":case"heavy-snow":case"petals":if(!t.setScreenEffect)throw new Error("The renderer does not support screen effects");await t.setScreenEffect(`webgal/${r.action}`,{effectType:"webgal.weather",weather:r.action,options:r.options??{}},e);return;case"clear":for(const a of t.screenEffectKeys??[])a.startsWith("webgal/")&&(!r.target||a===`webgal/${r.target}`)&&t.clearScreenEffects?.(a);return;case"blur":{const a=Math.max(0,b(r.value));if(t.writeScreenTransform&&t.screenTransformChannels?.includes("blur")){const o=r.target||"bg-main",n=t.readScreenTransform?.(o);t.writeScreenTransform(o,{current:{...n?.current,blur:a},planned:{...n?.planned,blur:a}})}else r.target?await t.setCharacterDoF(r.target,a):await t.setBackgroundDoF(a);return}case"color-matrix":case"clear-color-matrix":{const a=r.action==="color-matrix",o=r.values??[];if(a&&(o.length!==20||o.some(n=>!Number.isFinite(n))))throw new TypeError("A color matrix must contain 20 finite values");if(t.writeSceneTransform&&t.screenTransformChannels?.includes("colorMatrixEnabled")){const n=r.target||"stage-main",i=t.readSceneTransform?.(n),s={colorMatrixEnabled:Number(a),...a?Object.fromEntries(o.map((c,f)=>[`colorMatrix${f}`,c])):{}};t.writeSceneTransform(n,{current:{...i?.current,...s},planned:{...i?.planned,...s}})}else throw new Error("The active renderer does not support color matrices");return}case"transform":if(t.writeScreenTransform){const a={x:b(r.x),y:b(r.y),scaleX:b(r.scale,1),scaleY:b(r.scale,1),rotation:b(r.rotation)*Math.PI/180};t.writeScreenTransform("stage-main",{current:a,planned:a})}else throw new Error("The active renderer does not support screen transforms");return;default:throw new RangeError(`Unsupported WebGAL Pixi action: ${r.action}`)}},Re=r=>async(t,e,a)=>{if(r==="figure-diff"){const u=M(t.targetName),h=M(t.imageRef);if(!u||!h)return;if(!e.SceneRoot.replaceCharacterImage)throw new Error("The renderer does not support portrait replacement");e.SceneRoot.isCharacterShowing(u)?await e.SceneRoot.replaceCharacterImage(u,h,a):await e.SceneRoot.placeCharacter(t,b(t.positionType,5),e.Model.shouldShortCut?0:.3,!1);return}if(r==="dialogue-portrait"){w(e.state.talk).portraitRef=M(t.portraitRef);return}if(r==="set-transform"||r==="set-temp-animation"){const u=M(t.targetName)||"0";if(typeof t.sourceIdentity=="string"){const v=w(e.state.pluginState),y=w(v["haneoka.webgal-runtime"]),C=w(y.sources),x=C[u]!==t.sourceIdentity;if(e.state.pluginState={...v,"haneoka.webgal-runtime":{...y,sources:{...C,[u]:t.sourceIdentity}}},t.forgetSource===!0||(x&&Ce(e.SceneRoot,u),!e.SceneRoot.writeScreenTransform&&!Object.keys(w(t.transform)).length))return}const h={duration:e.Model.shouldShortCut?0:Math.max(0,b(t.durationMs,500)),ease:M(t.ease),writeDefault:t.writeDefault===!0,ignoreDefault:t.ignoreDefault===!0,parallel:t.parallel===!0,keep:t.keep===!0,animationVersion:t.animationVersion===2?2:1,relative:t.relative!==!1,inherit:t.inherit!==!1,relativeCalc:w(t.relativeCalc),...a?{signal:a}:{}};if(r==="set-transform")await Te(e.SceneRoot,u,w(t.transform),h,e.state,e.Model.shouldShortCut);else{const v=Array.isArray(t.frames)?t.frames.map(y=>w(y)):[];await J(e.SceneRoot,u,v,h,e.state,e.Model.shouldShortCut)}return}if(r==="pixi-init"){await K({action:"clear"},e.SceneRoot);return}if(r==="pixi-perform"){await K(ze(t),e.SceneRoot,a);return}if(r==="stage-transform"){if(e.SceneRoot.writeScreenTransform){const u={x:b(t.x),y:b(t.y),scaleX:b(t.scale,1),scaleY:b(t.scale,1),rotation:b(t.rotation)*Math.PI/180};e.SceneRoot.writeScreenTransform("stage-main",{current:u,planned:u});return}throw new Error("The active renderer does not support screen transforms")}const o=w(e.state.pluginState),n=w(o["haneoka.webgal-runtime"]),i=M(t.content,t.value),s=typeof t.enabled=="boolean"?t.enabled:i!==""&&i!=="none",c=w(e.state.talk),f=w(n.film),m=w(e.state.video),d=f.enabled===!0?f.previousPresentation:c.presentation??"default",l=f.enabled===!0?f.previousVideoLayout:m.layout??null;s?c.presentation=q:c.presentation===q&&(c.presentation=d??"default");const g=s?{viewport:[0,.12,1,.76],fit:"contain",background:"#000000"}:l&&typeof l=="object"?l:void 0;m.layout=g,e.SceneRoot.setVideoLayout?.(g),e.state.pluginState={...o,"haneoka.webgal-runtime":{...n,film:{enabled:s,preset:s?i:"",previousPresentation:d,previousVideoLayout:l}}}},Ie=(r={})=>{const t=r.enableTheme!==!1,e=r.enableCommands!==!1,a=r.enableUi??e;if(!t&&!e&&!a)throw new TypeError("The WebGAL compatibility plugin must enable at least one contribution");return oe({manifest:{id:"haneoka.webgal-runtime",name:"Vega WebGAL Compatibility",version:"0.1.0",apiVersion:1,description:"WebGAL commands, stock effects and game theme for the shared Vega stage",capabilities:[...t?["theme"]:[],...e?["commands","effect"]:[],...a?["ui-slot"]:[]]},setup(o){if(a&&(o.contribute("ui-slot",{id:"webgal.film",slot:"stage-overlay",hostKind:"web",mount:ve}),o.contribute("ui-slot",{id:"webgal.intro",slot:"stage-overlay",hostKind:"web",mount:he})),t&&o.contribute("theme",{id:Ae,name:"WebGAL",default:!0,cssText:Me,tokens:{surface:"#13151d",text:"#ffffff",accent:"#8fc8ff"}}),!!e){o.provide(ie,Se),o.contribute("effect",de);for(const n of le){const{action:i}=n;o.registerCommand({name:"commandName"in n?n.commandName:n.name,schemaVersion:"schemaVersion"in n?n.schemaVersion:1,execute:i==="intro"?me:Re(i),replaySafe:!0,...i==="figure-diff"?{enumerateCommandResources:s=>typeof s.imageRef=="string"&&s.imageRef?[{source:s.imageRef,kind:"texture"}]:[]}:{},...i==="dialogue-portrait"?{enumerateCommandResources:s=>typeof s.portraitRef=="string"&&s.portraitRef?[{source:s.portraitRef,kind:"texture"}]:[]}:{},...i==="intro"?{enumerateCommandResources:s=>typeof s.backgroundRef=="string"&&s.backgroundRef?[{source:s.backgroundRef,kind:"texture"}]:[]}:{},...i==="film-mode"&&a?{enumerateCommandResources:s=>s.enabled!==!1&&(s.enabled===!0||M(s.content,s.value)!==""&&M(s.content,s.value)!=="none")?[{source:pe,kind:"font",font:{family:Y,format:"woff2"}}]:[]}:{}})}}}})};export{le as WEBGAL_COMMAND_DEFINITIONS,Ne as WEBGAL_COMMAND_OWNER,We as WEBGAL_COMMAND_TYPES,Ae as WEBGAL_COMPATIBILITY_THEME,qe as WEBGAL_RUNTIME_REQUIREMENT,Me as WEBGAL_THEME_CSS,D as WEBGAL_TRANSFORM_DEFAULTS,Ie as createWebGalCompatibilityPlugin,K as executeWebGalPerform,Ve as normalizeWebGalAnimation,se as prepareTransformTimeline,H as transformValues};
