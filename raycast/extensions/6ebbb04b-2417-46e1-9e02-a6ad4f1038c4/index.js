"use strict";var i=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var h=(s,e)=>{for(var n in e)i(s,n,{get:e[n],enumerable:!0})},m=(s,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of u(e))!d.call(s,o)&&o!==n&&i(s,o,{get:()=>e[o],enumerable:!(r=l(e,o))||r.enumerable});return s};var p=s=>m(i({},"__esModule",{value:!0}),s);var g={};h(g,{default:()=>c});module.exports=p(g);var t=require("@raycast/api"),a=require("node:child_process"),f=s=>typeof s=="object"&&s!==null&&"status"in s&&"stdout"in s&&"stderr"in s,S={mDNSResponder:"sudo /usr/bin/killall -HUP mDNSResponder",dscacheutil:"sudo /usr/bin/dscacheutil -flushcache",mdnsflushcache:"sudo /usr/bin/discoveryutil mdnsflushcache"};async function c(){let s=(0,a.execSync)("sw_vers -productVersion").toString().trim(),e=[];if(s.match(/^1[1-4]/))console.log(`OS Version: ${s} parsed as 11-14`),e.push("dscacheutil","mDNSResponder");else if(s.match(/^10\.([7-9]|1[1-4])/)||s.match(/^10\.10\.[4-5]/))console.log(`OS Version: ${s} parsed as 10.7-9, 10.10.4-5, 10.11-14`),e.push("mDNSResponder");else if(s.match(/^10\.10\.[0-3]/))console.log(`OS Version: ${s} parsed as 10.10.0-3`),e.push("mdnsflushcache");else if(s.startsWith("10.6"))console.log(`OS Version: ${s} parsed as 10.6`),e.push("dscacheutil");else{if(!await(0,t.confirmAlert)({title:`OS Version ${s} is not supported.`,message:"Would you like to try flushing the DNS cache anyway?",primaryAction:{title:"Flush DNS Cache"},dismissAction:{title:"Cancel"}}))return;e.push("dscacheutil","mDNSResponder")}let r=`osascript -e 'do shell script "${e.map(o=>S[o]).join("; ")}" with administrator privileges'`;console.log(`Running command: ${r}`),await(0,t.showHUD)("Administrator Privileges Required");try{(0,a.execSync)(r,{shell:"/bin/bash"}),await(0,t.showHUD)("DNS Cache Flushed")}catch(o){f(o)?(console.error(`Command exited with status ${o.status}`),console.error(`stdout: ${o.stdout.toString()}`),console.error(`stderr: ${o.stderr.toString()}`)):console.error(o),await(0,t.showHUD)("Error Flushing DNS Cache")}}