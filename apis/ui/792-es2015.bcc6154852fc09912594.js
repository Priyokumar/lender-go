(self.webpackChunkui=self.webpackChunkui||[]).push([[792],{89792:function(t,n,e){"use strict";e.r(n),e.d(n,{AccountModule:function(){return Tt}});var o=e(38583),c=e(34571),a=e(32789),i=e(62831),l=e(7654),u=e(18475),r=e(34709),s=e(37716),d=e(22238),g=e(77001),Z=e(44227),p=e(12542),m=e(11494),A=e(54655),h=e(76627),q=e(29845);const f=function(){return["/accounts/add"]};function _(t,n){1&t&&(s.TgZ(0,"button",24),s.TgZ(1,"mat-icon",25),s._uU(2,"add"),s.qZA(),s._uU(3,"\xa0Add Account "),s.qZA()),2&t&&s.Q6J("routerLink",s.DdM(1,f))}function v(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1," Account No. "),s.qZA())}function T(t,n){if(1&t&&(s.TgZ(0,"td",27),s.TgZ(1,"a",28),s._uU(2),s.qZA(),s.qZA()),2&t){const t=n.$implicit;s.xp6(1),s.Q6J("routerLink","/accounts/"+t.id+"/view"),s.xp6(1),s.Oqu(t.accountNo)}}function C(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1," Customer Name "),s.qZA())}function O(t,n){if(1&t&&(s.TgZ(0,"td",27),s._uU(1),s.ALo(2,"async"),s.qZA()),2&t){const t=n.$implicit;let e;s.xp6(1),s.hij(" ",null==(e=s.lcZ(2,1,t.customer))?null:e.name," ")}}function b(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1," Email "),s.qZA())}function x(t,n){if(1&t&&(s.TgZ(0,"td",27),s._uU(1),s.ALo(2,"async"),s.qZA()),2&t){const t=n.$implicit;let e;s.xp6(1),s.hij(" ",null==(e=s.lcZ(2,1,t.customer))?null:e.email," ")}}function y(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1," Mobile No. "),s.qZA())}function U(t,n){if(1&t&&(s.TgZ(0,"td",27),s._uU(1),s.ALo(2,"async"),s.qZA()),2&t){const t=n.$implicit;let e;s.xp6(1),s.hij(" ",null==(e=s.lcZ(2,1,t.customer))?null:e.mobileNo," ")}}function M(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1," Product Name "),s.qZA())}function P(t,n){if(1&t&&(s.TgZ(0,"td",27),s._uU(1),s.ALo(2,"async"),s.qZA()),2&t){const t=n.$implicit;let e;s.xp6(1),s.hij(" ",null==(e=s.lcZ(2,1,t.product))?null:e.name," ")}}function w(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1," Loan Amount "),s.qZA())}function L(t,n){if(1&t&&(s.TgZ(0,"td",27),s._uU(1),s.ALo(2,"inr"),s.ALo(3,"async"),s.qZA()),2&t){const t=n.$implicit;let e;s.xp6(1),s.hij(" ",s.lcZ(2,1,null==(e=s.lcZ(3,3,t.lead))?null:e.amount)," ")}}function S(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1," Interest % "),s.qZA())}function N(t,n){if(1&t&&(s.TgZ(0,"td",27),s._uU(1),s.ALo(2,"async"),s.qZA()),2&t){const t=n.$implicit;let e;s.xp6(1),s.hij(" ",null==(e=s.lcZ(2,1,t.product))?null:e.interest," ")}}function D(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1,"Frequency"),s.qZA())}function I(t,n){if(1&t&&(s.TgZ(0,"td",27),s._uU(1),s.ALo(2,"async"),s.qZA()),2&t){const t=n.$implicit;let e;s.xp6(1),s.hij(" ",null==(e=s.lcZ(2,1,t.product))?null:e.frequency," ")}}function k(t,n){1&t&&(s.TgZ(0,"th",26),s._uU(1,"Status"),s.qZA())}const Y=function(t,n,e,o){return{"font-orange":t,"font-green":n,"font-secondary-blue":e,"font-red":o}};function B(t,n){if(1&t&&(s.TgZ(0,"td",27),s.TgZ(1,"div",29),s._uU(2),s.qZA(),s.qZA()),2&t){const t=n.$implicit,e=s.oxw();s.xp6(1),s.Q6J("ngClass",s.l5B(2,Y,t.status===e.accountStatus.CLOSED,t.status===e.accountStatus.DISBURSED,t.status===e.accountStatus.CREATED,t.status===e.accountStatus.REJECTED)),s.xp6(1),s.hij(" ",t.status," ")}}function Q(t,n){1&t&&s._UZ(0,"th",26)}function J(t,n){if(1&t&&(s.TgZ(0,"td",30),s.TgZ(1,"mat-icon",31),s._uU(2,"edit "),s.qZA(),s.qZA()),2&t){const t=n.$implicit;s.xp6(1),s.Q6J("routerLink","/accounts/"+t.id+"/edit")}}function j(t,n){1&t&&s._UZ(0,"tr",32)}function R(t,n){1&t&&s._UZ(0,"tr",33)}function F(t,n){1&t&&(s.TgZ(0,"div",34),s.TgZ(1,"div"),s.TgZ(2,"h4",35),s._uU(3,"No lead to display."),s.qZA(),s.qZA(),s.qZA())}const K=function(t){return{display:t}};let z=(()=>{class t{constructor(t,n,e,o,c){this.accountService=t,this.dialog=n,this.snackBar=e,this.loaderService=o,this.authService=c,this.columns=["accountNo","customer","email","mobileNo","product","amount","interest","frequency","status","action"],this.accountStatus=i.dp,this.userRole=i.i4}ngOnInit(){this.getAllAccounts(),this.roles=this.authService.getUserRoles()}getAllAccounts(){this.loaderService.loading(!0),this.accountService.getAccounts().subscribe(t=>{this.loaderService.loading(!1),this.dataSource=new a.by(t)},t=>{this.loaderService.loading(!1),console.log(t)})}delete(t){this.dialog.open(l.z,{width:"26%",data:{title:"Delete Account",subtitle:"Are you really sure to delete this record?"},disableClose:!0}).afterClosed().subscribe(n=>{n&&(this.loaderService.loading(!0),this.accountService.deleteAccount(t).subscribe(t=>{this.loaderService.loading(!1),this.snackBar.openFromComponent(u.a,Object.assign({data:r.Ky.successData("Deleted")},r.Ky.flashTopSuccessSnackBar())),this.getAllAccounts()},t=>{this.loaderService.loading(!1),console.error(t),this.snackBar.openFromComponent(u.a,Object.assign({data:r.Ky.dangerData("Something went wrong")},r.Ky.flashTopDangerSnackBar()))}))})}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(c.B),s.Y36(d.uw),s.Y36(g.ux),s.Y36(Z.D),s.Y36(p.e))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-account-list"]],decls:44,vars:11,consts:[[1,"m-3"],[1,"d-flex","justify-content-between","p-1","ps-4","bg-gold"],[1,"font-400","font-banner",2,"line-height","35px"],["class","btn btn-save",3,"routerLink",4,"ngIf"],[1,"row"],[1,"col-md-12","p-0","table-header","mb-5"],[1,"no-shadow","w-100"],["mat-table","","matSort","",3,"dataSource","ngStyle"],["matColumnDef","accountNo"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","","class","name-class",4,"matCellDef"],["matColumnDef","customer"],["matColumnDef","email"],["matColumnDef","mobileNo"],["matColumnDef","product"],["matColumnDef","amount"],["matColumnDef","interest"],["matColumnDef","frequency"],["matColumnDef","status"],["matColumnDef","action"],["mat-cell","","class","text-right",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","d-flex justify-content-center align-items-center","style","height: 40vh",4,"ngIf"],[1,"btn","btn-save",3,"routerLink"],[1,"white-icon"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",1,"name-class"],[3,"routerLink"],[1,"font-500",3,"ngClass"],["mat-cell","",1,"text-right"],[2,"color","rgb(6, 80, 51)","cursor","pointer",3,"routerLink"],["mat-header-row",""],["mat-row",""],[1,"d-flex","justify-content-center","align-items-center",2,"height","40vh"],[1,"font-grey","font-300"]],template:function(t,n){if(1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"span",2),s._uU(3,"Accounts"),s.qZA(),s.TgZ(4,"div"),s.YNc(5,_,4,2,"button",3),s.ALo(6,"async"),s.qZA(),s.qZA(),s.TgZ(7,"div",4),s.TgZ(8,"div",5),s.TgZ(9,"div",6),s.TgZ(10,"table",7),s.ynx(11,8),s.YNc(12,v,2,0,"th",9),s.YNc(13,T,3,2,"td",10),s.BQk(),s.ynx(14,11),s.YNc(15,C,2,0,"th",9),s.YNc(16,O,3,3,"td",10),s.BQk(),s.ynx(17,12),s.YNc(18,b,2,0,"th",9),s.YNc(19,x,3,3,"td",10),s.BQk(),s.ynx(20,13),s.YNc(21,y,2,0,"th",9),s.YNc(22,U,3,3,"td",10),s.BQk(),s.ynx(23,14),s.YNc(24,M,2,0,"th",9),s.YNc(25,P,3,3,"td",10),s.BQk(),s.ynx(26,15),s.YNc(27,w,2,0,"th",9),s.YNc(28,L,4,5,"td",10),s.BQk(),s.ynx(29,16),s.YNc(30,S,2,0,"th",9),s.YNc(31,N,3,3,"td",10),s.BQk(),s.ynx(32,17),s.YNc(33,D,2,0,"th",9),s.YNc(34,I,3,3,"td",10),s.BQk(),s.ynx(35,18),s.YNc(36,k,2,0,"th",9),s.YNc(37,B,3,7,"td",10),s.BQk(),s.ynx(38,19),s.YNc(39,Q,1,0,"th",9),s.YNc(40,J,3,1,"td",20),s.BQk(),s.YNc(41,j,1,0,"tr",21),s.YNc(42,R,1,0,"tr",22),s.qZA(),s.YNc(43,F,4,0,"div",23),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){let t;s.xp6(5),s.Q6J("ngIf",null==(t=s.lcZ(6,7,n.roles))?null:t.includes(n.userRole.INVESTOR)),s.xp6(5),s.Q6J("dataSource",n.dataSource)("ngStyle",s.VKq(9,K,n.dataSource?"":"none")),s.xp6(31),s.Q6J("matHeaderRowDef",n.columns)("matHeaderRowDefSticky",!0),s.xp6(1),s.Q6J("matRowDefColumns",n.columns),s.xp6(1),s.Q6J("ngIf",!n.dataSource||!n.dataSource.data)}},directives:[o.O5,a.BZ,m.YE,o.PC,a.w1,a.fO,a.Dz,a.as,a.nj,A.rH,h.Hw,a.ge,m.nU,a.ev,A.yS,o.mk,a.XQ,a.Gk],pipes:[o.Ov,q.K],styles:[""]}),t})();var $=e(64762),E=e(3679),H=e(43190),V=e(15989),X=e(63718),G=e(51095);function W(t,n){1&t&&(s.TgZ(0,"div",30),s._uU(1," Select Lead "),s.qZA())}function tt(t,n){1&t&&(s.TgZ(0,"mat-icon",31),s._uU(1,"arrow_drop_down"),s.qZA())}function nt(t,n){1&t&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function et(t,n){if(1&t&&(s.TgZ(0,"div",32),s.YNc(1,nt,2,0,"div",33),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.createdAtCtrl.hasError("required"))}}function ot(t,n){1&t&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function ct(t,n){if(1&t&&(s.TgZ(0,"div",32),s.YNc(1,ot,2,0,"div",33),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.repaymentDateCtrl.hasError("required"))}}function at(t,n){1&t&&(s.TgZ(0,"div"),s._uU(1,"Required"),s.qZA())}function it(t,n){if(1&t&&(s.TgZ(0,"div",32),s.YNc(1,at,2,0,"div",33),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.statusCtrl.hasError("required"))}}function lt(t,n){if(1&t&&(s.TgZ(0,"option",34),s._uU(1),s.qZA()),2&t){const t=n.$implicit;s.Q6J("value",t.val),s.xp6(1),s.hij(" ",t.val," ")}}const ut=function(t){return{spacer:t}};let rt=(()=>{class t{constructor(t,n,e,o,c,a){this.accountService=t,this.leadService=n,this.snackBar=e,this.activatedRoute=o,this.router=c,this.dialog=a,this.showTooltip=!1,this.accountStatuses=i.Nt,this.accountNoCtrl=new E.NI({value:"",disabled:!0},E.kI.required),this.createdAtCtrl=new E.NI("",E.kI.required),this.repaymentDateCtrl=new E.NI("",E.kI.required),this.statusCtrl=new E.NI("",E.kI.required),this.form=new E.cw({accountNoCtrl:this.accountNoCtrl,repaymentDateCtrl:this.repaymentDateCtrl,statusCtrl:this.statusCtrl,createdAtCtrl:this.createdAtCtrl}),this.activatedRoute.params.subscribe(t=>{this.id=t.id,this.id&&this.getAccountById()}),this.accountNoCtrl.disable()}ngOnInit(){setTimeout(()=>{this.showTooltip=!0},1e3),setTimeout(()=>{this.showTooltip=!1},5e3)}getAccountById(){this.accountService.getAccountById(this.id).pipe((0,H.w)(t=>(this.account=t,this.setForm(t),this.leadService.getLeadByLeadId(t.leadId)))).subscribe(t=>{this.selectedLead=t},t=>{console.log(t)})}setForm(t){const n=new Date(t.repaymentDate),e=`${n.getFullYear()}-${n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1}-${n.getDate()<10?"0"+n.getDate():n.getDate()}`,o=new Date(t.dateOfCreation),c=`${o.getFullYear()}-${o.getMonth()+1<10?"0"+(o.getMonth()+1):o.getMonth()+1}-${o.getDate()<10?"0"+o.getDate():o.getDate()}`;this.accountNoCtrl.setValue(t.accountNo),this.createdAtCtrl.setValue(c),this.repaymentDateCtrl.setValue(e),this.statusCtrl.setValue(t.status)}saveOrUpdateHttpObservable(t){return this.id?this.accountService.updateAccount(t,this.id):this.accountService.createAccount(t)}save(){const t=this.repaymentDateCtrl.value.split("-"),n=this.createdAtCtrl.value.split("-"),e=new Date(t[0],parseInt(t[1])-1,t[2]),o=new Date(n[0],parseInt(n[1])-1,n[2]),c={id:this.id?parseInt(this.id.toString()):null,status:this.statusCtrl.value,accountNo:this.accountNoCtrl.value,leadId:this.selectedLead.leadId,repaymentDate:e,dateOfCreation:o,customerId:this.selectedLead.customerId,productId:this.selectedLead.productId};this.saveOrUpdateHttpObservable(c).subscribe(t=>{let n="Saved";this.id&&(n="Updated"),this.snackBar.openFromComponent(u.a,Object.assign({data:r.Ky.successData(n)},r.Ky.flashTopSuccessSnackBar())),this.router.navigate(["/accounts"])},t=>{console.error(t),this.snackBar.openFromComponent(u.a,Object.assign({data:r.Ky.dangerData("Something went wrong.")},r.Ky.flashTopDangerSnackBar()))})}selectLead(){this.dialog.open(V.J,{width:"65%"}).afterClosed().subscribe(t=>(0,$.mG)(this,void 0,void 0,function*(){t&&(this.selectedLead=t)}))}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(c.B),s.Y36(X.y),s.Y36(g.ux),s.Y36(A.gz),s.Y36(A.F0),s.Y36(d.uw))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-account-create-edit"]],decls:128,vars:41,consts:[[1,"form-min-height","m-3","bg-white"],[1,"d-flex","justify-content-between","p-1","ps-4","bg-gold"],[1,"font-400","font-banner",2,"line-height","35px"],["routerLink","/accounts",1,"btn","btn-cancel"],[1,"white-icon"],[1,"btn","btn-save",3,"disabled","click"],[1,"form-content"],[1,"customer-product-content","pb-3"],[1,"customer"],[1,"d-flex","align-items-center","search"],[1,"select-text"],["mat-icon-button","",3,"click"],[1,"font-green"],["class","tooltip-message mat-elevation-z12",4,"ngIf"],["class","tooltip-caret",4,"ngIf"],[1,"d-flex","field"],[1,"customer","mt-3"],[1,"d-flex","align-items-center","search","mb-2"],[1,"product","mt-3"],[1,"account"],[1,"input-container",3,"ngClass"],[1,"label-container"],["for",""],["type","text","id","amountCtrl",3,"formControl"],[1,"input-container"],[1,"required"],["class","error",4,"ngIf"],["type","date",3,"formControl"],[1,"w-100",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"tooltip-message","mat-elevation-z12"],[1,"tooltip-caret"],[1,"error"],[4,"ngIf"],[3,"value"]],template:function(t,n){if(1&t&&(s.TgZ(0,"main"),s.TgZ(1,"div",0),s.TgZ(2,"div",1),s.TgZ(3,"span",2),s._uU(4,"Account"),s.qZA(),s.TgZ(5,"div"),s.TgZ(6,"button",3),s.TgZ(7,"mat-icon",4),s._uU(8,"clear"),s.qZA(),s._uU(9,"\xa0Cancel "),s.qZA(),s.TgZ(10,"button",5),s.NdJ("click",function(){return n.save()}),s.TgZ(11,"mat-icon",4),s._uU(12,"save_alt"),s.qZA(),s._uU(13,"\xa0Save Account "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"div",6),s.TgZ(15,"div",7),s.TgZ(16,"div",8),s.TgZ(17,"div",9),s.TgZ(18,"div",10),s._uU(19,"Lead"),s.qZA(),s.TgZ(20,"button",11),s.NdJ("click",function(){return n.selectLead()}),s.TgZ(21,"mat-icon",12),s._uU(22,"search"),s.qZA(),s.qZA(),s.YNc(23,W,2,0,"div",13),s.YNc(24,tt,2,0,"mat-icon",14),s.qZA(),s.TgZ(25,"div",15),s.TgZ(26,"label"),s._uU(27,"Lead Id :"),s.qZA(),s.TgZ(28,"div"),s._uU(29),s.qZA(),s.qZA(),s.TgZ(30,"div",15),s.TgZ(31,"label"),s._uU(32,"Lead Status :"),s.qZA(),s.TgZ(33,"div"),s._uU(34),s.qZA(),s.qZA(),s.TgZ(35,"div",15),s.TgZ(36,"label"),s._uU(37,"Amount :"),s.qZA(),s.TgZ(38,"div"),s._uU(39),s.qZA(),s.qZA(),s.qZA(),s.TgZ(40,"div",16),s.TgZ(41,"div",17),s.TgZ(42,"div",10),s._uU(43,"Customer"),s.qZA(),s.qZA(),s.TgZ(44,"div",15),s.TgZ(45,"label"),s._uU(46,"Customer Id :"),s.qZA(),s.TgZ(47,"div"),s._uU(48),s.ALo(49,"async"),s.qZA(),s.qZA(),s.TgZ(50,"div",15),s.TgZ(51,"label"),s._uU(52,"Customer Name :"),s.qZA(),s.TgZ(53,"div"),s._uU(54),s.ALo(55,"async"),s.qZA(),s.qZA(),s.TgZ(56,"div",15),s.TgZ(57,"label"),s._uU(58,"Gender :"),s.qZA(),s.TgZ(59,"div"),s._uU(60),s.ALo(61,"async"),s.qZA(),s.qZA(),s.TgZ(62,"div",15),s.TgZ(63,"label"),s._uU(64,"Mobile Number :"),s.qZA(),s.TgZ(65,"div"),s._uU(66),s.ALo(67,"async"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(68,"div",18),s.TgZ(69,"div",17),s.TgZ(70,"div",10),s._uU(71,"Product"),s.qZA(),s.qZA(),s.TgZ(72,"div",15),s.TgZ(73,"label"),s._uU(74,"Product Id :"),s.qZA(),s.TgZ(75,"div"),s._uU(76),s.ALo(77,"async"),s.qZA(),s.qZA(),s.TgZ(78,"div",15),s.TgZ(79,"label"),s._uU(80,"Product Name :"),s.qZA(),s.TgZ(81,"div"),s._uU(82),s.ALo(83,"async"),s.qZA(),s.qZA(),s.TgZ(84,"div",15),s.TgZ(85,"label"),s._uU(86,"Interest :"),s.qZA(),s.TgZ(87,"div"),s._uU(88),s.ALo(89,"async"),s.qZA(),s.qZA(),s.TgZ(90,"div",15),s.TgZ(91,"label"),s._uU(92,"Frequency :"),s.qZA(),s.TgZ(93,"div"),s._uU(94),s.ALo(95,"async"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(96,"hr"),s.TgZ(97,"div",19),s.TgZ(98,"div",20),s.TgZ(99,"div",21),s.TgZ(100,"label",22),s._uU(101,"Account No. "),s.qZA(),s.qZA(),s._UZ(102,"input",23),s.qZA(),s.TgZ(103,"div",24),s.TgZ(104,"div",21),s.TgZ(105,"label",22),s._uU(106,"Date of creation "),s.TgZ(107,"span",25),s._uU(108,"*"),s.qZA(),s.qZA(),s.YNc(109,et,2,1,"div",26),s.qZA(),s._UZ(110,"input",27),s.qZA(),s.TgZ(111,"div",24),s.TgZ(112,"div",21),s.TgZ(113,"label",22),s._uU(114,"Repayment Date "),s.TgZ(115,"span",25),s._uU(116,"*"),s.qZA(),s.qZA(),s.YNc(117,ct,2,1,"div",26),s.qZA(),s._UZ(118,"input",27),s.qZA(),s.TgZ(119,"div",24),s.TgZ(120,"div",21),s.TgZ(121,"label",22),s._uU(122,"Status "),s.TgZ(123,"span",25),s._uU(124,"*"),s.qZA(),s.qZA(),s.YNc(125,it,2,1,"div",26),s.qZA(),s.TgZ(126,"select",28),s.YNc(127,lt,2,2,"option",29),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){let t,e,o,c,a,i,l,u;s.xp6(10),s.Q6J("disabled",!n.form.valid),s.xp6(13),s.Q6J("ngIf",n.showTooltip&&!n.id),s.xp6(1),s.Q6J("ngIf",n.showTooltip&&!n.id),s.xp6(5),s.Oqu(null==n.selectedLead?null:n.selectedLead.leadId),s.xp6(5),s.Oqu(null==n.selectedLead?null:n.selectedLead.status),s.xp6(5),s.Oqu(null==n.selectedLead?null:n.selectedLead.amount),s.xp6(9),s.Oqu(null==(t=s.lcZ(49,23,null==n.selectedLead?null:n.selectedLead.customer))?null:t.customerId),s.xp6(6),s.Oqu(null==(e=s.lcZ(55,25,null==n.selectedLead?null:n.selectedLead.customer))?null:e.name),s.xp6(6),s.Oqu(null==(o=s.lcZ(61,27,null==n.selectedLead?null:n.selectedLead.customer))?null:o.gender),s.xp6(6),s.Oqu(null==(c=s.lcZ(67,29,null==n.selectedLead?null:n.selectedLead.customer))?null:c.mobileNo),s.xp6(10),s.Oqu(null==(a=s.lcZ(77,31,null==n.selectedLead?null:n.selectedLead.product))?null:a.productId),s.xp6(6),s.Oqu(null==(i=s.lcZ(83,33,null==n.selectedLead?null:n.selectedLead.product))?null:i.name),s.xp6(6),s.Oqu(null==(l=s.lcZ(89,35,null==n.selectedLead?null:n.selectedLead.product))?null:l.interest),s.xp6(6),s.Oqu(null==(u=s.lcZ(95,37,null==n.selectedLead?null:n.selectedLead.product))?null:u.frequency),s.xp6(4),s.Q6J("ngClass",s.VKq(39,ut,!n.id)),s.xp6(4),s.Q6J("formControl",n.accountNoCtrl),s.xp6(7),s.Q6J("ngIf",n.createdAtCtrl.errors&&n.createdAtCtrl.dirty||n.createdAtCtrl.touched),s.xp6(1),s.Q6J("formControl",n.createdAtCtrl),s.xp6(7),s.Q6J("ngIf",n.repaymentDateCtrl.errors&&n.repaymentDateCtrl.dirty||n.repaymentDateCtrl.touched),s.xp6(1),s.Q6J("formControl",n.repaymentDateCtrl),s.xp6(7),s.Q6J("ngIf",n.statusCtrl.errors&&n.statusCtrl.dirty||n.statusCtrl.touched),s.xp6(1),s.Q6J("formControl",n.statusCtrl),s.xp6(1),s.Q6J("ngForOf",n.accountStatuses)}},directives:[A.rH,h.Hw,G.lW,o.O5,o.mk,E.Fj,E.JJ,E.oH,E.EJ,o.sg,E.YN,E.Kr],pipes:[o.Ov],styles:[".input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:2px}.input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px;font-weight:500}.input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]{color:red;font-weight:600}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;height:24px;border:2px solid #0000008c;border-radius:2px}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{background-color:rgba(66,66,66,.07);border-color:#d1d1d1}.input-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red;font-size:12px;font-weight:500}main[_ngcontent-%COMP%]{height:calc(100vh - 36px);overflow-y:auto}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{padding:10px 60px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:13px;font-weight:500}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{margin-bottom:2px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{position:relative}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .tooltip-message[_ngcontent-%COMP%]{position:absolute;top:-16px;left:5px;background-color:#0890f0;color:#fff;border-radius:3px;padding:0 8px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .tooltip-caret[_ngcontent-%COMP%]{position:absolute;color:#0890f0;top:-9px;left:33px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{width:calc(100% / 3)}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%]{padding-top:9px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:500}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{font-size:13px;font-weight:500}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{padding-top:9px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .customer-product-content[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{margin-bottom:10px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:25px}main[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{width:calc(100% / 4);padding-right:25px}"]}),t})();var st=e(58322);let dt=(()=>{class t{constructor(t,n,e,o,c,a){this.accountService=t,this.snackBar=n,this.activatedRoute=e,this.router=o,this.dialog=c,this.loaderService=a,this.productType=i.kv,this.activatedRoute.params.subscribe(t=>{this.id=t.id,this.id&&this.getAccountById()})}ngOnInit(){}getAccountById(){this.loaderService.loading(!0),this.accountService.getAccountById(this.id).subscribe(t=>{this.account=t,this.loaderService.loading(!1)},t=>{this.loaderService.loading(!1),console.log(t),this.snackBar.openFromComponent(u.a,Object.assign({data:r.Ky.dangerData("Something went wrong.")},r.Ky.flashTopDangerSnackBar()))})}delete(){this.dialog.open(l.z,{width:"26%",data:{title:"Delete Account",subtitle:"Are you really sure to delete this record?"},disableClose:!0}).afterClosed().subscribe(t=>{t&&(this.loaderService.loading(!0),this.accountService.deleteAccount(this.id).subscribe(t=>{this.loaderService.loading(!1),this.snackBar.openFromComponent(u.a,Object.assign({data:r.Ky.successData("Deleted")},r.Ky.flashTopSuccessSnackBar())),this.router.navigate(["/accounts"])},t=>{this.loaderService.loading(!1),console.error(t),this.snackBar.openFromComponent(u.a,Object.assign({data:r.Ky.dangerData("Something went wrong")},r.Ky.flashTopDangerSnackBar()))}))})}viewRepaymentList(){this.dialog.open(st.u,{width:"65%",data:{accountNo:this.account.accountNo}})}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(c.B),s.Y36(g.ux),s.Y36(A.gz),s.Y36(A.F0),s.Y36(d.uw),s.Y36(Z.D))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-account-view"]],decls:120,vars:40,consts:[[1,"form-min-height","m-3","bg-white"],[1,"d-flex","justify-content-between","p-1","ps-4","bg-gold"],[1,"font-400","font-banner",2,"line-height","35px"],["routerLink","/accounts",1,"btn","btn-save"],[1,"white-icon"],[1,"btn","btn-edit",3,"routerLink"],[1,"account-content"],[1,"d-flex","align-items-center","justify-content-between","heading","mb-3"],[1,"title"],[1,"d-flex","field"],[1,"view-repayments",3,"click"],[1,"d-flex","align-items-center","heading","mb-3"]],template:function(t,n){if(1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"span",2),s._uU(3,"Account"),s.qZA(),s.TgZ(4,"div"),s.TgZ(5,"button",3),s.TgZ(6,"mat-icon",4),s._uU(7,"list"),s.qZA(),s._uU(8,"\xa0Account List "),s.qZA(),s.TgZ(9,"button",5),s.TgZ(10,"mat-icon",4),s._uU(11,"edit"),s.qZA(),s._uU(12,"\xa0Edit "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(13,"div",6),s.TgZ(14,"div"),s.TgZ(15,"div",7),s.TgZ(16,"div",8),s._uU(17,"Account"),s.qZA(),s.qZA(),s.TgZ(18,"div",9),s.TgZ(19,"label"),s._uU(20,"Account Id :"),s.qZA(),s.TgZ(21,"div"),s._uU(22),s.qZA(),s.qZA(),s.TgZ(23,"div",9),s.TgZ(24,"label"),s._uU(25,"Account Status :"),s.qZA(),s.TgZ(26,"div"),s._uU(27),s.qZA(),s.qZA(),s.TgZ(28,"div",9),s.TgZ(29,"label"),s._uU(30,"Created At :"),s.qZA(),s.TgZ(31,"div"),s._uU(32),s.qZA(),s.qZA(),s.TgZ(33,"div",9),s.TgZ(34,"a",10),s.NdJ("click",function(){return n.viewRepaymentList()}),s._uU(35,"Vew Repayments"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(36,"div"),s.TgZ(37,"div",11),s.TgZ(38,"div",8),s._uU(39,"Lead"),s.qZA(),s.qZA(),s.TgZ(40,"div",9),s.TgZ(41,"label"),s._uU(42,"Lead Id :"),s.qZA(),s.TgZ(43,"div"),s._uU(44),s.ALo(45,"async"),s.qZA(),s.qZA(),s.TgZ(46,"div",9),s.TgZ(47,"label"),s._uU(48,"Status :"),s.qZA(),s.TgZ(49,"div"),s._uU(50),s.ALo(51,"async"),s.qZA(),s.qZA(),s.TgZ(52,"div",9),s.TgZ(53,"label"),s._uU(54,"Amount :"),s.qZA(),s.TgZ(55,"div"),s._uU(56),s.ALo(57,"async"),s.qZA(),s.qZA(),s.TgZ(58,"div",9),s.TgZ(59,"label"),s._uU(60,"Monthly Interest to be paid :"),s.qZA(),s.TgZ(61,"strong"),s._uU(62),s.ALo(63,"async"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(64,"div"),s.TgZ(65,"div",11),s.TgZ(66,"div",8),s._uU(67,"Customer"),s.qZA(),s.qZA(),s.TgZ(68,"div",9),s.TgZ(69,"label"),s._uU(70,"Customer Id :"),s.qZA(),s.TgZ(71,"div"),s._uU(72),s.ALo(73,"async"),s.qZA(),s.qZA(),s.TgZ(74,"div",9),s.TgZ(75,"label"),s._uU(76,"Customer Name :"),s.qZA(),s.TgZ(77,"div"),s._uU(78),s.ALo(79,"async"),s.qZA(),s.qZA(),s.TgZ(80,"div",9),s.TgZ(81,"label"),s._uU(82,"Gender :"),s.qZA(),s.TgZ(83,"div"),s._uU(84),s.ALo(85,"async"),s.qZA(),s.qZA(),s.TgZ(86,"div",9),s.TgZ(87,"label"),s._uU(88,"Mobile Number :"),s.qZA(),s.TgZ(89,"div"),s._uU(90),s.ALo(91,"async"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(92,"div"),s.TgZ(93,"div",11),s.TgZ(94,"div",8),s._uU(95,"Product"),s.qZA(),s.qZA(),s.TgZ(96,"div",9),s.TgZ(97,"label"),s._uU(98,"Product Id :"),s.qZA(),s.TgZ(99,"div"),s._uU(100),s.ALo(101,"async"),s.qZA(),s.qZA(),s.TgZ(102,"div",9),s.TgZ(103,"label"),s._uU(104,"Product Name :"),s.qZA(),s.TgZ(105,"div"),s._uU(106),s.ALo(107,"async"),s.qZA(),s.qZA(),s.TgZ(108,"div",9),s.TgZ(109,"label"),s._uU(110,"Interest :"),s.qZA(),s.TgZ(111,"div"),s._uU(112),s.ALo(113,"async"),s.qZA(),s.qZA(),s.TgZ(114,"div",9),s.TgZ(115,"label"),s._uU(116,"Frequency :"),s.qZA(),s.TgZ(117,"div"),s._uU(118),s.ALo(119,"async"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){let t,e,o,c,a,i,l,u,r,d,g,Z;s.xp6(9),s.Q6J("routerLink","/accounts/"+(null==n.account?null:n.account.id)+"/edit"),s.xp6(13),s.Oqu(null==n.account?null:n.account.leadId),s.xp6(5),s.Oqu(null==n.account?null:n.account.status),s.xp6(5),s.Oqu(null==n.account?null:n.account.dateOfCreation),s.xp6(12),s.Oqu(null==(t=s.lcZ(45,16,null==n.account?null:n.account.lead))?null:t.leadId),s.xp6(6),s.Oqu(null==(e=s.lcZ(51,18,null==n.account?null:n.account.lead))?null:e.status),s.xp6(6),s.Oqu(null==(o=s.lcZ(57,20,null==n.account?null:n.account.lead))?null:o.amount),s.xp6(6),s.Oqu(null==(c=s.lcZ(63,22,null==n.account?null:n.account.lead))?null:c.monthlyInterest),s.xp6(10),s.Oqu(null==(a=s.lcZ(73,24,null==n.account?null:n.account.customer))?null:a.customerId),s.xp6(6),s.Oqu(null==(i=s.lcZ(79,26,null==n.account?null:n.account.customer))?null:i.name),s.xp6(6),s.Oqu(null==(l=s.lcZ(85,28,null==n.account?null:n.account.customer))?null:l.gender),s.xp6(6),s.Oqu(null==(u=s.lcZ(91,30,null==n.account?null:n.account.customer))?null:u.mobileNo),s.xp6(10),s.Oqu(null==(r=s.lcZ(101,32,null==n.account?null:n.account.product))?null:r.productId),s.xp6(6),s.Oqu(null==(d=s.lcZ(107,34,null==n.account?null:n.account.product))?null:d.name),s.xp6(6),s.Oqu(null==(g=s.lcZ(113,36,null==n.account?null:n.account.product))?null:g.interest),s.xp6(6),s.Oqu(null==(Z=s.lcZ(119,38,null==n.account?null:n.account.product))?null:Z.frequency)}},directives:[A.rH,h.Hw],pipes:[o.Ov],styles:["u[_ngcontent-%COMP%]{color:#0d507e;font-weight:500}u[_ngcontent-%COMP%]:hover{cursor:pointer}.account-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:20px}.account-content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{margin-bottom:2px}.account-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{border-bottom:1px solid #5d5d5d38}.account-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:15px}.view-repayments[_ngcontent-%COMP%]{margin-top:10px;color:#05618b;cursor:pointer;font-weight:500;text-decoration:none}h3[_ngcontent-%COMP%]{font-size:16px;font-weight:500;text-transform:uppercase;color:rgba(0,0,0,.705)}hr[_ngcontent-%COMP%]{margin-top:1px!important;margin-bottom:15px!important}"]}),t})();var gt=e(38445),Zt=e(39038),pt=e(29768),mt=e(79830),At=e(28977),ht=e(18108),qt=e(33430),ft=e(79332),_t=e(1692);const vt=[{path:"",component:z,canActivate:[gt.d,_t.O]},{path:"add",component:rt,canActivate:[gt.d,_t.O,_t.O]},{path:":id/edit",component:rt,canActivate:[gt.d,_t.O,_t.O]},{path:":id/view",component:dt,canActivate:[gt.d,_t.O,_t.O]}];let Tt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[c.B,X.y,At.N,ht.r,mt.M,ft.v],imports:[[o.ez,pt.q,A.Bz.forChild(vt),E.u5,E.UX,Zt.S,qt.d]]}),t})()}}]);