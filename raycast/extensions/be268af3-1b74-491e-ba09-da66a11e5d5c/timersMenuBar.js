"use strict";var B=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var ee=(e,t)=>{for(var n in t)B(e,n,{get:t[n],enumerable:!0})},te=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let m of X(t))!Z.call(e,m)&&m!==n&&B(e,m,{get:()=>t[m],enumerable:!(r=Q(t,m))||r.enumerable});return e};var ne=e=>te(B({},"__esModule",{value:!0}),e);var re={};ee(re,{default:()=>K});module.exports=ne(re);var a=require("@raycast/api"),G=require("react");var D=require("react");var f=require("@raycast/api"),x=require("child_process"),A=require("crypto"),i=require("fs"),J=require("path");var M=e=>{let t=Math.floor(e/3600),n=String(Math.floor(e%3600/60)).padStart(2,"0"),r=String(Math.floor(e%60)).padStart(2,"0");return`${t===0?"":t+":"}${n}:${r}`};var V=e=>(e.d1=e.d1=="----"?void 0:e.d1,e.d2=e.d2=="----"?void 0:e.d2,Math.round((e.d1?new Date(e.d1):new Date).getTime()-(e.d2?new Date(e.d2):new Date).getTime())/1e3);var c=require("@raycast/api"),N=(e,t)=>(e==null||e.length==0||e.length==null)&&!["always","onlyWhenNotRunning"].includes(t.showMenuBarIconWhen),I=e=>{let t=(0,c.getPreferenceValues)();if(e.launchedFromMenuBar||t.closeWindowOnTimerStart){let n=e.isErr?"\u26A0\uFE0F":"\u{1F389}";return(0,c.showHUD)(`${n} ${e.msg}`),(0,c.popToRoot)()}else(0,c.showToast)({style:e.isErr?c.Toast.Style.Failure:c.Toast.Style.Success,title:e.msg})};var g=f.environment.supportPath+"/customTimers.json",w=f.environment.supportPath+"/defaultPresetVisibles.json",k=e=>{try{(0,i.unlinkSync)(e)}catch(t){if(t instanceof Error&&!t.message.includes("ENOENT"))throw t}},E=(e=!1)=>{let t=(0,f.getPreferenceValues)();return parseFloat(t.volumeSetting)>5?(I({msg:"Timer alert volume should not be louder than 5 (it can get quite loud!)",launchedFromMenuBar:e,isErr:!0}),!1):!0};async function O({timeInSeconds:e,timerName:t="Untitled",launchedFromMenuBar:n=!1,selectedSound:r="default"}){let l=(f.environment.supportPath+"/"+new Date().toISOString()+"---"+e+".timer").replace(/:/g,"__");(0,i.writeFileSync)(l,t);let u=(0,f.getPreferenceValues)(),C=`${f.environment.assetsPath+"/"+(r==="default"?u.selectedSound:r)}`,p=[`sleep ${e}`];p.push(`if [ -f "${l}" ]; then osascript -e 'display notification "Timer \\"${t}\\" complete" with title "Ding!"'`);let P=`afplay "${C}" --volume ${u.volumeSetting.replace(",",".")}`;if(u.selectedSound==="speak_timer_name"?p.push(`say "${t}"`):p.push(P),u.ringContinuously){let h=`${l}`.replace(".timer",".dismiss");(0,i.writeFileSync)(h,".dismiss file for Timers"),p.push(`while [ -f "${h}" ]; do ${P}; done`)}p.push(`rm "${l}"; else echo "Timer deleted"; fi`),(0,x.exec)(p.join(" ; "),(h,S)=>{if(h){console.log(`error: ${h.message}`);return}if(S){console.log(`stderr: ${S}`);return}}),I({msg:`Timer "${t}" started for ${M(e)}!`,launchedFromMenuBar:n,isErr:!1})}function v(e){let t=f.environment.supportPath+"/"+e,n=t.replace(".timer",".dismiss");k(t),k(n)}function R(){let e=[];return(0,i.readdirSync)(f.environment.supportPath).forEach(n=>{if((0,J.extname)(n)==".timer"){let r={name:"",secondsSet:-99,timeLeft:-99,originalFile:n,timeEnds:new Date};r.name=(0,i.readFileSync)(f.environment.supportPath+"/"+n).toString();let m=n.split("---");r.secondsSet=Number(m[1].split(".")[0]);let l=m[0].replace(/__/g,":");r.timeLeft=Math.max(0,Math.round(r.secondsSet-V({d2:l}))),r.timeEnds=new Date(l),r.timeEnds.setSeconds(r.timeEnds.getSeconds()+r.secondsSet),e.push(r)}}),e.sort((n,r)=>n.timeLeft-r.timeLeft),e}function b(){(0,i.existsSync)(g)||(0,i.writeFileSync)(g,JSON.stringify({}))}function _(e){b();let t=JSON.parse((0,i.readFileSync)(g,"utf8"));t[(0,A.randomUUID)()]=e,(0,i.writeFileSync)(g,JSON.stringify(t))}function j(){b();let e=JSON.parse((0,i.readFileSync)(g,"utf8"));return Object.fromEntries(Object.entries(e).map(([t,n])=>n.showInMenuBar===void 0?[t,{...n,showInMenuBar:!0}]:[t,n]))}function U(e){b();let t=JSON.parse((0,i.readFileSync)(g,"utf8"));delete t[e],(0,i.writeFileSync)(g,JSON.stringify(t))}function W(e){b();let t=JSON.parse((0,i.readFileSync)(g,"utf8")),n=t[e].showInMenuBar;t[e].showInMenuBar=n===void 0?!1:!n,(0,i.writeFileSync)(g,JSON.stringify(t))}var H=()=>{if(!(0,i.existsSync)(w)){let t={"2M":!0,"5M":!0,"10M":!0,"15M":!0,"30M":!0,"45M":!0,"60M":!0,"90M":!0};return(0,i.writeFileSync)(w,JSON.stringify(t)),t}return JSON.parse((0,i.readFileSync)(w,"utf8"))},Y=e=>{let t=JSON.parse((0,i.readFileSync)(w,"utf8"));t[e]=!t[e],(0,i.writeFileSync)(w,JSON.stringify(t))};var y=require("@raycast/api");function L(){let[e,t]=(0,D.useState)(void 0),[n,r]=(0,D.useState)({}),[m,l]=(0,D.useState)(e===void 0),u=()=>{b();let o=R();t(o);let T=j();r(T),l(!1)};return{timers:e,customTimers:n,isLoading:m,refreshTimers:u,handleStartTimer:o=>{E(o.launchedFromMenuBar)&&(O(o),u())},handleStopTimer:o=>{t(e?.filter(T=>T.originalFile!==o.originalFile)),v(o.originalFile),u()},handleStartCT:({customTimer:o,launchedFromMenuBar:T})=>{E(T)&&(O({timeInSeconds:o.timeInSeconds,launchedFromMenuBar:T,timerName:o.name,selectedSound:o.selectedSound}),u())},handleCreateCT:o=>{let T={name:o.name,timeInSeconds:o.secondsSet,selectedSound:"default",showInMenuBar:!0};_(T),u()},handleDeleteCT:async o=>{let T={title:"Delete this preset?",icon:y.Icon.Trash,message:"You won't be able to recover it.",dismissAction:{title:"Cancel",style:y.Alert.ActionStyle.Cancel},primaryAction:{title:"Delete",style:y.Alert.ActionStyle.Destructive}};await(0,y.confirmAlert)(T)&&(U(o),u())},handleToggleCTVisibility:async o=>{W(o),u()}}}var q=(e,t)=>{if(e===void 0||e?.length===0||e.length==null)return;let n="timeLeft"in e[0]?e[0].timeLeft:e[0].timeElapsed;return t.showTitleInMenuBar?`${e[0].name}: ~${M(n)}`:`~${M(n)}`},z=(e,t,n)=>{switch(t.showMenuBarIconWhen){case"always":return n;case"never":return;case"onlyWhenRunning":return e!==void 0&&e?.length>0?n:void 0;case"onlyWhenNotRunning":return e===void 0||e?.length===0?n:void 0}};var $=require("react");function F(){let e=[{key:"2M",title:"2 Minute Timer",seconds:120},{key:"5M",title:"5 Minute Timer",seconds:300},{key:"10M",title:"10 Minute Timer",seconds:600},{key:"15M",title:"15 Minute Timer",seconds:900},{key:"30M",title:"30 Minute Timer",seconds:1800},{key:"45M",title:"45 Minute Timer",seconds:2700},{key:"60M",title:"60 Minute Timer",seconds:3600},{key:"90M",title:"90 Minute Timer",seconds:5400}],[t,n]=(0,$.useState)(),[r,m]=(0,$.useState)(t===void 0),l=()=>{n(H()),m(!1)};return{defaultPresets:e,defaultVisibles:t,isLoadingVisibles:r,refreshDefaultVisibles:l,handleDefaultPresetToggle:C=>{Y(C),l()}}}var d=require("react/jsx-runtime");function K(){let{timers:e,customTimers:t,isLoading:n,refreshTimers:r,handleStartTimer:m,handleStopTimer:l,handleStartCT:u}=L(),{defaultPresets:C,defaultVisibles:p,refreshDefaultVisibles:P,isLoadingVisibles:h}=F();(0,G.useEffect)(()=>{r(),P(),setInterval(()=>{r()},1e3)},[]),n&&r();let S=(0,a.getPreferenceValues)();return N(e,S)?null:(0,d.jsxs)(a.MenuBarExtra,{icon:z(e,S,a.Icon.Clock),isLoading:n&&h,title:q(e,S),children:[(0,d.jsx)(a.MenuBarExtra.Item,{title:"Click running timer to stop"}),e?.map(s=>(0,d.jsx)(a.MenuBarExtra.Item,{title:s.name+": "+M(s.timeLeft)+" left",onAction:()=>l(s)},s.originalFile)),(0,d.jsx)(a.MenuBarExtra.Section,{children:Object.keys(t)?.sort((s,o)=>t[s].timeInSeconds-t[o].timeInSeconds).filter(s=>t[s].showInMenuBar).map(s=>(0,d.jsx)(a.MenuBarExtra.Item,{title:'Start "'+t[s].name+'"',onAction:()=>u({customTimer:t[s],launchedFromMenuBar:!0})},s))}),(0,d.jsx)(a.MenuBarExtra.Section,{children:C.filter(s=>p?.[s.key]).map(s=>(0,d.jsx)(a.MenuBarExtra.Item,{title:`Start ${s.title}`,onAction:()=>m({timeInSeconds:s.seconds,timerName:s.title,launchedFromMenuBar:!0})},s.key))}),(0,d.jsx)(a.MenuBarExtra.Section,{title:"Custom Timer",children:(0,d.jsx)(a.MenuBarExtra.Item,{title:"Start Custom Timer",onAction:async()=>await(0,a.launchCommand)({name:"startCustomTimer",type:a.LaunchType.UserInitiated})},"custom")})]})}