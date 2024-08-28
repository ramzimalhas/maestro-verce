"use strict";var d=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var f=(e,o)=>{for(var s in o)d(e,s,{get:o[s],enumerable:!0})},T=(e,o,s,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of u(o))!h.call(e,i)&&i!==s&&d(e,i,{get:()=>o[i],enumerable:!(n=m(o,i))||n.enumerable});return e};var I=e=>T(d({},"__esModule",{value:!0}),e);var H={};f(H,{default:()=>p});module.exports=I(H);var t=require("@raycast/api"),c=require("react"),r=require("react/jsx-runtime"),l=async e=>{await t.Clipboard.copy(e),await(0,t.showHUD)("Copied!",{clearRootSearch:!0,popToRootType:t.PopToRootType.Immediate})},y=async(e,o)=>{let s=await t.LocalStorage.getItem("history");if(s){let i=JSON.parse(s).filter(a=>a.id!==e);await t.LocalStorage.setItem("history",JSON.stringify(i)),o(i.reverse())}await(0,t.showHUD)("Entry deleted",{clearRootSearch:!0,popToRootType:t.PopToRootType.Immediate})};function p(){let[e,o]=(0,c.useState)([]),[s,n]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{async function i(){try{let a=await t.LocalStorage.getItem("history");if(a){let g=JSON.parse(a);o(g.reverse())}}catch(a){console.error("Error loading history:",a)}finally{n(!1)}}i()},[]),(0,r.jsx)(t.List,{isLoading:s,children:e.map(i=>(0,r.jsx)(t.List.Item,{title:i.originalText,subtitle:i.shakespearifiedText,accessories:[{text:new Date(i.timestamp).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})}],actions:(0,r.jsxs)(t.ActionPanel,{children:[(0,r.jsx)(t.Action,{title:"Copy Shakespearified!",icon:t.Icon.QuoteBlock,onAction:()=>l(i.shakespearifiedText)}),(0,r.jsx)(t.Action,{title:"Copy Original!",icon:t.Icon.Clipboard,onAction:()=>l(i.originalText)}),(0,r.jsx)(t.Action.Push,{title:"View Details",icon:t.Icon.Eye,target:(0,r.jsx)(S,{item:i,setHistoryItems:o})}),(0,r.jsx)(t.Action,{title:"Delete Entry",icon:t.Icon.Trash,style:t.Action.Style.Destructive,onAction:()=>y(i.id,o)})]})},`${i.id}-${i.timestamp}`))})}function S({item:e,setHistoryItems:o}){let s=`
## Shakespearified Wise Text

> ${e.shakespearifiedText.replace(/\n/g,`
> `)}
 
---

## Original Text

> ${e.originalText.replace(/\n/g,`
> `)}

---

> *${new Date(e.timestamp).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})}*
    `;return(0,r.jsx)(t.Detail,{markdown:s,actions:(0,r.jsxs)(t.ActionPanel,{children:[(0,r.jsx)(t.Action,{title:"Copy Shakespearified!",icon:t.Icon.QuoteBlock,onAction:()=>l(e.shakespearifiedText)}),(0,r.jsx)(t.Action,{title:"Copy Original!",icon:t.Icon.Clipboard,onAction:()=>l(e.originalText)}),(0,r.jsx)(t.Action,{title:"Delete Entry",icon:t.Icon.Trash,style:t.Action.Style.Destructive,onAction:()=>y(e.id,o)})]})})}
