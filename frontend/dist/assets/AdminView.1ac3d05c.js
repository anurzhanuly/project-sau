import{D as c,i as g,z as N,o as i,c as o,e as u,F as b,j as A,k as h,l as S,b as p,n as T,w as v,a as m,t as y,M as x,_ as V,f as E,m as k,u as R}from"./index.a3389db2.js";import{R as O}from"./ripple.esm.17521115.js";var I={name:"TabMenu",emits:["update:activeIndex","tab-change"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0}},timeout:null,data(){return{d_activeIndex:this.activeIndex}},watch:{$route(){this.timeout=setTimeout(()=>this.updateInkBar(),50)},activeIndex(e){this.d_activeIndex=e}},mounted(){this.updateInkBar()},updated(){this.updateInkBar()},beforeUnmount(){clearTimeout(this.timeout)},methods:{onItemClick(e,n,a,s){if(this.disabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),n.to&&s&&s(e),a!==this.d_activeIndex&&(this.d_activeIndex=a,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:a})},getItemClass(e,n){return["p-tabmenuitem",e.class,{"p-highlight":this.d_activeIndex===n,"p-disabled":this.disabled(e)}]},getRouteItemClass(e,n,a){return["p-tabmenuitem",e.class,{"p-highlight":this.exact?a:n,"p-disabled":this.disabled(e)}]},getItemIcon(e){return["p-menuitem-icon",e.icon]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label},updateInkBar(){let e=this.$refs.nav.children,n=!1;for(let a=0;a<e.length;a++){let s=e[a];c.hasClass(s,"p-highlight")&&(this.$refs.inkbar.style.width=c.getWidth(s)+"px",this.$refs.inkbar.style.left=c.getOffset(s).left-c.getOffset(this.$refs.nav).left+"px",n=!0)}n||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")}},directives:{ripple:O}};const $={class:"p-tabmenu p-component"},j={ref:"nav",class:"p-tabmenu-nav p-reset",role:"tablist"},F=["href","onClick"],H={class:"p-menuitem-text"},M=["href","target","onClick","tabindex"],q={class:"p-menuitem-text"},J={ref:"inkbar",class:"p-tabmenu-ink-bar"};function L(e,n,a,s,r,l){const w=g("router-link"),_=N("ripple");return i(),o("div",$,[u("ul",j,[(i(!0),o(b,null,A(a.model,(t,d)=>(i(),o(b,{key:l.label(t)+"_"+d.toString()},[t.to&&!l.disabled(t)?(i(),h(w,{key:0,to:t.to,custom:""},{default:S(({navigate:f,href:C,isActive:B,isExactActive:z})=>[l.visible(t)?(i(),o("li",{key:0,class:p(l.getRouteItemClass(t,B,z)),style:T(t.style),role:"tab"},[e.$slots.item?(i(),h(x(e.$slots.item),{key:1,item:t},null,8,["item"])):v((i(),o("a",{key:0,href:C,class:"p-menuitem-link",onClick:D=>l.onItemClick(D,t,d,f),role:"presentation"},[t.icon?(i(),o("span",{key:0,class:p(l.getItemIcon(t))},null,2)):m("",!0),u("span",H,y(l.label(t)),1)],8,F)),[[_]])],6)):m("",!0)]),_:2},1032,["to"])):l.visible(t)?(i(),o("li",{key:1,class:p(l.getItemClass(t,d)),role:"tab"},[e.$slots.item?(i(),h(x(e.$slots.item),{key:1,item:t},null,8,["item"])):v((i(),o("a",{key:0,href:t.url,class:"p-menuitem-link",target:t.target,onClick:f=>l.onItemClick(f,t,d),role:"presentation",tabindex:l.disabled(t)?null:"0"},[t.icon?(i(),o("span",{key:0,class:p(l.getItemIcon(t))},null,2)):m("",!0),u("span",q,y(l.label(t)),1)],8,M)),[[_]])],2)):m("",!0)],64))),128)),u("li",J,null,512)],512)])}function P(e,n){n===void 0&&(n={});var a=n.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var U=`
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
`;P(U);I.render=L;const W={__name:"AdminView",setup(e){const n=E([{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C JSON \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432",icon:"pi pi-fw pi-pencil",to:"/admin/quest"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438",icon:"pi pi-fw pi-file",to:"/admin/recom"}]);return(a,s)=>{const r=g("router-view");return i(),o(b,null,[k(R(I),{model:n.value},null,8,["model"]),k(r)],64)}}},Q=V(W,[["__scopeId","data-v-144941a5"]]);export{Q as default};
