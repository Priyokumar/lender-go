import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";
import { filter, map } from "rxjs/operators";
import { AuthService } from "./modules/auth/services/auth.service";
import { IUser } from "./modules/security/security.model";
import {
  adminSideNavs,
  investorSideNavs,
  ISideNav,
} from "./modules/shared/model/shared.model";
import { LoaderService } from "./modules/shared/services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  user: IUser;
  sideNavs: ISideNav[] = [];
  isLoggedIn = false;
  showSideNav = true;

  constructor(
    public authService: AuthService,
    public loaderService: LoaderService,
    private swUpdate: SwUpdate,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeApp();
  }

  initializeApp() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
    this.getUserData();
    this.authService.recieveLoginSignal().subscribe((data) => {
      if (data === undefined) {
        return;
      }
      if (data) {
        this.isLoggedIn = true;
        this.getUserData();
      } else {
        this.isLoggedIn = false;
        this.router.navigate(["/auth/login"]);
      }
    });
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map((e) => {
          if (e.url === "/auth/change-password") this.showSideNav = false;
          else this.showSideNav = true;
        })
      )
      .subscribe();
  }

  getUserData() {
    this.authService.getUserData().subscribe(
      (data) => {
        this.user = data;
        if (this.user.needChangePassword) {
          this.router.navigate(["/auth/change-password"]);
          return;
        }
        if (this.user.roles.includes("Investor")) {
          this.sideNavs = investorSideNavs;
        } else if (this.user.roles.includes("Admin")) {
          this.sideNavs = adminSideNavs;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      (data) => {
        this.router.navigate(["/auth/login"]);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
