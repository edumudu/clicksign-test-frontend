(function(e){function t(t){for(var r,a,u=t[0],l=t[1],s=t[2],i=0,f=[];i<u.length;i++)a=u[i],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return l.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-096c362b":"4e790387","chunk-974e8076":"2faede63","chunk-d17fce76":"8349e423"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-096c362b":1,"chunk-974e8076":1,"chunk-d17fce76":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-096c362b":"bee9ca4b","chunk-974e8076":"49b7e49d","chunk-d17fce76":"5a009c69"}[e]+".css",c=l.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===r||i===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],i=s.getAttribute("data-href");if(i===r||i===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=u(e);var f=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/clicksign-test-frontend/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0004":function(e,t,n){e.exports={wrapper:"AppInput_wrapper_EQHIt",label:"AppInput_label_1G0KB",field:"AppInput_field_3lXwE",secondary:"AppInput_secondary_1ryk1"}},"45c2":function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,c,o){return Object(r["x"])(),Object(r["d"])(Object(r["E"])(e.$attrs.to?"AppLink":"button"),{class:Object(r["p"])([e.$style.btn,e.classes]),type:"button"},{default:Object(r["N"])((function(){return[Object(r["C"])(e.$slots,"default")]})),_:3},8,["class"])}var c=n("ade3"),o=(n("caad"),n("ce46")),u=function(e){var t,n=e.outline,a=e.large,o=e.variant,u=Object(r["J"])(),l=(t={},Object(c["a"])(t,u[o.value],!0),Object(c["a"])(t,u.outline,n.value),Object(c["a"])(t,u.large,a.value),t);return{classes:l}},l=Object(r["j"])({name:"AppButton",components:{AppLink:o["a"]},props:{variant:{type:String,default:"primary",validator:function(e){return["primary","secondary"].includes(e)}},outline:Boolean,large:Boolean},setup:function(e){var t=Object(r["H"])(e),n=t.outline,a=t.large,c=t.variant,o=u({outline:n,large:a,variant:c}),l=o.classes;return{classes:l}}}),s=n("bdcb");const i=l.__cssModules={};i["$style"]=s["default"],l.render=a;t["a"]=l},"64ee":function(e,t,n){e.exports={btn:"AppButton_btn__SiIW",primary:"AppButton_primary_3RSBd",secondary:"AppButton_secondary_2z2ti",outline:"AppButton_outline_Uu7BK",large:"AppButton_large_1UpN_"}},"68f6":function(e,t,n){"use strict";var r=n("0004"),a=n.n(r);n.d(t,"default",(function(){return a.a}))},"7e7d":function(e,t,n){},"97f7":function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,c,o){return Object(r["x"])(),Object(r["f"])("label",{class:Object(r["p"])(["flex flex-col",[e.$style.wrapper,e.classes]]),style:Object(r["r"])(e.style)},[Object(r["O"])(Object(r["g"])("span",{class:Object(r["p"])(e.$style.label)},Object(r["G"])(e.label),3),[[r["L"],e.label]]),Object(r["O"])(Object(r["g"])("input",Object(r["n"])({ref:"field","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.innerValue=t}),type:"text",class:[e.$style.field,e.$style[e.variant]]},e.$attrs),null,16),[[r["K"],e.innerValue]])],6)}var c=n("5530"),o=(n("a9e3"),n("caad"),function(e,t){var n=Object(r["b"])({get:function(){return e.value},set:function(e){return t("update:modelValue",e)}});return{innerValue:n}}),u=function(e){var t=Object(r["A"])(null);return Object(r["v"])((function(){e.value&&t.value&&t.value.focus()})),{field:t}},l=Object(r["j"])({name:"AppInput",inheritAttrs:!1,props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},style:{type:[String,Object],default:""},class:{type:[String,Object,Array],default:""},variant:{type:String,default:"primary",validator:function(e){return["primary","secondary"].includes(e)}},autofocus:Boolean},setup:function(e,t){var n=t.emit,a=Object(r["H"])(e),l=a.modelValue,s=a.autofocus;return Object(c["a"])(Object(c["a"])(Object(c["a"])({},o(l,n)),u(s)),{},{classes:e.class})}}),s=n("68f6");const i=l.__cssModules={};i["$style"]=s["default"],l.render=a;t["a"]=l},ab0a:function(e,t,n){"use strict";var r=n("cba3"),a=n.n(r);n.d(t,"default",(function(){return a.a}))},bdcb:function(e,t,n){"use strict";var r=n("64ee"),a=n.n(r);n.d(t,"default",(function(){return a.a}))},cba3:function(e,t,n){e.exports={header:"TheHeader_header_25DqM",headerContactCreateText:"TheHeader_headerContactCreateText_3SN34",headerLogoWrapper:"TheHeader_headerLogoWrapper_1W0gs",searchField:"TheHeader_searchField_2PtFO"}},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){var u=Object(r["D"])("TheHeader"),l=Object(r["D"])("RouterView");return Object(r["x"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(u),Object(r["i"])(l)],64)}function c(e,t,n,a,c,o){var u=Object(r["D"])("LogoSvg"),l=Object(r["D"])("IconPlus"),s=Object(r["D"])("AppButton"),i=Object(r["D"])("AppInput");return Object(r["x"])(),Object(r["f"])("header",{class:Object(r["p"])(e.$style.header)},[Object(r["g"])("div",{class:Object(r["p"])(["mr-auto",e.$style.headerLogoWrapper])},[Object(r["i"])(u)],2),e.hasSearchedContact?(Object(r["x"])(),Object(r["d"])(s,{key:0,variant:"secondary",to:{name:"ContactCreate"}},{default:Object(r["N"])((function(){return[Object(r["i"])(l,{class:"font-md"}),Object(r["g"])("span",{class:Object(r["p"])(e.$style.headerContactCreateText)}," Criar contato ",2)]})),_:1})):Object(r["e"])("",!0),Object(r["i"])(i,{modelValue:e.searchString,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchString=t}),placeholder:"Buscar...",class:Object(r["p"])(["flex-1",e.$style.searchField]),variant:"secondary"},null,8,["modelValue","class"])],2)}var o=n("e6cc"),u=n("97f7"),l=n("45c2"),s=n("dea8"),i={xmlns:"http://www.w3.org/2000/svg",width:"147",height:"32"},f=Object(r["g"])("path",{d:"M20.628 0h5.666c.522 0 .946.42.946.938v25.437c0 2.784-2.04 5.095-4.72 5.545-.722.053-1.352.08-1.892.08H4.808a.942.942 0 01-.946-.938V27.53h-.639C1.446 27.53 0 26.096 0 24.335s1.446-3.194 3.223-3.194h.639v1.875h-.639c-.734 0-1.331.592-1.331 1.32 0 .727.597 1.318 1.331 1.318h.639v-2.638h3.903c.522 0 .946-.42.946-.937a.942.942 0 00-.946-.938H3.862v-1.947h-.639C1.446 19.194 0 17.761 0 16s1.446-3.194 3.223-3.194h.639v1.875h-.639c-.734 0-1.331.592-1.331 1.319s.597 1.32 1.331 1.32h.639v-2.64h3.903a.942.942 0 00.946-.937.942.942 0 00-.946-.937H3.862v-1.947h-.639C1.446 10.859 0 9.426 0 7.665S1.446 4.47 3.223 4.47h.639v1.875h-.639c-.734 0-1.331.591-1.331 1.319 0 .727.597 1.319 1.331 1.319h.639V6.346h3.903c.522 0 .946-.42.946-.938a.942.942 0 00-.946-.937H3.982C4.519 1.918 6.802 0 9.538 0h11.09zM16.15 17.333h-2.695l.18 1.979v4.402c0 2.016.442 3.457 1.326 4.322.884.865 2.142 1.297 3.773 1.297 3.4 0 5.1-1.85 5.1-5.55v-6.45H21.31v6.347c0 1.21-.196 2.123-.588 2.737-.392.614-1.055.92-1.988.92-.921 0-1.582-.318-1.983-.954-.4-.637-.6-1.538-.6-2.703v-6.347zm28.648 10.875c-6.261 0-10.075-3.605-10.075-10.573V3.733h2.59v13.798c0 5.754 2.728 8.389 7.485 8.389 4.793 0 7.521-2.635 7.521-8.39V3.734h2.519v13.902c0 6.968-3.778 10.573-10.04 10.573zM71.594 9.627c5.248 0 9.166 3.744 9.166 9.256 0 5.512-3.918 9.29-9.166 9.29-3.043 0-5.597-1.317-7.101-3.778V28h-2.379V2.277h2.484v10.955c1.54-2.357 4.058-3.605 6.996-3.605zm-.175 16.362c3.883 0 6.857-2.842 6.857-7.106 0-4.264-2.974-7.107-6.857-7.107-3.918 0-6.856 2.843-6.856 7.107s2.938 7.106 6.856 7.106zm21.934 2.184c-5.387 0-9.375-3.882-9.375-9.29 0-5.408 3.988-9.256 9.375-9.256 5.387 0 9.34 3.848 9.34 9.256s-3.953 9.29-9.34 9.29zm0-2.184c3.918 0 6.821-2.842 6.821-7.106 0-4.264-2.903-7.107-6.821-7.107-3.918 0-6.856 2.843-6.856 7.107s2.938 7.106 6.856 7.106zm21.934 2.184c-5.388 0-9.376-3.882-9.376-9.29 0-5.408 3.988-9.256 9.376-9.256 5.387 0 9.34 3.848 9.34 9.256s-3.953 9.29-9.34 9.29zm0-2.184c3.918 0 6.821-2.842 6.821-7.106 0-4.264-2.903-7.107-6.821-7.107-3.918 0-6.857 2.843-6.857 7.107s2.939 7.106 6.857 7.106zM143.937 28l-7.416-9.152-4.338 3.952V28h-2.484V2.277h2.484v17.438l10.984-9.95h3.079l-7.871 7.454L146.98 28h-3.043z",fill:"#FA7268"},null,-1),d=[f];function p(e,t){return Object(r["x"])(),Object(r["f"])("svg",i,d)}const b={};b.render=p;var h=b,v=Object(r["j"])({name:"TheHeader",components:{AppInput:u["a"],AppButton:l["a"],IconPlus:s["a"],LogoSvg:h},setup:function(){var e=Object(o["a"])(),t=e.searchString,n=e.hasSearchedContact;return{hasSearchedContact:n,searchString:t}}}),O=n("ab0a");const j=v.__cssModules={};j["$style"]=O["default"],v.render=c;var g=v,m=Object(r["j"])({name:"App",components:{TheHeader:g}});m.render=a;var y=m,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),C=[{path:"/",name:"ContactIndex",component:function(){return n.e("chunk-974e8076").then(n.bind(null,"1cf6"))},children:[{path:"/contact/create",name:"ContactCreate",component:function(){return n.e("chunk-096c362b").then(n.bind(null,"4258"))}},{path:"/contact/edit/:contactId",name:"ContactEdit",component:function(){return n.e("chunk-096c362b").then(n.bind(null,"4258"))}},{path:"/contact/delete/:contactId",name:"ContactDelete",component:function(){return n.e("chunk-d17fce76").then(n.bind(null,"6773"))}}]}],S=Object(_["b"])({history:Object(_["c"])("/clicksign-test-frontend/"),routes:C}),w=S,k=(n("7e7d"),Object(r["c"])(y));k.use(w),k.mount("#app")},ce46:function(e,t,n){"use strict";var r=n("7a23"),a=["href"];function c(e,t,n,c,o,u){var l=Object(r["D"])("RouterLink");return e.isExternal?(Object(r["x"])(),Object(r["f"])("a",{key:0,target:"_blank",rel:"noopener noreferrer",href:e.to},[Object(r["C"])(e.$slots,"default")],8,a)):(Object(r["x"])(),Object(r["d"])(l,Object(r["q"])(Object(r["n"])({key:1},e.$props)),{default:Object(r["N"])((function(){return[Object(r["C"])(e.$slots,"default")]})),_:3},16))}var o=n("5530"),u=(n("2ca0"),n("6c02")),l=Object(r["j"])({name:"AppLink",props:Object(o["a"])({},u["a"].props),setup:function(e){var t=Object(r["b"])((function(){return e.to&&"string"===typeof e.to&&e.to.startsWith("http")}));return{isExternal:t}}});l.render=c;t["a"]=l},dea8:function(e,t,n){"use strict";var r=n("7a23"),a={xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 16 16"},c=Object(r["g"])("path",{fill:"currentColor",d:"M16 7.238H8.762V0H7.238v7.238H0v1.524h7.238V16h1.524V8.762H16z"},null,-1),o=[c];function u(e,t){return Object(r["x"])(),Object(r["f"])("svg",a,o)}const l={};l.render=u;t["a"]=l},e6cc:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("5530"),a=n("2909"),c=(n("99af"),n("7db0"),n("ac1f"),n("841c"),n("4de4"),n("b0c0"),n("caad"),n("2532"),n("7a23")),o=n("6c02"),u=(n("d81d"),n("d4ec")),l=n("262e"),s=n("2caf"),i=n("9072"),f=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(e){var r;return Object(u["a"])(this,n),r=t.call(this,"Table ".concat(e," not found")),r.name="TableNotFound",r}return n}(Object(i["a"])(Error)),d=function(e){localStorage.getItem(e)||localStorage.setItem(e,JSON.stringify([]))},p=function(e){var t=localStorage.getItem(e);if(!t)throw new f(e);return JSON.parse(t)},b=function(e,t){var n=p(e),c=n[n.length-1],o=Object(r["a"])(Object(r["a"])({},t),{},{id:c?c.id+1:1});return localStorage.setItem(e,JSON.stringify([].concat(Object(a["a"])(n),[o]))),o},h=function(e,t,n){var a=p(e),c=a.map((function(e){return e.id===t?Object(r["a"])(Object(r["a"])({},e),n):e}));localStorage.setItem(e,JSON.stringify(c))},v=function(e,t){var n=p(e),r=n.filter((function(e){return e.id!==t}));localStorage.setItem(e,JSON.stringify(r))},O="contacts",j=Object(c["A"])([]),g=function(){var e=Object(o["d"])(),t=Object(o["e"])();d(O);var n=function(){return j.value=p(O),j.value},u=function(e){var t=b(O,e);return j.value=[].concat(Object(a["a"])(j.value),[t]),t},l=function(e,t){h(O,e,t),n()},s=function(e){v(O,e),n()},i=function(e){var t=j.value.find((function(t){return t.id===e}));return t?Object(r["a"])({},t):null},f=Object(c["b"])({get:function(){return Array.isArray(e.query.search)?e.query.search[0]||"":e.query.search||""},set:function(e){t.push({query:{search:e}})}}),g=Object(c["b"])((function(){return j.value.filter((function(e){var t=e.name;return t.toLowerCase().includes(f.value.toLowerCase())}))})),m=Object(c["b"])((function(){return j.value.length>0})),y=Object(c["b"])((function(){return g.value.length>0}));return{contacts:j,fetchContacts:n,createContact:u,updateContact:l,deleteContact:s,findContact:i,hasContact:m,searchString:f,searchedContacts:g,hasSearchedContact:y}}}});
//# sourceMappingURL=app-legacy.f4826c6f.js.map