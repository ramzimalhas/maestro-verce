"use strict";var D=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var R=(t,n)=>{for(var o in n)D(t,o,{get:n[o],enumerable:!0})},X=(t,n,o,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of C(n))!T.call(t,i)&&i!==o&&D(t,i,{get:()=>n[i],enumerable:!(s=E(n,i))||s.enumerable});return t};var L=t=>X(D({},"__esModule",{value:!0}),t);var H={};R(H,{default:()=>O});module.exports=L(H);var e=require("@raycast/api"),_=require("child_process"),a=require("react");var k=require("@raycast/api");function u(){return(0,k.getPreferenceValues)().pref_smb_ip}function x(){return(0,k.getPreferenceValues)().pref_smb_usr}function I(){return(0,k.getPreferenceValues)().pref_smb_pwd}function f(t){return new Promise(n=>setTimeout(n,t))}var $=require("child_process");function A(t,n){let o=!1;return n.forEach(s=>{s.split("-")[0]==t&&(o=!0)}),o}function v(t,n){let o="";return n.forEach(s=>{s.split("-")[0]==t&&(o="/Volumes/"+s)}),o}async function M(t){let n="@"+u();(0,$.exec)(`/sbin/mount | /usr/bin/grep --context=0 ${n}`,(o,s)=>{let l=s.split(`
`).filter(c=>c.includes(u())).map(c=>c.split("on /Volumes/")[1].split(" (")[0]);t(l)})}var U=require("child_process");var b=require("@raycast/api");async function F(t){let n=u(),o=x(),s=I();(0,U.exec)(`/usr/bin/smbutil -v view -f //${o}:${s}@${n} | awk '/Disk/ {print $1}' FS="  "`,async(i,l,c)=>{if(i)t([]),c.includes("/opt/homebrew/bin/smbclient: No such file or directory")&&await(0,b.confirmAlert)({title:"You have not installed samba",icon:b.Icon.Warning,message:"Please install it via `brew install samba`."});else try{let m=[];l.split(`
`).forEach(d=>{d.length!=0&&m.push(d)}),t(m)}catch{t([])}})}var S=require("child_process");function G(t){let n=t.split(`
`);return n.pop(),n.map(s=>{let i=s.trim().split(/\s+/);return{filesystem:decodeURI(i[0]),"1G-blocks":parseInt(i[1],10),used:parseInt(i[2],10),available:parseInt(i[3],10),capacity:i[4],iused:parseInt(i[5],10),ifree:parseInt(i[6],10),percentIused:i[7],mountedOn:i.slice(8).join(" ")}})}function V(t){let n=[];return decodeURI(t).split(`
`).forEach(i=>{if(i.length!=0){let l=i.split(" on ")[0],c=i.split(" on ")[1].split(" (")[0];n.push({network_source:l,mounted_location:c})}}),n}async function P(t){let n="@"+u();(0,S.exec)(`/sbin/mount | /usr/bin/grep --context=0 ${n}`,(o,s)=>{let i=V(s);(0,S.exec)(`/bin/df -c -g | /usr/bin/grep --context=0 "${n}"`,(l,c)=>{let m=G(c);m.forEach(p=>{let d=i.map(g=>g.mounted_location),w=i.map(g=>g.network_source).indexOf(p.filesystem),y=d[w];p.mountedOn=y}),t(m)})})}function N(t,n){for(let o=0;o<n.length;o++){let s=n[o];if(s.filesystem.includes(t))return s}}var r=require("react/jsx-runtime");function O(){let[t,n]=(0,a.useState)([]),[o,s]=(0,a.useState)([]),[i,l]=(0,a.useState)([]),[c,m]=(0,a.useState)(!1),[p,d]=(0,a.useState)(!0),[h,w]=(0,a.useState)(!1),y=(0,a.useRef)(t);return y.current=t,(0,a.useEffect)(()=>{d(!0),F(n),M(s),P(l),m(!1)},[c]),setTimeout(()=>{y.current.length==0?(d(!1),w(!0)):d(!1)},5e3),(0,r.jsxs)(e.List,{isLoading:p&&t.length==0,children:[h&&(0,r.jsx)(e.List.EmptyView,{title:"Failed to Fetch Disk Information",description:"Check settings in preferences",icon:e.Icon.Warning,actions:(0,r.jsx)(e.ActionPanel,{children:(0,r.jsx)(e.Action,{title:"Open Extension Preferences",onAction:()=>{(0,e.openExtensionPreferences)(),(0,e.popToRoot)()}})})}),t?.map(g=>(0,r.jsx)(B,{vol:g,info:i,mounted_vols:o,set_update:m},g))]})}function B(t){let n=A(t.vol,t.mounted_vols),o=N(t.vol,t.info),s="XX",i="XX",l="XX%";return o!=null&&(s=(o.iused/1024**3).toFixed(2),i=(o.ifree/1024**3).toFixed(2),l=o.capacity),(0,r.jsx)(e.List.Item,{title:t.vol,actions:(0,r.jsx)(W,{vol:t.vol,mounted_vols:t.mounted_vols,set_update:t.set_update}),icon:n?{source:e.Icon.CheckCircle,tintColor:e.Color.Green}:{source:e.Icon.Circle},accessories:n?[{tag:{value:`${s} TB`,color:e.Color.Red},tooltip:"iUsed"},{tag:{value:`${i} TB`,color:e.Color.Green},tooltip:"iFree"},{tag:{value:`${l}`,color:e.Color.PrimaryText},tooltip:"Capacity"}]:[]})}function W(t){return(0,r.jsxs)(e.ActionPanel,{children:[(0,r.jsxs)(e.ActionPanel.Section,{title:"Quick Option",children:[(0,r.jsx)(e.Action,{title:"Mount/Unmount",onAction:async()=>{A(t.vol,t.mounted_vols)?((0,e.showToast)({title:"Unmounting...",style:e.Toast.Style.Animated}),A(t.vol,t.mounted_vols)?(0,_.exec)(`/usr/sbin/diskutil unmount "${v(t.vol,t.mounted_vols)}"`,async(o,s)=>{await f(1e3),s.includes("Unmount successful")?(0,e.showToast)({title:`${t.vol} Unmounted`,style:e.Toast.Style.Success}):(0,e.showToast)({title:"Action Failed",style:e.Toast.Style.Failure}),t.set_update(!0)}):(0,e.showToast)({title:`${t.vol} is Already Unmounted`,style:e.Toast.Style.Failure})):((0,e.showToast)({title:"Mounting...",style:e.Toast.Style.Animated}),(0,_.exec)(`osascript -e 'mount volume "smb://${u()}/${t.vol}"'`,async o=>{o&&(0,e.showToast)({title:"Action Failed"}),await f(1e3),(0,e.showToast)({title:`${t.vol}  Mounted`}),t.set_update(!0)}))}}),(0,r.jsx)(e.Action,{title:"Mount and Open",onAction:async()=>{(0,e.showToast)({title:"Mounting...",style:e.Toast.Style.Animated}),(0,_.exec)(`osascript -e 'mount volume "smb://${u()}/${t.vol}"'`,async n=>{await f(1e3),n&&(0,e.showHUD)("Action Failed \u26A0\uFE0F"),(0,_.exec)(`open "${v(t.vol,t.mounted_vols)}"`),(0,e.showHUD)(`Mounted  [${t.vol}]  \u{1F680}\u{1F316}`)})}}),(0,r.jsx)(e.Action,{title:"Unmount All",shortcut:{modifiers:["ctrl","shift"],key:"x"},onAction:async()=>{await(0,e.confirmAlert)({icon:e.Icon.AlarmRinging,title:`Are you sure you want to 
 "Unmount All Drives" ?`})&&((0,e.showToast)({title:"Unmounting All...",style:e.Toast.Style.Animated}),t.mounted_vols==null||t.mounted_vols.length==0?(await f(1e3),(0,e.showHUD)("Unmounted All  \u{1FA82}\u{1F30D}")):(await f(1e3),t.mounted_vols.forEach(n=>{(0,_.exec)(`/usr/sbin/diskutil unmount "${v(n,t.mounted_vols)}"`,async o=>{o&&(0,e.showToast)({title:"Action Failed",style:e.Toast.Style.Failure}),(0,e.showHUD)("Unmounted All  \u{1FA82}\u{1F30D}"),t.set_update(!0)})})))}})]}),(0,r.jsxs)(e.ActionPanel.Section,{title:"Specific Option",children:[(0,r.jsx)(e.Action,{title:"Mount",shortcut:{modifiers:["cmd"],key:"o"},onAction:async()=>{(0,e.showToast)({title:"Mounting...",style:e.Toast.Style.Animated}),await f(1e3),(0,_.exec)(`osascript -e 'mount volume "smb://${u()}/${t.vol}"'`,async n=>{n&&(0,e.showToast)({title:"Action Failed"}),(0,e.showToast)({title:`${t.vol} Mounted`}),t.set_update(!0)})}}),(0,r.jsx)(e.Action,{title:"Unmount",shortcut:{modifiers:["ctrl"],key:"x"},onAction:async()=>{(0,e.showToast)({title:"Unmounting...",style:e.Toast.Style.Animated}),await f(1e3),t.mounted_vols.includes(t.vol)?(0,_.exec)(`/usr/sbin/diskutil unmount "${v(t.vol,t.mounted_vols)}"`,async(n,o)=>{o.includes("Unmount successful")?(0,e.showToast)({title:`${t.vol} Unmounted`,style:e.Toast.Style.Success}):(0,e.showToast)({title:"Action Failed",style:e.Toast.Style.Failure}),t.set_update(!0)}):(0,e.showToast)({title:`${t.vol} is Already Unmounted`,style:e.Toast.Style.Failure})}})]})]})}