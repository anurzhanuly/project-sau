import{d as g,af as C,r,c as p,a as D,b as h,f as o,u as e,e as s,F as E,ah as N,i as b,j as y,a0 as S,a1 as V,a2 as w}from"./index.b1adbe29.js";import{s as x}from"./dropdown.esm.59891594.js";import{s as B}from"./confirmpopup.esm.8d9746cf.js";import{u as F}from"./admin.store.1640f1ee.js";import"./overlayeventbus.esm.59247208.js";const k=a=>(S("data-v-9e79cf63"),a=a(),V(),a),I={class:"wrapper"},Q={class:"block"},$=k(()=>s("h2",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u0432 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F\u0445",-1)),j={class:"input-wrapper"},A=g({__name:"ChangeConditionsName",setup(a){const m=C(),c=F(),n=r(""),l=r(""),d=p(()=>c.allRecommendations),f=p(()=>c.conditionColumns[0].options),_=()=>{const u=JSON.stringify(d.value).split(n.value).join(l.value);console.log(u)},v=i=>{m.require({target:i.currentTarget,message:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",acceptLabel:"\u0414\u0430",rejectLabel:"\u041D\u0435\u0442",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:_})};return(i,u)=>(D(),h(E,null,[o(e(N)),o(e(B)),s("div",I,[s("div",Q,[$,s("div",j,[o(e(b),{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=t=>n.value=t),placeholder:"\u0414\u043E",style:{width:"100%"}},null,8,["modelValue"]),o(e(x),{modelValue:l.value,"onUpdate:modelValue":u[1]||(u[1]=t=>l.value=t),options:e(f),"option-value":"value","option-label":"value",placeholder:"\u041F\u043E\u0441\u043B\u0435","filter-placeholder":"\u041F\u043E\u0438\u0441\u043A",filter:"",lazy:"",style:{margin:"0 20px",width:"100%"},"empty-filter-message":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E","empty-message":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"},null,8,["modelValue","options"]),o(e(y),{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",class:"p-button-raised p-button-text",style:{width:"50%"},onClick:u[2]||(u[2]=t=>v(t))})])])])],64))}});const U=w(A,[["__scopeId","data-v-9e79cf63"]]);export{U as default};
