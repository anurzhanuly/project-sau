import{U as m,B as f,o as d,c as p,e as i,r as o,t as b,a as c,w as u,b as h,m as y,l as _,M as v,T as x,D as k,k as w,N as B,P as C}from"./index.13f7c679.js";import{R as D}from"./ripple.esm.5d646a7b.js";var S={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:String},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}},computed:{ariaId(){return m()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]}},directives:{ripple:D}};const T={class:"p-panel-header"},I=["id"],E={class:"p-panel-icons"},N=["id","aria-label","aria-controls","aria-expanded"],j=["id","aria-labelledby"],P={class:"p-panel-content"};function K(e,n,l,s,t,a){const g=f("ripple");return d(),p("div",{class:h(a.containerClass)},[i("div",T,[o(e.$slots,"header",{},()=>[l.header?(d(),p("span",{key:0,id:a.ariaId+"_header",class:"p-panel-title"},b(l.header),9,I)):c("",!0)]),i("div",E,[o(e.$slots,"icons"),l.toggleable?u((d(),p("button",{key:0,id:a.ariaId+"_header",type:"button",role:"button",class:"p-panel-header-icon p-panel-toggler p-link","aria-label":l.toggleButtonProps||l.header,"aria-controls":a.ariaId+"_content","aria-expanded":!t.d_collapsed,onClick:n[0]||(n[0]=(...r)=>a.toggle&&a.toggle(...r)),onKeydown:n[1]||(n[1]=(...r)=>a.onKeyDown&&a.onKeyDown(...r))},[i("span",{class:h({"pi pi-minus":!t.d_collapsed,"pi pi-plus":t.d_collapsed})},null,2)],40,N)),[[g]]):c("",!0)])]),y(x,{name:"p-toggleable-content"},{default:_(()=>[u(i("div",{id:a.ariaId+"_content",class:"p-toggleable-content",role:"region","aria-labelledby":a.ariaId+"_header"},[i("div",P,[o(e.$slots,"default")])],8,j),[[v,!t.d_collapsed]])]),_:3})],2)}function V(e,n){n===void 0&&(n={});var l=n.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",l==="top"&&s.firstChild?s.insertBefore(t,s.firstChild):s.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var z=`
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
`;V(z);S.render=K;var A={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=k.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function O(e,n,l,s,t,a){return a.inline?o(e.$slots,"default",{key:0}):t.mounted?(d(),w(B,{key:1,to:l.appendTo},[o(e.$slots,"default")],8,["to"])):c("",!0)}A.render=O;var q=C();export{q as O,S as a,A as s};
