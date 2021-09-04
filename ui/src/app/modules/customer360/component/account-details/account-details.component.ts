import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { AccountStatus, UserRole } from "src/app/constant";
import { IAccount } from "src/app/modules/account/account.model";
import { AccountService } from "src/app/modules/account/service/account.service";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { ICustomer } from "src/app/modules/customer/customer.model";
import { RepaymentDialogComponent } from "src/app/modules/dialog/components/repayment-dialog/repayment-dialog.component";
import { RepaymentListDialogComponent } from "src/app/modules/dialog/components/repayment-list-dialog/repayment-list-dialog.component";

@Component({
  selector: "[account-details]",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.scss"],
})
export class AccountDetailsComponent implements OnInit, OnChanges {
  @Input() customer: ICustomer;
  accounts$: Observable<IAccount[]>;
  accountStatus = AccountStatus;
  roles: Observable<string[]>;
  userRole = UserRole;

  constructor(
    public accountService: AccountService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.customer) {
      this.accounts$ = this.accountService.getAccounts({
        customerId: this.customer.customerId,
      });
    }
  }

  ngOnInit() {
    this.roles = this.authService.getUserRoles();
  }

  viewRepaymentList(account: IAccount) {
    this.dialog.open(RepaymentListDialogComponent, {
      width: "65%",
      data: {
        accountNo: account.accountNo,
      },
    });
  }

  repay(account: IAccount) {
    this.dialog.open(RepaymentDialogComponent, { width: "25%", data: account });
  }
}
