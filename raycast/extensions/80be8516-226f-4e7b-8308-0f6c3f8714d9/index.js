"use strict";var I=Object.create;var u=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var A=(e,t)=>{for(var o in t)u(e,o,{get:t[o],enumerable:!0})},P=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of S(t))!k.call(e,s)&&s!==o&&u(e,s,{get:()=>t[s],enumerable:!(r=T(t,s))||r.enumerable});return e};var d=(e,t,o)=>(o=e!=null?I(b(e)):{},P(t||!e||!e.__esModule?u(o,"default",{value:e,enumerable:!0}):o,e)),F=e=>P(u({},"__esModule",{value:!0}),e);var U={};A(U,{default:()=>C});module.exports=F(U);var c=require("react"),i=require("@raycast/api");var v=d(require("util")),j=d(require("child_process")),V=d(require("os")),l=require("@raycast/api"),L=v.default.promisify(j.default.exec);async function x(){switch(V.default.platform()){case"darwin":return M();default:throw new Error("Unsupported environment")}}async function M(){let e="ls /Volumes",t={timeout:0},o=[];try{let{stderr:r,stdout:s}=await L(e,t);o=B(s)}catch(r){console.log(r.message),(0,l.showToast)(l.ToastStyle.Failure,"Error listing volumes",r.message)}return o}function B(e){let t="~~~~~~~~~",o=e.replace(/\n/g,t),s=(0,l.getPreferenceValues)()?.ignoredVolumes?.split(","),m=o.split(t).map(n=>({name:n})).filter(n=>n.name!=="").filter(n=>!n.name.includes("TimeMachine.localsnapshots"));return s!=null&&(m=m.filter(n=>s.findIndex(p=>p===n.name)<0)),m}async function E(e){let t={timeout:0},o;switch(V.default.platform()){case"darwin":o='/usr/sbin/diskutil eject "'+e.name+'"';break;case"linux":o='eject -f "'+e.name+'"* 2>/dev/null || /bin/true';break;default:throw new Error("Unsupported environment")}await L(o,t)}var a=require("@raycast/api"),f=require("react/jsx-runtime");function w(e){let{volume:t,eject:o}=e;return(0,f.jsx)(a.List.Item,{id:t.name,title:t.name,subtitle:"Select to eject",icon:"list-icon.png",actions:(0,f.jsx)(a.ActionPanel,{children:(0,f.jsx)(a.ActionPanel.Item,{title:"Eject Volume",onAction:()=>o(t)})})},t.name)}var h=require("react/jsx-runtime");function g(){let[e,t]=(0,c.useState)([]),[o,r]=(0,c.useState)(!0);async function s(){r(!0),t(await x()),r(!1)}async function y(m){let n=new i.Toast({style:i.ToastStyle.Animated,title:`Ejecting ${m.name}...`});await n.show();try{await E(m),await n.hide(),(0,i.showToast)(i.ToastStyle.Success,`Successfully Ejected ${m.name}`)}catch(p){console.log(">>> Error: ",p.message),await n.hide(),(0,i.showToast)(i.ToastStyle.Failure,"Error ejecting volume. Is it in use?")}await s()}return(0,c.useEffect)(()=>{s()},[]),(0,h.jsx)(i.List,{isLoading:o,searchBarPlaceholder:"Filter Volumes By Name...",children:e.map(m=>(0,h.jsx)(w,{volume:m,eject:y},m.name))})}var C=g;