(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f2cd2c2"],{4258:function(e,t,c){"use strict";c.r(t);var n=c("7a23");const a=Object(n["h"])(" Criar novo contato "),o={class:"flex flex-col"},l=Object(n["h"])(" Cancelar "),s=Object(n["h"])(" Salvar ");function u(e,t,c,u,d,i){const b=Object(n["D"])("AppInput"),r=Object(n["D"])("AppButton"),j=Object(n["D"])("BaseModal");return Object(n["x"])(),Object(n["f"])("form",{onSubmit:t[3]||(t[3]=Object(n["P"])((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"]))},[Object(n["i"])(j,{onClose:e.onCancel},{header:Object(n["N"])(()=>[a]),actions:Object(n["N"])(()=>[Object(n["g"])("div",{class:Object(n["p"])(["flex justify-end",e.$style.actions])},[Object(n["i"])(r,{outline:"",onClick:e.onCancel},{default:Object(n["N"])(()=>[l]),_:1},8,["onClick"]),Object(n["i"])(r,{type:"submit",disabled:!e.canSubmit},{default:Object(n["N"])(()=>[s]),_:1},8,["disabled"])],2)]),default:Object(n["N"])(()=>[Object(n["g"])("div",o,[Object(n["i"])(b,{modelValue:e.contact.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.contact.name=t),label:"Nome",autofocus:""},null,8,["modelValue"]),Object(n["i"])(b,{modelValue:e.contact.email,"onUpdate:modelValue":t[1]||(t[1]=t=>e.contact.email=t),label:"E-mail",type:"email"},null,8,["modelValue"]),Object(n["i"])(b,{modelValue:e.contact.phone,"onUpdate:modelValue":t[2]||(t[2]=t=>e.contact.phone=t),label:"Telefone",type:"tel",class:Object(n["p"])(e.$style.phoneField)},null,8,["modelValue","class"])])]),_:1},8,["onClose"])],32)}var d=c("6c02"),i=c("e6cc"),b=c("c1ec"),r=c("97f7"),j=c("45c2");const O=e=>{const t=Object(d["e"])(),c=Object(d["d"])(),{createContact:a,findContact:o,updateContact:l}=Object(i["a"])(),s=Object(n["b"])(()=>Number(c.params.contactId)),u=Object(n["b"])(()=>!!s.value),b=Object(n["A"])(u.value&&o(s.value)||{name:"",email:"",phone:""}),r=Object(n["b"])(()=>Object.values(b.value).some(Boolean)),j=()=>{let c=null;u.value?l(Number(s.value),b.value):c=a(b.value).id,e("highlight-id",c),t.push({name:"ContactIndex"})},O=()=>{t.push({name:"ContactIndex"})};return{contact:b,canSubmit:r,onSubmit:j,onCancel:O}};var p=Object(n["j"])({name:"PageContactCreate",components:{BaseModal:b["a"],AppInput:r["a"],AppButton:j["a"]},setup(e,{emit:t}){return{...O(t)}}}),m=c("7351");const f=p.__cssModules={};f["$style"]=m["default"],p.render=u;t["default"]=p},7351:function(e,t,c){"use strict";var n=c("9210"),a=c.n(n);c.d(t,"default",(function(){return a.a}))},9038:function(e,t,c){"use strict";var n=c("eca3"),a=c.n(n);c.d(t,"default",(function(){return a.a}))},9210:function(e,t,c){e.exports={actions:"ContactCreateOrEdit_actions_2hlfQ",phoneField:"ContactCreateOrEdit_phoneField_2b395"}},c1ec:function(e,t,c){"use strict";var n=c("7a23");function a(e,t,c,a,o,l){return Object(n["x"])(),Object(n["f"])("div",{class:Object(n["p"])(e.$style.wrapper),onClick:t[1]||(t[1]=Object(n["P"])((...t)=>e.onClose&&e.onClose(...t),["prevent"]))},[Object(n["g"])("div",{class:Object(n["p"])(e.$style.content),onClick:t[0]||(t[0]=Object(n["P"])(()=>{},["stop"]))},[Object(n["g"])("div",{class:Object(n["p"])(e.$style.header)},[Object(n["C"])(e.$slots,"header")],2),Object(n["g"])("div",{class:Object(n["p"])(e.$style.body)},[Object(n["C"])(e.$slots,"default")],2),Object(n["g"])("div",{class:Object(n["p"])(e.$style.actions)},[Object(n["C"])(e.$slots,"actions")],2)],2)],2)}const o=e=>{const t=()=>{e("close")};return{onClose:t}},l=e=>{const{onClose:t}=o(e),c={Escape:t,Esc:t},a=e=>{const{key:t}=e;if(!Object.keys(c).includes(t))return;const n=c[t];n()};window.addEventListener("keydown",a),Object(n["t"])(()=>{window.removeEventListener("keydown",a)})};var s=Object(n["j"])({name:"BaseModal",emits:["close"],setup(e,{emit:t}){return l(t),{...o(t)}}}),u=c("9038");const d=s.__cssModules={};d["$style"]=u["default"],s.render=a;t["a"]=s},eca3:function(e,t,c){e.exports={wrapper:"BaseModal_wrapper_sRMm6",content:"BaseModal_content_in3Lt",body:"BaseModal_body_3egYP",header:"BaseModal_header_1o-Pl",actions:"BaseModal_actions_47NaU"}}}]);
//# sourceMappingURL=chunk-2f2cd2c2.3ef0f387.js.map