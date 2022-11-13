import{B as X,o as l,c as m,e as c,F as x,b as _,t as C,k as L,J as V,w as B,a as O,S as R,Z as S,O as Y,U as Q,i as $,l as w,m as g,j as T,V as W,z as D,W as z,D as E,I as K,T as ee,y as N,f as k,h as I,_ as H,X as te,u as v,Y as ne,$ as se,g as ie,a0 as oe,q as ae,d as re}from"./index.38510418.js";import{c as U,O as le,a as ce,s as pe,e as ue,d as me}from"./inputtext.esm.04887c35.js";import{s as P}from"./button.esm.d17a5c66.js";import{R as de}from"./ripple.esm.e9303ce5.js";import{g as fe,a as A,d as he}from"./admin.ae932db5.js";var M={name:"ToastMessage",emits:["close"],props:{message:null,template:null},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout(()=>{this.close()},this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(){this.$emit("close",this.message)},onCloseClick(){this.clearCloseTimeout(),this.close()},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":this.message.severity==="info","p-toast-message-warn":this.message.severity==="warn","p-toast-message-error":this.message.severity==="error","p-toast-message-success":this.message.severity==="success"}]},iconClass(){return["p-toast-message-icon pi",{"pi-info-circle":this.message.severity==="info","pi-exclamation-triangle":this.message.severity==="warn","pi-times":this.message.severity==="error","pi-check":this.message.severity==="success"}]}},directives:{ripple:de}};const ve={class:"p-toast-message-text"},be={class:"p-toast-summary"},ge={class:"p-toast-detail"},ye=c("span",{class:"p-toast-icon-close-icon pi pi-times"},null,-1),Ce=[ye];function ke(e,n,t,a,s,i){const p=X("ripple");return l(),m("div",{class:_(i.containerClass),role:"alert","aria-live":"assertive","aria-atomic":"true"},[c("div",{class:_(["p-toast-message-content",t.message.contentStyleClass])},[t.template?(l(),L(V(t.template),{key:1,message:t.message},null,8,["message"])):(l(),m(x,{key:0},[c("span",{class:_(i.iconClass)},null,2),c("div",ve,[c("span",be,C(t.message.summary),1),c("div",ge,C(t.message.detail),1)])],64)),t.message.closable!==!1?B((l(),m("button",{key:2,class:"p-toast-icon-close p-link",onClick:n[0]||(n[0]=(...r)=>i.onCloseClick&&i.onCloseClick(...r)),type:"button"},Ce)),[[p]]):O("",!0)],2)],2)}M.render=ke;var xe=0,Z={name:"Toast",inheritAttrs:!1,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null}},data(){return{messages:[]}},styleElement:null,mounted(){R.on("add",this.onAdd),R.on("remove-group",this.onRemoveGroup),R.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&S.clear(this.$refs.container),R.off("add",this.onAdd),R.off("remove-group",this.onRemoveGroup),R.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add(e){e.id==null&&(e.id=xe++),this.messages=[...this.messages,e]},remove(e){let n=-1;for(let t=0;t<this.messages.length;t++)if(this.messages[t]===e){n=t;break}this.messages.splice(n,1)},onAdd(e){this.group==e.group&&this.add(e)},onRemoveGroup(e){this.group===e&&(this.messages=[])},onRemoveAllGroups(){this.messages=[]},onEnter(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&S.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave(){this.$refs.container&&this.autoZIndex&&Y.isEmpty(this.messages)&&S.clear(this.$refs.container)},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let n in this.breakpoints){let t="";for(let a in this.breakpoints[n])t+=a+":"+this.breakpoints[n][a]+"!important;";e+=`
                        @media screen and (max-width: ${n}) {
                            .p-toast[${this.attributeSelector}] {
                                ${t}
                            }
                        }
                    `}this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{containerClass(){return["p-toast p-component p-toast-"+this.position,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return Q()}},components:{ToastMessage:M,Portal:U}};function _e(e,n,t,a,s,i){const p=$("ToastMessage"),r=$("Portal");return l(),L(r,null,{default:w(()=>[c("div",D({ref:"container",class:i.containerClass},e.$attrs),[g(W,{name:"p-toast-message",tag:"div",onEnter:i.onEnter,onLeave:i.onLeave},{default:w(()=>[(l(!0),m(x,null,T(s.messages,o=>(l(),L(p,{key:o.id,message:o,onClose:n[0]||(n[0]=d=>i.remove(d)),template:e.$slots.message},null,8,["message","template"]))),128))]),_:1},8,["onEnter","onLeave"])],16)]),_:1})}function Le(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var we=`
.p-toast {
    position: fixed;
    width: 25rem;
}
.p-toast-message-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-toast-message-text {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-toast-top-right {
    top: 20px;
    right: 20px;
}
.p-toast-top-left {
    top: 20px;
    left: 20px;
}
.p-toast-bottom-left {
    bottom: 20px;
    left: 20px;
}
.p-toast-bottom-right {
    bottom: 20px;
    right: 20px;
}
.p-toast-top-center {
    top: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.p-toast-bottom-center {
    bottom: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.p-toast-center {
    left: 50%;
    top: 50%;
    min-width: 20vw;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
}
.p-toast-icon-close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-toast-icon-close.p-link {
    cursor: pointer;
}

/* Animations */
.p-toast-message-enter-from {
    opacity: 0;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
}
.p-toast-message-leave-from {
    max-height: 1000px;
}
.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}
.p-toast-message-enter-active {
    -webkit-transition: transform 0.3s, opacity 0.3s;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;
}
.p-toast-message-leave-active {
    -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;Le(we);Z.render=_e;var G={name:"ConfirmPopup",inheritAttrs:!1,props:{group:String},data(){return{visible:!1,confirmation:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted(){this.confirmListener=e=>{!e||e.group===this.group&&(this.confirmation=e,this.target=e.target,this.visible=!0)},this.closeListener=()=>{this.visible=!1,this.confirmation=null},z.on("confirm",this.confirmListener),z.on("close",this.closeListener)},beforeUnmount(){z.off("confirm",this.confirmListener),z.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(S.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onEnter(e){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),S.set("overlay",e,this.$primevue.config.zIndex.overlay)},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave(e){S.clear(e)},alignOverlay(){E.absolutePosition(this.container,this.target);const e=E.getOffset(this.container),n=E.getOffset(this.target);let t=0;e.left<n.left&&(t=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${t}px`),e.top<n.top&&E.addClass(this.container,"p-confirm-popup-flipped")},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)?this.visible=!1:this.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new K(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!E.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef(e){this.container=e},onOverlayClick(e){le.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-confirm-popup p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},message(){return this.confirmation?this.confirmation.message:null},iconClass(){return["p-confirm-popup-icon",this.confirmation?this.confirmation.icon:null]},acceptLabel(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon(){return this.confirmation?this.confirmation.rejectIcon:null},acceptClass(){return["p-confirm-popup-accept p-button-sm",this.confirmation?this.confirmation.acceptClass:null]},rejectClass(){return["p-confirm-popup-reject p-button-sm",this.confirmation?this.confirmation.rejectClass||"p-button-text":null]}},components:{CPButton:P,Portal:U}};const Re={key:0,class:"p-confirm-popup-content"},Se={class:"p-confirm-popup-message"},Ee={class:"p-confirm-popup-footer"};function Te(e,n,t,a,s,i){const p=$("CPButton"),r=$("Portal");return l(),L(r,null,{default:w(()=>[g(ee,{name:"p-confirm-popup",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:w(()=>[s.visible?(l(),m("div",D({key:0,ref:i.containerRef,class:i.containerClass},e.$attrs,{onClick:n[2]||(n[2]=(...o)=>i.onOverlayClick&&i.onOverlayClick(...o))}),[e.$slots.message?(l(),L(V(e.$slots.message),{key:1,message:s.confirmation},null,8,["message"])):(l(),m("div",Re,[c("i",{class:_(i.iconClass)},null,2),c("span",Se,C(s.confirmation.message),1)])),c("div",Ee,[g(p,{label:i.rejectLabel,icon:i.rejectIcon,class:_(i.rejectClass),onClick:n[0]||(n[0]=o=>i.reject())},null,8,["label","icon","class"]),g(p,{label:i.acceptLabel,icon:i.acceptIcon,class:_(i.acceptClass),onClick:n[1]||(n[1]=o=>i.accept()),autofocus:""},null,8,["label","icon","class"])])],16)):O("",!0)]),_:1},8,["onEnter","onLeave","onAfterLeave"])]),_:1})}function Pe(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var ze=`
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
`;Pe(ze);G.render=Te;const q=N("admin",()=>{const e=k([]),n=k([]),t=k([]),a=[{header:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",field:"name",hasDropdown:!0,options:I(()=>t.value)},{header:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",field:"compare",hasDropdown:!0,options:[{value:"exact"},{value:"except"},{value:"greater"},{value:"less"},{value:"range"},{value:"optional"}]},{header:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",field:"value"},{header:"\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438",field:"testCase"}];async function s(){const o=await fe();return A.isAxiosError(o)||(n.value=o.data.content.pages.map(d=>d.elements).flat(1),t.value=n.value.map(d=>({value:d.name}))),o}async function i(){const o=await he();return A.isAxiosError(o)||(e.value=JSON.parse(o.data.result)),o}async function p(o){console.log(o)}function r(o,d,f){const h=e.value.filter(y=>y.name===o)[0],b=e.value.indexOf(h);delete e.value[b].conditions[d][f]}return{recommendations:e,questions:n,questionsNames:t,conditionColumns:a,getRecommendationsData:i,getQuestionsData:s,deleteRecByIndex:r,createConditionInRec:p}}),F=N("popup-state",()=>{const e=k(!1),n=k({});function t(){e.value=!0}function a(){e.value=!1}function s(p){const r={};return p.forEach(o=>{r[o.field]=""}),r}function i(p){n.value={...p},t()}return{isPopupVisible:e,openPopup:t,closePopup:a,createPopupFields:s,openPopupWithProps:i}});const $e={class:"popup"},Ie={key:0},je={key:1},Oe={__name:"CreateRecommendationsPopupComponent",setup(e){const n=te(),t=(b,y,u)=>{n.add({severity:b,summary:y,detail:u,life:3e3})},a=q(),s=F(),i=I(()=>s.isPopupVisible),p=I(()=>a.conditionColumns),r=k(s.createPopupFields(p.value)),o=k(!1),d=()=>{if(!r.value.name.length){t("error","\u041E\u0448\u0438\u0431\u043A\u0430","\u041F\u043E\u043B\u0435 '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430' \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E");return}if(!r.value.compare.length){t("error","\u041E\u0448\u0438\u0431\u043A\u0430","\u041F\u043E\u043B\u0435 '\u0423\u0441\u043B\u043E\u0432\u0438\u0435' \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E");return}if(!r.value.value.length){t("error","\u041E\u0448\u0438\u0431\u043A\u0430","\u041F\u043E\u043B\u0435 '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435' \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E");return}if(/\D/.test(r.value.testCase)||!r.value.testCase.length){t("error","\u041E\u0448\u0438\u0431\u043A\u0430","\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0438\u0437 \u0446\u0438\u0444\u0440");return}o.value=!0},f=()=>{d(),o.value&&(a.createConditionInRec(r.value),t("success","\u0423\u0441\u043F\u0435\u0448\u043D\u043E","\u0423\u0441\u043B\u043E\u0432\u0438\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u043E"),s.closePopup())},h=()=>{r.value=s.createPopupFields(p.value),s.closePopup()};return(b,y)=>(l(),L(v(ue),{visible:v(i),"onUpdate:visible":y[2]||(y[2]=u=>ne(i)?i.value=u:null),modal:"",draggable:"",closable:!1,header:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F",style:{width:"50vw"}},{footer:w(()=>[g(v(P),{label:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435",icon:"pi pi-times",class:"p-button-text",onClick:y[0]||(y[0]=u=>h())}),g(v(P),{label:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C",icon:"pi pi-check",class:"p-button-success",autofocus:"",onClick:y[1]||(y[1]=u=>f())})]),default:w(()=>[c("div",$e,[(l(!0),m(x,null,T(v(p),(u,J)=>(l(),m("div",{key:J},[u.hasDropdown?(l(),m("div",Ie,[c("h3",null,C(u.header),1),g(v(ce),{modelValue:r.value[u.field],"onUpdate:modelValue":j=>r.value[u.field]=j,options:u==null?void 0:u.options,"option-value":"value","option-label":"value",placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435...",style:{width:"100%",height:"100%"},"filter-placeholder":"\u041F\u043E\u0438\u0441\u043A",filter:"",lazy:"","empty-filter-message":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E","empty-message":"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"},null,8,["modelValue","onUpdate:modelValue","options"])])):(l(),m("div",je,[c("h3",null,C(u.header),1),g(v(pe),{modelValue:r.value[u.field],"onUpdate:modelValue":j=>r.value[u.field]=j,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])]))]))),128))])]),_:1},8,["visible"]))}},Ae=H(Oe,[["__scopeId","data-v-09aae8da"]]);const Ve={class:"section-recommendations-change"},Be={class:"recommendation-nav"},De=["for"],Ne=["id","value"],He={key:0,class:"recommendation-body"},Ue={__name:"ChangeRecommendationsView",setup(e){const n=se(),t=q(),a=F(),s=k(""),i=k({});ie(()=>{t.recommendations.length||t.getRecommendationsData(),t.questions.length||t.getQuestionsData()});const p=I(()=>t.recommendations);oe(s,o=>{i.value=p.value.filter(d=>d.name===o)[0]});const r=(o,d,f,h)=>{n.require({target:o.currentTarget,message:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",acceptLabel:"\u0414\u0430",rejectLabel:"\u041D\u0435\u0442",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{t.deleteRecByIndex(d,f,h)}})};return(o,d)=>(l(),m(x,null,[g(v(Z)),g(v(G)),c("section",Ve,[c("div",Be,[(l(!0),m(x,null,T(v(p),(f,h)=>(l(),m("label",{key:h,for:h,class:_(["label",{checked:s.value===f.name}])},[B(c("input",{id:h,"onUpdate:modelValue":d[0]||(d[0]=b=>s.value=b),type:"radio",class:"hidden",value:f.name},null,8,Ne),[[ae,s.value]]),re(" "+C(f.name),1)],10,De))),128))]),s.value!==""?(l(),m("div",He,[(l(!0),m(x,null,T(i.value.conditions,(f,h)=>(l(),L(v(me),{key:h,header:`${h+1}`,toggleable:!0,collapsed:!0},{default:w(()=>[g(v(P),{icon:"pi pi-plus",class:"p-button-rounded p-button-success p-button-outlined create-rec-btn",onClick:b=>v(a).openPopup({checkedRecommendationName:s.value,index:h})},null,8,["onClick"]),(l(!0),m(x,null,T(Object.keys(f),(b,y)=>(l(),m("div",{key:y,class:"condition-item"},[c("p",null,C(b),1),c("p",null,C(f[b].compare),1),c("p",null,C(f[b].value.join(",")),1),c("p",null,C(f[b].testCase),1),g(v(P),{icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined",onClick:u=>r(u,s.value,h,b)},null,8,["onClick"])]))),128))]),_:2},1032,["header"]))),128))])):O("",!0)]),g(Ae)],64))}},Je=H(Ue,[["__scopeId","data-v-fa121354"]]);export{Je as default};
