"use strict";(self.webpackChunktech_source=self.webpackChunktech_source||[]).push([[195],{6195:(J,v,a)=>{a.r(v),a.d(v,{AndroidModule:()=>c});var _=a(6895),n=a(4650),C=a(8996),m=a(4004),f=a(262),x=a(2843),u=a(6918);class p{constructor(o){this.db=o,this.dbPath="/app-list",this.appDataList=this.db.list(this.dbPath)}getAllAppData(){return this.appDataList.valueChanges()}getAll(){return this.appDataList}deleteAppData(o){return(0,C.D)(this.appDataList.remove(o.appId.toString())).pipe((0,m.U)(()=>{}),(0,f.K)(t=>(console.error("Error deleting AppData:",t),(0,x._)(()=>new Error("Error deleting AppData")))))}getSelectedAppData(o){return this.appDataList.snapshotChanges().pipe((0,m.U)(t=>t.map(i=>({key:i.key,...i.payload.val()}))),(0,m.U)(t=>o.platform||o.choice?t.filter(i=>!(o.platform&&i.platform!==o.platform||o.choice&&i.choice!==o.choice)):t))}}p.\u0275fac=function(o){return new(o||p)(n.LFG(u.KQ))},p.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var r=a(6106);function h(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",15)(1,"div",16),n.NdJ("click",function(){const l=n.CHM(t).$implicit,g=n.oxw(3);return n.KtG(g.goToLink(l.appLink))}),n.TgZ(2,"div",17)(3,"h5",18),n._uU(4),n.qZA(),n._UZ(5,"i",19),n.qZA(),n.TgZ(6,"div",20)(7,"pre",21),n._uU(8),n.qZA()()()()}if(2&e){const t=o.$implicit;n.xp6(4),n.Oqu(t.appName),n.xp6(4),n.Oqu(t.version)}}function O(e,o){if(1&e&&(n.TgZ(0,"div",13),n.YNc(1,h,9,2,"div",14),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.appList)}}function M(e,o){1&e&&(n.TgZ(0,"h5",22),n._uU(1," No Data Available "),n.qZA())}function P(e,o){if(1&e&&(n.TgZ(0,"div",10),n.YNc(1,O,2,1,"div",11),n.YNc(2,M,2,0,"h5",12),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",(null==t.appList?null:t.appList.length)>0&&!t.appListLoader),n.xp6(1),n.Q6J("ngIf",0===(null==t.appList?null:t.appList.length)&&!t.appListLoader)}}function A(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",15)(1,"div",16),n.NdJ("click",function(){const l=n.CHM(t).$implicit,g=n.oxw(3);return n.KtG(g.goToLink(l.appLink))}),n.TgZ(2,"div",17)(3,"h5",18),n._uU(4),n.qZA(),n._UZ(5,"i",19),n.qZA(),n.TgZ(6,"div",20)(7,"pre",21),n._uU(8),n.qZA()()()()}if(2&e){const t=o.$implicit;n.xp6(4),n.Oqu(t.appName),n.xp6(4),n.Oqu(t.version)}}function b(e,o){if(1&e&&(n.TgZ(0,"div",13),n.YNc(1,A,9,2,"div",14),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.appList)}}function L(e,o){1&e&&(n.TgZ(0,"h5",22),n._uU(1," No Data Available "),n.qZA())}function Z(e,o){if(1&e&&(n.TgZ(0,"div",10),n.YNc(1,b,2,1,"div",11),n.YNc(2,L,2,0,"h5",12),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",(null==t.appList?null:t.appList.length)>0&&!t.appListLoader),n.xp6(1),n.Q6J("ngIf",0===(null==t.appList?null:t.appList.length)&&!t.appListLoader)}}function T(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",15)(1,"div",16),n.NdJ("click",function(){const l=n.CHM(t).$implicit,g=n.oxw(3);return n.KtG(g.goToLink(l.appLink))}),n.TgZ(2,"div",17)(3,"h5",18),n._uU(4),n.qZA(),n._UZ(5,"i",19),n.qZA(),n.TgZ(6,"div",20)(7,"pre",21),n._uU(8),n.qZA()()()()}if(2&e){const t=o.$implicit;n.xp6(4),n.Oqu(t.appName),n.xp6(4),n.Oqu(t.version)}}function w(e,o){if(1&e&&(n.TgZ(0,"div",13),n.YNc(1,T,9,2,"div",14),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",t.appList)}}function N(e,o){1&e&&(n.TgZ(0,"h5",22),n._uU(1," No Data Available "),n.qZA())}function k(e,o){if(1&e&&(n.TgZ(0,"div",10),n.YNc(1,w,2,1,"div",11),n.YNc(2,N,2,0,"h5",12),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",(null==t.appList?null:t.appList.length)>0&&!t.appListLoader),n.xp6(1),n.Q6J("ngIf",0===(null==t.appList?null:t.appList.length)&&!t.appListLoader)}}class s{constructor(o){this.androidService=o,this.tabId=1,this.necessary=[{appName:"Google Chrome",appVersion:"107.0.5304.121",appDescription:"Browser",appLink:"https://www.google.com/intl/en/chrome/?standalone=1"},{appName:"Mozilla Firefox",appVersion:"107.0.0",appDescription:"Browser",appLink:"https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"},{appName:"VLC Media Player",appVersion:"3.0.17.4",appDescription:"Player",appLink:"https://get.videolan.org/vlc/3.0.17.4/win64/vlc-3.0.17.4-win64.exe"},{appName:"KM Player",appVersion:"4.2.2.71",appDescription:"Player",appLink:"https://dn.kmplayer.com/Dn/kmp32/2211/KMPlayer_4.2.2.71.exe"}],this.appList=[],this.appListLoader=!0}ngOnInit(){this.loadAppList()}loadAppList(){this.appList=[],this.appListLoader=!0;let o={platform:"Android"};console.log(this.tabId),1===this.tabId?o.choice="Necessary":2===this.tabId&&(o.choice="Optional"),this.androidService.getSelectedAppData(o).subscribe({next:t=>{console.log(t),this.appList=t,this.appListLoader=!1},error:t=>{console.log(t),this.appListLoader=!1}})}onNavChange(o){this.tabId=o.nextId,this.loadAppList()}goToLink(o){window.open(o,"_blank")}}s.\u0275fac=function(o){return new(o||s)(n.Y36(p))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-android"]],decls:18,vars:6,consts:[[1,"android"],[1,"content"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange","navChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavItem","disabled"],[1,"seperator"],[1,"mt-2",3,"ngbNavOutlet"],[1,"nav-content"],["class","row",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"row"],["class","col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-3",4,"ngFor","ngForOf"],[1,"col-xxl-3","col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12","my-3"],[1,"item","fast-transition",3,"click"],[1,"item-head"],[1,"mb-0"],[1,"fas","fa-tombstone-alt"],[1,"item-data"],[1,"mb-2"],[1,"no-data"]],template:function(o,t){if(1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"nav",2,3),n.NdJ("activeIdChange",function(d){return t.activeId=d})("navChange",function(d){return t.onNavChange(d)}),n.ynx(4,4),n.TgZ(5,"a",5),n._uU(6,"Necessary Apps"),n.qZA(),n.YNc(7,P,3,2,"ng-template",6),n.BQk(),n.ynx(8,4),n.TgZ(9,"a",5),n._uU(10,"Optional Apps"),n.qZA(),n.YNc(11,Z,3,2,"ng-template",6),n.BQk(),n.ynx(12,7),n.TgZ(13,"a",5),n._uU(14,"All Apps"),n.qZA(),n.YNc(15,k,3,2,"ng-template",6),n.BQk(),n.qZA(),n._UZ(16,"hr",8)(17,"div",9),n.qZA()()),2&o){const i=n.MAs(3);n.xp6(2),n.Q6J("activeId",t.activeId),n.xp6(2),n.Q6J("ngbNavItem",1),n.xp6(4),n.Q6J("ngbNavItem",2),n.xp6(4),n.Q6J("ngbNavItem",3)("disabled",!1),n.xp6(5),n.Q6J("ngbNavOutlet",i)}},dependencies:[_.sg,_.O5,r.uN,r.Pz,r.nv,r.Vx,r.tO],styles:['.android[_ngcontent-%COMP%]{background-color:#151521;height:100vh;padding-left:300px;position:relative}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:calc(100vw - 350px);background:radial-gradient(circle at center,#161e3e,#1c1c2c);position:absolute;top:80px;left:300px;bottom:60px;border-radius:12px;box-shadow:0 0 45px #0009;transition:.5s cubic-bezier(.685,.0473,.346,1);z-index:100;overflow:auto;padding:25px 45px}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border:none}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]     .nav-link{color:#63638f;background:none;margin:0 5px;border-radius:0;border:2px solid #2b2c45;font-weight:700}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]     .nav-link.active, .android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]     .nav-link:hover{background:none;color:#a8a0ff;margin:0 5px;border-radius:0;border:2px solid #3f4165;font-weight:700}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:unset;justify-content:center}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border-radius:5px;display:flex;flex-direction:column;box-shadow:#00000029 0 1px 4px;color:#d7d7d7;background:rgba(118,118,118,.11);-webkit-backdrop-filter:blur(5.7px);backdrop-filter:blur(5.7px)}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:15px 0 5px;padding:0 25px}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#7367f0}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]{margin:5px}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-family:PT Mono,monospace;margin-left:20px}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .fast-transition[_ngcontent-%COMP%]{position:relative}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .fast-transition[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;box-shadow:0 10px 50px #0003;opacity:0;transition:opacity .5s}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .fast-transition[_ngcontent-%COMP%]:hover:before{opacity:1}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .seperator[_ngcontent-%COMP%]{margin:.5rem 5px;color:#2b2c45;border:0;border-top:3px solid;opacity:1}.android[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]{text-align:center;color:#fff;margin:20px}@media screen and (max-width: 992px){.android[_ngcontent-%COMP%]{padding-left:unset}.android[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:fixed;right:0;width:100%;left:0;top:8vh;border-radius:0}}']});var y=a(1779);const I=[{path:"",component:s}];class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({providers:[p],imports:[_.ez,y.Bz.forChild(I),r.IJ]})}}]);