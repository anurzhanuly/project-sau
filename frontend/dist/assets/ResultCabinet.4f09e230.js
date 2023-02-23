import{d as Z,W as u4,b as e4,r as B,o as E,c as d,e,f as o,u as t,i as l4,F as j,p as s4,j as t4,_ as o4,X as a4,G as M,g as O,y as Q,H as n4}from"./index.b86086bf.js";import{s as C}from"./textarea.esm.9aa3ec98.js";import{s as Y}from"./panel.esm.28dce8e3.js";const _=a=>(s4("data-v-dfb7c77b"),a=a(),t4(),a),i4={class:"result-wrapper"},E4={class:"result-item"},B4=_(()=>e("h3",null,"\u0416\u0430\u043B\u043E\u0431\u044B \u043F\u0440\u0438 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0438",-1)),r4={class:"result-item"},c4=_(()=>e("h3",null,"\u0410\u043D\u0430\u043C\u043D\u0435\u0437 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F",-1)),d4={class:"result-item"},v4=_(()=>e("h3",null,"\u0410\u043D\u0430\u043C\u043D\u0435\u0437 \u0436\u0438\u0437\u043D\u0438",-1)),C4={class:"result-item"},_4=_(()=>e("h3",null,"\u0410\u043B\u043B\u0435\u0440\u0433\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043C\u043D\u0435\u0437",-1)),D4={class:"result-item"},A4=_(()=>e("h3",null,"\u041E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",-1)),m4={class:"result-item"},p4=_(()=>e("h3",null,"\u041E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u043E\u0441\u043C\u043E\u0442\u0440",-1)),F4={class:"btn-wrapper"},$4=Z({__name:"ResultTextArea",setup(a){var m,p,b,f,V,h,w,x,y,g,k,R,S,I,U,T,N,P,G,H,L,W,X,q,z,J,K;const F=u4(),u=e4(()=>F.resultAnswers||{}),r=B(""),n=B(""),v=B(""),D=B(""),A=B(""),c=B(""),$=()=>{const i={};i.complaints=c.value,i.complaintsAnamnesis=n.value,i.lifeAnamnesis=D.value,i.alergicAnamnesis=v.value,i.objectiveData=A.value,i.objectiveExamination=r.value,console.log(i)};return u.value["\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B?"].includes("\u0414\u0430")?(c.value=`${((m=u.value["\u041A\u0430\u043A\u0438\u0435 \u0443 \u0412\u0430\u0441 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0436\u0430\u043B\u043E\u0431\u044B?"])==null?void 0:m.join(","))||""}`,n.value=`\u041D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 ${((p=u.value["\u041D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u043A\u0430\u043A\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0412\u044B \u0438\u0441\u043F\u044B\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0435 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u044B?"])==null?void 0:p.join(","))||""} \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F ${((b=u.value["\u0421\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043B\u0438 \u0412\u0430\u043C \u043B\u0443\u0447\u0448\u0435?"])==null?void 0:b.join(","))||""}`):c.value="\u0416\u0430\u043B\u043E\u0431\u044B \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B",D.value=`\u0425\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F: ${((f=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435, \u043A\u0430\u043A\u0438\u0435 \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0438\u043B\u0438 \u0431\u044B\u043B\u0438"])==null?void 0:f.join(","))||""} ${((V=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u043F\u0435\u0447\u0435\u043D\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C/\u0431\u044B\u043B\u0438?"])==null?void 0:V.join(","))||""} ${((h=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u043E\u043D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C/\u0431\u044B\u043B\u0438?"])==null?void 0:h.join(","))||""} ${((w=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u0440\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C/\u0431\u044B\u043B\u0438?"])==null?void 0:w.join(","))||""}
\u0413\u043E\u0441\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438: ${((x=u.value["\u041B\u0435\u0436\u0430\u043B\u0438 \u043B\u0438 \u0412\u044B \u0432 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0435?"])==null?void 0:x.join(","))||""} ${((y=u.value["\u041F\u043E \u043A\u0430\u043A\u043E\u043C\u0443 \u043F\u043E\u0432\u043E\u0434\u0443 \u0412\u044B \u043B\u0435\u0436\u0430\u043B\u0438 \u0432 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0435?"])==null?void 0:y.join(","))||""}
\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438: ${((g=u.value["\u0411\u044B\u043B\u0438 \u043B\u0438 \u0443 \u0412\u0430\u0441 \u043A\u0430\u043A\u0438\u0435-\u043B\u0438\u0431\u043E \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438?"])==null?void 0:g.join(","))||""} ${((k=u.value["\u041A\u0430\u043A\u0438\u0435 \u0443 \u0412\u0430\u0441 \u0431\u044B\u043B\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438?"])==null?void 0:k.join(","))||""}
\u041A\u0443\u0440\u0435\u043D\u0438\u0435: ${((R=u.value["\u0412\u044B \u043A\u0443\u0440\u0438\u0442\u0435?"])==null?void 0:R.join(","))||""} ${((S=u.value["\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0430\u0447\u0435\u043A \u0432 \u0434\u0435\u043D\u044C \u0412\u044B \u043A\u0443\u0440\u0438\u0442\u0435?"])==null?void 0:S.join(","))||""} ${((I=u.value["\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442 \u0412\u044B \u043A\u0443\u0440\u0438\u0442\u0435?"])==null?void 0:I.join(","))||""}
\u0410\u043B\u043A\u043E\u0433\u043E\u043B\u044C: ${((U=u.value["\u0423\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u0442\u0435 \u043B\u0438 \u0412\u044B \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C?"])==null?void 0:U.join(","))||""}`,v.value=`${((T=u.value["\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0412\u0430\u0441 \u0430\u043B\u043B\u0435\u0440\u0433\u0438\u044F?"])==null?void 0:T.join(","))||""} ${((N=u.value["\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430 \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u0430\u043B\u043B\u0435\u0440\u0433\u0438\u044F"])==null?void 0:N.join(","))||""}`,A.value=`\u041E\u0431\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ${((P=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u043E\u0431\u0449\u0435\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F"])==null?void 0:P.join(","))||""}
\u041A\u043E\u0436\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((G=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u043A\u043E\u0436\u0435\u0439"])==null?void 0:G.join(","))||""}
\u041D\u0435\u0440\u0432\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((H=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433\u043E\u043B\u043E\u0432\u044B"])==null?void 0:H.join(","))||""}
\u0414\u044B\u0445\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((L=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u0434\u044B\u0445\u0430\u043D\u0438\u0435\u043C"])==null?void 0:L.join(","))||""}
\u0421\u0435\u0440\u0434\u0435\u0447\u043D\u043E-\u0441\u043E\u0441\u0443\u0434\u0438\u0441\u0442\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((W=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u0441\u0435\u0440\u0434\u0446\u0435\u043C"])==null?void 0:W.join(","))||""}
\u0416\u0435\u043B\u0443\u0434\u043E\u0447\u043D\u043E-\u043A\u0438\u0448\u0435\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043A\u0442: ${((X=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u0436\u0438\u0432\u043E\u0442\u043E\u043C"])==null?void 0:X.join(","))||""}
\u041C\u043E\u0447\u0435\u043F\u043E\u043B\u043E\u0432\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((q=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u043F\u043E\u043B\u043E\u0432\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439"])==null?void 0:q.join(","))||""}
\u041E\u043F\u043E\u0440\u043D\u043E-\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((z=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u043C\u044B\u0448\u0446\u0430\u043C\u0438"])==null?void 0:z.join(","))||""}
\u041A\u0440\u043E\u0432\u0435\u043D\u043E\u0441\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((J=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u043A\u0440\u043E\u0432\u044C\u044E"])==null?void 0:J.join(","))||""}
\u042D\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((K=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u0449\u0438\u0442\u043E\u0432\u0438\u0434\u043A\u043E\u0439"])==null?void 0:K.join(","))||""}`,(i,l)=>(E(),d(j,null,[e("div",i4,[e("div",E4,[B4,o(t(C),{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=s=>c.value=s),cols:"60",rows:"5"},null,8,["modelValue"])]),e("div",r4,[c4,o(t(C),{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=s=>n.value=s),cols:"60",rows:"5"},null,8,["modelValue"])]),e("div",d4,[v4,o(t(C),{modelValue:D.value,"onUpdate:modelValue":l[2]||(l[2]=s=>D.value=s),cols:"60",rows:"6"},null,8,["modelValue"])]),e("div",C4,[_4,o(t(C),{modelValue:v.value,"onUpdate:modelValue":l[3]||(l[3]=s=>v.value=s),cols:"60",rows:"5"},null,8,["modelValue"])]),e("div",D4,[A4,o(t(C),{modelValue:A.value,"onUpdate:modelValue":l[4]||(l[4]=s=>A.value=s),cols:"60",rows:"10"},null,8,["modelValue"])]),e("div",m4,[p4,o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=s=>r.value=s),cols:"60",rows:"10"},null,8,["modelValue"])])]),e("div",F4,[o(t(l4),{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",class:"p-button-raised p-button-text",onClick:$})])],64))}});const j4=o4($4,[["__scopeId","data-v-dfb7c77b"]]),b4=a=>(s4("data-v-37013935"),a=a(),t4(),a),f4={class:"section-result"},V4=b4(()=>e("h2",{class:"result-header"},"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B:",-1)),h4={key:0,class:"btn-wrapper"},w4=Z({__name:"ResultCabinet",setup(a){const F=u4(),u=e4(()=>F.recommendations||[]),r=B(!0),n=B(!0),v=()=>{r.value=!1,n.value=!1,setTimeout(()=>{window.print()}),setTimeout(()=>{r.value=!0,n.value=!0},2e3)};return(D,A)=>(E(),d("section",f4,[V4,n.value?(E(),a4(t(Y),{key:0,header:"\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430:",toggleable:!0},{default:M(()=>[o(j4)]),_:1})):O("",!0),o(t(Y),{header:"\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F:",toggleable:!0},{default:M(()=>[(E(!0),d(j,null,Q(t(u),(c,$)=>(E(),d("ul",{key:$,class:"result-list"},[(E(!0),d(j,null,Q(c.recommendations,(m,p)=>(E(),d("li",{key:p,class:"result-list__item"}," - "+n4(m),1))),128))]))),128)),r.value?(E(),d("div",h4,[o(t(l4),{label:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 pdf",class:"p-button-raised p-button-text",onClick:v})])):O("",!0)]),_:1})]))}});const k4=o4(w4,[["__scopeId","data-v-37013935"]]);export{k4 as default};
