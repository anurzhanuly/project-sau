import{d as D,a0 as b,a4 as g,r,c as p,a as C,e as o,f as u,b as a,F as E,o as N,a6 as V,K as h,s as w,p as y,g as S,_ as x}from"./index.054d1183.js";import{b as B,s as F}from"./confirmpopup.esm.816954ff.js";import{u as k}from"./adminStore.6af053d2.js";const I=s=>(y("data-v-8e2bd0ea"),s=s(),S(),s),Q={class:"wrapper"},$={class:"block"},A=I(()=>a("h2",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u0432 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F\u0445",-1)),O={class:"input-wrapper"},j=D({__name:"ConditionsNameView",setup(s){b();const d=g(),c=k(),n=r(""),l=r(""),m=p(()=>c.allRecommendations),_=p(()=>c.conditionColumns[0].options),f=()=>{const e=JSON.stringify(m.value).split(n.value).join(l.value);console.log(e)},v=i=>{d.require({target:i.currentTarget,message:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",acceptLabel:"\u0414\u0430",rejectLabel:"\u041D\u0435\u0442",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:f})};return(i,e)=>(N(),C(E,null,[o(u(V)),o(u(B)),a("div",Q,[a("div",$,[A,a("div",O,[o(u(h),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),placeholder:"\u0414\u043E",style:{width:"100%"}},null,8,["modelValue"]),o(u(F),{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),options:u(_),"option-value":"value","option-label":"value",placeholder:"\u041F\u043E\u0441\u043B\u0435","filter-placeholder":"\u041F\u043E\u0438\u0441\u043A",filter:"",lazy:"",style:{margin:"0 20px",width:"100%"},"empty-filter-message":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E","empty-message":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"},null,8,["modelValue","options"]),o(u(w),{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",class:"p-button-raised p-button-text",style:{width:"50%"},onClick:e[2]||(e[2]=t=>v(t))})])])])],64))}});const R=x(j,[["__scopeId","data-v-8e2bd0ea"]]);export{R as default};