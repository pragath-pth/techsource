(()=>{"use strict";var e,v={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return v[e](t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,f,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,f,o]=e[i],c=!0,u=0;u<t.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every(b=>r.O[b](t[u]))?t.splice(u--,1):(c=!1,o<a&&(a=o));if(c){e.splice(i--,1);var s=f();void 0!==s&&(n=s)}}return n}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,f,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{66:"c21109fa3e1908fc",129:"24536ac092f10061",180:"a6615ed9a8c3b61b",195:"99fa24733b2fbe0c",565:"d52f9dc68cfbb07d",750:"12d0489759f49c79"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="tech-source:";r.l=(t,f,o,i)=>{if(e[t])e[t].push(f);else{var a,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(c=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+o),a.src=r.tu(t)),e[t]=[f];var l=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(_=>_(b)),g)return g(b)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,o)=>{var i=r.o(e,f)?e[f]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=f){var a=new Promise((d,l)=>i=e[f]=[d,l]);o.push(i[2]=a);var c=r.p+r.u(f),u=new Error;r.l(c,d=>{if(r.o(e,f)&&(0!==(i=e[f])&&(e[f]=void 0),i)){var l=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;u.message="Loading chunk "+f+" failed.\n("+l+": "+p+")",u.name="ChunkLoadError",u.type=l,u.request=p,i[1](u)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,o)=>{var u,s,[i,a,c]=o,d=0;if(i.some(p=>0!==e[p])){for(u in a)r.o(a,u)&&(r.m[u]=a[u]);if(c)var l=c(r)}for(f&&f(o);d<i.length;d++)r.o(e,s=i[d])&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},t=self.webpackChunktech_source=self.webpackChunktech_source||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();