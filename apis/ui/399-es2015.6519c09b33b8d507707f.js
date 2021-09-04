(self.webpackChunkui=self.webpackChunkui||[]).push([[399],{6399:function(t,n,e){"use strict";e.r(n),e.d(n,{AuthModule:function(){return M}});var o=e(38583),r=e(81999),i=e(54655),s=e(29768),a=e(3679),c=e(91841),d=e(38445),g=e(43190),u=e(18475),l=e(34709),p=e(37716),h=e(12542),f=e(77001);function Z(t,n){1&t&&(p.TgZ(0,"div"),p._uU(1,"Required"),p.qZA())}function w(t,n){if(1&t&&(p.TgZ(0,"div",11),p.YNc(1,Z,2,0,"div",0),p.qZA()),2&t){const t=p.oxw(2);p.xp6(1),p.Q6J("ngIf",t.oldPassword.hasError("required"))}}function m(t,n){1&t&&(p.TgZ(0,"div"),p._uU(1,"Required"),p.qZA())}function b(t,n){if(1&t&&(p.TgZ(0,"div",11),p.YNc(1,m,2,0,"div",0),p.qZA()),2&t){const t=p.oxw(2);p.xp6(1),p.Q6J("ngIf",t.password.hasError("required"))}}function _(t,n){1&t&&(p.TgZ(0,"div"),p._uU(1,"Required"),p.qZA())}function P(t,n){if(1&t&&(p.TgZ(0,"div",11),p.YNc(1,_,2,0,"div",0),p.qZA()),2&t){const t=p.oxw(2);p.xp6(1),p.Q6J("ngIf",t.confirmPassword.hasError("required"))}}function v(t,n){if(1&t){const t=p.EpF();p.TgZ(0,"section"),p.TgZ(1,"div",1),p._uU(2,"Change Password"),p.qZA(),p.TgZ(3,"div",2),p.TgZ(4,"div",3),p.TgZ(5,"div",4),p.TgZ(6,"label",5),p._uU(7,"Old Password "),p.TgZ(8,"span",6),p._uU(9,"*"),p.qZA(),p.qZA(),p.YNc(10,w,2,1,"div",7),p.qZA(),p._UZ(11,"input",8),p.qZA(),p.TgZ(12,"div",3),p.TgZ(13,"div",4),p.TgZ(14,"label",5),p._uU(15,"New Password "),p.TgZ(16,"span",6),p._uU(17,"*"),p.qZA(),p.qZA(),p.YNc(18,b,2,1,"div",7),p.qZA(),p._UZ(19,"input",8),p.qZA(),p.TgZ(20,"div",3),p.TgZ(21,"div",4),p.TgZ(22,"label",5),p._uU(23,"Confirm Password "),p.TgZ(24,"span",6),p._uU(25,"*"),p.qZA(),p.qZA(),p.YNc(26,P,2,1,"div",7),p.qZA(),p._UZ(27,"input",8),p.qZA(),p.TgZ(28,"div",9),p.NdJ("click",function(){return p.CHM(t),p.oxw().changePassword()}),p.TgZ(29,"button",10),p._uU(30," Change Password "),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&t){const t=p.oxw();p.xp6(10),p.Q6J("ngIf",t.oldPassword.errors&&t.oldPassword.dirty||t.oldPassword.touched),p.xp6(1),p.Q6J("formControl",t.oldPassword),p.xp6(7),p.Q6J("ngIf",t.password.errors&&t.password.dirty||t.password.touched),p.xp6(1),p.Q6J("formControl",t.password),p.xp6(7),p.Q6J("ngIf",t.confirmPassword.errors&&t.confirmPassword.dirty||t.confirmPassword.touched),p.xp6(1),p.Q6J("formControl",t.confirmPassword)}}let C=(()=>{class t{constructor(t,n,e){this.authService=t,this.snackbar=n,this.router=e,this.oldPassword=new a.NI("",a.kI.required),this.password=new a.NI("",a.kI.required),this.confirmPassword=new a.NI("",a.kI.required),this.changedPassword=!1}ngOnInit(){this.form=new a.cw({oldPassword:this.oldPassword,password:this.password,confirmPassword:this.confirmPassword})}changePassword(){const t=this.form.value;this.authService.getUserData().pipe((0,g.w)(n=>this.authService.changePassword(n.email,t))).subscribe(t=>{this.changedPassword=!0,this.snackbar.openFromComponent(u.a,Object.assign({data:l.Ky.successData("Password has been successfully changed. You will be logged out in 5 seconds. Please login in with new password.")},l.Ky.flashTopSuccessSnackBar())),setTimeout(()=>{this.authService.logout().subscribe(t=>{this.router.navigate(["/auth/login"])},t=>{console.error(t)})},5e3)},t=>{console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(p.Y36(h.e),p.Y36(f.ux),p.Y36(i.F0))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-change-password"]],decls:2,vars:1,consts:[[4,"ngIf"],[1,"title"],[1,"mt-4","pt-4"],[1,"input-container"],[1,"label-container"],["for",""],[1,"required"],["class","error",4,"ngIf"],["type","password",1,"w-100",3,"formControl"],[1,"d-flex","mt-2","w-100",3,"click"],[1,"btn","btn-success","w-100"],[1,"error"]],template:function(t,n){1&t&&(p.TgZ(0,"main"),p.YNc(1,v,31,6,"section",0),p.qZA()),2&t&&(p.xp6(1),p.Q6J("ngIf",!n.changedPassword))},directives:[o.O5,a.Fj,a.JJ,a.oH],styles:[".input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:2px}.input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px;font-weight:500}.input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]{color:red;font-weight:600}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;height:24px;border:2px solid #0000008c;border-radius:2px}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{background-color:rgba(66,66,66,.07);border-color:#d1d1d1}.input-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red;font-size:12px;font-weight:500}main[_ngcontent-%COMP%]{display:flex;justify-content:center}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{margin-top:10vh;width:300px}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:large}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{padding-bottom:15px}"]}),t})();var x=e(51095);function q(t,n){if(1&t){const t=p.EpF();p.TgZ(0,"div",7),p.TgZ(1,"h2",8),p._uU(2,"Reset Password"),p.qZA(),p._UZ(3,"hr"),p._UZ(4,"br"),p._UZ(5,"br"),p.TgZ(6,"form",9),p.TgZ(7,"div",10),p.TgZ(8,"div",11),p.TgZ(9,"div",12),p.TgZ(10,"label",13),p._uU(11,"Email"),p.qZA(),p.qZA(),p._UZ(12,"input",14),p.qZA(),p.TgZ(13,"button",15),p.NdJ("click",function(){return p.CHM(t),p.oxw().resetPassword()}),p._uU(14," Reset password "),p.qZA(),p.qZA(),p.TgZ(15,"div",16),p.TgZ(16,"a",17),p._uU(17,"Login"),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&t){const t=p.oxw();p.xp6(12),p.Q6J("formControl",t.email),p.xp6(1),p.Q6J("disabled",!t.email.valid)}}function O(t,n){1&t&&(p.TgZ(0,"div",18),p._uU(1," An email has been sent that contains your temporary password. Please login with the temporary password and change your password. "),p.TgZ(2,"a",17),p._uU(3,"Login"),p.qZA(),p.qZA())}const A=[{path:"login",component:r.G,canActivate:[d.d]},{path:"change-password",component:C,canActivate:[d.d]},{path:"reset-password",component:(()=>{class t{constructor(t,n){this.authService=t,this.snackbar=n,this.email=new a.NI("",[a.kI.required,a.kI.email]),this.passwordReset=!1}ngOnInit(){}resetPassword(){this.authService.resetPassword(this.email.value).subscribe(t=>{this.passwordReset=!0,this.msg="An email has been sent that contains your temporary password. Please login with the temporary password and change your password."},t=>{400==t.status&&this.snackbar.openFromComponent(u.a,Object.assign({data:l.Ky.dangerData(t.error)},l.Ky.flashTopDangerSnackBar)),console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(p.Y36(h.e),p.Y36(f.ux))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-reset-password"]],decls:12,vars:2,consts:[[1,"bg-1","p-4","d-flex","flex-column","align-items-center","content"],[1,"jumbotron","font-white"],[1,"attach-body"],[1,"login-content","p-5"],["class","mat-elevation-z1 w-100 p-5 bg-white",4,"ngIf"],["class","msg",4,"ngIf"],[1,"bg-1","bg-light-grey","h-100"],[1,"mat-elevation-z1","w-100","p-5","bg-white"],[1,"font-300"],[1,"mb-4"],[1,"d-flex","align-items-end"],[1,"input-container","w-75"],[1,"label-container"],["for",""],["type","text","id","amountCtrl",3,"formControl"],["type","submit","mat-raised-button","",1,"w-100","bg-grey","font-white","reset-password-btn",3,"disabled","click"],[1,"d-flex","justify-content-end","pt-3"],["routerLink","/auth/login"],[1,"msg"]],template:function(t,n){1&t&&(p.TgZ(0,"div"),p.TgZ(1,"div",0),p.TgZ(2,"div",1),p.TgZ(3,"h2"),p._uU(4,"Lender"),p.qZA(),p.TgZ(5,"p"),p._uU(6,"Powered by prilax group"),p.qZA(),p.qZA(),p.TgZ(7,"div",2),p.TgZ(8,"div",3),p.YNc(9,q,18,2,"div",4),p.YNc(10,O,4,0,"div",5),p.qZA(),p.qZA(),p.qZA(),p._UZ(11,"div",6),p.qZA()),2&t&&(p.xp6(9),p.Q6J("ngIf",!n.passwordReset),p.xp6(1),p.Q6J("ngIf",n.passwordReset))},directives:[o.O5,a._Y,a.JL,a.F,a.Fj,a.JJ,a.oH,x.lW,i.yS],styles:[".input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:2px}.input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px;font-weight:500}.input-container[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]{color:red;font-weight:600}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;height:24px;border:2px solid #0000008c;border-radius:2px}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{background-color:rgba(66,66,66,.07);border-color:#d1d1d1}.input-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red;font-size:12px;font-weight:500}.error[_ngcontent-%COMP%]{height:50px}.content[_ngcontent-%COMP%]{background-color:#08aeea;background-image:linear-gradient(0deg,#08aeea,#2af598)}.xl-icon[_ngcontent-%COMP%]{font-size:10rem;font-weight:300;color:#008b8b}.xl-font[_ngcontent-%COMP%]{font-size:4rem;font-weight:300}.bg-1[_ngcontent-%COMP%]{height:300px}.msg[_ngcontent-%COMP%]{background:#08ff0f2b;padding:10px 20px;font-weight:500;border:2px solid #6effbc;color:#000;letter-spacing:.5px;font-size:14px}.msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#075202!important}.reset-password-btn[_ngcontent-%COMP%]{width:142px!important;height:26px;line-height:25px;font-size:12px;font-weight:300;border-radius:0;margin-left:18px}.login-content[_ngcontent-%COMP%]{width:550px;position:absolute;top:0;left:-80px}.jumbotron[_ngcontent-%COMP%]{width:100%;background:transparent}.attach-body[_ngcontent-%COMP%]{position:relative;width:350px;height:400px}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({providers:[],imports:[[o.ez,i.Bz.forChild(A),s.q,a.u5,a.UX,c.JF]]}),t})()},81999:function(t,n,e){"use strict";e.d(n,{G:function(){return h}});var o=e(3679),r=e(37716),i=e(12542),s=e(54655),a=e(77001),c=e(98295),d=e(49983),g=e(38583),u=e(51095);function l(t,n){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"Email is required."),r.qZA())}function p(t,n){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"Password is required."),r.qZA())}let h=(()=>{class t{constructor(t,n,e){this.authService=t,this.router=n,this.snackBar=e,this.emailFormCtl=new o.NI("",null),this.passwordFormCtl=new o.NI("",null)}ngOnInit(){}login(){const t={email:this.emailFormCtl.value,password:this.passwordFormCtl.value};t.email&&t.password&&this.authService.login(t).subscribe(t=>{this.router.navigate(["/dashboard"]),this.authService.sendLoginSignal(!0)},t=>{console.log(t),this.errorMessage="Invalid credential !",this.snackBar.open("Invalid credential.","Got it!",{duration:5e3})})}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(i.e),r.Y36(s.F0),r.Y36(a.ux))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-login"]],decls:33,vars:4,consts:[[1,"bg-1","p-4","d-flex","flex-column","align-items-center","content"],[1,"jumbotron","font-white"],[1,"attach-body"],[1,"login-content","p-5"],[1,"mat-elevation-z1","w-100","p-5","bg-white"],[1,"font-300"],[1,"w-100"],["matInput","","placeholder","Enter your email",3,"formControl"],[4,"ngIf"],["type","password","matInput","","placeholder","Enter your password",3,"formControl"],[1,"text-right"],["type","submit","mat-raised-button","",1,"w-100","bg-grey","font-white",3,"click"],[1,"d-flex","justify-content-end","mt-4"],["routerLink","/auth/reset-password"],[1,"bg-1","bg-light-grey","h-100"]],template:function(t,n){1&t&&(r.TgZ(0,"div"),r.TgZ(1,"div",0),r.TgZ(2,"div",1),r.TgZ(3,"h2"),r._uU(4,"Lender"),r.qZA(),r.TgZ(5,"p"),r._uU(6,"Powered by prilax group"),r.qZA(),r.qZA(),r.TgZ(7,"div",2),r.TgZ(8,"div",3),r.TgZ(9,"div",4),r.TgZ(10,"h2",5),r._uU(11,"Sign In"),r.qZA(),r._UZ(12,"hr"),r._UZ(13,"br"),r._UZ(14,"br"),r.TgZ(15,"form"),r.TgZ(16,"p"),r.TgZ(17,"mat-form-field",6),r.TgZ(18,"mat-label"),r._uU(19,"Email"),r.qZA(),r._UZ(20,"input",7),r.YNc(21,l,2,0,"mat-error",8),r.qZA(),r.qZA(),r.TgZ(22,"p"),r.TgZ(23,"mat-form-field",6),r._UZ(24,"input",9),r.YNc(25,p,2,0,"mat-error",8),r.qZA(),r.qZA(),r.TgZ(26,"div",10),r.TgZ(27,"button",11),r.NdJ("click",function(){return n.login()}),r._uU(28,"Login"),r.qZA(),r.qZA(),r.TgZ(29,"div",12),r.TgZ(30,"a",13),r._uU(31,"Forget password?"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r._UZ(32,"div",14),r.qZA()),2&t&&(r.xp6(20),r.Q6J("formControl",n.emailFormCtl),r.xp6(1),r.Q6J("ngIf",n.emailFormCtl.invalid),r.xp6(3),r.Q6J("formControl",n.passwordFormCtl),r.xp6(1),r.Q6J("ngIf",n.passwordFormCtl.invalid))},directives:[o._Y,o.JL,o.F,c.KE,c.hX,d.Nt,o.Fj,o.JJ,o.oH,g.O5,u.lW,s.yS,c.TO],styles:[".error[_ngcontent-%COMP%]{height:50px}.content[_ngcontent-%COMP%]{background-color:#08aeea;background-image:linear-gradient(0deg,#08aeea,#2af598)}.xl-icon[_ngcontent-%COMP%]{font-size:10rem;font-weight:300;color:#008b8b}.xl-font[_ngcontent-%COMP%]{font-size:4rem;font-weight:300}.bg-1[_ngcontent-%COMP%]{height:300px}.login-content[_ngcontent-%COMP%]{width:480px;position:absolute;top:0;left:-80px}.jumbotron[_ngcontent-%COMP%]{width:100%;background:transparent}.attach-body[_ngcontent-%COMP%]{position:relative;width:350px;height:400px}"]}),t})()},38445:function(t,n,e){"use strict";e.d(n,{d:function(){return a}});var o=e(81999),r=e(37716),i=e(12542),s=e(54655);let a=(()=>{class t{constructor(t,n){this.authService=t,this.router=n}canActivate(t,n){return this.authService.getUserData().subscribe(n=>{this.route(n,t)},n=>{this.route(null,t)}),!0}route(t,n){n.component===o.G?t?(this.router.navigate(t.needChangePassword?["/dashboard"]:["/auth/change-password"]),this.authService.sendLoginSignal(!0)):this.authService.sendLoginSignal(!1):t?this.authService.sendLoginSignal(!0):(this.authService.sendLoginSignal(!1),this.router.navigate(["/auth/login"]))}}return t.\u0275fac=function(n){return new(n||t)(r.LFG(i.e),r.LFG(s.F0))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},18475:function(t,n,e){"use strict";e.d(n,{a:function(){return s}});var o=e(77001),r=e(37716),i=e(76627);let s=(()=>{class t{constructor(t){this.data=t}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(o.qD))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-snackbar-info"]],decls:6,vars:2,consts:[[1,"d-flex","justify-content-center","align-items-center"],[1,"font-white"],[1,"font-500","font-title-md"]],template:function(t,n){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"mat-icon",1),r._uU(2),r.qZA(),r._uU(3,"\xa0 "),r.TgZ(4,"span",2),r._uU(5),r.qZA(),r.qZA()),2&t&&(r.xp6(2),r.Oqu(n.data.icon),r.xp6(3),r.Oqu(n.data.message))},directives:[i.Hw],styles:[".blue-snackbar[_ngcontent-%COMP%]{background:#2196f3}.mat-icon[_ngcontent-%COMP%]{font-size:24px!important;color:#f5f5f5!important}"]}),t})()}}]);