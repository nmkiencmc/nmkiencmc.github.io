(function(){var e={4126:function(e,t,n){"use strict";n.r(t);var r=n(6847),o=n(9842),i={};for(var u in o)"default"!==u&&(i[u]=function(e){return o[e]}.bind(0,u));n.d(t,i);var a=n(1001),f=(0,a.Z)(o["default"],r.s,r.x,!1,null,null,null);t["default"]=f.exports},9842:function(e,t,n){"use strict";n.r(t);var r=n(4258),o=n.n(r),i={};for(var u in r)"default"!==u&&(i[u]=function(e){return r[e]}.bind(0,u));n.d(t,i),t["default"]=o()},6847:function(e,t,n){"use strict";n.d(t,{s:function(){return r},x:function(){return o}});var r=function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)},o=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[e._v(" This website belong to Kien, Working in CMC Global"),t("br"),e._v(" This website would contain utilities for CMCer only and requested by CMC's people ")])}]},4258:function(){},1394:function(e,t,n){"use strict";var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/test"}},[e._v("Test")])],1),t("router-view")],1)},i=[],u=n(1001),a={},f=(0,u.Z)(a,o,i,!1,null,null,null),s=f.exports,c=n(2631);n(4126);r.ZP.use(c.Z);const l=[{path:"/",name:"home",component:()=>Promise.resolve().then(n.bind(n,4126))},{path:"/test",name:"test",component:()=>n.e(114).then(n.bind(n,8114))}],d=new c.Z({mode:"history",base:"/",routes:l});var p=d,v=n(3822);r.ZP.use(v.ZP);var h=new v.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:p,store:h,render:e=>e(s)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,f=0;f<r.length;f++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[f])}))?r.splice(f--,1):(a=!1,i<u&&(u=i));if(a){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".c589231c.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".ff30927f.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mapspace:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,f;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var l=s[c];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(f=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),f&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=u,f.request=a,o.parentNode.removeChild(o),r(f)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={114:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,f=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,f,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],f=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(f)var c=f(n)}for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkmapspace"]=self["webpackChunkmapspace"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1394)}));r=n.O(r)})();
//# sourceMappingURL=app.ad6aaa58.js.map