import{d as C,a1 as D,r as p,c as x,a3 as w,a as r,e as n,u,b as d,F as v,A as k,y as $,f as c,a4 as B,z as E,M as T,a5 as N,i as j,K as O,Q as A,J as F,g as _,$ as S,m as U,a0 as L,_ as z}from"./index.542bcac6.js";import{s as I}from"./panel.esm.80cd92d1.js";import{s as J}from"./confirmpopup.esm.b16aca2c.js";import{s as M}from"./textarea.esm.8e4d2b8b.js";import{s as q}from"./inputnumber.esm.f2c7a97d.js";import{u as Q}from"./adminStore.bf101e24.js";import"./overlayeventbus.esm.34ba4117.js";const G={class:"section-recommendations-change"},H={class:"recommendation-nav"},K=["for"],P=["id","value"],W={key:0,class:"recommendation-body"},X={class:"rec-buttons"},Y=C({__name:"RecommendationsView",setup(Z){const f=Q(),y=D(),l=p(""),s=p({}),b=x(()=>f.allRecommendations),i=p(null);w(l,a=>{const t=b.value.filter(e=>e.name===a)[0].tests;s.value={};for(let e in t)s.value[e]=t[e].join(",")});const h=()=>{const a=Object.keys(s.value),t=`${+a[a.length-1]+1}`;s.value[t]=""},R=()=>{const a={};Object.keys(s.value).filter(t=>+t!==i.value).forEach((t,e)=>{a[e+1]=s.value[+t]}),s.value=a,i.value=null},V=a=>{y.require({target:a.currentTarget,message:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",acceptLabel:"\u0414\u0430",rejectLabel:"\u041D\u0435\u0442",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:R})},g=async()=>{var e;const a={};for(let o in s.value)a[o]=s.value[o].split(".,");const t=await f.saveRecommendationsData(l.value,a);if(t.status===200)S("\u0423\u0441\u043F\u0435\u0448\u043D\u043E","\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u043D\u0435\u0441\u0435\u043D\u044B");else if(U.isAxiosError(t)){const o=(e=t.response)==null?void 0:e.data;L("\u041E\u0448\u0438\u0431\u043A\u0430",o.ERROR)}};return(a,t)=>(c(),r(v,null,[n(u(B)),n(u(J)),d("section",G,[d("div",H,[(c(!0),r(v,null,k(u(b),(e,o)=>(c(),r("label",{key:o,for:`${o}`,class:E(["label",{checked:l.value===e.name}])},[T(d("input",{id:`${o}`,"onUpdate:modelValue":t[0]||(t[0]=m=>l.value=m),type:"radio",class:"hidden",value:e.name},null,8,P),[[N,l.value]]),j(" "+O(e.name),1)],10,K))),128))]),l.value!==""?(c(),r("div",W,[(c(!0),r(v,null,k(Object.keys(s.value),(e,o)=>(c(),A(u(I),{key:o,header:e,toggleable:!0,collapsed:!0},{default:F(()=>[n(u(M),{modelValue:s.value[e],"onUpdate:modelValue":m=>s.value[e]=m,style:{width:"100%",height:"100%"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["header"]))),128)),d("div",X,[n(u(_),{label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",class:"p-button-raised p-button-text",onClick:h}),d("div",null,[n(u(q),{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e)},null,8,["modelValue"]),n(u(_),{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",class:"p-button-raised p-button-danger p-button-text",disabled:!i.value,onClick:t[2]||(t[2]=e=>V(e))},null,8,["disabled"])]),n(u(_),{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",class:"p-button-raised p-button-success p-button-text",onClick:g})])])):$("",!0)])],64))}});const le=z(Y,[["__scopeId","data-v-12251be7"]]);export{le as default};