import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import { AccountStatus, UserRole } from "src/app/constant";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { CustomerService } from "src/app/modules/customer/service/customer.service";
import { LeadService } from "src/app/modules/lead/service/lead.service";
import { ProductService } from "src/app/modules/product/service/product.service";
import { ConfirmationDialogComponent } from "src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IConfirmation,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { LoaderService } from "src/app/modules/shared/services/loader.service";
import { IAccount } from "../../account.model";
import { AccountService } from "../../service/account.service";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"],
})
export class AccountListComponent implements OnInit {
  public errorMessage: string;
  public columns: string[] = [
    "accountNo",
    "customer",
    "email",
    "mobileNo",
    "product",
    "amount",
    "interest",
    "frequency",
    "status",
    "action",
  ];
  public dataSource: MatTableDataSource<IAccount>;
  accountStatus = AccountStatus;
  userRole = UserRole;
  roles: Observable<string[]>;

  constructor(
    private accountService: AccountService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public loaderService: LoaderService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getAllAccounts();
    this.roles = this.authService.getUserRoles();
  }

  getAllAccounts() {
    this.loaderService.loading(true);
    this.accountService
      .getAccounts()
      .subscribe(
        (data) => {
          this.loaderService.loading(false);
          this.dataSource = new MatTableDataSource(data);
        },
        (error) => {
          this.loaderService.loading(false);
          console.log(error);
        }
      );
  }

  delete(id: number) {
    const confirmationData: IConfirmation = {
      title: "Delete Account",
      subtitle: "Are you really sure to delete this record?",
    };

    this.dialog
      .open(ConfirmationDialogComponent, {
        width: "26%",
        data: confirmationData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((okData) => {
        if (okData) {
          this.loaderService.loading(true);
          this.accountService.deleteAccount(id).subscribe(
            (data) => {
              this.loaderService.loading(false);
                this.snackBar.openFromComponent(SnackbarInfoComponent, {
                  data: SnackBarConfig.successData("Deleted"),
                  ...SnackBarConfig.flashTopSuccessSnackBar(),
                });
              this.getAllAccounts();
            },
            (err) => {
              this.loaderService.loading(false);
              console.error(err);
              this.snackBar.openFromComponent(SnackbarInfoComponent, {
                data: SnackBarConfig.dangerData("Something went wrong"),
                ...SnackBarConfig.flashTopDangerSnackBar(),
              });
            }
          );
        }
      });
  }
}
