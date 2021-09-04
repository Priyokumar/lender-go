import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AccountStatus, RepaymentStatuses } from "src/app/constant";
import { IAccount } from "src/app/modules/account/account.model";
import { AccountListDialogComponent } from "src/app/modules/dialog/components/account-list-dialog/account-list-dialog.component";
import { ILead } from "src/app/modules/lead/lead.model";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IActionResponse,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { Util } from "src/app/util";
import { IRepayment, IRepaymentDetails } from "../../repayment.model";
import { RepaymentService } from "../../service/repayment.service";

@Component({
  selector: "app-repayment-create-edit",
  templateUrl: "./repayment-create-edit.component.html",
  styleUrls: ["./repayment-create-edit.component.scss"],
})
export class RepaymentCreateEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  repaymentStatuses = RepaymentStatuses;
  showTooltip = false;
  repaymentDetails: IRepaymentDetails;

  repaymentIdCtrl = new FormControl({ value: "", disabled: true });
  dateOfPaymentCtrl = new FormControl("", Validators.required);
  amountPaidCtrl = new FormControl("", Validators.required);
  dueAmountCtrl = new FormControl(
    { value: "", disabled: true },
    Validators.required
  );
  statusCtrl = new FormControl("", Validators.required);

  selectedAccount: IAccount;
  errorMessage: any;
  lead: ILead;

  constructor(
    private repaymentService: RepaymentService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.form = new FormGroup({
      repaymentIdCtrl: this.repaymentIdCtrl,
      dateOfPaymentCtrl: this.dateOfPaymentCtrl,
      amountPaidCtrl: this.amountPaidCtrl,
      dueAmountCtrl: this.dueAmountCtrl,
      statusCtrl: this.statusCtrl,
    });

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.getRepaymentById();
      }
    });

    this.repaymentIdCtrl.disable();
    this.dueAmountCtrl.setValue(0);
    this.amountPaidCtrl.setValue(0);
    this.dueAmountCtrl.disable();

    this.amountPaidCtrl.valueChanges.subscribe((_) => {
      this.calculateDueAmount();
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.showTooltip = true;
    }, 1000);
    setTimeout(() => {
      this.showTooltip = false;
    }, 5000);
  }

  getRepaymentById() {
    this.repaymentService.getRepaymentById(this.id).subscribe(
      (data) => {
        this.setForm(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private setForm(repayment: IRepayment) {
    const dateOfPayment = new Date(repayment.dateOfPayment);
    const dateOfPaymentStr = Util.DateToHTMLDateString(dateOfPayment)
    this.repaymentIdCtrl.setValue(repayment.repaymentId);
    this.dateOfPaymentCtrl.setValue(dateOfPaymentStr);
    this.amountPaidCtrl.setValue(repayment.amountPaid);
    this.dueAmountCtrl.setValue(repayment.dueAmount);
    this.statusCtrl.setValue(repayment.status);
  }

  private saveOrUpdateHttpObservable(
    payload: IRepayment
  ): Observable<IActionResponse> {
    if (this.id) {
      return this.repaymentService.updateRepayment(payload, this.id);
    } else {
      return this.repaymentService.createRepayment(payload);
    }
  }

  public save() {
    const dateOfPayment = Util.HTMLDateStringToDate(
      this.dateOfPaymentCtrl.value
    );
    const payload: IRepayment = {
      id: this.id ? parseInt(this.id.toString()) : null,
      status: this.statusCtrl.value,
      accountNo: this.selectedAccount.accountNo,
      amountPaid: parseFloat(this.amountPaidCtrl.value),
      dateOfPayment: dateOfPayment,
      dueAmount: parseFloat(this.dueAmountCtrl.value),
      repaymentId: this.repaymentIdCtrl.value,
      customerId: this.selectedAccount.customerId,
      leadId: this.selectedAccount.leadId,
      productId: this.selectedAccount.productId,
    };

    this.saveOrUpdateHttpObservable(payload).subscribe(
      (data) => {
        this.snackBar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.successData("Saved"),
          ...SnackBarConfig.flashTopSuccessSnackBar(),
        });
        this.router.navigate(["/repayments"]);
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

  selectAccount() {
    this.dialog
      .open(AccountListDialogComponent, {
        width: "65%",
        data: { status: AccountStatus.DISBURSED },
      })
      .afterClosed()
      .subscribe(async (account: IAccount) => {
        if (account) {
          this.selectedAccount = account;
          try {
            this.lead = await account.lead.toPromise();
          } catch (error) {
            console.log(error);
          }
        }
      });
  }

  calculateDueAmount() {
    const amountPaid = parseInt(this.amountPaidCtrl.value);

    if (!amountPaid || !this.lead || !this.lead.monthlyInterest) return;

    const monthlyInterest = this.lead.monthlyInterest;

    if (amountPaid > monthlyInterest) {
      this.amountPaidCtrl.setValue(monthlyInterest);
      return;
    }

    const dueAmount = monthlyInterest - amountPaid;
    this.dueAmountCtrl.setValue(dueAmount);
  }
}
