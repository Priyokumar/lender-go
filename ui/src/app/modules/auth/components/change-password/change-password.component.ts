import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import { SnackBarConfig } from "src/app/modules/shared/model/shared.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  oldPassword = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  confirmPassword = new FormControl("", Validators.required);
  changedPassword = false;

  constructor(
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      oldPassword: this.oldPassword,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }

  changePassword() {
    const payload = this.form.value;

    this.authService
      .getUserData()
      .pipe(
        switchMap((data) =>
          this.authService.changePassword(data.email, payload)
        )
      )
      .subscribe(
        (data) => {
          this.changedPassword = true;
          this.snackbar.openFromComponent(SnackbarInfoComponent, {
            data: SnackBarConfig.successData(
              "Password has been successfully changed. You will be logged out in 5 seconds. Please login in with new password."
            ),
            ...SnackBarConfig.flashTopSuccessSnackBar(),
          });
          setTimeout(() => {
            this.authService.logout().subscribe(data=>{
              this.router.navigate(["/auth/login"]);
            }, error=>{
              console.error(error);
            });
          }, 5000);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
