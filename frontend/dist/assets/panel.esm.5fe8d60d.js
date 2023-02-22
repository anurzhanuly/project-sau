import{U as m,R as _,M as y,f as d,g as r,l as i,C as p,Q as c,N as b,G as g,E as h,i as f,j as v,X as C,T as B,t as w}from"./index.02574d50.js";var x={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return m()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]},buttonAriaLabel(){return this.toggleButtonProps&&this.toggleButtonProps["aria-label"]?this.toggleButtonProps["aria-label"]:this.header}},directives:{ripple:_}};const I={class:"p-panel-header"},D=["id"],P={class:"p-panel-icons"},S=["id","aria-label","aria-controls","aria-expanded"],k=["id","aria-labelledby"],E={class:"p-panel-content"};function N(e,l,n,s,t,a){const u=y("ripple");return d(),r("div",{class:g(a.containerClass)},[i("div",I,[p(e.$slots,"header",{},()=>[n.header?(d(),r("span",{key:0,id:a.ariaId+"_header",class:"p-panel-title"},w(n.header),9,D)):h("",!0)]),i("div",P,[p(e.$slots,"icons"),n.toggleable?c((d(),r("button",b({key:0,id:a.ariaId+"_header",type:"button",role:"button",class:"p-panel-header-icon p-panel-toggler p-link","aria-label":a.buttonAriaLabel,"aria-controls":a.ariaId+"_content","aria-expanded":!t.d_collapsed,onClick:l[0]||(l[0]=(...o)=>a.toggle&&a.toggle(...o)),onKeydown:l[1]||(l[1]=(...o)=>a.onKeyDown&&a.onKeyDown(...o))},n.toggleButtonProps),[i("span",{class:g({"pi pi-minus":!t.d_collapsed,"pi pi-plus":t.d_collapsed})},null,2)],16,S)),[[u]]):h("",!0)])]),f(B,{name:"p-toggleable-content"},{default:v(()=>[c(i("div",{id:a.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":a.ariaId+"_header"},[i("div",E,[p(e.$slots,"default")])],8,k),[[C,!t.d_collapsed]])]),_:3})],2)}function T(e,l){l===void 0&&(l={});var n=l.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var j=`
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
`;T(j);x.render=N;export{x as s};
