var pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ur(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ze={exports:{}},ue={exports:{}},Ve=function(r,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return r.apply(t,n)}},fr=Ve,fe=Object.prototype.toString,le=function(e){return function(r){var t=fe.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function O(e){return e=e.toLowerCase(),function(t){return le(t)===e}}function ce(e){return Array.isArray(e)}function L(e){return typeof e>"u"}function lr(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var We=O("ArrayBuffer");function cr(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&We(e.buffer),r}function dr(e){return typeof e=="string"}function hr(e){return typeof e=="number"}function Xe(e){return e!==null&&typeof e=="object"}function U(e){if(le(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var pr=O("Date"),vr=O("File"),mr=O("Blob"),Er=O("FileList");function de(e){return fe.call(e)==="[object Function]"}function yr(e){return Xe(e)&&de(e.pipe)}function Rr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||fe.call(e)===r||de(e.toString)&&e.toString()===r)}var wr=O("URLSearchParams");function br(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Or(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function he(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ce(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function oe(){var e={};function r(n,a){U(e[a])&&U(n)?e[a]=oe(e[a],n):U(n)?e[a]=oe({},n):ce(n)?e[a]=n.slice():e[a]=n}for(var t=0,i=arguments.length;t<i;t++)he(arguments[t],r);return e}function Ar(e,r,t){return he(r,function(n,a){t&&typeof n=="function"?e[a]=fr(n,t):e[a]=n}),e}function Sr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Cr(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function xr(e,r,t){var i,n,a,o={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)a=i[n],o[a]||(r[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Tr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function Pr(e){if(!e)return null;var r=e.length;if(L(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var _r=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:ce,isArrayBuffer:We,isBuffer:lr,isFormData:Rr,isArrayBufferView:cr,isString:dr,isNumber:hr,isObject:Xe,isPlainObject:U,isUndefined:L,isDate:pr,isFile:vr,isBlob:mr,isFunction:de,isStream:yr,isURLSearchParams:wr,isStandardBrowserEnv:Or,forEach:he,merge:oe,extend:Ar,trim:br,stripBOM:Sr,inherits:Cr,toFlatObject:xr,kindOf:le,kindOfTest:O,endsWith:Tr,toArray:Pr,isTypedArray:_r,isFileList:Er},x=v;function we(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Qe=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(x.isURLSearchParams(t))n=t.toString();else{var a=[];x.forEach(t,function(f,h){f===null||typeof f>"u"||(x.isArray(f)?h=h+"[]":f=[f],x.forEach(f,function(d){x.isDate(d)?d=d.toISOString():x.isObject(d)&&(d=JSON.stringify(d)),a.push(we(h)+"="+we(d))}))}),n=a.join("&")}if(n){var o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Nr=v;function F(){this.handlers=[]}F.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};F.prototype.forEach=function(r){Nr.forEach(this.handlers,function(i){i!==null&&r(i)})};var gr=F,Dr=v,qr=function(r,t){Dr.forEach(r,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[a])})},J,be;function _(){if(be)return J;be=1;var e=v;function r(n,a,o,s,f){Error.call(this),this.message=n,this.name="AxiosError",a&&(this.code=a),o&&(this.config=o),s&&(this.request=s),f&&(this.response=f)}e.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var t=r.prototype,i={};return["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(n){i[n]={value:n}}),Object.defineProperties(r,i),Object.defineProperty(t,"isAxiosError",{value:!0}),r.from=function(n,a,o,s,f,h){var l=Object.create(t);return e.toFlatObject(n,l,function(u){return u!==Error.prototype}),r.call(l,n.message,a,o,s,f),l.name=n.name,h&&Object.assign(l,h),l},J=r,J}var Ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},z,Oe;function Ge(){if(Oe)return z;Oe=1;var e=v;function r(t,i){i=i||new FormData;var n=[];function a(s){return s===null?"":e.isDate(s)?s.toISOString():e.isArrayBuffer(s)||e.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function o(s,f){if(e.isPlainObject(s)||e.isArray(s)){if(n.indexOf(s)!==-1)throw Error("Circular reference detected in "+f);n.push(s),e.forEach(s,function(l,d){if(!e.isUndefined(l)){var u=f?f+"."+d:d,m;if(l&&!f&&typeof l=="object"){if(e.endsWith(d,"{}"))l=JSON.stringify(l);else if(e.endsWith(d,"[]")&&(m=e.toArray(l))){m.forEach(function(q){!e.isUndefined(q)&&i.append(u,a(q))});return}}o(l,u)}}),n.pop()}else i.append(f,a(s))}return o(t),i}return z=r,z}var V,Ae;function Ur(){if(Ae)return V;Ae=1;var e=_();return V=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},V}var W,Se;function Br(){if(Se)return W;Se=1;var e=v;return W=e.isStandardBrowserEnv()?function(){return{write:function(i,n,a,o,s,f){var h=[];h.push(i+"="+encodeURIComponent(n)),e.isNumber(a)&&h.push("expires="+new Date(a).toGMTString()),e.isString(o)&&h.push("path="+o),e.isString(s)&&h.push("domain="+s),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),W}var Lr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Fr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},jr=Lr,Ir=Fr,Ye=function(r,t){return r&&!jr(t)?Ir(r,t):t},X,Ce;function $r(){if(Ce)return X;Ce=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return X=function(i){var n={},a,o,s;return i&&e.forEach(i.split(`
`),function(h){if(s=h.indexOf(":"),a=e.trim(h.substr(0,s)).toLowerCase(),o=e.trim(h.substr(s+1)),a){if(n[a]&&r.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([o]):n[a]=n[a]?n[a]+", "+o:o}}),n},X}var Q,xe;function kr(){if(xe)return Q;xe=1;var e=v;return Q=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(o){var s=o;return t&&(i.setAttribute("href",s),s=i.href),i.setAttribute("href",s),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(s){var f=e.isString(s)?a(s):s;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),Q}var K,Te;function j(){if(Te)return K;Te=1;var e=_(),r=v;function t(i){e.call(this,i==null?"canceled":i,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),K=t,K}var G,Pe;function Mr(){return Pe||(Pe=1,G=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),G}var Y,_e;function Ne(){if(_e)return Y;_e=1;var e=v,r=Ur(),t=Br(),i=Qe,n=Ye,a=$r(),o=kr(),s=Ke,f=_(),h=j(),l=Mr();return Y=function(u){return new Promise(function(q,A){var N=u.data,g=u.headers,D=u.responseType,S;function Ee(){u.cancelToken&&u.cancelToken.unsubscribe(S),u.signal&&u.signal.removeEventListener("abort",S)}e.isFormData(N)&&e.isStandardBrowserEnv()&&delete g["Content-Type"];var c=new XMLHttpRequest;if(u.auth){var ar=u.auth.username||"",sr=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";g.Authorization="Basic "+btoa(ar+":"+sr)}var k=n(u.baseURL,u.url);c.open(u.method.toUpperCase(),i(k,u.params,u.paramsSerializer),!0),c.timeout=u.timeout;function ye(){if(!!c){var R="getAllResponseHeaders"in c?a(c.getAllResponseHeaders()):null,C=!D||D==="text"||D==="json"?c.responseText:c.response,b={data:C,status:c.status,statusText:c.statusText,headers:R,config:u,request:c};r(function(H){q(H),Ee()},function(H){A(H),Ee()},b),c=null}}if("onloadend"in c?c.onloadend=ye:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(ye)},c.onabort=function(){!c||(A(new f("Request aborted",f.ECONNABORTED,u,c)),c=null)},c.onerror=function(){A(new f("Network Error",f.ERR_NETWORK,u,c,c)),c=null},c.ontimeout=function(){var C=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",b=u.transitional||s;u.timeoutErrorMessage&&(C=u.timeoutErrorMessage),A(new f(C,b.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,c)),c=null},e.isStandardBrowserEnv()){var Re=(u.withCredentials||o(k))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Re&&(g[u.xsrfHeaderName]=Re)}"setRequestHeader"in c&&e.forEach(g,function(C,b){typeof N>"u"&&b.toLowerCase()==="content-type"?delete g[b]:c.setRequestHeader(b,C)}),e.isUndefined(u.withCredentials)||(c.withCredentials=!!u.withCredentials),D&&D!=="json"&&(c.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&c.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(S=function(R){!c||(A(!R||R&&R.type?new h:R),c.abort(),c=null)},u.cancelToken&&u.cancelToken.subscribe(S),u.signal&&(u.signal.aborted?S():u.signal.addEventListener("abort",S))),N||(N=null);var M=l(k);if(M&&["http","https","file"].indexOf(M)===-1){A(new f("Unsupported protocol "+M+":",f.ERR_BAD_REQUEST,u));return}c.send(N)})},Y}var Z,ge;function Hr(){return ge||(ge=1,Z=null),Z}var p=v,De=qr,qe=_(),Jr=Ke,zr=Ge(),Vr={"Content-Type":"application/x-www-form-urlencoded"};function Ue(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function Wr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Ne()),e}function Xr(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var I={transitional:Jr,adapter:Wr(),transformRequest:[function(r,t){if(De(t,"Accept"),De(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return Ue(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],a;if((a=p.isFileList(r))||i&&n==="multipart/form-data"){var o=this.env&&this.env.FormData;return zr(a?{"files[]":r}:r,o&&new o)}else if(i||n==="application/json")return Ue(t,"application/json"),Xr(r);return r}],transformResponse:[function(r){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(o){if(a)throw o.name==="SyntaxError"?qe.from(o,qe.ERR_BAD_RESPONSE,this,null,this.response):o}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Hr()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){I.headers[r]={}});p.forEach(["post","put","patch"],function(r){I.headers[r]=p.merge(Vr)});var pe=I,Qr=v,Kr=pe,Gr=function(r,t,i){var n=this||Kr;return Qr.forEach(i,function(o){r=o.call(n,r,t)}),r},ee,Be;function Ze(){return Be||(Be=1,ee=function(r){return!!(r&&r.__CANCEL__)}),ee}var Le=v,re=Gr,Yr=Ze(),Zr=pe,et=j();function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new et}var rt=function(r){te(r),r.headers=r.headers||{},r.data=re.call(r,r.data,r.headers,r.transformRequest),r.headers=Le.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),Le.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||Zr.adapter;return t(r).then(function(n){return te(r),n.data=re.call(r,n.data,n.headers,r.transformResponse),n},function(n){return Yr(n)||(te(r),n&&n.response&&(n.response.data=re.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},y=v,er=function(r,t){t=t||{};var i={};function n(l,d){return y.isPlainObject(l)&&y.isPlainObject(d)?y.merge(l,d):y.isPlainObject(d)?y.merge({},d):y.isArray(d)?d.slice():d}function a(l){if(y.isUndefined(t[l])){if(!y.isUndefined(r[l]))return n(void 0,r[l])}else return n(r[l],t[l])}function o(l){if(!y.isUndefined(t[l]))return n(void 0,t[l])}function s(l){if(y.isUndefined(t[l])){if(!y.isUndefined(r[l]))return n(void 0,r[l])}else return n(void 0,t[l])}function f(l){if(l in t)return n(r[l],t[l]);if(l in r)return n(void 0,r[l])}var h={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:f};return y.forEach(Object.keys(r).concat(Object.keys(t)),function(d){var u=h[d]||a,m=u(d);y.isUndefined(m)&&u!==f||(i[d]=m)}),i},ne,Fe;function rr(){return Fe||(Fe=1,ne={version:"0.27.2"}),ne}var tt=rr().version,w=_(),ve={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){ve[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var je={};ve.transitional=function(r,t,i){function n(a,o){return"[Axios v"+tt+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return function(a,o,s){if(r===!1)throw new w(n(o," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!je[o]&&(je[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(a,o,s):!0}};function nt(e,r,t){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var a=i[n],o=r[a];if(o){var s=e[a],f=s===void 0||o(s,a,e);if(f!==!0)throw new w("option "+a+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+a,w.ERR_BAD_OPTION)}}var it={assertOptions:nt,validators:ve},tr=v,at=Qe,Ie=gr,$e=rt,$=er,st=Ye,nr=it,T=nr.validators;function P(e){this.defaults=e,this.interceptors={request:new Ie,response:new Ie}}P.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=$(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&nr.assertOptions(i,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(a=a&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var s;if(!a){var f=[$e,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),s=Promise.resolve(t);f.length;)s=s.then(f.shift(),f.shift());return s}for(var h=t;n.length;){var l=n.shift(),d=n.shift();try{h=l(h)}catch(u){d(u);break}}try{s=$e(h)}catch(u){return Promise.reject(u)}for(;o.length;)s=s.then(o.shift(),o.shift());return s};P.prototype.getUri=function(r){r=$(this.defaults,r);var t=st(r.baseURL,r.url);return at(t,r.params,r.paramsSerializer)};tr.forEach(["delete","get","head","options"],function(r){P.prototype[r]=function(t,i){return this.request($(i||{},{method:r,url:t,data:(i||{}).data}))}});tr.forEach(["post","put","patch"],function(r){function t(i){return function(a,o,s){return this.request($(s||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}P.prototype[r]=t(),P.prototype[r+"Form"]=t(!0)});var ot=P,ie,ke;function ut(){if(ke)return ie;ke=1;var e=j();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(o){i=o});var n=this;this.promise.then(function(a){if(!!n._listeners){var o,s=n._listeners.length;for(o=0;o<s;o++)n._listeners[o](a);n._listeners=null}}),this.promise.then=function(a){var o,s=new Promise(function(f){n.subscribe(f),o=f}).then(a);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o){n.reason||(n.reason=new e(o),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(o){i=o});return{token:n,cancel:i}},ie=r,ie}var ae,Me;function ft(){return Me||(Me=1,ae=function(r){return function(i){return r.apply(null,i)}}),ae}var se,He;function lt(){if(He)return se;He=1;var e=v;return se=function(t){return e.isObject(t)&&t.isAxiosError===!0},se}var Je=v,ct=Ve,B=ot,dt=er,ht=pe;function ir(e){var r=new B(e),t=ct(B.prototype.request,r);return Je.extend(t,B.prototype,r),Je.extend(t,r),t.create=function(n){return ir(dt(e,n))},t}var E=ir(ht);E.Axios=B;E.CanceledError=j();E.CancelToken=ut();E.isCancel=Ze();E.VERSION=rr().version;E.toFormData=Ge();E.AxiosError=_();E.Cancel=E.CanceledError;E.all=function(r){return Promise.all(r)};E.spread=ft();E.isAxiosError=lt();ue.exports=E;ue.exports.default=E;(function(e){e.exports=ue.exports})(ze);const me=ur(ze.exports),vt=async()=>{try{return me.get("http://www.symptom.kz/questionnaires/id/114")}catch(e){const r=e;return console.log(e),r}},mt=async e=>{try{return me.put("http://www.symptom.kz/questionnaires/update",e)}catch(r){const t=r;return console.log(r),t}},Et=async()=>{try{return me.get("http://www.symptom.kz/recommendations")}catch(e){const r=e;return console.log(e),r}};export{me as a,mt as b,pt as c,Et as d,vt as g};
