import{s as q,a as B,o as U,t as j,b as D}from"../chunks/scheduler.DBUx310a.js";import{S as M,i as W,s as z,e as h,c as F,a as b,t as p,b as P,d as w,f as g,g as G,h as H,j as J,k as I,l as d,m as K,n as Q,o as X,p as L,q as k,r as v,u as N,v as E,w as y}from"../chunks/index.Acu6ynz2.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},R=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in O)return;O[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=k(s,c(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&N(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[12](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=k(s,c(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&N(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[11](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=k(s,c(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&N(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[10](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&y(e,t)}}}function S(a){let e,n=a[6]&&T(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=T(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function T(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,s,c;const t=[x,$],r=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let _=a[5]&&S(a);return{c(){n.c(),i=z(),_&&_.c(),s=h()},l(o){n.l(o),i=F(o),_&&_.l(o),s=h()},m(o,u){r[e].m(o,u),b(o,i,u),_&&_.m(o,u),b(o,s,u),c=!0},p(o,[u]){let m=e;e=l(o),e===m?r[e].p(o,u):(L(),p(r[m],1,1,()=>{r[m]=null}),P(),n=r[e],n?n.p(o,u):(n=r[e]=t[e](o),n.c()),w(n,1),n.m(i.parentNode,i)),o[5]?_?_.p(o,u):(_=S(o),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(o){c||(w(n),c=!0)},o(o){p(n),c=!1},d(o){o&&(g(i),g(s)),r[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;B(i.page.notify);let o=!1,u=!1,m=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function V(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function A(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,c,r,l,_,o,u,m,i,s,V,A,C]}class oe extends M{constructor(e){super(),W(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>R(()=>import("../nodes/0.wlqOhweH.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>R(()=>import("../nodes/1.wmE5A0RZ.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),()=>R(()=>import("../nodes/2.tF-39S4s.js"),__vite__mapDeps([6,1,2]),import.meta.url),()=>R(()=>import("../nodes/3.PVOa4Ux9.js"),__vite__mapDeps([7,1,2]),import.meta.url),()=>R(()=>import("../nodes/4.PVOa4Ux9.js"),__vite__mapDeps([8,1,2]),import.meta.url)],le=[],fe={"/":[2],"/docs":[3],"/docs/tutorial":[4]},ce={handleError:({error:a})=>{console.error(a)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.wlqOhweH.js","../chunks/scheduler.DBUx310a.js","../chunks/index.Acu6ynz2.js","../assets/0.bBZBcYYU.css","../nodes/1.wmE5A0RZ.js","../chunks/singletons.Y99DgVT4.js","../nodes/2.tF-39S4s.js","../nodes/3.PVOa4Ux9.js","../nodes/4.PVOa4Ux9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}