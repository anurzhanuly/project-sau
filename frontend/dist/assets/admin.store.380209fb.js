import{q as g,r as i,b as C,a4 as I,t as d,a5 as E,a6 as m,a7 as N}from"./index.9da81139.js";const S=g("admin",()=>{const n=i([]),c=i([]),l=i([]),s=i(0),r=i(),v=[{header:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",field:"questionName",hasDropdown:!0,options:C(()=>l.value)},{header:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",field:"compare",hasDropdown:!0,options:[{value:"exact"},{value:"except"},{value:"greater"},{value:"less"},{value:"range"},{value:"optional"}]},{header:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",field:"value",hasDropdown:!1,options:[]},{header:"\u041D\u043E\u043C\u0435\u0440 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438",field:"testCase",hasDropdown:!1,options:[]},{header:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435",field:"",hasDropdown:!1,options:[]}];async function f(){const e=await I();return d.isAxiosError(e)||(c.value=e.data.content.pages.map(u=>u.elements).flat(1),l.value=c.value.map(u=>({value:u.name}))),e}async function p(){const e=await E();return d.isAxiosError(e)||(n.value=JSON.parse(e.data.result)),e}async function D(e,u){const a=n.value.filter(o=>o.name===e)[0];return a.tests=u,await m(a)}async function x(e){const u=JSON.parse(JSON.stringify(n.value.filter(t=>t.name===e)[0]));return await m(u)}function h(e,u){const a=n.value.filter(o=>o.name===r.value)[0],t=n.value.indexOf(a);n.value[t].conditions[s.value][e]={...u}}function w(e){const u=n.value.filter(t=>t.name===r.value)[0],a=n.value.indexOf(u);n.value[a].conditions[s.value].push({...e})}function O(e){const u=n.value.filter(o=>o.name===r.value)[0],a=n.value.indexOf(u),t=n.value[a].conditions[s.value].indexOf(e);n.value[a].conditions[s.value]=n.value[a].conditions[s.value].filter((o,R)=>{if(R!==t)return o})}async function y(e){const u=JSON.parse(JSON.stringify(n.value.filter(t=>t.name===e)[0]));return await N(u)}return{allRecommendations:n,questions:c,questionsNames:l,conditionColumns:v,checkedRecommendationName:r,conditionIndex:s,editLocalConditionsByIndex:h,getRecommendationsData:p,getQuestionsData:f,deleteConditionByIndex:O,createConditionInRec:w,saveConditionsData:x,saveRecommendationsData:D,deleteDiseaseById:y}});export{S as u};
