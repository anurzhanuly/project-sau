import{_ as N,r as d,o as a,c as n,a as c,t as p,F as q,b as C,d as m,w as b,v as R,e as I,f as D,u as M,R as Q,p as U,g as j,n as S,h as F,i as V,j as L}from"./index.4da0cb22.js";import{u as z}from"./test.51cbeeaf.js";const E=[{type:"text",name:"question1",title:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u043C \u043B\u0435\u0442? ",defaultValue:45,inputType:"number",min:18,max:99,step:0},{type:"checkbox",name:"question2",title:"\u0412\u0430\u0448 \u043F\u043E\u043B ",choices:["\u0416\u0435\u043D\u0441\u043A\u0438\u0439","\u041C\u0443\u0436\u0441\u043A\u043E\u0439"],maxSelectedChoices:1},{type:"text",name:"question3",title:"\u0412\u0430\u0448 \u0440\u043E\u0441\u0442",description:"\u0412 \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440\u0430\u0445",defaultValue:165,inputType:"number",min:100,max:220,step:0},{type:"text",name:"question4",title:"\u0412\u0430\u0448 \u0432\u0435\u0441 ",description:"\u0412 \u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u0445",defaultValue:70,inputType:"number",min:20,max:220,step:0},{type:"checkbox",name:"question5",title:"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435? ",description:"\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0434\u0438\u0430\u0431\u0435\u0442, \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0440\u0434\u0446\u0430, \u043A\u043E\u0436\u0438, \u043B\u0435\u0433\u043A\u0438\u0445, \u043F\u043E\u0447\u0435\u043A,  \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 ",choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question6",visibleIf:"{question5} = ['\u0414\u0430']",title:"\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0438\u043B\u0438 \u0431\u044B\u043B\u0438",description:"\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u0438 \u043F\u0440\u043E\u0448\u043B\u044B\u0435 \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F",choices:["\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 (\u0433\u0438\u043F\u0435\u0440\u0442\u0435\u043D\u0437\u0438\u044F)","\u0414\u0438\u0430\u0431\u0435\u0442 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0442\u0438\u043F\u0430 ","\u041E\u043D\u043A\u043E\u043B\u043E\u0433\u0438\u044F ","\u0418\u043C\u0435\u0448\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u0435\u0437\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430","\u0410\u0443\u0442\u043E\u0438\u043C\u043C\u0443\u043D\u043D\u044B\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F","\u0413\u0435\u043F\u0430\u0442\u0438\u0442 \u0412 ","\u0413\u0435\u043F\u0430\u0442\u0438\u0442 \u0421 ","\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0447\u0435\u043A ","\u0423 \u043C\u0435\u043D\u044F \u043D\u0435\u0442 \u0438 \u043D\u0435 \u0431\u044B\u043B\u043E \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435"],otherText:"\u0414\u0440\u0443\u0433\u0438\u0435 (\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435) ",maxSelectedChoices:7,selectAllText:"\u0412\u0441\u0435 "},{type:"checkbox",name:"question7",title:"\u0415\u0441\u0442\u044C \u043B\u0438 \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F \u0443 \u0432\u0430\u0448\u0438\u0445 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u0440\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432? ",description:"\u0423 \u0431\u0430\u0431\u0443\u0448\u043A\u0438/\u0434\u0435\u0434\u0443\u0448\u043A\u0438, \u043C\u0430\u043C\u044B/\u043F\u0430\u043F\u044B, \u0431\u0440\u0430\u0442\u0430/\u0441\u0435\u0441\u0442\u0440\u044B",choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question8",visibleIf:"{question7} = ['\u0414\u0430']",title:"\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u0435\u0441\u0442\u044C \u0438\u043B\u0438 \u0431\u044B\u043B\u0438 \u0443 \u043D\u0438\u0445 \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F",choices:["\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 (\u0433\u0438\u043F\u0435\u0440\u0442\u0435\u043D\u0437\u0438\u044F)","\u0414\u0438\u0430\u0431\u0435\u0442 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0442\u0438\u043F\u0430 ","\u041E\u043D\u043A\u043E\u043B\u043E\u0433\u0438\u044F ","\u0418\u043C\u0435\u0448\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u0435\u0437\u043D\u044C \u0441\u0435\u0440\u0434\u0446\u0430","\u0410\u0443\u0442\u043E\u0438\u043C\u043C\u0443\u043D\u043D\u044B\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u044F","\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0447\u0435\u043A ","\u042F \u043D\u0435 \u0437\u043D\u0430\u044E \u0438\u043B\u0438 \u0443 \u043D\u0438\u0445 \u043D\u0435 \u0431\u044B\u043B\u043E \u0438 \u043D\u0435\u0442 \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0439"],otherText:"\u0414\u0440\u0443\u0433\u0438\u0435 (\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435) ",maxSelectedChoices:7},{type:"checkbox",name:"question9",title:"\u0412\u044B \u0437\u043D\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435?  ",choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question10",visibleIf:"{question9} = ['\u0414\u0430']",title:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0435 \u0441\u0438\u0441\u0442\u043E\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 ",description:"\u041A \u043F\u0440\u0438\u043C\u0435\u0440\u0443 \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 120/80, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E 120 \u0432 100-129",choices:["<100","100-129","130-139","140-149","150-159",">160","\u042F \u043D\u0435 \u0437\u043D\u0430\u044E  "],maxSelectedChoices:1},{type:"checkbox",name:"question11",title:"\u0412\u044B \u0437\u043D\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u0430\u0445\u0430\u0440\u0430 \u0432 \u043A\u0440\u043E\u0432\u0438 \u043D\u0430\u0442\u043E\u0449\u0430\u043A?",description:"\u0422\u0435\u0441\u0442 \u0433\u043B\u044E\u043A\u043E\u0437\u044B \u0432 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0445",choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question12",visibleIf:"{question11} = ['\u0414\u0430']",title:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0433\u043B\u044E\u043A\u043E\u0437\u044B \u0432 \u043A\u0440\u043E\u0432\u0438 ",description:"\u0412 \u043C\u043C\u043E\u043B/\u043B",choices:["< 7.8 ","7.8 \u2013 11.1","> 11.1","\u042F \u043D\u0435 \u0437\u043D\u0430\u044E "],maxSelectedChoices:1},{type:"checkbox",name:"question13",title:"\u0412\u044B \u0437\u043D\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0433\u0435\u043C\u043E\u0433\u043B\u043E\u0431\u0438\u043D\u0430?",choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question14",visibleIf:"{question13} = ['\u0414\u0430'] and {question2} = ['\u0416\u0435\u043D\u0441\u043A\u0438\u0439']",title:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0433\u0435\u043C\u043E\u0433\u043B\u043E\u0431\u0438\u043D\u0430 \u0432 \u043A\u0440\u043E\u0432\u0438",description:"\u0412 \u0433/\u043B (\u044510*9/\u043B)",choices:["< 115","115 - 155","> 155","\u041D\u0435 \u0437\u043D\u0430\u044E "],maxSelectedChoices:1},{type:"checkbox",name:"question15",visibleIf:"{question2} = ['\u041C\u0443\u0436\u0441\u043A\u043E\u0439'] and {question13} = ['\u0414\u0430']",title:"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0433\u0435\u043C\u043E\u0433\u043B\u043E\u0431\u0438\u043D\u0430 \u0432 \u043A\u0440\u043E\u0432\u0438",description:"\u0412 \u0433/\u043B (\u044510*9/\u043B)",choices:["< 135","135 - 180","> 180","\u041D\u0435 \u0437\u043D\u0430\u044E "],maxSelectedChoices:1},{type:"checkbox",name:"question16",title:"\u0412\u044B \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u0442\u0435 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C? ",choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question17",visibleIf:"{question16} = ['\u0414\u0430']",title:"\u0412\u044B \u0437\u043D\u0430\u0435\u0442\u0435 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u043C \u0432 \u043D\u0435\u0434\u0435\u043B\u044E \u0432\u044B \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u0442\u0435 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C? ",description:"1 \u043F\u0438\u0432\u043E 500 \u043C\u043B - 2 \u0435\u0434\u0438\u043D\u0438\u0446\u044B, 1 \u0441\u0442\u0430\u043A\u0430\u043D \u0432\u0438\u043D\u0430 - 1 \u0435\u0434\u0438\u043D\u0438\u0446\u0430, 40 \u0433\u0440\u0430\u043C\u043C \u0432\u043E\u0434\u043A\u0438 - 1 \u0435\u0434\u0438\u043D\u0438\u0446\u0430",choices:["< 8 \u0435\u0434\u0438\u043D\u0438\u0446 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044F","8 - 12 \u0435\u0434\u0438\u043D\u0438\u0446 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044F","> 12 \u0435\u0434\u0438\u043D\u0438\u0446 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044F"],maxSelectedChoices:1},{type:"checkbox",name:"question18",title:"\u0412\u044B \u043A\u0443\u0440\u0438\u0442\u0435? ",choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question19",visibleIf:"{question18} = ['\u0414\u0430']",title:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0438\u0433\u0430\u0440\u0435\u0442 \u0432 \u0434\u0435\u043D\u044C \u0432\u044B \u043A\u0443\u0440\u0438\u0442\u0435? ",choices:["< 5 \u0448\u0442\u0443\u043A"," 5 - 9 \u0448\u0442\u0443\u043A","10 - 19 \u0448\u0442\u0443\u043A","> 20 \u0448\u0442\u0443\u043A"],maxSelectedChoices:1},{type:"checkbox",name:"question20",visibleIf:"{question18} = ['\u0414\u0430']",title:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442 \u0432\u044B \u043A\u0443\u0440\u0438\u0442\u0435?",choices:["< 1 \u0433\u043E\u0434\u0430","1 - 4 \u0433\u043E\u0434\u0430","5 - 9 \u043B\u0435\u0442","10 - 14 \u043B\u0435\u0442","> 15 \u043B\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question21",title:"\u0412\u044B \u0440\u0430\u043D\u044C\u0448\u0435 \u043A\u0443\u0440\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435? ",choices:["\u0414\u0430","\u041D\u0435\u0442"],maxSelectedChoices:1},{type:"checkbox",name:"question22",visibleIf:"{question21} = ['\u0414\u0430']",title:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0435\u0442 \u0432\u044B \u043A\u0443\u0440\u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C \u043A\u0430\u043A \u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u0443\u0440\u0438\u0442\u044C?",choices:["< 1 \u0433\u043E\u0434\u0430","1 - 4 \u0433\u043E\u0434\u0430","5 - 9 \u043B\u0435\u0442","10 - 14 \u043B\u0435\u0442","> 15 \u043B\u0435\u0442 "],maxSelectedChoices:1},{type:"checkbox",name:"question23",title:"\u0412\u0430\u0448 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438?",choices:["\u041F\u0440\u043E\u0433\u0443\u043B\u043A\u0430","\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043F\u043E\u0440\u0442","\u0412 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u0441\u0438\u0434\u044F\u0447\u0438\u0439, \u043C\u0430\u043B\u043E\u043F\u043E\u0434\u0432\u0438\u0436\u043D\u044B\u0439 "],maxSelectedChoices:1},{type:"checkbox",name:"question24",title:"\u0412\u0430\u0448 \u0440\u0430\u0446\u0438\u043E\u043D \u043F\u0438\u0442\u0430\u043D\u0438\u044F? ",choices:["\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0439 (\u0431\u043E\u043B\u044C\u0448\u0435 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438 \u043E\u0432\u043E\u0449\u0435\u0439)","\u0412\u0440\u0435\u0434\u043D\u044B\u0439 (\u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u044F\u0441\u0430 \u0438 \u0436\u0438\u0440\u043D\u043E\u0433\u043E)"],maxSelectedChoices:1},{type:"checkbox",name:"question25",title:"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0436\u0430\u043B\u043E\u0431\u044B? \u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0432\u0441\u0435 \u0442\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C ",choices:["\u0423\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C","\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0443\u0442\u043E\u043C\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C","\u041F\u043E\u0442\u0435\u0440\u044F \u0432\u0435\u0441\u0430","\u041D\u0430\u0431\u043E\u0440 \u0432\u0435\u0441\u0430","\u041F\u043E\u0442\u0435\u0440\u044F \u0430\u043F\u043F\u0435\u0442\u0438\u0442\u0430","\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 > 37.0\u0421","\u041E\u0437\u043D\u043E\u0431","\u041D\u043E\u0447\u043D\u044B\u0435 \u043F\u043E\u0442\u0435\u043D\u0438\u044F","\u041D\u0435\u0442"],noneText:"\u041D\u0435\u0442 ",otherText:"\u0414\u0440\u0443\u0433\u0438\u0435 (\u043E\u043F\u0438\u0448\u0438\u0442\u0435) ",maxSelectedChoices:8}];const G=r=>(U("data-v-c9a5f5dc"),r=r(),j(),r),H={class:"section-test"},J={class:"test-wrapper"},K={class:"test-title"},O={class:"test-description"},P={key:0},W=["for"],X=["id","value"],Y={key:1},Z=["for"],ee=["id","value"],te={key:2},se={class:"number-input-container"},ie={class:"number-input"},le=["min","max"],ce=G(()=>c("p",{class:"input-help"},"\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u043D\u0430 \u0446\u0438\u0444\u0440\u0443 \u0434\u043B\u044F \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0432\u0432\u043E\u0434\u0430",-1)),oe={class:"test-buttons"},ae=["disabled"],ue={__name:"TestSection",setup(r){const t=d(E),e=d(0),T=z(),_=d(t.value[0].min),f=d(t.value[0].max),v=d(t.value[0].defaultValue),g=()=>{_.value=t.value[e.value].min,f.value=t.value[e.value].max,v.value=t.value[e.value].defaultValue},o=d([]),u=d({}),k=()=>{t.value[e.value].choices&&t.value[e.value].maxSelectedChoices===1?u.value[e.value+1]=[o.value].flat(1/0):t.value[e.value].choices&&t.value[e.value].maxSelectedChoices>1?u.value[e.value+1]=[...o.value]:u.value[e.value+1]=[`${v.value}`]},w=()=>{const h=t.value[e.value].visibleIf.split(" ").map(s=>{if(s.includes("{"))return+s.replace(/[\D]+/g,"");if(s.includes("["))return s.slice(2,s.length-2)}).filter(s=>s),l={},i=[];for(let s=0;s<h.length;s++)Number.isInteger(h[s])&&(l[h[s]]=h[s+1]);for(let s in l)u.value[s].includes(l[s])?i.push(!0):i.push(!1);return!i.includes(!1)},y=()=>{w()||(e.value+=1,delete u.value[e.value],t.value[e.value].visibleIf&&y())},$=()=>{k(),e.value+=1,t.value[e.value].min&&g(),t.value[e.value].visibleIf&&y(),u.value[e.value+1]?o.value=[...u.value[e.value+1]]:o.value=[]},A=()=>{for(;!u.value[e.value];)e.value-=1;o.value=[...u.value[e.value]],v.value=+u.value[e.value][0],e.value-=1},B=()=>{k(),T.$patch({resultAnswers:{answers:u.value}})};return(h,l)=>(a(),n("section",H,[c("div",J,[c("p",K,p(t.value[e.value].title),1),c("p",O,p(t.value[e.value].description),1),t.value[e.value].choices&&t.value[e.value].maxSelectedChoices>1?(a(),n("div",P,[(a(!0),n(q,null,C(t.value[e.value].choices,(i,s)=>(a(),n("label",{for:s,key:s,class:S(["label",{checked:o.value.includes(i)}])},[b(c("input",{id:s,type:"checkbox",class:"hidden",value:i,"onUpdate:modelValue":l[0]||(l[0]=x=>o.value=x)},null,8,X),[[F,o.value]]),V(" "+p(i),1)],10,W))),128))])):m("",!0),t.value[e.value].choices&&t.value[e.value].maxSelectedChoices===1?(a(),n("div",Y,[(a(!0),n(q,null,C(t.value[e.value].choices,(i,s)=>(a(),n("label",{for:s,key:s,class:S(["label",{checked:o.value.includes(i)}])},[b(c("input",{id:s,type:"radio",class:"hidden",value:i,"onUpdate:modelValue":l[1]||(l[1]=x=>o.value=x)},null,8,ee),[[L,o.value]]),V(" "+p(i),1)],10,Z))),128))])):m("",!0),t.value[e.value].inputType==="number"?(a(),n("div",te,[c("div",se,[c("button",{class:"button-decrement",onClick:l[2]||(l[2]=i=>v.value-=1)}),c("div",ie,[b(c("input",{type:"number",min:_.value,max:f.value,"onUpdate:modelValue":l[3]||(l[3]=i=>v.value=i)},null,8,le),[[R,v.value]])]),c("button",{class:"button-increment",onClick:l[4]||(l[4]=i=>v.value+=1)})]),ce])):m("",!0)]),c("div",oe,[e.value>0?(a(),n("button",{key:0,class:"btn prev-btn",onClick:A}," \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ")):m("",!0),e.value<t.value.length-1?(a(),n("button",{key:1,class:"btn",onClick:$,disabled:!o.value.length&&t.value[e.value].choices}," \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ",8,ae)):(a(),I(M(Q),{key:2,to:"/result"},{default:D(()=>[c("button",{class:"btn",onClick:B},"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B")]),_:1}))])]))}};var ne=N(ue,[["__scopeId","data-v-c9a5f5dc"]]);const he={__name:"TestView",setup(r){return(t,e)=>(a(),I(ne))}};export{he as default};