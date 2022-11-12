import{U as m,z as b,o as d,c as r,e as s,r as c,t as f,a as p,w as g,b as h,m as y,l as _,P as x,B as v}from"./index.a3389db2.js";import{R as w}from"./ripple.esm.17521115.js";var k={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:String},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return m()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]}},directives:{ripple:w}};const C={class:"p-panel-header"},B=["id"],I={class:"p-panel-icons"},S=["id","aria-label","aria-controls","aria-expanded"],D=["id","aria-labelledby"],j={class:"p-panel-content"};function E(e,a,l,i,t,n){const u=b("ripple");return d(),r("div",{class:h(n.containerClass)},[s("div",C,[c(e.$slots,"header",{},()=>[l.header?(d(),r("span",{key:0,id:n.ariaId+"_header",class:"p-panel-title"},f(l.header),9,B)):p("",!0)]),s("div",I,[c(e.$slots,"icons"),l.toggleable?g((d(),r("button",{key:0,id:n.ariaId+"_header",type:"button",role:"button",class:"p-panel-header-icon p-panel-toggler p-link","aria-label":l.toggleButtonProps||l.header,"aria-controls":n.ariaId+"_content","aria-expanded":!t.d_collapsed,onClick:a[0]||(a[0]=(...o)=>n.toggle&&n.toggle(...o)),onKeydown:a[1]||(a[1]=(...o)=>n.onKeyDown&&n.onKeyDown(...o))},[s("span",{class:h({"pi pi-minus":!t.d_collapsed,"pi pi-plus":t.d_collapsed})},null,2)],40,S)),[[u]]):p("",!0)])]),y(v,{name:"p-toggleable-content"},{default:_(()=>[g(s("div",{id:n.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":n.ariaId+"_header"},[s("div",j,[c(e.$slots,"default")])],8,D),[[x,!t.d_collapsed]])]),_:3})],2)}function N(e,a){a===void 0&&(a={});var l=a.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",l==="top"&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var K=`
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
`;N(K);k.render=E;export{k as s};
