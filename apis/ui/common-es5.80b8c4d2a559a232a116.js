!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(self.webpackChunkui=self.webpackChunkui||[]).push([[592],{1692:function(e,r,u){"use strict";u.d(r,{O:function(){return f}});var i=u(88002),c=u(62831),o=u(37716),a=u(12542),f=function(){var e=function(){function e(n){t(this,e),this.authService=n}return n(e,[{key:"canActivate",value:function(t,e){return this.authService.getUserRoles().pipe((0,i.U)(function(t){return t.includes(c.i4.INVESTOR)}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.LFG(a.e))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},44173:function(e,r,u){"use strict";u.d(r,{K:function(){return f}});var i=u(88002),c=u(34709),o=u(37716),a=u(91841),f=function(){var e=function(){function e(n){t(this,e),this.http=n}return n(e,[{key:"getAllUsers",value:function(){return this.http.get(c.N$.USERS)}},{key:"getUserById",value:function(t){return this.http.get(c.N$.USERS+"/"+t)}},{key:"getUserByEmail",value:function(t){return this.http.get(c.N$.USERS+"/"+t).pipe((0,i.U)(function(t){return t.data}))}},{key:"createUser",value:function(t){return this.http.post(c.N$.USERS,t)}},{key:"updateUser",value:function(t,e){return this.http.put(c.N$.USERS+"/"+e,t)}},{key:"deleteUser",value:function(t){return this.http.delete(c.N$.USERS+"/"+t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.LFG(a.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e}()}}])}();