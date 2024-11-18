// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/motion/dist/motion.js":[function(require,module,exports) {
var define;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Motion={})}(this,(function(t){"use strict";function e(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class n{constructor(){this.subscriptions=[]}add(t){var n,s;return n=this.subscriptions,s=t,-1===n.indexOf(s)&&n.push(s),()=>e(this.subscriptions,t)}notify(t,e,n){const s=this.subscriptions.length;if(s)if(1===s)this.subscriptions[0](t,e,n);else for(let i=0;i<s;i++){const s=this.subscriptions[i];s&&s(t,e,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function s(t,e){return e?t*(1e3/e):0}const i=!1,r=t=>t;const o=["read","resolveKeyframes","update","preRender","render","postRender"];const{schedule:a,cancel:l,state:u,steps:c}=function(t,e){let n=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,a=o.reduce((t,e)=>(t[e]=function(t){let e=new Set,n=new Set,s=!1,i=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(e){r.has(e)&&(l.schedule(e),t()),e(o)}const l={schedule:(t,i=!1,o=!1)=>{const a=o&&s?e:n;return i&&r.add(t),a.has(t)||a.add(t),t},cancel:t=>{n.delete(t),r.delete(t)},process:t=>{o=t,s?i=!0:(s=!0,[e,n]=[n,e],n.clear(),e.forEach(a),s=!1,i&&(i=!1,l.process(t)))}};return l}(r),t),{}),{read:l,resolveKeyframes:u,update:c,preRender:h,render:d,postRender:p}=a,f=()=>{const r=performance.now();n=!1,i.delta=s?1e3/60:Math.max(Math.min(r-i.timestamp,40),1),i.timestamp=r,i.isProcessing=!0,l.process(i),u.process(i),c.process(i),h.process(i),d.process(i),p.process(i),i.isProcessing=!1,n&&e&&(s=!1,t(f))};return{schedule:o.reduce((e,r)=>{const o=a[r];return e[r]=(e,r=!1,a=!1)=>(n||(n=!0,s=!0,i.isProcessing||t(f)),o.schedule(e,r,a)),e},{}),cancel:t=>{for(let e=0;e<o.length;e++)a[o[e]].cancel(t)},state:i,steps:a}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:r,!0);let h;function d(){h=void 0}const p={now:()=>(void 0===h&&p.set(u.isProcessing||i?u.timestamp:performance.now()),h),set:t=>{h=t,queueMicrotask(d)}};class f{constructor(t,e={}){this.version="11.11.17",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(t,e=!0)=>{const n=p.now();this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),e&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){var e;this.current=t,this.updatedAt=p.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=(e=this.current,!isNaN(parseFloat(e))))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new n);const s=this.events[t].add(e);return"change"===t?()=>{s(),a.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,n){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=p.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,30);return s(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function m(t,e){return new f(t,e)}function g(t){let e;return()=>(void 0===e&&(e=t()),e)}const y=g(()=>void 0!==window.ScrollTimeline);class v{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,e){return Promise.all(this.animations).then(t).catch(e)}getAll(t){return this.animations[0][t]}setAll(t,e){for(let n=0;n<this.animations.length;n++)this.animations[n][t]=e}attachTimeline(t,e){const n=this.animations.map(n=>y()&&n.attachTimeline?n.attachTimeline(t):e(n));return()=>{n.forEach((t,e)=>{t&&t(),this.animations[e].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const w=t=>1e3*t,b=t=>t/1e3;function T(t,e,n){const i=Math.max(e-5,0);return s(n-t(i),e-i)}let x=r,S=r;const V=(t,e,n)=>n>e?e:n<t?t:n;function A({duration:t=800,bounce:e=.25,velocity:n=0,mass:s=1}){let i,r,o=1-e;o=V(.05,1,o),t=V(.01,10,b(t)),o<1?(i=e=>{const s=e*o,i=s*t;return.001-(s-n)/M(e,o)*Math.exp(-i)},r=e=>{const s=e*o*t,r=s*n+n,a=Math.pow(o,2)*Math.pow(e,2)*t,l=Math.exp(-s),u=M(Math.pow(e,2),o);return(.001-i(e)>0?-1:1)*((r-a)*l)/u}):(i=e=>Math.exp(-e*t)*((e-n)*t+1)-.001,r=e=>Math.exp(-e*t)*(t*t*(n-e)));const a=function(t,e,n){let s=n;for(let n=1;n<12;n++)s-=t(s)/e(s);return s}(i,r,5/t);if(t=w(t),isNaN(a))return{stiffness:100,damping:10,duration:t};{const e=Math.pow(a,2)*s;return{stiffness:e,damping:2*o*Math.sqrt(s*e),duration:t}}}function M(t,e){return t*Math.sqrt(1-e*e)}const P=["duration","bounce"],k=["stiffness","damping","mass"];function F(t,e){return e.some(e=>void 0!==t[e])}function C({keyframes:t,restDelta:e,restSpeed:n,...s}){const i=t[0],r=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:c,velocity:h,isResolvedFromDuration:d}=function(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!F(t,k)&&F(t,P)){const n=A(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}({...s,velocity:-b(s.velocity||0)}),p=h||0,f=l/(2*Math.sqrt(a*u)),m=r-i,g=b(Math.sqrt(a/u)),y=Math.abs(m)<5;let v;if(n||(n=y?.01:2),e||(e=y?.005:.5),f<1){const t=M(g,f);v=e=>{const n=Math.exp(-f*g*e);return r-n*((p+f*g*m)/t*Math.sin(t*e)+m*Math.cos(t*e))}}else if(1===f)v=t=>r-Math.exp(-g*t)*(m+(p+g*m)*t);else{const t=g*Math.sqrt(f*f-1);v=e=>{const n=Math.exp(-f*g*e),s=Math.min(t*e,300);return r-n*((p+f*g*m)*Math.sinh(s)+t*m*Math.cosh(s))/t}}return{calculatedDuration:d&&c||null,next:t=>{const s=v(t);if(d)o.done=t>=c;else{let i=0;f<1&&(i=0===t?w(p):T(v,t,s));const a=Math.abs(i)<=n,l=Math.abs(r-s)<=e;o.done=a&&l}return o.value=o.done?r:s,o}}}function E(t){let e=0;let n=t.next(e);for(;!n.done&&e<2e4;)e+=50,n=t.next(e);return e>=2e4?1/0:e}function O(t,e=100,n){const s=n({...t,keyframes:[0,e]}),i=Math.min(E(s),2e4);return{type:"keyframes",ease:t=>s.next(i*t).value/e,duration:b(i)}}const I=(t,e,n)=>t+(e-t)*n,R=(t,e,n)=>{const s=e-t;return 0===s?1:(n-t)/s};function B(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=R(0,e,s);t.push(I(n,1,i))}}function L(t){const e=[0];return B(e,t.length-1),e}const W=t=>Boolean(t&&t.getVelocity);function D(t,e,n){var s;if("string"==typeof t){let i=document;e&&(S(Boolean(e.current)),i=e.current),n?(null!==(s=n[t])&&void 0!==s||(n[t]=i.querySelectorAll(t)),t=n[t]):t=i.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function N(t){return"object"==typeof t&&!Array.isArray(t)}function K(t,e,n,s){return"string"==typeof t&&N(e)?D(t,n,s):t instanceof NodeList?Array.from(t):Array.isArray(t)?t:[t]}function j(t){return"function"==typeof t}function z(t,e,n,s){var i;return"number"==typeof e?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):"<"===e?n:null!==(i=s.get(e))&&void 0!==i?i:t}const $=(t,e,n)=>{const s=e-t;return((n-t)%s+s)%s+t},H=t=>Array.isArray(t)&&"number"!=typeof t[0];function U(t,e){return H(t)?t[$(0,t.length,e)]:t}function Y(t,n,s,i,r,o){!function(t,n,s){for(let i=0;i<t.length;i++){const r=t[i];r.at>n&&r.at<s&&(e(t,r),i--)}}(t,r,o);for(let e=0;e<n.length;e++)t.push({value:n[e],at:I(r,o,i[e]),easing:U(s,e)})}function q(t,e){return t.at===e.at?null===t.value?1:null===e.value?-1:0:t.at-e.at}function X(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function G(t,e){return e[t]||(e[t]=[]),e[t]}function Z(t){return Array.isArray(t)?t:[t]}function _(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}const J=t=>"number"==typeof t,Q=t=>t.every(J),tt=new WeakMap,et=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],nt=new Set(et),st={type:"spring",stiffness:500,damping:25,restSpeed:10},it={type:"keyframes",duration:.8},rt={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ot=(t,{keyframes:e})=>e.length>2?it:nt.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:st:rt;function at(t,e){return t?t[e]||t.default||t:void 0}const lt=t=>null!==t;function ut(t,{repeat:e,repeatType:n="loop"},s){const i=t.filter(lt),r=e&&"loop"!==n&&e%2==1?0:i.length-1;return r&&void 0!==s?s:i[r]}const ct=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t;function ht(t,e,n,s){if(t===e&&n===s)return r;const i=e=>function(t,e,n,s,i){let r,o,a=0;do{o=e+(n-e)/2,r=ct(o,s,i)-t,r>0?n=o:e=o}while(Math.abs(r)>1e-7&&++a<12);return o}(e,0,1,t,n);return t=>0===t||1===t?t:ct(i(t),e,s)}const dt=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,pt=t=>e=>1-t(1-e),ft=ht(.33,1.53,.69,.99),mt=pt(ft),gt=dt(mt),yt=t=>(t*=2)<1?.5*mt(t):.5*(2-Math.pow(2,-10*(t-1))),vt=t=>1-Math.sin(Math.acos(t)),wt=pt(vt),bt=dt(vt),Tt=t=>/^0[^.\s]+$/u.test(t);const xt=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),St=t=>e=>"string"==typeof e&&e.startsWith(t),Vt=St("--"),At=St("var(--"),Mt=t=>!!At(t)&&Pt.test(t.split("/*")[0].trim()),Pt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,kt=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ft(t,e,n=1){const[s,i]=function(t){const e=kt.exec(t);if(!e)return[,];const[,n,s,i]=e;return["--"+(null!=n?n:s),i]}(t);if(!s)return;const r=window.getComputedStyle(e).getPropertyValue(s);if(r){const t=r.trim();return xt(t)?parseFloat(t):t}return Mt(i)?Ft(i,e,n+1):i}const Ct={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},Et={...Ct,transform:t=>V(0,1,t)},Ot={...Ct,default:1},It=t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),Rt=It("deg"),Bt=It("%"),Lt=It("px"),Wt=It("vh"),Dt=It("vw"),Nt={...Bt,parse:t=>Bt.parse(t)/100,transform:t=>Bt.transform(100*t)},Kt=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),jt=t=>t===Ct||t===Lt,zt=(t,e)=>parseFloat(t.split(", ")[e]),$t=(t,e)=>(n,{transform:s})=>{if("none"===s||!s)return 0;const i=s.match(/^matrix3d\((.+)\)$/u);if(i)return zt(i[1],e);{const e=s.match(/^matrix\((.+)\)$/u);return e?zt(e[1],t):0}},Ht=new Set(["x","y","z"]),Ut=et.filter(t=>!Ht.has(t));const Yt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:$t(4,13),y:$t(5,14)};Yt.translateX=Yt.x,Yt.translateY=Yt.y;const qt=t=>e=>e.test(t),Xt=[Ct,Lt,Bt,Rt,Dt,Wt,{test:t=>"auto"===t,parse:t=>t}],Gt=t=>Xt.find(qt(t)),Zt=new Set;let _t=!1,Jt=!1;function Qt(){if(Jt){const t=Array.from(Zt).filter(t=>t.needsMeasurement),e=new Set(t.map(t=>t.element)),n=new Map;e.forEach(t=>{const e=function(t){const e=[];return Ut.forEach(n=>{const s=t.getValue(n);void 0!==s&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e}(t);e.length&&(n.set(t,e),t.render())}),t.forEach(t=>t.measureInitialState()),e.forEach(t=>{t.render();const e=n.get(t);e&&e.forEach(([e,n])=>{var s;null===(s=t.getValue(e))||void 0===s||s.set(n)})}),t.forEach(t=>t.measureEndState()),t.forEach(t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)})}Jt=!1,_t=!1,Zt.forEach(t=>t.complete()),Zt.clear()}function te(){Zt.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Jt=!0)})}class ee{constructor(t,e,n,s,i,r=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=n,this.motionValue=s,this.element=i,this.isAsync=r}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Zt.add(this),_t||(_t=!0,a.read(te),a.resolveKeyframes(Qt))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:n,motionValue:s}=this;for(let i=0;i<t.length;i++)if(null===t[i])if(0===i){const i=null==s?void 0:s.get(),r=t[t.length-1];if(void 0!==i)t[0]=i;else if(n&&e){const s=n.readValue(e,r);null!=s&&(t[0]=s)}void 0===t[0]&&(t[0]=r),s&&void 0===i&&s.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Zt.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Zt.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ne=t=>Math.round(1e5*t)/1e5,se=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const ie=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,re=(t,e)=>n=>Boolean("string"==typeof n&&ie.test(n)&&n.startsWith(t)||e&&!function(t){return null==t}(n)&&Object.prototype.hasOwnProperty.call(n,e)),oe=(t,e,n)=>s=>{if("string"!=typeof s)return s;const[i,r,o,a]=s.match(se);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:void 0!==a?parseFloat(a):1}},ae={...Ct,transform:t=>Math.round((t=>V(0,255,t))(t))},le={test:re("rgb","red"),parse:oe("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+ae.transform(t)+", "+ae.transform(e)+", "+ae.transform(n)+", "+ne(Et.transform(s))+")"};const ue={test:re("#"),parse:function(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}},transform:le.transform},ce={test:re("hsl","hue"),parse:oe("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+Bt.transform(ne(e))+", "+Bt.transform(ne(n))+", "+ne(Et.transform(s))+")"},he={test:t=>le.test(t)||ue.test(t)||ce.test(t),parse:t=>le.test(t)?le.parse(t):ce.test(t)?ce.parse(t):ue.parse(t),transform:t=>"string"==typeof t?t:t.hasOwnProperty("red")?le.transform(t):ce.transform(t)},de=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const pe=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fe(t){const e=t.toString(),n=[],s={color:[],number:[],var:[]},i=[];let r=0;const o=e.replace(pe,t=>(he.test(t)?(s.color.push(r),i.push("color"),n.push(he.parse(t))):t.startsWith("var(")?(s.var.push(r),i.push("var"),n.push(t)):(s.number.push(r),i.push("number"),n.push(parseFloat(t))),++r,"${}")).split("${}");return{values:n,split:o,indexes:s,types:i}}function me(t){return fe(t).values}function ge(t){const{split:e,types:n}=fe(t),s=e.length;return t=>{let i="";for(let r=0;r<s;r++)if(i+=e[r],void 0!==t[r]){const e=n[r];i+="number"===e?ne(t[r]):"color"===e?he.transform(t[r]):t[r]}return i}}const ye=t=>"number"==typeof t?0:t;const ve={test:function(t){var e,n;return isNaN(t)&&"string"==typeof t&&((null===(e=t.match(se))||void 0===e?void 0:e.length)||0)+((null===(n=t.match(de))||void 0===n?void 0:n.length)||0)>0},parse:me,createTransformer:ge,getAnimatableNone:function(t){const e=me(t);return ge(t)(e.map(ye))}},we=new Set(["brightness","contrast","saturate","opacity"]);function be(t){const[e,n]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;const[s]=n.match(se)||[];if(!s)return t;const i=n.replace(s,"");let r=we.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const Te=/\b([a-z-]*)\(.*?\)/gu,xe={...ve,getAnimatableNone:t=>{const e=t.match(Te);return e?e.map(be).join(" "):t}},Se={borderWidth:Lt,borderTopWidth:Lt,borderRightWidth:Lt,borderBottomWidth:Lt,borderLeftWidth:Lt,borderRadius:Lt,radius:Lt,borderTopLeftRadius:Lt,borderTopRightRadius:Lt,borderBottomRightRadius:Lt,borderBottomLeftRadius:Lt,width:Lt,maxWidth:Lt,height:Lt,maxHeight:Lt,top:Lt,right:Lt,bottom:Lt,left:Lt,padding:Lt,paddingTop:Lt,paddingRight:Lt,paddingBottom:Lt,paddingLeft:Lt,margin:Lt,marginTop:Lt,marginRight:Lt,marginBottom:Lt,marginLeft:Lt,backgroundPositionX:Lt,backgroundPositionY:Lt},Ve={rotate:Rt,rotateX:Rt,rotateY:Rt,rotateZ:Rt,scale:Ot,scaleX:Ot,scaleY:Ot,scaleZ:Ot,skew:Rt,skewX:Rt,skewY:Rt,distance:Lt,translateX:Lt,translateY:Lt,translateZ:Lt,x:Lt,y:Lt,z:Lt,perspective:Lt,transformPerspective:Lt,opacity:Et,originX:Nt,originY:Nt,originZ:Lt},Ae={...Ct,transform:Math.round},Me={...Se,...Ve,zIndex:Ae,size:Lt,fillOpacity:Et,strokeOpacity:Et,numOctaves:Ae},Pe={...Me,color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,filter:xe,WebkitFilter:xe},ke=t=>Pe[t];function Fe(t,e){let n=ke(t);return n!==xe&&(n=ve),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Ce=new Set(["auto","none","0"]);class Ee extends ee{constructor(t,e,n,s,i){super(t,e,n,s,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:n}=this;if(!e||!e.current)return;super.readKeyframes();for(let n=0;n<t.length;n++){let s=t[n];if("string"==typeof s&&(s=s.trim(),Mt(s))){const i=Ft(s,e.current);void 0!==i&&(t[n]=i),n===t.length-1&&(this.finalKeyframe=s)}}if(this.resolveNoneKeyframes(),!Kt.has(n)||2!==t.length)return;const[s,i]=t,r=Gt(s),o=Gt(i);if(r!==o)if(jt(r)&&jt(o))for(let e=0;e<t.length;e++){const n=t[e];"string"==typeof n&&(t[e]=parseFloat(n))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,n=[];for(let e=0;e<t.length;e++)("number"==typeof(s=t[e])?0===s:null===s||"none"===s||"0"===s||Tt(s))&&n.push(e);var s;n.length&&function(t,e,n){let s=0,i=void 0;for(;s<t.length&&!i;){const e=t[s];"string"==typeof e&&!Ce.has(e)&&fe(e).values.length&&(i=t[s]),s++}if(i&&n)for(const s of e)t[s]=Fe(n,i)}(t,n,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:n}=this;if(!t||!t.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Yt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const s=e[e.length-1];void 0!==s&&t.getValue(n,s).jump(s,!1)}measureEndState(){var t;const{element:e,name:n,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const r=s.length-1,o=s[r];s[r]=Yt[n](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),(null===(t=this.removedTransforms)||void 0===t?void 0:t.length)&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}}const Oe=(t,e)=>"zIndex"!==e&&(!("number"!=typeof t&&!Array.isArray(t))||!("string"!=typeof t||!ve.test(t)&&"0"!==t||t.startsWith("url(")));function Ie(t,e,n,s){const i=t[0];if(null===i)return!1;if("display"===e||"visibility"===e)return!0;const r=t[t.length-1],o=Oe(i,e),a=Oe(r,e);return!(!o||!a)&&(function(t){const e=t[0];if(1===t.length)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}(t)||("spring"===n||j(n))&&s)}class Re{constructor({autoplay:t=!0,delay:e=0,type:n="keyframes",repeat:s=0,repeatDelay:i=0,repeatType:r="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=p.now(),this.options={autoplay:t,delay:e,type:n,repeat:s,repeatDelay:i,repeatType:r,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(te(),Qt()),this._resolved}onKeyframesResolved(t,e){this.resolvedAt=p.now(),this.hasAttemptedResolve=!0;const{name:n,type:s,velocity:i,delay:r,onComplete:o,onUpdate:a,isGenerator:l}=this.options;if(!l&&!Ie(t,n,s,i)){if(!r)return null==a||a(ut(t,this.options,e)),null==o||o(),void this.resolveFinishedPromise();this.options.duration=0}const u=this.initPlayback(t,e);!1!==u&&(this._resolved={keyframes:t,finalKeyframe:e,...u},this.onPostResolved())}onPostResolved(){}then(t,e){return this.currentFinishedPromise.then(t,e)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Be({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const h=t[0],d={done:!1,value:h},p=t=>void 0===a?l:void 0===l||Math.abs(a-t)<Math.abs(l-t)?a:l;let f=n*e;const m=h+f,g=void 0===o?m:o(m);g!==m&&(f=g-h);const y=t=>-f*Math.exp(-t/s),v=t=>g+y(t),w=t=>{const e=y(t),n=v(t);d.done=Math.abs(e)<=u,d.value=d.done?g:n};let b,x;const S=t=>{var e;(e=d.value,void 0!==a&&e<a||void 0!==l&&e>l)&&(b=t,x=C({keyframes:[d.value,p(d.value)],velocity:T(v,t,d.value),damping:i,stiffness:r,restDelta:u,restSpeed:c}))};return S(0),{calculatedDuration:null,next:t=>{let e=!1;return x||void 0!==b||(e=!0,w(t),S(t)),void 0!==b&&t>=b?x.next(t-b):(!e&&w(t),d)}}}const Le=ht(.42,0,1,1),We=ht(0,0,.58,1),De=ht(.42,0,.58,1),Ne=t=>Array.isArray(t)&&"number"==typeof t[0],Ke={linear:r,easeIn:Le,easeInOut:De,easeOut:We,circIn:vt,circInOut:bt,circOut:wt,backIn:mt,backInOut:gt,backOut:ft,anticipate:yt},je=t=>{if(Ne(t)){S(4===t.length);const[e,n,s,i]=t;return ht(e,n,s,i)}return"string"==typeof t?Ke[t]:t},ze=(t,e)=>n=>e(t(n)),$e=(...t)=>t.reduce(ze);function He(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Ue(t,e){return n=>n>0?e:t}const Ye=(t,e,n)=>{const s=t*t,i=n*(e*e-s)+s;return i<0?0:Math.sqrt(i)},qe=[ue,le,ce];function Xe(t){const e=(n=t,qe.find(t=>t.test(n)));var n;if(!Boolean(e))return!1;let s=e.parse(t);return e===ce&&(s=function({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,n/=100;let i=0,r=0,o=0;if(e/=100){const s=n<.5?n*(1+e):n+e-n*e,a=2*n-s;i=He(a,s,t+1/3),r=He(a,s,t),o=He(a,s,t-1/3)}else i=r=o=n;return{red:Math.round(255*i),green:Math.round(255*r),blue:Math.round(255*o),alpha:s}}(s)),s}const Ge=(t,e)=>{const n=Xe(t),s=Xe(e);if(!n||!s)return Ue(t,e);const i={...n};return t=>(i.red=Ye(n.red,s.red,t),i.green=Ye(n.green,s.green,t),i.blue=Ye(n.blue,s.blue,t),i.alpha=I(n.alpha,s.alpha,t),le.transform(i))},Ze=new Set(["none","hidden"]);function _e(t,e){return n=>I(t,e,n)}function Je(t){return"number"==typeof t?_e:"string"==typeof t?Mt(t)?Ue:he.test(t)?Ge:en:Array.isArray(t)?Qe:"object"==typeof t?he.test(t)?Ge:tn:Ue}function Qe(t,e){const n=[...t],s=n.length,i=t.map((t,n)=>Je(t)(t,e[n]));return t=>{for(let e=0;e<s;e++)n[e]=i[e](t);return n}}function tn(t,e){const n={...t,...e},s={};for(const i in n)void 0!==t[i]&&void 0!==e[i]&&(s[i]=Je(t[i])(t[i],e[i]));return t=>{for(const e in s)n[e]=s[e](t);return n}}const en=(t,e)=>{const n=ve.createTransformer(e),s=fe(t),i=fe(e);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?Ze.has(t)&&!i.values.length||Ze.has(e)&&!s.values.length?function(t,e){return Ze.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}(t,e):$e(Qe(function(t,e){var n;const s=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],a=t.indexes[o][i[o]],l=null!==(n=t.values[a])&&void 0!==n?n:0;s[r]=l,i[o]++}return s}(s,i),i.values),n):Ue(t,e)};function nn(t,e,n){if("number"==typeof t&&"number"==typeof e&&"number"==typeof n)return I(t,e,n);return Je(t)(t,e)}function sn(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const o=t.length;if(S(o===e.length),1===o)return()=>e[0];if(2===o&&t[0]===t[1])return()=>e[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=function(t,e,n){const s=[],i=n||nn,o=t.length-1;for(let n=0;n<o;n++){let o=i(t[n],t[n+1]);if(e){const t=Array.isArray(e)?e[n]||r:e;o=$e(t,o)}s.push(o)}return s}(e,s,i),l=a.length,u=e=>{let n=0;if(l>1)for(;n<t.length-2&&!(e<t[n+1]);n++);const s=R(t[n],t[n+1],e);return a[n](s)};return n?e=>u(V(t[0],t[o-1],e)):u}function rn({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=H(s)?s.map(je):je(s),r={done:!1,value:e[0]},o=sn(function(t,e){return t.map(t=>t*e)}(n&&n.length===e.length?n:L(e),t),e,{ease:Array.isArray(i)?i:(a=e,l=i,a.map(()=>l||De).splice(0,a.length-1))});var a,l;return{calculatedDuration:t,next:e=>(r.value=o(e),r.done=e>=t,r)}}const on=t=>{const e=({timestamp:e})=>t(e);return{start:()=>a.update(e,!0),stop:()=>l(e),now:()=>u.isProcessing?u.timestamp:p.now()}},an={decay:Be,inertia:Be,tween:rn,keyframes:rn,spring:C},ln=t=>t/100;class un extends Re{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:t}=this.options;t&&t()};const{name:e,motionValue:n,element:s,keyframes:i}=this.options,r=(null==s?void 0:s.KeyframeResolver)||ee;this.resolver=new r(i,(t,e)=>this.onKeyframesResolved(t,e),e,n,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:e="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:i,velocity:r=0}=this.options,o=j(e)?e:an[e]||rn;let a,l;o!==rn&&"number"!=typeof t[0]&&(a=$e(ln,nn(t[0],t[1])),t=[0,100]);const u=o({...this.options,keyframes:t});"mirror"===i&&(l=o({...this.options,keyframes:[...t].reverse(),velocity:-r})),null===u.calculatedDuration&&(u.calculatedDuration=E(u));const{calculatedDuration:c}=u,h=c+s;return{generator:u,mirroredGenerator:l,mapPercentToKeyframes:a,calculatedDuration:c,resolvedDuration:h,totalDuration:h*(n+1)-s}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&t?this.state=this.pendingPlayState:this.pause()}tick(t,e=!1){const{resolved:n}=this;if(!n){const{keyframes:t}=this.options;return{done:!0,value:t[t.length-1]}}const{finalKeyframe:s,generator:i,mirroredGenerator:r,mapPercentToKeyframes:o,keyframes:a,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=n;if(null===this.startTime)return i.next(0);const{delay:h,repeat:d,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),e?this.currentTime=t:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-h*(this.speed>=0?1:-1),y=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let v=this.currentTime,w=i;if(d){const t=Math.min(this.currentTime,u)/c;let e=Math.floor(t),n=t%1;!n&&t>=1&&(n=1),1===n&&e--,e=Math.min(e,d+1);Boolean(e%2)&&("reverse"===p?(n=1-n,f&&(n-=f/c)):"mirror"===p&&(w=r)),v=V(0,1,n)*c}const b=y?{done:!1,value:a[0]}:w.next(v);o&&(b.value=o(b.value));let{done:T}=b;y||null===l||(T=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const x=null===this.holdTime&&("finished"===this.state||"running"===this.state&&T);return x&&void 0!==s&&(b.value=ut(a,this.options,s)),m&&m(b.value),x&&this.finish(),b}get duration(){const{resolved:t}=this;return t?b(t.calculatedDuration):0}get time(){return b(this.currentTime)}set time(t){t=w(t),this.currentTime=t,null!==this.holdTime||0===this.speed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=b(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:t=on,onPlay:e,startTime:n}=this.options;this.driver||(this.driver=t(t=>this.tick(t))),e&&e();const s=this.driver.now();null!==this.holdTime?this.startTime=s-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=s):this.startTime=null!=n?n:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;this._resolved?(this.state="paused",this.holdTime=null!==(t=this.currentTime)&&void 0!==t?t:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const cn=new Set(["opacity","clipPath","filter","transform"]),hn={linearEasing:void 0};function dn(t,e){const n=g(t);return()=>{var t;return null!==(t=hn[e])&&void 0!==t?t:n()}}const pn=dn(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0},"linearEasing");function fn(t){return Boolean("function"==typeof t&&pn()||!t||"string"==typeof t&&(t in gn||pn())||Ne(t)||Array.isArray(t)&&t.every(fn))}const mn=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,gn={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mn([0,.65,.55,1]),circOut:mn([.55,0,1,.45]),backIn:mn([.31,.01,.66,-.59]),backOut:mn([.33,1.53,.69,.99])};function yn(t,e){return t?"function"==typeof t&&pn()?((t,e)=>{let n="";const s=Math.max(Math.round(e/10),2);for(let e=0;e<s;e++)n+=t(R(0,s-1,e))+", ";return`linear(${n.substring(0,n.length-2)})`})(t,e):Ne(t)?mn(t):Array.isArray(t)?t.map(t=>yn(t,e)||gn.easeOut):gn[t]:void 0}function vn(t,e,n,{delay:s=0,duration:i=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=yn(a,i);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:s,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:r+1,direction:"reverse"===o?"alternate":"normal"})}function wn(t,e){t.timeline=e,t.onfinish=null}const bn=g(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));const Tn={anticipate:yt,backInOut:gt,circInOut:bt};class xn extends Re{constructor(t){super(t);const{name:e,motionValue:n,element:s,keyframes:i}=this.options;this.resolver=new Ee(i,(t,e)=>this.onKeyframesResolved(t,e),e,n,s),this.resolver.scheduleResolve()}initPlayback(t,e){var n;let{duration:s=300,times:i,ease:r,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!(null===(n=a.owner)||void 0===n?void 0:n.current))return!1;var c;if("string"==typeof r&&pn()&&r in Tn&&(r=Tn[r]),j((c=this.options).type)||"spring"===c.type||!fn(c.ease)){const{onComplete:e,onUpdate:n,motionValue:a,element:l,...u}=this.options,c=function(t,e){const n=new un({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:t[0]};const i=[];let r=0;for(;!s.done&&r<2e4;)s=n.sample(r),i.push(s.value),r+=10;return{times:void 0,keyframes:i,duration:r-10,ease:"linear"}}(t,u);1===(t=c.keyframes).length&&(t[1]=t[0]),s=c.duration,i=c.times,r=c.ease,o="keyframes"}const h=vn(a.owner.current,l,t,{...this.options,duration:s,times:i,ease:r});return h.startTime=null!=u?u:this.calcStartTime(),this.pendingTimeline?(wn(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:n}=this.options;a.set(ut(t,this.options,e)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:s,times:i,type:o,ease:r,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:e}=t;return b(e)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:e}=t;return b(e.currentTime||0)}set time(t){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.currentTime=w(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:e}=t;return e.playbackRate}set speed(t){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:e}=t;return e.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:e}=t;return e.startTime}attachTimeline(t){if(this._resolved){const{resolved:e}=this;if(!e)return r;const{animation:n}=e;wn(n,t)}else this.pendingTimeline=t;return r}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:e}=t;"finished"===e.playState&&this.updateFinishedPromise(),e.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:e,keyframes:n,duration:s,type:i,ease:r,times:o}=t;if("idle"===e.playState||"finished"===e.playState)return;if(this.time){const{motionValue:t,onUpdate:e,onComplete:a,element:l,...u}=this.options,c=new un({...u,keyframes:n,duration:s,type:i,ease:r,times:o,isGenerator:!0}),h=w(this.time);t.setWithVelocity(c.sample(h-10).value,c.sample(h).value,10)}const{onStop:a}=this.options;a&&a(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:e,name:n,repeatDelay:s,repeatType:i,damping:r,type:o}=t;return bn()&&n&&cn.has(n)&&e&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate&&!s&&"mirror"!==i&&0!==r&&"inertia"!==o}}const Sn=(t,e,n,s={},i,r)=>o=>{const l=at(s,t)||{},u=l.delay||s.delay||0;let{elapsed:c=0}=s;c-=w(u);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...l,delay:-c,onUpdate:t=>{e.set(t),l.onUpdate&&l.onUpdate(t)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:t,motionValue:e,element:r?void 0:i};(function({when:t,delay:e,delayChildren:n,staggerChildren:s,staggerDirection:i,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length})(l)||(h={...h,...ot(t,h)}),h.duration&&(h.duration=w(h.duration)),h.repeatDelay&&(h.repeatDelay=w(h.repeatDelay)),void 0!==h.from&&(h.keyframes[0]=h.from);let d=!1;if((!1===h.type||0===h.duration&&!h.repeatDelay)&&(h.duration=0,0===h.delay&&(d=!0)),d&&!r&&void 0!==e.get()){const t=ut(h.keyframes,l);if(void 0!==t)return a.update(()=>{h.onUpdate(t),h.onComplete()}),new v([])}return!r&&xn.supports(h)?new xn(h):new un(h)},Vn=t=>(t=>Array.isArray(t))(t)?t[t.length-1]||0:t;function An(t){const e=[{},{}];return null==t||t.values.forEach((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()}),e}function Mn(t,e,n,s){if("function"==typeof e){const[i,r]=An(s);e=e(void 0!==n?n:t.custom,i,r)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){const[i,r]=An(s);e=e(void 0!==n?n:t.custom,i,r)}return e}function Pn(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,m(n))}function kn(t,e){const n=function(t,e,n){const s=t.getProps();return Mn(s,e,void 0!==n?n:s.custom,t)}(t,e);let{transitionEnd:s={},transition:i={},...r}=n||{};r={...r,...s};for(const e in r){Pn(t,e,Vn(r[e]))}}const Fn=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Cn="data-"+Fn("framerAppearId");function En(t){return t.props[Cn]}function On(t,e){const n=t.getValue("willChange");if(s=n,Boolean(W(s)&&s.add))return n.add(e);var s}function In({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&!0!==e[n];return e[n]=!1,s}function Rn(t,e,{delay:n=0,transitionOverride:s,type:i}={}){var r;let{transition:o=t.getDefaultTransition(),transitionEnd:l,...u}=e;s&&(o=s);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const e in u){const s=t.getValue(e,null!==(r=t.latestValues[e])&&void 0!==r?r:null),i=u[e];if(void 0===i||h&&In(h,e))continue;const l={delay:n,...at(o||{},e)};let d=!1;if(window.MotionHandoffAnimation){const n=En(t);if(n){const t=window.MotionHandoffAnimation(n,e,a);null!==t&&(l.startTime=t,d=!0)}}On(t,e),s.start(Sn(e,s,i,t.shouldReduceMotion&&nt.has(e)?{type:!1}:l,t,d));const p=s.animation;p&&c.push(p)}return l&&Promise.all(c).then(()=>{a.update(()=>{l&&kn(t,l)})}),c}const Bn={};function Ln(t,{layout:e,layoutId:n}){return nt.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!Bn[t]||"opacity"===t)}function Wn(t,e,n){var s;const{style:i}=t,r={};for(const o in i)(W(i[o])||e.style&&W(e.style[o])||Ln(o,t)||void 0!==(null===(s=null==n?void 0:n.getValue(o))||void 0===s?void 0:s.liveStyle))&&(r[o]=i[o]);return r}const Dn="undefined"!=typeof window,Nn={current:null},Kn={current:!1};const jn=["initial","animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"];function zn(t){return null!==(e=t.animate)&&"object"==typeof e&&"function"==typeof e.start||jn.some(e=>function(t){return"string"==typeof t||Array.isArray(t)}(t[e]));var e}const $n={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Hn={};for(const t in $n)Hn[t]={isEnabled:e=>$n[t].some(t=>!!e[t])};const Un=[...Xt,he,ve],Yn=()=>({x:{min:0,max:0},y:{min:0,max:0}}),qn=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Xn{scrapeMotionValuesFromProps(t,e,n){return{}}constructor({parent:t,props:e,presenceContext:n,reducedMotionConfig:s,blockInitialAnimation:i,visualState:r},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ee,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const t=p.now();this.renderScheduledAt<t&&(this.renderScheduledAt=t,a.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=r;this.latestValues=l,this.baseTarget={...l},this.initialValues=e.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=e,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.blockInitialAnimation=Boolean(i),this.isControllingVariants=zn(e),this.isVariantNode=function(t){return Boolean(zn(t)||t.variants)}(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...h}=this.scrapeMotionValuesFromProps(e,{},this);for(const t in h){const e=h[t];void 0!==l[t]&&W(e)&&e.set(l[t],!1)}}mount(t){this.current=t,tt.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),Kn.current||function(){if(Kn.current=!0,Dn)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Nn.current=t.matches;t.addListener(e),e()}else Nn.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Nn.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){tt.delete(this.current),this.projection&&this.projection.unmount(),l(this.notifyUpdate),l(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=nt.has(t),s=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&a.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=e.on("renderRequest",this.scheduleRender);let r;window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{s(),i(),r&&r(),e.owner&&e.stop()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in Hn){const e=Hn[t];if(!e)continue;const{isEnabled:n,Feature:s}=e;if(!this.features[t]&&s&&n(this.props)&&(this.features[t]=new s(this)),this.features[t]){const e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let e=0;e<qn.length;e++){const n=qn[e];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);const s=t["on"+n];s&&(this.propEventSubscriptions[n]=this.on(n,s))}this.prevMotionValues=function(t,e,n){for(const s in e){const i=e[s],r=n[s];if(W(i))t.addValue(s,i);else if(W(r))t.addValue(s,m(i,{owner:t}));else if(r!==i)if(t.hasValue(s)){const e=t.getValue(s);!0===e.liveStyle?e.jump(i):e.hasAnimated||e.set(i)}else{const e=t.getStaticValue(s);t.addValue(s,m(void 0!==e?e:i,{owner:t}))}}for(const s in n)void 0===e[s]&&t.removeValue(s);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const n=this.values.get(t);e!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return void 0===n&&void 0!==e&&(n=m(null===e?void 0:e,{owner:this}),this.addValue(t,n)),n}readValue(t,e){var n;let s=void 0===this.latestValues[t]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,t))&&void 0!==n?n:this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];var i;return null!=s&&("string"==typeof s&&(xt(s)||Tt(s))?s=parseFloat(s):(i=s,!Un.find(qt(i))&&ve.test(e)&&(s=Fe(t,e))),this.setBaseTarget(t,W(s)?s.get():s)),W(s)?s.get():s}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:n}=this.props;let s;if("string"==typeof n||"object"==typeof n){const i=Mn(this.props,n,null===(e=this.presenceContext)||void 0===e?void 0:e.custom);i&&(s=i[t])}if(n&&void 0!==s)return s;const i=this.getBaseTargetFromProps(this.props,t);return void 0===i||W(i)?void 0!==this.initialValues[t]&&void 0===s?void 0:this.baseTarget[t]:i}on(t,e){return this.events[t]||(this.events[t]=new n),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class Gn extends Xn{constructor(){super(...arguments),this.KeyframeResolver=Ee}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:n}){delete e[t],delete n[t]}}const Zn=(t,e)=>e&&"number"==typeof t?e.transform(t):t,_n={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Jn=et.length;function Qn(t,e,n){const{style:s,vars:i,transformOrigin:r}=t;let o=!1,a=!1;for(const t in e){const n=e[t];if(nt.has(t))o=!0;else if(Vt(t))i[t]=n;else{const e=Zn(n,Me[t]);t.startsWith("origin")?(a=!0,r[t]=e):s[t]=e}}if(e.transform||(o||n?s.transform=function(t,e,n){let s="",i=!0;for(let r=0;r<Jn;r++){const o=et[r],a=t[o];if(void 0===a)continue;let l=!0;if(l="number"==typeof a?a===(o.startsWith("scale")?1:0):0===parseFloat(a),!l||n){const t=Zn(a,Me[o]);if(!l){i=!1;s+=`${_n[o]||o}(${t}) `}n&&(e[o]=t)}}return s=s.trim(),n?s=n(e,i?"":s):i&&(s="none"),s}(e,t.transform,n):s.transform&&(s.transform="none")),a){const{originX:t="50%",originY:e="50%",originZ:n=0}=r;s.transformOrigin=`${t} ${e} ${n}`}}function ts(t,e,n){return"string"==typeof t?t:Lt.transform(e+n*t)}const es={offset:"stroke-dashoffset",array:"stroke-dasharray"},ns={offset:"strokeDashoffset",array:"strokeDasharray"};function ss(t,{attrX:e,attrY:n,attrScale:s,originX:i,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,h){if(Qn(t,u,h),c)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox));t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:f}=t;d.transform&&(f&&(p.transform=d.transform),delete d.transform),f&&(void 0!==i||void 0!==r||p.transform)&&(p.transformOrigin=function(t,e,n){return`${ts(e,t.x,t.width)} ${ts(n,t.y,t.height)}`}(f,void 0!==i?i:.5,void 0!==r?r:.5)),void 0!==e&&(d.x=e),void 0!==n&&(d.y=n),void 0!==s&&(d.scale=s),void 0!==o&&function(t,e,n=1,s=0,i=!0){t.pathLength=1;const r=i?es:ns;t[r.offset]=Lt.transform(-s);const o=Lt.transform(e),a=Lt.transform(n);t[r.array]=`${o} ${a}`}(d,o,a,l,!1)}const is=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function rs(t,{style:e,vars:n},s,i){Object.assign(t.style,e,i&&i.getProjectionStyles(s));for(const e in n)t.style.setProperty(e,n[e])}class os extends Gn{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Yn}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(nt.has(e)){const t=ke(e);return t&&t.default||0}return e=is.has(e)?e:Fn(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,n){return function(t,e,n){const s=Wn(t,e,n);for(const n in t)if(W(t[n])||W(e[n])){s[-1!==et.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n]=t[n]}return s}(t,e,n)}build(t,e,n){ss(t,e,this.isSVGTag,n.transformTemplate)}renderInstance(t,e,n,s){!function(t,e,n,s){rs(t,e,void 0,s);for(const n in e.attrs)t.setAttribute(is.has(n)?n:Fn(n),e.attrs[n])}(t,e,0,s)}mount(t){var e;this.isSVGTag="string"==typeof(e=t.tagName)&&"svg"===e.toLowerCase(),super.mount(t)}}class as extends Gn{constructor(){super(...arguments),this.type="html",this.renderInstance=rs}readValueFromInstance(t,e){if(nt.has(e)){const t=ke(e);return t&&t.default||0}{const s=(n=t,window.getComputedStyle(n)),i=(Vt(e)?s.getPropertyValue(e):s[e])||0;return"string"==typeof i?i.trim():i}var n}measureInstanceViewportBox(t,{transformPagePoint:e}){return function(t,e){return function({top:t,left:e,right:n,bottom:s}){return{x:{min:e,max:n},y:{min:t,max:s}}}(function(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}(t.getBoundingClientRect(),e))}(t,e)}build(t,e,n){Qn(t,e,n.transformTemplate)}scrapeMotionValuesFromProps(t,e,n){return Wn(t,e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;W(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=""+t)}))}}class ls extends Xn{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,e){if(function(t,e){return t in e}(e,t)){const n=t[e];if("string"==typeof n||"number"==typeof n)return n}}getBaseTargetFromProps(){}removeValueFromRenderState(t,e){delete e.output[t]}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}build(t,e){Object.assign(t.output,e)}renderInstance(t,{output:e}){Object.assign(t,e)}sortInstanceNodePosition(){return 0}}function us(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=function(t){return t instanceof SVGElement&&"svg"!==t.tagName}(t)?new os(e):new as(e);n.mount(t),tt.set(t,n)}function cs(t){const e=new ls({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});e.mount(t),tt.set(t,e)}function hs(t,e,n,s){const i=[];if(function(t,e){return W(t)||"number"==typeof t||"string"==typeof t&&!N(e)}(t,e))i.push(function(t,e,n){const s=W(t)?t:m(t);return s.start(Sn("",s,e,n)),s.animation}(t,N(e)&&e.default||e,n&&n.default||n));else{const r=K(t,e,s),o=r.length;for(let t=0;t<o;t++){const s=r[t],a=s instanceof Element?us:cs;tt.has(s)||a(s);const l=tt.get(s),u={...n};"delay"in u&&"function"==typeof u.delay&&(u.delay=u.delay(t,o)),i.push(...Rn(l,{...e,transition:u},{}))}}return i}function ds(t,e,n){const s=[];return function(t,{defaultTransition:e={},...n}={},s,i){const r=e.duration||.3,o=new Map,a=new Map,l={},u=new Map;let c=0,h=0,d=0;for(let n=0;n<t.length;n++){const o=t[n];if("string"==typeof o){u.set(o,h);continue}if(!Array.isArray(o)){u.set(o.name,z(h,o.at,c,u));continue}let[p,f,m={}]=o;void 0!==m.at&&(h=z(h,m.at,c,u));let g=0;const y=(t,n,s,o=0,a=0)=>{const l=Z(t),{delay:u=0,times:c=L(l),type:p="keyframes",...f}=n;let{ease:m=e.ease||"easeOut",duration:y}=n;const v="function"==typeof u?u(o,a):u,b=l.length,T=j(p)?p:null==i?void 0:i[p];if(b<=2&&T){let t=100;if(2===b&&Q(l)){const e=l[1]-l[0];t=Math.abs(e)}const e={...f};void 0!==y&&(e.duration=w(y));const n=O(e,t,T);m=n.ease,y=n.duration}null!=y||(y=r);const x=h+v,S=x+y;1===c.length&&0===c[0]&&(c[1]=1);const V=c.length-l.length;V>0&&B(c,V),1===l.length&&l.unshift(null),Y(s,l,m,c,x,S),g=Math.max(v+y,g),d=Math.max(S,d)};if(W(p)){y(f,m,G("default",X(p,a)))}else{const t=K(p,f,s,l),e=t.length;for(let n=0;n<e;n++){f=f,m=m;const s=X(t[n],a);for(const t in f)y(f[t],_(m,t),G(t,s),n,e)}}c=h,h+=g}return a.forEach((t,s)=>{for(const i in t){const r=t[i];r.sort(q);const a=[],l=[],u=[];for(let t=0;t<r.length;t++){const{at:e,value:n,easing:s}=r[t];a.push(n),l.push(R(0,d,e)),u.push(s||"easeOut")}0!==l[0]&&(l.unshift(0),a.unshift(a[0]),u.unshift("easeInOut")),1!==l[l.length-1]&&(l.push(1),a.push(null)),o.has(s)||o.set(s,{keyframes:{},transition:{}});const c=o.get(s);c.keyframes[i]=a,c.transition[i]={...e,duration:d,ease:u,times:l,...n}}}),o}(t,e,n,{spring:C}).forEach(({keyframes:t,transition:e},n)=>{s.push(...hs(n,t,e))}),s}function ps(t){return function(e,n,s){let i=[];var r;r=e,i=Array.isArray(r)&&Array.isArray(r[0])?ds(e,n,t):hs(e,n,s,t);const o=new v(i);return t&&t.animations.push(o),o}}const fs=ps();function ms(t,e,n){t.style.setProperty("--"+e,n)}function gs(t,e,n){t.style[e]=n}const ys=g(()=>{try{document.createElement("div").animate({opacity:[1]})}catch(t){return!1}return!0}),vs=new WeakMap;function ws(t){const e=vs.get(t)||new Map;return vs.set(t,e),vs.get(t)}class bs{constructor(t,e,n,s){const i=e.startsWith("--");this.setValue=i?ms:gs,this.options=s,this.updateFinishedPromise(),S("string"!=typeof s.type);const r=ws(t).get(e);r&&r.stop();if(Array.isArray(n)||(n=[n]),function(t,e,n){for(let s=0;s<e.length;s++)null===e[s]&&(e[s]=0===s?n():e[s-1]),"number"==typeof e[s]&&Se[t]&&(e[s]=Se[t].transform(e[s]));!ys()&&e.length<2&&e.unshift(n())}(e,n,()=>e.startsWith("--")?t.style.getPropertyValue(e):window.getComputedStyle(t)[e]),j(s.type)){const t=O(s,100,s.type);s.ease=pn()?t.ease:"easeOut",s.duration=w(t.duration),s.type="keyframes"}else s.ease=s.ease||"easeOut";this.removeAnimation=()=>{var n;return null===(n=vs.get(t))||void 0===n?void 0:n.delete(e)};const o=()=>{this.setValue(t,e,ut(n,this.options)),this.cancel(),this.resolveFinishedPromise()};bn()?(this.animation=vn(t,e,n,s),!1===s.autoplay&&this.animation.pause(),this.animation.onfinish=o,this.pendingTimeline&&wn(this.animation,this.pendingTimeline),ws(t).set(e,this)):o()}get duration(){return b(this.options.duration||300)}get time(){var t;return this.animation?b((null===(t=this.animation)||void 0===t?void 0:t.currentTime)||0):0}set time(t){this.animation&&(this.animation.currentTime=w(t))}get speed(){return this.animation?this.animation.playbackRate:1}set speed(t){this.animation&&(this.animation.playbackRate=t)}get state(){return this.animation?this.animation.playState:"finished"}get startTime(){return this.animation?this.animation.startTime:null}flatten(){var t;this.animation&&(null===(t=this.animation.effect)||void 0===t||t.updateTiming({easing:"linear"}))}play(){"finished"===this.state&&this.updateFinishedPromise(),this.animation&&this.animation.play()}pause(){this.animation&&this.animation.pause()}stop(){this.animation&&"idle"!==this.state&&"finished"!==this.state&&(this.animation.commitStyles&&this.animation.commitStyles(),this.cancel())}complete(){this.animation&&this.animation.finish()}cancel(){this.removeAnimation();try{this.animation&&this.animation.cancel()}catch(t){}}then(t,e){return this.currentFinishedPromise.then(t,e)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}attachTimeline(t){return this.animation?wn(this.animation,t):this.pendingTimeline=t,r}}const Ts=(t=>function(e,n,s){return new v(function(t,e,n,s){const i=D(t,s),r=i.length,o=[];for(let t=0;t<r;t++){const s=i[t],a={...n};"function"==typeof a.delay&&(a.delay=a.delay(t,r));for(const t in e){const n=e[t],i={...at(a,t)};i.duration=i.duration?w(i.duration):i.duration,i.delay=w(i.delay||0),o.push(new bs(s,t,n,i))}}return o}(e,n,s,t))})(),xs=new WeakMap;let Ss;function Vs({target:t,contentRect:e,borderBoxSize:n}){var s;null===(s=xs.get(t))||void 0===s||s.forEach(s=>{s({target:t,contentSize:e,get size(){return function(t,e){if(e){const{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})})}function As(t){t.forEach(Vs)}function Ms(t,e){Ss||"undefined"!=typeof ResizeObserver&&(Ss=new ResizeObserver(As));const n=D(t);return n.forEach(t=>{let n=xs.get(t);n||(n=new Set,xs.set(t,n)),n.add(e),null==Ss||Ss.observe(t)}),()=>{n.forEach(t=>{const n=xs.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==Ss||Ss.unobserve(t)})}}const Ps=new Set;let ks;function Fs(t){return Ps.add(t),ks||(ks=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};Ps.forEach(t=>t(e))},window.addEventListener("resize",ks)),()=>{Ps.delete(t),!Ps.size&&ks&&(ks=void 0)}}const Cs={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Es(t,e,n,i){const r=n[e],{length:o,position:a}=Cs[e],l=r.current,u=n.time;r.current=t["scroll"+a],r.scrollLength=t["scroll"+o]-t["client"+o],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=R(0,r.scrollLength,r.current);const c=i-u;r.velocity=c>50?0:s(r.current-l,c)}const Os={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Is={start:0,center:.5,end:1};function Rs(t,e,n=0){let s=0;if(t in Is&&(t=Is[t]),"string"==typeof t){const e=parseFloat(t);t.endsWith("px")?s=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?s=e/100*document.documentElement.clientWidth:t.endsWith("vh")?s=e/100*document.documentElement.clientHeight:t=e}return"number"==typeof t&&(s=e*t),n+s}const Bs=[0,0];function Ls(t,e,n,s){let i=Array.isArray(t)?t:Bs,r=0,o=0;return"number"==typeof t?i=[t,t]:"string"==typeof t&&(i=(t=t.trim()).includes(" ")?t.split(" "):[t,Is[t]?t:"0"]),r=Rs(i[0],n,s),o=Rs(i[1],e),r-o}const Ws={x:0,y:0};function Ds(t,e,n){const{offset:s=Os.All}=n,{target:i=t,axis:r="y"}=n,o="y"===r?"height":"width",a=i!==t?function(t,e){const n={x:0,y:0};let s=t;for(;s&&s!==e;)if(s instanceof HTMLElement)n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if("svg"===s.tagName){const t=s.getBoundingClientRect();s=s.parentElement;const e=s.getBoundingClientRect();n.x+=t.left-e.left,n.y+=t.top-e.top}else{if(!(s instanceof SVGGraphicsElement))break;{const{x:t,y:e}=s.getBBox();n.x+=t,n.y+=e;let i=null,r=s.parentNode;for(;!i;)"svg"===r.tagName&&(i=r),r=s.parentNode;s=i}}return n}(i,t):Ws,l=i===t?{width:t.scrollWidth,height:t.scrollHeight}:function(t){return"getBBox"in t&&"svg"!==t.tagName?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}(i),u={width:t.clientWidth,height:t.clientHeight};e[r].offset.length=0;let c=!e[r].interpolate;const h=s.length;for(let t=0;t<h;t++){const n=Ls(s[t],u[o],l[o],a[r]);c||n===e[r].interpolatorOffsets[t]||(c=!0),e[r].offset[t]=n}c&&(e[r].interpolate=sn(e[r].offset,L(s)),e[r].interpolatorOffsets=[...e[r].offset]),e[r].progress=e[r].interpolate(e[r].current)}function Ns(t,e,n,s={}){return{measure:()=>function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let s=e;for(;s&&s!==t;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}(t,s.target,n),update:e=>{!function(t,e,n){Es(t,"x",e,n),Es(t,"y",e,n),e.time=n}(t,n,e),(s.offset||s.target)&&Ds(t,n,s)},notify:()=>e(n)}}const Ks=new WeakMap,js=new WeakMap,zs=new WeakMap,$s=t=>t===document.documentElement?window:t;function Hs(t,{container:e=document.documentElement,...n}={}){let s=zs.get(e);s||(s=new Set,zs.set(e,s));const i=Ns(e,t,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},n);if(s.add(i),!Ks.has(e)){const t=()=>{for(const t of s)t.measure()},n=()=>{for(const t of s)t.update(u.timestamp)},i=()=>{for(const t of s)t.notify()},l=()=>{a.read(t,!1,!0),a.read(n,!1,!0),a.update(i,!1,!0)};Ks.set(e,l);const c=$s(e);window.addEventListener("resize",l,{passive:!0}),e!==document.documentElement&&js.set(e,(o=l,"function"==typeof(r=e)?Fs(r):Ms(r,o))),c.addEventListener("scroll",l,{passive:!0})}var r,o;const c=Ks.get(e);return a.read(c,!1,!0),()=>{var t;l(c);const n=zs.get(e);if(!n)return;if(n.delete(i),n.size)return;const s=Ks.get(e);Ks.delete(e),s&&($s(e).removeEventListener("scroll",s),null===(t=js.get(e))||void 0===t||t(),window.removeEventListener("resize",s))}}function Us(t,e){let n;const s=()=>{const{currentTime:s}=e,i=(null===s?0:s.value)/100;n!==i&&t(i),n=i};return a.update(s,!0),()=>l(s)}const Ys=new Map;function qs({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),Ys.has(e)||Ys.set(e,{});const s=Ys.get(e);return s[n]||(s[n]=y()?new ScrollTimeline({source:e,axis:n}):function({source:t,container:e,axis:n="y"}){t&&(e=t);const s={value:0},i=Hs(t=>{s.value=100*t[n].progress},{container:e,axis:n});return{currentTime:s,cancel:i}}({source:e,axis:n})),s[n]}function Xs(t){return t&&(t.target||t.offset)}const Gs={some:0,all:1};const Zs=(t,e)=>Math.abs(t-e);const _s=a,Js=o.reduce((t,e)=>(t[e]=t=>l(t),t),{});t.MotionValue=f,t.animate=fs,t.animateMini=Ts,t.anticipate=yt,t.backIn=mt,t.backInOut=gt,t.backOut=ft,t.cancelFrame=l,t.cancelSync=Js,t.circIn=vt,t.circInOut=bt,t.circOut=wt,t.clamp=V,t.createScopedAnimate=ps,t.cubicBezier=ht,t.delay=function(t,e){return function(t,e){const n=p.now(),s=({timestamp:i})=>{const r=i-n;r>=e&&(l(s),t(r-e))};return a.read(s,!0),()=>l(s)}(t,w(e))},t.distance=Zs,t.distance2D=function(t,e){const n=Zs(t.x,e.x),s=Zs(t.y,e.y);return Math.sqrt(n**2+s**2)},t.easeIn=Le,t.easeInOut=De,t.easeOut=We,t.frame=a,t.frameData=u,t.frameSteps=c,t.inView=function(t,e,{root:n,margin:s,amount:i="some"}={}){const r=D(t),o=new WeakMap,a=new IntersectionObserver(t=>{t.forEach(t=>{const n=o.get(t.target);if(t.isIntersecting!==Boolean(n))if(t.isIntersecting){const n=e(t);"function"==typeof n?o.set(t.target,n):a.unobserve(t.target)}else n&&(n(t),o.delete(t.target))})},{root:n,rootMargin:s,threshold:"number"==typeof i?i:Gs[i]});return r.forEach(t=>a.observe(t)),()=>a.disconnect()},t.inertia=Be,t.interpolate=sn,t.invariant=S,t.keyframes=rn,t.mirrorEasing=dt,t.mix=nn,t.motionValue=m,t.pipe=$e,t.progress=R,t.reverseEasing=pt,t.scroll=function(t,{axis:e="y",...n}={}){const s={axis:e,...n};return"function"==typeof t?function(t,e){return function(t){return 2===t.length}(t)||Xs(e)?Hs(n=>{t(n[e.axis].progress,n)},e):Us(t,qs(e))}(t,s):function(t,e){if(t.flatten(),Xs(e))return t.pause(),Hs(n=>{t.time=t.duration*n[e.axis].progress},e);{const n=qs(e);return t.attachTimeline?t.attachTimeline(n,t=>(t.pause(),Us(e=>{t.time=t.duration*e},n))):r}}(t,s)},t.scrollInfo=Hs,t.spring=C,t.stagger=function(t=.1,{startDelay:e=0,from:n=0,ease:s}={}){return(i,r)=>{const o="number"==typeof n?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,r),a=Math.abs(o-i);let l=t*a;if(s){const e=r*t;l=je(s)(l/e)*e}return e+l}},t.steps=function(t,e="end"){return n=>{const s=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,i="end"===e?Math.floor(s):Math.ceil(s);return V(0,1,i/t)}},t.sync=_s,t.transform=function(...t){const e=!Array.isArray(t[0]),n=e?0:-1,s=t[0+n],i=t[1+n],r=t[2+n],o=t[3+n],a=sn(i,r,{mixer:(l=r[0],(t=>t&&"object"==typeof t&&t.mix)(l)?l.mix:void 0),...o});var l;return e?a(s):a},t.warning=x,t.wrap=$}));

},{}],"main.js":[function(require,module,exports) {
"use strict";

var _motion = require("./node_modules/motion/dist/motion.js");
var humanScore = 0;
var computerScore = 0;
var humanScoreUI = document.getElementById("humanScore");
var computerScoreUI = document.getElementById("computerScore");
var result = document.getElementById("result");
var botButton = document.querySelectorAll(".disable");
function getComputerChoice() {
  var i = Math.floor(Math.random() * 100) + 1;
  if (i < 33) {
    addBGBot("paper");
    return "paper";
  } else if (i > 66) {
    addBGBot("rock");
    return "rock";
  } else {
    addBGBot("scissors");
    return "scissors";
  }
}
function returnToNormal(botButton) {
  botButton.forEach(function (item) {
    (0, _motion.animate)(item, {
      scale: 1
    });
  });
}
function addBGBot(id) {
  botButton.forEach(function (item) {
    if (item.id == id) {
      item.classList.add("bgClick");
      returnToNormal(botButton);
      (0, _motion.animate)(item, {
        scale: 1.1
      });
    }
  });
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win, " + humanChoice + " beats " + computerChoice);
    humanScore++;
    humanScoreUI.innerText = humanScore;
    result.classList.add("win");
    result.classList.remove("lost");
    result.innerText = "You win!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win, " + humanChoice + " beats " + computerChoice);
    humanScore++;
    humanScoreUI.innerText = humanScore;
    result.classList.add("win");
    result.classList.remove("lost");
    result.innerText = "You win!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win, " + humanChoice + " beats " + computerChoice);
    humanScore++;
    humanScoreUI.innerText = humanScore;
    result.classList.add("win");
    result.classList.remove("lost");
    result.innerText = "You win!";
  } else if (humanChoice === computerChoice) {
    console.log("Draw!");
    result.classList.remove("win");
    result.classList.remove("lost");
    result.innerText = "Draw!";
    return 1;
  } else {
    console.log("You lose, " + computerChoice + " beats " + humanChoice);
    computerScore++;
    computerScoreUI.innerText = computerScore;
    result.classList.remove("win");
    result.classList.add("lost");
    result.innerText = "You lost!";
  }
  if (humanScore == 5 || computerScore == 5) endGame();
  return 0;
}

// add event listener to buttons
var btn = document.querySelectorAll("button");
var draw = 0;
btn.forEach(function (button) {
  button.addEventListener("click", function () {
    removeBG();
    draw = playRound(button.id, getComputerChoice());
    button.classList.add("bgClick");
    if (draw == 0 && humanScore == 0 && computerScore == 0) {
      endGame();
    }
    draw = 0;
  });
  button.addEventListener("mouseover", function () {
    (0, _motion.animate)(button, {
      scale: 1.1
    });
  });
  button.addEventListener("mouseout", function () {
    (0, _motion.animate)(button, {
      scale: 1
    });
  });
});
function removeBG() {
  btn.forEach(function (button) {
    button.classList.remove("bgClick");
  });
}
function endGame() {
  if (humanScore == 5) {
    alert("You win!");
  }
  if (computerScore == 5) {
    alert("You lose!");
  }
  removeBG();
  returnToNormal(botButton);
  humanScore = 0;
  humanScoreUI.innerText = humanScore;
  computerScore = 0;
  computerScoreUI.innerText = computerScore;
  result.classList.remove("win");
  result.classList.remove("lost");
  result.innerText = "Click one!";
}
},{"./node_modules/motion/dist/motion.js":"node_modules/motion/dist/motion.js"}],"../../.nvm/versions/node/v22.11.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45069" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v22.11.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map