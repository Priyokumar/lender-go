import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AccountStatuses } from "src/app/constant";
import { LeadListDialogComponent } from "src/app/modules/dialog/components/lead-list-dialog/lead-list-dialog.component";
import { ILead } from "src/app/modules/lead/lead.model";
import { LeadService } from "src/app/modules/lead/service/lead.service";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IActionResponse,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { IAccount } from "../../account.model";
import { AccountService } from "../../service/account.service";

@Component({
  selector: "app-account-create-edit",
  templateUrl: "./account-create-edit.component.html",
  styleUrls: ["./account-create-edit.component.scss"],
})
export class AccountCreateEditComponent implements OnInit {
  id: number;
  account: IAccount;
  selectedLead: ILead;
  showTooltip = false;
  accountStatuses = AccountStatuses;

  form: FormGroup;
  accountNoCtrl = new FormControl({value:"", disabled:true}, Validators.required);
  createdAtCtrl = new FormControl("", Validators.required);
  repaymentDateCtrl = new FormControl("", Validators.required);
  statusCtrl = new FormControl("", Validators.required);

  constructor(
    private accountService: AccountService,
    private leadService: LeadService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.form = new FormGroup({
      accountNoCtrl: this.accountNoCtrl,
      repaymentDateCtrl: this.repaymentDateCtrl,
      statusCtrl: this.statusCtrl,
      createdAtCtrl: this.createdAtCtrl,
    });

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.getAccountById();
      }
    });
    this.accountNoCtrl.disable();
  }

  ngOnInit() {
    setTimeout(() => {
      this.showTooltip = true;
    }, 1000);
    setTimeout(() => {
      this.showTooltip = false;
    }, 5000);
  }

  getAccountById() {
    this.accountService
      .getAccountById(this.id)
      .pipe(
        switchMap((data) => {
          this.account = data;
          this.setForm(data);
          return this.leadService.getLeadByLeadId(data.leadId);
        })
      )
      .subscribe(
        (data) => {
          this.selectedLead = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private setForm(account: IAccount) {
    const repDate = new Date(account.repaymentDate);
    const repaymentDate = `${repDate.getFullYear()}-${
      (repDate.getMonth() + 1) < 10
        ? "0" + (repDate.getMonth() + 1)
        : repDate.getMonth() + 1
    }-${repDate.getDate() < 10 ? "0"+repDate.getDate(): repDate.getDate()}`;

    const cretDate = new Date(account.dateOfCreation);
    const creationDate = `${cretDate.getFullYear()}-${
      cretDate.getMonth() + 1 < 10
        ? "0" + (cretDate.getMonth() + 1)
        : cretDate.getMonth() + 1
    }-${cretDate.getDate() < 10 ? "0"+cretDate.getDate(): cretDate.getDate()}`;

    this.accountNoCtrl.setValue(account.accountNo);
    this.createdAtCtrl.setValue(creationDate);
    this.repaymentDateCtrl.setValue(repaymentDate);
    this.statusCtrl.setValue(account.status);
  }

  private saveOrUpdateHttpObservable(
    payload: IAccount
  ): Observable<IActionResponse> {
    if (this.id) {
      return this.accountService.updateAccount(payload, this.id);
    } else {
      return this.accountService.createAccount(payload);
    }
  }

  public save() {
    const repDateArr = this.repaymentDateCtrl.value.split("-");
    const creatDateArr = this.createdAtCtrl.value.split("-");

    const repaymentDate = new Date(
      repDateArr[0],
      parseInt(repDateArr[1]) - 1,
      repDateArr[2]
    );
    const creationDate = new Date(
      creatDateArr[0],
      parseInt(creatDateArr[1]) - 1,
      creatDateArr[2]
    );

    const payload: IAccount = {
      id: this.id? parseInt(this.id.toString()): null,
      status: this.statusCtrl.value,
      accountNo: this.accountNoCtrl.value,
      leadId: this.selectedLead.leadId,
      repaymentDate: repaymentDate,
      dateOfCreation: creationDate,
      customerId: this.selectedLead.customerId,
      productId: this.selectedLead.productId
    };

    this.saveOrUpdateHttpObservable(payload).subscribe(
      (data) => {

        let msg = "Saved";
        if(this.id) msg = "Updated";

        this.snackBar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.successData(msg),
          ...SnackBarConfig.flashTopSuccessSnackBar(),
        });
        this.router.navigate(["/accounts"]);
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

  selectLead() {
    this.dialog
      .open(LeadListDialogComponent, { width: "65%" })
      .afterClosed()
      .subscribe(async (lead: ILead) => {
        if (lead) {
          this.selectedLead = lead;
        }
      });
  }
}
