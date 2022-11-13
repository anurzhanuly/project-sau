import{B as $,o as a,c as f,e as l,F as A,b as d,t as T,k as g,J as I,w as P,a as O,Y as u,Z as h,O as H,U as D,i as x,l as C,m as y,j as N,$ as Z,z as _,a0 as v,D as b,I as G,T as U,y as M,f as z,h as Y}from"./index.13f7c679.js";import{R as J}from"./ripple.esm.5d646a7b.js";import{s as j,O as X}from"./overlayeventbus.esm.c68c37c8.js";import{s as q}from"./button.esm.d4f6c069.js";import{g as V,a as S,d as F}from"./admin.5362adbc.js";var B={name:"ToastMessage",emits:["close"],props:{message:null,template:null},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout(()=>{this.close()},this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(){this.$emit("close",this.message)},onCloseClick(){this.clearCloseTimeout(),this.close()},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":this.message.severity==="info","p-toast-message-warn":this.message.severity==="warn","p-toast-message-error":this.message.severity==="error","p-toast-message-success":this.message.severity==="success"}]},iconClass(){return["p-toast-message-icon pi",{"pi-info-circle":this.message.severity==="info","pi-exclamation-triangle":this.message.severity==="warn","pi-times":this.message.severity==="error","pi-check":this.message.severity==="success"}]}},directives:{ripple:J}};const Q={class:"p-toast-message-text"},K={class:"p-toast-summary"},W={class:"p-toast-detail"},ee=l("span",{class:"p-toast-icon-close-icon pi pi-times"},null,-1),te=[ee];function ne(e,t,n,r,i,s){const p=$("ripple");return a(),f("div",{class:d(s.containerClass),role:"alert","aria-live":"assertive","aria-atomic":"true"},[l("div",{class:d(["p-toast-message-content",n.message.contentStyleClass])},[n.template?(a(),g(I(n.template),{key:1,message:n.message},null,8,["message"])):(a(),f(A,{key:0},[l("span",{class:d(s.iconClass)},null,2),l("div",Q,[l("span",K,T(n.message.summary),1),l("div",W,T(n.message.detail),1)])],64)),n.message.closable!==!1?P((a(),f("button",{key:2,class:"p-toast-icon-close p-link",onClick:t[0]||(t[0]=(...m)=>s.onCloseClick&&s.onCloseClick(...m)),type:"button"},te)),[[p]]):O("",!0)],2)],2)}B.render=ne;var se=0,ie={name:"Toast",inheritAttrs:!1,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null}},data(){return{messages:[]}},styleElement:null,mounted(){u.on("add",this.onAdd),u.on("remove-group",this.onRemoveGroup),u.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&h.clear(this.$refs.container),u.off("add",this.onAdd),u.off("remove-group",this.onRemoveGroup),u.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add(e){e.id==null&&(e.id=se++),this.messages=[...this.messages,e]},remove(e){let t=-1;for(let n=0;n<this.messages.length;n++)if(this.messages[n]===e){t=n;break}this.messages.splice(t,1)},onAdd(e){this.group==e.group&&this.add(e)},onRemoveGroup(e){this.group===e&&(this.messages=[])},onRemoveAllGroups(){this.messages=[]},onEnter(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&h.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave(){this.$refs.container&&this.autoZIndex&&H.isEmpty(this.messages)&&h.clear(this.$refs.container)},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints){let n="";for(let r in this.breakpoints[t])n+=r+":"+this.breakpoints[t][r]+"!important;";e+=`
                        @media screen and (max-width: ${t}) {
                            .p-toast[${this.attributeSelector}] {
                                ${n}
                            }
                        }
                    `}this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{containerClass(){return["p-toast p-component p-toast-"+this.position,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return D()}},components:{ToastMessage:B,Portal:j}};function oe(e,t,n,r,i,s){const p=x("ToastMessage"),m=x("Portal");return a(),g(m,null,{default:C(()=>[l("div",_({ref:"container",class:s.containerClass},e.$attrs),[y(Z,{name:"p-toast-message",tag:"div",onEnter:s.onEnter,onLeave:s.onLeave},{default:C(()=>[(a(!0),f(A,null,N(i.messages,o=>(a(),g(p,{key:o.id,message:o,onClose:t[0]||(t[0]=c=>s.remove(c)),template:e.$slots.message},null,8,["message","template"]))),128))]),_:1},8,["onEnter","onLeave"])],16)]),_:1})}function re(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var ae=`
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
`;re(ae);ie.render=oe;var le={name:"ConfirmPopup",inheritAttrs:!1,props:{group:String},data(){return{visible:!1,confirmation:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted(){this.confirmListener=e=>{!e||e.group===this.group&&(this.confirmation=e,this.target=e.target,this.visible=!0)},this.closeListener=()=>{this.visible=!1,this.confirmation=null},v.on("confirm",this.confirmListener),v.on("close",this.closeListener)},beforeUnmount(){v.off("confirm",this.confirmListener),v.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(h.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onEnter(e){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),h.set("overlay",e,this.$primevue.config.zIndex.overlay)},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave(e){h.clear(e)},alignOverlay(){b.absolutePosition(this.container,this.target);const e=b.getOffset(this.container),t=b.getOffset(this.target);let n=0;e.left<t.left&&(n=t.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${n}px`),e.top<t.top&&b.addClass(this.container,"p-confirm-popup-flipped")},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)?this.visible=!1:this.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new G(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!b.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef(e){this.container=e},onOverlayClick(e){X.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-confirm-popup p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},message(){return this.confirmation?this.confirmation.message:null},iconClass(){return["p-confirm-popup-icon",this.confirmation?this.confirmation.icon:null]},acceptLabel(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon(){return this.confirmation?this.confirmation.rejectIcon:null},acceptClass(){return["p-confirm-popup-accept p-button-sm",this.confirmation?this.confirmation.acceptClass:null]},rejectClass(){return["p-confirm-popup-reject p-button-sm",this.confirmation?this.confirmation.rejectClass||"p-button-text":null]}},components:{CPButton:q,Portal:j}};const ce={key:0,class:"p-confirm-popup-content"},pe={class:"p-confirm-popup-message"},me={class:"p-confirm-popup-footer"};function ue(e,t,n,r,i,s){const p=x("CPButton"),m=x("Portal");return a(),g(m,null,{default:C(()=>[y(U,{name:"p-confirm-popup",onEnter:s.onEnter,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave},{default:C(()=>[i.visible?(a(),f("div",_({key:0,ref:s.containerRef,class:s.containerClass},e.$attrs,{onClick:t[2]||(t[2]=(...o)=>s.onOverlayClick&&s.onOverlayClick(...o))}),[e.$slots.message?(a(),g(I(e.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(a(),f("div",ce,[l("i",{class:d(s.iconClass)},null,2),l("span",pe,T(i.confirmation.message),1)])),l("div",me,[y(p,{label:s.rejectLabel,icon:s.rejectIcon,class:d(s.rejectClass),onClick:t[0]||(t[0]=o=>s.reject())},null,8,["label","icon","class"]),y(p,{label:s.acceptLabel,icon:s.acceptIcon,class:d(s.acceptClass),onClick:t[1]||(t[1]=o=>s.accept()),autofocus:""},null,8,["label","icon","class"])])],16)):O("",!0)]),_:1},8,["onEnter","onLeave","onAfterLeave"])]),_:1})}function fe(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var de=`
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
`;fe(de);le.render=ue;const xe=M("admin",()=>{const e=z([]),t=z([]),n=z([]),r=[{header:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",field:"name",hasDropdown:!0,options:Y(()=>n.value)},{header:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",field:"compare",hasDropdown:!0,options:[{value:"exact"},{value:"except"},{value:"greater"},{value:"less"},{value:"range"},{value:"optional"}]},{header:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",field:"value"},{header:"\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438",field:"testCase"}];async function i(){const o=await V();return S.isAxiosError(o)||(t.value=o.data.content.pages.map(c=>c.elements).flat(1),n.value=t.value.map(c=>({value:c.name}))),o}async function s(){const o=await F();return S.isAxiosError(o)||(e.value=JSON.parse(o.data.result)),o}async function p(o,c,k){const L=e.value.filter(R=>R.name===c)[0],w=e.value.indexOf(L),E=o.name;delete o.name,e.value[w].conditions[k][E]=o}function m(o,c,k){const L=e.value.filter(E=>E.name===o)[0],w=e.value.indexOf(L);delete e.value[w].conditions[c][k]}return{recommendations:e,questions:t,questionsNames:n,conditionColumns:r,getRecommendationsData:s,getQuestionsData:i,deleteRecByIndex:m,createConditionInRec:p}});export{le as a,ie as s,xe as u};
