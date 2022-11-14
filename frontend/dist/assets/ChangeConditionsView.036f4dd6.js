import{Y as z,Z as V,E as _,K as U,A as y,L as F,i as $,o as l,k as R,l as w,m as h,c as f,e as m,b as x,t as g,M as q,B as M,a as I,T as Y,_ as A,$ as B,a0 as T,h as E,f as j,u as p,j as P,z as Q,F as k,a1 as Z,Q as J,a2 as K,g as W,a3 as G,a4 as X,w as ee,q as te,d as ne}from"./index.cdec9fac.js";import{s as ie}from"./panel.esm.1af6b614.js";import{O as se,s as oe}from"./dropdown.esm.788795c3.js";import{u as D}from"./adminStore.29224362.js";import{a as re}from"./admin.88822e97.js";var H={name:"ConfirmPopup",inheritAttrs:!1,props:{group:String},data(){return{visible:!1,confirmation:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted(){this.confirmListener=e=>{!e||e.group===this.group&&(this.confirmation=e,this.target=e.target,this.visible=!0)},this.closeListener=()=>{this.visible=!1,this.confirmation=null},z.on("confirm",this.confirmListener),z.on("close",this.closeListener)},beforeUnmount(){z.off("confirm",this.confirmListener),z.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(V.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onEnter(e){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),V.set("overlay",e,this.$primevue.config.zIndex.overlay)},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave(e){V.clear(e)},alignOverlay(){_.absolutePosition(this.container,this.target);const e=_.getOffset(this.container),r=_.getOffset(this.target);let u=0;e.left<r.left&&(u=r.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${u}px`),e.top<r.top&&_.addClass(this.container,"p-confirm-popup-flipped")},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)?this.visible=!1:this.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new U(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!_.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef(e){this.container=e},onOverlayClick(e){se.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-confirm-popup p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},message(){return this.confirmation?this.confirmation.message:null},iconClass(){return["p-confirm-popup-icon",this.confirmation?this.confirmation.icon:null]},acceptLabel(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon(){return this.confirmation?this.confirmation.rejectIcon:null},acceptClass(){return["p-confirm-popup-accept p-button-sm",this.confirmation?this.confirmation.acceptClass:null]},rejectClass(){return["p-confirm-popup-reject p-button-sm",this.confirmation?this.confirmation.rejectClass||"p-button-text":null]}},components:{CPButton:y,Portal:F}};const ae={key:0,class:"p-confirm-popup-content"},le={class:"p-confirm-popup-message"},ce={class:"p-confirm-popup-footer"};function pe(e,r,u,a,o,t){const C=$("CPButton"),c=$("Portal");return l(),R(c,null,{default:w(()=>[h(Y,{name:"p-confirm-popup",onEnter:t.onEnter,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave},{default:w(()=>[o.visible?(l(),f("div",M({key:0,ref:t.containerRef,class:t.containerClass},e.$attrs,{onClick:r[2]||(r[2]=(...b)=>t.onOverlayClick&&t.onOverlayClick(...b))}),[e.$slots.message?(l(),R(q(e.$slots.message),{key:1,message:o.confirmation},null,8,["message"])):(l(),f("div",ae,[m("i",{class:x(t.iconClass)},null,2),m("span",le,g(o.confirmation.message),1)])),m("div",ce,[h(C,{label:t.rejectLabel,icon:t.rejectIcon,class:x(t.rejectClass),onClick:r[0]||(r[0]=b=>t.reject())},null,8,["label","icon","class"]),h(C,{label:t.acceptLabel,icon:t.acceptIcon,class:x(t.acceptClass),onClick:r[1]||(r[1]=b=>t.accept()),autofocus:""},null,8,["label","icon","class"])])],16)):I("",!0)]),_:1},8,["onEnter","onLeave","onAfterLeave"])]),_:1})}function ue(e,r){r===void 0&&(r={});var u=r.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",u==="top"&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var de=`
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
}
.p-confirm-popup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

/* Animation */
.p-confirm-popup-enter-from {
    opacity: 0;
    -webkit-transform: scaleY(0.8);
            transform: scaleY(0.8);
}
.p-confirm-popup-leave-to {
    opacity: 0;
}
.p-confirm-popup-enter-active {
    -webkit-transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
}
.p-confirm-popup-leave-active {
    -webkit-transition: opacity 0.1s linear;
    transition: opacity 0.1s linear;
}
.p-confirm-popup:after,
.p-confirm-popup:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.p-confirm-popup:after {
    border-width: 8px;
    margin-left: -8px;
}
.p-confirm-popup:before {
    border-width: 10px;
    margin-left: -10px;
}
.p-confirm-popup-flipped:after,
.p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}
.p-confirm-popup.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
}
.p-confirm-popup.p-confirm-popup-flipped:before {
    border-bottom-color: transparent;
}
.p-confirm-popup .p-confirm-popup-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;ue(de);H.render=pe;const fe={class:"popup"},me={key:0},he={key:1},ve={__name:"CreateConditionsPopupComponent",setup(e){const r=B(),u=(s,i,n)=>{r.add({severity:s,summary:i,detail:n,life:3e3})},a=D(),o=T(),t=E(()=>o.isPopupVisible),C=E(()=>a.conditionColumns),c=j(o.createPopupFields(C.value)),b=j(!1),O=()=>{if(b.value=!1,!c.value.name.length){u("error","\u041E\u0448\u0438\u0431\u043A\u0430","\u041F\u043E\u043B\u0435 '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430' \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E");return}if(!c.value.compare.length){u("error","\u041E\u0448\u0438\u0431\u043A\u0430","\u041F\u043E\u043B\u0435 '\u0423\u0441\u043B\u043E\u0432\u0438\u0435' \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E");return}if(!c.value.value.length){u("error","\u041E\u0448\u0438\u0431\u043A\u0430","\u041F\u043E\u043B\u0435 '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435' \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E");return}if(/\D/.test(c.value.testCase)||!c.value.testCase.length){u("error","\u041E\u0448\u0438\u0431\u043A\u0430","\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0438\u0437 \u0446\u0438\u0444\u0440");return}b.value=!0},S=()=>{if(O(),b.value){const s={...c.value},i=a.questions.filter(L=>L.name===s.name)[0];s.multiple=(i==null?void 0:i.maxSelectedChoices)>1,s.type=i.type,s.value=s.value.split(",");const{checkedRecommendationName:n,index:v}=o.conditionProps;a.createConditionInRec(s,n,v),u("success","\u0423\u0441\u043F\u0435\u0448\u043D\u043E","\u0423\u0441\u043B\u043E\u0432\u0438\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u043E"),d()}},d=()=>{c.value=o.createPopupFields(C.value),o.closePopup()};return(s,i)=>(l(),R(p(J),{visible:p(t),"onUpdate:visible":i[2]||(i[2]=n=>Z(t)?t.value=n:null),modal:"",draggable:"",closable:!1,header:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F",style:{width:"50vw"}},{footer:w(()=>[h(p(y),{label:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435",icon:"pi pi-times",class:"p-button-text",onClick:i[0]||(i[0]=n=>d())}),h(p(y),{label:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C",icon:"pi pi-check",class:"p-button-success",autofocus:"",onClick:i[1]||(i[1]=n=>S())})]),default:w(()=>[m("div",fe,[(l(!0),f(k,null,P(p(C),(n,v)=>(l(),f("div",{key:v},[n.hasDropdown?(l(),f("div",me,[m("h3",null,g(n.header),1),h(p(oe),{modelValue:c.value[n.field],"onUpdate:modelValue":L=>c.value[n.field]=L,options:n==null?void 0:n.options,"option-value":"value","option-label":"value",placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435...",style:{"max-width":"100%",height:"100%"},"filter-placeholder":"\u041F\u043E\u0438\u0441\u043A",filter:"",lazy:"","empty-filter-message":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E","empty-message":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"},null,8,["modelValue","onUpdate:modelValue","options"])])):(l(),f("div",he,[m("h3",null,g(n.header),1),h(p(Q),{modelValue:c.value[n.field],"onUpdate:modelValue":L=>c.value[n.field]=L,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])]))]))),128))])]),_:1},8,["visible"]))}},be=A(ve,[["__scopeId","data-v-60f18f09"]]);const Ce={class:"section-recommendations-change"},ge={class:"recommendation-nav"},Le=["for"],ye=["id","value"],_e={key:0,class:"recommendation-body"},ke={__name:"ChangeConditionsView",setup(e){const r=B(),u=K(),a=D(),o=T(),t=j(""),C=j({});W(()=>{a.recommendations.length||a.getRecommendationsData(),a.questions.length||a.getQuestionsData()});const c=E(()=>a.recommendations);G(t,d=>{C.value=c.value.filter(s=>s.name===d)[0]});const b=(d,s,i)=>{r.add({severity:d,summary:s,detail:i,life:3e3})},O=async()=>{var s;const d=await a.saveConditionsData(t);if(d.status===200)b("success","\u0423\u0441\u043F\u0435\u0448\u043D\u043E","\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u043D\u0435\u0441\u0435\u043D\u044B");else if(re.isAxiosError(d)){const i=(s=d.response)==null?void 0:s.data;b("error","\u041E\u0448\u0438\u0431\u043A\u0430",i.ERROR)}},S=(d,s,i,n)=>{u.require({target:d.currentTarget,message:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",acceptLabel:"\u0414\u0430",rejectLabel:"\u041D\u0435\u0442",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{a.deleteConditionByIndex(s,i,n)}})};return(d,s)=>(l(),f(k,null,[h(p(X)),h(p(H)),m("section",Ce,[m("div",ge,[(l(!0),f(k,null,P(p(c),(i,n)=>(l(),f("label",{key:n,for:n,class:x(["label",{checked:t.value===i.name}])},[ee(m("input",{id:n,"onUpdate:modelValue":s[0]||(s[0]=v=>t.value=v),type:"radio",class:"hidden",value:i.name},null,8,ye),[[te,t.value]]),ne(" "+g(i.name),1)],10,Le))),128))]),t.value!==""?(l(),f("div",_e,[(l(!0),f(k,null,P(C.value.conditions,(i,n)=>(l(),R(p(ie),{key:n,header:`${n+1}`,toggleable:!0,collapsed:!0},{default:w(()=>[h(p(y),{icon:"pi pi-plus",class:"p-button-rounded p-button-success p-button-outlined create-rec-btn",onClick:v=>p(o).openPopupWithProps({checkedRecommendationName:t.value,index:n})},null,8,["onClick"]),(l(!0),f(k,null,P(Object.keys(i),(v,L)=>(l(),f("div",{key:L,class:"condition-item"},[m("p",null,g(v),1),m("p",null,g(i[v].compare),1),m("p",null,g(i[v].value.join(",")),1),m("p",null,g(i[v].testCase),1),h(p(y),{icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined",onClick:N=>S(N,t.value,n,v)},null,8,["onClick"])]))),128))]),_:2},1032,["header"]))),128)),h(p(y),{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",class:"p-button-lg",onClick:O})])):I("",!0)]),h(be)],64))}},je=A(ke,[["__scopeId","data-v-3f0050d4"]]);export{je as default};
