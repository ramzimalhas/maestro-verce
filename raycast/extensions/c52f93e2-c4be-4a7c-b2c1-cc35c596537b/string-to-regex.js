"use strict";var q=Object.create;var d=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var m=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),J=(e,t)=>{for(var r in t)d(e,r,{get:t[r],enumerable:!0})},I=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of U(t))!G.call(e,o)&&o!==r&&d(e,o,{get:()=>t[o],enumerable:!(n=k(t,o))||n.enumerable});return e};var K=(e,t,r)=>(r=e!=null?q(z(e)):{},I(t||!e||!e.__esModule?d(r,"default",{value:e,enumerable:!0}):r,e)),Q=e=>I(d({},"__esModule",{value:!0}),e);var R=m(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.build=b;function v(e){return Y(e)||X(e)||M(e)||V()}function V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Y(e){if(Array.isArray(e))return g(e)}function C(e,t){return te(e)||ee(e,t)||M(e,t)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(e,t){if(e){if(typeof e=="string")return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}}function g(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ee(e,t){var r=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(r!=null){var n=[],o=!0,a=!1,u,s;try{for(r=r.call(e);!(o=(u=r.next()).done)&&(n.push(u.value),!(t&&n.length===t));o=!0);}catch(f){a=!0,s=f}finally{try{!o&&r.return!=null&&r.return()}finally{if(a)throw s}}return n}}function te(e){if(Array.isArray(e))return e}var T=new Map;function re(e,t){var r=[],n=[];return e.forEach(function(o){o[0]===t?r.push(o):n.push(o)}),[r,n]}function ne(e,t){if(t.size!==1)return new Map([[e,t]]);var r=C(t.entries().next().value,2),n=r[0],o=r[1];return new Map([[e+n,o]])}function b(e){var t=v(new Set(e));return oe(t)}function oe(e){if(e.length===0)return T;var t=e[0];if(t===""){var r=e.filter(function(_){return _!==""});return new Map([["",T]].concat(v(b(r))))}var n=t[0],o=re(e,n),a=C(o,2),u=a[0],s=a[1],f=u.map(function(_){return _.substring(1)}),L=b(f),$=ne(n,L);return new Map([].concat(v($),v(b(s))))}});var F=m((we,x)=>{"use strict";x.exports=e=>{if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}});var P=m(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.build=E;var ae=ue(F());function ue(e){return e&&e.__esModule?e:{default:e}}function ie(e,t){return ce(e)||se(e,t)||D(e,t)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(e,t){var r=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(r!=null){var n=[],o=!0,a=!1,u,s;try{for(r=r.call(e);!(o=(u=r.next()).done)&&(n.push(u.value),!(t&&n.length===t));o=!0);}catch(f){a=!0,s=f}finally{try{!o&&r.return!=null&&r.return()}finally{if(a)throw s}}return n}}function ce(e){if(Array.isArray(e))return e}function fe(e){return de(e)||ye(e)||D(e)||pe()}function pe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(e,t){if(e){if(typeof e=="string")return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}}function ye(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function de(e){if(Array.isArray(e))return w(e)}function w(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e){var t=Array.from(fe(e),function(n){var o=ie(n,2),a=o[0],u=o[1];return"".concat((0,ae.default)(a)).concat(E(u))}),r=t.join("|");return e.size>1&&(r="(".concat(r,")")),r}});var W=m(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.condense=B;h.condenseIgnoreCase=be;var me=R(),ve=P();function B(e){var t=(0,me.build)(e),r=(0,ve.build)(t);return new RegExp(r)}function be(e){var t=e.map(function(n){return n.toLowerCase()}),r=B(t);return new RegExp(r,"i")}});var _e={};J(_e,{default:()=>he});module.exports=Q(_e);var y=require("@raycast/api"),j=K(W()),H=require("react");var p=require("react"),N=({transformDeps:e=[],transform:t})=>{let[r,n]=(0,p.useState)(""),[o,a]=(0,p.useState)("");return(0,p.useEffect)(()=>{(async()=>{try{a(await t(r))}catch{a("Invalid input")}})()},[r,...e]),{inputProps:{value:r,onChange:n,id:"input",title:"Input",autoFocus:!0},outputProps:{value:o,id:"output",title:"Output",onChange:()=>{}}}};var i=require("@raycast/api"),l=require("react/jsx-runtime");function O({inputProps:e,outputProps:t,actions:r,options:n,output:o,input:a}){return(0,l.jsxs)(i.Form,{actions:r||(0,l.jsxs)(i.ActionPanel,{children:[(0,l.jsx)(i.Action.CopyToClipboard,{content:t.value}),(0,l.jsx)(i.Action.Paste,{content:t.value})]}),children:[a||(0,l.jsx)(i.Form.TextArea,{...e}),n,o||(0,l.jsx)(i.Form.TextArea,{...t})]})}var c=require("react/jsx-runtime");var he=()=>{let[e,t]=(0,H.useState)(" "),r=N({transformDeps:[e],transform:n=>`/${(0,j.condense)(n.split(e)).source}/`});return(0,c.jsx)(O,{...r,options:(0,c.jsxs)(y.Form.Dropdown,{id:"splitBy",title:"Split by",onChange:n=>t(n),children:[(0,c.jsx)(y.Form.Dropdown.Item,{value:" ",title:"Space"}),(0,c.jsx)(y.Form.Dropdown.Item,{value:",",title:"Comma"}),(0,c.jsx)(y.Form.Dropdown.Item,{value:`
`,title:"Newline"})]})})};