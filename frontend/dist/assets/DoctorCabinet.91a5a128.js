import{d as v,a as o,b as i,e,f as u,u as l,i as h,o as f,k as $,r as d,F as p,x as y,v as b,J as D,ai as g,h as k,H as B,ap as C,a2 as w}from"./index.b1adbe29.js";import{_ as x}from"./logo-auth.e2a39c5e.js";const F={class:"base-header"},V={class:"base-header-content"},E={class:"p-input-icon-left"},H=e("i",{class:"pi pi-search"},null,-1),N=v({__name:"BaseHeader",setup(m){return(a,s)=>(o(),i("div",F,[e("div",V,[e("img",{src:x,alt:"Symptom logo",class:"base-header-img",onClick:s[0]||(s[0]=c=>a.$router.push("/"))}),e("span",E,[H,u(l(h),{type:"text",placeholder:"\u041F\u043E\u0438\u0441\u043A"})])])]))}});const R={class:"pages-main"},A={class:"pages-nav"},M=["for","onClick"],S=["id","value"],z={class:"pages-view"},I=v({__name:"DoctorCabinet",setup(m){f(()=>{a.push("/cabinet/main")});const a=$(),s=d("\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),c=d([{label:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",icon:"pi pi-fw pi-book",to:"/cabinet/main"},{label:"\u041F\u0430\u0446\u0438\u0435\u043D\u0442\u044B",icon:"pi pi-fw pi-users",to:"/cabinet/patients"},{label:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",icon:"pi pi-fw pi-exclamation-circle",to:"/cabinet/settings"}]);return(J,r)=>(o(),i(p,null,[u(N),e("div",R,[e("div",A,[(o(!0),i(p,null,y(c.value,(t,n)=>(o(),i("label",{key:n,for:`${n}`,class:b(["label",{selected:s.value===t.label}]),onClick:_=>l(a).push(t.to)},[e("i",{class:b(t.icon)},null,2),D(e("input",{id:`${n}`,"onUpdate:modelValue":r[0]||(r[0]=_=>s.value=_),type:"radio",class:"hidden",value:t.label},null,8,S),[[g,s.value]]),k(" "+B(t.label),1)],10,M))),128))]),e("div",z,[u(l(C))])])],64))}});const T=w(I,[["__scopeId","data-v-71db45eb"]]);export{T as default};
