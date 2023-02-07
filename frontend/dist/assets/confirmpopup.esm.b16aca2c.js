import{aa as l,Z as p,D as o,C,g as y,E as k,G as d,f as a,Q as b,J as v,e as f,a as L,b as u,z as m,K as z,W as w,I as x,y as O,T as j}from"./index.542bcac6.js";import{O as E}from"./overlayeventbus.esm.34ba4117.js";var S={name:"ConfirmPopup",inheritAttrs:!1,props:{group:String},data(){return{visible:!1,confirmation:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted(){this.confirmListener=e=>{!e||e.group===this.group&&(this.confirmation=e,this.target=e.target,this.visible=!0)},this.closeListener=()=>{this.visible=!1,this.confirmation=null},l.on("confirm",this.confirmListener),l.on("close",this.closeListener)},beforeUnmount(){l.off("confirm",this.confirmListener),l.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(p.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onEnter(e){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),p.set("overlay",e,this.$primevue.config.zIndex.overlay)},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave(e){p.clear(e)},alignOverlay(){o.absolutePosition(this.container,this.target);const e=o.getOffset(this.container),t=o.getOffset(this.target);let s=0;e.left<t.left&&(s=t.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${s}px`),e.top<t.top&&o.addClass(this.container,"p-confirm-popup-flipped")},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)?this.visible=!1:this.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new C(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!o.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef(e){this.container=e},onOverlayClick(e){E.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-confirm-popup p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},message(){return this.confirmation?this.confirmation.message:null},iconClass(){return["p-confirm-popup-icon",this.confirmation?this.confirmation.icon:null]},acceptLabel(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon(){return this.confirmation?this.confirmation.rejectIcon:null},acceptClass(){return["p-confirm-popup-accept p-button-sm",this.confirmation?this.confirmation.acceptClass:null]},rejectClass(){return["p-confirm-popup-reject p-button-sm",this.confirmation?this.confirmation.rejectClass||"p-button-text":null]}},components:{CPButton:y,Portal:k}};const B={key:0,class:"p-confirm-popup-content"},H={class:"p-confirm-popup-message"},A={class:"p-confirm-popup-footer"};function I(e,t,s,r,n,i){const h=d("CPButton"),g=d("Portal");return a(),b(g,null,{default:v(()=>[f(j,{name:"p-confirm-popup",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:v(()=>[n.visible?(a(),L("div",x({key:0,ref:i.containerRef,class:i.containerClass},e.$attrs,{onClick:t[2]||(t[2]=(...c)=>i.onOverlayClick&&i.onOverlayClick(...c))}),[e.$slots.message?(a(),b(w(e.$slots.message),{key:1,message:n.confirmation},null,8,["message"])):(a(),L("div",B,[u("i",{class:m(i.iconClass)},null,2),u("span",H,z(n.confirmation.message),1)])),u("div",A,[f(h,{label:i.rejectLabel,icon:i.rejectIcon,class:m(i.rejectClass),onClick:t[0]||(t[0]=c=>i.reject())},null,8,["label","icon","class"]),f(h,{label:i.acceptLabel,icon:i.acceptIcon,class:m(i.acceptClass),onClick:t[1]||(t[1]=c=>i.accept()),autofocus:""},null,8,["label","icon","class"])])],16)):O("",!0)]),_:1},8,["onEnter","onLeave","onAfterLeave"])]),_:1})}function P(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var T=`
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
`;P(T);S.render=I;export{S as s};
