"use strict";(self.webpackChunktech_source=self.webpackChunktech_source||[]).push([[81],{81:(V,C,i)=>{i.r(C),i.d(C,{WindowsModule:()=>_});var s=i(6895),r=i(7340),t=i(4650),M=i(8996),w=i(4004),b=i(262),P=i(2843),Z=i(6918);class l{constructor(e){this.db=e,this.dbPath="/app-list",this.appDataList=this.db.list(this.dbPath)}getAllAppData(){return this.appDataList.valueChanges()}getAll(){return this.appDataList}deleteAppData(e){return(0,M.D)(this.appDataList.remove(e.appId.toString())).pipe((0,w.U)(()=>{}),(0,b.K)(n=>(console.error("Error deleting AppData:",n),(0,P._)(()=>new Error("Error deleting AppData")))))}getSelectedAppData(e){return this.appDataList.snapshotChanges().pipe((0,w.U)(n=>n.map(a=>({key:a.key,...a.payload.val()}))),(0,w.U)(n=>e.platform||e.choice?n.filter(a=>!(e.platform&&a.platform!==e.platform||e.choice&&a.choice!==e.choice)):n))}}l.\u0275fac=function(e){return new(e||l)(t.LFG(Z.KQ))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"});var f=i(8423),g=i(6106),m=i(5576),T=i(805),x=i(1493),v=i(2909),u=i(433);const O=function(o,e,n){return{"green-dot":o,"red-dot":e,"yellow-dot":n}};function A(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",32)(1,"div",33),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.showAppDetails(c))}),t.TgZ(2,"div",34)(3,"div",35)(4,"h5",36),t._uU(5),t.qZA()(),t.TgZ(6,"div",37)(7,"pre"),t._uU(8),t.qZA()()(),t.TgZ(9,"div",38)(10,"span",39),t._uU(11," \u2022 "),t.qZA()(),t.TgZ(12,"div",40)(13,"div",41)(14,"i",42),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.goToLink(c.appLink))}),t.qZA()()()()()}if(2&o){const n=e.$implicit;t.Q6J("@fadeInOut",void 0),t.xp6(5),t.Oqu(n.appName),t.xp6(3),t.Oqu(n.version),t.xp6(2),t.Q6J("ngClass",t.kEZ(4,O,!n.exclusive&&n.freeware,n.exclusive&&!n.freeware,n.exclusive&&n.freeware))}}function y(o,e){1&o&&(t.TgZ(0,"div")(1,"ngx-spinner",43)(2,"p",44),t._uU(3," Fetching... "),t.qZA()()()),2&o&&(t.xp6(1),t.Q6J("fullScreen",!1))}function L(o,e){1&o&&(t.TgZ(0,"h5",45),t._uU(1," No Data Available "),t.qZA())}function k(o,e){if(1&o&&(t.TgZ(0,"div",27)(1,"div",28),t.YNc(2,A,15,8,"div",29),t.qZA(),t.YNc(3,y,4,1,"div",30),t.YNc(4,L,2,0,"h5",31),t.qZA()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.appList),t.xp6(1),t.Q6J("ngIf",0===(null==n.appList?null:n.appList.length)&&n.appListLoader),t.xp6(1),t.Q6J("ngIf",0===(null==n.appList?null:n.appList.length)&&!n.appListLoader)}}function N(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",32)(1,"div",33),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.showAppDetails(c))}),t.TgZ(2,"div",34)(3,"div",35)(4,"h5",36),t._uU(5),t.qZA()(),t.TgZ(6,"div",37)(7,"pre"),t._uU(8),t.qZA()()(),t.TgZ(9,"div",38)(10,"span",39),t._uU(11," \u2022 "),t.qZA()(),t.TgZ(12,"div",40)(13,"div",41)(14,"i",42),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.goToLink(c.appLink))}),t.qZA()()()()()}if(2&o){const n=e.$implicit;t.Q6J("@fadeInOut",void 0),t.xp6(5),t.Oqu(n.appName),t.xp6(3),t.Oqu(n.version),t.xp6(2),t.Q6J("ngClass",t.kEZ(4,O,!n.exclusive&&n.freeware,n.exclusive&&!n.freeware,n.exclusive&&n.freeware))}}function U(o,e){1&o&&(t.TgZ(0,"div")(1,"ngx-spinner",43)(2,"p",44),t._uU(3," Fetching... "),t.qZA()()()),2&o&&(t.xp6(1),t.Q6J("fullScreen",!1))}function D(o,e){1&o&&(t.TgZ(0,"h5",45),t._uU(1," No Data Available "),t.qZA())}function q(o,e){if(1&o&&(t.TgZ(0,"div",27)(1,"div",28),t.YNc(2,N,15,8,"div",29),t.qZA(),t.YNc(3,U,4,1,"div",30),t.YNc(4,D,2,0,"h5",31),t.qZA()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.appList),t.xp6(1),t.Q6J("ngIf",0===(null==n.appList?null:n.appList.length)&&n.appListLoader),t.xp6(1),t.Q6J("ngIf",0===(null==n.appList?null:n.appList.length)&&!n.appListLoader)}}function I(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"p-dropdown",59),t.NdJ("onChange",function(p){const d=t.CHM(n).filterCallback;return t.KtG(d(p.value))}),t.qZA()}if(2&o){const n=e.$implicit,a=t.oxw(3);t.Q6J("ngModel",n)("options",a.choices)}}function J(o,e){1&o&&(t.TgZ(0,"tr")(1,"th",50),t._uU(2,"App Name "),t._UZ(3,"p-sortIcon",51),t.qZA(),t.TgZ(4,"th",52),t._uU(5,"Version"),t.qZA(),t.TgZ(6,"th",53),t._uU(7,"Choice "),t._UZ(8,"p-sortIcon",54),t.TgZ(9,"p-columnFilter",55),t.YNc(10,I,1,2,"ng-template",56),t.qZA()(),t.TgZ(11,"th",57),t._uU(12,"Updated On "),t._UZ(13,"p-sortIcon",58),t.qZA(),t.TgZ(14,"th",52),t._uU(15,"Link"),t.qZA()())}function W(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",60)(11,"i",61),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.goToLink(c.appLink))}),t.qZA()()()}if(2&o){const n=e.$implicit;t.xp6(2),t.Oqu(n.appName),t.xp6(2),t.Oqu(n.version),t.xp6(2),t.Oqu(n.choice),t.xp6(2),t.Oqu(t.xi3(9,4,n.updatedAt,"medium"))}}function Q(o,e){1&o&&(t.TgZ(0,"h5",45),t._uU(1," No Data Available "),t.qZA())}const F=function(){return["choice"]};function z(o,e){if(1&o&&(t.TgZ(0,"div",27)(1,"div",46)(2,"p-table",47),t.YNc(3,J,16,0,"ng-template",48),t.YNc(4,W,12,7,"ng-template",49),t.qZA()(),t.YNc(5,Q,2,0,"h5",31),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("@fadeInOut",void 0),t.xp6(1),t.Q6J("value",n.appList)("scrollable",!0)("resizableColumns",!0)("globalFilterFields",t.DdM(6,F)),t.xp6(3),t.Q6J("ngIf",0===(null==n.appList?null:n.appList.length)&&!n.appListLoader)}}function S(o,e){1&o&&(t.TgZ(0,"div",62)(1,"h6"),t._uU(2,"The software links provided here marked with red and yellow dot are for educational purposes only. It is not intended for commercial use. We encourage users to obtain proper licenses or use legal alternatives for their software needs."),t.qZA()())}function Y(o,e){if(1&o&&(t.TgZ(0,"p")(1,"span"),t._uU(2),t.qZA()()),2&o){const n=e.$implicit;t.xp6(2),t.Oqu(n)}}function B(o,e){1&o&&(t.TgZ(0,"div",63)(1,"h6"),t._uU(2,"Disclaimer :"),t.qZA(),t.TgZ(3,"p"),t._uU(4," This software is provided for educational purposes only. The software listed here may include cracked versions of shareware, which means they have been modified to bypass licensing or activation restrictions. This disclaimer is not endorsing or promoting the use of cracked software, as it is illegal and against the terms of use set by software developers. The purpose of including these software titles is solely for educational exploration and understanding of software functionalities. Users are strongly advised to respect copyright laws and abide by software licensing agreements. The use of cracked software is unlawful and may result in legal consequences. We disclaim any responsibility for the usage, installation, or consequences of using cracked software, and we encourage users to obtain proper licenses or use legal alternatives for their software needs. "),t.qZA()())}const $=function(){return{width:"50vw"}};class h{constructor(e,n){this.windowsService=e,this.spinner=n,this.tabId=1,this.necessary=[{appName:"Google Chrome",appVersion:"107.0.5304.121",appDescription:"Browser",appLink:"https://www.google.com/intl/en/chrome/?standalone=1"},{appName:"Mozilla Firefox",appVersion:"107.0.0",appDescription:"Browser",appLink:"https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"},{appName:"VLC Media Player",appVersion:"3.0.17.4",appDescription:"Player",appLink:"https://get.videolan.org/vlc/3.0.17.4/win64/vlc-3.0.17.4-win64.exe"},{appName:"KM Player",appVersion:"4.2.2.71",appDescription:"Player",appLink:"https://dn.kmplayer.com/Dn/kmp32/2211/KMPlayer_4.2.2.71.exe"}],this.appList=[],this.appListLoader=!0,this.visible=!1,this.appDetailedData=[],this.choices=["Necessary","Optional"]}ngOnInit(){this.loadAppList()}loadAppList(){this.spinner.show("appSpinner"),this.appList=[],this.appListLoader=!0;let e={platform:"Windows"};1===this.tabId?e.choice="Necessary":2===this.tabId&&(e.choice="Optional"),this.windowsService.getSelectedAppData(e).subscribe({next:n=>{setTimeout(()=>{this.appList=n.filter(a=>!1===a.hidden),this.appListLoader=!1,this.spinner.hide("appSpinner")},300)},error:n=>{console.log(n),this.spinner.hide("appSpinner"),this.appListLoader=!1}})}onNavChange(e){this.tabId=e.nextId,this.loadAppList()}goToLink(e){window.open(e,"_blank")}showAppDetails(e){this.visible=!0,this.appDetailedData=[],this.appDetailedData=e}}h.\u0275fac=function(e){return new(e||h)(t.Y36(l),t.Y36(f.t2))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-windows"]],decls:47,vars:20,consts:[[1,"windows"],[1,"content-window"],[1,"content-container"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange","navChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavItem","disabled"],[1,"seperator"],[1,"",3,"ngbNavOutlet"],["class","content-bottom",4,"ngIf"],["header","App Details","styleClass","app-data-modal",3,"visible","modal","draggable","resizable","visibleChange"],[1,"app-detail-head"],[1,"ad-head-left"],[3,"src"],[1,"ad-head-left-data"],[1,"ad-head-right"],[3,"click"],[1,"top"],[1,"left"],[1,"bottom"],[1,"right"],[1,"app-detail-content"],[1,"tag-container"],[4,"ngFor","ngForOf"],["class","disclaimer-container",4,"ngIf"],[1,"nav-content"],[1,"row"],["class","col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2 mb-3",4,"ngFor","ngForOf"],[4,"ngIf"],["class","no-data",4,"ngIf"],[1,"col-xxl-3","col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12","mt-2","mb-3"],[1,"item",3,"click"],[1,"item-left"],[1,"item-head"],[1,"mb-0"],[1,"item-data"],[1,"item-middle"],[3,"ngClass"],[1,"item-right"],[1,"icon-container"],[1,"fas","fa-download",3,"click"],["name","appSpinner","bdColor","rgba(0, 0, 0, 0)","size","medium","color","#ffffff","type","ball-clip-rotate-multiple",3,"fullScreen"],[1,"spinner-text",2,"color","white"],[1,"no-data"],[1,"short-desc"],["scrollHeight","475px","styleClass","p-datatable-gridlines",1,"app-data",3,"value","scrollable","resizableColumns","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","appName","pResizableColumn",""],["field","appName"],["pResizableColumn",""],["pSortableColumn","choice","pResizableColumn",""],["field","choice"],["field","choice","matchMode","equals","display","menu"],["pTemplate","filter"],["pSortableColumn","updatedAt","pResizableColumn",""],["field","updatedAt"],["placeholder","Any",3,"ngModel","options","onChange"],[1,"action-btn"],[1,"fa-solid","fa-link",3,"click"],[1,"content-bottom"],[1,"disclaimer-container"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nav",3,4),t.NdJ("activeIdChange",function(p){return n.activeId=p})("navChange",function(p){return n.onNavChange(p)}),t.ynx(5,5),t.TgZ(6,"a",6),t._uU(7,"Necessary Apps"),t.qZA(),t.YNc(8,k,5,3,"ng-template",7),t.BQk(),t.ynx(9,5),t.TgZ(10,"a",6),t._uU(11,"Optional Apps"),t.qZA(),t.YNc(12,q,5,3,"ng-template",7),t.BQk(),t.ynx(13,8),t.TgZ(14,"a",6),t._uU(15,"All Apps"),t.qZA(),t.YNc(16,z,6,7,"ng-template",7),t.BQk(),t.qZA(),t._UZ(17,"hr",9)(18,"div",10),t.YNc(19,S,3,0,"div",11),t.qZA()()(),t.TgZ(20,"p-dialog",12),t.NdJ("visibleChange",function(p){return n.visible=p}),t.TgZ(21,"div",13)(22,"div",14),t._UZ(23,"img",15),t.TgZ(24,"div",16)(25,"h5"),t._uU(26),t.qZA(),t.TgZ(27,"p"),t._uU(28),t.qZA()()(),t.TgZ(29,"div",17)(30,"button",18),t.NdJ("click",function(){return n.goToLink(n.appDetailedData.appLink)}),t.TgZ(31,"span"),t._uU(32,"Download"),t.qZA(),t._UZ(33,"div",19)(34,"div",20)(35,"div",21)(36,"div",22),t.qZA()()(),t.TgZ(37,"div",23)(38,"h6"),t._uU(39,"Info :"),t.qZA(),t.TgZ(40,"p"),t._uU(41),t.qZA(),t.TgZ(42,"h6"),t._uU(43,"Tags :"),t.qZA(),t.TgZ(44,"div",24),t.YNc(45,Y,3,1,"p",25),t.qZA(),t.YNc(46,B,5,0,"div",26),t.qZA()()),2&e){const a=t.MAs(4);t.xp6(3),t.Q6J("activeId",n.activeId),t.xp6(2),t.Q6J("ngbNavItem",1),t.xp6(4),t.Q6J("ngbNavItem",2),t.xp6(4),t.Q6J("ngbNavItem",3)("disabled",!1),t.xp6(5),t.Q6J("ngbNavOutlet",a),t.xp6(1),t.Q6J("ngIf",!n.appListLoader&&3!==n.activeId),t.xp6(1),t.Akn(t.DdM(19,$)),t.Q6J("visible",n.visible)("modal",!0)("draggable",!0)("resizable",!1),t.xp6(3),t.Q6J("src",n.appDetailedData.appIconLink,t.LSH),t.xp6(3),t.Oqu(n.appDetailedData.appName),t.xp6(2),t.hij("Version : ",n.appDetailedData.version," "),t.xp6(13),t.Oqu(n.appDetailedData.appInfo),t.xp6(4),t.Q6J("ngForOf",n.appDetailedData.tags),t.xp6(1),t.Q6J("ngIf",n.appDetailedData.exclusive)}},dependencies:[s.mk,s.sg,s.O5,g.uN,g.Pz,g.nv,g.Vx,g.tO,m.iA,T.jx,m.lQ,m.Q7,m.fz,m.xl,f.Ro,x.V,v.Lt,u.JJ,u.On,s.uU],styles:['.windows[_ngcontent-%COMP%]{background-color:#151521;height:100vh;padding-left:300px;position:relative}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]{width:calc(100vw - 350px);background:radial-gradient(circle at center,#161e3e,#1c1c2c);position:absolute;top:80px;left:300px;bottom:60px;border-radius:12px;box-shadow:0 0 45px #0009;transition:.5s cubic-bezier(.685,.0473,.346,1);z-index:100;overflow:hidden;padding:25px 45px}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{height:100%;position:relative}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-bottom[_ngcontent-%COMP%]{position:absolute;bottom:5px;width:100%}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-bottom[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:10px 0 0;color:#bdbdbd;text-align:center;font-size:12px}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border:none}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]     .nav-link{color:#63638f;background:none;margin:0 5px;border-radius:0;border:2px solid #2b2c45;font-weight:700}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]     .nav-link.active, .windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]     .nav-link:hover{background:none;color:#a8a0ff;margin:0 5px;border-radius:0;border:2px solid #3f4165;font-weight:700}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:unset;justify-content:center;max-height:70vh;overflow:auto}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{height:100%;border:2px solid transparent;transition:border-color .3s ease;border-radius:5px;display:flex;align-items:center;box-shadow:#00000029 0 1px 4px;color:#d7d7d7;background:rgba(118,118,118,.11);-webkit-backdrop-filter:blur(5.7px);backdrop-filter:blur(5.7px);padding:10px}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-left[_ngcontent-%COMP%]{flex:0 0 80%}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-middle[_ngcontent-%COMP%]{flex:0 0 10%}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-middle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-middle[_ngcontent-%COMP%]   .green-dot[_ngcontent-%COMP%]{color:#37ff8b;text-shadow:0px 0px 5px #37FF8B}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-middle[_ngcontent-%COMP%]   .red-dot[_ngcontent-%COMP%]{color:#ff2a04;text-shadow:0px 0px 5px #ff2a04}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-middle[_ngcontent-%COMP%]   .yellow-dot[_ngcontent-%COMP%]{color:#ffdf00;text-shadow:0px 0px 5px #FFDF00}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%]{flex:0 0 10%;margin-right:8px}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;padding:5px;border-radius:3px}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{--animation-color: #37FF8B;color:var(--animation-color);transition:.2s;filter:drop-shadow(0 0 10px var(--animation-color))}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_bellRing 1.5s both}@keyframes _ngcontent-%COMP%_bellRing{0%{transform:translateY(-2px)}to{transform:translateY(0)}}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]:active{transform:scale(.9)}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:0 0 7px;padding:0 15px}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#7367f0}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]{margin:7px 5px 0}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-family:PT Mono,monospace;margin-left:10px;margin-bottom:0}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{border-color:#343757;box-shadow:0 2px 10px #0003}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .short-desc[_ngcontent-%COMP%]   .app-data[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .seperator[_ngcontent-%COMP%]{margin:.5rem 5px;color:#2b2c45;border:0;border-top:3px solid;opacity:1}.windows[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]{text-align:center;color:#fff;margin:20px}  .app-data-modal .p-dialog-header{background:#212529;padding:.5rem 1.5rem}  .app-data-modal .p-dialog-header .p-dialog-title{color:#ababab}  .app-data-modal .p-dialog-content{background:#121212;color:#ffffffde;padding:1.5rem}  .app-data-modal .p-dialog-content .app-detail-head{display:flex;justify-content:space-between;margin-bottom:20px}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-left{display:flex;align-items:center}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-left img{height:50px}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-left h5,   .app-data-modal .p-dialog-content .app-detail-head .ad-head-left h6{color:#cbcbcb}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-left p{font-family:PT Mono,monospace;margin-bottom:0}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-left .ad-head-left-data{margin-left:10px}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button{padding:7px 50px;background-color:#141414;border:none;font-size:18px;position:relative;transition:.5s}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button span{color:#a3a3a3;position:relative;transition:.5s;transition-delay:.5s;font-size:16px;text-transform:uppercase;letter-spacing:2px;font-weight:600}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button:before{content:"";position:absolute;width:0%;height:0%;inset:50%;transition:.5s;transition-delay:.5s}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button div{transition:.5s;position:absolute;background-color:green;box-shadow:0 0 15px green,0 0 30px green,0 0 50px green}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button .top{width:15px;height:2px;top:0;left:0}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button .bottom{width:15px;height:2px;bottom:0;right:0}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button .left{width:2px;height:15px;top:0;left:0}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button .right{width:2px;height:15px;bottom:0;right:0}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button:hover:before{width:100%;height:100%;inset:0}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button:hover .top,   .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button:hover .bottom{width:100%}  .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button:hover .left,   .app-data-modal .p-dialog-content .app-detail-head .ad-head-right button:hover .right{height:100%}  .app-data-modal .p-dialog-content .app-detail-content{border:3px solid #292929;border-radius:7px;padding:15px}  .app-data-modal .p-dialog-content .app-detail-content p{font-size:14.5px}  .app-data-modal .p-dialog-content .app-detail-content .tag-container{display:flex}  .app-data-modal .p-dialog-content .app-detail-content .tag-container p{padding:5px 10px;margin-bottom:0;border:2px solid #3d3d3d;border-radius:4px;margin-right:10px}  .app-data-modal .p-dialog-content .app-detail-content .disclaimer-container{margin-top:1rem}@media screen and (max-width: 992px){.windows[_ngcontent-%COMP%]{padding-left:unset}.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]{position:fixed;right:0;width:100%;left:0;top:8vh;border-radius:0}}@media screen and (max-width: 500px){.windows[_ngcontent-%COMP%]   .content-window[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{max-height:65vh}}.fa-solid[_ngcontent-%COMP%]{padding:3px 6px;border:1px solid #b9b9b9;border-radius:5px;cursor:pointer}  .p-datatable .p-datatable-tbody>tr{background-color:#1b1c2e;color:#ffffffde}  .p-datatable .p-datatable-thead>tr>th{background-color:#1b1c2e}'],data:{animation:[(0,r.X$)("fadeInOut",[(0,r.eR)(":enter",[(0,r.oB)({opacity:0}),(0,r.jt)("500ms",(0,r.oB)({opacity:1}))]),(0,r.eR)(":leave",[(0,r.jt)("500ms",(0,r.oB)({opacity:0}))])])]}});var E=i(1779),K=i(5593);const R=[{path:"",component:h}];class _{}_.\u0275fac=function(e){return new(e||_)},_.\u0275mod=t.oAB({type:_}),_.\u0275inj=t.cJS({providers:[l,s.uU],imports:[s.ez,E.Bz.forChild(R),g.IJ,m.U$,K.hJ,f.ef,x.S,v.kW,u.u5]})}}]);