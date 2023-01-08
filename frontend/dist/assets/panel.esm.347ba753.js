import{U as m,R as b,k as f,o as d,a as r,b as s,l as c,m as p,n as g,i as h,e as y,w as _,v as x,T as v,t as k}from"./index.7174893f.js";var w={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:String},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return m()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]}},directives:{ripple:b}};const C={class:"p-panel-header"},B=["id"],I={class:"p-panel-icons"},S=["id","aria-label","aria-controls","aria-expanded"],D=["id","aria-labelledby"],j={class:"p-panel-content"};function E(e,a,l,i,t,n){const u=f("ripple");return d(),r("div",{class:g(n.containerClass)},[s("div",C,[c(e.$slots,"header",{},()=>[l.header?(d(),r("span",{key:0,id:n.ariaId+"_header",class:"p-panel-title"},k(l.header),9,B)):h("",!0)]),s("div",I,[c(e.$slots,"icons"),l.toggleable?p((d(),r("button",{key:0,id:n.ariaId+"_header",type:"button",role:"button",class:"p-panel-header-icon p-panel-toggler p-link","aria-label":l.toggleButtonProps||l.header,"aria-controls":n.ariaId+"_content","aria-expanded":!t.d_collapsed,onClick:a[0]||(a[0]=(...o)=>n.toggle&&n.toggle(...o)),onKeydown:a[1]||(a[1]=(...o)=>n.onKeyDown&&n.onKeyDown(...o))},[s("span",{class:g({"pi pi-minus":!t.d_collapsed,"pi pi-plus":t.d_collapsed})},null,2)],40,S)),[[u]]):h("",!0)])]),y(v,{name:"p-toggleable-content"},{default:_(()=>[p(s("div",{id:n.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":n.ariaId+"_header"},[s("div",j,[c(e.$slots,"default")])],8,D),[[x,!t.d_collapsed]])]),_:3})],2)}function N(e,a){a===void 0&&(a={});var l=a.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",l==="top"&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var T=`
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
`;N(T);w.render=E;export{w as s};