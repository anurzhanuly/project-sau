import{s as r}from"./textarea.esm.15c6d2a3.js";import{d as p,r as l,a as _,e as t,f as n,o as d,s as m,p as v,g as f,b as g,C as h,_ as y}from"./index.3b8e0aaa.js";const C=e=>(v("data-v-1862e9c0"),e=e(),f(),e),S={class:"section-questions__add"},V=C(()=>g("h2",null,"\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u044E\u0434\u0430 json \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u0438\u0437 survey",-1)),w=p({__name:"ChangeQuestionsView",setup(e){const u=l(""),a=async()=>{const s=JSON.parse(u.value.split(`
`).join("")).pages.filter(i=>i.elements[0].type!=="expression");await h({id:"114",content:{pages:s}})};return(c,s)=>(d(),_("section",S,[V,t(n(r),{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=o=>u.value=o),rows:"25"},null,8,["modelValue"]),t(n(m),{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",class:"p-button-lg",onClick:a})]))}});const J=y(w,[["__scopeId","data-v-1862e9c0"]]);export{J as default};
