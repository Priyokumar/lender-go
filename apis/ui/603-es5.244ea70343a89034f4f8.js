!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}(self.webpackChunkui=self.webpackChunkui||[]).push([[603],{81999:function(n,r,i){"use strict";i.d(r,{G:function(){return m}});var a=i(3679),o=i(37716),s=i(12542),c=i(54655),u=i(77001),l=i(98295),d=i(49983),g=i(38583),h=i(51095);function f(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Email is required."),o.qZA())}function p(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Password is required."),o.qZA())}var m=function(){var n=function(){function n(e,r,i){t(this,n),this.authService=e,this.router=r,this.snackBar=i,this.emailFormCtl=new a.NI("",null),this.passwordFormCtl=new a.NI("",null)}return e(n,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){var t=this,n={email:this.emailFormCtl.value,password:this.passwordFormCtl.value};n.email&&n.password&&this.authService.login(n).subscribe(function(n){t.router.navigate(["/dashboard"]),t.authService.sendLoginSignal(!0)},function(n){console.log(n),t.errorMessage="Invalid credential !",t.snackBar.open("Invalid credential.","Got it!",{duration:5e3})})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.Y36(s.e),o.Y36(c.F0),o.Y36(u.ux))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:33,vars:4,consts:[[1,"bg-1","p-4","d-flex","flex-column","align-items-center","content"],[1,"jumbotron","font-white"],[1,"attach-body"],[1,"login-content","p-5"],[1,"mat-elevation-z1","w-100","p-5","bg-white"],[1,"font-300"],[1,"w-100"],["matInput","","placeholder","Enter your email",3,"formControl"],[4,"ngIf"],["type","password","matInput","","placeholder","Enter your password",3,"formControl"],[1,"text-right"],["type","submit","mat-raised-button","",1,"w-100","bg-grey","font-white",3,"click"],[1,"d-flex","justify-content-end","mt-4"],["routerLink","/auth/reset-password"],[1,"bg-1","bg-light-grey","h-100"]],template:function(t,n){1&t&&(o.TgZ(0,"div"),o.TgZ(1,"div",0),o.TgZ(2,"div",1),o.TgZ(3,"h2"),o._uU(4,"Lender"),o.qZA(),o.TgZ(5,"p"),o._uU(6,"Powered by prilax group"),o.qZA(),o.qZA(),o.TgZ(7,"div",2),o.TgZ(8,"div",3),o.TgZ(9,"div",4),o.TgZ(10,"h2",5),o._uU(11,"Sign In"),o.qZA(),o._UZ(12,"hr"),o._UZ(13,"br"),o._UZ(14,"br"),o.TgZ(15,"form"),o.TgZ(16,"p"),o.TgZ(17,"mat-form-field",6),o.TgZ(18,"mat-label"),o._uU(19,"Email"),o.qZA(),o._UZ(20,"input",7),o.YNc(21,f,2,0,"mat-error",8),o.qZA(),o.qZA(),o.TgZ(22,"p"),o.TgZ(23,"mat-form-field",6),o._UZ(24,"input",9),o.YNc(25,p,2,0,"mat-error",8),o.qZA(),o.qZA(),o.TgZ(26,"div",10),o.TgZ(27,"button",11),o.NdJ("click",function(){return n.login()}),o._uU(28,"Login"),o.qZA(),o.qZA(),o.TgZ(29,"div",12),o.TgZ(30,"a",13),o._uU(31,"Forget password?"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(32,"div",14),o.qZA()),2&t&&(o.xp6(20),o.Q6J("formControl",n.emailFormCtl),o.xp6(1),o.Q6J("ngIf",n.emailFormCtl.invalid),o.xp6(3),o.Q6J("formControl",n.passwordFormCtl),o.xp6(1),o.Q6J("ngIf",n.passwordFormCtl.invalid))},directives:[a._Y,a.JL,a.F,l.KE,l.hX,d.Nt,a.Fj,a.JJ,a.oH,g.O5,h.lW,c.yS,l.TO],styles:[".error[_ngcontent-%COMP%]{height:50px}.content[_ngcontent-%COMP%]{background-color:#08aeea;background-image:linear-gradient(0deg,#08aeea,#2af598)}.xl-icon[_ngcontent-%COMP%]{font-size:10rem;font-weight:300;color:#008b8b}.xl-font[_ngcontent-%COMP%]{font-size:4rem;font-weight:300}.bg-1[_ngcontent-%COMP%]{height:300px}.login-content[_ngcontent-%COMP%]{width:480px;position:absolute;top:0;left:-80px}.jumbotron[_ngcontent-%COMP%]{width:100%;background:transparent}.attach-body[_ngcontent-%COMP%]{position:relative;width:350px;height:400px}"]}),n}()},38445:function(n,r,i){"use strict";i.d(r,{d:function(){return u}});var a=i(81999),o=i(37716),s=i(12542),c=i(54655),u=function(){var n=function(){function n(e,r){t(this,n),this.authService=e,this.router=r}return e(n,[{key:"canActivate",value:function(t,n){var e=this;return this.authService.getUserData().subscribe(function(n){e.route(n,t)},function(n){e.route(null,t)}),!0}},{key:"route",value:function(t,n){n.component===a.G?t?(this.router.navigate(t.needChangePassword?["/dashboard"]:["/auth/change-password"]),this.authService.sendLoginSignal(!0)):this.authService.sendLoginSignal(!1):t?this.authService.sendLoginSignal(!0):(this.authService.sendLoginSignal(!1),this.router.navigate(["/auth/login"]))}}]),n}();return n.\u0275fac=function(t){return new(t||n)(o.LFG(s.e),o.LFG(c.F0))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},79332:function(n,r,i){"use strict";i.d(r,{v:function(){return l}});var a=i(88002),o=i(9643),s=i(34709),c=i(37716),u=i(91841),l=function(){var n=function(){function n(e){t(this,n),this.http=e}return e(n,[{key:"getAllCustomers",value:function(t){return t?this.http.get(s.N$.CUSTOMERS,{params:t}):this.http.get(s.N$.CUSTOMERS)}},{key:"getCustomerById",value:function(t){return this.http.get(s.N$.CUSTOMERS+"/"+t)}},{key:"getCustomerByCustomerId",value:function(t){return this.getAllCustomers({customerId:t}).pipe((0,a.U)(function(t){return t&&t.length>0?t[0]:null}),(0,o.d)())}},{key:"createCustomer",value:function(t){return this.http.post(s.N$.CUSTOMERS,t)}},{key:"updateCustomer",value:function(t,n){return this.http.put(s.N$.CUSTOMERS+"/"+n,t)}},{key:"deleteCustomer",value:function(t){return this.http.delete(s.N$.CUSTOMERS+"/"+t)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(c.LFG(u.eN))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac}),n}()},46603:function(n,r,i){"use strict";i.r(r),i.d(r,{DashboardModule:function(){return q}});var a,o=i(38583),s=i(37716),c=i(6823),u=i.n(c),l=i(75741),d=["overall-sendoi-donought-chart",""],g=function(){var n=function(){function n(e){t(this,n),this.dashboardService=e}return e(n,[{key:"ngOnInit",value:function(){this.getSendoiDoghnutChartData()}},{key:"getSendoiDoghnutChartData",value:function(){var t=this;this.dashboardService.getRepaymentAgainstInvestment().subscribe(function(n){t.data=n,t.drawChart()},function(t){console.log(t)})}},{key:"drawChart",value:function(){this.chart&&this.chart.destroy(),this.chart=new(u())(document.getElementById("overall-sendoi-chart"),{type:"doughnut",data:{labels:["Tatol investment","Interest collection"],datasets:[{label:"Population (millions)",backgroundColor:["#F76B1C","#06D8A4"],data:[this.data.totalPrincipal,this.data.totalInterest]}]},options:{legend:{position:"bottom"},title:{display:!1,text:"Sendoi Against Interest collection"}}})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(s.Y36(l.s))},n.\u0275cmp=s.Xpm({type:n,selectors:[["","overall-sendoi-donought-chart",""]],attrs:d,decls:4,vars:0,consts:[[1,"m-2","p-3","bg-white","h-100"],[1,"title","mb-4"],["id","overall-sendoi-chart"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._uU(2,"Sendoi against Interest Collection"),s.qZA(),s._UZ(3,"canvas",2),s.qZA())},styles:[".card[_ngcontent-%COMP%]{background:#06d094;background:linear-gradient(135deg,rgba(6,208,148,.101) 55%,rgba(214,6,6,.037));border:none!important}"]}),n}(),h=["repayment-bar-chart",""],f=function(){var n=function(){function n(e){t(this,n),this.dashbaordService=e}return e(n,[{key:"ngOnInit",value:function(){this.getRepaymentBarChartData()}},{key:"getRepaymentBarChartData",value:function(){var t=this;this.dashbaordService.getResourceCounts().subscribe(function(n){t.count=n,t.drawChart()},function(t){console.log(t)})}},{key:"drawChart",value:function(){new(u())(document.getElementById("repayment-bar-chart"),{type:"bar",data:{labels:this.count.labels,datasets:[{backgroundColor:["#06b1a8","#06b1a8","#06b1a8","#06b1a8","#06b1a8"],data:this.count.values}]},options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(s.Y36(l.s))},n.\u0275cmp=s.Xpm({type:n,selectors:[["","repayment-bar-chart",""]],attrs:h,decls:4,vars:0,consts:[[1,"m-2","p-3","bg-white","h-100"],[1,"title","mb-4"],["id","repayment-bar-chart"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._uU(2,"Resources Count"),s.qZA(),s._UZ(3,"canvas",2),s.qZA())},styles:[".card[_ngcontent-%COMP%]{background:#06d013;background:linear-gradient(135deg,rgba(6,208,19,.171) 55%,rgba(7,214,6,.051));border:none!important;color:#06b1a8}"]}),n}(),p=i(29845),m=["total-sendoi-investment-number-card",""],v=function(){var n=function(){function n(e){t(this,n),this.dashbaordService=e,this.data={totalInterest:2e4,totalPrincipal:4e5}}return e(n,[{key:"ngOnInit",value:function(){this.getAllInvestment()}},{key:"getAllInvestment",value:function(){var t=this;this.dashbaordService.getRepaymentAgainstInvestment().subscribe(function(n){t.data=n},function(t){console.log(t)})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(s.Y36(l.s))},n.\u0275cmp=s.Xpm({type:n,selectors:[["","total-sendoi-investment-number-card",""]],attrs:m,decls:7,vars:3,consts:[[1,"m-2","mb-4","p-3","bg-white","card"],[1,"title","mb-4"],[1,"d-flex","justify-content-center","align-items-center"],[1,"number"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._uU(2,"Total Investments"),s.qZA(),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s._uU(5),s.ALo(6,"inr"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(5),s.Oqu(s.lcZ(6,1,n.data.totalPrincipal)))},pipes:[p.K],styles:[".bg-white[_ngcontent-%COMP%]{height:calc(100% - 12px)}.number[_ngcontent-%COMP%]{font-size:30px;font-weight:300}.card[_ngcontent-%COMP%]{background:#8606d0;background:linear-gradient(135deg,#8606d0 55%,rgba(214,6,213,.846));color:#fff!important;border:none!important}"]}),n}(),b=["total-interest-collection",""],y=function(){var n=function(){function n(e){t(this,n),this.dashbaordService=e,this.data={totalInterest:2e4,totalPrincipal:4e5}}return e(n,[{key:"ngOnInit",value:function(){this.getAllInvestment()}},{key:"getAllInvestment",value:function(){var t=this;this.dashbaordService.getRepaymentAgainstInvestment().subscribe(function(n){t.data=n},function(t){console.log(t)})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(s.Y36(l.s))},n.\u0275cmp=s.Xpm({type:n,selectors:[["","total-interest-collection",""]],attrs:b,decls:7,vars:3,consts:[[1,"m-2","mt-4","p-3","bg-white","card"],[1,"title","mb-4"],[1,"d-flex","justify-content-center","align-items-center"],[1,"number"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._uU(2,"Total Interest collection"),s.qZA(),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s._uU(5),s.ALo(6,"inr"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(5),s.Oqu(s.lcZ(6,1,n.data.totalInterest)))},pipes:[p.K],styles:[".bg-white[_ngcontent-%COMP%]{height:calc(100% - 12px)}.number[_ngcontent-%COMP%]{font-size:30px;font-weight:300}.card[_ngcontent-%COMP%]{background:#0097ff!important;background:linear-gradient(135deg,#0097ff 55%,#00d4ff)!important;color:#fff!important;border:none!important}"]}),n}(),Z=["sendoi-repayment-chart",""],C=function(){var n=function(){function n(e){t(this,n),this.dashbaordService=e,this.data={labels:["JAN","FEB","MAR"],values:[86,114,106]}}return e(n,[{key:"ngOnInit",value:function(){this.getRepaymentChart()}},{key:"getRepaymentChart",value:function(){var t=this;this.dashbaordService.findMonthWiseRepayments().subscribe(function(n){t.data=n,t.drawChart()},function(t){console.log(t)})}},{key:"drawChart",value:function(){this.chart&&this.chart.destroy(),this.chart=new(u())(document.getElementById("sendoi-repayment-chart"),{type:"line",data:{labels:this.data.labels,datasets:[{data:this.data.values,label:"Repayment",borderColor:"#035c34d0",backgroundColor:"#08aeeada",fill:!0,tension:.3,borderWidth:.3,pointRadius:1.5}]},options:{title:{display:!1,text:"World population per region (in millions)"},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!1,labels:{fontSize:11,usePointStyle:!0}}}})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(s.Y36(l.s))},n.\u0275cmp=s.Xpm({type:n,selectors:[["","sendoi-repayment-chart",""]],attrs:Z,decls:4,vars:0,consts:[[1,"m-3","p-3","bg-white","h-100"],[1,"title","mb-4"],["id","sendoi-repayment-chart","height","60"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._uU(2,"Repayment Chart"),s.qZA(),s._UZ(3,"canvas",2),s.qZA())},styles:["f[_ngcontent-%COMP%]{color:#2af59a2d}.card-inv[_ngcontent-%COMP%]{background:#06d094;background:linear-gradient(135deg,rgba(6,208,148,.101) 55%,rgba(214,6,6,.037));border:none!important;color:#08aeeada}"]}),n}(),w=function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-dashboard-layout"]],decls:8,vars:0,consts:[[1,"p-3"],[1,"grid-layout"],["overall-sendoi-donought-chart","",1,"grid"],["repayment-bar-chart","",1,"grid"],[1,"grid-sm"],["total-sendoi-investment-number-card",""],["total-interest-collection",""],["sendoi-repayment-chart","",1,"mt-4","line-chart"]],template:function(t,n){1&t&&(s.TgZ(0,"main",0),s.TgZ(1,"div",1),s._UZ(2,"div",2),s._UZ(3,"div",3),s.TgZ(4,"div",4),s._UZ(5,"div",5),s._UZ(6,"div",6),s.qZA(),s.qZA(),s._UZ(7,"div",7),s.qZA())},directives:[g,f,v,y,C],styles:["main[_ngcontent-%COMP%]   .grid-layout[_ngcontent-%COMP%]{display:flex}main[_ngcontent-%COMP%]   .grid-layout[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{width:35%;padding:6px}main[_ngcontent-%COMP%]   .grid-layout[_ngcontent-%COMP%]   .grid-sm[_ngcontent-%COMP%]{padding:6px;width:30%;display:flex;flex-direction:column;align-items:stretch}main[_ngcontent-%COMP%]   .grid-layout[_ngcontent-%COMP%]   .grid-sm[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:50%}"]}),n}(),A=i(54655),_=i(38445),k=i(29768),T=i(79332),O=i(33430),S=[{path:"",component:w,canActivate:[_.d]}],q=((a=function n(){t(this,n)}).\u0275fac=function(t){return new(t||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({providers:[l.s,T.v],imports:[[o.ez,k.q,A.Bz.forChild(S),O.d]]}),a)},29845:function(n,r,i){"use strict";i.d(r,{K:function(){return o}});var a=i(37716),o=function(){var n=function(){function n(){t(this,n)}return e(n,[{key:"transform",value:function(t){var n=(t=Math.round(t)).toString().split("."),e=n[0].substring(n[0].length-3),r=n[0].substring(0,n[0].length-3);""!=r&&"-"!=r&&(e=","+e);var i=r.replace(/\B(?=(\d{2})+(?!\d))/g,",")+e;return n.length>1&&(i+="."+n[1]),"\u20b9"+i}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=a.Yjl({name:"inr",type:n,pure:!0}),n}()},33430:function(n,e,r){"use strict";r.d(e,{d:function(){return o}});var i=r(38583),a=r(37716),o=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[i.ez]]}),n}()}}])}();