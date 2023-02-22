import{f as c,g as p,C as h,E as m,G as _,e as b,l as e,i as n,u as a,j as s,F as g,a0 as y,q as B,v as C,x,_ as E}from"./index.f2ac9db0.js";import{s as r}from"./panel.esm.fe08fad8.js";var v={name:"Divider",props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},computed:{containerClass(){return["p-divider p-component","p-divider-"+this.layout,"p-divider-"+this.type,{"p-divider-left":this.layout==="horizontal"&&(!this.align||this.align==="left")},{"p-divider-center":this.layout==="horizontal"&&this.align==="center"},{"p-divider-right":this.layout==="horizontal"&&this.align==="right"},{"p-divider-top":this.layout==="vertical"&&this.align==="top"},{"p-divider-center":this.layout==="vertical"&&(!this.align||this.align==="center")},{"p-divider-bottom":this.layout==="vertical"&&this.align==="bottom"}]}}};const F=["aria-orientation"],D={key:0,class:"p-divider-content"};function q(t,d,l,u,i,f){return c(),p("div",{class:_(f.containerClass),role:"separator","aria-orientation":l.layout},[t.$slots.default?(c(),p("div",D,[h(t.$slots,"default")])):m("",!0)],10,F)}function z(t,d){d===void 0&&(d={});var l=d.insertAt;if(!(!t||typeof document>"u")){var u=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",l==="top"&&u.firstChild?u.insertBefore(i,u.firstChild):u.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var S=`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
}
.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: '';
}
.p-divider-horizontal.p-divider-left {
    justify-content: flex-start;
}
.p-divider-horizontal.p-divider-right {
    justify-content: flex-end;
}
.p-divider-horizontal.p-divider-center {
    justify-content: center;
}
.p-divider-content {
    z-index: 1;
}
.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
}
.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: '';
}
.p-divider-vertical.p-divider-top {
    align-items: flex-start;
}
.p-divider-vertical.p-divider-center {
    align-items: center;
}
.p-divider-vertical.p-divider-bottom {
    align-items: flex-end;
}
.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}
.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}
.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}
.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}
.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}
.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
`;z(S);v.render=q;const o=t=>(C("data-v-1fca5e4c"),t=t(),x(),t),A={class:"patient-card-section"},$=y('<div class="patient-card" data-v-1fca5e4c><h3 data-v-1fca5e4c>\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430</h3><div class="patient-info" data-v-1fca5e4c><div class="patient-info-inner" data-v-1fca5e4c><label data-v-1fca5e4c>\u041F\u043E\u043B</label><p data-v-1fca5e4c>\u0416\u0435\u043D\u0441\u043A\u0438\u0439</p></div><div class="patient-info-inner" data-v-1fca5e4c><label data-v-1fca5e4c>\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F</label><p data-v-1fca5e4c>22/03/1995</p></div><div class="patient-info-inner" data-v-1fca5e4c><label data-v-1fca5e4c>\u0412\u043E\u0437\u0440\u0430\u0441\u0442</label><p data-v-1fca5e4c>28 \u043B\u0435\u0442</p></div><div class="patient-info-inner" data-v-1fca5e4c><label data-v-1fca5e4c>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label><p data-v-1fca5e4c>+7 705 777 88 98</p></div></div></div>',1),j={class:"patient-download-btn"},N={class:"survey-result-section"},k={class:"result"},w=o(()=>e("h3",null,"\u{1F50D} \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B:",-1)),I={class:"result-panels"},V=o(()=>e("h4",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)),L=o(()=>e("h4",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)),M=o(()=>e("h4",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)),P={class:"patient-doctor"},T=o(()=>e("h3",null,"\u{1FA7A} \u0412\u0430\u0448 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442:",-1)),U={class:"result-panels"},G=o(()=>e("div",{class:"patient-info"},[e("div",{class:"patient-info-inner"},[e("label",null,"\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F"),e("p",null,"\u0412\u0440\u0430\u0447-\u043E\u0442\u043E\u043B\u0430\u0440\u0438\u043D\u0442\u043E\u043B\u043E\u0433")]),e("div",{class:"patient-info-inner"},[e("label",null,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),e("p",null,"+7 705 777 88 98")]),e("div",{class:"patient-info-inner"},[e("label",null,"\u041C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B"),e("p",null,"\u041F\u043E\u043B\u0438\u043A\u043B\u0438\u043D\u0438\u043A\u0430 \u21169")]),e("div",{class:"patient-info-inner"},[e("label",null,"\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0451\u043C\u0430"),e("p",null,"\u0421 09:00 \u0434\u043E 12:00")])],-1)),H=b({__name:"PatientCabinetMain",setup(t){return(d,l)=>(c(),p(g,null,[e("section",A,[$,n(a(v),{layout:"vertical"}),e("div",j,[n(a(B),{label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B",class:"p-button-raised p-button-text"})])]),e("section",N,[e("div",k,[w,e("div",I,[e("div",null,[n(a(r),{header:"\u0416\u0430\u043B\u043E\u0431\u044B \u043F\u0440\u0438 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0438:",toggleable:!0},{default:s(()=>[V]),_:1})]),e("div",null,[n(a(r),{header:"\u0410\u043D\u0430\u043C\u043D\u0435\u0437 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F:",toggleable:!0},{default:s(()=>[L]),_:1})]),e("div",null,[n(a(r),{header:"\u0410\u043D\u0430\u043C\u043D\u0435\u0437 \u0436\u0438\u0437\u043D\u0438:",toggleable:!0},{default:s(()=>[M]),_:1})])])]),e("div",P,[T,e("div",U,[n(a(r),{header:"\u041C\u044B\u0440\u0437\u0430\u043A\u0443\u043B\u043E\u0432\u0430 \u0410\u043B\u0438\u044F"},{default:s(()=>[G]),_:1})])])])],64))}});const O=E(H,[["__scopeId","data-v-1fca5e4c"]]);export{O as default};
