(()=>{"use strict";var e,v={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return v[e](t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,o,d)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,o,d]=e[i],s=!0,f=0;f<t.length;f++)(!1&d||a>=d)&&Object.keys(r.O).every(b=>r.O[b](t[f]))?t.splice(f--,1):(s=!1,d<a&&(a=d));if(s){e.splice(i--,1);var c=o();void 0!==c&&(n=c)}}return n}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[t,o,d]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{129:"24536ac092f10061",152:"607cd596a0a4bde6",180:"a6615ed9a8c3b61b",195:"8b30a54b6b4404b8",565:"d52f9dc68cfbb07d"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="tech-source:";r.l=(t,o,d,i)=>{if(e[t])e[t].push(o);else{var a,s;if(void 0!==d)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var u=f[c];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+d){a=u;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+d),a.src=r.tu(t)),e[t]=[o];var l=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(_=>_(b)),g)return g(b)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(o,d)=>{var i=r.o(e,o)?e[o]:void 0;if(0!==i)if(i)d.push(i[2]);else if(666!=o){var a=new Promise((u,l)=>i=e[o]=[u,l]);d.push(i[2]=a);var s=r.p+r.u(o),f=new Error;r.l(s,u=>{if(r.o(e,o)&&(0!==(i=e[o])&&(e[o]=void 0),i)){var l=u&&("load"===u.type?"missing":u.type),p=u&&u.target&&u.target.src;f.message="Loading chunk "+o+" failed.\n("+l+": "+p+")",f.name="ChunkLoadError",f.type=l,f.request=p,i[1](f)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var n=(o,d)=>{var f,c,[i,a,s]=d,u=0;if(i.some(p=>0!==e[p])){for(f in a)r.o(a,f)&&(r.m[f]=a[f]);if(s)var l=s(r)}for(o&&o(d);u<i.length;u++)r.o(e,c=i[u])&&e[c]&&e[c][0](),e[c]=0;return r.O(l)},t=self.webpackChunktech_source=self.webpackChunktech_source||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();