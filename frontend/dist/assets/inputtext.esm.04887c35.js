import{U as _,B as G,o as u,c as p,e as b,r as m,t as S,a as v,w as A,b as O,m as K,l as F,M as Z,T as j,D as f,k as Y,N as q,h as J,Z as P,i as R,z as E,n as D,d as B,P as Q,F as M,j as N,O as k,I as $,E as ee,L as te}from"./index.38510418.js";import{R as U}from"./ripple.esm.e9303ce5.js";var ie={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:String},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return _()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]}},directives:{ripple:U}};const se={class:"p-panel-header"},ne=["id"],le={class:"p-panel-icons"},oe=["id","aria-label","aria-controls","aria-expanded"],ae=["id","aria-labelledby"],re={class:"p-panel-content"};function de(e,t,s,l,n,i){const o=G("ripple");return u(),p("div",{class:O(i.containerClass)},[b("div",se,[m(e.$slots,"header",{},()=>[s.header?(u(),p("span",{key:0,id:i.ariaId+"_header",class:"p-panel-title"},S(s.header),9,ne)):v("",!0)]),b("div",le,[m(e.$slots,"icons"),s.toggleable?A((u(),p("button",{key:0,id:i.ariaId+"_header",type:"button",role:"button",class:"p-panel-header-icon p-panel-toggler p-link","aria-label":s.toggleButtonProps||s.header,"aria-controls":i.ariaId+"_content","aria-expanded":!n.d_collapsed,onClick:t[0]||(t[0]=(...a)=>i.toggle&&i.toggle(...a)),onKeydown:t[1]||(t[1]=(...a)=>i.onKeyDown&&i.onKeyDown(...a))},[b("span",{class:O({"pi pi-minus":!n.d_collapsed,"pi pi-plus":n.d_collapsed})},null,2)],40,oe)),[[o]]):v("",!0)])]),K(j,{name:"p-toggleable-content"},{default:F(()=>[A(b("div",{id:i.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":i.ariaId+"_header"},[b("div",re,[m(e.$slots,"default")])],8,ae),[[Z,!n.d_collapsed]])]),_:3})],2)}function he(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var ce=`
.p-panel-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-panel-title {
    line-height: 1;
}
.p-panel-header-icon {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
`;he(ce);ie.render=de;var X={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=f.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function ue(e,t,s,l,n,i){return i.inline?m(e.$slots,"default",{key:0}):n.mounted?(u(),Y(q,{key:1,to:s.appendTo},[m(e.$slots,"default")],8,["to"])):v("",!0)}X.render=ue;var pe={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},_instance:null},provide(){return{dialogRef:J(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&P.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&P.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&f.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(){this.autoZIndex&&P.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?f.addClass(document.body,"p-overflow-hidden"):f.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&f.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&f.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=f.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let s=t.indexOf(document.activeElement);e.shiftKey?s==-1||s===0?t[t.length-1].focus():t[s-1].focus():s==-1||s===t.length-1?t[0].focus():t[s+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(s=>s===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){f.hasClass(e.target,"p-dialog-header-icon")||f.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",f.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=f.getOuterWidth(this.container),s=f.getOuterHeight(this.container),l=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),o=i.left+l,a=i.top+n,h=f.getViewport();this.container.style.position="fixed",this.keepInViewport?(o>=this.minX&&o+t<h.width&&(this.lastPageX=e.pageX,this.container.style.left=o+"px"),a>=this.minY&&a+s<h.height&&(this.lastPageY=e.pageY,this.container.style.top=a+"px")):(this.lastPageX=e.pageX,this.container.style.left=o+"px",this.lastPageY=e.pageY,this.container.style.top=a+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,f.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return _()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return _()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:U},components:{Portal:X}};const fe=["aria-labelledby","aria-modal"],me=["id"],ge={class:"p-dialog-header-icons"},be=["aria-label"],ye=b("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),we=[ye],xe={key:1,class:"p-dialog-footer"};function ve(e,t,s,l,n,i){const o=R("Portal"),a=G("ripple");return u(),Y(o,{appendTo:s.appendTo},{default:F(()=>[n.containerVisible?(u(),p("div",{key:0,ref:i.maskRef,class:O(i.maskClass),onClick:t[3]||(t[3]=(...h)=>i.onMaskClick&&i.onMaskClick(...h))},[K(j,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:F(()=>[s.visible?(u(),p("div",E({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":s.modal}),[s.showHeader?(u(),p("div",{key:0,class:"p-dialog-header",onMousedown:t[2]||(t[2]=(...h)=>i.initDrag&&i.initDrag(...h))},[m(e.$slots,"header",{},()=>[s.header?(u(),p("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},S(s.header),9,me)):v("",!0)]),b("div",ge,[s.maximizable?A((u(),p("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[0]||(t[0]=(...h)=>i.maximize&&i.maximize(...h)),type:"button",tabindex:"-1"},[b("span",{class:O(i.maximizeIconClass)},null,2)])),[[a]]):v("",!0),s.closable?A((u(),p("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[1]||(t[1]=(...h)=>i.close&&i.close(...h)),"aria-label":s.ariaCloseLabel,type:"button"},we,8,be)),[[a]]):v("",!0)])],32)):v("",!0),b("div",{class:O(i.contentStyleClass),style:D(s.contentStyle)},[m(e.$slots,"default")],6),s.footer||e.$slots.footer?(u(),p("div",xe,[m(e.$slots,"footer",{},()=>[B(S(s.footer),1)])])):v("",!0)],16,fe)):v("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):v("",!0)]),_:3},8,["appendTo"])}function Ie(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var Oe=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog-footer {
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-dialog .p-dialog-header-icon {
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

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    -webkit-transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, -100%, 0px);
            transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, 100%, 0px);
            transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    -webkit-transform: translate3d(-100%, 0px, 0px);
            transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    -webkit-transform: translate3d(100%, 0px, 0px);
            transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    -webkit-transform: none;
            transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}

/* Position */
.p-dialog-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-dialog-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-dialog-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;Ie(Oe);pe.render=ve;var ke=Q(),W={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,watch:{numToleratedItems(e){this.d_numToleratedItems=e},loading(e){this.d_loading=e},items(e,t){(!t||t.length!==(e||[]).length)&&this.init()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0}},mounted(){this.init(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},methods:{init(){this.setSize(),this.calculateOptions(),this.setSpacerSize()},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(e){this.element&&this.element.scrollTo(e)},scrollToIndex(e,t="auto"){const s=this.isBoth(),l=this.isHorizontal(),n=this.first,{numToleratedItems:i}=this.calculateNumItems(),o=this.itemSize,a=(d=0,y)=>d<=y?0:d,h=(d,y)=>d*y,r=(d=0,y=0)=>this.scrollTo({left:d,top:y,behavior:t});if(s){const d={rows:a(e[0],i[0]),cols:a(e[1],i[1])};(d.rows!==n.rows||d.cols!==n.cols)&&r(h(d.cols,o[1]),h(d.rows,o[0]))}else{const d=a(e,i);d!==n&&(l?r(h(d,o),0):r(0,h(d,o)))}},scrollInView(e,t,s="auto"){if(t){const l=this.isBoth(),n=this.isHorizontal(),{first:i,viewport:o}=this.getRenderedRange(),a=(d=0,y=0)=>this.scrollTo({left:d,top:y,behavior:s}),h=t==="to-start",r=t==="to-end";if(h){if(l)o.first.rows-i.rows>e[0]?a(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-i.cols>e[1]&&a((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-i>e){const d=(o.first-1)*this.itemSize;n?a(d,0):a(0,d)}}else if(r){if(l)o.last.rows-i.rows<=e[0]+1?a(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-i.cols<=e[1]+1&&a((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-i<=e+1){const d=(o.first+1)*this.itemSize;n?a(d,0):a(0,d)}}}else this.scrollToIndex(e,s)},getRenderedRange(){const e=(l,n)=>Math.floor(l/(n||l));let t=this.first,s=0;if(this.element){const l=this.isBoth(),n=this.isHorizontal(),i=this.element.scrollTop,o=this.element.scrollLeft;l?(t={rows:e(i,this.itemSize[0]),cols:e(o,this.itemSize[1])},s={rows:t.rows+this.numItemsInViewport.rows,cols:t.cols+this.numItemsInViewport.cols}):(t=e(n?o:i,this.itemSize),s=t+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:t,last:s}}},calculateNumItems(){const e=this.isBoth(),t=this.isHorizontal(),s=this.itemSize,l=this.getContentPosition(),n=this.element?this.element.offsetWidth-l.left:0,i=this.element?this.element.offsetHeight-l.top:0,o=(d,y)=>Math.ceil(d/(y||d)),a=d=>Math.ceil(d/2),h=e?{rows:o(i,s[0]),cols:o(n,s[1])}:o(t?n:i,s),r=this.d_numToleratedItems||(e?[a(h.rows),a(h.cols)]:a(h));return{numItemsInViewport:h,numToleratedItems:r}},calculateOptions(){const e=this.isBoth(),t=this.first,{numItemsInViewport:s,numToleratedItems:l}=this.calculateNumItems(),n=(o,a,h,r)=>this.getLast(o+a+(o<h?2:3)*h,r),i=e?{rows:n(t.rows,s.rows,l[0]),cols:n(t.cols,s.cols,l[1],!0)}:n(t,s,l);this.last=i,this.numItemsInViewport=s,this.d_numToleratedItems=l,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=e?Array.from({length:s.rows}).map(()=>Array.from({length:s.cols})):Array.from({length:s})),this.lazy&&this.$emit("lazy-load",{first:t,last:i})},getLast(e=0,t){return this.items?Math.min(t?(this.columns||this.items[0]).length:this.items.length,e):0},getContentPosition(){if(this.content){const e=getComputedStyle(this.content),t=parseInt(e.paddingLeft,10)+Math.max(parseInt(e.left,10),0),s=parseInt(e.paddingRight,10)+Math.max(parseInt(e.right,10),0),l=parseInt(e.paddingTop,10)+Math.max(parseInt(e.top,10),0),n=parseInt(e.paddingBottom,10)+Math.max(parseInt(e.bottom,10),0);return{left:t,right:s,top:l,bottom:n,x:t+s,y:l+n}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const e=this.isBoth(),t=this.isHorizontal(),s=this.element.parentElement,l=this.scrollWidth||`${this.element.offsetWidth||s.offsetWidth}px`,n=this.scrollHeight||`${this.element.offsetHeight||s.offsetHeight}px`,i=(o,a)=>this.element.style[o]=a;e||t?(i("height",n),i("width",l)):i("height",n)}},setSpacerSize(){const e=this.items;if(e){const t=this.isBoth(),s=this.isHorizontal(),l=this.getContentPosition(),n=(i,o,a,h=0)=>this.spacerStyle={...this.spacerStyle,[`${i}`]:(o||[]).length*a+h+"px"};t?(n("height",e,this.itemSize[0],l.y),n("width",this.columns||e[1],this.itemSize[1],l.x)):s?n("width",this.columns||e,this.itemSize,l.x):n("height",e,this.itemSize,l.y)}},setContentPosition(e){if(this.content){const t=this.isBoth(),s=this.isHorizontal(),l=e?e.first:this.first,n=(o,a)=>o*a,i=(o=0,a=0)=>{this.contentStyle={...this.contentStyle,transform:`translate3d(${o}px, ${a}px, 0)`}};if(t)i(n(l.cols,this.itemSize[1]),n(l.rows,this.itemSize[0]));else{const o=n(l,this.itemSize);s?i(o,0):i(0,o)}}},onScrollPositionChange(e){const t=e.target,s=this.isBoth(),l=this.isHorizontal(),n=this.getContentPosition(),i=(c,g)=>c?c>g?c-g:c:0,o=(c,g)=>Math.floor(c/(g||c)),a=(c,g,I,L,C,T)=>c<=C?C:T?I-L-C:g+C-1,h=(c,g,I,L,C,T,H)=>c<=T?0:Math.max(0,H?c<g?I:c-T:c>g?I:c-2*T),r=(c,g,I,L,C,T)=>{let H=g+L+2*C;return c>=C&&(H+=C+1),this.getLast(H,T)},d=i(t.scrollTop,n.top),y=i(t.scrollLeft,n.left);let w=s?{rows:0,cols:0}:0,V=this.last,z=!1,x=this.lastScrollPos;if(s){const c=this.lastScrollPos.top<=d,g=this.lastScrollPos.left<=y,I={rows:o(d,this.itemSize[0]),cols:o(y,this.itemSize[1])},L={rows:a(I.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],c),cols:a(I.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],g)};w={rows:h(I.rows,L.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],c),cols:h(I.cols,L.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],g)},V={rows:r(I.rows,w.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:r(I.cols,w.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},z=w.rows!==this.first.rows||V.rows!==this.last.rows||w.cols!==this.first.cols||V.cols!==this.last.cols,x={top:d,left:y}}else{const c=l?y:d,g=this.lastScrollPos<=c,I=o(c,this.itemSize),L=a(I,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,g);w=h(I,L,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,g),V=r(I,w,this.last,this.numItemsInViewport,this.d_numToleratedItems),z=w!==this.first||V!==this.last,x=c}return{first:w,last:V,isRangeChanged:z,scrollPos:x}},onScrollChange(e){const{first:t,last:s,isRangeChanged:l,scrollPos:n}=this.onScrollPositionChange(e);if(l){const i={first:t,last:s};this.setContentPosition(i),this.first=t,this.last=s,this.lastScrollPos=n,this.$emit("scroll-index-change",i),this.lazy&&this.$emit("lazy-load",i)}},onScroll(e){if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:t}=this.onScrollPositionChange(e);t&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&!this.lazy&&(this.d_loading=!1)},this.delay)}else this.onScrollChange(e)},getOptions(e){const t=(this.items||[]).length,s=this.isBoth()?this.first.rows+e:this.first+e;return{index:s,count:t,first:s===0,last:s===t-1,even:s%2===0,odd:s%2!==0}},getLoaderOptions(e,t){let s=this.loaderArr.length;return{index:e,count:s,first:e===0,last:e===s-1,even:e%2===0,odd:e%2!==0,...t}},elementRef(e){this.element=e},contentRef(e){this.content=e}},computed:{containerClass(){return["p-virtualscroller",{"p-both-scroll":this.isBoth(),"p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){const e=this.items;return e&&!this.d_loading?this.isBoth()?e.slice(this.first.rows,this.last.rows).map(t=>this.columns?t:t.slice(this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?e:e.slice(this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const e=this.isBoth(),t=this.isHorizontal();if(e||t)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}}};const Se=["tabindex"],Le={key:1,class:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"};function Ce(e,t,s,l,n,i){return s.disabled?(u(),p(M,{key:1},[m(e.$slots,"default"),m(e.$slots,"content",{items:s.items,rows:s.items,columns:i.loadedColumns})],64)):(u(),p("div",{key:0,ref:i.elementRef,class:O(i.containerClass),tabindex:s.tabindex,style:D(s.style),onScroll:t[0]||(t[0]=(...o)=>i.onScroll&&i.onScroll(...o))},[m(e.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:n.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:s.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:n.spacerStyle,contentStyle:n.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},()=>[b("div",{ref:i.contentRef,class:O(i.contentClass),style:D(n.contentStyle)},[(u(!0),p(M,null,N(i.loadedItems,(o,a)=>m(e.$slots,"item",{key:a,item:o,options:i.getOptions(a)})),128))],6)]),s.showSpacer?(u(),p("div",{key:0,class:"p-virtualscroller-spacer",style:D(n.spacerStyle)},null,4)):v("",!0),!s.loaderDisabled&&s.showLoader&&n.d_loading?(u(),p("div",{key:1,class:O(i.loaderClass)},[e.$slots&&e.$slots.loader?(u(!0),p(M,{key:0},N(n.loaderArr,(o,a)=>m(e.$slots,"loader",{key:a,options:i.getLoaderOptions(a,i.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})),128)):(u(),p("i",Le))],2)):v("",!0)],46,Se))}function Ve(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var ze=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}
.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    contain: content;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}
.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    pointer-events: none;
}
.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p-virtualscroller-loader.p-component-overlay {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
`;Ve(ze);W.render=Ce;var De={name:"Dropdown",emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data(){return{focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0},options(){this.autoUpdateModel()}},mounted(){this.autoUpdateModel()},updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(P.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?k.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?k.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e,t){return(this.dataKey?k.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+t},isOptionDisabled(e){return this.optionDisabled?k.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel(e){return k.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return k.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1},show(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&f.focus(this.$refs.focusInput)},hide(e){const t=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),e&&f.focus(this.$refs.focusInput)};setTimeout(()=>{t()},0)},onFocus(e){this.focused=!0,this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!t&&k.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}},onEditableInput(e){const t=e.target.value;this.searchValue="",!this.searchOptions(e,t)&&(this.focusedOptionIndex=-1),this.$emit("update:modelValue",t)},onContainerClick(e){this.disabled||this.loading||f.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick(e){this.updateModel(e,null)},onFirstHiddenFocus(e){if(e.relatedTarget===this.$refs.focusInput){const s=f.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)");f.focus(s)}else f.focus(this.$refs.focusInput)},onLastHiddenFocus(){f.focus(this.$refs.firstHiddenFocusableElementOnOverlay)},onOptionSelect(e,t,s=!0){const l=this.getOptionValue(t);this.updateModel(e,l),s&&this.hide(!0)},onOptionMouseMove(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onFilterChange(e){const t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(e){ke.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey(e){const t=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey(e,t=!1){if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{const s=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey(e,t=!1){t&&(this.focusedOptionIndex=-1)},onHomeKey(e,t=!1){t?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey(e,t=!1){if(t){const s=e.currentTarget,l=s.value.length;s.setSelectionRange(l,l),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey(e){this.scrollInView(0),e.preventDefault()},onPageDownKey(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onSpaceKey(e,t=!1){!t&&this.onEnterKey(e)},onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey(e,t=!1){t||(this.overlayVisible&&this.hasFocusableElements()?(f.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey(e,t=!1){t&&!this.overlayVisible&&this.show()},onOverlayEnter(e){P.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&f.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){P.clear(e)},alignOverlay(){this.appendTo==="self"?f.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=f.getOuterWidth(this.$el)+"px",f.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new $(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!f.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements(){return f.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected(e){return k.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex(){return this.visibleOptions.findIndex(e=>this.isValidOption(e))},findLastOptionIndex(){return k.findLastIndex(this.visibleOptions,e=>this.isValidOption(e))},findNextOptionIndex(e){const t=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(s=>this.isValidOption(s)):-1;return t>-1?t+e+1:e},findPrevOptionIndex(e){const t=e>0?k.findLastIndex(this.visibleOptions.slice(0,e),s=>this.isValidOption(s)):-1;return t>-1?t:e},findSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(e=>this.isValidSelectedOption(e)):-1},findFirstFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions(e,t){this.searchValue=(this.searchValue||"")+t;let s=-1,l=!1;return this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(n=>this.isOptionMatched(n)),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(n=>this.isOptionMatched(n)):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(n=>this.isOptionMatched(n)),s!==-1&&(l=!0),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),l},changeFocusedOptionIndex(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,s=f.findSingle(this.list,`li[id="${t}"]`);s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},0)},autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},flatOptions(e){return(e||[]).reduce((t,s,l)=>{t.push({optionGroup:s,group:!0,index:l});const n=this.getOptionGroupChildren(s);return n&&n.forEach(i=>t.push(i)),t},[])},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e}},computed:{containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},inputStyleClass(){return["p-dropdown-label p-inputtext",this.inputClass,{"p-placeholder":!this.editable&&this.label===this.placeholder,"p-dropdown-label-empty":!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]},visibleOptions(){const e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?ee.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):e},hasSelectedOption(){return k.isNotEmpty(this.modelValue)},label(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},filterResultMessageText(){return k.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},id(){return this.$attrs.id||_()},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(e=>!this.isOptionGroup(e)).length},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:U},components:{VirtualScroller:W,Portal:X}};const Te=["id"],Ee=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],Fe=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],Be={class:"p-dropdown-trigger"},Pe={key:0,class:"p-dropdown-header"},Ke={class:"p-dropdown-filter-container"},Me=["value","placeholder","aria-owns","aria-activedescendant"],Ae=b("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),He={role:"status","aria-live":"polite",class:"p-hidden-accessible"},_e=["id"],Re=["id"],Ne=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"],Ge={key:0,class:"p-dropdown-empty-message",role:"option"},je={key:1,class:"p-dropdown-empty-message",role:"option"},Ue={key:0,role:"status","aria-live":"polite",class:"p-hidden-accessible"},Xe={role:"status","aria-live":"polite",class:"p-hidden-accessible"};function Ye(e,t,s,l,n,i){const o=R("VirtualScroller"),a=R("Portal"),h=G("ripple");return u(),p("div",{ref:"container",id:i.id,class:O(i.containerClass),onClick:t[16]||(t[16]=(...r)=>i.onContainerClick&&i.onContainerClick(...r))},[s.editable?(u(),p("input",E({key:0,ref:"focusInput",id:s.inputId,type:"text",style:s.inputStyle,class:i.inputStyleClass,value:i.editableInputValue,placeholder:s.placeholder,tabindex:s.disabled?-1:s.tabindex,disabled:s.disabled,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":n.overlayVisible,"aria-controls":i.id+"_list","aria-activedescendant":n.focused?i.focusedOptionId:void 0,onFocus:t[0]||(t[0]=(...r)=>i.onFocus&&i.onFocus(...r)),onBlur:t[1]||(t[1]=(...r)=>i.onBlur&&i.onBlur(...r)),onKeydown:t[2]||(t[2]=(...r)=>i.onKeyDown&&i.onKeyDown(...r)),onInput:t[3]||(t[3]=(...r)=>i.onEditableInput&&i.onEditableInput(...r))},s.inputProps),null,16,Ee)):(u(),p("span",E({key:1,ref:"focusInput",id:s.inputId,style:s.inputStyle,class:i.inputStyleClass,tabindex:s.disabled?-1:s.tabindex,role:"combobox","aria-label":e.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":n.overlayVisible,"aria-controls":i.id+"_list","aria-activedescendant":n.focused?i.focusedOptionId:void 0,"aria-disabled":s.disabled,onFocus:t[4]||(t[4]=(...r)=>i.onFocus&&i.onFocus(...r)),onBlur:t[5]||(t[5]=(...r)=>i.onBlur&&i.onBlur(...r)),onKeydown:t[6]||(t[6]=(...r)=>i.onKeyDown&&i.onKeyDown(...r))},s.inputProps),[m(e.$slots,"value",{value:s.modelValue,placeholder:s.placeholder},()=>[B(S(i.label==="p-emptylabel"?"\xA0":i.label||"empty"),1)])],16,Fe)),s.showClear&&s.modelValue!=null?(u(),p("i",E({key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:t[7]||(t[7]=(...r)=>i.onClearClick&&i.onClearClick(...r))},s.clearIconProps),null,16)):v("",!0),b("div",Be,[m(e.$slots,"indicator",{},()=>[b("span",{class:O(i.dropdownIconClass),"aria-hidden":"true"},null,2)])]),K(a,{appendTo:s.appendTo},{default:F(()=>[K(j,{name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},{default:F(()=>[n.overlayVisible?(u(),p("div",E({key:0,ref:i.overlayRef,style:s.panelStyle,class:i.panelStyleClass,onClick:t[14]||(t[14]=(...r)=>i.onOverlayClick&&i.onOverlayClick(...r)),onKeydown:t[15]||(t[15]=(...r)=>i.onOverlayKeyDown&&i.onOverlayKeyDown(...r))},s.panelProps),[b("span",{ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[8]||(t[8]=(...r)=>i.onFirstHiddenFocus&&i.onFirstHiddenFocus(...r))},null,544),m(e.$slots,"header",{value:s.modelValue,options:i.visibleOptions}),s.filter?(u(),p("div",Pe,[b("div",Ke,[b("input",E({ref:"filterInput",type:"text",value:n.filterValue,onVnodeUpdated:t[9]||(t[9]=(...r)=>i.onFilterUpdated&&i.onFilterUpdated(...r)),class:"p-dropdown-filter p-inputtext p-component",placeholder:s.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":i.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:t[10]||(t[10]=(...r)=>i.onFilterKeyDown&&i.onFilterKeyDown(...r)),onBlur:t[11]||(t[11]=(...r)=>i.onFilterBlur&&i.onFilterBlur(...r)),onInput:t[12]||(t[12]=(...r)=>i.onFilterChange&&i.onFilterChange(...r))},s.filterInputProps),null,16,Me),Ae]),b("span",He,S(i.filterResultMessageText),1)])):v("",!0),b("div",{class:"p-dropdown-items-wrapper",style:D({"max-height":i.virtualScrollerDisabled?s.scrollHeight:""})},[K(o,E({ref:i.virtualScrollerRef},s.virtualScrollerOptions,{items:i.visibleOptions,style:{height:s.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled}),te({content:F(({styleClass:r,contentRef:d,items:y,getItemOptions:w,contentStyle:V,itemSize:z})=>[b("ul",{ref:x=>i.listRef(x,d),id:i.id+"_list",class:O(["p-dropdown-items",r]),style:D(V),role:"listbox"},[(u(!0),p(M,null,N(y,(x,c)=>(u(),p(M,{key:i.getOptionRenderKey(x,i.getOptionIndex(c,w))},[i.isOptionGroup(x)?(u(),p("li",{key:0,id:i.id+"_"+i.getOptionIndex(c,w),style:D({height:z?z+"px":void 0}),class:"p-dropdown-item-group",role:"option"},[m(e.$slots,"optiongroup",{option:x.optionGroup,index:i.getOptionIndex(c,w)},()=>[B(S(i.getOptionGroupLabel(x.optionGroup)),1)])],12,Re)):A((u(),p("li",{key:1,id:i.id+"_"+i.getOptionIndex(c,w),style:D({height:z?z+"px":void 0}),class:O(["p-dropdown-item",{"p-highlight":i.isSelected(x),"p-focus":n.focusedOptionIndex===i.getOptionIndex(c,w),"p-disabled":i.isOptionDisabled(x)}]),role:"option","aria-label":i.getOptionLabel(x),"aria-selected":i.isSelected(x),"aria-disabled":i.isOptionDisabled(x),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(c,w)),onClick:g=>i.onOptionSelect(g,x),onMousemove:g=>i.onOptionMouseMove(g,i.getOptionIndex(c,w))},[m(e.$slots,"option",{option:x,index:i.getOptionIndex(c,w)},()=>[B(S(i.getOptionLabel(x)),1)])],46,Ne)),[[h]])],64))),128)),n.filterValue&&(!y||y&&y.length===0)?(u(),p("li",Ge,[m(e.$slots,"emptyfilter",{},()=>[B(S(i.emptyFilterMessageText),1)])])):!s.options||s.options&&s.options.length===0?(u(),p("li",je,[m(e.$slots,"empty",{},()=>[B(S(i.emptyMessageText),1)])])):v("",!0)],14,_e),!s.options||s.options&&s.options.length===0?(u(),p("span",Ue,S(i.emptyMessageText),1)):v("",!0),b("span",Xe,S(i.selectedMessageText),1)]),_:2},[e.$slots.loader?{name:"loader",fn:F(({options:r})=>[m(e.$slots,"loader",{options:r})]),key:"0"}:void 0]),1040,["items","style","disabled"])],4),m(e.$slots,"footer",{value:s.modelValue,options:i.visibleOptions}),b("span",{ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[13]||(t[13]=(...r)=>i.onLastHiddenFocus&&i.onLastHiddenFocus(...r))},null,544)],16)):v("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],10,Te)}function We(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var Ze=`
.p-dropdown {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    cursor: pointer;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-dropdown-trigger {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}
input.p-dropdown-label {
    cursor: default;
}
.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}
.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-dropdown-items-wrapper {
    overflow: auto;
}
.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-dropdown-item-group {
    cursor: auto;
}
.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-dropdown-filter {
    width: 100%;
}
.p-dropdown-filter-container {
    position: relative;
}
.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-fluid .p-dropdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;We(Ze);De.render=Ye;var qe={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const Je=["value"];function Qe(e,t,s,l,n,i){return u(),p("input",{class:O(["p-inputtext p-component",{"p-filled":i.filled}]),value:s.modelValue,onInput:t[0]||(t[0]=(...o)=>i.onInput&&i.onInput(...o))},null,42,Je)}qe.render=Qe;export{ke as O,De as a,W as b,X as c,ie as d,pe as e,qe as s};
