import{o as s,c as r,n as J,r as L,a as b,b as C,d as S,t as x,e as o,_ as W,f as m,g as P,h as G,i as H,F as j,j as A,w as k,v as V,k as O,l as R,m as K,u as $,p as X,q as Y,s as Z,x as ee}from"./index.2890d579.js";import{u as te}from"./surveyStore.7c05da96.js";const ne=[{type:"checkbox",name:"\u0412\u0430\u0448 \u043F\u043E\u043B",title:"\u0412\u0430\u0448 \u043F\u043E\u043B",isRequired:!0,choices:["\u041C\u0443\u0436\u0441\u043A\u043E\u0439","\u0416\u0435\u043D\u0441\u043A\u0438\u0439"],maxSelectedChoices:1},{type:"text",name:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0412\u0430\u043C \u043F\u043E\u043B\u043D\u044B\u0445 \u043B\u0435\u0442?",title:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0412\u0430\u043C \u043F\u043E\u043B\u043D\u044B\u0445 \u043B\u0435\u0442?",defaultValue:35,isRequired:!0,inputType:"number",min:18,max:99},{type:"text",name:"\u0412\u0430\u0448 \u0440\u043E\u0441\u0442",title:"\u0412\u0430\u0448 \u0440\u043E\u0441\u0442",description:"\u0441\u043C",defaultValue:165,isRequired:!0,inputType:"number",min:70,max:220,step:1},{type:"text",name:"\u0412\u0430\u0448 \u0432\u0435\u0441",title:"\u0412\u0430\u0448 \u0432\u0435\u0441",description:"\u043A\u0433",defaultValue:70,isRequired:!0,inputType:"number",min:20,max:200,step:1},{type:"checkbox",name:"\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B?",title:"\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B?",isRequired:!0,choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"text",name:"\u041E\u0446\u0435\u043D\u0438\u0442\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u043F\u0440\u043E\u0441\u043D\u0438\u043A\u0430 \u043F\u043E 5 \u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u043A\u0430\u043B\u0435",inputType:"number",min:0,max:5,defaultValue:5}];var U={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const ae=["aria-valuenow"],le={key:0,class:"p-progressbar-label"},se={key:1,class:"p-progressbar-indeterminate-container"},ie=o("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1),ue=[ie];function re(d,t,e,a,n,c){return s(),r("div",{role:"progressbar",class:C(c.containerClass),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},[c.determinate?(s(),r("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:J(c.progressStyle)},[e.value!=null&&e.value!==0&&e.showValue?(s(),r("div",le,[L(d.$slots,"default",{},()=>[S(x(e.value+"%"),1)])])):b("",!0)],4)):b("",!0),c.indeterminate?(s(),r("div",se,ue)):b("",!0)],10,ae)}function oe(d,t){t===void 0&&(t={});var e=t.insertAt;if(!(!d||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",e==="top"&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=d:n.appendChild(document.createTextNode(d))}}var ve=`
.p-progressbar {
    position: relative;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
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
}
.p-progressbar-determinate .p-progressbar-label {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-progressbar-determinate .p-progressbar-value-animate {
    -webkit-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
}
.p-progressbar-indeterminate .p-progressbar-value::before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
0% {
        left: -35%;
        right: 100%;
}
60% {
        left: 100%;
        right: -90%;
}
100% {
        left: 100%;
        right: -90%;
}
}
@keyframes p-progressbar-indeterminate-anim {
0% {
        left: -35%;
        right: 100%;
}
60% {
        left: 100%;
        right: -90%;
}
100% {
        left: 100%;
        right: -90%;
}
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
0% {
        left: -200%;
        right: 100%;
}
60% {
        left: 107%;
        right: -8%;
}
100% {
        left: 107%;
        right: -8%;
}
}
@keyframes p-progressbar-indeterminate-anim-short {
0% {
        left: -200%;
        right: 100%;
}
60% {
        left: 107%;
        right: -8%;
}
100% {
        left: 107%;
        right: -8%;
}
}
`;oe(ve);U.render=re;const de=d=>(X("data-v-6a1a993e"),d=d(),Y(),d),ce={class:"section-test"},pe={class:"test-wrapper"},me={class:"test-title"},be={class:"test-description"},he={key:0},fe=["for"],ye=["id","value"],ge={key:0,class:"label"},_e={key:1,class:"input-wrapper"},ke={key:2},xe=["for"],we=["id","value"],Ve={key:3},Ce={class:"number-input-container"},Se={class:"number-input"},Ie=["min","max"],Te=de(()=>o("p",{class:"input-help"},"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0446\u0438\u0444\u0440\u0443 \u0434\u043B\u044F \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0432\u0432\u043E\u0434\u0430",-1)),Ne={key:0,class:"test-buttons"},ze=["disabled"],Be=["disabled"],qe={key:1,class:"test-buttons"},je=["disabled"],Ae=["disabled"],Oe={__name:"SurveyView",setup(d){const t=m(ne),e=m(0),a=m([]),n=m({}),c=m(t.value[0].min),g=m(t.value[0].max),_=m(""),y=m(""),v=m(t.value[0].defaultValue),I=m(null),E=te();P(()=>{const p=()=>{I.value=window.innerWidth};window.addEventListener("resize",p),p()});const M=G(()=>(e.value*100/t.value.length).toFixed(1)),Q=()=>{c.value=t.value[e.value].min,g.value=t.value[e.value].max,v.value=t.value[e.value].defaultValue},D=()=>{v.value>g.value&&(v.value=g.value),v.value<c.value&&(v.value=c.value)},T=()=>{t.value[e.value].choices&&t.value[e.value].maxSelectedChoices===1?n.value[t.value[e.value].name]=[a.value].flat(1/0):t.value[e.value].choices&&t.value[e.value].maxSelectedChoices>1?(n.value[t.value[e.value].name]=[...a.value],y.value&&(n.value[t.value[e.value].name].push(y.value),y.value="")):t.value[e.value].inputType==="number"?n.value[t.value[e.value].name]=[`${v.value}`]:(n.value[t.value[e.value].name]=[`${_.value}`],_.value="")},F=()=>{const p={},i=[],h=t.value[e.value].visibleIf.split(" "),u=h.map((l,f)=>{if(l==="{"){const w=h.indexOf("}",f);return h.slice(f+1,w).join(" ")}if(l==="["){const w=h.indexOf("]",f);return h.slice(f+1,w).join(" ").slice(1,-1)}}).filter(l=>l);for(let l=0;l<u.length;l++)p[u[l]]=u[l+1],l++;for(let l in p)n.value[l]&&n.value[l].includes(p[l])?i.push(!0):i.push(!1);return!i.includes(!1)},N=()=>{F()||(e.value+=1,delete n.value[t.value[e.value].name],t.value[e.value].visibleIf&&N())},z=()=>{T(),e.value+=1,t.value[e.value].visibleIf&&N(),Number.isInteger(t.value[e.value].min)&&Q(),n.value[t.value[e.value].name]?a.value=[...n.value[t.value[e.value].name]]:a.value=[]},B=()=>{for(;!n.value[t.value[e.value-1].name];)e.value-=1;a.value=[...n.value[t.value[e.value-1].name]],v.value=+n.value[t.value[e.value-1].name][0],_.value=n.value[t.value[e.value-1].name][0],e.value-=1},q=()=>{T();const p=JSON.parse(JSON.stringify(n.value));E.postAnswersData({answers:p})};return(p,i)=>{const h=H("router-link");return s(),r("section",ce,[o("div",pe,[o("p",me,x(t.value[e.value].name),1),o("p",be,x(t.value[e.value].description),1),t.value[e.value].choices&&t.value[e.value].maxSelectedChoices>1?(s(),r("div",he,[(s(!0),r(j,null,A(t.value[e.value].choices,(u,l)=>(s(),r("label",{for:l,key:l,class:C(["label",{checked:a.value.includes(u)}])},[k(o("input",{id:l,type:"checkbox",class:"hidden",value:u,"onUpdate:modelValue":i[0]||(i[0]=f=>a.value=f)},null,8,ye),[[Z,a.value]]),S(" "+x(u),1)],10,fe))),128)),t.value[e.value].hasOther?(s(),r("label",ge,[k(o("input",{class:"text-input",placeholder:"\u0414\u0440\u0443\u0433\u043E\u0435",type:"text","onUpdate:modelValue":i[1]||(i[1]=u=>y.value=u)},null,512),[[V,y.value]])])):b("",!0)])):b("",!0),t.value[e.value].inputType!=="number"&&t.value[e.value].type==="text"?(s(),r("div",_e,[k(o("input",{class:"text-input",placeholder:"\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043C\u0435\u043D\u044F",type:"text","onUpdate:modelValue":i[2]||(i[2]=u=>_.value=u)},null,512),[[V,_.value]])])):b("",!0),t.value[e.value].choices&&t.value[e.value].maxSelectedChoices===1?(s(),r("div",ke,[(s(!0),r(j,null,A(t.value[e.value].choices,(u,l)=>(s(),r("label",{for:l,key:l,class:C(["label",{checked:a.value.includes(u)}])},[k(o("input",{id:l,type:"radio",class:"hidden",value:u,"onUpdate:modelValue":i[3]||(i[3]=f=>a.value=f)},null,8,we),[[ee,a.value]]),S(" "+x(u),1)],10,xe))),128))])):b("",!0),t.value[e.value].inputType==="number"?(s(),r("div",Ve,[o("div",Ce,[o("button",{class:"button-decrement btn-input",onClick:i[4]||(i[4]=u=>v.value>c.value?v.value-=1:null)}),o("div",Se,[k(o("input",{type:"number",min:c.value,max:g.value,"onUpdate:modelValue":i[5]||(i[5]=u=>v.value=u),onChange:i[6]||(i[6]=u=>D())},null,40,Ie),[[V,v.value]])]),o("button",{class:"button-increment btn-input",onClick:i[7]||(i[7]=u=>v.value<g.value?v.value+=1:null)})]),Te])):b("",!0)]),I.value>770?(s(),r("div",Ne,[e.value>0?(s(),r("button",{key:0,class:"btn prev-btn",onClick:B}," \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ")):b("",!0),e.value<t.value.length-1?(s(),r("button",{key:1,class:"btn",onClick:z,disabled:!a.value.length&&t.value[e.value].choices&&y.value.length===0}," \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ",8,ze)):(s(),O(h,{key:2,to:"/result"},{default:R(()=>[o("button",{class:"btn",onClick:q,disabled:!a.value.length&&t.value[e.value].choices}," \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B ",8,Be)]),_:1}))])):(s(),r("div",qe,[e.value>0?(s(),r("button",{key:0,class:"arrow prev-btn",onClick:B})):b("",!0),e.value<t.value.length-1?(s(),r("button",{key:1,class:"arrow",onClick:z,disabled:!a.value.length&&t.value[e.value].choices&&y.value.length===0},null,8,je)):(s(),O(h,{key:2,to:"/result"},{default:R(()=>[o("button",{class:"btn mobile-btn",onClick:q,disabled:!a.value.length&&t.value[e.value].choices}," \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B ",8,Ae)]),_:1}))])),K($(U),{value:+$(M)},null,8,["value"])])}}};var Ue=W(Oe,[["__scopeId","data-v-6a1a993e"]]);export{Ue as default};
