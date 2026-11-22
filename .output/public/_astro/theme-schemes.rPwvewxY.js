/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t){return t<0?-1:t===0?0:1}function et(t,e,r){return(1-r)*t+r*e}function Ot(t,e,r){return r<t?t:r>e?e:r}function ct(t,e,r){return r<t?t:r>e?e:r}function At(t){return t=t%360,t<0&&(t=t+360),t}function W(t){return t=t%360,t<0&&(t=t+360),t}function dt(t,e){const r=t[0]*e[0][0]+t[1]*e[0][1]+t[2]*e[0][2],n=t[0]*e[1][0]+t[1]*e[1][1]+t[2]*e[1][2],o=t[0]*e[2][0]+t[1]*e[2][1]+t[2]*e[2][2];return[r,n,o]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],St=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Bt=[95.047,100,108.883];function pt(t,e,r){return(255<<24|(t&255)<<16|(e&255)<<8|r&255)>>>0}function Dt(t){const e=Z(t[0]),r=Z(t[1]),n=Z(t[2]);return pt(e,r,n)}function yt(t){return t>>16&255}function bt(t){return t>>8&255}function Pt(t){return t&255}function Et(t,e,r){const n=St,o=n[0][0]*t+n[0][1]*e+n[0][2]*r,i=n[1][0]*t+n[1][1]*e+n[1][2]*r,s=n[2][0]*t+n[2][1]*e+n[2][2]*r,c=Z(o),u=Z(i),f=Z(s);return pt(c,u,f)}function Ht(t){const e=U(yt(t)),r=U(bt(t)),n=U(Pt(t));return dt([e,r,n],Ft)}function Vt(t){const e=U(yt(t)),r=U(bt(t)),n=U(Pt(t)),o=Ft,i=o[0][0]*e+o[0][1]*r+o[0][2]*n,s=o[1][0]*e+o[1][1]*r+o[1][2]*n,c=o[2][0]*e+o[2][1]*r+o[2][2]*n,u=Bt,f=i/u[0],l=s/u[1],p=c/u[2],y=rt(f),P=rt(l),d=rt(p),m=116*P-16,M=500*(y-P),A=200*(P-d);return[m,M,A]}function zt(t){const e=j(t),r=Z(e);return pt(r,r,r)}function Tt(t){const e=Ht(t)[1];return 116*rt(e/100)-16}function j(t){return 100*_t((t+16)/116)}function gt(t){return rt(t/100)*116-16}function U(t){const e=t/255;return e<=.040449936?e/12.92*100:Math.pow((e+.055)/1.055,2.4)*100}function Z(t){const e=t/100;let r=0;return e<=.0031308?r=e*12.92:r=1.055*Math.pow(e,1/2.4)-.055,Ot(0,255,Math.round(r*255))}function Nt(){return Bt}function rt(t){const e=.008856451679035631,r=24389/27;return t>e?Math.pow(t,1/3):(r*t+16)/116}function _t(t){const e=.008856451679035631,r=24389/27,n=t*t*t;return n>e?n:(116*t-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{static make(e=Nt(),r=200/Math.PI*j(50)/100,n=50,o=2,i=!1){const s=e,c=s[0]*.401288+s[1]*.650173+s[2]*-.051461,u=s[0]*-.250268+s[1]*1.204414+s[2]*.045854,f=s[0]*-.002079+s[1]*.048952+s[2]*.953127,l=.8+o/10,p=l>=.9?et(.59,.69,(l-.9)*10):et(.525,.59,(l-.8)*10);let y=i?1:l*(1-1/3.6*Math.exp((-r-42)/92));y=y>1?1:y<0?0:y;const P=l,d=[y*(100/c)+1-y,y*(100/u)+1-y,y*(100/f)+1-y],m=1/(5*r+1),M=m*m*m*m,A=1-M,D=M*r+.1*A*A*Math.cbrt(5*r),k=j(n)/e[1],x=1.48+Math.sqrt(k),C=.725/Math.pow(k,.2),R=C,T=[Math.pow(D*d[0]*c/100,.42),Math.pow(D*d[1]*u/100,.42),Math.pow(D*d[2]*f/100,.42)],I=[400*T[0]/(T[0]+27.13),400*T[1]/(T[1]+27.13),400*T[2]/(T[2]+27.13)],O=(2*I[0]+I[1]+.05*I[2])*C;return new _(k,O,C,R,p,P,d,D,Math.pow(D,.25),x)}constructor(e,r,n,o,i,s,c,u,f,l){this.n=e,this.aw=r,this.nbb=n,this.ncb=o,this.c=i,this.nc=s,this.rgbD=c,this.fl=u,this.fLRoot=f,this.z=l}}_.DEFAULT=_.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,r,n,o,i,s,c,u,f){this.hue=e,this.chroma=r,this.j=n,this.q=o,this.m=i,this.s=s,this.jstar=c,this.astar=u,this.bstar=f}distance(e){const r=this.jstar-e.jstar,n=this.astar-e.astar,o=this.bstar-e.bstar,i=Math.sqrt(r*r+n*n+o*o);return 1.41*Math.pow(i,.63)}static fromInt(e){return V.fromIntInViewingConditions(e,_.DEFAULT)}static fromIntInViewingConditions(e,r){const n=(e&16711680)>>16,o=(e&65280)>>8,i=e&255,s=U(n),c=U(o),u=U(i),f=.41233895*s+.35762064*c+.18051042*u,l=.2126*s+.7152*c+.0722*u,p=.01932141*s+.11916382*c+.95034478*u,y=.401288*f+.650173*l-.051461*p,P=-.250268*f+1.204414*l+.045854*p,d=-.002079*f+.048952*l+.953127*p,m=r.rgbD[0]*y,M=r.rgbD[1]*P,A=r.rgbD[2]*d,D=Math.pow(r.fl*Math.abs(m)/100,.42),k=Math.pow(r.fl*Math.abs(M)/100,.42),x=Math.pow(r.fl*Math.abs(A)/100,.42),C=E(m)*400*D/(D+27.13),R=E(M)*400*k/(k+27.13),T=E(A)*400*x/(x+27.13),I=(11*C+-12*R+T)/11,O=(C+R-2*T)/9,B=(20*C+20*R+21*T)/20,q=(40*C+20*R+T)/20,N=Math.atan2(O,I)*180/Math.PI,z=N<0?N+360:N>=360?N-360:N,at=z*Math.PI/180,ot=q*r.nbb,K=100*Math.pow(ot/r.aw,r.c*r.z),st=4/r.c*Math.sqrt(K/100)*(r.aw+4)*r.fLRoot,ht=z<20.14?z+360:z,lt=.25*(Math.cos(ht*Math.PI/180+2)+3.8),mt=5e4/13*lt*r.nc*r.ncb*Math.sqrt(I*I+O*O)/(B+.305),it=Math.pow(mt,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Mt=it*Math.sqrt(K/100),kt=Mt*r.fLRoot,It=50*Math.sqrt(it*r.c/(r.aw+4)),xt=(1+100*.007)*K/(1+.007*K),Ct=1/.0228*Math.log(1+.0228*kt),Rt=Ct*Math.cos(at),Lt=Ct*Math.sin(at);return new V(z,Mt,K,st,kt,It,xt,Rt,Lt)}static fromJch(e,r,n){return V.fromJchInViewingConditions(e,r,n,_.DEFAULT)}static fromJchInViewingConditions(e,r,n,o){const i=4/o.c*Math.sqrt(e/100)*(o.aw+4)*o.fLRoot,s=r*o.fLRoot,c=r/Math.sqrt(e/100),u=50*Math.sqrt(c*o.c/(o.aw+4)),f=n*Math.PI/180,l=(1+100*.007)*e/(1+.007*e),p=1/.0228*Math.log(1+.0228*s),y=p*Math.cos(f),P=p*Math.sin(f);return new V(n,r,e,i,s,u,l,y,P)}static fromUcs(e,r,n){return V.fromUcsInViewingConditions(e,r,n,_.DEFAULT)}static fromUcsInViewingConditions(e,r,n,o){const i=r,s=n,c=Math.sqrt(i*i+s*s),f=(Math.exp(c*.0228)-1)/.0228/o.fLRoot;let l=Math.atan2(s,i)*(180/Math.PI);l<0&&(l+=360);const p=e/(1-(e-100)*.007);return V.fromJchInViewingConditions(p,f,l,o)}toInt(){return this.viewed(_.DEFAULT)}viewed(e){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),o=this.hue*Math.PI/180,i=.25*(Math.cos(o+2)+3.8),s=e.aw*Math.pow(this.j/100,1/e.c/e.z),c=i*(5e4/13)*e.nc*e.ncb,u=s/e.nbb,f=Math.sin(o),l=Math.cos(o),p=23*(u+.305)*n/(23*c+11*n*l+108*n*f),y=p*l,P=p*f,d=(460*u+451*y+288*P)/1403,m=(460*u-891*y-261*P)/1403,M=(460*u-220*y-6300*P)/1403,A=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),D=E(d)*(100/e.fl)*Math.pow(A,1/.42),k=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),x=E(m)*(100/e.fl)*Math.pow(k,1/.42),C=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),R=E(M)*(100/e.fl)*Math.pow(C,1/.42),T=D/e.rgbD[0],I=x/e.rgbD[1],O=R/e.rgbD[2],B=1.86206786*T-1.01125463*I+.14918677*O,q=.38752654*T+.62144744*I-.00897398*O,G=-.0158415*T-.03412294*I+1.04996444*O;return Et(B,q,G)}static fromXyzInViewingConditions(e,r,n,o){const i=.401288*e+.650173*r-.051461*n,s=-.250268*e+1.204414*r+.045854*n,c=-.002079*e+.048952*r+.953127*n,u=o.rgbD[0]*i,f=o.rgbD[1]*s,l=o.rgbD[2]*c,p=Math.pow(o.fl*Math.abs(u)/100,.42),y=Math.pow(o.fl*Math.abs(f)/100,.42),P=Math.pow(o.fl*Math.abs(l)/100,.42),d=E(u)*400*p/(p+27.13),m=E(f)*400*y/(y+27.13),M=E(l)*400*P/(P+27.13),A=(11*d+-12*m+M)/11,D=(d+m-2*M)/9,k=(20*d+20*m+21*M)/20,x=(40*d+20*m+M)/20,R=Math.atan2(D,A)*180/Math.PI,T=R<0?R+360:R>=360?R-360:R,I=T*Math.PI/180,O=x*o.nbb,B=100*Math.pow(O/o.aw,o.c*o.z),q=4/o.c*Math.sqrt(B/100)*(o.aw+4)*o.fLRoot,G=T<20.14?T+360:T,N=1/4*(Math.cos(G*Math.PI/180+2)+3.8),at=5e4/13*N*o.nc*o.ncb*Math.sqrt(A*A+D*D)/(k+.305),ot=Math.pow(at,.9)*Math.pow(1.64-Math.pow(.29,o.n),.73),K=ot*Math.sqrt(B/100),st=K*o.fLRoot,ht=50*Math.sqrt(ot*o.c/(o.aw+4)),lt=(1+100*.007)*B/(1+.007*B),ft=Math.log(1+.0228*st)/.0228,mt=ft*Math.cos(I),it=ft*Math.sin(I);return new V(T,K,B,q,st,ht,lt,mt,it)}xyzInViewingConditions(e){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),o=this.hue*Math.PI/180,i=.25*(Math.cos(o+2)+3.8),s=e.aw*Math.pow(this.j/100,1/e.c/e.z),c=i*(5e4/13)*e.nc*e.ncb,u=s/e.nbb,f=Math.sin(o),l=Math.cos(o),p=23*(u+.305)*n/(23*c+11*n*l+108*n*f),y=p*l,P=p*f,d=(460*u+451*y+288*P)/1403,m=(460*u-891*y-261*P)/1403,M=(460*u-220*y-6300*P)/1403,A=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),D=E(d)*(100/e.fl)*Math.pow(A,1/.42),k=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),x=E(m)*(100/e.fl)*Math.pow(k,1/.42),C=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),R=E(M)*(100/e.fl)*Math.pow(C,1/.42),T=D/e.rgbD[0],I=x/e.rgbD[1],O=R/e.rgbD[2],B=1.86206786*T-1.01125463*I+.14918677*O,q=.38752654*T+.62144744*I-.00897398*O,G=-.0158415*T-.03412294*I+1.04996444*O;return[B,q,G]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{static sanitizeRadians(e){return(e+Math.PI*8)%(Math.PI*2)}static trueDelinearized(e){const r=e/100;let n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(e){const r=Math.pow(Math.abs(e),.42);return E(e)*400*r/(r+27.13)}static hueOf(e){const r=dt(e,g.SCALED_DISCOUNT_FROM_LINRGB),n=g.chromaticAdaptation(r[0]),o=g.chromaticAdaptation(r[1]),i=g.chromaticAdaptation(r[2]),s=(11*n+-12*o+i)/11,c=(n+o-2*i)/9;return Math.atan2(c,s)}static areInCyclicOrder(e,r,n){const o=g.sanitizeRadians(r-e),i=g.sanitizeRadians(n-e);return o<i}static intercept(e,r,n){return(r-e)/(n-e)}static lerpPoint(e,r,n){return[e[0]+(n[0]-e[0])*r,e[1]+(n[1]-e[1])*r,e[2]+(n[2]-e[2])*r]}static setCoordinate(e,r,n,o){const i=g.intercept(e[o],r,n[o]);return g.lerpPoint(e,i,n)}static isBounded(e){return 0<=e&&e<=100}static nthVertex(e,r){const n=g.Y_FROM_LINRGB[0],o=g.Y_FROM_LINRGB[1],i=g.Y_FROM_LINRGB[2],s=r%4<=1?0:100,c=r%2===0?0:100;if(r<4){const u=s,f=c,l=(e-u*o-f*i)/n;return g.isBounded(l)?[l,u,f]:[-1,-1,-1]}else if(r<8){const u=s,f=c,l=(e-f*n-u*i)/o;return g.isBounded(l)?[f,l,u]:[-1,-1,-1]}else{const u=s,f=c,l=(e-u*n-f*o)/i;return g.isBounded(l)?[u,f,l]:[-1,-1,-1]}}static bisectToSegment(e,r){let n=[-1,-1,-1],o=n,i=0,s=0,c=!1,u=!0;for(let f=0;f<12;f++){const l=g.nthVertex(e,f);if(l[0]<0)continue;const p=g.hueOf(l);if(!c){n=l,o=l,i=p,s=p,c=!0;continue}(u||g.areInCyclicOrder(i,p,s))&&(u=!1,g.areInCyclicOrder(i,r,p)?(o=l,s=p):(n=l,i=p))}return[n,o]}static midpoint(e,r){return[(e[0]+r[0])/2,(e[1]+r[1])/2,(e[2]+r[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,r){const n=g.bisectToSegment(e,r);let o=n[0],i=g.hueOf(o),s=n[1];for(let c=0;c<3;c++)if(o[c]!==s[c]){let u=-1,f=255;o[c]<s[c]?(u=g.criticalPlaneBelow(g.trueDelinearized(o[c])),f=g.criticalPlaneAbove(g.trueDelinearized(s[c]))):(u=g.criticalPlaneAbove(g.trueDelinearized(o[c])),f=g.criticalPlaneBelow(g.trueDelinearized(s[c])));for(let l=0;l<8&&!(Math.abs(f-u)<=1);l++){const p=Math.floor((u+f)/2),y=g.CRITICAL_PLANES[p],P=g.setCoordinate(o,y,s,c),d=g.hueOf(P);g.areInCyclicOrder(i,r,d)?(s=P,f=p):(o=P,i=d,u=p)}}return g.midpoint(o,s)}static inverseChromaticAdaptation(e){const r=Math.abs(e),n=Math.max(0,27.13*r/(400-r));return E(e)*Math.pow(n,1/.42)}static findResultByJ(e,r,n){let o=Math.sqrt(n)*11;const i=_.DEFAULT,s=1/Math.pow(1.64-Math.pow(.29,i.n),.73),u=.25*(Math.cos(e+2)+3.8)*(5e4/13)*i.nc*i.ncb,f=Math.sin(e),l=Math.cos(e);for(let p=0;p<5;p++){const y=o/100,P=r===0||o===0?0:r/Math.sqrt(y),d=Math.pow(P*s,1/.9),M=i.aw*Math.pow(y,1/i.c/i.z)/i.nbb,A=23*(M+.305)*d/(23*u+11*d*l+108*d*f),D=A*l,k=A*f,x=(460*M+451*D+288*k)/1403,C=(460*M-891*D-261*k)/1403,R=(460*M-220*D-6300*k)/1403,T=g.inverseChromaticAdaptation(x),I=g.inverseChromaticAdaptation(C),O=g.inverseChromaticAdaptation(R),B=dt([T,I,O],g.LINRGB_FROM_SCALED_DISCOUNT);if(B[0]<0||B[1]<0||B[2]<0)return 0;const q=g.Y_FROM_LINRGB[0],G=g.Y_FROM_LINRGB[1],N=g.Y_FROM_LINRGB[2],z=q*B[0]+G*B[1]+N*B[2];if(z<=0)return 0;if(p===4||Math.abs(z-n)<.002)return B[0]>100.01||B[1]>100.01||B[2]>100.01?0:Dt(B);o=o-(z-n)*o/(2*z)}return 0}static solveToInt(e,r,n){if(r<1e-4||n<1e-4||n>99.9999)return zt(n);e=W(e);const o=e/180*Math.PI,i=j(n),s=g.findResultByJ(o,r,i);if(s!==0)return s;const c=g.bisectToLimit(i,o);return Dt(c)}static solveToCam(e,r,n){return V.fromInt(g.solveToInt(e,r,n))}}g.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];g.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];g.Y_FROM_LINRGB=[.2126,.7152,.0722];g.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{static from(e,r,n){return new S(g.solveToInt(e,r,n))}static fromInt(e){return new S(e)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(g.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(g.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(g.solveToInt(this.internalHue,this.internalChroma,e))}constructor(e){this.argb=e;const r=V.fromInt(e);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Tt(e),this.argb=e}setInternalState(e){const r=V.fromInt(e);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Tt(e),this.argb=e}inViewingConditions(e){const n=V.fromInt(this.toInt()).xyzInViewingConditions(e),o=V.fromXyzInViewingConditions(n[0],n[1],n[2],_.make());return S.from(o.hue,o.chroma,gt(n[1]))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static ratioOfTones(e,r){return e=ct(0,100,e),r=ct(0,100,r),L.ratioOfYs(j(e),j(r))}static ratioOfYs(e,r){const n=e>r?e:r,o=n===r?e:r;return(n+5)/(o+5)}static lighter(e,r){if(e<0||e>100)return-1;const n=j(e),o=r*(n+5)-5,i=L.ratioOfYs(o,n),s=Math.abs(i-r);if(i<r&&s>.04)return-1;const c=gt(o)+.4;return c<0||c>100?-1:c}static darker(e,r){if(e<0||e>100)return-1;const n=j(e),o=(n+5)/r-5,i=L.ratioOfYs(n,o),s=Math.abs(i-r);if(i<r&&s>.04)return-1;const c=gt(o)-.4;return c<0||c>100?-1:c}static lighterUnsafe(e,r){const n=L.lighter(e,r);return n<0?100:n}static darkerUnsafe(e,r){const n=L.darker(e,r);return n<0?0:n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{static isDisliked(e){const r=Math.round(e.hue)>=90&&Math.round(e.hue)<=111,n=Math.round(e.chroma)>16,o=Math.round(e.tone)<65;return r&&n&&o}static fixIfDisliked(e){return ut.isDisliked(e)?S.from(e.hue,e.chroma,70):e}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{static fromPalette(e){return new h(e.name??"",e.palette,e.tone,e.isBackground??!1,e.background,e.secondBackground,e.contrastCurve,e.toneDeltaPair)}constructor(e,r,n,o,i,s,c,u){if(this.name=e,this.palette=r,this.tone=n,this.isBackground=o,this.background=i,this.secondBackground=s,this.contrastCurve=c,this.toneDeltaPair=u,this.hctCache=new Map,!i&&s)throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);if(!i&&c)throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);if(i&&!c)throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(e){return this.getHct(e).toInt()}getHct(e){const r=this.hctCache.get(e);if(r!=null)return r;const n=this.getTone(e),o=this.palette(e).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(e,o),o}getTone(e){const r=e.contrastLevel<0;if(this.toneDeltaPair){const n=this.toneDeltaPair(e),o=n.roleA,i=n.roleB,s=n.delta,c=n.polarity,u=n.stayTogether,l=this.background(e).getTone(e),p=c==="nearer"||c==="lighter"&&!e.isDark||c==="darker"&&e.isDark,y=p?o:i,P=p?i:o,d=this.name===y.name,m=e.isDark?1:-1,M=y.contrastCurve.get(e.contrastLevel),A=P.contrastCurve.get(e.contrastLevel),D=y.tone(e);let k=L.ratioOfTones(l,D)>=M?D:h.foregroundTone(l,M);const x=P.tone(e);let C=L.ratioOfTones(l,x)>=A?x:h.foregroundTone(l,A);return r&&(k=h.foregroundTone(l,M),C=h.foregroundTone(l,A)),(C-k)*m>=s||(C=ct(0,100,k+s*m),(C-k)*m>=s||(k=ct(0,100,C-s*m))),50<=k&&k<60?m>0?(k=60,C=Math.max(C,k+s*m)):(k=49,C=Math.min(C,k+s*m)):50<=C&&C<60&&(u?m>0?(k=60,C=Math.max(C,k+s*m)):(k=49,C=Math.min(C,k+s*m)):m>0?C=60:C=49),d?k:C}else{let n=this.tone(e);if(this.background==null)return n;const o=this.background(e).getTone(e),i=this.contrastCurve.get(e.contrastLevel);if(L.ratioOfTones(o,n)>=i||(n=h.foregroundTone(o,i)),r&&(n=h.foregroundTone(o,i)),this.isBackground&&50<=n&&n<60&&(L.ratioOfTones(49,o)>=i?n=49:n=60),this.secondBackground){const[s,c]=[this.background,this.secondBackground],[u,f]=[s(e).getTone(e),c(e).getTone(e)],[l,p]=[Math.max(u,f),Math.min(u,f)];if(L.ratioOfTones(l,n)>=i&&L.ratioOfTones(p,n)>=i)return n;const y=L.lighter(l,i),P=L.darker(p,i),d=[];return y!==-1&&d.push(y),P!==-1&&d.push(P),h.tonePrefersLightForeground(u)||h.tonePrefersLightForeground(f)?y<0?100:y:d.length===1?d[0]:P<0?0:P}return n}}static foregroundTone(e,r){const n=L.lighterUnsafe(e,r),o=L.darkerUnsafe(e,r),i=L.ratioOfTones(n,e),s=L.ratioOfTones(o,e);if(h.tonePrefersLightForeground(e)){const u=Math.abs(i-s)<.1&&i<r&&s<r;return i>=r||i>=s||u?n:o}else return s>=r||s>=i?o:n}static tonePrefersLightForeground(e){return Math.round(e)<60}static toneAllowsLightForeground(e){return Math.round(e)<=49}static enableLightForeground(e){return h.tonePrefersLightForeground(e)&&!h.toneAllowsLightForeground(e)?49:e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{static fromInt(e){const r=S.fromInt(e);return w.fromHct(r)}static fromHct(e){return new w(e.hue,e.chroma,e)}static fromHueAndChroma(e,r){const n=new qt(e,r).create();return new w(e,r,n)}constructor(e,r,n){this.hue=e,this.chroma=r,this.keyColor=n,this.cache=new Map}tone(e){let r=this.cache.get(e);return r===void 0&&(r=S.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,r)),r}getHct(e){return S.fromInt(this.tone(e))}}class qt{constructor(e,r){this.hue=e,this.requestedChroma=r,this.chromaCache=new Map,this.maxChromaValue=200}create(){let o=0,i=100;for(;o<i;){const s=Math.floor((o+i)/2),c=this.maxChroma(s)<this.maxChroma(s+1);if(this.maxChroma(s)>=this.requestedChroma-.01)if(Math.abs(o-50)<Math.abs(i-50))i=s;else{if(o===s)return S.from(this.hue,this.requestedChroma,o);o=s}else c?o=s+1:i=s}return S.from(this.hue,this.requestedChroma,o)}maxChroma(e){if(this.chromaCache.has(e))return this.chromaCache.get(e);const r=S.from(this.hue,this.maxChromaValue,e).chroma;return this.chromaCache.set(e,r),r}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,r,n,o){this.low=e,this.normal=r,this.medium=n,this.high=o}get(e){return e<=-1?this.low:e<0?et(this.low,this.normal,(e- -1)/1):e<.5?et(this.normal,this.medium,(e-0)/.5):e<1?et(this.medium,this.high,(e-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,r,n,o,i){this.roleA=e,this.roleB=r,this.delta=n,this.polarity=o,this.stayTogether=i}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.MONOCHROME=0]="MONOCHROME",t[t.NEUTRAL=1]="NEUTRAL",t[t.TONAL_SPOT=2]="TONAL_SPOT",t[t.VIBRANT=3]="VIBRANT",t[t.EXPRESSIVE=4]="EXPRESSIVE",t[t.FIDELITY=5]="FIDELITY",t[t.CONTENT=6]="CONTENT",t[t.RAINBOW=7]="RAINBOW",t[t.FRUIT_SALAD=8]="FRUIT_SALAD"})(X||(X={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return t.variant===X.FIDELITY||t.variant===X.CONTENT}function F(t){return t.variant===X.MONOCHROME}function Yt(t,e,r,n){let o=r,i=S.from(t,e,r);if(i.chroma<e){let s=i.chroma;for(;i.chroma<e;){o+=n?-1:1;const c=S.from(t,e,o);if(s>c.chroma||Math.abs(c.chroma-e)<.4)break;const u=Math.abs(c.chroma-e),f=Math.abs(i.chroma-e);u<f&&(i=c),s=Math.max(s,c.chroma)}}return o}class a{static highestSurface(e){return e.isDark?a.surfaceBright:a.surfaceDim}}a.contentAccentToneDelta=15;a.primaryPaletteKeyColor=h.fromPalette({name:"primary_palette_key_color",palette:t=>t.primaryPalette,tone:t=>t.primaryPalette.keyColor.tone});a.secondaryPaletteKeyColor=h.fromPalette({name:"secondary_palette_key_color",palette:t=>t.secondaryPalette,tone:t=>t.secondaryPalette.keyColor.tone});a.tertiaryPaletteKeyColor=h.fromPalette({name:"tertiary_palette_key_color",palette:t=>t.tertiaryPalette,tone:t=>t.tertiaryPalette.keyColor.tone});a.neutralPaletteKeyColor=h.fromPalette({name:"neutral_palette_key_color",palette:t=>t.neutralPalette,tone:t=>t.neutralPalette.keyColor.tone});a.neutralVariantPaletteKeyColor=h.fromPalette({name:"neutral_variant_palette_key_color",palette:t=>t.neutralVariantPalette,tone:t=>t.neutralVariantPalette.keyColor.tone});a.background=h.fromPalette({name:"background",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0});a.onBackground=h.fromPalette({name:"on_background",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>a.background,contrastCurve:new b(3,3,4.5,7)});a.surface=h.fromPalette({name:"surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0});a.surfaceDim=h.fromPalette({name:"surface_dim",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:new b(87,87,80,75).get(t.contrastLevel),isBackground:!0});a.surfaceBright=h.fromPalette({name:"surface_bright",palette:t=>t.neutralPalette,tone:t=>t.isDark?new b(24,24,29,34).get(t.contrastLevel):98,isBackground:!0});a.surfaceContainerLowest=h.fromPalette({name:"surface_container_lowest",palette:t=>t.neutralPalette,tone:t=>t.isDark?new b(4,4,2,0).get(t.contrastLevel):100,isBackground:!0});a.surfaceContainerLow=h.fromPalette({name:"surface_container_low",palette:t=>t.neutralPalette,tone:t=>t.isDark?new b(10,10,11,12).get(t.contrastLevel):new b(96,96,96,95).get(t.contrastLevel),isBackground:!0});a.surfaceContainer=h.fromPalette({name:"surface_container",palette:t=>t.neutralPalette,tone:t=>t.isDark?new b(12,12,16,20).get(t.contrastLevel):new b(94,94,92,90).get(t.contrastLevel),isBackground:!0});a.surfaceContainerHigh=h.fromPalette({name:"surface_container_high",palette:t=>t.neutralPalette,tone:t=>t.isDark?new b(17,17,21,25).get(t.contrastLevel):new b(92,92,88,85).get(t.contrastLevel),isBackground:!0});a.surfaceContainerHighest=h.fromPalette({name:"surface_container_highest",palette:t=>t.neutralPalette,tone:t=>t.isDark?new b(22,22,26,30).get(t.contrastLevel):new b(90,90,84,80).get(t.contrastLevel),isBackground:!0});a.onSurface=h.fromPalette({name:"on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>a.highestSurface(t),contrastCurve:new b(4.5,7,11,21)});a.surfaceVariant=h.fromPalette({name:"surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:90,isBackground:!0});a.onSurfaceVariant=h.fromPalette({name:"on_surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?80:30,background:t=>a.highestSurface(t),contrastCurve:new b(3,4.5,7,11)});a.inverseSurface=h.fromPalette({name:"inverse_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:20});a.inverseOnSurface=h.fromPalette({name:"inverse_on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?20:95,background:t=>a.inverseSurface,contrastCurve:new b(4.5,7,11,21)});a.outline=h.fromPalette({name:"outline",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?60:50,background:t=>a.highestSurface(t),contrastCurve:new b(1.5,3,4.5,7)});a.outlineVariant=h.fromPalette({name:"outline_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:80,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5)});a.shadow=h.fromPalette({name:"shadow",palette:t=>t.neutralPalette,tone:t=>0});a.scrim=h.fromPalette({name:"scrim",palette:t=>t.neutralPalette,tone:t=>0});a.surfaceTint=h.fromPalette({name:"surface_tint",palette:t=>t.primaryPalette,tone:t=>t.isDark?80:40,isBackground:!0});a.primary=h.fromPalette({name:"primary",palette:t=>t.primaryPalette,tone:t=>F(t)?t.isDark?100:0:t.isDark?80:40,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(3,4.5,7,7),toneDeltaPair:t=>new H(a.primaryContainer,a.primary,10,"nearer",!1)});a.onPrimary=h.fromPalette({name:"on_primary",palette:t=>t.primaryPalette,tone:t=>F(t)?t.isDark?10:90:t.isDark?20:100,background:t=>a.primary,contrastCurve:new b(4.5,7,11,21)});a.primaryContainer=h.fromPalette({name:"primary_container",palette:t=>t.primaryPalette,tone:t=>Q(t)?t.sourceColorHct.tone:F(t)?t.isDark?85:25:t.isDark?30:90,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.primaryContainer,a.primary,10,"nearer",!1)});a.onPrimaryContainer=h.fromPalette({name:"on_primary_container",palette:t=>t.primaryPalette,tone:t=>Q(t)?h.foregroundTone(a.primaryContainer.tone(t),4.5):F(t)?t.isDark?0:100:t.isDark?90:30,background:t=>a.primaryContainer,contrastCurve:new b(3,4.5,7,11)});a.inversePrimary=h.fromPalette({name:"inverse_primary",palette:t=>t.primaryPalette,tone:t=>t.isDark?40:80,background:t=>a.inverseSurface,contrastCurve:new b(3,4.5,7,7)});a.secondary=h.fromPalette({name:"secondary",palette:t=>t.secondaryPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(3,4.5,7,7),toneDeltaPair:t=>new H(a.secondaryContainer,a.secondary,10,"nearer",!1)});a.onSecondary=h.fromPalette({name:"on_secondary",palette:t=>t.secondaryPalette,tone:t=>F(t)?t.isDark?10:100:t.isDark?20:100,background:t=>a.secondary,contrastCurve:new b(4.5,7,11,21)});a.secondaryContainer=h.fromPalette({name:"secondary_container",palette:t=>t.secondaryPalette,tone:t=>{const e=t.isDark?30:90;return F(t)?t.isDark?30:85:Q(t)?Yt(t.secondaryPalette.hue,t.secondaryPalette.chroma,e,!t.isDark):e},isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.secondaryContainer,a.secondary,10,"nearer",!1)});a.onSecondaryContainer=h.fromPalette({name:"on_secondary_container",palette:t=>t.secondaryPalette,tone:t=>F(t)?t.isDark?90:10:Q(t)?h.foregroundTone(a.secondaryContainer.tone(t),4.5):t.isDark?90:30,background:t=>a.secondaryContainer,contrastCurve:new b(3,4.5,7,11)});a.tertiary=h.fromPalette({name:"tertiary",palette:t=>t.tertiaryPalette,tone:t=>F(t)?t.isDark?90:25:t.isDark?80:40,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(3,4.5,7,7),toneDeltaPair:t=>new H(a.tertiaryContainer,a.tertiary,10,"nearer",!1)});a.onTertiary=h.fromPalette({name:"on_tertiary",palette:t=>t.tertiaryPalette,tone:t=>F(t)?t.isDark?10:90:t.isDark?20:100,background:t=>a.tertiary,contrastCurve:new b(4.5,7,11,21)});a.tertiaryContainer=h.fromPalette({name:"tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>{if(F(t))return t.isDark?60:49;if(!Q(t))return t.isDark?30:90;const e=t.tertiaryPalette.getHct(t.sourceColorHct.tone);return ut.fixIfDisliked(e).tone},isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.tertiaryContainer,a.tertiary,10,"nearer",!1)});a.onTertiaryContainer=h.fromPalette({name:"on_tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>F(t)?t.isDark?0:100:Q(t)?h.foregroundTone(a.tertiaryContainer.tone(t),4.5):t.isDark?90:30,background:t=>a.tertiaryContainer,contrastCurve:new b(3,4.5,7,11)});a.error=h.fromPalette({name:"error",palette:t=>t.errorPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(3,4.5,7,7),toneDeltaPair:t=>new H(a.errorContainer,a.error,10,"nearer",!1)});a.onError=h.fromPalette({name:"on_error",palette:t=>t.errorPalette,tone:t=>t.isDark?20:100,background:t=>a.error,contrastCurve:new b(4.5,7,11,21)});a.errorContainer=h.fromPalette({name:"error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?30:90,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.errorContainer,a.error,10,"nearer",!1)});a.onErrorContainer=h.fromPalette({name:"on_error_container",palette:t=>t.errorPalette,tone:t=>F(t)?t.isDark?90:10:t.isDark?90:30,background:t=>a.errorContainer,contrastCurve:new b(3,4.5,7,11)});a.primaryFixed=h.fromPalette({name:"primary_fixed",palette:t=>t.primaryPalette,tone:t=>F(t)?40:90,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.primaryFixed,a.primaryFixedDim,10,"lighter",!0)});a.primaryFixedDim=h.fromPalette({name:"primary_fixed_dim",palette:t=>t.primaryPalette,tone:t=>F(t)?30:80,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.primaryFixed,a.primaryFixedDim,10,"lighter",!0)});a.onPrimaryFixed=h.fromPalette({name:"on_primary_fixed",palette:t=>t.primaryPalette,tone:t=>F(t)?100:10,background:t=>a.primaryFixedDim,secondBackground:t=>a.primaryFixed,contrastCurve:new b(4.5,7,11,21)});a.onPrimaryFixedVariant=h.fromPalette({name:"on_primary_fixed_variant",palette:t=>t.primaryPalette,tone:t=>F(t)?90:30,background:t=>a.primaryFixedDim,secondBackground:t=>a.primaryFixed,contrastCurve:new b(3,4.5,7,11)});a.secondaryFixed=h.fromPalette({name:"secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>F(t)?80:90,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.secondaryFixed,a.secondaryFixedDim,10,"lighter",!0)});a.secondaryFixedDim=h.fromPalette({name:"secondary_fixed_dim",palette:t=>t.secondaryPalette,tone:t=>F(t)?70:80,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.secondaryFixed,a.secondaryFixedDim,10,"lighter",!0)});a.onSecondaryFixed=h.fromPalette({name:"on_secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>10,background:t=>a.secondaryFixedDim,secondBackground:t=>a.secondaryFixed,contrastCurve:new b(4.5,7,11,21)});a.onSecondaryFixedVariant=h.fromPalette({name:"on_secondary_fixed_variant",palette:t=>t.secondaryPalette,tone:t=>F(t)?25:30,background:t=>a.secondaryFixedDim,secondBackground:t=>a.secondaryFixed,contrastCurve:new b(3,4.5,7,11)});a.tertiaryFixed=h.fromPalette({name:"tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>F(t)?40:90,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.tertiaryFixed,a.tertiaryFixedDim,10,"lighter",!0)});a.tertiaryFixedDim=h.fromPalette({name:"tertiary_fixed_dim",palette:t=>t.tertiaryPalette,tone:t=>F(t)?30:80,isBackground:!0,background:t=>a.highestSurface(t),contrastCurve:new b(1,1,3,4.5),toneDeltaPair:t=>new H(a.tertiaryFixed,a.tertiaryFixedDim,10,"lighter",!0)});a.onTertiaryFixed=h.fromPalette({name:"on_tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>F(t)?100:10,background:t=>a.tertiaryFixedDim,secondBackground:t=>a.tertiaryFixed,contrastCurve:new b(4.5,7,11,21)});a.onTertiaryFixedVariant=h.fromPalette({name:"on_tertiary_fixed_variant",palette:t=>t.tertiaryPalette,tone:t=>F(t)?90:30,background:t=>a.tertiaryFixedDim,secondBackground:t=>a.tertiaryFixed,contrastCurve:new b(3,4.5,7,11)});/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.sourceColorArgb=e.sourceColorArgb,this.variant=e.variant,this.contrastLevel=e.contrastLevel,this.isDark=e.isDark,this.sourceColorHct=S.fromInt(e.sourceColorArgb),this.primaryPalette=e.primaryPalette,this.secondaryPalette=e.secondaryPalette,this.tertiaryPalette=e.tertiaryPalette,this.neutralPalette=e.neutralPalette,this.neutralVariantPalette=e.neutralVariantPalette,this.errorPalette=w.fromHueAndChroma(25,84)}static getRotatedHue(e,r,n){const o=e.hue;if(r.length!==n.length)throw new Error(`mismatch between hue length ${r.length} & rotations ${n.length}`);if(n.length===1)return W(e.hue+n[0]);const i=r.length;for(let s=0;s<=i-2;s++){const c=r[s],u=r[s+1];if(c<o&&o<u)return W(o+n[s])}return o}getArgb(e){return e.getArgb(this)}getHct(e){return e.getHct(this)}get primaryPaletteKeyColor(){return this.getArgb(a.primaryPaletteKeyColor)}get secondaryPaletteKeyColor(){return this.getArgb(a.secondaryPaletteKeyColor)}get tertiaryPaletteKeyColor(){return this.getArgb(a.tertiaryPaletteKeyColor)}get neutralPaletteKeyColor(){return this.getArgb(a.neutralPaletteKeyColor)}get neutralVariantPaletteKeyColor(){return this.getArgb(a.neutralVariantPaletteKeyColor)}get background(){return this.getArgb(a.background)}get onBackground(){return this.getArgb(a.onBackground)}get surface(){return this.getArgb(a.surface)}get surfaceDim(){return this.getArgb(a.surfaceDim)}get surfaceBright(){return this.getArgb(a.surfaceBright)}get surfaceContainerLowest(){return this.getArgb(a.surfaceContainerLowest)}get surfaceContainerLow(){return this.getArgb(a.surfaceContainerLow)}get surfaceContainer(){return this.getArgb(a.surfaceContainer)}get surfaceContainerHigh(){return this.getArgb(a.surfaceContainerHigh)}get surfaceContainerHighest(){return this.getArgb(a.surfaceContainerHighest)}get onSurface(){return this.getArgb(a.onSurface)}get surfaceVariant(){return this.getArgb(a.surfaceVariant)}get onSurfaceVariant(){return this.getArgb(a.onSurfaceVariant)}get inverseSurface(){return this.getArgb(a.inverseSurface)}get inverseOnSurface(){return this.getArgb(a.inverseOnSurface)}get outline(){return this.getArgb(a.outline)}get outlineVariant(){return this.getArgb(a.outlineVariant)}get shadow(){return this.getArgb(a.shadow)}get scrim(){return this.getArgb(a.scrim)}get surfaceTint(){return this.getArgb(a.surfaceTint)}get primary(){return this.getArgb(a.primary)}get onPrimary(){return this.getArgb(a.onPrimary)}get primaryContainer(){return this.getArgb(a.primaryContainer)}get onPrimaryContainer(){return this.getArgb(a.onPrimaryContainer)}get inversePrimary(){return this.getArgb(a.inversePrimary)}get secondary(){return this.getArgb(a.secondary)}get onSecondary(){return this.getArgb(a.onSecondary)}get secondaryContainer(){return this.getArgb(a.secondaryContainer)}get onSecondaryContainer(){return this.getArgb(a.onSecondaryContainer)}get tertiary(){return this.getArgb(a.tertiary)}get onTertiary(){return this.getArgb(a.onTertiary)}get tertiaryContainer(){return this.getArgb(a.tertiaryContainer)}get onTertiaryContainer(){return this.getArgb(a.onTertiaryContainer)}get error(){return this.getArgb(a.error)}get onError(){return this.getArgb(a.onError)}get errorContainer(){return this.getArgb(a.errorContainer)}get onErrorContainer(){return this.getArgb(a.onErrorContainer)}get primaryFixed(){return this.getArgb(a.primaryFixed)}get primaryFixedDim(){return this.getArgb(a.primaryFixedDim)}get onPrimaryFixed(){return this.getArgb(a.onPrimaryFixed)}get onPrimaryFixedVariant(){return this.getArgb(a.onPrimaryFixedVariant)}get secondaryFixed(){return this.getArgb(a.secondaryFixed)}get secondaryFixedDim(){return this.getArgb(a.secondaryFixedDim)}get onSecondaryFixed(){return this.getArgb(a.onSecondaryFixed)}get onSecondaryFixedVariant(){return this.getArgb(a.onSecondaryFixedVariant)}get tertiaryFixed(){return this.getArgb(a.tertiaryFixed)}get tertiaryFixedDim(){return this.getArgb(a.tertiaryFixedDim)}get onTertiaryFixed(){return this.getArgb(a.onTertiaryFixed)}get onTertiaryFixedVariant(){return this.getArgb(a.onTertiaryFixedVariant)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.input=e,this.hctsByTempCache=[],this.hctsByHueCache=[],this.tempsByHctCache=new Map,this.inputRelativeTemperatureCache=-1,this.complementCache=null}get hctsByTemp(){if(this.hctsByTempCache.length>0)return this.hctsByTempCache;const e=this.hctsByHue.concat([this.input]),r=this.tempsByHct;return e.sort((n,o)=>r.get(n)-r.get(o)),this.hctsByTempCache=e,e}get warmest(){return this.hctsByTemp[this.hctsByTemp.length-1]}get coldest(){return this.hctsByTemp[0]}analogous(e=5,r=12){const n=Math.round(this.input.hue),o=this.hctsByHue[n];let i=this.relativeTemperature(o);const s=[o];let c=0;for(let d=0;d<360;d++){const m=At(n+d),M=this.hctsByHue[m],A=this.relativeTemperature(M),D=Math.abs(A-i);i=A,c+=D}let u=1;const f=c/r;let l=0;for(i=this.relativeTemperature(o);s.length<r;){const d=At(n+u),m=this.hctsByHue[d],M=this.relativeTemperature(m),A=Math.abs(M-i);l+=A;const D=s.length*f;let k=l>=D,x=1;for(;k&&s.length<r;){s.push(m);const C=(s.length+x)*f;k=l>=C,x++}if(i=M,u++,u>360){for(;s.length<r;)s.push(m);break}}const p=[this.input],y=Math.floor((e-1)/2);for(let d=1;d<y+1;d++){let m=0-d;for(;m<0;)m=s.length+m;m>=s.length&&(m=m%s.length),p.splice(0,0,s[m])}const P=e-y-1;for(let d=1;d<P+1;d++){let m=d;for(;m<0;)m=s.length+m;m>=s.length&&(m=m%s.length),p.push(s[m])}return p}get complement(){if(this.complementCache!=null)return this.complementCache;const e=this.coldest.hue,r=this.tempsByHct.get(this.coldest),n=this.warmest.hue,i=this.tempsByHct.get(this.warmest)-r,s=nt.isBetween(this.input.hue,e,n),c=s?n:e,u=s?e:n,f=1;let l=1e3,p=this.hctsByHue[Math.round(this.input.hue)];const y=1-this.inputRelativeTemperature;for(let P=0;P<=360;P+=1){const d=W(c+f*P);if(!nt.isBetween(d,c,u))continue;const m=this.hctsByHue[Math.round(d)],M=(this.tempsByHct.get(m)-r)/i,A=Math.abs(y-M);A<l&&(l=A,p=m)}return this.complementCache=p,this.complementCache}relativeTemperature(e){const r=this.tempsByHct.get(this.warmest)-this.tempsByHct.get(this.coldest),n=this.tempsByHct.get(e)-this.tempsByHct.get(this.coldest);return r===0?.5:n/r}get inputRelativeTemperature(){return this.inputRelativeTemperatureCache>=0?this.inputRelativeTemperatureCache:(this.inputRelativeTemperatureCache=this.relativeTemperature(this.input),this.inputRelativeTemperatureCache)}get tempsByHct(){if(this.tempsByHctCache.size>0)return this.tempsByHctCache;const e=this.hctsByHue.concat([this.input]),r=new Map;for(const n of e)r.set(n,nt.rawTemperature(n));return this.tempsByHctCache=r,r}get hctsByHue(){if(this.hctsByHueCache.length>0)return this.hctsByHueCache;const e=[];for(let r=0;r<=360;r+=1){const n=S.from(r,this.input.chroma,this.input.tone);e.push(n)}return this.hctsByHueCache=e,this.hctsByHueCache}static isBetween(e,r,n){return r<n?r<=e&&e<=n:r<=e||e<=n}static rawTemperature(e){const r=Vt(e.toInt()),n=W(Math.atan2(r[2],r[1])*180/Math.PI),o=Math.sqrt(r[1]*r[1]+r[2]*r[2]);return-.5+.02*Math.pow(o,1.07)*Math.cos(W(n-50)*Math.PI/180)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $ extends J{constructor(e,r,n){super({sourceColorArgb:e.toInt(),variant:X.EXPRESSIVE,contrastLevel:n,isDark:r,primaryPalette:w.fromHueAndChroma(W(e.hue+240),40),secondaryPalette:w.fromHueAndChroma(J.getRotatedHue(e,$.hues,$.secondaryRotations),24),tertiaryPalette:w.fromHueAndChroma(J.getRotatedHue(e,$.hues,$.tertiaryRotations),32),neutralPalette:w.fromHueAndChroma(e.hue+15,8),neutralVariantPalette:w.fromHueAndChroma(e.hue+15,12)})}}$.hues=[0,21,51,121,151,191,271,321,360];$.secondaryRotations=[45,95,45,20,45,90,45,45,45];$.tertiaryRotations=[120,120,20,45,20,15,20,120,120];/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends J{constructor(e,r,n){super({sourceColorArgb:e.toInt(),variant:X.FIDELITY,contrastLevel:n,isDark:r,primaryPalette:w.fromHueAndChroma(e.hue,e.chroma),secondaryPalette:w.fromHueAndChroma(e.hue,Math.max(e.chroma-32,e.chroma*.5)),tertiaryPalette:w.fromInt(ut.fixIfDisliked(new nt(e).complement).toInt()),neutralPalette:w.fromHueAndChroma(e.hue,e.chroma/8),neutralVariantPalette:w.fromHueAndChroma(e.hue,e.chroma/8+4)})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends J{constructor(e,r,n){super({sourceColorArgb:e.toInt(),variant:X.VIBRANT,contrastLevel:n,isDark:r,primaryPalette:w.fromHueAndChroma(e.hue,200),secondaryPalette:w.fromHueAndChroma(J.getRotatedHue(e,v.hues,v.secondaryRotations),24),tertiaryPalette:w.fromHueAndChroma(J.getRotatedHue(e,v.hues,v.tertiaryRotations),32),neutralPalette:w.fromHueAndChroma(e.hue,10),neutralVariantPalette:w.fromHueAndChroma(e.hue,12)})}}v.hues=[0,41,61,101,131,181,251,301,360];v.secondaryRotations=[18,15,10,12,15,18,15,12,12];v.tertiaryRotations=[35,30,20,25,30,35,30,25,25];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t){const e=yt(t),r=bt(t),n=Pt(t),o=[e.toString(16),r.toString(16),n.toString(16)];for(const[i,s]of o.entries())s.length===1&&(o[i]="0"+s);return"#"+o.join("")}function Kt(t){t=t.replace("#","");const e=t.length===3,r=t.length===6,n=t.length===8;if(!e&&!r&&!n)throw new Error("unexpected hex "+t);let o=0,i=0,s=0;return e?(o=Y(t.slice(0,1).repeat(2)),i=Y(t.slice(1,2).repeat(2)),s=Y(t.slice(2,3).repeat(2))):r?(o=Y(t.slice(0,2)),i=Y(t.slice(2,4)),s=Y(t.slice(4,6))):n&&(o=Y(t.slice(2,4)),i=Y(t.slice(4,6)),s=Y(t.slice(6,8))),(255<<24|(o&255)<<16|(i&255)<<8|s&255)>>>0}function Y(t){return parseInt(t,16)}const jt=2,$t=["primary","onPrimary","primaryContainer","onPrimaryContainer","secondary","onSecondary","secondaryContainer","onSecondaryContainer","tertiary","onTertiary","tertiaryContainer","onTertiaryContainer","error","onError","errorContainer","onErrorContainer","primaryFixed","primaryFixedDim","onPrimaryFixed","onPrimaryFixedVariant","secondaryFixed","secondaryFixedDim","onSecondaryFixed","onSecondaryFixedVariant","tertiaryFixed","tertiaryFixedDim","onTertiaryFixed","onTertiaryFixedVariant","background","onBackground","surface","surfaceDim","surfaceBright","surfaceContainerLowest","surfaceContainerLow","surfaceContainer","surfaceContainerHigh","surfaceContainerHighest","onSurface","surfaceVariant","onSurfaceVariant","outline","outlineVariant","inverseSurface","inverseOnSurface","inversePrimary","surfaceTint","shadow","scrim"],vt=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),tt=t=>S.fromInt(Kt(t));function Jt(t,e){const r=tt(t.primary);return new J({sourceColorArgb:r.toInt(),variant:jt,contrastLevel:0,isDark:e,primaryPalette:w.fromHueAndChroma(r.hue,Math.max(r.chroma,48)),secondaryPalette:w.fromHueAndChroma(tt(t.secondary).hue,20),tertiaryPalette:w.fromHueAndChroma(tt(t.tertiary).hue,Math.max(tt(t.tertiary).chroma,40)),neutralPalette:w.fromHueAndChroma(r.hue,6),neutralVariantPalette:w.fromHueAndChroma(r.hue,10)})}const wt=t=>$t.map(e=>`--md-sys-color-${vt(e)}:${Gt(a[e].getArgb(t))};`).join("");function Xt(t,e){const r=o=>typeof e=="string"?new Ut(tt(e),o,0):Jt(e,o),n=`:root[data-seed="${t}"]`;return`${n}{${wt(r(!1))}}${n}[data-theme="dark"],${n}[data-ui-resolved-theme="dark"]{color-scheme:dark;${wt(r(!0))}}`}export{Xt as seedCss};
