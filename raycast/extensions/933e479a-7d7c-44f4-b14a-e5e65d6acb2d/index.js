"use strict";var x=Object.create;var m=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var C=(o,t)=>{for(var i in t)m(o,i,{get:t[i],enumerable:!0})},w=(o,t,i,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of L(t))!$.call(o,a)&&a!==i&&m(o,a,{get:()=>t[a],enumerable:!(l=F(t,a))||l.enumerable});return o};var f=(o,t,i)=>(i=o!=null?x(P(o)):{},w(t||!o||!o.__esModule?m(i,"default",{value:o,enumerable:!0}):i,o)),R=o=>w(m({},"__esModule",{value:!0}),o);var H={};C(H,{default:()=>b});module.exports=R(H);var e=require("@raycast/api"),s=f(require("fs")),h=f(require("path")),y=require("react"),r=require("react/jsx-runtime"),n=new Date;n.setHours(n.getHours()+100);var D=["Respond to \u2709 important work email",`Pay late \u{1F4B3} credit card bill before ${n.toLocaleDateString()}`,`Complete \u{1F4DA} math homework by ${n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`,`Return \u{1F519} overdue library books by ${n.toLocaleDateString()} `,`Confirm \u2705 flight for ${n.toLocaleDateString("en-us",{month:"long",day:"numeric",year:"numeric"})}`,"Call \u{1F4DE} doctor about medication refill","Reschedule \u{1F4C5} important meeting",`Submit \u2714 critical project update by ${n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`,"Follow up \u{1F4E9} on unanswered emails","Claim \u{1F4B0} unexpected refund",` Renew \u2705 expired license before ${n.toLocaleDateString()} `,`Pick up \u{1F6D2} groceries for dinner today by ${n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`,` Pay \u{1F4B8} overdue bills by ${n.toLocaleDateString()} `,"Submit \u2714 report ASAP","Call \u{1F4DE} doctor about concerning symptoms","Fill \u{1F58B} important paperwork","Respond to \u{1F465} team member's question","Reply to \u2709 important client email","Call \u{1F4DE} boss about project issue","Retrieve \u{1F4E5} crucial documents from home","Submit \u2705 time-sensitive request",`Pay \u{1F4B8} late rent by ${n.toLocaleDateString()} `,`Return \u{1F4E6} package by ${n.toLocaleDateString()} deadline `,"Book \u{1F6E9} last-minute flight",`Complete \u{1F4D2} report for ${n.toLocaleDateString("en-us",{month:"long",day:"numeric",year:"numeric"})} deadline`,`Withdraw \u{1F3E7} money from bank by ${n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})} `,"Make \u{1F4DE} important phone call","Apply for \u{1F4DD} time-sensitive opportunity","Proofread \u{1F440} critical document","Contact \u{1F4DE} insurance about claim",`Submit \u{1F4DD} assignment by ${n} `,`Pick up\u{1F6D2} groceries for tonight's dinner by ${n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})} `,`Renew \u2705 expiring subscription before ${n.toLocaleDateString()} `,"Receive \u{1F4E6} important package delivery","Investigate \u{1F575}\uFE0F\u200D\u2640\uFE0F work issue ASAP"],M=D[Math.floor(Math.random()*D.length)],A=(0,e.getPreferenceValues)(),u=A.rfd,c=h.default.join(e.environment.supportPath,"remembering.csv");function b(o){(0,y.useEffect)(()=>{o.arguments?.thingtor&&(t({textfield:"",datepicker:new Date,checkbox:!1,tokeneditor:[],textarea:o.arguments.thingtor,dropdown:u})?((0,e.launchCommand)({name:"view",type:e.LaunchType.UserInitiated}),(0,e.launchCommand)({name:"menu",type:e.LaunchType.UserInitiated})):(0,e.popToRoot)())},[u]);function t(i){if(!i.textarea)return(0,e.showToast)({title:"No input provided!",message:"Please input something to remember!",style:e.Toast.Style.Failure}),!1;let l=!1;try{s.default.accessSync(c),l=!0}catch{console.log("File does not exist. Creating a new file...")}if(l){let p=s.default.readFileSync(c,"utf-8").toLowerCase().split(`
`),T=i.textarea.toLowerCase(),g=!1,k=T.replace(/,/g,"||&|");for(let I of p)if(I.split(",")[1]===k){g=!0;break}if(g)return(0,e.showToast)({title:"Input already exists!",message:"Please input something else to remember!",style:e.Toast.Style.Failure}),!1}let a=E(i.dropdown),S="||&|",v=i.textarea.replace(/,/g,S),d=`
${a.toISOString()},${v}`;return l?s.default.appendFileSync(c,d):s.default.writeFileSync(c,d),(0,e.launchCommand)({name:"view",type:e.LaunchType.UserInitiated}),(0,e.launchCommand)({name:"menu",type:e.LaunchType.UserInitiated}),(0,e.showToast)({title:"Remembering That!"}),!0}return(0,r.jsxs)(e.Form,{actions:(0,r.jsxs)(e.ActionPanel,{children:[(0,r.jsx)(e.Action.SubmitForm,{icon:e.Icon.CircleProgress100,onSubmit:t,shortcut:{modifiers:["cmd"],key:"enter"}}),(0,r.jsx)(e.Action,{title:"Change Default Time",icon:e.Icon.Hammer,onAction:e.openExtensionPreferences,shortcut:{modifiers:["opt"],key:"enter"}})]}),children:[(0,r.jsx)(e.Form.Description,{text:"Motivate yourself to stay on top of your deadlines"}),(0,r.jsx)(e.Form.TextField,{id:"textarea",title:"Remember This:",placeholder:M}),(0,r.jsxs)(e.Form.Dropdown,{id:"dropdown",title:"For:",defaultValue:u.toString(),children:[(0,r.jsx)(e.Form.Dropdown.Item,{value:"30min",title:"30 Minutes"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"1h",title:"1 Hour"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"2h",title:"2 Hours"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"6h",title:"6 Hours"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"12h",title:"12 Hours"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"1day",title:"1 Day"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"2day",title:"2 Days"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"1week",title:"1 Week"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"2week",title:"2 Weeks"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"1month",title:"1 Month"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"3month",title:"3 Months"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"6month",title:"6 Months"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"1year",title:"1 Year"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"2year",title:"2 Years"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"5year",title:"5 Years"}),(0,r.jsx)(e.Form.Dropdown.Item,{value:"Forever",title:"Forever"})]})]})}function E(o){let t=new Date;switch(o){case"Forever":return new Date(t.getFullYear()+100,0,1);case"1day":return new Date(t.getTime()+24*60*60*1e3);case"2day":return new Date(t.getTime()+2*24*60*60*1e3);case"1week":return new Date(t.getTime()+7*24*60*60*1e3);case"2week":return new Date(t.getTime()+14*24*60*60*1e3);case"1month":return new Date(t.getTime()+30*24*60*60*1e3);case"3month":return new Date(t.getTime()+90*24*60*60*1e3);case"6month":return new Date(t.getTime()+180*24*60*60*1e3);case"1year":return new Date(t.getTime()+365*24*60*60*1e3);case"2year":return new Date(t.getTime()+730*24*60*60*1e3);case"5year":return new Date(Date.UTC(t.getFullYear()+5,t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));case"10min":return new Date(t.getTime()+10*60*1e3);case"30min":return new Date(t.getTime()+30*60*1e3);case"1h":return new Date(t.getTime()+60*60*1e3);case"2h":return new Date(t.getTime()+2*60*60*1e3);case"6h":return new Date(t.getTime()+6*60*60*1e3);case"12h":return new Date(t.getTime()+12*60*60*1e3);default:return new Date(t.getFullYear()+100,0,1)}}