import{U as m,R as _,H as y,a as d,b as r,e as o,v as p,M as c,I as b,z as h,y as g,f,J as v,S as B,T as C,K as w}from"./index.8ae8d52c.js";var I={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return m()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]},buttonAriaLabel(){return this.toggleButtonProps&&this.toggleButtonProps["aria-label"]?this.toggleButtonProps["aria-label"]:this.header}},directives:{ripple:_}};const x={class:"p-panel-header"},S=["id"],D={class:"p-panel-icons"},P=["id","aria-label","aria-controls","aria-expanded"],k=["id","aria-labelledby"],E={class:"p-panel-content"};function K(e,l,n,s,t,a){const u=y("ripple");return d(),r("div",{class:h(a.containerClass)},[o("div",x,[p(e.$slots,"header",{},()=>[n.header?(d(),r("span",{key:0,id:a.ariaId+"_header",class:"p-panel-title"},w(n.header),9,S)):g("",!0)]),o("div",D,[p(e.$slots,"icons"),n.toggleable?c((d(),r("button",b({key:0,id:a.ariaId+"_header",type:"button",role:"button",class:"p-panel-header-icon p-panel-toggler p-link","aria-label":a.buttonAriaLabel,"aria-controls":a.ariaId+"_content","aria-expanded":!t.d_collapsed,onClick:l[0]||(l[0]=(...i)=>a.toggle&&a.toggle(...i)),onKeydown:l[1]||(l[1]=(...i)=>a.onKeyDown&&a.onKeyDown(...i))},n.toggleButtonProps),[o("span",{class:h({"pi pi-minus":!t.d_collapsed,"pi pi-plus":t.d_collapsed})},null,2)],16,P)),[[u]]):g("",!0)])]),f(C,{name:"p-toggleable-content"},{default:v(()=>[c(o("div",{id:a.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":a.ariaId+"_header"},[o("div",E,[p(e.$slots,"default")])],8,k),[[B,!t.d_collapsed]])]),_:3})],2)}function N(e,l){l===void 0&&(l={});var n=l.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var T=`
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.p-panel-title {
    line-height: 1;
}
.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
`;N(T);I.render=K;export{I as s};
