"use strict";var o=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var s=(a,i)=>{for(var t in i)o(a,t,{get:i[t],enumerable:!0})},w=(a,i,t,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let e of f(i))!m.call(a,e)&&e!==t&&o(a,e,{get:()=>i[e],enumerable:!(n=d(i,e))||n.enumerable});return a};var c=a=>w(o({},"__esModule",{value:!0}),a);var l={};s(l,{default:()=>p});module.exports=c(l);var r=require("@raycast/api");async function p(){await(0,r.open)("https://readwise.io/dailyreview")}