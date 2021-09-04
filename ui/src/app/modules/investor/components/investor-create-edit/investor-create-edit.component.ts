import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Genders, Statuses } from "src/app/constant";
import { UserService } from "src/app/modules/security/service/user.service";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IActionResponse,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { IInvestor } from "../../investor.model";
import { InvestorService } from "../../services/investor.service";

@Component({
  selector: "app-investor-create-edit",
  templateUrl: "./investor-create-edit.component.html",
  styleUrls: ["./investor-create-edit.component.scss"],
})
export class InvestorCreateEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  statuses = Statuses;
  genders = Genders;

  idCtrl = new FormControl("", null);
  nameCtrl = new FormControl("", Validators.required);
  investorIdCtrl = new FormControl({value:"", disabled:true});
  mobileNoCtrl = new FormControl("", Validators.required);
  genderCtrl = new FormControl("", Validators.required);
  statusCtrl = new FormControl("", Validators.required);
  occupationCtrl = new FormControl();
  addressCtrl = new FormControl();
  aadhaarNoCtrl = new FormControl("", Validators.required);
  dobCtrl = new FormControl("", Validators.required);
  emailCtrl = new FormControl("", Validators.required);
  panCardCtrl = new FormControl("", Validators.required);

  errorMessage: any;
  emailExists: boolean;
  mobileNoExists: boolean;

  constructor(
    private investorService: InvestorService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.form = new FormGroup({
      idCtrl: this.idCtrl,
      nameCtrl: this.nameCtrl,
      investorIdCtrl: this.investorIdCtrl,
      mobileNoCtrl: this.mobileNoCtrl,
      genderCtrl: this.genderCtrl,
      statusCtrl: this.statusCtrl,
      occupationCtrl: this.occupationCtrl,
      addressCtrl: this.addressCtrl,
      aadhaarNoCtrl: this.aadhaarNoCtrl,
      dobCtrl: this.dobCtrl,
      emailCtrl: this.emailCtrl,
      panCardCtrl: this.panCardCtrl,
    });

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.getInvestorById();
      }
    });

    this.emailCtrl.valueChanges.pipe(debounceTime(1000)).subscribe((email) => {
      if (!email) {
        this.emailExists = false;
        return;
      }
      this.checkExitingInvestorByEmail(email);
    });

    this.mobileNoCtrl.valueChanges.pipe(debounceTime(1000)).subscribe((mobileNo) => {
      if (!mobileNo) {
        this.mobileNoExists = false;
        return;
      }
      this.checkExitingInvestorByMobileNo(mobileNo);
    });

    this.investorIdCtrl.disable();
  }

  ngOnInit() {}

  getInvestorById() {
    this.investorService.getInvestorById(this.id).subscribe(
      (data) => {
        this.setForm(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private setForm(investor: IInvestor) {
    const dob = new Date(investor.dob);
    const dateOfPaymentStr = `${dob.getFullYear()}-${
      dob.getMonth() + 1 < 10 ? "0" + (dob.getMonth() + 1) : dob.getMonth() + 1
    }-${dob.getDate() < 10 ? "0" + dob.getDate() : dob.getDate()}`;

    this.idCtrl.setValue(investor.id);
    this.nameCtrl.setValue(investor.name);
    this.investorIdCtrl.setValue(investor.investorId);
    this.mobileNoCtrl.setValue(investor.mobileNo);
    this.genderCtrl.setValue(investor.gender);
    this.statusCtrl.setValue(investor.status);
    this.occupationCtrl.setValue(investor.occupation);
    this.addressCtrl.setValue(investor.address);

    this.aadhaarNoCtrl.setValue(investor.aadhaarNo);
    this.dobCtrl.setValue(dateOfPaymentStr);
    this.emailCtrl.setValue(investor.email);
    this.panCardCtrl.setValue(investor.panCard);
  }

  private saveOrUpdateHttpObservable(
    payload: IInvestor
  ): Observable<IActionResponse> {
    if (this.id) {
      return this.investorService.updateInvestor(payload, this.id);
    } else {
      return this.investorService.createInvestor(payload);
    }
  }

  public save() {
    const dobArr = this.dobCtrl.value.split("-");
    const dob = new Date(dobArr[0], parseInt(dobArr[1]) - 1, dobArr[2]);

    const payload: IInvestor = {
      id: this.id ? parseInt(this.id.toString()) : null,
      name: this.nameCtrl.value,
      gender: this.genderCtrl.value,
      mobileNo: this.mobileNoCtrl.value,
      status: this.statusCtrl.value,
      investorId: this.investorIdCtrl.value,
      occupation: this.occupationCtrl.value,
      address: this.addressCtrl.value,
      aadhaarNo: this.aadhaarNoCtrl.value + "",
      dob: dob,
      email: this.emailCtrl.value,
      panCard: this.panCardCtrl.value,
    };

    this.saveOrUpdateHttpObservable(payload).subscribe(
      (data) => {
        let msg = this.id ? "Updated" : "Added";

        this.snackBar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.successData(msg),
          ...SnackBarConfig.flashTopSuccessSnackBar(),
        });
        this.router.navigate(["/investors"]);
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

  checkExitingInvestorByEmail(email: string) {
    this.investorService.getInvestors({ email: email }).subscribe(
      (data) => {
        if (this.id) {
          this.emailExists = data && data.length > 1 ? true : false;
        } else {
          this.emailExists = data && data.length > 0 ? true : false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkExitingInvestorByMobileNo(mobileNo: string) {
    this.investorService.getInvestors({ mobileNo: mobileNo }).subscribe(
      (data) => {
        if (this.id) {
          this.mobileNoExists = data && data.length > 1 ? true : false;
        } else {
          this.mobileNoExists = data && data.length > 0 ? true : false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
