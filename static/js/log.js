!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";function o(e){return new Array(6).join("00").match(/../g).concat(e.toString(16).match(/.{1,2}/g)).reverse().slice(0,6).reverse().join(":").toUpperCase()}function r(e){let t=function(e){let t=new Date(1970,0,1);return t.setSeconds(e),t}(e),n=6e4*t.getTimezoneOffset();t.setTime(t.getTime()-n);return t.toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"numeric",timezone:"Moskow",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})}function i(e,t){["success","error","info"].includes(t)||(t="info");let n=document.createElement("div");n.className="notification "+t,n.innerHTML=e,document.body.appendChild(n),setTimeout(()=>document.body.removeChild(n),2e3)}function l(e,t=null,n=null,o=null,r=null){let i=document.createElement(e);if(!i)return null;if(n&&(i.className=n),o&&(i.id=o),r)for(var l in r)r.hasOwnProperty(l)&&i.setAttribute(l,r[l]);return(t instanceof Element||t instanceof HTMLDocument)&&t?t.appendChild(i):i}n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return l}))},,,function(e,t,n){"use strict";n.r(t);n(4);var o=n(0);document.addEventListener("DOMContentLoaded",(function(){!function(e){let t=document.getElementById("log_list");t.innerHTML="";let n=0,r=0,i=0,l=0;const u=document.getElementById("loader"),c=document.querySelector(".pie");u.style.display="block",c.style.display="none",fetch("/api/get_log?hwId="+e).then(e=>e.json()).then(e=>{let u=e.log,a=Math.floor(Date.now()/1e3);0!=u.length&&(c.style.display="block");for(let e=0;e<u.length;e++){let r=u[e];const c="1"==r.status;0==l?(l=r.timestamp,i=l):c?i=r.timestamp:n+=r.timestamp-i,e==u.length-1&&c&&(n+=a-r.timestamp),t.innerHTML+=`<li <span class="${c?"online":"offline"}"></span> <span>${Object(o.b)(r.timestamp)}</span> <span>${c?"Came online":"Went offline"}</span></li>`}r=a-l,console.log(n/60),console.log(r/60);let s=Math.floor(n/r*100);!function(e,t){const n=document.querySelector(".pie").children;n[0].style.setProperty("--value",e),n[0].style.setProperty("--over50",e>50?1:0)}(s)}).catch(()=>Object(o.d)("Something went wrong","error")).finally(()=>u.style.display="none")}(document.getElementById("hwId").value)}))},function(e,t,n){}]);