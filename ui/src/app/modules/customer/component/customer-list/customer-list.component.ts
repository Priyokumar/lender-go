import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import { UserRole } from "src/app/constant";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { ConfirmationDialogComponent } from "src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IConfirmation,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { LoaderService } from "src/app/modules/shared/services/loader.service";
import { ICustomer } from "../../customer.model";
import { CustomerService } from "../../service/customer.service";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  public errorMessage: string;
  public columns: string[] = [
    "customerId",
    "name",
    "email",
    "mobileNo",
    "gender",
    "occupation",
    "status",
    "address",
    "action",
  ];
  public dataSource: MatTableDataSource<ICustomer>;

  userRole = UserRole;
  roles: Observable<string[]>;

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public loaderService: LoaderService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.roles = this.authService.getUserRoles();
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.loaderService.loading(true);
    this.customerService.getAllCustomers().subscribe(
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
      title: "Delete role",
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
          this.customerService.deleteCustomer(id).subscribe(
            (data) => {
              this.snackBar.openFromComponent(SnackbarInfoComponent, {
                data: SnackBarConfig.successData("Deleted"),
                ...SnackBarConfig.flashTopSuccessSnackBar(),
              });
              this.getAllCustomers();
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
      });
  }
}
