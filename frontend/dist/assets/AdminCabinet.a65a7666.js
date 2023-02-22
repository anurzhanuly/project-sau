import{u as B}from"./clinics.store.ca527973.js";import{u as S}from"./admin.store.c71f2fc8.js";import{H as o,R as A,L as w,M as N,f as r,g as u,l as f,F as y,k as L,W as g,j as R,G as b,D as K,Q as x,E as p,t as v,$ as _,e as z,a as F,r as P,i as C,u as H}from"./index.f2ac9db0.js";var D={name:"TabMenu",emits:["update:activeIndex","tab-change"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},timeout:null,data(){return{d_activeIndex:this.activeIndex}},watch:{$route(){this.timeout=setTimeout(()=>this.updateInkBar(),50)},activeIndex(e){this.d_activeIndex=e}},mounted(){this.updateInkBar()},updated(){this.updateInkBar()},beforeUnmount(){clearTimeout(this.timeout)},methods:{onItemClick(e,a,n,t){if(this.disabled(a)){e.preventDefault();return}a.command&&a.command({originalEvent:e,item:a}),a.to&&t&&t(e),n!==this.d_activeIndex&&(this.d_activeIndex=n,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:n})},onKeydownItem(e,a,n){let t=n,s={};const l=this.$refs.tabLink;switch(e.code){case"ArrowRight":{s=this.findNextItem(this.$refs.tab,t),t=s.i;break}case"ArrowLeft":{s=this.findPrevItem(this.$refs.tab,t),t=s.i;break}case"End":{s=this.findPrevItem(this.$refs.tab,this.model.length),t=s.i,e.preventDefault();break}case"Home":{s=this.findNextItem(this.$refs.tab,-1),t=s.i,e.preventDefault();break}case"Space":case"Enter":{e.currentTarget&&e.currentTarget.click(),e.preventDefault();break}case"Tab":{this.setDefaultTabIndexes(l);break}}l[t]&&l[n]&&(l[n].tabIndex="-1",l[t].tabIndex="0",l[t].focus())},findNextItem(e,a){let n=a+1;if(n>=e.length)return{nextItem:e[e.length],i:e.length};let t=e[n];return t?o.hasClass(t,"p-disabled")?this.findNextItem(e,n):{nextItem:t,i:n}:null},findPrevItem(e,a){let n=a-1;if(n<0)return{nextItem:e[0],i:0};let t=e[n];return t?o.hasClass(t,"p-disabled")?this.findPrevItem(e,n):{prevItem:t,i:n}:null},getItemClass(e,a){return["p-tabmenuitem",e.class,{"p-highlight":this.d_activeIndex===a,"p-disabled":this.disabled(e)}]},getRouteItemClass(e,a,n){return["p-tabmenuitem",e.class,{"p-highlight":this.exact?n:a,"p-disabled":this.disabled(e)}]},getItemIcon(e){return["p-menuitem-icon",e.icon]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label},setDefaultTabIndexes(e){setTimeout(()=>{e.forEach(a=>{a.tabIndex=o.hasClass(a.parentElement,"p-highlight")?"0":"-1"})},300)},setTabIndex(e){return this.d_activeIndex===e?"0":"-1"},updateInkBar(){let e=this.$refs.nav.children,a=!1;for(let n=0;n<e.length;n++){let t=e[n];o.hasClass(t,"p-highlight")&&(this.$refs.inkbar.style.width=o.getWidth(t)+"px",this.$refs.inkbar.style.left=o.getOffset(t).left-o.getOffset(this.$refs.nav).left+"px",a=!0)}a||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")}},directives:{ripple:A}};const M={class:"p-tabmenu p-component"},O=["aria-labelledby","aria-label"],V=["href","aria-label","aria-disabled","tabindex","onClick","onKeydown"],$={class:"p-menuitem-text"},j=["onClick","onKeydown"],q=["href","target","aria-label","aria-disabled","tabindex"],Q={class:"p-menuitem-text"},W={ref:"inkbar",class:"p-tabmenu-ink-bar"};function G(e,a,n,t,s,l){const h=w("router-link"),I=N("ripple");return r(),u("div",M,[f("ul",{ref:"nav",class:"p-tabmenu-nav p-reset",role:"menubar","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},[(r(!0),u(y,null,L(n.model,(i,d)=>(r(),u(y,{key:l.label(i)+"_"+d.toString()},[i.to&&!l.disabled(i)?(r(),g(h,{key:0,to:i.to,custom:""},{default:R(({navigate:c,href:E,isActive:T,isExactActive:k})=>[l.visible(i)?(r(),u("li",{key:0,ref_for:!0,ref:"tab",class:b(l.getRouteItemClass(i,T,k)),style:K(i.style),role:"presentation"},[e.$slots.item?(r(),g(_(e.$slots.item),{key:1,item:i,index:d},null,8,["item","index"])):x((r(),u("a",{key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:E,class:"p-menuitem-link","aria-label":l.label(i),"aria-disabled":l.disabled(i),tabindex:k?"0":"-1",onClick:m=>l.onItemClick(m,i,d,c),onKeydown:m=>l.onKeydownItem(m,i,d,c)},[i.icon?(r(),u("span",{key:0,class:b(l.getItemIcon(i))},null,2)):p("",!0),f("span",$,v(l.label(i)),1)],40,V)),[[I]])],6)):p("",!0)]),_:2},1032,["to"])):l.visible(i)?(r(),u("li",{key:1,ref_for:!0,ref:"tab",class:b(l.getItemClass(i,d)),role:"presentation",onClick:c=>l.onItemClick(c,i,d),onKeydown:c=>l.onKeydownItem(c,i,d)},[e.$slots.item?(r(),g(_(e.$slots.item),{key:1,item:i,index:d},null,8,["item","index"])):x((r(),u("a",{key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:i.url,class:"p-menuitem-link",target:i.target,"aria-label":l.label(i),"aria-disabled":l.disabled(i),tabindex:l.setTabIndex(d)},[i.icon?(r(),u("span",{key:0,class:b(l.getItemIcon(i))},null,2)):p("",!0),f("span",Q,v(l.label(i)),1)],8,q)),[[I]])],42,j)):p("",!0)],64))),128)),f("li",W,null,512)],8,O)])}function J(e,a){a===void 0&&(a={});var n=a.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&t.firstChild?t.insertBefore(s,t.firstChild):t.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var U=`
.p-tabmenu {
    overflow-x: auto;
}
.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}
.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
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
`;J(U);D.render=G;const ee=z({__name:"AdminCabinet",setup(e){const a=S(),n=B();F(()=>{a.allRecommendations.length||a.getRecommendationsData(),a.questions.length||a.getQuestionsData(),n.allClinics.length||n.getClinicsData()});const t=P([{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C JSON \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432",icon:"pi pi-fw pi-pencil",to:"/admin/quest"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0439",icon:"pi pi-fw pi-file",to:"/admin/cond"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438",icon:"pi pi-fw pi-book",to:"/admin/recom"},{label:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",icon:"pi pi-fw pi-database",to:"/admin/magic"},{label:"\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043B\u0438\u043D\u0438\u043A",icon:"pi pi-fw pi-book",to:"/admin/clinics"}]);return(s,l)=>{const h=w("router-view");return r(),u(y,null,[C(H(D),{model:t.value},null,8,["model"]),C(h)],64)}}});export{ee as default};