if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const u=e=>i(e,l),o={module:{uri:l},exports:t,require:u};s[l]=Promise.all(r.map((e=>o[e]||u(e)))).then((e=>(n(...e),t)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.5da3af9f.js",revision:null},{url:"assets/index.bc674ed2.css",revision:null},{url:"assets/ResultView.345b1b12.js",revision:null},{url:"assets/ResultView.fa67e014.css",revision:null},{url:"assets/surveyStore.9c8ab239.js",revision:null},{url:"assets/SurveyView.2f05a10c.css",revision:null},{url:"assets/SurveyView.573c3b44.js",revision:null},{url:"index.html",revision:"3e9ab7e4a2c09c2395841ff1afb90d4c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"708de1fe8dc947222665049fdf3a7afe"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
