import{ak as l,Z as p,H as o,I as C,q as k,K as w,ai as j,L as h,M as E,f as a,W as v,j as b,i as f,Q as O,g as L,l as u,G as m,t as z,$ as A,N as S,E as H,T as x}from"./index.b13e0dbb.js";import{O as K}from"./overlayeventbus.esm.813e8303.js";var R={name:"ConfirmPopup",inheritAttrs:!1,props:{group:String},data(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted(){this.confirmListener=e=>{!e||e.group===this.group&&(this.confirmation=e,this.target=e.target,this.confirmation.onShow&&this.confirmation.onShow(),this.visible=!0)},this.closeListener=()=>{this.visible=!1,this.confirmation=null},l.on("confirm",this.confirmListener),l.on("close",this.closeListener)},beforeUnmount(){l.off("confirm",this.confirmListener),l.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(p.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown(e){(e.code==="Space"||e.code==="Enter")&&(this.accept(),o.focus(this.target),e.preventDefault())},onRejectKeydown(e){(e.code==="Space"||e.code==="Enter")&&(this.reject(),o.focus(this.target),e.preventDefault())},onEnter(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),p.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterEnter(){this.focus()},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave(e){p.clear(e)},alignOverlay(){o.absolutePosition(this.container,this.target);const e=o.getOffset(this.container),i=o.getOffset(this.target);let s=0;e.left<i.left&&(s=i.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${s}px`),e.top<i.top&&o.addClass(this.container,"p-confirm-popup-flipped")},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)?(this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1):this.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new C(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!o.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus({preventScroll:!0})},isTargetClicked(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef(e){this.container=e},onOverlayClick(e){K.emit("overlay-click",{originalEvent:e,target:this.target})},onOverlayKeydown(e){e.code==="Escape"&&(l.emit("close",this.closeListener),o.focus(this.target))}},computed:{containerClass(){return["p-confirm-popup p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},message(){return this.confirmation?this.confirmation.message:null},iconClass(){return["p-confirm-popup-icon",this.confirmation?this.confirmation.icon:null]},acceptLabel(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon(){return this.confirmation?this.confirmation.rejectIcon:null},acceptClass(){return["p-confirm-popup-accept p-button-sm",this.confirmation?this.confirmation.acceptClass:null]},rejectClass(){return["p-confirm-popup-reject p-button-sm",this.confirmation?this.confirmation.rejectClass||"p-button-text":null]}},components:{CPButton:k,Portal:w},directives:{focustrap:j}};const B=["aria-modal"],F={key:0,class:"p-confirm-popup-content"},I={class:"p-confirm-popup-message"},P={class:"p-confirm-popup-footer"};function T(e,i,s,r,n,t){const d=h("CPButton"),g=h("Portal"),y=E("focustrap");return a(),v(g,null,{default:b(()=>[f(x,{name:"p-confirm-popup",onEnter:t.onEnter,onAfterEnter:t.onAfterEnter,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave},{default:b(()=>[n.visible?O((a(),L("div",S({key:0,ref:t.containerRef,role:"alertdialog",class:t.containerClass,"aria-modal":n.visible,onClick:i[2]||(i[2]=(...c)=>t.onOverlayClick&&t.onOverlayClick(...c)),onKeydown:i[3]||(i[3]=(...c)=>t.onOverlayKeydown&&t.onOverlayKeydown(...c))},e.$attrs),[e.$slots.message?(a(),v(A(e.$slots.message),{key:1,message:n.confirmation},null,8,["message"])):(a(),L("div",F,[u("i",{class:m(t.iconClass)},null,2),u("span",I,z(n.confirmation.message),1)])),u("div",P,[f(d,{label:t.rejectLabel,icon:t.rejectIcon,class:m(t.rejectClass),onClick:i[0]||(i[0]=c=>t.reject()),onKeydown:t.onRejectKeydown,autofocus:n.autoFocusReject},null,8,["label","icon","class","onKeydown","autofocus"]),f(d,{label:t.acceptLabel,icon:t.acceptIcon,class:m(t.acceptClass),onClick:i[1]||(i[1]=c=>t.accept()),onKeydown:t.onAcceptKeydown,autofocus:n.autoFocusAccept},null,8,["label","icon","class","onKeydown","autofocus"])])],16,B)),[[y]]):H("",!0)]),_:1},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:1})}function D(e,i){i===void 0&&(i={});var s=i.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var _=`
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
    transform: scaleY(0.8);
}
.p-confirm-popup-leave-to {
    opacity: 0;
}
.p-confirm-popup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}
.p-confirm-popup-leave-active {
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
    display: flex;
    align-items: center;
}
`;D(_);R.render=T;export{R as s};
