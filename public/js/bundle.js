(()=>{var zt=Object.defineProperty;var Vt=(e,t)=>{for(var r in t)zt(e,r,{get:t[r],enumerable:!0})};var Ve=e=>{mapboxgl.accessToken="pk.eyJ1IjoiZGV2cml0aWsiLCJhIjoiY2xpbXUybmg2MHVzbDNobW0xa2lsdTFndSJ9.V2iTPWHPHPK021uRJxqbPA";let t=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",scrollZoom:!1}),r=new mapboxgl.LngLatBounds;e.forEach(o=>{let n=document.createElement("div");n.className="marker",new mapboxgl.Marker({element:n,anchor:"bottom"}).setLngLat(o.coordinates).addTo(t),new mapboxgl.Popup({offset:30,closeOnClick:!1,focusAfterOpen:!1}).setLngLat(o.coordinates).setHTML(`<p>Day ${o.day}: ${o.description}</p>`).addTo(t),r.extend(o.coordinates)}),t.fitBounds(r,{padding:{top:200,bottom:150,left:100,right:100}})};function z(e,t){return function(){return e.apply(t,arguments)}}var{toString:Wt}=Object.prototype,{getPrototypeOf:xe}=Object,ne=(e=>t=>{let r=Wt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>ne(t)===e),se=e=>t=>typeof t===e,{isArray:q}=Array,V=se("undefined");function Kt(e){return e!==null&&!V(e)&&e.constructor!==null&&!V(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var $e=P("ArrayBuffer");function $t(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&$e(e.buffer),t}var Xt=se("string"),O=se("function"),Xe=se("number"),ie=e=>e!==null&&typeof e=="object",Gt=e=>e===!0||e===!1,oe=e=>{if(ne(e)!=="object")return!1;let t=xe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Qt=P("Date"),Zt=P("File"),Yt=P("Blob"),er=P("FileList"),tr=e=>ie(e)&&O(e.pipe),rr=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=ne(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},or=P("URLSearchParams"),[nr,sr,ir,ar]=["ReadableStream","Request","Response","Headers"].map(P),cr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function W(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let o,n;if(typeof e!="object"&&(e=[e]),q(e))for(o=0,n=e.length;o<n;o++)t.call(null,e[o],o,e);else{let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length,c;for(o=0;o<i;o++)c=s[o],t.call(null,e[c],c,e)}}function Ge(e,t){t=t.toLowerCase();let r=Object.keys(e),o=r.length,n;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}var I=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Qe=e=>!V(e)&&e!==I;function Ee(){let{caseless:e}=Qe(this)&&this||{},t={},r=(o,n)=>{let s=e&&Ge(t,n)||n;oe(t[s])&&oe(o)?t[s]=Ee(t[s],o):oe(o)?t[s]=Ee({},o):q(o)?t[s]=o.slice():t[s]=o};for(let o=0,n=arguments.length;o<n;o++)arguments[o]&&W(arguments[o],r);return t}var ur=(e,t,r,{allOwnKeys:o}={})=>(W(t,(n,s)=>{r&&O(n)?e[s]=z(n,r):e[s]=n},{allOwnKeys:o}),e),lr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),fr=(e,t,r,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},dr=(e,t,r,o)=>{let n,s,i,c={};if(t=t||{},e==null)return t;do{for(n=Object.getOwnPropertyNames(e),s=n.length;s-- >0;)i=n[s],(!o||o(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&xe(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},pr=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let o=e.indexOf(t,r);return o!==-1&&o===r},mr=e=>{if(!e)return null;if(q(e))return e;let t=e.length;if(!Xe(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},hr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&xe(Uint8Array)),yr=(e,t)=>{let o=(e&&e[Symbol.iterator]).call(e),n;for(;(n=o.next())&&!n.done;){let s=n.value;t.call(e,s[0],s[1])}},wr=(e,t)=>{let r,o=[];for(;(r=e.exec(t))!==null;)o.push(r);return o},gr=P("HTMLFormElement"),br=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,n){return o.toUpperCase()+n}),We=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Er=P("RegExp"),Ze=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),o={};W(r,(n,s)=>{let i;(i=t(n,s,e))!==!1&&(o[s]=i||n)}),Object.defineProperties(e,o)},xr=e=>{Ze(e,(t,r)=>{if(O(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let o=e[r];if(O(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Sr=(e,t)=>{let r={},o=n=>{n.forEach(s=>{r[s]=!0})};return q(e)?o(e):o(String(e).split(t)),r},Rr=()=>{},Ar=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,be="abcdefghijklmnopqrstuvwxyz",Ke="0123456789",Ye={DIGIT:Ke,ALPHA:be,ALPHA_DIGIT:be+be.toUpperCase()+Ke},Tr=(e=16,t=Ye.ALPHA_DIGIT)=>{let r="",{length:o}=t;for(;e--;)r+=t[Math.random()*o|0];return r};function Or(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var Cr=e=>{let t=new Array(10),r=(o,n)=>{if(ie(o)){if(t.indexOf(o)>=0)return;if(!("toJSON"in o)){t[n]=o;let s=q(o)?[]:{};return W(o,(i,c)=>{let f=r(i,n+1);!V(f)&&(s[c]=f)}),t[n]=void 0,s}}return o};return r(e,0)},Pr=P("AsyncFunction"),Nr=e=>e&&(ie(e)||O(e))&&O(e.then)&&O(e.catch),et=((e,t)=>e?setImmediate:t?((r,o)=>(I.addEventListener("message",({source:n,data:s})=>{n===I&&s===r&&o.length&&o.shift()()},!1),n=>{o.push(n),I.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",O(I.postMessage)),Lr=typeof queueMicrotask<"u"?queueMicrotask.bind(I):typeof process<"u"&&process.nextTick||et,a={isArray:q,isArrayBuffer:$e,isBuffer:Kt,isFormData:rr,isArrayBufferView:$t,isString:Xt,isNumber:Xe,isBoolean:Gt,isObject:ie,isPlainObject:oe,isReadableStream:nr,isRequest:sr,isResponse:ir,isHeaders:ar,isUndefined:V,isDate:Qt,isFile:Zt,isBlob:Yt,isRegExp:Er,isFunction:O,isStream:tr,isURLSearchParams:or,isTypedArray:hr,isFileList:er,forEach:W,merge:Ee,extend:ur,trim:cr,stripBOM:lr,inherits:fr,toFlatObject:dr,kindOf:ne,kindOfTest:P,endsWith:pr,toArray:mr,forEachEntry:yr,matchAll:wr,isHTMLForm:gr,hasOwnProperty:We,hasOwnProp:We,reduceDescriptors:Ze,freezeMethods:xr,toObjectSet:Sr,toCamelCase:br,noop:Rr,toFiniteNumber:Ar,findKey:Ge,global:I,isContextDefined:Qe,ALPHABET:Ye,generateString:Tr,isSpecCompliantForm:Or,toJSONObject:Cr,isAsyncFn:Pr,isThenable:Nr,setImmediate:et,asap:Lr};function j(e,t,r,o,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),o&&(this.request=o),n&&(this.response=n,this.status=n.status?n.status:null)}a.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});var tt=j.prototype,rt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rt[e]={value:e}});Object.defineProperties(j,rt);Object.defineProperty(tt,"isAxiosError",{value:!0});j.from=(e,t,r,o,n,s)=>{let i=Object.create(tt);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),j.call(i,e.message,t,r,o,n),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var h=j;var ae=null;function Se(e){return a.isPlainObject(e)||a.isArray(e)}function nt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ot(e,t,r){return e?e.concat(t).map(function(n,s){return n=nt(n),!r&&s?"["+n+"]":n}).join(r?".":""):t}function Fr(e){return a.isArray(e)&&!e.some(Se)}var Br=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Dr(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(ae||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,m){return!a.isUndefined(m[y])});let o=r.metaTokens,n=r.visitor||l,s=r.dots,i=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(n))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,y,m){let b=p;if(p&&!m&&typeof p=="object"){if(a.endsWith(y,"{}"))y=o?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Fr(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(b=a.toArray(p)))return y=nt(y),b.forEach(function(A,D){!(a.isUndefined(A)||A===null)&&t.append(i===!0?ot([y],D,s):i===null?y:y+"[]",u(A))}),!1}return Se(p)?!0:(t.append(ot(m,y,s),u(p)),!1)}let d=[],w=Object.assign(Br,{defaultVisitor:l,convertValue:u,isVisitable:Se});function x(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(b,S){(!(a.isUndefined(b)||b===null)&&n.call(t,b,a.isString(S)?S.trim():S,y,w))===!0&&x(b,y?y.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return x(e),t}var k=Dr;function st(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function it(e,t){this._pairs=[],e&&k(e,this,t)}var at=it.prototype;at.append=function(t,r){this._pairs.push([t,r])};at.toString=function(t){let r=t?function(o){return t.call(this,o,st)}:st;return this._pairs.map(function(n){return r(n[0])+"="+r(n[1])},"").join("&")};var ce=it;function _r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function K(e,t,r){if(!t)return e;let o=r&&r.encode||_r;a.isFunction(r)&&(r={serialize:r});let n=r&&r.serialize,s;if(n?s=n(t,r):s=a.isURLSearchParams(t)?t.toString():new ce(t,r).toString(o),s){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}var Re=class{constructor(){this.handlers=[]}use(t,r,o){return this.handlers.push({fulfilled:t,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(o){o!==null&&t(o)})}},Ae=Re;var ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ct=typeof URLSearchParams<"u"?URLSearchParams:ce;var ut=typeof FormData<"u"?FormData:null;var lt=typeof Blob<"u"?Blob:null;var ft={isBrowser:!0,classes:{URLSearchParams:ct,FormData:ut,Blob:lt},protocols:["http","https","file","blob","url","data"]};var Ce={};Vt(Ce,{hasBrowserEnv:()=>Oe,hasStandardBrowserEnv:()=>kr,hasStandardBrowserWebWorkerEnv:()=>Ur,navigator:()=>Te,origin:()=>Ir});var Oe=typeof window<"u"&&typeof document<"u",Te=typeof navigator=="object"&&navigator||void 0,kr=Oe&&(!Te||["ReactNative","NativeScript","NS"].indexOf(Te.product)<0),Ur=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ir=Oe&&window.location.href||"http://localhost";var g={...Ce,...ft};function Pe(e,t){return k(e,new g.classes.URLSearchParams,Object.assign({visitor:function(r,o,n,s){return g.isNode&&a.isBuffer(r)?(this.append(o,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function qr(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jr(e){let t={},r=Object.keys(e),o,n=r.length,s;for(o=0;o<n;o++)s=r[o],t[s]=e[s];return t}function Hr(e){function t(r,o,n,s){let i=r[s++];if(i==="__proto__")return!0;let c=Number.isFinite(+i),f=s>=r.length;return i=!i&&a.isArray(n)?n.length:i,f?(a.hasOwnProp(n,i)?n[i]=[n[i],o]:n[i]=o,!c):((!n[i]||!a.isObject(n[i]))&&(n[i]=[]),t(r,o,n[i],s)&&a.isArray(n[i])&&(n[i]=jr(n[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(o,n)=>{t(qr(o),n,r,0)}),r}return null}var le=Hr;function vr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(e)}var Ne={transitional:ue,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){let o=r.getContentType()||"",n=o.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return n?JSON.stringify(le(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Pe(t,this.formSerializer).toString();if((c=a.isFileList(t))||o.indexOf("multipart/form-data")>-1){let f=this.env&&this.env.FormData;return k(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||n?(r.setContentType("application/json",!1),vr(t)):t}],transformResponse:[function(t){let r=this.transitional||Ne.transitional,o=r&&r.forcedJSONParsing,n=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(o&&!this.responseType||n)){let i=!(r&&r.silentJSONParsing)&&n;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.classes.FormData,Blob:g.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{Ne.headers[e]={}});var H=Ne;var Mr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dt=e=>{let t={},r,o,n;return e&&e.split(`
`).forEach(function(i){n=i.indexOf(":"),r=i.substring(0,n).trim().toLowerCase(),o=i.substring(n+1).trim(),!(!r||t[r]&&Mr[r])&&(r==="set-cookie"?t[r]?t[r].push(o):t[r]=[o]:t[r]=t[r]?t[r]+", "+o:o)}),t};var pt=Symbol("internals");function $(e){return e&&String(e).trim().toLowerCase()}function fe(e){return e===!1||e==null?e:a.isArray(e)?e.map(fe):String(e)}function Jr(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,o;for(;o=r.exec(e);)t[o[1]]=o[2];return t}var zr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Le(e,t,r,o,n){if(a.isFunction(o))return o.call(this,t,r);if(n&&(t=r),!!a.isString(t)){if(a.isString(o))return t.indexOf(o)!==-1;if(a.isRegExp(o))return o.test(t)}}function Vr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,o)=>r.toUpperCase()+o)}function Wr(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+r,{value:function(n,s,i){return this[o].call(this,t,n,s,i)},configurable:!0})})}var v=class{constructor(t){t&&this.set(t)}set(t,r,o){let n=this;function s(c,f,u){let l=$(f);if(!l)throw new Error("header name must be a non-empty string");let d=a.findKey(n,l);(!d||n[d]===void 0||u===!0||u===void 0&&n[d]!==!1)&&(n[d||f]=fe(c))}let i=(c,f)=>a.forEach(c,(u,l)=>s(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(a.isString(t)&&(t=t.trim())&&!zr(t))i(dt(t),r);else if(a.isHeaders(t))for(let[c,f]of t.entries())s(f,c,o);else t!=null&&s(r,t,o);return this}get(t,r){if(t=$(t),t){let o=a.findKey(this,t);if(o){let n=this[o];if(!r)return n;if(r===!0)return Jr(n);if(a.isFunction(r))return r.call(this,n,o);if(a.isRegExp(r))return r.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=$(t),t){let o=a.findKey(this,t);return!!(o&&this[o]!==void 0&&(!r||Le(this,this[o],o,r)))}return!1}delete(t,r){let o=this,n=!1;function s(i){if(i=$(i),i){let c=a.findKey(o,i);c&&(!r||Le(o,o[c],c,r))&&(delete o[c],n=!0)}}return a.isArray(t)?t.forEach(s):s(t),n}clear(t){let r=Object.keys(this),o=r.length,n=!1;for(;o--;){let s=r[o];(!t||Le(this,this[s],s,t,!0))&&(delete this[s],n=!0)}return n}normalize(t){let r=this,o={};return a.forEach(this,(n,s)=>{let i=a.findKey(o,s);if(i){r[i]=fe(n),delete r[s];return}let c=t?Vr(s):String(s).trim();c!==s&&delete r[s],r[c]=fe(n),o[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(o,n)=>{o!=null&&o!==!1&&(r[n]=t&&a.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let o=new this(t);return r.forEach(n=>o.set(n)),o}static accessor(t){let o=(this[pt]=this[pt]={accessors:{}}).accessors,n=this.prototype;function s(i){let c=$(i);o[c]||(Wr(n,i),o[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}};v.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(v.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(o){this[r]=o}}});a.freezeMethods(v);var R=v;function X(e,t){let r=this||H,o=t||r,n=R.from(o.headers),s=o.data;return a.forEach(e,function(c){s=c.call(r,s,n.normalize(),t?t.status:void 0)}),n.normalize(),s}function G(e){return!!(e&&e.__CANCEL__)}function mt(e,t,r){h.call(this,e??"canceled",h.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(mt,h,{__CANCEL__:!0});var L=mt;function Q(e,t,r){let o=r.config.validateStatus;!r.status||!o||o(r.status)?e(r):t(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Fe(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Kr(e,t){e=e||10;let r=new Array(e),o=new Array(e),n=0,s=0,i;return t=t!==void 0?t:1e3,function(f){let u=Date.now(),l=o[s];i||(i=u),r[n]=f,o[n]=u;let d=s,w=0;for(;d!==n;)w+=r[d++],d=d%e;if(n=(n+1)%e,n===s&&(s=(s+1)%e),u-i<t)return;let x=l&&u-l;return x?Math.round(w*1e3/x):void 0}}var ht=Kr;function $r(e,t){let r=0,o=1e3/t,n,s,i=(u,l=Date.now())=>{r=l,n=null,s&&(clearTimeout(s),s=null),e.apply(null,u)};return[(...u)=>{let l=Date.now(),d=l-r;d>=o?i(u,l):(n=u,s||(s=setTimeout(()=>{s=null,i(n)},o-d)))},()=>n&&i(n)]}var yt=$r;var M=(e,t,r=3)=>{let o=0,n=ht(50,250);return yt(s=>{let i=s.loaded,c=s.lengthComputable?s.total:void 0,f=i-o,u=n(f),l=i<=c;o=i;let d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:s,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},r)},Be=(e,t)=>{let r=e!=null;return[o=>t[0]({lengthComputable:r,total:e,loaded:o}),t[1]]},De=e=>(...t)=>a.asap(()=>e(...t));var wt=g.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,g.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(g.origin),g.navigator&&/(msie|trident)/i.test(g.navigator.userAgent)):()=>!0;var gt=g.hasStandardBrowserEnv?{write(e,t,r,o,n,s){let i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(o)&&i.push("path="+o),a.isString(n)&&i.push("domain="+n),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){let t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function _e(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ke(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Z(e,t){return e&&!_e(t)?ke(e,t):t}var bt=e=>e instanceof R?{...e}:e;function N(e,t){t=t||{};let r={};function o(u,l,d,w){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:w},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function n(u,l,d,w){if(a.isUndefined(l)){if(!a.isUndefined(u))return o(void 0,u,d,w)}else return o(u,l,d,w)}function s(u,l){if(!a.isUndefined(l))return o(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return o(void 0,u)}else return o(void 0,l)}function c(u,l,d){if(d in t)return o(u,l);if(d in e)return o(void 0,u)}let f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l,d)=>n(bt(u),bt(l),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){let d=f[l]||n,w=d(e[l],t[l],l);a.isUndefined(w)&&d!==c||(r[l]=w)}),r}var de=e=>{let t=N({},e),{data:r,withXSRFToken:o,xsrfHeaderName:n,xsrfCookieName:s,headers:i,auth:c}=t;t.headers=i=R.from(i),t.url=K(Z(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(r)){if(g.hasStandardBrowserEnv||g.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){let[u,...l]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(g.hasStandardBrowserEnv&&(o&&a.isFunction(o)&&(o=o(t)),o||o!==!1&&wt(t.url))){let u=n&&s&&gt.read(s);u&&i.set(n,u)}return t};var Xr=typeof XMLHttpRequest<"u",Et=Xr&&function(e){return new Promise(function(r,o){let n=de(e),s=n.data,i=R.from(n.headers).normalize(),{responseType:c,onUploadProgress:f,onDownloadProgress:u}=n,l,d,w,x,p;function y(){x&&x(),p&&p(),n.cancelToken&&n.cancelToken.unsubscribe(l),n.signal&&n.signal.removeEventListener("abort",l)}let m=new XMLHttpRequest;m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout;function b(){if(!m)return;let A=R.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:A,config:e,request:m};Q(function(U){r(U),y()},function(U){o(U),y()},T),m=null}"onloadend"in m?m.onloadend=b:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(b)},m.onabort=function(){m&&(o(new h("Request aborted",h.ECONNABORTED,e,m)),m=null)},m.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let D=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded",T=n.transitional||ue;n.timeoutErrorMessage&&(D=n.timeoutErrorMessage),o(new h(D,T.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,m)),m=null},s===void 0&&i.setContentType(null),"setRequestHeader"in m&&a.forEach(i.toJSON(),function(D,T){m.setRequestHeader(T,D)}),a.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),c&&c!=="json"&&(m.responseType=n.responseType),u&&([w,p]=M(u,!0),m.addEventListener("progress",w)),f&&m.upload&&([d,x]=M(f),m.upload.addEventListener("progress",d),m.upload.addEventListener("loadend",x)),(n.cancelToken||n.signal)&&(l=A=>{m&&(o(!A||A.type?new L(null,e,m):A),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(l),n.signal&&(n.signal.aborted?l():n.signal.addEventListener("abort",l)));let S=Fe(n.url);if(S&&g.protocols.indexOf(S)===-1){o(new h("Unsupported protocol "+S+":",h.ERR_BAD_REQUEST,e));return}m.send(s||null)})};var Gr=(e,t)=>{let{length:r}=e=e?e.filter(Boolean):[];if(t||r){let o=new AbortController,n,s=function(u){if(!n){n=!0,c();let l=u instanceof Error?u:this.reason;o.abort(l instanceof h?l:new L(l instanceof Error?l.message:l))}},i=t&&setTimeout(()=>{i=null,s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t),c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),e=null)};e.forEach(u=>u.addEventListener("abort",s));let{signal:f}=o;return f.unsubscribe=()=>a.asap(c),f}},xt=Gr;var Qr=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let o=0,n;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},Zr=async function*(e,t){for await(let r of Yr(e))yield*Qr(r,t)},Yr=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:r,value:o}=await t.read();if(r)break;yield o}}finally{await t.cancel()}},Ue=(e,t,r,o)=>{let n=Zr(e,t),s=0,i,c=f=>{i||(i=!0,o&&o(f))};return new ReadableStream({async pull(f){try{let{done:u,value:l}=await n.next();if(u){c(),f.close();return}let d=l.byteLength;if(r){let w=s+=d;r(w)}f.enqueue(new Uint8Array(l))}catch(u){throw c(u),u}},cancel(f){return c(f),n.return()}},{highWaterMark:2})};var me=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Rt=me&&typeof ReadableStream=="function",eo=me&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),At=(e,...t)=>{try{return!!e(...t)}catch{return!1}},to=Rt&&At(()=>{let e=!1,t=new Request(g.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),St=64*1024,Ie=Rt&&At(()=>a.isReadableStream(new Response("").body)),pe={stream:Ie&&(e=>e.body)};me&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!pe[t]&&(pe[t]=a.isFunction(e[t])?r=>r[t]():(r,o)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,o)})})})(new Response);var ro=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(g.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await eo(e)).byteLength},oo=async(e,t)=>{let r=a.toFiniteNumber(e.getContentLength());return r??ro(t)},Tt=me&&(async e=>{let{url:t,method:r,data:o,signal:n,cancelToken:s,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:d="same-origin",fetchOptions:w}=de(e);u=u?(u+"").toLowerCase():"text";let x=xt([n,s&&s.toAbortSignal()],i),p,y=x&&x.unsubscribe&&(()=>{x.unsubscribe()}),m;try{if(f&&to&&r!=="get"&&r!=="head"&&(m=await oo(l,o))!==0){let T=new Request(t,{method:"POST",body:o,duplex:"half"}),_;if(a.isFormData(o)&&(_=T.headers.get("content-type"))&&l.setContentType(_),T.body){let[U,re]=Be(m,M(De(f)));o=Ue(T.body,St,U,re)}}a.isString(d)||(d=d?"include":"omit");let b="credentials"in Request.prototype;p=new Request(t,{...w,signal:x,method:r.toUpperCase(),headers:l.normalize().toJSON(),body:o,duplex:"half",credentials:b?d:void 0});let S=await fetch(p),A=Ie&&(u==="stream"||u==="response");if(Ie&&(c||A&&y)){let T={};["status","statusText","headers"].forEach(ze=>{T[ze]=S[ze]});let _=a.toFiniteNumber(S.headers.get("content-length")),[U,re]=c&&Be(_,M(De(c),!0))||[];S=new Response(Ue(S.body,St,U,()=>{re&&re(),y&&y()}),T)}u=u||"text";let D=await pe[a.findKey(pe,u)||"text"](S,e);return!A&&y&&y(),await new Promise((T,_)=>{Q(T,_,{data:D,headers:R.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(b){throw y&&y(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,p),{cause:b.cause||b}):h.from(b,b&&b.code,e,p)}});var qe={http:ae,xhr:Et,fetch:Tt};a.forEach(qe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var Ot=e=>`- ${e}`,no=e=>a.isFunction(e)||e===null||e===!1,he={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,o,n={};for(let s=0;s<t;s++){r=e[s];let i;if(o=r,!no(r)&&(o=qe[(i=String(r)).toLowerCase()],o===void 0))throw new h(`Unknown adapter '${i}'`);if(o)break;n[i||"#"+s]=o}if(!o){let s=Object.entries(n).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build")),i=t?s.length>1?`since :
`+s.map(Ot).join(`
`):" "+Ot(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return o},adapters:qe};function je(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function ye(e){return je(e),e.headers=R.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),he.getAdapter(e.adapter||H.adapter)(e).then(function(o){return je(e),o.data=X.call(e,e.transformResponse,o),o.headers=R.from(o.headers),o},function(o){return G(o)||(je(e),o&&o.response&&(o.response.data=X.call(e,e.transformResponse,o.response),o.response.headers=R.from(o.response.headers))),Promise.reject(o)})}var we="1.7.9";var ge={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ge[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}});var Ct={};ge.transitional=function(t,r,o){function n(s,i){return"[Axios v"+we+"] Transitional option '"+s+"'"+i+(o?". "+o:"")}return(s,i,c)=>{if(t===!1)throw new h(n(i," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!Ct[i]&&(Ct[i]=!0,console.warn(n(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,c):!0}};ge.spelling=function(t){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${t}`),!0)};function so(e,t,r){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);let o=Object.keys(e),n=o.length;for(;n-- >0;){let s=o[n],i=t[s];if(i){let c=e[s],f=c===void 0||i(c,s,e);if(f!==!0)throw new h("option "+s+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}var Y={assertOptions:so,validators:ge};var F=Y.validators,J=class{constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}async request(t,r){try{return await this._request(t,r)}catch(o){if(o instanceof Error){let n={};Error.captureStackTrace?Error.captureStackTrace(n):n=new Error;let s=n.stack?n.stack.replace(/^.+\n/,""):"";try{o.stack?s&&!String(o.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+s):o.stack=s}catch{}}throw o}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=N(this.defaults,r);let{transitional:o,paramsSerializer:n,headers:s}=r;o!==void 0&&Y.assertOptions(o,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),n!=null&&(a.isFunction(n)?r.paramsSerializer={serialize:n}:Y.assertOptions(n,{encode:F.function,serialize:F.function},!0)),Y.assertOptions(r,{baseUrl:F.spelling("baseURL"),withXsrfToken:F.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[r.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),r.headers=R.concat(i,s);let c=[],f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});let u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,d=0,w;if(!f){let p=[ye.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,u),w=p.length,l=Promise.resolve(r);d<w;)l=l.then(p[d++],p[d++]);return l}w=c.length;let x=r;for(d=0;d<w;){let p=c[d++],y=c[d++];try{x=p(x)}catch(m){y.call(this,m);break}}try{l=ye.call(this,x)}catch(p){return Promise.reject(p)}for(d=0,w=u.length;d<w;)l=l.then(u[d++],u[d++]);return l}getUri(t){t=N(this.defaults,t);let r=Z(t.baseURL,t.url);return K(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(r,o){return this.request(N(o||{},{method:t,url:r,data:(o||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(o){return function(s,i,c){return this.request(N(c||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}J.prototype[t]=r(),J.prototype[t+"Form"]=r(!0)});var ee=J;var te=class{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});let o=this;this.promise.then(n=>{if(!o._listeners)return;let s=o._listeners.length;for(;s-- >0;)o._listeners[s](n);o._listeners=null}),this.promise.then=n=>{let s,i=new Promise(c=>{o.subscribe(c),s=c}).then(n);return i.cancel=function(){o.unsubscribe(s)},i},t(function(s,i,c){o.reason||(o.reason=new L(s,i,c),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){let t=new AbortController,r=o=>{t.abort(o)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new te(function(n){t=n}),cancel:t}}},Pt=te;function He(e){return function(r){return e.apply(null,r)}}function ve(e){return a.isObject(e)&&e.isAxiosError===!0}var Me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Me).forEach(([e,t])=>{Me[t]=e});var Nt=Me;function Lt(e){let t=new ee(e),r=z(ee.prototype.request,t);return a.extend(r,ee.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(n){return Lt(N(e,n))},r}var E=Lt(H);E.Axios=ee;E.CanceledError=L;E.CancelToken=Pt;E.isCancel=G;E.VERSION=we;E.toFormData=k;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=He;E.isAxiosError=ve;E.mergeConfig=N;E.AxiosHeaders=R;E.formToJSON=e=>le(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=he.getAdapter;E.HttpStatusCode=Nt;E.default=E;var B=E;var{Axios:fi,AxiosError:di,CanceledError:pi,isCancel:mi,CancelToken:hi,VERSION:yi,all:wi,Cancel:gi,isAxiosError:bi,spread:Ei,toFormData:xi,AxiosHeaders:Si,HttpStatusCode:Ri,formToJSON:Ai,getAdapter:Ti,mergeConfig:Oi}=B;var Ft=()=>{let e=document.querySelector(".alert");e&&e.parentElement.removeChild(e)},C=(e,t,r=5)=>{Ft();let o=`<div class="alert alert--${e}">${t}</div>`;document.querySelector("body").insertAdjacentHTML("afterbegin",o),window.setTimeout(Ft,r*1e3)};var Bt=async(e,t)=>{try{(await B({method:"POST",url:"/api/v1/users/login",data:{email:e,password:t}})).data.status==="success"&&(C("success","Logged in successfully!"),window.setTimeout(()=>{location.assign("/")},1500))}catch(r){C("error",r.response.data.message)}},Dt=async(e,t,r,o)=>{try{(await B({method:"POST",url:"/api/v1/users/signup",data:{name:e,email:t,password:r,passwordConfirm:o}})).data.status==="success"&&(C("success","Account created successfully!"),window.setTimeout(()=>{location.assign("/")},1500))}catch(n){C("error",n.response.data.message)}},_t=async()=>{try{(await B({method:"GET",url:"/api/v1/users/logout"})).data.status==="success"&&location.assign("/login")}catch{C("error","Error logging out! Try again.")}};var Je=async(e,t)=>{try{(await B({method:"PATCH",url:t==="password"?"/api/v1/users/updateMyPassword":"/api/v1/users/updateMe",data:e})).data.status==="success"&&C("success",`${t.toUpperCase()} updated successfully!`)}catch(r){C("error",r.response.data.message)}};var Ii=Stripe("pk_test_51QV6bXAudVCX5mOfPj89rhlnViHZlbNkYX63vIVP7cfbmnngjQIQZxw6fQCueMFjR7ALQ5YsPQaIk5Q7BeRidQMh00kmarCpyG"),kt=async e=>{try{let r=(await B(`/api/v1/bookings/checkout-session/${e}`)).data.session.url;window.location.assign(r)}catch(t){C("error",t)}};var Ut=document.getElementById("map"),It=document.querySelector(".form--login"),qt=document.querySelector(".form--signup"),jt=document.querySelector(".nav__el--logout"),Ht=document.querySelector(".form-user-data"),vt=document.querySelector(".form-user-password"),Mt=document.getElementById("book-tour");if(Ut){let e=JSON.parse(Ut.dataset.locations);Ve(e)}It&&It.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("email").value,r=document.getElementById("password").value;Bt(t,r)});qt&&qt.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("name").value,r=document.getElementById("email").value,o=document.getElementById("password").value,n=document.getElementById("password-confirm").value;Dt(t,r,o,n)});jt&&jt.addEventListener("click",_t);Ht&&Ht.addEventListener("submit",e=>{e.preventDefault();let t=new FormData;t.append("name",document.getElementById("name").value),t.append("email",document.getElementById("email").value),t.append("photo",document.getElementById("photo").files[0]),Je(t,"data")});vt&&vt.addEventListener("submit",async e=>{e.preventDefault(),document.querySelector(".btn--save-password").textContent="Updating...";let t=document.getElementById("password-current").value,r=document.getElementById("password").value,o=document.getElementById("password-confirm").value;await Je({passwordCurrent:t,password:r,passwordConfirm:o},"password"),document.querySelector(".btn--save-password").textContent="Save password",document.getElementById("password-current").value="",document.getElementById("password").value="",document.getElementById("password-confirm").value=""});Mt&&Mt.addEventListener("click",e=>{e.target.textContent="Processing...";let{tourId:t}=e.target.dataset;kt(t)});var Jt=document.querySelector("body").dataset.alert;Jt&&C("success",Jt,10);})();