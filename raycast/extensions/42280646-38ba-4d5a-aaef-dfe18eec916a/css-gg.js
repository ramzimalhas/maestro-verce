"use strict";var I=Object.create;var c=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var V=(r,e)=>{for(var i in e)c(r,i,{get:e[i],enumerable:!0})},L=(r,e,i,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let g of Y(e))!A.call(r,g)&&g!==i&&c(r,g,{get:()=>e[g],enumerable:!(p=S(e,g))||p.enumerable});return r};var M=(r,e,i)=>(i=r!=null?I(j(r)):{},L(e||!r||!r.__esModule?c(i,"default",{value:r,enumerable:!0}):i,r)),U=r=>L(c({},"__esModule",{value:!0}),r);var Fs={};V(Fs,{default:()=>z});module.exports=U(Fs);var t=require("@raycast/api"),b=require("react");var Z=M(require("crypto")),C=new Uint8Array(256),f=C.length;function w(){return f>C.length-16&&(Z.default.randomFillSync(C),f=0),C.slice(f,f+=16)}var l=[];for(let r=0;r<256;++r)l.push((r+256).toString(16).slice(1));function k(r,e=0){return(l[r[e+0]]+l[r[e+1]]+l[r[e+2]]+l[r[e+3]]+"-"+l[r[e+4]]+l[r[e+5]]+"-"+l[r[e+6]]+l[r[e+7]]+"-"+l[r[e+8]]+l[r[e+9]]+"-"+l[r[e+10]]+l[r[e+11]]+l[r[e+12]]+l[r[e+13]]+l[r[e+14]]+l[r[e+15]]).toLowerCase()}var y=M(require("crypto")),u={randomUUID:y.default.randomUUID};function D(r,e,i){if(u.randomUUID&&!e&&!r)return u.randomUUID();r=r||{};let p=r.random||(r.rng||w)();if(p[6]=p[6]&15|64,p[8]=p[8]&63|128,e){i=i||0;for(let g=0;g<16;++g)e[i+g]=p[g];return e}return k(p)}var a=D;var v={};V(v,{abstract:()=>P,add:()=>T,"add-r":()=>G,adidas:()=>$,airplane:()=>O,alarm:()=>E,album:()=>F,"align-bottom":()=>N,"align-center":()=>J,"align-left":()=>K,"align-middle":()=>Q,"align-right":()=>R,"align-top":()=>W,anchor:()=>_,"apple-watch":()=>o1,"arrange-back":()=>r1,"arrange-front":()=>e1,"arrow-align-h":()=>n1,"arrow-align-v":()=>t1,"arrow-bottom-left":()=>s1,"arrow-bottom-left-o":()=>i1,"arrow-bottom-left-r":()=>l1,"arrow-bottom-right":()=>a1,"arrow-bottom-right-o":()=>g1,"arrow-bottom-right-r":()=>p1,"arrow-down":()=>b1,"arrow-down-o":()=>d1,"arrow-down-r":()=>x1,"arrow-left":()=>f1,"arrow-left-o":()=>h1,"arrow-left-r":()=>c1,"arrow-long-down":()=>m1,"arrow-long-down-c":()=>C1,"arrow-long-down-e":()=>w1,"arrow-long-down-l":()=>u1,"arrow-long-down-r":()=>v1,"arrow-long-left":()=>Z1,"arrow-long-left-c":()=>H1,"arrow-long-left-e":()=>V1,"arrow-long-left-l":()=>L1,"arrow-long-left-r":()=>M1,"arrow-long-right":()=>q1,"arrow-long-right-c":()=>k1,"arrow-long-right-e":()=>y1,"arrow-long-right-l":()=>z1,"arrow-long-right-r":()=>B1,"arrow-long-up":()=>j1,"arrow-long-up-c":()=>X1,"arrow-long-up-e":()=>I1,"arrow-long-up-l":()=>S1,"arrow-long-up-r":()=>Y1,"arrow-right":()=>D1,"arrow-right-o":()=>A1,"arrow-right-r":()=>U1,"arrow-top-left":()=>T1,"arrow-top-left-o":()=>P1,"arrow-top-left-r":()=>G1,"arrow-top-right":()=>E1,"arrow-top-right-o":()=>$1,"arrow-top-right-r":()=>O1,"arrow-up":()=>J1,"arrow-up-o":()=>F1,"arrow-up-r":()=>N1,"arrows-breake-h":()=>K1,"arrows-breake-v":()=>Q1,"arrows-exchange":()=>oo,"arrows-exchange-alt":()=>W1,"arrows-exchange-alt-v":()=>R1,"arrows-exchange-v":()=>_1,"arrows-expand-down-left":()=>ro,"arrows-expand-down-right":()=>eo,"arrows-expand-left":()=>to,"arrows-expand-left-alt":()=>no,"arrows-expand-right":()=>lo,"arrows-expand-right-alt":()=>io,"arrows-expand-up-left":()=>so,"arrows-expand-up-right":()=>go,"arrows-h":()=>ao,"arrows-h-alt":()=>po,"arrows-merge-alt-h":()=>xo,"arrows-merge-alt-v":()=>bo,"arrows-scroll-h":()=>ho,"arrows-scroll-v":()=>co,"arrows-shrink-h":()=>fo,"arrows-shrink-v":()=>Co,"arrows-v":()=>uo,"arrows-v-alt":()=>wo,assign:()=>vo,asterisk:()=>mo,atlasian:()=>Ho,attachment:()=>Vo,attribution:()=>Lo,awards:()=>Mo,backspace:()=>Zo,"band-aid":()=>ko,battery:()=>Bo,"battery-empty":()=>yo,"battery-full":()=>zo,bee:()=>qo,bell:()=>Xo,bitbucket:()=>Io,block:()=>So,bmw:()=>Yo,board:()=>jo,bolt:()=>Ao,bookmark:()=>Uo,"border-all":()=>Do,"border-bottom":()=>Po,"border-left":()=>Go,"border-right":()=>To,"border-style-dashed":()=>$o,"border-style-dotted":()=>Oo,"border-style-solid":()=>Eo,"border-top":()=>Fo,bot:()=>No,bowl:()=>Jo,box:()=>Ko,boy:()=>Qo,brackets:()=>Ro,briefcase:()=>Wo,browse:()=>_o,browser:()=>or,brush:()=>rr,bulb:()=>er,"c-plus-plus":()=>nr,calculator:()=>tr,calendar:()=>ar,"calendar-dates":()=>ir,"calendar-due":()=>lr,"calendar-next":()=>sr,"calendar-today":()=>gr,"calendar-two":()=>pr,calibrate:()=>dr,camera:()=>xr,cap:()=>br,captions:()=>hr,"card-clubs":()=>cr,"card-diamonds":()=>fr,"card-hearts":()=>Cr,"card-spades":()=>wr,carousel:()=>ur,cast:()=>vr,chanel:()=>mr,chart:()=>Hr,check:()=>Mr,"check-o":()=>Vr,"check-r":()=>Lr,"chevron-double-down":()=>yr,"chevron-double-down-o":()=>Zr,"chevron-double-down-r":()=>kr,"chevron-double-left":()=>qr,"chevron-double-left-o":()=>zr,"chevron-double-left-r":()=>Br,"chevron-double-right":()=>Sr,"chevron-double-right-o":()=>Xr,"chevron-double-right-r":()=>Ir,"chevron-double-up":()=>Ar,"chevron-double-up-o":()=>Yr,"chevron-double-up-r":()=>jr,"chevron-down":()=>Pr,"chevron-down-o":()=>Ur,"chevron-down-r":()=>Dr,"chevron-left":()=>$r,"chevron-left-o":()=>Gr,"chevron-left-r":()=>Tr,"chevron-right":()=>Fr,"chevron-right-o":()=>Or,"chevron-right-r":()=>Er,"chevron-up":()=>Kr,"chevron-up-o":()=>Nr,"chevron-up-r":()=>Jr,circleci:()=>Qr,"clapper-board":()=>Rr,clipboard:()=>Wr,close:()=>r2,"close-o":()=>_r,"close-r":()=>o2,cloud:()=>e2,code:()=>i2,"code-climate":()=>n2,"code-slash":()=>t2,coffee:()=>l2,collage:()=>s2,"color-bucket":()=>g2,"color-picker":()=>p2,"comedy-central":()=>a2,comment:()=>d2,community:()=>x2,components:()=>b2,compress:()=>C2,"compress-left":()=>h2,"compress-right":()=>c2,"compress-v":()=>f2,controller:()=>w2,copy:()=>u2,copyright:()=>v2,"corner-double-down-left":()=>m2,"corner-double-down-right":()=>H2,"corner-double-left-down":()=>V2,"corner-double-left-up":()=>L2,"corner-double-right-down":()=>M2,"corner-double-right-up":()=>Z2,"corner-double-up-left":()=>k2,"corner-double-up-right":()=>y2,"corner-down-left":()=>z2,"corner-down-right":()=>B2,"corner-left-down":()=>q2,"corner-left-up":()=>X2,"corner-right-down":()=>I2,"corner-right-up":()=>S2,"corner-up-left":()=>Y2,"corner-up-right":()=>j2,"credit-card":()=>A2,crop:()=>U2,cross:()=>D2,crowdfire:()=>P2,crown:()=>G2,danger:()=>T2,"dark-mode":()=>$2,data:()=>O2,database:()=>E2,debug:()=>F2,default:()=>Os,designmodo:()=>N2,desktop:()=>J2,"details-less":()=>K2,"details-more":()=>Q2,dialpad:()=>R2,"dice-1":()=>W2,"dice-2":()=>_2,"dice-3":()=>oe,"dice-4":()=>re,"dice-5":()=>ee,"dice-6":()=>ne,digitalocean:()=>te,disc:()=>ie,"display-flex":()=>le,"display-fullwidth":()=>se,"display-grid":()=>ge,"display-spacing":()=>pe,"distribute-horizontal":()=>ae,"distribute-vertical":()=>de,"dock-bottom":()=>xe,"dock-left":()=>be,"dock-right":()=>he,"dock-window":()=>ce,dolby:()=>fe,dollar:()=>Ce,dribbble:()=>we,drive:()=>ue,drop:()=>He,"drop-invert":()=>ve,"drop-opacity":()=>me,duplicate:()=>Ve,"edit-black-point":()=>Le,"edit-contrast":()=>Me,"edit-exposure":()=>Ze,"edit-fade":()=>ke,"edit-flip-h":()=>ye,"edit-flip-v":()=>ze,"edit-highlight":()=>Be,"edit-markup":()=>qe,"edit-mask":()=>Xe,"edit-noise":()=>Ie,"edit-shadows":()=>Se,"edit-straight":()=>Ye,"edit-unmask":()=>je,eject:()=>Ae,enter:()=>Ue,erase:()=>De,ereader:()=>Pe,ericsson:()=>Ge,ethernet:()=>Te,euro:()=>$e,eventbrite:()=>Oe,expand:()=>Ee,export:()=>Fe,extension:()=>Qe,"extension-add":()=>Ne,"extension-alt":()=>Je,"extension-remove":()=>Ke,external:()=>Re,eye:()=>_e,"eye-alt":()=>We,facebook:()=>on,feed:()=>rn,figma:()=>en,file:()=>sn,"file-add":()=>nn,"file-document":()=>tn,"file-remove":()=>ln,film:()=>gn,filters:()=>pn,flag:()=>dn,"flag-alt":()=>an,folder:()=>hn,"folder-add":()=>xn,"folder-remove":()=>bn,"font-height":()=>cn,"font-spacing":()=>fn,"format-bold":()=>Cn,"format-center":()=>wn,"format-color":()=>un,"format-heading":()=>vn,"format-indent-decrease":()=>mn,"format-indent-increase":()=>Hn,"format-italic":()=>Vn,"format-justify":()=>Ln,"format-left":()=>Mn,"format-line-height":()=>Zn,"format-right":()=>kn,"format-separator":()=>yn,"format-slash":()=>zn,"format-strike":()=>Bn,"format-text":()=>qn,"format-underline":()=>Xn,"format-uppercase":()=>In,framer:()=>Sn,games:()=>Yn,"gender-female":()=>jn,"gender-male":()=>An,ghost:()=>Dn,"ghost-character":()=>Un,gift:()=>Pn,girl:()=>Gn,"git-branch":()=>Tn,"git-commit":()=>$n,"git-fork":()=>On,"git-pull":()=>En,gitter:()=>Fn,glass:()=>Jn,"glass-alt":()=>Nn,globe:()=>Qn,"globe-alt":()=>Kn,google:()=>Wn,"google-tasks":()=>Rn,gym:()=>_n,hashtag:()=>ot,headset:()=>rt,heart:()=>et,hello:()=>nt,home:()=>lt,"home-alt":()=>tt,"home-screen":()=>it,icecream:()=>st,"if-design":()=>gt,image:()=>pt,import:()=>at,inbox:()=>dt,"indie-hackers":()=>xt,infinity:()=>bt,info:()=>ht,inpicture:()=>ct,"insert-after":()=>wt,"insert-after-o":()=>ft,"insert-after-r":()=>Ct,"insert-before":()=>mt,"insert-before-o":()=>ut,"insert-before-r":()=>vt,insights:()=>Ht,instagram:()=>Vt,internal:()=>Lt,key:()=>Mt,keyboard:()=>Zt,keyhole:()=>kt,laptop:()=>yt,lastpass:()=>zt,"layout-grid":()=>qt,"layout-grid-small":()=>Bt,"layout-list":()=>Xt,"layout-pin":()=>It,linear:()=>St,link:()=>Yt,list:()=>At,"list-tree":()=>jt,"live-photo":()=>Ut,loadbar:()=>Tt,"loadbar-alt":()=>Dt,"loadbar-doc":()=>Pt,"loadbar-sound":()=>Gt,lock:()=>Ot,"lock-unlock":()=>$t,"log-in":()=>Et,"log-off":()=>Ft,"log-out":()=>Nt,loupe:()=>Jt,magnet:()=>Kt,mail:()=>_t,"mail-forward":()=>Qt,"mail-open":()=>Rt,"mail-reply":()=>Wt,"math-divide":()=>o4,"math-equal":()=>r4,"math-minus":()=>e4,"math-percent":()=>n4,"math-plus":()=>t4,maximize:()=>l4,"maximize-alt":()=>i4,maze:()=>s4,"media-live":()=>g4,"media-podcast":()=>p4,menu:()=>V4,"menu-boxed":()=>a4,"menu-cake":()=>d4,"menu-cheese":()=>x4,"menu-grid-o":()=>b4,"menu-grid-r":()=>h4,"menu-hotdog":()=>c4,"menu-left":()=>C4,"menu-left-alt":()=>f4,"menu-motion":()=>w4,"menu-oreos":()=>u4,"menu-right":()=>m4,"menu-right-alt":()=>v4,"menu-round":()=>H4,"merge-horizontal":()=>L4,"merge-vertical":()=>M4,mic:()=>Z4,microbit:()=>k4,microsoft:()=>y4,"mini-player":()=>z4,minimize:()=>q4,"minimize-alt":()=>B4,modem:()=>X4,monday:()=>I4,moon:()=>S4,more:()=>T4,"more-alt":()=>Y4,"more-o":()=>j4,"more-r":()=>A4,"more-vertical":()=>G4,"more-vertical-alt":()=>U4,"more-vertical-o":()=>D4,"more-vertical-r":()=>P4,mouse:()=>$4,"move-down":()=>O4,"move-left":()=>E4,"move-right":()=>F4,"move-task":()=>N4,"move-up":()=>J4,music:()=>R4,"music-note":()=>K4,"music-speaker":()=>Q4,nametag:()=>W4,notes:()=>_4,notifications:()=>oi,npm:()=>ri,oculus:()=>ei,"open-collective":()=>ni,options:()=>ti,organisation:()=>ii,overflow:()=>li,pacman:()=>si,password:()=>gi,"path-back":()=>pi,"path-crop":()=>ai,"path-divide":()=>di,"path-exclude":()=>xi,"path-front":()=>bi,"path-intersect":()=>hi,"path-outline":()=>ci,"path-trim":()=>fi,"path-unite":()=>Ci,patreon:()=>wi,paypal:()=>ui,pen:()=>vi,"pentagon-bottom-left":()=>mi,"pentagon-bottom-right":()=>Hi,"pentagon-down":()=>Vi,"pentagon-left":()=>Li,"pentagon-right":()=>Mi,"pentagon-top-left":()=>Zi,"pentagon-top-right":()=>ki,"pentagon-up":()=>yi,performance:()=>zi,pexels:()=>Bi,phone:()=>qi,photoscan:()=>Xi,piano:()=>Ii,pill:()=>Si,pin:()=>Ui,"pin-alt":()=>Yi,"pin-bottom":()=>ji,"pin-top":()=>Ai,"play-backwards":()=>Di,"play-button":()=>Ti,"play-button-o":()=>Pi,"play-button-r":()=>Gi,"play-forwards":()=>$i,"play-list":()=>Ji,"play-list-add":()=>Oi,"play-list-check":()=>Ei,"play-list-remove":()=>Fi,"play-list-search":()=>Ni,"play-pause":()=>Ri,"play-pause-o":()=>Ki,"play-pause-r":()=>Qi,"play-stop":()=>o5,"play-stop-o":()=>Wi,"play-stop-r":()=>_i,"play-track-next":()=>n5,"play-track-next-o":()=>r5,"play-track-next-r":()=>e5,"play-track-prev":()=>l5,"play-track-prev-o":()=>t5,"play-track-prev-r":()=>i5,plug:()=>s5,pocket:()=>g5,pokemon:()=>p5,polaroid:()=>a5,poll:()=>d5,presentation:()=>x5,printer:()=>b5,"product-hunt":()=>h5,profile:()=>c5,"pull-clear":()=>f5,"push-chevron-down":()=>u5,"push-chevron-down-o":()=>C5,"push-chevron-down-r":()=>w5,"push-chevron-left":()=>H5,"push-chevron-left-o":()=>v5,"push-chevron-left-r":()=>m5,"push-chevron-right":()=>M5,"push-chevron-right-o":()=>V5,"push-chevron-right-r":()=>L5,"push-chevron-up":()=>y5,"push-chevron-up-o":()=>Z5,"push-chevron-up-r":()=>k5,"push-down":()=>z5,"push-left":()=>B5,"push-right":()=>q5,"push-up":()=>X5,qr:()=>I5,quote:()=>Y5,"quote-o":()=>S5,"radio-check":()=>j5,"radio-checked":()=>A5,ratio:()=>U5,read:()=>D5,readme:()=>P5,record:()=>G5,redo:()=>T5,remote:()=>$5,remove:()=>E5,"remove-r":()=>O5,rename:()=>F5,reorder:()=>N5,repeat:()=>J5,ring:()=>K5,"row-first":()=>Q5,"row-last":()=>R5,ruler:()=>W5,"sand-clock":()=>_5,scan:()=>ol,screen:()=>tl,"screen-mirror":()=>rl,"screen-shot":()=>el,"screen-wide":()=>nl,"scroll-h":()=>il,"scroll-v":()=>ll,search:()=>pl,"search-found":()=>sl,"search-loading":()=>gl,select:()=>xl,"select-o":()=>al,"select-r":()=>dl,server:()=>bl,serverless:()=>hl,"shape-circle":()=>cl,"shape-half-circle":()=>fl,"shape-hexagon":()=>Cl,"shape-rhombus":()=>wl,"shape-square":()=>ul,"shape-triangle":()=>vl,"shape-zigzag":()=>ml,share:()=>Hl,shield:()=>Vl,"shopping-bag":()=>Ll,"shopping-cart":()=>Ml,shortcut:()=>Zl,shutterstock:()=>kl,sidebar:()=>Bl,"sidebar-open":()=>yl,"sidebar-right":()=>zl,signal:()=>ql,size:()=>Xl,sketch:()=>Il,slack:()=>Sl,sleep:()=>Yl,"smart-home-boiler":()=>jl,"smart-home-cooker":()=>Al,"smart-home-heat":()=>Ul,"smart-home-light":()=>Dl,"smart-home-refrigerator":()=>Pl,"smart-home-wash-machine":()=>Gl,smartphone:()=>El,"smartphone-chip":()=>Tl,"smartphone-ram":()=>$l,"smartphone-shake":()=>Ol,smile:()=>Wl,"smile-mouth-open":()=>Fl,"smile-neutral":()=>Nl,"smile-no-mouth":()=>Jl,"smile-none":()=>Kl,"smile-sad":()=>Ql,"smile-upside":()=>Rl,"software-download":()=>_l,"software-upload":()=>o0,"sort-az":()=>r0,"sort-za":()=>e0,"space-between":()=>t0,"space-between-v":()=>n0,spectrum:()=>i0,spinner:()=>p0,"spinner-alt":()=>l0,"spinner-two":()=>g0,"spinner-two-alt":()=>s0,square:()=>a0,stack:()=>d0,stark:()=>x0,stopwatch:()=>b0,stories:()=>h0,studio:()=>c0,style:()=>f0,sun:()=>C0,support:()=>w0,swap:()=>v0,"swap-vertical":()=>u0,sweden:()=>m0,swiss:()=>H0,sync:()=>V0,tab:()=>L0,tag:()=>M0,tally:()=>Z0,"tap-double":()=>k0,"tap-single":()=>y0,template:()=>z0,tennis:()=>B0,terminal:()=>q0,terrain:()=>X0,thermometer:()=>I0,thermostat:()=>S0,tikcode:()=>Y0,time:()=>j0,timelapse:()=>A0,timer:()=>U0,today:()=>D0,"toggle-off":()=>P0,"toggle-on":()=>G0,"toggle-square":()=>$0,"toggle-square-off":()=>T0,"toolbar-bottom":()=>O0,"toolbar-left":()=>E0,"toolbar-right":()=>F0,"toolbar-top":()=>N0,toolbox:()=>J0,touchpad:()=>K0,track:()=>Q0,transcript:()=>R0,trash:()=>_0,"trash-empty":()=>W0,tree:()=>os,trees:()=>rs,trello:()=>es,trending:()=>ts,"trending-down":()=>ns,trophy:()=>is,tv:()=>ls,twilio:()=>ss,twitter:()=>gs,"ui-kit":()=>ps,umbrella:()=>as,unavailable:()=>ds,unblock:()=>xs,undo:()=>bs,unfold:()=>hs,unsplash:()=>cs,usb:()=>Cs,"usb-c":()=>fs,user:()=>ms,"user-add":()=>ws,"user-list":()=>us,"user-remove":()=>vs,userlane:()=>Hs,vercel:()=>Gs,"view-cols":()=>Vs,"view-comfortable":()=>Ls,"view-day":()=>Ms,"view-grid":()=>Zs,"view-list":()=>ks,"view-month":()=>ys,"view-split":()=>zs,vinyl:()=>Bs,voicemail:()=>Is,"voicemail-o":()=>qs,"voicemail-r":()=>Xs,volume:()=>Ss,webcam:()=>Ys,website:()=>js,windows:()=>As,"work-alt":()=>Us,yinyang:()=>Ds,youtube:()=>Ps,"zoom-in":()=>Ts,"zoom-out":()=>$s});var P=[{nr:1,name:"abstract",tags:"brands",css:'.gg-abstract{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;transform:scale(var(--ggs,1));border-right:3px solid;border-top:3px solid}.gg-abstract::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;left:0;bottom:0;border:3px solid;border-radius:12px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 5H19V19H16L16 8H5V5Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10 19C12.7614 19 15 16.7614 15 14C15 11.2386 12.7614 9 10 9C7.23858 9 5 11.2386 5 14C5 16.7614 7.23858 19 10 19ZM10 16C11.1046 16 12 15.1046 12 14C12 12.8954 11.1046 12 10 12C8.89543 12 8 12.8954 8 14C8 15.1046 8.89543 16 10 16Z"
    fill="currentColor"
  />
</svg>`}],G=[{nr:2,name:"add-r",tags:"interface signs buttons",css:'.gg-add-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-add-r::after,.gg-add-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:8px;left:4px}.gg-add-r::after{width:2px;height:10px;top:4px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z"
    fill="currentColor"
  />
</svg>
`}],T=[{nr:3,name:"add",tags:"interface signs buttons",css:'.gg-add{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:22px}.gg-add::after,.gg-add::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:8px;left:4px}.gg-add::after{width:2px;height:10px;top:4px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
    fill="currentColor"
  />
</svg>
`}],$=[{nr:4,name:"adidas",tags:"brands",css:'.gg-adidas{position:relative;box-sizing:border-box;display:block;width:23px;height:15px;transform:scale(var(--ggs,1));overflow:hidden}.gg-adidas::before{content:"";position:absolute;box-sizing:border-box;display:block;width:5px;height:18px;background:currentColor;transform:rotate(-30deg);left:4px;bottom:-14px;box-shadow:7px -2px,14px -4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z"
    fill="currentColor"
  />
  <path
    d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z"
    fill="currentColor"
  />
  <path
    d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z"
    fill="currentColor"
  />
</svg>
`}],O=[{nr:5,name:"airplane",tags:"design",css:'.gg-airplane{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 22px,transparent 0) no-repeat center/16px 2px,radial-gradient(circle,currentColor 60%,transparent 40%) no-repeat right center/2px 2px}.gg-airplane::after,.gg-airplane::before{content:"";display:block;position:absolute;box-sizing:border-box;width:10px;height:8px;border-right:4px solid}.gg-airplane::before{border-top-right-radius:2px;top:0;transform:perspective(10px)rotateX(10deg)skewX(30deg);box-shadow:-4px 3px 0 -2px}.gg-airplane::after{border-bottom-right-radius:2px;bottom:0;transform:perspective(10px)rotateX(-10deg)skewX(-30deg);box-shadow:-4px -3px 0 -2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
  />
</svg>`}],E=[{nr:6,name:"alarm",tags:"alerts interface time",css:'.gg-alarm{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat 4.5px 6px/5px 2px,linear-gradient( to left,currentColor 7px,transparent 0)no-repeat 4.5px 2px/2px 6px;box-sizing:border-box;position:relative;display:block;width:16px;height:16px;border-radius:100%;border:2px solid transparent;transform:scale(var(--ggs,1));box-shadow:0 0 0 2px}.gg-alarm::after,.gg-alarm::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:2px;background:currentColor;top:-4px}.gg-alarm::before{left:-5px;transform:rotate(-42deg)}.gg-alarm::after{transform:rotate(42deg);right:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.45887 2L1 6.01478L2.33826 7.50107L6.79713 3.48629L5.45887 2Z"
    fill="currentColor"
  />
  <path d="M11 8H13V12H16V14H11V8Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z"
    fill="currentColor"
  />
  <path
    d="M18.5411 2L23 6.01478L21.6617 7.50107L17.2029 3.48629L18.5411 2Z"
    fill="currentColor"
  />
</svg>
`}],F=[{nr:7,name:"album",tags:"multimedia interface",css:'.gg-album{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));border-left:7px solid transparent;border-right:3px solid transparent;border-bottom:8px solid transparent;box-shadow:0 0 0 2px,inset 6px 4px 0 -4px,inset -6px 4px 0 -4px;border-radius:3px}.gg-album::after,.gg-album::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:5px;background:currentColor;transform:rotate(46deg);top:5px;right:4px}.gg-album::after{transform:rotate(-46deg);right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19ZM20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H10V12.0111L12.395 12.0112L14.0001 9.86419L15.6051 12.0112H18.0001L18 4H19C19.5523 4 20 4.44772 20 5V19ZM16 4H12V9.33585L14.0001 6.66046L16 9.33571V4Z"
    fill="currentColor"
  />
</svg>
`}],N=[{nr:8,name:"align-bottom",tags:"design content interface",css:'.gg-align-bottom{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-bottom:2px solid;transform:scale(var(--ggs,1));margin-top:4px}.gg-align-bottom::after,.gg-align-bottom::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;background:currentColor;bottom:2px}.gg-align-bottom::before{left:1px;height:12px}.gg-align-bottom::after{height:6px;right:1px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M13 10H17V16H13V10Z" fill="currentColor" fill-opacity="0.5" />
  <path d="M11 4H7V16H11V4Z" fill="currentColor" />
  <path d="M18 18H6V20H18V18Z" fill="currentColor" />
</svg>
`}],J=[{nr:9,name:"align-center",tags:"design content interface",css:'.gg-align-center{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-top:2px solid transparent;transform:scale(var(--ggs,1));margin-left:-4px}.gg-align-center::after,.gg-align-center::before{content:"";display:block;box-sizing:border-box;position:absolute;height:4px;background:currentColor}.gg-align-center::before{left:2px;width:12px;top:-2px}.gg-align-center::after{width:6px;right:1px;top:4px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 13H15V17H9V13Z" fill="currentColor" fill-opacity="0.5" />
  <path d="M6 7H18V11H6V7Z" fill="currentColor" />
</svg>`}],K=[{nr:10,name:"align-left",tags:"design content interface",css:'.gg-align-left{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-left:2px solid;transform:scale(var(--ggs,1));margin-left:-4px}.gg-align-left::after,.gg-align-left::before{content:"";display:block;box-sizing:border-box;position:absolute;height:4px;width:12px;background:currentColor;left:2px;top:1px}.gg-align-left::after{width:6px;top:7px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M8 13H14V17H8V13Z" fill="currentColor" fill-opacity="0.5" />
  <path d="M6 6H4V18H6V6Z" fill="currentColor" />
  <path d="M20 7H8V11H20V7Z" fill="currentColor" />
</svg>`}],Q=[{nr:11,name:"align-middle",tags:"design content interface",css:'.gg-align-middle{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;transform:scale(var(--ggs,1));border-top:2px solid transparent;margin-top:-8px}.gg-align-middle::after,.gg-align-middle::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;background:currentColor}.gg-align-middle::before{left:1px;height:12px;top:2px}.gg-align-middle::after{height:6px;right:1px;top:5px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M13 9H17V15H13V9Z" fill="currentColor" fill-opacity="0.5" />
  <path d="M7 6H11V18H7V6Z" fill="currentColor" />
</svg>`}],R=[{nr:12,name:"align-right",tags:"design content interface",css:'.gg-align-right{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-right:2px solid;transform:scale(var(--ggs,1));margin-right:-4px}.gg-align-right::after,.gg-align-right::before{content:"";display:block;box-sizing:border-box;position:absolute;height:4px;width:12px;background:currentColor;right:2px;top:1px}.gg-align-right::after{width:6px;top:7px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15.9991 13.0039L9.99907 12.9911L9.99054 16.9911L15.9905 17.0039L15.9991 13.0039Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19.978 18.0021L20.0036 6.00214L18.0036 5.99788L17.978 17.9979L19.978 18.0021Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.9964 10.9851L15.9964 11.0107L16.0049 7.0107L4.00493 6.98512L3.9964 10.9851Z"
    fill="currentColor"
  />
</svg>`}],W=[{nr:13,name:"align-top",tags:"design content interface",css:'.gg-align-top{box-sizing:border-box;position:relative;display:block;height:12px;width:12px;border-top:2px solid;transform:scale(var(--ggs,1));margin-top:-4px}.gg-align-top::after,.gg-align-top::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;background:currentColor;top:2px}.gg-align-top::before{left:1px;height:12px}.gg-align-top::after{height:6px;right:1px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.0352 7.98797L13.0374 13.988L17.0374 13.9865L17.0352 7.98653L13.0352 7.98797Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17.9996 4.01189L5.99963 4.01837L6.00038 6.01837L18.0004 6.01189L17.9996 4.01189Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.0374 19.9864L11.0321 7.98637L7.03207 7.98813L7.03736 19.9881L11.0374 19.9864Z"
    fill="currentColor"
  />
</svg>`}],_=[{nr:14,name:"anchor",tags:"design",css:'.gg-anchor{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor;border-radius:8px}.gg-anchor::after,.gg-anchor::before{content:"";display:block;box-sizing:border-box;position:absolute;height:6px;border:2px solid}.gg-anchor::after{width:12px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top-color:transparent;left:-5px;bottom:2px}.gg-anchor::before{width:6px;border-radius:8px;top:-4px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 6C15 7.30622 14.1652 8.41746 13 8.82929V16.874C14.7252 16.4299 16 14.8638 16 13H18C18 15.973 15.8377 18.441 13 18.917V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18.917C8.16229 18.441 6 15.973 6 13H8C8 14.8638 9.27477 16.4299 11 16.874V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z"
    fill="currentColor"
  />
</svg>`}],o1=[{nr:15,name:"apple-watch",tags:"devices time",css:'.gg-apple-watch{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat 13px 4px/2px 4px;box-sizing:border-box;position:relative;display:block;width:24px;height:24px;border:5px solid transparent;transform:scale(var(--ggs,1));border-radius:9px;box-shadow:inset 0 0 0 2px}.gg-apple-watch::after,.gg-apple-watch::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:5px;border:2px solid;border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;left:2px}.gg-apple-watch::after{top:-3px}.gg-apple-watch::before{transform:scaleY(-1);top:12px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.4975 5.02988C16.4973 5.07798 16.4959 5.12581 16.4934 5.17335C17.662 5.58332 18.5 6.69628 18.5 8.00496V9.00493H19.5V13.0049H18.5V16.005C18.5 17.3129 17.663 18.4254 16.4953 18.8359C16.4984 18.8919 16.5 18.9482 16.5 19.005C16.5 20.6618 15.1569 22.005 13.5 22.005H9.5C7.84315 22.005 6.5 20.6618 6.5 19.005C6.5 18.9482 6.50158 18.8919 6.50468 18.8359C5.33705 18.4254 4.5 17.3129 4.5 16.005V8.00496C4.5 6.69767 5.33618 5.58568 6.50286 5.17465C6.49907 5.11032 6.4973 5.04546 6.49763 4.98011C6.50587 3.32328 7.85569 1.98683 9.51252 1.99508L13.5125 2.01499C15.1693 2.02324 16.5058 3.37305 16.4975 5.02988ZM8.49764 5.00496H14.4975C14.4922 4.45954 14.0498 4.01769 13.5025 4.01496L9.50257 3.99505C8.95029 3.99231 8.50035 4.43779 8.4976 4.99006L8.49764 5.00496ZM15.7049 7.02596L11.4846 7.00496H7.5C6.94772 7.00496 6.5 7.45267 6.5 8.00496V16.005C6.5 16.5568 6.94696 17.0042 7.4986 17.005H15.5014C16.053 17.0042 16.5 16.5568 16.5 16.005V8.00496C16.5 7.52289 16.1589 7.12049 15.7049 7.02596ZM8.5 19.005C8.5 19.5572 8.94772 20.005 9.5 20.005H13.5C14.0523 20.005 14.5 19.5572 14.5 19.005H8.5Z"
    fill="currentColor"
  />
</svg>`}],r1=[{nr:16,name:"arrange-back",tags:"interface",css:'.gg-arrange-back{box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));display:block;width:18px;height:18px}.gg-arrange-back::after,.gg-arrange-back::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrange-back::after{width:10px;height:10px;border:2px solid;left:4px;top:4px}.gg-arrange-back::before{width:8px;height:8px;background:currentColor;box-shadow:10px 10px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3H11V7H17V13H21V21H13V17H7V11H3V3ZM15 13H13V15H9V11H11V9H15V13Z"
    fill="currentColor"
  />
</svg>`}],e1=[{nr:17,name:"arrange-front",tags:"interface",css:'.gg-arrange-front{box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));display:block;width:18px;height:18px}.gg-arrange-front::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;left:4px;top:4px;box-shadow:-5px -5px 0 -1px,5px 5px 0 -1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3H11V7H17V13H21V21H13V17H7V11H3V3ZM15 9H9V15H15V9Z"
    fill="currentColor"
  />
</svg>`}],n1=[{nr:18,name:"arrow-align-h",tags:"arrows interface",css:'.gg-arrow-align-h{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:10px;background:linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 2px 4px/6px 2px,linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 12px 4px/6px 2px,linear-gradient(to left,currentColor 15px,transparent 0)no-repeat center/2px 10px}.gg-arrow-align-h::after,.gg-arrow-align-h::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);top:2px}.gg-arrow-align-h::after{border-bottom:2px solid;border-left:2px solid;left:1px}.gg-arrow-align-h::before{border-top:2px solid;border-right:2px solid;right:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M13 7H11V17H13V7Z" fill="currentColor" />
  <path
    d="M5.99996 7.75732L7.41418 9.17154L5.58572 11L9.99996 11V13L5.58579 13L7.41418 14.8284L5.99996 16.2426L1.75732 12L5.99996 7.75732Z"
    fill="currentColor"
  />
  <path
    d="M18 16.2427L16.5858 14.8285L18.4143 13H14V11L18.4142 11L16.5858 9.17161L18 7.75739L22.2427 12L18 16.2427Z"
    fill="currentColor"
  />
</svg>`}],t1=[{nr:19,name:"arrow-align-v",tags:"arrows interface",css:'.gg-arrow-align-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px;background:linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 4px 2px/2px 6px,linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 4px 12px/2px 6px,linear-gradient(to left,currentColor 15px,transparent 0)no-repeat center/10px 2px}.gg-arrow-align-v::after,.gg-arrow-align-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg);left:2px}.gg-arrow-align-v::after{border-bottom:2px solid;border-left:2px solid;bottom:1px}.gg-arrow-align-v::before{border-top:2px solid;border-right:2px solid;top:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M7 11L7 13H17V11H7Z" fill="currentColor" />
  <path
    d="M7.75732 18L9.17154 16.5858L11 18.4143V14H13V18.4142L14.8284 16.5858L16.2426 18L12 22.2427L7.75732 18Z"
    fill="currentColor"
  />
  <path
    d="M16.2427 5.99996L14.8285 7.41418L13 5.58572V9.99996H11L11 5.58579L9.17161 7.41418L7.75739 5.99996L12 1.75732L16.2427 5.99996Z"
    fill="currentColor"
  />
</svg>`}],i1=[{nr:20,name:"arrow-bottom-left-o",tags:"arrows interface",css:'.gg-arrow-bottom-left-o{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:20px}.gg-arrow-bottom-left-o::after,.gg-arrow-bottom-left-o::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-arrow-bottom-left-o::after{width:10px;height:2px;background:currentColor;transform:rotate(-45deg);bottom:8px}.gg-arrow-bottom-left-o::before{width:6px;height:6px;bottom:4px;border-bottom:2px solid;border-left:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 10.0367L8.00002 10.0367L8 16.0367L14 16.0367L14 14.0367L11.4143 14.0366L16.7438 8.7071L15.3296 7.29289L10 12.6224L10 10.0367Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],l1=[{nr:21,name:"arrow-bottom-left-r",tags:"arrows interface",css:'.gg-arrow-bottom-left-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-arrow-bottom-left-r::after,.gg-arrow-bottom-left-r::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-arrow-bottom-left-r::after{width:10px;height:2px;background:currentColor;transform:rotate(-45deg);bottom:8px}.gg-arrow-bottom-left-r::before{width:6px;height:6px;bottom:4px;border-bottom:2px solid;border-left:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 10.0367H8V16.0367H14V14.0367H11.4142L16.7438 8.70712L15.3296 7.2929L10 12.6225V10.0367Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],s1=[{nr:22,name:"arrow-bottom-left",tags:"arrows interface",css:'.gg-arrow-bottom-left{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border-bottom:2px solid;transform:scale(var(--ggs,1));border-left:2px solid}.gg-arrow-bottom-left::after{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(-45deg);bottom:3px;left:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.2426 7.17154L16.8284 5.75732L7.75739 14.8283L7.75739 10.2427H5.75739L5.75739 18.2427H13.7574V16.2427L9.17144 16.2427L18.2426 7.17154Z"
    fill="currentColor"
  />
</svg>`}],g1=[{nr:23,name:"arrow-bottom-right-o",tags:"arrows interface",css:'.gg-arrow-bottom-right-o{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:20px}.gg-arrow-bottom-right-o::after,.gg-arrow-bottom-right-o::before{content:"";display:block;box-sizing:border-box;position:absolute;right:4px}.gg-arrow-bottom-right-o::after{width:10px;height:2px;background:currentColor;transform:rotate(45deg);bottom:8px}.gg-arrow-bottom-right-o::before{width:6px;height:6px;bottom:4px;border-bottom:2px solid;border-right:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.0367 10.0367H16.0367V16.0367H10.0367V14.0367H12.6225L7.29297 8.70713L8.70718 7.29291L14.0367 12.6225L14.0367 10.0367Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],p1=[{nr:24,name:"arrow-bottom-right-r",tags:"arrows interface",css:'.gg-arrow-bottom-right-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-arrow-bottom-right-r::after,.gg-arrow-bottom-right-r::before{content:"";display:block;box-sizing:border-box;position:absolute;right:4px}.gg-arrow-bottom-right-r::after{width:10px;height:2px;background:currentColor;transform:rotate(45deg);bottom:8px}.gg-arrow-bottom-right-r::before{width:6px;height:6px;bottom:4px;border-bottom:2px solid;border-right:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.0367 10.0367H16.0367V16.0367H10.0367V14.0367H12.6225L7.29297 8.70713L8.70718 7.29292L14.0367 12.6225L14.0367 10.0367Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],a1=[{nr:25,name:"arrow-bottom-right",tags:"arrows interface",css:'.gg-arrow-bottom-right{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border-bottom:2px solid;transform:scale(var(--ggs,1));border-right:2px solid}.gg-arrow-bottom-right::after{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(45deg);bottom:3px;right:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.75739 7.17154L7.1716 5.75732L16.2426 14.8283L16.2426 10.2427H18.2426L18.2426 18.2427H10.2426V16.2427L14.8285 16.2427L5.75739 7.17154Z"
    fill="currentColor"
  />
</svg>`}],d1=[{nr:26,name:"arrow-down-o",tags:"arrows interface",css:'.gg-arrow-down-o{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:20px}.gg-arrow-down-o::after,.gg-arrow-down-o::before{content:"";display:block;box-sizing:border-box;position:absolute;bottom:4px}.gg-arrow-down-o::after{width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(-45deg);left:6px}.gg-arrow-down-o::before{width:2px;height:10px;left:8px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8285 12.0259L16.2427 13.4402L12 17.6828L7.7574 13.4402L9.17161 12.0259L11 13.8544V6.31724H13V13.8544L14.8285 12.0259Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C-0.0739417 15.4824 -0.0739417 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782ZM18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364Z"
    fill="currentColor"
  />
</svg>`}],x1=[{nr:27,name:"arrow-down-r",tags:"arrows interface",css:'.gg-arrow-down-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-arrow-down-r::after,.gg-arrow-down-r::before{content:"";display:block;box-sizing:border-box;position:absolute;bottom:4px}.gg-arrow-down-r::after{width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(-45deg);left:6px}.gg-arrow-down-r::before{width:2px;height:10px;left:8px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8284 12.0259L16.2426 13.4402L12 17.6828L7.75733 13.4402L9.17155 12.0259L11 13.8544V6.31724H13V13.8544L14.8284 12.0259Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],b1=[{nr:28,name:"arrow-down",tags:"arrows interface",css:'.gg-arrow-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-arrow-down::after,.gg-arrow-down::before{content:"";display:block;box-sizing:border-box;position:absolute;bottom:4px}.gg-arrow-down::after{width:8px;height:8px;border-bottom:2px solid;border-left:2px solid;transform:rotate(-45deg);left:7px}.gg-arrow-down::before{width:2px;height:16px;left:10px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
    fill="currentColor"
  />
</svg>`}],h1=[{nr:29,name:"arrow-left-o",tags:"arrows interface",css:'.gg-arrow-left-o{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:22px}.gg-arrow-left-o::after,.gg-arrow-left-o::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-arrow-left-o::after{width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);bottom:6px}.gg-arrow-left-o::before{width:10px;height:2px;bottom:8px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.9481 14.8285L10.5339 16.2427L6.29122 12L10.5339 7.7574L11.9481 9.17161L10.1196 11H17.6568V13H10.1196L11.9481 14.8285Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.22183 19.7782C-0.0739419 15.4824 -0.0739419 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782ZM5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364Z"
    fill="currentColor"
  />
</svg>`}],c1=[{nr:30,name:"arrow-left-r",tags:"arrows interface",css:'.gg-arrow-left-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-arrow-left-r::after,.gg-arrow-left-r::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-arrow-left-r::after{width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);bottom:6px}.gg-arrow-left-r::before{width:10px;height:2px;bottom:8px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.9481 14.8285L10.5339 16.2427L6.29126 12L10.5339 7.7574L11.9481 9.17161L10.1197 11H17.6568V13H10.1197L11.9481 14.8285Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19ZM19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
    fill="currentColor"
  />
</svg>`}],f1=[{nr:31,name:"arrow-left",tags:"arrows interface",css:'.gg-arrow-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-arrow-left::after,.gg-arrow-left::before{content:"";display:block;box-sizing:border-box;position:absolute;left:3px}.gg-arrow-left::after{width:8px;height:8px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);bottom:7px}.gg-arrow-left::before{width:16px;height:2px;bottom:10px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
    fill="currentColor"
  />
</svg>`}],C1=[{nr:32,name:"arrow-long-down-c",tags:"arrows interface",css:'.gg-arrow-long-down-c{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;border-top:4px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-down-c::after,.gg-arrow-long-down-c::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-down-c::after{width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:0;left:-2px}.gg-arrow-long-down-c::before{width:6px;height:6px;border:2px solid;border-radius:8px;top:-4px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.9991 6.84976C9.83339 6.43819 8.99813 5.32671 8.99813 4.02014C8.99813 2.36329 10.3413 1.02014 11.9981 1.02014C13.655 1.02014 14.9981 2.36329 14.9981 4.02014C14.9981 5.32601 14.1638 6.43701 12.9991 6.84911L13.0121 19.1375L14.8244 17.315L16.2426 18.7253L12.0119 22.9799L7.75739 18.7491L9.16763 17.3309L11.0122 19.1652L10.9991 6.84976ZM11.9981 5.02014C11.4458 5.02014 10.9981 4.57243 10.9981 4.02014C10.9981 3.46786 11.4458 3.02014 11.9981 3.02014C12.5504 3.02014 12.9981 3.46786 12.9981 4.02014C12.9981 4.57243 12.5504 5.02014 11.9981 5.02014Z"
    fill="currentColor"
  />
</svg>`}],w1=[{nr:33,name:"arrow-long-down-e",tags:"arrows interface",css:'.gg-arrow-long-down-e{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;border-top:4px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-down-e::after,.gg-arrow-long-down-e::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-down-e::after{width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:0;left:-2px}.gg-arrow-long-down-e::before{width:6px;height:6px;border:2px solid;top:-5px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.998 1.02014H8.99801V7.02014H10.9991L11.012 19.1652L9.16751 17.3309L7.75726 18.7491L12.0118 22.9799L16.2427 18.7253L14.8246 17.315L13.012 19.1378L12.9991 7.02014H14.998V1.02014ZM10.998 3.02014H12.998V5.02014H10.998V3.02014Z"
    fill="currentColor"
  />
</svg>`}],u1=[{nr:34,name:"arrow-long-down-l",tags:"arrows interface",css:'.gg-arrow-long-down-l{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-down-l::after,.gg-arrow-long-down-l::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-down-l::after{width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:0;left:-2px}.gg-arrow-long-down-l::before{width:6px;height:2px;background:currentColor;top:-1px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.99801 0.972107V2.97211H11.9983L10.998 2.97299L11.0124 19.2135L9.16751 17.379L7.75726 18.7972L12.0118 23.0279L16.2427 18.7734L14.8246 17.3632L13.0124 19.1856L12.998 2.97211H14.998V0.972107H8.99801Z"
    fill="currentColor"
  />
</svg>`}],v1=[{nr:35,name:"arrow-long-down-r",tags:"arrows interface",css:'.gg-arrow-long-down-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;border-top:4px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-down-r::after,.gg-arrow-long-down-r::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-down-r::after{width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:0;left:-2px}.gg-arrow-long-down-r::before{width:6px;height:6px;border:2px solid;transform:rotate(45deg);top:-5px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.2416 4.64146L11.9989 0.398819L7.75629 4.64146L11.0003 7.88551L11.013 19.7865L9.16846 17.9523L7.75821 19.3704L12.0127 23.6012L16.2437 19.3466L14.8255 17.9363L13.013 19.7591L13.0003 7.8827L16.2416 4.64146ZM10.5847 4.64146L11.9989 3.22725L13.4131 4.64146L11.9989 6.05567L10.5847 4.64146Z"
    fill="currentColor"
  />
</svg>`}],m1=[{nr:36,name:"arrow-long-down",tags:"arrows interface",css:'.gg-arrow-long-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-down::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:0;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.0125 19.162L14.8246 17.3398L16.2427 18.7501L12.012 23.0046L7.75726 18.7739L9.16751 17.3557L11.0126 19.1905L10.998 0.997021L12.998 0.995422L13.0125 19.162Z"
    fill="currentColor"
  />
</svg>`}],H1=[{nr:37,name:"arrow-long-left-c",tags:"arrows interface",css:'.gg-arrow-long-left-c{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;border-right:4px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-left-c::after,.gg-arrow-long-left-c::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-left-c::after{width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);left:0;bottom:-2px}.gg-arrow-long-left-c::before{width:6px;height:6px;border:2px solid;border-radius:8px;right:-4px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.27 7.75737L1.0202 11.9928L5.25576 16.2426L6.67236 14.8308L4.85801 13.0103L17.1463 13.0525C17.5532 14.219 18.6604 15.0583 19.9663 15.0642C21.6231 15.0717 22.9723 13.7346 22.9798 12.0777C22.9872 10.4209 21.6501 9.07172 19.9933 9.06427C18.6867 9.05841 17.5715 9.88865 17.1547 11.0525L4.83934 11.0102L6.68182 9.17397L5.27 7.75737ZM18.9798 12.0598C18.9823 11.5075 19.432 11.0618 19.9843 11.0643C20.5366 11.0667 20.9823 11.5165 20.9798 12.0687C20.9773 12.621 20.5276 13.0667 19.9753 13.0642C19.423 13.0618 18.9773 12.612 18.9798 12.0598Z"
    fill="currentColor"
  />
</svg>`}],V1=[{nr:38,name:"arrow-long-left-e",tags:"arrows interface",css:'.gg-arrow-long-left-e{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;border-right:4px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-left-e::after,.gg-arrow-long-left-e::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-left-e::after{width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);left:0;bottom:-2px}.gg-arrow-long-left-e::before{width:6px;height:6px;border:2px solid;right:-4px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.26323 7.75737L1.01343 11.9928L5.24893 16.2426L6.66553 14.8308L4.85123 13.0104L16.9685 13.0519L16.9596 15.0507L22.9595 15.0777L22.9865 9.07773L16.9865 9.05079L16.9775 11.0519L4.83252 11.0103L6.67505 9.17397L5.26323 7.75737ZM20.9775 11.0687L20.9685 13.0687L18.9685 13.0597L18.9775 11.0597L20.9775 11.0687Z"
    fill="currentColor"
  />
</svg>`}],L1=[{nr:39,name:"arrow-long-left-l",tags:"arrows interface",css:'.gg-arrow-long-left-l{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-left-l::after,.gg-arrow-long-left-l::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-left-l::after{width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);left:0;bottom:-2px}.gg-arrow-long-left-l::before{width:2px;height:6px;background:currentColor;right:-1px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.20837 7.75725L0.969116 12.0033L5.21515 16.2428L6.62823 14.8274L4.80949 13.0116L21.0229 13.0298L21.0189 15.0297L23.0189 15.0338L23.0309 9.03377L21.0309 9.02976L21.0249 12.019L21.0261 11.0298L4.78543 11.0115L6.62371 9.17033L5.20837 7.75725Z"
    fill="currentColor"
  />
</svg>`}],M1=[{nr:40,name:"arrow-long-left-r",tags:"arrows interface",css:'.gg-arrow-long-left-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;border-right:4px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-left-r::after,.gg-arrow-long-left-r::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-left-r::after{width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);left:0;bottom:-2px}.gg-arrow-long-left-r::before{width:6px;height:6px;border:2px solid;transform:rotate(45deg);right:-5px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.64872 7.72528L0.398926 11.9608L4.63443 16.2105L6.05103 14.7987L4.23673 12.9783L16.1027 13.019L19.3585 16.2747L23.6011 12.0321L19.3585 7.78945L16.1289 11.019L4.21801 10.9782L6.06055 9.14188L4.64872 7.72528ZM17.9443 12.0321L19.3585 10.6179L20.7727 12.0321L19.3585 13.4463L17.9443 12.0321Z"
    fill="currentColor"
  />
</svg>`}],Z1=[{nr:41,name:"arrow-long-left",tags:"arrows interface",css:'.gg-arrow-long-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-left::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);left:0;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
    fill="currentColor"
  />
</svg>`}],k1=[{nr:42,name:"arrow-long-right-c",tags:"arrows interface",css:'.gg-arrow-long-right-c{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-right-c::after,.gg-arrow-long-right-c::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-right-c::after{width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);right:0;bottom:-2px}.gg-arrow-long-right-c::before{width:6px;height:6px;border:2px solid;border-radius:8px;left:-4px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z"
    fill="currentColor"
  />
</svg>`}],y1=[{nr:43,name:"arrow-long-right-e",tags:"arrows interface",css:'.gg-arrow-long-right-e{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-right-e::after,.gg-arrow-long-right-e::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-right-e::after{width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);right:0;bottom:-2px}.gg-arrow-long-right-e::before{width:6px;height:6px;border:2px solid;left:-4px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22.9865 11.9929L18.7511 16.2426L17.3345 14.8308L19.1488 13.0104L7.0314 13.0519L7.04038 15.0507L1.04044 15.0777L1.01349 9.07773L7.01343 9.05079L7.02242 11.0519L19.1674 11.0103L17.3249 9.17398L18.7367 7.75739L22.9865 11.9929ZM3.02245 11.0687L3.03143 13.0687L5.03141 13.0597L5.02243 11.0597L3.02245 11.0687Z"
    fill="currentColor"
  />
</svg>`}],z1=[{nr:44,name:"arrow-long-right-l",tags:"arrows interface",css:'.gg-arrow-long-right-l{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-right-l::after,.gg-arrow-long-right-l::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-right-l::after{width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);right:0;bottom:-2px}.gg-arrow-long-right-l::before{width:2px;height:6px;background:currentColor;left:-1px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z"
    fill="currentColor"
  />
</svg>`}],B1=[{nr:45,name:"arrow-long-right-r",tags:"arrows interface",css:'.gg-arrow-long-right-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-right-r::after,.gg-arrow-long-right-r::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-right-r::after{width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);right:0;bottom:-2px}.gg-arrow-long-right-r::before{width:6px;height:6px;border:2px solid;transform:rotate(45deg);left:-5px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19.3514 7.72525L23.6012 11.9607L19.3655 16.2105L17.9489 14.7987L19.7633 12.9781L7.89744 13.0188L4.64151 16.2748L0.398865 12.0321L4.64151 7.78947L7.87093 11.0189L19.782 10.9781L17.9395 9.14185L19.3514 7.72525ZM4.64151 13.4463L6.05572 12.0321L4.64151 10.6179L3.22729 12.0321L4.64151 13.4463Z"
    fill="currentColor"
  />
</svg>`}],q1=[{nr:46,name:"arrow-long-right",tags:"arrows interface",css:'.gg-arrow-long-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}.gg-arrow-long-right::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);right:0;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
    fill="currentColor"
  />
</svg>`}],X1=[{nr:47,name:"arrow-long-up-c",tags:"arrows interface",css:'.gg-arrow-long-up-c{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;border-bottom:4px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-up-c::after,.gg-arrow-long-up-c::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-up-c::after{width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);top:0;left:-2px}.gg-arrow-long-up-c::before{width:6px;height:6px;border:2px solid;border-radius:8px;bottom:-4px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.75751 5.23078L12.0321 1.02029L16.2425 5.29492L14.8177 6.69842L13.0141 4.86736L12.9427 17.1555C14.1054 17.5732 14.9345 18.6881 14.9283 19.994C14.9204 21.6508 13.5709 22.9876 11.9141 22.9797C10.2572 22.9718 8.92049 21.6223 8.92836 19.9655C8.93456 18.6589 9.77508 17.5514 10.9427 17.1454L11.0142 4.83017L9.161 6.65563L7.75751 5.23078ZM11.9331 18.9797C11.3808 18.9771 10.931 19.4227 10.9283 19.975C10.9257 20.5273 11.3713 20.9771 11.9236 20.9797C12.4759 20.9823 12.9257 20.5367 12.9283 19.9845C12.9309 19.4322 12.4853 18.9824 11.9331 18.9797Z"
    fill="currentColor"
  />
</svg>`}],I1=[{nr:48,name:"arrow-long-up-e",tags:"arrows interface",css:'.gg-arrow-long-up-e{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;border-bottom:4px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-up-e::after,.gg-arrow-long-up-e::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-up-e::after{width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);top:0;left:-2px}.gg-arrow-long-up-e::before{width:6px;height:6px;border:2px solid;bottom:-5px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.0321 1.01318L16.2425 5.28781L14.8177 6.69131L13.014 4.86019L12.9436 16.9774L14.9425 16.9869L14.914 22.9868L8.91412 22.9583L8.9426 16.9584L10.9436 16.9679L11.0142 4.82318L9.16107 6.64852L7.75757 5.22367L12.0321 1.01318ZM10.9236 20.9678L12.9236 20.9773L12.9331 18.9773L10.9331 18.9678L10.9236 20.9678Z"
    fill="currentColor"
  />
</svg>`}],S1=[{nr:49,name:"arrow-long-up-l",tags:"arrows interface",css:'.gg-arrow-long-up-l{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-up-l::after,.gg-arrow-long-up-l::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-up-l::after{width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);top:0;left:-2px}.gg-arrow-long-up-l::before{width:6px;height:2px;background:currentColor;bottom:-1px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.0321 1.01865L16.2425 5.29327L14.8177 6.69677L13.0192 4.87094L12.9676 20.9813H14.9644V22.9813H8.96441V20.9813H10.9676L11.0194 4.82354L9.16107 6.65399L7.75757 5.22914L12.0321 1.01865Z"
    fill="currentColor"
  />
</svg>`}],Y1=[{nr:50,name:"arrow-long-up-r",tags:"arrows interface",css:'.gg-arrow-long-up-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;border-bottom:4px solid transparent;box-shadow:inset 0 0 0 2px;height:24px;width:6px}.gg-arrow-long-up-r::after,.gg-arrow-long-up-r::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-long-up-r::after{width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);top:0;left:-2px}.gg-arrow-long-up-r::before{width:6px;height:6px;border:2px solid;transform:rotate(45deg);bottom:-5px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.79337 4.60945L12.0679 0.398956L16.2785 4.67358L14.8536 6.07708L13.0499 4.24596L12.9809 16.1324L16.2068 19.3584L11.9642 23.601L7.72156 19.3584L10.981 16.0989L11.0501 4.20883L9.19686 6.0343L7.79337 4.60945ZM11.9642 20.7726L13.3784 19.3584L11.9642 17.9442L10.55 19.3584L11.9642 20.7726Z"
    fill="currentColor"
  />
</svg>`}],j1=[{nr:51,name:"arrow-long-up",tags:"arrows interface",css:'.gg-arrow-long-up,.gg-arrow-long-up::after{display:block;box-sizing:border-box;width:6px}.gg-arrow-long-up{position:relative;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px}.gg-arrow-long-up::after{content:"";position:absolute;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);top:0;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.0321 1.01712L7.75751 5.22761L9.161 6.65246L11.0197 4.82165L10.9644 22.9768L12.9644 22.9829L13.0195 4.86974L14.8177 6.69525L16.2425 5.29175L12.0321 1.01712Z"
    fill="currentColor"
  />
</svg>`}],A1=[{nr:52,name:"arrow-right-o",tags:"arrows interface",css:'.gg-arrow-right-o{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:20px}.gg-arrow-right-o::after,.gg-arrow-right-o::before{content:"";display:block;box-sizing:border-box;position:absolute;right:4px}.gg-arrow-right-o::after{width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:6px}.gg-arrow-right-o::before{width:10px;height:2px;bottom:8px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
    fill="currentColor"
  />
</svg>`}],U1=[{nr:53,name:"arrow-right-r",tags:"arrows interface",css:'.gg-arrow-right-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-arrow-right-r::after,.gg-arrow-right-r::before{content:"";display:block;box-sizing:border-box;position:absolute;right:4px}.gg-arrow-right-r::after{width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:6px}.gg-arrow-right-r::before{width:10px;height:2px;bottom:8px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
    fill="currentColor"
  />
</svg>`}],D1=[{nr:54,name:"arrow-right",tags:"arrows interface",css:'.gg-arrow-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-arrow-right::after,.gg-arrow-right::before{content:"";display:block;box-sizing:border-box;position:absolute;right:3px}.gg-arrow-right::after{width:8px;height:8px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:7px}.gg-arrow-right::before{width:16px;height:2px;bottom:10px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
    fill="currentColor"
  />
</svg>`}],P1=[{nr:55,name:"arrow-top-left-o",tags:"arrows interface",css:'.gg-arrow-top-left-o{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:20px}.gg-arrow-top-left-o::after,.gg-arrow-top-left-o::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-arrow-top-left-o::after{width:10px;height:2px;background:currentColor;transform:rotate(45deg);bottom:8px;right:4px}.gg-arrow-top-left-o::before{width:6px;height:6px;left:4px;top:4px;border-top:2px solid;border-left:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 13.9633H8V7.96331H14V9.96331H11.4142L16.7438 15.2929L15.3296 16.7071L10 11.3775L10 13.9633Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
    fill="currentColor"
  />
</svg>`}],G1=[{nr:56,name:"arrow-top-left-r",tags:"arrows interface",css:'.gg-arrow-top-left-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-arrow-top-left-r::after,.gg-arrow-top-left-r::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-arrow-top-left-r::after{width:10px;height:2px;background:currentColor;transform:rotate(45deg);bottom:8px}.gg-arrow-top-left-r::before{width:6px;height:6px;top:4px;border-top:2px solid;border-left:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 13.9633H8V7.96331H14V9.96331H11.4142L16.7438 15.2929L15.3296 16.7071L10 11.3775L10 13.9633Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
    fill="currentColor"
  />
</svg>`}],T1=[{nr:57,name:"arrow-top-left",tags:"arrows interface",css:'.gg-arrow-top-left{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;transform:scale(var(--ggs,1));border-top:2px solid;border-left:2px solid}.gg-arrow-top-left::after{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(45deg);top:3px;left:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.4747 5.49475L13.4793 7.49475L8.92175 7.50541L18.5253 17.0896L17.1125 18.5052L7.48259 8.89473L7.49339 13.5088L5.49339 13.5134L5.47467 5.51345L13.4747 5.49475Z"
    fill="currentColor"
  />
</svg>`}],$1=[{nr:58,name:"arrow-top-right-o",tags:"arrows interface",css:'.gg-arrow-top-right-o{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:20px}.gg-arrow-top-right-o::after,.gg-arrow-top-right-o::before{content:"";display:block;box-sizing:border-box;position:absolute;right:4px}.gg-arrow-top-right-o::after{width:10px;height:2px;background:currentColor;transform:rotate(-45deg);bottom:8px}.gg-arrow-top-right-o::before{width:6px;height:6px;top:4px;border-top:2px solid;border-right:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14 13.9633H16V7.96331H10V9.96331H12.5858L7.25623 15.2929L8.67044 16.7071L14 11.3775L14 13.9633Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
    fill="currentColor"
  />
</svg>`}],O1=[{nr:59,name:"arrow-top-right-r",tags:"arrows interface",css:'.gg-arrow-top-right-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-arrow-top-right-r::after,.gg-arrow-top-right-r::before{content:"";display:block;box-sizing:border-box;position:absolute;right:4px}.gg-arrow-top-right-r::after{width:10px;height:2px;background:currentColor;transform:rotate(-45deg);bottom:8px}.gg-arrow-top-right-r::before{width:6px;height:6px;top:4px;border-top:2px solid;border-right:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14 13.9633H16V7.96331H10V9.96331H12.5858L7.25623 15.2929L8.67044 16.7071L14 11.3775V13.9633Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19ZM19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
    fill="currentColor"
  />
</svg>`}],E1=[{nr:60,name:"arrow-top-right",tags:"arrows interface",css:'.gg-arrow-top-right{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border-top:2px solid;transform:scale(var(--ggs,1));border-right:2px solid}.gg-arrow-top-right::after{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(-45deg);top:3px;right:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z"
    fill="currentColor"
  />
</svg>`}],F1=[{nr:61,name:"arrow-up-o",tags:"arrows interface",css:'.gg-arrow-up-o{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:20px}.gg-arrow-up-o::after,.gg-arrow-up-o::before{content:"";display:block;box-sizing:border-box;position:absolute;top:4px}.gg-arrow-up-o::after{width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:6px}.gg-arrow-up-o::before{width:2px;height:10px;left:8px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8285 11.9481L16.2427 10.5339L12 6.29122L7.7574 10.5339L9.17161 11.9481L11 10.1196V17.6568H13V10.1196L14.8285 11.9481Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19.7782 4.22183C15.4824 -0.0739415 8.51759 -0.0739422 4.22183 4.22183C-0.0739415 8.51759 -0.0739422 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604Z"
    fill="currentColor"
  />
</svg>`}],N1=[{nr:62,name:"arrow-up-r",tags:"arrows interface",css:'.gg-arrow-up-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-arrow-up-r::after,.gg-arrow-up-r::before{content:"";display:block;box-sizing:border-box;position:absolute;top:4px}.gg-arrow-up-r::after{width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:6px}.gg-arrow-up-r::before{width:2px;height:10px;left:8px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8543 11.9741L16.2686 10.5599L12.0259 6.31724L7.78327 10.5599L9.19749 11.9741L11.0259 10.1457V17.6828H13.0259V10.1457L14.8543 11.9741Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
    fill="currentColor"
  />
</svg>`}],J1=[{nr:63,name:"arrow-up",tags:"arrows interface",css:'.gg-arrow-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-arrow-up::after,.gg-arrow-up::before{content:"";display:block;box-sizing:border-box;position:absolute;top:4px}.gg-arrow-up::after{width:8px;height:8px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:7px}.gg-arrow-up::before{width:2px;height:16px;left:10px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z"
    fill="currentColor"
  />
</svg>`}],K1=[{nr:64,name:"arrows-breake-h",tags:"arrows interface",css:'.gg-arrows-breake-h{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:10px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center left/8px 2px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center right/8px 2px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 7px center/2px 10px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 11px center/2px 10px}.gg-arrows-breake-h::after,.gg-arrows-breake-h::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);top:2px}.gg-arrows-breake-h::after{border-left:2px solid;border-bottom:2px solid}.gg-arrows-breake-h::before{border-right:2px solid;border-top:2px solid;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.24268 7H11.2427V11.0001H11.2477V13.0001H11.2427V17H9.24268V13.0001L4.82846 13L6.65685 14.8284L5.24264 16.2426L1 12L5.24264 7.75732L6.65685 9.17154L4.82839 11H9.24264L9.24268 7Z"
    fill="currentColor"
  />
  <path
    d="M15.2527 7.00012H13.2527V11.0001H13.2477V13.0001H13.2527V17.0001H15.2527V13.0001L19.667 13L17.8385 14.8285L19.2527 16.2427L23.4954 12L19.2527 7.75739L17.8385 9.17161L19.6669 11H15.2527L15.2527 7.00012Z"
    fill="currentColor"
  />
</svg>`}],Q1=[{nr:65,name:"arrows-breake-v",tags:"arrows interface",css:'.gg-arrows-breake-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center top/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center bottom/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center 7px/10px 2px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center 11px/10px 2px}.gg-arrows-breake-v::after,.gg-arrows-breake-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);left:2px}.gg-arrows-breake-v::after{border-left:2px solid;border-top:2px solid}.gg-arrows-breake-v::before{border-right:2px solid;border-bottom:2px solid;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.2427 5.24264L14.8285 6.65685L13 4.82839L13.0001 9.24268H17.0001V11.2427H7.00012V9.24268H11.0001L11 4.82846L9.17161 6.65685L7.75739 5.24264L12 1L16.2427 5.24264Z"
    fill="currentColor"
  />
  <path
    d="M7 15.2527V13.2527H17V15.2527H13.0001L13 19.6669L14.8284 17.8385L16.2426 19.2527L12 23.4954L7.75732 19.2527L9.17154 17.8385L11 19.667V15.2527L7 15.2527Z"
    fill="currentColor"
  />
</svg>`}],R1=[{nr:66,name:"arrows-exchange-alt-v",tags:"arrows interface",css:'.gg-arrows-exchange-alt-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px}.gg-arrows-exchange-alt-v::after,.gg-arrows-exchange-alt-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;background:currentColor;border-radius:4px}.gg-arrows-exchange-alt-v::before{height:6px;transform:rotate(-45deg);box-shadow:13px -2px 0;top:10px;left:2px}.gg-arrows-exchange-alt-v::after{height:12px;box-shadow:-4px 4px 0;right:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.9841 4.99255C12.9841 4.44027 13.4318 3.99255 13.9841 3.99255C14.3415 3.99255 14.6551 4.18004 14.8319 4.46202L17.5195 7.14964C17.9101 7.54016 17.9101 8.17333 17.5195 8.56385C17.129 8.95438 16.4958 8.95438 16.1053 8.56385L14.9841 7.44263V14.9926C14.9841 15.5448 14.5364 15.9926 13.9841 15.9926C13.4318 15.9926 12.9841 15.5448 12.9841 14.9926V5.042C12.984 5.03288 12.984 5.02376 12.9841 5.01464V4.99255Z"
    fill="currentColor"
  />
  <path
    d="M11.0159 19.0074C11.0159 19.5597 10.5682 20.0074 10.0159 20.0074C9.6585 20.0074 9.3449 19.82 9.16807 19.538L6.48045 16.8504C6.08993 16.4598 6.08993 15.8267 6.48045 15.4361C6.87098 15.0456 7.50414 15.0456 7.89467 15.4361L9.01589 16.5574V9.00745C9.01589 8.45516 9.46361 8.00745 10.0159 8.00745C10.5682 8.00745 11.0159 8.45516 11.0159 9.00745V18.958C11.016 18.9671 11.016 18.9762 11.0159 18.9854V19.0074Z"
    fill="currentColor"
  />
</svg>`}],W1=[{nr:67,name:"arrows-exchange-alt",tags:"arrows interface",css:'.gg-arrows-exchange-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:14px}.gg-arrows-exchange-alt::after,.gg-arrows-exchange-alt::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor;border-radius:4px}.gg-arrows-exchange-alt::before{width:6px;transform:rotate(-45deg);box-shadow:-2px -13px 0;right:0;top:10px}.gg-arrows-exchange-alt::after{width:12px;box-shadow:4px 4px 0;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4.99255 11.0159C4.44027 11.0159 3.99255 10.5682 3.99255 10.0159C3.99255 9.6585 4.18004 9.3449 4.46202 9.16807L7.14964 6.48045C7.54016 6.08993 8.17333 6.08993 8.56385 6.48045C8.95438 6.87098 8.95438 7.50414 8.56385 7.89467L7.44263 9.0159L14.9926 9.01589C15.5448 9.01589 15.9926 9.46361 15.9926 10.0159C15.9926 10.5682 15.5448 11.0159 14.9926 11.0159L5.042 11.0159C5.03288 11.016 5.02376 11.016 5.01464 11.0159H4.99255Z"
    fill="currentColor"
  />
  <path
    d="M19.0074 12.9841C19.5597 12.9841 20.0074 13.4318 20.0074 13.9841C20.0074 14.3415 19.82 14.6551 19.538 14.8319L16.8504 17.5195C16.4598 17.9101 15.8267 17.9101 15.4361 17.5195C15.0456 17.129 15.0456 16.4958 15.4361 16.1053L16.5574 14.9841H9.00745C8.45516 14.9841 8.00745 14.5364 8.00745 13.9841C8.00745 13.4318 8.45516 12.9841 9.00745 12.9841L18.958 12.9841C18.9671 12.984 18.9762 12.984 18.9854 12.9841H19.0074Z"
    fill="currentColor"
  />
</svg>`}],_1=[{nr:68,name:"arrows-exchange-v",tags:"arrows interface",css:'.gg-arrows-exchange-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px}.gg-arrows-exchange-v::after,.gg-arrows-exchange-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;background:currentColor;border-radius:4px}.gg-arrows-exchange-v::before{height:6px;transform:rotate(45deg);box-shadow:7px -4px 0;top:4px;left:2px}.gg-arrows-exchange-v::after{height:12px;box-shadow:-4px 4px 0;right:4px;bottom:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.9842 15C12.9842 15.5523 13.4319 16 13.9842 16C14.3416 16 14.6552 15.8125 14.832 15.5305L17.5196 12.8429C17.9101 12.4524 17.9101 11.8192 17.5196 11.4287C17.1291 11.0382 16.4959 11.0382 16.1054 11.4287L14.9842 12.5499L14.9842 5C14.9842 4.44771 14.5364 4 13.9842 4C13.4319 4 12.9842 4.44772 12.9842 5L12.9842 14.9506C12.984 14.9597 12.984 14.9688 12.9842 14.9779V15Z"
    fill="currentColor"
  />
  <path
    d="M11.016 9C11.016 8.44771 10.5682 8 10.016 8C9.65856 8 9.34496 8.18748 9.16813 8.46947L6.48052 11.1571C6.08999 11.5476 6.08999 12.1808 6.48051 12.5713C6.87104 12.9618 7.5042 12.9618 7.89473 12.5713L9.01596 11.4501L9.01596 19C9.01596 19.5523 9.46367 20 10.016 20C10.5682 20 11.016 19.5523 11.016 19L11.016 9.04945C11.0161 9.04033 11.0161 9.03121 11.016 9.02208V9Z"
    fill="currentColor"
  />
</svg>`}],oo=[{nr:69,name:"arrows-exchange",tags:"arrows interface",css:'.gg-arrows-exchange{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:14px}.gg-arrows-exchange::after,.gg-arrows-exchange::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor;border-radius:4px}.gg-arrows-exchange::before{width:6px;transform:rotate(45deg);box-shadow:2px -13px 0;top:10px}.gg-arrows-exchange::after{width:12px;box-shadow:-4px 4px 0;left:4px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.3415 4.18004 14.6551 4.46202 14.8319L7.14964 17.5195C7.54016 17.9101 8.17333 17.9101 8.56385 17.5195C8.95438 17.129 8.95438 16.4958 8.56385 16.1053L7.44263 14.9841H14.9926C15.5448 14.9841 15.9926 14.5364 15.9926 13.9841C15.9926 13.4318 15.5448 12.9841 14.9926 12.9841L5.042 12.9841C5.03288 12.984 5.02376 12.984 5.01464 12.9841H4.99255Z"
    fill="currentColor"
  />
  <path
    d="M19.0074 11.0159C19.5597 11.0159 20.0074 10.5682 20.0074 10.0159C20.0074 9.6585 19.82 9.3449 19.538 9.16807L16.8504 6.48045C16.4598 6.08993 15.8267 6.08993 15.4361 6.48045C15.0456 6.87098 15.0456 7.50414 15.4361 7.89467L16.5574 9.01589L9.00745 9.01589C8.45516 9.01589 8.00745 9.46361 8.00745 10.0159C8.00745 10.5682 8.45516 11.0159 9.00745 11.0159L18.958 11.0159C18.9671 11.016 18.9762 11.016 18.9854 11.0159H19.0074Z"
    fill="currentColor"
  />
</svg>`}],ro=[{nr:70,name:"arrows-expand-down-left",tags:"arrows interface",css:'.gg-arrows-expand-down-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;box-shadow:-6px 6px 0 -4px}.gg-arrows-expand-down-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;border-radius:1px;right:0}.gg-arrows-expand-down-left::after{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;width:2px;height:10px;transform:rotate(45deg);top:8px;left:2px;border-radius:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM15 5H19V9H15V5Z"
    fill="currentColor"
  />
  <path
    d="M5 13H3V21H11V19H6.41424L11.7782 13.6361C12.1687 13.2456 12.1687 12.6124 11.7782 12.2219C11.3876 11.8314 10.7545 11.8314 10.3639 12.2219L5 17.5858V13Z"
    fill="currentColor"
  />
</svg>`}],eo=[{nr:71,name:"arrows-expand-down-right",tags:"arrows interface",css:'.gg-arrows-expand-down-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;box-shadow:6px 6px 0 -4px}.gg-arrows-expand-down-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;border-radius:1px;left:0}.gg-arrows-expand-down-right::after{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;width:2px;height:10px;transform:rotate(-45deg);top:8px;right:2px;border-radius:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 5C11 3.89543 10.1046 3 9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5ZM9 5H5V9H9V5Z"
    fill="currentColor"
  />
  <path
    d="M19 13H21V21H13V19H17.5858L12.2218 13.6361C11.8313 13.2456 11.8313 12.6124 12.2218 12.2219C12.6124 11.8314 13.2455 11.8314 13.6361 12.2219L19 17.5858V13Z"
    fill="currentColor"
  />
</svg>`}],no=[{nr:72,name:"arrows-expand-left-alt",tags:"arrows interface",css:'.gg-arrows-expand-left-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;margin:2px;box-shadow:6px 6px 0 -4px,-6px -6px 0 -4px}.gg-arrows-expand-left-alt::after,.gg-arrows-expand-left-alt::before{content:"";display:block;box-sizing:border-box;position:absolute;transform:rotate(-45deg)}.gg-arrows-expand-left-alt::before{width:2px;height:22px;top:-4px;left:6px;border-top:9px solid;border-bottom:9px solid}.gg-arrows-expand-left-alt::after{width:8px;height:2px;background:currentColor;top:6px;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.1005 2.10052V4.10052H5.51471L11.293 9.87878L9.87875 11.293L4.10046 5.51471L4.10046 10.1005H2.10046L2.10046 2.10052H10.1005Z"
    fill="currentColor"
  />
  <path
    d="M21.8995 13.8995H19.8995V18.4853L14.1212 12.707L12.707 14.1213L18.4853 19.8995H13.8995V21.8995H21.8995V13.8995Z"
    fill="currentColor"
  />
  <path
    d="M16.2426 9.1716L14.8284 7.75739L7.7573 14.8285L9.17151 16.2427L16.2426 9.1716Z"
    fill="currentColor"
  />
</svg>`}],to=[{nr:73,name:"arrows-expand-left",tags:"arrows interface",css:'.gg-arrows-expand-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:6px 6px 0 -4px,-6px -6px 0 -4px}.gg-arrows-expand-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:22px;top:-4px;left:6px;transform:rotate(-45deg);border-top:9px solid;border-bottom:9px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.1005 4.10052V2.10052H2.10046L2.10046 10.1005H4.10046L4.10046 5.51471L9.87875 11.293L11.293 9.87878L5.51471 4.10052H10.1005Z"
    fill="currentColor"
  />
  <path
    d="M19.8995 13.8995H21.8995V21.8995H13.8995V19.8995H18.4853L12.7071 14.1212L14.1213 12.707L19.8995 18.4853V13.8995Z"
    fill="currentColor"
  />
</svg>`}],io=[{nr:74,name:"arrows-expand-right-alt",tags:"arrows interface",css:'.gg-arrows-expand-right-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;margin:2px;box-shadow:-6px 6px 0 -4px,6px -6px 0 -4px}.gg-arrows-expand-right-alt::after,.gg-arrows-expand-right-alt::before{content:"";display:block;box-sizing:border-box;position:absolute;transform:rotate(45deg)}.gg-arrows-expand-right-alt::before{width:2px;height:22px;top:-4px;left:6px;border-top:9px solid;border-bottom:9px solid}.gg-arrows-expand-right-alt::after{width:8px;height:2px;background:currentColor;top:6px;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.8995 2.10052V4.10052H18.4852L12.707 9.87878L14.1212 11.293L19.8995 5.51471V10.1005H21.8995V2.10052H13.8995Z"
    fill="currentColor"
  />
  <path
    d="M5.51468 19.8995H10.1005V21.8995H2.10046V13.8995H4.10046V18.4853L9.87872 12.707L11.2929 14.1213L5.51468 19.8995Z"
    fill="currentColor"
  />
  <path
    d="M9.17154 7.75739L7.75732 9.1716L14.8284 16.2427L16.2426 14.8285L9.17154 7.75739Z"
    fill="currentColor"
  />
</svg>`}],lo=[{nr:75,name:"arrows-expand-right",tags:"arrows interface",css:'.gg-arrows-expand-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;margin:2px;box-shadow:-6px 6px 0 -4px,6px -6px 0 -4px}.gg-arrows-expand-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:22px;top:-4px;left:6px;transform:rotate(45deg);border-top:9px solid;border-bottom:9px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z"
    fill="currentColor"
  />
  <path
    d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z"
    fill="currentColor"
  />
</svg>`}],so=[{nr:76,name:"arrows-expand-up-left",tags:"arrows interface",css:'.gg-arrows-expand-up-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;box-shadow:-6px -6px 0 -4px}.gg-arrows-expand-up-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;border-radius:1px;right:0;bottom:0}.gg-arrows-expand-up-left::after{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;width:2px;height:10px;transform:rotate(-45deg);bottom:8px;left:2px;border-radius:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 11H3L3 3L11 3V5L6.41419 5L11.7781 10.3639C12.1686 10.7545 12.1686 11.3876 11.7781 11.7782C11.3876 12.1687 10.7544 12.1687 10.3639 11.7782L5 6.41424L5 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 13C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15C13 13.8954 13.8954 13 15 13H19ZM19 15V19H15V15H19Z"
    fill="currentColor"
  />
</svg>`}],go=[{nr:77,name:"arrows-expand-up-right",tags:"arrows interface",css:'.gg-arrows-expand-up-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;box-shadow:6px -6px 0 -4px}.gg-arrows-expand-up-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;border-radius:1px;left:0;bottom:0}.gg-arrows-expand-up-right::after{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;width:2px;height:10px;transform:rotate(45deg);bottom:8px;right:2px;border-radius:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13 5V3L21 3V11H19V6.41424L13.6361 11.7782C13.2456 12.1687 12.6124 12.1687 12.2219 11.7782C11.8314 11.3876 11.8314 10.7545 12.2219 10.3639L17.5858 5L13 5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 13C3.89543 13 3 13.8954 3 15L3 19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13H5ZM5 15L5 19H9V15H5Z"
    fill="currentColor"
  />
</svg>`}],po=[{nr:78,name:"arrows-h-alt",tags:"arrows interface",css:'.gg-arrows-h-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:10px;background:linear-gradient(to left,currentColor 18px,transparent 0)no-repeat 2px 4px/16px 2px}.gg-arrows-h-alt::after,.gg-arrows-h-alt::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);top:2px}.gg-arrows-h-alt::after{border-bottom:2px solid;border-left:2px solid;left:1px}.gg-arrows-h-alt::before{border-top:2px solid;border-right:2px solid;right:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4.24267 7.75735L5.65688 9.17157L3.82842 11H20.1716L18.3431 9.17157L19.7573 7.75735L24 12L19.7572 16.2426L18.343 14.8284L20.1714 13H3.82845L5.65685 14.8284L4.24264 16.2426L0 12L4.24267 7.75735Z"
    fill="currentColor"
  />
</svg>`}],ao=[{nr:79,name:"arrows-h",tags:"arrows interface",css:'.gg-arrows-h{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:10px;background:linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 2px 4px/6px 2px,linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 12px 4px/6px 2px}.gg-arrows-h::after,.gg-arrows-h::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);top:2px}.gg-arrows-h::after{border-bottom:2px solid;border-left:2px solid;left:1px}.gg-arrows-h::before{border-top:2px solid;border-right:2px solid;right:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.65698 9.17157L4.24276 7.75735L0.00012207 12L4.24276 16.2426L5.65698 14.8284L3.82858 13H10.0001V11H3.82851L5.65698 9.17157Z"
    fill="currentColor"
  />
  <path
    d="M14.0001 11V13H20.1716L18.3432 14.8284L19.7574 16.2426L24.0001 12L19.7574 7.75735L18.3432 9.17157L20.1717 11H14.0001Z"
    fill="currentColor"
  />
</svg>`}],xo=[{nr:80,name:"arrows-merge-alt-h",tags:"arrows interface",css:'.gg-arrows-merge-alt-h{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:12px;background:linear-gradient(to left,currentColor 12px,transparent 0)no-repeat center left/8px 2px,linear-gradient(to left,currentColor 12px,transparent 0)no-repeat center right/8px 2px,linear-gradient(to left,currentColor 12px,transparent 0)no-repeat 20px center/2px 12px,linear-gradient(to left,currentColor 12px,transparent 0)no-repeat 0 center/2px 12px}.gg-arrows-merge-alt-h::after,.gg-arrows-merge-alt-h::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);top:3px}.gg-arrows-merge-alt-h::after{border-left:2px solid;border-bottom:2px solid;right:3px;}.gg-arrows-merge-alt-h::before{border-right:2px solid;border-top:2px solid;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.5033 6H3.5033V11H7.6749L5.84644 9.17154L7.26066 7.75732L11.5033 12L7.26066 16.2426L5.84644 14.8284L7.67483 13H3.5033V18H1.5033V6Z"
    fill="currentColor"
  />
  <path
    d="M20.4967 6H22.4967V18H20.4967V13H16.3251L18.1536 14.8285L16.7393 16.2427L12.4967 12L16.7393 7.75739L18.1536 9.17161L16.3252 11H20.4967V6Z"
    fill="currentColor"
  />
</svg>`}],bo=[{nr:81,name:"arrows-merge-alt-v",tags:"arrows interface",css:'.gg-arrows-merge-alt-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:22px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center top/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center bottom/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center 20px/10px 2px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center 0/10px 2px}.gg-arrows-merge-alt-v::after,.gg-arrows-merge-alt-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);left:3px}.gg-arrows-merge-alt-v::after{border-left:2px solid;border-top:2px solid;bottom:3px;}.gg-arrows-merge-alt-v::before{border-right:2px solid;border-bottom:2px solid;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18 1.5033V3.5033L13 3.5033V7.6749L14.8285 5.84644L16.2427 7.26066L12 11.5033L7.75739 7.26066L9.17161 5.84644L11 7.67483V3.5033L6 3.5033V1.5033L18 1.5033Z"
    fill="currentColor"
  />
  <path
    d="M18 20.4967V22.4967H6V20.4967H11V16.3251L9.17154 18.1536L7.75732 16.7393L12 12.4967L16.2426 16.7393L14.8284 18.1536L13 16.3252V20.4967H18Z"
    fill="currentColor"
  />
</svg>`}],ho=[{nr:82,name:"arrows-scroll-h",tags:"arrows interface",css:'.gg-arrows-scroll-h{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:6px}.gg-arrows-scroll-h::after,.gg-arrows-scroll-h::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg)}.gg-arrows-scroll-h::after{border-bottom:2px solid;border-left:2px solid;right:0}.gg-arrows-scroll-h::before{border-top:2px solid;border-right:2px solid;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.3052 12L18.1299 9.17526L16.7157 7.76105L13.891 10.5858L13.8873 10.5821L12.4731 11.9963L12.4768 12L12.4731 12.0037L13.8873 13.4179L13.891 13.4142L16.7157 16.239L18.1299 14.8248L15.3052 12Z"
    fill="currentColor"
  />
  <path
    d="M10.1091 10.5858L10.1128 10.5821L11.527 11.9963L11.5233 12L11.527 12.0037L10.1128 13.4179L10.1091 13.4142L7.28433 16.239L5.87012 14.8248L8.69487 12L5.87012 9.17526L7.28433 7.76105L10.1091 10.5858Z"
    fill="currentColor"
  />
</svg>`}],co=[{nr:83,name:"arrows-scroll-v",tags:"arrows interface",css:'.gg-arrows-scroll-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:16px}.gg-arrows-scroll-v::after,.gg-arrows-scroll-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg)}.gg-arrows-scroll-v::after{border-bottom:2px solid;border-left:2px solid}.gg-arrows-scroll-v::before{border-top:2px solid;border-right:2px solid;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.4142 10.1091L13.4179 10.1128L12.0037 11.527L12 11.5233L11.9963 11.527L10.5821 10.1128L10.5858 10.1091L7.76105 7.28433L9.17526 5.87012L12 8.69486L14.8247 5.87012L16.239 7.28433L13.4142 10.1091Z"
    fill="currentColor"
  />
  <path
    d="M12 15.3052L14.8247 18.1299L16.239 16.7157L13.4142 13.891L13.4179 13.8873L12.0037 12.4731L12 12.4767L11.9963 12.4731L10.5821 13.8873L10.5858 13.891L7.76105 16.7157L9.17526 18.1299L12 15.3052Z"
    fill="currentColor"
  />
</svg>`}],fo=[{nr:84,name:"arrows-shrink-h",tags:"arrows interface",css:'.gg-arrows-shrink-h{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:10px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center center/10px 2px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 18px center/2px 10px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 0px center/2px 10px}.gg-arrows-shrink-h::after,.gg-arrows-shrink-h::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);top:2px}.gg-arrows-shrink-h::after{border-left:2px solid;border-bottom:2px solid;left:4px;}.gg-arrows-shrink-h::before{border-right:2px solid;border-top:2px solid;right:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M1 7H3V17H1V7Z" fill="currentColor" />
  <path
    d="M8.44769 7.75732L9.86191 9.17154L8.03344 11H15.9664L14.138 9.17154L15.5522 7.75732L19.7948 12L15.5522 16.2426L14.138 14.8284L15.9664 13H8.03354L9.86194 14.8284L8.44773 16.2426L4.20505 12L8.44769 7.75732Z"
    fill="currentColor"
  />
  <path d="M23 7H21V17H23V7Z" fill="currentColor" />
</svg>`}],Co=[{nr:85,name:"arrows-shrink-v",tags:"arrows interface",css:'.gg-arrows-shrink-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center center/2px 10px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center 18px/10px 2px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center 0/10px 2px}.gg-arrows-shrink-v::after,.gg-arrows-shrink-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);left:2px}.gg-arrows-shrink-v::after{border-left:2px solid;border-top:2px solid;top:4px;}.gg-arrows-shrink-v::before{border-right:2px solid;border-bottom:2px solid;bottom:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M17 1V3L7 3V1L17 1Z" fill="currentColor" />
  <path
    d="M16.2427 8.44772L14.8285 9.86194L13 8.03347L13 15.9665L14.8285 14.138L16.2427 15.5522L12 19.7949L7.75742 15.5522L9.17163 14.138L11 15.9664L11 8.03357L9.17163 9.86194L7.75742 8.44772L12 4.20508L16.2427 8.44772Z"
    fill="currentColor"
  />
  <path d="M17 23V21H7V23H17Z" fill="currentColor" />
</svg>`}],wo=[{nr:86,name:"arrows-v-alt",tags:"arrows interface",css:'.gg-arrows-v-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px;background:linear-gradient(to left,currentColor 16px,transparent 0)no-repeat 4px 2px/2px 16px}.gg-arrows-v-alt::after,.gg-arrows-v-alt::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg);left:2px}.gg-arrows-v-alt::after{border-bottom:2px solid;border-left:2px solid;bottom:1px}.gg-arrows-v-alt::before{border-top:2px solid;border-right:2px solid;top:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.1716 6.45504L7.75739 5.04083L12 0.798187L16.2426 5.04083L14.8284 6.45504L13.0001 4.62667V19.3733L14.8284 17.5449L16.2426 18.9592L12 23.2018L7.75739 18.9592L9.1716 17.5449L11.0001 19.3734V4.62658L9.1716 6.45504Z"
    fill="currentColor"
  />
</svg>`}],uo=[{nr:87,name:"arrows-v",tags:"arrows interface",css:'.gg-arrows-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px;background:linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 4px 2px/2px 6px,linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 4px 12px/2px 6px}.gg-arrows-v::after,.gg-arrows-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg);left:2px}.gg-arrows-v::after{border-bottom:2px solid;border-left:2px solid;bottom:1px}.gg-arrows-v::before{border-top:2px solid;border-right:2px solid;top:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.75739 5.04077L9.1716 6.45498L11.0001 4.62652V10H13.0001V4.62661L14.8284 6.45498L16.2426 5.04077L12 0.798126L7.75739 5.04077Z"
    fill="currentColor"
  />
  <path
    d="M16.2426 18.9593L14.8284 17.545L13.0001 19.3734V14H11.0001V19.3735L9.1716 17.545L7.75739 18.9593L12 23.2019L16.2426 18.9593Z"
    fill="currentColor"
  />
</svg>`}],vo=[{nr:88,name:"assign",tags:"buttons code",css:'.gg-assign{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;background:currentColor;transform:scale(var(--ggs,1));border-radius:100px}.gg-assign::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;box-shadow:-5px -5px 0 -3px,5px 5px 0 -3px,5px -5px 0 -3px,-5px 5px 0 -3px;left:-3px;top:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M6 6H10V4H4V10H6V6Z" fill="currentColor" />
  <path d="M10 18H6V14H4V20H10V18Z" fill="currentColor" />
  <path d="M14 6H18V10H20V4H14V6Z" fill="currentColor" />
  <path d="M14 18H18V14H20V20H14V18Z" fill="currentColor" />
  <path
    d="M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z"
    fill="currentColor"
  />
</svg>`}],mo=[{nr:89,name:"asterisk",tags:"design interface",css:'.gg-asterisk{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-left:5px solid transparent;border-right:5px solid transparent;box-shadow:inset 0 0 0 2px}.gg-asterisk::after,.gg-asterisk::before{content:"";display:block;position:absolute;box-sizing:border-box;width:2px;height:12px;background:currentColor;transform:rotate(55deg)}.gg-asterisk::after{transform:rotate(-55deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 6H13V10.079L16.3413 7.73938L17.4885 9.37768L13.7434 12L17.4885 14.6223L16.3413 16.2606L13 13.921V18H11V13.921L7.65864 16.2606L6.51148 14.6223L10.2565 12L6.51147 9.37769L7.65863 7.73938L11 10.079V6Z"
    fill="currentColor"
  />
</svg>`}],Ho=[{nr:90,name:"atlasian",tags:"brands",css:'.gg-atlasian{position:relative;box-sizing:border-box;display:block;width:22px;height:18px;transform:scale(var(--ggs,1));overflow:hidden}.gg-atlasian::after,.gg-atlasian::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;background:currentColor;border-radius:4px}.gg-atlasian::before{height:12px;border-top-right-radius:10px;bottom:-4px;left:3px;transform:rotate(30deg) skewY(35deg);opacity:.8}.gg-atlasian::after{height:24px;border-top-left-radius:10px;bottom:-8px;right:3px;transform:rotate(-30deg) skewY(-35deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity="0.8"
    d="M8.50705 11.5562C8.19028 11.1038 7.78219 11.1585 7.59556 11.6783L5 18.9075H10.1778C10.6982 16.85 10.2481 14.0427 9.08063 12.3754L8.50705 11.5562Z"
    fill="currentColor"
  />
  <path
    d="M12.8745 7.12641C11.6074 8.93603 11.1992 12.0835 11.9627 14.1565L13.7126 18.9074H18.9644L14.3673 6.42648C14.1764 5.90823 13.7649 5.85485 13.4481 6.30726L12.8745 7.12641Z"
    fill="currentColor"
  />
</svg>`}],Vo=[{nr:91,name:"attachment",tags:"content multimedia interface",css:'.gg-attachment{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border:2px solid;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px;transform:scale(var(--ggs,1));margin-top:11px}.gg-attachment::after,.gg-attachment::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;border:2px solid}.gg-attachment::after{border-bottom:0;border-top-left-radius:100px;border-top-right-radius:100px;right:-2px;width:10px;height:14px;bottom:8px}.gg-attachment::before{width:6px;height:12px;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px;left:2px;bottom:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z"
    fill="currentColor"
  />
</svg>`}],Lo=[{nr:92,name:"attribution",tags:"interface",css:'.gg-attribution{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:16px;height:18px;background:linear-gradient(to left,currentColor 14px,transparent 0) no-repeat 1px 2px/8px 2px,linear-gradient(to left,currentColor 14px,transparent 0) no-repeat 6px 14px/6px 2px,radial-gradient(circle,currentColor 60%,transparent 40%) no-repeat 10px 12px/6px 6px,radial-gradient(circle,currentColor 60%,transparent 40%) no-repeat 0 0/6px 6px}.gg-attribution::after,.gg-attribution::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid}.gg-attribution::before{border-right:0;border-top-left-radius:10px;border-bottom-left-radius:10px;top:8px;left:2px}.gg-attribution::after{border-left:0;border-top-right-radius:10px;border-bottom-right-radius:10px;right:2px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 8C6.74028 8 7.38663 7.5978 7.73244 7H14C15.1046 7 16 7.89543 16 9C16 10.1046 15.1046 11 14 11H10C7.79086 11 6 12.7909 6 15C6 17.2091 7.79086 19 10 19H16.2676C16.6134 19.5978 17.2597 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.2597 16 16.6134 16.4022 16.2676 17H10C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13H14C16.2091 13 18 11.2091 18 9C18 6.79086 16.2091 5 14 5H7.73244C7.38663 4.4022 6.74028 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
    fill="currentColor"
  />
</svg>`}],Mo=[{nr:93,name:"awards",tags:"interface",css:'.gg-awards{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:16px;height:20px;border:4px solid transparent;border-top:12px solid transparent;border-bottom:0;box-shadow:inset 4px 0 0 -2px,inset -4px 0 0 -2px}.gg-awards::after,.gg-awards::before{content:"";box-sizing:border-box;position:absolute;display:block;border:2px solid}.gg-awards::before{width:14px;height:14px;border-radius:22px;top:-12px;left:-3px}.gg-awards::after{width:6px;height:6px;border-right-color:transparent;border-bottom-color:transparent;border-bottom-left-radius:1px;border-top-right-radius:1px;transform:rotate(45deg);bottom:-3px;left:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 9C19 11.3787 17.8135 13.4804 16 14.7453V22H13.4142L12 20.5858L10.5858 22H8V14.7453C6.18652 13.4804 5 11.3787 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9ZM10 19.7573L12 17.7573L14 19.7574V15.7101C13.3663 15.8987 12.695 16 12 16C11.305 16 10.6337 15.8987 10 15.7101V19.7573Z"
    fill="currentColor"
  />
</svg>`}],Zo=[{nr:94,name:"backspace",tags:"interface arrows content buttons",css:'.gg-backspace{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;transform:scale(var(--ggs,1));border:2px solid;border-left:0;border-top-right-radius:2px;border-bottom-right-radius:2px}.gg-backspace::after,.gg-backspace::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-backspace::before{background:linear-gradient( to left,currentColor 18px,transparent 0)no-repeat center center/10px 2px;border-right:3px solid transparent;box-shadow:inset 0 0 0 2px;right:2px;bottom:1px;width:8px;height:8px;border-left:3px solid transparent;transform:rotate(45deg)}.gg-backspace::after{width:10px;height:10px;border-top:2px solid;border-left:2px solid;border-top-left-radius:1px;transform:rotate(-45deg);top:0;left:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.7427 8.46448L19.1569 9.87869L17.0356 12L19.157 14.1214L17.7428 15.5356L15.6214 13.4142L13.5 15.5355L12.0858 14.1213L14.2072 12L12.0859 9.87878L13.5002 8.46457L15.6214 10.5858L17.7427 8.46448Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8.58579 19L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.58579 5H22.5857V19H8.58579ZM9.41421 7L4.41421 12L9.41421 17H20.5857V7H9.41421Z"
    fill="currentColor"
  />
</svg>`}],ko=[{nr:95,name:"band-aid",tags:"interface",css:'.gg-band-aid{box-sizing:border-box;position:relative;display:block;transform:rotate(-25deg)scale(var(--ggs,1));width:24px;height:12px;border:2px solid;border-radius:22px}.gg-band-aid::after,.gg-band-aid::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-band-aid::before{width:12px;height:10px;top:-2px;left:4px;border-left:2px solid;border-right:2px solid}.gg-band-aid::after{width:2px;height:2px;background:currentColor;box-shadow:0 4px 0,4px 0 0,4px 4px 0;border-radius:22px;left:7px;top:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.9389 9.76478C11.7055 10.2653 11.1105 10.4819 10.61 10.2485C10.1094 10.0151 9.89288 9.42008 10.1263 8.91954C10.3597 8.419 10.9547 8.20244 11.4552 8.43585C11.9558 8.66925 12.1723 9.26423 11.9389 9.76478Z"
    fill="currentColor"
  />
  <path
    d="M8.9195 13.8737C9.42004 14.1071 10.015 13.8905 10.2484 13.39C10.4818 12.8895 10.2653 12.2945 9.76474 12.0611C9.2642 11.8277 8.66922 12.0442 8.43581 12.5448C8.20241 13.0453 8.41896 13.6403 8.9195 13.8737Z"
    fill="currentColor"
  />
  <path
    d="M13.8737 15.0805C13.6403 15.581 13.0453 15.7976 12.5447 15.5642C12.0442 15.3308 11.8276 14.7358 12.061 14.2352C12.2944 13.7347 12.8894 13.5181 13.39 13.7516C13.8905 13.985 14.1071 14.5799 13.8737 15.0805Z"
    fill="currentColor"
  />
  <path
    d="M14.2352 11.9389C14.7357 12.1723 15.3307 11.9558 15.5641 11.4552C15.7975 10.9547 15.581 10.3597 15.0804 10.1263C14.5799 9.89292 13.9849 10.1095 13.7515 10.61C13.5181 11.1106 13.7347 11.7055 14.2352 11.9389Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17.0714 1.12432C14.0682 -0.276119 10.4983 1.02321 9.09783 4.02645L4.02641 14.9021C2.62598 17.9054 3.92531 21.4753 6.92855 22.8757C9.93179 24.2761 13.5017 22.9768 14.9021 19.9736L19.9735 9.09787C21.374 6.09463 20.0746 2.52475 17.0714 1.12432ZM13.9347 17.3157L17.3157 10.0653L10.0652 6.6843L6.68427 13.9348L13.9347 17.3157ZM13.0895 19.1283L5.83903 15.7474C4.90541 17.7495 5.77163 20.1295 7.77379 21.0631C9.77595 21.9967 12.1559 21.1305 13.0895 19.1283ZM16.2262 2.93693C18.2283 3.87055 19.0945 6.25047 18.1609 8.25264L10.9104 4.87169C11.8441 2.86953 14.224 2.00331 16.2262 2.93693Z"
    fill="currentColor"
  />
</svg>`}],yo=[{nr:96,name:"battery-empty",tags:"interface alerts",css:'.gg-battery-empty{box-sizing:border-box;position:relative;display:block;width:20px;height:12px;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;margin-left:-3px}.gg-battery-empty::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:4px;height:6px;right:-4px;top:1px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18 6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H18C19.6569 18 21 16.6569 21 15C21.5523 15 22 14.5523 22 14V10C22 9.44772 21.5523 9 21 9C21 7.34315 19.6569 6 18 6ZM18 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H18C18.5523 16 19 15.5523 19 15V9C19 8.44772 18.5523 8 18 8Z"
    fill="currentColor"
  />
</svg>`}],zo=[{nr:97,name:"battery-full",tags:"interface alerts",css:'.gg-battery-full{box-sizing:border-box;position:relative;display:block;width:20px;height:12px;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;margin-left:-3px}.gg-battery-full::after,.gg-battery-full::before{content:"";display:block;box-sizing:border-box;position:absolute;height:6px;background:currentColor;top:1px}.gg-battery-full::before{right:-4px;border-radius:3px;width:4px}.gg-battery-full::after{width:14px;left:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 15C5.44772 15 5 14.5523 5 14V10C5 9.44772 5.44772 9 6 9H17C17.5523 9 18 9.44772 18 10V14C18 14.5523 17.5523 15 17 15H6Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18 6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H18C19.6569 18 21 16.6569 21 15C21.5523 15 22 14.5523 22 14V10C22 9.44772 21.5523 9 21 9C21 7.34315 19.6569 6 18 6ZM18 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H18C18.5523 16 19 15.5523 19 15V9C19 8.44772 18.5523 8 18 8Z"
    fill="currentColor"
  />
</svg>`}],Bo=[{nr:98,name:"battery",tags:"interface alerts",css:'.gg-battery{box-sizing:border-box;position:relative;display:block;width:20px;height:12px;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;margin-left:-3px}.gg-battery::after,.gg-battery::before{content:"";display:block;box-sizing:border-box;position:absolute;height:6px;background:currentColor;top:1px}.gg-battery::before{right:-4px;border-radius:3px;width:4px}.gg-battery::after{width:8px;left:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 15C5.44772 15 5 14.5523 5 14V10C5 9.44772 5.44772 9 6 9H12V15H6Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18 6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H18C19.6569 18 21 16.6569 21 15C21.5523 15 22 14.5523 22 14V10C22 9.44772 21.5523 9 21 9C21 7.34315 19.6569 6 18 6ZM18 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H18C18.5523 16 19 15.5523 19 15V9C19 8.44772 18.5523 8 18 8Z"
    fill="currentColor"
  />
</svg>`}],qo=[{nr:99,name:"bee",tags:"interface",css:'.gg-bee,.gg-bee::after,.gg-bee::before{display:block;box-sizing:border-box;border:2px solid}.gg-bee{position:relative;width:12px;height:20px;transform:scale(var(--ggs,1));border-radius:22px;background:linear-gradient(to left,currentColor 12px,transparent 0) no-repeat center 6px/12px 2px,linear-gradient(to left,currentColor 12px,transparent 0) no-repeat center 10px/12px 2px;box-shadow:0 4px 0 -2px,0 7px 0 -4px}.gg-bee::after,.gg-bee::before{content:"";position:absolute;width:6px;height:10px;border-top:0;border-bottom-left-radius:22px;border-bottom-right-radius:22px;top:4px}.gg-bee::before{left:-6px;transform:rotate(40deg)}.gg-bee::after{right:-6px;transform:rotate(-40deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17.9513 15.571C17.7695 17.2187 16.9205 18.6654 15.6805 19.635C15.332 20.4692 14.7092 21.1601 13.9247 21.5951C13.7025 22.4574 12.9196 23.0944 11.9879 23.0944C11.0562 23.0944 10.2733 22.4574 10.0511 21.5951C9.26672 21.1602 8.64392 20.4693 8.29547 19.6353C7.05955 18.6691 6.21203 17.229 6.02621 15.5883C4.93527 16.4161 3.37955 16.4118 2.28618 15.4944C1.01696 14.4294 0.851409 12.5371 1.91641 11.2679L6.00966 6.38975C6.27125 3.31753 8.84785 0.905579 11.9878 0.905579C15.1166 0.905579 17.6861 3.30046 17.9631 6.35711L22.0837 11.2679C23.1487 12.5371 22.9831 14.4294 21.7139 15.4944C20.613 16.4182 19.0433 16.4161 17.9513 15.571ZM15.6254 12.9056L13.9472 10.9056H10.0529L8.37467 12.9056H15.6254ZM17.9878 12.6095L19.0195 13.839C19.3745 14.2621 20.0053 14.3173 20.4283 13.9623C20.8514 13.6073 20.9066 12.9765 20.5516 12.5535L17.9878 9.49803V12.6095ZM15.9878 8.90558V6.90558C15.9878 4.69644 14.1969 2.90558 11.9878 2.90558C9.77865 2.90558 7.98779 4.69644 7.98779 6.90558V8.90558H15.9878ZM4.98059 13.839L5.98779 12.6387V9.52726L3.4485 12.5535C3.0935 12.9765 3.14869 13.6073 3.57176 13.9623C3.99483 14.3173 4.62559 14.2621 4.98059 13.839ZM11.9878 18.9056C9.77865 18.9056 7.98779 17.1147 7.98779 14.9056H15.9878C15.9878 17.1147 14.1969 18.9056 11.9878 18.9056Z"
    fill="currentColor"
  />
</svg>`}],Xo=[{nr:100,name:"bell",tags:"alerts interface time",css:'.gg-bell,.gg-bell::before{border-top-left-radius:100px;border-top-right-radius:100px}.gg-bell{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-bottom:0;width:14px;height:14px}.gg-bell::after,.gg-bell::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-bell::before{background:currentColor;width:4px;height:4px;top:-4px;left:3px}.gg-bell::after{border-radius:3px;width:16px;height:10px;border:6px solid transparent;border-top:1px solid transparent;box-shadow:inset 0 0 0 4px,0 -2px 0 0;top:14px;left:-3px;border-bottom-left-radius:100px;border-bottom-right-radius:100px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
    fill="currentColor"
  />
</svg>`}],Io=[{nr:101,name:"bitbucket",tags:"interface",css:'.gg-bitbucket{position:relative;box-sizing:border-box;display:block;width:15px;height:15px;transform:scale(var(--ggs,1));border-top:5px solid;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center bottom/10px 5px}.gg-bitbucket::after,.gg-bitbucket::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;width:5px;height:15px;top:-5px;transform:skew(10deg);border-radius:1px}.gg-bitbucket::after{right:0;transform:skew(-10deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.5831 4.63507C4.03082 4.63507 3.66768 5.07472 3.77202 5.61706L6.22804 18.383C6.33238 18.9253 6.86468 19.3649 7.41696 19.3649H16.583C17.1353 19.3649 17.6676 18.9253 17.7719 18.383L20.2279 5.61706C20.3323 5.07472 19.9691 4.63507 19.4168 4.63507H4.5831ZM13.5449 14.3649L14.4549 9.63507H9.54504L10.455 14.3649H13.5449Z"
    fill="currentColor"
  />
</svg>`}],So=[{nr:102,name:"block",tags:"interface signs",css:'.gg-block{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%}.gg-block::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;transform:rotate(-45deg);top:5px;left:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.46457 14.1213C8.07404 14.5118 8.07404 15.145 8.46457 15.5355C8.85509 15.926 9.48825 15.926 9.87878 15.5355L15.5356 9.87862C15.9262 9.4881 15.9262 8.85493 15.5356 8.46441C15.1451 8.07388 14.5119 8.07388 14.1214 8.46441L8.46457 14.1213Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6.34315 17.6569C9.46734 20.781 14.5327 20.781 17.6569 17.6569C20.781 14.5327 20.781 9.46734 17.6569 6.34315C14.5327 3.21895 9.46734 3.21895 6.34315 6.34315C3.21895 9.46734 3.21895 14.5327 6.34315 17.6569ZM16.2426 16.2426C13.8995 18.5858 10.1005 18.5858 7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75736C10.1005 5.41421 13.8995 5.41421 16.2426 7.75736C18.5858 10.1005 18.5858 13.8995 16.2426 16.2426Z"
    fill="currentColor"
  />
</svg>`}],Yo=[{nr:103,name:"bmw",tags:"brands",css:'.gg-bmw{position:relative;box-sizing:border-box;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:18px}.gg-bmw::before{content:"";position:absolute;box-sizing:border-box;display:block;border:9px solid;border-top-color:transparent;border-bottom-color:transparent;border-radius:18px;transform:rotate(45deg);left:-2px;top:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM5 12C5 15.866 8.13401 19 12 19V12H19C19 8.13401 15.866 5 12 5V12H5Z"
    fill="currentColor"
  />
</svg>`}],jo=[{nr:104,name:"board",tags:"content",css:".gg-board{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:16px;height:12px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0,inset -2px 0 0;border-radius:2px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 4C3.79086 4 2 5.79086 2 8V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V8C22 5.79086 20.2091 4 18 4H6ZM14 6H10V18H14V6ZM16 6V18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H16ZM6 18H8V6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18Z"
    fill="currentColor"
  />
</svg>`}],Ao=[{nr:105,name:"bolt",tags:"interface alerts",css:'.gg-bolt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:21px}.gg-bolt::after,.gg-bolt::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;transform:rotate(30deg)}.gg-bolt::before{border-bottom:12px solid;left:0;top:0}.gg-bolt::after{border-top:12px solid;right:0;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
</svg>`}],Uo=[{nr:106,name:"bookmark",tags:"interface buttons",css:'.gg-bookmark,.gg-bookmark::after{display:block;box-sizing:border-box;border-top-right-radius:3px}.gg-bookmark{border:2px solid;border-bottom:0;border-top-left-radius:3px;overflow:hidden;position:relative;transform:scale(var(--ggs,1));width:14px;height:16px}.gg-bookmark::after{content:"";position:absolute;width:12px;height:12px;border-top:2px solid;border-right:2px solid;transform:rotate(-45deg);top:9px;left:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
    fill="currentColor"
  />
</svg>`}],Do=[{nr:107,name:"border-all",tags:"shapes interface design content",css:'.gg-border-all{transform:scale(var(--ggs,1));}.gg-border-all,.gg-border-all::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px}.gg-border-all::before{content:"";position:absolute;border:3px solid;bottom:0;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M6.5 6.5H17.5V17.5H6.5V6.5Z" stroke="currentColor" stroke-width="3" />
</svg>`}],Po=[{nr:108,name:"border-bottom",tags:"interface design content",css:'.gg-border-bottom{transform:scale(var(--ggs,1));}.gg-border-bottom,.gg-border-bottom::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-bottom:3px solid}.gg-border-bottom::before{content:"";position:absolute;height:10px;border:3px solid;border-bottom:0;bottom:2px;left:0;opacity:.3}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M8 8H16V15H19V5H5V15H8V8Z" fill="currentColor" fill-opacity="0.3" />
  <path d="M5 17H19V20H5V17Z" fill="currentColor" />
</svg>`}],Go=[{nr:109,name:"border-left",tags:"interface design content",css:'.gg-border-left{transform:scale(var(--ggs,1));}.gg-border-left,.gg-border-left::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-left:3px solid}.gg-border-left::before{content:"";position:absolute;width:10px;border:3px solid;border-left:0;bottom:0;left:2px;opacity:.3}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16 8V16H9L9 19H19L19 5L9 5V8H16Z" fill="currentColor" fill-opacity="0.3" />
  <path d="M7 5L7 19H4L4 5L7 5Z" fill="currentColor" />
</svg>`}],To=[{nr:110,name:"border-right",tags:"interface design content",css:'.gg-border-right{transform:scale(var(--ggs,1));}.gg-border-right,.gg-border-right::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-right:3px solid}.gg-border-right::before{content:"";position:absolute;width:10px;border:3px solid;border-right:0;bottom:0;right:2px;opacity:.3}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M8 16V8H15V5L5 5L5 19H15L15 16H8Z" fill="currentColor" fill-opacity="0.3" />
  <path d="M17 19L17 5L20 5L20 19H17Z" fill="currentColor" />
</svg>`}],$o=[{nr:111,name:"border-style-dashed",tags:"shapes interface design content",css:'.gg-border-style-dashed{transform:scale(var(--ggs,1));}.gg-border-style-dashed,.gg-border-style-dashed::before{box-sizing:border-box;position:relative;display:block;width:26px;height:17px}.gg-border-style-dashed::before{content:"";position:absolute;height:2px;top:7px;border-top:2px dashed}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M4 11H8V13H4V11Z" fill="currentColor" />
  <path d="M10 11H14V13H10V11Z" fill="currentColor" />
  <path d="M20 11H16V13H20V11Z" fill="currentColor" />
</svg>`}],Oo=[{nr:112,name:"border-style-dotted",tags:"shapes interface design content",css:'.gg-border-style-dotted{transform:scale(var(--ggs,1));}.gg-border-style-dotted,.gg-border-style-dotted::before{box-sizing:border-box;position:relative;display:block;width:26px;height:17px}.gg-border-style-dotted::before{content:"";position:absolute;height:2px;top:7px;border-top:2px dotted}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M3 11H1V13H3V11Z" fill="currentColor" />
  <path d="M7 11H5V13H7V11Z" fill="currentColor" />
  <path d="M9 11H11V13H9V11Z" fill="currentColor" />
  <path d="M15 11H13V13H15V11Z" fill="currentColor" />
  <path d="M17 11H19V13H17V11Z" fill="currentColor" />
  <path d="M23 11H21V13H23V11Z" fill="currentColor" />
</svg>`}],Eo=[{nr:113,name:"border-style-solid",tags:"shapes interface design content",css:'.gg-border-style-solid{transform:scale(var(--ggs,1));}.gg-border-style-solid,.gg-border-style-solid::before{box-sizing:border-box;position:relative;display:block;width:26px;height:17px}.gg-border-style-solid::before{content:"";position:absolute;height:2px;top:7px;border-top:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M2 11H22V13H2V11Z" fill="currentColor" />
</svg>`}],Fo=[{nr:114,name:"border-top",tags:"interface design content",css:'.gg-border-top{transform:scale(var(--ggs,1));}.gg-border-top,.gg-border-top::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border-top:3px solid}.gg-border-top::before{content:"";position:absolute;height:10px;border:3px solid;border-top:0;top:2px;left:0;opacity:.3}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 16H16V9L19 9L19 19L5 19L5 9L8 9V16Z"
    fill="currentColor"
    fill-opacity="0.3"
  />
  <path d="M5 7L19 7V4L5 4L5 7Z" fill="#110000" />
</svg>`}],No=[{nr:115,name:"bot",tags:"devices interface",css:'.gg-bot{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:10px;border-right:8px solid transparent;border-left:8px solid transparent;border-bottom:1px solid transparent;border-radius:12px;box-shadow:0 0 0 2px,-4px 0 0 -1px,4px 0 0 -1px,inset 0 -4px 0 -2px}.gg-bot::after,.gg-bot::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;box-shadow:0 0 0 2px;top:3px}.gg-bot::before{left:-4px;border-radius:3px}.gg-bot::after{border-radius:100px;right:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M14.1254 13H10.1254V15H14.1254V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8.12537 13C9.22994 13 10.1254 12.1046 10.1254 11C10.1254 9.89543 9.22994 9 8.12537 9C7.0208 9 6.12537 9.89543 6.12537 11C6.12537 12.1046 7.0208 13 8.12537 13ZM8.12537 11.5C8.40151 11.5 8.62537 11.2761 8.62537 11C8.62537 10.7239 8.40151 10.5 8.12537 10.5C7.84922 10.5 7.62537 10.7239 7.62537 11C7.62537 11.2761 7.84922 11.5 8.12537 11.5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.1254 11C18.1254 12.1046 17.2299 13 16.1254 13C15.0208 13 14.1254 12.1046 14.1254 11C14.1254 9.89543 15.0208 9 16.1254 9C17.2299 9 18.1254 9.89543 18.1254 11ZM16.6254 11C16.6254 11.2761 16.4015 11.5 16.1254 11.5C15.8492 11.5 15.6254 11.2761 15.6254 11C15.6254 10.7239 15.8492 10.5 16.1254 10.5C16.4015 10.5 16.6254 10.7239 16.6254 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2.74884 14.6663C3.73056 16.6421 5.76939 18 8.12537 18H16.1254C18.5654 18 20.6652 16.5435 21.6029 14.4525C22.3722 13.9093 22.8746 13.0133 22.8746 12C22.8746 10.9867 22.3722 10.0907 21.6029 9.54753C20.6652 7.45651 18.5654 6 16.1254 6H8.12537C5.76939 6 3.73056 7.3579 2.74884 9.33375C1.78448 9.83263 1.12537 10.8393 1.12537 12C1.12537 13.1607 1.78448 14.1674 2.74884 14.6663ZM8.12537 8H16.1254C17.5088 8 18.7282 8.70234 19.4465 9.76991C19.7227 10.4593 19.8746 11.2119 19.8746 12C19.8746 12.7881 19.7227 13.5407 19.4465 14.2301C18.7282 15.2977 17.5088 16 16.1254 16H8.12537C5.91623 16 4.12537 14.2091 4.12537 12C4.12537 9.79086 5.91623 8 8.12537 8Z"
    fill="currentColor"
  />
</svg>`}],Jo=[{nr:116,name:"bowl",tags:"design",css:'.gg-bowl{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:20px;height:18px}.gg-bowl::after,.gg-bowl::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-bowl::before{width:20px;height:12px;border:2px solid;border-bottom-left-radius:10px;border-bottom-right-radius:10px;bottom:0}.gg-bowl::after{background:currentColor;width:2px;height:10px;border-radius:4px;transform:rotate(45deg);right:4px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z"
    fill="currentColor"
  />
</svg>`}],Ko=[{nr:117,name:"box",tags:"files interface",css:'.gg-box{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:3px}.gg-box::after,.gg-box::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor}.gg-box::before{left:6px;width:6px;top:8px}.gg-box::after{width:22px;left:-2px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 12C9.44769 12 9 12.4477 9 13C9 13.5523 9.44769 14 10 14H14C14.5522 14 15 13.5523 15 13C15 12.4477 14.5522 12 14 12H10Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 2C2.34314 2 1 3.34314 1 5V19C1 20.6569 2.34314 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34314 21.6569 2 20 2H4ZM20 4H4C3.44769 4 3 4.44769 3 5V8H21V5C21 4.44769 20.5522 4 20 4ZM3 19V10H21V19C21 19.5523 20.5522 20 20 20H4C3.44769 20 3 19.5523 3 19Z"
    fill="currentColor"
  />
</svg>`}],Qo=[{nr:118,name:"boy",tags:"signs",css:'.gg-boy,.gg-boy::after,.gg-boy::before{display:block;box-sizing:border-box;border-radius:42px}.gg-boy{position:relative;width:20px;height:20px;transform:scale(var(--ggs,1));overflow:hidden;box-shadow:inset 0 0 0 2px}.gg-boy::after,.gg-boy::before{content:"";position:absolute;width:2px;height:2px;background:currentColor;box-shadow:6px 0 0;left:6px;top:10px}.gg-boy::after{width:20px;height:20px;top:-13px;right:-12px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14Z"
    fill="currentColor"
  />
  <path
    d="M16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 11.1637 19.8717 10.3574 19.6337 9.59973C18.7991 9.82556 17.9212 9.94604 17.0152 9.94604C13.2921 9.94604 10.0442 7.91139 8.32277 4.89334C5.75469 6.22486 4 8.90751 4 12C4 16.4183 7.58172 20 12 20Z"
    fill="currentColor"
  />
</svg>`}],Ro=[{nr:119,name:"brackets",tags:"brands",css:'.gg-brackets{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}.gg-brackets::after,.gg-brackets::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid;width:4px;height:10px;top:2px}.gg-brackets::before{border-right:0;left:2px}.gg-brackets::after{border-left:0;right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 7V9H9V15H11V17H7V7H11Z" fill="currentColor" />
  <path d="M15 15H13V17H17V7H13V9H15V15Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
    fill="currentColor"
  />
</svg>`}],Wo=[{nr:120,name:"briefcase",tags:"interface",css:'.gg-briefcase{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:2px;margin-top:1px}.gg-briefcase::after,.gg-briefcase::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-briefcase::before{border:2px solid;border-top-left-radius:1px;border-top-right-radius:1px;left:4px;width:10px;height:4px;border-bottom:0;top:-5px}.gg-briefcase::after{width:18px;height:3px;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:1px solid transparent;box-shadow:0 2px 0,inset 16px 74px 0;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M14 11H10V13H14V11Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
    fill="currentColor"
  />
</svg>`}],_o=[{nr:121,name:"browse",tags:"interface design content",css:'.gg-browse{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:16px;height:22px;border:2px solid;border-radius:3px;background:linear-gradient(to left,currentcolor 10px,transparent 0) no-repeat center 2px/8px 2px,linear-gradient(to left,currentcolor 10px,transparent 0) no-repeat center 6px/8px 2px}.gg-browse::after,.gg-browse::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:22px}.gg-browse::before{width:6px;height:6px;border:2px solid;left:3px;top:9px}.gg-browse::after{width:2px;height:4px;background:currentColor;bottom:1px;right:2px;transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.364 13.1214C15.2876 14.045 15.4831 15.4211 14.9504 16.5362L16.4853 18.0711C16.8758 18.4616 16.8758 19.0948 16.4853 19.4853C16.0948 19.8758 15.4616 19.8758 15.0711 19.4853L13.5361 17.9504C12.421 18.4831 11.045 18.2876 10.1213 17.364C8.94975 16.1924 8.94975 14.2929 10.1213 13.1214C11.2929 11.9498 13.1924 11.9498 14.364 13.1214ZM12.9497 15.9498C13.3403 15.5593 13.3403 14.9261 12.9497 14.5356C12.5592 14.145 11.9261 14.145 11.5355 14.5356C11.145 14.9261 11.145 15.5593 11.5355 15.9498C11.9261 16.3403 12.5592 16.3403 12.9497 15.9498Z"
    fill="currentColor"
  />
  <path d="M8 5H16V7H8V5Z" fill="currentColor" />
  <path d="M16 9H8V11H16V9Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20C20 21.6569 18.6569 23 17 23H7C5.34315 23 4 21.6569 4 20V4ZM7 3H17C17.5523 3 18 3.44772 18 4V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20V4C6 3.44772 6.44771 3 7 3Z"
    fill="currentColor"
  />
</svg>`}],or=[{nr:122,name:"browser",tags:"multimedia interface devices",css:'.gg-browser{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border:2px solid;border-radius:3px}.gg-browser::after,.gg-browser::before{content:"";display:block;box-sizing:border-box;position:absolute;width:22px;height:2px;background:currentColor;top:4px}.gg-browser::after{border-radius:3px;width:2px;box-shadow:3px 0 0,6px 0 0;top:1px;left:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8Z"
    fill="currentColor"
  />
  <path
    d="M8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z"
    fill="currentColor"
  />
  <path
    d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7C9 7.55228 9.44771 8 10 8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V9H22V6C22 5.44772 21.5523 5 21 5ZM2 18V11H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z"
    fill="currentColor"
  />
</svg>`}],rr=[{nr:123,name:"brush",tags:"interface",css:'.gg-brush{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:14px;height:18px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 4px bottom/2px 5px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 8px bottom/2px 5px}.gg-brush::after,.gg-brush::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-brush::before{width:6px;height:8px;border-top-left-radius:6px;border-top-right-radius:6px;border-bottom:0;left:4px;top:0}.gg-brush::after{width:14px;height:10px;border-top:0;border-radius:3px;border-top-left-radius:1px;border-top-right-radius:1px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat left top/4px 2px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat right top/4px 2px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 11H18C18.5523 11 19 11.4477 19 12V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V12C5 11.4477 5.44772 11 6 11H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V11ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V13H7V18C7 18.5523 7.44772 19 8 19H9V16H11V19H13V16H15V19H16C16.5523 19 17 18.5523 17 18V13H13V6Z"
    fill="currentColor"
  />
</svg>`}],er=[{nr:124,name:"bulb",tags:"alerts interface",css:'.gg-bulb{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-bottom-color:transparent;border-radius:100px}.gg-bulb::after,.gg-bulb::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-bulb::before{border-top:0;border-bottom-left-radius:18px;border-bottom-right-radius:18px;top:10px;border-bottom:2px solid transparent;box-shadow:0 5px 0 -2px,inset 2px 0 0 0,inset -2px 0 0 0,inset 0 -4px 0 -2px;width:8px;height:8px;left:2px}.gg-bulb::after{width:12px;height:2px;border-left:3px solid;border-right:3px solid;border-radius:2px;bottom:0;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z"
    fill="currentColor"
  />
  <path
    d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z"
    fill="currentColor"
  />
</svg>`}],nr=[{nr:125,name:"c-plus-plus",tags:"code interface",css:'.gg-c-plus-plus{position:relative;display:block;width:16px;height:16px;transform:scale(var(--ggs,1));border:3px solid currentColor;box-sizing:border-box;border-radius:100px;border-right-color:transparent}.gg-c-plus-plus::after,.gg-c-plus-plus::before{content:"";position:absolute;box-sizing:border-box;display:block;width:9px;height:6px;border-left:2px solid;border-right:2px solid;right:-9px;top:2px}.gg-c-plus-plus::after{width:13px;height:2px;border-left:6px solid;border-right:6px solid;right:-11px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.207 16.278C11.1241 17.343 9.63879 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C9.67492 6 11.1896 6.6863 12.278 7.79303L13.6923 6.37878C12.2418 4.91014 10.2272 4 8 4C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20C10.1911 20 12.1764 19.1192 13.6212 17.6923L12.207 16.278Z"
    fill="currentColor"
  />
  <path d="M15 9H13V11H11V13H13V15H15V13H17V11H15V9Z" fill="currentColor" />
  <path d="M20 9H22V11H24V13H22V15H20V13H18V11H20V9Z" fill="currentColor" />
</svg>`}],tr=[{nr:126,name:"calculator",tags:"interface maths devices",css:'.gg-calculator{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:2px}.gg-calculator::after,.gg-calculator::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;top:2px;left:2px}.gg-calculator::after{width:2px;box-shadow:4px 0 0,8px 0 0,0 4px 0,4px 4px 0,8px 4px 0,0 8px 0,4px 8px 0,8px 8px 0,8px 6px 0;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M17 5H7V7H17V5Z" fill="currentColor" />
  <path d="M7 9H9V11H7V9Z" fill="currentColor" />
  <path d="M9 13H7V15H9V13Z" fill="currentColor" />
  <path d="M7 17H9V19H7V17Z" fill="currentColor" />
  <path d="M13 9H11V11H13V9Z" fill="currentColor" />
  <path d="M11 13H13V15H11V13Z" fill="currentColor" />
  <path d="M13 17H11V19H13V17Z" fill="currentColor" />
  <path d="M15 9H17V11H15V9Z" fill="currentColor" />
  <path d="M17 13H15V19H17V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z"
    fill="currentColor"
  />
</svg>`}],ir=[{nr:127,name:"calendar-dates",tags:"alerts interface time",css:'.gg-calendar-dates{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}.gg-calendar-dates::after,.gg-calendar-dates::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;left:2px}.gg-calendar-dates::before{background:currentColor;width:2px;box-shadow:4px 0 0,8px 0 0,0 4px 0,4px 4px 0,8px 4px 0;top:6px}.gg-calendar-dates::after{width:10px;top:-4px;box-shadow:0 6px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z"
    fill="currentColor"
  />
  <path
    d="M8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17Z"
    fill="currentColor"
  />
  <path
    d="M11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16Z"
    fill="currentColor"
  />
  <path
    d="M16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17Z"
    fill="currentColor"
  />
  <path
    d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
    fill="currentColor"
  />
  <path
    d="M16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13Z"
    fill="currentColor"
  />
  <path
    d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z"
    fill="currentColor"
  />
</svg>`}],lr=[{nr:128,name:"calendar-due",tags:"alerts interface time",css:'.gg-calendar-due{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}.gg-calendar-due::after,.gg-calendar-due::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:6px;background:currentColor}.gg-calendar-due::before{top:2px;width:10px;height:2px;left:2px}.gg-calendar-due::after{width:4px;height:4px;bottom:3px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H8C7.44772 9 7 8.55228 7 8Z"
    fill="currentColor"
  />
  <path
    d="M12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z"
    fill="currentColor"
  />
</svg>`}],sr=[{nr:129,name:"calendar-next",tags:"alerts interface time arrows",css:'.gg-calendar-next{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid transparent;border-bottom:4px solid transparent;border-right:4px solid transparent;border-left:3px solid transparent;box-shadow:0 0 0 2px,inset 0 -2px 0;border-radius:1px}.gg-calendar-next::after,.gg-calendar-next::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-calendar-next::before{background:currentColor;border-radius:2px;top:0;left:-1px;width:10px;height:2px}.gg-calendar-next::after{width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;bottom:-2px;right:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.7249 16.5461L16.2249 13.9481L11.7249 11.35V12.9481H7.7749V14.9481H11.7249V16.5461Z"
    fill="currentColor"
  />
  <path
    d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z"
    fill="currentColor"
  />
</svg>`}],gr=[{nr:130,name:"calendar-today",tags:"alerts time",css:'.gg-calendar-today{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-top:4px solid;border-radius:3px}.gg-calendar-today::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;height:4px;width:4px;border-radius:2px;right:2px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
    fill="currentColor"
  />
</svg>`}],pr=[{nr:131,name:"calendar-two",tags:"alerts interface time",css:'.gg-calendar-two{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}.gg-calendar-two::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:3px;top:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
    fill="currentColor"
  />
</svg>`}],ar=[{nr:132,name:"calendar",tags:"alerts interface time",css:'.gg-calendar,.gg-calendar::before{display:block;box-sizing:border-box}.gg-calendar{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-top:4px solid;border-radius:3px}.gg-calendar::before{content:"";position:absolute;width:10px;border-radius:3px;left:2px;background:currentColor;height:2px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 9C7.44772 9 7 9.44771 7 10C7 10.5523 7.44772 11 8 11H16C16.5523 11 17 10.5523 17 10C17 9.44771 16.5523 9 16 9H8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
    fill="currentColor"
  />
</svg>`}],dr=[{nr:133,name:"calibrate",tags:"interface",css:'.gg-calibrate{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;overflow:hidden}.gg-calibrate::after,.gg-calibrate::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:22px}.gg-calibrate::before{width:6px;height:6px;background:currentColor;top:10px;left:6px}.gg-calibrate::after{width:22px;height:22px;border:6px solid transparent;border-top:6px solid;left:-2px;top:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.0503 5C14.51 5 16.7393 5.98676 18.3638 7.58602L14.1208 11.8291C13.5824 11.3154 12.8531 11 12.0503 11C11.1963 11 10.4256 11.3568 9.87927 11.9295L5.63623 7.68651C7.26871 6.0282 9.53941 5 12.0503 5Z"
    fill="currentColor"
  />
  <path
    d="M12.0503 19C13.7071 19 15.0503 17.6569 15.0503 16C15.0503 14.3431 13.7071 13 12.0503 13C10.3934 13 9.05029 14.3431 9.05029 16C9.05029 17.6569 10.3934 19 12.0503 19Z"
    fill="currentColor"
  />
</svg>`}],xr=[{nr:134,name:"camera",tags:"multimedia devices",css:'.gg-camera{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:18px;height:12px;perspective:24px}.gg-camera::after,.gg-camera::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-camera::before{border:2px solid;border-left-color:transparent;transform:rotateY(-70deg);width:8px;height:8px;right:-7px;top:0}.gg-camera::after{width:10px;height:5px;border-top:2px solid;border-right:2px solid;top:-5px;right:2px;border-top-right-radius:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 4.5V6.5H12V7.5H3C1.34315 7.5 0 8.84315 0 10.5V16.5C0 18.1569 1.34315 19.5 3 19.5H15C16.5731 19.5 17.8634 18.2892 17.9898 16.7487L24 17.5V9.5L17.9898 10.2513C17.8634 8.71078 16.5731 7.5 15 7.5H14V5.5C14 4.94772 13.5523 4.5 13 4.5H4ZM18 12.2656V14.7344L22 15.2344V11.7656L18 12.2656ZM16 10.5C16 9.94772 15.5523 9.5 15 9.5H3C2.44772 9.5 2 9.94772 2 10.5V16.5C2 17.0523 2.44772 17.5 3 17.5H15C15.5523 17.5 16 17.0523 16 16.5V10.5Z"
    fill="currentColor"
  />
</svg>`}],br=[{nr:135,name:"cap",tags:"design",css:'.gg-cap{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;border:2px solid;border-bottom-color:transparent;border-top-left-radius:100px;border-top-right-radius:100px}.gg-cap::after,.gg-cap::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-cap::after{border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 0 0 2px,inset 12px 0 0 0;bottom:-8px;width:18px;height:6px;border-radius:1px;left:-2px}.gg-cap::before{width:4px;height:4px;background:currentColor;border-radius:2px;left:5px;top:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M8 18V20H16V18H8Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.988 3.2203C13.9959 3.14796 14 3.07446 14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3C10 3.07446 10.0041 3.14796 10.012 3.2203C5.99799 4.12533 3 7.71255 3 12C3 12.3883 3.02459 12.7709 3.0723 13.1462C1.86949 13.5369 1 14.6669 1 16V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V16C23 14.6669 22.1305 13.5369 20.9277 13.1462C20.9754 12.7709 21 12.3883 21 12C21 7.71255 18.002 4.12533 13.988 3.2203ZM12 5C8.13401 5 5 8.13401 5 12C5 12.3402 5.02412 12.674 5.07063 13H18.9294C18.9759 12.674 19 12.3402 19 12C19 8.13401 15.866 5 12 5ZM3 16C3 15.4477 3.44772 15 4 15H20C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V16Z"
    fill="currentColor"
  />
</svg>`}],hr=[{nr:136,name:"captions",tags:"interface signs buttons",css:'.gg-captions{border-radius:1px;transform:scale(var(--ggs,1))}.gg-captions,.gg-captions::after,.gg-captions::before{box-sizing:border-box;position:relative;display:block;width:20px;height:16px;border:2px solid}.gg-captions::after,.gg-captions::before{content:"";position:absolute;width:5px;height:8px;border-right:transparent;top:2px;left:2px}.gg-captions::before{left:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 8V10H8V14H11V16H6V8H11Z" fill="currentColor" />
  <path d="M18 8V10H15V14H18V16H13V8H18Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5ZM4 18V6H20V18H4Z"
    fill="currentColor"
  />
</svg>`}],cr=[{nr:137,name:"card-clubs",tags:"signs",css:'.gg-card-clubs{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}.gg-card-clubs::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;border-radius:4px;width:4px;height:4px;left:5px;top:4px;box-shadow:-2.5px 4px 0,2.5px 4px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
    fill="currentColor"
  />
  <path
    d="M11 13C11 14.1046 10.1046 15 9 15C7.89543 15 7 14.1046 7 13C7 11.8954 7.89543 11 9 11C10.1046 11 11 11.8954 11 13Z"
    fill="currentColor"
  />
  <path
    d="M15 15C16.1046 15 17 14.1046 17 13C17 11.8954 16.1046 11 15 11C13.8954 11 13 11.8954 13 13C13 14.1046 13.8954 15 15 15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4ZM6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z"
    fill="currentColor"
  />
</svg>`}],fr=[{nr:138,name:"card-diamonds",tags:"signs",css:'.gg-card-diamonds{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}.gg-card-diamonds::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;transform:rotate(45deg);top:6px;left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 7.75736L7.75736 12L12 16.2426L16.2426 12L12 7.75736Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4ZM6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z"
    fill="currentColor"
  />
</svg>`}],Cr=[{nr:139,name:"card-hearts",tags:"signs",css:'.gg-card-hearts{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}.gg-card-hearts::after,.gg-card-hearts::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:6px;background:currentColor;border-top-left-radius:16px;border-top-right-radius:16px;transform:rotate(45deg);left:6px;top:6px}.gg-card-hearts::after{transform:rotate(-45deg);left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.14648 12.2929C8.36544 11.5118 8.36544 10.2455 9.14648 9.46444C9.92753 8.68339 11.1939 8.68339 11.9749 9.46444L12 9.48955L12.0251 9.46449C12.8061 8.68345 14.0725 8.68345 14.8535 9.46449C15.6346 10.2455 15.6346 11.5119 14.8535 12.2929L12.0251 15.1213L12 15.0962L11.9749 15.1213L9.14648 12.2929Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4ZM6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z"
    fill="currentColor"
  />
</svg>`}],wr=[{nr:140,name:"card-spades",tags:"signs",css:'.gg-card-spades{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}.gg-card-spades::after,.gg-card-spades::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:6px;background:currentColor;border-bottom-left-radius:16px;border-bottom-right-radius:16px;transform:rotate(-45deg);left:6px;top:6px}.gg-card-spades::after{transform:rotate(45deg);left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.14648 11.7071C8.36544 12.4882 8.36544 13.7545 9.14648 14.5356C9.92753 15.3166 11.1939 15.3166 11.9749 14.5356L12 14.5104L12.0251 14.5355C12.8061 15.3166 14.0725 15.3166 14.8535 14.5355C15.6346 13.7545 15.6346 12.4881 14.8535 11.7071L12.0251 8.87865L12 8.90377L11.9749 8.87871L9.14648 11.7071Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V4C21 2.34315 19.6569 1 18 1H6C4.34315 1 3 2.34315 3 4V20ZM6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21Z"
    fill="currentColor"
  />
</svg>`}],ur=[{nr:141,name:"carousel",tags:"interface",css:'.gg-carousel{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px}.gg-carousel::after,.gg-carousel::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px}.gg-carousel::before{width:22px;height:10px;border:2px solid}.gg-carousel::after{width:10px;height:2px;background:currentColor;top:16px;left:6px;box-shadow:-3px -4px 0,3px -4px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 3C2.34315 3 1 4.34315 1 6V10C1 11.6569 2.34315 13 4 13H20C21.6569 13 23 11.6569 23 10V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10V6C21 5.44771 20.5523 5 20 5Z"
    fill="currentColor"
  />
  <path
    d="M7 20C7 19.4477 7.44772 19 8 19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20Z"
    fill="currentColor"
  />
  <path
    d="M5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H5Z"
    fill="currentColor"
  />
</svg>`}],vr=[{nr:142,name:"cast",tags:"multimedia interface devices",css:'.gg-cast{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat bottom right/6px 2px,linear-gradient( to left,currentColor 5px,transparent 0)no-repeat top left/2px 2px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:16px;border-top:2px solid;border-right:2px solid;border-radius:2px;border-left:0}.gg-cast::after,.gg-cast::before{content:"";display:block;box-sizing:border-box;position:absolute;width:20px;height:20px;border:6px double;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent;border-radius:50%;transform:rotate(-45deg);bottom:-10px;left:-10px}.gg-cast::after{width:4px;height:4px;border:2px solid;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent;bottom:-2px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20 6H4V8H2V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H15V18H20V6Z"
    fill="currentColor"
  />
  <path
    d="M2 13C5.86599 13 9 16.134 9 20H7C7 17.2386 4.76142 15 2 15V13Z"
    fill="currentColor"
  />
  <path d="M2 17C3.65685 17 5 18.3431 5 20H2V17Z" fill="currentColor" />
  <path
    d="M2 9C8.07513 9 13 13.9249 13 20H11C11 15.0294 6.97056 11 2 11V9Z"
    fill="currentColor"
  />
</svg>`}],mr=[{nr:143,name:"chanel",tags:"brands",css:'.gg-chanel{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:18px}.gg-chanel::after,.gg-chanel::before{content:"";display:block;position:absolute;box-sizing:border-box;border:3px solid;width:18px;height:18px;border-radius:22px}.gg-chanel::before{border-left-color:transparent;left:-3px}.gg-chanel::after{border-right-color:transparent;right:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6.07178 3.17291C4.32593 3.5202 2.72229 4.37738 1.46362 5.63605L3.59332 7.76575C4.43079 6.92835 5.4978 6.35803 6.65936 6.12695C7.53564 5.95264 8.43604 5.9773 9.29523 6.19452C9.0791 6.45056 8.87671 6.71936 8.68927 6.99988C7.70032 8.47992 7.17249 10.22 7.17249 12C7.17249 13.78 7.70032 15.5201 8.68927 17.0001C8.87671 17.2806 9.07916 17.5494 9.29529 17.8055C8.4361 18.0227 7.53564 18.0474 6.65936 17.873C5.4978 17.642 4.43079 17.0717 3.59332 16.2343L1.46362 18.364C2.72229 19.6226 4.32593 20.4798 6.07178 20.8271C7.81757 21.1743 9.6272 20.9961 11.2717 20.3149C11.5201 20.212 11.7632 20.0983 12.0001 19.9744C12.2369 20.0983 12.4799 20.212 12.7283 20.3149C14.3729 20.9961 16.1825 21.1743 17.9283 20.8271C19.6741 20.4798 21.2778 19.6226 22.5364 18.364L20.4067 16.2343C19.5693 17.0717 18.5023 17.642 17.3407 17.873C16.4644 18.0474 15.564 18.0227 14.7048 17.8055C14.9209 17.5494 15.1234 17.2806 15.3108 17.0001C16.2997 15.5201 16.8276 13.78 16.8276 12C16.8276 10.22 16.2997 8.47992 15.3108 6.99988C15.1234 6.71936 14.921 6.45056 14.7048 6.19452C15.564 5.9773 16.4644 5.95264 17.3407 6.12695C18.5023 6.35803 19.5693 6.92835 20.4067 7.76575L22.5364 5.63605C21.2778 4.37738 19.6741 3.5202 17.9283 3.17291C16.1825 2.82568 14.3729 3.00391 12.7283 3.68506C12.4799 3.78796 12.2369 3.90167 12.0001 4.02564C11.7632 3.90167 11.5201 3.78796 11.2717 3.68506C9.6272 3.00391 7.81757 2.82568 6.07178 3.17291ZM12.0001 7.7049C11.6994 7.99695 11.4288 8.32117 11.1935 8.67316C10.5356 9.6579 10.1844 10.8157 10.1844 12C10.1844 13.1843 10.5356 14.3421 11.1935 15.3268C11.4288 15.6788 11.6994 16.0031 12.0001 16.2951C12.3007 16.0031 12.5713 15.6788 12.8065 15.3268C13.4645 14.3421 13.8157 13.1843 13.8157 12C13.8157 10.8157 13.4645 9.6579 12.8065 8.67316C12.5713 8.32117 12.3007 7.99695 12.0001 7.7049Z"
    fill="currentColor"
  />
</svg>`}],Hr=[{nr:144,name:"chart",tags:"interface design",css:'.gg-chart{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border-bottom:2px solid;border-left:2px solid}.gg-chart::after,.gg-chart::before{content:"";display:block;position:absolute;border:2px solid;box-sizing:border-box}.gg-chart::before{border-top-right-radius:100px;right:-2px;top:-2px;width:8px;height:8px}.gg-chart::after{width:18px;height:18px;border-radius:100px;border-right-color:transparent;left:-10px;transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22.775 8C22.9242 8.65461 23 9.32542 23 10H14V1C14.6746 1 15.3454 1.07584 16 1.22504C16.4923 1.33724 16.9754 1.49094 17.4442 1.68508C18.5361 2.13738 19.5282 2.80031 20.364 3.63604C21.1997 4.47177 21.8626 5.46392 22.3149 6.55585C22.5091 7.02455 22.6628 7.5077 22.775 8ZM20.7082 8C20.6397 7.77018 20.5593 7.54361 20.4672 7.32122C20.1154 6.47194 19.5998 5.70026 18.9497 5.05025C18.2997 4.40024 17.5281 3.88463 16.6788 3.53284C16.4564 3.44073 16.2298 3.36031 16 3.2918V8H20.7082Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 14C1 9.02944 5.02944 5 10 5C10.6746 5 11.3454 5.07584 12 5.22504V12H18.775C18.9242 12.6546 19 13.3254 19 14C19 18.9706 14.9706 23 10 23C5.02944 23 1 18.9706 1 14ZM16.8035 14H10V7.19648C6.24252 7.19648 3.19648 10.2425 3.19648 14C3.19648 17.7575 6.24252 20.8035 10 20.8035C13.7575 20.8035 16.8035 17.7575 16.8035 14Z"
    fill="currentColor"
  />
</svg>`}],Vr=[{nr:145,name:"check-o",tags:"interface buttons",css:'.gg-check-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-check-o::after{content:"";display:block;box-sizing:border-box;position:absolute;left:3px;top:-1px;width:6px;height:10px;border-color:currentColor;border-width:0 2px 2px 0;border-style:solid;transform-origin:bottom left;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
    fill="currentColor"
  />
</svg>`}],Lr=[{nr:146,name:"check-r",tags:"interface buttons",css:'.gg-check-r{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}.gg-check-r::after{content:"";display:block;box-sizing:border-box;position:absolute;left:3px;top:-1px;width:6px;height:10px;border-width:0 2px 2px 0;border-style:solid;transform-origin:bottom left;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],Mr=[{nr:147,name:"check",tags:"interface",css:'.gg-check{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-check::after{content:"";display:block;box-sizing:border-box;position:absolute;left:3px;top:-1px;width:6px;height:10px;border-width:0 2px 2px 0;border-style:solid;transform-origin:bottom left;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
    fill="currentColor"
  />
</svg>`}],Zr=[{nr:148,name:"chevron-double-down-o",tags:"interface",css:'.gg-chevron-double-down-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:40px;width:22px;height:22px}.gg-chevron-double-down-o::after,.gg-chevron-double-down-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:6px;top:3px}.gg-chevron-double-down-o::after{top:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.75732 8.46448L9.17154 7.05026L12 9.87869L14.8284 7.05029L16.2426 8.46451L12 12.7071L7.75732 8.46448Z"
    fill="currentColor"
  />
  <path
    d="M9.17154 11.2929L7.75732 12.7071L11.9999 16.9498L16.2426 12.7071L14.8284 11.2929L12 14.1213L9.17154 11.2929Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],kr=[{nr:149,name:"chevron-double-down-r",tags:"interface",css:'.gg-chevron-double-down-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:4px;width:22px;height:22px}.gg-chevron-double-down-r::after,.gg-chevron-double-down-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:6px;top:3px}.gg-chevron-double-down-r::after{top:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.75732 8.46448L9.17154 7.05026L12 9.87869L14.8284 7.05029L16.2426 8.46451L12 12.7071L7.75732 8.46448Z"
    fill="currentColor"
  />
  <path
    d="M9.17154 11.2929L7.75732 12.7071L11.9999 16.9498L16.2426 12.7071L14.8284 11.2929L12 14.1213L9.17154 11.2929Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],yr=[{nr:150,name:"chevron-double-down",tags:"interface",css:'.gg-chevron-double-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-chevron-double-down::after,.gg-chevron-double-down::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:7px;top:3px}.gg-chevron-double-down::after{top:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.75735 5.63605L6.34314 7.05026L12 12.7071L17.6569 7.05029L16.2427 5.63608L12 9.87872L7.75735 5.63605Z"
    fill="currentColor"
  />
  <path
    d="M6.34314 12.7071L7.75735 11.2929L12 15.5356L16.2427 11.2929L17.6569 12.7071L12 18.364L6.34314 12.7071Z"
    fill="currentColor"
  />
</svg>`}],zr=[{nr:151,name:"chevron-double-left-o",tags:"interface",css:'.gg-chevron-double-left-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:40px;width:22px;height:22px}.gg-chevron-double-left-o::after,.gg-chevron-double-left-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg);top:6px;left:5px}.gg-chevron-double-left-o::after{left:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.7071 9.1716L11.2929 7.75739L7.05024 12L11.2929 16.2426L12.7071 14.8284L9.87869 12L12.7071 9.1716Z"
    fill="currentColor"
  />
  <path
    d="M15.5355 7.75739L16.9497 9.1716L14.1213 12L16.9497 14.8284L15.5355 16.2426L11.2929 12L15.5355 7.75739Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],Br=[{nr:152,name:"chevron-double-left-r",tags:"interface",css:'.gg-chevron-double-left-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:4px;width:22px;height:22px}.gg-chevron-double-left-r::after,.gg-chevron-double-left-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg);top:6px;left:5px}.gg-chevron-double-left-r::after{left:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.7071 9.1716L11.2929 7.75739L7.05024 12L11.2929 16.2426L12.7071 14.8284L9.87869 12L12.7071 9.1716Z"
    fill="currentColor"
  />
  <path
    d="M15.5355 7.75739L16.9497 9.1716L14.1213 12L16.9497 14.8284L15.5355 16.2426L11.2929 12L15.5355 7.75739Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],qr=[{nr:153,name:"chevron-double-left",tags:"interface",css:'.gg-chevron-double-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-chevron-double-left::after,.gg-chevron-double-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg);top:7px;left:6px}.gg-chevron-double-left::after{left:11px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.3639 7.75735L16.9497 6.34314L11.2929 12L16.9497 17.6568L18.3639 16.2426L14.1213 12L18.3639 7.75735Z"
    fill="currentColor"
  />
  <path
    d="M11.2929 6.34314L12.7071 7.75735L8.46447 12L12.7071 16.2426L11.2929 17.6568L5.63605 12L11.2929 6.34314Z"
    fill="currentColor"
  />
</svg>`}],Xr=[{nr:154,name:"chevron-double-right-o",tags:"interface",css:'.gg-chevron-double-right-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:40px;width:22px;height:22px}.gg-chevron-double-right-o::after,.gg-chevron-double-right-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-right:2px solid;border-top:2px solid;transform:rotate(45deg);top:6px;right:5px}.gg-chevron-double-right-o::after{right:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.46448 7.75739L7.05026 9.1716L9.87869 12L7.05029 14.8284L8.46451 16.2426L12.7071 12L8.46448 7.75739Z"
    fill="currentColor"
  />
  <path
    d="M11.2929 9.1716L12.7071 7.75739L16.9498 12L12.7071 16.2426L11.2929 14.8284L14.1213 12L11.2929 9.1716Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
    fill="currentColor"
  />
</svg>`}],Ir=[{nr:155,name:"chevron-double-right-r",tags:"interface",css:'.gg-chevron-double-right-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:4px;width:22px;height:22px}.gg-chevron-double-right-r::after,.gg-chevron-double-right-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-right:2px solid;border-top:2px solid;transform:rotate(45deg);top:6px;right:5px}.gg-chevron-double-right-r::after{right:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.46448 7.75739L7.05026 9.1716L9.87869 12L7.05029 14.8284L8.46451 16.2426L12.7071 12L8.46448 7.75739Z"
    fill="currentColor"
  />
  <path
    d="M11.2929 9.1716L12.7071 7.75739L16.9498 12L12.7071 16.2426L11.2929 14.8284L14.1213 12L11.2929 9.1716Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
    fill="currentColor"
  />
</svg>`}],Sr=[{nr:156,name:"chevron-double-right",tags:"interface",css:'.gg-chevron-double-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-chevron-double-right::after,.gg-chevron-double-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-right:2px solid;border-top:2px solid;transform:rotate(45deg);top:7px;right:6px}.gg-chevron-double-right::after{right:11px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
    fill="currentColor"
  />
  <path
    d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
    fill="currentColor"
  />
</svg>`}],Yr=[{nr:157,name:"chevron-double-up-o",tags:"interface",css:'.gg-chevron-double-up-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:40px;width:22px;height:22px}.gg-chevron-double-up-o::after,.gg-chevron-double-up-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:6px;bottom:3px}.gg-chevron-double-up-o::after{bottom:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8284 12.7071L16.2426 11.2929L12 7.05027L7.75739 11.2929L9.1716 12.7071L12 9.87869L14.8284 12.7071Z"
    fill="currentColor"
  />
  <path
    d="M14.8284 16.9497L16.2426 15.5355L12 11.2929L7.75739 15.5355L9.1716 16.9497L12 14.1213L14.8284 16.9497Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
    fill="currentColor"
  />
</svg>`}],jr=[{nr:158,name:"chevron-double-up-r",tags:"interface",css:'.gg-chevron-double-up-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:4px;width:22px;height:22px}.gg-chevron-double-up-r::after,.gg-chevron-double-up-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:6px;bottom:3px}.gg-chevron-double-up-r::after{bottom:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8284 12.4813L16.2426 11.067L12 6.82444L7.75732 11.0671L9.17154 12.4813L12 9.65286L14.8284 12.4813Z"
    fill="currentColor"
  />
  <path
    d="M14.8284 16.7239L16.2426 15.3097L12 11.0671L7.75732 15.3097L9.17154 16.7239L12 13.8955L14.8284 16.7239Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 4.77411C23 2.56497 21.2091 0.774109 19 0.774109H5C2.79086 0.774109 1 2.56497 1 4.77411V18.7741C1 20.9832 2.79086 22.7741 5 22.7741H19C21.2091 22.7741 23 20.9832 23 18.7741V4.77411ZM19 2.77411H5C3.89543 2.77411 3 3.66954 3 4.77411V18.7741C3 19.8787 3.89543 20.7741 5 20.7741H19C20.1046 20.7741 21 19.8787 21 18.7741V4.77411C21 3.66954 20.1046 2.77411 19 2.77411Z"
    fill="currentColor"
  />
</svg>`}],Ar=[{nr:159,name:"chevron-double-up",tags:"interface",css:'.gg-chevron-double-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-chevron-double-up::after,.gg-chevron-double-up::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:7px;bottom:3px}.gg-chevron-double-up::after{bottom:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.6569 11.2929L16.2427 12.7071L12 8.46444L7.75735 12.7071L6.34314 11.2929L12 5.63605L17.6569 11.2929Z"
    fill="currentColor"
  />
  <path
    d="M17.6569 16.9497L16.2427 18.3639L12 14.1213L7.75735 18.364L6.34314 16.9498L12 11.2929L17.6569 16.9497Z"
    fill="currentColor"
  />
</svg>`}],Ur=[{nr:160,name:"chevron-down-o",tags:"interface buttons",css:'.gg-chevron-down-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-chevron-down-o::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:6px;top:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.75745 10.5858L9.17166 9.17154L12.0001 12L14.8285 9.17157L16.2427 10.5858L12.0001 14.8284L7.75745 10.5858Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
    fill="currentColor"
  />
</svg>`}],Dr=[{nr:161,name:"chevron-down-r",tags:"interface buttons",css:'.gg-chevron-down-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-chevron-down-r::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:6px;top:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.75739 10.5858L9.1716 9.17154L12 12L14.8284 9.17157L16.2426 10.5858L12 14.8284L7.75739 10.5858Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],Pr=[{nr:162,name:"chevron-down",tags:"interface",css:'.gg-chevron-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-chevron-down::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:4px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
    fill="currentColor"
  />
</svg>`}],Gr=[{nr:163,name:"chevron-left-o",tags:"interface buttons",css:'.gg-chevron-left-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-chevron-left-o::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);left:7px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 7.75739L13.4142 9.1716L10.5858 12L13.4142 14.8285L12 16.2427L7.75736 12L12 7.75739Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
    fill="currentColor"
  />
</svg>`}],Tr=[{nr:164,name:"chevron-left-r",tags:"interface buttons",css:'.gg-chevron-left-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-chevron-left-r::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);left:7px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13 7.75739L14.4142 9.1716L11.5858 12L14.4142 14.8284L13 16.2426L8.75736 12L13 7.75739Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 1C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1H19ZM21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5Z"
    fill="currentColor"
  />
</svg>`}],$r=[{nr:165,name:"chevron-left",tags:"interface",css:'.gg-chevron-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-chevron-left::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);left:6px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
    fill="currentColor"
  />
</svg>`}],Or=[{nr:166,name:"chevron-right-o",tags:"interface buttons",css:'.gg-chevron-right-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-chevron-right-o::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(-45deg);left:5px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
    fill="currentColor"
  />
</svg>`}],Er=[{nr:167,name:"chevron-right-r",tags:"interface buttons",css:'.gg-chevron-right-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-chevron-right-r::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(-45deg);left:5px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.4853 12.0451L12.2426 7.80249L10.8284 9.2167L13.6568 12.0451L10.8284 14.8736L12.2426 16.2878L16.4853 12.0451Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
    fill="currentColor"
  />
</svg>`}],Fr=[{nr:168,name:"chevron-right",tags:"interface",css:'.gg-chevron-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-chevron-right::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;transform:rotate(-45deg);right:6px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
    fill="currentColor"
  />
</svg>`}],Nr=[{nr:169,name:"chevron-up-o",tags:"interface buttons",css:'.gg-chevron-up-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-chevron-up-o::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(-45deg);left:6px;bottom:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8285 14.8284L16.2427 13.4142L12.0001 9.17161L7.75745 13.4142L9.17166 14.8285L12.0001 12L14.8285 14.8284Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
    fill="currentColor"
  />
</svg>`}],Jr=[{nr:170,name:"chevron-up-r",tags:"interface buttons",css:'.gg-chevron-up-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-chevron-up-r::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(-45deg);left:6px;bottom:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8285 14.8284L16.2427 13.4142L12.0001 9.17161L7.75745 13.4142L9.17166 14.8285L12.0001 12L14.8285 14.8284Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
    fill="currentColor"
  />
</svg>`}],Kr=[{nr:171,name:"chevron-up",tags:"interface",css:'.gg-chevron-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-chevron-up::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-top:2px solid;border-right:2px solid;transform:rotate(-45deg);left:4px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
    fill="currentColor"
  />
</svg>`}],Qr=[{nr:172,name:"circleci",tags:"brands",css:'.gg-circleci,.gg-circleci::before{display:block;box-sizing:border-box;border-radius:18px}.gg-circleci{position:relative;transform:scale(var(--ggs,1));width:24px;height:24px;border:4px solid;background:linear-gradient( to left,currentColor 8px,transparent 0)no-repeat -2px center/8px 3px}.gg-circleci::before{content:"";position:absolute;width:10px;height:10px;border:3px solid;top:3px;right:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z"
    fill="currentColor"
  />
</svg>`}],Rr=[{nr:173,name:"clapper-board",tags:"interface",css:'.gg-clapper-board{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:22px;height:18px;border:2px solid;border-radius:3px}.gg-clapper-board::after,.gg-clapper-board::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-clapper-board::before{width:10px;height:8px;border-left:2px solid;border-right:2px solid;left:4px;top:-2px;transform:skewX(-40deg)}.gg-clapper-board::after{width:22px;height:2px;background:currentColor;top:4px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20.1702 3L20.1663 3.00453C21.7458 3.09084 23 4.39896 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20.1702ZM10.4764 5H16.4764L13.089 9H7.08899L10.4764 5ZM5.08899 9L8.47644 5H4C3.44772 5 3 5.44772 3 6V9H5.08899ZM3 11V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V11H3ZM21 9V6C21 5.44771 20.5523 5 20 5H18.4764L15.089 9H21Z"
    fill="currentColor"
  />
</svg>`}],Wr=[{nr:174,name:"clipboard",tags:"content interface",css:'.gg-clipboard{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:2px}.gg-clipboard::after,.gg-clipboard::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:2px;width:10px;left:2px}.gg-clipboard::before{border:2px solid;border-bottom-left-radius:3px;border-bottom-right-radius:3px;top:-2px;height:6px}.gg-clipboard::after{height:2px;background:currentColor;box-shadow:0 -4px 0 0;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H15.9595C16.5118 13 16.9595 12.5523 16.9595 12C16.9595 11.4477 16.5118 11 15.9595 11H8Z"
    fill="currentColor"
  />
  <path
    d="M8.04053 15.0665C7.48824 15.0665 7.04053 15.5142 7.04053 16.0665C7.04053 16.6188 7.48824 17.0665 8.04053 17.0665H16C16.5523 17.0665 17 16.6188 17 16.0665C17 15.5142 16.5523 15.0665 16 15.0665H8.04053Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 5H5L5 19H19V5H17V6C17 7.65685 15.6569 9 14 9H10C8.34315 9 7 7.65685 7 6V5ZM9 5V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V5H9Z"
    fill="currentColor"
  />
</svg>`}],_r=[{nr:175,name:"close-o",tags:"interface buttons",css:'.gg-close-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:40px}.gg-close-o::after,.gg-close-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;background:currentColor;transform:rotate(45deg);border-radius:5px;top:8px;left:3px}.gg-close-o::after{transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
    fill="currentColor"
  />
</svg>`}],o2=[{nr:176,name:"close-r",tags:"interface buttons",css:'.gg-close-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-close-r::after,.gg-close-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;background:currentColor;transform:rotate(45deg);border-radius:5px;top:8px;left:3px}.gg-close-r::after{transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z"
    fill="currentColor"
  />
</svg>`}],r2=[{nr:177,name:"close",tags:"interface",css:'.gg-close{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:40px}.gg-close::after,.gg-close::before{content:"";display:block;box-sizing:border-box;position:absolute;width:16px;height:2px;background:currentColor;transform:rotate(45deg);border-radius:5px;top:8px;left:1px}.gg-close::after{transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
    fill="currentColor"
  />
</svg>`}],e2=[{nr:178,name:"cloud",tags:"multimedia interface files",css:'.gg-cloud{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:2px;background:currentColor;margin-bottom:-20px}.gg-cloud::after,.gg-cloud::before{content:"";display:block;position:absolute;border:2px solid;box-sizing:border-box;bottom:0}.gg-cloud::before{border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;left:-6px;width:7px;height:12px}.gg-cloud::after{width:16px;height:16px;border-radius:100px;border-left-color:transparent;right:-8px;transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.738 19.9964C14.8186 19.9988 14.8994 20 14.9806 20C19.3989 20 22.9806 16.4183 22.9806 12C22.9806 7.58172 19.3989 4 14.9806 4C12.4542 4 10.2013 5.17108 8.73522 7H7.51941C3.92956 7 1.01941 9.91015 1.01941 13.5C1.01941 17.0899 3.92956 20 7.51941 20H14.5194C14.5926 20 14.6654 19.9988 14.738 19.9964ZM16.6913 17.721C19.0415 16.9522 20.9806 14.6815 20.9806 12C20.9806 8.68629 18.2943 6 14.9806 6C11.6669 6 8.98059 8.68629 8.98059 12H6.98059C6.98059 10.9391 7.1871 9.92643 7.56211 9H7.51941C5.03413 9 3.01941 11.0147 3.01941 13.5C3.01941 15.9853 5.03413 18 7.51941 18H14.5194C15.0691 18 15.9041 17.9014 16.6913 17.721Z"
    fill="currentColor"
  />
</svg>`}],n2=[{nr:179,name:"code-climate",tags:"brands",css:'.gg-code-climate{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:24px;height:16px}.gg-code-climate::after,.gg-code-climate::before{content:"";display:block;position:absolute;box-sizing:border-box;width:12px;border-left:4px solid;border-top:4px solid;transform:rotate(45deg)}.gg-code-climate::before{height:12px;left:2px;bottom:-2px}.gg-code-climate::after{height:6px;right:0;bottom:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.49506 8.1109L3.1311 14.4749L4.54532 15.8891L9.49506 10.9393L14.4448 15.8891L15.859 14.4749L9.49506 8.1109Z"
    fill="currentColor"
  />
  <path
    d="M14.5049 8.11092L12.5317 10.0842L13.9503 11.494L14.5049 10.9393L19.4547 15.8891L20.8689 14.4749L14.5049 8.11092Z"
    fill="currentColor"
  />
</svg>`}],t2=[{nr:180,name:"code-slash",tags:"interface arrows code",css:'.gg-code-slash{display:block;position:relative;box-sizing:border-box;transform:rotate(15deg) scale(var(--ggs,1));width:2px;height:16px;background:currentColor}.gg-code-slash::after,.gg-code-slash::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;transform:rotate(-60deg)}.gg-code-slash::before{border-left:2px solid;border-top:2px solid;left:-8px;top:5px}.gg-code-slash::after{border-right:2px solid;border-bottom:2px solid;right:-8px;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
    fill="currentColor"
  />
  <path
    d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
    fill="currentColor"
  />
  <path
    d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
    fill="currentColor"
  />
</svg>`}],i2=[{nr:181,name:"code",tags:"interface arrows code",css:'.gg-code{transform:scale(var(--ggs,1))}.gg-code,.gg-code::after,.gg-code::before{box-sizing:border-box;position:relative;display:block;width:8px;height:20px}.gg-code::after,.gg-code::before{content:"";position:absolute;height:8px;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg) scaleY(1);left:-4px;top:6px}.gg-code::after{transform:rotate(-45deg) scaleX(-1);left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z"
    fill="currentColor"
  />
  <path
    d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z"
    fill="currentColor"
  />
</svg>`}],l2=[{nr:182,name:"coffee",tags:"design",css:'.gg-coffee{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid;border-radius:6px;border-top-left-radius:0;border-top-right-radius:0;margin-left:-4px;margin-top:3px}.gg-coffee::after,.gg-coffee::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-coffee::before{left:2px;background:currentColor;box-shadow:4px 0 0,8px 0 0;border-radius:3px;width:2px;height:4px;top:-7px}.gg-coffee::after{width:6px;height:8px;border:2px solid;border-radius:100px;border-top-left-radius:0;border-bottom-left-radius:0;right:-6px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 2.5C5.44772 2.5 5 2.94772 5 3.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V3.5C7 2.94772 6.55228 2.5 6 2.5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 21.5C15.973 21.5 18.441 19.3377 18.917 16.5H19C21.2091 16.5 23 14.7091 23 12.5C23 10.2909 21.2091 8.5 19 8.5V7.5H1V15.5C1 18.8137 3.68629 21.5 7 21.5H13ZM3 9.5V15.5C3 17.7091 4.79086 19.5 7 19.5H13C15.2091 19.5 17 17.7091 17 15.5V9.5H3ZM21 12.5C21 13.6046 20.1046 14.5 19 14.5V10.5C20.1046 10.5 21 11.3954 21 12.5Z"
    fill="currentColor"
  />
  <path
    d="M9 3.5C9 2.94772 9.44771 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5V3.5Z"
    fill="currentColor"
  />
  <path
    d="M14 2.5C13.4477 2.5 13 2.94772 13 3.5V5.5C13 6.05228 13.4477 6.5 14 6.5C14.5523 6.5 15 6.05228 15 5.5V3.5C15 2.94772 14.5523 2.5 14 2.5Z"
    fill="currentColor"
  />
</svg>`}],s2=[{nr:183,name:"collage",tags:"multimedia interface",css:'.gg-collage{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:3px}.gg-collage::after,.gg-collage::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:20px;background:currentColor;left:5px;top:-2px}.gg-collage::after{width:9px;height:2px;left:-2px;top:4px;box-shadow:7px 5px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM13 4H17C17.5523 4 18 4.44772 18 5V13H13V4ZM13 15V20H17C17.5523 20 18 19.5523 18 19V15H13ZM11 4H7C6.44771 4 6 4.44772 6 5V8H11V4ZM6 19V10H11V20H7C6.44772 20 6 19.5523 6 19Z"
    fill="currentColor"
  />
</svg>`}],g2=[{nr:184,name:"color-bucket",tags:"content design",css:'.gg-color-bucket{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:10px;border:2px solid;border-bottom:0;border-top-left-radius:100px;border-top-right-radius:100px;margin-top:-18px}.gg-color-bucket::after,.gg-color-bucket::before{content:"";display:block;box-sizing:border-box;position:absolute;transform:rotate(45deg)}.gg-color-bucket::before{border:2px solid;border-bottom-left-radius:4px;border-bottom-right-radius:4px;top:4px;left:-4px;width:14px;height:16px}.gg-color-bucket::after{width:6px;height:6px;border-radius:0 100% 100% 100%;background:currentColor;right:-15px;bottom:-12px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8.20348 2.00378C9.46407 2.00378 10.5067 3.10742 10.6786 4.54241L19.1622 13.0259L11.384 20.8041C10.2124 21.9757 8.31291 21.9757 7.14134 20.8041L2.8987 16.5615C1.72713 15.3899 1.72713 13.4904 2.8987 12.3188L5.70348 9.51404V4.96099C5.70348 3.32777 6.82277 2.00378 8.20348 2.00378ZM8.70348 4.96099V6.51404L7.70348 7.51404V4.96099C7.70348 4.63435 7.92734 4.36955 8.20348 4.36955C8.47963 4.36955 8.70348 4.63435 8.70348 4.96099ZM8.70348 10.8754V9.34247L4.31291 13.733C3.92239 14.1236 3.92239 14.7567 4.31291 15.1473L8.55555 19.3899C8.94608 19.7804 9.57924 19.7804 9.96977 19.3899L16.3337 13.0259L10.7035 7.39569V10.8754C10.7035 10.9184 10.7027 10.9612 10.7012 11.0038H8.69168C8.69941 10.9625 8.70348 10.9195 8.70348 10.8754Z"
    fill="currentColor"
  />
  <path
    d="M16.8586 16.8749C15.687 18.0465 15.687 19.946 16.8586 21.1175C18.0302 22.2891 19.9297 22.2891 21.1013 21.1175C22.2728 19.946 22.2728 18.0465 21.1013 16.8749L18.9799 14.7536L16.8586 16.8749Z"
    fill="currentColor"
  />
</svg>`}],p2=[{nr:185,name:"color-picker",tags:"design content",css:'.gg-color-picker{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:18px;height:10px;border-left:0;border-top-left-radius:100px;border-bottom-left-radius:100px;border-top:2px solid transparent;border-bottom:2px solid transparent;border-right:2px solid transparent;box-shadow:inset 0 0 0 2px}.gg-color-picker::after,.gg-color-picker::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor}.gg-color-picker::before{top:-2px;border-radius:3px;width:2px;height:10px;right:-3px}.gg-color-picker::after{width:8px;height:6px;right:-9px;box-shadow:-21px 0 0 -2px;border-top-right-radius:100px;border-bottom-right-radius:100px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.3847 2.87868C19.2132 1.70711 17.3137 1.70711 16.1421 2.87868L14.0202 5.00052L13.313 4.29332C12.9225 3.9028 12.2894 3.9028 11.8988 4.29332C11.5083 4.68385 11.5083 5.31701 11.8988 5.70754L17.5557 11.3644C17.9462 11.7549 18.5794 11.7549 18.9699 11.3644C19.3604 10.9739 19.3604 10.3407 18.9699 9.95018L18.2629 9.24316L20.3847 7.12132C21.5563 5.94975 21.5563 4.05025 20.3847 2.87868Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.9297 7.09116L4.1515 14.8693C3.22786 15.793 3.03239 17.169 3.5651 18.2842L1.99994 19.8493L3.41415 21.2635L4.97931 19.6984C6.09444 20.2311 7.4705 20.0356 8.39414 19.112L16.1723 11.3338L11.9297 7.09116ZM13.3439 11.3338L11.9297 9.91959L5.56571 16.2835C5.17518 16.6741 5.17518 17.3072 5.56571 17.6978C5.95623 18.0883 6.5894 18.0883 6.97992 17.6978L13.3439 11.3338Z"
    fill="currentColor"
  />
</svg>`}],a2=[{nr:186,name:"comedy-central",tags:"brands",css:'.gg-comedy-central,.gg-comedy-central::before{box-sizing:border-box;display:block;border:3px solid;border-radius:100px}.gg-comedy-central{position:relative;border-left-color:transparent;transform:scale(var(--ggs,1));width:20px;height:20px}.gg-comedy-central::before{content:"";position:absolute;border-right-color:transparent;width:10px;height:10px;bottom:2px;right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.5445 19C14.4105 19 17.5445 15.866 17.5445 12C17.5445 8.13401 14.4105 5 10.5445 5C8.61148 5 6.86148 5.7835 5.59473 7.05025L3.47343 4.92896L3.45544 4.94694C5.26649 3.12672 7.7739 2 10.5445 2C16.0673 2 20.5445 6.47715 20.5445 12C20.5445 17.5228 16.0673 22 10.5445 22C7.78307 22 5.28308 20.8807 3.47343 19.0711L5.59475 16.9498C6.8615 18.2165 8.61149 19 10.5445 19Z"
    fill="currentColor"
  />
  <path
    d="M10.5445 14C11.1376 14 11.6704 13.7418 12.0367 13.3317L14.1594 15.4544C13.249 16.4068 11.966 17 10.5445 17C7.78305 17 5.54447 14.7614 5.54447 12C5.54447 9.23858 7.78305 7 10.5445 7C11.966 7 13.249 7.59323 14.1594 8.54563L12.0367 10.6683C11.6704 10.2582 11.1376 10 10.5445 10C9.4399 10 8.54447 10.8954 8.54447 12C8.54447 13.1046 9.4399 14 10.5445 14Z"
    fill="currentColor"
  />
</svg>`}],d2=[{nr:187,name:"comment",tags:"multimedia",css:'.gg-comment{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:16px;border:2px solid;border-bottom:0;box-shadow:-6px 8px 0 -6px,6px 8px 0 -6px}.gg-comment::after,.gg-comment::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px}.gg-comment::before{border:2px solid;border-top-color:transparent;border-bottom-left-radius:20px;right:4px;bottom:-6px;height:6px}.gg-comment::after{height:2px;background:currentColor;box-shadow:0 4px 0 0;left:4px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M17 9H7V7H17V9Z" fill="currentColor" />
  <path d="M7 13H17V11H7V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
    fill="currentColor"
  />
</svg>`}],x2=[{nr:188,name:"community",tags:"interface design",css:'.gg-community{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:14px}.gg-community::after,.gg-community::before{content:"";display:block;position:absolute;border:2px solid;width:10px;height:10px;border-radius:22px}.gg-community::after{right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 17.456C11.2389 17.8053 10.3922 18 9.5 18C6.18629 18 3.5 15.3137 3.5 12C3.5 8.68629 6.18629 6 9.5 6C10.3922 6 11.2389 6.19474 12 6.54404C12.7611 6.19474 13.6078 6 14.5 6C17.8137 6 20.5 8.68629 20.5 12C20.5 15.3137 17.8137 18 14.5 18C13.6078 18 12.7611 17.8053 12 17.456ZM10.0003 15.969C9.83637 15.9895 9.66942 16 9.5 16C7.29086 16 5.5 14.2091 5.5 12C5.5 9.79086 7.29086 8 9.5 8C9.66942 8 9.83637 8.01053 10.0003 8.03098C9.06656 9.08871 8.5 10.4782 8.5 12C8.5 13.5218 9.06656 14.9113 10.0003 15.969ZM13.9998 8.03098C14.1636 8.01054 14.3306 8 14.5 8C16.7091 8 18.5 9.79086 18.5 12C18.5 14.2091 16.7091 16 14.5 16C14.3306 16 14.1636 15.9895 13.9998 15.969C14.9334 14.9113 15.5 13.5218 15.5 12C15.5 10.4782 14.9334 9.08872 13.9998 8.03098ZM12 8.87732C12.9145 9.61038 13.5 10.7368 13.5 12C13.5 13.2632 12.9145 14.3896 12 15.1227C11.0855 14.3896 10.5 13.2632 10.5 12C10.5 10.7368 11.0855 9.61038 12 8.87732Z"
    fill="currentColor"
  />
</svg>`}],b2=[{nr:189,name:"components",tags:"interface",css:'.gg-components{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg)scale(var(--ggs,1));width:14px;height:14px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 0 0/2px 6px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 4px 0/2px 6px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 8px 0/2px 6px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 12px 0/2px 6px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 0 8px/2px 6px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 4px 8px/2px 6px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 8px 8px/2px 6px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 12px 8px/2px 6px}.gg-components::after,.gg-components::before{content:"";display:block;position:absolute;width:6px;height:2px;border-top:6px double;border-bottom:6px double}.gg-components::after{right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.7572 6.3431L11.9998 2.10046L16.2425 6.3431L11.9998 10.5857L7.7572 6.3431ZM10.5856 6.3431L11.9998 4.92889L13.4141 6.3431L11.9998 7.75732L10.5856 6.3431Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2.10046 11.9999L6.3431 7.75726L10.5857 11.9999L6.3431 16.2425L2.10046 11.9999ZM4.92889 11.9999L6.3431 10.5857L7.75732 11.9999L6.3431 13.4141L4.92889 11.9999Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.4142 11.9999L17.6568 16.2425L21.8995 11.9999L17.6568 7.75726L13.4142 11.9999ZM17.6568 10.5857L16.2426 11.9999L17.6568 13.4141L19.071 11.9999L17.6568 10.5857Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.7572 17.6569L11.9998 13.4142L16.2425 17.6569L11.9998 21.8995L7.7572 17.6569ZM10.5856 17.6569L11.9998 16.2427L13.4141 17.6569L11.9998 19.0711L10.5856 17.6569Z"
    fill="currentColor"
  />
</svg>`}],h2=[{nr:190,name:"compress-left",tags:"interface arrows",css:'.gg-compress-left{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:2px;height:26px;border-top:10px solid;border-bottom:10px solid}.gg-compress-left::after,.gg-compress-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);left:-2px}.gg-compress-left::after{border-bottom:2px solid;border-right:2px solid;top:-5px}.gg-compress-left::before{border-top:2px solid;border-left:2px solid;bottom:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.97867 9.45703L4.40883 9.45423L4.40726 11.4542L11.4073 11.4597L11.4127 4.45972L9.41274 4.45815L9.40992 8.05978L3.09616 1.76935L1.68457 3.18618L7.97867 9.45703Z"
    fill="currentColor"
  />
  <path
    d="M19.5615 14.5521L19.5535 12.5521L12.5536 12.58L12.5814 19.5799L14.5814 19.572L14.5671 15.9706L20.9105 22.2307L22.3153 20.8071L15.9914 14.5663L19.5615 14.5521Z"
    fill="currentColor"
  />
</svg>`}],c2=[{nr:191,name:"compress-right",tags:"interface arrows",css:'.gg-compress-right{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:2px;height:26px;border-top:10px solid;border-bottom:10px solid}.gg-compress-right::after,.gg-compress-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);left:-2px}.gg-compress-right::after{border-bottom:2px solid;border-right:2px solid;top:-5px}.gg-compress-right::before{border-top:2px solid;border-left:2px solid;bottom:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.567 8.02947L20.9105 1.76929L22.3153 3.19282L15.9916 9.43352L19.5614 9.44772L19.5534 11.4477L12.5535 11.4199L12.5813 4.41992L14.5813 4.42788L14.567 8.02947Z"
    fill="currentColor"
  />
  <path
    d="M7.97879 14.5429L4.40886 14.5457L4.40729 12.5457L11.4073 12.5402L11.4128 19.5402L9.41277 19.5417L9.40995 15.9402L3.09623 22.2306L1.68463 20.8138L7.97879 14.5429Z"
    fill="currentColor"
  />
</svg>`}],f2=[{nr:192,name:"compress-v",tags:"interface arrows",css:'.gg-compress-v{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:26px;border-top:10px solid;border-bottom:10px solid}.gg-compress-v::after,.gg-compress-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg);left:-2px}.gg-compress-v::after{border-bottom:2px solid;border-right:2px solid;top:-5px}.gg-compress-v::before{border-top:2px solid;border-left:2px solid;bottom:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.0338 7.3559L15.4999 4.85376L16.9244 6.25768L12.0107 11.2432L7.02515 6.32948L8.42907 4.90505L11.0329 7.47139L11.0834 0.843506L13.0833 0.858735L13.0338 7.3559Z"
    fill="currentColor"
  />
  <path
    d="M15.5627 18.532L16.9749 17.1159L12.0184 12.1729L7.07543 17.1295L8.49159 18.5418L11.0762 15.95L11.1019 23.1566L13.1019 23.1495L13.0765 16.0528L15.5627 18.532Z"
    fill="currentColor"
  />
</svg>`}],C2=[{nr:193,name:"compress",tags:"interface arrows",css:'.gg-compress{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:26px;height:2px;border-left:10px solid;border-right:10px solid}.gg-compress::after,.gg-compress::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;top:-2px}.gg-compress::before{border-right:2px solid;left:-5px;transform:rotate(45deg)}.gg-compress::after{border-left:2px solid;right:-5px;transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M19.0954 8.42986L17.6711 7.02576L12.7568 12.0107L17.7417 16.925L19.1458 15.5007L16.644 13.0344L23.1411 13.0847L23.1565 11.0848L16.5286 11.0334L19.0954 8.42986Z"
    fill="currentColor"
  />
  <path
    d="M5.46742 15.5618L6.88341 16.9742L11.827 12.0183L6.87102 7.07476L5.45857 8.49074L8.04995 11.0756L0.843506 11.1004L0.850384 13.1004L7.94701 13.076L5.46742 15.5618Z"
    fill="currentColor"
  />
</svg>`}],w2=[{nr:194,name:"controller",tags:"devices interface arrows",css:'.gg-controller{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid;border-radius:100px}.gg-controller::before{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px;left:-5px;top:-5px;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8284 6.34313L16.2426 4.92892L12 0.686279L7.75735 4.92892L9.17156 6.34313L12 3.51471L14.8284 6.34313Z"
    fill="currentColor"
  />
  <path
    d="M4.92892 16.2426L6.34313 14.8284L3.51471 12L6.34313 9.17156L4.92892 7.75735L0.686279 12L4.92892 16.2426Z"
    fill="currentColor"
  />
  <path
    d="M7.75735 19.0711L12 23.3137L16.2426 19.0711L14.8284 17.6568L12 20.4853L9.17156 17.6568L7.75735 19.0711Z"
    fill="currentColor"
  />
  <path
    d="M17.6568 9.17156L20.4853 12L17.6568 14.8284L19.0711 16.2426L23.3137 12L19.0711 7.75735L17.6568 9.17156Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
    fill="currentColor"
  />
</svg>`}],u2=[{nr:195,name:"copy",tags:"content interface",css:'.gg-copy{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:18px;border:2px solid;margin-left:-5px;margin-top:-4px}.gg-copy::after,.gg-copy::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-copy::before{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat right top/5px 2px,linear-gradient( to left,currentColor 5px,transparent 0)no-repeat left bottom/ 2px 5px;box-shadow:inset -4px -4px 0 -2px;bottom:-6px;right:-6px;width:14px;height:18px}.gg-copy::after{width:6px;height:2px;background:currentColor;left:2px;top:2px;box-shadow:0 4px 0,0 8px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M13 7H7V5H13V7Z" fill="currentColor" />
  <path d="M13 11H7V9H13V11Z" fill="currentColor" />
  <path d="M7 15H13V13H7V15Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z"
    fill="currentColor"
  />
</svg>`}],v2=[{nr:196,name:"copyright",tags:"signs interface",css:'.gg-copyright,.gg-copyright::after{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:40px}.gg-copyright::after{content:"";position:absolute;border-right-color:transparent;width:8px;height:8px;top:3px;left:3px;transform:none}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.392 10.4362L14.8106 9.0176C14.1031 8.38476 13.169 8 12.145 8C9.93588 8 8.14502 9.79086 8.14502 12C8.14502 14.2091 9.93588 16 12.145 16C13.2563 16 14.2617 15.5468 14.9866 14.8152L13.674 13.5026L13.4646 13.503C13.1124 13.8124 12.6506 14 12.145 14C11.0405 14 10.145 13.1046 10.145 12C10.145 10.8954 11.0405 10 12.145 10C12.6166 10 13.0501 10.1632 13.392 10.4362Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5Z"
    fill="currentColor"
  />
</svg>`}],m2=[{nr:197,name:"corner-double-down-left",tags:"interface",css:'.gg-corner-double-down-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-bottom-right-radius:4px;border-bottom:2px solid;border-right:2px solid}.gg-corner-double-down-left::after,.gg-corner-double-down-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-left:2px solid;transform:rotate(45deg)}.gg-corner-double-down-left::after{border-bottom:2px solid;bottom:-4px}.gg-corner-double-down-left::before{border-top:2px solid;right:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.2952 7.69432L16.1357 2.6377L21.1924 7.47821L19.8094 8.92296L17.3474 6.56617L17.5094 12.6C17.5805 15.25 15.49 17.456 12.8399 17.5271L6.91369 17.6863L9.20765 19.9335L7.80805 21.3622L2.80768 16.4636L7.70628 11.4632L9.13495 12.8628L6.75759 15.2896L12.7755 15.128C14.1005 15.0924 15.1458 13.9895 15.1102 12.6645L14.9519 6.76668L12.74 9.07732L11.2952 7.69432Z"
    fill="currentColor"
  />
</svg>`}],H2=[{nr:198,name:"corner-double-down-right",tags:"interface",css:'.gg-corner-double-down-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-bottom-left-radius:4px;border-bottom:2px solid;border-left:2px solid}.gg-corner-double-down-right::after,.gg-corner-double-down-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;transform:rotate(45deg)}.gg-corner-double-down-right::after{border-right:2px solid;bottom:-4px;right:0}.gg-corner-double-down-right::before{border-left:2px solid;left:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.6004 7.67915L7.63814 2.74194L2.70093 7.7042L4.11871 9.11483L6.52249 6.69886L6.5075 12.7348C6.50092 15.3857 8.64461 17.5401 11.2956 17.5467L17.224 17.5614L14.9855 19.8638L16.4195 21.258L21.299 16.239L16.2801 11.3595L14.8859 12.7934L17.3217 15.1616L11.3015 15.1467C9.97605 15.1434 8.9042 14.0662 8.9075 12.7407L8.92214 6.84077L11.1898 9.09694L12.6004 7.67915Z"
    fill="currentColor"
  />
</svg>`}],V2=[{nr:199,name:"corner-double-left-down",tags:"interface",css:'.gg-corner-double-left-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-top-left-radius:4px;border-top:2px solid;border-left:2px solid}.gg-corner-double-left-down::after,.gg-corner-double-left-down::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-right:2px solid;transform:rotate(45deg)}.gg-corner-double-left-down::after{border-top:2px solid;top:-4px;right:0}.gg-corner-double-left-down::before{border-bottom:2px solid;left:-4px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M21.299 7.7609L16.2801 12.6405L14.8859 11.2065L17.3217 8.83829L11.3015 8.85324C9.97605 8.85653 8.9042 9.93371 8.9075 11.2592L8.92214 17.1591L11.1898 14.903L12.6004 16.3208L7.63814 21.258L2.70093 16.2957L4.11871 14.8851L6.52249 17.3011L6.5075 11.2652C6.50092 8.61419 8.64461 6.45983 11.2956 6.45325L17.224 6.43853L14.9855 4.1361L16.4195 2.74194L21.299 7.7609Z"
    fill="currentColor"
  />
</svg>`}],L2=[{nr:200,name:"corner-double-left-up",tags:"interface",css:'.gg-corner-double-left-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:10px;border-bottom-left-radius:4px;border-bottom:2px solid;border-left:2px solid}.gg-corner-double-left-up::after,.gg-corner-double-left-up::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;left:-4px;transform:rotate(45deg)}.gg-corner-double-left-up::after{border-left:2px solid;top:-4px}.gg-corner-double-left-up::before{border-left:2px solid;top:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.78372 9.25045L6.36951 7.83624L10.6121 3.59363L14.8548 7.83627L13.4406 9.25048L10.6121 6.42205L7.78372 9.25045Z"
    fill="currentColor"
  />
  <path
    d="M13.4406 13.4932L14.8548 12.0789L10.6121 7.83628L6.36951 12.0789L7.78372 13.4931L9.63052 11.6463V16.4063C9.63052 18.6155 11.4214 20.4063 13.6305 20.4063H17.6305V18.4063H13.6305C12.526 18.4063 11.6305 17.5109 11.6305 16.4063V11.6831L13.4406 13.4932Z"
    fill="currentColor"
  />
</svg>`}],M2=[{nr:201,name:"corner-double-right-down",tags:"interface",css:'.gg-corner-double-right-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-top-right-radius:4px;border-top:2px solid;border-right:2px solid}.gg-corner-double-right-down::after,.gg-corner-double-right-down::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;transform:rotate(45deg)}.gg-corner-double-right-down::after{border-left:2px solid;top:-4px;left:0}.gg-corner-double-right-down::before{border-right:2px solid;right:-4px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.69438 12.7048L2.63776 7.86424L7.47827 2.80762L8.92302 4.19062L6.56623 6.65263L12.6002 6.49061C15.2502 6.41945 17.4561 8.51002 17.5273 11.16L17.6864 17.0862L19.9335 14.7924L21.3622 16.192L16.4636 21.1924L11.4632 16.2938L12.8628 14.8651L15.2897 17.2426L15.1281 11.2245C15.0926 9.89945 13.9896 8.85417 12.6646 8.88974L6.76674 9.04811L9.07738 11.26L7.69438 12.7048Z"
    fill="currentColor"
  />
</svg>`}],Z2=[{nr:202,name:"corner-double-right-up",tags:"interface",css:'.gg-corner-double-right-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:10px;border-bottom-right-radius:4px;border-bottom:2px solid;border-right:2px solid}.gg-corner-double-right-up::after,.gg-corner-double-right-up::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-left:2px solid;right:-4px;transform:rotate(45deg)}.gg-corner-double-right-up::after{border-top:2px solid;top:-4px}.gg-corner-double-right-up::before{border-top:2px solid;top:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.2163 9.25045L17.6305 7.83624L13.3879 3.59363L9.14526 7.83627L10.5595 9.25048L13.3879 6.42205L16.2163 9.25045Z"
    fill="currentColor"
  />
  <path
    d="M10.5595 13.4932L9.14526 12.0789L13.3879 7.83628L17.6305 12.0789L16.2163 13.4931L14.3695 11.6463V16.4063C14.3695 18.6155 12.5786 20.4063 10.3695 20.4063H6.36951V18.4063H10.3695C11.4741 18.4063 12.3695 17.5109 12.3695 16.4063V11.6831L10.5595 13.4932Z"
    fill="currentColor"
  />
</svg>`}],k2=[{nr:203,name:"corner-double-up-left",tags:"interface",css:'.gg-corner-double-up-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px;border-top-right-radius:4px;border-top:2px solid;border-right:2px solid}.gg-corner-double-up-left::after,.gg-corner-double-up-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;top:-4px;transform:rotate(45deg)}.gg-corner-double-up-left::after{border-left:2px solid}.gg-corner-double-up-left::before{border-left:2px solid;left:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.25045 7.78369L7.83624 6.36948L3.59363 10.6121L7.83627 14.8547L9.25048 13.4405L6.42205 10.6121L9.25045 7.78369Z"
    fill="currentColor"
  />
  <path
    d="M13.4932 13.4405L12.0789 14.8547L7.83627 10.6121L12.0789 6.36948L13.4931 7.78369L11.6463 9.63049L16.4063 9.63049C18.6155 9.63049 20.4063 11.4214 20.4063 13.6305L20.4063 17.6305L18.4063 17.6305L18.4063 13.6305C18.4063 12.5259 17.5109 11.6305 16.4063 11.6305L11.6831 11.6305L13.4932 13.4405Z"
    fill="currentColor"
  />
</svg>`}],y2=[{nr:204,name:"corner-double-up-right",tags:"interface",css:'.gg-corner-double-up-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px;border-top-left-radius:4px;border-top:2px solid;border-left:2px solid}.gg-corner-double-up-right::after,.gg-corner-double-up-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-right:2px solid;top:-4px;transform:rotate(45deg)}.gg-corner-double-up-right::after{border-top:2px solid;right:0}.gg-corner-double-up-right::before{border-top:2px solid;right:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.7495 7.78369L16.1638 6.36948L20.4064 10.6121L16.1637 14.8547L14.7495 13.4405L17.5779 10.6121L14.7495 7.78369Z"
    fill="currentColor"
  />
  <path
    d="M10.5068 13.4405L11.9211 14.8547L16.1637 10.6121L11.9211 6.36948L10.5069 7.78369L12.3537 9.63049L7.59366 9.63049C5.38452 9.63049 3.59366 11.4214 3.59366 13.6305L3.59366 17.6305L5.59366 17.6305L5.59366 13.6305C5.59366 12.5259 6.48909 11.6305 7.59366 11.6305L12.3169 11.6305L10.5068 13.4405Z"
    fill="currentColor"
  />
</svg>`}],z2=[{nr:205,name:"corner-down-left",tags:"interface buttons",css:'.gg-corner-down-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-corner-down-left::after,.gg-corner-down-left::before{content:"";display:block;box-sizing:border-box;position:absolute;left:3px}.gg-corner-down-left::after{width:8px;height:8px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);bottom:3px}.gg-corner-down-left::before{width:16px;height:12px;border-bottom-right-radius:4px;border-bottom:2px solid;border-right:2px solid;bottom:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.1495 13.4005C18.2541 13.4005 19.1495 12.5051 19.1495 11.4005V3.40051H21.1495V11.4005C21.1495 13.6097 19.3587 15.4005 17.1495 15.4005H6.84398L10.6286 19.1852L9.21443 20.5994L2.85046 14.2354L9.21443 7.87146L10.6286 9.28567L6.5138 13.4005H17.1495Z"
    fill="currentColor"
  />
</svg>`}],B2=[{nr:206,name:"corner-down-right",tags:"interface buttons",css:'.gg-corner-down-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-corner-down-right::after,.gg-corner-down-right::before{content:"";display:block;box-sizing:border-box;position:absolute;right:3px}.gg-corner-down-right::after{width:8px;height:8px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:3px}.gg-corner-down-right::before{width:16px;height:12px;border-bottom-left-radius:4px;border-bottom:2px solid;border-left:2px solid;bottom:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.85046 13.4005C5.74589 13.4005 4.85046 12.5051 4.85046 11.4005V3.40051H2.85046V11.4005C2.85046 13.6097 4.64132 15.4005 6.85046 15.4005H17.156L13.3714 19.1852L14.7856 20.5994L21.1495 14.2354L14.7856 7.87146L13.3714 9.28567L17.4862 13.4005H6.85046Z"
    fill="currentColor"
  />
</svg>`}],q2=[{nr:207,name:"corner-left-down",tags:"interface buttons",css:'.gg-corner-left-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-corner-left-down::after,.gg-corner-left-down::before{content:"";display:block;box-sizing:border-box;position:absolute;bottom:3px}.gg-corner-left-down::after{width:8px;height:8px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:3px}.gg-corner-left-down::before{width:12px;height:16px;border-top-left-radius:4px;border-top:2px solid;border-left:2px solid;left:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.6013 6.84996C10.6023 5.74539 11.4986 4.85079 12.6032 4.85181L20.6032 4.8592L20.605 2.8592L12.605 2.85181C10.3959 2.84977 8.60335 4.63897 8.60131 6.84811L8.59179 17.1538L4.81054 13.3656L3.39502 14.7785L9.7531 21.1483L16.1229 14.7902L14.71 13.3747L10.5915 17.4856L10.6013 6.84996Z"
    fill="currentColor"
  />
</svg>`}],X2=[{nr:208,name:"corner-left-up",tags:"interface buttons",css:'.gg-corner-left-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-corner-left-up::after,.gg-corner-left-up::before{content:"";display:block;box-sizing:border-box;position:absolute;top:3px}.gg-corner-left-up::after{width:8px;height:8px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:3px}.gg-corner-left-up::before{width:12px;height:16px;border-bottom-left-radius:4px;border-bottom:2px solid;border-left:2px solid;left:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.71 10.6254L16.1229 9.20989L9.7531 2.85181L3.39502 9.22164L4.81054 10.6346L8.59179 6.84631L8.60131 17.152C8.60335 19.3611 10.3959 21.1503 12.605 21.1483L20.605 21.1409L20.6032 19.1409L12.6032 19.1483C11.4986 19.1493 10.6023 18.2547 10.6013 17.1501L10.5915 6.51446L14.71 10.6254Z"
    fill="currentColor"
  />
</svg>`}],I2=[{nr:209,name:"corner-right-down",tags:"interface buttons",css:'.gg-corner-right-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-corner-right-down::after,.gg-corner-right-down::before{content:"";display:block;box-sizing:border-box;position:absolute;bottom:3px}.gg-corner-right-down::after{width:8px;height:8px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);right:3px}.gg-corner-right-down::before{width:12px;height:16px;border-top-right-radius:4px;border-top:2px solid;border-right:2px solid;right:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.3987 6.84996C13.3977 5.74539 12.5014 4.85079 11.3969 4.85181L3.39687 4.8592L3.39502 2.8592L11.395 2.85181C13.6042 2.84977 15.3967 4.63897 15.3987 6.84811L15.4082 17.1538L19.1895 13.3656L20.605 14.7785L14.2469 21.1483L7.87709 14.7902L9.28999 13.3747L13.4085 17.4856L13.3987 6.84996Z"
    fill="currentColor"
  />
</svg>`}],S2=[{nr:210,name:"corner-right-up",tags:"interface buttons",css:'.gg-corner-right-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-corner-right-up::after,.gg-corner-right-up::before{content:"";display:block;box-sizing:border-box;position:absolute;top:3px}.gg-corner-right-up::after{width:8px;height:8px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);right:3px}.gg-corner-right-up::before{width:12px;height:16px;border-bottom-right-radius:4px;border-bottom:2px solid;border-right:2px solid;right:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.28999 10.6254L7.87709 9.20989L14.2469 2.85181L20.605 9.22164L19.1895 10.6346L15.4082 6.84631L15.3987 17.152C15.3967 19.3611 13.6042 21.1503 11.395 21.1483L3.39502 21.1409L3.39687 19.1409L11.3969 19.1483C12.5014 19.1493 13.3977 18.2547 13.3987 17.1501L13.4085 6.51446L9.28999 10.6254Z"
    fill="currentColor"
  />
</svg>`}],Y2=[{nr:211,name:"corner-up-left",tags:"interface buttons",css:'.gg-corner-up-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-corner-up-left::after,.gg-corner-up-left::before{content:"";display:block;box-sizing:border-box;position:absolute;left:3px}.gg-corner-up-left::after{width:8px;height:8px;border-bottom:2px solid;border-left:2px solid;transform:rotate(45deg);top:3px}.gg-corner-up-left::before{width:16px;height:12px;border-top-right-radius:4px;border-top:2px solid;border-right:2px solid;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.6276 14.7219L9.21641 16.1391L2.83875 9.78892L9.18897 3.41125L10.6062 4.82242L6.82971 8.61526L17.1353 8.59304C19.3445 8.58828 21.1392 10.3753 21.144 12.5844L21.1612 20.5844L19.1612 20.5887L19.144 12.5887C19.1416 11.4841 18.2442 10.5907 17.1396 10.593L6.50391 10.616L10.6276 14.7219Z"
    fill="currentColor"
  />
</svg>`}],j2=[{nr:212,name:"corner-up-right",tags:"interface buttons",css:'.gg-corner-up-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-corner-up-right::after,.gg-corner-up-right::before{content:"";display:block;box-sizing:border-box;position:absolute;right:3px}.gg-corner-up-right::after{width:8px;height:8px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);top:3px}.gg-corner-up-right::before{width:16px;height:12px;border-top-left-radius:4px;border-top:2px solid;border-left:2px solid;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.3724 14.7219L14.7835 16.1391L21.1612 9.78892L14.811 3.41125L13.3937 4.82242L17.1702 8.61526L6.86461 8.59304C4.65547 8.58828 2.86076 10.3753 2.85599 12.5844L2.83875 20.5844L4.83874 20.5887L4.85599 12.5887C4.85837 11.4841 5.75573 10.5907 6.8603 10.593L17.496 10.616L13.3724 14.7219Z"
    fill="currentColor"
  />
</svg>`}],A2=[{nr:213,name:"credit-card",tags:"shopping interface multimedia",css:'.gg-credit-card{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border:2px solid;border-radius:4px}.gg-credit-card::after,.gg-credit-card::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:24px;left:-2px;height:2px;background:currentColor;top:9px}.gg-credit-card::before{width:6px;left:2px;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 9C4 8.44772 4.44772 8 5 8H9C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 3C1.79086 3 0 4.79086 0 7V17C0 19.2091 1.79086 21 4 21H20C22.2091 21 24 19.2091 24 17V7C24 4.79086 22.2091 3 20 3H4ZM20 5H4C2.89543 5 2 5.89543 2 7V14H22V7C22 5.89543 21.1046 5 20 5ZM22 16H2V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V16Z"
    fill="currentColor"
  />
</svg>`}],U2=[{nr:214,name:"crop",tags:"content interface design",css:'.gg-crop{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}.gg-crop::after,.gg-crop::before{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:14px}.gg-crop::before{border-right:2px solid;border-top:2px solid;left:1px;top:5px}.gg-crop::after{border-left:2px solid;border-bottom:2px solid;top:1px;right:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.93164 9.00891V16H15V20.0089H17V16H20.9316V14H17V7.00891H9.93164V3H7.93164V7.00891H4V9.00891H7.93164ZM9.93164 9.00891V14H15V9.00891H9.93164Z"
    fill="currentColor"
  />
</svg>`}],D2=[{nr:215,name:"cross",tags:"signs",css:'.gg-cross{transform:scale(var(--ggs,1))}.gg-cross,.gg-cross::after{box-sizing:border-box;position:relative;display:block;width:10px;height:2px;border-radius:3px;background:currentColor}.gg-cross::after{content:"";position:absolute;width:2px;height:12px;top:-4px;left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V9H7C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H13V6Z"
    fill="currentColor"
  />
</svg>`}],P2=[{nr:216,name:"crowdfire",tags:"brands",css:'.gg-crowdfire{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:20px;height:20px}.gg-crowdfire::after,.gg-crowdfire::before{content:"";display:block;position:absolute;box-sizing:border-box}.gg-crowdfire::before{width:20px;height:20px;border:4px solid;border-radius:100px;border-right-color:transparent;transform:rotate(-45deg)}.gg-crowdfire::after{width:8px;height:8px;border-top:4px solid;border-right:4px solid;right:2px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 12C2 6.47715 6.47715 2 12 2V4H20V12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM18 12H16V8H12V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z"
    fill="currentColor"
  />
</svg>`}],G2=[{nr:217,name:"crown",tags:"interface",css:'.gg-crown{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:19px;height:12px;border:2px solid;border-top-color:transparent;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:4px}.gg-crown::after,.gg-crown::before{content:"";display:block;position:absolute;box-sizing:border-box;width:8px;height:8px;border-bottom:2px solid;border-left:2px solid;transform:rotate(-45deg);top:-4px}.gg-crown::before{border-top-left-radius:2px;left:-1px}.gg-crown::after{border-bottom-right-radius:2px;right:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2.5 6.09143L7.21997 10.8114L12.0005 6.03088L16.7811 10.8114L21.5 6.09245V14.9691C21.5 16.626 20.1569 17.9691 18.5 17.9691H5.5C3.84314 17.9691 2.5 16.626 2.5 14.9691V6.09143ZM19.5 10.9087V14.9691C19.5 15.5214 19.0523 15.9691 18.5 15.9691H5.5C4.94771 15.9691 4.5 15.5214 4.5 14.9691V10.9077L7.21997 13.6277L12.0005 8.84717L16.7811 13.6277L19.5 10.9087Z"
    fill="currentColor"
  />
</svg>`}],T2=[{nr:218,name:"danger",tags:"alerts signs",css:'.gg-danger{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:40px}.gg-danger::after,.gg-danger::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;background:currentColor;left:7px}.gg-danger::after{top:2px;height:8px}.gg-danger::before{height:2px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
    fill="currentColor"
  />
  <path
    d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
    fill="currentColor"
  />
</svg>`}],$2=[{nr:219,name:"dark-mode",tags:"interface signs buttons",css:'.gg-dark-mode{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:100px;width:20px;height:20px}.gg-dark-mode::after,.gg-dark-mode::before{content:"";box-sizing:border-box;position:absolute;display:block}.gg-dark-mode::before{border:5px solid;border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;width:9px;height:18px;top:-1px;left:-1px}.gg-dark-mode::after{border:4px solid;border-top-right-radius:100px;border-bottom-right-radius:100px;border-left:0;width:4px;height:8px;right:4px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
    fill="currentColor"
  />
</svg>`}],O2=[{nr:220,name:"data",tags:"multimedia interface signs",css:'.gg-data{transform:scale(var(--ggs,1))}.gg-data,.gg-data::after,.gg-data::before{box-sizing:border-box;position:relative;display:block;border:2px solid;border-radius:50%;width:14px;height:14px}.gg-data::after,.gg-data::before{content:"";position:absolute;width:6px;height:6px;top:2px;left:2px}.gg-data::after{background:linear-gradient( to left,currentColor 8px,transparent 0)no-repeat bottom center/2px 8px;width:22px;height:22px;top:-6px;left:-6px}.gg-data,.gg-data::after{border-top-color:transparent;border-bottom-color:transparent}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 8.88916C13.6569 8.88916 15 10.2323 15 11.8892C15 13.1954 14.1652 14.3066 13 14.7185V19.8892H11V14.7185C9.83481 14.3066 9 13.1954 9 11.8892C9 10.2323 10.3431 8.88916 12 8.88916ZM12 10.8892C12.5523 10.8892 13 11.3369 13 11.8892C13 12.4414 12.5523 12.8892 12 12.8892C11.4477 12.8892 11 12.4414 11 11.8892C11 11.3369 11.4477 10.8892 12 10.8892Z"
    fill="currentColor"
  />
  <path
    d="M7.05019 6.93938C5.78348 8.20612 5 9.9561 5 11.8891C5 14.0666 5.99426 16.0119 7.55355 17.2957L8.97712 15.8721C7.7757 14.9589 7 13.5146 7 11.8891C7 10.5084 7.55962 9.25841 8.46441 8.35359L7.05019 6.93938Z"
    fill="currentColor"
  />
  <path
    d="M15.5355 8.35348C16.4403 9.25831 17 10.5083 17 11.8891C17 13.5146 16.2243 14.959 15.0228 15.8722L16.4463 17.2958C18.0057 16.012 19 14.0666 19 11.8891C19 9.95604 18.2165 8.20602 16.9497 6.93927L15.5355 8.35348Z"
    fill="currentColor"
  />
  <path
    d="M1 11.8891C1 8.85152 2.23119 6.10155 4.22176 4.11095L5.63598 5.52516C4.00733 7.15383 3 9.40381 3 11.8891C3 14.3743 4.00733 16.6243 5.63597 18.2529L4.22175 19.6672C2.23119 17.6766 1 14.9266 1 11.8891Z"
    fill="currentColor"
  />
  <path
    d="M19.7781 19.6673C21.7688 17.6767 23 14.9266 23 11.8891C23 8.85147 21.7688 6.10145 19.7781 4.11084L18.3639 5.52505C19.9926 7.15374 21 9.40376 21 11.8891C21 14.3744 19.9926 16.6244 18.3639 18.2531L19.7781 19.6673Z"
    fill="currentColor"
  />
</svg>`}],E2=[{nr:221,name:"database",tags:"multimedia interface",css:'.gg-database{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid transparent;border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:6px solid transparent;box-shadow:0 0 0 2px,inset 0 2px 0 0,inset 0 -2px 0 0;border-radius:1px}.gg-database::after,.gg-database::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-database::before{background:currentColor;width:20px;height:2px;top:4px;left:-8px}.gg-database::after{width:2px;height:10px;border-bottom:2px solid;border-top:2px solid;top:0;left:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 9V7H7V9H5Z" fill="currentColor" />
  <path d="M9 9H19V7H9V9Z" fill="currentColor" />
  <path d="M5 15V17H7V15H5Z" fill="currentColor" />
  <path d="M19 17H9V15H19V17Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
    fill="currentColor"
  />
</svg>`}],F2=[{nr:222,name:"debug",tags:"design interface",css:'.gg-debug{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:18px;border:2px solid;border-radius:22px}.gg-debug::after,.gg-debug::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-debug::before{width:8px;height:4px;border:2px solid;top:-4px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top:0}.gg-debug::after{background:currentColor;width:4px;height:2px;border-radius:5px;top:4px;left:2px;box-shadow:0 4px 0,-6px -2px 0,-6px 2px 0,-6px 6px 0,6px -2px 0,6px 2px 0,6px 6px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z"
    fill="currentColor"
  />
  <path
    d="M11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.09447 4.74918C8.41606 4.03243 8 3.0648 8 2H10C10 3.10457 10.8954 4 12 4C13.1046 4 14 3.10457 14 2H16C16 3.0648 15.5839 4.03243 14.9055 4.74918C16.1782 5.45491 17.1673 6.6099 17.6586 8H19C19.5523 8 20 8.44772 20 9C20 9.55229 19.5523 10 19 10H18V12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H18V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H17.6586C16.8349 20.3304 14.6124 22 12 22C9.38756 22 7.16508 20.3304 6.34141 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H6V14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H6V10H5C4.44772 10 4 9.55229 4 9C4 8.44772 4.44772 8 5 8H6.34141C6.83274 6.6099 7.82181 5.45491 9.09447 4.74918ZM8 16V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16Z"
    fill="currentColor"
  />
</svg>`}],N2=[{nr:223,name:"designmodo",tags:"brands",css:'.gg-designmodo{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:16px;background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat right 3px/8px 3px}.gg-designmodo::after,.gg-designmodo::before{content:"";display:block;position:absolute;box-sizing:border-box;width:10px;height:10px;border:3px solid;border-radius:10px}.gg-designmodo::after{width:14px;height:14px;border:3px solid transparent;border-bottom:3px solid;left:3px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 4.05444C4.23858 4.05444 2 6.29302 2 9.05444C2 11.8159 4.23858 14.0544 7 14.0544C9.76142 14.0544 12 11.8159 12 9.05444C12 6.29302 9.76142 4.05444 7 4.05444ZM5 9.05444C5 10.159 5.89543 11.0544 7 11.0544C8.10457 11.0544 9 10.159 9 9.05444C9 7.94987 8.10457 7.05444 7 7.05444C5.89543 7.05444 5 7.94987 5 9.05444Z"
    fill="currentColor"
  />
  <path d="M22 10.5544H17V7.55444H22V10.5544Z" fill="currentColor" />
  <path
    d="M11.5503 16.9457C12.6786 16.9457 13.6977 16.4786 14.4249 15.7272C14.4097 15.7429 14.3943 15.7585 14.3788 15.774L16.5001 17.8954C15.2334 19.1621 13.4834 19.9457 11.5503 19.9457C9.61734 19.9457 7.86734 19.1622 6.60059 17.8954L8.72191 15.7741C9.44576 16.498 10.4458 16.9457 11.5503 16.9457Z"
    fill="currentColor"
  />
</svg>`}],J2=[{nr:224,name:"desktop",tags:"devices",css:'.gg-desktop{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:18px;border:2px solid;border-radius:3px;overflow:hidden;}.gg-desktop::before{content:"";display:block;position:absolute;box-sizing:border-box;width:22px;height:2px;background:currentColor;top:2px;left:-2px;}.gg-desktop::after{content:"";display:block;position:absolute;box-sizing:border-box;background:currentColor;width:2px;height:2px;border-radius:4px;bottom:2px;left:4px;box-shadow:4px 0 0,8px 0 0 ;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15Z"
    fill="currentColor"
  />
  <path
    d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
    fill="currentColor"
  />
  <path
    d="M16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V7H21V6C21 5.44772 20.5523 5 20 5ZM3 18V9H21V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
    fill="currentColor"
  />
</svg>`}],K2=[{nr:225,name:"details-less",tags:"content interface",css:'.gg-details-less{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:14px;border:2px solid transparent}.gg-details-less::after,.gg-details-less::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor}.gg-details-less::before{top:2px;width:16px}.gg-details-less::after{width:10px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H3Z"
    fill="currentColor"
  />
  <path
    d="M3 13C2.44772 13 2 13.4477 2 14C2 14.5523 2.44772 15 3 15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H3Z"
    fill="currentColor"
  />
</svg>`}],Q2=[{nr:226,name:"details-more",tags:"content interface",css:'.gg-details-more{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:14px;border:2px solid transparent}.gg-details-more::after,.gg-details-more::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor}.gg-details-more::before{box-shadow:0 4px 0 0;top:0;width:16px}.gg-details-more::after{width:10px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z"
    fill="currentColor"
  />
  <path
    d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
    fill="currentColor"
  />
  <path
    d="M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H3Z"
    fill="currentColor"
  />
</svg>`}],R2=[{nr:227,name:"dialpad",tags:"devices interface",css:'.gg-dialpad{transform:scale(var(--ggs,1));}.gg-dialpad,.gg-dialpad::before{box-shadow:-5px 0 0,5px 0 0}.gg-dialpad,.gg-dialpad::after,.gg-dialpad::before{box-sizing:border-box;position:relative;display:block;width:3px;height:3px;background:currentColor}.gg-dialpad::after,.gg-dialpad::before{content:"";position:absolute;left:0;}.gg-dialpad::before{bottom:5px}.gg-dialpad::after{box-shadow:-5px 0 0,5px 0 0,0 5px 0;top:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5.5 3H8.5V6H5.5V3Z" fill="currentColor" />
  <path d="M5.5 8H8.5V11H5.5V8Z" fill="currentColor" />
  <path d="M5.5 13V16H8.5V13H5.5Z" fill="currentColor" />
  <path d="M10.5 3H13.5V6H10.5V3Z" fill="currentColor" />
  <path d="M10.5 8V11H13.5V8H10.5Z" fill="currentColor" />
  <path d="M10.5 13H13.5V16H10.5V13Z" fill="currentColor" />
  <path d="M10.5 18V21H13.5V18H10.5Z" fill="currentColor" />
  <path d="M15.5 3H18.5V6H15.5V3Z" fill="currentColor" />
  <path d="M15.5 8V11H18.5V8H15.5Z" fill="currentColor" />
  <path d="M15.5 13H18.5V16H15.5V13Z" fill="currentColor" />
</svg>`}],W2=[{nr:228,name:"dice-1",tags:"interface",css:'.gg-dice-1{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:22px;height:22px;border:2px solid;border-radius:3px}.gg-dice-1::before{content:"";display:block;box-sizing:border-box;background:currentColor;position:absolute;width:4px;height:4px;border-radius:4px;left:7px;top:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
    fill="currentColor"
  />
</svg>`}],_2=[{nr:229,name:"dice-2",tags:"interface",css:'.gg-dice-2{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:22px;height:22px;border:2px solid;border-radius:3px}.gg-dice-2::before{content:"";display:block;box-sizing:border-box;background:currentColor;position:absolute;width:4px;height:4px;border-radius:4px;left:2px;top:2px;box-shadow:10px 10px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.2 14.9431C16.0954 14.9431 15.2 15.8385 15.2 16.9431C15.2 18.0477 16.0954 18.9431 17.2 18.9431C18.3045 18.9431 19.2 18.0477 19.2 16.9431C19.2 15.8385 18.3045 14.9431 17.2 14.9431Z"
    fill="currentColor"
  />
  <path
    d="M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z"
    fill="currentColor"
  />
</svg>`}],oe=[{nr:230,name:"dice-3",tags:"interface",css:'.gg-dice-3{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:22px;height:22px;border:2px solid;border-radius:3px}.gg-dice-3::before{content:"";display:block;box-sizing:border-box;background:currentColor;position:absolute;width:4px;height:4px;border-radius:4px;left:2px;top:2px;box-shadow:5px 5px 0,10px 10px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
    fill="currentColor"
  />
  <path
    d="M16.9451 14.8921C15.8405 14.8921 14.9451 15.7875 14.9451 16.8921C14.9451 17.9967 15.8405 18.8921 16.9451 18.8921C18.0496 18.8921 18.9451 17.9967 18.9451 16.8921C18.9451 15.7875 18.0496 14.8921 16.9451 14.8921Z"
    fill="currentColor"
  />
  <path
    d="M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
    fill="currentColor"
  />
</svg>`}],re=[{nr:231,name:"dice-4",tags:"interface",css:'.gg-dice-4{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:22px;height:22px;border:2px solid;border-radius:3px}.gg-dice-4::before{content:"";display:block;box-sizing:border-box;background:currentColor;position:absolute;width:4px;height:4px;border-radius:4px;left:2px;top:2px;box-shadow:0 10px 0,10px 0 0,10px 10px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.9451 5.05518C15.8405 5.05518 14.9451 5.95061 14.9451 7.05518C14.9451 8.15975 15.8405 9.05518 16.9451 9.05518C18.0496 9.05518 18.9451 8.15975 18.9451 7.05518C18.9451 5.95061 18.0496 5.05518 16.9451 5.05518Z"
    fill="currentColor"
  />
  <path
    d="M14.9451 16.8921C14.9451 15.7875 15.8405 14.8921 16.9451 14.8921C18.0496 14.8921 18.9451 15.7875 18.9451 16.8921C18.9451 17.9967 18.0496 18.8921 16.9451 18.8921C15.8405 18.8921 14.9451 17.9967 14.9451 16.8921Z"
    fill="currentColor"
  />
  <path
    d="M7.05518 14.8921C5.95061 14.8921 5.05518 15.7875 5.05518 16.8921C5.05518 17.9967 5.95061 18.8921 7.05518 18.8921C8.15975 18.8921 9.05518 17.9967 9.05518 16.8921C9.05518 15.7875 8.15975 14.8921 7.05518 14.8921Z"
    fill="currentColor"
  />
  <path
    d="M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z"
    fill="currentColor"
  />
</svg>`}],ee=[{nr:232,name:"dice-5",tags:"interface",css:'.gg-dice-5{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:22px;height:22px;border:2px solid;border-radius:3px;}.gg-dice-5::before{content:"";display:block;box-sizing:border-box;background:currentColor;position:absolute;width:4px;height:4px;border-radius:4px;left:2px;top:2px;box-shadow:0 10px 0,10px 0 0,10px 10px 0,5px 5px 0;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.9451 7.05518C14.9451 5.95061 15.8405 5.05518 16.9451 5.05518C18.0496 5.05518 18.9451 5.95061 18.9451 7.05518C18.9451 8.15975 18.0496 9.05518 16.9451 9.05518C15.8405 9.05518 14.9451 8.15975 14.9451 7.05518Z"
    fill="currentColor"
  />
  <path
    d="M16.9451 14.8921C15.8405 14.8921 14.9451 15.7875 14.9451 16.8921C14.9451 17.9967 15.8405 18.8921 16.9451 18.8921C18.0496 18.8921 18.9451 17.9967 18.9451 16.8921C18.9451 15.7875 18.0496 14.8921 16.9451 14.8921Z"
    fill="currentColor"
  />
  <path
    d="M5.05518 16.8921C5.05518 15.7875 5.95061 14.8921 7.05518 14.8921C8.15975 14.8921 9.05518 15.7875 9.05518 16.8921C9.05518 17.9967 8.15975 18.8921 7.05518 18.8921C5.95061 18.8921 5.05518 17.9967 5.05518 16.8921Z"
    fill="currentColor"
  />
  <path
    d="M7.05518 5.05518C5.95061 5.05518 5.05518 5.95061 5.05518 7.05518C5.05518 8.15975 5.95061 9.05518 7.05518 9.05518C8.15975 9.05518 9.05518 8.15975 9.05518 7.05518C9.05518 5.95061 8.15975 5.05518 7.05518 5.05518Z"
    fill="currentColor"
  />
  <path
    d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
    fill="currentColor"
  />
</svg>`}],ne=[{nr:233,name:"dice-6",tags:"interface",css:'.gg-dice-6{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:22px;height:22px;border:2px solid;border-radius:3px;}.gg-dice-6::before{content:"";display:block;box-sizing:border-box;background:currentColor;position:absolute;width:4px;height:4px;border-radius:4px;left:2px;top:2px;box-shadow:0 5px 0,0 10px 0,10px 0 0,10px 5px 0,10px 10px 0;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.9451 5.05518C15.8405 5.05518 14.9451 5.95061 14.9451 7.05518C14.9451 8.15975 15.8405 9.05518 16.9451 9.05518C18.0496 9.05518 18.9451 8.15975 18.9451 7.05518C18.9451 5.95061 18.0496 5.05518 16.9451 5.05518Z"
    fill="currentColor"
  />
  <path
    d="M14.9451 16.8921C14.9451 15.7875 15.8405 14.8921 16.9451 14.8921C18.0496 14.8921 18.9451 15.7875 18.9451 16.8921C18.9451 17.9967 18.0496 18.8921 16.9451 18.8921C15.8405 18.8921 14.9451 17.9967 14.9451 16.8921Z"
    fill="currentColor"
  />
  <path
    d="M7.05518 14.8921C5.95061 14.8921 5.05518 15.7875 5.05518 16.8921C5.05518 17.9967 5.95061 18.8921 7.05518 18.8921C8.15975 18.8921 9.05518 17.9967 9.05518 16.8921C9.05518 15.7875 8.15975 14.8921 7.05518 14.8921Z"
    fill="currentColor"
  />
  <path
    d="M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z"
    fill="currentColor"
  />
  <path
    d="M16.9451 9.97363C15.8405 9.97363 14.9451 10.8691 14.9451 11.9736C14.9451 13.0782 15.8405 13.9736 16.9451 13.9736C18.0496 13.9736 18.9451 13.0782 18.9451 11.9736C18.9451 10.8691 18.0496 9.97363 16.9451 9.97363Z"
    fill="currentColor"
  />
  <path
    d="M5.05518 11.9736C5.05518 10.8691 5.95061 9.97363 7.05518 9.97363C8.15975 9.97363 9.05518 10.8691 9.05518 11.9736C9.05518 13.0782 8.15975 13.9736 7.05518 13.9736C5.95061 13.9736 5.05518 13.0782 5.05518 11.9736Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z"
    fill="currentColor"
  />
</svg>`}],te=[{nr:234,name:"digitalocean",tags:"brands",css:'.gg-digitalocean{position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;background:linear-gradient(to left,currentColor 4px,transparent 0 ) no-repeat 1px 14px/2px 2px,linear-gradient(to left,currentColor 4px,transparent 0 ) no-repeat 3px 16px/3px 3px}.gg-digitalocean::after,.gg-digitalocean::before{content:"";display:block;position:absolute;box-sizing:border-box}.gg-digitalocean::after{width:4px;height:4px;background:currentColor;bottom:4px;left:6px}.gg-digitalocean::before{width:20px;height:20px;border:4px solid;transform:rotate(-45deg);border-radius:100px;border-left-color:transparent}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 6C8.68629 6 6 8.68629 6 12H1C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23V18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
    fill="currentColor"
  />
  <path d="M7 18V13H12V18H7Z" fill="currentColor" />
  <path d="M3 18V22H7V18H3Z" fill="currentColor" />
  <path d="M3 18H1V16H3V18Z" fill="currentColor" />
</svg>`}],ie=[{nr:235,name:"disc",tags:"multimedia",css:'.gg-disc,.gg-disc::after,.gg-disc::before{display:block;box-sizing:border-box;border:2px solid;border-radius:50%}.gg-disc{border-top-color:transparent;border-bottom-color:transparent;transform:rotate(45deg) scale(var(--ggs,1));position:relative;width:14px;height:14px}.gg-disc::after,.gg-disc::before{content:"";position:absolute;width:6px;height:6px;top:2px;left:2px}.gg-disc::after{width:22px;height:22px;border-radius:100%;top:-6px;left:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
    fill="currentColor"
  />
  <path
    d="M5 12C5 8.13401 8.13401 5 12 5V7C9.23858 7 7 9.23858 7 12H5Z"
    fill="currentColor"
  />
  <path
    d="M12 17C14.7614 17 17 14.7614 17 12H19C19 15.866 15.866 19 12 19V17Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
    fill="currentColor"
  />
</svg>`}],le=[{nr:236,name:"display-flex",tags:"design interface content",css:".gg-display-flex{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:16px;border:2px solid transparent;box-shadow:0 0 0 2px,inset -2px 0 0 0,inset 2px 0 0 0}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M6 17V7H8V17H6Z" fill="currentColor" />
  <path d="M16 7V17H18V7H16Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 3H22V21H2V3ZM4 5V19H20V5H4Z"
    fill="currentColor"
  />
</svg>`}],se=[{nr:237,name:"display-fullwidth",tags:"design interface content",css:".gg-display-fullwidth{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:16px;box-shadow:inset 0 0 0 2px,0 2px 0 0,0 -2px 0 0;border-top:2px solid transparent;border-bottom:2px solid transparent}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M2 5H22V3H2V5Z" fill="currentColor" />
  <path d="M2 21H22V19H2V21Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 7V17H22V7H2ZM4 9H20V15H4V9Z"
    fill="currentColor"
  />
</svg>`}],ge=[{nr:238,name:"display-grid",tags:"design interface content",css:'.gg-display-grid{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;border:2px solid transparent;box-shadow:0 0 0 2px}.gg-display-grid::after,.gg-display-grid::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:4px;border-right:4px solid;border-left:4px solid;top:0;left:0}.gg-display-grid::before{top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M7 7V11H11V7H7Z" fill="currentColor" />
  <path d="M13 7H17V11H13V7Z" fill="currentColor" />
  <path d="M13 13V17H17V13H13Z" fill="currentColor" />
  <path d="M7 13H11V17H7V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z"
    fill="currentColor"
  />
</svg>`}],pe=[{nr:239,name:"display-spacing",tags:"design interface content",css:".gg-display-spacing{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;box-shadow:inset 0 0 0 2px,2px 0 0 0,-2px 0 0 0;border-left:2px solid transparent;border-right:2px solid transparent}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M3 21V3H5V21H3Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 3H17V21H7V3ZM9 5V19H15V5H9Z"
    fill="currentColor"
  />
  <path d="M19 3V21H21V3H19Z" fill="currentColor" />
</svg>`}],ae=[{nr:240,name:"distribute-horizontal",tags:"design interface content",css:'.gg-distribute-horizontal{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;border-left:2px solid;border-right:2px solid}.gg-distribute-horizontal::after{content:"";display:block;box-sizing:border-box;position:absolute;height:8px;width:4px;background:currentColor;right:3px;top:3px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 9H13V15H11V9Z"
    stroke="currentColor"
    stroke-opacity="0.5"
    stroke-width="2"
  />
  <path d="M5 5V19H7V5H5Z" fill="currentColor" />
  <path d="M17 5V19H19V5H17Z" fill="currentColor" />
</svg>`}],de=[{nr:241,name:"distribute-vertical",tags:"design interface content",css:'.gg-distribute-vertical{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;border-top:2px solid;border-bottom:2px solid}.gg-distribute-vertical::after{content:"";display:block;box-sizing:border-box;position:absolute;height:4px;width:8px;background:currentColor;right:3px;top:3px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 11H15V13H9V11Z"
    stroke="currentColor"
    stroke-opacity="0.5"
    stroke-width="2"
  />
  <path d="M19 7H5V5H19V7Z" fill="currentColor" />
  <path d="M19 19H5V17H19V19Z" fill="currentColor" />
</svg>`}],xe=[{nr:242,name:"dock-bottom",tags:"interface",css:".gg-dock-bottom{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:20px;height:16px;border:2px solid;border-bottom-width:6px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 20V4H22V20H2ZM4 6H20V14H4V6Z"
    fill="currentColor"
  />
</svg>`}],be=[{nr:243,name:"dock-left",tags:"interface",css:".gg-dock-left{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:20px;height:16px;border:2px solid;border-left-width:6px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 4H22V20H2V4ZM8 6H20V18H8V6Z"
    fill="currentColor"
  />
</svg>`}],he=[{nr:244,name:"dock-right",tags:"interface",css:".gg-dock-right{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:20px;height:16px;border:2px solid;border-right-width:6px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 4H22V20H2V4ZM16 18V6H4V18H16Z"
    fill="currentColor"
  />
</svg>`}],ce=[{nr:245,name:"dock-window",tags:"interface",css:".gg-dock-window{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:20px;height:16px;border:2px solid;border-left-width:4px;border-bottom-width:4px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 20V4H22V20H2ZM20 6H6V16L20 16V6Z"
    fill="currentColor"
  />
</svg>`}],fe=[{nr:246,name:"dolby",tags:"brands",css:'.gg-dolby,.gg-dolby::after,.gg-dolby::before{display:block;box-sizing:border-box;height:16px;border:4px solid}.gg-dolby{position:relative;transform:scale(var(--ggs,1));width:24px}.gg-dolby::after,.gg-dolby::before{content:"";position:absolute;width:14px;top:-4px}.gg-dolby::before{border-top-right-radius:10px;border-bottom-right-radius:10px;left:-4px}.gg-dolby::after{border-top-left-radius:10px;border-bottom-left-radius:10px;right:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 4V20H24V4H0ZM10 12C10 9.79086 8.20914 8 6 8H4V16H6C8.20914 16 10 14.2091 10 12ZM18 16H20V8H18C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16Z"
    fill="currentColor"
  />
</svg>`}],Ce=[{nr:247,name:"dollar",tags:"signs",css:'.gg-dollar{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:20px;background:currentColor}.gg-dollar::after,.gg-dollar::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:8px;border:2px solid}.gg-dollar::before{border-right:0;border-top-left-radius:100px;border-bottom-left-radius:100px;top:3px;left:-6px;box-shadow:4px -2px 0 -2px}.gg-dollar::after{border-left:0;border-top-right-radius:100px;border-bottom-right-radius:100px;bottom:3px;right:-6px;box-shadow:-4px 2px 0 -2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 19V22H13V19H14C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11H13V7H15V9H17V5H13V2H11V5H10C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13H11V17H9V15H7V19H11ZM13 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13H13V17ZM11 11V7H10C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11H11Z"
    fill="currentColor"
  />
</svg>`}],we=[{nr:248,name:"dribbble",tags:"brands",css:'.gg-dribbble{background:radial-gradient(circle at 50%,transparent 0,transparent 9px,currentColor 9.2px,currentColor 11px,transparent 11.2px)no-repeat -8px center;box-sizing:border-box;position:relative;display:block;transform:rotate(-25deg)scale(var(--ggs,1));width:22px;height:22px;box-shadow:inset 0 0 0 2px;border-radius:50%;overflow:hidden}.gg-dribbble::after,.gg-dribbble::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:50%;border:2px solid;height:26px}.gg-dribbble::before{width:36px;left:-6px;top:-15px}.gg-dribbble::after{top:13px;left:-7px;width:31px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z"
    fill="currentColor"
  />
</svg>`}],ue=[{nr:249,name:"drive",tags:"devices files",css:'.gg-drive{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:26px;height:10px;border:2px solid;border-radius:2px}.gg-drive::after,.gg-drive::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;border-radius:10px;background:currentColor;top:2px;right:2px}.gg-drive::before{right:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8C0.895431 8 0 8.89543 0 10V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V10C24 8.89543 23.1046 8 22 8H2ZM22 10H2L2 14H22V10Z"
    fill="currentColor"
  />
</svg>`}],ve=[{nr:250,name:"drop-invert",tags:"interface",css:'.gg-drop-invert{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:16px;height:16px;border-radius:0 100% 100% 100%;box-shadow:inset 0 0 0 2px;overflow:hidden}.gg-drop-invert::before{content:"";display:block;position:absolute;box-sizing:border-box;width:24px;height:24px;background:currentColor;transform:rotate(-45deg);right:-15px;top:-10px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.0001 1.13611L5.63604 7.50002C2.12132 11.0147 2.12132 16.7132 5.63604 20.2279C7.39343 21.9853 9.69679 22.864 12.0001 22.864C12.288 22.864 12.5759 22.8502 12.8627 22.8228C14.8706 22.6306 16.8264 21.7657 18.3641 20.2279C21.8788 16.7132 21.8788 11.0147 18.3641 7.50002L12.0001 1.13611ZM7.05025 8.91423L12 3.96448L12.0001 20.864C10.2086 20.864 8.41711 20.1806 7.05025 18.8137C4.31658 16.0801 4.31658 11.6479 7.05025 8.91423Z"
    fill="currentColor"
  />
</svg>`}],me=[{nr:251,name:"drop-opacity",tags:"interface",css:'.gg-drop-opacity{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:16px;height:16px;border-radius:0 100% 100% 100%;box-shadow:inset 0 0 0 2px;overflow:hidden}.gg-drop-opacity::before{content:"";display:block;position:absolute;box-sizing:border-box;width:24px;height:24px;background:currentColor;transform:rotate(-45deg);right:-10px;bottom:-16px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15.9451 21.9559C12.5884 23.5927 8.42477 23.0167 5.63598 20.2279C2.12126 16.7132 2.12126 11.0147 5.63598 7.49995L11.9999 1.13599L18.3639 7.49995C19.2521 8.38814 19.9158 9.41578 20.3551 10.5124C21.6543 13.7553 20.9906 17.6012 18.364 20.2278C17.6381 20.9538 16.8189 21.5298 15.9451 21.9559ZM7.05019 8.91416L11.9999 3.96441L16.9497 8.91416C18.274 10.2385 18.9568 11.9615 18.998 13.6968H5.00192C5.04309 11.9615 5.72585 10.2385 7.05019 8.91416Z"
    fill="currentColor"
  />
</svg>`}],He=[{nr:252,name:"drop",tags:"design interface",css:".gg-drop{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:16px;height:16px;border-radius:0 100% 100% 100%;box-shadow:inset 0 0 0 2px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.34315 19.5208C3.21895 16.3966 3.21895 11.3312 6.34315 8.20705L12 2.5502L17.6569 8.20705C20.781 11.3312 20.781 16.3966 17.6569 19.5208C14.5327 22.645 9.46734 22.645 6.34315 19.5208Z"
    stroke="currentColor"
    stroke-width="2"
  />
</svg>`}],Ve=[{nr:253,name:"duplicate",tags:"content",css:'.gg-duplicate{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid transparent;border-bottom:4px solid transparent;box-shadow:0 0 0 2px,inset 0 -2px 0 0;margin-left:-4px;margin-top:4px}.gg-duplicate::after,.gg-duplicate::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-duplicate::before{background:currentColor;left:2px;bottom:-2px;width:2px;height:6px}.gg-duplicate::after{width:14px;height:14px;border-right:2px solid;border-top:2px solid;right:-8px;top:-8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M19 5H7V3H21V17H19V5Z" fill="currentColor" />
  <path d="M9 13V11H11V13H13V15H11V17H9V15H7V13H9Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 7H17V21H3V7ZM5 9H15V19H5V9Z"
    fill="currentColor"
  />
</svg>`}],Le=[{nr:254,name:"edit-black-point",tags:"interface design",css:'.gg-edit-black-point{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}.gg-edit-black-point::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:3px solid;border-radius:6px;left:2px;top:2px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"
    fill="currentColor"
  />
</svg>`}],Me=[{nr:255,name:"edit-contrast",tags:"design interface buttons",css:'.gg-edit-contrast{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}.gg-edit-contrast::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:12px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 18C10.4633 18 9.06151 17.4223 8 16.4722C6.7725 15.3736 6 13.777 6 12C6 10.223 6.7725 8.62643 8 7.52779C9.06151 6.57771 10.4633 6 12 6V18Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
    fill="currentColor"
  />
</svg>`}],Ze=[{nr:256,name:"edit-exposure",tags:"interface design",css:'.gg-edit-exposure{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}.gg-edit-exposure::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:8px;border-top:2px solid;border-bottom:2px solid;left:3px;top:3px;}.gg-edit-exposure::after{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:6px;background:currentColor;left:5px;top:1px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 7V9H9V11H11V13H13V11H15V9H13V7H11ZM9 15V17H15V15H9Z"
    fill="currentColor"
  />
</svg>`}],ke=[{nr:257,name:"edit-fade",tags:"design interface",css:'.gg-edit-fade{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}.gg-edit-fade::after,.gg-edit-fade::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:20px;left:-2px;background:currentColor;opacity:.6}.gg-edit-fade::before{left:6px;opacity:.1}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 12C8 10.5194 8.8044 9.22675 10 8.53513V15.4649C8.8044 14.7733 8 13.4806 8 12Z"
    stroke="currentColor"
    stroke-opacity="0.3"
    stroke-width="4"
  />
  <path
    d="M14 15.4649V8.53513C15.1956 9.22675 16 10.5194 16 12C16 13.4806 15.1956 14.7733 14 15.4649Z"
    stroke="currentColor"
    stroke-opacity="0.6"
    stroke-width="4"
  />
  <path
    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
    stroke="currentColor"
    stroke-width="2"
  />
</svg>`}],ye=[{nr:258,name:"edit-flip-h",tags:"interface",css:'.gg-edit-flip-h{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient( to left,currentColor 22px,transparent 0) no-repeat center/2px 22px}.gg-edit-flip-h::after,.gg-edit-flip-h::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;border:2px solid;top:2px}.gg-edit-flip-h::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px}.gg-edit-flip-h::after{opacity:.5;border-left:0;border-top-right-radius:3px;border-bottom-right-radius:3px;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18 7C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H15V19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H15V7H18Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path d="M13 3H11V21H13V3Z" fill="currentColor" />
  <path
    d="M5 8C5 7.44772 5.44772 7 6 7H9V5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H9V17H6C5.44772 17 5 16.5523 5 16V8Z"
    fill="currentColor"
  />
</svg>`}],ze=[{nr:259,name:"edit-flip-v",tags:"interface",css:'.gg-edit-flip-v{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient( to left,currentColor 22px,transparent 0) no-repeat center/22px 2px}.gg-edit-flip-v::after,.gg-edit-flip-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:6px;border:2px solid;left:2px}.gg-edit-flip-v::before{border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px}.gg-edit-flip-v::after{opacity:.5;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17 18C17 18.5523 16.5523 19 16 19L8 19C7.44772 19 7 18.5523 7 18L7 15L5 15L5 18C5 19.6569 6.34315 21 8 21L16 21C17.6569 21 19 19.6569 19 18V15L17 15V18Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    d="M16 5C16.5523 5 17 5.44772 17 6V9H19V6C19 4.34315 17.6569 3 16 3L8 3C6.34315 3 5 4.34315 5 6V9H7V6C7 5.44772 7.44772 5 8 5L16 5Z"
    fill="currentColor"
  />
  <path d="M21 13V11L3 11V13H21Z" fill="currentColor" />
</svg>`}],Be=[{nr:260,name:"edit-highlight",tags:"interface design",css:'.gg-edit-highlight{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}.gg-edit-highlight::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;top:-1px;background:repeating-linear-gradient( to bottom,currentColor,currentColor 2px,transparent 0px,transparent 3px)}.gg-edit-highlight::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;right:0;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 6C10.7785 6 9.64223 6.36502 8.69435 6.99194H12V7.99194H7.53501C7.00911 8.57742 6.59669 9.26689 6.33237 10.0258H12V11.0258H6.07869C6.02692 11.3428 6 11.6683 6 12C6 12.3379 6.02793 12.6693 6.08161 12.9919H12V13.9919H6.33857C6.60189 14.7404 7.00941 15.4208 7.52779 16H12V17H8.68221C9.63251 17.6318 10.7733 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
    fill="currentColor"
  />
</svg>`}],qe=[{nr:261,name:"edit-markup",tags:"design interface buttons",css:'.gg-edit-markup{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:22px;overflow:hidden;perspective:20px}.gg-edit-markup::after,.gg-edit-markup::before{content:"";display:block;position:absolute;box-sizing:border-box}.gg-edit-markup::before{width:0;height:6px;border-bottom:6px solid;border-left:3px solid transparent;border-right:3px solid transparent;bottom:9px;left:6px}.gg-edit-markup::after{width:10px;height:12px;border:2px solid;border-top:4px solid;border-bottom:0;bottom:0;left:4px;transform:rotateX(60deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.5793 19.531C20.6758 17.698 22 15.0036 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.9616 3.28743 17.6225 5.33317 19.4535L6.99999 10.9738H9.17026L12 6.07251L14.8297 10.9738H17L18.5793 19.531ZM16.0919 21.1272L15.2056 12.9738H8.79438L7.90814 21.1272C9.15715 21.688 10.5421 22 12 22C13.4579 22 14.8428 21.688 16.0919 21.1272Z"
    fill="currentColor"
  />
</svg>`}],Xe=[{nr:262,name:"edit-mask",tags:"design interface buttons",css:'.gg-edit-mask,.gg-edit-mask::after{display:block;box-sizing:border-box;border-radius:22px}.gg-edit-mask{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;overflow:hidden}.gg-edit-mask::after{content:"";position:absolute;width:4px;height:4px;background:currentColor;top:6px;left:6px;box-shadow:0 7px 0 1px,0 -7px 0 1px,-7px 0 0 1px,7px 0 0 1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 22C6.47716 22 2 17.5228 2 12C2 6.47717 6.47716 2 12 2C17.5228 2 22 6.47717 22 12C22 17.5228 17.5228 22 12 22ZM9.0307 19.4308C9.01047 19.29 9 19.1462 9 19C9 17.3431 10.3431 16 12 16C13.6569 16 15 17.3431 15 19C15 19.1462 14.9895 19.29 14.9693 19.4308C16.9993 18.6189 18.619 16.9993 19.4308 14.9692C19.2901 14.9895 19.1463 15 19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9C19.0637 9 19.127 9.00195 19.1897 9.00586C19.271 9.01099 19.3514 9.01929 19.4308 9.03076C18.6189 7.00073 16.9993 5.3811 14.9693 4.56921C14.9895 4.70996 15 4.85376 15 5C15 6.65686 13.6569 8 12 8C10.3431 8 9 6.65686 9 5C9 4.85376 9.01048 4.70996 9.03072 4.56921C7.0007 5.3811 5.38106 7.00073 4.56915 9.03076C4.64857 9.01929 4.729 9.01099 4.8103 9.00586C4.87303 9.00195 4.93628 9 5 9C6.65686 9 8 10.3431 8 12C8 13.6569 6.65686 15 5 15C4.8537 15 4.70985 14.9895 4.56915 14.9692C5.38104 16.9993 7.00069 18.6189 9.0307 19.4308Z"
    fill="currentColor"
  />
</svg>`}],Ie=[{nr:263,name:"edit-noise",tags:"interface design",css:'.gg-edit-noise{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}.gg-edit-noise::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;background-image:radial-gradient(circle,currentColor 25%,transparent 25%),radial-gradient(circle,currentColor 25%,transparent 25%);background-position:4px 4px,2px 2px;background-size:4px 4px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.4044 17.7657C10.419 17.7803 10.4329 17.7953 10.446 17.8108C10.1948 17.7439 9.95005 17.661 9.71293 17.5634C9.95429 17.5106 10.2167 17.578 10.4044 17.7657Z"
    fill="currentColor"
  />
  <path
    d="M8.43574 16.705C8.40862 16.7321 8.37994 16.7567 8.34999 16.7788C7.95661 16.4775 7.60163 16.1285 7.29364 15.7406C7.31765 15.7068 7.3448 15.6746 7.37508 15.6443C7.66797 15.3514 8.14285 15.3514 8.43574 15.6443C8.72863 15.9372 8.72863 16.4121 8.43574 16.705Z"
    fill="currentColor"
  />
  <path
    d="M6.37104 13.6475C6.59701 13.8735 6.64864 14.2077 6.52594 14.4832C6.38527 14.1723 6.27034 13.8472 6.18387 13.5107C6.25129 13.5454 6.31455 13.591 6.37104 13.6475Z"
    fill="currentColor"
  />
  <path
    d="M6.37104 10.6753C6.29401 10.7523 6.2044 10.8091 6.10883 10.8456C6.18637 10.4523 6.30234 10.0728 6.45268 9.71119C6.66079 10.004 6.63357 10.4128 6.37104 10.6753Z"
    fill="currentColor"
  />
  <path
    d="M7.37508 8.70669C7.28995 8.62156 7.22957 8.52106 7.19392 8.41413C7.45907 8.06093 7.76228 7.73793 8.09747 7.45124C8.22139 7.48394 8.33858 7.54887 8.43574 7.64603C8.72863 7.93892 8.72863 8.41379 8.43574 8.70669C8.14285 8.99958 7.66797 8.99958 7.37508 8.70669Z"
    fill="currentColor"
  />
  <path
    d="M9.34371 6.76662C9.31335 6.73627 9.28614 6.70396 9.26208 6.6701C9.6881 6.45171 10.1437 6.28277 10.6212 6.17088C10.6397 6.38399 10.5675 6.60352 10.4044 6.76662C10.1115 7.05952 9.6366 7.05952 9.34371 6.76662Z"
    fill="currentColor"
  />
  <path
    d="M13.2872 17.8734C13.5967 17.8055 13.8973 17.7136 14.1868 17.6C13.9165 17.4914 13.5957 17.5466 13.3766 17.7657C13.3429 17.7993 13.3131 17.8354 13.2872 17.8734Z"
    fill="currentColor"
  />
  <path
    d="M15.5312 16.8608C15.935 16.5658 16.3005 16.2216 16.619 15.8369C16.6005 15.8133 16.5803 15.7906 16.5586 15.7688C16.2657 15.4759 15.7908 15.4759 15.4979 15.7688C15.205 16.0617 15.205 16.5366 15.4979 16.8295C15.5088 16.8403 15.5199 16.8508 15.5312 16.8608Z"
    fill="currentColor"
  />
  <path
    d="M17.3654 14.6921C17.5637 14.2953 17.7194 13.8735 17.8264 13.4326C17.6636 13.451 17.5058 13.5227 17.3809 13.6475C17.0933 13.9351 17.0881 14.3982 17.3654 14.6921Z"
    fill="currentColor"
  />
  <path
    d="M17.8911 10.8934C17.8032 10.4272 17.6613 9.98016 17.4722 9.55885C17.4507 9.57609 17.4299 9.59469 17.4099 9.61465C17.117 9.90755 17.117 10.3824 17.4099 10.6753C17.5439 10.8093 17.7159 10.882 17.8911 10.8934Z"
    fill="currentColor"
  />
  <path
    d="M16.7556 8.35985C16.4971 8.02355 16.2038 7.71542 15.8811 7.44086C15.7407 7.46881 15.6068 7.5372 15.4979 7.64603C15.205 7.93892 15.205 8.41379 15.4979 8.70669C15.7908 8.99958 16.2657 8.99958 16.5586 8.70669C16.658 8.60729 16.7237 8.48694 16.7556 8.35985Z"
    fill="currentColor"
  />
  <path
    d="M14.4373 6.76662C14.4906 6.71331 14.5342 6.65397 14.5681 6.59079C14.1273 6.38127 13.6569 6.22392 13.1649 6.12671C13.1317 6.35331 13.2022 6.59223 13.3766 6.76662C13.6695 7.05952 14.1444 7.05952 14.4373 6.76662Z"
    fill="currentColor"
  />
  <path
    d="M12.5257 7.64603C12.8186 7.93892 12.8186 8.41379 12.5257 8.70669C12.2328 8.99958 11.7579 8.99958 11.465 8.70669C11.1721 8.41379 11.1721 7.93892 11.465 7.64603C11.7579 7.35313 12.2328 7.35313 12.5257 7.64603Z"
    fill="currentColor"
  />
  <path
    d="M10.4044 9.61465C10.6973 9.90755 10.6973 10.3824 10.4044 10.6753C10.1115 10.9682 9.6366 10.9682 9.34371 10.6753C9.05081 10.3824 9.05081 9.90755 9.34371 9.61465C9.6366 9.32176 10.1115 9.32176 10.4044 9.61465Z"
    fill="currentColor"
  />
  <path
    d="M8.43574 12.7967C8.72863 12.5038 8.72863 12.0289 8.43574 11.736C8.14285 11.4431 7.66797 11.4431 7.37508 11.736C7.08218 12.0289 7.08218 12.5038 7.37508 12.7967C7.66797 13.0895 8.14285 13.0895 8.43574 12.7967Z"
    fill="currentColor"
  />
  <path
    d="M10.4044 13.6475C10.6973 13.9404 10.6973 14.4153 10.4044 14.7082C10.1115 15.001 9.6366 15.001 9.34371 14.7082C9.05081 14.4153 9.05081 13.9404 9.34371 13.6475C9.6366 13.3546 10.1115 13.3546 10.4044 13.6475Z"
    fill="currentColor"
  />
  <path
    d="M12.5257 12.7967C12.8186 12.5038 12.8186 12.0289 12.5257 11.736C12.2328 11.4431 11.7579 11.4431 11.465 11.736C11.1721 12.0289 11.1721 12.5038 11.465 12.7967C11.7579 13.0895 12.2328 13.0895 12.5257 12.7967Z"
    fill="currentColor"
  />
  <path
    d="M14.4373 9.61465C14.7302 9.90755 14.7302 10.3824 14.4373 10.6753C14.1444 10.9682 13.6695 10.9682 13.3766 10.6753C13.0837 10.3824 13.0837 9.90755 13.3766 9.61465C13.6695 9.32176 14.1444 9.32176 14.4373 9.61465Z"
    fill="currentColor"
  />
  <path
    d="M16.5586 12.7681C16.8515 12.4752 16.8515 12.0003 16.5586 11.7074C16.2657 11.4145 15.7908 11.4145 15.4979 11.7074C15.205 12.0003 15.205 12.4752 15.4979 12.7681C15.7908 13.061 16.2657 13.061 16.5586 12.7681Z"
    fill="currentColor"
  />
  <path
    d="M14.423 13.6902C14.7159 13.9831 14.7159 14.458 14.423 14.7509C14.1301 15.0438 13.6552 15.0438 13.3623 14.7509C13.0694 14.458 13.0694 13.9831 13.3623 13.6902C13.6552 13.3973 14.1301 13.3973 14.423 13.6902Z"
    fill="currentColor"
  />
  <path
    d="M12.3159 16.705C12.6088 16.4121 12.6088 15.9372 12.3159 15.6443C12.023 15.3514 11.5482 15.3514 11.2553 15.6443C10.9624 15.9372 10.9624 16.4121 11.2553 16.705C11.5482 16.9979 12.023 16.9979 12.3159 16.705Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],Se=[{nr:264,name:"edit-shadows",tags:"interface design",css:'.gg-edit-shadows{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}.gg-edit-shadows::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;right:0;top:-1px;background:repeating-linear-gradient( to bottom,currentColor,currentColor 2px,transparent 0px,transparent 3px)}.gg-edit-shadows::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;left:0;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.3056 6.99194C14.3578 6.36502 13.2215 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.2267 18 14.3675 17.6318 15.3178 17H12V16H16.4722C16.9906 15.4208 17.3981 14.7404 17.6614 13.9919H12V12.9919H17.9184C17.9721 12.6693 18 12.3379 18 12C18 11.6683 17.9731 11.3428 17.9213 11.0258H12V10.0258H17.6676C17.4033 9.26689 16.9909 8.57742 16.465 7.99194H12V6.99194H15.3056Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
    fill="currentColor"
  />
</svg>`}],Ye=[{nr:265,name:"edit-straight",tags:"interface",css:'.gg-edit-straight{box-sizing:border-box;position:relative;display:block;width:22px;height:16px;transform:scale(var(--ggs,1));background:linear-gradient( to left,currentColor 22px,transparent 0) no-repeat left center/4px 2px,linear-gradient( to left,currentColor 22px,transparent 0) no-repeat right center/4px 2px}.gg-edit-straight::after,.gg-edit-straight::before{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:7px;background:currentColor;left:4px}.gg-edit-straight::before{border-top-left-radius:10px;border-top-right-radius:10px}.gg-edit-straight::after{border-bottom-left-radius:10px;border-bottom-right-radius:10px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 4C15.866 4 19 7.13401 19 11H5C5 7.13401 8.13401 4 12 4Z"
    fill="currentColor"
  />
  <path d="M5 13H1V11H5V13Z" fill="currentColor" />
  <path
    d="M19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13H19Z"
    fill="currentColor"
  />
  <path d="M19 13V11H23V13H19Z" fill="currentColor" />
</svg>`}],je=[{nr:266,name:"edit-unmask",tags:"design interface buttons",css:'.gg-edit-unmask,.gg-edit-unmask::after{display:block;box-sizing:border-box;border-radius:22px}.gg-edit-unmask{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid transparent}.gg-edit-unmask::after{content:"";position:absolute;width:4px;height:4px;background:currentColor;top:6px;left:6px;box-shadow:0 7px 0 1px,0 -7px 0 1px,-7px 0 0 1px,7px 0 0 1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
    fill="currentColor"
  />
  <path
    d="M22 12C22 13.6569 20.6569 15 19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9C20.6569 9 22 10.3431 22 12Z"
    fill="currentColor"
  />
  <path
    d="M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15Z"
    fill="currentColor"
  />
</svg>`}],Ae=[{nr:267,name:"eject",tags:"interface arrows",css:'.gg-eject{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-eject::after,.gg-eject::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-eject::before{border-bottom:2px solid;width:12px;height:2px;bottom:0;left:3px}.gg-eject::after{width:8px;height:8px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);left:5px;bottom:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.9498 14.3948L18.364 12.9805L12 6.61658L5.63605 12.9805L7.05026 14.3948L12 9.445L16.9498 14.3948Z"
    fill="currentColor"
  />
  <path d="M6.00014 17.3835H18.0001V15.3835H6.00014V17.3835Z" fill="currentColor" />
</svg>`}],Ue=[{nr:268,name:"enter",tags:"interface arrows",css:'.gg-enter{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:18px;border:2px solid;border-left:0;box-shadow:-8px -6px 0 -6px,-8px 6px 0 -6px}.gg-enter::after,.gg-enter::before{content:"";display:block;box-sizing:border-box;position:absolute;right:4px}.gg-enter::before{background:currentColor;width:16px;height:2px;top:6px}.gg-enter::after{width:6px;height:6px;border-right:2px solid;border-top:2px solid;top:4px;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z" fill="currentColor" />
  <path
    d="M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z"
    fill="currentColor"
  />
</svg>`}],De=[{nr:269,name:"erase",tags:"content interface",css:'.gg-erase{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px}.gg-erase::after,.gg-erase::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-erase::before{width:6px;height:14px;border-bottom:4px solid transparent;border-radius:1px;box-shadow:0 0 0 2px,inset 0 -2px 0 0;left:7px;top:2px;transform:rotate(45deg)}.gg-erase::after{background:currentColor;width:22px;height:2px;bottom:0;border-radius:20px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.49997 12.8995C2.71892 13.6805 2.71892 14.9468 3.49997 15.7279L7.35785 19.5858H4.08576C3.53347 19.5858 3.08576 20.0335 3.08576 20.5858C3.08576 21.1381 3.53347 21.5858 4.08576 21.5858H20.0858C20.638 21.5858 21.0858 21.1381 21.0858 20.5858C21.0858 20.0335 20.638 19.5858 20.0858 19.5858H10.9558L20.4705 10.071C21.2516 9.28999 21.2516 8.02366 20.4705 7.24261L16.2279 2.99997C15.4468 2.21892 14.1805 2.21892 13.3995 2.99997L3.49997 12.8995ZM7.82579 11.4021L4.91418 14.3137L9.15683 18.5563L12.0684 15.6447L7.82579 11.4021ZM9.24 9.98787L13.4826 14.2305L19.0563 8.65683L14.8137 4.41418L9.24 9.98787Z"
    fill="currentColor"
  />
</svg>`}],Pe=[{nr:270,name:"ereader",tags:"devices multimedia",css:'.gg-ereader{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border:2px solid;border-radius:3px}.gg-ereader::after,.gg-ereader::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:18px;right:9px;top:-2px;background:currentColor}.gg-ereader::after{width:5px;height:2px;box-shadow:0 4px 0,0 8px 0;top:2px;right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7H16Z"
    fill="currentColor"
  />
  <path
    d="M15 12C15 11.4477 15.4477 11 16 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H16C15.4477 13 15 12.5523 15 12Z"
    fill="currentColor"
  />
  <path
    d="M16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H13V19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5ZM3 5H11V19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5Z"
    fill="currentColor"
  />
</svg>`}],Ge=[{nr:271,name:"ericsson",tags:"interface",css:'.gg-ericsson,.gg-ericsson::before{display:block;box-sizing:border-box}.gg-ericsson{position:relative;transform:scale(var(--ggs,1));width:14px;height:16px}.gg-ericsson::before{content:"";position:absolute;background:currentColor;transform:rotate(-25deg);width:16px;height:4px;border-radius:4px;box-shadow:3px -6px 0,-3px 6px 0;top:7px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.71689 5.72315C6.71581 6.18996 6.2827 7.37992 6.74951 8.381C7.21632 9.38208 8.40628 9.81519 9.40736 9.34838L20.2831 4.27696C21.2841 3.81015 21.7172 2.62019 21.2504 1.61911C20.7836 0.618028 19.5937 0.184918 18.5926 0.651729L7.71689 5.72315Z"
    fill="currentColor"
  />
  <path
    d="M4.74951 15.381C4.2827 14.3799 4.71581 13.19 5.71689 12.7231L16.5926 7.65173C17.5937 7.18492 18.7836 7.61803 19.2504 8.61911C19.7172 9.62019 19.2841 10.8101 18.2831 11.277L7.40736 16.3484C6.40628 16.8152 5.21632 16.3821 4.74951 15.381Z"
    fill="currentColor"
  />
  <path
    d="M2.74951 22.381C2.2827 21.3799 2.71581 20.19 3.71689 19.7231L14.5926 14.6517C15.5937 14.1849 16.7836 14.618 17.2504 15.6191C17.7172 16.6202 17.2841 17.8101 16.2831 18.277L5.40736 23.3484C4.40628 23.8152 3.21632 23.3821 2.74951 22.381Z"
    fill="currentColor"
  />
</svg>`}],Te=[{nr:272,name:"ethernet",tags:"interface",css:'.gg-ethernet{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;box-shadow:0 10px 0 -7px}.gg-ethernet::after,.gg-ethernet::before{content:"";display:block;box-sizing:border-box;position:absolute;top:6px}.gg-ethernet::before{width:8px;height:8px;border:2px solid;border-top:0;left:2px}.gg-ethernet::after{width:16px;height:2px;border-left:6px solid;border-right:6px solid;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 0.5V20.5H11V23.5H13V20.5H20V0.5H4ZM18 2.5H6V8.5H10V14.5H14V8.5H18V2.5ZM6 18.5V10.5H8V16.5H16V10.5H18V18.5H6Z"
    fill="currentColor"
  />
</svg>`}],$e=[{nr:273,name:"euro",tags:"signs",css:'.gg-euro{position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;box-sizing:border-box;border-radius:100px;border-right-color:transparent}.gg-euro::after{content:"";display:block;box-sizing:border-box;position:absolute;width:9px;height:5px;border-top:2px solid;border-bottom:2px solid;transform:skewX(-20deg);left:-4px;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.5535 15.5355C17.6487 16.4404 16.3987 17 15.018 17C13.1416 17 11.5066 15.9664 10.6513 14.4374H13.0323L13.7284 12.5625H10.0493C10.0286 12.3779 10.018 12.1902 10.018 12C10.018 11.8098 10.0286 11.6221 10.0493 11.4374H14.3362L15.0324 9.5625H10.6514C11.5066 8.0336 13.1416 7 15.018 7C16.3987 7 17.6487 7.55964 18.5535 8.46447L19.9677 7.05025C18.701 5.7835 16.951 5 15.018 5C12.0092 5 9.44381 6.89827 8.45407 9.5625H6.03241L5.33624 11.4374H8.04028C8.02552 11.623 8.018 11.8106 8.018 12C8.018 12.1894 8.02552 12.3769 8.04027 12.5625H4.72845L4.03229 14.4374H8.45404C9.44377 17.1017 12.0092 19 15.018 19C16.951 19 18.701 18.2165 19.9677 16.9497L18.5535 15.5355Z"
    fill="currentColor"
  />
</svg>`}],Oe=[{nr:274,name:"eventbrite",tags:"brands",css:'.gg-eventbrite{display:block;position:relative;box-sizing:border-box;transform:rotate(-25deg) scale(var(--ggs,1));width:20px;height:20px;}.gg-eventbrite::before{content:"";display:block;box-sizing:border-box;position:absolute;width:18px;height:11px;border:4px solid;border-top-right-radius:20px;border-top-left-radius:20px;}.gg-eventbrite::after{content:"";display:block;box-sizing:border-box;position:absolute;width:18px;height:18px;border:4px solid;border-top-color:transparent;border-right-color:transparent;border-radius:20px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.6734 17.4378C12.3057 18.5419 9.5858 17.9679 7.85444 16.2039L21.8647 9.67074C21.7105 9.02969 21.4902 8.39446 21.2008 7.77376C18.8667 2.76836 12.9169 0.602811 7.91152 2.93687C2.90612 5.27092 0.740567 11.2207 3.07462 16.2261C5.40868 21.2315 11.3585 23.3971 16.3639 21.063C19.016 19.8263 20.8708 17.5746 21.6815 14.986H17.3424C16.7484 16.0235 15.8393 16.8941 14.6734 17.4378ZM9.60199 6.5621C7.23436 7.66615 5.92572 10.1185 6.16403 12.5786L16.4208 7.79583C14.6894 6.03194 11.9696 5.45805 9.60199 6.5621Z"
    fill="currentColor"
  />
</svg>`}],Ee=[{nr:275,name:"expand",tags:"interface arrows",css:'.gg-expand{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:6px;border-bottom:2px solid;border-left:2px solid}.gg-expand::after,.gg-expand::before{content:"";display:block;box-sizing:border-box;position:absolute;}.gg-expand::after{background:currentColor;bottom:4px;transform:rotate(-44deg);width:14px;height:2px;left:-2px}.gg-expand::before{width:6px;height:6px;border-top:2px solid;border-right:2px solid;left:5px;top:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.3062 16.5933L12.2713 18.593L5.2724 18.4708L5.39457 11.4719L7.39426 11.5068L7.33168 15.092L15.2262 7.46833L11.6938 7.40668L11.7287 5.40698L18.7277 5.52915L18.6055 12.5281L16.6058 12.4932L16.6693 8.85507L8.72095 16.5307L12.3062 16.5933Z"
    fill="currentColor"
  />
</svg>`}],Fe=[{nr:276,name:"export",tags:"interface arrows",css:'.gg-export{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid;border-top:0;box-shadow:-6px -8px 0 -6px,6px -8px 0 -6px}.gg-export::after,.gg-export::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-export::before{background:currentColor;width:2px;height:14px;right:6px;bottom:5px}.gg-export::after{width:6px;height:6px;border-left:2px solid;border-top:2px solid;right:4px;bottom:14px;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.9498 5.96781L15.5356 7.38203L13 4.84646V17.0421H11V4.84653L8.46451 7.38203L7.05029 5.96781L12 1.01807L16.9498 5.96781Z"
    fill="currentColor"
  />
  <path
    d="M5 20.9819V10.9819H9V8.98193H3V22.9819H21V8.98193H15V10.9819H19V20.9819H5Z"
    fill="currentColor"
  />
</svg>`}],Ne=[{nr:277,name:"extension-add",tags:"interface content",css:'.gg-extension-add{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 10px 2px/6px 2px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 12px 0/2px 6px;width:16px;height:16px}.gg-extension-add::after,.gg-extension-add::before{content:"";display:block;position:absolute;box-sizing:border-box;width:8px;height:14px;border:2px solid;bottom:0}.gg-extension-add::after{width:14px;height:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16 4H18V6H20V8H18V10H16V8H14V6H16V4Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 12V6H4V20H18V12H12ZM6 8H10V12H6V8ZM10 14V18H6V14H10ZM16 14V18H12V14H16Z"
    fill="currentColor"
  />
</svg>`}],Je=[{nr:278,name:"extension-alt",tags:"interface",css:'.gg-extension-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-extension-alt::after,.gg-extension-alt::before{content:"";display:block;position:absolute;box-sizing:border-box;width:8px;height:14px;border:2px solid}.gg-extension-alt::after{width:14px;height:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 5V19H13V13H19V5H5ZM11 7H7V11H11V7ZM11 13H7V17H11V13ZM13 11H17V7H13V11Z"
    fill="currentColor"
  />
</svg>`}],Ke=[{nr:279,name:"extension-remove",tags:"interface content",css:'.gg-extension-remove{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 10px 4px/6px 2px;width:16px;height:16px}.gg-extension-remove::after,.gg-extension-remove::before{content:"";display:block;position:absolute;box-sizing:border-box;width:8px;height:14px;border:2px solid;bottom:0}.gg-extension-remove::after{width:14px;height:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 11V5H4V19H18V11H12ZM6 7H10V11H6V7ZM10 13V17H6V13H10ZM16 13V17H12V13H16Z"
    fill="currentColor"
  />
  <path d="M20 7H14V9H20V7Z" fill="currentColor" />
</svg>`}],Qe=[{nr:280,name:"extension",tags:"interface content",css:'.gg-extension,.gg-extension::after,.gg-extension::before{box-sizing:border-box;display:block;border:2px solid}.gg-extension{position:relative;transform:translateX(-10px) scale(var(--ggs,1));width:8px;height:14px}.gg-extension::after,.gg-extension::before{content:"";position:absolute;height:8px}.gg-extension::before{bottom:-2px;left:-2px;width:14px}.gg-extension::after{top:-6px;right:-12px;width:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 3H21V11H13V3ZM15 5H19V9H15V5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 21V13H11V7H3V21H17ZM9 9H5V13H9V9ZM5 19L5 15H9V19H5ZM11 19V15H15V19H11Z"
    fill="currentColor"
  />
</svg>`}],Re=[{nr:281,name:"external",tags:"interface arrows",css:'.gg-external{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;box-shadow:-2px 2px 0 0,-4px -4px 0 -2px,4px 4px 0 -2px;margin-left:-2px;margin-top:1px}.gg-external::after,.gg-external::before{content:"";display:block;box-sizing:border-box;position:absolute;right:-4px}.gg-external::before{background:currentColor;transform:rotate(-45deg);width:12px;height:2px;top:1px}.gg-external::after{width:8px;height:8px;border-right:2px solid;border-top:2px solid;top:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"
    fill="currentColor"
  />
  <path
    d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"
    fill="currentColor"
  />
</svg>`}],We=[{nr:282,name:"eye-alt",tags:"interface",css:'.gg-eye-alt{position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;overflow:hidden;box-sizing:border-box}.gg-eye-alt::after,.gg-eye-alt::before{content:"";display:block;border-radius:100px;position:absolute;box-sizing:border-box}.gg-eye-alt::after{top:2px;box-shadow:inset 0 -8px 0 2px,inset 0 0 0 2px;width:24px;height:24px}.gg-eye-alt::before{width:8px;height:8px;border:2px solid transparent;box-shadow:inset 0 0 0 6px,0 0 0 4px,6px 0 0 0,-6px 0 0 0 ;bottom:4px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3C6.40848 3 1.71018 6.82432 0.378052 12C1.71018 17.1757 6.40848 21 12 21C17.5915 21 22.2898 17.1757 23.6219 12C22.2898 6.82432 17.5915 3 12 3ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
    fill="currentColor"
  />
</svg>`}],_e=[{nr:283,name:"eye",tags:"signs interface design buttons",css:'.gg-eye{position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;overflow:hidden;box-sizing:border-box}.gg-eye::after,.gg-eye::before{content:"";display:block;border-radius:100px;position:absolute;box-sizing:border-box}.gg-eye::after{top:2px;box-shadow:inset 0 -8px 0 2px,inset 0 0 0 2px;width:24px;height:24px}.gg-eye::before{width:8px;height:8px;border:2px solid;bottom:4px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
    fill="currentColor"
  />
</svg>`}],on=[{nr:284,name:"facebook",tags:"brands",css:'.gg-facebook{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}.gg-facebook::after,.gg-facebook::before{content:"";display:block;position:absolute;box-sizing:border-box}.gg-facebook::before{width:8px;height:20px;border-left:4px solid;border-top:4px solid;border-top-left-radius:5px;left:6px}.gg-facebook::after{width:10px;height:4px;background:currentColor;top:7px;left:4px;transform:skew(-5deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
    fill="currentColor"
  />
</svg>`}],rn=[{nr:285,name:"feed",tags:"interface buttons",css:'.gg-feed,.gg-feed::after,.gg-feed::before{display:block;box-sizing:border-box;background:currentColor;box-shadow:0 10px 0 0}.gg-feed{margin-left:-8px;margin-top:-8px;position:relative;transform:scale(var(--ggs,1));width:7px;height:7px;border-radius:1px}.gg-feed::after,.gg-feed::before{content:"";position:absolute;border-radius:3px;width:12px;height:2px;top:1px;left:9px;opacity:.8}.gg-feed::after{width:8px;top:4px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.552 8C11.9997 8 11.552 8.44772 11.552 9C11.552 9.55228 11.9997 10 12.552 10H16.552C17.1043 10 17.552 9.55228 17.552 9C17.552 8.44772 17.1043 8 16.552 8H12.552Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    d="M12.552 17C11.9997 17 11.552 17.4477 11.552 18C11.552 18.5523 11.9997 19 12.552 19H16.552C17.1043 19 17.552 18.5523 17.552 18C17.552 17.4477 17.1043 17 16.552 17H12.552Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    d="M12.552 5C11.9997 5 11.552 5.44772 11.552 6C11.552 6.55228 11.9997 7 12.552 7H20.552C21.1043 7 21.552 6.55228 21.552 6C21.552 5.44772 21.1043 5 20.552 5H12.552Z"
    fill="currentColor"
    fill-opacity="0.8"
  />
  <path
    d="M12.552 14C11.9997 14 11.552 14.4477 11.552 15C11.552 15.5523 11.9997 16 12.552 16H20.552C21.1043 16 21.552 15.5523 21.552 15C21.552 14.4477 21.1043 14 20.552 14H12.552Z"
    fill="currentColor"
    fill-opacity="0.8"
  />
  <path
    d="M3.448 4.00208C2.89571 4.00208 2.448 4.44979 2.448 5.00208V10.0021C2.448 10.5544 2.89571 11.0021 3.448 11.0021H8.448C9.00028 11.0021 9.448 10.5544 9.448 10.0021V5.00208C9.448 4.44979 9.00028 4.00208 8.448 4.00208H3.448Z"
    fill="currentColor"
  />
  <path
    d="M3.448 12.9979C2.89571 12.9979 2.448 13.4456 2.448 13.9979V18.9979C2.448 19.5502 2.89571 19.9979 3.448 19.9979H8.448C9.00028 19.9979 9.448 19.5502 9.448 18.9979V13.9979C9.448 13.4456 9.00028 12.9979 8.448 12.9979H3.448Z"
    fill="currentColor"
  />
</svg>`}],en=[{nr:286,name:"figma",tags:"brands",css:'.gg-figma{box-sizing:border-box;position:relative;display:block;width:14px;height:20px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 3px,transparent 0) no-repeat 3px 7px/3px 6px,linear-gradient(to left,currentColor 3px,transparent 0) no-repeat 3px 14px/3px 3px}.gg-figma::after,.gg-figma::before{content:"";display:block;box-sizing:border-box;position:absolute;width:13px;height:6px;background:currentColor;border-radius:22px}.gg-figma::after{width:6px;top:7px;box-shadow:7px 0 0,0 7px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.5 2C6.84315 2 5.5 3.34315 5.5 5C5.5 6.65685 6.84315 8 8.5 8H15.5C17.1569 8 18.5 6.65685 18.5 5C18.5 3.34315 17.1569 2 15.5 2H8.5Z"
    fill="currentColor"
  />
  <path
    d="M15.5 9C13.8431 9 12.5 10.3431 12.5 12C12.5 13.6569 13.8431 15 15.5 15C17.1569 15 18.5 13.6569 18.5 12C18.5 10.3431 17.1569 9 15.5 9Z"
    fill="currentColor"
  />
  <path
    d="M5.5 12C5.5 10.3431 6.84315 9 8.5 9H11.5V15H8.5C6.84315 15 5.5 13.6569 5.5 12Z"
    fill="currentColor"
  />
  <path
    d="M8.5 16C6.84315 16 5.5 17.3431 5.5 19C5.5 20.6569 6.84315 22 8.5 22C10.1569 22 11.5 20.6569 11.5 19V16H8.5Z"
    fill="currentColor"
  />
</svg>`}],nn=[{nr:287,name:"file-add",tags:"files interface",css:'.gg-file-add{background:linear-gradient(to bottom,currentColor 5px,transparent 0)no-repeat 2px 9px/6px 2px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px;border:2px solid transparent;border-right:0;border-top:0;box-shadow:0 0 0 2px;border-radius:1px;border-top-right-radius:4px;overflow:hidden}.gg-file-add::after,.gg-file-add::before{content:"";display:block;box-sizing:border-box;position:absolute;height:6px}.gg-file-add::before{background:currentColor;left:4px;width:2px;top:7px}.gg-file-add::after{width:6px;border-left:2px solid;border-bottom:2px solid;right:-1px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M10 18V16H8V14H10V12H12V14H14V16H12V18H10Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
    fill="currentColor"
  />
</svg>`}],tn=[{nr:288,name:"file-document",tags:"files interface",css:'.gg-file-document{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px;border:2px solid transparent;border-right:0;border-top:0;box-shadow:0 0 0 2px;border-radius:1px;border-top-right-radius:4px;overflow:hidden}.gg-file-document::after,.gg-file-document::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-file-document::before{background:currentColor;box-shadow:0 4px 0,-6px -4px 0;left:0;width:10px;height:2px;top:8px}.gg-file-document::after{width:6px;height:6px;border-left:2px solid;border-bottom:2px solid;right:-1px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M7 18H17V16H7V18Z" fill="currentColor" />
  <path d="M17 14H7V12H17V14Z" fill="currentColor" />
  <path d="M7 10H11V8H7V10Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
    fill="currentColor"
  />
</svg>`}],ln=[{nr:289,name:"file-remove",tags:"files interface",css:'.gg-file-remove{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px;border:2px solid transparent;border-right:0;border-top:0;box-shadow:0 0 0 2px;border-radius:1px;border-top-right-radius:4px;overflow:hidden}.gg-file-remove::after,.gg-file-remove::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px}.gg-file-remove::before{background:currentColor;left:2px;height:2px;top:9px}.gg-file-remove::after{height:6px;border-left:2px solid;border-bottom:2px solid;right:-1px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 15H15V13H9V15Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
    fill="currentColor"
  />
</svg>`}],sn=[{nr:290,name:"file",tags:"files interface",css:'.gg-file{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px;border:2px solid transparent;border-right:0;border-top:0;box-shadow:0 0 0 2px;border-radius:1px;border-top-right-radius:4px;overflow:hidden}.gg-file::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-left:2px solid;border-bottom:2px solid;right:-1px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z"
    fill="currentColor"
  />
</svg>`}],gn=[{nr:291,name:"film",tags:"multimedia interface",css:'.gg-film,.gg-film::after{display:block;box-sizing:border-box;border-radius:3px}.gg-film{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:22px;height:18px}.gg-film::after{content:"";position:absolute;width:2px;height:2px;background:currentColor;left:2px;top:2px;box-shadow:0 4px 0,0 8px 0,12px 0 0,12px 4px 0,12px 8px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7Z"
    fill="currentColor"
  />
  <path
    d="M17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8Z"
    fill="currentColor"
  />
  <path
    d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11Z"
    fill="currentColor"
  />
  <path
    d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z"
    fill="currentColor"
  />
  <path
    d="M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17C6.55228 17 7 16.5523 7 16C7 15.4477 6.55228 15 6 15Z"
    fill="currentColor"
  />
  <path
    d="M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
    fill="currentColor"
  />
</svg>`}],pn=[{nr:292,name:"filters",tags:"interface design",css:'.gg-filters{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:19px;height:19px;background:radial-gradient(circle,currentColor 26%,transparent 26%)}.gg-filters::after,.gg-filters::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid;border-radius:100%;width:14px;height:14px}.gg-filters::after{bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.70834 15.4397C5.92663 16.2928 7.3222 16.7038 8.70461 16.7063C9.17977 18.0045 10.0433 19.1753 11.2616 20.0284C14.4284 22.2458 18.7932 21.4762 21.0107 18.3093C23.2281 15.1425 22.4585 10.7777 19.2916 8.56024C18.0734 7.70719 16.6778 7.29621 15.2954 7.29371C14.8202 5.99552 13.9567 4.82467 12.7384 3.97161C9.57158 1.75417 5.20676 2.52381 2.98931 5.69064C0.771871 8.85748 1.54151 13.2223 4.70834 15.4397ZM5.8555 13.8014C6.6016 14.3239 7.44081 14.6142 8.28736 14.6875C8.20112 13.1725 8.60464 11.6187 9.54254 10.2793C10.4804 8.9398 11.8025 8.0292 13.2556 7.59209C12.8972 6.82166 12.3374 6.13235 11.5913 5.60992C9.32924 4.02603 6.21151 4.57577 4.62762 6.8378C3.04373 9.09982 3.59347 12.2176 5.8555 13.8014ZM18.1445 10.1985C17.3984 9.67611 16.5592 9.38581 15.7126 9.31251C15.7989 10.8275 15.3953 12.3813 14.4574 13.7207C13.5195 15.0602 12.1975 15.9708 10.7444 16.4079C11.1028 17.1783 11.6626 17.8676 12.4087 18.3901C14.6707 19.9739 17.7885 19.4242 19.3724 17.1622C20.9562 14.9002 20.4065 11.7824 18.1445 10.1985Z"
    fill="currentColor"
  />
</svg>`}],an=[{nr:293,name:"flag-alt",tags:"interface",css:'.gg-flag-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:20px;border-left:2px solid}.gg-flag-alt::after,.gg-flag-alt::before{content:"";display:block;box-sizing:border-box;position:absolute;border-bottom:2px solid}.gg-flag-alt::before{width:12px;height:10px;border-top:2px solid;border-right:2px solid transparent}.gg-flag-alt::after{width:8px;height:8px;border-left:2px solid;border-top-left-radius:2px;border-bottom-right-radius:2px;transform:rotate(45deg);top:1px;left:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.4388 7L14.8387 4H7V10H14.8387L12.4388 7ZM19 12H7V22H5V2H19L15 7L19 12Z"
    fill="currentColor"
  />
</svg>`}],dn=[{nr:294,name:"flag",tags:"signs buttons",css:'.gg-flag{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px;border-left:2px solid}.gg-flag::after,.gg-flag::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px}.gg-flag::before{border-top:2px solid;border-bottom:2px solid}.gg-flag::after{border:2px solid;border-left:0;top:2px;left:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 21H6V11H12V13H20V5H13V3H4V21ZM12 5H6V9H13V11H18V7H12V5Z"
    fill="currentColor"
  />
</svg>`}],xn=[{nr:295,name:"folder-add",tags:"files interface",css:'.gg-folder-add{background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center center/2px 6px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:3px}.gg-folder-add::after,.gg-folder-add::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-folder-add::before{background:currentColor;left:6px;width:6px;height:2px;top:5px}.gg-folder-add::after{width:10px;height:4px;border:2px solid;border-bottom:0;border-top-left-radius:2px;border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;top:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 14.5V16.5H13V14.5H15V12.5H13V10.5H11V12.5H9V14.5H11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z"
    fill="currentColor"
  />
</svg>`}],bn=[{nr:296,name:"folder-remove",tags:"files interface",css:'.gg-folder-remove{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:3px}.gg-folder-remove::after,.gg-folder-remove::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px}.gg-folder-remove::before{background:currentColor;left:5px;width:8px;height:2px;top:5px}.gg-folder-remove::after{width:10px;height:4px;border:2px solid;border-bottom:0;border-top-left-radius:2px;border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;top:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 14.5V12.5H15V14.5H9Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z"
    fill="currentColor"
  />
</svg>`}],hn=[{nr:297,name:"folder",tags:"files interface",css:'.gg-folder{transform:scale(var(--ggs,1))}.gg-folder,.gg-folder::after{box-sizing:border-box;position:relative;display:block;width:22px;height:16px;border:2px solid;border-radius:3px}.gg-folder::after{content:"";position:absolute;width:10px;height:4px;border-bottom:0;border-top-left-radius:2px;border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;top:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z"
    fill="currentColor"
  />
</svg>`}],cn=[{nr:298,name:"font-height",tags:"interface",css:'.gg-font-height{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));border-top:2px solid;border-bottom:2px solid;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat center 8px/6px 2px}.gg-font-height::after,.gg-font-height::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:10px;background:currentColor;top:2px}.gg-font-height::before{transform:rotate(25deg);left:6px}.gg-font-height::after{transform:rotate(-25deg);right:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M21 5V3H3V5H21Z" fill="currentColor" />
  <path d="M21 19V21H3V19H21Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.0001 7.37636C11.602 7.35207 11.2112 7.56874 11.0325 7.95204L7.65154 15.2025C7.41815 15.7031 7.6347 16.2981 8.13522 16.5315C8.63577 16.7649 9.23074 16.5484 9.46417 16.0477L9.95278 14.9999H14.0473L14.5359 16.0477C14.7693 16.5484 15.3643 16.7649 15.8648 16.5315C16.3654 16.2981 16.5819 15.7031 16.3485 15.2025L12.9676 7.95204C12.7888 7.56874 12.3981 7.35207 12.0001 7.37636ZM13.1147 12.9999H10.8854L12.0001 10.6095L13.1147 12.9999Z"
    fill="currentColor"
  />
</svg>`}],fn=[{nr:299,name:"font-spacing",tags:"interface",css:'.gg-font-spacing{box-sizing:border-box;position:relative;display:block;width:18px;height:16px;transform:scale(var(--ggs,1));border-left:2px solid;border-right:2px solid;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat center 8px/6px 2px}.gg-font-spacing::after,.gg-font-spacing::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:10px;background:currentColor;top:2px}.gg-font-spacing::before{transform:rotate(25deg);left:4px}.gg-font-spacing::after{transform:rotate(-25deg);right:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M19 21H21V3H19L19 21Z" fill="currentColor" />
  <path d="M5 21H3V3H5L5 21Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.46416 16.0479L9.95281 14.9999H14.0473L14.5359 16.0478C14.7693 16.5484 15.3643 16.7649 15.8649 16.5315C16.3654 16.2981 16.582 15.7031 16.3485 15.2026L12.9676 7.95213C12.7888 7.56877 12.398 7.35199 11.9999 7.37637C11.6019 7.35214 11.2112 7.5689 11.0325 7.95216L7.65155 15.2026C7.41814 15.7032 7.6347 16.2981 8.13524 16.5315C8.63578 16.7649 9.23076 16.5484 9.46416 16.0479ZM12.0001 10.6096L10.8854 12.9999H13.1147L12.0001 10.6096Z"
    fill="currentColor"
  />
</svg>`}],Cn=[{nr:300,name:"format-bold",tags:"interface content",css:'.gg-format-bold{transform:scale(var(--ggs,1))}.gg-format-bold,.gg-format-bold::after{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border:2px solid;border-top-right-radius:100px;border-bottom-right-radius:100px}.gg-format-bold::after{content:"";position:absolute;width:10px;left:-2px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.946 10.7833L11.2754 12.209L13.4476 12.533C14.8919 12.7485 16 13.9957 16 15.5C16 13.8431 14.6569 12.5 13 12.5H9H8V11.5H9H11C12.6283 11.5 13.9536 10.2028 13.9988 8.58539C13.9743 9.4647 13.5724 10.2488 12.946 10.7833Z"
    stroke="currentColor"
    stroke-width="2"
  />
</svg>`}],wn=[{nr:301,name:"format-center",tags:"interface content",css:'.gg-format-center,.gg-format-center::before{display:block;box-sizing:border-box;height:2px;background:currentColor;border-radius:3px;box-shadow:0 8px 0}.gg-format-center{margin-top:-12px;position:relative;transform:scale(var(--ggs,1));width:16px}.gg-format-center::before{content:"";position:absolute;width:10px;top:4px;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z"
    fill="currentColor"
  />
  <path
    d="M4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13H4Z"
    fill="currentColor"
  />
  <path
    d="M6 10C6 9.44772 6.44772 9 7 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H7C6.44772 11 6 10.5523 6 10Z"
    fill="currentColor"
  />
  <path
    d="M7 17C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17H7Z"
    fill="currentColor"
  />
</svg>`}],un=[{nr:302,name:"format-color",tags:"interface content",css:'.gg-format-color{box-sizing:border-box;position:relative;display:block;width:9px;height:2px;background:currentColor;transform:scale(var(--ggs,1));border-radius:3px;box-shadow:-2px 8px 0 0,2px 8px 0 0}.gg-format-color::after,.gg-format-color::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:14px;background:currentColor;top:-8px}.gg-format-color::before{transform:rotate(25deg);left:1px}.gg-format-color::after{transform:rotate(-25deg);right:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.9479 3.20946C12.7721 2.83236 12.391 2.61645 11.9997 2.63269C11.6086 2.61666 11.2278 2.83255 11.0521 3.20948L5.1354 15.8978C4.90199 16.3983 5.11855 16.9933 5.61909 17.2267C6.11963 17.4601 6.71461 17.2436 6.94801 16.743L8.39869 13.632H15.6013L17.052 16.743C17.2854 17.2435 17.8804 17.4601 18.3809 17.2267C18.8814 16.9933 19.098 16.3983 18.8646 15.8978L12.9479 3.20946ZM14.6687 11.632L12 5.909L9.33131 11.632H14.6687Z"
    fill="currentColor"
  />
  <path
    d="M6 19.3682C5.44772 19.3682 5 19.816 5 20.3682C5 20.9205 5.44772 21.3682 6 21.3682H18C18.5523 21.3682 19 20.9205 19 20.3682C19 19.816 18.5523 19.3682 18 19.3682H6Z"
    fill="currentColor"
  />
</svg>`}],vn=[{nr:303,name:"format-heading",tags:"interface content",css:'.gg-format-heading{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:14px;border-left:2px solid;border-right:2px solid}.gg-format-heading::after{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;background:currentColor;top:6px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M6 19V5H8V11H16V5H18V19H16V13H8V19H6Z" fill="currentColor" />
</svg>`}],mn=[{nr:304,name:"format-indent-decrease",tags:"interface content arrows",css:'.gg-format-indent-decrease{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:14px;border-top:2px solid;border-bottom:2px solid}.gg-format-indent-decrease::after,.gg-format-indent-decrease::before{content:"";display:block;box-sizing:border-box;position:absolute;top:2px}.gg-format-indent-decrease::before{border-right:4px solid;left:1px;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}.gg-format-indent-decrease::after{width:8px;height:6px;border-top:2px solid;border-bottom:2px solid;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M20 7H4V5H20V7Z" fill="currentColor" />
  <path d="M20 11H12V9H20V11Z" fill="currentColor" />
  <path d="M12 15H20V13H12V15Z" fill="currentColor" />
  <path d="M9 9L4 12L9 15V9Z" fill="currentColor" />
  <path d="M4 17V19H20V17H4Z" fill="currentColor" />
</svg>`}],Hn=[{nr:305,name:"format-indent-increase",tags:"interface content arrows",css:'.gg-format-indent-increase{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:14px;border-top:2px solid;border-bottom:2px solid}.gg-format-indent-increase::after,.gg-format-indent-increase::before{content:"";display:block;box-sizing:border-box;position:absolute;top:2px}.gg-format-indent-increase::before{border-left:4px solid;left:1px;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}.gg-format-indent-increase::after{width:8px;height:6px;border-top:2px solid;border-bottom:2px solid;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M20 7H4V5H20V7Z" fill="currentColor" />
  <path d="M20 11H12V9H20V11Z" fill="currentColor" />
  <path d="M12 15H20V13H12V15Z" fill="currentColor" />
  <path d="M4 15L9 12L4 9V15Z" fill="currentColor" />
  <path d="M4 17V19H20V17H4Z" fill="currentColor" />
</svg>`}],Vn=[{nr:306,name:"format-italic",tags:"interface content",css:'.gg-format-italic{box-sizing:border-box;position:relative;display:block;transform:skewX(-20deg) scale(var(--ggs,1));width:6px;height:12px;border-top:2px solid;border-bottom:2px solid}.gg-format-italic::before{content:"";display:block;box-sizing:border-box;position:absolute;height:10px;width:2px;background:currentColor;left:2px;top:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.4903 5.45801H17.4903L16.7788 7.32716H14.7788L11.2212 16.6729H13.2212L12.5097 18.5421H6.5097L7.22122 16.6729H9.22122L12.7788 7.32716H10.7788L11.4903 5.45801Z"
    fill="currentColor"
  />
</svg>`}],Ln=[{nr:307,name:"format-justify",tags:"interface content",css:'.gg-format-justify,.gg-format-justify::before{display:block;box-sizing:border-box;width:16px;height:2px;border-radius:3px;background:currentColor;box-shadow:0 8px 0}.gg-format-justify{margin-top:-11px;transform:scale(var(--ggs,1));position:relative}.gg-format-justify::before{content:"";position:absolute;top:4px;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z"
    fill="currentColor"
  />
  <path
    d="M4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4Z"
    fill="currentColor"
  />
  <path
    d="M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z"
    fill="currentColor"
  />
  <path
    d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
    fill="currentColor"
  />
</svg>`}],Mn=[{nr:308,name:"format-left",tags:"interface content",css:'.gg-format-left,.gg-format-left::before{display:block;box-sizing:border-box;height:2px;background:currentColor;border-radius:3px;box-shadow:0 8px 0}.gg-format-left{margin-top:-11px;position:relative;transform:scale(var(--ggs,1));width:16px}.gg-format-left::before{content:"";position:absolute;width:10px;top:4px;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z"
    fill="currentColor"
  />
  <path
    d="M4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H4Z"
    fill="currentColor"
  />
  <path
    d="M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z"
    fill="currentColor"
  />
  <path
    d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H4Z"
    fill="currentColor"
  />
</svg>`}],Zn=[{nr:309,name:"format-line-height",tags:"interface content arrows",css:'.gg-format-line-height{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:10px;border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;box-shadow:-2px 0 0 0,2px -4px 0 -2px,2px 4px 0 -2px,inset 0 2px 0 0,inset 0 -2px 0 0}.gg-format-line-height::after,.gg-format-line-height::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-right:3px solid transparent;border-left:3px solid transparent;left:-8px}.gg-format-line-height::before{border-top:4px solid;bottom:-5px}.gg-format-line-height::after{border-bottom:4px solid;top:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.09668 6.99707H7.17358L4.17358 3.99707L1.17358 6.99707H3.09668V17.0031H1.15881L4.15881 20.0031L7.15881 17.0031H5.09668V6.99707Z"
    fill="currentColor"
  />
  <path d="M22.8412 7H8.84119V5H22.8412V7Z" fill="currentColor" />
  <path d="M22.8412 11H8.84119V9H22.8412V11Z" fill="currentColor" />
  <path d="M8.84119 15H22.8412V13H8.84119V15Z" fill="currentColor" />
  <path d="M22.8412 19H8.84119V17H22.8412V19Z" fill="currentColor" />
</svg>`}],kn=[{nr:310,name:"format-right",tags:"interface content",css:'.gg-format-right,.gg-format-right::before{display:block;box-sizing:border-box;height:2px;background:currentColor;border-radius:3px;box-shadow:0 8px 0}.gg-format-right{margin-top:-11px;position:relative;transform:scale(var(--ggs,1));width:16px}.gg-format-right::before{content:"";position:absolute;width:10px;top:4px;left:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H20Z"
    fill="currentColor"
  />
  <path
    d="M20 9C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H12C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9H20Z"
    fill="currentColor"
  />
  <path
    d="M21 14C21 13.4477 20.5523 13 20 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14Z"
    fill="currentColor"
  />
  <path
    d="M20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H12C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17H20Z"
    fill="currentColor"
  />
</svg>`}],yn=[{nr:311,name:"format-separator",tags:"interface content",css:'.gg-format-separator{transform:scale(var(--ggs,1))}.gg-format-separator,.gg-format-separator::after{box-sizing:border-box;position:relative;display:block;width:18px;height:2px;border-radius:3px;background:currentColor}.gg-format-separator::after{content:"";position:absolute;top:-12px;left:3px;opacity:.5;width:12px;box-shadow:0 4px 0 0,0 8px 0 0,0 16px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.5">
    <path
      d="M16 5C16.5523 5 17 4.55229 17 4C17 3.44772 16.5523 3 16 3H8C7.44771 3 7 3.44772 7 4C7 4.55228 7.44771 5 8 5L16 5Z"
      fill="currentColor"
    />
    <path
      d="M16 7C16.5523 7 17 7.44772 17 8C17 8.55229 16.5523 9 16 9H8C7.44771 9 7 8.55229 7 8C7 7.44772 7.44771 7 8 7H16Z"
      fill="currentColor"
    />
    <path
      d="M17 12C17 12.5523 16.5523 13 16 13L8 13C7.44771 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11L16 11C16.5523 11 17 11.4477 17 12Z"
      fill="currentColor"
    />
    <path
      d="M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19L8 19C7.44771 19 7 19.4477 7 20C7 20.5523 7.44771 21 8 21H16Z"
      fill="currentColor"
    />
  </g>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M21 16C21 16.5523 20.5523 17 20 17L4 17C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15L20 15C20.5523 15 21 15.4477 21 16Z"
    fill="currentColor"
  />
</svg>`}],zn=[{nr:312,name:"format-slash",tags:"interface content",css:".gg-format-slash{box-sizing:border-box;position:relative;display:block;transform:rotate(25deg) scale(var(--ggs,1));width:2px;height:14px;background:currentColor;border-radius:3px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.526 6.10576C15.0265 6.33917 15.2667 6.88343 15.0625 7.3214L9.88541 18.4237C9.68118 18.8616 9.10985 19.0275 8.60931 18.7941C8.10877 18.5607 7.86857 18.0164 8.0728 17.5784L13.2499 6.47616C13.4541 6.03819 14.0254 5.87235 14.526 6.10576Z"
    fill="currentColor"
  />
</svg>`}],Bn=[{nr:313,name:"format-strike",tags:"interface content",css:'.gg-format-strike{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:3px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 -2px 0 0,inset 0 0 0 2px}.gg-format-strike::after,.gg-format-strike::before{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;left:-6px;top:4px}.gg-format-strike::after{width:2px;height:4px;left:0;top:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M13 7H17V5H7V7H11V10H13V7Z" fill="currentColor" />
  <path d="M11 19V14H13V19H11Z" fill="currentColor" />
  <path d="M5 13H19V11H5V13Z" fill="currentColor" />
</svg>`}],qn=[{nr:314,name:"format-text",tags:"interface content",css:'.gg-format-text{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 -2px 0 0,inset 0 0 0 2px}.gg-format-text::after{content:"";display:block;box-sizing:border-box;position:absolute;width:18px;height:18px;border:1px dashed;top:-6px;left:-8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M6.5 3H3V6.5H4V4H6.5V3Z" fill="currentColor" />
  <path d="M8.5 4V3H11V4H8.5Z" fill="currentColor" />
  <path d="M13 4H15.5V3H13V4Z" fill="currentColor" />
  <path d="M17.5 3V4H20V6.5H21V3H17.5Z" fill="currentColor" />
  <path d="M21 8.5H20V11H21V8.5Z" fill="currentColor" />
  <path d="M21 13H20V15.5H21V13Z" fill="currentColor" />
  <path d="M21 17.5H20V20H17.5V21H21V17.5Z" fill="currentColor" />
  <path d="M15.5 21V20H13V21H15.5Z" fill="currentColor" />
  <path d="M11 21V20H8.5V21H11Z" fill="currentColor" />
  <path d="M6.5 21V20H4V17.5H3V21H6.5Z" fill="currentColor" />
  <path d="M3 15.5H4V13H3V15.5Z" fill="currentColor" />
  <path d="M3 11H4V8.5H3V11Z" fill="currentColor" />
  <path d="M11 9.5H7V7.5H17V9.5H13V16.5H11V9.5Z" fill="currentColor" />
</svg>`}],Xn=[{nr:315,name:"format-underline",tags:"interface content",css:'.gg-format-underline{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border:2px solid;border-top:0;border-bottom-left-radius:100px;border-bottom-right-radius:100px}.gg-format-underline::after{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:12px;height:2px;background:currentColor;left:-2px;bottom:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 10V4H8V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V4H18V10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10Z"
    fill="currentColor"
  />
  <path
    d="M7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44771 20 7 20H17C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18H7Z"
    fill="currentColor"
  />
</svg>`}],In=[{nr:316,name:"format-uppercase",tags:"interface content",css:'.gg-format-uppercase{transform:scale(var(--ggs,1))}.gg-format-uppercase,.gg-format-uppercase::after{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border-left:3px solid transparent;border-right:3px solid transparent;box-shadow:0 -2px 0 0,inset 0 0 0 2px}.gg-format-uppercase::after{content:"";position:absolute;width:6px;height:4px;border-left:2px solid transparent;border-right:2px solid transparent;bottom:0;right:-8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 9H10V17H8V9H5V7H13V9ZM18 13H16V17H14V13H12V11H18V13Z"
    fill="currentColor"
  />
</svg>`}],Sn=[{nr:317,name:"framer",tags:"brands",css:'.gg-framer{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:20px;overflow:hidden}.gg-framer::after,.gg-framer::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor}.gg-framer::before{width:20px;height:6px;transform:skewX(45deg);top:6px;left:-11px;box-shadow:20px -6px 0}.gg-framer::after{width:6px;height:8px;transform:skewY(45deg);bottom:4px;border-top-left-radius:4px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M12 21L12 9L6 9L6 15L12 21Z" fill="currentColor" fill-opacity="0.5" />
  <path d="M18 9V3H6L12 9H6V15H18L12 9H18Z" fill="currentColor" />
</svg>`}],Yn=[{nr:318,name:"games",tags:"multimedia",css:'.gg-games{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:12px;border:3px solid transparent;border-left:6px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0;border-radius:40px}.gg-games::after,.gg-games::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor}.gg-games::before{left:-2px;width:6px;top:2px}.gg-games::after{border-radius:3px;width:2px;box-shadow:0 4px 0,-2px 2px 0,2px 2px 0;top:0;right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z"
    fill="currentColor"
  />
  <path
    d="M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z"
    fill="currentColor"
  />
  <path
    d="M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z"
    fill="currentColor"
  />
  <path
    d="M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z"
    fill="currentColor"
  />
  <path d="M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z"
    fill="currentColor"
  />
</svg>`}],jn=[{nr:319,name:"gender-female",tags:"signs arrows",css:'.gg-gender-female{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid;border-radius:100%;margin-top:-4px}.gg-gender-female::after,.gg-gender-female::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;bottom:-6px;left:-1px}.gg-gender-female::before{width:2px;height:9px;bottom:-9px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3C9.23858 3 7 5.23858 7 8C7 10.419 8.71776 12.4367 11 12.9V15H8V17H11V21H13V17H16V15H13V12.9C15.2822 12.4367 17 10.419 17 8C17 5.23858 14.7614 3 12 3ZM9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8Z"
    fill="currentColor"
  />
</svg>`}],An=[{nr:320,name:"gender-male",tags:"signs",css:'.gg-gender-male{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:4px}.gg-gender-male::after,.gg-gender-male::before{content:"";display:block;box-sizing:border-box;position:absolute;height:8px;top:-6px}.gg-gender-male::after{border-right:2px solid;border-top:2px solid;width:7px;height:7px;left:5px}.gg-gender-male::before{width:2px;background:currentColor;left:7px;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.1888 7L12.1909 5L19.1909 5.00746L19.1834 12.0075L17.1834 12.0053L17.1873 8.41678L14.143 11.4611C15.4612 13.4063 15.2587 16.0743 13.5355 17.7975C11.5829 19.7501 8.41709 19.7501 6.46447 17.7975C4.51184 15.8449 4.51184 12.6791 6.46447 10.7264C8.16216 9.02873 10.777 8.80709 12.7141 10.0615L15.7718 7.00382L12.1888 7ZM7.87868 12.1406C9.05025 10.9691 10.9497 10.9691 12.1213 12.1406C13.2929 13.3122 13.2929 15.2117 12.1213 16.3833C10.9497 17.5549 9.05025 17.5549 7.87868 16.3833C6.70711 15.2117 6.70711 13.3122 7.87868 12.1406Z"
    fill="currentColor"
  />
</svg>`}],Un=[{nr:321,name:"ghost-character",tags:"design",css:'.gg-ghost-character{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:18px;border:2px solid;border-bottom:0;border-top-left-radius:22px;border-top-right-radius:22px;overflow:hidden;background:radial-gradient(circle,currentColor 60%,transparent 40%)no-repeat 2px 4px/2px 2px,radial-gradient(circle,currentColor 60%,transparent 40%)no-repeat 6px 4px/2px 2px}.gg-ghost-character::after,.gg-ghost-character::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;bottom:-3px;transform:rotate(-45deg)}.gg-ghost-character::before{left:-1px}.gg-ghost-character::after{right:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.9759 9C10.9759 9.55228 10.5282 10 9.97589 10C9.42361 10 8.97589 9.55228 8.97589 9C8.97589 8.44771 9.42361 8 9.97589 8C10.5282 8 10.9759 8.44771 10.9759 9Z"
    fill="currentColor"
  />
  <path
    d="M13.9712 10C14.5235 10 14.9712 9.55228 14.9712 9C14.9712 8.44771 14.5235 8 13.9712 8C13.4189 8 12.9712 8.44771 12.9712 9C12.9712 9.55228 13.4189 10 13.9712 10Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 20.9999V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21L7.82846 21L9.24264 19.5858L10.6569 21L13.3433 21L14.7574 19.5858L16.1717 21L19 20.9999ZM17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V19L9.24264 16.7573L12 19.5147L14.7574 16.7573L17 18.9999V10Z"
    fill="currentColor"
  />
</svg>`}],Dn=[{nr:322,name:"ghost",tags:"brands",css:'.gg-ghost{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:16px;background:linear-gradient(to left,currentColor 40px,transparent 0)no-repeat -6px center/40px 4px;overflow:hidden}.gg-ghost::after,.gg-ghost::before{content:"";background:currentColor;box-sizing:border-box;position:absolute;display:block;height:4px;width:12px;box-shadow:14px 0 0}.gg-ghost::after{width:20px;left:-12px;box-shadow:22px 0 0;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M3 4H15V8H3V4Z" fill="currentColor" />
  <path d="M21 8H17V4H21V8Z" fill="currentColor" />
  <path d="M3 10H21V14H3V10Z" fill="currentColor" />
  <path d="M11 16H3V20H11V16Z" fill="currentColor" />
  <path d="M13 16V20H21V16H13Z" fill="currentColor" />
</svg>`}],Pn=[{nr:323,name:"gift",tags:"design",css:'.gg-gift{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:14px;margin-top:8px;border:2px solid transparent;box-shadow:inset 2px 0 0,inset -2px 0 0,0 -2px 0,inset 0 2px 0,inset 0 -2px 0;background:linear-gradient(to left,currentColor 10px,transparent 0),linear-gradient(to left,currentColor 10px,transparent 0),linear-gradient(to left,currentColor 10px,transparent 0);background-repeat:no-repeat;background-size:2px 10px,2px 10px,2px 10px;background-position:8px 0,18px -8px,-2px -8px}.gg-gift::after,.gg-gift::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:6px;height:8px;border:2px solid;top:-10px}.gg-gift::after{left:3px;transform:rotate(-45deg)}.gg-gift::before{right:3px;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17.5354 2.87868C16.3638 1.70711 14.4644 1.70711 13.2928 2.87868L11.8786 4.29289C11.8183 4.35317 11.7611 4.41538 11.707 4.47931C11.653 4.41539 11.5958 4.3532 11.5355 4.29293L10.1213 2.87871C8.94975 1.70714 7.05025 1.70714 5.87868 2.87871C4.70711 4.05029 4.70711 5.94978 5.87868 7.12136L6.75732 8H1V14H3V22H21V14H23V8H16.6567L17.5354 7.12132C18.707 5.94975 18.707 4.05025 17.5354 2.87868ZM14.707 7.12132L16.1212 5.70711C16.5117 5.31658 16.5117 4.68342 16.1212 4.29289C15.7307 3.90237 15.0975 3.90237 14.707 4.29289L13.2928 5.70711C12.9023 6.09763 12.9023 6.7308 13.2928 7.12132C13.6833 7.51184 14.3165 7.51184 14.707 7.12132ZM10.1213 5.70714L8.70711 4.29293C8.31658 3.9024 7.68342 3.9024 7.29289 4.29293C6.90237 4.68345 6.90237 5.31662 7.29289 5.70714L8.70711 7.12136C9.09763 7.51188 9.7308 7.51188 10.1213 7.12136C10.5118 6.73083 10.5118 6.09767 10.1213 5.70714ZM21 10V12H3V10H21ZM12.9167 14H19V20H12.9167V14ZM11.0834 14V20H5V14H11.0834Z"
    fill="currentColor"
  />
</svg>`}],Gn=[{nr:324,name:"girl",tags:"signs",css:'.gg-girl,.gg-girl::after,.gg-girl::before{display:block;box-sizing:border-box;border-radius:42px}.gg-girl{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;overflow:hidden;box-shadow:inset 0 0 0 2px}.gg-girl::after,.gg-girl::before{content:"";position:absolute;width:2px;height:2px;background:currentColor;box-shadow:6px 0 0;left:6px;top:10px}.gg-girl::after{width:20px;height:20px;top:-11px;left:-12px;box-shadow:17px -4px 0 3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z"
    fill="currentColor"
  />
  <path
    d="M15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.0244 2.00003L12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.74235 17.9425 2.43237 12.788 2.03059L12.7886 2.0282C12.5329 2.00891 12.278 1.99961 12.0244 2.00003ZM12 20C16.4183 20 20 16.4183 20 12C20 11.3014 19.9105 10.6237 19.7422 9.97775C16.1597 10.2313 12.7359 8.52461 10.7605 5.60246C9.31322 7.07886 7.2982 7.99666 5.06879 8.00253C4.38902 9.17866 4 10.5439 4 12C4 16.4183 7.58172 20 12 20ZM11.9785 4.00003L12.0236 4.00003L12 4L11.9785 4.00003Z"
    fill="currentColor"
  />
</svg>`}],Tn=[{nr:325,name:"git-branch",tags:"interface code",css:'.gg-git-branch{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor}.gg-git-branch::after,.gg-git-branch::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-git-branch::before{border-right:2px solid;border-bottom:2px solid;border-bottom-right-radius:4px;bottom:0;width:8px;height:6px;left:0}.gg-git-branch::after{width:4px;height:4px;background:currentColor;box-shadow:0 12px 0 0,6px 6px 0 0;border-radius:100%;left:-1px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 3C7.89543 3 7 3.89543 7 5C7 5.74028 7.4022 6.38663 8 6.73244V17.2676C7.4022 17.6134 7 18.2597 7 19C7 20.1046 7.89543 21 9 21C9.74028 21 10.3866 20.5978 10.7324 20H11.9585C14.1676 20 15.9585 18.2091 15.9585 16V14.7324C16.5563 14.3866 16.9585 13.7403 16.9585 13C16.9585 11.8954 16.0631 11 14.9585 11C13.8539 11 12.9585 11.8954 12.9585 13C12.9585 13.7403 13.3607 14.3866 13.9585 14.7324V16C13.9585 17.1046 13.0631 18 11.9585 18H10.7324C10.5568 17.6964 10.3036 17.4432 10 17.2676V6.73244C10.5978 6.38663 11 5.74028 11 5C11 3.89543 10.1046 3 9 3Z"
    fill="currentColor"
  />
</svg>`}],$n=[{nr:326,name:"git-commit",tags:"interface code",css:'.gg-git-commit{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;border-radius:3px;border-top:6px solid;border-bottom:6px solid}.gg-git-commit::after{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;box-shadow:0 0 0 2px;border-radius:100%;left:0;top:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V9.17071C14.1652 9.58254 15 10.6938 15 12C15 13.3062 14.1652 14.4175 13 14.8293V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V14.8293C9.83481 14.4175 9 13.3062 9 12C9 10.6938 9.83481 9.58254 11 9.17071V4ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
    fill="currentColor"
  />
</svg>`}],On=[{nr:327,name:"git-fork",tags:"interface code",css:'.gg-git-fork{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor}.gg-git-fork::after,.gg-git-fork::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-git-fork::before{border-right:2px solid;border-bottom:2px solid;border-bottom-right-radius:4px;bottom:4px;width:8px;height:6px;left:0}.gg-git-fork::after{width:4px;height:4px;background:currentColor;box-shadow:0 12px 0 0,6px 2px 0 0;border-radius:100%;left:-1px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z"
    fill="currentColor"
  />
</svg>`}],En=[{nr:328,name:"git-pull",tags:"interface code",css:'.gg-git-pull{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor}.gg-git-pull::after,.gg-git-pull::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-git-pull::before{border-right:2px solid;border-top:2px solid;border-top-right-radius:4px;width:8px;height:6px;left:0;top:2px}.gg-git-pull::after{width:4px;height:4px;background:currentColor;box-shadow:0 12px 0 0,6px 8px 0 0;border-radius:100%;left:-1px;top:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.34168 10.9143 5.66336 10.7633 5.9447H11.3438C13.5529 5.9447 15.3438 7.73556 15.3438 9.9447V11.2244C15.9301 11.5731 16.323 12.213 16.323 12.9447C16.323 14.0493 15.4276 14.9447 14.323 14.9447C13.2184 14.9447 12.323 14.0493 12.323 12.9447C12.323 12.1959 12.7345 11.5432 13.3438 11.2004V9.9447C13.3438 8.84013 12.4483 7.9447 11.3438 7.9447H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z"
    fill="currentColor"
  />
</svg>`}],Fn=[{nr:329,name:"gitter",tags:"brands",css:'.gg-gitter{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:18px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:inset 2px 0 0,inset -2px 0 0}.gg-gitter::after,.gg-gitter::before{content:"";position:absolute;box-sizing:border-box;display:block;width:2px;background:currentColor}.gg-gitter::before{height:13px;top:-3px;left:-4px}.gg-gitter::after{height:10px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 1.5H7V14.5H5V1.5Z" fill="currentColor" />
  <path d="M9 4.5H11V22.5H9V4.5Z" fill="currentColor" />
  <path d="M15 4.5H13V22.5H15V4.5Z" fill="currentColor" />
  <path d="M17 4.5H19V14.5H17V4.5Z" fill="currentColor" />
</svg>`}],Nn=[{nr:330,name:"glass-alt",tags:"interface",css:'.gg-glass-alt,.gg-glass-alt::before{display:block;box-sizing:border-box;height:20px}.gg-glass-alt{position:relative;transform:scale(var(--ggs,1));width:14px}.gg-glass-alt::before{content:"";position:absolute;width:10px;border:2px solid;border-bottom:3px solid;transform:perspective(20px)rotateX(-20deg);top:2px;left:2px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat center 2px/6px 2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 2H19L17.3602 18.398C17.1557 20.4428 15.4351 22 13.38 22H10.62C8.56494 22 6.84428 20.4428 6.6398 18.398L5 2ZM7.50998 7L7.20998 4H16.79L16.49 7H7.50998ZM7.70998 9L8.62988 18.199C8.73212 19.2214 9.59245 20 10.62 20H13.38C14.4076 20 15.2679 19.2214 15.3701 18.199L16.29 9H7.70998Z"
    fill="currentColor"
  />
</svg>`}],Jn=[{nr:331,name:"glass",tags:"design",css:'.gg-glass{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:13px;border-top:8px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;box-shadow:inset 0 0 0 2px,0 2px 0 0}.gg-glass::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;border-bottom-left-radius:100px;border-bottom-right-radius:100px;left:-4px;bottom:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 10C17 12.419 15.2822 14.4367 13 14.9V17H15V19H9V17H11V14.9C8.71776 14.4367 7 12.419 7 10V5H17V10ZM15 7H9V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V7Z"
    fill="currentColor"
  />
</svg>`}],Kn=[{nr:332,name:"globe-alt",tags:"interface",css:'.gg-globe-alt,.gg-globe-alt::after,.gg-globe-alt::before{display:block;box-sizing:border-box;height:18px;border:2px solid}.gg-globe-alt{position:relative;transform:scale(var(--ggs,1));width:18px;border-radius:22px}.gg-globe-alt::after,.gg-globe-alt::before{content:"";position:absolute;width:8px;border-radius:100%;top:-2px;left:3px}.gg-globe-alt::after{width:24px;height:20px;border:2px solid transparent;border-bottom:2px solid;top:-11px;left:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.8055 18.4151C17.1228 17.4003 18.7847 15.1667 18.9806 12.525C18.1577 12.9738 17.12 13.3418 15.9371 13.598C15.7882 15.4676 15.3827 17.1371 14.8055 18.4151ZM9.1945 5.58487C7.24725 6.43766 5.76275 8.15106 5.22208 10.244C5.4537 10.4638 5.84813 10.7341 6.44832 11.0008C6.89715 11.2003 7.42053 11.3798 8.00537 11.5297C8.05853 9.20582 8.50349 7.11489 9.1945 5.58487ZM10.1006 13.9108C10.2573 15.3675 10.5852 16.6202 10.9992 17.5517C11.2932 18.2133 11.5916 18.6248 11.8218 18.8439C11.9037 18.9219 11.9629 18.9634 12 18.9848C12.0371 18.9634 12.0963 18.9219 12.1782 18.8439C12.4084 18.6248 12.7068 18.2133 13.0008 17.5517C13.4148 16.6202 13.7427 15.3675 13.8994 13.9108C13.2871 13.9692 12.6516 14 12 14C11.3484 14 10.7129 13.9692 10.1006 13.9108ZM8.06286 13.598C8.21176 15.4676 8.61729 17.1371 9.1945 18.4151C6.8772 17.4003 5.21525 15.1666 5.01939 12.525C5.84231 12.9738 6.88001 13.3418 8.06286 13.598ZM13.9997 11.8896C13.369 11.9609 12.6993 12 12 12C11.3008 12 10.631 11.9609 10.0003 11.8896C10.0135 9.66408 10.4229 7.74504 10.9992 6.44832C11.2932 5.78673 11.5916 5.37516 11.8218 5.15605C11.9037 5.07812 11.9629 5.03659 12 5.01516C12.0371 5.03659 12.0963 5.07812 12.1782 5.15605C12.4084 5.37516 12.7068 5.78673 13.0008 6.44832C13.5771 7.74504 13.9865 9.66408 13.9997 11.8896ZM15.9946 11.5297C15.9415 9.20582 15.4965 7.11489 14.8055 5.58487C16.7528 6.43766 18.2373 8.15107 18.7779 10.244C18.5463 10.4638 18.1519 10.7341 17.5517 11.0008C17.1029 11.2003 16.5795 11.3798 15.9946 11.5297Z"
    fill="currentColor"
  />
</svg>`}],Qn=[{nr:333,name:"globe",tags:"interface",css:'.gg-globe{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid;border-radius:100px;margin-left:-3px;margin-top:-7px}.gg-globe::after,.gg-globe::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-globe::before{top:11px;border-right:2px solid transparent;box-shadow:0 2px 0,inset -2px 0 0;left:1px;width:6px;height:2px}.gg-globe::after{width:16px;height:10px;border-radius:50px;border-top-left-radius:0;border-top-right-radius:0;border:2px solid;border-top-color:transparent;right:-7px;bottom:-5px;transform:rotate(-35deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6.85327 8C6.85327 5.23858 9.09185 3 11.8533 3C14.6147 3 16.8533 5.23858 16.8533 8C16.8533 10.7614 14.6147 13 11.8533 13C9.09185 13 6.85327 10.7614 6.85327 8ZM11.8533 11C10.1964 11 8.85327 9.65685 8.85327 8C8.85327 6.34315 10.1964 5 11.8533 5C13.5101 5 14.8533 6.34315 14.8533 8C14.8533 9.65685 13.5101 11 11.8533 11Z"
    fill="currentColor"
  />
  <path
    d="M5 12.1294C6.25216 14.2031 8.4189 15.6624 10.9414 15.9486V18H8.85327V20H14.8533V18H12.9414V15.9266C16.8449 15.3958 19.8532 12.0492 19.8532 8.00001C19.8532 6.43638 19.4046 4.97752 18.6291 3.74512L16.9253 4.79326C17.513 5.72084 17.8532 6.82069 17.8532 8.00001C17.8532 11.3137 15.167 14 11.8532 14C9.66611 14 7.75231 12.8298 6.70381 11.0813L5 12.1294Z"
    fill="currentColor"
  />
</svg>`}],Rn=[{nr:334,name:"google-tasks",tags:"brands",css:'.gg-google-tasks{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px}.gg-google-tasks::after,.gg-google-tasks::before{content:"";position:absolute;display:block;background:currentColor}.gg-google-tasks::before{width:6px;height:6px;border-radius:10px;bottom:6px;left:2px}.gg-google-tasks::after{height:18px;width:4px;border-radius:20px;transform:rotate(40deg);right:2px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.7679 5.71447C17.4779 4.86832 18.7394 4.75795 19.5856 5.46796C20.4317 6.17796 20.5421 7.43947 19.8321 8.28562L10.833 19.0102C10.123 19.8564 8.86153 19.9668 8.01538 19.2568C7.16923 18.5468 7.05886 17.2852 7.76886 16.4391L16.7679 5.71447Z"
    fill="currentColor"
  />
  <path
    d="M3 12.7396C3 11.6351 3.89543 10.7396 5 10.7396C6.10457 10.7396 7 11.6351 7 12.7396C7 13.8442 6.10457 14.7396 5 14.7396C3.89543 14.7396 3 13.8442 3 12.7396Z"
    fill="currentColor"
  />
</svg>`}],Wn=[{nr:335,name:"google",tags:"brands",css:'.gg-google,.gg-google::before{box-sizing:border-box;display:block}.gg-google{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:4px solid;border-right-color:transparent;border-radius:22px}.gg-google::before{content:"";position:absolute;border-top:4px solid;border-right:4px solid;border-bottom:4px solid;border-radius:0 0 10px 0;width:10px;height:12px;right:-4px;bottom:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
    fill="currentColor"
  />
</svg>`}],_n=[{nr:336,name:"gym",tags:"interface",css:'.gg-gym{box-sizing:border-box;position:relative;display:block;transform:rotate(-35deg) scale(var(--ggs,1));width:8px;height:20px;border-top:9px solid transparent;border-bottom:9px solid transparent;box-shadow:inset 0 0 0 2px}.gg-gym::after,.gg-gym::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-gym::before{box-shadow:-3px 0 0 -1px,3px 0 0 -1px,inset 2px 0 0 0,inset -2px 0 0 0;width:14px;height:8px;border-left:1px solid transparent;border-right:1px solid transparent;top:-3px;left:-3px}.gg-gym::after{width:22px;height:2px;border-left:2px solid;border-right:2px solid;top:0;left:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z"
    fill="currentColor"
  />
  <path
    d="M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z"
    fill="currentColor"
  />
  <path
    d="M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z"
    fill="currentColor"
  />
  <path
    d="M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z"
    fill="currentColor"
  />
  <path
    d="M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z"
    fill="currentColor"
  />
</svg>`}],ot=[{nr:337,name:"hashtag",tags:"interface code",css:'.gg-hashtag{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:16px;border-left:2px solid;border-right:2px solid}.gg-hashtag::before{content:"";display:block;box-sizing:border-box;position:absolute;width:16px;height:8px;border-top:2px solid;border-bottom:2px solid;left:-6px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z"
    fill="currentColor"
  />
</svg>`}],rt=[{nr:338,name:"headset",tags:"multimedia music",css:'.gg-headset{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-top-left-radius:120px;border-top-right-radius:120px;border:2px solid;border-bottom:0}.gg-headset::after,.gg-headset::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid;width:6px;height:8px;top:8px}.gg-headset::before{border-top-right-radius:2px;border-bottom-right-radius:2px;left:-2px}.gg-headset::after{border-top-left-radius:2px;border-bottom-left-radius:2px;left:10px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
    fill="currentColor"
  />
</svg>`}],et=[{nr:339,name:"heart",tags:"design",css:'.gg-heart,.gg-heart::after{border:2px solid;border-top-left-radius:100px;border-top-right-radius:100px;width:10px;height:8px;border-bottom:0}.gg-heart{box-sizing:border-box;position:relative;transform:translate(calc(-10px / 2 * var(--ggs,1)),calc(-6px / 2 * var(--ggs,1)))rotate(-45deg)scale(var(--ggs,1));display:block}.gg-heart::after,.gg-heart::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-heart::after{right:-9px;transform:rotate(90deg);top:5px}.gg-heart::before{width:11px;height:11px;border-left:2px solid;border-bottom:2px solid;left:-2px;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
    fill="currentColor"
  />
</svg>`}],nt=[{nr:340,name:"hello",tags:"brands",css:'.gg-hello{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));overflow:hidden;width:20px;height:20px;border-radius:6px;border-bottom-left-radius:0}.gg-hello::after,.gg-hello::before{content:"";display:block;position:absolute;box-sizing:border-box}.gg-hello::before{width:30px;height:30px;border:8px solid;left:-5px;top:-5px;border-radius:30px}.gg-hello::after{width:10px;height:5px;background:currentColor;border-bottom-left-radius:30px;border-bottom-right-radius:30px;bottom:5px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.5 12C17.5 13.576 16.8371 14.9972 15.7749 16C14.7899 16.9299 13.4615 17.5 12 17.5C10.5385 17.5 9.21007 16.9299 8.22506 16C7.16289 14.9972 6.5 13.576 6.5 12H17.5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 7C1 3.68629 3.68629 1 7 1H17C20.3137 1 23 3.68629 23 7V17C23 20.3137 20.3137 23 17 23H1V7ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z"
    fill="currentColor"
  />
</svg>`}],tt=[{nr:341,name:"home-alt",tags:"interface",css:'.gg-home-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid;border-top:0;border-radius:2px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;margin-bottom:-2px}.gg-home-alt::after,.gg-home-alt::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-home-alt::before{border-top:2px solid;border-left:2px solid;border-top-left-radius:4px;transform:rotate(45deg);top:-5px;border-radius:3px;width:14px;height:14px;left:0}.gg-home-alt::after{width:6px;height:10px;background:currentColor;border-top-left-radius:100px;border-top-right-radius:100px;left:4px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
    fill="currentColor"
  />
</svg>`}],it=[{nr:342,name:"home-screen",tags:"devices",css:'.gg-home-screen{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:22px;border-radius:3px;border:2px solid}.gg-home-screen::after,.gg-home-screen::before{content:"";display:block;position:absolute;box-sizing:border-box;border-radius:2px;width:2px;height:2px;left:1px;background:currentColor}.gg-home-screen::after{top:1px;box-shadow:3px 0,6px 0,0 3px,3px 3px,6px 3px,0 6px}.gg-home-screen::before{bottom:1px;box-shadow:3px 0 0,6px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 5C10 5.55228 9.55228 6 9 6C8.44771 6 8 5.55228 8 5C8 4.44772 8.44771 4 9 4C9.55228 4 10 4.44772 10 5Z"
    fill="currentColor"
  />
  <path
    d="M9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44771 7 8 7.44772 8 8C8 8.55228 8.44771 9 9 9Z"
    fill="currentColor"
  />
  <path
    d="M10 19C10 19.5523 9.55228 20 9 20C8.44771 20 8 19.5523 8 19C8 18.4477 8.44771 18 9 18C9.55228 18 10 18.4477 10 19Z"
    fill="currentColor"
  />
  <path
    d="M9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44771 10 8 10.4477 8 11C8 11.5523 8.44771 12 9 12Z"
    fill="currentColor"
  />
  <path
    d="M13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5Z"
    fill="currentColor"
  />
  <path
    d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
    fill="currentColor"
  />
  <path
    d="M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z"
    fill="currentColor"
  />
  <path
    d="M15 6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6Z"
    fill="currentColor"
  />
  <path
    d="M16 8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8Z"
    fill="currentColor"
  />
  <path
    d="M15 20C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 1C6.34315 1 5 2.34315 5 4V20C5 21.6569 6.34315 23 8 23H16C17.6569 23 19 21.6569 19 20V4C19 2.34315 17.6569 1 16 1H8ZM16 3H8C7.44771 3 7 3.44772 7 4V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V4C17 3.44772 16.5523 3 16 3Z"
    fill="currentColor"
  />
</svg>`}],lt=[{nr:343,name:"home",tags:"interface",css:'.gg-home{background:linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 0 bottom/4px 2px,linear-gradient(to left,currentColor 5px,transparent 0)no-repeat right bottom/4px 2px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid;border-top:0;border-bottom:0;border-top-right-radius:3px;border-top-left-radius:3px;border-bottom-right-radius:0;border-bottom-left-radius:0;margin-bottom:-2px}.gg-home::after,.gg-home::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-home::before{border-top:2px solid;border-left:2px solid;border-top-left-radius:4px;transform:rotate(45deg);top:-5px;border-radius:3px;width:14px;height:14px;left:0}.gg-home::after{width:8px;height:10px;border:2px solid;border-radius:100px;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:0;left:3px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z"
    fill="currentColor"
  />
</svg>`}],st=[{nr:344,name:"icecream",tags:"design",css:'.gg-icecream{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px;border:2px solid;border-top-left-radius:12px;border-top-right-radius:12px;margin-top:-8px;border-bottom:0}.gg-icecream::after,.gg-icecream::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-icecream::before{border-left:4px solid;border-right:4px solid;width:12px;height:2px;bottom:0;left:-2px}.gg-icecream::after{width:6px;height:8px;border:2px solid;bottom:-6px;left:2px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-top:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 17H19V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V17H9V20C9 21.6569 10.3431 23 12 23C13.6569 23 15 21.6569 15 20V17ZM17 15V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V15H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V15H17Z"
    fill="currentColor"
  />
</svg>`}],gt=[{nr:345,name:"if-design",tags:"brands",css:'.gg-if-design{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;background:linear-gradient(to left,currentColor 18px,transparent 0)no-repeat center center/4px 18px,linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 10px top/4px 4px,linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 10px 5px/4px 4px,linear-gradient(to left,currentColor 14px,transparent 0)no-repeat 0 5px/4px 14px}.gg-if-design::before{content:"";display:block;position:absolute;width:4px;height:4px;border-radius:10px;background-color:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M10 5H14V19H10V5Z" fill="currentColor" />
  <path d="M5 19V10H9V19H5Z" fill="currentColor" />
  <path
    d="M7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5Z"
    fill="currentColor"
  />
  <path d="M15 5H19V9H15V5Z" fill="currentColor" />
  <path d="M19 10H15V14H19V10Z" fill="currentColor" />
</svg>`}],pt=[{nr:346,name:"image",tags:"multimedia interface",css:'.gg-image{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:16px;overflow:hidden;box-shadow:0 0 0 2px;border-radius:2px}.gg-image::after,.gg-image::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-image::after{transform:rotate(45deg);border-radius:3px;width:16px;height:16px;top:9px;left:6px}.gg-image::before{width:6px;height:6px;border-radius:100%;top:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13C8.65685 13 10 11.6569 10 10C10 8.34315 8.65685 7 7 7ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H7.31374L14.1924 12.1214C15.364 10.9498 17.2635 10.9498 18.435 12.1214L22 15.6863V6C22 5.44772 21.5523 5 21 5ZM21 19H10.1422L15.6066 13.5356C15.9971 13.145 16.6303 13.145 17.0208 13.5356L21.907 18.4217C21.7479 18.7633 21.4016 19 21 19Z"
    fill="currentColor"
  />
</svg>`}],at=[{nr:347,name:"import",tags:"interface arrows",css:'.gg-import{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid;border-top:0;box-shadow:-6px -8px 0 -6px,6px -8px 0 -6px}.gg-import::after,.gg-import::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-import::before{background:currentColor;width:2px;height:14px;right:6px;bottom:5px}.gg-import::after{width:6px;height:6px;border-right:2px solid;border-bottom:2px solid;right:4px;bottom:4px;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 9.98193V19.9819H19V9.98193H15V7.98193H21V21.9819H3V7.98193H9V9.98193H5Z"
    fill="currentColor"
  />
  <path
    d="M13.0001 2H11.0001V14.0531L8.46451 11.5175L7.05029 12.9317L12 17.8815L16.9498 12.9317L15.5356 11.5175L13.0001 14.053V2Z"
    fill="currentColor"
  />
</svg>`}],dt=[{nr:348,name:"inbox",tags:"buttons interface",css:'.gg-inbox{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;box-shadow:inset 0 -2px 0 0;border-radius:3px}.gg-inbox::after,.gg-inbox::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;height:7px;width:7px;border-radius:2px;bottom:-2px}.gg-inbox::before{left:-2px}.gg-inbox::after{right:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V20C22 21.1046 21.1046 22 20 22H8.1477C8.09893 22.0036 8.04968 22.0054 8 22.0054H4C2.89543 22.0054 2 21.1099 2 20.0054V5ZM5 4H19C19.5523 4 20 4.44771 20 5V14H16C14.8954 14 14 14.8954 14 16V17H10V16.0054C10 14.9008 9.10457 14.0054 8 14.0054H4V5C4 4.44772 4.44771 4 5 4Z"
    fill="currentColor"
  />
</svg>`}],xt=[{nr:349,name:"indie-hackers",tags:"brands",css:'.gg-indie-hackers{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px}.gg-indie-hackers::after,.gg-indie-hackers::before{content:"";position:absolute;box-sizing:border-box;display:block;height:12px}.gg-indie-hackers::before{width:3px;background:currentColor}.gg-indie-hackers::after{width:10px;right:0;border-left:3px solid;border-right:3px solid;background:linear-gradient(to left,currentColor 14px,transparent 0)no-repeat 0 center/14px 3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M4 6H7V18H4V6Z" fill="currentColor" />
  <path d="M10 6H13V10.5H17V6H20V18H17V13.5H13V18H10V6Z" fill="currentColor" />
</svg>`}],bt=[{nr:350,name:"infinity",tags:"signs interface",css:'.gg-infinity{background:linear-gradient(to left,currentColor 5px,transparent 0)no-repeat -4px 4px/2px 2px,linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 4px 4px/2px 2px;box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:10px;height:18px;border:4px solid transparent;box-shadow:inset 0 0 0 2px}.gg-infinity::after,.gg-infinity::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;border-radius:200px;transform:rotate(45deg)}.gg-infinity::after{border-right-color:transparent;left:-8px;top:-4px}.gg-infinity::before{border-left-color:transparent;right:-8px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.12132 9.87868L10.2044 11.9617L10.2106 11.9555L11.6631 13.408L11.6693 13.4142L13.7907 15.5355C15.7433 17.4882 18.9091 17.4882 20.8617 15.5355C22.8144 13.5829 22.8144 10.4171 20.8617 8.46447C18.9091 6.51184 15.7433 6.51184 13.7907 8.46447L13.0773 9.17786L14.4915 10.5921L15.2049 9.87868C16.3764 8.70711 18.2759 8.70711 19.4475 9.87868C20.6191 11.0503 20.6191 12.9497 19.4475 14.1213C18.2759 15.2929 16.3764 15.2929 15.2049 14.1213L13.1326 12.0491L13.1263 12.0554L9.53553 8.46447C7.58291 6.51184 4.41709 6.51184 2.46447 8.46447C0.511845 10.4171 0.511845 13.5829 2.46447 15.5355C4.41709 17.4882 7.58291 17.4882 9.53553 15.5355L10.2488 14.8222L8.83463 13.408L8.12132 14.1213C6.94975 15.2929 5.05025 15.2929 3.87868 14.1213C2.70711 12.9497 2.70711 11.0503 3.87868 9.87868C5.05025 8.70711 6.94975 8.70711 8.12132 9.87868Z"
    fill="currentColor"
  />
</svg>`}],ht=[{nr:351,name:"info",tags:"alerts interface buttons",css:'.gg-info{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:40px}.gg-info::after,.gg-info::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;background:currentColor;left:7px}.gg-info::after{bottom:2px;height:8px}.gg-info::before{height:2px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
    fill="currentColor"
  />
  <path
    d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
    fill="currentColor"
  />
</svg>`}],ct=[{nr:352,name:"inpicture",tags:"multimedia interface",css:'.gg-inpicture{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:2px}.gg-inpicture::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:5px;background:currentColor;right:2px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M20 12H14V17H20V12Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6ZM3 6H21V18H3L3 6Z"
    fill="currentColor"
  />
</svg>`}],ft=[{nr:353,name:"insert-after-o",tags:"design",css:'.gg-insert-after-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:20px}.gg-insert-after-o::before{box-shadow:-2px 12px 0,2px 12px 0;}.gg-insert-after-o::after,.gg-insert-after-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;border-radius:5px;top:5px;left:2px}.gg-insert-after-o::after{width:2px;height:8px;top:2px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 8C8.44772 8 8 8.44772 8 9C8 9.55229 8.44772 10 9 10H11V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V10H15C15.5523 10 16 9.55229 16 9C16 8.44772 15.5523 8 15 8H13V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V8H9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 13.4183 16.4183 17 12 17C7.58172 17 4 13.4183 4 9ZM12 15C8.68629 15 6 12.3137 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 12.3137 15.3137 15 12 15Z"
    fill="currentColor"
  />
  <path
    d="M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z"
    fill="currentColor"
  />
</svg>`}],Ct=[{nr:354,name:"insert-after-r",tags:"design",css:'.gg-insert-after-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:4px}.gg-insert-after-r::before{box-shadow:-2px 12px 0,2px 12px 0;}.gg-insert-after-r::after,.gg-insert-after-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;border-radius:5px;top:5px;left:2px}.gg-insert-after-r::after{width:2px;height:8px;top:2px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 8C8.44772 8 8 8.44772 8 9C8 9.55229 8.44772 10 9 10H11V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V10H15C15.5523 10 16 9.55229 16 9C16 8.44772 15.5523 8 15 8H13V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V8H9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V14C20 15.6569 18.6569 17 17 17H7C5.34315 17 4 15.6569 4 14V4ZM7 3H17C17.5523 3 18 3.44772 18 4V14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14V4C6 3.44772 6.44772 3 7 3Z"
    fill="currentColor"
  />
  <path
    d="M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z"
    fill="currentColor"
  />
</svg>`}],wt=[{nr:355,name:"insert-after",tags:"design",css:'.gg-insert-after{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px}.gg-insert-after::before{box-shadow:-2px 10px 0,2px 10px 0;}.gg-insert-after::after,.gg-insert-after::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:8px;left:4px}.gg-insert-after::after{width:2px;height:10px;top:4px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 4C12.5523 4 13 4.44772 13 5V8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H13V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V10H8C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8H11V5C11 4.44772 11.4477 4 12 4Z"
    fill="currentColor"
  />
  <path
    d="M3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z"
    fill="currentColor"
  />
</svg>`}],ut=[{nr:356,name:"insert-before-o",tags:"design",css:'.gg-insert-before-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:20px}.gg-insert-before-o::before{box-shadow:-2px -12px 0,2px -12px 0;}.gg-insert-before-o::after,.gg-insert-before-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;border-radius:5px;top:5px;left:2px}.gg-insert-before-o::after{width:2px;height:8px;top:2px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 3C4.44772 3 4 2.55228 4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H5Z"
    fill="currentColor"
  />
  <path
    d="M9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H11V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15H9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14ZM12 8C8.68629 8 6 10.6863 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8Z"
    fill="currentColor"
  />
</svg>`}],vt=[{nr:357,name:"insert-before-r",tags:"design",css:'.gg-insert-before-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:4px}.gg-insert-before-r::before{box-shadow:-2px -12px 0,2px -12px 0;}.gg-insert-before-r::after,.gg-insert-before-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;border-radius:5px;top:5px;left:2px}.gg-insert-before-r::after{width:2px;height:8px;top:2px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 3C4.44772 3 4 2.55228 4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H5Z"
    fill="currentColor"
  />
  <path
    d="M9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H11V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15H9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V9C20 7.34315 18.6569 6 17 6H7C5.34315 6 4 7.34315 4 9V19ZM17 20C17.5523 20 18 19.5523 18 19V9C18 8.44772 17.5523 8 17 8H7C6.44772 8 6 8.44772 6 9V19C6 19.5523 6.44772 20 7 20H17Z"
    fill="currentColor"
  />
</svg>`}],mt=[{nr:358,name:"insert-before",tags:"design",css:'.gg-insert-before{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px}.gg-insert-before::before{box-shadow:-2px -10px 0,2px -10px 0;}.gg-insert-before::after,.gg-insert-before::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:8px;left:4px}.gg-insert-before::after{width:2px;height:10px;top:4px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 5C3 5.55228 3.44772 6 4 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5Z"
    fill="currentColor"
  />
  <path
    d="M12 20C12.5523 20 13 19.5523 13 19V16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H13V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V14H8C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H11V19C11 19.5523 11.4477 20 12 20Z"
    fill="currentColor"
  />
</svg>`}],Ht=[{nr:359,name:"insights",tags:"interface",css:'.gg-insights{box-sizing:border-box;position:relative;display:block;width:14px;height:16px;transform:scale(var(--ggs,1));border-left:8px solid transparent;border-top:4px solid transparent;box-shadow:inset 0 0 0 2px}.gg-insights::after,.gg-insights::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:16px;border:2px solid;right:4px;bottom:0}.gg-insights::before{height:8px;right:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 8H19V20H5V10H9V4H15V8ZM13 6H11V18H13V6ZM15 10V18H17V10H15ZM9 12V18H7V12H9Z"
    fill="currentColor"
  />
</svg>`}],Vt=[{nr:360,name:"instagram",tags:"brands",css:'.gg-instagram{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:4px;width:20px;height:20px}.gg-instagram::after,.gg-instagram::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-instagram::after{border:2px solid;left:3px;width:10px;height:10px;border-radius:100%;top:3px}.gg-instagram::before{border-radius:3px;width:2px;height:2px;background:currentColor;right:1px;top:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
    fill="currentColor"
  />
  <path
    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
    fill="currentColor"
  />
</svg>`}],Lt=[{nr:361,name:"internal",tags:"interface arrows",css:'.gg-internal{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;box-shadow:-2px 2px 0 0,-4px -4px 0 -2px,4px 4px 0 -2px;margin-left:-2px;margin-top:1px}.gg-internal::after,.gg-internal::before{content:"";display:block;box-sizing:border-box;position:absolute;left:2px}.gg-internal::before{background:currentColor;transform:rotate(-45deg);width:14px;height:2px;bottom:8px}.gg-internal::after{width:7px;height:7px;border-left:2px solid;border-bottom:2px solid;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.7084 4.41165L10.4586 14.6986H14.0488V16.6986H7.04883V9.69861H9.04883V13.2799L19.2916 3L20.7084 4.41165Z"
    fill="currentColor"
  />
  <path
    d="M11 4.70581V6.70581H5V18.7058H17V12.7058H19V20.7058H3V4.70581H11Z"
    fill="currentColor"
  />
</svg>`}],Mt=[{nr:362,name:"key",tags:"interface design",css:'.gg-key{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:8px;border:2px solid;border-radius:100px;margin-left:-12px}.gg-key::after,.gg-key::before{content:"";display:block;box-sizing:border-box;position:absolute;right:-12px}.gg-key::before{background:currentColor;width:12px;height:2px;top:1px}.gg-key::after{width:5px;height:3px;top:2px;border-left:2px solid;border-right:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 8C4.34315 8 3 9.34315 3 11V13C3 14.6569 4.34315 16 6 16C7.65685 16 9 14.6569 9 13H15V15H17V13H18V15H20V11H9C9 9.34315 7.65685 8 6 8ZM7 13V11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14C6.55228 14 7 13.5523 7 13Z"
    fill="currentColor"
  />
</svg>`}],Zt=[{nr:363,name:"keyboard",tags:"interface devices",css:'.gg-keyboard{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}.gg-keyboard::after,.gg-keyboard::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:4px;background:currentColor}.gg-keyboard::before{top:2px;box-shadow:4px 0 0,8px 0 0,0 4px 0,4px 4px 0,8px 4px 0 ;width:2px;left:2px}.gg-keyboard::after{width:8px;bottom:2px;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
    fill="currentColor"
  />
  <path
    d="M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H9Z"
    fill="currentColor"
  />
  <path
    d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
    fill="currentColor"
  />
  <path
    d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
    fill="currentColor"
  />
  <path
    d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
    fill="currentColor"
  />
  <path
    d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z"
    fill="currentColor"
  />
  <path
    d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
    fill="currentColor"
  />
</svg>`}],kt=[{nr:364,name:"keyhole",tags:"interface design",css:'.gg-keyhole,.gg-keyhole::after,.gg-keyhole::before{display:block;box-sizing:border-box;border-radius:20px}.gg-keyhole{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid}.gg-keyhole::after,.gg-keyhole::before{content:"";position:absolute}.gg-keyhole::before{width:6px;height:6px;border:2px solid;left:5px;top:3px}.gg-keyhole::after{background:currentColor;width:2px;height:5px;left:7px;bottom:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 12.8293C14.1652 12.4175 15 11.3062 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.3062 9.83481 12.4175 11 12.8293V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12.8293ZM11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
    fill="currentColor"
  />
</svg>`}],yt=[{nr:365,name:"laptop",tags:"devices multimedia",css:'.gg-laptop{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;border:2px solid;border-radius:2px}.gg-laptop::after{content:"";display:block;box-sizing:border-box;position:absolute;width:22px;height:2px;background:currentColor;left:-4px;bottom:-5px;border-radius:100px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H5C3.89543 16 3 15.1046 3 14V6ZM5 6H19V14H5V6Z"
    fill="currentColor"
  />
  <path
    d="M2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H2Z"
    fill="currentColor"
  />
</svg>`}],zt=[{nr:366,name:"lastpass",tags:"brands",css:'.gg-lastpass{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:12px}.gg-lastpass::after,.gg-lastpass::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;border-radius:22px}.gg-lastpass::before{width:4px;height:4px;box-shadow:6px 0 0,12px 0 0;top:4px}.gg-lastpass::after{width:2px;height:12px;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M21 6C20.4477 6 20 6.44771 20 7V17C20 17.5523 20.4477 18 21 18C21.5523 18 22 17.5523 22 17V7C22 6.44772 21.5523 6 21 6Z"
    fill="currentColor"
  />
  <path
    d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
    fill="currentColor"
  />
  <path
    d="M12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z"
    fill="currentColor"
  />
  <path
    d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z"
    fill="currentColor"
  />
</svg>`}],Bt=[{nr:367,name:"layout-grid-small",tags:"interface design content",css:'.gg-layout-grid-small{transform:scale(var(--ggs,1))}.gg-layout-grid-small,.gg-layout-grid-small::after,.gg-layout-grid-small::before{box-sizing:border-box;position:relative;display:block;width:10px;height:2px;border-left:6px double;border-right:2px solid}.gg-layout-grid-small::after,.gg-layout-grid-small::before{content:"";position:absolute;left:-6px}.gg-layout-grid-small::after{bottom:4px}.gg-layout-grid-small::before{top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M7 7H9V9H7V7Z" fill="currentColor" />
  <path d="M11 7H13V9H11V7Z" fill="currentColor" />
  <path d="M17 7H15V9H17V7Z" fill="currentColor" />
  <path d="M7 11H9V13H7V11Z" fill="currentColor" />
  <path d="M13 11H11V13H13V11Z" fill="currentColor" />
  <path d="M15 11H17V13H15V11Z" fill="currentColor" />
  <path d="M9 15H7V17H9V15Z" fill="currentColor" />
  <path d="M11 15H13V17H11V15Z" fill="currentColor" />
  <path d="M17 15H15V17H17V15Z" fill="currentColor" />
</svg>
`}],qt=[{nr:368,name:"layout-grid",tags:"interface design content",css:'.gg-layout-grid{transform:scale(var(--ggs,1))}.gg-layout-grid,.gg-layout-grid::after,.gg-layout-grid::before{box-sizing:border-box;position:relative;display:block;width:10px;height:10px}.gg-layout-grid::after,.gg-layout-grid::before{content:"";position:absolute;height:4px;border-left:4px solid;border-right:4px solid}.gg-layout-grid::before{top:0}.gg-layout-grid::after{bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 7H7V11H11V7Z" fill="currentColor" />
  <path d="M11 13H7V17H11V13Z" fill="currentColor" />
  <path d="M13 13H17V17H13V13Z" fill="currentColor" />
  <path d="M17 7H13V11H17V7Z" fill="currentColor" />
</svg>`}],Xt=[{nr:369,name:"layout-list",tags:"interface design content",css:'.gg-layout-list{transform:scale(var(--ggs,1))}.gg-layout-list,.gg-layout-list::after,.gg-layout-list::before{box-sizing:border-box;position:relative;display:block;width:10px;height:2px;border-left:6px double;border-right:4px solid}.gg-layout-list::after,.gg-layout-list::before{content:"";position:absolute;left:-6px}.gg-layout-list::after{bottom:4px}.gg-layout-list::before{top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 7H7V9H9V7Z" fill="currentColor" />
  <path d="M7 13V11H9V13H7Z" fill="currentColor" />
  <path d="M7 15V17H9V15H7Z" fill="currentColor" />
  <path d="M11 15V17H17V15H11Z" fill="currentColor" />
  <path d="M17 13V11H11V13H17Z" fill="currentColor" />
  <path d="M17 7V9H11V7H17Z" fill="currentColor" />
</svg>`}],It=[{nr:370,name:"layout-pin",tags:"interface design content",css:'.gg-layout-pin{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:3px}.gg-layout-pin::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-radius:4px;top:3px;left:3px;box-shadow:-7px 0 0,7px 0 0,0 -7px 0,0 7px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.9307 4.01587H14.7655C14.3582 2.84239 13.2428 2 11.9307 2C10.6185 2 9.50313 2.84239 9.09581 4.01587H6.93066C5.27381 4.01587 3.93066 5.35901 3.93066 7.01587V9.21205C2.80183 9.64283 2 10.7357 2 12.0159C2 13.296 2.80183 14.3889 3.93066 14.8197V17.0159C3.93066 18.6727 5.27381 20.0159 6.93066 20.0159H9.08467C9.48247 21.2064 10.6064 22.0645 11.9307 22.0645C13.255 22.0645 14.3789 21.2064 14.7767 20.0159H16.9307C18.5875 20.0159 19.9307 18.6727 19.9307 17.0159V14.8446C21.095 14.4322 21.929 13.3214 21.929 12.0159C21.929 10.7103 21.095 9.5995 19.9307 9.18718V7.01587C19.9307 5.35901 18.5875 4.01587 16.9307 4.01587ZM5.93066 14.8687V17.0159C5.93066 17.5682 6.37838 18.0159 6.93066 18.0159H9.11902C9.54426 16.8761 10.6427 16.0645 11.9307 16.0645C13.2187 16.0645 14.3171 16.8761 14.7423 18.0159H16.9307C17.4829 18.0159 17.9307 17.5682 17.9307 17.0159V14.8458C16.7646 14.4344 15.929 13.3227 15.929 12.0159C15.929 10.709 16.7646 9.59732 17.9307 9.18597V7.01587C17.9307 6.46358 17.4829 6.01587 16.9307 6.01587H14.7543C14.338 7.17276 13.2309 8 11.9307 8C10.6304 8 9.52331 7.17276 9.10703 6.01587H6.93066C6.37838 6.01587 5.93066 6.46358 5.93066 7.01587V9.16302C7.13193 9.55465 8 10.6839 8 12.0159C8 13.3479 7.13193 14.4771 5.93066 14.8687Z"
    fill="currentColor"
  />
</svg>`}],St=[{nr:371,name:"linear",tags:"brands",css:'.gg-linear{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:18px;height:18px;overflow:hidden;border-radius:100px}.gg-linear::after,.gg-linear::before{content:"";display:block;box-sizing:border-box;position:absolute;width:25px;height:25px;transform:rotate(-45deg);background:currentColor;top:-14px;left:4px}.gg-linear::after{width:2px;box-shadow:-3px 4px 0 0,-6px -2px 0 0;top:-3px;left:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z"
    fill="currentColor"
  />
  <path
    d="M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z"
    fill="currentColor"
  />
  <path
    d="M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z"
    fill="currentColor"
  />
  <path
    d="M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z"
    fill="currentColor"
  />
</svg>`}],Yt=[{nr:372,name:"link",tags:"interface content",css:'.gg-link{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:8px;height:2px;background:currentColor;border-radius:4px}.gg-link::after,.gg-link::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:8px;height:10px;border:2px solid;top:-4px}.gg-link::before{border-right:0;border-top-left-radius:40px;border-bottom-left-radius:40px;left:-6px}.gg-link::after{border-left:0;border-top-right-radius:40px;border-bottom-right-radius:40px;right:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
    fill="currentColor"
  />
  <path
    d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
    fill="currentColor"
  />
  <path
    d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
    fill="currentColor"
  />
</svg>`}],jt=[{nr:373,name:"list-tree",tags:"interface design",css:'.gg-list-tree{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat left top/8px 8px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat center 3px/8px 2px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat 10px 17px/6px 2px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat 10px 3px/2px 16px}.gg-list-tree::after,.gg-list-tree::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;right:0}.gg-list-tree::after{bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 1H1V9H9V6H11V20H15V23H23V15H15V18H13V6H15V9H23V1H15V4H9V1ZM21 3H17V7H21V3ZM17 17H21V21H17V17Z"
    fill="currentColor"
  />
</svg>`}],At=[{nr:374,name:"list",tags:"interface design content",css:'.gg-list{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:3px}.gg-list::after,.gg-list::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;background:currentColor;top:3px;left:3px;box-shadow:0 4px 0,0 8px 0}.gg-list::after{border-radius:3px;width:8px;left:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20 4H4C3.44771 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44771 20.5523 4 20 4ZM4 2C2.34315 2 1 3.34315 1 5V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34315 21.6569 2 20 2H4ZM6 7H8V9H6V7ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H11ZM8 11H6V13H8V11ZM10 12C10 11.4477 10.4477 11 11 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H11C10.4477 13 10 12.5523 10 12ZM8 15H6V17H8V15ZM10 16C10 15.4477 10.4477 15 11 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H11C10.4477 17 10 16.5523 10 16Z"
    fill="currentColor"
  />
</svg>`}],Ut=[{nr:375,name:"live-photo",tags:"design multimedia",css:'.gg-live-photo{transform:scale(var(--ggs,1))}.gg-live-photo,.gg-live-photo::after{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;border-radius:100px;border:2px dotted currentColor}.gg-live-photo::after{content:"";position:absolute;width:8px;height:8px;border:1px solid transparent;top:4px;left:4px;box-shadow:0 0 0 2px,inset 0 0 0 2px currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.9805 21.9525C12.6579 21.9839 12.3308 22 12 22C11.6692 22 11.3421 21.9839 11.0194 21.9525L11.2132 19.9619C11.4715 19.9871 11.7339 20 12 20C12.2661 20 12.5285 19.9871 12.7868 19.9619L12.9805 21.9525Z"
    fill="currentColor"
  />
  <path
    d="M9.09617 21.5719L9.67608 19.6578C9.17124 19.5048 8.68725 19.3031 8.22951 19.058L7.28519 20.821C7.8578 21.1277 8.46374 21.3803 9.09617 21.5719Z"
    fill="currentColor"
  />
  <path
    d="M5.65597 19.7304L6.92562 18.1851C6.5202 17.852 6.14801 17.4798 5.81491 17.0744L4.2696 18.344C4.68539 18.8501 5.1499 19.3146 5.65597 19.7304Z"
    fill="currentColor"
  />
  <path
    d="M3.17901 16.7148L4.94204 15.7705C4.69686 15.3127 4.49516 14.8288 4.34221 14.3239L2.42813 14.9038C2.61974 15.5363 2.87231 16.1422 3.17901 16.7148Z"
    fill="currentColor"
  />
  <path
    d="M2.04746 12.9805L4.03806 12.7868C4.01292 12.5285 4 12.2661 4 12C4 11.7339 4.01292 11.4715 4.03806 11.2132L2.04746 11.0195C2.01607 11.3421 2 11.6692 2 12C2 12.3308 2.01607 12.6579 2.04746 12.9805Z"
    fill="currentColor"
  />
  <path
    d="M2.42813 9.09617L4.34221 9.67608C4.49517 9.17124 4.69686 8.68725 4.94204 8.22951L3.17901 7.28519C2.87231 7.8578 2.61974 8.46374 2.42813 9.09617Z"
    fill="currentColor"
  />
  <path
    d="M4.2696 5.65597L5.81491 6.92562C6.14801 6.5202 6.5202 6.14801 6.92562 5.81491L5.65597 4.2696C5.14991 4.68539 4.68539 5.1499 4.2696 5.65597Z"
    fill="currentColor"
  />
  <path
    d="M7.2852 3.17901L8.22951 4.94204C8.68726 4.69686 9.17124 4.49516 9.67608 4.34221L9.09617 2.42813C8.46374 2.61974 7.8578 2.87231 7.2852 3.17901Z"
    fill="currentColor"
  />
  <path
    d="M11.0195 2.04746C11.3421 2.01607 11.6692 2 12 2C12.3308 2 12.6579 2.01607 12.9805 2.04746L12.7868 4.03806C12.5285 4.01292 12.2661 4 12 4C11.7339 4 11.4715 4.01292 11.2132 4.03806L11.0195 2.04746Z"
    fill="currentColor"
  />
  <path
    d="M14.9038 2.42813L14.3239 4.34221C14.8288 4.49517 15.3127 4.69686 15.7705 4.94204L16.7148 3.17901C16.1422 2.87231 15.5363 2.61974 14.9038 2.42813Z"
    fill="currentColor"
  />
  <path
    d="M18.344 4.2696L17.0744 5.81491C17.4798 6.14801 17.852 6.5202 18.1851 6.92562L19.7304 5.65597C19.3146 5.14991 18.8501 4.68539 18.344 4.2696Z"
    fill="currentColor"
  />
  <path
    d="M20.821 7.2852L19.058 8.22951C19.3031 8.68726 19.5048 9.17124 19.6578 9.67608L21.5719 9.09617C21.3803 8.46374 21.1277 7.8578 20.821 7.2852Z"
    fill="currentColor"
  />
  <path
    d="M21.9525 11.0195L19.9619 11.2132C19.9871 11.4715 20 11.7339 20 12C20 12.2661 19.9871 12.5285 19.9619 12.7868L21.9525 12.9806C21.9839 12.6579 22 12.3308 22 12C22 11.6692 21.9839 11.3421 21.9525 11.0195Z"
    fill="currentColor"
  />
  <path
    d="M21.5719 14.9038L19.6578 14.3239C19.5048 14.8288 19.3031 15.3127 19.058 15.7705L20.821 16.7148C21.1277 16.1422 21.3803 15.5363 21.5719 14.9038Z"
    fill="currentColor"
  />
  <path
    d="M19.7304 18.344L18.1851 17.0744C17.852 17.4798 17.4798 17.852 17.0744 18.1851L18.344 19.7304C18.8501 19.3146 19.3146 18.8501 19.7304 18.344Z"
    fill="currentColor"
  />
  <path
    d="M16.7148 20.821L15.7705 19.058C15.3127 19.3031 14.8288 19.5048 14.3239 19.6578L14.9038 21.5719C15.5363 21.3803 16.1422 21.1277 16.7148 20.821Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12Z"
    fill="currentColor"
  />
</svg>`}],Dt=[{nr:376,name:"loadbar-alt",tags:"interface signs",css:'@keyframes loadbaralt{0%,to{left:0;right:80%}25%,75%{left:0;right:0}50%{left:80%;right:0}}.gg-loadbar-alt,.gg-loadbar-alt::before,.gg-loadbar-alt::after{display:block;box-sizing:border-box;height:4px;border-radius:4px}.gg-loadbar-alt{position:relative;transform:scale(var(--ggs,1));width:18px}.gg-loadbar-alt::after,.gg-loadbar-alt::before{background:currentColor;content:"";position:absolute}.gg-loadbar-alt::before{animation:loadbaralt 2s cubic-bezier(0,0,.58,1) infinite}.gg-loadbar-alt::after{width:18px;opacity:.3}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect opacity="0.3" x="3" y="10" width="18" height="4" rx="2" fill="currentColor" />
  <rect x="7" y="10" width="10" height="4" rx="2" fill="currentColor" />
</svg>`}],Pt=[{nr:377,name:"loadbar-doc",tags:"interface signs",css:'@keyframes gg-doc{0%{left:-16px}60%,to{left:0}}.gg-loadbar-doc{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:1px;width:12px;height:14px;overflow:hidden}.gg-loadbar-doc::after,.gg-loadbar-doc::before{content:"";display:block;position:absolute;box-sizing:border-box;height:2px;background:currentColor;animation:gg-doc 1s linear infinite alternate}.gg-loadbar-doc::before{width:14px;box-shadow:-4px 4px 0}.gg-loadbar-doc::after{width:5px;top:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 5H7C6.44772 5 6 5.44772 6 6V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V6C18 5.44772 17.5523 5 17 5ZM7 3C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3H7Z"
    fill="currentColor"
  />
  <path d="M8 7H16V9H8V7Z" fill="currentColor" />
  <path d="M8 11H16V13H8V11Z" fill="currentColor" />
  <path d="M8 15H13V17H8V15Z" fill="currentColor" />
</svg>`}],Gt=[{nr:378,name:"loadbar-sound",tags:"interface signs",css:'@keyframes gg-bar{10%{box-shadow:inset 0 -4px 0}30%{box-shadow:inset 0 -10px 0}60%{box-shadow:inset 0 -6px 0}80%{box-shadow:inset 0 -8px 0}to{box-shadow:inset 0 -2px 0}}.gg-loadbar-sound,.gg-loadbar-sound::after,.gg-loadbar-sound::before{display:block;box-sizing:border-box;width:2px;height:12px;box-shadow:inset 0 -12px 0;animation:gg-bar 1.3s ease infinite alternate}.gg-loadbar-sound{position:relative;transform:scale(var(--ggs,1))}.gg-loadbar-sound::after,.gg-loadbar-sound::before{content:"";position:absolute;bottom:0}.gg-loadbar-sound::before{left:-4px;animation-delay:-2.4s}.gg-loadbar-sound::after{right:-4px;animation-delay:-3.7s}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 6H13V18H11V6Z" fill="currentColor" />
  <path d="M7 13H9V18H7V13Z" fill="currentColor" />
  <path d="M15 9H17V18H15V9Z" fill="currentColor" />
</svg>`}],Tt=[{nr:379,name:"loadbar",tags:"interface signs",css:'@keyframes loadbar{0%,to{left:0;right:80%}25%,75%{left:0;right:0}50%{left:80%;right:0}}.gg-loadbar,.gg-loadbar::before{display:block;box-sizing:border-box;height:4px}.gg-loadbar{position:relative;transform:scale(var(--ggs,1));width:18px}.gg-loadbar::before{content:"";position:absolute;border-radius:4px;background:currentColor;animation:loadbar 2s cubic-bezier(0,0,.58,1) infinite}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="3" y="10" width="18" height="4" rx="2" fill="currentColor" />
</svg>`}],$t=[{nr:380,name:"lock-unlock",tags:"interface buttons",css:'.gg-lock-unlock{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border:2px solid;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom:transparent;margin-top:-18px;margin-left:-2px}.gg-lock-unlock::after,.gg-lock-unlock::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-lock-unlock::after{border:2px solid transparent;box-shadow:0 0 0 2px;width:16px;height:10px;border-radius:2px;left:-4px;top:10px}.gg-lock-unlock::before{width:2px;height:6px;background:currentColor;left:-2px;top:4px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 7H17C17 4.79086 15.2091 3 13 3C10.7909 3 9 4.79086 9 7V10H18C19.6569 10 21 11.3431 21 13V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V13C3 11.3431 4.34315 10 6 10H7V7C7 3.68629 9.68629 1 13 1C16.3137 1 19 3.68629 19 7ZM18 12H6C5.44772 12 5 12.4477 5 13V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V13C19 12.4477 18.5523 12 18 12Z"
    fill="currentColor"
  />
</svg>`}],Ot=[{nr:381,name:"lock",tags:"interface buttons",css:'.gg-lock{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:11px;border:2px solid;border-top-right-radius:50%;border-top-left-radius:50%;border-bottom:transparent;margin-top:-12px}.gg-lock::after{content:"";display:block;box-sizing:border-box;position:absolute;width:16px;height:10px;border-radius:2px;border:2px solid transparent;box-shadow:0 0 0 2px;left:-4px;top:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z"
    fill="currentColor"
  />
</svg>`}],Et=[{nr:382,name:"log-in",tags:"interface buttons",css:'.gg-log-in{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:16px;border:2px solid;border-left:0;border-top-right-radius:2px;border-bottom-right-radius:2px;margin-right:-10px}.gg-log-in::after,.gg-log-in::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-log-in::after{border-top:2px solid;border-right:2px solid;transform:rotate(45deg);width:8px;height:8px;left:-8px;bottom:2px}.gg-log-in::before{border-radius:3px;width:10px;height:2px;background:currentColor;left:-11px;bottom:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.4857 20H19.4857C20.5903 20 21.4857 19.1046 21.4857 18V6C21.4857 4.89543 20.5903 4 19.4857 4H15.4857V6H19.4857V18H15.4857V20Z"
    fill="currentColor"
  />
  <path
    d="M10.1582 17.385L8.73801 15.9768L12.6572 12.0242L3.51428 12.0242C2.96199 12.0242 2.51428 11.5765 2.51428 11.0242C2.51429 10.4719 2.962 10.0242 3.51429 10.0242L12.6765 10.0242L8.69599 6.0774L10.1042 4.6572L16.4951 10.9941L10.1582 17.385Z"
    fill="currentColor"
  />
</svg>`}],Ft=[{nr:383,name:"log-off",tags:"interface buttons",css:'.gg-log-off{box-sizing:border-box;position:relative;display:block;border-radius:16px;border:2px solid;transform:scale(var(--ggs,1));width:16px;height:16px;border-top:2px solid transparent}.gg-log-off::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:8px;width:2px;background:currentColor;left:5px;bottom:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
    fill="currentColor"
  />
  <path
    d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
    fill="currentColor"
  />
</svg>`}],Nt=[{nr:384,name:"log-out",tags:"interface buttons",css:'.gg-log-out{box-sizing:border-box;position:relative;display:block;width:6px;height:16px;border:2px solid;transform:scale(var(--ggs,1));border-right:0;border-top-left-radius:2px;border-bottom-left-radius:2px;margin-left:-10px}.gg-log-out::after,.gg-log-out::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-log-out::after{border-top:2px solid;border-left:2px solid;transform:rotate(-45deg);width:8px;height:8px;left:4px;bottom:2px}.gg-log-out::before{border-radius:3px;width:10px;height:2px;background:currentColor;left:5px;bottom:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
    fill="currentColor"
  />
  <path
    d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
    fill="currentColor"
  />
</svg>`}],Jt=[{nr:385,name:"loupe",tags:"interface",css:'.gg-loupe,.gg-loupe::after{display:block;box-sizing:border-box}.gg-loupe{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:22px;border-bottom-right-radius:6px;overflow:hidden;background:linear-gradient(to left,currentColor 8px,transparent 0) no-repeat center/8px 2px,linear-gradient(to left,currentColor 8px,transparent 0) no-repeat center/2px 8px}.gg-loupe::after{content:"";position:absolute;width:14px;height:14px;border-radius:100%;box-shadow:0 0 0 6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 11V8H13V11H16V13H13V16H11V13H8V11H11Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 12C3 16.9706 7.02944 21 12 21H18C19.6569 21 21 19.6569 21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5Z"
    fill="currentColor"
  />
</svg>`}],Kt=[{nr:386,name:"magnet",tags:"design signs",css:'.gg-magnet,.gg-magnet::before{display:block;box-sizing:border-box;width:14px}.gg-magnet{border:4px solid;transform:scale(var(--ggs,1));border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-top:0;position:relative;height:12px}.gg-magnet::before{content:"";position:absolute;height:3px;border-left:4px solid;border-right:4px solid;top:-5px;left:-4px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M8 2.5H4V5.5H8V2.5Z" fill="currentColor" fill-opacity="0.5" />
  <path d="M20 2.5H16V5.5H20V2.5Z" fill="currentColor" fill-opacity="0.5" />
  <path
    d="M8 7.5H4V13.5C4 17.9183 7.58172 21.5 12 21.5C16.4183 21.5 20 17.9183 20 13.5V7.5H16V13.5C16 15.7091 14.2091 17.5 12 17.5C9.79086 17.5 8 15.7091 8 13.5V7.5Z"
    fill="currentColor"
  />
</svg>`}],Qt=[{nr:387,name:"mail-forward",tags:"interface arrows",css:'.gg-mail-forward,.gg-mail-forward::before{display:block;box-sizing:border-box;height:6px;border-top:2px solid}.gg-mail-forward{border-left:2px solid;transform:scale(var(--ggs,1));border-top-left-radius:4px;position:relative;width:14px}.gg-mail-forward::before{content:"";position:absolute;width:6px;border-right:2px solid;top:-4px;right:-1px;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z"
    fill="currentColor"
  />
</svg>`}],Rt=[{nr:388,name:"mail-open",tags:"interface",css:'.gg-mail-open,.gg-mail-open::after{display:block;box-sizing:border-box;height:14px;border:2px solid}.gg-mail-open{border-top:0;transform:scale(var(--ggs,1));position:relative;width:18px;border-radius:2px}.gg-mail-open::after{content:"";position:absolute;border-radius:3px;width:14px;transform:rotate(-45deg);bottom:3px;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.05002 10.0151C2.79178 9.30708 2.94668 8.48233 3.51474 7.91427L9.8787 1.55031C11.0503 0.378738 12.9498 0.378738 14.1213 1.55031L20.4853 7.91427C21.0534 8.48239 21.2083 9.30727 20.9499 10.0154C20.9824 10.1139 20.9999 10.2191 20.9999 10.3285V21.3285C20.9999 22.4331 20.1045 23.3285 18.9999 23.3285H4.99994C3.89537 23.3285 2.99994 22.4331 2.99994 21.3285V10.3285C2.99994 10.219 3.01752 10.1137 3.05002 10.0151ZM4.92896 9.32848L11.2929 2.96452C11.6834 2.574 12.3166 2.574 12.7071 2.96452L19.0711 9.32848H19.0408V9.3588L12.7071 15.6924C12.3166 16.083 11.6834 16.083 11.2929 15.6924L4.92896 9.32848ZM18.9999 12.2281L14.1213 17.1067C12.9498 18.2782 11.0503 18.2782 9.8787 17.1067L4.99994 12.2279L4.99994 21.3285H18.9999V12.2281Z"
    fill="currentColor"
  />
</svg>`}],Wt=[{nr:389,name:"mail-reply",tags:"interface arrows",css:'.gg-mail-reply,.gg-mail-reply::before{display:block;box-sizing:border-box;height:6px;border-top:2px solid}.gg-mail-reply{border-right:2px solid;transform:scale(var(--ggs,1));border-top-right-radius:4px;position:relative;width:14px}.gg-mail-reply::before{content:"";position:absolute;width:6px;border-left:2px solid;top:-4px;left:-1px;transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.3623 15.529L8.94804 16.9432L3.99829 11.9934L8.94804 7.0437L10.3623 8.45791L7.86379 10.9564H16.0018C18.2109 10.9564 20.0018 12.7472 20.0018 14.9564V16.9564H18.0018V14.9564C18.0018 13.8518 17.1063 12.9564 16.0018 12.9564H7.78965L10.3623 15.529Z"
    fill="currentColor"
  />
</svg>`}],_t=[{nr:390,name:"mail",tags:"interface",css:'.gg-mail,.gg-mail::after{display:block;box-sizing:border-box;height:14px;border:2px solid}.gg-mail{overflow:hidden;transform:scale(var(--ggs,1));position:relative;width:18px;border-radius:2px}.gg-mail::after{content:"";position:absolute;border-radius:3px;width:14px;transform:rotate(-45deg);bottom:3px;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
    fill="currentColor"
  />
</svg>`}],o4=[{nr:391,name:"math-divide",tags:"interface content maths",css:'.gg-math-divide{transform:scale(var(--ggs,1))}.gg-math-divide,.gg-math-divide::after,.gg-math-divide::before{box-sizing:border-box;position:relative;display:block;width:16px;height:2px;background:currentColor;border-radius:20px}.gg-math-divide::after,.gg-math-divide::before{content:"";position:absolute;width:4px;height:4px;top:-6px;left:6px}.gg-math-divide::after{top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
    fill="currentColor"
  />
  <path
    d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
    fill="currentColor"
  />
  <path
    d="M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z"
    fill="currentColor"
  />
</svg>`}],r4=[{nr:392,name:"math-equal",tags:"interface content maths",css:".gg-math-equal{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:2px;background:currentColor;border-radius:10px;margin-top:-6px;box-shadow:0 6px 0}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 9C4.44772 9 4 9.44771 4 10C4 10.5523 4.44772 11 5 11H19C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9H5Z"
    fill="currentColor"
  />
  <path
    d="M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H19C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13H5Z"
    fill="currentColor"
  />
</svg>`}],e4=[{nr:393,name:"math-minus",tags:"interface content maths",css:".gg-math-minus{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:2px;background:currentColor;border-radius:10px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
    fill="currentColor"
  />
</svg>`}],n4=[{nr:394,name:"math-percent",tags:"interface content maths",css:'.gg-math-percent{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:16px;height:2px;background:currentColor;border-radius:20px}.gg-math-percent::after,.gg-math-percent::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px;background:currentColor;border-radius:20px;top:-7px;left:6px}.gg-math-percent::after{top:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.2426 6.34319C16.6331 5.95266 17.2663 5.95266 17.6568 6.34319C18.0474 6.73371 18.0474 7.36688 17.6568 7.7574L7.75734 17.6569C7.36681 18.0474 6.73365 18.0474 6.34313 17.6569C5.9526 17.2664 5.9526 16.6332 6.34313 16.2427L16.2426 6.34319Z"
    fill="currentColor"
  />
  <path
    d="M9.87866 9.87872C9.09761 10.6598 7.83128 10.6598 7.05023 9.87872C6.26918 9.09767 6.26918 7.83134 7.05023 7.05029C7.83128 6.26924 9.09761 6.26924 9.87866 7.05029C10.6597 7.83134 10.6597 9.09767 9.87866 9.87872Z"
    fill="currentColor"
  />
  <path
    d="M14.1213 16.9498C14.9023 17.7308 16.1687 17.7308 16.9497 16.9498C17.7308 16.1687 17.7308 14.9024 16.9497 14.1214C16.1687 13.3403 14.9023 13.3403 14.1213 14.1214C13.3403 14.9024 13.3403 16.1687 14.1213 16.9498Z"
    fill="currentColor"
  />
</svg>`}],t4=[{nr:395,name:"math-plus",tags:"interface content maths",css:'.gg-math-plus,.gg-math-plus::after{display:block;box-sizing:border-box;background:currentColor;border-radius:10px}.gg-math-plus{margin-top:-2px;position:relative;transform:scale(var(--ggs,1));width:16px;height:2px}.gg-math-plus::after{content:"";position:absolute;width:2px;height:16px;top:-7px;left:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
    fill="currentColor"
  />
</svg>`}],i4=[{nr:396,name:"maximize-alt",tags:"interface arrows",css:'.gg-maximize-alt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}.gg-maximize-alt::after,.gg-maximize-alt::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:22px;height:2px;border-left:8px solid;border-right:8px solid;transform:rotate(-45deg);bottom:6px;left:-4px}.gg-maximize-alt::before{transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 3H9V5H6.46173L11.3047 9.84298L9.8905 11.2572L5 6.3667V9H3V3Z"
    fill="currentColor"
  />
  <path
    d="M3 21H9V19H6.3764L11.3046 14.0718L9.89038 12.6576L5 17.548V15H3V21Z"
    fill="currentColor"
  />
  <path
    d="M15 21H21V15H19V17.5244L14.1332 12.6576L12.719 14.0718L17.6472 19H15V21Z"
    fill="currentColor"
  />
  <path
    d="M21 3H15V5H17.5619L12.7189 9.84301L14.1331 11.2572L19 6.39032V9H21V3Z"
    fill="currentColor"
  />
</svg>`}],l4=[{nr:397,name:"maximize",tags:"interface arrows",css:".gg-maximize{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M3 3H9V5H5V9H3V3Z" fill="currentColor" />
  <path d="M3 21H9V19H5V15H3V21Z" fill="currentColor" />
  <path d="M15 21H21V15H19V19H15V21Z" fill="currentColor" />
  <path d="M21 3H15V5H19V9H21V3Z" fill="currentColor" />
</svg>`}],s4=[{nr:398,name:"maze",tags:"brands",css:'.gg-maze{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:24px;height:14px}.gg-maze::after,.gg-maze::before{content:"";display:block;position:absolute;box-sizing:border-box;height:12px;transform:rotate(45deg)}.gg-maze::before{width:12px;right:2px;bottom:-2px;border-left:4px solid;border-top:4px solid}.gg-maze::after{width:4px;background:currentColor;left:3px;bottom:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.3709 9.59273L8.77816 7L1 14.7782L3.59272 17.3709L11.3709 9.59273Z"
    fill="currentColor"
  />
  <path
    d="M15.2218 7L23 14.7782L20.424 17.3542L15.2218 12.152L10.0197 17.3542L7.44367 14.7782L15.2218 7Z"
    fill="currentColor"
  />
</svg>`}],g4=[{nr:399,name:"media-live",tags:"multimedia signs interface",css:'.gg-media-live{transform:scale(var(--ggs,1))}.gg-media-live,.gg-media-live::after{border-top-color:transparent;border-bottom-color:transparent}.gg-media-live,.gg-media-live::after,.gg-media-live::before{box-sizing:border-box;position:relative;display:block;border:2px solid;border-radius:50%;width:14px;height:14px}.gg-media-live::after,.gg-media-live::before{content:"";position:absolute;width:6px;height:6px;top:2px;left:2px}.gg-media-live::after{width:22px;height:22px;top:-6px;left:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
    fill="currentColor"
  />
</svg>`}],p4=[{nr:400,name:"media-podcast",tags:"multimedia signs interface",css:'.gg-media-podcast{transform:scale(var(--ggs,1))}.gg-media-podcast,.gg-media-podcast::after,.gg-media-podcast::before{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;border:2px solid;border-bottom-color:transparent;border-radius:50%}.gg-media-podcast::after,.gg-media-podcast::before{content:"";position:absolute;width:6px;height:6px;top:2px;left:2px}.gg-media-podcast::after{width:22px;height:22px;top:-6px;left:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.6361 20.364C4.00738 18.7353 3 16.4853 3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 16.4853 19.9926 18.7353 18.364 20.3639L19.7782 21.7782C21.7688 19.7875 23 17.0376 23 14C23 7.92487 18.0751 3 12 3C5.92487 3 1 7.92487 1 14C1 17.0376 2.23124 19.7876 4.22189 21.7782L5.6361 20.364Z"
    fill="currentColor"
  />
  <path
    d="M16.9498 18.9497C18.2165 17.683 19 15.933 19 14C19 10.134 15.866 7 12 7C8.13401 7 5 10.134 5 14C5 15.933 5.78353 17.6831 7.05031 18.9498L8.46453 17.5356C7.55967 16.6308 7 15.3807 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14C17 15.3807 16.4404 16.6307 15.5356 17.5355L16.9498 18.9497Z"
    fill="currentColor"
  />
  <path
    d="M14.1213 16.1213C14.6642 15.5784 15 14.8284 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 14.8285 9.33581 15.5785 9.87874 16.1214L11.293 14.7072C11.112 14.5262 11 14.2762 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.2761 12.8881 14.5261 12.7071 14.7071L14.1213 16.1213Z"
    fill="currentColor"
  />
</svg>`}],a4=[{nr:401,name:"menu-boxed",tags:"interface content",css:'.gg-menu-boxed{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:3px;border:2px solid;}.gg-menu-boxed::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:3px;top:2px;left:2px;box-shadow:0 4px 0,0 8px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.01562 6.98193C7.46334 6.98193 7.01562 7.43285 7.01562 7.98513C7.01562 8.53742 7.46334 8.98833 8.01563 8.98833H15.9659C16.5182 8.98833 16.9659 8.53742 16.9659 7.98513C16.9659 7.43285 16.5182 6.98193 15.9659 6.98193H8.01562Z"
    fill="currentColor"
  />
  <path
    d="M7.01562 12C7.01562 11.4477 7.46334 10.9968 8.01562 10.9968H15.9659C16.5182 10.9968 16.9659 11.4477 16.9659 12C16.9659 12.5523 16.5182 13.0032 15.9659 13.0032H8.01563C7.46334 13.0032 7.01562 12.5523 7.01562 12Z"
    fill="currentColor"
  />
  <path
    d="M8.0249 15.0122C7.47262 15.0122 7.0249 15.4631 7.0249 16.0154C7.0249 16.5677 7.47262 17.0186 8.0249 17.0186H15.9752C16.5275 17.0186 16.9752 16.5677 16.9752 16.0154C16.9752 15.4631 16.5275 15.0122 15.9752 15.0122H8.0249Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
    fill="currentColor"
  />
</svg>`}],d4=[{nr:402,name:"menu-cake",tags:"interface",css:'.gg-menu-cake{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:18px}.gg-menu-cake::after,.gg-menu-cake::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor;border-radius:22px}.gg-menu-cake::before{width:18px;box-shadow:0 -4px 0,0 -8px 0;left:1px;bottom:2px}.gg-menu-cake::after{width:4px;height:4px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
    fill="currentColor"
  />
  <path
    d="M5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12H19C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10H5Z"
    fill="currentColor"
  />
  <path
    d="M4 15C4 14.4477 4.44772 14 5 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15Z"
    fill="currentColor"
  />
  <path
    d="M5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18H5Z"
    fill="currentColor"
  />
</svg>`}],x4=[{nr:403,name:"menu-cheese",tags:"interface",css:'.gg-menu-cheese{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:10px}.gg-menu-cheese::after,.gg-menu-cheese::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px}.gg-menu-cheese::before{width:18px;background:currentColor;border-radius:22px;box-shadow:0 -6px 0,0 -12px 0;bottom:0}.gg-menu-cheese::after{width:2px;left:2px;bottom:3px;border-top:3px solid;border-left:4px solid transparent;border-right:4px solid transparent}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
    fill="currentColor"
  />
  <path
    d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
    fill="currentColor"
  />
  <path
    d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H10.2625L7.61456 15.6479L4.96662 13H4C3.44772 13 3 12.5523 3 12Z"
    fill="currentColor"
  />
</svg>`}],b4=[{nr:404,name:"menu-grid-o",tags:"interface",css:'.gg-menu-grid-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;}.gg-menu-grid-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px;background:currentColor;box-shadow:0 6px 0,6px 6px 0,12px 6px 0,6px 12px 0,12px 12px 0,6px 0 0,12px 0 0,0 12px 0 ;border-radius:22px;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
    fill="currentColor"
  />
  <path
    d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
    fill="currentColor"
  />
  <path
    d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
    fill="currentColor"
  />
  <path
    d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
    fill="currentColor"
  />
  <path
    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
    fill="currentColor"
  />
  <path
    d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
    fill="currentColor"
  />
  <path
    d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
    fill="currentColor"
  />
  <path
    d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
    fill="currentColor"
  />
  <path
    d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
    fill="currentColor"
  />
</svg>`}],h4=[{nr:405,name:"menu-grid-r",tags:"interface",css:'.gg-menu-grid-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;}.gg-menu-grid-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px;background:currentColor;box-shadow:0 6px 0,6px 6px 0,12px 6px 0,6px 12px 0,12px 12px 0,6px 0 0,12px 0 0,0 12px 0 ;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M4 4H8V8H4V4Z" fill="currentColor" />
  <path d="M4 10H8V14H4V10Z" fill="currentColor" />
  <path d="M8 16H4V20H8V16Z" fill="currentColor" />
  <path d="M10 4H14V8H10V4Z" fill="currentColor" />
  <path d="M14 10H10V14H14V10Z" fill="currentColor" />
  <path d="M10 16H14V20H10V16Z" fill="currentColor" />
  <path d="M20 4H16V8H20V4Z" fill="currentColor" />
  <path d="M16 10H20V14H16V10Z" fill="currentColor" />
  <path d="M20 16H16V20H20V16Z" fill="currentColor" />
</svg>`}],c4=[{nr:406,name:"menu-hotdog",tags:"interface",css:'.gg-menu-hotdog{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px;border-top:3px solid;border-bottom:3px solid;border-radius:3px}.gg-menu-hotdog::before{content:"";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;background:currentColor;border-radius:4px;top:2px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 6C5.34315 6 4 7.34315 4 9H20C20 7.34315 18.6569 6 17 6H7Z"
    fill="currentColor"
  />
  <path
    d="M7 18C5.34315 18 4 16.6569 4 15H20C20 16.6569 18.6569 18 17 18H7Z"
    fill="currentColor"
  />
  <path
    d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3Z"
    fill="currentColor"
  />
</svg>`}],f4=[{nr:407,name:"menu-left-alt",tags:"interface",css:'.gg-menu-left-alt{box-sizing:border-box;position:relative;display:block;width:16px;height:14px;transform:scale(var(--ggs,1))}.gg-menu-left-alt::after,.gg-menu-left-alt::before{content:"";position:absolute;box-sizing:border-box;display:block;height:2px;border-radius:4px;background:currentColor}.gg-menu-left-alt::before{width:16px;box-shadow:0 12px 0}.gg-menu-left-alt::after{width:10px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
    fill="currentColor"
  />
  <path
    d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
    fill="currentColor"
  />
  <path
    d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
    fill="currentColor"
  />
</svg>`}],C4=[{nr:408,name:"menu-left",tags:"interface content buttons",css:'.gg-menu-left{transform:scale(var(--ggs,1))}.gg-menu-left,.gg-menu-left::after,.gg-menu-left::before{box-sizing:border-box;position:relative;display:block;width:20px;height:2px;border-radius:3px;background:currentColor}.gg-menu-left::after,.gg-menu-left::before{content:"";position:absolute;top:-6px;width:10px}.gg-menu-left::after{top:6px;width:14px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
    fill="currentColor"
  />
  <path
    d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
    fill="currentColor"
  />
  <path
    d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
    fill="currentColor"
  />
</svg>`}],w4=[{nr:409,name:"menu-motion",tags:"interface",css:'.gg-menu-motion{box-sizing:border-box;position:relative;display:block;width:18px;height:14px;transform:scale(var(--ggs,1))}.gg-menu-motion::before{content:"";position:absolute;box-sizing:border-box;display:block;width:10px;height:2px;bottom:0;box-shadow:4px -6px 0,8px -12px 0;border-radius:4px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H12Z"
    fill="currentColor"
  />
  <path
    d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z"
    fill="currentColor"
  />
  <path
    d="M3 18C3 17.4477 3.44772 17 4 17H12C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19H4C3.44772 19 3 18.5523 3 18Z"
    fill="currentColor"
  />
</svg>`}],u4=[{nr:410,name:"menu-oreos",tags:"interface",css:'.gg-menu-oreos{box-sizing:border-box;position:relative;display:block;width:16px;height:18px;transform:scale(var(--ggs,1))}.gg-menu-oreos::after,.gg-menu-oreos::before{content:"";position:absolute;box-sizing:border-box;display:block;width:16px;height:8px;border-top:3px solid;border-bottom:3px solid;border-radius:3px}.gg-menu-oreos::after{bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 3C5.34315 3 4 4.34315 4 6H20C20 4.34315 18.6569 3 17 3H7Z"
    fill="currentColor"
  />
  <path
    d="M7 11C5.34315 11 4 9.65685 4 8H20C20 9.65685 18.6569 11 17 11H7Z"
    fill="currentColor"
  />
  <path
    d="M7 13C5.34315 13 4 14.3431 4 16H20C20 14.3431 18.6569 13 17 13H7Z"
    fill="currentColor"
  />
  <path
    d="M7 21C5.34315 21 4 19.6569 4 18H20C20 19.6569 18.6569 21 17 21H7Z"
    fill="currentColor"
  />
</svg>`}],v4=[{nr:411,name:"menu-right-alt",tags:"interface",css:'.gg-menu-right-alt{box-sizing:border-box;position:relative;display:block;width:16px;height:14px;transform:scale(var(--ggs,1))}.gg-menu-right-alt::after,.gg-menu-right-alt::before{content:"";position:absolute;box-sizing:border-box;display:block;height:2px;border-radius:4px;background:currentColor}.gg-menu-right-alt::before{width:16px;box-shadow:0 12px 0}.gg-menu-right-alt::after{width:10px;right:0;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
    fill="currentColor"
  />
  <path
    d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
    fill="currentColor"
  />
  <path
    d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z"
    fill="currentColor"
  />
</svg>`}],m4=[{nr:412,name:"menu-right",tags:"interface content buttons",css:'.gg-menu-right{transform:scale(var(--ggs,1))}.gg-menu-right,.gg-menu-right::after,.gg-menu-right::before{box-sizing:border-box;position:relative;display:block;width:20px;height:2px;border-radius:3px;background:currentColor}.gg-menu-right::after,.gg-menu-right::before{content:"";position:absolute;top:-6px;right:0;width:10px}.gg-menu-right::after{top:6px;width:14px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
    fill="currentColor"
  />
  <path
    d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
    fill="currentColor"
  />
  <path
    d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
    fill="currentColor"
  />
</svg>`}],H4=[{nr:413,name:"menu-round",tags:"interface content",css:'.gg-menu-round{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border-radius:24px;border:2px solid;}.gg-menu-round::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:3px;top:4px;left:4px;box-shadow:0 4px 0,0 8px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 6.9834C7.44772 6.9834 7 7.43111 7 7.9834C7 8.53568 7.44772 8.9834 8 8.9834H16C16.5523 8.9834 17 8.53568 17 7.9834C17 7.43111 16.5523 6.9834 16 6.9834H8Z"
    fill="currentColor"
  />
  <path
    d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z"
    fill="currentColor"
  />
  <path
    d="M8 15.017C7.44772 15.017 7 15.4647 7 16.017C7 16.5693 7.44772 17.017 8 17.017H16C16.5523 17.017 17 16.5693 17 16.017C17 15.4647 16.5523 15.017 16 15.017H8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],V4=[{nr:414,name:"menu",tags:"interface content buttons",css:'.gg-menu{transform:scale(var(--ggs,1))}.gg-menu,.gg-menu::after,.gg-menu::before{box-sizing:border-box;position:relative;display:block;width:20px;height:2px;border-radius:3px;background:currentColor}.gg-menu::after,.gg-menu::before{content:"";position:absolute;top:-6px}.gg-menu::after{top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
    fill="currentColor"
  />
  <path
    d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
    fill="currentColor"
  />
  <path
    d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
    fill="currentColor"
  />
</svg>`}],L4=[{nr:415,name:"merge-horizontal",tags:"interface arrows content",css:'.gg-merge-horizontal{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:2px;border-radius:3px;background:currentColor}.gg-merge-horizontal::after,.gg-merge-horizontal::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg)}.gg-merge-horizontal::after{border-bottom:2px solid;border-left:2px solid;left:4px;bottom:5px}.gg-merge-horizontal::before{border-top:2px solid;border-right:2px solid;right:4px;top:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 8.9757L16.2426 4.73306L14.8284 3.31885L12 6.14727L9.17157 3.31885L7.75736 4.73306L12 8.9757Z"
    fill="currentColor"
  />
  <path
    d="M5 11.9998C5 11.4475 5.44772 10.9997 6 10.9997H18C18.5523 10.9997 19 11.4475 19 11.9998C19 12.552 18.5523 12.9998 18 12.9998H6C5.44772 12.9998 5 12.552 5 11.9998Z"
    fill="currentColor"
  />
  <path
    d="M12 15.0242L7.75736 19.2668L9.17157 20.681L12 17.8526L14.8284 20.681L16.2426 19.2668L12 15.0242Z"
    fill="currentColor"
  />
</svg>`}],M4=[{nr:416,name:"merge-vertical",tags:"interface arrows content",css:'.gg-merge-vertical{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;border-radius:3px;background:currentColor}.gg-merge-vertical::after,.gg-merge-vertical::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;top:4px}.gg-merge-vertical::after{border-left:2px solid;left:5px;transform:rotate(45deg)}.gg-merge-vertical::before{border-right:2px solid;transform:rotate(-45deg);right:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.97576 12L4.73312 7.75736L3.31891 9.17157L6.14734 12L3.31891 14.8284L4.73312 16.2426L8.97576 12Z"
    fill="currentColor"
  />
  <path
    d="M11.9998 19C11.4475 19 10.9998 18.5523 10.9998 18V6C10.9998 5.44772 11.4475 5 11.9998 5C12.5521 5 12.9998 5.44772 12.9998 6V18C12.9998 18.5523 12.5521 19 11.9998 19Z"
    fill="currentColor"
  />
  <path
    d="M15.0242 12L19.2669 16.2426L20.6811 14.8284L17.8527 12L20.6811 9.17157L19.2669 7.75736L15.0242 12Z"
    fill="currentColor"
  />
</svg>`}],Z4=[{nr:417,name:"mic",tags:"interface multimedia",css:'.gg-mic{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:12px;border-bottom-left-radius:120px;border-bottom-right-radius:120px;border:2px solid;border-top:0;margin-top:3px}.gg-mic::after,.gg-mic::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-mic::after{border:2px solid;width:8px;height:18px;left:2px;top:-10px;border-radius:4px}.gg-mic::before{width:10px;height:4px;top:12px;left:1px;border-right:4px solid transparent;box-shadow:0 2px 0,inset -2px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4ZM13 4V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z"
    fill="currentColor"
  />
  <path
    d="M18 12C18 14.973 15.8377 17.441 13 17.917V21H17V23H7V21H11V17.917C8.16229 17.441 6 14.973 6 12V9H8V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V9H18V12Z"
    fill="currentColor"
  />
</svg>`}],k4=[{nr:418,name:"microbit",tags:"brands",css:'.gg-microbit,.gg-microbit::before{display:block;box-sizing:border-box;border-radius:20px}.gg-microbit{position:relative;transform:scale(var(--ggs,1));width:24px;height:14px;border:3px solid}.gg-microbit::before{content:"";position:absolute;width:4px;height:4px;background:currentColor;top:2px;left:2px;box-shadow:10px 0 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"
    fill="currentColor"
  />
  <path
    d="M19 12C19 13.1046 18.1046 14 17 14C15.8954 14 15 13.1046 15 12C15 10.8954 15.8954 10 17 10C18.1046 10 19 10.8954 19 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8Z"
    fill="currentColor"
  />
</svg>`}],y4=[{nr:419,name:"microsoft",tags:"brands",css:'.gg-microsoft{transform:scale(var(--ggs,1))}.gg-microsoft,.gg-microsoft::after,.gg-microsoft::before{box-sizing:border-box;position:relative;display:block;width:18px;height:18px}.gg-microsoft::after,.gg-microsoft::before{content:"";position:absolute;width:8px;border-top:8px solid;border-bottom:8px solid}.gg-microsoft::after{right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M3 3H11V11H3V3Z" fill="currentColor" />
  <path d="M3 13H11V21H3V13Z" fill="currentColor" />
  <path d="M13 3H21V11H13V3Z" fill="currentColor" />
  <path d="M13 13H21V21H13V13Z" fill="currentColor" />
</svg>`}],z4=[{nr:420,name:"mini-player",tags:"interface",css:'.gg-mini-player{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}.gg-mini-player::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;background:currentColor;border-top-left-radius:3px;border-bottom-right-radius:3px;bottom:-1px;right:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V12.2676C18.7058 12.0974 18.3643 12 18 12H14C12.8954 12 12 12.8954 12 14V18C12 18.3643 12.0974 18.7058 12.2676 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
    fill="currentColor"
  />
</svg>`}],B4=[{nr:421,name:"minimize-alt",tags:"interface arrows",css:'.gg-minimize-alt{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:26px;height:2px;border-left:10px solid;border-right:10px solid}.gg-minimize-alt::after,.gg-minimize-alt::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;top:-2px}.gg-minimize-alt::before{border-right:2px solid;left:-5px;transform:rotate(45deg)}.gg-minimize-alt::after{border-left:2px solid;right:-5px;transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.0735 2L21.4877 3.41421L15.6378 9.26416H18.1824V11.2642H12.1824V5.26416H14.1824V7.89111L20.0735 2Z"
    fill="currentColor"
  />
  <path
    d="M11.1824 12.2642V18.2642H9.1824V15.8422L3.41421 21.6104L2 20.1962L7.93203 14.2642H5.1824V12.2642H11.1824Z"
    fill="currentColor"
  />
</svg>`}],q4=[{nr:422,name:"minimize",tags:"interface arrows",css:'.gg-minimize{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:4px;height:4px;box-shadow:-8px -4px 0 -1px,-6px -4px 0 -1px,8px 4px 0 -1px,6px 4px 0 -1px,8px -4px 0 -1px,6px -4px 0 -1px,-8px 4px 0 -1px,-6px 4px 0 -1px}.gg-minimize::after,.gg-minimize::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:18px;border-top:6px solid;border-bottom:6px solid;box-shadow:18px 0 0 -2px;top:-7px}.gg-minimize::after{left:-3px}.gg-minimize::before{right:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 9H3V7H7V3H9V9Z" fill="currentColor" />
  <path d="M9 15H3V17H7V21H9V15Z" fill="currentColor" />
  <path d="M21 15H15V21H17V17H21V15Z" fill="currentColor" />
  <path d="M15 9.00012H21V7.00012H17V3.00012H15V9.00012Z" fill="currentColor" />
</svg>`}],X4=[{nr:423,name:"modem",tags:"interface",css:'.gg-modem{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:20px;border-radius:4px;border-top:12px solid transparent;box-shadow:inset 0 0 0 2px}.gg-modem::after,.gg-modem::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor;right:4px;bottom:3px;width:2px;height:2px;border-radius:22px}.gg-modem::after{right:-1px;bottom:11px;width:20px;transform:rotate(30deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18 16.6341C18 17.1864 17.5523 17.6341 17 17.6341C16.4477 17.6341 16 17.1864 16 16.6341C16 16.0819 16.4477 15.6341 17 15.6341C17.5523 15.6341 18 16.0819 18 16.6341Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.86603 3.13414C5.38773 2.858 4.77614 3.02187 4.5 3.50017C4.22386 3.97846 4.38773 4.59005 4.86603 4.86619L18.3205 12.6341H2V16.6341C2 18.8433 3.79086 20.6341 6 20.6341H18C20.2091 20.6341 22 18.8433 22 16.6341V12.6341L5.86603 3.13414ZM20 14.6341H4V16.6341C4 17.7387 4.89543 18.6341 6 18.6341H18C19.1046 18.6341 20 17.7387 20 16.6341V14.6341Z"
    fill="currentColor"
  />
</svg>`}],I4=[{nr:424,name:"monday",tags:"brands",css:'.gg-monday{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:21px;height:16px}.gg-monday::after,.gg-monday::before{background:currentColor;content:"";display:block;box-sizing:border-box;position:absolute;width:6px;border-radius:22px}.gg-monday::before{height:16px;transform:rotate(35deg);box-shadow:7px -5px 0 0}.gg-monday::after{height:6px;bottom:1px;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.77857 6.13915C7.7289 4.78193 9.59953 4.45209 10.9568 5.40242C12.314 6.35275 12.6438 8.22339 11.6935 9.58061L5.95771 17.7721C5.00738 19.1293 3.13674 19.4592 1.77953 18.5089C0.422312 17.5585 0.0924684 15.6879 1.0428 14.3307L6.77857 6.13915Z"
    fill="currentColor"
  />
  <path
    d="M15.2678 6.22811C16.2182 4.8709 18.0888 4.54105 19.446 5.49138C20.8032 6.44172 21.1331 8.31235 20.1827 9.66957L14.447 17.8611C13.4966 19.2183 11.626 19.5481 10.2688 18.5978C8.91158 17.6475 8.58173 15.7768 9.53207 14.4196L15.2678 6.22811Z"
    fill="currentColor"
  />
  <path
    d="M20.5 18.8596C22.1569 18.8596 23.5 17.5165 23.5 15.8596C23.5 14.2028 22.1569 12.8596 20.5 12.8596C18.8431 12.8596 17.5 14.2028 17.5 15.8596C17.5 17.5165 18.8431 18.8596 20.5 18.8596Z"
    fill="currentColor"
  />
</svg>`}],S4=[{nr:425,name:"moon",tags:"design",css:'.gg-moon,.gg-moon::after{display:block;box-sizing:border-box;border-radius:50%}.gg-moon{overflow:hidden;position:relative;transform:rotate(-135deg) scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-bottom-color:transparent}.gg-moon::after{content:"";position:absolute;width:12px;height:18px;border:2px solid transparent;box-shadow:0 0 0 2px;top:8px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
    fill="currentColor"
  />
</svg>`}],Y4=[{nr:426,name:"more-alt",tags:"interface buttons",css:'.gg-more-alt{transform:scale(var(--ggs,1))}.gg-more-alt,.gg-more-alt::after,.gg-more-alt::before{box-sizing:border-box;position:relative;display:block;width:4px;height:4px;background:currentColor;border-radius:100%}.gg-more-alt::after,.gg-more-alt::before{content:"";position:absolute;top:0}.gg-more-alt::after{left:-6px}.gg-more-alt::before{right:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"
    fill="currentColor"
  />
</svg>`}],j4=[{nr:427,name:"more-o",tags:"interface",css:'.gg-more-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:24px;border:2px solid;border-radius:24px}.gg-more-o::before{content:"";position:absolute;box-sizing:border-box;display:block;width:4px;height:4px;background-color:currentColor;border-radius:20px;top:8px;left:8px;box-shadow:-5px 0 0,5px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    d="M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
    fill="currentColor"
  />
</svg>`}],A4=[{nr:428,name:"more-r",tags:"interface",css:'.gg-more-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:20px;border:2px solid;border-radius:3px;}.gg-more-r::before{content:"";position:absolute;box-sizing:border-box;display:block;width:4px;height:4px;background-color:currentColor;border-radius:20px;top:6px;left:8px;box-shadow:-5px 0 0,5px 0 0;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    d="M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 5C0 3.34315 1.34315 2 3 2H21C22.6569 2 24 3.34315 24 5V19C24 20.6569 22.6569 22 21 22H3C1.34315 22 0 20.6569 0 19V5ZM3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44771 4 3 4Z"
    fill="currentColor"
  />
</svg>`}],U4=[{nr:429,name:"more-vertical-alt",tags:"interface buttons",css:'.gg-more-vertical-alt{transform:scale(var(--ggs,1))}.gg-more-vertical-alt,.gg-more-vertical-alt::after,.gg-more-vertical-alt::before{box-sizing:border-box;position:relative;display:block;width:4px;height:4px;background:currentColor;border-radius:100%}.gg-more-vertical-alt::after,.gg-more-vertical-alt::before{content:"";position:absolute}.gg-more-vertical-alt::after{left:0;top:6px}.gg-more-vertical-alt::before{top:-6px;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
    fill="currentColor"
  />
</svg>`}],D4=[{nr:430,name:"more-vertical-o",tags:"interface buttons",css:'.gg-more-vertical-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:24px;border:2px solid;border-radius:24px}.gg-more-vertical-o::before{content:"";position:absolute;box-sizing:border-box;display:block;width:4px;height:4px;background-color:currentColor;border-radius:20px;top:8px;left:8px;box-shadow:0 -5px 0,0 5px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    d="M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
    fill="currentColor"
  />
</svg>`}],P4=[{nr:431,name:"more-vertical-r",tags:"interface buttons",css:'.gg-more-vertical-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:24px;border:2px solid;border-radius:3px}.gg-more-vertical-r::before{content:"";position:absolute;box-sizing:border-box;display:block;width:4px;height:4px;background-color:currentColor;border-radius:20px;top:8px;left:6px;box-shadow:0 -5px 0,0 5px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
    fill="currentColor"
  />
  <path
    d="M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 3C2 1.34315 3.34315 0 5 0H19C20.6569 0 22 1.34315 22 3V21C22 22.6569 20.6569 24 19 24H5C3.34315 24 2 22.6569 2 21V3ZM5 2H19C19.5523 2 20 2.44771 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2Z"
    fill="currentColor"
  />
</svg>`}],G4=[{nr:432,name:"more-vertical",tags:"interface buttons",css:'.gg-more-vertical{transform:scale(var(--ggs,1))}.gg-more-vertical,.gg-more-vertical::after,.gg-more-vertical::before{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;border-radius:100%}.gg-more-vertical::after,.gg-more-vertical::before{content:"";position:absolute;top:6px;left:-2px}.gg-more-vertical::before{top:-10px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21ZM15 4C15 5.65685 13.6569 7 12 7C10.3431 7 9 5.65685 9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM12 23C13.6569 23 15 21.6569 15 20C15 18.3431 13.6569 17 12 17C10.3431 17 9 18.3431 9 20C9 21.6569 10.3431 23 12 23Z"
    fill="currentColor"
  />
</svg>`}],T4=[{nr:433,name:"more",tags:"interface buttons",css:'.gg-more{transform:scale(var(--ggs,1))}.gg-more,.gg-more::after,.gg-more::before{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;border-radius:100%}.gg-more::after,.gg-more::before{content:"";position:absolute;top:-2px}.gg-more::after{left:-9px}.gg-more::before{right:-9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15ZM5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 13.6569 20.6569 15 19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9C20.6569 9 22 10.3431 22 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z"
    fill="currentColor"
  />
</svg>`}],$4=[{nr:434,name:"mouse",tags:"devices",css:'.gg-mouse{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:24px;border:2px solid;border-radius:10px}.gg-mouse::after{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:6px;background:currentColor;top:3px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
    fill="currentColor"
  />
</svg>`}],O4=[{nr:435,name:"move-down",tags:"content interface arrows",css:'.gg-move-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px;border-left:2px solid;border-right:2px solid}.gg-move-down::after,.gg-move-down::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-move-down::before{background:currentColor;left:2px;top:0;width:2px;height:12px}.gg-move-down::after{width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:5px solid;bottom:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M7 5H9V13H7V5Z" fill="currentColor" />
  <path d="M15 5H17V13H15V5Z" fill="currentColor" />
  <path
    d="M11.0001 5H13.0001V14.9999H16.0355L12.0356 19.071L8.03564 14.9999H11.0001V5Z"
    fill="currentColor"
  />
</svg>`}],E4=[{nr:436,name:"move-left",tags:"content interface arrows",css:'.gg-move-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:10px;border-top:2px solid;border-bottom:2px solid}.gg-move-left::after,.gg-move-left::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-move-left::before{background:currentColor;right:0;top:2px;width:12px;height:2px}.gg-move-left::after{width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-right:5px solid;left:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M19.071 17V15H11.071V17H19.071Z" fill="currentColor" />
  <path d="M19.071 9V7H11.071V9H19.071Z" fill="currentColor" />
  <path
    d="M19.071 12.9999V10.9999H9.07109V7.96454L5 11.9644L9.07109 15.9644V12.9999H19.071Z"
    fill="currentColor"
  />
</svg>`}],F4=[{nr:437,name:"move-right",tags:"content interface arrows",css:'.gg-move-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:10px;border-top:2px solid;border-bottom:2px solid}.gg-move-right::after,.gg-move-right::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-move-right::before{background:currentColor;left:0;top:2px;width:12px;height:2px}.gg-move-right::after{width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;right:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 17V15H13V17H5Z" fill="currentColor" />
  <path d="M5 9V7H13V9H5Z" fill="currentColor" />
  <path
    d="M5 12.9999V10.9999H14.9999V7.96454L19.071 11.9644L14.9999 15.9644V12.9999H5Z"
    fill="currentColor"
  />
</svg>`}],N4=[{nr:438,name:"move-task",tags:"content interface arrows",css:'.gg-move-task{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:10px;border-top:2px solid;border-bottom:2px solid}.gg-move-task::after,.gg-move-task::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-move-task::before{background:currentColor;top:2px;width:8px;height:2px;left:0}.gg-move-task::after{width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;left:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M18.9641 7H10.9641V9H18.9641V7Z" fill="currentColor" />
  <path d="M6 8.82864V15.1714L9.9642 12L6 8.82864Z" fill="currentColor" />
  <path d="M18.9641 11H10.9641V13H18.9641V11Z" fill="currentColor" />
  <path d="M10.9641 15H18.9641V17H10.9641V15Z" fill="currentColor" />
</svg>`}],J4=[{nr:439,name:"move-up",tags:"content interface arrows",css:'.gg-move-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px;border-left:2px solid;border-right:2px solid}.gg-move-up::after,.gg-move-up::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-move-up::before{background:currentColor;left:2px;bottom:0;width:2px;height:12px}.gg-move-up::after{width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-bottom:5px solid;top:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M17 19.071H15V11.071H17V19.071Z" fill="currentColor" />
  <path d="M9 19.071H7V11.071H9V19.071Z" fill="currentColor" />
  <path
    d="M12.9999 19.071H10.9999V9.07109H7.96454L11.9644 5L15.9644 9.07109H12.9999V19.071Z"
    fill="currentColor"
  />
</svg>`}],K4=[{nr:440,name:"music-note",tags:"interface music",css:'.gg-music-note{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:14px;background:currentColor}.gg-music-note::after,.gg-music-note::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-music-note::before{bottom:-4px;width:8px;height:8px;left:-6px;border-radius:10px}.gg-music-note::after{width:10px;height:6px;top:-4px;left:0;border-radius:2px;transform:skewY(-15deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 8.95439L17.6352 7.82736C19.0102 7.55235 20 6.34501 20 4.94274C20 3.08637 18.3017 1.69406 16.4813 2.05813L12.4117 2.87206C11.0094 3.15252 10 4.38376 10 5.8138V13.8895C9.41165 13.5492 8.72857 13.3544 8 13.3544C5.79086 13.3544 4 15.1453 4 17.3544C4 19.5635 5.79086 21.3544 8 21.3544C10.2091 21.3544 12 19.5635 12 17.3544V8.95439ZM16.8736 4.01929L12.8039 4.83322C12.3365 4.92671 12 5.33712 12 5.8138V6.91479L17.2429 5.8662C17.6831 5.77816 18 5.39165 18 4.94274C18 4.34846 17.4563 3.90274 16.8736 4.01929ZM10 17.3544C10 16.2498 9.10457 15.3544 8 15.3544C6.89543 15.3544 6 16.2498 6 17.3544C6 18.459 6.89543 19.3544 8 19.3544C9.10457 19.3544 10 18.459 10 17.3544Z"
    fill="currentColor"
  />
</svg>`}],Q4=[{nr:441,name:"music-speaker",tags:"interface music devices",css:'.gg-music-speaker{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:22px;border:2px solid;border-radius:3px}.gg-music-speaker::after,.gg-music-speaker::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid;border-radius:100px}.gg-music-speaker::before{bottom:2px;width:8px;height:8px;left:2px}.gg-music-speaker::after{width:4px;height:4px;left:4px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 18.939C14.2091 18.939 16 17.1482 16 14.939C16 12.7299 14.2091 10.939 12 10.939C9.79086 10.939 8 12.7299 8 14.939C8 17.1482 9.79086 18.939 12 18.939ZM12 16.939C13.1046 16.939 14 16.0436 14 14.939C14 13.8345 13.1046 12.939 12 12.939C10.8954 12.939 10 13.8345 10 14.939C10 16.0436 10.8954 16.939 12 16.939Z"
    fill="currentColor"
  />
  <path
    d="M12 9.04401C13.1046 9.04401 14 8.14858 14 7.04401C14 5.93944 13.1046 5.04401 12 5.04401C10.8954 5.04401 10 5.93944 10 7.04401C10 8.14858 10.8954 9.04401 12 9.04401Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 1C5.34315 1 4 2.34315 4 4V20C4 21.6569 5.34315 23 7 23H17C18.6569 23 20 21.6569 20 20V4C20 2.34315 18.6569 1 17 1H7ZM17 3H7C6.44772 3 6 3.44772 6 4V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V4C18 3.44772 17.5523 3 17 3Z"
    fill="currentColor"
  />
</svg>`}],R4=[{nr:442,name:"music",tags:"interface music multimedia",css:'.gg-music,.gg-music::after,.gg-music::before{display:block;box-sizing:border-box;border:2px solid}.gg-music{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:0;margin-top:-4px;position:relative;transform:skewY(-15deg) scale(var(--ggs,1));width:14px;height:16px}.gg-music::after,.gg-music::before{content:"";position:absolute;width:7px;height:7px;top:9px;left:-7px;transform:skewY(15deg);border-radius:10px}.gg-music::after{left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 6.00086C22 3.54932 19.8148 1.6746 17.3918 2.04737L10.3918 3.1243C8.44044 3.4245 7 5.1035 7 7.07778V15.8407C6.54537 15.6248 6.0368 15.5039 5.5 15.5039C3.567 15.5039 2 17.0709 2 19.0039C2 20.9369 3.567 22.5039 5.5 22.5039C7.43296 22.5039 8.99994 20.937 9 19.004V7.07778C9 6.09064 9.72022 5.25114 10.6959 5.10104L17.6959 4.02412C18.9074 3.83773 20 4.77509 20 6.00086V12.8407C19.5454 12.6248 19.0368 12.5039 18.5 12.5039C16.567 12.5039 15 14.0709 15 16.0039C15 17.9369 16.567 19.5039 18.5 19.5039C20.433 19.5039 21.9999 17.937 22 16.004V6.00086ZM20 16.0039C20 15.1755 19.3284 14.5039 18.5 14.5039C17.6716 14.5039 17 15.1755 17 16.0039C17 16.8323 17.6716 17.5039 18.5 17.5039C19.3284 17.5039 19.9999 16.8323 20 16.0039ZM7 19.0039C7 18.1755 6.32843 17.5039 5.5 17.5039C4.67157 17.5039 4 18.1755 4 19.0039C4 19.8323 4.67157 20.5039 5.5 20.5039C6.32839 20.5039 6.99994 19.8323 7 19.0039Z"
    fill="currentColor"
  />
</svg>`}],W4=[{nr:443,name:"nametag",tags:"interface",css:'.gg-nametag{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;transform:scale(var(--ggs,1))}.gg-nametag::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;box-shadow:-5px -5px 0 -3px,5px 5px 0 -3px,5px -5px 0 -3px,-5px 5px 0 -3px;left:-5px;top:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M4 14V20H10V18H6V14H4Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 9V15H15V9H9ZM13 11H11V13H13V11Z"
    fill="currentColor"
  />
  <path d="M4 10V4H10V6H6V10H4Z" fill="currentColor" />
  <path d="M20 10V4H14V6H18V10H20Z" fill="currentColor" />
  <path d="M20 14V20H14V18H18V14H20Z" fill="currentColor" />
</svg>`}],_4=[{nr:444,name:"notes",tags:"content interface",css:'.gg-notes{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:22px;border:2px solid;border-radius:3px}.gg-notes::after,.gg-notes::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor;left:2px}.gg-notes::before{box-shadow:0 4px 0,0 8px 0;width:12px;top:2px}.gg-notes::after{width:6px;top:14px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
    fill="currentColor"
  />
  <path
    d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
    fill="currentColor"
  />
  <path
    d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
    fill="currentColor"
  />
  <path
    d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],oi=[{nr:445,name:"notifications",tags:"interface",css:'.gg-notifications{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat right bottom/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0)no-repeat left top/8px 2px}.gg-notifications::after,.gg-notifications::before{content:"";position:absolute;display:block;box-sizing:border-box}.gg-notifications::before{width:14px;height:14px;border-left:2px solid;border-bottom:2px solid}.gg-notifications::after{width:6px;height:6px;border-radius:4px;background:currentColor;top:-2px;right:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z"
    fill="currentColor"
  />
  <path d="M12 6H4V20H18V12H16V18H6V8H12V6Z" fill="currentColor" />
</svg>`}],ri=[{nr:446,name:"npm",tags:"brands",css:'.gg-npm,.gg-npm::before{box-sizing:border-box;display:block}.gg-npm{position:relative;width:18px;height:18px;transform:scale(var(--ggs,1));border:3px solid;border-radius:2px}.gg-npm::before{content:"";position:absolute;width:3px;height:12px;background:currentColor;bottom:-3px;right:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 21C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5ZM6 18V6H18V18H15V9H12V18H6Z"
    fill="currentColor"
  />
</svg>`}],ei=[{nr:447,name:"oculus",tags:"brands",css:".gg-oculus{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:12px;border:4px solid;border-radius:22px;}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16 10H8C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14H16C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10ZM8 6C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6H8Z"
    fill="currentColor"
  />
</svg>`}],ni=[{nr:448,name:"open-collective",tags:"interface",css:'.gg-open-collective,.gg-open-collective::before{display:block;box-sizing:border-box;border-radius:22px}.gg-open-collective{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:3px solid;border-right-color:transparent}.gg-open-collective::before{content:"";position:absolute;width:14px;height:14px;border:3px solid transparent;border-right:3px solid;top:-1px;right:-3px;opacity:.5}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.6818 15.7529L18.8116 17.8827C20.1752 16.3052 21 14.249 21 12.0001C21 9.78747 20.2016 7.76133 18.8771 6.19409L16.7444 8.32671C17.5315 9.34177 18 10.6162 18 12.0001C18 13.4203 17.5066 14.7253 16.6818 15.7529Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    d="M15.6734 16.7445C14.6583 17.5315 13.3839 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C13.4202 6 14.7252 6.49344 15.7528 7.31823L17.8826 5.18843C16.3051 3.82482 14.2489 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.2126 21 16.2387 20.2016 17.806 18.8771L15.6734 16.7445Z"
    fill="currentColor"
  />
</svg>`}],ti=[{nr:449,name:"options",tags:"interface",css:'.gg-options{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:2px;box-shadow:-3px 4px 0 0,3px -4px 0 0}.gg-options::after,.gg-options::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;border-radius:100%}.gg-options::before{top:-7px;left:-4px}.gg-options::after{bottom:-7px;right:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
    fill="currentColor"
  />
</svg>`}],ii=[{nr:450,name:"organisation",tags:"signs",css:'.gg-organisation{background:linear-gradient(to bottom,currentColor 5px,transparent 0)no-repeat center 2px/12px 2px,linear-gradient(to bottom,currentColor 5px,transparent 0)no-repeat center 6px/12px 2px,linear-gradient(to bottom,currentColor 5px,transparent 0)no-repeat center 10px/12px 2px,linear-gradient(to bottom,currentColor 18px,transparent 0)no-repeat center/2px 18px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:18px;border:2px solid}.gg-organisation::after,.gg-organisation::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-organisation::before{background:currentColor;right:-8px;top:6px;box-shadow:0 4px 0,-4px 4px 0,-4px 0 0;width:2px;height:2px}.gg-organisation::after{width:12px;height:14px;border:2px solid;left:8px;bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M17 15H19V17H17V15Z" fill="currentColor" />
  <path d="M19 11H17V13H19V11Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 7H23V21H1V3H13V7ZM8 5H11V7H8V5ZM11 19V17H8V19H11ZM11 15V13H8V15H11ZM11 11V9H8V11H11ZM21 19V9H13V11H15V13H13V15H15V17H13V19H21ZM3 19V17H6V19H3ZM3 15H6V13H3V15ZM6 11V9H3V11H6ZM3 7H6V5H3V7Z"
    fill="currentColor"
  />
</svg>`}],li=[{nr:451,name:"overflow",tags:"brands",css:'.gg-overflow{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border-radius:20px;border-bottom:8px solid}.gg-overflow::after,.gg-overflow::before{content:"";box-sizing:border-box;position:absolute;display:block;border-radius:20px}.gg-overflow::before{width:20px;height:20px;border-bottom:10px solid;opacity:.6;left:-2px;top:-2px}.gg-overflow::after{width:16px;height:16px;border-top:8px solid;opacity:.2;left:0;top:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity="0.2"
    d="M22 11C22 13.6522 20.9464 16.1957 19.0711 18.0711C17.1957 19.9464 14.6522 21 12 21C9.34784 21 6.8043 19.9464 4.92893 18.0711C3.05357 16.1957 2 13.6522 2 11L22 11Z"
    fill="currentColor"
  />
  <path
    opacity="0.3"
    d="M20 11C20 13.1217 19.1571 15.1566 17.6569 16.6569C16.1566 18.1571 14.1217 19 12 19C9.87827 19 7.84344 18.1571 6.34315 16.6569C4.84286 15.1566 4 13.1217 4 11L20 11Z"
    fill="currentColor"
  />
  <path
    d="M20 11C20 8.87827 19.1571 6.84344 17.6569 5.34315C16.1566 3.84285 14.1217 3 12 3C9.87827 3 7.84344 3.84285 6.34315 5.34315C4.84286 6.84344 4 8.87827 4 11L20 11Z"
    fill="currentColor"
  />
</svg>`}],si=[{nr:452,name:"pacman",tags:"brands",css:'.gg-pacman{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:10px;height:10px;border-bottom:2px solid;border-left:2px solid}.gg-pacman::after,.gg-pacman::before{content:"";display:block;position:absolute;box-sizing:border-box}.gg-pacman::before{background:currentColor;top:5px;border-radius:3px;width:2px;height:2px;left:-5px}.gg-pacman::after{width:18px;height:18px;border:2px solid;border-radius:100px;border-right-color:transparent;left:-10px;transform:rotate(-45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.0636 8C14.6159 8 15.0636 7.55228 15.0636 7C15.0636 6.44772 14.6159 6 14.0636 6C13.5113 6 13.0636 6.44772 13.0636 7C13.0636 7.55228 13.5113 8 14.0636 8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z"
    fill="currentColor"
  />
</svg>`}],gi=[{nr:453,name:"password",tags:"interface",css:'.gg-password{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:30px;height:12px;border:2px solid;border-radius:3px}.gg-password::after,.gg-password::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;background:currentColor}.gg-password::before{left:2px;top:2px;box-shadow:6px 0 0,12px 0 0;height:4px;border-radius:100%}.gg-password::after{height:2px;right:2px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z"
    fill="currentColor"
  />
  <path
    d="M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z"
    fill="currentColor"
  />
  <path
    d="M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z"
    fill="currentColor"
  />
  <path d="M20 11H16V13H20V11Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z"
    fill="currentColor"
  />
</svg>`}],pi=[{nr:454,name:"path-back",tags:"interface design",css:'.gg-path-back{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-back::after,.gg-path-back::before{content:"";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}.gg-path-back::after{border:2px solid}.gg-path-back::before{border-right:5px solid;border-bottom:5px solid;bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 14H4V4H14V9H19V19H9V14ZM6 6H12V12H6V6Z"
    fill="currentColor"
  />
</svg>`}],ai=[{nr:455,name:"path-crop",tags:"interface design",css:'.gg-path-crop{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-crop::after,.gg-path-crop::before{content:"";position:absolute;display:block;box-sizing:border-box;border:2px solid;width:10px;height:10px}.gg-path-crop::after{opacity:.5}.gg-path-crop::before{background:linear-gradient(to left,currentColor 4px,transparent 0)no-repeat top left/4px 4px;bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    opacity="0.5"
    x="6"
    y="6"
    width="8"
    height="8"
    stroke="currentColor"
    stroke-width="2"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 9H19V19H9V9ZM15 11H17V17H11V15H15V11Z"
    fill="currentColor"
  />
</svg>`}],di=[{nr:456,name:"path-divide",tags:"interface design",css:'.gg-path-divide{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-divide::after,.gg-path-divide::before{content:"";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}.gg-path-divide::after{border-top:4px solid;border-left:4px solid}.gg-path-divide::before{background:linear-gradient(to left,currentColor 4px,transparent 0)no-repeat 1px 1px/4px 4px;border-right:4px solid;border-bottom:4px solid;bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 5H15V9H9V15H5V5Z" fill="currentColor" />
  <path d="M9 15V19H19V9H15V15H9Z" fill="currentColor" />
  <path d="M10 10H14V14H10V10Z" fill="currentColor" />
</svg>`}],xi=[{nr:457,name:"path-exclude",tags:"interface design",css:'.gg-path-exclude{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-exclude::after,.gg-path-exclude::before{content:"";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}.gg-path-exclude::after{border-top:4px solid;border-left:4px solid}.gg-path-exclude::before{border-right:4px solid;border-bottom:4px solid;bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 5H15V9H9V15H5V5ZM9 15V19H19V9H15V15H9Z"
    fill="currentColor"
  />
</svg>`}],bi=[{nr:458,name:"path-front",tags:"interface design",css:'.gg-path-front{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-front::after,.gg-path-front::before{content:"";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}.gg-path-front::after{border-left:5px solid;border-top:5px solid}.gg-path-front::before{border:2px solid;bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 5H15V9H19V19H9V15H5V5ZM11 11V17H17V11H11Z"
    fill="currentColor"
  />
</svg>`}],hi=[{nr:459,name:"path-intersect",tags:"interface design",css:'.gg-path-intersect{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-intersect::after,.gg-path-intersect::before{content:"";position:absolute;display:block;box-sizing:border-box;border:2px solid;width:10px;height:10px}.gg-path-intersect::before{background:linear-gradient(to left,currentColor 4px,transparent 0)no-repeat top left/4px 4px;bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 5H5V15H9V19H19V9H15V5ZM13 7H7V13H9V9H13V7ZM17 17H11V15H15V11H17V17Z"
    fill="currentColor"
  />
</svg>`}],ci=[{nr:460,name:"path-outline",tags:"interface design",css:'.gg-path-outline{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-outline::after,.gg-path-outline::before{content:"";position:absolute;display:block;box-sizing:border-box;border:2px solid;width:10px;height:10px}.gg-path-outline::before{bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 5H15V9H19V19H9V15H5V5ZM7 7H13V9H9V13H7V7ZM11 17H17V11H15V15H11V17ZM13 11H11V13H13V11Z"
    fill="currentColor"
  />
</svg>`}],fi=[{nr:461,name:"path-trim",tags:"interface design",css:'.gg-path-trim{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-trim::after,.gg-path-trim::before{content:"";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}.gg-path-trim::after{border-left:3px solid;border-top:3px solid}.gg-path-trim::before{background:currentColor;bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 5H15V8H8V15H5V5Z" fill="currentColor" />
  <path d="M19 9H9V19H19V9Z" fill="currentColor" />
</svg>`}],Ci=[{nr:462,name:"path-unite",tags:"interface design",css:'.gg-path-unite{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}.gg-path-unite::after,.gg-path-unite::before{content:"";position:absolute;display:block;box-sizing:border-box;background:currentColor;width:10px;height:10px}.gg-path-unite::before{bottom:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15 5H5V15H9V19H19V9H15V5Z" fill="currentColor" />
</svg>`}],wi=[{nr:463,name:"patreon",tags:"brands",css:'.gg-patreon{transform:scale(var(--ggs,1))}.gg-patreon,.gg-patreon::after{box-sizing:border-box;position:relative;display:block;width:4px;height:16px;background:currentColor;left:-6px}.gg-patreon::after{content:"";position:absolute;width:12px;height:12px;opacity:.5;border-radius:100px;left:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity="0.5"
    d="M21 10C21 13.3137 18.3137 16 15 16C11.6863 16 9 13.3137 9 10C9 6.68629 11.6863 4 15 4C18.3137 4 21 6.68629 21 10Z"
    fill="currentColor"
  />
  <path d="M3 4H7V20H3V4Z" fill="currentColor" />
</svg>`}],ui=[{nr:464,name:"paypal",tags:"brands",css:'.gg-paypal{position:relative;box-sizing:border-box;display:block;width:16px;height:18px;transform:skew(-10deg)scale(var(--ggs,1));background:linear-gradient(to left,currentColor 20px,transparent 0)no-repeat 3px bottom/4px 2px,linear-gradient(to left,currentColor 20px,transparent 0)no-repeat 5px bottom/3px 10px}.gg-paypal::after,.gg-paypal::before{content:"";box-sizing:border-box;display:block;position:absolute;border:2px solid}.gg-paypal::before{width:8px;height:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;border-left:0;left:5px;box-shadow:2px 2px 0}.gg-paypal::after{width:6px;height:16px;border-right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6.47005 3.54443H14.4701C16.1089 3.54443 17.4146 4.31866 18.0963 5.51496C19.3165 6.38743 19.9427 7.91487 19.6082 9.65332C19.0865 12.365 16.425 14.5633 13.6636 14.5633H11.6636L10.5301 20.4553H6.39824L6.62891 19.2563H3.44727L6.47005 3.54443ZM8.0922 5.50842H14.0922C15.7491 5.50842 16.8385 6.82737 16.5254 8.45439C16.2124 10.0814 14.6155 11.4004 12.9587 11.4004H8.95866L7.82511 17.2923H5.82511L8.0922 5.50842Z"
    fill="currentColor"
  />
</svg>`}],vi=[{nr:465,name:"pen",tags:"interface content design",css:'.gg-pen{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:14px;height:4px;border-right:2px solid transparent;box-shadow:0 0 0 2px,inset -2px 0 0;border-top-right-radius:1px;border-bottom-right-radius:1px;margin-right:-2px}.gg-pen::after,.gg-pen::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-pen::before{background:currentColor;border-left:0;right:-6px;width:3px;height:4px;border-radius:1px;top:0}.gg-pen::after{width:8px;height:7px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:7px solid;left:-11px;top:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z"
    fill="currentColor"
  />
  <path
    d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z"
    fill="currentColor"
  />
</svg>`}],mi=[{nr:466,name:"pentagon-bottom-left",tags:"design shapes",css:".gg-pentagon-bottom-left{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:10px;height:10px}.gg-pentagon-bottom-left:before{width:51%}.gg-pentagon-bottom-left:after,.gg-pentagon-bottom-left:before{content:' ';position:absolute;top:0;height:100%}.gg-pentagon-bottom-left:before{left:-2px;border-top:2px solid;border-left:2px solid;border-bottom:2px solid;transform:skew(0deg,30deg)}.gg-pentagon-bottom-left:after{right:-2px;width:50%;border-right:2px solid;border-bottom:2px solid;border-top:2px solid;transform:skew(0deg,-30deg)}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.3301 9.23205L10 5L5 13.6603L8.33013 17.8923L13.6603 18.6603L18.6603 10L13.3301 9.23205ZM15.4512 11.5583L12.2531 11.0975L10.255 8.5583L7.40908 13.4876L9.40716 16.0268L12.6052 16.4876L15.4512 11.5583Z"
    fill="currentColor"
  />
</svg>`}],Hi=[{nr:467,name:"pentagon-bottom-right",tags:"design shapes",css:".gg-pentagon-bottom-right{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:10px;height:10px}.gg-pentagon-bottom-right:before{width:51%}.gg-pentagon-bottom-right:after,.gg-pentagon-bottom-right:before{content:' ';position:absolute;top:0;height:100%}.gg-pentagon-bottom-right:before{left:-2px;border-top:2px solid;border-left:2px solid;border-bottom:2px solid;transform:skew(0deg,30deg)}.gg-pentagon-bottom-right:after{right:-2px;width:50%;border-right:2px solid;border-bottom:2px solid;border-top:2px solid;transform:skew(0deg,-30deg)}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.3301 8.23205L13.6603 4L18.6603 12.6603L15.3301 16.8923L10 17.6603L5 9L10.3301 8.23205ZM8.20908 10.5583L11.4072 10.0975L13.4052 7.5583L16.2512 12.4876L14.2531 15.0268L11.055 15.4876L8.20908 10.5583Z"
    fill="currentColor"
  />
</svg>`}],Vi=[{nr:468,name:"pentagon-down",tags:"design shapes",css:".gg-pentagon-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px}.gg-pentagon-down:before{width:51%}.gg-pentagon-down:after,.gg-pentagon-down:before{content:' ';position:absolute;top:0;height:100%}.gg-pentagon-down:before{left:-2px;border-top:2px solid;border-left:2px solid;border-bottom:2px solid;transform:skew(0deg,30deg)}.gg-pentagon-down:after{right:-2px;width:50%;border-right:2px solid;border-bottom:2px solid;border-top:2px solid;transform:skew(0deg,-30deg)}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 8L7 6V16L12 18.5L17 16V6L12 8ZM15 8.95407L12 10.1541L9 8.95407V14.7639L12 16.2639L15 14.7639V8.95407Z"
    fill="currentColor"
  />
</svg>`}],Li=[{nr:469,name:"pentagon-left",tags:"design shapes",css:".gg-pentagon-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px}.gg-pentagon-left:before{height:51%}.gg-pentagon-left:after,.gg-pentagon-left:before{content:' ';position:absolute;left:0;width:100%}.gg-pentagon-left:before{top:-2px;border-top:2px solid;border-right:2px solid;border-left:2px solid;transform:skewX(-30deg)}.gg-pentagon-left:after{bottom:-2px;height:50%;border-right:2px solid;border-bottom:2px solid;border-left:2px solid;transform:skewX(30deg)}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16 12L18 7H8L6 12L8 17H18L16 12ZM15.0459 15L13.8459 12L15.0459 9H9.35407L8.15407 12L9.35407 15H15.0459Z"
    fill="currentColor"
  />
</svg>`}],Mi=[{nr:470,name:"pentagon-right",tags:"design shapes",css:".gg-pentagon-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px}.gg-pentagon-right:before{height:51%}.gg-pentagon-right:after,.gg-pentagon-right:before{content:' ';position:absolute;left:0;width:100%}.gg-pentagon-right:before{top:-2px;border-top:2px solid;border-right:2px solid;border-left:2px solid;transform:skewX(30deg)}.gg-pentagon-right:after{bottom:-2px;height:50%;border-right:2px solid;border-bottom:2px solid;border-left:2px solid;transform:skewX(-30deg)}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 12L6 7H16L18 12L16 17H6L8 12ZM8.95407 15L10.1541 12L8.95407 9H14.6459L15.8459 12L14.6459 15H8.95407Z"
    fill="currentColor"
  />
</svg>`}],Zi=[{nr:471,name:"pentagon-top-left",tags:"design shapes",css:".gg-pentagon-top-left{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:10px;height:8px}.gg-pentagon-top-left:before{height:51%}.gg-pentagon-top-left:after,.gg-pentagon-top-left:before{content:' ';position:absolute;left:0;width:100%}.gg-pentagon-top-left:before{top:-2px;border-top:2px solid;border-right:2px solid;border-left:2px solid;transform:skewX(-30deg)}.gg-pentagon-top-left:after{bottom:-2px;height:50%;border-right:2px solid;border-bottom:2px solid;border-left:2px solid;transform:skewX(30deg)}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.3301 15.1601L11 19.3922L6 10.7319L9.33013 6.49988L14.6603 5.73193L19.6603 14.3922L14.3301 15.1601ZM16.4512 12.8339L13.2531 13.2947L11.255 15.8339L8.40908 10.9046L10.4072 8.36536L13.6052 7.90459L16.4512 12.8339Z"
    fill="currentColor"
  />
</svg>`}],ki=[{nr:472,name:"pentagon-top-right",tags:"design shapes",css:".gg-pentagon-top-right{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:10px;height:8px}.gg-pentagon-top-right:before{height:51%}.gg-pentagon-top-right:after,.gg-pentagon-top-right:before{content:' ';position:absolute;left:0;width:100%}.gg-pentagon-top-right:before{top:-2px;border-top:2px solid;border-right:2px solid;border-left:2px solid;transform:skewX(30deg)}.gg-pentagon-top-right:after{bottom:-2px;height:50%;border-right:2px solid;border-bottom:2px solid;border-left:2px solid;transform:skewX(-30deg)}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.3301 15.1601L5 14.3922L10 5.73193L15.3301 6.49988L18.6603 10.7319L13.6603 19.3922L10.3301 15.1601ZM13.4052 15.8339L11.4072 13.2947L8.20908 12.8339L11.055 7.90459L14.2531 8.36536L16.2512 10.9046L13.4052 15.8339Z"
    fill="currentColor"
  />
</svg>`}],yi=[{nr:473,name:"pentagon-up",tags:"design shapes",css:".gg-pentagon-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px}.gg-pentagon-up:before{width:51%}.gg-pentagon-up:after,.gg-pentagon-up:before{content:' ';position:absolute;top:0;height:100%}.gg-pentagon-up:before{left:-2px;border-top:2px solid;border-left:2px solid;border-bottom:2px solid;transform:skew(0deg,-30deg)}.gg-pentagon-up:after{right:-2px;width:50%;border-right:2px solid;border-bottom:2px solid;border-top:2px solid;transform:skew(0deg,30deg)}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 16L17 18V8L12 6L7 8V18L12 16ZM9 15.0459L12 13.8459L15 15.0459V9.35407L12 8.15407L9 9.35407V15.0459Z"
    fill="currentColor"
  />
</svg>`}],zi=[{nr:474,name:"performance",tags:"interface",css:'.gg-performance{background:linear-gradient(to left,currentColor 8px,transparent 0)no-repeat center/2px 6px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-performance::after,.gg-performance::before{content:"";display:block;position:absolute;border:2px solid}.gg-performance::before{bottom:2px;width:2px;height:2px;box-sizing:content-box;border-radius:100px;left:6px}.gg-performance::after{box-sizing:border-box;border-radius:3px;width:14px;height:8px;border-top-left-radius:100px;border-top-right-radius:100px;border-bottom:0;top:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 9V13.1707C9.83481 13.5825 9 14.6938 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.6938 14.1652 13.5825 13 13.1707V9H11ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
    fill="currentColor"
  />
  <path
    d="M12 5C15.866 5 19 8.13401 19 12V13H17V12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12V13H5V12C5 8.13401 8.13401 5 12 5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
    fill="currentColor"
  />
</svg>`}],Bi=[{nr:475,name:"pexels",tags:"brands",css:'.gg-pexels{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:14px;border:2px solid;border-right:0}.gg-pexels::after,.gg-pexels::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-pexels::before{width:5px;height:10px;border:2px solid;border-top-right-radius:100px;border-bottom-right-radius:100px;border-left:0;right:-5px;top:-2px}.gg-pexels::after{background:currentColor;width:2px;height:6px;bottom:-2px;right:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 5C12.7111 5 13.3875 5.14845 14 5.41604C15.7659 6.1876 17 7.94968 17 10C17 12.0503 15.7659 13.8124 14 14.584C13.3875 14.8516 12.7111 15 12 15V19H6V5H12ZM8 7V17H10V13H12L12.0032 12.9988C13.6427 13.0303 15.0746 11.6934 15.0443 9.95469L15.0375 9.56529C15.0121 8.10183 13.7882 6.94549 12.3257 7.00299L12.0203 7.00762L12 7H8Z"
    fill="currentColor"
  />
</svg>`}],qi=[{nr:476,name:"phone",tags:"alerts interface time",css:'.gg-phone{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;transform:scale(var(--ggs,1))}.gg-phone::after,.gg-phone::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-phone::after{width:18px;height:18px;border-top-left-radius:1px;border-bottom-right-radius:1px;border-bottom-left-radius:12px;border-left:4px solid;border-bottom:4px solid;left:2px;bottom:2px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat right 11px/6px 4px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat -1px 0/4px 6px}.gg-phone::before{width:20px;height:20px;border:6px double;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent;border-radius:50%;transform:rotate(-45deg);bottom:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
    fill="currentColor"
  />
  <path
    d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
    fill="currentColor"
  />
  <path
    d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
    fill="currentColor"
  />
</svg>`}],Xi=[{nr:477,name:"photoscan",tags:"interface multimedia",css:'.gg-photoscan{box-sizing:border-box;display:block;position:relative;transform:scale(var(--ggs,1));border-radius:2px;width:14px;height:18px;border:2px solid;border-bottom:4px solid}.gg-photoscan::before{content:"";position:absolute;box-sizing:border-box;display:block;width:4px;height:4px;border-radius:20px;box-shadow:0 0 0 2px,inset 0 0 0 2px;border:1px solid transparent}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 8C9.55228 8 10 7.55228 10 7C10 6.44772 9.55228 6 9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 3C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17ZM12.4649 5H17V16H7L7 10.4649C7.58835 10.8052 8.27143 11 9 11C11.2091 11 13 9.20914 13 7C13 6.27143 12.8052 5.58835 12.4649 5ZM9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9C10.1046 9 11 8.10457 11 7C11 5.89543 10.1046 5 9 5Z"
    fill="currentColor"
  />
</svg>`}],Ii=[{nr:478,name:"piano",tags:"devices multimedia",css:'.gg-piano{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:23px;height:18px;border:2px solid;border-radius:2px}.gg-piano::after,.gg-piano::before{content:"";display:block;box-sizing:border-box;position:absolute;height:10px;background:currentColor;box-shadow:5px 0 0,10px 0 0}.gg-piano::before{top:-2px;width:3px;left:3px}.gg-piano::after{width:1px;bottom:-2px;left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 21C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H22ZM11 5H8.98486V13H7.98511V19H12V13H11V5ZM18.0151 19H22V5H19.0151V13H18.0151V19ZM17.0151 13H16.0151V5H14V13H13V19H17.0151V13ZM6.98511 19V13H5.98486V5H3L3 19H6.98511Z"
    fill="currentColor"
  />
</svg>`}],Si=[{nr:479,name:"pill",tags:"interface",css:'.gg-pill,.gg-pill::after{display:block;box-sizing:border-box;width:12px}.gg-pill{border-top-left-radius:140px;border-top-right-radius:140px;border:2px solid;transform:rotate(45deg) scale(var(--ggs,1));position:relative;height:14px}.gg-pill::after{content:"";position:absolute;height:12px;background:currentColor;left:-2px;bottom:-12px;border-bottom-left-radius:140px;border-bottom-right-radius:140px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.6569 2.75736C15 0.414213 18.799 0.414214 21.1421 2.75736C23.4853 5.1005 23.4853 8.8995 21.1421 11.2426L11.2426 21.1421C8.89949 23.4853 5.1005 23.4853 2.75736 21.1421C0.414214 18.799 0.414213 15 2.75736 12.6569L12.6569 2.75736ZM19.7279 9.82843L15.4853 14.0711L9.82843 8.41421L14.0711 4.17157C15.6332 2.60948 18.1658 2.60948 19.7279 4.17157C21.29 5.73367 21.29 8.26633 19.7279 9.82843Z"
    fill="currentColor"
  />
</svg>`}],Yi=[{nr:480,name:"pin-alt",tags:"interface content",css:'.gg-pin-alt{box-sizing:border-box;position:relative;display:block;width:2px;height:8px;border-radius:3px;transform:scale(var(--ggs,1));background:currentColor}.gg-pin-alt::after{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;border:6px double;border-radius:100px;top:-10px;left:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18 9C18 11.973 15.8377 14.441 13 14.917V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V14.917C8.16229 14.441 6 11.973 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
    fill="currentColor"
  />
</svg>`}],ji=[{nr:481,name:"pin-bottom",tags:"interface content",css:'.gg-pin-bottom{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:8px;background:currentColor}.gg-pin-bottom::after,.gg-pin-bottom::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-pin-bottom::after{background:currentColor;bottom:-2px;border-radius:3px;width:10px;height:2px;left:-4px}.gg-pin-bottom::before{width:8px;height:8px;border:6px double;border-radius:100px;top:-10px;left:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18 9C18 11.973 15.8377 14.441 13 14.917V20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11V14.917C8.16229 14.441 6 11.973 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
    fill="currentColor"
  />
</svg>`}],Ai=[{nr:482,name:"pin-top",tags:"interface content",css:'.gg-pin-top{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:8px;background:currentColor;margin-top:-8px}.gg-pin-top::after,.gg-pin-top::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-pin-top::after{background:currentColor;top:-2px;border-radius:3px;width:10px;height:2px;left:-4px}.gg-pin-top::before{width:8px;height:8px;border:6px double;border-radius:100px;bottom:-10px;left:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H13V10.083C15.8377 10.559 18 13.027 18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16C6 13.027 8.16229 10.559 11 10.083V5H8ZM12 12C14.2091 12 16 13.7909 16 16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16C8 13.7909 9.79086 12 12 12Z"
    fill="currentColor"
  />
</svg>`}],Ui=[{nr:483,name:"pin",tags:"interface content",css:'.gg-pin{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:18px;height:18px;border-radius:100% 100% 0 100%;border:2px solid;margin-top:-4px}.gg-pin::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;top:3px;left:3px;border-radius:40px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
    fill="currentColor"
  />
</svg>`}],Di=[{nr:484,name:"play-backwards",tags:"interface arrows multimedia music",css:'.gg-play-backwards{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:3px;height:10px;background:currentColor}.gg-play-backwards::after,.gg-play-backwards::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:6px solid;right:-7px}.gg-play-backwards::before{right:-14px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M2 7H5V17H2V7Z" fill="currentColor" />
  <path d="M6 12L13.0023 7.00003V17L6 12Z" fill="currentColor" />
  <path d="M21.0023 7.00003L14 12L21.0023 17V7.00003Z" fill="currentColor" />
</svg>`}],Pi=[{nr:485,name:"play-button-o",tags:"interface multimedia music",css:'.gg-play-button-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:20px}.gg-play-button-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:6px solid;top:4px;left:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
    fill="currentColor"
  />
  <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
</svg>`}],Gi=[{nr:486,name:"play-button-r",tags:"interface multimedia music",css:'.gg-play-button-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-play-button-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:6px solid;top:4px;left:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z"
    fill="currentColor"
  />
  <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
</svg>`}],Ti=[{nr:487,name:"play-button",tags:"interface multimedia music",css:'.gg-play-button{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-play-button::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:6px solid;top:6px;left:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" />
</svg>`}],$i=[{nr:488,name:"play-forwards",tags:"interface arrows multimedia music",css:'.gg-play-forwards{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:3px;height:10px;background:currentColor}.gg-play-forwards::after,.gg-play-forwards::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:6px solid;left:-7px}.gg-play-forwards::before{left:-14px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M21.0023 17H18.0023V7H21.0023V17Z" fill="currentColor" />
  <path d="M17.0023 12L10 17V7L17.0023 12Z" fill="currentColor" />
  <path d="M2 17L9.00232 12L2 7V17Z" fill="currentColor" />
</svg>`}],Oi=[{nr:489,name:"play-list-add",tags:"interface multimedia music",css:'.gg-play-list-add{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}.gg-play-list-add::after,.gg-play-list-add::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;top:6px;right:-8px}.gg-play-list-add::before{width:2px;height:10px;top:2px;right:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M2 5H14V7H2V5Z" fill="currentColor" />
  <path d="M2 9H14V11H2V9Z" fill="currentColor" />
  <path d="M10 13H2V15H10V13Z" fill="currentColor" />
  <path d="M16 9H18V13H22V15H18V19H16V15H12V13H16V9Z" fill="currentColor" />
</svg>`}],Ei=[{nr:490,name:"play-list-check",tags:"interface multimedia music",css:'.gg-play-list-check{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}.gg-play-list-check::after{content:"";display:block;box-sizing:border-box;position:absolute;width:5px;height:8px;border-right:2px solid;border-bottom:2px solid;transform:rotate(45deg);top:2px;right:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15 6H3V8H15V6Z" fill="currentColor" />
  <path d="M15 10H3V12H15V10Z" fill="currentColor" />
  <path d="M3 14H11V16H3V14Z" fill="currentColor" />
  <path
    d="M11.9905 15.025L13.4049 13.6106L15.526 15.7321L19.7687 11.4895L21.1829 12.9037L15.526 18.5606L11.9905 15.025Z"
    fill="currentColor"
  />
</svg>`}],Fi=[{nr:491,name:"play-list-remove",tags:"interface multimedia music",css:'.gg-play-list-remove{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}.gg-play-list-remove::after,.gg-play-list-remove::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;transform:rotate(-45deg);top:8px;right:-4px}.gg-play-list-remove::before{width:2px;height:8px;top:5px;right:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15.9644 4.63379H3.96442V6.63379H15.9644V4.63379Z" fill="currentColor" />
  <path d="M15.9644 8.63379H3.96442V10.6338H15.9644V8.63379Z" fill="currentColor" />
  <path d="M3.96442 12.6338H11.9644V14.6338H3.96442V12.6338Z" fill="currentColor" />
  <path
    d="M12.9645 13.7093L14.3787 12.295L16.5 14.4163L18.6213 12.2951L20.0355 13.7093L17.9142 15.8305L20.0356 17.9519L18.6214 19.3661L16.5 17.2447L14.3786 19.3661L12.9644 17.9519L15.0858 15.8305L12.9645 13.7093Z"
    fill="currentColor"
  />
</svg>`}],Ni=[{nr:492,name:"play-list-search",tags:"interface multimedia music",css:'.gg-play-list-search{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}.gg-play-list-search::after,.gg-play-list-search::before{content:"";display:block;box-sizing:border-box;position:absolute;bottom:-7px}.gg-play-list-search::after{width:3px;height:2px;background:currentColor;transform:rotate(45deg);right:-4px}.gg-play-list-search::before{width:6px;height:6px;border-radius:4px;border:2px solid;right:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15.8787 4.87866H3.87872V6.87866H15.8787V4.87866Z" fill="currentColor" />
  <path d="M15.8787 8.87866H3.87872V10.8787H15.8787V8.87866Z" fill="currentColor" />
  <path d="M3.87872 12.8787H11.8787V14.8787H3.87872V12.8787Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7574 12.7573C12.5858 13.9289 12.5858 15.8284 13.7574 17C14.681 17.9236 16.0571 18.1191 17.1722 17.5864L18.7071 19.1213L20.1213 17.7071L18.5864 16.1722C19.1191 15.057 18.9236 13.681 18 12.7573C16.8284 11.5858 14.9289 11.5858 13.7574 12.7573ZM15.1716 15.5858C15.5621 15.9763 16.1953 15.9763 16.5858 15.5858C16.9763 15.1952 16.9763 14.5621 16.5858 14.1716C16.1953 13.781 15.5621 13.781 15.1716 14.1716C14.7811 14.5621 14.7811 15.1952 15.1716 15.5858Z"
    fill="currentColor"
  />
</svg>`}],Ji=[{nr:493,name:"play-list",tags:"interface multimedia music",css:'.gg-play-list{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}.gg-play-list::after{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid;top:6px;right:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16 5H4V7H16V5Z" fill="currentColor" />
  <path d="M16 9H4V11H16V9Z" fill="currentColor" />
  <path d="M4 13H12V15H4V13Z" fill="currentColor" />
  <path d="M20 16L14 13V19L20 16Z" fill="currentColor" />
</svg>`}],Ki=[{nr:494,name:"play-pause-o",tags:"interface buttons multimedia music",css:'.gg-play-pause-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:22px}.gg-play-pause-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;left:6px;top:6px;border-left:2px solid;border-right:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 9H11V15H9V9Z" fill="currentColor" />
  <path d="M15 15H13V9H15V15Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],Qi=[{nr:495,name:"play-pause-r",tags:"interface buttons multimedia music",css:'.gg-play-pause-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-play-pause-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;left:6px;top:6px;border-left:2px solid;border-right:2px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 9H11V15H9V9Z" fill="currentColor" />
  <path d="M15 15H13V9H15V15Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],Ri=[{nr:496,name:"play-pause",tags:"interface buttons multimedia music",css:".gg-play-pause{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:10px;border-left:3px solid;border-right:3px solid}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 7H8V17H11V7Z" fill="currentColor" />
  <path d="M13 17H16V7H13V17Z" fill="currentColor" />
</svg>`}],Wi=[{nr:497,name:"play-stop-o",tags:"interface buttons multimedia music",css:'.gg-play-stop-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:20px}.gg-play-stop-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;top:6px;left:6px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15 9H9V15H15V9Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],_i=[{nr:498,name:"play-stop-r",tags:"interface buttons multimedia music",css:'.gg-play-stop-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-play-stop-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;top:6px;left:6px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15 9H9V15H15V9Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],o5=[{nr:499,name:"play-stop",tags:"interface buttons multimedia music",css:".gg-play-stop{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;background:currentColor}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M7 7H17V17H7V7Z" fill="currentColor" />
</svg>`}],r5=[{nr:500,name:"play-track-next-o",tags:"interface arrows multimedia music",css:'.gg-play-track-next-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:20px}.gg-play-track-next-o::after,.gg-play-track-next-o::before{content:"";display:block;box-sizing:border-box;position:absolute;height:8px;top:5px}.gg-play-track-next-o::before{width:2px;border-radius:2px;left:11px;background:currentColor}.gg-play-track-next-o::after{width:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:5px solid;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15V9ZM13 12L7 15.4641V8.5359L13 12Z"
    fill="currentColor"
  />
</svg>`}],e5=[{nr:501,name:"play-track-next-r",tags:"interface arrows multimedia music",css:'.gg-play-track-next-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-play-track-next-r::after,.gg-play-track-next-r::before{content:"";display:block;box-sizing:border-box;position:absolute;height:8px;top:5px}.gg-play-track-next-r::before{width:2px;border-radius:2px;left:11px;background:currentColor}.gg-play-track-next-r::after{width:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:5px solid;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V9Z"
    fill="currentColor"
  />
  <path d="M14 12L8 15.4641V8.5359L14 12Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],n5=[{nr:502,name:"play-track-next",tags:"interface arrows multimedia music",css:'.gg-play-track-next{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:3px;height:10px;background:currentColor}.gg-play-track-next::after{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:6px solid;left:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M6 17L14 12L6 7V17Z" fill="currentColor" />
  <path d="M18 7H15V12V17H18V7Z" fill="currentColor" />
</svg>`}],t5=[{nr:503,name:"play-track-prev-o",tags:"interface arrows multimedia music",css:'.gg-play-track-prev-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:20px}.gg-play-track-prev-o::after,.gg-play-track-prev-o::before{content:"";display:block;box-sizing:border-box;position:absolute;height:8px;top:5px}.gg-play-track-prev-o::before{width:2px;border-radius:2px;right:11px;background:currentColor}.gg-play-track-prev-o::after{width:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:5px solid;right:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44771 16 7 15.5523 7 15V9C7 8.44772 7.44771 8 8 8ZM16 15.4641L10 12L16 8.5359V15.4641Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z"
    fill="currentColor"
  />
</svg>`}],i5=[{nr:504,name:"play-track-prev-r",tags:"interface arrows multimedia music",css:'.gg-play-track-prev-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-play-track-prev-r::after,.gg-play-track-prev-r::before{content:"";display:block;box-sizing:border-box;position:absolute;height:8px;top:5px}.gg-play-track-prev-r::before{width:2px;border-radius:2px;right:11px;background:currentColor}.gg-play-track-prev-r::after{width:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:5px solid;right:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44771 16 7 15.5523 7 15V9C7 8.44772 7.44771 8 8 8ZM16 15.4641L10 12L16 8.5359V15.4641Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z"
    fill="currentColor"
  />
</svg>`}],l5=[{nr:505,name:"play-track-prev",tags:"interface arrows multimedia music",css:'.gg-play-track-prev{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:3px;height:10px;background:currentColor}.gg-play-track-prev::after{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:6px solid;right:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M18 17L10 12L18 7V17Z" fill="currentColor" />
  <path d="M6 7H9V17H6V7Z" fill="currentColor" />
</svg>`}],s5=[{nr:506,name:"plug",tags:"interface",css:'.gg-plug{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:12px;height:20px}.gg-plug::after,.gg-plug::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-plug::before{width:12px;height:10px;border:2px solid;border-bottom-left-radius:8px;border-bottom-right-radius:8px;top:5px}.gg-plug::after{width:2px;height:4px;background:currentColor;left:2px;border-radius:22px;box-shadow:6px 0 0,3px 14px 0,3px 16px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 2C8.44771 2 8 2.44772 8 3V5C8 5.55228 8.44771 6 9 6C9.55229 6 10 5.55228 10 5V3C10 2.44772 9.55229 2 9 2ZM8 9H16V11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11V9ZM13 16.917C15.8377 16.441 18 13.973 18 11V7H6V11C6 13.973 8.16229 16.441 11 16.917V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V16.917ZM14 3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5V3Z"
    fill="currentColor"
  />
</svg>`}],g5=[{nr:507,name:"pocket",tags:"brands",css:'.gg-pocket{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:6px;border-bottom-left-radius:22px;border-bottom-right-radius:22px}.gg-pocket::after,.gg-pocket::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:22px;width:8px;height:2px;background:currentColor;bottom:7px}.gg-pocket::before{transform:rotate(-48deg);right:3px}.gg-pocket::after{transform:rotate(48deg);left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 4H21V11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11V4ZM1 2H23V11C23 17.0751 18.0751 22 12 22C5.92487 22 1 17.0751 1 11V2ZM11.2929 14.6935C11.6834 15.084 12.3166 15.084 12.7071 14.6935L16.9497 10.4508C17.3403 10.0603 17.3403 9.42714 16.9497 9.03661C16.5592 8.64609 15.9261 8.64609 15.5355 9.03661L12 12.5721L8.46447 9.03661C8.07394 8.64609 7.44078 8.64609 7.05025 9.03661C6.65973 9.42714 6.65973 10.0603 7.05025 10.4508L11.2929 14.6935Z"
    fill="currentColor"
  />
</svg>`}],p5=[{nr:508,name:"pokemon",tags:"brands",css:'.gg-pokemon{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:5px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:100%}.gg-pokemon::before{content:"";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;border-left:8px solid;border-right:8px solid;left:-6px;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
    fill="currentColor"
  />
</svg>`}],a5=[{nr:509,name:"polaroid",tags:"interface design",css:".gg-polaroid{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:20px;border:2px solid;border-radius:2px;box-shadow:inset 0 -5px 0}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4ZM5 4H19V15H5V4Z"
    fill="currentColor"
  />
</svg>`}],d5=[{nr:510,name:"poll",tags:"interface",css:'.gg-poll{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:3px solid transparent;border-top:6px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0;border-radius:1px}.gg-poll::after,.gg-poll::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:10px;background:currentColor;top:-3px;left:4px}.gg-poll::after{height:4px;top:3px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z"
    fill="currentColor"
  />
  <path d="M11 7H13V17H11V7Z" fill="currentColor" />
  <path d="M15 13H17V17H15V13Z" fill="currentColor" />
  <path d="M7 10H9V17H7V10Z" fill="currentColor" />
</svg>`}],x5=[{nr:511,name:"presentation",tags:"multimedia interface",css:'.gg-presentation{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:22px}.gg-presentation::after,.gg-presentation::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-presentation::before{width:12px;height:6px;border:2px solid;border-top-left-radius:100px;border-top-right-radius:100px;top:2px;left:2px;border-bottom:0}.gg-presentation::after{width:18px;height:2px;background:currentColor;left:-1px;top:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20 12H18C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12H4C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM4.25204 14H19.748C18.8599 17.4505 15.7277 20 12 20C8.27232 20 5.14012 17.4505 4.25204 14ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12H8Z"
    fill="currentColor"
  />
</svg>`}],b5=[{nr:512,name:"printer",tags:"interface devices buttons",css:'.gg-printer{background:linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 0 10px/6px 2px,linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 14px 10px/6px 2px,linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 4px 4px/2px 2px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:14px;border:2px solid transparent;border-bottom:0;box-shadow:inset 0 2px 0,inset 2px 2px 0,inset -2px 2px 0,inset -2px 2px 0}.gg-printer::after,.gg-printer::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;border:2px solid;left:4px}.gg-printer::before{height:6px;top:-4px}.gg-printer::after{height:8px;top:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 4H16V6H8V4ZM18 6H22V18H18V22H6V18H2V6H6V2H18V6ZM20 16H18V14H6V16H4V8H20V16ZM8 16H16V20H8V16ZM8 10H6V12H8V10Z"
    fill="currentColor"
  />
</svg>`}],h5=[{nr:513,name:"product-hunt",tags:"brands",css:'.gg-product-hunt{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:100px}.gg-product-hunt::after,.gg-product-hunt::before{content:"";display:block;box-sizing:border-box;position:absolute;top:3px}.gg-product-hunt::before{border:2px solid;border-left:0;border-top-right-radius:40px;border-bottom-right-radius:40px;width:6px;height:6px;left:5px}.gg-product-hunt::after{width:2px;height:8px;background:currentColor;left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM9 16V8H13C14.6569 8 16 9.34315 16 11C16 12.6569 14.6569 14 13 14H11V16H9ZM14 11C14 11.5523 13.5523 12 13 12H11V10H13C13.5523 10 14 10.4477 14 11Z"
    fill="currentColor"
  />
</svg>`}],c5=[{nr:514,name:"profile",tags:"interface signs",css:'.gg-profile,.gg-profile::after,.gg-profile::before{display:block;box-sizing:border-box;border:2px solid;border-radius:100px}.gg-profile{overflow:hidden;transform:scale(var(--ggs,1));width:22px;height:22px;position:relative}.gg-profile::after,.gg-profile::before{content:"";position:absolute;top:2px;left:5px;width:8px;height:8px}.gg-profile::after{border-radius:200px;top:11px;left:0px;width:18px;height:18px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
    fill="currentColor"
  />
</svg>`}],f5=[{nr:515,name:"pull-clear",tags:"interface",css:'.gg-pull-clear{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:12px;border:2px solid;border-top:0;border-bottom-left-radius:2px;border-bottom-right-radius:2px}.gg-pull-clear::after{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;bottom:2px;left:2px;background:currentColor;box-shadow:0 -4px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 6H2V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V6H20V16H4V6Z"
    fill="currentColor"
  />
  <path d="M6 12H18V14H6V12Z" fill="currentColor" />
  <path d="M18 8H6V10H18V8Z" fill="currentColor" />
</svg>`}],C5=[{nr:516,name:"push-chevron-down-o",tags:"interface arrows buttons",css:'.gg-push-chevron-down-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-push-chevron-down-o::after,.gg-push-chevron-down-o::before{content:"";display:block;box-sizing:border-box;position:absolute;border-bottom:2px solid}.gg-push-chevron-down-o::before{bottom:5px;width:8px;height:2px;left:5px}.gg-push-chevron-down-o::after{width:6px;height:6px;border-right:2px solid;transform:rotate(45deg);left:6px;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16 14V16H8V14H16Z" fill="currentColor" />
  <path
    d="M7.75732 8.70261L9.17153 7.2884L12 10.1168L14.8284 7.28842L16.2426 8.70264L11.9999 12.9453L7.75732 8.70261Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
    fill="currentColor"
  />
</svg>`}],w5=[{nr:517,name:"push-chevron-down-r",tags:"interface arrows buttons",css:'.gg-push-chevron-down-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-push-chevron-down-r::after,.gg-push-chevron-down-r::before{content:"";display:block;box-sizing:border-box;position:absolute;border-bottom:2px solid}.gg-push-chevron-down-r::before{bottom:5px;width:8px;height:2px;left:5px}.gg-push-chevron-down-r::after{width:6px;height:6px;border-right:2px solid;transform:rotate(45deg);left:6px;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.17154 7.28839L7.75732 8.7026L11.9999 12.9453L16.2426 8.70263L14.8284 7.28842L12 10.1168L9.17154 7.28839Z"
    fill="currentColor"
  />
  <path d="M8.00001 14H16V16H8.00001V14Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],u5=[{nr:518,name:"push-chevron-down",tags:"interface arrows buttons",css:'.gg-push-chevron-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-push-chevron-down::after,.gg-push-chevron-down::before{content:"";display:block;box-sizing:border-box;position:absolute;border-bottom:2px solid}.gg-push-chevron-down::before{bottom:0;width:14px;height:2px;left:2px}.gg-push-chevron-down::after{width:10px;height:10px;border-right:2px solid;transform:rotate(45deg);left:4px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 7.41421L6.41421 6L12.0711 11.6569L17.7279 6L19.1421 7.41421L12.0711 14.4853L5 7.41421Z"
    fill="currentColor"
  />
  <path d="M19 16.3432H5V18.3432H19V16.3432Z" fill="currentColor" />
</svg>`}],v5=[{nr:519,name:"push-chevron-left-o",tags:"interface arrows buttons",css:'.gg-push-chevron-left-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-push-chevron-left-o::after,.gg-push-chevron-left-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;border-left:2px solid;top:5px;left:5px}.gg-push-chevron-left-o::after{width:6px;height:6px;border-bottom:2px solid;transform:rotate(45deg);left:9px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M10 16H8V8H10V16Z" fill="currentColor" />
  <path
    d="M15.2974 7.75732L16.7116 9.17153L13.8832 12L16.7116 14.8284L15.2974 16.2426L11.0547 11.9999L15.2974 7.75732Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
    fill="currentColor"
  />
</svg>`}],m5=[{nr:520,name:"push-chevron-left-r",tags:"interface arrows buttons",css:'.gg-push-chevron-left-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-push-chevron-left-r::after,.gg-push-chevron-left-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;border-left:2px solid;top:5px;left:5px}.gg-push-chevron-left-r::after{width:6px;height:6px;border-bottom:2px solid;transform:rotate(45deg);left:9px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.6743 9.1716L15.26 7.75739L11.0174 12L15.26 16.2426L16.6742 14.8284L13.8458 12L16.6743 9.1716Z"
    fill="currentColor"
  />
  <path d="M9.96265 8.00007V16.0001H7.96265V8.00007H9.96265Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],H5=[{nr:521,name:"push-chevron-left",tags:"interface arrows buttons",css:'.gg-push-chevron-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-push-chevron-left::after,.gg-push-chevron-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;border-left:2px solid;top:2px;left:0}.gg-push-chevron-left::after{width:10px;height:10px;border-bottom:2px solid;transform:rotate(45deg);left:6px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.929 5L18.3432 6.41421L12.6863 12.0711L18.3432 17.7279L16.929 19.1421L9.85789 12.0711L16.929 5Z"
    fill="currentColor"
  />
  <path d="M8 19V5H6V19H8Z" fill="currentColor" />
</svg>`}],V5=[{nr:522,name:"push-chevron-right-o",tags:"interface arrows buttons",css:'.gg-push-chevron-right-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-push-chevron-right-o::after,.gg-push-chevron-right-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;border-right:2px solid;top:5px;right:5px}.gg-push-chevron-right-o::after{width:6px;height:6px;border-bottom:2px solid;transform:rotate(-45deg);right:9px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M14 8H16V16H14V8Z" fill="currentColor" />
  <path
    d="M8.70261 16.2427L7.2884 14.8285L10.1168 12L7.28842 9.17164L8.70264 7.75743L12.9453 12.0001L8.70261 16.2427Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
    fill="currentColor"
  />
</svg>`}],L5=[{nr:523,name:"push-chevron-right-r",tags:"interface arrows buttons",css:'.gg-push-chevron-right-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-push-chevron-right-r::after,.gg-push-chevron-right-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;border-right:2px solid;top:5px;right:5px}.gg-push-chevron-right-r::after{width:6px;height:6px;border-bottom:2px solid;transform:rotate(-45deg);right:9px;top:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.64429 14.8284L9.0585 16.2426L13.3012 12L9.05853 7.75739L7.64432 9.1716L10.4727 12L7.64429 14.8284Z"
    fill="currentColor"
  />
  <path d="M14.3559 16L14.3559 7.99996H16.3559V16H14.3559Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],M5=[{nr:524,name:"push-chevron-right",tags:"interface arrows buttons",css:'.gg-push-chevron-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-push-chevron-right::after,.gg-push-chevron-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;border-right:2px solid;top:2px;right:0}.gg-push-chevron-right::after{width:10px;height:10px;border-bottom:2px solid;transform:rotate(-45deg);right:6px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.41421 5L6 6.41421L11.6569 12.0711L6 17.7279L7.41421 19.1421L14.4853 12.0711L7.41421 5Z"
    fill="currentColor"
  />
  <path d="M16.3432 19V5H18.3432V19H16.3432Z" fill="currentColor" />
</svg>`}],Z5=[{nr:525,name:"push-chevron-up-o",tags:"interface arrows buttons",css:'.gg-push-chevron-up-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}.gg-push-chevron-up-o::after,.gg-push-chevron-up-o::before{content:"";display:block;box-sizing:border-box;position:absolute;border-top:2px solid}.gg-push-chevron-up-o::before{top:5px;width:8px;height:2px;left:5px}.gg-push-chevron-up-o::after{width:6px;height:6px;border-right:2px solid;transform:rotate(-45deg);left:6px;bottom:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8 10V8H16V10H8ZM16.2427 15.2974L14.8285 16.7116L12 13.8832L9.17164 16.7116L7.75743 15.2974L12.0001 11.0547L16.2427 15.2974Z"
    fill="currentColor"
  />
</svg>`}],k5=[{nr:526,name:"push-chevron-up-r",tags:"interface arrows buttons",css:'.gg-push-chevron-up-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-push-chevron-up-r::after,.gg-push-chevron-up-r::before{content:"";display:block;box-sizing:border-box;position:absolute;border-top:2px solid}.gg-push-chevron-up-r::before{top:5px;width:8px;height:2px;left:5px}.gg-push-chevron-up-r::after{width:6px;height:6px;border-right:2px solid;transform:rotate(-45deg);left:6px;bottom:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21ZM1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM9.17154 16.7116L7.75732 15.2974L11.9999 11.0547L16.2426 15.2974L14.8284 16.7116L12 13.8832L9.17154 16.7116ZM8.00001 10H16V8H8.00001V10Z"
    fill="currentColor"
  />
</svg>`}],y5=[{nr:527,name:"push-chevron-up",tags:"interface arrows buttons",css:'.gg-push-chevron-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid transparent;border-radius:100px}.gg-push-chevron-up::after,.gg-push-chevron-up::before{content:"";display:block;box-sizing:border-box;position:absolute;border-top:2px solid}.gg-push-chevron-up::before{top:0;width:14px;height:2px;left:2px}.gg-push-chevron-up::after{width:10px;height:10px;border-right:2px solid;transform:rotate(-45deg);left:4px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 16.929L6.41421 18.3432L12.0711 12.6863L17.7279 18.3432L19.1421 16.929L12.0711 9.85789L5 16.929Z"
    fill="currentColor"
  />
  <path d="M19 8H5V6H19V8Z" fill="currentColor" />
</svg>`}],z5=[{nr:528,name:"push-down",tags:"interface arrows",css:'.gg-push-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;background:currentColor;}.gg-push-down::after,.gg-push-down::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;border-bottom:2px solid;bottom:-5px;left:-5px}.gg-push-down::after{width:8px;height:8px;border-right:2px solid;transform:rotate(45deg);left:-3px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.0001 1H13.0001V15.4853L16.2428 12.2427L17.657 13.6569L12.0001 19.3137L6.34326 13.6569L7.75748 12.2427L11.0001 15.4853V1Z"
    fill="currentColor"
  />
  <path d="M18 20.2877H6V22.2877H18V20.2877Z" fill="currentColor" />
</svg>`}],B5=[{nr:529,name:"push-left",tags:"interface arrows",css:'.gg-push-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:2px;background:currentColor;}.gg-push-left::after,.gg-push-left::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;border-left:2px solid;left:-5px;top:-5px}.gg-push-left::after{width:8px;height:8px;border-bottom:2px solid;transform:rotate(45deg);top:-3px;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M22.2877 11.0001V13.0001H7.80237L11.045 16.2428L9.63079 17.657L3.97394 12.0001L9.63079 6.34326L11.045 7.75748L7.80236 11.0001H22.2877Z"
    fill="currentColor"
  />
  <path d="M3 18V6H1V18H3Z" fill="currentColor" />
</svg>`}],q5=[{nr:530,name:"push-right",tags:"interface arrows",css:'.gg-push-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:2px;background:currentColor;}.gg-push-right::after,.gg-push-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;border-right:2px solid;right:-5px;top:-5px}.gg-push-right::after{width:8px;height:8px;border-top:2px solid;transform:rotate(45deg);top:-3px;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1 12.9999V10.9999H15.4853L12.2427 7.75724L13.6569 6.34303L19.3137 11.9999L13.6569 17.6567L12.2427 16.2425L15.4853 12.9999H1Z"
    fill="currentColor"
  />
  <path d="M20.2877 6V18H22.2877V6H20.2877Z" fill="currentColor" />
</svg>`}],X5=[{nr:531,name:"push-up",tags:"interface arrows",css:'.gg-push-up{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:16px;background:currentColor;}.gg-push-up::after,.gg-push-up::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;border-top:2px solid;top:-5px;left:-5px}.gg-push-up::after{width:8px;height:8px;border-left:2px solid;transform:rotate(45deg);left:-3px;top:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.0001 22.2877H13.0001V7.80237L16.2428 11.045L17.657 9.63079L12.0001 3.97394L6.34326 9.63079L7.75748 11.045L11.0001 7.80236V22.2877ZM18 3H6V1H18V3Z"
    fill="currentColor"
  />
</svg>`}],I5=[{nr:532,name:"qr",tags:"interface devices multimedia",css:'.gg-qr{transform:scale(var(--ggs,1))}.gg-qr,.gg-qr::after{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;box-shadow:-6px -6px 0 -4px,6px 6px 0 -4px,6px -6px 0 -4px,-6px 6px 0 -4px}.gg-qr::after{content:"";position:absolute;width:4px;height:4px;background:currentColor;box-shadow:0 6px 0,6px 6px 0,6px 0 0;top:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 3H3V9H5V5H9V3ZM3 21V15H5V19H9V21H3ZM15 3V5H19V9H21V3H15ZM19 15H21V21H15V19H19V15ZM7 7H11V11H7V7ZM7 13H11V17H7V13ZM17 7H13V11H17V7ZM13 13H17V17H13V13Z"
    fill="currentColor"
  />
</svg>`}],S5=[{nr:533,name:"quote-o",tags:"content interface",css:'.gg-quote-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:18px;border:2px solid;border-radius:2px}.gg-quote-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:6px;border-left:3px solid;border-right:3px solid;left:4px;top:4px;transform:skewX(-20deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20 5H4V19H20V5ZM4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4Z"
    fill="currentColor"
  />
  <path
    d="M9.06723 9.19629H12.0672L9.93267 14.8038H6.93267L9.06723 9.19629Z"
    fill="currentColor"
  />
  <path
    d="M14.0672 9.19629H17.0672L14.9327 14.8038H11.9327L14.0672 9.19629Z"
    fill="currentColor"
  />
</svg>`}],Y5=[{nr:534,name:"quote",tags:"content interface",css:'.gg-quote{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:18px;border:2px solid transparent;border-radius:2px}.gg-quote::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:6px;border-left:3px solid;border-right:3px solid;left:4px;top:4px;transform:skewX(-20deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z" fill="currentColor" />
  <path d="M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z" fill="currentColor" />
</svg>`}],j5=[{nr:535,name:"radio-check",tags:"interface",css:".gg-radio-check{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    fill="currentColor"
  />
</svg>`}],A5=[{nr:536,name:"radio-checked",tags:"interface",css:'.gg-radio-checked,.gg-radio-checked::after{display:block;box-sizing:border-box;border-radius:100px}.gg-radio-checked{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:20px;height:20px}.gg-radio-checked::after{content:"";position:absolute;width:8px;height:8px;background:currentColor;top:4px;left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],U5=[{nr:537,name:"ratio",tags:"interface arrows multimedia",css:'.gg-ratio{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:20px;border:2px solid;border-radius:4px}.gg-ratio::after,.gg-ratio::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px}.gg-ratio::before{border-bottom:2px solid;border-right:2px solid;top:8px;left:12px}.gg-ratio::after{border-top:2px solid;border-left:2px solid;top:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M4 6V12H6V8L10 8V6H4Z" fill="currentColor" />
  <path d="M20 18H14V16H18V12H20V18Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 2C1.79086 2 0 3.79086 0 6V18C0 20.2091 1.79086 22 4 22H20C22.2091 22 24 20.2091 24 18V6C24 3.79086 22.2091 2 20 2H4ZM20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
    fill="currentColor"
  />
</svg>`}],D5=[{nr:538,name:"read",tags:"buttons content",css:'.gg-read,.gg-read::after,.gg-read::before{display:block;box-sizing:border-box;border:2px solid}.gg-read{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:transparent;margin-left:-1px;position:relative;transform:scale(var(--ggs,1));width:6px;height:5px;border-radius:50px}.gg-read::after,.gg-read::before{content:"";position:absolute;width:10px;height:10px;border-radius:10px;left:-10px;top:-5px;box-shadow:-6px 0 0 -4px currentColor}.gg-read::after{left:2px;box-shadow:6px 0 0 -4px currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14ZM10.4649 10C9.77325 8.8044 8.48056 8 7 8C5.13616 8 3.57006 9.27477 3.12602 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H3.12602C3.57006 14.7252 5.13616 16 7 16C9.20914 16 11 14.2091 11 12H13C13 14.2091 14.7909 16 17 16C18.8638 16 20.4299 14.7252 20.874 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H20.874C20.4299 9.27477 18.8638 8 17 8C15.5194 8 14.2267 8.8044 13.5351 10H10.4649ZM15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12Z"
    fill="currentColor"
  />
</svg>`}],P5=[{nr:539,name:"readme",tags:"interface",css:'.gg-readme{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:2px;height:17px;border-bottom:4px solid;border-radius:4px}.gg-readme::after,.gg-readme::before{content:"";display:block;position:absolute;box-sizing:border-box;width:8px;height:12px;box-shadow:0 0 0 2px;border-radius:1px;bottom:-1px;background:linear-gradient(to left,currentColor 4px,transparent 0)no-repeat center 5px/4px 2px,linear-gradient(to left,currentColor 4px,transparent 0)no-repeat center 2px/4px 2px,linear-gradient(to left,currentColor 4px,transparent 0)no-repeat center 8px/4px 2px}.gg-readme::before{border-top-right-radius:3px;left:-8px}.gg-readme::after{border-top-left-radius:3px;right:-8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z"
    fill="currentColor"
  />
</svg>`}],G5=[{nr:540,name:"record",tags:"interface",css:".gg-record{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:6px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 10px;border-radius:100px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],T5=[{nr:541,name:"redo",tags:"interface arrows",css:'.gg-redo{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;border-right-color:transparent;border-radius:100px}.gg-redo::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;top:-3px;right:-1px;transform:rotate(68deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z"
    fill="currentColor"
  />
</svg>`}],$5=[{nr:542,name:"remote",tags:"interface signs",css:'.gg-remote{transform:scale(var(--ggs,1))}.gg-remote,.gg-remote::after,.gg-remote::before{box-sizing:border-box;position:relative;display:block;width:8px;height:8px}.gg-remote::after,.gg-remote::before{content:"";position:absolute;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg) scaleY(1)}.gg-remote::before{left:5px;top:-2px}.gg-remote::after{transform:rotate(-45deg) scaleX(-1);left:-5px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.0514 4.32178L18.4656 5.73599L14.223 9.97863L18.4656 14.2213L17.0514 15.6355L11.3946 9.97863L17.0514 4.32178Z"
    fill="currentColor"
  />
  <path
    d="M6.94864 19.6785L5.53442 18.2643L9.77706 14.0216L5.53442 9.77897L6.94864 8.36476L12.6055 14.0216L6.94864 19.6785Z"
    fill="currentColor"
  />
</svg>`}],O5=[{nr:543,name:"remove-r",tags:"interface",css:'.gg-remove-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}.gg-remove-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:8px;left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],E5=[{nr:544,name:"remove",tags:"interface",css:'.gg-remove{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:22px}.gg-remove::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:2px;background:currentColor;border-radius:5px;top:8px;left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],F5=[{nr:545,name:"rename",tags:"interface design",css:'.gg-rename{box-sizing:border-box;position:relative;display:block;width:20px;height:16px;transform:scale(var(--ggs,1));background:linear-gradient( to left,currentColor 22px,transparent 0) no-repeat 6px center/2px 22px}.gg-rename::after,.gg-rename::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:12px;border:2px solid;top:2px}.gg-rename::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px}.gg-rename::after{width:10px;border-left:0;border-top-right-radius:3px;border-bottom-right-radius:3px;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10 4H8V6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H8V20H10V4ZM8 8V16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H8Z"
    fill="currentColor"
  />
  <path
    d="M19 16H12V18H19C20.6569 18 22 16.6569 22 15V9C22 7.34315 20.6569 6 19 6H12V8H19C19.5523 8 20 8.44771 20 9V15C20 15.5523 19.5523 16 19 16Z"
    fill="currentColor"
  />
</svg>`}],N5=[{nr:546,name:"reorder",tags:"interface",css:'.gg-reorder{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:2px;border-radius:3px;background:currentColor}.gg-reorder::after,.gg-reorder::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px}.gg-reorder::before{border:2px solid;width:6px;height:6px;left:12px;top:-2px}.gg-reorder::after{top:-4px;left:0;width:10px;height:2px;opacity:.5;background:currentColor;box-shadow:0 8px 0 0,0 12px 0 0,0 16px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 4C3 3.44772 3.44772 3 4 3H12C12.5523 3 13 3.44772 13 4C13 4.55228 12.5523 5 12 5H4C3.44772 5 3 4.55228 3 4Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    d="M3 12C3 11.4477 3.44772 11 4 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H4C3.44772 13 3 12.5523 3 12Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    d="M3 16C3 15.4477 3.44772 15 4 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H4C3.44772 17 3 16.5523 3 16Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    d="M3 20C3 19.4477 3.44772 19 4 19H12C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21H4C3.44772 21 3 20.5523 3 20Z"
    fill="currentColor"
    fill-opacity="0.5"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15.1707 9C15.5825 10.1652 16.6938 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.6938 5 15.5825 5.83481 15.1707 7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H15.1707ZM19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8Z"
    fill="currentColor"
  />
</svg>`}],J5=[{nr:547,name:"repeat",tags:"interface arrows",css:'.gg-repeat{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));box-shadow:-2px -2px 0 0,2px 2px 0 0;width:14px;height:6px}.gg-repeat::after,.gg-repeat::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}.gg-repeat::before{border-left:5px solid;top:-4px;right:0}.gg-repeat::after{border-right:5px solid;bottom:-4px;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.3701 7.99993L13.8701 10.598V8.99993H6.88989V12.9999H4.88989V6.99993H13.8701V5.40186L18.3701 7.99993Z"
    fill="currentColor"
  />
  <path
    d="M10.1299 16.9999H19.1101V10.9999H17.1101V14.9999H10.1299V13.4019L5.62988 15.9999L10.1299 18.598V16.9999Z"
    fill="currentColor"
  />
</svg>`}],K5=[{nr:548,name:"ring",tags:"design",css:'.gg-ring{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}.gg-ring::after,.gg-ring::before{content:"";display:block;position:absolute;border:2px solid;box-sizing:border-box}.gg-ring::before{border-top-right-radius:100px;transform:rotate(-45deg);width:8px;height:8px;left:6px;top:-1px}.gg-ring::after{width:18px;height:18px;border-radius:100px;border-top-color:transparent;left:1px;top:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6.34326 3.68567C6.83159 3.19735 7.36734 2.78535 7.93569 2.44968C10.4352 0.97348 13.5651 0.97348 16.0645 2.44968C16.6329 2.78535 17.1686 3.19735 17.657 3.68567L12.0001 9.34253L6.34326 3.68567ZM12.0001 6.5141L9.4131 3.92709C11.0447 3.14768 12.9556 3.14768 14.5871 3.92709L12.0001 6.5141Z"
    fill="currentColor"
  />
  <path
    d="M2 12.6576C2 9.52653 3.43899 6.73156 5.69172 4.89796L7.11528 6.32152C5.22043 7.78449 4 10.0785 4 12.6576C4 17.0759 7.58172 20.6576 12 20.6576C16.4183 20.6576 20 17.0759 20 12.6576C20 10.0785 18.7796 7.78451 16.8847 6.32154L18.3083 4.89798C20.561 6.73158 22 9.52654 22 12.6576C22 18.1804 17.5228 22.6576 12 22.6576C6.47715 22.6576 2 18.1804 2 12.6576Z"
    fill="currentColor"
  />
</svg>`}],Q5=[{nr:549,name:"row-first",tags:"interface design",css:'.gg-row-first{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:10px}.gg-row-first::after,.gg-row-first::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor}.gg-row-first::before{width:10px;top:4px;opacity:.5;box-shadow:0 4px 0}.gg-row-first::after{width:14px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.5">
    <path
      d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H14C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11H6Z"
      fill="currentColor"
    />
    <path
      d="M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H6Z"
      fill="currentColor"
    />
  </g>
  <path
    d="M5 8C5 7.44772 5.44772 7 6 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H6C5.44772 9 5 8.55228 5 8Z"
    fill="currentColor"
  />
</svg>`}],R5=[{nr:550,name:"row-last",tags:"interface design",css:'.gg-row-last{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:10px}.gg-row-last::after,.gg-row-last::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;height:2px;background:currentColor}.gg-row-last::before{width:10px;opacity:.5;box-shadow:0 4px 0}.gg-row-last::after{width:14px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.5">
    <path
      d="M6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H6Z"
      fill="currentColor"
    />
    <path
      d="M6 9C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H6Z"
      fill="currentColor"
    />
  </g>
  <path
    d="M5 16C5 16.5523 5.44772 17 6 17H18C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15H6C5.44772 15 5 15.4477 5 16Z"
    fill="currentColor"
  />
</svg>`}],W5=[{nr:551,name:"ruler",tags:"content interface",css:'.gg-ruler{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:13px;border:2px solid;border-radius:3px}.gg-ruler::after,.gg-ruler::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:5px;background:currentColor;left:7px;top:-1px;box-shadow:8px 0 0}.gg-ruler::before{height:7px;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C1.34315 6 0 7.34315 0 9V16C0 17.6569 1.34315 19 3 19H21C22.6569 19 24 17.6569 24 16V9C24 7.34315 22.6569 6 21 6H3ZM9 8H7V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V8H3C2.44772 8 2 8.44772 2 9V16C2 16.5523 2.44772 17 3 17H21C21.5523 17 22 16.5523 22 16V9C22 8.44772 21.5523 8 21 8H19V11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11V8H15V13C15 13.5523 14.5523 14 14 14C13.4477 14 13 13.5523 13 13V8H11V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V8Z"
    fill="currentColor"
  />
</svg>`}],_5=[{nr:552,name:"sand-clock",tags:"interface",css:'.gg-sand-clock{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:20px;border-top:2px solid;border-bottom:2px solid}.gg-sand-clock::after,.gg-sand-clock::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-sand-clock::before{border-top-left-radius:14px;border-top-right-radius:14px;bottom:-2px;width:10px;height:10px;border:2px solid;left:1px}.gg-sand-clock::after{width:6px;height:6px;border:2px solid transparent;border-bottom-left-radius:14px;border-bottom-right-radius:14px;top:0;left:3px;box-shadow:0 0 0 2px,inset 2px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13 6H11V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V6Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 2V4H7V7C7 9.76142 9.23858 12 12 12C9.23858 12 7 14.2386 7 17V20H6V22H18V20H17V17C17 14.2386 14.7614 12 12 12C14.7614 12 17 9.76142 17 7V4H18V2H6ZM9 4H15V7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7V4ZM9 17V20H15V17C15 15.3431 13.6569 14 12 14C10.3431 14 9 15.3431 9 17Z"
    fill="currentColor"
  />
</svg>`}],ol=[{nr:553,name:"scan",tags:"interface",css:'.gg-scan{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 22px,transparent 0)no-repeat center/2px 22px}.gg-scan::after,.gg-scan::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;border:2px solid;top:2px}.gg-scan::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px}.gg-scan::after{border-left:0;border-top-right-radius:3px;border-bottom-right-radius:3px;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 3H13V21H11V3Z" fill="currentColor" />
  <path
    d="M5 8C5 7.44771 5.44772 7 6 7H9V5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H9V17H6C5.44772 17 5 16.5523 5 16V8Z"
    fill="currentColor"
  />
  <path
    d="M19 8C19 7.44771 18.5523 7 18 7H15V5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H15V17H18C18.5523 17 19 16.5523 19 16V8Z"
    fill="currentColor"
  />
</svg>`}],rl=[{nr:554,name:"screen-mirror",tags:"interface arrows multimedia",css:'.gg-screen-mirror{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:10px;border:2px solid;border-bottom:0}.gg-screen-mirror::after,.gg-screen-mirror::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-screen-mirror::after{border-bottom:5px solid;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;bottom:-2px;left:3px}.gg-screen-mirror::before{width:18px;height:2px;left:-2px;bottom:0;border-left:5px solid;border-right:5px solid}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 8H19V14H16V16H21V6H3V16H8V14H5V8Z" fill="currentColor" />
  <path d="M16.3301 19L12 13L7.66987 19H16.3301Z" fill="currentColor" />
</svg>`}],el=[{nr:555,name:"screen-shot",tags:"multimedia interface arrows",css:'.gg-screen-shot{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:1px}.gg-screen-shot::after,.gg-screen-shot::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px}.gg-screen-shot::before{border-bottom:2px solid;border-right:2px solid;bottom:2px;right:2px}.gg-screen-shot::after{border-top:2px solid;border-left:2px solid;top:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M12 8V6H8V10H10V8H12Z" fill="currentColor" />
  <path d="M14 14H16V18H12V16H14V14Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3ZM6 20V4H18V20H6Z"
    fill="currentColor"
  />
</svg>`}],nl=[{nr:556,name:"screen-wide",tags:"devices multimedia",css:'.gg-screen-wide{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:11px;border:2px solid;border-radius:3px;margin-top:-4px}.gg-screen-wide::after,.gg-screen-wide::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:8px;height:2px;background:currentColor;top:10px;left:6px}.gg-screen-wide::before{width:2px;height:4px;top:8px;left:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 16H3C1.34315 16 0 14.6569 0 13V8C0 6.34315 1.34315 5 3 5H21C22.6569 5 24 6.34315 24 8V13C24 14.6569 22.6569 16 21 16H13V17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44771 19 8 18.5523 8 18C8 17.4477 8.44771 17 9 17H11V16ZM3 7H21C21.5523 7 22 7.44772 22 8V13C22 13.5523 21.5523 14 21 14H3C2.44772 14 2 13.5523 2 13V8C2 7.44772 2.44772 7 3 7Z"
    fill="currentColor"
  />
</svg>`}],tl=[{nr:557,name:"screen",tags:"interface devices multimedia",css:'.gg-screen{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:14px;border:2px solid;border-radius:3px;margin-top:-4px}.gg-screen::after,.gg-screen::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:2px;background:currentColor;top:14px;left:4px}.gg-screen::before{width:2px;height:6px;top:10px;left:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z"
    fill="currentColor"
  />
</svg>`}],il=[{nr:558,name:"scroll-h",tags:"interface",css:'.gg-scroll-h,.gg-scroll-h::after,.gg-scroll-h::before{display:block;box-sizing:border-box;width:6px;height:6px}.gg-scroll-h{position:relative;transform:scale(var(--ggs,1));border:2px solid;border-radius:10px}.gg-scroll-h::after,.gg-scroll-h::before{content:"";position:absolute;transform:rotate(45deg);top:-2px}.gg-scroll-h::after{border-top:2px solid;border-right:2px solid;right:-8px}.gg-scroll-h::before{border-bottom:2px solid;border-left:2px solid;left:-8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.18188 9.17154L5.76766 7.75732L1.52502 12L5.76766 16.2426L7.18188 14.8284L4.35345 12L7.18188 9.17154Z"
    fill="currentColor"
  />
  <path
    d="M16.8181 14.8284L18.2323 16.2426L22.4749 12L18.2323 7.75733L16.8181 9.17155L19.6465 12L16.8181 14.8284Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.9999 12C14.9999 13.6569 13.6567 15 11.9999 15C10.343 15 8.99988 13.6569 8.99988 12C8.99988 10.3431 10.343 9 11.9999 9C13.6567 9 14.9999 10.3431 14.9999 12ZM12.9999 12C12.9999 12.5523 12.5522 13 11.9999 13C11.4476 13 10.9999 12.5523 10.9999 12C10.9999 11.4477 11.4476 11 11.9999 11C12.5522 11 12.9999 11.4477 12.9999 12Z"
    fill="currentColor"
  />
</svg>`}],ll=[{nr:559,name:"scroll-v",tags:"interface",css:'.gg-scroll-v,.gg-scroll-v::after,.gg-scroll-v::before{display:block;box-sizing:border-box;width:6px;height:6px}.gg-scroll-v{position:relative;transform:scale(var(--ggs,1));border:2px solid;border-radius:10px}.gg-scroll-v::after,.gg-scroll-v::before{content:"";position:absolute;transform:rotate(-45deg);left:-2px}.gg-scroll-v::after{border-bottom:2px solid;border-left:2px solid;bottom:-8px}.gg-scroll-v::before{border-top:2px solid;border-right:2px solid;top:-8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.17154 16.8182L7.75732 18.2324L12 22.475L16.2426 18.2324L14.8284 16.8182L12 19.6466L9.17154 16.8182Z"
    fill="currentColor"
  />
  <path
    d="M14.8284 7.182L16.2426 5.76779L12 1.52515L7.75733 5.76779L9.17155 7.182L12 4.35357L14.8284 7.182Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 9.00018C13.6569 9.00018 15 10.3433 15 12.0002C15 13.657 13.6569 15.0002 12 15.0002C10.3431 15.0002 9 13.657 9 12.0002C9 10.3433 10.3431 9.00018 12 9.00018ZM12 11.0002C12.5523 11.0002 13 11.4479 13 12.0002C13 12.5525 12.5523 13.0002 12 13.0002C11.4477 13.0002 11 12.5525 11 12.0002C11 11.4479 11.4477 11.0002 12 11.0002Z"
    fill="currentColor"
  />
</svg>`}],sl=[{nr:560,name:"search-found",tags:"interface",css:'.gg-search-found{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:-4px}.gg-search-found::after,.gg-search-found::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-search-found::after{border-radius:3px;width:2px;height:8px;background:currentColor;transform:rotate(-45deg);top:10px;left:12px}.gg-search-found::before{width:6px;height:4px;border-left:2px solid;border-bottom:2px solid;transform:rotate(-40deg);top:3px;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.66542 10.2366L9.19751 8.951L10.4831 10.4831L13.5473 7.91194L14.8328 9.44402L10.2366 13.3007L7.66542 10.2366Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.2071 4.89344C19.0923 7.77862 19.3131 12.3193 16.8693 15.4578C16.8846 15.4713 16.8996 15.4854 16.9143 15.5L21.1569 19.7427C21.5474 20.1332 21.5474 20.7664 21.1569 21.1569C20.7664 21.5474 20.1332 21.5474 19.7427 21.1569L15.5 16.9143C15.4854 16.8996 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77862 19.0923 4.89344 16.2071C1.76924 13.083 1.76924 8.01763 4.89344 4.89344C8.01763 1.76924 13.083 1.76924 16.2071 4.89344ZM14.7929 14.7929C17.1361 12.4498 17.1361 8.6508 14.7929 6.30765C12.4498 3.96451 8.6508 3.96451 6.30765 6.30765C3.96451 8.6508 3.96451 12.4498 6.30765 14.7929C8.6508 17.1361 12.4498 17.1361 14.7929 14.7929Z"
    fill="currentColor"
  />
</svg>`}],gl=[{nr:561,name:"search-loading",tags:"interface",css:'.gg-search-loading{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:-4px}.gg-search-loading::after,.gg-search-loading::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;background:currentColor}.gg-search-loading::after{border-radius:3px;height:8px;transform:rotate(-45deg);top:10px;left:12px}.gg-search-loading::before{height:2px;border-radius:100%;top:5px;left:5px;box-shadow:-3px 0 0,3px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.55024 10.5503C8.55024 11.1026 8.10253 11.5503 7.55024 11.5503C6.99796 11.5503 6.55024 11.1026 6.55024 10.5503C6.55024 9.99801 6.99796 9.55029 7.55024 9.55029C8.10253 9.55029 8.55024 9.99801 8.55024 10.5503Z"
    fill="currentColor"
  />
  <path
    d="M10.5502 11.5503C11.1025 11.5503 11.5502 11.1026 11.5502 10.5503C11.5502 9.99801 11.1025 9.55029 10.5502 9.55029C9.99796 9.55029 9.55024 9.99801 9.55024 10.5503C9.55024 11.1026 9.99796 11.5503 10.5502 11.5503Z"
    fill="currentColor"
  />
  <path
    d="M13.5502 11.5503C14.1025 11.5503 14.5502 11.1026 14.5502 10.5503C14.5502 9.99801 14.1025 9.55029 13.5502 9.55029C12.998 9.55029 12.5502 9.99801 12.5502 10.5503C12.5502 11.1026 12.998 11.5503 13.5502 11.5503Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.2071 4.89344C19.0922 7.7786 19.313 12.3192 16.8693 15.4577C16.8846 15.4712 16.8996 15.4853 16.9142 15.4999L21.1568 19.7426C21.5473 20.1331 21.5473 20.7663 21.1568 21.1568C20.7663 21.5473 20.1331 21.5473 19.7426 21.1568L15.5 16.9141C15.4853 16.8995 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77858 19.0923 4.89338 16.2071C1.76918 13.083 1.76918 8.01763 4.89338 4.89344C8.01757 1.76924 13.0829 1.76924 16.2071 4.89344ZM6.30759 14.7929C8.65074 17.1361 12.4497 17.1361 14.7929 14.7929C17.136 12.4498 17.136 8.6508 14.7929 6.30765C12.4497 3.96451 8.65074 3.96451 6.30759 6.30765C3.96445 8.6508 3.96445 12.4498 6.30759 14.7929Z"
    fill="currentColor"
  />
</svg>`}],pl=[{nr:562,name:"search",tags:"interface",css:'.gg-search{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:-4px}.gg-search::after{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:8px;background:currentColor;transform:rotate(-45deg);top:10px;left:12px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
    fill="currentColor"
  />
</svg>`}],al=[{nr:563,name:"select-o",tags:"interface arrows",css:'.gg-select-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:20px;}.gg-select-o::after,.gg-select-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;left:6px;transform:rotate(-45deg)}.gg-select-o::before{border-left:2px solid;border-bottom:2px solid;bottom:4px}.gg-select-o::after{border-right:2px solid;border-top:2px solid;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.17154 11.508L7.75732 10.0938L12 5.85114L16.2426 10.0938L14.8284 11.508L12 8.67956L9.17154 11.508Z"
    fill="currentColor"
  />
  <path
    d="M9.17154 12.492L7.75732 13.9062L12 18.1489L16.2426 13.9062L14.8284 12.492L12 15.3204L9.17154 12.492Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],dl=[{nr:564,name:"select-r",tags:"interface arrows",css:'.gg-select-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px;}.gg-select-r::after,.gg-select-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;left:6px;transform:rotate(-45deg)}.gg-select-r::before{border-left:2px solid;border-bottom:2px solid;bottom:4px}.gg-select-r::after{border-right:2px solid;border-top:2px solid;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.17154 11.508L7.75732 10.0938L12 5.85113L16.2426 10.0938L14.8284 11.508L12 8.67956L9.17154 11.508Z"
    fill="currentColor"
  />
  <path
    d="M9.17154 12.492L7.75732 13.9062L12 18.1489L16.2426 13.9062L14.8284 12.492L12 15.3204L9.17154 12.492Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
    fill="currentColor"
  />
</svg>`}],xl=[{nr:565,name:"select",tags:"interface arrows",css:'.gg-select{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-select::after,.gg-select::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;left:7px;transform:rotate(-45deg)}.gg-select::before{border-left:2px solid;border-bottom:2px solid;bottom:4px}.gg-select::after{border-right:2px solid;border-top:2px solid;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 9.65685L7.41421 11.0711L11.6569 6.82843L15.8995 11.0711L17.3137 9.65685L11.6569 4L6 9.65685Z"
    fill="currentColor"
  />
  <path
    d="M6 14.4433L7.41421 13.0291L11.6569 17.2717L15.8995 13.0291L17.3137 14.4433L11.6569 20.1001L6 14.4433Z"
    fill="currentColor"
  />
</svg>`}],bl=[{nr:566,name:"server",tags:"devices",css:'.gg-server{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:3px}.gg-server::after,.gg-server::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor}.gg-server::before{top:2px;box-shadow:0 4px 0;border-radius:3px;width:8px;left:2px}.gg-server::after{width:2px;border-radius:10px;left:5px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H9Z"
    fill="currentColor"
  />
  <path
    d="M9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H9Z"
    fill="currentColor"
  />
  <path
    d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM7 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44771 4 7 4Z"
    fill="currentColor"
  />
</svg>`}],hl=[{nr:567,name:"serverless",tags:"brands",css:'.gg-serverless{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:15px;height:13px;overflow:hidden}.gg-serverless::after,.gg-serverless::before{background:currentColor;content:"";box-sizing:border-box;position:absolute;display:block;height:3px;box-shadow:0 5px 0,0 10px 0;transform:skew(-20deg)}.gg-serverless::before{width:8px;left:-2px}.gg-serverless::after{width:12px;right:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11.7872 6H5V9H10.6953L11.7872 6Z" fill="currentColor" />
  <path d="M9.96735 11H5V14H8.87544L9.96735 11Z" fill="currentColor" />
  <path d="M11.0038 14L12.0957 11H20V14H11.0038Z" fill="currentColor" />
  <path d="M8.1475 16H5V19H7.05559L8.1475 16Z" fill="currentColor" />
  <path d="M9.18394 19L10.2759 16H20V19H9.18394Z" fill="currentColor" />
  <path d="M12.8236 9L13.9156 6H20V9H12.8236Z" fill="currentColor" />
</svg>`}],cl=[{nr:568,name:"shape-circle",tags:"design shapes",css:".gg-shape-circle{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:3px solid;border-radius:100px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
    fill="currentColor"
  />
</svg>`}],fl=[{nr:569,name:"shape-half-circle",tags:"design shapes",css:".gg-shape-half-circle{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:16px;border:3px solid;border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20V17C13.2386 17 11 14.7614 11 12C11 9.23858 13.2386 7 16 7V4Z"
    fill="currentColor"
  />
</svg>`}],Cl=[{nr:570,name:"shape-hexagon",tags:"design shapes",css:'.gg-shape-hexagon,.gg-shape-hexagon::after,.gg-shape-hexagon::before{display:block;box-sizing:border-box;width:18px;height:10px;border-left:3px solid currentColor;border-right:3px solid currentColor}.gg-shape-hexagon{position:relative;transform:scale(var(--ggs,1))}.gg-shape-hexagon::after,.gg-shape-hexagon::before{content:"";position:absolute;left:-3px}.gg-shape-hexagon::before{transform:rotate(60deg)}.gg-shape-hexagon::after{transform:rotate(-60deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z"
    fill="currentColor"
  />
</svg>`}],wl=[{nr:571,name:"shape-rhombus",tags:"design shapes",css:".gg-shape-rhombus{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:14px;height:14px;border:3px solid}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 6.34315L6.34317 12L12 17.6569L17.6569 12L12 6.34315ZM2.10052 12L12 21.8995L21.8995 12L12 2.10051L2.10052 12Z"
    fill="currentColor"
  />
</svg>`}],ul=[{nr:572,name:"shape-square",tags:"design shapes",css:".gg-shape-square{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:3px solid}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 7H7V17H17V7ZM4 4V20H20V4H4Z"
    fill="currentColor"
  />
</svg>`}],vl=[{nr:573,name:"shape-triangle",tags:"interface",css:'.gg-shape-triangle{position:relative;transform:scale(var(--ggs,1));width:22px;height:17px;border-left:3px solid transparent;border-bottom:3px solid}.gg-shape-triangle,.gg-shape-triangle::before{display:block;box-sizing:border-box;border-right:3px solid transparent}.gg-shape-triangle::before{content:"";position:absolute;width:20px;height:20px;border-left:3px solid;border-top:3px solid;border-bottom:3px solid transparent;transform:rotate(45deg) skew(10deg,10deg);left:-2px;bottom:-13px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.6603 5L3 20H20.3205L11.6603 5ZM11.6603 11L8.19615 17H15.1244L11.6603 11Z"
    fill="currentColor"
  />
</svg>`}],ml=[{nr:574,name:"shape-zigzag",tags:"design shapes",css:'.gg-shape-zigzag,.gg-shape-zigzag::after,.gg-shape-zigzag::before{display:block;box-sizing:border-box;width:5px;height:7px;border-left:2px solid;border-bottom:2px solid}.gg-shape-zigzag{margin-left:-18px;transform:rotate(-49deg) scale(var(--ggs,1));position:relative}.gg-shape-zigzag::after,.gg-shape-zigzag::before{content:"";position:absolute;left:2px;top:5px}.gg-shape-zigzag::before{left:7px;top:10px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2.31212 9L1 10.5094L4.77355 13.7897L6.28297 15.1018L7.59509 13.5924L9.13456 11.8214L11.3988 13.7897L12.9082 15.1018L14.2203 13.5924L15.7584 11.823L18.0209 13.7897L19.5303 15.1018L20.8424 13.5924L22.8106 11.3283L21.3012 10.0162L19.333 12.2803L15.5594 9L14.2473 10.5094L14.249 10.5109L12.7109 12.2803L8.93736 9L8.05395 10.0163L6.08567 12.2803L2.31212 9Z"
    fill="currentColor"
  />
</svg>`}],Hl=[{nr:575,name:"share",tags:"interface buttons",css:'.gg-share{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:6px;background:currentColor;border-radius:100px;box-shadow:10px -6px 0,10px 6px 0}.gg-share::after,.gg-share::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:2px;background:currentColor;left:2px}.gg-share::before{top:0;transform:rotate(-35deg)}.gg-share::after{bottom:0;transform:rotate(35deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z"
    fill="currentColor"
  />
</svg>`}],Vl=[{nr:576,name:"shield",tags:"interface devices signs",css:'.gg-shield{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:4px;background:currentColor;border-radius:100px;margin-top:-6px}.gg-shield::after,.gg-shield::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:8px;height:16px;border:2px solid}.gg-shield::before{border-bottom-left-radius:40px;border-right:0;left:0}.gg-shield::after{border-bottom-right-radius:40px;border-left:0;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 8V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V8H7ZM5 4H19V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V4Z"
    fill="currentColor"
  />
</svg>`}],Ll=[{nr:577,name:"shopping-bag",tags:"interface shopping",css:'.gg-shopping-bag{transform:scale(var(--ggs,1))}.gg-shopping-bag,.gg-shopping-bag::after{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;border:2px solid;border-radius:3px}.gg-shopping-bag::after{content:"";position:absolute;width:10px;height:6px;border-bottom-left-radius:120px;border-bottom-right-radius:120px;border-top:0;top:2px;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
    fill="currentColor"
  />
</svg>`}],Ml=[{nr:578,name:"shopping-cart",tags:"interface shopping",css:'.gg-shopping-cart{display:block;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));width:20px;height:21px;background:linear-gradient(to left,currentColor 12px,transparent 0)no-repeat -1px 6px/18px 2px,linear-gradient(to left,currentColor 12px,transparent 0)no-repeat 6px 14px/11px 2px,linear-gradient(to left,currentColor 12px,transparent 0)no-repeat 0 2px/4px 2px,radial-gradient(circle,currentColor 60%,transparent 40%)no-repeat 12px 17px/4px 4px,radial-gradient(circle,currentColor 60%,transparent 40%)no-repeat 6px 17px/4px 4px}.gg-shopping-cart::after,.gg-shopping-cart::before{content:"";display:block;position:absolute;box-sizing:border-box;width:2px;height:14px;background:currentColor;top:2px;left:4px;transform:skew(12deg)}.gg-shopping-cart::after{height:10px;top:6px;left:16px;transform:skew(-12deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
    fill="currentColor"
  />
  <path
    d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
    fill="currentColor"
  />
  <path
    d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
    fill="currentColor"
  />
</svg>`}],Zl=[{nr:579,name:"shortcut",tags:"interface buttons",css:'.gg-shortcut,.gg-shortcut::after{display:block;box-sizing:border-box;border-radius:3px}.gg-shortcut{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:18px;height:18px}.gg-shortcut::after{content:"";position:absolute;width:2px;height:12px;background:currentColor;left:6px;top:1px;transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.1925 7.70711C15.8019 7.31658 15.1688 7.31658 14.7782 7.70711L7.70718 14.7782C7.31665 15.1687 7.31665 15.8019 7.70718 16.1924C8.0977 16.5829 8.73087 16.5829 9.12139 16.1924L16.1925 9.12132C16.583 8.7308 16.583 8.09763 16.1925 7.70711Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
    fill="currentColor"
  />
</svg>`}],kl=[{nr:580,name:"shutterstock",tags:"brands",css:'.gg-shutterstock{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:3px}.gg-shutterstock::after,.gg-shutterstock::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-radius:1px}.gg-shutterstock::before{border-bottom:2px solid;border-right:2px solid;bottom:2px;right:2px}.gg-shutterstock::after{border-top:2px solid;border-left:2px solid;top:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 17C12 17.5523 12.4477 18 13 18H17C17.5523 18 18 17.5523 18 17V13C18 12.4477 17.5523 12 17 12H16V16H12V17Z"
    fill="currentColor"
  />
  <path
    d="M11 6C11.5523 6 12 6.44772 12 7V8H8V12H7C6.44772 12 6 11.5523 6 11V7C6 6.44772 6.44772 6 7 6H11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4Z"
    fill="currentColor"
  />
</svg>`}],yl=[{nr:581,name:"sidebar-open",tags:"interface",css:'.gg-sidebar-open{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:16px;border:2px solid}.gg-sidebar-open::before{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:12px;background:currentColor;top:0;left:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 4H21V20H3V4ZM9 6H19V18H9V6Z"
    fill="currentColor"
  />
</svg>`}],zl=[{nr:582,name:"sidebar-right",tags:"interface",css:'.gg-sidebar-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:16px;border-right:2px solid}.gg-sidebar-right::before{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;height:16px;border:2px solid;top:0;right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 4H17V20H3V4ZM5 6H15V18H5V6Z"
    fill="currentColor"
  />
  <path d="M21 4H19V20H21V4Z" fill="currentColor" />
</svg>`}],Bl=[{nr:583,name:"sidebar",tags:"interface",css:'.gg-sidebar,.gg-sidebar::before{display:block;box-sizing:border-box;height:16px}.gg-sidebar{border-left:2px solid;position:relative;transform:scale(var(--ggs,1));width:18px}.gg-sidebar::before{content:"";position:absolute;width:14px;border:2px solid;top:0;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M21 20H7V4H21V20ZM19 18H9V6H19V18Z"
    fill="currentColor"
  />
  <path d="M3 20H5V4H3V20Z" fill="currentColor" />
</svg>`}],ql=[{nr:584,name:"signal",tags:"devices multimedia",css:'.gg-signal,.gg-signal::after,.gg-signal::before{display:block;box-sizing:border-box;width:2px;border-radius:4px;background:currentColor}.gg-signal{position:relative;transform:scale(var(--ggs,1));height:8px}.gg-signal::after,.gg-signal::before{content:"";position:absolute}.gg-signal::before{height:12px;left:4px;bottom:0}.gg-signal::after{height:4px;left:-4px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7Z"
    fill="currentColor"
  />
  <path
    d="M7 15C7 14.4477 7.44772 14 8 14C8.55228 14 9 14.4477 9 15V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V15Z"
    fill="currentColor"
  />
  <path
    d="M12 10C11.4477 10 11 10.4477 11 11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V11C13 10.4477 12.5523 10 12 10Z"
    fill="currentColor"
  />
</svg>`}],Xl=[{nr:585,name:"size",tags:"signs interface design buttons",css:'.gg-size{box-sizing:border-box;position:relative;display:block;width:16px;height:16px;transform:scale(var(--ggs,1));border-left:8px solid transparent;box-shadow:inset 0 0 0 2px}.gg-size::after,.gg-size::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:12px;border:2px solid;border-right:0;right:6px;top:2px}.gg-size::before{width:4px;height:8px;right:12px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 6V4H20V20H12V18H8V16H4V8H8V6H12ZM14 6H18V18H14V6ZM12 8H10V16H12V8ZM8 10V14H6V10H8Z"
    fill="currentColor"
  />
</svg>`}],Il=[{nr:586,name:"sketch",tags:"multimedia interface",css:'.gg-sketch{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:18px;background:linear-gradient(to left,currentColor 16px,transparent 0) no-repeat center 6px/6px 2px}.gg-sketch::after,.gg-sketch::before{content:"";display:block;box-sizing:border-box;position:absolute;width:14px;border:2px solid;left:4px}.gg-sketch::before{height:14px;border-top-color:transparent;border-right-color:transparent;transform:rotate(-45deg)skew(-8deg,-8deg);bottom:4px}.gg-sketch::after{height:7px;border-bottom:0;transform:perspective(12px)rotateX(35deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.20879 3H18.903L20.1118 10.2527L12.0559 21.1858L4 10.2527L5.20879 3ZM6.90304 5L6.11184 9.74726L12.0559 17.8142L18 9.74726L17.2088 5H6.90304Z"
    fill="currentColor"
  />
  <path d="M8.05592 8H16.0559V10H8.05592V8Z" fill="currentColor" />
</svg>`}],Sl=[{nr:587,name:"slack",tags:"brands",css:'.gg-slack{position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));display:block;width:20px;height:20px;background:linear-gradient(to left,currentColor 5px,transparent 0) no-repeat 7px 2px/2px 2px,linear-gradient(to left,currentColor 5px,transparent 0) no-repeat 15px 7px/2px 2px,linear-gradient(to left,currentColor 5px,transparent 0) no-repeat 2px 10px/2px 2px,linear-gradient(to left,currentColor 5px,transparent 0) no-repeat 10px 15px/2px 2px,linear-gradient(to left,currentColor 5px,transparent 0) no-repeat 10px 2px/4px 5px,linear-gradient(to left,currentColor 5px,transparent 0) no-repeat 5px 12px/4px 5px}.gg-slack::after,.gg-slack::before{background:currentColor;content:"";position:absolute;box-sizing:border-box;display:block;height:4px;border-radius:22px}.gg-slack::before{width:9px;top:5px;box-shadow:10px 5px 0}.gg-slack::after{width:4px;left:5px;box-shadow:-5px 10px 0,0 10px 0,0 15px 0,5px 15px 0,5px 5px 0,5px 0 0,10px 5px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
    fill="currentColor"
  />
</svg>`}],Yl=[{nr:588,name:"sleep",tags:"interface",css:'.gg-sleep,.gg-sleep::after{display:block;box-sizing:border-box}.gg-sleep{transform:scale(var(--ggs,1));position:relative;width:18px;height:18px;border:2px solid;border-radius:22px}.gg-sleep::after{content:"";position:absolute;width:14px;height:2px;background:currentColor;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16.899 17C15.6364 18.2372 13.9073 19 12 19C10.0927 19 8.36355 18.2372 7.10102 17H16.899ZM18.3264 15C18.7583 14.0907 19 13.0736 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.0736 5.24169 14.0907 5.67363 15H18.3264Z"
    fill="currentColor"
  />
</svg>`}],jl=[{nr:589,name:"smart-home-boiler",tags:"interface",css:'.gg-smart-home-boiler{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:20px;border:2px solid;border-radius:2px;border-top-left-radius:4px;border-top-right-radius:4px;background:linear-gradient(to left,currentColor 14px,transparent 0)no-repeat center 4px/14px 2px}.gg-smart-home-boiler::before{content:"";position:absolute;display:block;box-sizing:border-box;width:6px;height:3px;border-left:2px solid;border-right:2px solid;transform:skewX(20deg);bottom:-4px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 5C5 2.79086 6.79086 1 9 1H15C17.2091 1 19 2.79086 19 5V21H15.144L15.8865 22.9999H13.8865L13.144 21H11.144L11.8865 22.9999H9.88653L9.14397 21H5V5ZM9 3H15C16.1046 3 17 3.89543 17 5V7H7V5C7 3.89543 7.89543 3 9 3ZM7 9H17V19H7V9Z"
    fill="currentColor"
  />
</svg>`}],Al=[{nr:590,name:"smart-home-cooker",tags:"interface",css:'.gg-smart-home-cooker{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:4px;background:linear-gradient(to left,currentColor 18px,transparent 0) no-repeat center 2px/18px 2px}.gg-smart-home-cooker::after,.gg-smart-home-cooker::before{content:"";position:absolute;display:block;box-sizing:border-box;width:6px;left:4px}.gg-smart-home-cooker::before{height:6px;border:2px solid;border-radius:4px;bottom:2px}.gg-smart-home-cooker::after{height:3px;box-shadow:0 -2px 0,inset 0 0 0 2px;border-left:2px solid transparent;border-right:2px solid transparent;top:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 1H9V3H11V5H7C4.79086 5 3 6.79086 3 9V19C3 21.2091 4.79086 23 7 23H17C19.2091 23 21 21.2091 21 19V9C21 6.79086 19.2091 5 17 5H13V3H15V1ZM17 7H7C5.89543 7 5 7.89543 5 9H19C19 7.89543 18.1046 7 17 7ZM19 11H5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11Z"
    fill="currentColor"
  />
</svg>`}],Ul=[{nr:591,name:"smart-home-heat",tags:"interface",css:'.gg-smart-home-heat{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:24px;height:14px;border:2px solid;border-radius:22px;background:linear-gradient(to left,currentColor 24px,transparent 0) no-repeat center 2px/10px 2px}.gg-smart-home-heat::after,.gg-smart-home-heat::before{content:"";position:absolute;display:block;box-sizing:border-box;width:6px;height:6px;border:2px solid;top:2px}.gg-smart-home-heat::before{border-right:0;border-top-left-radius:22px;border-bottom-left-radius:22px;left:2px}.gg-smart-home-heat::after{border-left:0;border-top-right-radius:22px;border-bottom-right-radius:22px;right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17 11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H10V15H7C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9H17C18.6569 9 20 10.3431 20 12C20 13.6569 18.6569 15 17 15H14V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 12C0 8.13401 3.13401 5 7 5H17C20.866 5 24 8.13401 24 12C24 15.866 20.866 19 17 19H7C3.13401 19 0 15.866 0 12ZM7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7Z"
    fill="currentColor"
  />
</svg>`}],Dl=[{nr:592,name:"smart-home-light",tags:"interface",css:'.gg-smart-home-light{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:10px;height:14px;border:2px solid;border-radius:14px;box-shadow:0 11px 0 -4px}.gg-smart-home-light::after,.gg-smart-home-light::before{content:"";position:absolute;display:block;box-sizing:border-box;background:currentColor;width:2px;height:6px;border-radius:6px;bottom:-8px}.gg-smart-home-light::before{transform:rotate(20deg);left:-2px}.gg-smart-home-light::after{transform:rotate(-20deg);right:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.03435 6.5C7.03435 3.73858 9.27293 1.5 12.0344 1.5C14.7958 1.5 17.0344 3.73858 17.0344 6.5V10.5C17.0344 13.2614 14.7958 15.5 12.0344 15.5C9.27293 15.5 7.03435 13.2614 7.03435 10.5V6.5ZM15.0344 6.5V10.5C15.0344 12.1569 13.6912 13.5 12.0344 13.5C10.3775 13.5 9.03435 12.1569 9.03435 10.5V6.5C9.03435 4.84315 10.3775 3.5 12.0344 3.5C13.6912 3.5 15.0344 4.84315 15.0344 6.5Z"
    fill="currentColor"
  />
  <path
    d="M12.0344 16.5C11.4821 16.5 11.0344 16.9477 11.0344 17.5V21.5C11.0344 22.0523 11.4821 22.5 12.0344 22.5C12.5866 22.5 13.0344 22.0523 13.0344 21.5V17.5C13.0344 16.9477 12.5866 16.5 12.0344 16.5Z"
    fill="currentColor"
  />
  <path
    d="M7.74433 16.4397C7.93323 15.9207 8.50707 15.6531 9.02605 15.842C9.54502 16.0309 9.81261 16.6048 9.62372 17.1237L8.25564 20.8825C8.06675 21.4015 7.4929 21.6691 6.97393 21.4802C6.45495 21.2913 6.18736 20.7174 6.37625 20.1985L7.74433 16.4397Z"
    fill="currentColor"
  />
  <path
    d="M14.974 15.8421C14.4551 16.031 14.1875 16.6048 14.3764 17.1238L15.7445 20.8825C15.9333 21.4015 16.5072 21.6691 17.0262 21.4802C17.5451 21.2913 17.8127 20.7175 17.6238 20.1985L16.2558 16.4397C16.0669 15.9208 15.493 15.6532 14.974 15.8421Z"
    fill="currentColor"
  />
</svg>`}],Pl=[{nr:593,name:"smart-home-refrigerator",tags:"interface",css:'.gg-smart-home-refrigerator{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:22px;border:2px solid;border-radius:3px}.gg-smart-home-refrigerator::after,.gg-smart-home-refrigerator::before{content:"";position:absolute;display:block;box-sizing:border-box;background:currentColor}.gg-smart-home-refrigerator::before{width:2px;height:4px;border-radius:2px;top:2px;left:2px;box-shadow:0 8px 0}.gg-smart-home-refrigerator::after{width:14px;height:2px;top:7px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V6Z"
    fill="currentColor"
  />
  <path
    d="M10 13C9.44772 13 9 13.4477 9 14V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V14C11 13.4477 10.5523 13 10 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 4C5 2.34315 6.34315 1 8 1H16C17.6569 1 19 2.34315 19 4V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V4ZM8 3H16C16.5523 3 17 3.44772 17 4V10H7V4C7 3.44772 7.44772 3 8 3ZM7 12H17V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V12Z"
    fill="currentColor"
  />
</svg>`}],Gl=[{nr:594,name:"smart-home-wash-machine",tags:"interface",css:'.gg-smart-home-wash-machine{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:18px;height:20px;border:2px solid;background:linear-gradient(to left,currentColor 18px,transparent 0) no-repeat center 4px/18px 2px;border-radius:3px}.gg-smart-home-wash-machine::after,.gg-smart-home-wash-machine::before{content:"";position:absolute;display:block;box-sizing:border-box;border-radius:22px}.gg-smart-home-wash-machine::before{bottom:1px;left:3px;width:8px;height:8px;border:2px solid;box-shadow:5px -9px 0 -3px,2px -9px 0 -3px}.gg-smart-home-wash-machine::after{top:1px;left:1px;width:4px;height:2px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6 4H18C18.5523 4 19 4.44772 19 5V8H5V5C5 4.44772 5.44771 4 6 4ZM19 19V10H5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19ZM3 5C3 3.34315 4.34315 2 6 2H18C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7H9C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5H7ZM14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7ZM18 6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6ZM14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15ZM16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15Z"
    fill="currentColor"
  />
</svg>`}],Tl=[{nr:595,name:"smartphone-chip",tags:"devices",css:'.gg-smartphone-chip{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:6px double;border-radius:3px}.gg-smartphone-chip::after{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:2px;left:-3px;top:-9px;background:currentColor;box-shadow:4px 0 0,8px 0 0,0 20px 0,4px 20px 0,-6px 6px 0,14px 6px 0,14px 10px 0,14px 14px 0,-6px 10px 0,-6px 14px 0,8px 20px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22ZM13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22ZM16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2ZM13 2C13 2.55228 12.5523 3 12 3C11.4477 3 11 2.55228 11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2ZM16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3ZM9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22ZM13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22ZM16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23ZM23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16C21 16.5523 21.4477 17 22 17C22.5523 17 23 16.5523 23 16ZM23 12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12C21 12.5523 21.4477 13 22 13C22.5523 13 23 12.5523 23 12ZM22 7C22.5523 7 23 7.44771 23 8C23 8.55229 22.5523 9 22 9C21.4477 9 21 8.55229 21 8C21 7.44771 21.4477 7 22 7ZM2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15ZM2 11C2.55228 11 3 11.4477 3 12C3 12.5523 2.55228 13 2 13C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11ZM3 8C3 7.44771 2.55228 7 2 7C1.44772 7 1 7.44771 1 8C1 8.55229 1.44772 9 2 9C2.55228 9 3 8.55229 3 8ZM17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7ZM14 10H10V14H14V10ZM8 8V16H16V8H8Z"
    fill="currentColor"
  />
</svg>`}],$l=[{nr:596,name:"smartphone-ram",tags:"devices",css:'.gg-smartphone-ram{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:26px;height:14px;border:2px solid;border-radius:3px}.gg-smartphone-ram::after,.gg-smartphone-ram::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:2px;background:currentColor;box-shadow:16px 4px 0;top:2px;left:2px}.gg-smartphone-ram::after{box-shadow:4px 0 0,8px 0 0,12px 0 0,16px 0 0,0 18px 0,4px 18px 0,8px 18px 0,12px 18px 0,16px 18px 0;top:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4Z"
    fill="currentColor"
  />
  <path
    d="M9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4Z"
    fill="currentColor"
  />
  <path
    d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z"
    fill="currentColor"
  />
  <path
    d="M17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4Z"
    fill="currentColor"
  />
  <path
    d="M20 5C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4C19 4.55228 19.4477 5 20 5Z"
    fill="currentColor"
  />
  <path
    d="M5 20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19C4.55228 19 5 19.4477 5 20Z"
    fill="currentColor"
  />
  <path
    d="M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20Z"
    fill="currentColor"
  />
  <path
    d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z"
    fill="currentColor"
  />
  <path
    d="M17 20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19C16.5523 19 17 19.4477 17 20Z"
    fill="currentColor"
  />
  <path
    d="M20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z"
    fill="currentColor"
  />
  <path
    d="M5 12C5.55228 12 6 11.5523 6 11C6 10.4477 5.55228 10 5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12Z"
    fill="currentColor"
  />
  <path
    d="M20 13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 9C0 7.34315 1.34315 6 3 6H21C22.6569 6 24 7.34315 24 9V15C24 16.6569 22.6569 18 21 18H3C1.34315 18 0 16.6569 0 15V9ZM3 8H21C21.5523 8 22 8.44772 22 9V15C22 15.5523 21.5523 16 21 16H3C2.44772 16 2 15.5523 2 15V9C2 8.44772 2.44772 8 3 8Z"
    fill="currentColor"
  />
</svg>`}],Ol=[{nr:597,name:"smartphone-shake",tags:"devices interface",css:'.gg-smartphone-shake{background:linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 4px 12px/2px 2px;box-sizing:border-box;position:relative;transform:scale(var(--ggs,1));display:block;width:14px;height:20px;border:2px solid;border-radius:2px}.gg-smartphone-shake::after,.gg-smartphone-shake::before{content:"";display:block;box-sizing:border-box;position:absolute;height:10px;width:6px;border:2px solid transparent;overflow:hidden;box-shadow:2px 0 0,inset -2px 0 0;top:3px;left:-12px}.gg-smartphone-shake::after{transform:scaleX(-1);left:16px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M13 14H11V16H13V14Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7V17C16 18.1046 15.1046 19 14 19H10C8.89543 19 8 18.1046 8 17V7ZM10 7H14V17H10V7Z"
    fill="currentColor"
  />
  <path d="M18 9H20V15H18V9Z" fill="currentColor" />
  <path d="M0 14H2V10H0V14Z" fill="currentColor" />
  <path d="M6 15H4V9H6V15Z" fill="currentColor" />
  <path d="M24 10H22V14H24V10Z" fill="currentColor" />
</svg>`}],El=[{nr:598,name:"smartphone",tags:"devices",css:".gg-smartphone{background:linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 4px 12px/2px 2px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:20px;border:2px solid;border-radius:2px;}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M13 16H11V18H13V16Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z"
    fill="currentColor"
  />
</svg>`}],Fl=[{nr:599,name:"smile-mouth-open",tags:"interface content",css:'.gg-smile-mouth-open{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}.gg-smile-mouth-open::after,.gg-smile-mouth-open::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-smile-mouth-open::before{background:currentColor;box-shadow:6px 0 0;width:2px;height:2px;border-radius:50%;top:5px}.gg-smile-mouth-open::after{width:8px;height:4px;border-radius:150px;border-top-left-radius:0;border-top-right-radius:0;border:2px solid;top:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 17C14.2091 17 16 15.2091 16 13H8C8 15.2091 9.79086 17 12 17Z"
    fill="currentColor"
  />
  <path
    d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
    fill="currentColor"
  />
  <path
    d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],Nl=[{nr:600,name:"smile-neutral",tags:"interface content",css:'.gg-smile-neutral{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}.gg-smile-neutral::after,.gg-smile-neutral::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor;left:4px}.gg-smile-neutral::before{box-shadow:6px 0 0;width:2px;border-radius:10px;top:5px}.gg-smile-neutral::after{border-radius:3px;width:8px;top:10px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
    fill="currentColor"
  />
  <path
    d="M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H9Z"
    fill="currentColor"
  />
  <path
    d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],Jl=[{nr:601,name:"smile-no-mouth",tags:"interface content",css:'.gg-smile-no-mouth{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}.gg-smile-no-mouth::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor;left:4px;box-shadow:6px 0 0;width:2px;border-radius:10px;top:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
    fill="currentColor"
  />
  <path
    d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
    fill="currentColor"
  />
</svg>`}],Kl=[{nr:602,name:"smile-none",tags:"interface content",css:'.gg-smile-none{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}.gg-smile-none::after,.gg-smile-none::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor;left:4px}.gg-smile-none::before{box-shadow:5px 0 0;width:3px;border-radius:10px;top:5px}.gg-smile-none::after{border-radius:3px;width:8px;top:10px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9H8Z"
    fill="currentColor"
  />
  <path
    d="M15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H15Z"
    fill="currentColor"
  />
  <path
    d="M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
    fill="currentColor"
  />
</svg>`}],Ql=[{nr:603,name:"smile-sad",tags:"interface content",css:'.gg-smile-sad{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}.gg-smile-sad::after,.gg-smile-sad::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-smile-sad::before{background:currentColor;box-shadow:6px 0 0;width:2px;height:2px;border-radius:50%;top:5px}.gg-smile-sad::after{width:8px;height:4px;border-radius:150px;border-top-left-radius:0;border-top-right-radius:0;border:2px solid;border-top-color:transparent;top:9px;transform:scaleY(-1)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
    fill="currentColor"
  />
  <path
    d="M14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14Z"
    fill="currentColor"
  />
  <path
    d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],Rl=[{nr:604,name:"smile-upside",tags:"interface content",css:'.gg-smile-upside{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}.gg-smile-upside::after,.gg-smile-upside::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-smile-upside::before{background:currentColor;box-shadow:6px 0 0;width:2px;height:2px;border-radius:50%;bottom:5px}.gg-smile-upside::after{width:8px;height:4px;border-radius:150px;border-bottom-left-radius:0;border-bottom-right-radius:0;border:2px solid;border-bottom-color:transparent;bottom:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16 11H14C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11H8C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z"
    fill="currentColor"
  />
  <path
    d="M10 14C10 13.4477 9.55228 13 9 13C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14Z"
    fill="currentColor"
  />
  <path
    d="M15 13C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12Z"
    fill="currentColor"
  />
</svg>`}],Wl=[{nr:605,name:"smile",tags:"interface content",css:'.gg-smile{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}.gg-smile::after,.gg-smile::before{content:"";display:block;box-sizing:border-box;position:absolute;left:4px}.gg-smile::before{background:currentColor;box-shadow:6px 0 0;width:2px;height:2px;border-radius:50%;top:5px}.gg-smile::after{width:8px;height:4px;border-radius:150px;border-top-left-radius:0;border-top-right-radius:0;border:2px solid;border-top-color:transparent;top:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16 13H14C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13Z"
    fill="currentColor"
  />
  <path
    d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44771 8.44772 9 9 9C9.55228 9 10 9.44771 10 10Z"
    fill="currentColor"
  />
  <path
    d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44771 15.5523 9 15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],_l=[{nr:606,name:"software-download",tags:"interface buttons",css:'.gg-software-download{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:6px;border:2px solid;border-top:0;border-bottom-left-radius:2px;border-bottom-right-radius:2px;margin-top:8px}.gg-software-download::after{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-left:2px solid;border-bottom:2px solid;transform:rotate(-45deg);left:2px;bottom:4px}.gg-software-download::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:10px;background:currentColor;left:5px;bottom:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z"
    fill="currentColor"
  />
  <path
    d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
    fill="currentColor"
  />
</svg>`}],o0=[{nr:607,name:"software-upload",tags:"interface buttons",css:'.gg-software-upload{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:6px;border:2px solid;border-top:0;border-bottom-left-radius:2px;border-bottom-right-radius:2px;margin-top:8px}.gg-software-upload::after{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-left:2px solid;border-top:2px solid;transform:rotate(45deg);left:2px;bottom:4px}.gg-software-upload::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:10px;background:currentColor;left:5px;bottom:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 14.9861C11 15.5384 11.4477 15.9861 12 15.9861C12.5523 15.9861 13 15.5384 13 14.9861V7.82831L16.2428 11.0711L17.657 9.65685L12.0001 4L6.34326 9.65685L7.75748 11.0711L11 7.82854V14.9861Z"
    fill="currentColor"
  />
  <path
    d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
    fill="currentColor"
  />
</svg>`}],r0=[{nr:608,name:"sort-az",tags:"buttons interface",css:'.gg-sort-az,.gg-sort-az::after,.gg-sort-az::before{display:block;box-sizing:border-box;height:2px;border-radius:4px;background:currentColor}.gg-sort-az{position:relative;transform:scale(var(--ggs,1));width:8px}.gg-sort-az::after,.gg-sort-az::before{content:"";position:absolute}.gg-sort-az::before{width:12px;top:-4px;left:-2px}.gg-sort-az::after{width:4px;top:4px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z"
    fill="currentColor"
  />
  <path
    d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z"
    fill="currentColor"
  />
  <path
    d="M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11Z"
    fill="currentColor"
  />
</svg>`}],e0=[{nr:609,name:"sort-za",tags:"buttons interface",css:'.gg-sort-za,.gg-sort-za::after,.gg-sort-za::before{display:block;box-sizing:border-box;height:2px;border-radius:4px;background:currentColor}.gg-sort-za{position:relative;transform:scale(var(--ggs,1));width:8px}.gg-sort-za::after,.gg-sort-za::before{content:"";position:absolute}.gg-sort-za::before{width:12px;top:4px;left:-2px}.gg-sort-za::after{width:4px;top:-4px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 16C6 16.5523 6.44772 17 7 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H7C6.44772 15 6 15.4477 6 16Z"
    fill="currentColor"
  />
  <path
    d="M8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9C8.44772 11 8 11.4477 8 12Z"
    fill="currentColor"
  />
  <path
    d="M11 9C10.4477 9 10 8.55229 10 8C10 7.44771 10.4477 7 11 7H13C13.5523 7 14 7.44771 14 8C14 8.55229 13.5523 9 13 9H11Z"
    fill="currentColor"
  />
</svg>`}],n0=[{nr:610,name:"space-between-v",tags:"interface",css:'.gg-space-between-v{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:8px;height:14px;border-top:6px solid transparent;border-bottom:6px solid transparent;box-shadow:inset 0 0 0 2px}.gg-space-between-v::after,.gg-space-between-v::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:4px;border:2px solid;left:-2px}.gg-space-between-v::before{top:-6px;border-top:0}.gg-space-between-v::after{bottom:-6px;border-bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M5 5V9H19V5H17V7H7V5H5Z" fill="currentColor" />
  <path d="M5 19V15H19V19H17V17H7V19H5Z" fill="currentColor" />
  <path d="M7 11H17V13H7V11Z" fill="currentColor" />
</svg>`}],t0=[{nr:611,name:"space-between",tags:"interface",css:'.gg-space-between{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:8px;border-left:6px solid transparent;border-right:6px solid transparent;box-shadow:inset 0 0 0 2px}.gg-space-between::after,.gg-space-between::before{content:"";display:block;box-sizing:border-box;position:absolute;height:12px;width:4px;border:2px solid;top:-2px}.gg-space-between::before{left:-6px;border-left:0}.gg-space-between::after{right:-6px;border-right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M19 5L15 5L15 19H19V17H17L17 7L19 7V5Z" fill="currentColor" />
  <path d="M5 5L9 5L9 19H5L5 17H7L7 7H5L5 5Z" fill="currentColor" />
  <path d="M13 7V17H11L11 7H13Z" fill="currentColor" />
</svg>`}],i0=[{nr:612,name:"spectrum",tags:"brands",css:'.gg-spectrum{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;overflow:hidden}.gg-spectrum::before{content:"";display:block;box-sizing:border-box;position:absolute;width:30px;height:30px;left:-15px;bottom:-15px;border:8px solid;border-radius:18px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 16H16C16 11.5817 12.4183 8 8 8V12C10.2091 12 12 13.7909 12 16Z"
    fill="currentColor"
  />
</svg>`}],l0=[{nr:613,name:"spinner-alt",tags:"interface shapes",css:'@keyframes spinneralt{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.gg-spinner-alt{transform:scale(var(--ggs,1))}.gg-spinner-alt,.gg-spinner-alt::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}.gg-spinner-alt::before{content:"";position:absolute;border-radius:100px;animation:spinneralt 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
    fill="currentColor"
  />
</svg>`}],s0=[{nr:614,name:"spinner-two-alt",tags:"interface shapes",css:'@keyframes spinner-two-alt{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.gg-spinner-two-alt,.gg-spinner-two-alt::before{box-sizing:border-box;display:block;width:20px;height:20px}.gg-spinner-two-alt{transform:scale(var(--ggs,1));position:relative}.gg-spinner-two-alt::before{content:"";position:absolute;border-radius:100px;animation:spinner-two-alt 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-bottom-color:currentColor;border-top-color:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
    fill="currentColor"
  />
  <path
    d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
    fill="currentColor"
  />
</svg>`}],g0=[{nr:615,name:"spinner-two",tags:"interface shapes",css:'@keyframes spinner-two{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.gg-spinner-two{transform:scale(var(--ggs,1));box-sizing:border-box;position:relative;display:block;width:20px;height:20px}.gg-spinner-two::after,.gg-spinner-two::before{box-sizing:border-box;display:block;width:20px;height:20px;content:"";position:absolute;border-radius:100px}.gg-spinner-two::before{animation:spinner-two 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-bottom-color:currentColor;border-top-color:currentColor}.gg-spinner-two::after{border:3px solid;opacity:.2}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity="0.2"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    fill="currentColor"
  />
  <path
    d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
    fill="currentColor"
  />
  <path
    d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
    fill="currentColor"
  />
</svg>`}],p0=[{nr:616,name:"spinner",tags:"interface shapes",css:'.gg-spinner{transform:scale(var(--ggs,1))}.gg-spinner,.gg-spinner::after,.gg-spinner::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}.gg-spinner::after,.gg-spinner::before{content:"";position:absolute;border-radius:100px}.gg-spinner::before{animation:spinner 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}.gg-spinner::after{border:3px solid;opacity:.2}@keyframes spinner{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity="0.2"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    fill="currentColor"
  />
  <path
    d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
    fill="currentColor"
  />
</svg>`}],a0=[{nr:617,name:"square",tags:"brands",css:".gg-square{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-radius:1px;border:3px solid transparent;box-shadow:0 0 0 3px,inset 0 0 0 3px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M14 10H10V14H14V10Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9ZM9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9C8 8.44772 8.44772 8 9 8Z"
    fill="currentColor"
  />
</svg>`}],d0=[{nr:618,name:"stack",tags:"interface content",css:'.gg-stack,.gg-stack::after,.gg-stack::before{display:block;box-sizing:border-box;width:14px;height:14px;border:2px solid}.gg-stack{margin-right:8px;margin-top:8px;transform:scale(var(--ggs,1));position:relative}.gg-stack::after,.gg-stack::before{content:"";position:absolute;border-left:0;border-bottom:0;right:-5px;top:-5px}.gg-stack::before{right:-8px;top:-8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M20 4V16H22V2H8V4H20Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8V22H16V8H2ZM14 10H4V20H14V10Z"
    fill="currentColor"
  />
  <path d="M17 7H5V5H19V19H17V7Z" fill="currentColor" />
</svg>`}],x0=[{nr:619,name:"stark",tags:"brands",css:'.gg-stark{background:currentColor;box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:3px;height:16px}.gg-stark::after,.gg-stark::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:16px;border:3px solid}.gg-stark::before{border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;border-top-color:transparent;left:-7px;bottom:0}.gg-stark::after{border-top-right-radius:100px;border-bottom-right-radius:100px;border-left:0;border-bottom-color:transparent;right:-7px;top:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.17222 18.0249C5.81662 17.2862 4.69522 16.1661 3.95526 14.791C3.01664 13.0467 2.75847 11.0163 3.23071 9.0927C3.70295 7.16908 4.87201 5.48904 6.51164 4.37775C8.15127 3.26646 10.1449 2.80295 12.1066 3.07692L11.67 6.20259C10.4822 6.03669 9.2751 6.31735 8.28231 6.99024C7.28951 7.66312 6.58164 8.68039 6.2957 9.84514C6.00976 11.0099 6.16608 12.2393 6.73442 13.2954C7.18247 14.1281 7.86148 14.8063 8.6823 15.2536L14.8278 3.97537L17.4621 5.4108C18.8177 6.14946 19.9391 7.26961 20.679 8.64469C21.6177 10.3889 21.8758 12.4193 21.4036 14.343C20.9314 16.2666 19.7623 17.9466 18.1227 19.0579C16.483 20.1692 14.4894 20.6327 12.5277 20.3587L12.9643 17.2331C14.1521 17.399 15.3592 17.1183 16.352 16.4454C17.3448 15.7725 18.0527 14.7553 18.3386 13.5905C18.6245 12.4258 18.4682 11.1964 17.8999 10.1402C17.4518 9.30761 16.7728 8.62938 15.952 8.18212L9.80647 19.4604L7.17222 18.0249Z"
    fill="currentColor"
  />
</svg>`}],b0=[{nr:620,name:"stopwatch",tags:"devices interface time",css:'.gg-stopwatch{background:linear-gradient(to left,currentColor 7px,transparent 0)no-repeat 6px 2px/2px 6px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:100%;border:2px solid transparent;box-shadow:0 0 0 2px}.gg-stopwatch::after{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:2px;background:currentColor;transform:rotate(45deg);right:-4px;top:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.6214 2.55029L21.4498 5.37872L20.0356 6.79293L17.2071 3.96451L18.6214 2.55029Z"
    fill="currentColor"
  />
  <path d="M12.8225 8.60055H10.8225V12.6005H12.8225V8.60055Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.18633 18.8137C8.70105 22.3285 14.3995 22.3285 17.9143 18.8137C21.429 15.299 21.429 9.60055 17.9143 6.08583C14.3995 2.57111 8.70105 2.57111 5.18633 6.08583C1.67161 9.60054 1.67161 15.299 5.18633 18.8137ZM6.60054 17.3995C9.33422 20.1332 13.7664 20.1332 16.5 17.3995C19.2337 14.6659 19.2337 10.2337 16.5 7.50004C13.7664 4.76637 9.33422 4.76637 6.60054 7.50004C3.86688 10.2337 3.86688 14.6659 6.60054 17.3995Z"
    fill="currentColor"
  />
</svg>`}],h0=[{nr:621,name:"stories",tags:"interface design",css:'.gg-stories,.gg-stories::after,.gg-stories::before{display:block;box-sizing:border-box;border-radius:3px}.gg-stories{position:relative;transform:scale(var(--ggs,1));width:12px;height:16px;border:2px solid}.gg-stories::after,.gg-stories::before{content:"";position:absolute;background:currentColor;width:2px;height:14px;top:-1px}.gg-stories::before{left:-6px}.gg-stories::after{right:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 6H9C8.44772 6 8 6.44772 8 7V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V7C16 6.44772 15.5523 6 15 6ZM9 4C7.34315 4 6 5.34315 6 7V17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17V7C18 5.34315 16.6569 4 15 4H9Z"
    fill="currentColor"
  />
  <path
    d="M2 6C2 5.44772 2.44772 5 3 5C3.55228 5 4 5.44772 4 6V18C4 18.5523 3.55228 19 3 19C2.44772 19 2 18.5523 2 18V6Z"
    fill="currentColor"
  />
  <path
    d="M20 6C20 5.44772 20.4477 5 21 5C21.5523 5 22 5.44772 22 6V18C22 18.5523 21.5523 19 21 19C20.4477 19 20 18.5523 20 18V6Z"
    fill="currentColor"
  />
</svg>`}],c0=[{nr:622,name:"studio",tags:"brands",css:'.gg-studio{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid}.gg-studio::after{content:"";display:block;box-sizing:border-box;position:absolute;width:4px;height:4px;background:currentColor;right:2px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M17 13H13V17H17V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3H21V21H3V3ZM5 5H19V19H5V5Z"
    fill="currentColor"
  />
</svg>`}],f0=[{nr:623,name:"style",tags:"interface",css:'.gg-style,.gg-style::after,.gg-style::before{display:block;box-sizing:border-box;width:8px;height:8px}.gg-style{position:relative;transform:scale(var(--ggs,1));box-shadow:-3px 3px 0 -1px,3px -3px 0 -1px}.gg-style::after,.gg-style::before{content:"";position:absolute;border:2px solid}.gg-style::before{top:-5px;left:-5px}.gg-style::after{bottom:-5px;right:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 21V13H21V21H13ZM15 15H19L19 19H15V15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 11L3 3L11 3V11H3ZM5 5L9 5V9L5 9L5 5Z"
    fill="currentColor"
  />
  <path d="M18 6V12H16V8L12 8V6L18 6Z" fill="currentColor" />
  <path d="M12 18H6L6 12H8L8 16H12V18Z" fill="currentColor" />
</svg>`}],C0=[{nr:624,name:"sun",tags:"interface design",css:'.gg-sun{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:24px;background:linear-gradient(to bottom,currentColor 4px,transparent 0)no-repeat 5px -6px/2px 6px,linear-gradient(to bottom,currentColor 4px,transparent 0)no-repeat 5px 14px/2px 6px,linear-gradient(to bottom,currentColor 4px,transparent 0)no-repeat -8px 5px/6px 2px,linear-gradient(to bottom,currentColor 4px,transparent 0)no-repeat 14px 5px/6px 2px;border-radius:100px;box-shadow:inset 0 0 0 2px;border:6px solid transparent}.gg-sun::after,.gg-sun::before{content:"";display:block;box-sizing:border-box;position:absolute;width:24px;height:2px;border-right:4px solid;border-left:4px solid;left:-6px;top:5px}.gg-sun::before{transform:rotate(-45deg)}.gg-sun::after{transform:rotate(45deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
    fill="currentColor"
  />
</svg>`}],w0=[{nr:625,name:"support",tags:"interface signs",css:'.gg-support{box-sizing:border-box;position:relative;display:block;width:20px;height:20px;transform:rotate(45deg) scale(var(--ggs,1));border:5px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:40px}.gg-support::after,.gg-support::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-support::before{border-left:9px solid;border-right:9px solid;width:24px;height:2px;left:-7px;top:4px}.gg-support::after{width:2px;height:24px;border-top:9px solid;border-bottom:9px solid;left:4px;top:-7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.2607 21.9966C12.174 21.9988 12.0871 22 12 22C11.9128 22 11.8259 21.9988 11.7393 21.9966C7.68318 21.8928 4.22762 19.3738 2.7573 15.8242C1.74192 13.3674 1.7476 10.588 2.77433 8.13481C3.27688 6.93672 4.00599 5.85718 4.90808 4.94979L4.94983 4.90804C5.85259 4.01056 6.92574 3.28429 8.1165 2.78202C10.5894 1.74123 13.3958 1.73933 15.87 2.77633C17.0688 3.27993 18.1488 4.01042 19.0562 4.91407L19.0859 4.94373C19.9989 5.86054 20.7351 6.95351 21.2392 8.16721C21.7279 9.34662 21.9812 10.6006 21.999 11.8573C21.9997 11.9047 22 11.9523 22 12C22 12.0506 21.9996 12.1012 21.9989 12.1516C21.9376 16.2743 19.3814 19.7925 15.7731 21.2637C14.6481 21.7213 13.4566 21.9656 12.2607 21.9966ZM14.0322 15.4464L16.906 18.3202C14.0281 20.5599 9.97192 20.5599 7.09402 18.3202L9.96779 15.4464C11.2175 16.1845 12.7825 16.1845 14.0322 15.4464ZM8.55358 14.0322L5.67981 16.906C3.44007 14.0281 3.44007 9.97192 5.67981 7.09402L8.55358 9.96779C7.81548 11.2175 7.81548 12.7825 8.55358 14.0322ZM10.0824 12.5694C10.0773 12.5523 10.0725 12.5351 10.0679 12.5179C9.97738 12.179 9.97738 11.821 10.0679 11.4821C10.1556 11.1537 10.3282 10.8434 10.5858 10.5858C10.8299 10.3417 11.1213 10.1739 11.4306 10.0824C11.4477 10.0773 11.4649 10.0725 11.4821 10.0679C11.821 9.97738 12.179 9.97737 12.5179 10.0679C12.8463 10.1556 13.1566 10.3282 13.4142 10.5858C13.6583 10.8299 13.8261 11.1213 13.9176 11.4306C13.9227 11.4477 13.9275 11.4649 13.9321 11.4821C14.0226 11.821 14.0226 12.179 13.9321 12.5179C13.8444 12.8462 13.6718 13.1566 13.4142 13.4142C13.1701 13.6583 12.8787 13.8261 12.5694 13.9176C12.5523 13.9227 12.5351 13.9275 12.5179 13.9321C12.179 14.0226 11.821 14.0226 11.4821 13.9321C11.1538 13.8444 10.8434 13.6718 10.5858 13.4142C10.3417 13.1701 10.1739 12.8787 10.0824 12.5694ZM14.0322 8.55357C12.7825 7.81548 11.2175 7.81548 9.96779 8.55357L7.09402 5.6798C9.97192 3.44007 14.0281 3.44007 16.906 5.6798L14.0322 8.55357ZM18.3202 16.906C20.5599 14.0281 20.5599 9.97192 18.3202 7.09402L15.4464 9.96779C16.1845 11.2175 16.1845 12.7825 15.4464 14.0322L18.3202 16.906Z"
    fill="currentColor"
  />
</svg>`}],u0=[{nr:626,name:"swap-vertical",tags:"interface arrows",css:'.gg-swap-vertical{box-sizing:border-box;position:relative;display:block;transform:rotate(90deg) scale(var(--ggs,1));box-shadow:-2px 2px 0,2px -2px 0;width:6px;height:2px}.gg-swap-vertical::after,.gg-swap-vertical::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}.gg-swap-vertical::before{border-left:3px solid;top:-4px;right:-4px}.gg-swap-vertical::after{border-right:3px solid;bottom:-4px;left:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M12 16H13.5L13.5 10H15.5L15.5 16H17L14.5 19L12 16Z" fill="currentColor" />
  <path d="M8 8H9.5L9.5 14H11.5L11.5 8H13L10.5 5L8 8Z" fill="currentColor" />
</svg>`}],v0=[{nr:627,name:"swap",tags:"interface arrows",css:'.gg-swap{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));box-shadow:-2px 2px 0,2px -2px 0;width:6px;height:2px}.gg-swap::after,.gg-swap::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent}.gg-swap::before{border-left:3px solid;top:-4px;right:-4px}.gg-swap::after{border-right:3px solid;bottom:-4px;left:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
  <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
</svg>`}],m0=[{nr:628,name:"sweden",tags:"signs brands",css:'.gg-sweden{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:16px}.gg-sweden::after,.gg-sweden::before{content:"";display:block;box-sizing:border-box;position:absolute;height:6px;background:currentColor;box-shadow:0 8px 0;top:0}.gg-sweden::before{left:0;width:7px}.gg-sweden::after{width:12px;right:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M23 4H10V11H23V4Z" fill="currentColor" />
  <path d="M23 13V20H10V13H23Z" fill="currentColor" />
  <path d="M8 13V20H1V13H8Z" fill="currentColor" />
  <path d="M1 11V4H8V11H1Z" fill="currentColor" />
</svg>`}],H0=[{nr:629,name:"swiss",tags:"signs brands",css:'.gg-swiss{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:4px solid}.gg-swiss::after,.gg-swiss::before{content:"";display:block;box-sizing:border-box;position:absolute;width:5px;height:5px;background:currentColor;box-shadow:0 9px 0;top:-2px}.gg-swiss::after{left:-2px}.gg-swiss::before{right:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3V21H21V3H3ZM14 7H10V10H7V14H10V17H14V14H17V10H14V7Z"
    fill="currentColor"
  />
</svg>`}],V0=[{nr:630,name:"sync",tags:"interface arrows",css:'.gg-sync{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-radius:40px;border:2px solid;margin:1px;border-left-color:transparent;border-right-color:transparent;width:18px;height:18px}.gg-sync::after,.gg-sync::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;transform:rotate(-45deg)}.gg-sync::before{border-left:6px solid;bottom:-1px;right:-3px}.gg-sync::after{border-right:6px solid;top:-1px;left:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4.56079 10.6418L6.35394 3.94971L8.25402 5.84979C11.7312 3.6588 16.3814 4.07764 19.41 7.1063L17.9958 8.52052C15.7536 6.27827 12.3686 5.87519 9.71551 7.31128L11.2529 8.84869L4.56079 10.6418Z"
    fill="currentColor"
  />
  <path
    d="M19.4392 13.3581L17.646 20.0502L15.7459 18.1501C12.2688 20.3411 7.61857 19.9223 4.58991 16.8936L6.00413 15.4794C8.24638 17.7217 11.6313 18.1247 14.2844 16.6887L12.747 15.1512L19.4392 13.3581Z"
    fill="currentColor"
  />
</svg>`}],L0=[{nr:631,name:"tab",tags:"interface",css:'.gg-tab,.gg-tab::before{display:block;box-sizing:border-box}.gg-tab{position:relative;transform:scale(var(--ggs,1));width:20px;height:16px;border:2px solid;border-radius:3px}.gg-tab::before{content:"";position:absolute;width:10px;height:6px;background:currentColor;border-radius:1px;transform:skewX(20deg);top:-2px;right:-1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.9999 4C20.6568 4 21.9999 5.34315 21.9999 7V17C21.9999 18.6569 20.6568 20 18.9999 20H4.99994C3.34308 20 1.99994 18.6569 1.99994 17V7C1.99994 5.34315 3.34308 4 4.99994 4H18.9999ZM19.9999 9.62479H13C12.4478 9.62479 11.8442 9.20507 11.652 8.68732L10.6542 6H4.99994C4.44765 6 3.99994 6.44772 3.99994 7V17C3.99994 17.5523 4.44765 18 4.99994 18H18.9999C19.5522 18 19.9999 17.5523 19.9999 17V9.62479Z"
    fill="currentColor"
  />
</svg>`}],M0=[{nr:632,name:"tag",tags:"interface shopping",css:'.gg-tag,.gg-tag::before{display:block;border:2px solid}.gg-tag{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;width:19px;height:14px}.gg-tag::before{content:"";position:absolute;width:2px;height:2px;box-sizing:content-box;border-radius:100px;right:0;top:2px}.gg-tag::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;border-bottom-right-radius:4px;transform:rotate(-45deg);top:0;right:-5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8V16C2 16.5523 2.44772 17 3 17H16.6202C16.9121 17 17.1895 16.8724 17.3795 16.6508L20.808 12.6508C21.129 12.2763 21.129 11.7237 20.808 11.3492L17.3795 7.34921C17.1895 7.12756 16.9121 7 16.6202 7H3C2.44772 7 2 7.44772 2 8ZM0 8V16C0 17.6569 1.34315 19 3 19H16.6202C17.496 19 18.328 18.6173 18.898 17.9524L22.3265 13.9524C23.2895 12.8289 23.2895 11.1711 22.3265 10.0476L18.898 6.04763C18.328 5.38269 17.496 5 16.6202 5H3C1.34315 5 0 6.34315 0 8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15Z"
    fill="currentColor"
  />
</svg>`}],Z0=[{nr:633,name:"tally",tags:"brands",css:'.gg-tally{box-sizing:border-box;position:relative;display:block;transform:skew(-10deg) scale(var(--ggs,1));width:18px;height:20px}.gg-tally::after,.gg-tally::before{content:"";position:absolute;box-sizing:border-box;display:block;width:3px;background:currentColor;border-radius:.5px}.gg-tally::before{height:20px;box-shadow:5px 0 0;left:5px}.gg-tally::after{height:8px;box-shadow:15px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.66124 2.67117C3.71341 2.4 3.97956 2.18018 4.2557 2.18018H6.2557C6.53184 2.18018 6.71341 2.4 6.66124 2.67117L5.33877 9.54511C5.2866 9.81628 5.02045 10.0361 4.74431 10.0361H2.74431C2.46817 10.0361 2.2866 9.81628 2.33877 9.54511L3.66124 2.67117Z"
    fill="currentColor"
  />
  <path
    d="M8.66124 2.67117C8.71341 2.4 8.97956 2.18018 9.2557 2.18018H11.2557C11.5318 2.18018 11.7134 2.4 11.6612 2.67117L8.07168 21.329C8.01951 21.6002 7.75336 21.82 7.47722 21.82H5.47722C5.20108 21.82 5.01951 21.6002 5.07168 21.329L8.66124 2.67117Z"
    fill="currentColor"
  />
  <path
    d="M13.6612 2.67117C13.7134 2.4 13.9796 2.18018 14.2557 2.18018H16.2557C16.5318 2.18018 16.7134 2.4 16.6612 2.67117L13.0717 21.329C13.0195 21.6002 12.7534 21.82 12.4772 21.82H10.4772C10.2011 21.82 10.0195 21.6002 10.0717 21.329L13.6612 2.67117Z"
    fill="currentColor"
  />
  <path
    d="M18.6612 2.67117C18.7134 2.4 18.9796 2.18018 19.2557 2.18018H21.2557C21.5318 2.18018 21.7134 2.4 21.6612 2.67117L20.3388 9.54511C20.2866 9.81628 20.0205 10.0361 19.7443 10.0361H17.7443C17.4682 10.0361 17.2866 9.81628 17.3388 9.54511L18.6612 2.67117Z"
    fill="currentColor"
  />
</svg>`}],k0=[{nr:634,name:"tap-double",tags:"interface",css:'.gg-tap-double{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:22px}.gg-tap-double::after,.gg-tap-double::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:22px}.gg-tap-double::before{width:20px;height:20px;border:6px double transparent;border-top:6px double}.gg-tap-double::after{width:6px;height:10px;border:2px solid transparent;border-bottom-width:5px;box-shadow:0 0 0 2px,inset 0 0 0 2px;left:7px;bottom:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.9236 18V14C14.9236 12.3431 13.5804 11 11.9236 11C10.2667 11 8.92355 12.3431 8.92355 14V18C8.92355 19.6569 10.2667 21 11.9236 21C13.5804 21 14.9236 19.6569 14.9236 18ZM11.9236 9C9.16213 9 6.92355 11.2386 6.92355 14V18C6.92355 20.7614 9.16213 23 11.9236 23C14.685 23 16.9236 20.7614 16.9236 18V14C16.9236 11.2386 14.685 9 11.9236 9Z"
    fill="currentColor"
  />
  <path
    d="M10.9236 14C10.9236 13.4477 11.3713 13 11.9236 13C12.4758 13 12.9236 13.4477 12.9236 14V17H10.9236V14Z"
    fill="currentColor"
  />
  <path
    d="M11.9235 1C14.7023 1 17.2164 2.13339 19.0286 3.96311L17.6144 5.37735C16.1641 3.90955 14.15 3 11.9235 3C9.77436 3 7.82311 3.84749 6.38577 5.22651L4.97131 3.81205C6.7708 2.07122 9.22207 1 11.9235 1Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.9233 5C13.5809 5 15.1038 5.5761 16.3029 6.53898L14.8768 7.9651C14.0493 7.35833 13.0281 7 11.9233 7C10.848 7 9.85204 7.33943 9.03662 7.91699L7.60779 6.48816C8.79686 5.55586 10.2952 5 11.9233 5Z"
    fill="currentColor"
  />
</svg>`}],y0=[{nr:635,name:"tap-single",tags:"interface",css:'.gg-tap-single{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:16px;height:22px}.gg-tap-single::after,.gg-tap-single::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid transparent;border-radius:22px}.gg-tap-single::before{width:16px;height:16px;border-top:2px solid;top:2px}.gg-tap-single::after{width:6px;height:10px;border-bottom-width:5px;box-shadow:0 0 0 2px,inset 0 0 0 2px;left:5px;top:8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.0491 3.11401C14.1927 3.11401 16.1393 3.95706 17.5756 5.32967L16.1609 6.74437C15.087 5.73346 13.6404 5.11401 12.0491 5.11401C10.4086 5.11401 8.92183 5.77243 7.83868 6.83944L6.42444 5.42519C7.86954 3.99627 9.85631 3.11401 12.0491 3.11401Z"
    fill="currentColor"
  />
  <path
    d="M10.9767 11.886C10.9767 11.3337 11.4244 10.886 11.9767 10.886C12.529 10.886 12.9767 11.3337 12.9767 11.886V13.886H10.9767V11.886Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.9767 6.88599C9.21526 6.88599 6.97668 9.12456 6.97668 11.886V15.886C6.97668 18.6474 9.21526 20.886 11.9767 20.886C14.7381 20.886 16.9767 18.6474 16.9767 15.886V11.886C16.9767 9.12456 14.7381 6.88599 11.9767 6.88599ZM14.9767 15.886V11.886C14.9767 10.2291 13.6335 8.88599 11.9767 8.88599C10.3198 8.88599 8.97668 10.2291 8.97668 11.886V15.886C8.97668 17.5428 10.3198 18.886 11.9767 18.886C13.6335 18.886 14.9767 17.5428 14.9767 15.886Z"
    fill="currentColor"
  />
</svg>`}],z0=[{nr:636,name:"template",tags:"interface design",css:'.gg-template{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:6px;border:2px solid;margin-top:-14px}.gg-template::after,.gg-template::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:10px;top:6px}.gg-template::after{border:2px solid;left:-2px}.gg-template::before{border-top:6px double;border-bottom:2px solid;right:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z"
    fill="currentColor"
  />
  <path d="M21 11H13V13H21V11Z" fill="currentColor" />
  <path d="M13 15H21V17H13V15Z" fill="currentColor" />
  <path d="M21 19H13V21H21V19Z" fill="currentColor" />
</svg>`}],B0=[{nr:637,name:"tennis",tags:"interface",css:'.gg-tennis,.gg-tennis::after,.gg-tennis::before{display:block;box-sizing:border-box;border:2px solid;width:20px;height:20px;border-radius:20px}.gg-tennis{position:relative;transform:scale(var(--ggs,1));overflow:hidden}.gg-tennis::after,.gg-tennis::before{content:"";position:absolute}.gg-tennis::before{left:-11px;top:-11px}.gg-tennis::after{right:-11px;bottom:-11px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711ZM19.9426 11.0407C19.7364 9.32374 18.9745 7.6608 17.6569 6.34315C16.3343 5.0206 14.6639 4.25792 12.9402 4.0551L12.93 4.11139C12.1086 8.58308 8.58304 12.1086 4.11136 12.93L4.05511 12.9402C4.25793 14.6639 5.02061 16.3343 6.34315 17.6569C7.66079 18.9745 9.32373 19.7364 11.0407 19.9426C11.0449 19.9191 11.0491 19.8956 11.0534 19.8721C11.8748 15.4004 15.4003 11.8748 19.872 11.0534C19.8955 11.0491 19.9191 11.0449 19.9426 11.0407ZM19.872 13.4292V13.0951C16.5073 13.8586 13.8586 16.5073 13.095 19.8721H13.429C14.9777 19.5924 16.4598 18.8539 17.6569 17.6569C18.8539 16.4598 19.5923 14.9778 19.872 13.4292ZM4.11136 10.8884L4.11136 10.666C4.37766 9.08301 5.12159 7.5647 6.34315 6.34315C7.56465 5.12165 9.08288 4.37773 10.6658 4.11139L10.8883 4.11139C10.1248 7.47615 7.47612 10.1249 4.11136 10.8884Z"
    fill="currentColor"
  />
</svg>`}],q0=[{nr:638,name:"terminal",tags:"interface code",css:'.gg-terminal{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:20px;border:2px solid;border-radius:2px}.gg-terminal::after,.gg-terminal::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-terminal::before{border-right:2px solid;border-bottom:2px solid;transform:rotate(-45deg);width:6px;height:6px;top:5px;left:3px}.gg-terminal::after{width:4px;height:2px;background:currentColor;top:10px;left:11px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z"
    fill="currentColor"
  />
  <path d="M15 14H11V16H15V14Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z"
    fill="currentColor"
  />
</svg>`}],X0=[{nr:639,name:"terrain",tags:"interface",css:'.gg-terrain{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:22px;height:14px;overflow:hidden}.gg-terrain::after,.gg-terrain::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-terrain::before{width:0;height:10px;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:10px solid;top:4px}.gg-terrain::after{width:6px;height:22px;background:currentColor;transform:rotate(-32deg) skewY(-35deg);left:14px;top:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M8 10L3 18H13L8 10Z" fill="currentColor" />
  <path
    d="M10.5286 10.7543L13.5 6L21 18H15.0572L10.5286 10.7543Z"
    fill="currentColor"
  />
</svg>`}],I0=[{nr:640,name:"thermometer",tags:"interface",css:'.gg-thermometer{position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}.gg-thermometer::after,.gg-thermometer::before{content:"";display:block;position:absolute;width:2px;border-radius:22px;transform:rotate(45deg)}.gg-thermometer::before{height:12px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 6px;right:6px;top:1px}.gg-thermometer::after{height:8px;background:currentColor;bottom:0;left:3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.9498 5.63615C17.3403 5.24563 17.9735 5.24563 18.364 5.63615C18.7545 6.02668 18.7545 6.65984 18.364 7.05037L11.2929 14.1214C10.9024 14.512 10.2693 14.512 9.87873 14.1214C9.48821 13.7309 9.48821 13.0977 9.87873 12.7072L16.9498 5.63615Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.82813 17.5862C9.7695 18.8725 12.4109 18.6603 14.1214 16.9499L21.1924 9.8788C23.1451 7.92617 23.1451 4.76035 21.1924 2.80773C19.2398 0.855106 16.074 0.855106 14.1214 2.80773L7.0503 9.8788C5.33984 11.5893 5.12771 14.2307 6.41392 16.172L2.80766 19.7783C2.41714 20.1688 2.41714 20.802 2.80766 21.1925C3.19819 21.583 3.83135 21.583 4.22188 21.1925L7.82813 17.5862ZM12.7072 15.5356L19.7782 8.46458C20.9498 7.29301 20.9498 5.39351 19.7782 4.22194C18.6067 3.05037 16.7072 3.05037 15.5356 4.22194L8.46452 11.293C7.29294 12.4646 7.29294 14.3641 8.46452 15.5356C9.63609 16.7072 11.5356 16.7072 12.7072 15.5356Z"
    fill="currentColor"
  />
</svg>`}],S0=[{nr:641,name:"thermostat",tags:"devices",css:'.gg-thermostat{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:10px;height:24px}.gg-thermostat::after,.gg-thermostat::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-thermostat::after{width:12px;height:12px;border-top-color:transparent;bottom:0;border-radius:100px;background:radial-gradient(circle,currentColor 20%,transparent 20%) no-repeat center}.gg-thermostat::before{width:8px;height:16px;border-bottom-color:transparent;left:2px;border-top-left-radius:100px;border-top-right-radius:100px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15 13.9997C16.2144 14.9119 17 16.3642 17 18C17 20.7614 14.7614 23 12 23C9.23858 23 7 20.7614 7 18C7 16.3642 7.78555 14.9119 9 13.9997V4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V13.9997ZM13 4V15.1707C14.1652 15.5826 15 16.6938 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 16.6938 9.83481 15.5826 11 15.1707V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z"
    fill="currentColor"
  />
</svg>`}],Y0=[{nr:642,name:"tikcode",tags:"interface design",css:'.gg-tikcode{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;background:linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 10px 0/8px 2px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 10px 6px/8px 2px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 10px 10px/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 13px 10px/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 16px 10px/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 16px 0/2px 8px,linear-gradient(to left,currentColor 10px,transparent 0) no-repeat 10px 0/2px 8px}.gg-tikcode::after,.gg-tikcode::before{content:"";position:absolute;display:block;box-sizing:border-box;width:8px;height:8px;border:2px solid}.gg-tikcode::after{bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 5H5V9H9V5ZM3 3V11H11V3H3Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 5H15V9H19V5ZM13 3V11H21V3H13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 15H5V19H9V15ZM3 13V21H11V13H3Z"
    fill="currentColor"
  />
  <path d="M13 13H15V21H13V13Z" fill="currentColor" />
  <path d="M16 13H18V21H16V13Z" fill="currentColor" />
  <path d="M19 13H21V21H19V13Z" fill="currentColor" />
</svg>`}],j0=[{nr:643,name:"time",tags:"interface time",css:'.gg-time{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border-radius:100%;border:2px solid transparent;box-shadow:0 0 0 2px currentColor}.gg-time::after{content:"";display:block;box-sizing:border-box;position:absolute;width:7px;height:7px;border-left:2px solid;border-bottom:2px solid;top:1px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M9 7H11V12H16V14H9V7Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
    fill="currentColor"
  />
</svg>`}],A0=[{nr:644,name:"timelapse",tags:"interface",css:'.gg-timelapse{box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;display:block;width:22px;height:22px;border:2px solid;border-radius:22px}.gg-timelapse::after,.gg-timelapse::before{content:"";display:block;box-sizing:border-box;position:absolute;width:5px;height:4px;border:7px solid;border-left-color:transparent;border-bottom-color:transparent;border-radius:22px;top:2px;right:2px}.gg-timelapse::before{transform:rotate(45deg)}.gg-timelapse::after{border-top-color:transparent;transform:rotate(85deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 19C10.067 19 8.31704 18.2165 7.05029 16.9498L12 12L12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],U0=[{nr:645,name:"timer",tags:"interface time",css:'.gg-timer,.gg-timer::before{border:2px solid;width:18px;height:18px;border-radius:40px}.gg-timer{background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 6px -2px/2px 6px;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;display:block;border-top-color:transparent}.gg-timer::after,.gg-timer::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-timer::before{border-right-color:transparent;border-left-color:transparent;border-bottom-color:transparent;right:-2px;top:-2px;transform:rotate(45deg)}.gg-timer::after{width:2px;height:6px;background:currentColor;transform:rotate(-50deg);left:4px;bottom:5px;border-radius:100px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13 5.07089C16.3923 5.55612 19 8.47353 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.96159 5.87128 8.12669 7.26175 6.84738L5.84658 5.43221C4.09461 7.0743 3 9.40932 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C11.662 3 11.3283 3.01863 11 3.05493V9.08551H13V5.07089Z"
    fill="currentColor"
  />
  <path
    d="M7.70711 8.70708C7.31658 9.0976 7.31658 9.73077 7.70711 10.1213L10.5355 12.9497C10.9261 13.3402 11.5592 13.3402 11.9497 12.9497C12.3403 12.5592 12.3403 11.926 11.9497 11.5355L9.12132 8.70708C8.7308 8.31655 8.09763 8.31655 7.70711 8.70708Z"
    fill="currentColor"
  />
</svg>`}],D0=[{nr:646,name:"today",tags:"interface",css:'.gg-today{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}.gg-today::after,.gg-today::before{content:"";display:block;box-sizing:border-box;position:absolute;left:2px;background:currentColor;border-radius:1px}.gg-today::before{bottom:2px;width:10px;height:10px;opacity:.5}.gg-today::after{top:2px;width:6px;height:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect opacity="0.5" x="7" y="9" width="10" height="10" rx="1" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V4C21 2.34315 19.6569 1 18 1H6Z"
    fill="currentColor"
  />
  <path
    d="M7 6C7 5.44772 7.44772 5 8 5H12C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7H8C7.44772 7 7 6.55228 7 6Z"
    fill="currentColor"
  />
</svg>`}],P0=[{nr:647,name:"toggle-off",tags:"interface buttons",css:'.gg-toggle-off,.gg-toggle-off::before{display:block;box-sizing:border-box;border-radius:20px}.gg-toggle-off{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:24px;height:14px}.gg-toggle-off::before{content:"";position:absolute;width:6px;height:6px;background:currentColor;top:2px;left:12px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17 15C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9C15.3431 9 14 10.3431 14 12C14 13.6569 15.3431 15 17 15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 12C0 8.13401 3.13401 5 7 5H17C20.866 5 24 8.13401 24 12C24 15.866 20.866 19 17 19H7C3.13401 19 0 15.866 0 12ZM7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7Z"
    fill="currentColor"
  />
</svg>`}],G0=[{nr:648,name:"toggle-on",tags:"interface buttons",css:'.gg-toggle-on,.gg-toggle-on::before{display:block;box-sizing:border-box;border-radius:20px}.gg-toggle-on{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:24px;height:14px}.gg-toggle-on::before{content:"";position:absolute;width:6px;height:6px;background:currentColor;top:2px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C8.65685 9 10 10.3431 10 12C10 13.6569 8.65685 15 7 15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M24 12C24 8.13401 20.866 5 17 5H7C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z"
    fill="currentColor"
  />
</svg>`}],T0=[{nr:649,name:"toggle-square-off",tags:"interface buttons",css:'.gg-toggle-square-off{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:14px;border:2px solid;border-radius:2px}.gg-toggle-square-off::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;top:2px;left:12px;border-radius:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15 9C14.4477 9 14 9.44772 14 10V14C14 14.5523 14.4477 15 15 15H19C19.5523 15 20 14.5523 20 14V10C20 9.44772 19.5523 9 19 9H15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 7C0 5.89543 0.895431 5 2 5H22C23.1046 5 24 5.89543 24 7V17C24 18.1046 23.1046 19 22 19H2C0.89543 19 0 18.1046 0 17V7ZM2 7H22V17H2L2 7Z"
    fill="currentColor"
  />
</svg>`}],$0=[{nr:650,name:"toggle-square",tags:"interface buttons",css:'.gg-toggle-square{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:14px;border:2px solid;border-radius:2px}.gg-toggle-square::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;top:2px;left:2px;border-radius:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 9C9.55228 9 10 9.44772 10 10V14C10 14.5523 9.55228 15 9 15H5C4.44772 15 4 14.5523 4 14V10C4 9.44772 4.44772 9 5 9H9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M24 7C24 5.89543 23.1046 5 22 5H2C0.89543 5 0 5.89543 0 7V17C0 18.1046 0.895432 19 2 19H22C23.1046 19 24 18.1046 24 17V7ZM22 7H2V17H22V7Z"
    fill="currentColor"
  />
</svg>`}],O0=[{nr:651,name:"toolbar-bottom",tags:"interface design",css:".gg-toolbar-bottom{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;box-shadow:0 0 0 2px,inset 0 -2px 0;border:2px solid transparent;border-radius:1px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M18 13H6V15H18V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7Z"
    fill="currentColor"
  />
</svg>`}],E0=[{nr:652,name:"toolbar-left",tags:"interface design",css:".gg-toolbar-left{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;box-shadow:0 0 0 2px,inset 2px 0 0;border:2px solid transparent;border-radius:1px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M8 9H6V15H8V9Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7Z"
    fill="currentColor"
  />
</svg>`}],F0=[{nr:653,name:"toolbar-right",tags:"interface design",css:".gg-toolbar-right{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;box-shadow:0 0 0 2px,inset -2px 0 0;border:2px solid transparent;border-radius:1px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16 9H18V15H16V9Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8ZM19 7H5C4.44772 7 4 7.44771 4 8V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7Z"
    fill="currentColor"
  />
</svg>`}],N0=[{nr:654,name:"toolbar-top",tags:"interface design",css:".gg-toolbar-top{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;box-shadow:0 0 0 2px,inset 0 2px 0;border:2px solid transparent;border-radius:1px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M18 11H6V9H18V11Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8V16ZM5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7H5C4.44772 7 4 7.44771 4 8V16C4 16.5523 4.44772 17 5 17Z"
    fill="currentColor"
  />
</svg>`}],J0=[{nr:655,name:"toolbox",tags:"interface files",css:'.gg-toolbox{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:16px;border:2px solid;border-radius:2px}.gg-toolbox::after,.gg-toolbox::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-toolbox::before{border:2px solid;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;left:4px;width:10px;height:4px;top:-5px}.gg-toolbox::after{width:18px;height:2px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 -2px 0,inset 4px 0 0,inset -4px 0 0;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z"
    fill="currentColor"
  />
</svg>`}],K0=[{nr:656,name:"touchpad",tags:"devices",css:'.gg-touchpad{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:22px;height:18px}.gg-touchpad::after{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:6px;bottom:-2px;left:8px;background:currentColor;}.gg-touchpad::before{content:"";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;left:-2px;bottom:3px;background:currentColor;}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20 21C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20ZM4 5H20C20.5523 5 21 5.44772 21 6V14H3V6C3 5.44772 3.44772 5 4 5ZM3 16V18C3 18.5523 3.44772 19 4 19H11V16H3ZM13 19V16H21V18C21 18.5523 20.5523 19 20 19H13Z"
    fill="currentColor"
  />
</svg>`}],Q0=[{nr:657,name:"track",tags:"interface signs",css:'.gg-track{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 10px;border-radius:100px}.gg-track::after,.gg-track::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px}.gg-track::before{border-left:4px solid;border-right:4px solid;width:18px;height:2px;left:-6px;top:2px}.gg-track::after{width:2px;height:18px;border-top:4px solid;border-bottom:4px solid;left:2px;top:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3C12.5523 3 13 3.44772 13 4V5.07089C16.0657 5.5094 18.4906 7.93431 18.9291 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H18.9291C18.4906 16.0657 16.0657 18.4906 13 18.9291V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18.9291C7.93431 18.4906 5.5094 16.0657 5.07089 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H5.07089C5.5094 7.93431 7.93431 5.5094 11 5.07089V4C11 3.44772 11.4477 3 12 3ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
    fill="currentColor"
  />
</svg>`}],R0=[{nr:658,name:"transcript",tags:"interface",css:'.gg-transcript{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:22px;height:18px}.gg-transcript::after,.gg-transcript::before{content:"";display:block;box-sizing:border-box;position:absolute;height:2px;border-radius:3px;background:currentColor;bottom:2px}.gg-transcript::before{width:10px;left:2px;box-shadow:4px -4px 0}.gg-transcript::after{width:3px;right:2px;box-shadow:-11px -4px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 16C5 15.4477 5.44772 15 6 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16Z"
    fill="currentColor"
  />
  <path
    d="M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H10C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H18Z"
    fill="currentColor"
  />
  <path
    d="M16 16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H17C16.4477 17 16 16.5523 16 16Z"
    fill="currentColor"
  />
  <path
    d="M7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44771 20.5523 5 20 5Z"
    fill="currentColor"
  />
</svg>`}],W0=[{nr:659,name:"trash-empty",tags:"interface content",css:'.gg-trash-empty{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:12px;border:2px solid transparent;box-shadow:0 0 0 2px;border-bottom-left-radius:1px;border-bottom-right-radius:1px;margin-top:4px}.gg-trash-empty::after,.gg-trash-empty::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-trash-empty::after{background:currentColor;border-radius:3px;width:16px;height:2px;top:-4px;left:-5px}.gg-trash-empty::before{width:10px;height:4px;border:2px solid;border-bottom:transparent;border-top-left-radius:2px;border-top-right-radius:2px;top:-7px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z"
    fill="currentColor"
  />
</svg>`}],_0=[{nr:660,name:"trash",tags:"interface content",css:'.gg-trash{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:12px;border:2px solid transparent;box-shadow:0 0 0 2px,inset -2px 0 0,inset 2px 0 0;border-bottom-left-radius:1px;border-bottom-right-radius:1px;margin-top:4px}.gg-trash::after,.gg-trash::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-trash::after{background:currentColor;border-radius:3px;width:16px;height:2px;top:-4px;left:-5px}.gg-trash::before{width:10px;height:4px;border:2px solid;border-bottom:transparent;border-top-left-radius:2px;border-top-right-radius:2px;top:-7px;left:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
    fill="currentColor"
  />
  <path d="M9 9H11V17H9V9Z" fill="currentColor" />
  <path d="M13 9H15V17H13V9Z" fill="currentColor" />
</svg>`}],os=[{nr:661,name:"tree",tags:"interface",css:'.gg-tree{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px}.gg-tree::after,.gg-tree::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:8px}.gg-tree::before{width:10px;height:16px;border:2px solid}.gg-tree::after{width:2px;height:12px;background:currentColor;left:4px;bottom:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 17.9C8.71776 17.4367 7 15.419 7 13V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V13C17 15.419 15.2822 17.4367 13 17.9V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V17.9ZM12 4C13.6569 4 15 5.34315 15 7V13C15 14.3062 14.1652 15.4175 13 15.8293V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V15.8293C9.83481 15.4175 9 14.3062 9 13V7C9 5.34315 10.3431 4 12 4Z"
    fill="currentColor"
  />
</svg>`}],rs=[{nr:662,name:"trees",tags:"interface",css:'.gg-trees{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border-left:4px solid transparent;border-right:3px solid transparent;border-top:10px solid transparent;box-shadow:inset 2px 0 0,inset -2px 0 0}.gg-trees::after,.gg-trees::before{content:"";display:block;position:absolute;box-sizing:border-box;width:10px;height:16px;border:2px solid;border-radius:8px;left:-4px;top:-10px}.gg-trees::after{width:8px;height:12px;top:-6px;left:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.7401 16.3185C12.035 17.1126 11.0808 17.6806 10 17.9V21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21V17.9C5.71776 17.4367 4 15.419 4 13V7C4 4.23858 6.23858 2 9 2C11.6087 2 13.7508 3.99781 13.9797 6.54693C14.5726 6.1993 15.2631 6 16 6C18.2091 6 20 7.79086 20 10V14C20 15.8638 18.7252 17.4299 17 17.874V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17.874C14.0747 17.6358 13.279 17.075 12.7401 16.3185ZM12 7V13C12 14.3062 11.1652 15.4175 10 15.8293V13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13V15.8293C6.83481 15.4175 6 14.3062 6 13V7C6 5.34315 7.34315 4 9 4C10.6569 4 12 5.34315 12 7ZM17 15.7324V13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13V15.7324C14.4022 15.3866 14 14.7403 14 14V10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10V14C18 14.7403 17.5978 15.3866 17 15.7324Z"
    fill="currentColor"
  />
</svg>`}],es=[{nr:663,name:"trello",tags:"brands",css:'.gg-trello{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:2px}.gg-trello::after,.gg-trello::before{content:"";display:block;box-sizing:border-box;position:absolute;width:5px;background:currentColor;border-radius:1px;top:2px}.gg-trello::before{left:2px;height:12px}.gg-trello::after{height:8px;right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 7C6 6.44771 6.44772 6 7 6H10C10.5523 6 11 6.44772 11 7V17C11 17.5523 10.5523 18 10 18H7C6.44772 18 6 17.5523 6 17V7Z"
    fill="currentColor"
  />
  <path
    d="M13 7C13 6.44772 13.4477 6 14 6H17C17.5523 6 18 6.44772 18 7V13C18 13.5523 17.5523 14 17 14H14C13.4477 14 13 13.5523 13 13V7Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM4 4H20V20H4V4Z"
    fill="currentColor"
  />
</svg>`}],ns=[{nr:664,name:"trending-down",tags:"interface",css:'.gg-trending-down{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:10px;height:8px;border-bottom:2px solid;border-right:2px solid}.gg-trending-down::after,.gg-trending-down::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-trending-down::before{background:currentColor;left:8px;width:10px;height:2px;top:0}.gg-trending-down::after{width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:6px solid;top:-3px;right:-14px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.85104 8.10628L0.436829 9.52049L7.5079 16.5916L13.8719 10.2276L18.1145 14.4702L16.3721 16.2126L23.0642 18.0058L21.2711 11.3136L19.5287 13.056L13.8719 7.39917L7.5079 13.7631L1.85104 8.10628Z"
    fill="currentColor"
  />
</svg>`}],ts=[{nr:665,name:"trending",tags:"interface arrows",css:'.gg-trending{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:10px;height:8px;border-top:2px solid;border-right:2px solid}.gg-trending::after,.gg-trending::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-trending::before{background:currentColor;left:8px;width:10px;height:2px;bottom:0}.gg-trending::after{width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:6px solid;bottom:-3px;right:-14px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z"
    fill="currentColor"
  />
</svg>`}],is=[{nr:666,name:"trophy",tags:"design interface",css:'.gg-trophy{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:12px;border:2px solid;border-bottom-left-radius:100px;border-bottom-right-radius:100px}.gg-trophy::after,.gg-trophy::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-trophy::before{box-shadow:inset 0 0 0 2px,0 2px 0 0;bottom:-4px;width:6px;height:4px;border-left:2px solid transparent;border-right:2px solid transparent;left:0}.gg-trophy::after{width:16px;height:6px;border-left:2px solid;border-right:2px solid;left:-5px;top:0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z"
    fill="currentColor"
  />
  <path d="M18 6H20V11H18V6Z" fill="currentColor" />
  <path d="M6 6H4V11H6V6Z" fill="currentColor" />
</svg>`}],ls=[{nr:667,name:"tv",tags:"devices multimedia",css:'.gg-tv{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:11px;border:2px solid;border-radius:2px}.gg-tv::after,.gg-tv::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-tv::before{border-left:2px solid;border-bottom:2px solid;border-bottom-left-radius:2px;top:-6px;left:3px;transform:rotate(-45deg);width:6px;height:5px}.gg-tv::after{width:8px;height:1px;background:currentColor;border-radius:10px;bottom:-4px;right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 6.11861L9.4131 4.70551L11.5371 6.82954L14.3667 4L15.7782 5.41151L13.3137 7.87598H18C19.1046 7.87598 20 8.77141 20 9.87598V16.876C20 17.9805 19.1046 18.876 18 18.876H6C4.89543 18.876 4 17.9805 4 16.876V9.87598C4 8.77141 4.89543 7.87598 6 7.87598H9.75736L8 6.11861ZM18 9.87598H6V16.876H18V9.87598Z"
    fill="currentColor"
  />
  <path d="M8 19.876H16V20.876H8V19.876Z" fill="currentColor" />
</svg>`}],ss=[{nr:668,name:"twilio",tags:"brands",css:'.gg-twilio{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:24px;height:24px;border-radius:22px;box-shadow:inset 0 0 0 3px}.gg-twilio::after,.gg-twilio::before{content:"";display:block;position:absolute;box-sizing:border-box;background:currentColor;border-radius:6px;width:4px;height:4px;top:7px;box-shadow:0 6px 0}.gg-twilio::before{left:7px}.gg-twilio::after{right:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z"
    fill="currentColor"
  />
  <path
    d="M17 9C17 10.1046 16.1046 11 15 11C13.8954 11 13 10.1046 13 9C13 7.89543 13.8954 7 15 7C16.1046 7 17 7.89543 17 9Z"
    fill="currentColor"
  />
  <path
    d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z"
    fill="currentColor"
  />
  <path
    d="M11 15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 13.8954 7.89543 13 9 13C10.1046 13 11 13.8954 11 15Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],gs=[{nr:669,name:"twitter",tags:"brands",css:'.gg-twitter{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px}.gg-twitter::after,.gg-twitter::before{content:"";display:block;position:absolute;box-sizing:border-box;left:4px}.gg-twitter::before{width:9px;height:14px;border-left:4px solid;border-bottom:4px solid;border-bottom-left-radius:6px;background:linear-gradient(to left,currentColor 12px,transparent 0)no-repeat center 2px/10px 4px;top:4px}.gg-twitter::after{width:4px;height:4px;background:currentColor;border-radius:20px;top:2px;box-shadow:7px 4px 0,7px 12px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
    fill="currentColor"
  />
</svg>`}],ps=[{nr:670,name:"ui-kit",tags:"multimedia interface",css:'.gg-ui-kit,.gg-ui-kit::after,.gg-ui-kit::before{display:block;box-sizing:border-box}.gg-ui-kit{position:relative;transform:scale(var(--ggs,1));width:10px;height:16px;border-radius:3px;border:2px solid}.gg-ui-kit::after,.gg-ui-kit::before{content:"";position:absolute;border:2px solid;width:6px;height:12px}.gg-ui-kit::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px;transform:perspective(10px)rotateY(30deg);left:-8px}.gg-ui-kit::after{border-top-right-radius:3px;border-bottom-right-radius:3px;transform:perspective(10px)rotateY(-30deg);border-left:0;right:-8px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14 6H10C9.44772 6 9 6.44772 9 7V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V7C15 6.44772 14.5523 6 14 6ZM10 4C8.34315 4 7 5.34315 7 7V17C7 18.6569 8.34315 20 10 20H14C15.6569 20 17 18.6569 17 17V7C17 5.34315 15.6569 4 14 4H10Z"
    fill="currentColor"
  />
  <path
    d="M6 7.45936L3.4932 7.04156C1.6646 6.73679 0 8.14692 0 10.0007V14.918C0 16.7718 1.6646 18.1819 3.4932 17.8772L6 17.4594V15.4318L3.1644 15.9044C2.55487 16.006 2 15.5359 2 14.918V10.0007C2 9.3828 2.55487 8.91276 3.1644 9.01435L6 9.48695V7.45936Z"
    fill="currentColor"
  />
  <path
    d="M18 7.45936L20.5068 7.04156C22.3354 6.73679 24 8.14692 24 10.0007V14.918C24 16.7718 22.3354 18.1819 20.5068 17.8772L18 17.4594V15.4318L20.8356 15.9044C21.4451 16.006 22 15.5359 22 14.918V10.0007C22 9.3828 21.4451 8.91276 20.8356 9.01435L18 9.48695V7.45936Z"
    fill="currentColor"
  />
</svg>`}],as=[{nr:671,name:"umbrella",tags:"interface",css:'.gg-umbrella{display:block;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;width:22px;height:22px;background:linear-gradient(to bottom,currentColor 20px,transparent 0)no-repeat center 10px/2px 8px}.gg-umbrella::after,.gg-umbrella::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-umbrella::before{width:16px;height:10px;left:3px;border-top-left-radius:12px;border-top-right-radius:12px}.gg-umbrella::after{width:6px;height:5px;border-top:0;border-bottom-left-radius:12px;border-bottom-right-radius:12px;bottom:0;left:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9V11H13.0187V20.5C13.0187 21.8807 11.8994 23 10.5187 23C9.13797 23 8.01868 21.8807 8.01868 20.5V17.8571H10.0187V20.5C10.0187 20.7761 10.2425 21 10.5187 21C10.7948 21 11.0187 20.7761 11.0187 20.5V11H4V9ZM12 3C15.3137 3 18 5.68629 18 9H6C6 5.68629 8.68629 3 12 3Z"
    fill="currentColor"
  />
</svg>`}],ds=[{nr:672,name:"unavailable",tags:"interface",css:'.gg-unavailable{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:100px}.gg-unavailable::after{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:18px;background:currentColor;top:-2px;left:6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604ZM16.1925 17.6067L6.39327 7.80749C4.33767 10.5493 4.55666 14.4562 7.05025 16.9497C9.54384 19.4433 13.4507 19.6623 16.1925 17.6067ZM16.9497 7.05025C19.4433 9.54384 19.6623 13.4507 17.6067 16.1925L7.80749 6.39327C10.5493 4.33767 14.4562 4.55666 16.9497 7.05025Z"
    fill="currentColor"
  />
</svg>`}],xs=[{nr:673,name:"unblock",tags:"interface signs",css:'.gg-unblock{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:100%}.gg-unblock::after,.gg-unblock::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:7px;background:currentColor;border-radius:5px;left:6px}.gg-unblock::before{top:-2px}.gg-unblock::after{bottom:-2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364ZM7.80749 17.6067C10.5493 19.6623 14.4562 19.4433 16.9497 16.9497C19.4433 14.4562 19.6623 10.5493 17.6067 7.80749L14.8284 10.5858C14.4379 10.9763 13.8047 10.9763 13.4142 10.5858C13.0237 10.1953 13.0237 9.5621 13.4142 9.17157L16.1925 6.39327C13.4507 4.33767 9.54384 4.55666 7.05025 7.05025C4.55666 9.54384 4.33767 13.4507 6.39327 16.1925L9.17157 13.4142C9.5621 13.0237 10.1953 13.0237 10.5858 13.4142C10.9763 13.8047 10.9763 14.4379 10.5858 14.8284L7.80749 17.6067Z"
    fill="currentColor"
  />
</svg>`}],bs=[{nr:674,name:"undo",tags:"interface arrows",css:'.gg-undo{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:14px;border:2px solid;border-left-color:transparent;border-radius:100px}.gg-undo::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-left:2px solid;top:-3px;left:-1px;transform:rotate(-68deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.33929 4.46777H7.33929V7.02487C8.52931 6.08978 10.0299 5.53207 11.6607 5.53207C15.5267 5.53207 18.6607 8.66608 18.6607 12.5321C18.6607 16.3981 15.5267 19.5321 11.6607 19.5321C9.51025 19.5321 7.58625 18.5623 6.30219 17.0363L7.92151 15.8515C8.83741 16.8825 10.1732 17.5321 11.6607 17.5321C14.4222 17.5321 16.6607 15.2935 16.6607 12.5321C16.6607 9.77065 14.4222 7.53207 11.6607 7.53207C10.5739 7.53207 9.56805 7.87884 8.74779 8.46777L11.3393 8.46777V10.4678H5.33929V4.46777Z"
    fill="currentColor"
  />
</svg>`}],hs=[{nr:675,name:"unfold",tags:"brands",css:".gg-unfold{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border-radius:100%;border-bottom:10px solid}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12H2Z"
    fill="currentColor"
  />
</svg>`}],cs=[{nr:676,name:"unsplash",tags:"brands design",css:'.gg-unsplash{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:15px}.gg-unsplash::after,.gg-unsplash::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-unsplash::before{width:16px;height:9px;border:5px solid;border-top:0;bottom:0}.gg-unsplash::after{width:6px;height:4px;background:currentColor;top:0;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15 4.5H9V8.5H15V4.5Z" fill="currentColor" />
  <path d="M4 10.5H9V14.5H15V10.5H20V19.5H4V10.5Z" fill="currentColor" />
</svg>`}],fs=[{nr:677,name:"usb-c",tags:"multimedia signs",css:".gg-usb-c{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:6px;border:2px solid transparent;border-radius:100px;box-shadow:0 0 0 2px,inset 0 0 0 10px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 12C3 9.23858 5.23858 7 8 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H8C5.23858 17 3 14.7614 3 12ZM8 9H16C17.6569 9 19 10.3431 19 12C19 13.6569 17.6569 15 16 15H8C6.34315 15 5 13.6569 5 12C5 10.3431 6.34315 9 8 9Z"
    fill="currentColor"
  />
</svg>`}],Cs=[{nr:678,name:"usb",tags:"multimedia signs",css:'.gg-usb,.gg-usb::before{display:block;box-sizing:border-box}.gg-usb{position:relative;width:14px;height:14px;border:2px solid;transform:scale(var(--ggs,1));margin-bottom:-6px;border-bottom-left-radius:3px;border-bottom-right-radius:3px}.gg-usb::before{content:"";position:absolute;width:6px;height:5px;border-left:1px solid transparent;border-right:1px solid transparent;border-top:1px solid transparent;border-bottom:2px solid transparent;box-shadow:0 0 0 2px,inset 5px 4px 0 -4px,inset -5px 4px 0 -4px;top:-7px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M10 4.5H11V6.5H10V4.5Z" fill="currentColor" />
  <path d="M14 4.5H13V6.5H14V4.5Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 8.5V1.5H17V8.5H19V19.5C19 21.1569 17.6569 22.5 16 22.5H8C6.34315 22.5 5 21.1569 5 19.5V8.5H7ZM9 3.5H15V8.5H9V3.5ZM17 10.5H7V19.5C7 20.0523 7.44772 20.5 8 20.5H16C16.5523 20.5 17 20.0523 17 19.5V10.5Z"
    fill="currentColor"
  />
</svg>`}],ws=[{nr:679,name:"user-add",tags:"interface",css:'.gg-user-add{display:block;transform:scale(var(--ggs,1));box-sizing:border-box;width:20px;height:18px;background:linear-gradient(to left,currentColor 8px,transparent 0)no-repeat 14px 6px/6px 2px,linear-gradient(to left,currentColor 8px,transparent 0)no-repeat 16px 4px/2px 6px}.gg-user-add::after,.gg-user-add::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-user-add::before{width:8px;height:8px;border-radius:30px;top:0;left:2px}.gg-user-add::after{width:12px;height:9px;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;top:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
    fill="currentColor"
  />
  <path
    d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
    fill="currentColor"
  />
  <path d="M18 7H20V9H22V11H20V13H18V11H16V9H18V7Z" fill="currentColor" />
</svg>`}],us=[{nr:680,name:"user-list",tags:"interface",css:'.gg-user-list{display:block;transform:scale(var(--ggs,1));box-sizing:border-box;width:20px;height:18px;background:linear-gradient(to left,currentColor 8px,transparent 0)no-repeat 14px 4px/6px 2px,linear-gradient(to left,currentColor 8px,transparent 0)no-repeat 14px 8px/6px 2px,linear-gradient(to left,currentColor 8px,transparent 0)no-repeat 14px 12px/6px 2px}.gg-user-list::after,.gg-user-list::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-user-list::before{width:8px;height:8px;border-radius:30px;top:0;left:2px}.gg-user-list::after{width:12px;height:9px;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;top:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
    fill="currentColor"
  />
  <path
    d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
    fill="currentColor"
  />
  <path d="M22 11H16V13H22V11Z" fill="currentColor" />
  <path d="M16 15H22V17H16V15Z" fill="currentColor" />
  <path d="M22 7H16V9H22V7Z" fill="currentColor" />
</svg>`}],vs=[{nr:681,name:"user-remove",tags:"interface",css:'.gg-user-remove{display:block;transform:scale(var(--ggs,1));box-sizing:border-box;width:20px;height:18px;background:linear-gradient(to left,currentColor 8px,transparent 0)no-repeat 14px 6px/6px 2px}.gg-user-remove::after,.gg-user-remove::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-user-remove::before{width:8px;height:8px;border-radius:30px;top:0;left:2px}.gg-user-remove::after{width:12px;height:9px;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;top:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
    fill="currentColor"
  />
  <path
    d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
    fill="currentColor"
  />
  <path d="M22 9H16V11H22V9Z" fill="currentColor" />
</svg>`}],ms=[{nr:682,name:"user",tags:"interface signs",css:'.gg-user{display:block;transform:scale(var(--ggs,1));box-sizing:border-box;width:12px;height:18px}.gg-user::after,.gg-user::before{content:"";display:block;box-sizing:border-box;position:absolute;border:2px solid}.gg-user::before{width:8px;height:8px;border-radius:30px;top:0;left:2px}.gg-user::after{width:12px;height:9px;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px;top:9px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
    fill="currentColor"
  />
  <path
    d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
    fill="currentColor"
  />
</svg>`}],Hs=[{nr:683,name:"userlane",tags:"brands",css:'.gg-userlane{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:8px;border-radius:20px;border-top-left-radius:0;border-top-right-radius:0;border:4px solid;border-top-color:transparent}.gg-userlane::after,.gg-userlane::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;top:-12px}.gg-userlane::before{border-radius:20px;left:-4px}.gg-userlane::after{right:-4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M15 4H21V10H15V4Z" fill="currentColor" />
  <path
    d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12H3Z"
    fill="currentColor"
  />
  <path
    d="M6 10C7.65685 10 9 8.65685 9 7C9 5.34315 7.65685 4 6 4C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z"
    fill="currentColor"
  />
</svg>`}],Vs=[{nr:684,name:"view-cols",tags:"interface",css:'.gg-view-cols{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}.gg-view-cols::after{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;top:-2px;left:4px;background:currentColor;box-shadow:6px 0 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM16 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H16V7ZM14 7H10V17H14V7ZM8 17V7H5C4.44772 7 4 7.44772 4 8V16C4 16.5523 4.44772 17 5 17H8Z"
    fill="currentColor"
  />
</svg>`}],Ls=[{nr:685,name:"view-comfortable",tags:"interface",css:'.gg-view-comfortable{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}.gg-view-comfortable::after,.gg-view-comfortable::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor}.gg-view-comfortable::after{width:2px;height:8px;bottom:-2px;left:4px}.gg-view-comfortable::before{width:20px;height:2px;left:-2px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V11H4V8C4 7.44772 4.44772 7 5 7ZM4 13V16C4 16.5523 4.44772 17 5 17H8V13H4ZM10 17H19C19.5523 17 20 16.5523 20 16V13H10V17Z"
    fill="currentColor"
  />
</svg>`}],Ms=[{nr:686,name:"view-day",tags:"interface",css:'.gg-view-day{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}.gg-view-day::after,.gg-view-day::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;top:-2px;left:7px;background:currentColor}.gg-view-day::before{width:20px;height:2px;left:-2px;top:4px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM13 7H19C19.5523 7 20 7.44771 20 8V11H13V7ZM11 7H5C4.44772 7 4 7.44772 4 8V11H11V7ZM4 13V16C4 16.5523 4.44772 17 5 17H11V13H4ZM13 17H19C19.5523 17 20 16.5523 20 16V13H13V17Z"
    fill="currentColor"
  />
</svg>`}],Zs=[{nr:687,name:"view-grid",tags:"interface",css:'.gg-view-grid{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}.gg-view-grid::after,.gg-view-grid::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;top:-2px;left:4px;background:currentColor;box-shadow:6px 0 0}.gg-view-grid::before{width:20px;height:2px;left:-2px;top:2px;box-shadow:0 4px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM8 7H5C4.44772 7 4 7.44772 4 8V9H8V7ZM10 7V9H14V7H10ZM16 7V9H20V8C20 7.44771 19.5523 7 19 7H16ZM14 11H10V13H14V11ZM16 13V11H20V13H16ZM14 15H10V17H14V15ZM16 17V15H20V16C20 16.5523 19.5523 17 19 17H16ZM8 17V15H4V16C4 16.5523 4.44772 17 5 17H8ZM8 13V11H4V13H8Z"
    fill="currentColor"
  />
</svg>`}],ks=[{nr:688,name:"view-list",tags:"interface",css:'.gg-view-list{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}.gg-view-list::after,.gg-view-list::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;top:-2px;left:3px;background:currentColor}.gg-view-list::before{width:20px;height:2px;left:-2px;top:2px;box-shadow:0 4px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM7 7H5C4.44772 7 4 7.44772 4 8V9H7V7ZM9 7V9H20V8C20 7.44771 19.5523 7 19 7H9ZM7 11H4V13H7V11ZM9 13V11H20V13H9ZM7 15H4V16C4 16.5523 4.44772 17 5 17H7V15ZM9 17V15H20V16C20 16.5523 19.5523 17 19 17H9Z"
    fill="currentColor"
  />
</svg>`}],ys=[{nr:689,name:"view-month",tags:"interface",css:'.gg-view-month{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}.gg-view-month::after,.gg-view-month::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:14px;top:-2px;left:3px;background:currentColor;box-shadow:4px 0 0,8px 0 0}.gg-view-month::before{width:20px;height:2px;left:-2px;top:2px;box-shadow:0 4px 0}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM17 7H19C19.5523 7 20 7.44771 20 8V9H17V7ZM15 7H13V9H15V7ZM11 7H9V9H11V7ZM7 7H5C4.44772 7 4 7.44772 4 8V9H7V7ZM4 11V13H7V11H4ZM4 15V16C4 16.5523 4.44772 17 5 17H7V15H4ZM9 17H11V15H9V17ZM13 17H15V15H13V17ZM17 17H19C19.5523 17 20 16.5523 20 16V15H17V17ZM20 13V11H17V13H20ZM11 13H9V11H11V13ZM15 13H13V11H15V13Z"
    fill="currentColor"
  />
</svg>`}],zs=[{nr:690,name:"view-split",tags:"interface",css:'.gg-view-split{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border:2px solid;border-radius:3px;width:20px;height:14px}.gg-view-split::after{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:12px;top:-2px;left:7px;background:currentColor}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM13 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H13V7ZM11 7H5C4.44772 7 4 7.44772 4 8V16C4 16.5523 4.44772 17 5 17H11V7Z"
    fill="currentColor"
  />
</svg>`}],Bs=[{nr:691,name:"vinyl",tags:"interface",css:".gg-vinyl{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:3px solid transparent;box-shadow:0 0 0 6px,inset 0 0 0 2px;border-radius:22px}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
    fill="currentColor"
  />
</svg>`}],qs=[{nr:692,name:"voicemail-o",tags:"interface multimedia",css:'.gg-voicemail-o{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 5px 10px/8px 2px;border-radius:30px;border:2px solid}.gg-voicemail-o::after,.gg-voicemail-o::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border:2px solid;border-radius:10px;top:6px}.gg-voicemail-o::before{left:2px}.gg-voicemail-o::after{right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 12C11 12.3506 10.9398 12.6872 10.8293 13H13.1707C13.0602 12.6872 13 12.3506 13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12C19 13.6569 17.6569 15 16 15H8C6.34315 15 5 13.6569 5 12C5 10.3431 6.34315 9 8 9C9.65685 9 11 10.3431 11 12ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    fill="currentColor"
  />
</svg>`}],Xs=[{nr:693,name:"voicemail-r",tags:"interface multimedia",css:'.gg-voicemail-r{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:21px;height:14px;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat 5px 6px/7px 2px;border-radius:3px;border:2px solid}.gg-voicemail-r::after,.gg-voicemail-r::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border:2px solid;border-radius:10px;top:2px}.gg-voicemail-r::before{left:2px}.gg-voicemail-r::after{right:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.5 12C11.5 12.3506 11.4398 12.6872 11.3293 13H13.6707C13.5602 12.6872 13.5 12.3506 13.5 12C13.5 10.3431 14.8431 9 16.5 9C18.1569 9 19.5 10.3431 19.5 12C19.5 13.6569 18.1569 15 16.5 15H8.5C6.84315 15 5.5 13.6569 5.5 12C5.5 10.3431 6.84315 9 8.5 9C10.1569 9 11.5 10.3431 11.5 12ZM9.5 12C9.5 12.5523 9.05228 13 8.5 13C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11C9.05228 11 9.5 11.4477 9.5 12ZM17.5 12C17.5 12.5523 17.0523 13 16.5 13C15.9477 13 15.5 12.5523 15.5 12C15.5 11.4477 15.9477 11 16.5 11C17.0523 11 17.5 11.4477 17.5 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1.5 8C1.5 6.34315 2.84315 5 4.5 5H19.5C21.1569 5 22.5 6.34315 22.5 8V16C22.5 17.6569 21.1569 19 19.5 19H4.5C2.84315 19 1.5 17.6569 1.5 16V8ZM4.5 7H19.5C20.0523 7 20.5 7.44772 20.5 8V16C20.5 16.5523 20.0523 17 19.5 17H4.5C3.94772 17 3.5 16.5523 3.5 16V8C3.5 7.44772 3.94772 7 4.5 7Z"
    fill="currentColor"
  />
</svg>`}],Is=[{nr:694,name:"voicemail",tags:"interface multimedia",css:'.gg-voicemail{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:10px;border-bottom:2px solid}.gg-voicemail::after,.gg-voicemail::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;border-radius:10px;top:0;left:-5px}.gg-voicemail::after{left:7px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.0004 15C10.6281 14.1643 11 13.1256 11 12C11 9.23858 8.76142 7 6 7C3.23858 7 1 9.23858 1 12C1 14.7614 3.23858 17 6 17H18C20.7614 17 23 14.7614 23 12C23 9.23858 20.7614 7 18 7C15.2386 7 13 9.23858 13 12C13 13.1256 13.3719 14.1643 13.9996 15H10.0004ZM6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15ZM18 15C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15Z"
    fill="currentColor"
  />
</svg>`}],Ss=[{nr:695,name:"volume",tags:"interface multimedia",css:'.gg-volume{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid;border-right:0;-webkit-perspective:12px;perspective:12px;border-top-left-radius:4px;border-bottom-left-radius:4px}.gg-volume::after,.gg-volume::before{content:"";display:block;box-sizing:border-box;position:absolute}.gg-volume::before{left:2px;transform:rotateY(-90deg);width:10px;height:10px;border:2px solid;border-left:0;top:-3px}.gg-volume::after{width:8px;height:16px;border:6px double;border-left:0;border-top-right-radius:100px;border-bottom-right-radius:100px;right:-14px;top:-6px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M24 12C24 16.4183 20.4183 20 16 20V18C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6V4C20.4183 4 24 7.58172 24 12Z"
    fill="currentColor"
  />
  <path
    d="M20 12C20 14.2091 18.2091 16 16 16V14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10V8C18.2091 8 20 9.79086 20 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9 16L15 20V4L9 8H5C2.79086 8 1 9.79086 1 12C1 14.2091 2.79086 16 5 16H9ZM5 10H9L13 7.5V16.5L9 14H5C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
    fill="currentColor"
  />
</svg>`}],Ys=[{nr:696,name:"webcam",tags:"interface devices multimedia",css:'.gg-webcam{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:100px;margin-top:-4px}.gg-webcam::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:4px;border-right:4px solid transparent;box-shadow:0 2px 0,inset -2px 0 0;bottom:-6px;left:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13 14.9C15.2822 14.4367 17 12.419 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 12.419 8.71776 14.4367 11 14.9V17H7V19H17V17H13V14.9ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
    fill="currentColor"
  />
</svg>`}],js=[{nr:697,name:"website",tags:"interface design",css:'.gg-website{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:18px;border:2px solid;border-radius:3px;box-shadow:0 -1px 0}.gg-website::after,.gg-website::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;top:2px}.gg-website::before{background:currentColor;left:2px;box-shadow:0 4px 0,0 8px 0;border-radius:3px;height:2px}.gg-website::after{height:10px;border:2px solid;right:2px;border-radius:1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
    fill="currentColor"
  />
  <path
    d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z"
    fill="currentColor"
  />
  <path
    d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z"
    fill="currentColor"
  />
  <path
    d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
    fill="currentColor"
  />
</svg>`}],As=[{nr:698,name:"windows",tags:"brands",css:'.gg-windows{transform:scale(var(--ggs,1))}.gg-windows,.gg-windows::before{display:block;position:relative;box-sizing:border-box;width:17px;height:15px}.gg-windows::before{content:"";position:absolute;width:7px;height:6px;background:currentColor;box-shadow:8px 0 0,8px 7px 0,0 7px 0;transform:perspective(30px) rotateY(-30deg)}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z"
    fill="currentColor"
  />
</svg>`}],Us=[{nr:699,name:"work-alt",tags:"interface",css:'.gg-work-alt,.gg-work-alt::after{display:block;box-sizing:border-box;box-shadow:0 0 0 2px}.gg-work-alt{position:relative;transform:scale(var(--ggs,1));width:14px;height:10px;border-radius:1px}.gg-work-alt::after{content:"";position:absolute;width:6px;height:1px;border-top-left-radius:1px;border-top-right-radius:1px;left:4px;top:-3px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z"
    fill="currentColor"
  />
</svg>`}],Ds=[{nr:700,name:"yinyang",tags:"interface signs",css:'.gg-yinyang{box-sizing:border-box;position:relative;display:block;transform:rotate(95deg) scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:22px}.gg-yinyang::after,.gg-yinyang::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-radius:10px;top:4px}.gg-yinyang::before{border:2px solid;left:0}.gg-yinyang::after{border:2px solid transparent;right:0;box-shadow:inset 0 0 0 4px,0 -3px 0 1px,-2px -4px 0 1px,-8px -5px 0 -1px,-11px -3px 0 -2px,-12px -1px 0 -3px,-6px -6px 0 -1px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.2091 20 16 18.2091 16 16C16 13.7909 14.2091 12 12 12ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z"
    fill="currentColor"
  />
</svg>`}],Ps=[{nr:701,name:"youtube",tags:"multimedia buttons",css:'.gg-youtube{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:10px;box-shadow:0 0 0 2px;border-radius:15px 15px 15px 15px /45px 45px 45px 45px}.gg-youtube::before{content:"";display:block;box-sizing:border-box;position:absolute;left:7px;top:2px;border-left:4px solid currentColor;border-top:3px solid transparent;border-bottom:3px solid transparent}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7ZM2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM10 9L14 12L10 15V9Z"
    fill="currentColor"
  />
</svg>`}],Gs=[{nr:702,name:"vercel",tags:"brands",css:".gg-vercel{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:0px;height:0px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:18px solid currentColor;}",svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.9923 17.0225L11.9806 6.97729L6.00775 17.0225H17.9923Z"
    fill="currentColor"
  />
</svg>`}],Ts=[{nr:703,name:"zoom-in",tags:"interface",css:'.gg-zoom-in{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;background:linear-gradient(to bottom,currentColor 5px,transparent 0)no-repeat 2px 5px/8px 2px;margin-top:-4px}.gg-zoom-in::after,.gg-zoom-in::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;background:currentColor}.gg-zoom-in::after{transform:rotate(-45deg);border-radius:3px;top:10px;left:12px}.gg-zoom-in::before{top:2px;left:5px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"
    fill="currentColor"
  />
</svg>`}],$s=[{nr:704,name:"zoom-out",tags:"interface",css:'.gg-zoom-out{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-top:-4px}.gg-zoom-out::after,.gg-zoom-out::before{content:"";display:block;box-sizing:border-box;position:absolute;background:currentColor}.gg-zoom-out::after{transform:rotate(-45deg);border-radius:3px;width:2px;height:8px;top:10px;left:12px}.gg-zoom-out::before{width:8px;height:2px;top:5px;left:2px}',svg:`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM7.10052 10V12H15.1005V10L7.10052 10Z"
    fill="currentColor"
  />
</svg>`}],Os={abstract:P,"add-r":G,add:T,adidas:$,airplane:O,alarm:E,album:F,"align-bottom":N,"align-center":J,"align-left":K,"align-middle":Q,"align-right":R,"align-top":W,anchor:_,"apple-watch":o1,"arrange-back":r1,"arrange-front":e1,"arrow-align-h":n1,"arrow-align-v":t1,"arrow-bottom-left-o":i1,"arrow-bottom-left-r":l1,"arrow-bottom-left":s1,"arrow-bottom-right-o":g1,"arrow-bottom-right-r":p1,"arrow-bottom-right":a1,"arrow-down-o":d1,"arrow-down-r":x1,"arrow-down":b1,"arrow-left-o":h1,"arrow-left-r":c1,"arrow-left":f1,"arrow-long-down-c":C1,"arrow-long-down-e":w1,"arrow-long-down-l":u1,"arrow-long-down-r":v1,"arrow-long-down":m1,"arrow-long-left-c":H1,"arrow-long-left-e":V1,"arrow-long-left-l":L1,"arrow-long-left-r":M1,"arrow-long-left":Z1,"arrow-long-right-c":k1,"arrow-long-right-e":y1,"arrow-long-right-l":z1,"arrow-long-right-r":B1,"arrow-long-right":q1,"arrow-long-up-c":X1,"arrow-long-up-e":I1,"arrow-long-up-l":S1,"arrow-long-up-r":Y1,"arrow-long-up":j1,"arrow-right-o":A1,"arrow-right-r":U1,"arrow-right":D1,"arrow-top-left-o":P1,"arrow-top-left-r":G1,"arrow-top-left":T1,"arrow-top-right-o":$1,"arrow-top-right-r":O1,"arrow-top-right":E1,"arrow-up-o":F1,"arrow-up-r":N1,"arrow-up":J1,"arrows-breake-h":K1,"arrows-breake-v":Q1,"arrows-exchange-alt-v":R1,"arrows-exchange-alt":W1,"arrows-exchange-v":_1,"arrows-exchange":oo,"arrows-expand-down-left":ro,"arrows-expand-down-right":eo,"arrows-expand-left-alt":no,"arrows-expand-left":to,"arrows-expand-right-alt":io,"arrows-expand-right":lo,"arrows-expand-up-left":so,"arrows-expand-up-right":go,"arrows-h-alt":po,"arrows-h":ao,"arrows-merge-alt-h":xo,"arrows-merge-alt-v":bo,"arrows-scroll-h":ho,"arrows-scroll-v":co,"arrows-shrink-h":fo,"arrows-shrink-v":Co,"arrows-v-alt":wo,"arrows-v":uo,assign:vo,asterisk:mo,atlasian:Ho,attachment:Vo,attribution:Lo,awards:Mo,backspace:Zo,"band-aid":ko,"battery-empty":yo,"battery-full":zo,battery:Bo,bee:qo,bell:Xo,bitbucket:Io,block:So,bmw:Yo,board:jo,bolt:Ao,bookmark:Uo,"border-all":Do,"border-bottom":Po,"border-left":Go,"border-right":To,"border-style-dashed":$o,"border-style-dotted":Oo,"border-style-solid":Eo,"border-top":Fo,bot:No,bowl:Jo,box:Ko,boy:Qo,brackets:Ro,briefcase:Wo,browse:_o,browser:or,brush:rr,bulb:er,"c-plus-plus":nr,calculator:tr,"calendar-dates":ir,"calendar-due":lr,"calendar-next":sr,"calendar-today":gr,"calendar-two":pr,calendar:ar,calibrate:dr,camera:xr,cap:br,captions:hr,"card-clubs":cr,"card-diamonds":fr,"card-hearts":Cr,"card-spades":wr,carousel:ur,cast:vr,chanel:mr,chart:Hr,"check-o":Vr,"check-r":Lr,check:Mr,"chevron-double-down-o":Zr,"chevron-double-down-r":kr,"chevron-double-down":yr,"chevron-double-left-o":zr,"chevron-double-left-r":Br,"chevron-double-left":qr,"chevron-double-right-o":Xr,"chevron-double-right-r":Ir,"chevron-double-right":Sr,"chevron-double-up-o":Yr,"chevron-double-up-r":jr,"chevron-double-up":Ar,"chevron-down-o":Ur,"chevron-down-r":Dr,"chevron-down":Pr,"chevron-left-o":Gr,"chevron-left-r":Tr,"chevron-left":$r,"chevron-right-o":Or,"chevron-right-r":Er,"chevron-right":Fr,"chevron-up-o":Nr,"chevron-up-r":Jr,"chevron-up":Kr,circleci:Qr,"clapper-board":Rr,clipboard:Wr,"close-o":_r,"close-r":o2,close:r2,cloud:e2,"code-climate":n2,"code-slash":t2,code:i2,coffee:l2,collage:s2,"color-bucket":g2,"color-picker":p2,"comedy-central":a2,comment:d2,community:x2,components:b2,"compress-left":h2,"compress-right":c2,"compress-v":f2,compress:C2,controller:w2,copy:u2,copyright:v2,"corner-double-down-left":m2,"corner-double-down-right":H2,"corner-double-left-down":V2,"corner-double-left-up":L2,"corner-double-right-down":M2,"corner-double-right-up":Z2,"corner-double-up-left":k2,"corner-double-up-right":y2,"corner-down-left":z2,"corner-down-right":B2,"corner-left-down":q2,"corner-left-up":X2,"corner-right-down":I2,"corner-right-up":S2,"corner-up-left":Y2,"corner-up-right":j2,"credit-card":A2,crop:U2,cross:D2,crowdfire:P2,crown:G2,danger:T2,"dark-mode":$2,data:O2,database:E2,debug:F2,designmodo:N2,desktop:J2,"details-less":K2,"details-more":Q2,dialpad:R2,"dice-1":W2,"dice-2":_2,"dice-3":oe,"dice-4":re,"dice-5":ee,"dice-6":ne,digitalocean:te,disc:ie,"display-flex":le,"display-fullwidth":se,"display-grid":ge,"display-spacing":pe,"distribute-horizontal":ae,"distribute-vertical":de,"dock-bottom":xe,"dock-left":be,"dock-right":he,"dock-window":ce,dolby:fe,dollar:Ce,dribbble:we,drive:ue,"drop-invert":ve,"drop-opacity":me,drop:He,duplicate:Ve,"edit-black-point":Le,"edit-contrast":Me,"edit-exposure":Ze,"edit-fade":ke,"edit-flip-h":ye,"edit-flip-v":ze,"edit-highlight":Be,"edit-markup":qe,"edit-mask":Xe,"edit-noise":Ie,"edit-shadows":Se,"edit-straight":Ye,"edit-unmask":je,eject:Ae,enter:Ue,erase:De,ereader:Pe,ericsson:Ge,ethernet:Te,euro:$e,eventbrite:Oe,expand:Ee,export:Fe,"extension-add":Ne,"extension-alt":Je,"extension-remove":Ke,extension:Qe,external:Re,"eye-alt":We,eye:_e,facebook:on,feed:rn,figma:en,"file-add":nn,"file-document":tn,"file-remove":ln,file:sn,film:gn,filters:pn,"flag-alt":an,flag:dn,"folder-add":xn,"folder-remove":bn,folder:hn,"font-height":cn,"font-spacing":fn,"format-bold":Cn,"format-center":wn,"format-color":un,"format-heading":vn,"format-indent-decrease":mn,"format-indent-increase":Hn,"format-italic":Vn,"format-justify":Ln,"format-left":Mn,"format-line-height":Zn,"format-right":kn,"format-separator":yn,"format-slash":zn,"format-strike":Bn,"format-text":qn,"format-underline":Xn,"format-uppercase":In,framer:Sn,games:Yn,"gender-female":jn,"gender-male":An,"ghost-character":Un,ghost:Dn,gift:Pn,girl:Gn,"git-branch":Tn,"git-commit":$n,"git-fork":On,"git-pull":En,gitter:Fn,"glass-alt":Nn,glass:Jn,"globe-alt":Kn,globe:Qn,"google-tasks":Rn,google:Wn,gym:_n,hashtag:ot,headset:rt,heart:et,hello:nt,"home-alt":tt,"home-screen":it,home:lt,icecream:st,"if-design":gt,image:pt,import:at,inbox:dt,"indie-hackers":xt,infinity:bt,info:ht,inpicture:ct,"insert-after-o":ft,"insert-after-r":Ct,"insert-after":wt,"insert-before-o":ut,"insert-before-r":vt,"insert-before":mt,insights:Ht,instagram:Vt,internal:Lt,key:Mt,keyboard:Zt,keyhole:kt,laptop:yt,lastpass:zt,"layout-grid-small":Bt,"layout-grid":qt,"layout-list":Xt,"layout-pin":It,linear:St,link:Yt,"list-tree":jt,list:At,"live-photo":Ut,"loadbar-alt":Dt,"loadbar-doc":Pt,"loadbar-sound":Gt,loadbar:Tt,"lock-unlock":$t,lock:Ot,"log-in":Et,"log-off":Ft,"log-out":Nt,loupe:Jt,magnet:Kt,"mail-forward":Qt,"mail-open":Rt,"mail-reply":Wt,mail:_t,"math-divide":o4,"math-equal":r4,"math-minus":e4,"math-percent":n4,"math-plus":t4,"maximize-alt":i4,maximize:l4,maze:s4,"media-live":g4,"media-podcast":p4,"menu-boxed":a4,"menu-cake":d4,"menu-cheese":x4,"menu-grid-o":b4,"menu-grid-r":h4,"menu-hotdog":c4,"menu-left-alt":f4,"menu-left":C4,"menu-motion":w4,"menu-oreos":u4,"menu-right-alt":v4,"menu-right":m4,"menu-round":H4,menu:V4,"merge-horizontal":L4,"merge-vertical":M4,mic:Z4,microbit:k4,microsoft:y4,"mini-player":z4,"minimize-alt":B4,minimize:q4,modem:X4,monday:I4,moon:S4,"more-alt":Y4,"more-o":j4,"more-r":A4,"more-vertical-alt":U4,"more-vertical-o":D4,"more-vertical-r":P4,"more-vertical":G4,more:T4,mouse:$4,"move-down":O4,"move-left":E4,"move-right":F4,"move-task":N4,"move-up":J4,"music-note":K4,"music-speaker":Q4,music:R4,nametag:W4,notes:_4,notifications:oi,npm:ri,oculus:ei,"open-collective":ni,options:ti,organisation:ii,overflow:li,pacman:si,password:gi,"path-back":pi,"path-crop":ai,"path-divide":di,"path-exclude":xi,"path-front":bi,"path-intersect":hi,"path-outline":ci,"path-trim":fi,"path-unite":Ci,patreon:wi,paypal:ui,pen:vi,"pentagon-bottom-left":mi,"pentagon-bottom-right":Hi,"pentagon-down":Vi,"pentagon-left":Li,"pentagon-right":Mi,"pentagon-top-left":Zi,"pentagon-top-right":ki,"pentagon-up":yi,performance:zi,pexels:Bi,phone:qi,photoscan:Xi,piano:Ii,pill:Si,"pin-alt":Yi,"pin-bottom":ji,"pin-top":Ai,pin:Ui,"play-backwards":Di,"play-button-o":Pi,"play-button-r":Gi,"play-button":Ti,"play-forwards":$i,"play-list-add":Oi,"play-list-check":Ei,"play-list-remove":Fi,"play-list-search":Ni,"play-list":Ji,"play-pause-o":Ki,"play-pause-r":Qi,"play-pause":Ri,"play-stop-o":Wi,"play-stop-r":_i,"play-stop":o5,"play-track-next-o":r5,"play-track-next-r":e5,"play-track-next":n5,"play-track-prev-o":t5,"play-track-prev-r":i5,"play-track-prev":l5,plug:s5,pocket:g5,pokemon:p5,polaroid:a5,poll:d5,presentation:x5,printer:b5,"product-hunt":h5,profile:c5,"pull-clear":f5,"push-chevron-down-o":C5,"push-chevron-down-r":w5,"push-chevron-down":u5,"push-chevron-left-o":v5,"push-chevron-left-r":m5,"push-chevron-left":H5,"push-chevron-right-o":V5,"push-chevron-right-r":L5,"push-chevron-right":M5,"push-chevron-up-o":Z5,"push-chevron-up-r":k5,"push-chevron-up":y5,"push-down":z5,"push-left":B5,"push-right":q5,"push-up":X5,qr:I5,"quote-o":S5,quote:Y5,"radio-check":j5,"radio-checked":A5,ratio:U5,read:D5,readme:P5,record:G5,redo:T5,remote:$5,"remove-r":O5,remove:E5,rename:F5,reorder:N5,repeat:J5,ring:K5,"row-first":Q5,"row-last":R5,ruler:W5,"sand-clock":_5,scan:ol,"screen-mirror":rl,"screen-shot":el,"screen-wide":nl,screen:tl,"scroll-h":il,"scroll-v":ll,"search-found":sl,"search-loading":gl,search:pl,"select-o":al,"select-r":dl,select:xl,server:bl,serverless:hl,"shape-circle":cl,"shape-half-circle":fl,"shape-hexagon":Cl,"shape-rhombus":wl,"shape-square":ul,"shape-triangle":vl,"shape-zigzag":ml,share:Hl,shield:Vl,"shopping-bag":Ll,"shopping-cart":Ml,shortcut:Zl,shutterstock:kl,"sidebar-open":yl,"sidebar-right":zl,sidebar:Bl,signal:ql,size:Xl,sketch:Il,slack:Sl,sleep:Yl,"smart-home-boiler":jl,"smart-home-cooker":Al,"smart-home-heat":Ul,"smart-home-light":Dl,"smart-home-refrigerator":Pl,"smart-home-wash-machine":Gl,"smartphone-chip":Tl,"smartphone-ram":$l,"smartphone-shake":Ol,smartphone:El,"smile-mouth-open":Fl,"smile-neutral":Nl,"smile-no-mouth":Jl,"smile-none":Kl,"smile-sad":Ql,"smile-upside":Rl,smile:Wl,"software-download":_l,"software-upload":o0,"sort-az":r0,"sort-za":e0,"space-between-v":n0,"space-between":t0,spectrum:i0,"spinner-alt":l0,"spinner-two-alt":s0,"spinner-two":g0,spinner:p0,square:a0,stack:d0,stark:x0,stopwatch:b0,stories:h0,studio:c0,style:f0,sun:C0,support:w0,"swap-vertical":u0,swap:v0,sweden:m0,swiss:H0,sync:V0,tab:L0,tag:M0,tally:Z0,"tap-double":k0,"tap-single":y0,template:z0,tennis:B0,terminal:q0,terrain:X0,thermometer:I0,thermostat:S0,tikcode:Y0,time:j0,timelapse:A0,timer:U0,today:D0,"toggle-off":P0,"toggle-on":G0,"toggle-square-off":T0,"toggle-square":$0,"toolbar-bottom":O0,"toolbar-left":E0,"toolbar-right":F0,"toolbar-top":N0,toolbox:J0,touchpad:K0,track:Q0,transcript:R0,"trash-empty":W0,trash:_0,tree:os,trees:rs,trello:es,"trending-down":ns,trending:ts,trophy:is,tv:ls,twilio:ss,twitter:gs,"ui-kit":ps,umbrella:as,unavailable:ds,unblock:xs,undo:bs,unfold:hs,unsplash:cs,"usb-c":fs,usb:Cs,"user-add":ws,"user-list":us,"user-remove":vs,user:ms,userlane:Hs,"view-cols":Vs,"view-comfortable":Ls,"view-day":Ms,"view-grid":Zs,"view-list":ks,"view-month":ys,"view-split":zs,vinyl:Bs,"voicemail-o":qs,"voicemail-r":Xs,voicemail:Is,volume:Ss,webcam:Ys,website:js,windows:As,"work-alt":Us,yinyang:Ds,youtube:Ps,vercel:Gs,"zoom-in":Ts,"zoom-out":$s};var s=require("react/jsx-runtime");function Es({icon:r}){let e=a(),i=[r.name,...r.tags?r.tags.split(" "):[]],p={light:"#000000",dark:"#ffffff",adjustContrast:!0},h={source:`data:image/svg+xml;base64,${btoa(r.svg)}`,tintColor:p};return(0,s.jsx)(t.Grid.Item,{keywords:i,content:h,actions:(0,s.jsxs)(t.ActionPanel,{children:[(0,s.jsxs)(t.ActionPanel.Section,{title:"Options",children:[(0,s.jsx)(t.Action.Paste,{content:r.svg}),(0,s.jsx)(t.Action.CopyToClipboard,{title:"Copy to Clipboard",content:r.svg,shortcut:{modifiers:["cmd"],key:"c"}}),(0,s.jsx)(t.Action.OpenInBrowser,{url:`https://css.gg/icon/${r.name}`,shortcut:{modifiers:["shift"],key:"enter"}})]}),(0,s.jsx)(t.ActionPanel.Section,{title:"Author",children:(0,s.jsx)(t.Action.OpenInBrowser,{title:"Astrit",icon:{source:"https://github.com/astrit.png",mask:t.Image.Mask.Circle},url:"https://github.com/astrit"})})]})},e)}function z(){let[r,e]=(0,b.useState)([]),[i,p]=(0,b.useState)([]),[g,h]=(0,b.useState)("all");(0,b.useEffect)(()=>{let n=Object.values(v).flat();e(n),p(n)},[]);let m=[...new Set(i.flatMap(n=>n.tags?n.tags.split(" "):[]))];function H(n){return n.charAt(0).toUpperCase()+n.slice(1)}let B=m.sort().map(n=>{let d=r.filter(x=>x.tags&&x.tags.split(" ").includes(n)).sort((x,X)=>x.name.localeCompare(X.name)),q=`${d.length} ${d.length===1?"icon":"icons"}`;return{tag:n,section:(0,s.jsx)(t.Grid.Section,{title:H(n),subtitle:q,children:d.map(x=>(0,s.jsx)(Es,{icon:x},a()))},a())}}).filter(n=>n.tag===g||g==="all"||g==="pinned");return(0,s.jsx)(t.Grid,{navigationTitle:"Search Icons",inset:t.Grid.Inset.Large,columns:8,searchBarPlaceholder:"Search icons e.g chevron",searchBarAccessory:(0,s.jsx)(t.Grid.Dropdown,{tooltip:"Select Category",defaultValue:"all",onChange:n=>{n==="all"?(h(n),e(i)):(h(n),e(i.filter(d=>d.tags&&d.tags.split(" ").includes(n))))},value:g,filtering:!0,children:(0,s.jsxs)(t.Grid.Dropdown.Section,{title:"Categories",children:[(0,s.jsx)(t.Grid.Dropdown.Item,{title:"All",value:"all"},a()),m.sort().map(n=>(0,s.jsx)(t.Grid.Dropdown.Item,{title:`${H(n)}`,value:n,keywords:[n]},a()))]})}),children:B.map(n=>n.section)})}