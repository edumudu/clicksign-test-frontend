(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d17fce76"],{"61a8":function(e,t,n){"use strict";var c=n("6def"),o=n.n(c);n.d(t,"default",(function(){return o.a}))},6773:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=Object(c["h"])(" Excluir contato "),a=Object(c["h"])(" Deseja realmente excluir o contato? "),s=Object(c["h"])(" Cancelar "),r=Object(c["h"])(" Excluir ");function u(e,t,n,u,i,l){var d=Object(c["D"])("AppButton"),b=Object(c["D"])("BaseModal");return Object(c["x"])(),Object(c["d"])(b,{onClose:e.onCancel},{header:Object(c["N"])((function(){return[o]})),actions:Object(c["N"])((function(){return[Object(c["g"])("div",{class:Object(c["p"])(["flex justify-end",e.$style.actions])},[Object(c["i"])(d,{outline:"",onClick:e.onCancel},{default:Object(c["N"])((function(){return[s]})),_:1},8,["onClick"]),Object(c["i"])(d,{onClick:Object(c["P"])(e.onDelete,["prevent"])},{default:Object(c["N"])((function(){return[r]})),_:1},8,["onClick"])],2)]})),default:Object(c["N"])((function(){return[a]})),_:1},8,["onClose"])}n("a9e3");var i=n("6c02"),l=n("e6cc"),d=n("c1ec"),b=n("45c2"),j=Object(c["j"])({name:"PageContactDelete",components:{BaseModal:d["a"],AppButton:b["a"]},setup:function(){var e=Object(i["e"])(),t=Object(i["d"])(),n=Object(l["a"])(),c=n.deleteContact,o=function(){e.push({name:"ContactIndex"})},a=function(){c(Number(t.params.contactId)),e.push({name:"ContactIndex"})};return{onCancel:o,onDelete:a}}}),O=n("61a8");const f=j.__cssModules={};f["$style"]=O["default"],j.render=u;t["default"]=j},"6def":function(e,t,n){e.exports={actions:"ContactDelete_actions_2BrbO"}},9038:function(e,t,n){"use strict";var c=n("eca3"),o=n.n(c);n.d(t,"default",(function(){return o.a}))},c1ec:function(e,t,n){"use strict";var c=n("7a23");function o(e,t,n,o,a,s){return Object(c["x"])(),Object(c["f"])("div",{class:Object(c["p"])(e.$style.wrapper),onClick:t[1]||(t[1]=Object(c["P"])((function(){return e.onClose&&e.onClose.apply(e,arguments)}),["prevent"]))},[Object(c["g"])("div",{class:Object(c["p"])(e.$style.content),onClick:t[0]||(t[0]=Object(c["P"])((function(){}),["stop"]))},[Object(c["g"])("div",{class:Object(c["p"])(e.$style.header)},[Object(c["C"])(e.$slots,"header")],2),Object(c["g"])("div",{class:Object(c["p"])(e.$style.body)},[Object(c["C"])(e.$slots,"default")],2),Object(c["g"])("div",{class:Object(c["p"])(e.$style.actions)},[Object(c["C"])(e.$slots,"actions")],2)],2)],2)}var a=n("5530"),s=(n("caad"),n("2532"),n("b64b"),function(e){var t=function(){e("close")};return{onClose:t}}),r=function(e){var t=s(e),n=t.onClose,o={Escape:n,Esc:n},a=function(e){var t=e.key;if(Object.keys(o).includes(t)){var n=o[t];n()}};window.addEventListener("keydown",a),Object(c["t"])((function(){window.removeEventListener("keydown",a)}))},u=Object(c["j"])({name:"BaseModal",emits:["close"],setup:function(e,t){var n=t.emit;return r(n),Object(a["a"])({},s(n))}}),i=n("9038");const l=u.__cssModules={};l["$style"]=i["default"],u.render=o;t["a"]=u},eca3:function(e,t,n){e.exports={wrapper:"BaseModal_wrapper_sRMm6",content:"BaseModal_content_in3Lt",body:"BaseModal_body_3egYP",header:"BaseModal_header_1o-Pl",actions:"BaseModal_actions_47NaU"}}}]);
//# sourceMappingURL=chunk-d17fce76-legacy.8349e423.js.map