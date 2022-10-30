import{o as s,c as r,n as J,r as L,a as b,b as V,d as S,t as x,e as o,_ as W,f as m,g as P,h as G,i as H,F as B,j,w as k,v as C,k as A,l as O,m as K,u as $,p as X,q as Y,s as Z,x as ee}from"./index.969ca9e7.js";import{u as te}from"./surveyStore.757459c3.js";const ae=[{type:"checkbox",name:"\u0412\u0430\u0448 \u043F\u043E\u043B",title:"\u0412\u0430\u0448 \u043F\u043E\u043B",isRequired:!0,choices:["\u041C\u0443\u0436\u0441\u043A\u043E\u0439","\u0416\u0435\u043D\u0441\u043A\u0438\u0439"],maxSelectedChoices:1},{type:"text",name:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0412\u0430\u043C \u043F\u043E\u043B\u043D\u044B\u0445 \u043B\u0435\u0442?",title:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0412\u0430\u043C \u043F\u043E\u043B\u043D\u044B\u0445 \u043B\u0435\u0442?",defaultValue:35,isRequired:!0,inputType:"number",min:18,max:99},{type:"text",name:"\u0412\u0430\u0448 \u0440\u043E\u0441\u0442",title:"\u0412\u0430\u0448 \u0440\u043E\u0441\u0442",description:"\u0441\u043C",defaultValue:165,isRequired:!0,inputType:"number",min:70,max:220,step:1},{type:"text",name:"\u0412\u0430\u0448 \u0432\u0435\u0441",title:"\u0412\u0430\u0448 \u0432\u0435\u0441",description:"\u043A\u0433",defaultValue:70,isRequired:!0,inputType:"number",min:20,max:200,step:1},{type:"checkbox",name:"\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B?",title:"\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B?",isRequired:!0,choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"text",name:"\u041A\u0430\u043A\u0438\u0435 \u0443 \u0412\u0430\u0441 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0436\u0430\u043B\u043E\u0431\u044B?",visibleIf:"{ \u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B? } = [ '\u0414\u0430' ]",title:"\u041A\u0430\u043A\u0438\u0435 \u0443 \u0412\u0430\u0441 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0436\u0430\u043B\u043E\u0431\u044B?",description:"\u0420\u0430\u0441\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 2-3 \u0444\u0440\u0430\u0437\u0430\u0445 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0431\u043E\u043B\u0438\u0442 \u0433\u043E\u043B\u043E\u0432\u0430, \u0442\u043E\u0448\u043D\u0438\u0442)",isRequired:!0},{type:"checkbox",name:"\u041D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u043A\u0430\u043A\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0412\u044B \u0438\u0441\u043F\u044B\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0435 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u044B?",visibleIf:"{ \u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B? } = [ '\u0414\u0430' ]",title:"\u041D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u043A\u0430\u043A\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0412\u044B \u0438\u0441\u043F\u044B\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0435 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u044B?",isRequired:!0,choices:["\u0414\u0435\u043D\u044C","\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043D\u0435\u0439","\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u0434\u0435\u043B\u044C","\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u0441\u044F\u0446\u0435\u0432","\u041F\u043E\u043B\u0433\u043E\u0434\u0430","\u0413\u043E\u0434","\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"\u0421\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043B\u0438 \u0412\u0430\u043C \u043B\u0443\u0447\u0448\u0435?",visibleIf:"{ \u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B? } = [ '\u0414\u0430' ]",choices:["\u041B\u0443\u0447\u0448\u0435","\u0425\u0443\u0436\u0435","\u0422\u0430\u043A \u0436\u0435"],maxSelectedChoices:1},{type:"checkbox",name:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u0438\u0441\u0442\u043E\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0435 (\u0432\u0435\u0440\u0445\u043D\u0435\u0435) \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435",title:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u0438\u0441\u0442\u043E\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0435 (\u0432\u0435\u0440\u0445\u043D\u0435\u0435) \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435",description:"\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 120/80 - \u044D\u0442\u043E 120",isRequired:!0,choices:["<100","100-119","120-129","130-139","140-149","150-159","\u0411\u043E\u043B\u044C\u0448\u0435 160","\u041D\u0435 \u0437\u043D\u0430\u044E"],maxSelectedChoices:1},{type:"text",name:"\u041E\u0446\u0435\u043D\u0438\u0442\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u043F\u0440\u043E\u0441\u043D\u0438\u043A\u0430 \u043F\u043E 5 \u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u043A\u0430\u043B\u0435",inputType:"number",min:0,max:5,defaultValue:5}];var U={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const ne=["aria-valuenow"],le={key:0,class:"p-progressbar-label"},se={key:1,class:"p-progressbar-indeterminate-container"},ie=o("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1),ue=[ie];function re(c,t,e,n,a,d){return s(),r("div",{role:"progressbar",class:V(d.containerClass),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},[d.determinate?(s(),r("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:J(d.progressStyle)},[e.value!=null&&e.value!==0&&e.showValue?(s(),r("div",le,[L(c.$slots,"default",{},()=>[S(x(e.value+"%"),1)])])):b("",!0)],4)):b("",!0),d.indeterminate?(s(),r("div",se,ue)):b("",!0)],10,ne)}function oe(c,t){t===void 0&&(t={});var e=t.insertAt;if(!(!c||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",e==="top"&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c))}}var ve=`
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
`;oe(ve);U.render=re;const ce=c=>(X("data-v-6a1a993e"),c=c(),Y(),c),de={class:"section-test"},pe={class:"test-wrapper"},me={class:"test-title"},be={class:"test-description"},he={key:0},fe=["for"],ye=["id","value"],ge={key:0,class:"label"},_e={key:1,class:"input-wrapper"},ke={key:2},xe=["for"],we=["id","value"],Ce={key:3},Ve={class:"number-input-container"},Se={class:"number-input"},Ie=["min","max"],Te=ce(()=>o("p",{class:"input-help"},"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0446\u0438\u0444\u0440\u0443 \u0434\u043B\u044F \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0432\u0432\u043E\u0434\u0430",-1)),Ne={key:0,class:"test-buttons"},qe=["disabled"],Re=["disabled"],ze={key:1,class:"test-buttons"},Be=["disabled"],je=["disabled"],Ae={__name:"SurveyView",setup(c){const t=m(ae),e=m(0),n=m([]),a=m({}),d=m(t.value[0].min),g=m(t.value[0].max),_=m(""),y=m(""),v=m(t.value[0].defaultValue),I=m(null),E=te();P(()=>{const p=()=>{I.value=window.innerWidth};window.addEventListener("resize",p),p()});const M=G(()=>(e.value*100/t.value.length).toFixed(1)),Q=()=>{d.value=t.value[e.value].min,g.value=t.value[e.value].max,v.value=t.value[e.value].defaultValue},D=()=>{v.value>g.value&&(v.value=g.value),v.value<d.value&&(v.value=d.value)},T=()=>{t.value[e.value].choices&&t.value[e.value].maxSelectedChoices===1?a.value[t.value[e.value].name]=[n.value].flat(1/0):t.value[e.value].choices&&t.value[e.value].maxSelectedChoices>1?(a.value[t.value[e.value].name]=[...n.value],y.value&&(a.value[t.value[e.value].name].push(y.value),y.value="")):t.value[e.value].inputType==="number"?a.value[t.value[e.value].name]=[`${v.value}`]:(a.value[t.value[e.value].name]=[`${_.value}`],_.value="")},F=()=>{const p={},i=[],h=t.value[e.value].visibleIf.split(" "),u=h.map((l,f)=>{if(l==="{"){const w=h.indexOf("}",f);return h.slice(f+1,w).join(" ")}if(l==="["){const w=h.indexOf("]",f);return h.slice(f+1,w).join(" ").slice(1,-1)}}).filter(l=>l);for(let l=0;l<u.length;l++)p[u[l]]=u[l+1],l++;for(let l in p)a.value[l]&&a.value[l].includes(p[l])?i.push(!0):i.push(!1);return!i.includes(!1)},N=()=>{F()||(e.value+=1,delete a.value[t.value[e.value].name],t.value[e.value].visibleIf&&N())},q=()=>{T(),e.value+=1,t.value[e.value].visibleIf&&N(),Number.isInteger(t.value[e.value].min)&&Q(),a.value[t.value[e.value].name]?n.value=[...a.value[t.value[e.value].name]]:n.value=[]},R=()=>{for(;!a.value[t.value[e.value-1].name];)e.value-=1;n.value=[...a.value[t.value[e.value-1].name]],v.value=+a.value[t.value[e.value-1].name][0],_.value=a.value[t.value[e.value-1].name][0],e.value-=1},z=()=>{T();const p=JSON.parse(JSON.stringify(a.value));E.postAnswersData({answers:p})};return(p,i)=>{const h=H("router-link");return s(),r("section",de,[o("div",pe,[o("p",me,x(t.value[e.value].name),1),o("p",be,x(t.value[e.value].description),1),t.value[e.value].choices&&t.value[e.value].maxSelectedChoices>1?(s(),r("div",he,[(s(!0),r(B,null,j(t.value[e.value].choices,(u,l)=>(s(),r("label",{for:l,key:l,class:V(["label",{checked:n.value.includes(u)}])},[k(o("input",{id:l,type:"checkbox",class:"hidden",value:u,"onUpdate:modelValue":i[0]||(i[0]=f=>n.value=f)},null,8,ye),[[Z,n.value]]),S(" "+x(u),1)],10,fe))),128)),t.value[e.value].hasOther?(s(),r("label",ge,[k(o("input",{class:"text-input",placeholder:"\u0414\u0440\u0443\u0433\u043E\u0435",type:"text","onUpdate:modelValue":i[1]||(i[1]=u=>y.value=u)},null,512),[[C,y.value]])])):b("",!0)])):b("",!0),t.value[e.value].inputType!=="number"&&t.value[e.value].type==="text"?(s(),r("div",_e,[k(o("input",{class:"text-input",placeholder:"\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043C\u0435\u043D\u044F",type:"text","onUpdate:modelValue":i[2]||(i[2]=u=>_.value=u)},null,512),[[C,_.value]])])):b("",!0),t.value[e.value].choices&&t.value[e.value].maxSelectedChoices===1?(s(),r("div",ke,[(s(!0),r(B,null,j(t.value[e.value].choices,(u,l)=>(s(),r("label",{for:l,key:l,class:V(["label",{checked:n.value.includes(u)}])},[k(o("input",{id:l,type:"radio",class:"hidden",value:u,"onUpdate:modelValue":i[3]||(i[3]=f=>n.value=f)},null,8,we),[[ee,n.value]]),S(" "+x(u),1)],10,xe))),128))])):b("",!0),t.value[e.value].inputType==="number"?(s(),r("div",Ce,[o("div",Ve,[o("button",{class:"button-decrement btn-input",onClick:i[4]||(i[4]=u=>v.value>d.value?v.value-=1:null)}),o("div",Se,[k(o("input",{type:"number",min:d.value,max:g.value,"onUpdate:modelValue":i[5]||(i[5]=u=>v.value=u),onChange:i[6]||(i[6]=u=>D())},null,40,Ie),[[C,v.value]])]),o("button",{class:"button-increment btn-input",onClick:i[7]||(i[7]=u=>v.value<g.value?v.value+=1:null)})]),Te])):b("",!0)]),I.value>770?(s(),r("div",Ne,[e.value>0?(s(),r("button",{key:0,class:"btn prev-btn",onClick:R}," \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ")):b("",!0),e.value<t.value.length-1?(s(),r("button",{key:1,class:"btn",onClick:q,disabled:!n.value.length&&t.value[e.value].choices&&y.value.length===0}," \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ",8,qe)):(s(),A(h,{key:2,to:"/result"},{default:O(()=>[o("button",{class:"btn",onClick:z,disabled:!n.value.length&&t.value[e.value].choices}," \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B ",8,Re)]),_:1}))])):(s(),r("div",ze,[e.value>0?(s(),r("button",{key:0,class:"arrow prev-btn",onClick:R})):b("",!0),e.value<t.value.length-1?(s(),r("button",{key:1,class:"arrow",onClick:q,disabled:!n.value.length&&t.value[e.value].choices&&y.value.length===0},null,8,Be)):(s(),A(h,{key:2,to:"/result"},{default:O(()=>[o("button",{class:"btn mobile-btn",onClick:z,disabled:!n.value.length&&t.value[e.value].choices}," \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B ",8,je)]),_:1}))])),K($(U),{value:+$(M)},null,8,["value"])])}}};var Ue=W(Ae,[["__scopeId","data-v-6a1a993e"]]);export{Ue as default};
