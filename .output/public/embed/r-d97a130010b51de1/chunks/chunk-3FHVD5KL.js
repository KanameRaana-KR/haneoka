import{Ba as u,Cd as f,Qa as m,_d as g,ac as v,af as d,bg as x,lf as b,md as c,o,od as h,ra as l}from"./chunk-4Z5J53AR.js";var w=String.raw`
vec3 tap(vec2 p) {
  vec2 size=spatialInputOutput.xy;
  return SPATIAL_SAMPLE(image,(clamp(p,vec2(0.0),size-1.0)+0.5)/size).rgb;
}
float luma(vec3 c) { return c.b*0.5+(c.r*0.5+c.g); }
void direction(inout vec2 dir,inout float len,float w,
  float a,float b,float c,float d,float e) {
  float dx=d-b,dy=e-a;
  dir+=vec2(dx,dy)*w;
  float lx=clamp(abs(dx)/max(max(abs(d-c),abs(c-b)),1e-20),0.0,1.0);
  float ly=clamp(abs(dy)/max(max(abs(e-c),abs(c-a)),1e-20),0.0,1.0);
  len+=(lx*lx+ly*ly)*w;
}
void accumulate(inout vec3 colour,inout float weight,vec2 offset,
  vec2 dir,vec2 stretch,float lobe,float clipping,vec3 c) {
  vec2 v=vec2(dot(offset,dir),dot(offset,vec2(-dir.y,dir.x)))*stretch;
  float d2=min(dot(v,v),clipping);
  float b=0.4*d2-1.0,a=lobe*d2-1.0;
  float w=(1.5625*b*b-0.5625)*a*a;
  colour+=c*w;weight+=w;
}
vec3 spatialEasu(vec2 spatialUv) {
  vec2 pp=floor(spatialUv*spatialInputOutput.zw)*spatialInputOutput.xy/spatialInputOutput.zw
    +0.5*spatialInputOutput.xy/spatialInputOutput.zw-0.5;
  vec2 fp=floor(pp);pp-=fp;
  vec3 b=tap(fp+vec2(0,-1)),c=tap(fp+vec2(1,-1));
  vec3 e=tap(fp+vec2(-1,0)),f=tap(fp),g=tap(fp+vec2(1,0)),h=tap(fp+vec2(2,0));
  vec3 i=tap(fp+vec2(-1,1)),j=tap(fp+vec2(0,1)),k=tap(fp+vec2(1,1)),l=tap(fp+vec2(2,1));
  vec3 n=tap(fp+vec2(0,2)),o=tap(fp+vec2(1,2));
  vec2 dir=vec2(0.0);float len=0.0;
  direction(dir,len,(1.0-pp.x)*(1.0-pp.y),luma(b),luma(e),luma(f),luma(g),luma(j));
  direction(dir,len,pp.x*(1.0-pp.y),luma(c),luma(f),luma(g),luma(h),luma(k));
  direction(dir,len,(1.0-pp.x)*pp.y,luma(f),luma(i),luma(j),luma(k),luma(n));
  direction(dir,len,pp.x*pp.y,luma(g),luma(j),luma(k),luma(l),luma(o));
  float norm=dot(dir,dir);
  dir=norm<1.0/32768.0?vec2(1.0,0.0):dir*inversesqrt(norm);
  len*=0.5;len*=len;
  float diagonal=dot(dir,dir)/max(abs(dir.x),abs(dir.y));
  vec2 stretch=vec2(1.0+(diagonal-1.0)*len,1.0-0.5*len);
  float lobe=0.5+(0.25-0.04-0.5)*len,clipping=1.0/lobe;
  vec3 sum=vec3(0.0);float weight=0.0;
  accumulate(sum,weight,vec2(0,-1)-pp,dir,stretch,lobe,clipping,b);
  accumulate(sum,weight,vec2(1,-1)-pp,dir,stretch,lobe,clipping,c);
  accumulate(sum,weight,vec2(-1,1)-pp,dir,stretch,lobe,clipping,i);
  accumulate(sum,weight,vec2(0,1)-pp,dir,stretch,lobe,clipping,j);
  accumulate(sum,weight,vec2(0,0)-pp,dir,stretch,lobe,clipping,f);
  accumulate(sum,weight,vec2(-1,0)-pp,dir,stretch,lobe,clipping,e);
  accumulate(sum,weight,vec2(1,1)-pp,dir,stretch,lobe,clipping,k);
  accumulate(sum,weight,vec2(2,1)-pp,dir,stretch,lobe,clipping,l);
  accumulate(sum,weight,vec2(2,0)-pp,dir,stretch,lobe,clipping,h);
  accumulate(sum,weight,vec2(1,0)-pp,dir,stretch,lobe,clipping,g);
  accumulate(sum,weight,vec2(1,2)-pp,dir,stretch,lobe,clipping,o);
  accumulate(sum,weight,vec2(0,2)-pp,dir,stretch,lobe,clipping,n);
  vec3 low=min(min(f,g),min(j,k)),high=max(max(f,g),max(j,k));
  return clamp(sum/weight,low,high);
}
`,y=String.raw`
vec3 tap(vec2 p) {
  vec2 size=spatialSizeSharpness.xy;
  return SPATIAL_SAMPLE(image,(clamp(p,vec2(0.0),size-1.0)+0.5)/size).rgb;
}
vec3 spatialRcas(vec2 spatialUv) {
  vec2 p=floor(spatialUv*spatialSizeSharpness.xy);
  vec3 b=tap(p+vec2(0,-1)),d=tap(p+vec2(-1,0)),e=tap(p),f=tap(p+vec2(1,0)),h=tap(p+vec2(0,1));
  vec3 lo=min(min(b,d),min(f,h)),hi=max(max(b,d),max(f,h));
  // Exact reciprocals with finite limits for constant black/white regions.
  vec3 hitMin=min(lo,e)/max(4.0*hi,vec3(1e-20));
  vec3 hitMax=(1.0-max(hi,e))/min(4.0*lo-4.0,vec3(-1e-20));
  vec3 lobes=max(-hitMin,hitMax);
  float lobe=max(-0.1875,min(max(lobes.r,max(lobes.g,lobes.b)),0.0))*spatialSizeSharpness.z;
  vec3 result=(lobe*(b+d+f+h)+e)/(4.0*lobe+1.0);
  return clamp(result,0.0,1.0);
}
`;var U=`varying vec2 vUv;
void main() { vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }`,O=`uniform sampler2D image; varying vec2 vUv;
void main() { gl_FragColor=vec4(clamp(texture2D(image,vUv).rgb,0.0,1.0),1.0); }`,E=`uniform sampler2D image; uniform vec4 spatialInputOutput;
varying vec2 vUv;
#define SPATIAL_SAMPLE texture2D
${w}
void main() { gl_FragColor=vec4(spatialEasu(vUv),1.0); }`,L=`uniform sampler2D image; uniform vec4 spatialSizeSharpness;
varying vec2 vUv;
#define SPATIAL_SAMPLE texture2D
${y}
void main() { gl_FragColor=vec4(spatialRcas(vUv),1.0); }`;function S(a){let e=new h(1,1,{type:u,format:m,depthBuffer:!1,stencilBuffer:!1,minFilter:l,magFilter:l,generateMipmaps:!1});return e.texture.name=a,e.texture.colorSpace=v,e}function n(a,e){return new b({vertexShader:U,fragmentShader:a,uniforms:e,depthTest:!1,depthWrite:!1,blending:o,transparent:!1,toneMapped:!1})}function _(a,e,t){if(![a,e,t].every(Number.isFinite)||a<1||e<1||t<1)throw new TypeError("Invalid spatial upscaling extent");return{width:Math.max(1,Math.round(a/t)),height:Math.max(1,Math.round(e/t))}}function z(a={}){let e=a.factor??1,t=a.sharpness??.8705505632961241;if(!Number.isFinite(e)||e<1||!Number.isFinite(t)||t<0||t>1)throw new TypeError("Invalid spatial upscaling configuration");return Object.freeze({factor:e,sharpness:t})}var M=class{input=S("spatial:gamma-input");easu=S("spatial:easu");scene=new f;camera=new x(-1,1,1,-1,0,1);geometry=new d(2,2);copy=n(O,{image:{value:null}});reconstruct=n(E,{image:{value:this.input.texture},spatialInputOutput:{value:new c}});sharpen=n(L,{image:{value:this.easu.texture},spatialSizeSharpness:{value:new c}});mesh=new g(this.geometry,this.copy);configuration=z();constructor(){this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}setConfiguration(e){this.configuration=z(e)}render(e,t,i,s,r=null){if(t===r||i<t.width||s<t.height)throw new TypeError("Invalid spatial source/output boundary");this.input.setSize(t.width,t.height),this.easu.setSize(i,s),this.reconstruct.uniforms.spatialInputOutput.value.set(t.width,t.height,i,s),this.sharpen.uniforms.spatialSizeSharpness.value.set(i,s,this.configuration.sharpness,0);let I=e.getRenderTarget(),T=e.autoClear,A=e.getScissorTest();e.autoClear=!1,e.setScissorTest(!1);let p=(F,C)=>{this.mesh.material=F,e.setRenderTarget(C),e.render(this.scene,this.camera)};try{this.copy.uniforms.image.value=t.texture,p(this.copy,this.input),p(this.reconstruct,this.easu),p(this.sharpen,r)}finally{e.setRenderTarget(I),e.setScissorTest(A),e.autoClear=T}}dispose(){this.input.dispose(),this.easu.dispose(),this.copy.dispose(),this.reconstruct.dispose(),this.sharpen.dispose(),this.geometry.dispose(),this.scene.clear()}};export{_ as a,z as b,M as c};
/*! For license information please see chunk-3FHVD5KL.js.LEGAL.txt */
