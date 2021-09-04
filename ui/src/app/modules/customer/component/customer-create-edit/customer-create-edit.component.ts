import { CustomerStatus, CustomerStatuses } from './../../../../constant';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Statuses, Genders } from "src/app/constant";
import { IRole } from "src/app/modules/security/security.model";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IActionResponse,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { ICustomer } from "../../customer.model";
import { CustomerService } from "../../service/customer.service";

@Component({
  selector: "app-customer-create-edit",
  templateUrl: "./customer-create-edit.component.html",
  styleUrls: ["./customer-create-edit.component.scss"],
})
export class CustomerCreateEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  statuses = CustomerStatuses;
  genders = Genders;

  idCtrl = new FormControl("", null);
  nameCtrl = new FormControl("", Validators.required);
  customerIdCtrl = new FormControl({ value: "", disabled: true });
  mobileNoCtrl = new FormControl("", Validators.required);
  emailCtrl = new FormControl("", Validators.required);
  genderCtrl = new FormControl("", Validators.required);
  statusCtrl = new FormControl(
    { value: CustomerStatus.ACTIVE, disabled: false },
    Validators.required
  );
  occupationCtrl = new FormControl();
  addressCtrl = new FormControl();
  errorMessage: any;
  roles: IRole[];

  emailExists: boolean;
  mobileNoExists: boolean;

  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      idCtrl: this.idCtrl,
      nameCtrl: this.nameCtrl,
      customerIdCtrl: this.customerIdCtrl,
      mobileNoCtrl: this.mobileNoCtrl,
      emailCtrl: this.emailCtrl,
      genderCtrl: this.genderCtrl,
      statusCtrl: this.statusCtrl,
      occupationCtrl: this.occupationCtrl,
      addressCtrl: this.addressCtrl,
    });

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.getCustomerById();
      }
    });

    this.emailCtrl.valueChanges.pipe(debounceTime(1000)).subscribe((email) => {
      if (!email) {
        this.emailExists = false;
        return;
      }
      this.checkExitingCustomerByEmail(email);
    });

    this.mobileNoCtrl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((mobileNo) => {
        if (!mobileNo) {
          this.mobileNoExists = false;
          return;
        }
        this.checkExitingCustomerByMobileNo(mobileNo);
      });

    this.customerIdCtrl.disable();
  }

  ngOnInit() {}

  getCustomerById() {
    this.customerService.getCustomerById(this.id).subscribe(
      (data) => {
        this.setForm(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkExitingCustomerByMobileNo(mobileNo: string) {
    this.customerService.getAllCustomers({ mobileNo }).subscribe(
      (data) => {
        if (this.id) {
          if (data.length > 1) this.mobileNoExists = true;
          else this.mobileNoExists = false;
        } else {
          if (data.length > 0) this.mobileNoExists = true;
          else this.mobileNoExists = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkExitingCustomerByEmail(email: any) {
    this.customerService.getAllCustomers({ email }).subscribe(
      (data) => {
        if (this.id) {
          if (data.length > 1) this.emailExists = true;
          else this.emailExists = false;
        } else {
          if (data.length > 0) this.emailExists = true;
          else this.emailExists = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private setForm(customer: ICustomer) {
    this.idCtrl.setValue(customer.id);
    this.nameCtrl.setValue(customer.name);
    this.customerIdCtrl.setValue(customer.customerId);
    this.mobileNoCtrl.setValue(customer.mobileNo);
    this.genderCtrl.setValue(customer.gender);
    this.statusCtrl.setValue(customer.status);
    this.occupationCtrl.setValue(customer.occupation);
    this.addressCtrl.setValue(customer.address);
    this.emailCtrl.setValue(customer.email);
  }

  private saveOrUpdateHttpObservable(
    payload: ICustomer
  ): Observable<IActionResponse> {
    if (this.id) {
      return this.customerService.updateCustomer(payload, this.id);
    } else {
      return this.customerService.createCustomer(payload);
    }
  }

  public save() {
    const payload: ICustomer = {
      id: this.id ? parseInt(this.id.toString()) : null,
      name: this.nameCtrl.value,
      gender: this.genderCtrl.value,
      mobileNo: this.mobileNoCtrl.value,
      email: this.emailCtrl.value,
      status: this.statusCtrl.value,
      customerId: this.customerIdCtrl.value,
      occupation: this.occupationCtrl.value,
      address: this.addressCtrl.value,
    };

    this.saveOrUpdateHttpObservable(payload).subscribe(
      (data) => {
        let msg = "Saved";
        if (this.id) msg = "Updated";
        this.snackBar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.successData(msg),
          ...SnackBarConfig.flashTopSuccessSnackBar(),
        });
        this.router.navigate(["/customers"]);
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
