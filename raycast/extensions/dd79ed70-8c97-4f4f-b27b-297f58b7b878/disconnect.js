"use strict";var m=Object.create;var r=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var y=(t,e)=>{for(var o in e)r(t,o,{get:e[o],enumerable:!0})},i=(t,e,o,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of h(e))!R.call(t,s)&&s!==o&&r(t,s,{get:()=>e[s],enumerable:!(c=f(e,s))||c.enumerable});return t};var S=(t,e,o)=>(o=t!=null?m(g(t)):{},i(e||!t||!t.__esModule?r(o,"default",{value:t,enumerable:!0}):o,t)),k=t=>i(r({},"__esModule",{value:!0}),t);var T={};y(T,{default:()=>F});module.exports=k(T);var n=require("@raycast/api");var a=require("@raycast/api"),u=require("child_process"),l=S(require("util")),C=l.default.promisify(u.exec),x=(0,a.getPreferenceValues)(),P="/Applications/Cloudflare WARP.app/Contents/Resources/warp-cli",b=x.wrapCliPath??P;function d(t){return C(`"${b}" ${t}`)}async function w(){try{let{stdout:t}=await d("disconnect");if(t.includes("Success"))return!0;throw new Error("Failed to connect")}catch(t){return console.error(t),!1}}async function p(){let{stdout:t}=await d("status"),e=t.trim().split(`
`);return e.length<2?{status:"disconnected",disconnectReason:"unknown"}:e[1].includes("Disconnected")?{status:"disconnected",disconnectReason:e[1].substring(37)}:e[1].includes("Connected")?{status:"connected",disconnectReason:""}:{status:"unknown",disconnectReason:"unknown"}}var F=async()=>{try{if((await p()).status==="disconnected"){await(0,n.showHUD)("Not connected",{clearRootSearch:!0,popToRootType:n.PopToRootType.Immediate});return}if(await w()){await(0,n.showHUD)("Disconnected",{clearRootSearch:!0,popToRootType:n.PopToRootType.Immediate});return}throw new Error("Failed to disconnect")}catch{await(0,n.showToast)({style:n.Toast.Style.Failure,title:"Failed to disconnect"})}};