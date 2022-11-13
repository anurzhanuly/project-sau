import{h as W,Z as P,D as p,U as H,i as R,B as _,o as u,k as Z,l as B,c as f,m as A,z as F,r as w,e as v,w as N,b as k,a as I,n as D,T as U,t as S,d as E,F as K,j as G,O,I as q,E as J,L as Q}from"./index.13f7c679.js";import{R as j}from"./ripple.esm.5d646a7b.js";import{s as X,O as $}from"./overlayeventbus.esm.c68c37c8.js";var ee={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},_instance:null},provide(){return{dialogRef:W(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&P.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&P.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(){this.autoZIndex&&P.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?p.addClass(document.body,"p-overflow-hidden"):p.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&p.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&p.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){if(e.which===9){e.preventDefault();let t=p.getFocusableElements(this.container);if(t&&t.length>0)if(!document.activeElement)t[0].focus();else{let s=t.indexOf(document.activeElement);e.shiftKey?s==-1||s===0?t[t.length-1].focus():t[s-1].focus():s==-1||s===t.length-1?t[0].focus():t[s+1].focus()}}else e.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(s=>s===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){p.hasClass(e.target,"p-dialog-header-icon")||p.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",p.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=p.getOuterWidth(this.container),s=p.getOuterHeight(this.container),l=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),o=i.left+l,r=i.top+n,h=p.getViewport();this.container.style.position="fixed",this.keepInViewport?(o>=this.minX&&o+t<h.width&&(this.lastPageX=e.pageX,this.container.style.left=o+"px"),r>=this.minY&&r+s<h.height&&(this.lastPageY=e.pageY,this.container.style.top=r+"px")):(this.lastPageX=e.pageX,this.container.style.left=o+"px",this.lastPageY=e.pageY,this.container.style.top=r+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,p.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return H()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return H()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:j},components:{Portal:X}};const te=["aria-labelledby","aria-modal"],ie=["id"],se={class:"p-dialog-header-icons"},ne=["aria-label"],le=v("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),oe=[le],ae={key:1,class:"p-dialog-footer"};function re(e,t,s,l,n,i){const o=R("Portal"),r=_("ripple");return u(),Z(o,{appendTo:s.appendTo},{default:B(()=>[n.containerVisible?(u(),f("div",{key:0,ref:i.maskRef,class:k(i.maskClass),onClick:t[3]||(t[3]=(...h)=>i.onMaskClick&&i.onMaskClick(...h))},[A(U,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:B(()=>[s.visible?(u(),f("div",F({key:0,ref:i.containerRef,class:i.dialogClass},e.$attrs,{role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":s.modal}),[s.showHeader?(u(),f("div",{key:0,class:"p-dialog-header",onMousedown:t[2]||(t[2]=(...h)=>i.initDrag&&i.initDrag(...h))},[w(e.$slots,"header",{},()=>[s.header?(u(),f("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},S(s.header),9,ie)):I("",!0)]),v("div",se,[s.maximizable?N((u(),f("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[0]||(t[0]=(...h)=>i.maximize&&i.maximize(...h)),type:"button",tabindex:"-1"},[v("span",{class:k(i.maximizeIconClass)},null,2)])),[[r]]):I("",!0),s.closable?N((u(),f("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[1]||(t[1]=(...h)=>i.close&&i.close(...h)),"aria-label":s.ariaCloseLabel,type:"button"},oe,8,ne)),[[r]]):I("",!0)])],32)):I("",!0),v("div",{class:k(i.contentStyleClass),style:D(s.contentStyle)},[w(e.$slots,"default")],6),s.footer||e.$slots.footer?(u(),f("div",ae,[w(e.$slots,"footer",{},()=>[E(S(s.footer),1)])])):I("",!0)],16,te)):I("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):I("",!0)]),_:3},8,["appendTo"])}function de(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var he=`
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
`;de(he);ee.render=re;var Y={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,watch:{numToleratedItems(e){this.d_numToleratedItems=e},loading(e){this.d_loading=e},items(e,t){(!t||t.length!==(e||[]).length)&&this.init()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0}},mounted(){this.init(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},methods:{init(){this.setSize(),this.calculateOptions(),this.setSpacerSize()},isVertical(){return this.orientation==="vertical"},isHorizontal(){return this.orientation==="horizontal"},isBoth(){return this.orientation==="both"},scrollTo(e){this.element&&this.element.scrollTo(e)},scrollToIndex(e,t="auto"){const s=this.isBoth(),l=this.isHorizontal(),n=this.first,{numToleratedItems:i}=this.calculateNumItems(),o=this.itemSize,r=(d=0,g)=>d<=g?0:d,h=(d,g)=>d*g,a=(d=0,g=0)=>this.scrollTo({left:d,top:g,behavior:t});if(s){const d={rows:r(e[0],i[0]),cols:r(e[1],i[1])};(d.rows!==n.rows||d.cols!==n.cols)&&a(h(d.cols,o[1]),h(d.rows,o[0]))}else{const d=r(e,i);d!==n&&(l?a(h(d,o),0):a(0,h(d,o)))}},scrollInView(e,t,s="auto"){if(t){const l=this.isBoth(),n=this.isHorizontal(),{first:i,viewport:o}=this.getRenderedRange(),r=(d=0,g=0)=>this.scrollTo({left:d,top:g,behavior:s}),h=t==="to-start",a=t==="to-end";if(h){if(l)o.first.rows-i.rows>e[0]?r(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-i.cols>e[1]&&r((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-i>e){const d=(o.first-1)*this.itemSize;n?r(d,0):r(0,d)}}else if(a){if(l)o.last.rows-i.rows<=e[0]+1?r(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-i.cols<=e[1]+1&&r((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-i<=e+1){const d=(o.first+1)*this.itemSize;n?r(d,0):r(0,d)}}}else this.scrollToIndex(e,s)},getRenderedRange(){const e=(l,n)=>Math.floor(l/(n||l));let t=this.first,s=0;if(this.element){const l=this.isBoth(),n=this.isHorizontal(),i=this.element.scrollTop,o=this.element.scrollLeft;l?(t={rows:e(i,this.itemSize[0]),cols:e(o,this.itemSize[1])},s={rows:t.rows+this.numItemsInViewport.rows,cols:t.cols+this.numItemsInViewport.cols}):(t=e(n?o:i,this.itemSize),s=t+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:t,last:s}}},calculateNumItems(){const e=this.isBoth(),t=this.isHorizontal(),s=this.itemSize,l=this.getContentPosition(),n=this.element?this.element.offsetWidth-l.left:0,i=this.element?this.element.offsetHeight-l.top:0,o=(d,g)=>Math.ceil(d/(g||d)),r=d=>Math.ceil(d/2),h=e?{rows:o(i,s[0]),cols:o(n,s[1])}:o(t?n:i,s),a=this.d_numToleratedItems||(e?[r(h.rows),r(h.cols)]:r(h));return{numItemsInViewport:h,numToleratedItems:a}},calculateOptions(){const e=this.isBoth(),t=this.first,{numItemsInViewport:s,numToleratedItems:l}=this.calculateNumItems(),n=(o,r,h,a)=>this.getLast(o+r+(o<h?2:3)*h,a),i=e?{rows:n(t.rows,s.rows,l[0]),cols:n(t.cols,s.cols,l[1],!0)}:n(t,s,l);this.last=i,this.numItemsInViewport=s,this.d_numToleratedItems=l,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=e?Array.from({length:s.rows}).map(()=>Array.from({length:s.cols})):Array.from({length:s})),this.lazy&&this.$emit("lazy-load",{first:t,last:i})},getLast(e=0,t){return this.items?Math.min(t?(this.columns||this.items[0]).length:this.items.length,e):0},getContentPosition(){if(this.content){const e=getComputedStyle(this.content),t=parseInt(e.paddingLeft,10)+Math.max(parseInt(e.left,10),0),s=parseInt(e.paddingRight,10)+Math.max(parseInt(e.right,10),0),l=parseInt(e.paddingTop,10)+Math.max(parseInt(e.top,10),0),n=parseInt(e.paddingBottom,10)+Math.max(parseInt(e.bottom,10),0);return{left:t,right:s,top:l,bottom:n,x:t+s,y:l+n}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const e=this.isBoth(),t=this.isHorizontal(),s=this.element.parentElement,l=this.scrollWidth||`${this.element.offsetWidth||s.offsetWidth}px`,n=this.scrollHeight||`${this.element.offsetHeight||s.offsetHeight}px`,i=(o,r)=>this.element.style[o]=r;e||t?(i("height",n),i("width",l)):i("height",n)}},setSpacerSize(){const e=this.items;if(e){const t=this.isBoth(),s=this.isHorizontal(),l=this.getContentPosition(),n=(i,o,r,h=0)=>this.spacerStyle={...this.spacerStyle,[`${i}`]:(o||[]).length*r+h+"px"};t?(n("height",e,this.itemSize[0],l.y),n("width",this.columns||e[1],this.itemSize[1],l.x)):s?n("width",this.columns||e,this.itemSize,l.x):n("height",e,this.itemSize,l.y)}},setContentPosition(e){if(this.content){const t=this.isBoth(),s=this.isHorizontal(),l=e?e.first:this.first,n=(o,r)=>o*r,i=(o=0,r=0)=>{this.contentStyle={...this.contentStyle,transform:`translate3d(${o}px, ${r}px, 0)`}};if(t)i(n(l.cols,this.itemSize[1]),n(l.rows,this.itemSize[0]));else{const o=n(l,this.itemSize);s?i(o,0):i(0,o)}}},onScrollPositionChange(e){const t=e.target,s=this.isBoth(),l=this.isHorizontal(),n=this.getContentPosition(),i=(c,m)=>c?c>m?c-m:c:0,o=(c,m)=>Math.floor(c/(m||c)),r=(c,m,x,L,C,T)=>c<=C?C:T?x-L-C:m+C-1,h=(c,m,x,L,C,T,M)=>c<=T?0:Math.max(0,M?c<m?x:c-T:c>m?x:c-2*T),a=(c,m,x,L,C,T)=>{let M=m+L+2*C;return c>=C&&(M+=C+1),this.getLast(M,T)},d=i(t.scrollTop,n.top),g=i(t.scrollLeft,n.left);let b=s?{rows:0,cols:0}:0,V=this.last,z=!1,y=this.lastScrollPos;if(s){const c=this.lastScrollPos.top<=d,m=this.lastScrollPos.left<=g,x={rows:o(d,this.itemSize[0]),cols:o(g,this.itemSize[1])},L={rows:r(x.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],c),cols:r(x.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};b={rows:h(x.rows,L.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],c),cols:h(x.cols,L.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)},V={rows:a(x.rows,b.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:a(x.cols,b.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},z=b.rows!==this.first.rows||V.rows!==this.last.rows||b.cols!==this.first.cols||V.cols!==this.last.cols,y={top:d,left:g}}else{const c=l?g:d,m=this.lastScrollPos<=c,x=o(c,this.itemSize),L=r(x,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);b=h(x,L,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),V=a(x,b,this.last,this.numItemsInViewport,this.d_numToleratedItems),z=b!==this.first||V!==this.last,y=c}return{first:b,last:V,isRangeChanged:z,scrollPos:y}},onScrollChange(e){const{first:t,last:s,isRangeChanged:l,scrollPos:n}=this.onScrollPositionChange(e);if(l){const i={first:t,last:s};this.setContentPosition(i),this.first=t,this.last=s,this.lastScrollPos=n,this.$emit("scroll-index-change",i),this.lazy&&this.$emit("lazy-load",i)}},onScroll(e){if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:t}=this.onScrollPositionChange(e);t&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&!this.lazy&&(this.d_loading=!1)},this.delay)}else this.onScrollChange(e)},getOptions(e){const t=(this.items||[]).length,s=this.isBoth()?this.first.rows+e:this.first+e;return{index:s,count:t,first:s===0,last:s===t-1,even:s%2===0,odd:s%2!==0}},getLoaderOptions(e,t){let s=this.loaderArr.length;return{index:e,count:s,first:e===0,last:e===s-1,even:e%2===0,odd:e%2!==0,...t}},elementRef(e){this.element=e},contentRef(e){this.content=e}},computed:{containerClass(){return["p-virtualscroller",{"p-both-scroll":this.isBoth(),"p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){const e=this.items;return e&&!this.d_loading?this.isBoth()?e.slice(this.first.rows,this.last.rows).map(t=>this.columns?t:t.slice(this.first.cols,this.last.cols)):this.isHorizontal()&&this.columns?e:e.slice(this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const e=this.isBoth(),t=this.isHorizontal();if(e||t)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}}};const ce=["tabindex"],ue={key:1,class:"p-virtualscroller-loading-icon pi pi-spinner pi-spin"};function pe(e,t,s,l,n,i){return s.disabled?(u(),f(K,{key:1},[w(e.$slots,"default"),w(e.$slots,"content",{items:s.items,rows:s.items,columns:i.loadedColumns})],64)):(u(),f("div",{key:0,ref:i.elementRef,class:k(i.containerClass),tabindex:s.tabindex,style:D(s.style),onScroll:t[0]||(t[0]=(...o)=>i.onScroll&&i.onScroll(...o))},[w(e.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:n.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:s.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:n.spacerStyle,contentStyle:n.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},()=>[v("div",{ref:i.contentRef,class:k(i.contentClass),style:D(n.contentStyle)},[(u(!0),f(K,null,G(i.loadedItems,(o,r)=>w(e.$slots,"item",{key:r,item:o,options:i.getOptions(r)})),128))],6)]),s.showSpacer?(u(),f("div",{key:0,class:"p-virtualscroller-spacer",style:D(n.spacerStyle)},null,4)):I("",!0),!s.loaderDisabled&&s.showLoader&&n.d_loading?(u(),f("div",{key:1,class:k(i.loaderClass)},[e.$slots&&e.$slots.loader?(u(!0),f(K,{key:0},G(n.loaderArr,(o,r)=>w(e.$slots,"loader",{key:r,options:i.getLoaderOptions(r,i.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})),128)):(u(),f("i",ue))],2)):I("",!0)],46,ce))}function fe(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var me=`
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
`;fe(me);Y.render=pe;var ge={name:"Dropdown",emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:String,default:null},inputStyle:{type:null,default:null},inputProps:{type:null,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data(){return{focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0},options(){this.autoUpdateModel()}},mounted(){this.autoUpdateModel()},updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(P.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?O.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?O.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e,t){return(this.dataKey?O.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+t},isOptionDisabled(e){return this.optionDisabled?O.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel(e){return O.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return O.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1},show(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&p.focus(this.$refs.focusInput)},hide(e){const t=()=>{this.$emit("before-hide"),this.overlayVisible=!1,this.focusedOptionIndex=-1,this.searchValue="",this.resetFilterOnHide&&(this.filterValue=null),e&&p.focus(this.$refs.focusInput)};setTimeout(()=>{t()},0)},onFocus(e){this.focused=!0,this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!t&&O.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}},onEditableInput(e){const t=e.target.value;this.searchValue="",!this.searchOptions(e,t)&&(this.focusedOptionIndex=-1),this.$emit("update:modelValue",t)},onContainerClick(e){this.disabled||this.loading||p.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick(e){this.updateModel(e,null)},onFirstHiddenFocus(e){if(e.relatedTarget===this.$refs.focusInput){const s=p.getFirstFocusableElement(this.overlay,":not(.p-hidden-focusable)");p.focus(s)}else p.focus(this.$refs.focusInput)},onLastHiddenFocus(){p.focus(this.$refs.firstHiddenFocusableElementOnOverlay)},onOptionSelect(e,t,s=!0){const l=this.getOptionValue(t);this.updateModel(e,l),s&&this.hide(!0)},onOptionMouseMove(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onFilterChange(e){const t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur(){this.focusedOptionIndex=-1},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},onOverlayClick(e){$.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey(e){const t=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey(e,t=!1){if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{const s=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey(e,t=!1){t&&(this.focusedOptionIndex=-1)},onHomeKey(e,t=!1){t?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey(e,t=!1){if(t){const s=e.currentTarget,l=s.value.length;s.setSelectionRange(l,l),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey(e){this.scrollInView(0),e.preventDefault()},onPageDownKey(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onSpaceKey(e,t=!1){!t&&this.onEnterKey(e)},onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey(e,t=!1){t||(this.overlayVisible&&this.hasFocusableElements()?(p.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey(e,t=!1){t&&!this.overlayVisible&&this.show()},onOverlayEnter(e){P.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&p.focus(this.$refs.filterInput)},onOverlayAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave(e){P.clear(e)},alignOverlay(){this.appendTo==="self"?p.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=p.getOuterWidth(this.$el)+"px",p.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new q(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!p.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements(){return p.getFocusableElements(this.overlay,":not(.p-hidden-focusable)").length>0},isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected(e){return O.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex(){return this.visibleOptions.findIndex(e=>this.isValidOption(e))},findLastOptionIndex(){return O.findLastIndex(this.visibleOptions,e=>this.isValidOption(e))},findNextOptionIndex(e){const t=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(s=>this.isValidOption(s)):-1;return t>-1?t+e+1:e},findPrevOptionIndex(e){const t=e>0?O.findLastIndex(this.visibleOptions.slice(0,e),s=>this.isValidOption(s)):-1;return t>-1?t:e},findSelectedOptionIndex(){return this.hasSelectedOption?this.visibleOptions.findIndex(e=>this.isValidSelectedOption(e)):-1},findFirstFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex(){const e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions(e,t){this.searchValue=(this.searchValue||"")+t;let s=-1,l=!1;return this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(n=>this.isOptionMatched(n)),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(n=>this.isOptionMatched(n)):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(n=>this.isOptionMatched(n)),s!==-1&&(l=!0),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),l},changeFocusedOptionIndex(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,s=p.findSingle(this.list,`li[id="${t}"]`);s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(e!==-1?e:this.focusedOptionIndex)},0)},autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},flatOptions(e){return(e||[]).reduce((t,s,l)=>{t.push({optionGroup:s,group:!0,index:l});const n=this.getOptionGroupChildren(s);return n&&n.forEach(i=>t.push(i)),t},[])},overlayRef(e){this.overlay=e},listRef(e,t){this.list=e,t&&t(e)},virtualScrollerRef(e){this.virtualScroller=e}},computed:{containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible,"p-overlay-open":this.overlayVisible}]},inputStyleClass(){return["p-dropdown-label p-inputtext",this.inputClass,{"p-placeholder":!this.editable&&this.label===this.placeholder,"p-dropdown-label-empty":!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]},visibleOptions(){const e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?J.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):e},hasSelectedOption(){return O.isNotEmpty(this.modelValue)},label(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue(){const e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},filterResultMessageText(){return O.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},id(){return this.$attrs.id||H()},focusedOptionId(){return this.focusedOptionIndex!==-1?`${this.id}_${this.focusedOptionIndex}`:null},ariaSetSize(){return this.visibleOptions.filter(e=>!this.isOptionGroup(e)).length},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:j},components:{VirtualScroller:Y,Portal:X}};const be=["id"],ye=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],we=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],xe={class:"p-dropdown-trigger"},ve={key:0,class:"p-dropdown-header"},Ie={class:"p-dropdown-filter-container"},Oe=["value","placeholder","aria-owns","aria-activedescendant"],ke=v("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),Se={role:"status","aria-live":"polite",class:"p-hidden-accessible"},Le=["id"],Ce=["id"],Ve=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove"],ze={key:0,class:"p-dropdown-empty-message",role:"option"},De={key:1,class:"p-dropdown-empty-message",role:"option"},Te={key:0,role:"status","aria-live":"polite",class:"p-hidden-accessible"},Fe={role:"status","aria-live":"polite",class:"p-hidden-accessible"};function Ee(e,t,s,l,n,i){const o=R("VirtualScroller"),r=R("Portal"),h=_("ripple");return u(),f("div",{ref:"container",id:i.id,class:k(i.containerClass),onClick:t[16]||(t[16]=(...a)=>i.onContainerClick&&i.onContainerClick(...a))},[s.editable?(u(),f("input",F({key:0,ref:"focusInput",id:s.inputId,type:"text",style:s.inputStyle,class:i.inputStyleClass,value:i.editableInputValue,placeholder:s.placeholder,tabindex:s.disabled?-1:s.tabindex,disabled:s.disabled,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":n.overlayVisible,"aria-controls":i.id+"_list","aria-activedescendant":n.focused?i.focusedOptionId:void 0,onFocus:t[0]||(t[0]=(...a)=>i.onFocus&&i.onFocus(...a)),onBlur:t[1]||(t[1]=(...a)=>i.onBlur&&i.onBlur(...a)),onKeydown:t[2]||(t[2]=(...a)=>i.onKeyDown&&i.onKeyDown(...a)),onInput:t[3]||(t[3]=(...a)=>i.onEditableInput&&i.onEditableInput(...a))},s.inputProps),null,16,ye)):(u(),f("span",F({key:1,ref:"focusInput",id:s.inputId,style:s.inputStyle,class:i.inputStyleClass,tabindex:s.disabled?-1:s.tabindex,role:"combobox","aria-label":e.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":n.overlayVisible,"aria-controls":i.id+"_list","aria-activedescendant":n.focused?i.focusedOptionId:void 0,"aria-disabled":s.disabled,onFocus:t[4]||(t[4]=(...a)=>i.onFocus&&i.onFocus(...a)),onBlur:t[5]||(t[5]=(...a)=>i.onBlur&&i.onBlur(...a)),onKeydown:t[6]||(t[6]=(...a)=>i.onKeyDown&&i.onKeyDown(...a))},s.inputProps),[w(e.$slots,"value",{value:s.modelValue,placeholder:s.placeholder},()=>[E(S(i.label==="p-emptylabel"?"\xA0":i.label||"empty"),1)])],16,we)),s.showClear&&s.modelValue!=null?(u(),f("i",F({key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:t[7]||(t[7]=(...a)=>i.onClearClick&&i.onClearClick(...a))},s.clearIconProps),null,16)):I("",!0),v("div",xe,[w(e.$slots,"indicator",{},()=>[v("span",{class:k(i.dropdownIconClass),"aria-hidden":"true"},null,2)])]),A(r,{appendTo:s.appendTo},{default:B(()=>[A(U,{name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},{default:B(()=>[n.overlayVisible?(u(),f("div",F({key:0,ref:i.overlayRef,style:s.panelStyle,class:i.panelStyleClass,onClick:t[14]||(t[14]=(...a)=>i.onOverlayClick&&i.onOverlayClick(...a)),onKeydown:t[15]||(t[15]=(...a)=>i.onOverlayKeyDown&&i.onOverlayKeyDown(...a))},s.panelProps),[v("span",{ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[8]||(t[8]=(...a)=>i.onFirstHiddenFocus&&i.onFirstHiddenFocus(...a))},null,544),w(e.$slots,"header",{value:s.modelValue,options:i.visibleOptions}),s.filter?(u(),f("div",ve,[v("div",Ie,[v("input",F({ref:"filterInput",type:"text",value:n.filterValue,onVnodeUpdated:t[9]||(t[9]=(...a)=>i.onFilterUpdated&&i.onFilterUpdated(...a)),class:"p-dropdown-filter p-inputtext p-component",placeholder:s.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":i.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:t[10]||(t[10]=(...a)=>i.onFilterKeyDown&&i.onFilterKeyDown(...a)),onBlur:t[11]||(t[11]=(...a)=>i.onFilterBlur&&i.onFilterBlur(...a)),onInput:t[12]||(t[12]=(...a)=>i.onFilterChange&&i.onFilterChange(...a))},s.filterInputProps),null,16,Oe),ke]),v("span",Se,S(i.filterResultMessageText),1)])):I("",!0),v("div",{class:"p-dropdown-items-wrapper",style:D({"max-height":i.virtualScrollerDisabled?s.scrollHeight:""})},[A(o,F({ref:i.virtualScrollerRef},s.virtualScrollerOptions,{items:i.visibleOptions,style:{height:s.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled}),Q({content:B(({styleClass:a,contentRef:d,items:g,getItemOptions:b,contentStyle:V,itemSize:z})=>[v("ul",{ref:y=>i.listRef(y,d),id:i.id+"_list",class:k(["p-dropdown-items",a]),style:D(V),role:"listbox"},[(u(!0),f(K,null,G(g,(y,c)=>(u(),f(K,{key:i.getOptionRenderKey(y,i.getOptionIndex(c,b))},[i.isOptionGroup(y)?(u(),f("li",{key:0,id:i.id+"_"+i.getOptionIndex(c,b),style:D({height:z?z+"px":void 0}),class:"p-dropdown-item-group",role:"option"},[w(e.$slots,"optiongroup",{option:y.optionGroup,index:i.getOptionIndex(c,b)},()=>[E(S(i.getOptionGroupLabel(y.optionGroup)),1)])],12,Ce)):N((u(),f("li",{key:1,id:i.id+"_"+i.getOptionIndex(c,b),style:D({height:z?z+"px":void 0}),class:k(["p-dropdown-item",{"p-highlight":i.isSelected(y),"p-focus":n.focusedOptionIndex===i.getOptionIndex(c,b),"p-disabled":i.isOptionDisabled(y)}]),role:"option","aria-label":i.getOptionLabel(y),"aria-selected":i.isSelected(y),"aria-disabled":i.isOptionDisabled(y),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(c,b)),onClick:m=>i.onOptionSelect(m,y),onMousemove:m=>i.onOptionMouseMove(m,i.getOptionIndex(c,b))},[w(e.$slots,"option",{option:y,index:i.getOptionIndex(c,b)},()=>[E(S(i.getOptionLabel(y)),1)])],46,Ve)),[[h]])],64))),128)),n.filterValue&&(!g||g&&g.length===0)?(u(),f("li",ze,[w(e.$slots,"emptyfilter",{},()=>[E(S(i.emptyFilterMessageText),1)])])):!s.options||s.options&&s.options.length===0?(u(),f("li",De,[w(e.$slots,"empty",{},()=>[E(S(i.emptyMessageText),1)])])):I("",!0)],14,Le),!s.options||s.options&&s.options.length===0?(u(),f("span",Te,S(i.emptyMessageText),1)):I("",!0),v("span",Fe,S(i.selectedMessageText),1)]),_:2},[e.$slots.loader?{name:"loader",fn:B(({options:a})=>[w(e.$slots,"loader",{options:a})]),key:"0"}:void 0]),1040,["items","style","disabled"])],4),w(e.$slots,"footer",{value:s.modelValue,options:i.visibleOptions}),v("span",{ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[13]||(t[13]=(...a)=>i.onLastHiddenFocus&&i.onLastHiddenFocus(...a))},null,544)],16)):I("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],10,be)}function Be(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",s==="top"&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var Pe=`
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
`;Be(Pe);ge.render=Ee;var Ke={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const Me=["value"];function Ae(e,t,s,l,n,i){return u(),f("input",{class:k(["p-inputtext p-component",{"p-filled":i.filled}]),value:s.modelValue,onInput:t[0]||(t[0]=(...o)=>i.onInput&&i.onInput(...o))},null,42,Me)}Ke.render=Ae;export{ge as a,Y as b,ee as c,Ke as s};
