import{e as p,a as b,z as v,r as c,f as o,g as u,l as a,F as f,k as m,i as D,u as r,G as _,S as h,ad as k,y as w,t as C,ak as y,_ as B}from"./index.a3064769.js";const V={class:"pages-main"},g={class:"pages-nav"},F=["for","onClick"],x=["id","value"],N={class:"pages-view"},R=p({__name:"DoctorCabinet",setup($){b(()=>{i.push("/cabinet/main")});const i=v(),s=c("\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),d=c([{label:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",icon:"pi pi-fw pi-book",to:"/cabinet/main"},{label:"\u041F\u0430\u0446\u0438\u0435\u043D\u0442\u044B",icon:"pi pi-fw pi-users",to:"/cabinet/patients"},{label:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",icon:"pi pi-fw pi-exclamation-circle",to:"/cabinet/settings"}]);return(z,n)=>(o(),u("div",V,[a("div",g,[(o(!0),u(f,null,m(d.value,(e,t)=>(o(),u("label",{key:t,for:`${t}`,class:_(["label",{selected:s.value===e.label}]),onClick:l=>r(i).push(e.to)},[a("i",{class:_(e.icon)},null,2),h(a("input",{id:`${t}`,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l),type:"radio",class:"hidden",value:e.label},null,8,x),[[k,s.value]]),w(" "+C(e.label),1)],10,F))),128))]),a("div",N,[D(r(y))])]))}});const M=B(R,[["__scopeId","data-v-e8e1b905"]]);export{M as default};
