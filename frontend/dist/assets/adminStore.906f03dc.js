import{C as O,r as s,c as E,E as I,G as d,H as R,I as v}from"./index.dbbd8adb.js";const N=O("admin",()=>{const n=s([]),r=s([]),c=s([]),i=s(""),o=s(0),m=[{header:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",field:"questionName",hasDropdown:!0,options:E(()=>c.value)},{header:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",field:"compare",hasDropdown:!0,options:[{value:"exact"},{value:"except"},{value:"greater"},{value:"less"},{value:"range"},{value:"optional"}]},{header:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",field:"value",hasDropdown:!1,options:[]},{header:"\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438",field:"testCase",hasDropdown:!1,options:[]},{header:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435",field:"",hasDropdown:!1,options:[]}];async function f(){const e=await I();return d.isAxiosError(e)||(r.value=e.data.content.pages.map(u=>u.elements).flat(1),c.value=r.value.map(u=>({value:u.name}))),e}async function p(){const e=await R();return d.isAxiosError(e)||(n.value=JSON.parse(e.data.result)),e}async function x(e,u){const a=JSON.parse(JSON.stringify(n.value.filter(C=>C.name===e)[0])),t=n.value.indexOf(a);return a.tests=u,n.value[t].tests=u,await v(a)}async function D(e){const u=JSON.parse(JSON.stringify(n.value.filter(t=>t.name===e)[0]));return await v(u)}function h(e,u){const a=n.value.filter(l=>l.name===i.value)[0],t=n.value.indexOf(a);n.value[t].conditions[o.value][e]={...u}}function w(e){const u=n.value.filter(t=>t.name===i.value)[0],a=n.value.indexOf(u);n.value[a].conditions[o.value].push({...e})}function g(e){const u=n.value.filter(t=>t.name===i.value)[0],a=n.value.indexOf(u);console.log(n.value[a].conditions[o.value]),n.value[a].conditions[o.value].splice(e,1)}return{allRecommendations:n,questions:r,questionsNames:c,conditionColumns:m,checkedRecommendationName:i,conditionIndex:o,editLocalConditionsByIndex:h,getRecommendationsData:p,getQuestionsData:f,deleteConditionByIndex:g,createConditionInRec:w,saveConditionsData:D,saveRecommendationsData:x}});export{N as u};
