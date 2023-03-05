"use strict";(self.webpackChunktech_source=self.webpackChunktech_source||[]).push([[195],{6195:(k,m,i)=>{i.r(m),i.d(m,{AndroidModule:()=>c});var g=i(6895),n=i(4650),v=i(529),C=i(2340);class a{constructor(e){this.http=e,this.apiURL=C.N.baseurl,this.headers=new v.WM({"Content-Type":"application/json"}),this.options={headers:this.headers}}getAppList(e){return this.http.post(this.apiURL+"apps/list",e,this.options)}}a.\u0275fac=function(e){return new(e||a)(n.LFG(v.eN))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});var p=i(2500);function f(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div",14)(1,"div",15),n.NdJ("click",function(){const l=n.CHM(t).$implicit,_=n.oxw(3);return n.KtG(_.goToLink(l.appLink))}),n.TgZ(2,"div",16)(3,"h5",17),n._uU(4),n.qZA(),n._UZ(5,"i",18),n.qZA(),n.TgZ(6,"div",19)(7,"pre",20),n._uU(8),n.qZA()()()()}if(2&o){const t=e.$implicit;n.xp6(4),n.Oqu(t.appName),n.xp6(4),n.Oqu(t.version)}}function x(o,e){if(1&o&&(n.TgZ(0,"div",12),n.YNc(1,f,9,2,"div",13),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.appList)}}function u(o,e){1&o&&(n.TgZ(0,"h5",21),n._uU(1," No Data Available "),n.qZA())}function h(o,e){if(1&o&&(n.TgZ(0,"div",9),n.YNc(1,x,2,1,"div",10),n.YNc(2,u,2,0,"h5",11),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",(null==t.appList?null:t.appList.length)>0&&!t.appListLoader),n.xp6(1),n.Q6J("ngIf",0===(null==t.appList?null:t.appList.length)&&!t.appListLoader)}}function O(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div",14)(1,"div",15),n.NdJ("click",function(){const l=n.CHM(t).$implicit,_=n.oxw(3);return n.KtG(_.goToLink(l.appLink))}),n.TgZ(2,"div",16)(3,"h5",17),n._uU(4),n.qZA(),n._UZ(5,"i",18),n.qZA(),n.TgZ(6,"div",19)(7,"pre",20),n._uU(8),n.qZA()()()()}if(2&o){const t=e.$implicit;n.xp6(4),n.Oqu(t.appName),n.xp6(4),n.Oqu(t.version)}}function M(o,e){if(1&o&&(n.TgZ(0,"div",12),n.YNc(1,O,9,2,"div",13),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.appList)}}function P(o,e){1&o&&(n.TgZ(0,"h5",21),n._uU(1," No Data Available "),n.qZA())}function A(o,e){if(1&o&&(n.TgZ(0,"div",9),n.YNc(1,M,2,1,"div",10),n.YNc(2,P,2,0,"h5",11),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",(null==t.appList?null:t.appList.length)>0&&!t.appListLoader),n.xp6(1),n.Q6J("ngIf",0===(null==t.appList?null:t.appList.length)&&!t.appListLoader)}}function L(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div",14)(1,"div",15),n.NdJ("click",function(){const l=n.CHM(t).$implicit,_=n.oxw(3);return n.KtG(_.goToLink(l.appLink))}),n.TgZ(2,"div",16)(3,"h5",17),n._uU(4),n.qZA(),n._UZ(5,"i",18),n.qZA(),n.TgZ(6,"div",19)(7,"pre",20),n._uU(8),n.qZA()()()()}if(2&o){const t=e.$implicit;n.xp6(4),n.Oqu(t.appName),n.xp6(4),n.Oqu(t.version)}}function b(o,e){if(1&o&&(n.TgZ(0,"div",12),n.YNc(1,L,9,2,"div",13),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.appList)}}function Z(o,e){1&o&&(n.TgZ(0,"h5",21),n._uU(1," No Data Available "),n.qZA())}function T(o,e){if(1&o&&(n.TgZ(0,"div",9),n.YNc(1,b,2,1,"div",10),n.YNc(2,Z,2,0,"h5",11),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",(null==t.appList?null:t.appList.length)>0&&!t.appListLoader),n.xp6(1),n.Q6J("ngIf",0===(null==t.appList?null:t.appList.length)&&!t.appListLoader)}}class s{constructor(e){this.androidService=e,this.tabId=1,this.necessary=[{appName:"Google Chrome",appVersion:"107.0.5304.121",appDescription:"Browser",appLink:"https://www.google.com/intl/en/chrome/?standalone=1"},{appName:"Mozilla Firefox",appVersion:"107.0.0",appDescription:"Browser",appLink:"https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"},{appName:"VLC Media Player",appVersion:"3.0.17.4",appDescription:"Player",appLink:"https://get.videolan.org/vlc/3.0.17.4/win64/vlc-3.0.17.4-win64.exe"},{appName:"KM Player",appVersion:"4.2.2.71",appDescription:"Player",appLink:"https://dn.kmplayer.com/Dn/kmp32/2211/KMPlayer_4.2.2.71.exe"}],this.appList=[],this.appListLoader=!0}ngOnInit(){this.loadAppList()}loadAppList(){this.appList=[],this.appListLoader=!0;let e={platform:"Android"};console.log(this.tabId),1===this.tabId?e.choice="Necessary":2===this.tabId&&(e.choice="Optional"),this.androidService.getAppList(e).subscribe({next:t=>{console.log(t),this.appList=t.appData,this.appListLoader=!1},error:t=>{console.log(t),this.appListLoader=!1}})}onNavChange(e){this.tabId=e.nextId,this.loadAppList()}goToLink(e){window.open(e,"_blank")}}s.\u0275fac=function(e){return new(e||s)(n.Y36(a))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-android"]],decls:17,vars:6,consts:[[1,"android"],[1,"content"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange","navChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavItem","disabled"],[1,"mt-2",3,"ngbNavOutlet"],[1,"nav-content"],["class","row",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"row"],["class","col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-3",4,"ngFor","ngForOf"],[1,"col-xxl-3","col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12","my-3"],[1,"item","fast-transition",3,"click"],[1,"item-head"],[1,"mb-0"],[1,"fas","fa-tombstone-alt"],[1,"item-data"],[1,"mb-2"],[1,"no-data"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"nav",2,3),n.NdJ("activeIdChange",function(r){return t.activeId=r})("navChange",function(r){return t.onNavChange(r)}),n.ynx(4,4),n.TgZ(5,"a",5),n._uU(6,"Necessary Apps"),n.qZA(),n.YNc(7,h,3,2,"ng-template",6),n.BQk(),n.ynx(8,4),n.TgZ(9,"a",5),n._uU(10,"Optional Apps"),n.qZA(),n.YNc(11,A,3,2,"ng-template",6),n.BQk(),n.ynx(12,7),n.TgZ(13,"a",5),n._uU(14,"All Apps"),n.qZA(),n.YNc(15,T,3,2,"ng-template",6),n.BQk(),n.qZA(),n._UZ(16,"div",8),n.qZA()()),2&e){const d=n.MAs(3);n.xp6(2),n.Q6J("activeId",t.activeId),n.xp6(2),n.Q6J("ngbNavItem",1),n.xp6(4),n.Q6J("ngbNavItem",2),n.xp6(4),n.Q6J("ngbNavItem",3)("disabled",!1),n.xp6(4),n.Q6J("ngbNavOutlet",d)}},dependencies:[g.sg,g.O5,p.uN,p.Pz,p.nv,p.Vx,p.tO],styles:['.android[_ngcontent-%COMP%]{background-color:#151521;height:100vh;padding-left:300px;position:relative}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:calc(100vw - 350px);background:radial-gradient(circle at center,#161e3e,#1c1c2c);position:absolute;top:80px;left:300px;bottom:60px;border-radius:12px;box-shadow:0 0 45px #0009;transition:.5s cubic-bezier(.685,.0473,.346,1);z-index:100;overflow:auto;padding:25px 45px}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border-color:#6c6c6c}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]     .nav-link.active{background:none;color:#fff;border-color:#92929f #92929f #1e1e2d}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]     .nav-link{color:#92929f}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:unset;justify-content:center}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border-radius:5px;display:flex;flex-direction:column;box-shadow:#00000029 0 1px 4px;color:#d7d7d7;background:rgba(118,118,118,.11);-webkit-backdrop-filter:blur(5.7px);backdrop-filter:blur(5.7px)}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:15px 0 5px;padding:0 25px}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#7367f0}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]{margin:5px}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-family:PT Mono,monospace;margin-left:20px}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .fast-transition[_ngcontent-%COMP%]{position:relative}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .fast-transition[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;box-shadow:0 10px 50px #0003;opacity:0;transition:opacity .5s}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .fast-transition[_ngcontent-%COMP%]:hover:before{opacity:1}.android[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]{text-align:center;color:#fff;margin:20px}@media screen and (max-width: 992px){.android[_ngcontent-%COMP%]{padding-left:unset}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:fixed;right:0;width:100%;left:0;top:8vh;border-radius:0}}']});var N=i(8869);const w=[{path:"",component:s}];class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({providers:[a],imports:[g.ez,N.Bz.forChild(w),p.IJ]})}}]);