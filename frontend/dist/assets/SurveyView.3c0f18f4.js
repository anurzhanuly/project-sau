import{o as s,c as o,n as W,r as P,a as h,b as I,d as N,t as w,e as v,_ as R,f,g as G,h as $,i as H,u as r,F as Q,j as U,w as x,v as S,k as D,l as E,m as K,p as X,q as Y,s as Z,x as ee}from"./index.a3389db2.js";import{u as te}from"./surveyStore.1f77ef02.js";import"./admin.ae932db5.js";var M={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const ne=["aria-valuenow"],ae={key:0,class:"p-progressbar-label"},le={key:1,class:"p-progressbar-indeterminate-container"},se=v("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1),ie=[se];function ue(p,e,n,a,d,m){return s(),o("div",{role:"progressbar",class:I(m.containerClass),"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},[m.determinate?(s(),o("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:W(m.progressStyle)},[n.value!=null&&n.value!==0&&n.showValue?(s(),o("div",ae,[P(p.$slots,"default",{},()=>[N(w(n.value+"%"),1)])])):h("",!0)],4)):h("",!0),m.indeterminate?(s(),o("div",le,ie)):h("",!0)],10,ne)}function re(p,e){e===void 0&&(e={});var n=e.insertAt;if(!(!p||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",n==="top"&&a.firstChild?a.insertBefore(d,a.firstChild):a.appendChild(d),d.styleSheet?d.styleSheet.cssText=p:d.appendChild(document.createTextNode(p))}}var oe=`
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
`;re(oe);M.render=ue;const ve=p=>(Z("data-v-001dcf4c"),p=p(),ee(),p),de={class:"section-test"},ce={class:"test-wrapper"},pe={class:"test-title"},me={class:"test-description"},be={key:0},he=["for"],fe=["id","value"],ge={key:0,class:"label"},ye={key:1,class:"input-wrapper"},_e={key:2},ke=["for"],xe=["id","value"],we={key:3},Ve={class:"number-input-container"},Ce={class:"number-input"},Se=["min","max"],Ie=ve(()=>v("p",{class:"input-help"},"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0446\u0438\u0444\u0440\u0443 \u0434\u043B\u044F \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0432\u0432\u043E\u0434\u0430",-1)),Ne={key:0,class:"test-buttons"},Te=["disabled"],ze=["disabled"],Be={key:1,class:"test-buttons"},je=["disabled"],Ae=["disabled"],Oe={__name:"SurveyView",setup(p){const e=f(0),n=f([]),a=f({}),d=f(t.value[0].min),m=f(t.value[0].max),k=f(""),_=f(""),c=f(t.value[0].defaultValue),T=f(null),V=te();G(()=>{V.getQuestionsData();const b=()=>{T.value=window.innerWidth};window.addEventListener("resize",b),b()});const t=$(()=>V.questions),q=$(()=>(e.value*100/t.value.length).toFixed(1)),F=()=>{d.value=t.value[e.value].min,m.value=t.value[e.value].max,c.value=t.value[e.value].defaultValue},J=()=>{c.value>m.value&&(c.value=m.value),c.value<d.value&&(c.value=d.value)},z=()=>{t.value[e.value].choices&&t.value[e.value].maxSelectedChoices===1?a.value[t.value[e.value].name]=[n.value].flat(1/0):t.value[e.value].choices&&t.value[e.value].maxSelectedChoices>1?(a.value[t.value[e.value].name]=[...n.value],_.value&&(a.value[t.value[e.value].name].push(_.value),_.value="")):t.value[e.value].inputType==="number"?a.value[t.value[e.value].name]=[`${c.value}`]:(a.value[t.value[e.value].name]=[`${k.value}`],k.value="")},L=()=>{const b={},i=[],g=t.value[e.value].visibleIf.split(" "),u=g.map((l,y)=>{if(l==="{"){const C=g.indexOf("}",y);return g.slice(y+1,C).join(" ")}if(l==="["){const C=g.indexOf("]",y);return g.slice(y+1,C).join(" ").slice(1,-1)}}).filter(l=>l);for(let l=0;l<u.length;l++)b[u[l]]=u[l+1],l++;for(let l in b)a.value[l]&&a.value[l].includes(b[l])?i.push(!0):i.push(!1);return!i.includes(!1)},B=()=>{L()||(e.value+=1,delete a.value[t.value[e.value].name],t.value[e.value].visibleIf&&B())},j=()=>{z(),e.value+=1,t.value[e.value].visibleIf&&B(),Number.isInteger(t.value[e.value].min)&&F(),a.value[t.value[e.value].name]?n.value=[...a.value[t.value[e.value].name]]:n.value=[]},A=()=>{for(;!a.value[t.value[e.value-1].name];)e.value-=1;n.value=[...a.value[t.value[e.value-1].name]],c.value=+a.value[t.value[e.value-1].name][0],k.value=a.value[t.value[e.value-1].name][0],e.value-=1},O=()=>{z();const b=JSON.parse(JSON.stringify(a.value));V.postAnswersData({answers:b})};return(b,i)=>{const g=H("router-link");return s(),o("section",de,[v("div",ce,[v("p",pe,w(r(t)[e.value].name),1),v("p",me,w(r(t)[e.value].description),1),r(t)[e.value].choices&&r(t)[e.value].maxSelectedChoices>1?(s(),o("div",be,[(s(!0),o(Q,null,U(r(t)[e.value].choices,(u,l)=>(s(),o("label",{key:l,for:l,class:I(["label",{checked:n.value.includes(u)}])},[x(v("input",{id:l,"onUpdate:modelValue":i[0]||(i[0]=y=>n.value=y),type:"checkbox",class:"hidden",value:u},null,8,fe),[[X,n.value]]),N(" "+w(u),1)],10,he))),128)),r(t)[e.value].hasOther?(s(),o("label",ge,[x(v("input",{"onUpdate:modelValue":i[1]||(i[1]=u=>_.value=u),class:"text-input",placeholder:"\u0414\u0440\u0443\u0433\u043E\u0435",type:"text"},null,512),[[S,_.value]])])):h("",!0)])):h("",!0),r(t)[e.value].inputType!=="number"&&r(t)[e.value].type==="text"?(s(),o("div",ye,[x(v("input",{"onUpdate:modelValue":i[2]||(i[2]=u=>k.value=u),class:"text-input",placeholder:"\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043C\u0435\u043D\u044F",type:"text"},null,512),[[S,k.value]])])):h("",!0),r(t)[e.value].choices&&r(t)[e.value].maxSelectedChoices===1?(s(),o("div",_e,[(s(!0),o(Q,null,U(r(t)[e.value].choices,(u,l)=>(s(),o("label",{key:l,for:l,class:I(["label",{checked:n.value.includes(u)}])},[x(v("input",{id:l,"onUpdate:modelValue":i[3]||(i[3]=y=>n.value=y),type:"radio",class:"hidden",value:u},null,8,xe),[[Y,n.value]]),N(" "+w(u),1)],10,ke))),128))])):h("",!0),r(t)[e.value].inputType==="number"?(s(),o("div",we,[v("div",Ve,[v("button",{class:"button-decrement btn-input",onClick:i[4]||(i[4]=u=>c.value>d.value?c.value-=1:null)}),v("div",Ce,[x(v("input",{"onUpdate:modelValue":i[5]||(i[5]=u=>c.value=u),type:"number",min:d.value,max:m.value,onChange:i[6]||(i[6]=u=>J())},null,40,Se),[[S,c.value]])]),v("button",{class:"button-increment btn-input",onClick:i[7]||(i[7]=u=>c.value<m.value?c.value+=1:null)})]),Ie])):h("",!0)]),T.value>770?(s(),o("div",Ne,[e.value>0?(s(),o("button",{key:0,class:"btn prev-btn",onClick:A}," \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ")):h("",!0),e.value<r(t).length-1?(s(),o("button",{key:1,class:"btn",disabled:!n.value.length&&r(t)[e.value].choices&&_.value.length===0,onClick:j}," \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ",8,Te)):(s(),D(g,{key:2,to:"/result"},{default:E(()=>[v("button",{class:"btn",disabled:!n.value.length&&r(t)[e.value].choices,onClick:O}," \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B ",8,ze)]),_:1}))])):(s(),o("div",Be,[e.value>0?(s(),o("button",{key:0,class:"arrow prev-btn",onClick:A})):h("",!0),e.value<r(t).length-1?(s(),o("button",{key:1,class:"arrow",disabled:!n.value.length&&r(t)[e.value].choices&&_.value.length===0,onClick:j},null,8,je)):(s(),D(g,{key:2,to:"/result"},{default:E(()=>[v("button",{class:"btn mobile-btn",disabled:!n.value.length&&r(t)[e.value].choices,onClick:O}," \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B ",8,Ae)]),_:1}))])),K(r(M),{value:+r(q)},null,8,["value"])])}}},De=R(Oe,[["__scopeId","data-v-001dcf4c"]]);export{De as default};
