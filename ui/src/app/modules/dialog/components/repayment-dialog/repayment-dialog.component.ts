import { Util } from './../../../../util';
import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RepaymentStatuses } from "src/app/constant";
import { IAccount } from "src/app/modules/account/account.model";
import { ILead } from "src/app/modules/lead/lead.model";
import { IRepayment } from "src/app/modules/repayment/repayment.model";
import { RepaymentService } from "src/app/modules/repayment/service/repayment.service";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import { SnackBarConfig } from "src/app/modules/shared/model/shared.model";

@Component({
  selector: "app-repayment-dialog",
  templateUrl: "./repayment-dialog.component.html",
  styleUrls: ["./repayment-dialog.component.scss"],
})
export class RepaymentDialogComponent implements OnInit {
  amountPaidCtrl = new FormControl("", Validators.required);
  dueAmountCtrl = new FormControl("", Validators.required);
  statusCtrl = new FormControl("", Validators.required);
  dateOfPaymentCtrl = new FormControl("", Validators.required);
  formGroup: FormGroup;

  repaymentStatuses = RepaymentStatuses;
  lead: ILead;

  constructor(
    public dialogRef: MatDialogRef<RepaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAccount,
    private repaymentService: RepaymentService,
    private snackbar: MatSnackBar
  ) {
    this.amountPaidCtrl.valueChanges.subscribe((_) => {
      this.calculateDueAmount();
    });

    this.formGroup = new FormGroup({
      amountPaidCtrl: this.amountPaidCtrl,
      dueAmountCtrl: this.dueAmountCtrl,
      statusCtrl: this.statusCtrl,
      dateOfPaymentCtrl: this.dateOfPaymentCtrl,
    });
  }

  async ngOnInit() {
    this.dueAmountCtrl.disable();
    try {
      this.lead = await this.data.lead.toPromise();
      this.amountPaidCtrl.setValue(this.lead.monthlyInterest);
      this.dueAmountCtrl.setValue(0);
    } catch (error) {
      console.log(error);
    }
  }

  calculateDueAmount() {
    const amountPaid = parseFloat(this.amountPaidCtrl.value);

    if (!this.data || !this.data.lead || !this.lead.monthlyInterest) {
      return;
    }
    const monthlyInterest = this.lead.monthlyInterest;

    if (amountPaid > monthlyInterest) {
      this.amountPaidCtrl.setValue(monthlyInterest);
      return;
    }
    let dueAmount = monthlyInterest - amountPaid;
    if (amountPaid === monthlyInterest) {
      dueAmount = 0;
    }
    this.dueAmountCtrl.setValue(dueAmount);
  }

  public repay() {
    const payload: IRepayment = {
      id: null,
      status: this.statusCtrl.value,
      amountPaid: this.amountPaidCtrl.value,
      dateOfPayment: Util.HTMLDateStringToDate(this.dateOfPaymentCtrl.value),
      dueAmount: this.dueAmountCtrl.value,
      accountNo: this.data.accountNo,
      customerId: this.data.customerId,
      leadId: this.data.leadId,
      productId: this.data.productId,
    };

    this.repaymentService.createRepayment(payload).subscribe(
      (data) => {
        this.dialogRef.close();
        this.snackbar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.successData(
            "Saved"
          ),
          ...SnackBarConfig.flashTopSuccessSnackBar(),
        });
      },
      (error) => {
        console.error(error);
        this.snackbar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.dangerData("Something went wrong"),
          ...SnackBarConfig.flashTopDangerSnackBar(),
        });
      }
    );
  }
}
