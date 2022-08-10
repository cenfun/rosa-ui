!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("rosa-ui"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define("rosa-ui-app",["rosa-ui","react","react-dom"],t):"object"==typeof exports?exports["rosa-ui-app"]=t(require("rosa-ui"),require("react"),require("react-dom")):e["rosa-ui-app"]=t(e["rosa-ui"],e.React,e.ReactDOM)}(self,((e,t,n)=>(()=>{var l={952:(e,t,n)=>{var l={"./button.js":192,"./checkbox.js":640,"./flex.js":325,"./flyover.js":540,"./select.js":981,"./switch.js":739};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}o.keys=function(){return Object.keys(l)},o.resolve=r,e.exports=o,o.id=952},192:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var l=n(359),o=n.n(l),r=n(380);const a=()=>{const{RuiButton:e,RuiFlex:t}=r.components,[n,a]=(0,l.useState)(0),i=e=>t=>{a(n+e)};return o().createElement(t,{spacing:"10px"},o().createElement(e,{label:"Label + ".concat(n),onClick:i(1)}),o().createElement(e,{onClick:i(-1)},o().createElement("b",null,"Slot")," - ",n),o().createElement(e,{disabled:!0},"Disabled"),o().createElement(e,{primary:!0,tooltip:"This is Button tooltip"},"Button Primary"))}},640:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var l=n(359),o=n.n(l),r=n(380);const a=()=>{const{RuiCheckbox:e,RuiFlex:t}=r.components,n=(0,l.useState)(!0),[a,i]=n;return o().createElement(t,{spacing:"10px"},o().createElement(e,null,"Checkbox"),o().createElement(e,{checked:a,onChange:e=>{i(e.target.checked)}},"checked ","".concat(a)),o().createElement(e,{model:n},"v-model"),o().createElement(e,{model:n,disabled:!0},"Disabled ","".concat(a)),o().createElement(e,null),o().createElement(e,{label:"Label ".concat(a)}),o().createElement(e,null,"this label is long! this label is long! this label is long! this label is long! this label is long! this label is long! this label is long! this label is long! this label is long!"))}},325:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var l=n(359),o=n.n(l),r=n(380);const a=()=>{const{RuiButton:e,RuiSelect:t,RuiSwitch:n,RuiFlex:a}=r.components,i=(0,l.useState)("column"),c=i[0],u=(0,l.useState)(!1),s=u[0],d=(0,l.useState)("5px"),m=d[0],p=(0,l.useState)("300px"),g=p[0],E=(0,l.useState)("200px"),h=E[0];return o().createElement(a,{spacing:"10px"},o().createElement(a,{spacing:"10px",direction:"column"},o().createElement(t,{model:i},o().createElement("option",null,"row"),o().createElement("option",null,"column")),o().createElement(n,{model:u},"center"),o().createElement(t,{model:d},o().createElement("option",null),o().createElement("option",null,"5px"),o().createElement("option",null,"10px"),o().createElement("option",null,"15px"),o().createElement("option",null,"20px")),o().createElement(t,{model:p},o().createElement("option",null,"100px"),o().createElement("option",null,"200px"),o().createElement("option",null,"300px"),o().createElement("option",null,"30%")),o().createElement(t,{model:E},o().createElement("option",null,"100px"),o().createElement("option",null,"200px"),o().createElement("option",null,"300px"))),o().createElement(a,{direction:c,center:s,spacing:m,width:g,height:h,className:"rui-demo-flex-item"},o().createElement(e,null,"Button"),o().createElement("span",null,"span"),o().createElement("button",null,"Button"),o().createElement("div",null,"div")),o().createElement(a,{direction:c,center:s,spacing:m,width:g,height:h,className:"rui-demo-flex-item"},o().createElement(e,null,"Button"),o().createElement("div",{className:"rui-flex-auto",style:{background:"#eee"}},o().createElement("span",null,"auto"),o().createElement("button",null,"Button")),o().createElement("div",null,"div")),o().createElement(a,{direction:c,center:s,spacing:m,width:g,height:h,className:"rui-demo-flex-item"},o().createElement(e,null,"Button"),o().createElement("span",null,"span"),o().createElement("div",{className:"rui-flex-empty",style:{background:"#eee"}},"empty"),o().createElement("button",null,"Button"),o().createElement("div",null,"div")))}},540:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var l=n(359),o=n.n(l),r=n(380);const a=()=>{const{RuiButton:e,RuiFlex:t,RuiSelect:n}=r.components,[a,i]=(0,l.useState)(!1),c=(0,l.useState)("30%"),u=(0,l.useState)("right"),s=e=>t=>{i(e)};return o().createElement(t,{spacing:"10px"},"left"===u[0]&&o().createElement("div",{className:"rui-flex-empty"}),o().createElement(n,{model:c},o().createElement("option",null,"30%"),o().createElement("option",null,"50%"),o().createElement("option",null,"60%"),o().createElement("option",null,"100px")),o().createElement(n,{model:u},o().createElement("option",null,"right"),o().createElement("option",null,"left")),o().createElement(e,{onClick:s(!a)},"Toggle"),o().createElement(e,{onClick:s(!0)},"Show"),o().createElement(e,{onClick:s(!1)},"Hide"),"right"===u[0]&&o().createElement("div",{className:"rui-flex-empty"}))}},981:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var l=n(359),o=n.n(l),r=n(380);const a=()=>{const{RuiSelect:e,RuiFlex:t}=r.components,n=(0,l.useState)("STG"),a=["","DEV","QA","STG","LOCAL"],[i,c]=(0,l.useState)(["","Short","Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long","I'm a really long string that I'm going to use to test the ellipsis functionality","QA"]),u=e=>{console.log("onSelectRemove",e);const t=e.value;c((e=>e.filter((e=>e.label!==t))))};return o().createElement(t,{spacing:"10px",direction:"column"},o().createElement(t,{spacing:"10px"},o().createElement(e,{model:n,label:"prop options:",options:[{label:"One"},{label:"Two"},{label:"Three"}]}),o().createElement(e,{label:"slot options:",onRemove:u},o().createElement("option",null,"option 1"),o().createElement("option",null,"option 2"),o().createElement("option",{value:"3"},"option 3"),o().createElement("option",null,o().createElement("b",null,"bold")," text"),o().createElement("option",{label:"attr removable",value:"attr",removable:!0}),o().createElement("option",null,"text"),o().createElement("option",null,"One"),o().createElement("option",null,"Two")),o().createElement(e,{model:n,disabled:!0,label:"Disabled:"},o().createElement("option",null,"Two"),o().createElement("option",null,"STG")),o().createElement(e,{label:"empty list:"}),o().createElement(e,{label:"empty value:"},o().createElement("div",null))),o().createElement(t,{spacing:"10px"},o().createElement(e,{model:n,label:"Select:",options:a}),o().createElement(e,{model:n,label:"200 width:",width:"200px",options:a}),o().createElement(e,{model:n,label:"Disabled:",options:a,disabled:!0}),o().createElement("div",{className:"rui-flex-empty"}),o().createElement(e,{model:n,width:"60px",label:"Right width 60:"},o().createElement("option",null),o().createElement("option",null,"5"),o().createElement("option",null,"10"),o().createElement("option",null,"long test long test long test long"),o().createElement("option",null,"long test long test long test long test long test"))),o().createElement(t,{spacing:"10px"},o().createElement(e,{model:n,label:"max width:"},o().createElement("option",null),o().createElement("option",null,"dddddddddd ddddddddddddddddd ddddddddddddd5"),o().createElement("option",null,"10ddddd ddddddddddd"),o().createElement("option",null,"15ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"),o().createElement("option",null,"20ddddddd ddddddddddd long test long test long test long test long test long test long test")),o().createElement("div",{className:"rui-flex-empty"}),o().createElement(e,{model:n,label:"Right:"},o().createElement("option",null),o().createElement("option",null,"5"),o().createElement("option",null,"10"),o().createElement("option",null,"long test long test long test long"),o().createElement("option",null,"long test long test long test long test long test"))),o().createElement(t,{spacing:"10px"},o().createElement(e,{model:n,label:"Input:",options:i,searchable:!0,onSearch:e=>{const t=e.target.value;if(!t)return;const n=Math.ceil(30*Math.random()),l=[];let o=0;for(;o<n;){const e=[t];e.length=Math.ceil(12*Math.random());const n=e.join(" Text");l.push({label:"".concat(o+1,", ").concat(n),removable:!0}),o++}c(l)},onRemove:u}),o().createElement(e,{model:n,label:"100 width (no onSearch):",width:"100px",options:i,searchable:!0,onRemove:u})))}},739:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var l=n(359),o=n.n(l),r=n(380);const a=()=>{const{RuiFlex:e,RuiSwitch:t}=r.components,n=(0,l.useState)(!1),a=n[0];return o().createElement(e,{spacing:"10px"},o().createElement(t,{model:n},"switch:"),o().createElement(t,{checked:!0},"checked:"),o().createElement(t,{model:n,disabled:!0},"disabled:"),o().createElement(t,{colors:"darkred, green"},"colors:"),o().createElement(t,{model:n,width:"28px",height:"16px",colors:",green"},"small:"),o().createElement(t,{model:n,tooltip:"This is switch tooltip"}),o().createElement(t,{width:"45px",height:"24px",checked:!0},"large: ","".concat(a)))}},440:(e,t,n)=>{var l=n(550),o=n(45),r=n(669),a=n(398),i=o(l),c=r(a);i.push([e.id,"html,body{margin:0;padding:0;width:100%;height:100%;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#333}.rui-app{width:100%;height:100%;position:relative}.rui-header{padding:5px 10px;background:#f5f5f5;border-bottom:1px solid #ccc;box-sizing:border-box}.rui-title{height:30px;line-height:30px;font-size:16px;font-weight:bold}.rui-sub{padding-left:10px;color:#666;height:30px;line-height:30px;flex:1}.icon-github{display:block;margin-right:5px;width:26px;height:26px;background-repeat:no-repeat;background-position:center center;background-size:26px 26px;background-image:url("+c+");opacity:.6}.icon-github:hover{opacity:1}.rui-body{overflow-y:auto;padding:10px}.rui-item{border-bottom:1px dotted #ccc;padding:5px}.rui-item-name{width:99px;padding:5px 5px 5px 0;overflow:hidden;color:#000}.rui-item-example{border-left:1px solid #ccc;padding:5px 5px 5px 10px}.rui-demo-flex-item{background:#ccc}",""]),e.exports=i},45:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",l=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),l&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),l&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,l,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(l)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);l&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},669:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},550:e=>{"use strict";e.exports=function(e){return e[1]}},978:(e,t,n)=>{var l=n(924),o=n(668),r=n(153),a=n(708),i=n(130),c=n(440);c=c.__esModule?c.default:c;var u={attributes:{context:"rosa-ui-app"}};u.setAttributes=a,u.insert=r.bind(null,"head"),u.domAPI=o,u.insertStyleElement=i;l(c,u);e.exports=c&&c.locals||{}},924:e=>{"use strict";var t=[];function n(e){for(var n=-1,l=0;l<t.length;l++)if(t[l].identifier===e){n=l;break}return n}function l(e,l){for(var r={},a=[],i=0;i<e.length;i++){var c=e[i],u=l.base?c[0]+l.base:c[0],s=r[u]||0,d="".concat(u," ").concat(s);r[u]=s+1;var m=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var g=o(p,l);l.byIndex=i,t.splice(i,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=l(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var i=n(r[a]);t[i].references--}for(var c=l(e,o),u=0;u<r.length;u++){var s=n(r[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=c}}},153:e=>{"use strict";var t={};e.exports=function(e,n){var l=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}},130:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},708:e=>{"use strict";e.exports=function(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}},668:e=>{"use strict";var t,n=(t=[],function(e,n){return t[e]=n,t.filter(Boolean).join("\n")});function l(e,t,l,o){var r;if(l)r="";else{r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var a=void 0!==o.layer;a&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,a&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}")}if(e.styleSheet)e.styleSheet.cssText=n(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}var o={singleton:null,singletonCounter:0};e.exports=function(e){var t=o.singletonCounter++,n=o.singleton||(o.singleton=e.insertStyleElement(e));return{update:function(e){l(n,t,!1,e)},remove:function(e){l(n,t,!0,e)}}}},398:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9ImN1cnJlbnRDb2xvciI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAwQzUuMzcgMCAwIDUuMzcgMCAxMmMwIDUuMzEgMy40MzUgOS43OTUgOC4yMDUgMTEuMzg1LjYuMTA1LjgyNS0uMjU1LjgyNS0uNTcgMC0uMjg1LS4wMTUtMS4yMy0uMDE1LTIuMjM1LTMuMDE1LjU1NS0zLjc5NS0uNzM1LTQuMDM1LTEuNDEtLjEzNS0uMzQ1LS43Mi0xLjQxLTEuMjMtMS42OTUtLjQyLS4yMjUtMS4wMi0uNzgtLjAxNS0uNzk1Ljk0NS0uMDE1IDEuNjIuODcgMS44NDUgMS4yMyAxLjA4IDEuODE1IDIuODA1IDEuMzA1IDMuNDk1Ljk5LjEwNS0uNzguNDItMS4zMDUuNzY1LTEuNjA1LTIuNjctLjMtNS40Ni0xLjMzNS01LjQ2LTUuOTI1IDAtMS4zMDUuNDY1LTIuMzg1IDEuMjMtMy4yMjUtLjEyLS4zLS41NC0xLjUzLjEyLTMuMTggMCAwIDEuMDA1LS4zMTUgMy4zIDEuMjMuOTYtLjI3IDEuOTgtLjQwNSAzLS40MDVzMi4wNC4xMzUgMyAuNDA1YzIuMjk1LTEuNTYgMy4zLTEuMjMgMy4zLTEuMjMuNjYgMS42NS4yNCAyLjg4LjEyIDMuMTguNzY1Ljg0IDEuMjMgMS45MDUgMS4yMyAzLjIyNSAwIDQuNjA1LTIuODA1IDUuNjI1LTUuNDc1IDUuOTI1LjQzNS4zNzUuODEgMS4wOTUuODEgMi4yMiAwIDEuNjA1LS4wMTUgMi44OTUtLjAxNSAzLjMgMCAuMzE1LjIyNS42OS44MjUuNTdBMTIuMDIgMTIuMDIgMCAwIDAgMjQgMTJjMC02LjYzLTUuMzctMTItMTItMTJ6Ii8+PC9nPjwvc3ZnPg=="},380:t=>{"use strict";t.exports=e},359:e=>{"use strict";e.exports=t},318:e=>{"use strict";e.exports=n}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,exports:{}};return l[e](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";r.r(a);var e=r(380),t=r(359),n=r.n(t),l=r(318),o=r.n(l);r(978);console.log("components",e.components);const i=document.createElement("div");i.className="rui-app",document.body.appendChild(i);const c=o().createRoot(i),{RuiFlex:u}=e.components,s=r(952),d=[];s.keys().forEach((e=>{const t=e.split("/").pop().split(".").shift(),n="".concat(t).trim().replace(/(^\w|-\w)/g,(function(e){return e.replace(/-/,"").toUpperCase()}));const l=s(e).default;d.push({name:"Rui".concat(n),Demo:l})})),console.log("demos",d),c.render(n().createElement(t.StrictMode,null,n().createElement(u,{direction:"column"},n().createElement("div",{className:"rui-header rui-flex-row"},n().createElement("div",{className:"rui-title"},"Rosa UI"),n().createElement("div",{className:"rui-sub"},"Based on ",n().createElement("a",{href:"https://github.com/facebook/react/",target:"_blank",rel:"noreferrer"},"React")),n().createElement("div",null,n().createElement("a",{href:"https://github.com/cenfun/rosa-ui",target:"_blank",className:"icon-github",rel:"noreferrer"}))),n().createElement("div",{className:"rui-body rui-flex-auto"},d.map(((e,t)=>{const l=e.Demo;return n().createElement("div",{key:t,className:"rui-item rui-flex-row"},n().createElement("div",{className:"rui-item-name"},e.name),n().createElement("div",{className:"rui-item-example rui-flex-auto"},n().createElement(l,null)))}))))))})(),a})()));
//# sourceMappingURL=rosa-ui-app.js.map