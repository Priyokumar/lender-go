(self.webpackChunkui=self.webpackChunkui||[]).push([[113],{62831:function(t,e,n){"use strict";n.d(e,{n4:function(){return r},WE:function(){return i},Pz:function(){return o},t3:function(){return a},l:function(){return s},aX:function(){return c},ll:function(){return l},i4:function(){return u},dp:function(){return d},Nt:function(){return g},rl:function(){return p},Nv:function(){return m},kv:function(){return h},V7:function(){return f},pe:function(){return v}});const r=[{key:"Male",val:"Male"},{key:"Female",val:"Female"}];let i=(()=>{class t{}return t.ACTIVE="Active",t.EXPIRED="Expired",t})();const o=[{key:i.ACTIVE,val:i.ACTIVE},{key:i.EXPIRED,val:i.EXPIRED}],a=[{key:"Active",val:"Active"},{key:"Expired",val:"Expired"}],s=[{key:"Yes",val:!0},{key:"No",val:!1}];let c=(()=>{class t{}return t.MONTHLY="Monthly",t.YEARLY="Yearly",t})();const l=[{key:c.MONTHLY,val:c.MONTHLY}];let u=(()=>{class t{}return t.ADMIN="Admin",t.INVESTOR="Investor",t})(),d=(()=>{class t{}return t.CREATED="Created",t.DISBURSED="Disbursed",t.REJECTED="Rejected",t.CLOSED="Closed",t})();const g=[{key:d.CREATED,val:d.CREATED},{key:d.DISBURSED,val:d.DISBURSED},{key:d.REJECTED,val:d.REJECTED},{key:d.CLOSED,val:d.CLOSED}];let p=(()=>{class t{}return t.NEW="New",t.QUALIFIED="Qualified",t.DIS_QUALIFIED="Dis-qualified",t.CLOSED="Closed",t.ACCOUNT_CREATED="Account Created",t})();const m=[{key:p.NEW,val:p.NEW},{key:p.QUALIFIED,val:p.QUALIFIED},{key:p.DIS_QUALIFIED,val:p.DIS_QUALIFIED},{key:p.CLOSED,val:p.CLOSED},{key:p.ACCOUNT_CREATED,val:p.ACCOUNT_CREATED}];let h=(()=>{class t{}return t.LOAN="Loan",t.SENDOI="Sendoi",t})();const f=[{key:h.SENDOI,val:h.SENDOI}];let Z=(()=>{class t{}return t.PAID="Paid",t.NOT_PAID="Not Paid",t.PARTIALLY_PAID="Partially Paid",t})();const v=[{key:Z.PAID,val:Z.PAID},{key:Z.NOT_PAID,val:Z.NOT_PAID},{key:Z.PARTIALLY_PAID,val:Z.PARTIALLY_PAID}]},81999:function(t,e,n){"use strict";n.d(e,{G:function(){return m}});var r=n(3679),i=n(37716),o=n(12542),a=n(54655),s=n(77001),c=n(98295),l=n(49983),u=n(38583),d=n(51095);function g(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1,"Email is required."),i.qZA())}function p(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1,"Password is required."),i.qZA())}let m=(()=>{class t{constructor(t,e,n){this.authService=t,this.router=e,this.snackBar=n,this.emailFormCtl=new r.NI("",null),this.passwordFormCtl=new r.NI("",null)}ngOnInit(){}login(){const t={email:this.emailFormCtl.value,password:this.passwordFormCtl.value};t.email&&t.password&&this.authService.login(t).subscribe(t=>{this.router.navigate(["/dashboard"]),this.authService.sendLoginSignal(!0)},t=>{console.log(t),this.errorMessage="Invalid credential !",this.snackBar.open("Invalid credential.","Got it!",{duration:5e3})})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.e),i.Y36(a.F0),i.Y36(s.ux))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-login"]],decls:33,vars:4,consts:[[1,"bg-1","p-4","d-flex","flex-column","align-items-center","content"],[1,"jumbotron","font-white"],[1,"attach-body"],[1,"login-content","p-5"],[1,"mat-elevation-z1","w-100","p-5","bg-white"],[1,"font-300"],[1,"w-100"],["matInput","","placeholder","Enter your email",3,"formControl"],[4,"ngIf"],["type","password","matInput","","placeholder","Enter your password",3,"formControl"],[1,"text-right"],["type","submit","mat-raised-button","",1,"w-100","bg-grey","font-white",3,"click"],[1,"d-flex","justify-content-end","mt-4"],["routerLink","/auth/reset-password"],[1,"bg-1","bg-light-grey","h-100"]],template:function(t,e){1&t&&(i.TgZ(0,"div"),i.TgZ(1,"div",0),i.TgZ(2,"div",1),i.TgZ(3,"h2"),i._uU(4,"Lender"),i.qZA(),i.TgZ(5,"p"),i._uU(6,"Powered by prilax group"),i.qZA(),i.qZA(),i.TgZ(7,"div",2),i.TgZ(8,"div",3),i.TgZ(9,"div",4),i.TgZ(10,"h2",5),i._uU(11,"Sign In"),i.qZA(),i._UZ(12,"hr"),i._UZ(13,"br"),i._UZ(14,"br"),i.TgZ(15,"form"),i.TgZ(16,"p"),i.TgZ(17,"mat-form-field",6),i.TgZ(18,"mat-label"),i._uU(19,"Email"),i.qZA(),i._UZ(20,"input",7),i.YNc(21,g,2,0,"mat-error",8),i.qZA(),i.qZA(),i.TgZ(22,"p"),i.TgZ(23,"mat-form-field",6),i._UZ(24,"input",9),i.YNc(25,p,2,0,"mat-error",8),i.qZA(),i.qZA(),i.TgZ(26,"div",10),i.TgZ(27,"button",11),i.NdJ("click",function(){return e.login()}),i._uU(28,"Login"),i.qZA(),i.qZA(),i.TgZ(29,"div",12),i.TgZ(30,"a",13),i._uU(31,"Forget password?"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i._UZ(32,"div",14),i.qZA()),2&t&&(i.xp6(20),i.Q6J("formControl",e.emailFormCtl),i.xp6(1),i.Q6J("ngIf",e.emailFormCtl.invalid),i.xp6(3),i.Q6J("formControl",e.passwordFormCtl),i.xp6(1),i.Q6J("ngIf",e.passwordFormCtl.invalid))},directives:[r._Y,r.JL,r.F,c.KE,c.hX,l.Nt,r.Fj,r.JJ,r.oH,u.O5,d.lW,a.yS,c.TO],styles:[".error[_ngcontent-%COMP%]{height:50px}.content[_ngcontent-%COMP%]{background-color:#08aeea;background-image:linear-gradient(0deg,#08aeea,#2af598)}.xl-icon[_ngcontent-%COMP%]{font-size:10rem;font-weight:300;color:#008b8b}.xl-font[_ngcontent-%COMP%]{font-size:4rem;font-weight:300}.bg-1[_ngcontent-%COMP%]{height:300px}.login-content[_ngcontent-%COMP%]{width:480px;position:absolute;top:0;left:-80px}.jumbotron[_ngcontent-%COMP%]{width:100%;background:transparent}.attach-body[_ngcontent-%COMP%]{position:relative;width:350px;height:400px}"]}),t})()},38445:function(t,e,n){"use strict";n.d(e,{d:function(){return s}});var r=n(81999),i=n(37716),o=n(12542),a=n(54655);let s=(()=>{class t{constructor(t,e){this.authService=t,this.router=e}canActivate(t,e){return this.authService.getUserData().subscribe(e=>{this.route(e,t)},e=>{this.route(null,t)}),!0}route(t,e){e.component===r.G?t?(this.router.navigate(t.needChangePassword?["/dashboard"]:["/auth/change-password"]),this.authService.sendLoginSignal(!0)):this.authService.sendLoginSignal(!1):t?this.authService.sendLoginSignal(!0):(this.authService.sendLoginSignal(!1),this.router.navigate(["/auth/login"]))}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(o.e),i.LFG(a.F0))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},17113:function(t,e,n){"use strict";n.r(e),n.d(e,{SecurityModule:function(){return Tt}});var r=n(38583),i=n(34709),o=n(88002),a=n(37716),s=n(91841);let c=(()=>{class t{constructor(t){this.http=t}getAllRoles(){return this.http.get(i.N$.ROLES)}getRoleById(t){return this.http.get(i.N$.ROLES+"/"+t).pipe((0,o.U)(t=>t.data))}createRole(t){return this.http.post(i.N$.ROLES,t)}updateRole(t,e){return this.http.put(i.N$.ROLES+"/"+e,t)}deleteRole(t){return this.http.delete(i.N$.ROLES+"/"+t)}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(s.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),t})();var l=n(44173),u=n(32789),d=n(7654),g=n(18475),p=n(22238),m=n(77001),h=n(44227),f=n(11494),Z=n(76627),v=n(54655);function C(t,e){1&t&&(a.TgZ(0,"th",16),a._uU(1,"Name"),a.qZA())}function A(t,e){if(1&t&&(a.TgZ(0,"td",17),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.hij(" ",t.name," ")}}function b(t,e){1&t&&(a.TgZ(0,"th",16),a._uU(1," Description "),a.qZA())}function T(t,e){if(1&t&&(a.TgZ(0,"td",17),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.hij(" ",t.desc," ")}}function q(t,e){1&t&&a._UZ(0,"th",16)}function _(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"td",18),a.TgZ(1,"mat-icon",19),a._uU(2,"edit"),a.qZA(),a._uU(3," \xa0 "),a.TgZ(4,"mat-icon",20),a.NdJ("click",function(){const e=a.CHM(t).$implicit;return a.oxw().delete(e.id)}),a._uU(5,"delete"),a.qZA(),a.qZA()}if(2&t){const t=e.$implicit;a.xp6(1),a.Q6J("routerLink","/security/roles/"+t.id+"/edit")}}function y(t,e){1&t&&a._UZ(0,"tr",21)}function x(t,e){1&t&&a._UZ(0,"tr",22)}function w(t,e){1&t&&(a.TgZ(0,"div",23),a.TgZ(1,"div"),a.TgZ(2,"h4",24),a._uU(3,"No role to display."),a.qZA(),a.qZA(),a.qZA())}const U=function(t){return{display:t}};let S=(()=>{class t{constructor(t,e,n,r){this.roleService=t,this.dialog=e,this.snackBar=n,this.loaderService=r,this.columns=["name","action"]}ngOnInit(){this.getAllRoles()}getAllRoles(){this.loaderService.loading(!0),this.roleService.getAllRoles().subscribe(t=>{this.loaderService.loading(!1),this.dataSource=new u.by(t)},t=>{this.loaderService.loading(!1),console.log(t)})}delete(t){this.dialog.open(d.z,{width:"26%",data:{title:"Delete role",subtitle:"Are you really sure to delete this record?"},disableClose:!0}).afterClosed().subscribe(e=>{e&&(this.loaderService.loading(!0),this.roleService.deleteRole(t).subscribe(t=>{this.loaderService.loading(!1),t.apiMessage&&t.apiMessage.error?this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.dangerData(t.apiMessage.detail)},i.Ky.flashTopDangerSnackBar())):(this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.successData(t.apiMessage.detail)},i.Ky.flashTopSuccessSnackBar())),this.getAllRoles())},t=>{this.loaderService.loading(!1),console.error(t),this.errorMessage=t.error&&t.error.apiMessage?t.error.apiMessage.detail:t.message,this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.dangerData(this.errorMessage)},i.Ky.flashTopDangerSnackBar()))}))})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c),a.Y36(p.uw),a.Y36(m.ux),a.Y36(h.D))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-role-list"]],decls:20,vars:8,consts:[[1,"m-3"],[1,"d-flex","justify-content-between","p-1","ps-4","p-1","bg-gold"],[1,"font-400","font-banner",2,"line-height","35px"],[1,"row"],[1,"col-md-12","p-0","table-header","mb-5"],[1,"no-shadow","w-100"],["mat-table","","matSort","",3,"dataSource","ngStyle"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","","class","name-class",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","action"],["mat-cell","","class","text-right",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","d-flex justify-content-center align-items-center","style","height: 40vh",4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"name-class"],["mat-cell","",1,"text-right"],[2,"color","rgb(6, 80, 51)","cursor","pointer",3,"routerLink"],[2,"color","firebrick","cursor","pointer",3,"click"],["mat-header-row",""],["mat-row",""],[1,"d-flex","justify-content-center","align-items-center",2,"height","40vh"],[1,"font-grey","font-300"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"span",2),a._uU(3,"Roles"),a.qZA(),a.qZA(),a.TgZ(4,"div",3),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"table",6),a.ynx(8,7),a.YNc(9,C,2,0,"th",8),a.YNc(10,A,2,1,"td",9),a.BQk(),a.ynx(11,10),a.YNc(12,b,2,0,"th",8),a.YNc(13,T,2,1,"td",9),a.BQk(),a.ynx(14,11),a.YNc(15,q,1,0,"th",8),a.YNc(16,_,6,1,"td",12),a.BQk(),a.YNc(17,y,1,0,"tr",13),a.YNc(18,x,1,0,"tr",14),a.qZA(),a.YNc(19,w,4,0,"div",15),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Q6J("dataSource",e.dataSource)("ngStyle",a.VKq(6,U,e.dataSource?"":"none")),a.xp6(10),a.Q6J("matHeaderRowDef",e.columns)("matHeaderRowDefSticky",!0),a.xp6(1),a.Q6J("matRowDefColumns",e.columns),a.xp6(1),a.Q6J("ngIf",!e.dataSource||!e.dataSource.data))},directives:[u.BZ,f.YE,r.PC,u.w1,u.fO,u.Dz,u.as,u.nj,r.O5,u.ge,f.nU,u.ev,Z.Hw,v.rH,u.XQ,u.Gk],styles:[""]}),t})();var O=n(3679),k=n(98295),N=n(49983);function D(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Name is "),a.TgZ(2,"strong"),a._uU(3,"required"),a.qZA(),a.qZA())}function I(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Description is "),a.TgZ(2,"strong"),a._uU(3,"required"),a.qZA(),a.qZA())}const M=function(){return["pt-1","pr-5","pl-5"]};let E=(()=>{class t{constructor(t,e,n,r){this.roleService=t,this.snackBar=e,this.activatedRoute=n,this.router=r,this.idCtrl=new O.NI("",null),this.nameCtrl=new O.NI("",O.kI.required),this.descriptionCtrl=new O.NI("",O.kI.required),this.form=new O.cw({idCtrl:this.idCtrl,nameCtrl:this.nameCtrl,descriptionCtrl:this.descriptionCtrl}),this.activatedRoute.params.subscribe(t=>{this.id=t.id,this.id&&this.getRoleById()})}ngOnInit(){}getRoleById(){this.roleService.getRoleById(this.id).subscribe(t=>{this.setForm(t)},t=>{console.log(t)})}setForm(t){this.idCtrl.setValue(t.id),this.descriptionCtrl.setValue(t.desc),this.nameCtrl.setValue(t.name)}saveOrUpdateHttpObservable(t){return this.id?this.roleService.updateRole(t,this.id):this.roleService.createRole(t)}save(){this.saveOrUpdateHttpObservable({desc:this.descriptionCtrl.value,id:this.id,name:this.nameCtrl.value}).subscribe(t=>{t.apiMessage&&t.apiMessage.error?this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.dangerData(t.apiMessage.detail)},i.Ky.flashTopDangerSnackBar())):(this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.successData(t.apiMessage.detail)},i.Ky.flashTopSuccessSnackBar())),this.router.navigate(["/security/roles"]))},t=>{console.error(t),this.errorMessage=t.error&&t.error.apiMessage?t.error.apiMessage.detail:t.message,this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.dangerData(this.errorMessage)},i.Ky.flashTopDangerSnackBar()))})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c),a.Y36(m.ux),a.Y36(v.gz),a.Y36(v.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-role-create-edit"]],decls:27,vars:7,consts:[[1,"form-min-height","m-3","bg-white"],[1,"d-flex","justify-content-between","p-1","ps-4","bg-gold"],[1,"font-400","font-banner",2,"line-height","35px"],["routerLink","/security/roles",1,"btn","btn-cancel"],[1,"white-icon"],[1,"btn","btn-save",3,"disabled","click"],[3,"ngClass"],[1,"row","pt-3"],[1,"col-md-4"],["appearance","fill",1,"w-100"],["matInput","","placeholder","Placeholder",3,"formControl"],[4,"ngIf"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"span",2),a._uU(3,"Role"),a.qZA(),a.TgZ(4,"div"),a.TgZ(5,"button",3),a.TgZ(6,"mat-icon",4),a._uU(7,"clear"),a.qZA(),a._uU(8,"\xa0Cancel "),a.qZA(),a.TgZ(9,"button",5),a.NdJ("click",function(){return e.save()}),a.TgZ(10,"mat-icon",4),a._uU(11,"save_alt"),a.qZA(),a._uU(12,"\xa0Save Class "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"div",6),a.TgZ(14,"div",7),a.TgZ(15,"div",8),a.TgZ(16,"mat-form-field",9),a.TgZ(17,"mat-label"),a._uU(18,"Name"),a.qZA(),a._UZ(19,"input",10),a.YNc(20,D,4,0,"mat-error",11),a.qZA(),a.qZA(),a.TgZ(21,"div",8),a.TgZ(22,"mat-form-field",9),a.TgZ(23,"mat-label"),a._uU(24,"Description"),a.qZA(),a._UZ(25,"input",10),a.YNc(26,I,4,0,"mat-error",11),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(9),a.Q6J("disabled",!e.form.valid),a.xp6(4),a.Q6J("ngClass",a.DdM(6,M)),a.xp6(6),a.Q6J("formControl",e.nameCtrl),a.xp6(1),a.Q6J("ngIf",e.nameCtrl.hasError("required")),a.xp6(5),a.Q6J("formControl",e.descriptionCtrl),a.xp6(1),a.Q6J("ngIf",e.descriptionCtrl.hasError("required")))},directives:[v.rH,Z.Hw,r.mk,k.KE,k.hX,N.Nt,O.Fj,O.JJ,O.oH,r.O5,k.TO],styles:[".col-md-4[_ngcontent-%COMP%]{padding:10px 40px}"]}),t})();var Y=n(58341);function R(t,e){1&t&&(a.TgZ(0,"th",20),a._uU(1,"Name"),a.qZA())}function P(t,e){if(1&t&&(a.TgZ(0,"td",21),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.hij(" ",t.name,"")}}function F(t,e){1&t&&(a.TgZ(0,"th",20),a._uU(1,"Email"),a.qZA())}function J(t,e){if(1&t&&(a.TgZ(0,"td",21),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.hij(" ",t.email,"")}}function Q(t,e){1&t&&(a.TgZ(0,"th",20),a._uU(1,"Mobile No"),a.qZA())}function B(t,e){if(1&t&&(a.TgZ(0,"td",21),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.hij(" ",t.mobileNo,"")}}function L(t,e){1&t&&(a.TgZ(0,"th",20),a._uU(1,"Gender"),a.qZA())}function j(t,e){if(1&t&&(a.TgZ(0,"td",21),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.hij(" ",t.gender,"")}}function H(t,e){1&t&&(a.TgZ(0,"th",20),a._uU(1,"Roles"),a.qZA())}function K(t,e){if(1&t&&(a.TgZ(0,"mat-chip",23),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.Oqu(t)}}function z(t,e){if(1&t&&(a.TgZ(0,"td",21),a.TgZ(1,"mat-chip-list"),a.YNc(2,K,2,1,"mat-chip",22),a.qZA(),a.qZA()),2&t){const t=e.$implicit;a.xp6(2),a.Q6J("ngForOf",t.roles.split(","))}}function $(t,e){1&t&&(a.TgZ(0,"th",20),a._uU(1,"Status"),a.qZA())}function V(t,e){if(1&t&&(a.TgZ(0,"td",21),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.hij(" ",t.status,"")}}function X(t,e){1&t&&a._UZ(0,"th",20)}function G(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"td",24),a.TgZ(1,"mat-icon",25),a._uU(2,"edit"),a.qZA(),a._uU(3," \xa0 "),a.TgZ(4,"mat-icon",26),a.NdJ("click",function(){const e=a.CHM(t).$implicit;return a.oxw().delete(e.id)}),a._uU(5,"delete"),a.qZA(),a.qZA()}if(2&t){const t=e.$implicit;a.xp6(1),a.Q6J("routerLink","/security/users/"+t.id+"/edit")}}function W(t,e){1&t&&a._UZ(0,"tr",27)}function tt(t,e){1&t&&a._UZ(0,"tr",28)}function et(t,e){1&t&&(a.TgZ(0,"div",29),a.TgZ(1,"div"),a.TgZ(2,"h4",30),a._uU(3,"No user to display."),a.qZA(),a.qZA(),a.qZA())}const nt=function(t){return{display:t}};let rt=(()=>{class t{constructor(t,e,n,r){this.userService=t,this.dialog=e,this.snackBar=n,this.loaderService=r,this.columns=["name","email","mobileNo","gender","roles","status","action"]}ngOnInit(){this.getAllUsers()}getAllUsers(){this.loaderService.loading(!0),this.userService.getAllUsers().subscribe(t=>{this.loaderService.loading(!1),this.dataSource=new u.by(t)},t=>{this.loaderService.loading(!1),console.log(t)})}delete(t){this.dialog.open(d.z,{width:"26%",data:{title:"Delete role",subtitle:"Are you really sure to delete this record?"},disableClose:!0}).afterClosed().subscribe(e=>{e&&(this.loaderService.loading(!0),this.userService.deleteUser(t).subscribe(t=>{this.loaderService.loading(!1),t.apiMessage&&t.apiMessage.error?this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.dangerData(t.apiMessage.detail)},i.Ky.flashTopDangerSnackBar())):(this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.successData(t.apiMessage.detail)},i.Ky.flashTopSuccessSnackBar())),this.getAllUsers())},t=>{this.loaderService.loading(!1),console.error(t),this.errorMessage=t.error&&t.error.apiMessage?t.error.apiMessage.detail:t.message,this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.dangerData(this.errorMessage)},i.Ky.flashTopDangerSnackBar()))}))})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(l.K),a.Y36(p.uw),a.Y36(m.ux),a.Y36(h.D))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-user-list"]],decls:32,vars:8,consts:[[1,"m-3"],[1,"d-flex","justify-content-between","p-1","ps-4","p-1","bg-gold"],[1,"font-400","font-banner",2,"line-height","35px"],[1,"row"],[1,"col-md-12","p-0","table-header","mb-5"],[1,"no-shadow","w-100"],["mat-table","","matSort","",3,"dataSource","ngStyle"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","","class","name-class",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","mobileNo"],["matColumnDef","gender"],["matColumnDef","roles"],["matColumnDef","status"],["matColumnDef","action"],["mat-cell","","class","text-right",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","d-flex justify-content-center align-items-center","style","height: 40vh;",4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"name-class"],["selected","",4,"ngFor","ngForOf"],["selected",""],["mat-cell","",1,"text-right"],[2,"color","rgb(6, 80, 51)","cursor","pointer",3,"routerLink"],[2,"color","firebrick","cursor","pointer",3,"click"],["mat-header-row",""],["mat-row",""],[1,"d-flex","justify-content-center","align-items-center",2,"height","40vh"],[1,"font-grey","font-300"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"span",2),a._uU(3,"Users"),a.qZA(),a.qZA(),a.TgZ(4,"div",3),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"table",6),a.ynx(8,7),a.YNc(9,R,2,0,"th",8),a.YNc(10,P,2,1,"td",9),a.BQk(),a.ynx(11,10),a.YNc(12,F,2,0,"th",8),a.YNc(13,J,2,1,"td",9),a.BQk(),a.ynx(14,11),a.YNc(15,Q,2,0,"th",8),a.YNc(16,B,2,1,"td",9),a.BQk(),a.ynx(17,12),a.YNc(18,L,2,0,"th",8),a.YNc(19,j,2,1,"td",9),a.BQk(),a.ynx(20,13),a.YNc(21,H,2,0,"th",8),a.YNc(22,z,3,1,"td",9),a.BQk(),a.ynx(23,14),a.YNc(24,$,2,0,"th",8),a.YNc(25,V,2,1,"td",9),a.BQk(),a.ynx(26,15),a.YNc(27,X,1,0,"th",8),a.YNc(28,G,6,1,"td",16),a.BQk(),a.YNc(29,W,1,0,"tr",17),a.YNc(30,tt,1,0,"tr",18),a.qZA(),a.YNc(31,et,4,0,"div",19),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Q6J("dataSource",e.dataSource)("ngStyle",a.VKq(6,nt,e.dataSource?"":"none")),a.xp6(22),a.Q6J("matHeaderRowDef",e.columns)("matHeaderRowDefSticky",!0),a.xp6(1),a.Q6J("matRowDefColumns",e.columns),a.xp6(1),a.Q6J("ngIf",!e.dataSource||!e.dataSource.data))},directives:[u.BZ,f.YE,r.PC,u.w1,u.fO,u.Dz,u.as,u.nj,r.O5,u.ge,f.nU,u.ev,Y.qn,r.sg,Y.HS,Z.Hw,v.rH,u.XQ,u.Gk],styles:[".mat-chip[_ngcontent-%COMP%]{font-size:12px!important;letter-spacing:.5px;font-weight:300!important;width:69px!important}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#000000d1!important;color:#fff}.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{min-height:28px!important}"]}),t})();var it=n(62831);function ot(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function at(t,e){if(1&t&&(a.TgZ(0,"div",18),a.YNc(1,ot,2,0,"div",19),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.nameCtrl.hasError("required"))}}function st(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function ct(t,e){if(1&t&&(a.TgZ(0,"div",18),a.YNc(1,st,2,0,"div",19),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.emailCtrl.hasError("required"))}}function lt(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function ut(t,e){if(1&t&&(a.TgZ(0,"div",18),a.YNc(1,lt,2,0,"div",19),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.mobileNoCtrl.hasError("required"))}}function dt(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function gt(t,e){if(1&t&&(a.TgZ(0,"div",18),a.YNc(1,dt,2,0,"div",19),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.statusCtrl.hasError("required"))}}function pt(t,e){if(1&t&&(a.TgZ(0,"option",20),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.Q6J("value",t.val),a.xp6(1),a.hij(" ",t.val," ")}}function mt(t,e){1&t&&(a.TgZ(0,"div"),a._uU(1,"Required"),a.qZA())}function ht(t,e){if(1&t&&(a.TgZ(0,"div",18),a.YNc(1,mt,2,0,"div",19),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.rolesFctrl.hasError("required"))}}function ft(t,e){if(1&t&&(a.TgZ(0,"option",21),a._uU(1),a.qZA()),2&t){const t=e.$implicit,n=a.oxw();a.Q6J("value",t.name)("selected",!!n.rolesFctrl.value&&n.rolesFctrl.value.includes(t)),a.xp6(1),a.hij(" ",t.name," ")}}const Zt=function(t){return{spacer:t}};let vt=(()=>{class t{constructor(t,e,n,r,i){this.userService=t,this.snackBar=e,this.activatedRoute=n,this.router=r,this.roleService=i,this.statuses=it.t3,this.genders=it.n4,this.nameCtrl=new O.NI("",O.kI.required),this.emailCtrl=new O.NI("",O.kI.required),this.mobileNoCtrl=new O.NI("",O.kI.required),this.genderCtrl=new O.NI("",O.kI.required),this.statusCtrl=new O.NI("",O.kI.required),this.rolesFctrl=new O.NI,this.form=new O.cw({nameCtrl:this.nameCtrl,emailCtrl:this.emailCtrl,mobileNoCtrl:this.mobileNoCtrl,genderCtrl:this.genderCtrl,statusCtrl:this.statusCtrl,rolesFctrl:this.rolesFctrl}),this.activatedRoute.params.subscribe(t=>{this.id=t.id,this.id&&this.getUserById()})}ngOnInit(){this.getRoles()}getUserById(){this.userService.getUserById(this.id).subscribe(t=>{this.setForm(t)},t=>{console.log(t)})}getRoles(){this.roleService.getAllRoles().subscribe(t=>{this.roles=t},t=>{console.error(t)})}setForm(t){this.nameCtrl.setValue(t.name),this.emailCtrl.setValue(t.email),this.mobileNoCtrl.setValue(t.mobileNo),this.genderCtrl.setValue(t.gender),this.statusCtrl.setValue(t.status),this.rolesFctrl.setValue(t.roles?t.roles.split(","):"")}saveOrUpdateHttpObservable(t){return this.id?this.userService.updateUser(t,this.id):this.userService.createUser(t)}save(){const t={id:this.id?parseInt(this.id.toString()):null,name:this.nameCtrl.value,email:this.emailCtrl.value,gender:this.genderCtrl.value,mobileNo:this.mobileNoCtrl.value,roles:this.rolesFctrl.value?this.rolesFctrl.value.join():null,status:this.statusCtrl.value};this.saveOrUpdateHttpObservable(t).subscribe(t=>{this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.successData(this.id?"Updated":"Saved")},i.Ky.flashTopSuccessSnackBar())),this.router.navigate(["/security/users"])},t=>{console.error(t),this.snackBar.openFromComponent(g.a,Object.assign({data:i.Ky.dangerData("Something went wrong.")},i.Ky.flashTopDangerSnackBar()))})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(l.K),a.Y36(m.ux),a.Y36(v.gz),a.Y36(v.F0),a.Y36(c))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-user-create-edit"]],decls:57,vars:16,consts:[[1,"form-min-height","m-3","bg-white"],[1,"d-flex","justify-content-between","p-1","ps-4","bg-gold"],[1,"font-400","font-banner",2,"line-height","35px"],["routerLink","/security/users",1,"btn","btn-cancel"],[1,"white-icon"],[1,"btn","btn-save",3,"disabled","click"],[1,"form-content"],[1,"input-container",3,"ngClass"],[1,"label-container"],["for",""],[1,"required"],["class","error",4,"ngIf"],["type","text","id","nameCtrl","disabled","",1,"w-100",3,"formControl"],[1,"input-container"],["type","text","disabled","",1,"w-100",3,"formControl"],[1,"w-100",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"error"],[4,"ngIf"],[3,"value"],[3,"value","selected"]],template:function(t,e){1&t&&(a.TgZ(0,"main"),a.TgZ(1,"div",0),a.TgZ(2,"div",1),a.TgZ(3,"span",2),a._uU(4,"User"),a.qZA(),a.TgZ(5,"div"),a.TgZ(6,"button",3),a.TgZ(7,"mat-icon",4),a._uU(8,"clear"),a.qZA(),a._uU(9,"\xa0Cancel "),a.qZA(),a.TgZ(10,"button",5),a.NdJ("click",function(){return e.save()}),a.TgZ(11,"mat-icon",4),a._uU(12,"save_alt"),a.qZA(),a._uU(13,"\xa0Save Class "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(14,"div",6),a.TgZ(15,"div",7),a.TgZ(16,"div",8),a.TgZ(17,"label",9),a._uU(18,"Name "),a.TgZ(19,"span",10),a._uU(20,"*"),a.qZA(),a.qZA(),a.YNc(21,at,2,1,"div",11),a.qZA(),a._UZ(22,"input",12),a.qZA(),a.TgZ(23,"div",13),a.TgZ(24,"div",8),a.TgZ(25,"label",9),a._uU(26,"Email "),a.TgZ(27,"span",10),a._uU(28,"*"),a.qZA(),a.qZA(),a.YNc(29,ct,2,1,"div",11),a.qZA(),a._UZ(30,"input",14),a.qZA(),a.TgZ(31,"div",13),a.TgZ(32,"div",8),a.TgZ(33,"label",9),a._uU(34,"Mobile Number "),a.TgZ(35,"span",10),a._uU(36,"*"),a.qZA(),a.qZA(),a.YNc(37,ut,2,1,"div",11),a.qZA(),a._UZ(38,"input",14),a.qZA(),a.TgZ(39,"div",13),a.TgZ(40,"div",8),a.TgZ(41,"label",9),a._uU(42,"Status "),a.TgZ(43,"span",10),a._uU(44,"*"),a.qZA(),a.qZA(),a.YNc(45,gt,2,1,"div",11),a.qZA(),a.TgZ(46,"select",15),a.YNc(47,pt,2,2,"option",16),a.qZA(),a.qZA(),a.TgZ(48,"div",13),a.TgZ(49,"div",8),a.TgZ(50,"label",9),a._uU(51,"Roles "),a.TgZ(52,"span",10),a._uU(53,"*"),a.qZA(),a.qZA(),a.YNc(54,ht,2,1,"div",11),a.qZA(),a.TgZ(55,"select",15),a.YNc(56,ft,2,3,"option",17),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(10),a.Q6J("disabled",!e.form.valid),a.xp6(5),a.Q6J("ngClass",a.VKq(14,Zt,!e.id)),a.xp6(6),a.Q6J("ngIf",e.nameCtrl.errors&&e.nameCtrl.dirty||e.nameCtrl.touched),a.xp6(1),a.Q6J("formControl",e.nameCtrl),a.xp6(7),a.Q6J("ngIf",e.emailCtrl.errors&&e.emailCtrl.dirty||e.emailCtrl.touched),a.xp6(1),a.Q6J("formControl",e.emailCtrl),a.xp6(7),a.Q6J("ngIf",e.mobileNoCtrl.errors&&e.mobileNoCtrl.dirty||e.mobileNoCtrl.touched),a.xp6(1),a.Q6J("formControl",e.mobileNoCtrl),a.xp6(7),a.Q6J("ngIf",e.statusCtrl.errors&&e.statusCtrl.dirty||e.statusCtrl.touched),a.xp6(1),a.Q6J("formControl",e.statusCtrl),a.xp6(1),a.Q6J("ngForOf",e.statuses),a.xp6(7),a.Q6J("ngIf",e.rolesFctrl.errors&&e.rolesFctrl.dirty||e.rolesFctrl.touched),a.xp6(1),a.Q6J("formControl",e.rolesFctrl),a.xp6(1),a.Q6J("ngForOf",e.roles))},directives:[v.rH,Z.Hw,r.mk,r.O5,O.Fj,O.JJ,O.oH,O.EJ,r.sg,O.YN,O.Kr],styles:[".input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:2px}.input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px;font-weight:500}.input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]{color:red;font-weight:600}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;height:24px;border:2px solid #0000008c;border-radius:2px}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{background-color:rgba(66,66,66,.07);border-color:#d1d1d1}.input-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red;font-size:12px;font-weight:500}main[_ngcontent-%COMP%]{height:calc(100vh - 36px);overflow-y:auto}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{padding:10px 60px;display:flex;flex-wrap:wrap;margin-top:25px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{width:calc(100% / 4);padding-right:25px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:13px;font-weight:500}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{padding-bottom:20px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .multiple-select[_ngcontent-%COMP%]{height:50px!important}"]}),t})();var Ct=n(29768),At=n(38445);const bt=[{path:"roles",component:S,canActivate:[At.d]},{path:"roles/add",component:E,canActivate:[At.d]},{path:"roles/:id/edit",component:E,canActivate:[At.d]},{path:"users",component:rt,canActivate:[At.d]},{path:"users/add",component:vt,canActivate:[At.d]},{path:"users/:id/edit",component:vt,canActivate:[At.d]}];let Tt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[l.K,c],imports:[[r.ez,Ct.q,v.Bz.forChild(bt),O.u5,O.UX]]}),t})()},7654:function(t,e,n){"use strict";n.d(e,{z:function(){return a}});var r=n(22238),i=n(37716),o=n(76627);let a=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}cancel(){this.dialogRef.close()}ok(){this.dialogRef.close(!0)}close(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(r.so),i.Y36(r.WI))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-confirmation-dialog"]],decls:15,vars:2,consts:[[1,"d-flex","justify-content-between","pl-4","pt-3","pr-2"],[1,"cursor-pointer",3,"click"],[1,"p-4"],[1,"pt-4","pb-4"],[1,"d-flex","justify-content-end","pt-2"],[1,"btn","btn-cancel",3,"click"],[1,"btn","btn-save",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"h4"),i._uU(2),i.qZA(),i.TgZ(3,"div"),i.TgZ(4,"mat-icon",1),i.NdJ("click",function(){return e.close()}),i._uU(5,"cancel"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(6,"div",2),i.TgZ(7,"div",3),i._uU(8),i.qZA(),i.TgZ(9,"div",4),i.TgZ(10,"button",5),i.NdJ("click",function(){return e.cancel()}),i._uU(11,"Cancel"),i.qZA(),i._uU(12,"\xa0 "),i.TgZ(13,"button",6),i.NdJ("click",function(){return e.ok()}),i._uU(14,"Ok"),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(2),i.Oqu(e.data.title),i.xp6(6),i.hij(" ",e.data.subtitle," "))},directives:[o.Hw],styles:[""]}),t})()},18475:function(t,e,n){"use strict";n.d(e,{a:function(){return a}});var r=n(77001),i=n(37716),o=n(76627);let a=(()=>{class t{constructor(t){this.data=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(r.qD))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-snackbar-info"]],decls:6,vars:2,consts:[[1,"d-flex","justify-content-center","align-items-center"],[1,"font-white"],[1,"font-500","font-title-md"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"mat-icon",1),i._uU(2),i.qZA(),i._uU(3,"\xa0 "),i.TgZ(4,"span",2),i._uU(5),i.qZA(),i.qZA()),2&t&&(i.xp6(2),i.Oqu(e.data.icon),i.xp6(3),i.Oqu(e.data.message))},directives:[o.Hw],styles:[".blue-snackbar[_ngcontent-%COMP%]{background:#2196f3}.mat-icon[_ngcontent-%COMP%]{font-size:24px!important;color:#f5f5f5!important}"]}),t})()}}]);