import{_ as h}from"./logo-auth.e2a39c5e.js";import{_ as f}from"./BaseSwiper.vue_vue_type_style_index_0_lang.2ae8c15d.js";import{d as v,r,a as B,b as D,e as u,f as t,u as e,h as i,i as l,j as E,k as V,W as d}from"./index.c3adaa78.js";import"./survey.e604774c.js";const k={class:"authorization-section"},C={class:"onboarding-main"},z={class:"authorization-main"},b=u("span",null,"< \u041D\u0430\u0437\u0430\u0434",-1),g=[b],y={class:"authorization-wrapper p-fluid"},A={class:"authorization-form"},F=u("img",{src:h,alt:"Symptom logo"},null,-1),$=u("h4",null,[i("\u0418\u043C\u044F "),u("span",null,"*")],-1),x=u("h4",null,[i("\u0424\u0430\u043C\u0438\u043B\u0438\u044F "),u("span",null,"*")],-1),N=u("h4",null,[i("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 "),u("span",null,"*")],-1),T=v({__name:"AuthorizationDoctor",setup(w){const _=V(),n=r(""),a=r(""),c=()=>n.value!=="symptom"?(d("\u041E\u0448\u0438\u0431\u043A\u0430","\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"),!1):a.value!=="adam"?(d("\u041E\u0448\u0438\u0431\u043A\u0430","\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"),!1):!0,m=()=>{c()&&_.push("/cabinet")};return(p,o)=>(B(),D("div",k,[u("div",C,[t(f)]),u("div",z,[u("div",{class:"link-back",onClick:o[0]||(o[0]=s=>p.$router.push("/"))},g),u("div",y,[u("form",A,[F,u("div",null,[$,t(e(l),{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=s=>n.value=s)},null,8,["modelValue"])]),u("div",null,[x,t(e(l),{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=s=>a.value=s)},null,8,["modelValue"])]),u("div",null,[N,t(e(l))]),t(e(E),{label:"\u0412\u0445\u043E\u0434",onClick:m})])])])]))}});export{T as default};