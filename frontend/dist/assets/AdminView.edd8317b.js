import{u as E}from"./adminStore.932c65c3.js";import{D as d,R as S,z as x,k as z,o as l,a as u,b as c,F as h,j as N,h as f,w as R,n as p,A as T,m as v,i as m,t as y,B as g,d as V,x as F,r as O,e as k,f as $,_ as j}from"./index.cc834903.js";var C={name:"TabMenu",emits:["update:activeIndex","tab-change"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0}},timeout:null,data(){return{d_activeIndex:this.activeIndex}},watch:{$route(){this.timeout=setTimeout(()=>this.updateInkBar(),50)},activeIndex(e){this.d_activeIndex=e}},mounted(){this.updateInkBar()},updated(){this.updateInkBar()},beforeUnmount(){clearTimeout(this.timeout)},methods:{onItemClick(e,t,a,s){if(this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),t.to&&s&&s(e),a!==this.d_activeIndex&&(this.d_activeIndex=a,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:a})},getItemClass(e,t){return["p-tabmenuitem",e.class,{"p-highlight":this.d_activeIndex===t,"p-disabled":this.disabled(e)}]},getRouteItemClass(e,t,a){return["p-tabmenuitem",e.class,{"p-highlight":this.exact?a:t,"p-disabled":this.disabled(e)}]},getItemIcon(e){return["p-menuitem-icon",e.icon]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label},updateInkBar(){let e=this.$refs.nav.children,t=!1;for(let a=0;a<e.length;a++){let s=e[a];d.hasClass(s,"p-highlight")&&(this.$refs.inkbar.style.width=d.getWidth(s)+"px",this.$refs.inkbar.style.left=d.getOffset(s).left-d.getOffset(this.$refs.nav).left+"px",t=!0)}t||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")}},directives:{ripple:S}};const q={class:"p-tabmenu p-component"},H={ref:"nav",class:"p-tabmenu-nav p-reset",role:"tablist"},M=["href","onClick"],J={class:"p-menuitem-text"},L=["href","target","onClick","tabindex"],P={class:"p-menuitem-text"},Q={ref:"inkbar",class:"p-tabmenu-ink-bar"};function U(e,t,a,s,o,i){const I=x("router-link"),_=z("ripple");return l(),u("div",q,[c("ul",H,[(l(!0),u(h,null,N(a.model,(n,r)=>(l(),u(h,{key:i.label(n)+"_"+r.toString()},[n.to&&!i.disabled(n)?(l(),f(I,{key:0,to:n.to,custom:""},{default:R(({navigate:b,href:w,isActive:D,isExactActive:B})=>[i.visible(n)?(l(),u("li",{key:0,class:p(i.getRouteItemClass(n,D,B)),style:T(n.style),role:"tab"},[e.$slots.item?(l(),f(g(e.$slots.item),{key:1,item:n},null,8,["item"])):v((l(),u("a",{key:0,href:w,class:"p-menuitem-link",onClick:A=>i.onItemClick(A,n,r,b),role:"presentation"},[n.icon?(l(),u("span",{key:0,class:p(i.getItemIcon(n))},null,2)):m("",!0),c("span",J,y(i.label(n)),1)],8,M)),[[_]])],6)):m("",!0)]),_:2},1032,["to"])):i.visible(n)?(l(),u("li",{key:1,class:p(i.getItemClass(n,r)),role:"tab"},[e.$slots.item?(l(),f(g(e.$slots.item),{key:1,item:n},null,8,["item"])):v((l(),u("a",{key:0,href:n.url,class:"p-menuitem-link",target:n.target,onClick:b=>i.onItemClick(b,n,r),role:"presentation",tabindex:i.disabled(n)?null:"0"},[n.icon?(l(),u("span",{key:0,class:p(i.getItemIcon(n))},null,2)):m("",!0),c("span",P,y(i.label(n)),1)],8,L)),[[_]])],2)):m("",!0)],64))),128)),c("li",Q,null,512)],512)])}function W(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",a==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var G=`
.p-tabmenu {
    overflow-x: auto;
}
.p-tabmenu-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
}
.p-tabmenu-nav a {
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: relative;
    text-decoration: none;
    text-decoration: none;
    overflow: hidden;
}
.p-tabmenu-nav a:focus {
    z-index: 1;
}
.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}
.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`;W(G);C.render=U;const K=V({__name:"AdminView",setup(e){const t=E();F(()=>{t.allRecommendations.length||t.getRecommendationsData(),t.questions.length||t.getQuestionsData(),t.allClinics.length||t.getClinicsData()});const a=O([{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C JSON \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432",icon:"pi pi-fw pi-pencil",to:"/admin/quest"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0439",icon:"pi pi-fw pi-file",to:"/admin/cond"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438",icon:"pi pi-fw pi-book",to:"/admin/recom"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",icon:"pi pi-fw pi-database",to:"/admin/magic"},{label:"\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043B\u0438\u043D\u0438\u043A",icon:"pi pi-fw pi-book",to:"/admin/clinics"}]);return(s,o)=>{const i=x("router-view");return l(),u(h,null,[k($(C),{model:a.value},null,8,["model"]),k(i)],64)}}});const Z=j(K,[["__scopeId","data-v-96b9adb8"]]);export{Z as default};
