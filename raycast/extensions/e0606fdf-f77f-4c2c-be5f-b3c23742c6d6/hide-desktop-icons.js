"use strict";var r=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var k=Object.prototype.hasOwnProperty;var D=(e,o)=>{for(var n in o)r(e,n,{get:o[n],enumerable:!0})},w=(e,o,n,d)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of m(o))!k.call(e,t)&&t!==n&&r(e,t,{get:()=>o[t],enumerable:!(d=l(o,t))||d.enumerable});return e};var g=e=>w(r({},"__esModule",{value:!0}),e);var H={};D(H,{default:()=>x});module.exports=g(H);var u=require("@raycast/api");var c=require("child_process");var s=require("child_process");function i(){(0,s.spawnSync)("defaults",["write","com.apple.finder","CreateDesktop","false"]),(0,s.spawnSync)("killall",["Finder"])}var a=require("child_process");function p(){(0,a.spawnSync)("defaults",["write","com.apple.WindowManager","StandardHideDesktopIcons","-bool","true"])}function W(){let{stdout:e}=(0,c.spawnSync)("sw_vers",["-productVersion"],{encoding:"utf-8"});return parseInt(e.trim().split(".")[0])}function S(){return W()==14}function f(){S()?p():i()}async function x(){f(),await(0,u.showHUD)("Desktop Icons Hidden")}