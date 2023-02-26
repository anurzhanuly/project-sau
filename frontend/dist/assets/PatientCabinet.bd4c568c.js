import{U as A,O as d,D as o,R as U,E as v,G as O,o as c,c as u,F as b,z as D,x as w,y as m,e as h,$ as p,I as x,L as k,g as I,J as C,a2 as S,f as _,a0 as L,T as F,d as T,r as z,u as G,_ as j}from"./index.9da81139.js";var V={name:"PanelMenuSub",emits:["item-toggle"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},template:{type:Function,default:null},activeItemPath:{type:Object,default:null},exact:{type:Boolean,default:!0}},methods:{getItemId(e){return`${this.panelId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,a){return e&&e.item?d.getItemValue(e.item[t],a):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return d.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-toggle",{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle(e){this.$emit("item-toggle",e)},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getItemToggleIconClass(e){return["p-submenu-icon",this.isItemActive(e)?"pi pi-fw pi-chevron-down":"pi pi-fw pi-chevron-right"]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},directives:{ripple:U}};const R={class:"p-submenu-list"},q=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset"],J=["onClick"],W=["href","onClick"],Q={class:"p-menuitem-text"},X=["href","target"],Y={class:"p-menuitem-text"},Z={class:"p-toggleable-content"};function $(e,t,a,s,l,i){const f=v("router-link"),y=v("PanelMenuSub",!0),r=O("ripple");return c(),u("ul",R,[(c(!0),u(b,null,D(a.items,(n,g)=>(c(),u(b,{key:i.getItemKey(n)},[i.isItemVisible(n)&&!i.getItemProp(n,"separator")?(c(),u("li",{key:0,id:i.getItemId(n),style:w(i.getItemProp(n,"style")),class:m(i.getItemClass(n)),role:"treeitem","aria-label":i.getItemLabel(n),"aria-expanded":i.isItemGroup(n)?i.isItemActive(n):void 0,"aria-level":a.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(g)},[h("div",{class:"p-menuitem-content",onClick:P=>i.onItemClick(P,n)},[a.template?(c(),p(S(a.template),{key:1,item:n.item},null,8,["item"])):(c(),u(b,{key:0},[i.getItemProp(n,"to")&&!i.isItemDisabled(n)?(c(),p(f,{key:0,to:i.getItemProp(n,"to"),custom:""},{default:x(({navigate:P,href:E,isActive:H,isExactActive:K})=>[k((c(),u("a",{href:E,class:m(i.getItemActionClass(n,{isActive:H,isExactActive:K})),tabindex:"-1","aria-hidden":"true",onClick:M=>i.onItemActionClick(M,P)},[i.getItemProp(n,"icon")?(c(),u("span",{key:0,class:m(i.getItemIconClass(n))},null,2)):I("",!0),h("span",Q,C(i.getItemLabel(n)),1)],10,W)),[[r]])]),_:2},1032,["to"])):k((c(),u("a",{key:1,href:i.getItemProp(n,"url"),class:m(i.getItemActionClass(n)),target:i.getItemProp(n,"target"),tabindex:"-1","aria-hidden":"true"},[i.isItemGroup(n)?(c(),u("span",{key:0,class:m(i.getItemToggleIconClass(n))},null,2)):I("",!0),i.getItemProp(n,"icon")?(c(),u("span",{key:1,class:m(i.getItemIconClass(n))},null,2)):I("",!0),h("span",Y,C(i.getItemLabel(n)),1)],10,X)),[[r]])],64))],8,J),_(F,{name:"p-toggleable-content"},{default:x(()=>[k(h("div",Z,[i.isItemVisible(n)&&i.isItemGroup(n)?(c(),p(y,{key:0,id:i.getItemId(n)+"_list",role:"group",panelId:a.panelId,focusedItemId:a.focusedItemId,items:n.items,level:a.level+1,template:a.template,activeItemPath:a.activeItemPath,exact:a.exact,onItemToggle:i.onItemToggle},null,8,["id","panelId","focusedItemId","items","level","template","activeItemPath","exact","onItemToggle"])):I("",!0)],512),[[L,i.isItemActive(n)]])]),_:2},1024)],14,q)):I("",!0),i.isItemVisible(n)&&i.getItemProp(n,"separator")?(c(),u("li",{key:1,style:w(i.getItemProp(n,"style")),class:m(i.getSeparatorItemClass(n)),role:"separator"},null,6)):I("",!0)],64))),128))])}V.render=$;var N={name:"PanelMenuList",emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},template:{type:Function,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0}},searchTimeout:null,searchValue:null,data(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys(e){this.autoUpdateActiveItemPath(e)}},mounted(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp(e,t){return e&&e.item?d.getItemValue(e.item[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.parentKey)},isItemGroup(e){return d.isNotEmpty(e.items)},onFocus(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&d.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey(e){const t=d.isNotEmpty(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey(e){const t=d.isNotEmpty(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey(e){d.isNotEmpty(this.focusedItem)&&(this.activeItemPath.some(a=>a.key===this.focusedItem.key)?this.activeItemPath=this.activeItemPath.filter(a=>a.key!==this.focusedItem.key):this.focusedItem=d.isNotEmpty(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault())},onArrowRightKey(e){d.isNotEmpty(this.focusedItem)&&(this.isItemGroup(this.focusedItem)&&(this.activeItemPath.some(s=>s.key===this.focusedItem.key)?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==this.focusedItem.parentKey),this.activeItemPath.push(this.focusedItem))),e.preventDefault())},onHomeKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey(e){if(d.isNotEmpty(this.focusedItem)){const t=o.findSingle(this.$el,`li[id="${`${this.focusedItemId}`}"]`),a=t&&(o.findSingle(t,".p-menuitem-link")||o.findSingle(t,"a,button"));a?a.click():t&&t.click()}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onItemToggle(e){const{processedItem:t,expanded:a}=e;this.expandedKeys?this.$emit("item-toggle",{item:t.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==t.parentKey),a&&this.activeItemPath.push(t)),this.focusedItem=t,o.focus(this.$el)},isElementInPanel(e,t){const a=e.currentTarget.closest(".p-panelmenu-panel");return a&&a.contains(t)},isItemMatched(e){return this.isValidItem(e)&&this.getItemLabel(e).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))},isVisibleItem(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem(e){return!!e&&!this.isItemDisabled(e)},findFirstItem(){return this.visibleItems.find(e=>this.isValidItem(e))},findLastItem(){return d.findLast(this.visibleItems,e=>this.isValidItem(e))},findNextItem(e){const t=this.visibleItems.findIndex(s=>s.key===e.key);return(t<this.visibleItems.length-1?this.visibleItems.slice(t+1).find(s=>this.isValidItem(s)):void 0)||e},findPrevItem(e){const t=this.visibleItems.findIndex(s=>s.key===e.key);return(t>0?d.findLast(this.visibleItems.slice(0,t),s=>this.isValidItem(s)):void 0)||e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let a=null,s=!1;if(d.isNotEmpty(this.focusedItem)){const l=this.visibleItems.findIndex(i=>i.key===this.focusedItem.key);a=this.visibleItems.slice(l).find(i=>this.isItemMatched(i)),a=d.isEmpty(a)?this.visibleItems.slice(0,l).find(i=>this.isItemMatched(i)):a}else a=this.visibleItems.find(l=>this.isItemMatched(l));return d.isNotEmpty(a)&&(s=!0),d.isEmpty(a)&&d.isEmpty(this.focusedItem)&&(a=this.findFirstItem()),d.isNotEmpty(a)&&this.changeFocusedItem({originalEvent:e,processedItem:a,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s},changeFocusedItem(e){const{originalEvent:t,processedItem:a,focusOnNext:s,selfCheck:l,allowHeaderFocus:i=!0}=e;d.isNotEmpty(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):i&&this.$emit("header-focus",{originalEvent:t,focusOnNext:s,selfCheck:l})},scrollInView(){const e=o.findSingle(this.$el,`li[id="${`${this.focusedItemId}`}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath(e){this.activeItemPath=Object.entries(e||{}).reduce((t,[a,s])=>{if(s){const l=this.findProcessedItemByItemKey(a);l&&t.push(l)}return t},[])},findProcessedItemByItemKey(e,t,a=0){if(t=t||a===0&&this.processedItems,!t)return null;for(let s=0;s<t.length;s++){const l=t[s];if(this.getItemProp(l,"key")===e)return l;const i=this.findProcessedItemByItemKey(e,l.items,a+1);if(i)return i}},createProcessedItems(e,t=0,a={},s=""){const l=[];return e&&e.forEach((i,f)=>{const y=(s!==""?s+"_":"")+f,r={item:i,index:f,level:t,key:y,parent:a,parentKey:s};r.items=this.createProcessedItems(i.items,t+1,r,y),l.push(r)}),l},flatItems(e,t=[]){return e&&e.forEach(a=>{this.isVisibleItem(a)&&(t.push(a),this.flatItems(a.items,t))}),t}},computed:{processedItems(){return this.createProcessedItems(this.items||[])},visibleItems(){return this.flatItems(this.processedItems)},focusedItemId(){return d.isNotEmpty(this.focusedItem)?`${this.panelId}_${this.focusedItem.key}`:null}},components:{PanelMenuSub:V}};function ee(e,t,a,s,l,i){const f=v("PanelMenuSub");return c(),p(f,{id:a.panelId+"_list",class:"p-panelmenu-root-list",role:"tree",tabindex:-1,"aria-activedescendant":l.focused?i.focusedItemId:void 0,panelId:a.panelId,focusedItemId:l.focused?i.focusedItemId:void 0,items:i.processedItems,template:a.template,activeItemPath:l.activeItemPath,exact:a.exact,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle},null,8,["id","aria-activedescendant","panelId","focusedItemId","items","template","activeItemPath","exact","onFocus","onBlur","onKeydown","onItemToggle"])}N.render=ee;var B={name:"PanelMenu",emits:["update:expandedKeys","panel-open","panel-close"],props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},data(){return{id:this.$attrs.id,activeItem:null}},watch:{"$attrs.id":function(e){this.id=e||A()}},mounted(){this.id=this.id||A()},methods:{getItemProp(e,t){return e?d.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:d.equals(e,this.activeItem)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},getPanelId(e){return`${this.id}_${e}`},getPanelKey(e){return this.getPanelId(e)},getHeaderId(e){return`${this.getPanelId(e)}_header`},getContentId(e){return`${this.getPanelId(e)}_content`},onHeaderClick(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),o.focus(e.currentTarget)},onHeaderKeyDown(e,t){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"Space":this.onHeaderEnterKey(e,t);break}},onHeaderArrowDownKey(e){const t=o.hasClass(e.currentTarget,"p-highlight")?o.findSingle(e.currentTarget.nextElementSibling,".p-panelmenu-root-list"):null;t?o.focus(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey(e){const t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=o.hasClass(t,"p-highlight")?o.findSingle(t.nextElementSibling,".p-panelmenu-root-list"):null;a?o.focus(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey(e,t){const a=o.findSingle(e.currentTarget,".p-panelmenu-header-action");a?a.click():this.onHeaderClick(e,t),e.preventDefault()},onHeaderActionClick(e,t){t&&t(e)},findNextHeader(e,t=!1){const a=t?e:e.nextElementSibling,s=o.findSingle(a,".p-panelmenu-header");return s?o.hasClass(s,"p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader(e,t=!1){const a=t?e:e.previousElementSibling,s=o.findSingle(a,".p-panelmenu-header");return s?o.hasClass(s,"p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader(e){const{originalEvent:t,focusOnNext:a,selfCheck:s}=e,l=t.currentTarget.closest(".p-panelmenu-panel"),i=s?o.findSingle(l,".p-panelmenu-header"):a?this.findNextHeader(l):this.findPrevHeader(l);i?this.changeFocusedHeader(t,i):a?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem(e,t,a=!1){if(!this.isItemDisabled(t)){const s=this.isItemActive(t),l=s?"panel-close":"panel-open";this.activeItem=a?t:this.activeItem&&d.equals(t,this.activeItem)?null:t,this.changeExpandedKeys({item:t,expanded:!s}),this.$emit(l,{originalEvent:e,item:t})}},changeExpandedKeys({item:e,expanded:t=!1}){if(this.expandedKeys){let a={...this.expandedKeys};t?a[e.key]=!0:delete a[e.key],this.$emit("update:expandedKeys",a)}},changeFocusedHeader(e,t){t&&o.focus(t)},getPanelClass(e){return["p-panelmenu-panel",this.getItemProp(e,"class")]},getHeaderClass(e){return["p-panelmenu-header",this.getItemProp(e,"headerClass"),{"p-highlight":this.isItemActive(e),"p-disabled":this.isItemDisabled(e)}]},getHeaderActionClass(e,t){return["p-panelmenu-header-action",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getHeaderIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getHeaderToggleIconClass(e){return["p-submenu-icon",this.isItemActive(e)?"pi pi-chevron-down":"pi pi-chevron-right"]}},components:{PanelMenuList:N}};const te=["id"],ie=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown"],ae={class:"p-panelmenu-header-content"},se=["href","onClick"],ne={class:"p-menuitem-text"},le=["href"],re={class:"p-menuitem-text"},ce=["id","aria-labelledby"],de={key:0,class:"p-panelmenu-content"};function ue(e,t,a,s,l,i){const f=v("router-link"),y=v("PanelMenuList");return c(),u("div",{id:l.id,class:"p-panelmenu p-component"},[(c(!0),u(b,null,D(a.model,(r,n)=>(c(),u(b,{key:i.getPanelKey(n)},[i.isItemVisible(r)?(c(),u("div",{key:0,style:w(i.getItemProp(r,"style")),class:m(i.getPanelClass(r))},[h("div",{id:i.getHeaderId(n),class:m(i.getHeaderClass(r)),tabindex:i.isItemDisabled(r)?-1:a.tabindex,role:"button","aria-label":i.getItemLabel(r),"aria-expanded":i.isItemActive(r),"aria-controls":i.getContentId(n),"aria-disabled":i.isItemDisabled(r),onClick:g=>i.onHeaderClick(g,r),onKeydown:g=>i.onHeaderKeyDown(g,r)},[h("div",ae,[e.$slots.item?(c(),p(S(e.$slots.item),{key:1,item:r},null,8,["item"])):(c(),u(b,{key:0},[i.getItemProp(r,"to")&&!i.isItemDisabled(r)?(c(),p(f,{key:0,to:i.getItemProp(r,"to"),custom:""},{default:x(({navigate:g,href:P,isActive:E,isExactActive:H})=>[h("a",{href:P,class:m(i.getHeaderActionClass(r,{isActive:E,isExactActive:H})),tabindex:-1,onClick:K=>i.onHeaderActionClick(K,g)},[i.getItemProp(r,"icon")?(c(),u("span",{key:0,class:m(i.getHeaderIconClass(r))},null,2)):I("",!0),h("span",ne,C(i.getItemLabel(r)),1)],10,se)]),_:2},1032,["to"])):(c(),u("a",{key:1,href:i.getItemProp(r,"url"),class:m(i.getHeaderActionClass(r)),tabindex:-1},[i.getItemProp(r,"items")?(c(),u("span",{key:0,class:m(i.getHeaderToggleIconClass(r))},null,2)):I("",!0),i.getItemProp(r,"icon")?(c(),u("span",{key:1,class:m(i.getHeaderIconClass(r))},null,2)):I("",!0),h("span",re,C(i.getItemLabel(r)),1)],10,le))],64))])],42,ie),_(F,{name:"p-toggleable-content"},{default:x(()=>[k(h("div",{id:i.getContentId(n),class:"p-toggleable-content",role:"region","aria-labelledby":i.getHeaderId(n)},[i.getItemProp(r,"items")?(c(),u("div",de,[_(y,{panelId:i.getPanelId(n),items:i.getItemProp(r,"items"),template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,exact:a.exact},null,8,["panelId","items","template","expandedKeys","onItemToggle","onHeaderFocus","exact"])])):I("",!0)],8,ce),[[L,i.isItemActive(r)]])]),_:2},1024)],6)):I("",!0)],64))),128))],8,te)}function oe(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a==="top"&&s.firstChild?s.insertBefore(l,s.firstChild):s.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var me=`
.p-panelmenu .p-panelmenu-header-action {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}
.p-panelmenu .p-panelmenu-header-action:focus {
    z-index: 1;
}
.p-panelmenu .p-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-panelmenu .p-menuitem-link {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}
.p-panelmenu .p-menuitem-text {
    line-height: 1;
}
`;oe(me);B.render=ue;const he=T({__name:"PatientSidebar",setup(e){const t=z([{label:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",icon:"pi pi-fw pi-home",url:"/patientcab/main"},{label:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",icon:"pi pi-fw pi-pencil",url:"/patientcab/settings"}]);return(a,s)=>(c(),p(G(B),{model:t.value},null,8,["model"]))}}),Ie={class:"section-patient"},fe={class:"section-sidebar"},ge={class:"section-content"},pe=T({__name:"PatientCabinet",setup(e){return(t,a)=>{const s=v("router-view");return c(),u("div",Ie,[h("div",fe,[_(he)]),h("div",ge,[_(s)])])}}});const be=j(pe,[["__scopeId","data-v-6a03009a"]]);export{be as default};
