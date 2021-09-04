import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import { SnackBarConfig } from "src/app/modules/shared/model/shared.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent implements OnInit {
  email = new FormControl("", [Validators.required, Validators.email]);
  passwordReset = false;
  msg: string;

  constructor(private authService: AuthService, private snackbar: MatSnackBar) {}

  ngOnInit() {}

  resetPassword() {
    this.authService.resetPassword(this.email.value).subscribe(
      (_) => {
        this.passwordReset = true;
        this.msg =
          "An email has been sent that contains your temporary password. Please login with the temporary password and change your password.";
      },
      (error: HttpErrorResponse) => {

        if(error.status == 400){
          this.snackbar.openFromComponent(SnackbarInfoComponent, {
            data: SnackBarConfig.dangerData(
              error.error
            ),
            ...SnackBarConfig.flashTopDangerSnackBar,
          });
        }

        console.log(error);
      }
    );
  }
}
