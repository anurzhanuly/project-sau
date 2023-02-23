import{U as m,R as _,B as y,o as d,c as r,e as o,q as p,J as c,E as b,v as g,g as h,f,G as v,Y as B,T as C,H as w}from"./index.5bf35bb2.js";var x={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return m()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]},buttonAriaLabel(){return this.toggleButtonProps&&this.toggleButtonProps["aria-label"]?this.toggleButtonProps["aria-label"]:this.header}},directives:{ripple:_}};const I={class:"p-panel-header"},D=["id"],P={class:"p-panel-icons"},S=["id","aria-label","aria-controls","aria-expanded"],k=["id","aria-labelledby"],E={class:"p-panel-content"};function N(e,l,n,s,t,a){const u=y("ripple");return d(),r("div",{class:g(a.containerClass)},[o("div",I,[p(e.$slots,"header",{},()=>[n.header?(d(),r("span",{key:0,id:a.ariaId+"_header",class:"p-panel-title"},w(n.header),9,D)):h("",!0)]),o("div",P,[p(e.$slots,"icons"),n.toggleable?c((d(),r("button",b({key:0,id:a.ariaId+"_header",type:"button",role:"button",class:"p-panel-header-icon p-panel-toggler p-link","aria-label":a.buttonAriaLabel,"aria-controls":a.ariaId+"_content","aria-expanded":!t.d_collapsed,onClick:l[0]||(l[0]=(...i)=>a.toggle&&a.toggle(...i)),onKeydown:l[1]||(l[1]=(...i)=>a.onKeyDown&&a.onKeyDown(...i))},n.toggleButtonProps),[o("span",{class:g({"pi pi-minus":!t.d_collapsed,"pi pi-plus":t.d_collapsed})},null,2)],16,S)),[[u]]):h("",!0)])]),f(C,{name:"p-toggleable-content"},{default:v(()=>[c(o("div",{id:a.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":a.ariaId+"_header"},[o("div",E,[p(e.$slots,"default")])],8,k),[[B,!t.d_collapsed]])]),_:3})],2)}function T(e,l){l===void 0&&(l={});var n=l.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var A=`
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
`;T(A);x.render=N;export{x as s};
