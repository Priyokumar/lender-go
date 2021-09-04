import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { IUser } from '../../security/security.model';
import { LoginComponent } from '../components/login/login.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckingLoginGuardService  implements CanActivate{

constructor(
  private authService: AuthService,
  private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.getUserData().subscribe(data=>{
      this.route(data, route);
    }, error=>{
      this.route(null, route);
    })
    return true;
  }

  private route(user: IUser, route: ActivatedRouteSnapshot){
    if(route.component === LoginComponent){
      if(user){
        if (user.needChangePassword) this.router.navigate(["/dashboard"]);
        else this.router.navigate(["/auth/change-password"]);
        this.authService.sendLoginSignal(true);
      }else{
        this.authService.sendLoginSignal(false);
      }
    } else{
      if(!user){
        this.authService.sendLoginSignal(false);
        this.router.navigate(["/auth/login"]);
      } else{
        this.authService.sendLoginSignal(true);
      }
    }
  }

}
