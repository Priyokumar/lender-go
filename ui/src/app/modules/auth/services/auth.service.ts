import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IChangePassword, ILoginData } from "../model/auth.model";
import { CookieService } from "ngx-cookie-service";
import jwtDecoder from "jwt-decode";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ApiEndpoint, IActionResponse } from "../../shared/model/shared.model";
import { Router } from "@angular/router";
import { IUser } from "../../security/security.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}
  public static AUTH_TOKEN_KEY = "token";

  private loginStatusSubject = new Subject<boolean>();

  login(loginData: ILoginData) {
    return this.http.post<any>(ApiEndpoint.LOGIN, loginData);
  }

  logout() {
    return this.http.get<IUser>(ApiEndpoint.AUTH_API_BASE_URL+"/v1/logout");
  }

  changePassword(email: string, data: IChangePassword) {
    return this.http.patch<any>(ApiEndpoint.CHANGE_PASSWORD+"/"+email, data);
  }

  resetPassword(email: string) {
    return this.http.patch<any>(ApiEndpoint.RESET_PASSWORD+"/"+email, {});
  }

  sendLoginSignal(data: boolean) {
    this.loginStatusSubject.next(data);
  }

  recieveLoginSignal() {
    return this.loginStatusSubject.asObservable();
  }

  getUserData(): Observable<IUser> {
    return this.http.get<IUser>(ApiEndpoint.AUTH_API_BASE_URL+"/v1/user-data");
  }

  getUserRoles(): Observable<string[]> {
    return this.getUserData().pipe(
      map(data=>{
        const roles = data.roles.split(",");
        console.log("ROLES --- ", roles);
        return roles;
      })
    );
  }
}
 