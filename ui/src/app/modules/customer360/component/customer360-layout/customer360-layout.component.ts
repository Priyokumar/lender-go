import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { CustomerStatus } from "src/app/constant";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { ICustomer } from "src/app/modules/customer/customer.model";
import { CustomerListDialogComponent } from "src/app/modules/dialog/components/customer-list-dialog/customer-list-dialog.component";
import { UserService } from "src/app/modules/security/service/user.service";

@Component({
  selector: "app-customer360-layout",
  templateUrl: "./customer360-layout.component.html",
  styleUrls: ["./customer360-layout.component.scss"],
})
export class Customer360LayoutComponent implements OnInit {
  selectedCustomer: ICustomer;
  customerCtrl = new FormControl("", Validators.required);

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  selectCustomer() {

    const query: ICustomer = {
      status: CustomerStatus.ACTIVE
    }

    this.dialog
      .open(CustomerListDialogComponent, { data: {query:query}, width: "65%" })
      .afterClosed()
      .subscribe((customer) => {
        if (customer) {
          this.selectedCustomer = customer;
          this.customerCtrl.setValue(customer.customerId);
        }
      });
  }
}
