/*!
 * Zendure Dashboard Card v1.2.0
 * https://github.com/zarzak12/zendure-dashboard-card — MIT License
 *
 * Bundles GSAP 3.13.x
 * (c) Webflow, Inc. — https://gsap.com/community/standard-license/
 */
;(function (self) {
/*!
 * GSAP 3.13.0
 * https://gsap.com
 * 
 * @license Copyright 2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&ze}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Zt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Ot(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=dt.length,i=dt.slice(0);for(ct={},t=dt.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t){return!!(t._initted||t._startAt||t.add)}function oa(t,e,r,i){dt.length&&!L&&ma(),t.render(e,r,i||!!(L&&e<0&&na(t))),dt.length&&!L&&ma()}function pa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function qa(t){return t}function ra(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ua(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ua(t[r]||(t[r]={}),e[r]):e[r]);return t}function va(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function wa(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}($(t.keyframes)):ra;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function ya(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function za(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function Aa(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Ba(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Da(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Fa(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ha(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ia(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||U)||0))}function Ja(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ia(t),r._dirty||Ba(r,t)),t}function Ka(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ha(t.rawTime(),e),(!e._dur||Mt(0,e.totalDuration(),r)-e._tTime>U)&&e.render(r,!0)),Ba(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-U}}function La(e,r,i,n){return r.parent&&Aa(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),ya(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ka(e,r),e._ts<0&&Ja(e,e._tTime),e}function Ma(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Na(t,e,r,i,n){return Wt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(dt.push(t),t._lazy=[n,i],1):void 0:1}function Sa(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ja(t,t._tTime=t._tDur*s),t.parent&&Ia(t),r||Ba(t.parent,t),t}function Ta(t){return t instanceof Qt?Ba(t):Sa(t,t._dur)}function Wa(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Jt(r[0],u,r[1+o])}function Xa(t,e){return t||0===t?e(t):e}function Za(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function ab(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function db(r){return r=Ot(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Ot(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function eb(t){return t.sort(function(){return.5-Math.random()})}function fb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=Yt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=y[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,N])[1])){for(h=-N;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f<d&&f--}for(c=y[d]=[],i=T?Math.min(f,d)*w-.5:m%f,n=f===N?0:T?d*x/f-.5:m/f|0,l=N,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=b?Math.abs("y"===b?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&eb(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Za(p.amount||p.each)||0,_=_&&d<0?jt(_):_}return d=(c[t]-c.min)/c.max||0,ja(c.b+(_?_(d):d)*c.v)+c.u}}function gb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Za(e))}}function hb(h,e){var l,f,r=$(h);return!r&&v(h)&&(l=r=h.radius||N,h.values?(h=Ot(h.values),(f=!t(h[0]))&&(l*=l)):h=gb(h.increment)),Xa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=N,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Za(e)}:gb(h))}function ib(t,e,r,i){return Xa($(t)?!e:!0===r?!!(r=0):!i,function(){return $(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function mb(e,r,t){return Xa(t,function(t){return e[~~r(t)]})}function pb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+ib(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function sb(t,e,r){var i,n,a,s=t.labels,o=N;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function ub(t){return Aa(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&Pt(t,"onInterrupt"),t}function xb(t){if(t)if(t=!t.name&&t.default||t,x()||t.headless){var e=t.name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:ue,add:Vt,kill:de,modifier:he,rawVars:0},a={targetTest:0,get:0,getSetter:ie,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;ra(i,ra(va(t,n),a)),yt(i.prototype,yt(n,va(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(ze,i,ge)}else Ct.push(t)}function Ab(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Bb(e,r,i){var n,a,s,o,u,h,l,f,d,c,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:Dt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),Dt[e])p=Dt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=c=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=Ab(o+1/3,n,a),p[1]=Ab(o,n,a),p[2]=Ab(o-1/3,n,a);else p=e.match(tt)||Dt.transparent;p=p.map(Number)}return r&&!c&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(d=l-f,u=.5<h?d/(2-l-f):d/(l+f),o=l===n?(a-s)/d+(a<s?6:0):l===a?(s-n)/d+2:(n-a)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Cb(t){var r=[],i=[],n=-1;return t.split(zt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Db(t,e,r){var i,n,a,s,o="",u=(t+o).match(zt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Bb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Cb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(zt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(zt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Gb(t){var e,r=t.join(" ");if(zt.lastIndex=0,zt.test(r))return e=Et.test(r),t[1]=Db(t[1],e),t[0]=Db(t[0],e,Cb(t[1])),!0}function Pb(t){var e=(t+"").split("("),r=Lt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(pa)):Lt._CE&&It.test(t)?Lt._CE("",t):r}function Rb(t,e){for(var r,i=t._first;i;)i instanceof Qt?Rb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Rb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Tb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Lt[t]=ot[t]=a,Lt[n=t.toLowerCase()]=r,a)Lt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Lt[t+"."+e]=a[e]}),a}function Ub(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Vb(r,t,e){function Lm(t){return 1===t?1:i*Math.pow(2,-10*t)*K((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/q*(Math.asin(1/i)||0),s="out"===r?Lm:"in"===r?function(t){return 1-Lm(1-t)}:Ub(Lm);return n=q/n,s.config=function(t,e){return Vb(r,t,e)},s}function Wb(e,r){function Tm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Tm:"in"===e?function(t){return 1-Tm(1-t)}:Ub(Tm);return t.config=function(t){return Wb(e,t)},t}var F,L,l,I,h,n,a,i,o,f,d,c,p,_,m,g,b,M,k,O,A,C,D,z,E,B,j,Y,X={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Z={duration:.5,overwrite:!1,delay:0},N=1e8,U=1/N,q=2*Math.PI,V=q/4,W=0,G=Math.sqrt,H=Math.cos,K=Math.sin,J="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},$=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},dt=[],ct={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t=ja(t/e));return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=N?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*($(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Mt=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Ot=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?$(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||ab(t,1)?i.push.apply(i,Ot(t)):i.push(t)})||i}(t,i):ab(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},At=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Xa(n,function(t){return r+((t-e)/a*s||0)})},Pt=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&dt.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},Ct=[],St=255,Dt={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},zt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Dt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Et=/hsl[a]?\(/,Rt=(k=Date.now,O=500,A=33,C=k(),D=C,E=z=1e3/240,g={time:0,frame:0,tick:function tick(){Al(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=ze,(h.gsapVersions||(h.gsapVersions=[])).push(ze.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),Ct.forEach(xb)),m="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,p&&g.sleep(),_=m||function(t){return setTimeout(t,E-1e3*g.time+1|0)},c=1,Al(2))},sleep:function sleep(){(m?cancelAnimationFrame:clearTimeout)(p),c=0,_=T},lagSmoothing:function lagSmoothing(t,e){O=t||1/0,A=Math.min(e||33,O)},fps:function fps(t){z=1e3/(t||240),E=1e3*g.time+z},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),B[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=B.indexOf(t))&&B.splice(e,1)&&e<=M&&M--},_listeners:B=[]}),Ft=function _wake(){return!c&&Rt.wake()},Lt={},It=/^[\d.\-M][\d.\-,\s]/,Bt=/["']/g,jt=function _invertEase(e){return function(t){return 1-e(1-t)}},Yt=function _parseEase(t,e){return t&&(s(t)?t:Lt[t]||Pb(t))||e};function Al(t){var e,r,i,n,a=k()-D,s=!0===t;if((O<a||a<0)&&(C+=a-A),(0<(e=(i=(D+=a)-C)-E)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,E+=e+(z<=e?4:z-e),r=1),s||(p=_(Al)),r)for(M=0;M<B.length;M++)B[M](i,b,n,t)}function jn(t){return t<Y?j*t*t:t<.7272727272727273?j*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?j*(t-=2.25/2.75)*t+.9375:j*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Tb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn,Tb("Elastic",Vb("in"),Vb("out"),Vb()),j=7.5625,Y=1/2.75,Tb("Bounce",function(t){return 1-jn(1-t)},jn),Tb("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)}),Tb("Circ",function(t){return-(G(1-t*t)-1)}),Tb("Sine",function(t){return 1===t?1:1-H(t*V)}),Tb("Back",Wb("in"),Wb("out"),Wb()),Lt.SteppedEase=Lt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Mt(0,.99999999,t)|0)+n)*r}}},Z.ease=Lt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var Xt,Zt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ie},Nt=((Xt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Xt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Xt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Sa(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Xt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ja(this,t),!r._dp||r.parent||Ka(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&La(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===U||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),oa(this,t,e)),this},Xt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Fa(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Xt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):0<=this.rawTime()&&this._initted?1:0},Xt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Fa(this),e):this.duration()?Math.min(1,this._time/this._dur):0<this.rawTime()?1:0},Xt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},Xt.timeScale=function timeScale(t,e){if(!arguments.length)return this._rts===-U?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ha(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-U?0:this._rts,this.totalTime(Mt(-Math.abs(this._delay),this.totalDuration(),r),!1!==e),Ia(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},Xt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==U&&(this._tTime-=U)))),this):this._ps},Xt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||La(e,this,t-this._delay),this}return this._start},Xt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},Xt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ha(e.rawTime(t),this):this._tTime:this._tTime},Xt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,na(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},Xt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},Xt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ta(this)):-2===this._repeat?1/0:this._repeat},Xt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Ta(this),e?this.time(e):this}return this._rDelay},Xt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Xt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},Xt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e)),this._dur||(this._zTime=-U),this},Xt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Xt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Xt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Xt.resume=function resume(){return this.paused(!1)},Xt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-U:0)),this):this._rts<0},Xt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-U,this},Xt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-U))},Xt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Xt.then=function then(t){var i=this;return new Promise(function(e){function Eo(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:qa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Eo():i._prom=Eo})},Xt.kill=function kill(){ub(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Sa(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),c||Rt.wake()}ra(Nt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-U,_prom:0,_ps:!1,_rts:1});var Qt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&La(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Ma(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Wa(0,arguments,this),this},e.from=function from(t,e,r){return Wa(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Wa(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,wa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Jt(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return La(this,Jt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Jt(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,wa(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,wa(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(d=ja(v/o)))&&s===d&&(i=g,s--),g<i&&(i=g)),d=Tt(this._tTime,o),!_&&this._tTime&&d!==s&&this._tTime-d*o-this._dur<=0&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Pt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Rb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&v&&!e&&!d&&(Pt(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-U);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&na(n)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-U:U);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-U)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ia(this),this.render(t,e,r);this._onUpdate&&!e&&Pt(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||Aa(this,1),e||t<0&&!_||!v&&!_&&m||(Pt(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Nt)){if($(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=Jt.delayedCall(0,e)}return this!==e?La(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-N);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Jt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(t.parent===this&&za(this,t),t===this._recent&&(this._recent=this._last),Ba(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Jt.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,La(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&Aa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Ut!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Ot(e),s=this._first,o=t(r);s;)s instanceof Jt?la(s._targets,a)&&(o?(!Ut||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Jt.to(i,ra({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||U,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Sa(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ra({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),sb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),sb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+U)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Ba(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Ba(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=N;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,La(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Sa(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(oa(I,Ha(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=X.autoSleep||120;var e=I._first;if((!e||!e._ts)&&X.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Nt);ra(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});function bc(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Gt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||$(t)||J(t))return r(t)?Gt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Gt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new ge(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==d))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function hc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if($(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Ut,qt,Vt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var d,c=t[e],p="get"!==i?i:s(c)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,_=s(c)?l?re:te:$t;if(r(n)&&(~n.indexOf("random(")&&(n=pb(n)),"="===n.charAt(1)&&(!(d=ka(p,n)+(Za(p)||0))&&0!==d||(n=d))),!f||p!==n||qt)return isNaN(p*n)||""===n?(c||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ge(this._pt,t,e,0,1,oe,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=pb(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?ka(d,l)-d:parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||X.stringFilter,l)):(d=new ge(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof c?se:ne,0,_),l&&(d.fp=l),u&&d.modifier(u,this,t),this._pt=d)},Wt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.runBackwards,M=m.yoyoEase,k=m.keyframes,O=m.autoRevert,A=t._dur,P=t._startAt,C=t._targets,S=t.parent,D=S&&"nested"===S.data?S.vars.targets:C,z="auto"===t._overwrite&&!F,E=t.timeline;if(!E||k&&g||(g="none"),t._ease=Yt(g,Z.ease),t._yEase=M?jt(Yt(!0===M?g:M,Z.ease)):0,M&&t._yoyo&&!t._repeat&&(M=t._yEase,t._yEase=t._ease,t._ease=M),t._from=!E&&!!m.runBackwards,!E||k&&!m.stagger){if(p=(l=C[0]?fa(C[0]).harness:0)&&m[l.prop],i=va(m,ft),P&&(P._zTime<0&&P.progress(1),e<0&&x&&y&&!O?P.render(-1,!0):P.revert(x&&A?ht:ut),P._lazy=0),v){if(Aa(t._startAt=Jt.set(C,ra({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!P&&w(T),startAt:null,delay:0,onUpdate:b&&function(){return Pt(t,"onUpdate")},stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!O)&&t._startAt.revert(ht),y&&A&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(x&&A&&!P)if(e&&(y=!1),a=ra({overwrite:!1,data:"isFromStart",lazy:y&&!P&&w(T),immediateRender:y,stagger:0,parent:S},i),p&&(a[l.prop]=p),Aa(t._startAt=Jt.set(C,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,U,U);for(t._pt=t._ptCache=0,T=A&&w(T)||T&&!A,n=0;n<C.length;n++){if(h=(o=C[n])._gsap||ea(C)[n]._gsap,t._ptLookup[n]=d={},ct[h.id]&&dt.length&&ma(),c=D===C?n:D.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,c,D)&&(t._pt=s=new ge(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=bc(a,i,t,c,o,D))?f.priority&&(u=1):d[a]=s=Vt.call(t,o,a,"get",i[a],c,D,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),z&&t._pt&&(Ut=t,I.killTweensOf(o,d,t.globalTime(e)),_=!t.parent,Ut=0),t._pt&&T&&(ct[h.id]=1)}u&&_e(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,k&&e<=0&&E.render(N,!0,!0)},Gt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?pb(t):t},Ht=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Kt={};ha(Ht+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Kt[t]=1});var Jt=function(E){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,d,c,p=(a=E.call(this,n?r:wa(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,M=p.defaults,k=p.scrollTrigger,O=p.yoyoEase,A=r.parent||I,P=($(e)||J(e)?t(e[0]):"length"in r)?[e]:Ot(e);if(a._targets=P.length?ea(P):R("GSAP target "+e+" not found. https://gsap.com",!X.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Qt({data:"nested",defaults:M||{},targets:A&&"nested"===A.data?A.vars.targets:P})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=P.length,d=T&&fb(T),v(T))for(l in T)~Ht.indexOf(l)&&((c=c||{})[l]=T[l]);for(o=0;o<h;o++)(u=va(r,Kt)).stagger=0,O&&(u.yoyoEase=O),c&&yt(u,c),f=P[o],u.duration=+Gt(_,_assertThisInitialized(a),o,f,P),u.delay=(+Gt(m,_assertThisInitialized(a),o,f,P)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,d?d(o,f,P):0),s._ease=Lt.none;s.duration()?_=m=0:a.timeline=0}else if(x){wa(ra(s.vars.defaults,{ease:"none"})),s._ease=Yt(x.ease||r.ease||"none");var C,S,D,z=0;if($(x))x.forEach(function(t){return s.to(P,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||hc(l,x[l],u,x.easeEach);for(l in u)for(C=u[l].sort(function(t,e){return t.t-e.t}),o=z=0;o<C.length;o++)(D={ease:(S=C[o]).e,duration:(S.t-(o?C[o-1].t:0))/100*_})[l]=S.v,s.to(P,D,z),z+=D.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||F||(Ut=_assertThisInitialized(a),I.killTweensOf(P),Ut=0),La(A,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(A._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==A.data)&&(a._tTime=-U,a.render(Math.max(0,-m)||0)),k&&Ma(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,E);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=t<0,m=c-U<t&&!_?c:t<U?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_||this._lazy){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===c?(a=this._repeat,i=p):(a=~~(o=ja(m/s)))&&a===o?(i=p,a--):p<i&&(i=p),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===d&&!r&&this._initted&&a===o)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Rb(l,u),this.vars.repeatRefresh&&!u&&!this._lock&&i!==s&&this._initted&&(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Na(this,_?t:i,r,e,m))return this._tTime=0,this;if(!(d===this._time||r&&this.vars.repeatRefresh&&a!==o))return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),!d&&m&&!e&&!o&&(Pt(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Da(this,t,0,r),Pt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Pt(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Da(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||Aa(this,1),e||_&&!d||!(m||d||u)||(Pt(this,m===c?"onComplete":"onReverseComplete",!0),!this._prom||m<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Mt(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===U||!e&&t._zTime){if(!t._initted&&Na(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?U:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Da(t,e,0,!0),t._onUpdate&&!r&&Pt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Pt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&Aa(t,1),r||L||(Pt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),E.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i,n){c||Rt.wake(),this._ts||this.play();var a,s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Wt(this,s),a=this._ease(s/this._dur),function _updatePropTweens(t,e,r,i,n,a,s,o){var u,h,l,f,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d)for(d=t._ptCache[e]=[],l=t._ptLookup,f=t._targets.length;f--;){if((u=l[f][e])&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return qt=1,t.vars[e]="+=0",Wt(t,s),qt=0,o?R(e+" not eligible for reset"):1;d.push(u)}for(f=d.length;f--;)(u=(h=d[f])._pt||h).s=!i&&0!==i||n?u.s+(i||0)+a*u.c:i,u.c=r-u.s,h.e&&(h.e=ia(r)+Za(h.e)),h.b&&(h.b=u.s+Za(h.b))}(this,t,e,r,i,a,s,n)?this.resetTo(t,e,r,i,1):(Ja(this,0),this.parent||ya(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?ub(this):this.scrollTrigger&&this.scrollTrigger.kill(!!L),this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Ut&&!0!==Ut.vars.overwrite)._first||ub(this),this.parent&&i!==this.timeline.totalDuration()&&Sa(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,d=t?Ot(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),ub(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=c[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||za(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&ub(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Wa(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Wa(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Nt);ra(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){Jt[r]=function(){var t=new Qt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function pc(t,e,r){return t.setAttribute(e,r)}function xc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var $t=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ie=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?pc:$t},ne=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},oe=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},ue=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},he=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},de=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?za(this,i,"_pt"):i.dep||(e=1),i=r;return!e},_e=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ge=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=xc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ne,this.d=s||this,this.set=o||$t,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=Jt,ot.TimelineLite=ot.TimelineMax=Qt,I=new Qt({sortChildren:!1,defaults:Z,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),X.stringFilter=Gb;function Fc(t){return(be[t]||Me).map(function(t){return t()})}function Gc(){var t=Date.now(),o=[];2<t-Oe&&(Fc("matchMediaInit"),Te.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Fc("matchMediaRevert"),o.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Oe=t,Fc("matchMedia"))}var ve,Te=[],be={},Me=[],Oe=0,Ae=0,Pe=((ve=Context.prototype).add=function add(t,i,n){function Iw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=db(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Iw,t===s?Iw(a,function(t){return a.add(null,t)}):t?a[t]=Iw:Iw},ve.ignore=function ignore(t){var e=l;l=null,t(this),l=e},ve.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof Jt&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},ve.clear=function clear(){this._r.length=this.data.length=0},ve.kill=function kill(i,t){var n=this;if(i?function(){for(var t,e=n.getTweens(),r=n.data.length;r--;)"isFlip"===(t=n.data[r]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return e.splice(e.indexOf(t),1)}));for(e.map(function(t){return{g:t._dur||t._delay||t._sat&&!t._sat.vars.immediateRender?t.globalTime(0):-1/0,t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(i)}),r=n.data.length;r--;)(t=n.data[r])instanceof Qt?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof Jt||!t.revert||t.revert(i);n._r.forEach(function(t){return t(i,n)}),n.isReverted=!0}():this.data.forEach(function(t){return t.kill&&t.kill()}),this.clear(),t)for(var e=Te.length;e--;)Te[e].id===this.id&&Te.splice(e,1)},ve.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&db(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Ae++,t&&this.add(t)}var Ce,Se=((Ce=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(Te.indexOf(s)<0&&Te.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Gc):i.addEventListener("change",Gc));return a&&e(s,function(t){return s.add(null,t)}),this},Ce.revert=function revert(t){this.kill(t||{})},Ce.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t,l&&l.data.push(this)}var De={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return xb(t)})},timeline:function timeline(t){return new Qt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Ot(i)[0]);var a=fa(i||{}).get,s=e?qa:pa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Ot(r)).length){var n=r.map(function(t){return ze.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&ue(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function ay(t,e,r){return n.resetTo(i,t,e,r)}var r,n=ze.to(t,ra(((r={})[i]="+=0.1",r.paused=!0,r.stagger=0,r),e||{}));return ay.tween=n,ay},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Yt(t.ease,Z.ease)),ua(Z,t||{})},config:function config(t){return ua(X,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Ot(t),ra(e||{},a),r)},r&&(Qt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Lt[t]=Yt(e)},parseEase:function parseEase(t,e){return arguments.length?Yt(t,e):Lt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Qt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]||La(n,r,r._start-r._delay),r=i;return La(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Se(t)},matchMediaRefresh:function matchMediaRefresh(){return Te.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Gc()},addEventListener:function addEventListener(t,e){var r=be[t]||(be[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=be[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return $(e)?mb(e,wrap(0,e.length),t):Xa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return $(e)?mb(e,wrapYoyo(0,e.length-1),t):Xa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:fb,random:ib,snap:hb,normalize:function normalize(t,e,r){return At(t,e,0,1,r)},getUnit:Za,clamp:function clamp(e,r,t){return Xa(t,function(t){return Mt(e,r,t)})},splitColor:Bb,toArray:Ot,selector:db,mapRange:At,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Za(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),d={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if($(e)&&!$(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt($(e)?[]:{},e));if(!u){for(s in i)Vt.call(d,e,s,"get",i[s]);a=function func(t){return ue(t,d)||(f?e.p:e)}}}return Xa(t,a)},shuffle:eb},install:P,effects:_t,ticker:Rt,updateRoot:Qt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:ge,globals:S,Tween:Jt,Timeline:Qt,Animation:Nt,getCache:fa,_removeLinkedListItem:za,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return F=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return De[t]=Jt[t]}),Rt.add(Qt.updateRoot),d=De.to({},{duration:0});function Kc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Mc(t,a){return{name:t,headless:1,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Kc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var ze=De.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",headless:1,init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Mc("roundProps",gb),Mc("modifiers"),Mc("snap",hb))||De;Jt.version=Qt.version=ze.version="3.13.0",o=1,x()&&Ft();function wd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function yd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function zd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Ad(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Bd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Cd(t,e,r){return t.style[e]=r}function Dd(t,e,r){return t.style.setProperty(e,r)}function Ed(t,e,r){return t._gsap[e]=r}function Fd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Gd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Hd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Kd(t,e){var r=this,i=this.target,n=i.style,a=i._gsap;if(t in sr&&n){if(this.tfm=this.tfm||{},"transform"===t)return cr.transform.split(",").forEach(function(t){return Kd.call(r,t,e)});if(~(t=cr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=Tr(i,t)}):this.tfm[t]=a.x?a[t]:Tr(i,t),t===_r&&(this.tfm.zOrigin=a.zOrigin),0<=this.props.indexOf(pr))return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_r,e,"")),t=pr}(n||e)&&this.props.push(t,e,n[t])}function Ld(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Md(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?2===r[t+1]?i[r[t]](r[t+2]):i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(lr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Ye())&&t.isStart||n[pr]||(Ld(n),a.zOrigin&&n[_r]&&(n[_r]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}}function Nd(t,e){var r={target:t,props:[],revert:Md,save:Kd};return t._gsap||ze.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(t){return r.save(t)}),r}function Pd(t,e){var r=Re.createElementNS?Re.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Re.createElement(t);return r&&r.style?r:Re.createElement(t)}function Qd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(lr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Qd(t,gr(e)||e,1)||""}function Td(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ee=window,Re=Ee.document,Fe=Re.documentElement,Ie=Pd("div")||{style:{}},Pd("div"),pr=gr(pr),_r=pr+"Origin",Ie.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xe=!!gr("perspective"),Ye=ze.core.reverting,Le=1)}function Ud(t){var e,r=t.ownerSVGElement,i=Pd("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0);n.style.display="block",i.appendChild(n),Fe.appendChild(i);try{e=n.getBBox()}catch(t){}return i.removeChild(n),Fe.removeChild(i),e}function Vd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Wd(e){var r,i;try{r=e.getBBox()}catch(t){r=Ud(e),i=1}return r&&(r.width||r.height)||i||(r=Ud(e)),!r||r.width||r.x||r.y?r:{x:+Vd(e,["x","cx","x1"])||0,y:+Vd(e,["y","cy","y1"])||0,width:0,height:0}}function Xd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Wd(t))}function Yd(t,e){if(e){var r,i=t.style;e in sr&&e!==_r&&(e=pr),i.removeProperty?("ms"!==(r=e.substr(0,2))&&"webkit"!==e.substr(0,6)||(e="-"+e),i.removeProperty("--"===r?e:e.replace(lr,"-$1").toLowerCase())):i.removeAttribute(e)}}function Zd(t,e,r,i,n,a){var s=new ge(t._pt,e,r,0,1,a?Bd:Ad);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function ae(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Ie.style,f=fr.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;if(i===h||!u||vr[i]||vr[h])return u;if("px"===h||p||(u=ae(t,e,r,"px")),o=t.getCTM&&Xd(t),(_||"%"===h)&&(sr[e]||~e.indexOf("adius")))return n=o?t.getBBox()[f?"width":"height"]:t[c],ia(_?u/n*100:u/100*n);if(l[f?"width":"height"]=100+(p?h:i),a="rem"!==i&&~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==Re&&a.appendChild||(a=Re.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache)return ia(u/s.width*100);if(!_||"height"!==e&&"width"!==e)!_&&"%"!==h||yr[Qd(a,"display")]||(l.position=Qd(t,"position")),a===t&&(l.position="static"),a.appendChild(Ie),n=Ie[c],a.removeChild(Ie),l.position="absolute";else{var m=t.style[e];t.style[e]=100+i,n=t[c],m?t.style[e]=m:Yd(t,e)}return f&&_&&((s=fa(a)).time=Rt.time,s.width=a[c]),ia(p?n*u/100:n&&u?100/n*u:0)}function ce(t,e,r,i){if(!r||"none"===r){var n=gr(e,t,1),a=n&&Qd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Qd(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g=new ge(this._pt,t.style,e,0,1,oe),v=0,y=0;if(g.b=r,g.e=i,r+="","var(--"===(i+="").substring(0,6)&&(i=Qd(t,i.substring(4,i.indexOf(")")))),"auto"===i&&(f=t.style[e],t.style[e]=i,i=Qd(t,e)||i,f?t.style[e]=f:Yd(t,e)),Gb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===d.charAt(1)&&(d=ka(h,d)+m),c=parseFloat(d),_=d.substr((c+"").length),v=rt.lastIndex-_.length,_||(_=_||X.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=ae(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Bd:Ad;return nt.test(i)&&(g.e=0),this._pt=g}function ee(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=br[r]||r,e[1]=br[i]||i,e.join(" ")}function fe(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],sr[r]&&(i=1,r="transformOrigin"===r?_r:pr),Yd(a,r);i&&(Yd(a,pr),u&&(u.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",kr(a,1),u.uncache=1,Ld(s)))}}function je(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function ke(t){var e=Qd(t,pr);return je(e)?xr:e.substr(7).match(et).map(ia)}function le(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=ke(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?xr:u:(u!==xr||t.offsetParent||t===Fe||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&(t.offsetParent||t.getBoundingClientRect().width)||(a=1,i=t.nextElementSibling,Fe.appendChild(t)),u=ke(t),n?o.display=n:Yd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Fe.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function me(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||le(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==xr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Wd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[_r]="0px 0px",a&&(Zd(a,h,"xOrigin",f,w),Zd(a,h,"yOrigin",d,x),Zd(a,h,"xOffset",c,h.xOffset),Zd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function pe(t,e,r){var i=Za(e);return ia(parseFloat(e)+parseFloat(ae(t,"x",r+"px",i)))+i}function we(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?or:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new ge(t._pt,e,i,n,l,xd),o.e=f,o.u="deg",t._props.push(i),o}function xe(t,e){for(var r in e)t[r]=e[r];return t}function ye(t,e,r){var i,n,a,s,o,u,h,l=xe({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[pr]=e,i=kr(r,1),Yd(r,pr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[pr],f[pr]=e,i=kr(r,1),f[pr]=a),sr)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Za(a)!==(h=Za(s))?ae(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ge(t._pt,i,n,o,u-o,wd),t._pt.u=h||0,t._props.push(n));xe(i,l)}var Ee,Re,Fe,Le,Ie,Be,Ye,Xe,Ze=Lt.Power0,Ne=Lt.Power1,Qe=Lt.Power2,Ue=Lt.Power3,qe=Lt.Power4,Ve=Lt.Linear,We=Lt.Quad,Ge=Lt.Cubic,He=Lt.Quart,Ke=Lt.Quint,Je=Lt.Strong,$e=Lt.Elastic,tr=Lt.Back,er=Lt.SteppedEase,rr=Lt.Bounce,ir=Lt.Sine,nr=Lt.Expo,ar=Lt.Circ,sr={},or=180/Math.PI,ur=Math.PI/180,hr=Math.atan2,lr=/([A-Z])/g,fr=/(left|right|width|margin|padding|x)/i,dr=/[\s,\(]\S/,cr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pr="transform",_r=pr+"Origin",mr="O,Moz,ms,Ms,Webkit".split(","),gr=function _checkPropPrefix(t,e,r){var i=(e||Ie).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(mr[n]+t in i););return n<0?null:(3===n?"ms":0<=n?mr[n]:"")+t},vr={deg:1,rad:1,turn:1},yr={grid:1,flex:1},Tr=function _get(t,e,r,i){var n;return Le||Td(),e in cr&&"transform"!==e&&~(e=cr[e]).indexOf(",")&&(e=e.split(",")[0]),sr[e]&&"transform"!==e?(n=kr(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Or(Qd(t,_r))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=wr[e]&&wr[e](t,e,r)||Qd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?ae(t,e,n,r)+r:n},br={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wr={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ge(t._pt,e,r,0,0,fe);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},xr=[1,0,0,1,0,0],Mr={},kr=function _parseTransform(t,e){var r=t._gsap||new Zt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,M,k,O,A,P,C,S,D,z,E,R,F=t.style,L=r.scaleX<0,I="deg",B=getComputedStyle(t),j=Qd(t,_r)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!Xd(t)),B.translate&&("none"===B.translate&&"none"===B.scale&&"none"===B.rotate||(F[pr]=("none"!==B.translate?"translate3d("+(B.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==B.rotate?"rotate("+B.rotate+") ":"")+("none"!==B.scale?"scale("+B.scale.split(" ").join(",")+") ":"")+("none"!==B[pr]?B[pr]:"")),F.scale=F.rotate=F.translate="none"),m=le(t,r.svg),r.svg&&(O=r.uncache?(A=t.getBBox(),j=r.xOrigin-A.x+"px "+(r.yOrigin-A.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),me(t,O||j,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==xr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=M=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?hr(b,T)*or:0,(f=w||x?hr(w,x)*or+u:0)&&(o*=Math.abs(Math.cos(f*ur))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],z=m[7],C=m[8],S=m[9],D=m[10],E=m[11],i=m[12],n=m[13],a=m[14],h=(g=hr(R,D))*or,g&&(O=M*(v=Math.cos(-g))+C*(y=Math.sin(-g)),A=k*v+S*y,P=R*v+D*y,C=M*-y+C*v,S=k*-y+S*v,D=R*-y+D*v,E=z*-y+E*v,M=O,k=A,R=P),l=(g=hr(-w,D))*or,g&&(v=Math.cos(-g),E=x*(y=Math.sin(-g))+E*v,T=O=T*v-C*y,b=A=b*v-S*y,w=P=w*v-D*y),u=(g=hr(b,T))*or,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),A=M*v+k*y,b=b*v-T*y,k=k*v-M*y,T=O,M=A),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=hr(M,k),f=2e-4<Math.abs(g)?g*or:0,c=E?1/(E<0?-E:E):0),r.svg&&(O=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!je(Qd(t,pr)),O&&t.setAttribute("transform",O))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+I,r.rotationX=ia(h)+I,r.rotationY=ia(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(j.split(" ")[2])||!e&&r.zOrigin||0)&&(F[_r]=Or(j)),r.xOffset=r.yOffset=0,r.force3D=X.force3D,r.renderTransform=r.svg?zr:Xe?Dr:Ar,r.uncache=0,r},Or=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Ar=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Dr(t,e)},Pr="0deg",Cr="0px",Sr=") ",Dr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*ur,x=Math.sin(w),M=Math.cos(w);w=parseFloat(l)*ur,b=Math.cos(w),a=pe(g,a,x*b*-v),s=pe(g,s,-Math.sin(w)*-v),o=pe(g,o,M*b*-v+v)}_!==Cr&&(y+="perspective("+_+Sr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Cr&&s===Cr&&o===Cr||(y+=o!==Cr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Sr),u!==Pr&&(y+="rotate("+u+Sr),h!==Pr&&(y+="rotateY("+h+Sr),l!==Pr&&(y+="rotateX("+l+Sr),f===Pr&&d===Pr||(y+="skew("+f+", "+d+Sr),1===c&&1===p||(y+="scale("+c+", "+p+Sr),g.style[pr]=y||"translate(0, 0)"},zr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),M=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=ur,c*=ur,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=ur,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||M&&!~(f+"").indexOf("px"))&&(x=ae(g,"x",l,"px"),M=ae(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),M=ia(M+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),M=ia(M+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+M+")",g.setAttribute("transform",s),w&&(g.style[pr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});wr[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return Tr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Er,Rr,Fr,Lr={name:"css",register:Td,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w=this._props,x=t.style,M=i.vars.startAt;for(d in Le||Td(),this.styles=this.styles||Nd(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==d&&(o=e[d],!pt[d]||!bc(d,e,i,n,t,a)))if(l=typeof o,f=wr[d],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=pb(o)),f)f(this,t,d,o,i)&&(T=1);else if("--"===d.substr(0,2))s=(getComputedStyle(t).getPropertyValue(d)+"").trim(),o+="",zt.lastIndex=0,zt.test(s)||(c=Za(s),p=Za(o)),p?c!==p&&(s=ae(t,d,s,p)+p):c&&(o+=c),this.add(x,"setProperty",s,o,n,a,0,0,d),w.push(d),b.push(d,0,x[d]);else if("undefined"!==l){if(M&&d in M?(s="function"==typeof M[d]?M[d].call(i,n,t,a):M[d],r(s)&&~s.indexOf("random(")&&(s=pb(s)),Za(s+"")||"auto"===s||(s+=X.units[d]||Za(Tr(t,d))||""),"="===(s+"").charAt(1)&&(s=Tr(t,d))):s=Tr(t,d),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),d in cr&&("autoAlpha"===d&&(1===h&&"hidden"===Tr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Zd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=cr[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in sr)if(this.styles.save(d),"string"===l&&"var(--"===o.substring(0,6)&&(o=Qd(t,o.substring(4,o.indexOf(")"))),u=parseFloat(o)),g||((v=t._gsap).renderTransform&&!e.parseTransform||kr(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new ge(this._pt,x,pr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new ge(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,wd),this._pt.u=0,w.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push(_r,0,x[_r]),o=ee(o),v.svg?me(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Zd(this,v,"zOrigin",v.zOrigin,p),Zd(this,x,d,Or(s),Or(o)));continue}if("svgOrigin"===d){me(t,o,1,y,0,this);continue}if(d in Mr){we(this,v,d,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===d){Zd(this,v,"smooth",v.smooth,o);continue}if("force3D"===d){v[d]=o;continue}if("transform"===d){ye(this,o,t);continue}}else d in x||(d=gr(d)||d);if(m||(u||0===u)&&(h||0===h)&&!dr.test(o)&&d in x)u=u||0,(c=(s+"").substr((h+"").length))!==(p=Za(o)||(d in X.units?X.units[d]:c))&&(h=ae(t,d,s,p)),this._pt=new ge(this._pt,m?v:x,d,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==d||!1===e.autoRound?wd:zd),this._pt.u=p||0,c!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=yd);else if(d in x)ce.call(this,t,d,s,_?_+o:o);else if(d in t)this.add(t,d,s||t[d],_?_+o:o,n,a);else if("parseTransform"!==d){Q(d,o);continue}m||(d in x?b.push(d,0,x[d]):"function"==typeof t[d]?b.push(d,2,t[d]()):b.push(d,1,s||t[d])),w.push(d)}T&&_e(this)},render:function render(t,e){if(e.tween._time||!Ye())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:Tr,aliases:cr,getSetter:function getSetter(t,e,r){var i=cr[e];return i&&i.indexOf(",")<0&&(e=i),e in sr&&e!==_r&&(t._gsap.x||Tr(t,"x"))?r&&Be===r?"scale"===e?Fd:Ed:(Be=r||{})&&("scale"===e?Gd:Hd):t.style&&!u(t.style[e])?Cd:~e.indexOf("-")?Dd:ie(t,e)},core:{_removeProperty:Yd,_getMatrix:le}};ze.utils.checkPrefix=gr,ze.core.getStyleSaver=Nd,Fr=ha((Er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Rr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){sr[t]=1}),ha(Rr,function(t){X.units[t]="deg",Mr[t]=1}),cr[Fr[13]]=Er+","+Rr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");cr[e[1]]=Fr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){X.units[t]="px"}),ze.registerPlugin(Lr);var Ir=ze.registerPlugin(Lr)||ze,Br=Ir.core.Tween;e.Back=tr,e.Bounce=rr,e.CSSPlugin=Lr,e.Circ=ar,e.Cubic=Ge,e.Elastic=$e,e.Expo=nr,e.Linear=Ve,e.Power0=Ze,e.Power1=Ne,e.Power2=Qe,e.Power3=Ue,e.Power4=qe,e.Quad=We,e.Quart=He,e.Quint=Ke,e.Sine=ir,e.SteppedEase=er,e.Strong=Je,e.TimelineLite=Qt,e.TimelineMax=Qt,e.TweenLite=Jt,e.TweenMax=Br,e.default=Ir,e.gsap=Ir;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


}).call(undefined, typeof window !== "undefined" ? { window: window } : { window: globalThis });
﻿/*!
 * Zendure Dashboard Card
 * A modern, configurable Lovelace card for the Zendure Home Assistant integration.
 * https://github.com/zarzak12/zendure-dashboard-card
 *
 * License: MIT
 */
(() => {
  "use strict";

  const CARD_VERSION = "1.2.0";
  const CARD_TAG = "zendure-dashboard-card";
  const EDITOR_TAG = "zendure-dashboard-card-editor";

  if (customElements.get(CARD_TAG)) return;

  /* ------------------------------------------------------------------ *
   *  Localization (FR / EN)                                            *
   * ------------------------------------------------------------------ */
  const LANGS = {
    en: {
      solar: "Solar",
      battery: "Battery",
      home: "Home",
      grid: "Grid",
      charging: "Charging",
      discharging: "Discharging",
      idle: "Standby",
      unavailable: "Unavailable",
      low_battery: "Low battery",
      stored: "stored",
      full_in: "Full in",
      autonomy: "Runtime",
      full: "Battery full",
      empty: "Battery empty",
      det_available: "Available",
      det_capacity: "Capacity",
      det_health: "Health",
      det_cycles: "Cycles",
      det_efficiency: "Efficiency",
      temperature: "Temperature",
      controls: "Controls",
      stats: "Statistics",
      mode: "Mode",
      charge_limit: "Max. charge power",
      discharge_limit: "Max. output power",
      not_configured: "Open the card editor to select your Zendure device.",
      // Known select option values (display only — raw value is sent to the service)
      opt_input: "Charge",
      opt_output: "Discharge",
      opt_smart: "Smart",
      opt_manual: "Manual",
      opt_off: "Off",
      // Editor
      ed_autofill: "Auto-fill from a detected device",
      ed_autofill_none: "No Zendure device detected — pick entities manually below",
      ed_pick: "— Select a device —",
      ed_name: "Card title",
      ed_sec_entities: "Entities",
      ed_sec_display: "Display",
      ed_sec_stats: "Statistics",
      ed_sec_controls: "Controls",
      ed_soc: "Battery level (SoC)",
      ed_solar: "Solar input power",
      ed_home: "Output to home",
      ed_grid: "Grid input power",
      ed_charge: "Battery charge power",
      ed_discharge: "Battery discharge power",
      ed_energy: "Stored energy (kWh)",
      ed_capacity: "Battery capacity (kWh)",
      ed_capacity_helper: "Fallback for the “full in / runtime” estimate when no capacity sensor exists.",
      ed_sec_battery: "Battery & health",
      ed_capacity_entity: "Total capacity sensor (kWh)",
      ed_nominal: "Nominal capacity (kWh)",
      ed_nominal_helper: "New/rated capacity — enables the health % (current capacity ÷ nominal).",
      ed_charge_total: "Lifetime charged (kWh)",
      ed_discharge_total: "Lifetime discharged (kWh)",
      ed_discharge_total_helper: "Cumulative discharged energy — enables the cycle count (÷ capacity) and efficiency.",
      ed_show_details: "Battery details (available, health, cycles…)",
      ed_temp: "Temperature",
      ed_show_flow: "Power readouts (solar / home / grid)",
      ed_show_stats: "Statistics row",
      ed_show_controls: "Control section",
      ed_compact: "Compact mode",
      ed_low_soc: "Low battery threshold",
      ed_stats_entities: "Extra sensors to display as chips",
      ed_mode: "Operation mode (select entity)",
      ed_selects: "Extra mode selectors (select entities)",
      ed_charge_limit: "Charge limit (number entity)",
      ed_discharge_limit: "Discharge limit (number entity)",
      ed_switches: "Switches to display as toggles",
      ed_soc_helper: "Usually the sensor ending in “electricLevel”.",
      ed_charge_helper: "Power flowing INTO the battery (outputPackPower).",
      ed_discharge_helper: "Power flowing OUT of the battery (packInputPower).",
    },
    fr: {
      solar: "Solaire",
      battery: "Batterie",
      home: "Maison",
      grid: "Réseau",
      charging: "En charge",
      discharging: "Décharge",
      idle: "Veille",
      unavailable: "Indisponible",
      low_battery: "Batterie faible",
      stored: "stockés",
      full_in: "Pleine dans",
      autonomy: "Autonomie",
      full: "Batterie pleine",
      empty: "Batterie vide",
      det_available: "Disponible",
      det_capacity: "Capacité",
      det_health: "Santé",
      det_cycles: "Cycles",
      det_efficiency: "Rendement",
      temperature: "Température",
      controls: "Contrôles",
      stats: "Statistiques",
      mode: "Mode",
      charge_limit: "Puissance de charge max.",
      discharge_limit: "Puissance de sortie max.",
      not_configured: "Ouvrez l'éditeur de la carte pour sélectionner votre appareil Zendure.",
      // Valeurs d'options connues (affichage uniquement — la valeur brute est envoyée au service)
      opt_input: "Charge",
      opt_output: "Décharge",
      opt_smart: "Intelligent",
      opt_manual: "Manuel",
      opt_off: "Arrêt",
      // Editor
      ed_autofill: "Remplir automatiquement depuis un appareil détecté",
      ed_autofill_none: "Aucun appareil Zendure détecté — choisissez les entités manuellement ci-dessous",
      ed_pick: "— Choisir un appareil —",
      ed_name: "Titre de la carte",
      ed_sec_entities: "Entités",
      ed_sec_display: "Affichage",
      ed_sec_stats: "Statistiques",
      ed_sec_controls: "Contrôles",
      ed_soc: "Niveau de batterie (SoC)",
      ed_solar: "Production solaire",
      ed_home: "Sortie vers la maison",
      ed_grid: "Entrée réseau",
      ed_charge: "Puissance de charge batterie",
      ed_discharge: "Puissance de décharge batterie",
      ed_energy: "Énergie stockée (kWh)",
      ed_capacity: "Capacité batterie (kWh)",
      ed_capacity_helper: "Repli pour l'estimation « pleine dans / autonomie » sans capteur de capacité.",
      ed_sec_battery: "Batterie & santé",
      ed_capacity_entity: "Capteur de capacité totale (kWh)",
      ed_nominal: "Capacité nominale (kWh)",
      ed_nominal_helper: "Capacité neuve — active le % de santé (capacité actuelle ÷ nominale).",
      ed_charge_total: "Charge cumulée (kWh)",
      ed_discharge_total: "Décharge cumulée (kWh)",
      ed_discharge_total_helper: "Énergie déchargée cumulée — active le nombre de cycles (÷ capacité) et le rendement.",
      ed_show_details: "Détails batterie (disponible, santé, cycles…)",
      ed_temp: "Température",
      ed_show_flow: "Puissances (solaire / maison / réseau)",
      ed_show_stats: "Ligne de statistiques",
      ed_show_controls: "Section de contrôle",
      ed_compact: "Mode compact",
      ed_low_soc: "Seuil de batterie faible",
      ed_stats_entities: "Capteurs supplémentaires à afficher",
      ed_mode: "Mode de fonctionnement (entité select)",
      ed_selects: "Sélecteurs de mode supplémentaires",
      ed_charge_limit: "Limite de charge (entité number)",
      ed_discharge_limit: "Limite de décharge (entité number)",
      ed_switches: "Interrupteurs à afficher",
      ed_soc_helper: "Généralement le capteur se terminant par « electricLevel ».",
      ed_charge_helper: "Puissance qui ENTRE dans la batterie (outputPackPower).",
      ed_discharge_helper: "Puissance qui SORT de la batterie (packInputPower).",
    },
  };

  const langOf = (hass) =>
    ((hass && (hass.locale?.language || hass.language)) || "en").slice(0, 2).toLowerCase();

  const t = (hass, key) => (LANGS[langOf(hass)] || LANGS.en)[key] || LANGS.en[key] || key;

  /* ------------------------------------------------------------------ *
   *  Inline MDI icons (24x24 path data)                                *
   * ------------------------------------------------------------------ */
  const ICONS = {
    sun: "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",
    home: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
    tower:
      "M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z",
    battery:
      "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z",
    bolt: "M11,15H6L13,1V9H18L11,23V15Z",
    thermo:
      "M15,13V5A3,3 0 0,0 9,5V13A5,5 0 1,0 15,13M12,4A1,1 0 0,1 13,5V8H11V5A1,1 0 0,1 12,4Z",
    down: "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",
    up: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
    alert: "M13,14H11V9H13M13,18H11V16H13M1,21H23L12,2L1,21Z",
    clock:
      "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z",
    flash: "M7,2V13H10V22L17,10H13L17,2H7Z",
  };

  const svgIcon = (name, cls = "") =>
    `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name]}"/></svg>`;

  /* ------------------------------------------------------------------ *
   *  Zendure device auto-detection                                     *
   * ------------------------------------------------------------------ */
  const SUFFIX_MAP = {
    soc_entity: "electriclevel",
    solar_entity: "solarinputpower",
    charge_entity: "outputpackpower",
    discharge_entity: "packinputpower",
    home_entity: "outputhomepower",
    grid_entity: "gridinputpower",
  };

  function prettify(id) {
    return id
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim();
  }

  /**
   * Build a filled "wave" path: a wavy top edge from startX→endX closed down to
   * floorY. The pattern repeats every `period`, and we overshoot both edges, so
   * translating the whole path by one period in X loops seamlessly.
   */
  function wavePath(amp, { startX = -28, endX = 134, period = 46, baseY = 6, floorY = 70 } = {}) {
    const half = period / 2;
    let d = `M ${startX} ${baseY}`;
    let x = startX;
    let up = true;
    while (x < endX) {
      const nx = x + half;
      d += ` Q ${x + half / 2} ${baseY + (up ? -amp : amp)} ${nx} ${baseY}`;
      x = nx;
      up = !up;
    }
    return `${d} L ${x} ${floorY} L ${startX} ${floorY} Z`;
  }

  /* Vessel geometry (viewBox 0 0 132 208) — interior cell the water fills. */
  const CELL = { top: 20, bottom: 196, get height() { return this.bottom - this.top; } };

  function fmtDuration(hrs) {
    if (!Number.isFinite(hrs) || hrs <= 0) return null;
    if (hrs >= 48) return "> 48 h";
    const totalMin = Math.round(hrs * 60);
    const hh = Math.floor(totalMin / 60);
    const mm = totalMin % 60;
    if (hh <= 0) return `${mm} min`;
    return mm ? `${hh} h ${String(mm).padStart(2, "0")}` : `${hh} h`;
  }

  function detectDevices(hass) {
    const devices = {};
    if (!hass || !hass.states) return devices;

    for (const eid of Object.keys(hass.states)) {
      const dot = eid.indexOf(".");
      const domain = eid.slice(0, dot);
      const obj = eid.slice(dot + 1).toLowerCase();
      if (domain !== "sensor") continue;
      for (const key of Object.keys(SUFFIX_MAP)) {
        const suf = SUFFIX_MAP[key];
        if (obj.endsWith(suf)) {
          const prefix = obj.slice(0, obj.length - suf.length).replace(/[_-]+$/, "");
          if (!devices[prefix]) devices[prefix] = { __prefix: prefix };
          if (!devices[prefix][key]) devices[prefix][key] = eid;
        }
      }
    }

    // Keep only credible devices (at least a SoC or two matched power sensors)
    for (const p of Object.keys(devices)) {
      const d = devices[p];
      const matches = Object.keys(d).filter((k) => k.endsWith("_entity")).length;
      if (!d.soc_entity && matches < 2) {
        delete devices[p];
        continue;
      }

      // Secondary lookups within the same prefix
      for (const eid of Object.keys(hass.states)) {
        const dot = eid.indexOf(".");
        const domain = eid.slice(0, dot);
        const obj = eid.slice(dot + 1).toLowerCase();
        if (!obj.startsWith(p)) continue;
        const st = hass.states[eid];
        const attrs = (st && st.attributes) || {};
        if (domain === "sensor") {
          if (!d.temp_entity && attrs.device_class === "temperature") d.temp_entity = eid;
          if (
            !d.energy_entity &&
            /kwh/i.test(attrs.unit_of_measurement || "") &&
            /avail|remain|kwh|energy/.test(obj)
          )
            d.energy_entity = eid;
        } else if (domain === "select") {
          if (/mode/.test(obj)) {
            if (!d.mode_entity) d.mode_entity = eid;
            else {
              if (!d.select_entities) d.select_entities = [];
              if (!d.select_entities.includes(eid)) d.select_entities.push(eid);
            }
          }
        } else if (domain === "number") {
          if (!d.charge_limit_entity && /(input|charge)[_-]?limit/.test(obj))
            d.charge_limit_entity = eid;
          if (!d.discharge_limit_entity && /(output|discharge)[_-]?limit/.test(obj))
            d.discharge_limit_entity = eid;
        }
      }

      // Friendly device name (device registry when available)
      let name = prettify(p);
      try {
        const anyEid = d.soc_entity || d.solar_entity || d.home_entity;
        const reg = hass.entities && hass.entities[anyEid];
        const dev = reg && hass.devices && hass.devices[reg.device_id];
        if (dev && dev.name) name = dev.name;
      } catch (_e) {
        /* registry not available — keep prettified prefix */
      }
      d.name = name;
    }
    return devices;
  }

  /* ------------------------------------------------------------------ *
   *  Helpers                                                           *
   * ------------------------------------------------------------------ */
  const num = (hass, eid) => {
    if (!eid || !hass.states[eid]) return null;
    const v = parseFloat(hass.states[eid].state);
    return Number.isFinite(v) ? v : null;
  };

  function fmtPower(hass, watts) {
    if (watts === null || watts === undefined) return "—";
    const lang = langOf(hass) === "fr" ? "fr-FR" : "en-US";
    const abs = Math.abs(watts);
    if (abs >= 1000) {
      return `${new Intl.NumberFormat(lang, { maximumFractionDigits: 2 }).format(watts / 1000)} kW`;
    }
    return `${new Intl.NumberFormat(lang, { maximumFractionDigits: 0 }).format(watts)} W`;
  }

  function fmtState(hass, eid) {
    const st = hass.states[eid];
    if (!st) return "—";
    if (st.state === "unavailable" || st.state === "unknown") return "—";
    try {
      if (hass.formatEntityState) return hass.formatEntityState(st);
    } catch (_e) {
      /* fall through */
    }
    const unit = st.attributes.unit_of_measurement;
    return unit ? `${st.state} ${unit}` : st.state;
  }

  const fire = (el, type, detail) =>
    el.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));

  const moreInfo = (el, entityId) => entityId && fire(el, "hass-more-info", { entityId });

  const DEFAULTS = {
    name: "",
    soc_entity: "",
    solar_entity: "",
    home_entity: "",
    grid_entity: "",
    charge_entity: "",
    discharge_entity: "",
    energy_entity: "",
    capacity_entity: "",
    charge_total_entity: "",
    discharge_total_entity: "",
    temp_entity: "",
    mode_entity: "",
    select_entities: [],
    charge_limit_entity: "",
    discharge_limit_entity: "",
    stats_entities: [],
    switch_entities: [],
    show_flow: true,
    show_stats: true,
    show_details: true,
    show_controls: true,
    compact: false,
    invert_battery: false,
    low_soc: 15,
    flow_threshold: 10,
    capacity: 0,
    nominal_capacity: 0,
    reserve_soc: 0,
  };

  /* ------------------------------------------------------------------ *
   *  Card element                                                      *
   * ------------------------------------------------------------------ */
  class ZendureDashboardCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._built = false;
      this._els = {};
      this._tweens = {};
      this._lastStates = {};
      this._sliderDrag = {};
      this._uid = Math.random().toString(36).slice(2, 8);
    }

    static getConfigElement() {
      return document.createElement(EDITOR_TAG);
    }

    static getStubConfig(hass) {
      const devices = detectDevices(hass);
      const first = Object.values(devices)[0];
      if (!first) return { ...DEFAULTS };
      const cfg = { ...DEFAULTS };
      for (const k of Object.keys(first)) {
        if (k === "__prefix") continue;
        cfg[k] = first[k];
      }
      return cfg;
    }

    setConfig(config) {
      if (!config || typeof config !== "object") {
        throw new Error("Invalid configuration");
      }
      this._config = { ...DEFAULTS, ...config };
      this._built = false;
      if (this._hass) this._build();
    }

    set hass(hass) {
      const old = this._hass;
      this._hass = hass;
      if (!this._config) return;
      if (!this._built) {
        this._build();
        return;
      }
      // Skip work when none of our entities changed
      if (old && !this._entitiesChanged(old, hass)) return;
      this._update();
    }

    get hass() {
      return this._hass;
    }

    _allEntities() {
      const c = this._config;
      return [
        c.soc_entity, c.solar_entity, c.home_entity, c.grid_entity,
        c.charge_entity, c.discharge_entity, c.energy_entity, c.temp_entity,
        c.capacity_entity, c.charge_total_entity, c.discharge_total_entity,
        c.mode_entity, c.charge_limit_entity, c.discharge_limit_entity,
        ...(c.select_entities || []),
        ...(c.stats_entities || []),
        ...(c.switch_entities || []),
      ].filter(Boolean);
    }

    _entitiesChanged(oldHass, newHass) {
      return this._allEntities().some(
        (eid) => oldHass.states[eid] !== newHass.states[eid]
      );
    }

    /* ------------------------------ build ------------------------------ */
    _build() {
      const c = this._config;
      const h = this._hass;
      this.toggleAttribute("dark", !!(h && h.themes && h.themes.darkMode));

      const hasStrip =
        c.show_flow && !c.compact &&
        (c.solar_entity || c.home_entity || c.grid_entity);

      const configured = this._allEntities().length > 0;

      this.shadowRoot.innerHTML = `
        <style>${this._styles()}</style>
        <ha-card>
          <div class="card ${c.compact ? "compact" : ""}">
            ${this._headerHtml()}
            ${
              !configured
                ? `<div class="empty">${svgIcon("battery")}<p>${t(h, "not_configured")}</p></div>`
                : c.compact
                  ? this._compactHtml()
                  : this._heroHtml() + (hasStrip ? this._stripHtml() : "")
            }
            ${configured && !c.compact && c.show_details ? this._detailsHtml() : ""}
            ${configured && !c.compact && c.show_stats ? this._statsHtml() : ""}
            ${configured && !c.compact && c.show_controls ? this._controlsHtml() : ""}
          </div>
        </ha-card>
      `;

      this._cacheRefs();
      this._bindEvents();
      this._built = true;
      this._lastStates = {};
      this._update();
    }

    _headerHtml() {
      return `
        <header>
          <div class="title" id="title"></div>
          <div class="pill" id="status" role="status">
            <span class="dot"></span><span class="pill-txt"></span>
          </div>
        </header>`;
    }

    /** The "battery vessel": a glass cell filled with animated liquid to SoC. */
    _vesselSvg() {
      const uid = this._uid;
      const clip = `zdc-cell-${uid}`;
      // Two parallax wave crests + a solid body that fills down past the cell.
      const waves = `
        <path class="zdc-wave zdc-wave-2" d="${wavePath(3.4)}"/>
        <path class="zdc-wave zdc-wave-1" d="${wavePath(5.2)}"/>`;
      const body = `<rect class="zdc-fill" x="-30" y="6" width="196" height="320"/>`;
      const bubbles = Array.from({ length: 6 }, (_, i) => {
        const cx = 30 + ((i * 79) % 74);
        const r = 1.4 + ((i * 7) % 3) * 0.6;
        return `<circle class="zdc-bubble" data-i="${i}" cx="${cx}" cy="${CELL.bottom}" r="${r}"/>`;
      }).join("");
      return `
        <svg class="zdc-vessel" viewBox="0 0 132 208" role="img" aria-label="battery level">
          <defs>
            <clipPath id="${clip}">
              <rect x="13" y="${CELL.top - 1}" width="106" height="${CELL.height + 2}" rx="13"/>
            </clipPath>
          </defs>
          <rect class="zdc-cap" x="52" y="2" width="28" height="11" rx="4.5"/>
          <g clip-path="url(#${clip})">
            <rect class="zdc-void" x="13" y="${CELL.top - 1}" width="106" height="${CELL.height + 2}"/>
            <g class="zdc-water" id="zdc-water">
              ${body}
              <g class="zdc-bubbles" id="zdc-bubbles">${bubbles}</g>
              ${waves}
            </g>
          </g>
          <rect class="zdc-glass" x="6" y="12" width="120" height="192" rx="20"/>
          <rect class="zdc-shine" x="20" y="26" width="14" height="150" rx="7"/>
        </svg>`;
    }

    _heroHtml() {
      const h = this._hass;
      return `
        <section class="hero" id="hero" role="button" tabindex="0"
                 aria-label="${t(h, "battery")}">
          ${this._vesselSvg()}
          <div class="hero-info">
            <div class="soc" id="soc">—</div>
            <div class="kwh" id="kwh"></div>
            <div class="eta" id="eta"></div>
          </div>
        </section>`;
    }

    _stripHtml() {
      const c = this._config;
      const h = this._hass;
      const item = (key, icon, label, eid) => `
        <button class="rd r-${key}" id="rd-${key}" data-more="${eid}">
          <span class="rd-top">${svgIcon(icon)}<span class="rd-l">${label}</span></span>
          <span class="rd-v"><span class="rd-arrow" id="rda-${key}"></span><span id="rdv-${key}">—</span></span>
        </button>`;
      const items = [];
      if (c.solar_entity) items.push(item("solar", "sun", t(h, "solar"), c.solar_entity));
      if (c.home_entity) items.push(item("home", "home", t(h, "home"), c.home_entity));
      if (c.grid_entity) items.push(item("grid", "tower", t(h, "grid"), c.grid_entity));
      return `<section class="strip">${items.join("")}</section>`;
    }

    /** Which detail tiles are shown (decided from config; values filled in _update). */
    _detailKeys() {
      const c = this._config;
      const keys = [];
      if (c.energy_entity) keys.push("available");
      if (c.capacity_entity || c.capacity > 0 || c.energy_entity) keys.push("capacity");
      if (c.nominal_capacity > 0) keys.push("health");
      if (c.discharge_total_entity) keys.push("cycles");
      if (c.charge_total_entity && c.discharge_total_entity) keys.push("efficiency");
      return keys;
    }

    _detailsHtml() {
      const h = this._hass;
      const keys = this._detailKeys();
      if (!keys.length) return "";
      const more = {
        available: this._config.energy_entity,
        capacity: this._config.capacity_entity,
        cycles: this._config.discharge_total_entity,
      };
      const tiles = keys.map((k) => {
        const eid = more[k];
        const attrs = eid ? ` data-more="${eid}" role="button" tabindex="0"` : "";
        return `
          <div class="tile t-${k}"${attrs}>
            <span class="tile-l">${t(h, `det_${k}`)}</span>
            <span class="tile-v" id="tv-${k}">—</span>
          </div>`;
      });
      return `<section class="details">${tiles.join("")}</section>`;
    }

    _compactHtml() {
      const c = this._config;
      const h = this._hass;
      const mini = [];
      const m = (key, icon, eid) =>
        `<button class="mini m-${key}" data-more="${eid}">${svgIcon(icon)}<span id="rdv-${key}">—</span></button>`;
      if (c.solar_entity) mini.push(m("solar", "sun", c.solar_entity));
      if (c.home_entity) mini.push(m("home", "home", c.home_entity));
      if (c.grid_entity) mini.push(m("grid", "tower", c.grid_entity));
      return `
        <section class="cbody">
          <div class="crow" id="hero" data-more="${c.soc_entity}" role="button" tabindex="0">
            <span class="soc" id="soc">—</span>
            <div class="bar"><div class="bar-fill" id="bar-fill"></div></div>
          </div>
          <div class="minis">${mini.join("")}</div>
        </section>`;
    }

    _statsHtml() {
      const c = this._config;
      const h = this._hass;
      const chips = [];
      if (c.temp_entity)
        chips.push(
          `<button class="chip" data-entity="${c.temp_entity}">${svgIcon("thermo")}<span class="chip-l">${t(h, "temperature")}</span><span class="chip-v" data-val="${c.temp_entity}">—</span></button>`
        );
      for (const eid of c.stats_entities || []) {
        chips.push(
          `<button class="chip" data-entity="${eid}">${svgIcon("bolt")}<span class="chip-l" data-name="${eid}"></span><span class="chip-v" data-val="${eid}">—</span></button>`
        );
      }
      if (!chips.length) return "";
      return `<section class="stats">${chips.join("")}</section>`;
    }

    _controlsHtml() {
      const c = this._config;
      const h = this._hass;
      const parts = [];

      // Mode selectors: primary mode_entity + any extra select entities
      const selects = [];
      const pushSelect = (eid) => {
        if (eid && h.states[eid] && !selects.includes(eid)) selects.push(eid);
      };
      pushSelect(c.mode_entity);
      (c.select_entities || []).forEach(pushSelect);
      for (const eid of selects) {
        const st = h.states[eid];
        let label =
          eid === c.mode_entity
            ? t(h, "mode")
            : st.attributes.friendly_name || eid;
        if (c.name && label.startsWith(c.name)) label = label.slice(c.name.length).trim();
        parts.push(`
          <div class="ctl">
            <span class="ctl-l">${label}</span>
            <div class="seg" data-entity="${eid}"></div>
          </div>`);
      }
      const slider = (key, eid, label) => {
        const st = h.states[eid];
        if (!st) return "";
        const min = Number(st.attributes.min ?? 0);
        const max = Number(st.attributes.max ?? 100);
        const step = Number(st.attributes.step ?? 1);
        return `
          <div class="ctl">
            <span class="ctl-l">${label}<b class="ctl-v" id="sv-${key}">—</b></span>
            <input type="range" id="sl-${key}" data-entity="${eid}"
              min="${min}" max="${max}" step="${step}">
          </div>`;
      };
      if (c.charge_limit_entity)
        parts.push(slider("charge", c.charge_limit_entity, t(h, "charge_limit")));
      if (c.discharge_limit_entity)
        parts.push(slider("discharge", c.discharge_limit_entity, t(h, "discharge_limit")));

      if ((c.switch_entities || []).length) {
        const sw = c.switch_entities
          .map(
            (eid) =>
              `<button class="tog" data-entity="${eid}"><span class="tog-track"><span class="tog-knob"></span></span><span class="tog-l" data-name="${eid}"></span></button>`
          )
          .join("");
        parts.push(`<div class="ctl togs">${sw}</div>`);
      }

      if (!parts.length) return "";
      return `<section class="controls">${parts.join("")}</section>`;
    }

    /* ------------------------------ refs & events ------------------------------ */
    _cacheRefs() {
      const $ = (sel) => this.shadowRoot.querySelector(sel);
      this._els = {
        title: $("#title"),
        status: $("#status"),
        statusTxt: $("#status .pill-txt"),
        soc: $("#soc"),
        kwh: $("#kwh"),
        eta: $("#eta"),
        barFill: $("#bar-fill"),
        hero: $("#hero"),
        water: $("#zdc-water"),
        bubbles: $("#zdc-bubbles"),
        waves: this.shadowRoot.querySelectorAll(".zdc-wave"),
      };
      this._killTweens();
      this._waterY = null;

      // GSAP is bundled above this code in the dist file
      this._gsapOK = false;
      if (!this._reducedMotion() && window.gsap) {
        this._gsapOK = true;
        this._setupVesselTweens();
      }
    }

    _reducedMotion() {
      return (
        typeof matchMedia === "function" &&
        matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }

    /** Infinite wave drift + rising bubbles, paused until there is power flow. */
    _setupVesselTweens() {
      const G = window.gsap;
      const e = this._els;
      if (!e.water || !e.waves.length) return;
      const period = 46;

      // Parallax: two crests drift at different speeds; timeScale set by power.
      this._tweens.wave1 = G.to(e.waves[e.waves.length - 1], {
        x: -period, duration: 2.4, ease: "none", repeat: -1,
      });
      if (e.waves.length > 1) {
        this._tweens.wave2 = G.to(e.waves[0], {
          x: -period, duration: 3.6, ease: "none", repeat: -1,
        });
      }

      // Bubbles rise through the water (local coords: y=0 is the surface).
      const bubbles = e.bubbles ? e.bubbles.querySelectorAll(".zdc-bubble") : [];
      this._tweens.bubbles = G.timeline({ repeat: -1, paused: true });
      bubbles.forEach((b, i) => {
        const dur = 1.8 + (i % 3) * 0.5;
        this._tweens.bubbles.to(
          b,
          {
            keyframes: [
              { attr: { cy: 150 }, opacity: 0, duration: 0 },
              { opacity: 0.8, duration: 0.3 },
              { attr: { cy: 6 }, opacity: 0, duration: dur, ease: "sine.out" },
            ],
          },
          i * 0.4
        );
      });
      this._tweens.bubbles.pause();
    }

    _killTweens() {
      for (const k of Object.keys(this._tweens || {})) {
        if (this._tweens[k]) this._tweens[k].kill();
      }
      this._tweens = {};
    }

    disconnectedCallback() {
      this._killTweens();
      this._built = false;
    }

    _bindEvents() {
      const root = this.shadowRoot;

      // Anything with data-more opens the entity's more-info dialog.
      root.querySelectorAll("[data-more]").forEach((el) => {
        const eid = el.getAttribute("data-more");
        if (!eid) return;
        el.addEventListener("click", () => moreInfo(this, eid));
        el.addEventListener("keydown", (ev) => {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            moreInfo(this, eid);
          }
        });
      });

      root.querySelectorAll(".chip").forEach((chip) => {
        chip.addEventListener("click", () => moreInfo(this, chip.dataset.entity));
      });

      root.querySelectorAll("input[type=range]").forEach((sl) => {
        const eid = sl.dataset.entity;
        const label = sl.closest(".ctl").querySelector(".ctl-v");
        sl.addEventListener("input", () => {
          this._sliderDrag[eid] = true;
          if (label) label.textContent = this._fmtNumber(eid, sl.value);
        });
        sl.addEventListener("change", () => {
          delete this._sliderDrag[eid];
          this._hass.callService("number", "set_value", {
            entity_id: eid,
            value: Number(sl.value),
          });
        });
      });

      root.querySelectorAll(".tog").forEach((btn) => {
        btn.addEventListener("click", () => {
          this._hass.callService("homeassistant", "toggle", {
            entity_id: btn.dataset.entity,
          });
        });
      });
    }

    _fmtNumber(eid, value) {
      const st = this._hass.states[eid];
      const unit = (st && st.attributes.unit_of_measurement) || "";
      return `${value}${unit ? ` ${unit}` : ""}`;
    }

    /* ------------------------------ update ------------------------------ */
    _update() {
      const h = this._hass;
      const c = this._config;
      if (!h || !this._built) return;

      this.toggleAttribute("dark", !!(h.themes && h.themes.darkMode));

      // Title
      if (this._els.title) {
        this._els.title.textContent =
          c.name ||
          (c.soc_entity && h.states[c.soc_entity]
            ? (h.states[c.soc_entity].attributes.friendly_name || "Zendure")
                .replace(/electric\s*level/i, "")
                .trim()
            : "Zendure");
      }

      const soc = num(h, c.soc_entity);
      const solar = num(h, c.solar_entity);
      const home = num(h, c.home_entity);
      const grid = num(h, c.grid_entity);
      const charge = num(h, c.charge_entity);
      const discharge = num(h, c.discharge_entity);

      // Net battery power: + charging / − discharging
      let net = null;
      if (charge !== null && discharge !== null) net = charge - discharge;
      else if (charge !== null) net = c.invert_battery ? -charge : charge;
      else if (discharge !== null) net = c.invert_battery ? discharge : -discharge;

      const thr = c.flow_threshold;
      const socAvailable =
        c.soc_entity &&
        h.states[c.soc_entity] &&
        !["unavailable", "unknown"].includes(h.states[c.soc_entity].state);

      // Status pill
      let statusKey = "idle";
      if (c.soc_entity && !socAvailable) statusKey = "unavailable";
      else if (net !== null && net > thr) statusKey = "charging";
      else if (net !== null && net < -thr) statusKey = "discharging";
      if (this._els.status) {
        this._els.status.className = `pill s-${statusKey}`;
        this._els.statusTxt.textContent = t(h, statusKey);
      }

      const low = soc !== null && soc <= c.low_soc;
      const warn = soc !== null && soc <= c.low_soc * 2 && !low;
      const level = low ? "crit" : warn ? "warn" : "ok";

      // Big SoC number
      if (this._els.soc) {
        this._els.soc.innerHTML =
          soc === null
            ? "—"
            : `${low ? svgIcon("alert", "warn-ic") : ""}${Math.round(soc)}<i>%</i>`;
        this._els.soc.className = `soc l-${level}`;
      }

      // Stored energy (measured, or estimated from capacity)
      const cap = this._capacityKwh();
      if (this._els.kwh) {
        let e = num(h, c.energy_entity);
        if (e === null && cap !== null && soc !== null) e = (cap * soc) / 100;
        this._els.kwh.textContent = e !== null ? `${e.toFixed(2)} kWh` : "";
      }

      // ETA — full in / runtime
      if (this._els.eta) {
        const eta = this._computeEta(soc, net, cap, statusKey);
        if (eta) {
          this._els.eta.innerHTML = `${svgIcon(eta.icon)}<span>${eta.text}</span>`;
          this._els.eta.classList.add("show");
        } else {
          this._els.eta.innerHTML = "";
          this._els.eta.classList.remove("show");
        }
      }

      // Vessel (liquid) or compact bar
      if (this._els.water) this._updateVessel(soc, net, level, statusKey);
      if (this._els.barFill && soc !== null) {
        const pct = Math.max(0, Math.min(100, soc));
        this._els.barFill.style.width = `${pct}%`;
        this._els.barFill.style.background = `var(--zdc-l-${level})`;
      }

      // Power readouts strip
      this._updateStrip("solar", solar, "in");
      this._updateStrip("home", home, "out");
      this._updateStrip(
        "grid",
        grid === null ? null : Math.abs(grid),
        grid === null ? null : grid > thr ? "in" : grid < -thr ? "out" : null
      );

      // Battery details tiles
      this._updateDetails();

      // Stats
      this.shadowRoot.querySelectorAll("[data-val]").forEach((el) => {
        el.textContent = fmtState(h, el.dataset.val);
      });
      this.shadowRoot.querySelectorAll("[data-name]").forEach((el) => {
        const st = h.states[el.dataset.name];
        let label = st ? st.attributes.friendly_name || el.dataset.name : el.dataset.name;
        if (c.name && label.startsWith(c.name)) label = label.slice(c.name.length).trim();
        el.textContent = label;
      });

      // Mode segmented controls
      this._updateSelects();

      // Sliders
      for (const [key, eid] of [
        ["charge", c.charge_limit_entity],
        ["discharge", c.discharge_limit_entity],
      ]) {
        if (!eid) continue;
        const sl = this.shadowRoot.getElementById(`sl-${key}`);
        const lv = this.shadowRoot.getElementById(`sv-${key}`);
        const v = num(h, eid);
        if (sl && v !== null && !this._sliderDrag[eid]) {
          sl.value = v;
          if (lv) lv.textContent = this._fmtNumber(eid, v);
        }
      }

      // Switch toggles
      this.shadowRoot.querySelectorAll(".tog").forEach((btn) => {
        const st = h.states[btn.dataset.entity];
        btn.classList.toggle("on", !!st && st.state === "on");
      });
    }

    /** Total capacity in kWh: capacity sensor, else derived from kWh+SoC, else config. */
    _capacityKwh() {
      const c = this._config;
      const h = this._hass;
      const cap = num(h, c.capacity_entity);
      if (cap !== null && cap > 0) return cap;
      const e = num(h, c.energy_entity);
      const soc = num(h, c.soc_entity);
      if (e !== null && e > 0 && soc !== null && soc >= 5) return (e * 100) / soc;
      if (c.capacity > 0) return c.capacity;
      return null;
    }

    /** { text, icon } for "full in …" / "runtime …", or null when not applicable. */
    _computeEta(soc, net, cap, statusKey) {
      const c = this._config;
      const h = this._hass;
      if (soc === null || net === null) return null;
      const thr = c.flow_threshold;
      if (statusKey === "charging") {
        if (soc >= 99.5) return { text: t(h, "full"), icon: "flash" };
        if (cap === null) return null;
        const dur = fmtDuration((cap * (100 - soc)) / 100 / (net / 1000));
        return dur ? { text: `${t(h, "full_in")} ${dur}`, icon: "flash" } : null;
      }
      if (statusKey === "discharging") {
        const floor = Math.max(0, Math.min(soc, c.reserve_soc || 0));
        if (soc <= floor + 0.5) return { text: t(h, "empty"), icon: "clock" };
        if (cap === null) return null;
        const dur = fmtDuration((cap * (soc - floor)) / 100 / (Math.abs(net) / 1000));
        return dur ? { text: `${t(h, "autonomy")} ${dur}`, icon: "clock" } : null;
      }
      return null;
    }

    _updateVessel(soc, net, level, statusKey) {
      const e = this._els;
      // Move the water group so its wave baseline (local y=6) sits at the SoC line:
      // full (100%) → cell top, empty (0%) → cell bottom.
      const WAVE_BASE = 6;
      const pct = soc === null ? 0 : Math.max(0, Math.min(100, soc));
      const targetY = CELL.bottom - WAVE_BASE - (CELL.height * pct) / 100;
      e.water.style.setProperty("--water", `var(--zdc-l-${level})`);

      if (!this._gsapOK) {
        e.water.setAttribute("transform", `translate(0 ${targetY})`);
        return;
      }
      const G = window.gsap;
      if (this._waterY === null) {
        G.set(e.water, { y: targetY });
      } else if (Math.abs(this._waterY - targetY) > 0.5) {
        G.to(e.water, { y: targetY, duration: 1.1, ease: "power2.out" });
      }
      this._waterY = targetY;

      // Wave speed reflects throughput; calmer at idle.
      const flow = Math.abs(net || 0);
      const speed = Math.max(0.5, Math.min(2.6, 0.5 + flow / 500));
      if (this._tweens.wave1) this._tweens.wave1.timeScale(speed);
      if (this._tweens.wave2) this._tweens.wave2.timeScale(speed * 0.8);

      // Bubbles only while charging.
      if (this._tweens.bubbles) {
        const bubbling = statusKey === "charging";
        this._els.bubbles.style.opacity = bubbling ? "1" : "0";
        if (bubbling && this._tweens.bubbles.paused()) this._tweens.bubbles.play();
        else if (!bubbling && !this._tweens.bubbles.paused()) this._tweens.bubbles.pause();
      }
    }

    _updateStrip(key, value, dir) {
      const v = this.shadowRoot.getElementById(`rdv-${key}`);
      if (v) v.textContent = fmtPower(this._hass, value);
      const a = this.shadowRoot.getElementById(`rda-${key}`);
      if (a) {
        a.className = `rd-arrow ${dir ? `a-${dir}` : ""}`;
        a.innerHTML = dir ? svgIcon(dir === "in" ? "down" : "up") : "";
      }
    }

    _updateDetails() {
      const c = this._config;
      const h = this._hass;
      const set = (key, html, cls) => {
        const el = this.shadowRoot.getElementById(`tv-${key}`);
        if (!el) return;
        el.innerHTML = html;
        el.closest(".tile").className = `tile t-${key}${cls ? ` ${cls}` : ""}`;
      };
      const kwh = (v) => (v === null ? "—" : `${v.toFixed(2)}<i>kWh</i>`);

      const cap = this._capacityKwh();
      const avail = num(h, c.energy_entity);
      const chargeTot = num(h, c.charge_total_entity);
      const dischTot = num(h, c.discharge_total_entity);

      set("available", kwh(avail));
      set("capacity", kwh(cap));

      if (c.nominal_capacity > 0) {
        const soh = cap !== null ? Math.round((cap / c.nominal_capacity) * 100) : null;
        const cls = soh === null ? "" : soh >= 80 ? "good" : soh >= 60 ? "warn" : "crit";
        set("health", soh === null ? "—" : `${Math.min(100, soh)}<i>%</i>`, cls);
      }
      if (c.discharge_total_entity) {
        const cycles = dischTot !== null && cap ? Math.round(dischTot / cap) : null;
        set("cycles", cycles === null ? "—" : `${cycles}`);
      }
      if (c.charge_total_entity && c.discharge_total_entity) {
        const eff =
          chargeTot !== null && chargeTot > 0 && dischTot !== null
            ? Math.round((dischTot / chargeTot) * 100)
            : null;
        set("efficiency", eff === null ? "—" : `${eff}<i>%</i>`);
      }
    }

    /** Localized display label for a select option (raw value is sent to the service). */
    _optionLabel(option) {
      const key = `opt_${String(option).toLowerCase().replace(/[\s-]+/g, "_")}`;
      const dict = LANGS[langOf(this._hass)] || LANGS.en;
      return dict[key] || LANGS.en[key] || prettify(option);
    }

    _updateSelects() {
      const h = this._hass;
      this.shadowRoot.querySelectorAll(".seg[data-entity]").forEach((seg) => {
        const eid = seg.dataset.entity;
        const st = h.states[eid];
        if (!st) return;
        const options = st.attributes.options || [];
        const sig = `${options.join("|")}§${langOf(h)}`;
        if (seg.dataset.sig !== sig) {
          seg.dataset.sig = sig;
          seg.innerHTML = options
            .map(
              (o) =>
                `<button class="seg-b" data-opt="${o}">${this._optionLabel(o)}</button>`
            )
            .join("");
          seg.querySelectorAll(".seg-b").forEach((b) => {
            b.addEventListener("click", () => {
              this._hass.callService("select", "select_option", {
                entity_id: eid,
                option: b.dataset.opt,
              });
            });
          });
        }
        seg.querySelectorAll(".seg-b").forEach((b) => {
          b.classList.toggle("on", b.dataset.opt === st.state);
        });
      });
    }

    /* ------------------------------ sizing ------------------------------ */
    getCardSize() {
      if (!this._config) return 4;
      if (this._config.compact) return 2;
      let size = 5;
      if (this._config.show_details && this._detailKeys().length) size += 1;
      if (this._config.show_stats) size += 1;
      if (this._config.show_controls) size += 2;
      return size;
    }

    getGridOptions() {
      return {
        columns: 12,
        min_columns: 6,
        rows: "auto",
      };
    }

    /* ------------------------------ styles ------------------------------ */
    _styles() {
      return `
        :host {
          /* Validated palette — light mode (overridable via HA themes) */
          --zdc-solar: var(--zendure-solar-color, #eda100);
          --zdc-batt:  var(--zendure-battery-color, #008300);
          --zdc-grid:  var(--zendure-grid-color, #2a78d6);
          --zdc-home:  var(--zendure-home-color, #e87ba4);
          --zdc-good:  #0ca30c;
          --zdc-warn:  #fab219;
          --zdc-crit:  #d03b3b;
          /* Battery level colours (liquid + bar) */
          --zdc-l-ok:   var(--zendure-battery-color, #12a150);
          --zdc-l-warn: #eda100;
          --zdc-l-crit: #e5484d;
          --zdc-track: color-mix(in srgb, currentColor 10%, transparent);
          --zdc-card-bg: var(--ha-card-background, var(--card-background-color, #fff));
        }
        :host([dark]) {
          --zdc-solar: var(--zendure-solar-color, #c98500);
          --zdc-grid:  var(--zendure-grid-color, #3987e5);
          --zdc-home:  var(--zendure-home-color, #d55181);
          --zdc-l-ok:   var(--zendure-battery-color, #2bbd6d);
          --zdc-l-warn: #f5b13a;
          --zdc-l-crit: #f0595e;
        }
        ha-card { overflow: hidden; }
        .card {
          padding: 16px;
          color: var(--primary-text-color);
          display: flex; flex-direction: column; gap: 14px;
        }
        .card.compact { gap: 10px; padding: 12px 16px; }

        .ic { width: 20px; height: 20px; fill: currentColor; flex: none; }

        header { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .title {
          font-size: 1.05rem; font-weight: 600; letter-spacing: .2px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: .78rem; font-weight: 500;
          padding: 4px 10px; border-radius: 999px;
          background: color-mix(in srgb, currentColor 7%, transparent);
          color: var(--secondary-text-color);
        }
        .pill .dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; opacity: .5; }
        .pill.s-charging { color: var(--zdc-batt); background: color-mix(in srgb, var(--zdc-batt) 12%, transparent); }
        .pill.s-charging .dot { background: var(--zdc-batt); opacity: 1; }
        .pill.s-discharging { color: var(--zdc-home); background: color-mix(in srgb, var(--zdc-home) 14%, transparent); }
        .pill.s-discharging .dot { background: var(--zdc-home); opacity: 1; }
        .pill.s-unavailable { color: var(--zdc-crit); background: color-mix(in srgb, var(--zdc-crit) 12%, transparent); }
        .pill.s-unavailable .dot { background: var(--zdc-crit); opacity: 1; }
        .pill-txt { line-height: 1; }

        .empty {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 24px 12px; color: var(--secondary-text-color); text-align: center;
        }
        .empty .ic { width: 36px; height: 36px; opacity: .4; }
        .empty p { margin: 0; font-size: .9rem; max-width: 32ch; }

        /* ---------------- hero : battery vessel ---------------- */
        .hero {
          display: flex; align-items: center; gap: 20px;
          padding: 6px 4px 2px; cursor: pointer;
          border: 0; background: none; text-align: left; width: 100%;
        }
        .hero:focus-visible, .rd:focus-visible, .crow:focus-visible, .mini:focus-visible {
          outline: 2px solid var(--zdc-grid); outline-offset: 3px; border-radius: 14px;
        }
        .zdc-vessel { width: 104px; height: 164px; flex: none; overflow: visible; }
        .zdc-cap { fill: var(--zdc-track); }
        .zdc-void { fill: color-mix(in srgb, currentColor 7%, transparent); }
        .zdc-glass {
          fill: none; stroke: color-mix(in srgb, currentColor 22%, transparent);
          stroke-width: 3;
        }
        .zdc-shine { fill: #fff; opacity: .10; }
        .zdc-water { will-change: transform; }
        .zdc-fill { fill: var(--water, var(--zdc-l-ok)); transition: fill .5s; }
        .zdc-wave { fill: var(--water, var(--zdc-l-ok)); transition: fill .5s; }
        .zdc-wave-1 { opacity: .95; }
        .zdc-wave-2 { opacity: .5; }
        .zdc-bubble { fill: #fff; opacity: 0; }
        .zdc-bubbles { transition: opacity .4s; }

        .hero-info { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .soc {
          font-size: 2.9rem; font-weight: 700; line-height: .95;
          display: inline-flex; align-items: flex-start;
          font-variant-numeric: tabular-nums; color: var(--primary-text-color);
        }
        .soc i {
          font-style: normal; font-size: 1.1rem; font-weight: 600;
          color: var(--secondary-text-color); margin-left: 2px; margin-top: .28em;
        }
        .soc.l-warn { color: var(--zdc-l-warn); }
        .soc.l-crit { color: var(--zdc-l-crit); }
        .soc .warn-ic { width: 22px; height: 22px; color: var(--zdc-l-crit); align-self: center; margin-right: 5px; }
        .kwh { font-size: .92rem; font-weight: 600; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .eta {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: .82rem; font-weight: 500; color: var(--secondary-text-color);
          min-height: 0; height: 0; opacity: 0; overflow: hidden;
          transition: opacity .3s, height .3s, margin .3s;
        }
        .eta.show { height: 1.4em; opacity: 1; margin-top: 2px; }
        .eta .ic { width: 15px; height: 15px; color: var(--zdc-batt); }

        /* ---------------- power readouts strip ---------------- */
        .strip {
          display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 8px;
        }
        .rd {
          display: flex; flex-direction: column; gap: 4px; cursor: pointer;
          border: 0; font: inherit; text-align: left;
          padding: 9px 11px; border-radius: 12px;
          background: color-mix(in srgb, currentColor 5%, transparent);
          color: var(--primary-text-color);
        }
        .rd-top { display: inline-flex; align-items: center; gap: 6px; }
        .rd-top .ic { width: 15px; height: 15px; }
        .r-solar .ic { color: var(--zdc-solar); }
        .r-home .ic { color: var(--zdc-home); }
        .r-grid .ic { color: var(--zdc-grid); }
        .rd-l { font-size: .72rem; color: var(--secondary-text-color); }
        .rd-v {
          display: inline-flex; align-items: center; gap: 3px;
          font-size: .95rem; font-weight: 700; font-variant-numeric: tabular-nums;
        }
        .rd-arrow { display: inline-flex; }
        .rd-arrow .ic { width: 13px; height: 13px; }
        .rd-arrow.a-in .ic { color: var(--zdc-l-ok); }
        .rd-arrow.a-out .ic { color: var(--zdc-home); }

        /* ---------------- battery details tiles ---------------- */
        .details {
          display: grid; gap: 8px;
          grid-template-columns: repeat(auto-fit, minmax(84px, 1fr));
          border-top: 1px solid var(--divider-color, color-mix(in srgb, currentColor 12%, transparent));
          padding-top: 12px;
        }
        .tile {
          display: flex; flex-direction: column; gap: 3px;
          padding: 9px 11px; border-radius: 12px;
          background: color-mix(in srgb, currentColor 5%, transparent);
        }
        .tile[data-more] { cursor: pointer; }
        .tile[data-more]:focus-visible { outline: 2px solid var(--zdc-grid); outline-offset: 2px; }
        .tile-l {
          font-size: .68rem; font-weight: 600; letter-spacing: .04em; text-transform: uppercase;
          color: var(--secondary-text-color);
        }
        .tile-v {
          font-size: 1.15rem; font-weight: 700; line-height: 1;
          font-variant-numeric: tabular-nums; color: var(--primary-text-color);
          display: inline-flex; align-items: baseline; gap: 2px;
        }
        .tile-v i { font-style: normal; font-size: .68rem; font-weight: 600; color: var(--secondary-text-color); }
        .t-health.good .tile-v { color: var(--zdc-l-ok); }
        .t-health.warn .tile-v { color: var(--zdc-l-warn); }
        .t-health.crit .tile-v { color: var(--zdc-l-crit); }

        /* ---------------- compact ---------------- */
        .cbody { display: flex; flex-direction: column; gap: 10px; }
        .crow { display: flex; align-items: center; gap: 12px; cursor: pointer; border: 0; background: none; padding: 0; width: 100%; }
        .crow .soc { font-size: 1.5rem; }
        .crow .soc i { font-size: .8rem; margin-top: .15em; }
        .bar {
          flex: 1; height: 10px; border-radius: 999px;
          background: var(--zdc-track); overflow: hidden;
        }
        .bar-fill { height: 100%; border-radius: 999px; background: var(--zdc-l-ok); width: 0; transition: width .6s, background .6s; }
        .minis { display: flex; gap: 8px; flex-wrap: wrap; }
        .mini {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 999px; cursor: pointer; border: 0; font: inherit;
          background: color-mix(in srgb, currentColor 6%, transparent);
          font-size: .78rem; font-weight: 600; color: var(--primary-text-color);
        }
        .mini .ic { width: 15px; height: 15px; }
        .m-solar .ic { color: var(--zdc-solar); }
        .m-home .ic { color: var(--zdc-home); }
        .m-grid .ic { color: var(--zdc-grid); }

        /* ---------------- stats ---------------- */
        .stats { display: flex; gap: 8px; flex-wrap: wrap; }
        .chip {
          display: inline-flex; align-items: center; gap: 6px;
          border: 0; cursor: pointer; font: inherit;
          padding: 6px 10px; border-radius: 10px;
          background: color-mix(in srgb, currentColor 6%, transparent);
          color: var(--primary-text-color);
        }
        .chip .ic { width: 15px; height: 15px; color: var(--secondary-text-color); }
        .chip-l { font-size: .75rem; color: var(--secondary-text-color); }
        .chip-v { font-size: .78rem; font-weight: 600; }

        /* ---------------- controls ---------------- */
        .controls {
          display: flex; flex-direction: column; gap: 12px;
          border-top: 1px solid var(--divider-color, color-mix(in srgb, currentColor 12%, transparent));
          padding-top: 12px;
        }
        .ctl { display: flex; flex-direction: column; gap: 6px; }
        .ctl-l {
          font-size: .78rem; color: var(--secondary-text-color);
          display: flex; justify-content: space-between; align-items: baseline;
        }
        .ctl-v { color: var(--primary-text-color); font-weight: 600; font-size: .82rem; }
        .seg { display: flex; gap: 4px; flex-wrap: wrap; }
        .seg-b {
          flex: 1; min-width: 64px; padding: 7px 10px; cursor: pointer;
          font: inherit; font-size: .78rem; font-weight: 500;
          border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 15%, transparent));
          border-radius: 8px; background: none; color: var(--primary-text-color);
          transition: background .2s, border-color .2s;
        }
        .seg-b.on {
          background: var(--primary-color, var(--zdc-grid));
          border-color: var(--primary-color, var(--zdc-grid));
          color: var(--text-primary-color, #fff); font-weight: 600;
        }
        input[type=range] {
          width: 100%; accent-color: var(--primary-color, var(--zdc-grid));
          margin: 0; cursor: pointer;
        }
        .togs { flex-direction: row; flex-wrap: wrap; gap: 8px; }
        .tog {
          display: inline-flex; align-items: center; gap: 8px;
          border: 0; cursor: pointer; font: inherit;
          padding: 6px 10px; border-radius: 10px;
          background: color-mix(in srgb, currentColor 6%, transparent);
          color: var(--primary-text-color); font-size: .78rem;
        }
        .tog-track {
          width: 30px; height: 16px; border-radius: 999px; position: relative;
          background: color-mix(in srgb, currentColor 25%, transparent);
          transition: background .2s; flex: none;
        }
        .tog-knob {
          position: absolute; top: 2px; left: 2px; width: 12px; height: 12px;
          border-radius: 50%; background: var(--zdc-card-bg); transition: left .2s;
        }
        .tog.on .tog-track { background: var(--zdc-batt); }
        .tog.on .tog-knob { left: 16px; }

        @media (max-width: 340px) {
          .hero { gap: 14px; }
          .zdc-vessel { width: 84px; height: 132px; }
          .soc { font-size: 2.3rem; }
          .rd-l { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .zdc-bubbles { display: none !important; }
        }
      `;
    }
  }

  /* ------------------------------------------------------------------ *
   *  Visual editor                                                     *
   * ------------------------------------------------------------------ */
  class ZendureDashboardCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._devSig = "";
    }

    setConfig(config) {
      this._config = { ...DEFAULTS, ...config };
      this._render();
    }

    set hass(hass) {
      this._hass = hass;
      this._render();
    }

    get hass() {
      return this._hass;
    }

    _schema() {
      const entity = (domain) => ({ entity: { domain } });
      return [
        { name: "name", selector: { text: {} } },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_entities"),
          expanded: true,
          schema: [
            { name: "soc_entity", selector: entity("sensor") },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "solar_entity", selector: entity("sensor") },
                { name: "home_entity", selector: entity("sensor") },
                { name: "charge_entity", selector: entity("sensor") },
                { name: "discharge_entity", selector: entity("sensor") },
                { name: "grid_entity", selector: entity("sensor") },
                { name: "energy_entity", selector: entity("sensor") },
              ],
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_display"),
          schema: [
            {
              name: "",
              type: "grid",
              schema: [
                { name: "show_flow", selector: { boolean: {} } },
                { name: "show_details", selector: { boolean: {} } },
                { name: "show_stats", selector: { boolean: {} } },
                { name: "show_controls", selector: { boolean: {} } },
                { name: "compact", selector: { boolean: {} } },
              ],
            },
            {
              name: "low_soc",
              selector: { number: { min: 5, max: 50, step: 5, mode: "slider", unit_of_measurement: "%" } },
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_battery"),
          schema: [
            { name: "capacity_entity", selector: entity("sensor") },
            {
              name: "nominal_capacity",
              selector: { number: { min: 0, max: 100, step: 0.1, mode: "box", unit_of_measurement: "kWh" } },
            },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "charge_total_entity", selector: entity("sensor") },
                { name: "discharge_total_entity", selector: entity("sensor") },
              ],
            },
            {
              name: "capacity",
              selector: { number: { min: 0, max: 100, step: 0.1, mode: "box", unit_of_measurement: "kWh" } },
            },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_stats"),
          schema: [
            { name: "temp_entity", selector: entity("sensor") },
            { name: "stats_entities", selector: { entity: { multiple: true } } },
          ],
        },
        {
          name: "",
          type: "expandable",
          title: t(this._hass, "ed_sec_controls"),
          schema: [
            { name: "mode_entity", selector: entity("select") },
            {
              name: "select_entities",
              selector: { entity: { multiple: true, domain: "select" } },
            },
            {
              name: "",
              type: "grid",
              schema: [
                { name: "charge_limit_entity", selector: entity("number") },
                { name: "discharge_limit_entity", selector: entity("number") },
              ],
            },
            {
              name: "switch_entities",
              selector: { entity: { multiple: true, domain: ["switch", "input_boolean"] } },
            },
          ],
        },
      ];
    }

    _labels() {
      const h = this._hass;
      return {
        name: t(h, "ed_name"),
        soc_entity: t(h, "ed_soc"),
        solar_entity: t(h, "ed_solar"),
        home_entity: t(h, "ed_home"),
        grid_entity: t(h, "ed_grid"),
        charge_entity: t(h, "ed_charge"),
        discharge_entity: t(h, "ed_discharge"),
        energy_entity: t(h, "ed_energy"),
        capacity_entity: t(h, "ed_capacity_entity"),
        nominal_capacity: t(h, "ed_nominal"),
        charge_total_entity: t(h, "ed_charge_total"),
        discharge_total_entity: t(h, "ed_discharge_total"),
        temp_entity: t(h, "ed_temp"),
        show_flow: t(h, "ed_show_flow"),
        show_details: t(h, "ed_show_details"),
        show_stats: t(h, "ed_show_stats"),
        show_controls: t(h, "ed_show_controls"),
        compact: t(h, "ed_compact"),
        low_soc: t(h, "ed_low_soc"),
        capacity: t(h, "ed_capacity"),
        stats_entities: t(h, "ed_stats_entities"),
        mode_entity: t(h, "ed_mode"),
        select_entities: t(h, "ed_selects"),
        charge_limit_entity: t(h, "ed_charge_limit"),
        discharge_limit_entity: t(h, "ed_discharge_limit"),
        switch_entities: t(h, "ed_switches"),
      };
    }

    _helpers() {
      const h = this._hass;
      return {
        soc_entity: t(h, "ed_soc_helper"),
        charge_entity: t(h, "ed_charge_helper"),
        discharge_entity: t(h, "ed_discharge_helper"),
        capacity: t(h, "ed_capacity_helper"),
        nominal_capacity: t(h, "ed_nominal_helper"),
        discharge_total_entity: t(h, "ed_discharge_total_helper"),
      };
    }

    _render() {
      if (!this._hass || !this._config) return;

      if (!this.shadowRoot.querySelector(".ed")) {
        this.shadowRoot.innerHTML = `
          <style>
            .ed { display: flex; flex-direction: column; gap: 16px; }
            .devrow { display: flex; flex-direction: column; gap: 6px; }
            .devrow label { font-size: .85rem; color: var(--secondary-text-color); }
            .devrow select {
              font: inherit; padding: 10px 12px; border-radius: 8px;
              border: 1px solid var(--divider-color, #ccc);
              background: var(--card-background-color, #fff);
              color: var(--primary-text-color); cursor: pointer;
            }
            .devrow .none { font-size: .8rem; color: var(--secondary-text-color); font-style: italic; }
          </style>
          <div class="ed">
            <div class="devrow">
              <label id="dev-label"></label>
              <select id="dev"></select>
              <span class="none" id="dev-none" style="display:none"></span>
            </div>
            <ha-form id="form"></ha-form>
          </div>
        `;
        this.shadowRoot.getElementById("dev").addEventListener("change", (ev) => {
          const prefix = ev.target.value;
          if (!prefix || !this._devices || !this._devices[prefix]) return;
          const d = this._devices[prefix];
          const merged = { ...this._config };
          for (const k of Object.keys(d)) {
            if (k === "__prefix") continue;
            merged[k] = d[k];
          }
          ev.target.value = "";
          this._config = merged;
          fire(this, "config-changed", { config: this._cleaned(merged) });
          this._render();
        });
      }

      // Device auto-fill dropdown
      this._devices = detectDevices(this._hass);
      const keys = Object.keys(this._devices).sort();
      const sig = keys.join("|");
      const sel = this.shadowRoot.getElementById("dev");
      const none = this.shadowRoot.getElementById("dev-none");
      this.shadowRoot.getElementById("dev-label").textContent = t(this._hass, "ed_autofill");
      if (sig !== this._devSig) {
        this._devSig = sig;
        sel.innerHTML =
          `<option value="">${t(this._hass, "ed_pick")}</option>` +
          keys
            .map((k) => `<option value="${k}">${this._devices[k].name}</option>`)
            .join("");
      }
      sel.style.display = keys.length ? "" : "none";
      none.style.display = keys.length ? "none" : "";
      none.textContent = t(this._hass, "ed_autofill_none");

      // ha-form (schema/labels cached per language — hass updates are frequent)
      const form = this.shadowRoot.getElementById("form");
      const lang = langOf(this._hass);
      if (this._schemaLang !== lang) {
        this._schemaLang = lang;
        this._schemaCache = this._schema();
        const labels = this._labels();
        const helpers = this._helpers();
        form.computeLabel = (s) => labels[s.name] || s.name;
        form.computeHelper = (s) => helpers[s.name] || undefined;
      }
      form.hass = this._hass;
      form.data = this._config;
      form.schema = this._schemaCache;
      if (!form._zdcBound) {
        form._zdcBound = true;
        form.addEventListener("value-changed", (ev) => {
          ev.stopPropagation();
          this._config = { ...DEFAULTS, ...ev.detail.value };
          fire(this, "config-changed", { config: this._cleaned(this._config) });
        });
      }
    }

    /** Strip empty values so the stored YAML stays clean. */
    _cleaned(config) {
      const out = {};
      for (const [k, v] of Object.entries(config)) {
        if (v === "" || v === undefined || v === null) continue;
        if (Array.isArray(v) && v.length === 0) continue;
        // Values equal to their default are re-applied by setConfig — keep YAML minimal
        if (k in DEFAULTS && DEFAULTS[k] === v) continue;
        out[k] = v;
      }
      return out;
    }
  }

  /* ------------------------------------------------------------------ *
   *  Registration                                                      *
   * ------------------------------------------------------------------ */
  customElements.define(CARD_TAG, ZendureDashboardCard);
  customElements.define(EDITOR_TAG, ZendureDashboardCardEditor);

  window.customCards = window.customCards || [];
  window.customCards.push({
    type: CARD_TAG,
    name: "Zendure Dashboard Card",
    description:
      "Modern battery dashboard for Zendure devices — energy flow, statistics and controls. / Tableau de bord moderne pour batteries Zendure.",
    preview: true,
    documentationURL: "https://github.com/zarzak12/zendure-dashboard-card",
  });

  console.info(
    `%c ZENDURE-DASHBOARD-CARD %c v${CARD_VERSION} `,
    "background:#008300;color:#fff;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px",
    "background:#2a78d6;color:#fff;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px"
  );
})();
