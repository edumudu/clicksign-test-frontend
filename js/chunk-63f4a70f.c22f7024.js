(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63f4a70f"],{"61a8":function(e,t,c){"use strict";var n=c("6def"),o=c.n(n);c.d(t,"default",(function(){return o.a}))},6773:function(e,t,c){"use strict";c.r(t);var n=c("7a23");const o=Object(n["h"])(" Excluir contato "),s=Object(n["h"])(" Deseja realmente excluir o contato? "),a=Object(n["h"])(" Cancelar "),l=Object(n["h"])(" Excluir ");function r(e,t,c,r,d,i){const b=Object(n["D"])("AppButton"),u=Object(n["D"])("BaseModal");return Object(n["x"])(),Object(n["d"])(u,{onClose:e.onCancel},{header:Object(n["N"])(()=>[o]),actions:Object(n["N"])(()=>[Object(n["g"])("div",{class:Object(n["p"])(["flex justify-end",e.$style.actions])},[Object(n["i"])(b,{outline:"",onClick:e.onCancel},{default:Object(n["N"])(()=>[a]),_:1},8,["onClick"]),Object(n["i"])(b,{onClick:Object(n["P"])(e.onDelete,["prevent"])},{default:Object(n["N"])(()=>[l]),_:1},8,["onClick"])],2)]),default:Object(n["N"])(()=>[s]),_:1},8,["onClose"])}var d=c("6c02"),i=c("e6cc"),b=c("c1ec"),u=c("45c2"),j=Object(n["j"])({name:"PageContactDelete",components:{BaseModal:b["a"],AppButton:u["a"]},setup(){const e=Object(d["e"])(),t=Object(d["d"])(),{deleteContact:c}=Object(i["a"])(),n=()=>{e.push({name:"ContactIndex"})},o=()=>{c(Number(t.params.contactId)),e.push({name:"ContactIndex"})};return{onCancel:n,onDelete:o}}}),O=c("61a8");const p=j.__cssModules={};p["$style"]=O["default"],j.render=r;t["default"]=j},"6def":function(e,t,c){e.exports={actions:"ContactDelete_actions_2BrbO"}},9038:function(e,t,c){"use strict";var n=c("eca3"),o=c.n(n);c.d(t,"default",(function(){return o.a}))},c1ec:function(e,t,c){"use strict";var n=c("7a23");function o(e,t,c,o,s,a){return Object(n["x"])(),Object(n["f"])("div",{class:Object(n["p"])(e.$style.wrapper),onClick:t[1]||(t[1]=Object(n["P"])((...t)=>e.onClose&&e.onClose(...t),["prevent"]))},[Object(n["g"])("div",{class:Object(n["p"])(e.$style.content),onClick:t[0]||(t[0]=Object(n["P"])(()=>{},["stop"]))},[Object(n["g"])("div",{class:Object(n["p"])(e.$style.header)},[Object(n["C"])(e.$slots,"header")],2),Object(n["g"])("div",{class:Object(n["p"])(e.$style.body)},[Object(n["C"])(e.$slots,"default")],2),Object(n["g"])("div",{class:Object(n["p"])(e.$style.actions)},[Object(n["C"])(e.$slots,"actions")],2)],2)],2)}const s=e=>{const t=()=>{e("close")};return{onClose:t}},a=e=>{const{onClose:t}=s(e),c={Escape:t,Esc:t},o=e=>{const{key:t}=e;if(!Object.keys(c).includes(t))return;const n=c[t];n()};window.addEventListener("keydown",o),Object(n["t"])(()=>{window.removeEventListener("keydown",o)})};var l=Object(n["j"])({name:"BaseModal",emits:["close"],setup(e,{emit:t}){return a(t),{...s(t)}}}),r=c("9038");const d=l.__cssModules={};d["$style"]=r["default"],l.render=o;t["a"]=l},eca3:function(e,t,c){e.exports={wrapper:"BaseModal_wrapper_sRMm6",content:"BaseModal_content_in3Lt",body:"BaseModal_body_3egYP",header:"BaseModal_header_1o-Pl",actions:"BaseModal_actions_47NaU"}}}]);
//# sourceMappingURL=chunk-63f4a70f.c22f7024.js.map