import{_ as x}from"./RecommendationsBase.vue_vue_type_style_index_0_lang.a45bc732.js";import{s as y}from"./panel.esm.d69952b8.js";import{d as D,ac as V,s as B,r as f,M as E,o as c,c as i,f as o,u,e as m,F as _,x as T,g as $,ae as j,X as w,G as F,i as d,aa as N,a3 as O,ab as A,_ as L}from"./index.5bf35bb2.js";import{s as U}from"./confirmpopup.esm.2b1769b2.js";import{s as I}from"./textarea.esm.d8886f2e.js";import{s as S}from"./inputnumber.esm.79ddd81f.js";import{u as q}from"./admin.store.1b80f884.js";import"./overlayeventbus.esm.e01cac82.js";const G={class:"section-recommendations-change"},M={key:0,class:"recommendation-body"},X={class:"rec-buttons"},z=D({__name:"ChangeRecommendations",setup(H){const p=q(),b=V(),{checkedRecommendationName:r,allRecommendations:v}=B(p),a=f({}),l=f(null);E(r,s=>{const e=v.value.filter(t=>t.name===s)[0].tests;a.value={};for(let t in e)a.value[t]=e[t].join(",")});const g=()=>{const s=Object.keys(a.value),e=`${+s[s.length-1]+1}`;a.value[e]=""},k=()=>{const s={};Object.keys(a.value).filter(e=>+e!==l.value).forEach((e,t)=>{s[t+1]=a.value[+e]}),a.value=s,l.value=null},C=s=>{b.require({target:s.currentTarget,message:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",acceptLabel:"\u0414\u0430",rejectLabel:"\u041D\u0435\u0442",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:k})},R=async()=>{var t;const s={};for(let n in a.value)s[n]=a.value[n].split(".,");const e=await p.saveRecommendationsData(r.value,s);if(e.status===200)N("\u0423\u0441\u043F\u0435\u0448\u043D\u043E","\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u043D\u0435\u0441\u0435\u043D\u044B");else if(O.isAxiosError(e)){const n=(t=e.response)==null?void 0:t.data;A("\u041E\u0448\u0438\u0431\u043A\u0430",n.ERROR)}};return(s,e)=>(c(),i(_,null,[o(u(j)),o(u(U)),m("section",G,[o(x),u(r)!==""?(c(),i("div",M,[(c(!0),i(_,null,T(Object.keys(a.value),(t,n)=>(c(),w(u(y),{key:n,header:t,toggleable:!0,collapsed:!0},{default:F(()=>[o(u(I),{modelValue:a.value[t],"onUpdate:modelValue":h=>a.value[t]=h,style:{width:"100%",height:"100%"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["header"]))),128)),m("div",X,[o(u(d),{label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",class:"p-button-raised p-button-text",onClick:g}),m("div",null,[o(u(S),{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t)},null,8,["modelValue"]),o(u(d),{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",class:"p-button-raised p-button-danger p-button-text",disabled:!l.value,onClick:e[1]||(e[1]=t=>C(t))},null,8,["disabled"])]),o(u(d),{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",class:"p-button-raised p-button-success p-button-text",onClick:R})])])):$("",!0)])],64))}});const te=L(z,[["__scopeId","data-v-26bebc58"]]);export{te as default};
