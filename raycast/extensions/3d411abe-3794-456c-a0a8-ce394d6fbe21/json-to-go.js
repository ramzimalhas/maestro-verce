"use strict";var qn=Object.create;var re=Object.defineProperty;var $n=Object.getOwnPropertyDescriptor;var Un=Object.getOwnPropertyNames;var Mn=Object.getPrototypeOf,Bn=Object.prototype.hasOwnProperty;var f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Fn=(e,t)=>{for(var n in t)re(e,n,{get:t[n],enumerable:!0})},Me=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Un(t))!Bn.call(e,o)&&o!==n&&re(e,o,{get:()=>t[o],enumerable:!(r=$n(t,o))||r.enumerable});return e};var Be=(e,t,n)=>(n=e!=null?qn(Mn(e)):{},Me(t||!e||!e.__esModule?re(n,"default",{value:e,enumerable:!0}):n,e)),Dn=e=>Me(re({},"__esModule",{value:!0}),e);var ze=f((Ho,Xe)=>{Xe.exports=He;He.sync=Xn;var Fe=require("fs");function Hn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function De(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Hn(t,n)}function He(e,t,n){Fe.stat(e,function(r,o){n(r,r?!1:De(o,e,t))})}function Xn(e,t){return De(Fe.statSync(e),e,t)}});var Qe=f((Xo,Ze)=>{Ze.exports=Ve;Ve.sync=zn;var Ke=require("fs");function Ve(e,t,n){Ke.stat(e,function(r,o){n(r,r?!1:We(o,t))})}function zn(e,t){return We(Ke.statSync(e),t)}function We(e,t){return e.isFile()&&Kn(e,t)}function Kn(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),p=parseInt("010",8),l=parseInt("001",8),y=a|p,v=n&l||n&p&&o===i||n&a&&r===s||n&y&&s===0;return v}});var Je=f((Ko,Ye)=>{var zo=require("fs"),oe;process.platform==="win32"||global.TESTING_WINDOWS?oe=ze():oe=Qe();Ye.exports=Se;Se.sync=Vn;function Se(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){Se(e,t||{},function(s,i){s?o(s):r(i)})})}oe(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function Vn(e,t){try{return oe.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var it=f((Vo,st)=>{var U=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",et=require("path"),Wn=U?";":":",tt=Je(),nt=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),rt=(e,t)=>{let n=t.colon||Wn,r=e.match(/\//)||U&&e.match(/\\/)?[""]:[...U?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=U?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=U?o.split(n):[""];return U&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},ot=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=rt(e,t),i=[],a=l=>new Promise((y,v)=>{if(l===r.length)return t.all&&i.length?y(i):v(nt(e));let m=r[l],I=/^".*"$/.test(m)?m.slice(1,-1):m,T=et.join(I,e),C=!I&&/^\.[\\\/]/.test(e)?e.slice(0,2)+T:T;y(p(C,l,0))}),p=(l,y,v)=>new Promise((m,I)=>{if(v===o.length)return m(a(y+1));let T=o[v];tt(l+T,{pathExt:s},(C,g)=>{if(!C&&g)if(t.all)i.push(l+T);else return m(l+T);return m(p(l,y,v+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},Zn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=rt(e,t),s=[];for(let i=0;i<n.length;i++){let a=n[i],p=/^".*"$/.test(a)?a.slice(1,-1):a,l=et.join(p,e),y=!p&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let v=0;v<r.length;v++){let m=y+r[v];try{if(tt.sync(m,{pathExt:o}))if(t.all)s.push(m);else return m}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw nt(e)};st.exports=ot;ot.sync=Zn});var be=f((Wo,ge)=>{"use strict";var ct=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ge.exports=ct;ge.exports.default=ct});var ft=f((Zo,lt)=>{"use strict";var at=require("path"),Qn=it(),Yn=be();function ut(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Qn.sync(e.command,{path:n[Yn({env:n})],pathExt:t?at.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=at.resolve(o?e.options.cwd:"",i)),i}function Jn(e){return ut(e)||ut(e,!0)}lt.exports=Jn});var dt=f((Qo,ve)=>{"use strict";var we=/([()\][%!^"`<>&|;, *?])/g;function er(e){return e=e.replace(we,"^$1"),e}function tr(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(we,"^$1"),t&&(e=e.replace(we,"^$1")),e}ve.exports.command=er;ve.exports.argument=tr});var mt=f((Yo,pt)=>{"use strict";pt.exports=/^#!(.*)/});var xt=f((Jo,ht)=>{"use strict";var nr=mt();ht.exports=(e="")=>{let t=e.match(nr);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var St=f((es,yt)=>{"use strict";var Ie=require("fs"),rr=xt();function or(e){let n=Buffer.alloc(150),r;try{r=Ie.openSync(e,"r"),Ie.readSync(r,n,0,150,0),Ie.closeSync(r)}catch{}return rr(n.toString())}yt.exports=or});var vt=f((ts,wt)=>{"use strict";var sr=require("path"),gt=ft(),bt=dt(),ir=St(),cr=process.platform==="win32",ar=/\.(?:com|exe)$/i,ur=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function lr(e){e.file=gt(e);let t=e.file&&ir(e.file);return t?(e.args.unshift(e.file),e.command=t,gt(e)):e.file}function fr(e){if(!cr)return e;let t=lr(e),n=!ar.test(t);if(e.options.forceShell||n){let r=ur.test(t);e.command=sr.normalize(e.command),e.command=bt.command(e.command),e.args=e.args.map(s=>bt.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function dr(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:fr(r)}wt.exports=dr});var Tt=f((ns,Et)=>{"use strict";var Ee=process.platform==="win32";function Te(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function pr(e,t){if(!Ee)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=It(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function It(e,t){return Ee&&e===1&&!t.file?Te(t.original,"spawn"):null}function mr(e,t){return Ee&&e===1&&!t.file?Te(t.original,"spawnSync"):null}Et.exports={hookChildProcess:pr,verifyENOENT:It,verifyENOENTSync:mr,notFoundError:Te}});var Gt=f((rs,M)=>{"use strict";var Pt=require("child_process"),Pe=vt(),Ce=Tt();function Ct(e,t,n){let r=Pe(e,t,n),o=Pt.spawn(r.command,r.args,r.options);return Ce.hookChildProcess(o,r),o}function hr(e,t,n){let r=Pe(e,t,n),o=Pt.spawnSync(r.command,r.args,r.options);return o.error=o.error||Ce.verifyENOENTSync(o.status,r),o}M.exports=Ct;M.exports.spawn=Ct;M.exports.sync=hr;M.exports._parse=Pe;M.exports._enoent=Ce});var Ot=f((os,At)=>{"use strict";At.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var jt=f((ss,Z)=>{"use strict";var W=require("path"),Rt=be(),Nt=e=>{e={cwd:process.cwd(),path:process.env[Rt()],execPath:process.execPath,...e};let t,n=W.resolve(e.cwd),r=[];for(;t!==n;)r.push(W.join(n,"node_modules/.bin")),t=n,n=W.resolve(n,"..");let o=W.resolve(e.cwd,e.execPath,"..");return r.push(o),r.concat(e.path).join(W.delimiter)};Z.exports=Nt;Z.exports.default=Nt;Z.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=Rt({env:t});return e.path=t[n],t[n]=Z.exports(e),t}});var Lt=f((is,Ge)=>{"use strict";var kt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};Ge.exports=kt;Ge.exports.default=kt});var qt=f((cs,ie)=>{"use strict";var xr=Lt(),se=new WeakMap,_t=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(se.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return xr(s,e),se.set(s,r),s};ie.exports=_t;ie.exports.default=_t;ie.exports.callCount=e=>{if(!se.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return se.get(e)}});var $t=f(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.SIGNALS=void 0;var yr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];ce.SIGNALS=yr});var Ae=f(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.SIGRTMAX=B.getRealtimeSignals=void 0;var Sr=function(){let e=Mt-Ut+1;return Array.from({length:e},gr)};B.getRealtimeSignals=Sr;var gr=function(e,t){return{name:`SIGRT${t+1}`,number:Ut+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Ut=34,Mt=64;B.SIGRTMAX=Mt});var Bt=f(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.getSignals=void 0;var br=require("os"),wr=$t(),vr=Ae(),Ir=function(){let e=(0,vr.getRealtimeSignals)();return[...wr.SIGNALS,...e].map(Er)};ae.getSignals=Ir;var Er=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=br.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:o,standard:s}}});var Dt=f(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.signalsByNumber=F.signalsByName=void 0;var Tr=require("os"),Ft=Bt(),Pr=Ae(),Cr=function(){return(0,Ft.getSignals)().reduce(Gr,{})},Gr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}){return{...e,[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}}},Ar=Cr();F.signalsByName=Ar;var Or=function(){let e=(0,Ft.getSignals)(),t=Pr.SIGRTMAX+1,n=Array.from({length:t},(r,o)=>Rr(o,e));return Object.assign({},...n)},Rr=function(e,t){let n=Nr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:a,standard:p}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:a,standard:p}}},Nr=function(e,t){let n=t.find(({name:r})=>Tr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},jr=Or();F.signalsByNumber=jr});var Xt=f((ds,Ht)=>{"use strict";var{signalsByName:kr}=Dt(),Lr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",_r=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:p,isCanceled:l,killed:y,parsed:{options:{timeout:v}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let m=o===void 0?void 0:kr[o].description,I=r&&r.code,C=`Command ${Lr({timedOut:p,timeout:v,errorCode:I,signal:o,signalDescription:m,exitCode:s,isCanceled:l})}: ${i}`,g=Object.prototype.toString.call(r)==="[object Error]",k=g?`${C}
${r.message}`:C,P=[k,t,e].filter(Boolean).join(`
`);return g?(r.originalMessage=r.message,r.message=P):r=new Error(P),r.shortMessage=k,r.command=i,r.escapedCommand=a,r.exitCode=s,r.signal=o,r.signalDescription=m,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(p),r.isCanceled=l,r.killed=y&&!p,r};Ht.exports=_r});var Kt=f((ps,Oe)=>{"use strict";var ue=["stdin","stdout","stderr"],qr=e=>ue.some(t=>e[t]!==void 0),zt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return ue.map(r=>e[r]);if(qr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${ue.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,ue.length);return Array.from({length:n},(r,o)=>t[o])};Oe.exports=zt;Oe.exports.node=e=>{let t=zt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Vt=f((ms,le)=>{le.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&le.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&le.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Jt=f((hs,X)=>{var h=global.process,_=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};_(h)?(Wt=require("assert"),D=Vt(),Zt=/^win/i.test(h.platform),Q=require("events"),typeof Q!="function"&&(Q=Q.EventEmitter),h.__signal_exit_emitter__?w=h.__signal_exit_emitter__:(w=h.__signal_exit_emitter__=new Q,w.count=0,w.emitted={}),w.infinite||(w.setMaxListeners(1/0),w.infinite=!0),X.exports=function(e,t){if(!_(global.process))return function(){};Wt.equal(typeof e,"function","a callback must be provided for exit handler"),H===!1&&Re();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){w.removeListener(n,e),w.listeners("exit").length===0&&w.listeners("afterexit").length===0&&fe()};return w.on(n,e),r},fe=function(){!H||!_(global.process)||(H=!1,D.forEach(function(t){try{h.removeListener(t,de[t])}catch{}}),h.emit=pe,h.reallyExit=Ne,w.count-=1)},X.exports.unload=fe,q=function(t,n,r){w.emitted[t]||(w.emitted[t]=!0,w.emit(t,n,r))},de={},D.forEach(function(e){de[e]=function(){if(!!_(global.process)){var n=h.listeners(e);n.length===w.count&&(fe(),q("exit",null,e),q("afterexit",null,e),Zt&&e==="SIGHUP"&&(e="SIGINT"),h.kill(h.pid,e))}}}),X.exports.signals=function(){return D},H=!1,Re=function(){H||!_(global.process)||(H=!0,w.count+=1,D=D.filter(function(t){try{return h.on(t,de[t]),!0}catch{return!1}}),h.emit=Yt,h.reallyExit=Qt)},X.exports.load=Re,Ne=h.reallyExit,Qt=function(t){!_(global.process)||(h.exitCode=t||0,q("exit",h.exitCode,null),q("afterexit",h.exitCode,null),Ne.call(h,h.exitCode))},pe=h.emit,Yt=function(t,n){if(t==="exit"&&_(global.process)){n!==void 0&&(h.exitCode=n);var r=pe.apply(this,arguments);return q("exit",h.exitCode,null),q("afterexit",h.exitCode,null),r}else return pe.apply(this,arguments)}):X.exports=function(){return function(){}};var Wt,D,Zt,Q,w,fe,q,de,H,Re,Ne,Qt,pe,Yt});var tn=f((xs,en)=>{"use strict";var $r=require("os"),Ur=Jt(),Mr=1e3*5,Br=(e,t="SIGTERM",n={})=>{let r=e(t);return Fr(e,t,n,r),r},Fr=(e,t,n,r)=>{if(!Dr(t,n,r))return;let o=Xr(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Dr=(e,{forceKillAfterTimeout:t},n)=>Hr(e)&&t!==!1&&n,Hr=e=>e===$r.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Xr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Mr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},zr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Kr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Vr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((a,p)=>{o=setTimeout(()=>{Kr(e,n,p)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Wr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Zr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=Ur(()=>{e.kill()});return r.finally(()=>{o()})};en.exports={spawnedKill:Br,spawnedCancel:zr,setupTimeout:Vr,validateTimeout:Wr,setExitHandler:Zr}});var rn=f((ys,nn)=>{"use strict";var N=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";N.writable=e=>N(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";N.readable=e=>N(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";N.duplex=e=>N.writable(e)&&N.readable(e);N.transform=e=>N.duplex(e)&&typeof e._transform=="function";nn.exports=N});var sn=f((Ss,on)=>{"use strict";var{PassThrough:Qr}=require("stream");on.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new Qr({objectMode:o});n&&s.setEncoding(n);let i=0,a=[];return s.on("data",p=>{a.push(p),o?i=a.length:i+=p.length}),s.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var cn=f((gs,Y)=>{"use strict";var{constants:Yr}=require("buffer"),Jr=require("stream"),{promisify:eo}=require("util"),to=sn(),no=eo(Jr.pipeline),me=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function je(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=to(t);return await new Promise((o,s)=>{let i=a=>{a&&r.getBufferedLength()<=Yr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),s(a)};(async()=>{try{await no(e,r),o()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new me)})}),r.getBufferedValue()}Y.exports=je;Y.exports.buffer=(e,t)=>je(e,{...t,encoding:"buffer"});Y.exports.array=(e,t)=>je(e,{...t,array:!0});Y.exports.MaxBufferError=me});var un=f((bs,an)=>{"use strict";var{PassThrough:ro}=require("stream");an.exports=function(){var e=[],t=new ro({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var pn=f((ws,dn)=>{"use strict";var fn=rn(),ln=cn(),oo=un(),so=(e,t)=>{t===void 0||e.stdin===void 0||(fn(t)?t.pipe(e.stdin):e.stdin.end(t))},io=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=oo();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},ke=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Le=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?ln(e,{encoding:t,maxBuffer:r}):ln.buffer(e,{maxBuffer:r})},co=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let a=Le(e,{encoding:r,buffer:o,maxBuffer:s}),p=Le(t,{encoding:r,buffer:o,maxBuffer:s}),l=Le(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,p,l])}catch(y){return Promise.all([{error:y,signal:y.signal,timedOut:y.timedOut},ke(e,a),ke(t,p),ke(n,l)])}},ao=({input:e})=>{if(fn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};dn.exports={handleInput:so,makeAllStream:io,getSpawnedResult:co,validateInputSync:ao}});var hn=f((vs,mn)=>{"use strict";var uo=(async()=>{})().constructor.prototype,lo=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(uo,e)]),fo=(e,t)=>{for(let[n,r]of lo){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:o})}return e},po=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});mn.exports={mergePromise:fo,getSpawnedPromise:po}});var Sn=f((Is,yn)=>{"use strict";var xn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],mo=/^[\w.-]+$/,ho=/"/g,xo=e=>typeof e!="string"||mo.test(e)?e:`"${e.replace(ho,'\\"')}"`,yo=(e,t)=>xn(e,t).join(" "),So=(e,t)=>xn(e,t).map(n=>xo(n)).join(" "),go=/ +/g,bo=e=>{let t=[];for(let n of e.trim().split(go)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};yn.exports={joinCommand:yo,getEscapedCommand:So,parseCommand:bo}});var Tn=f((Es,z)=>{"use strict";var wo=require("path"),_e=require("child_process"),vo=Gt(),Io=Ot(),Eo=jt(),To=qt(),he=Xt(),bn=Kt(),{spawnedKill:Po,spawnedCancel:Co,setupTimeout:Go,validateTimeout:Ao,setExitHandler:Oo}=tn(),{handleInput:Ro,getSpawnedResult:No,makeAllStream:jo,validateInputSync:ko}=pn(),{mergePromise:gn,getSpawnedPromise:Lo}=hn(),{joinCommand:wn,parseCommand:vn,getEscapedCommand:In}=Sn(),_o=1e3*1e3*100,qo=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?{...process.env,...e}:e;return n?Eo.env({env:s,cwd:r,execPath:o}):s},En=(e,t,n={})=>{let r=vo._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:_o,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=qo(n),n.stdio=bn(n),process.platform==="win32"&&wo.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},J=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?Io(t):t,xe=(e,t,n)=>{let r=En(e,t,n),o=wn(e,t),s=In(e,t);Ao(r.options);let i;try{i=_e.spawn(r.file,r.args,r.options)}catch(I){let T=new _e.ChildProcess,C=Promise.reject(he({error:I,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return gn(T,C)}let a=Lo(i),p=Go(i,r.options,a),l=Oo(i,r.options,p),y={isCanceled:!1};i.kill=Po.bind(null,i.kill.bind(i)),i.cancel=Co.bind(null,i,y);let m=To(async()=>{let[{error:I,exitCode:T,signal:C,timedOut:g},k,P,ee]=await No(i,r.options,l),L=J(r.options,k),V=J(r.options,P),$=J(r.options,ee);if(I||T!==0||C!==null){let te=he({error:I,exitCode:T,signal:C,stdout:L,stderr:V,all:$,command:o,escapedCommand:s,parsed:r,timedOut:g,isCanceled:y.isCanceled,killed:i.killed});if(!r.options.reject)return te;throw te}return{command:o,escapedCommand:s,exitCode:0,stdout:L,stderr:V,all:$,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Ro(i,r.options.input),i.all=jo(i,r.options),gn(i,m)};z.exports=xe;z.exports.sync=(e,t,n)=>{let r=En(e,t,n),o=wn(e,t),s=In(e,t);ko(r.options);let i;try{i=_e.spawnSync(r.file,r.args,r.options)}catch(l){throw he({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=J(r.options,i.stdout,i.error),p=J(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=he({stdout:a,stderr:p,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:p,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};z.exports.command=(e,t)=>{let[n,...r]=vn(e);return xe(n,r,t)};z.exports.commandSync=(e,t)=>{let[n,...r]=vn(e);return xe.sync(n,r,t)};z.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=bn.node(n),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=n;return xe(s,[...i,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var On=f((Ps,An)=>{"use strict";function $o(e,t,n=!0,r=!1){let o,s,i="",a=0,p={},l=[],y="",v=0,m="";try{o=JSON.parse(e.replace(/:(\s*\d*)\.0/g,":$1.1")),s=o}catch(c){return{go:"",error:c.message}}return t=L(t||"AutoGenerated"),g(`type ${t} `),I(s),{go:n?i+=y:i};function I(c,u=0){if(typeof c=="object"&&c!==null)if(Array.isArray(c)){let d,x=c.length;for(let S=0;S<x;S++){let E=$(c[S]);if(!d)d=E;else if(d!=E&&(d=te(E,d),d=="interface{}"))break}let b=n&&["struct","slice"].includes(d)?`[]${m}`:"[]";if(n&&u>=2?P(b):g(b),d=="struct"){let S={};for(let O=0;O<x;O++){let R=Object.keys(c[O]);for(let ne in R){let j=R[ne];if(!(j in S))S[j]={value:c[O][j],count:0};else{let Ue=S[j].value,ye=c[O][j];Ln(Ue,ye)&&($e(Object.keys(ye),Object.keys(Ue))||(j=`${j}_${kn()}`,S[j]={value:ye,count:0}))}S[j].count++}}let E=Object.keys(S),G={},A={};for(let O in E){let R=E[O],ne=S[R];G[R]=ne.value,A[R]=ne.count!=x}T(u+1,v,G,A)}else d=="slice"?I(c[0],u):n&&u>=2?P(d||"interface{}"):g(d||"interface{}")}else n&&(u>=2?P(m):g(m)),T(u+1,v,c);else n&&u>=2?P($(c)):g($(c))}function T(c,u,d,x){n&&l.push(c>=2?`
`:"");let b=[];if(n&&c>=2){let S=`type ${m}`,E=_n(Object.keys(d));if(m in p&&$e(E,p[m])){l.pop();return}p[m]=E,P(`${S} struct {
`),++u;let G=Object.keys(d);for(let A in G){let O=qe(G[A]);k(u);let R=ee(L(O),b);b.push(R),P(R+" "),m=R,I(d[G[A]],c),P(' `json:"'+O),x&&x[G[A]]===!0&&P(",omitempty"),P('"`\n')}k(--u),P("}")}else{g(`struct {
`),++a;let S=Object.keys(d);for(let E in S){let G=qe(S[E]);C(a);let A=ee(L(G),b);b.push(A),g(A+" "),m=A,I(d[S[E]],c),g(' `json:"'+G),x&&x[S[E]]===!0&&g(",omitempty"),r&&d[S[E]]!==""&&typeof d[S[E]]!="object"&&g('" example:"'+d[S[E]]),g('"`\n')}C(--a),g("}")}n&&(y+=l.pop())}function C(c){for(let u=0;u<c;u++)i+="	"}function g(c){i+=c}function k(c){for(let u=0;u<c;u++)l[l.length-1]+="	"}function P(c){l[l.length-1]+=c}function ee(c,u){if(u.indexOf(c)===-1)return c;let d=0;for(;;){let x=c+d.toString();if(u.indexOf(x)===-1)return x;d++}}function L(c){c=V(c);let u=jn(c).replace(/[^a-z0-9]/gi,"");return u?V(u):"NAMING_FAILED"}function V(c){if(c)c.match(/^\d+$/)?c="Num"+c:c.charAt(0).match(/\d/)&&(c={0:"Zero_",1:"One_",2:"Two_",3:"Three_",4:"Four_",5:"Five_",6:"Six_",7:"Seven_",8:"Eight_",9:"Nine_"}[c.charAt(0)]+c.substr(1));else return"";return c}function $(c){if(c===null)return"interface{}";switch(typeof c){case"string":return/\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(\+\d\d:\d\d|Z)/.test(c)?"time.Time":"string";case"number":return c%1===0?c>-2147483648&&c<2147483647?"int":"int64":"float64";case"boolean":return"bool";case"object":return Array.isArray(c)?"slice":"struct";default:return"interface{}"}}function te(c,u){return c.substr(0,5)=="float"&&u.substr(0,3)=="int"?c:c.substr(0,3)=="int"&&u.substr(0,5)=="float"?u:"interface{}"}function jn(c){c.match(/^[_A-Z0-9]+$/)&&(c=c.toLowerCase());let u=["ACL","API","ASCII","CPU","CSS","DNS","EOF","GUID","HTML","HTTP","HTTPS","ID","IP","JSON","LHS","QPS","RAM","RHS","RPC","SLA","SMTP","SQL","SSH","TCP","TLS","TTL","UDP","UI","UID","UUID","URI","URL","UTF8","VM","XML","XMPP","XSRF","XSS"];return c.replace(/(^|[^a-zA-Z])([a-z]+)/g,function(d,x,b){return u.indexOf(b.toUpperCase())>=0?x+b.toUpperCase():x+b[0].toUpperCase()+b.substr(1).toLowerCase()}).replace(/([A-Z])([a-z]+)/g,function(d,x,b){return u.indexOf(x+b.toUpperCase())>=0?(x+b).toUpperCase():x+b})}function kn(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var u=Math.random()*16|0,d=c=="x"?u:u&3|8;return d.toString(16)})}function qe(c){let u=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;if(c.length>=36){let x=c.substr(-36);if(u.test(x))return c.slice(0,-1*(36+1))}return c}function Ln(c,u){let d="[object Object]";return Object.prototype.toString.call(c)===d&&Object.prototype.toString.call(u)===d}function $e(c,u){let d=c.length,x=u.length;if(d==0&&x==0)return!0;if(d!=x)return!1;for(let b of c)if(!u.includes(b))return!1;return!0}function _n(c){for(let u in c)c[u]=L(c[u]);return c}}An.exports=$o});var Bo={};Fn(Bo,{copy:()=>Rn,default:()=>Mo,parse:()=>Nn});module.exports=Dn(Bo);var K=require("@raycast/api");var Pn=Be(require("node:process"),1),Cn=Be(Tn(),1);async function Gn(e){if(Pn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,Cn.default)("osascript",["-e",e]);return t}var Uo=On(),Rn=async()=>{let e=await Gn("the clipboard");if(!e||e.length===0)throw"Clipboard is empty";return e},Nn=async e=>{await K.Clipboard.copy(e)},Mo=async()=>{let e="";try{e=await Rn()}catch(n){await(0,K.showHUD)(`\u274C ${n}`);return}let t=Uo(e,null,null,!1);if(t.error){await(0,K.showHUD)(`\u274C ${t.error}`);return}else await Nn(t.go),await(0,K.showHUD)("\u2705 Copied to clipboard")};0&&(module.exports={copy,parse});