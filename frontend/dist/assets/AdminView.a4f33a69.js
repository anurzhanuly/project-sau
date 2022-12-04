import{D as d,R as A,d as g,r as N,o as i,c as r,h as c,F as b,a as z,e as h,u as S,n as p,v as T,w as v,g as m,t as y,p as x,A as V,E as F,q as k,G as R,_ as O}from"./index.ee5d17c5.js";var C={name:"TabMenu",emits:["update:activeIndex","tab-change"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0}},timeout:null,data(){return{d_activeIndex:this.activeIndex}},watch:{$route(){this.timeout=setTimeout(()=>this.updateInkBar(),50)},activeIndex(e){this.d_activeIndex=e}},mounted(){this.updateInkBar()},updated(){this.updateInkBar()},beforeUnmount(){clearTimeout(this.timeout)},methods:{onItemClick(e,n,a,s){if(this.disabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),n.to&&s&&s(e),a!==this.d_activeIndex&&(this.d_activeIndex=a,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:a})},getItemClass(e,n){return["p-tabmenuitem",e.class,{"p-highlight":this.d_activeIndex===n,"p-disabled":this.disabled(e)}]},getRouteItemClass(e,n,a){return["p-tabmenuitem",e.class,{"p-highlight":this.exact?a:n,"p-disabled":this.disabled(e)}]},getItemIcon(e){return["p-menuitem-icon",e.icon]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label},updateInkBar(){let e=this.$refs.nav.children,n=!1;for(let a=0;a<e.length;a++){let s=e[a];d.hasClass(s,"p-highlight")&&(this.$refs.inkbar.style.width=d.getWidth(s)+"px",this.$refs.inkbar.style.left=d.getOffset(s).left-d.getOffset(this.$refs.nav).left+"px",n=!0)}n||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")}},directives:{ripple:A}};const $={class:"p-tabmenu p-component"},q={ref:"nav",class:"p-tabmenu-nav p-reset",role:"tablist"},H=["href","onClick"],j={class:"p-menuitem-text"},G=["href","target","onClick","tabindex"],J={class:"p-menuitem-text"},L={ref:"inkbar",class:"p-tabmenu-ink-bar"};function M(e,n,a,s,u,l){const I=g("router-link"),_=N("ripple");return i(),r("div",$,[c("ul",q,[(i(!0),r(b,null,z(a.model,(t,o)=>(i(),r(b,{key:l.label(t)+"_"+o.toString()},[t.to&&!l.disabled(t)?(i(),h(I,{key:0,to:t.to,custom:""},{default:S(({navigate:f,href:w,isActive:B,isExactActive:D})=>[l.visible(t)?(i(),r("li",{key:0,class:p(l.getRouteItemClass(t,B,D)),style:T(t.style),role:"tab"},[e.$slots.item?(i(),h(x(e.$slots.item),{key:1,item:t},null,8,["item"])):v((i(),r("a",{key:0,href:w,class:"p-menuitem-link",onClick:E=>l.onItemClick(E,t,o,f),role:"presentation"},[t.icon?(i(),r("span",{key:0,class:p(l.getItemIcon(t))},null,2)):m("",!0),c("span",j,y(l.label(t)),1)],8,H)),[[_]])],6)):m("",!0)]),_:2},1032,["to"])):l.visible(t)?(i(),r("li",{key:1,class:p(l.getItemClass(t,o)),role:"tab"},[e.$slots.item?(i(),h(x(e.$slots.item),{key:1,item:t},null,8,["item"])):v((i(),r("a",{key:0,href:t.url,class:"p-menuitem-link",target:t.target,onClick:f=>l.onItemClick(f,t,o),role:"presentation",tabindex:l.disabled(t)?null:"0"},[t.icon?(i(),r("span",{key:0,class:p(l.getItemIcon(t))},null,2)):m("",!0),c("span",J,y(l.label(t)),1)],8,G)),[[_]])],2)):m("",!0)],64))),128)),c("li",L,null,512)],512)])}function P(e,n){n===void 0&&(n={});var a=n.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",a==="top"&&s.firstChild?s.insertBefore(u,s.firstChild):s.appendChild(u),u.styleSheet?u.styleSheet.cssText=e:u.appendChild(document.createTextNode(e))}}var U=`
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
`;P(U);C.render=M;const W=V({__name:"AdminView",setup(e){const n=F([{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C JSON \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432",icon:"pi pi-fw pi-pencil",to:"/admin/quest"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0439",icon:"pi pi-fw pi-file",to:"/admin/cond"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438",icon:"pi pi-fw pi-book",to:"/admin/recom"}]);return(a,s)=>{const u=g("router-view");return i(),r(b,null,[k(R(C),{model:n.value},null,8,["model"]),k(u)],64)}}});const Q=O(W,[["__scopeId","data-v-55fb7ca8"]]);export{Q as default};
