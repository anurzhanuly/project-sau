import{u as K}from"./surveyStore.e41943a8.js";import{s as E}from"./textarea.esm.8ada2aa2.js";import{A as L,B as M,E as B,c as O,h as e,q as s,G as a,o as P,H as Q,I as T,_ as W}from"./index.2bf40831.js";import"./admin.d584d80b.js";const t=n=>(Q("data-v-e42e5000"),n=n(),T(),n),X={class:"section-result"},Y={class:"result-hack"},Z={class:"result-hack-item"},u4=t(()=>e("h3",null,"\u0416\u0430\u043B\u043E\u0431\u044B \u043F\u0440\u0438 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0438",-1)),e4={class:"result-hack-item"},l4=t(()=>e("h3",null,"\u0410\u043D\u0430\u043C\u043D\u0435\u0437 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F",-1)),o4={class:"result-hack-item"},E4=t(()=>e("h3",null,"\u0410\u043D\u0430\u043C\u043D\u0435\u0437 \u0436\u0438\u0437\u043D\u0438",-1)),B4={class:"result-hack-item"},s4=t(()=>e("h3",null,"\u0410\u043B\u043B\u0435\u0440\u0433\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043C\u043D\u0435\u0437",-1)),a4={class:"result-hack-item"},t4=t(()=>e("h3",null,"\u041E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",-1)),n4=L({__name:"ResultHackathonView",setup(n){var A,r,c,F,_,m,j,p,$,h,V,f,k,w,S,I,U,x,y,H,R,N,g,q,G,b,z;const J=K(),u=M(()=>J.resultAnswers||{}),i=B(""),C=B(""),v=B(""),D=B(""),d=B("");return u.value["\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0430\u043B\u043E\u0431\u044B?"].includes("\u0414\u0430")?(i.value=`${((A=u.value["\u041A\u0430\u043A\u0438\u0435 \u0443 \u0412\u0430\u0441 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0436\u0430\u043B\u043E\u0431\u044B?"])==null?void 0:A.join(","))||""}`,C.value=`\u041D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 ${((r=u.value["\u041D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u043A\u0430\u043A\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0412\u044B \u0438\u0441\u043F\u044B\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0435 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u044B?"])==null?void 0:r.join(","))||""} \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F ${((c=u.value["\u0421\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043B\u0438 \u0412\u0430\u043C \u043B\u0443\u0447\u0448\u0435?"])==null?void 0:c.join(","))||""}`):i.value="\u0416\u0430\u043B\u043E\u0431\u044B \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B",v.value=`\u0425\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F: ${((F=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435, \u043A\u0430\u043A\u0438\u0435 \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0438\u043B\u0438 \u0431\u044B\u043B\u0438"])==null?void 0:F.join(","))||""} ${((_=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u043F\u0435\u0447\u0435\u043D\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C/\u0431\u044B\u043B\u0438?"])==null?void 0:_.join(","))||""} ${((m=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u043E\u043D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C/\u0431\u044B\u043B\u0438?"])==null?void 0:m.join(","))||""} ${((j=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u0440\u0435\u0441\u043F\u0438\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C/\u0431\u044B\u043B\u0438?"])==null?void 0:j.join(","))||""}
\u0413\u043E\u0441\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438: ${((p=u.value["\u041B\u0435\u0436\u0430\u043B\u0438 \u043B\u0438 \u0412\u044B \u0432 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0435?"])==null?void 0:p.join(","))||""} ${(($=u.value["\u041F\u043E \u043A\u0430\u043A\u043E\u043C\u0443 \u043F\u043E\u0432\u043E\u0434\u0443 \u0412\u044B \u043B\u0435\u0436\u0430\u043B\u0438 \u0432 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0435?"])==null?void 0:$.join(","))||""}
\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438: ${((h=u.value["\u0411\u044B\u043B\u0438 \u043B\u0438 \u0443 \u0412\u0430\u0441 \u043A\u0430\u043A\u0438\u0435-\u043B\u0438\u0431\u043E \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438?"])==null?void 0:h.join(","))||""} ${((V=u.value["\u041A\u0430\u043A\u0438\u0435 \u0443 \u0412\u0430\u0441 \u0431\u044B\u043B\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438?"])==null?void 0:V.join(","))||""}
\u041A\u0443\u0440\u0435\u043D\u0438\u0435: ${((f=u.value["\u0412\u044B \u043A\u0443\u0440\u0438\u0442\u0435?"])==null?void 0:f.join(","))||""} ${((k=u.value["\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0430\u0447\u0435\u043A \u0432 \u0434\u0435\u043D\u044C \u0412\u044B \u043A\u0443\u0440\u0438\u0442\u0435?"])==null?void 0:k.join(","))||""} ${((w=u.value["\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442 \u0412\u044B \u043A\u0443\u0440\u0438\u0442\u0435?"])==null?void 0:w.join(","))||""}
\u0410\u043B\u043A\u043E\u0433\u043E\u043B\u044C: ${((S=u.value["\u0423\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u0442\u0435 \u043B\u0438 \u0412\u044B \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C?"])==null?void 0:S.join(","))||""}`,D.value=`${((I=u.value["\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0412\u0430\u0441 \u0430\u043B\u043B\u0435\u0440\u0433\u0438\u044F?"])==null?void 0:I.join(","))||""} ${((U=u.value["\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430 \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u0430\u043B\u043B\u0435\u0440\u0433\u0438\u044F"])==null?void 0:U.join(","))||""}`,d.value=`\u041E\u0431\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ${((x=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u043E\u0431\u0449\u0435\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F"])==null?void 0:x.join(","))||""}
\u041A\u043E\u0436\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((y=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u043A\u043E\u0436\u0435\u0439"])==null?void 0:y.join(","))||""}
\u041D\u0435\u0440\u0432\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((H=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0433\u043E\u043B\u043E\u0432\u044B"])==null?void 0:H.join(","))||""}
\u0414\u044B\u0445\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((R=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u0434\u044B\u0445\u0430\u043D\u0438\u0435\u043C"])==null?void 0:R.join(","))||""}
\u0421\u0435\u0440\u0434\u0435\u0447\u043D\u043E-\u0441\u043E\u0441\u0443\u0434\u0438\u0441\u0442\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((N=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u0441\u0435\u0440\u0434\u0446\u0435\u043C"])==null?void 0:N.join(","))||""}
\u0416\u0435\u043B\u0443\u0434\u043E\u0447\u043D\u043E-\u043A\u0438\u0448\u0435\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043A\u0442: ${((g=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u0436\u0438\u0432\u043E\u0442\u043E\u043C"])==null?void 0:g.join(","))||""}
\u041C\u043E\u0447\u0435\u043F\u043E\u043B\u043E\u0432\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((q=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u043F\u043E\u043B\u043E\u0432\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439"])==null?void 0:q.join(","))||""}
\u041E\u043F\u043E\u0440\u043D\u043E-\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((G=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u043C\u044B\u0448\u0446\u0430\u043C\u0438"])==null?void 0:G.join(","))||""}
\u041A\u0440\u043E\u0432\u0435\u043D\u043E\u0441\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((b=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u043A\u0440\u043E\u0432\u044C\u044E"])==null?void 0:b.join(","))||""}
\u042D\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: ${((z=u.value["\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0436\u0430\u043B\u043E\u0431\u044B \u0441 \u0449\u0438\u0442\u043E\u0432\u0438\u0434\u043A\u043E\u0439"])==null?void 0:z.join(","))||""}`,(i4,l)=>(P(),O("section",X,[e("div",Y,[e("div",Z,[u4,s(a(E),{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=o=>i.value=o),cols:"60",rows:"5"},null,8,["modelValue"])]),e("div",e4,[l4,s(a(E),{modelValue:C.value,"onUpdate:modelValue":l[1]||(l[1]=o=>C.value=o),cols:"60",rows:"5"},null,8,["modelValue"])]),e("div",o4,[E4,s(a(E),{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=o=>v.value=o),cols:"60",rows:"6"},null,8,["modelValue"])]),e("div",B4,[s4,s(a(E),{modelValue:D.value,"onUpdate:modelValue":l[3]||(l[3]=o=>D.value=o),cols:"60",rows:"5"},null,8,["modelValue"])]),e("div",a4,[t4,s(a(E),{modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=o=>d.value=o),cols:"60",rows:"8"},null,8,["modelValue"])])])]))}});const A4=W(n4,[["__scopeId","data-v-e42e5000"]]);export{A4 as default};