import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { UserRole } from "src/app/constant";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class InvestorRouteGuardService implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getUserRoles().pipe(
      map((roles) => {
        return roles.includes(UserRole.INVESTOR);
      })
    );
  }
}
