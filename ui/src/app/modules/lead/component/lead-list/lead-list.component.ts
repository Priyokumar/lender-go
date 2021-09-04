import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LeadStatus, UserRole } from "src/app/constant";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { CustomerService } from "src/app/modules/customer/service/customer.service";
import { ProductService } from "src/app/modules/product/service/product.service";
import { ConfirmationDialogComponent } from "src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IConfirmation,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { LoaderService } from "src/app/modules/shared/services/loader.service";
import { ILead} from "../../lead.model";
import { LeadService } from "../../service/lead.service";

@Component({
  selector: "app-lead-list",
  templateUrl: "./lead-list.component.html",
  styleUrls: ["./lead-list.component.scss"],
})
export class LeadListComponent implements OnInit {
  public errorMessage: string;
  public columns: string[] = [
    "leadId",
    "customer",
    "email",
    "mobileNo",
    "amount",
    "product",
    "interest",
    "frequency",
    "status",
    "action",
  ];
  public dataSource: MatTableDataSource<ILead>;
  leadStatus = LeadStatus;
  userRole = UserRole;
  roles: Observable<string[]>;

  constructor(
    private leadService: LeadService,
    private productService: ProductService,
    private customerService: CustomerService,
    public loaderService: LoaderService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getAllLeads();
    this.productService.getIProductByProductId("PPROD0001").subscribe(data=>{
      console.log(data);
    });
    this.roles = this.authService.getUserRoles();
  }

  getAllLeads() {
    this.loaderService.loading(true);
    this.leadService.getLeads().subscribe(
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

  getProduct(productId: string) {
    return this.productService.getIProductByProductId(productId);
  }

  getCustomer(customerId: string) {
    return this.customerService.getCustomerByCustomerId(customerId);
  }

  delete(id: number) {
    const confirmationData: IConfirmation = {
      title: "Delete Lead",
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
          this.leadService.deleteLead(id).subscribe(
            (data) => {
              this.loaderService.loading(false);
                this.snackBar.openFromComponent(SnackbarInfoComponent, {
                  data: SnackBarConfig.successData("Deleted"),
                  ...SnackBarConfig.flashTopSuccessSnackBar(),
                });
              this.getAllLeads();
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
