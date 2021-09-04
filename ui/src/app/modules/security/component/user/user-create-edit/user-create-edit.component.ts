import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Genders, Statuses } from "src/app/constant";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IActionResponse,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { IRole, IUser } from "../../../security.model";
import { RoleService } from "../../../service/role.service";
import { UserService } from "../../../service/user.service";

@Component({
  selector: "app-user-create-edit",
  templateUrl: "./user-create-edit.component.html",
  styleUrls: ["./user-create-edit.component.scss"],
})
export class UserCreateEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  statuses = Statuses;
  genders = Genders;

  nameCtrl = new FormControl("", Validators.required);
  emailCtrl = new FormControl("", Validators.required);
  mobileNoCtrl = new FormControl("", Validators.required);
  genderCtrl = new FormControl("", Validators.required);
  statusCtrl = new FormControl("", Validators.required);
  rolesFctrl = new FormControl();
  roles: IRole[];

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private roleService: RoleService
  ) {
    this.form = new FormGroup({
      nameCtrl: this.nameCtrl,
      emailCtrl: this.emailCtrl,
      mobileNoCtrl: this.mobileNoCtrl,
      genderCtrl: this.genderCtrl,
      statusCtrl: this.statusCtrl,
      rolesFctrl: this.rolesFctrl,
    });

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.getUserById();
      }
    });
  }

  ngOnInit() {
    this.getRoles();
  }

  getUserById() {
    this.userService.getUserById(this.id).subscribe(
      (data) => {
        this.setForm(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRoles() {
    this.roleService.getAllRoles().subscribe(
      (data) => {
        this.roles = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  private setForm(user: IUser) {
    this.nameCtrl.setValue(user.name);
    this.emailCtrl.setValue(user.email);
    this.mobileNoCtrl.setValue(user.mobileNo);
    this.genderCtrl.setValue(user.gender);
    this.statusCtrl.setValue(user.status);
    this.rolesFctrl.setValue(user.roles ? user.roles.split(",") : "");
  }

  private saveOrUpdateHttpObservable(
    payload: IUser
  ): Observable<IActionResponse> {
    if (this.id) {
      return this.userService.updateUser(payload, this.id);
    } else {
      return this.userService.createUser(payload);
    }
  }

  public save() {
    const payload: IUser = {
      id: this.id ? parseInt(this.id.toString()) : null,
      name: this.nameCtrl.value,
      email: this.emailCtrl.value,
      gender: this.genderCtrl.value,
      mobileNo: this.mobileNoCtrl.value,
      roles: this.rolesFctrl.value ? this.rolesFctrl.value.join() : null,
      status: this.statusCtrl.value,
    };
    this.saveOrUpdateHttpObservable(payload).subscribe(
      (data) => {
        const msg = this.id ? "Updated" : "Saved";
        this.snackBar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.successData(msg),
          ...SnackBarConfig.flashTopSuccessSnackBar(),
        });
        this.router.navigate(["/security/users"]);
      },
      (err) => {
        console.error(err);
        this.snackBar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.dangerData("Something went wrong."),
          ...SnackBarConfig.flashTopDangerSnackBar(),
        });
      }
    );
  }
}
