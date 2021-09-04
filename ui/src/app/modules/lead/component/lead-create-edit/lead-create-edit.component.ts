import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LeadStatus, LeadStatuses } from "src/app/constant";
import { ICustomer } from "src/app/modules/customer/customer.model";
import { IProduct } from "src/app/modules/product/product.model";
import { SnackbarInfoComponent } from "src/app/modules/shared/components/snackbar-info/snackbar-info.component";
import {
  IActionResponse,
  SnackBarConfig,
} from "src/app/modules/shared/model/shared.model";
import { ILead } from "../../lead.model";
import { LeadService } from "../../service/lead.service";
import { CustomerListDialogComponent } from "src/app/modules/dialog/components/customer-list-dialog/customer-list-dialog.component";
import { ProductListDialogComponent } from "src/app/modules/dialog/components/product-list-dialog/product-list-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-lead-create-edit",
  templateUrl: "./lead-create-edit.component.html",
  styleUrls: ["./lead-create-edit.component.scss"],
})
export class LeadCreateEditComponent implements OnInit {

  id: number;
  form: FormGroup;
  amountCtrl = new FormControl("", Validators.required);
  statusCtrl = new FormControl("", Validators.required);
  monthlyInterestCtrl = new FormControl({value:"", disabled:true}, Validators.required);
  statuses = LeadStatuses;
  selectedProduct: IProduct;
  selectedCustomer: ICustomer;
  errorMessage: any;
  lead: ILead;
  showTooltip = false;

  constructor(
    private leadService: LeadService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.form = new FormGroup({
      amountCtrl: this.amountCtrl,
      statusCtrl: this.statusCtrl,
    });

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.getLeadById();
      }
    });

    this.amountCtrl.valueChanges.subscribe((data) => {
      this.calculateInterest();
    });
  }

  ngOnInit() {
    if (!this.id) {
      this.statusCtrl.setValue(LeadStatus.NEW);
    }
    setTimeout(()=>{
      this.showTooltip = true;
    }, 1500)
    setTimeout(()=>{
      this.showTooltip = false;
    }, 5000)
  }

  getLeadById() {
    this.leadService.getLeadById(this.id).subscribe(
      (data) => {
        this.lead = data;
        this.setForm(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

   private async setForm(lead: ILead) {
    this.amountCtrl.setValue(lead.amount);
    this.statusCtrl.setValue(lead.status);
    this.monthlyInterestCtrl.setValue(lead.monthlyInterest);

    try {
      this.selectedCustomer  = await lead.customer.toPromise();
    } catch (error) {
      console.log(error);
    }
    try {
      this.selectedProduct = await lead.product.toPromise();
      this.validateFormData();
    } catch (error) {
      console.log(error);
    }
  }

  private saveOrUpdateHttpObservable(
    payload: ILead
  ): Observable<IActionResponse> {
    if (this.id) {
      return this.leadService.updateLead(payload, this.id);
    } else {
      return this.leadService.createLead(payload);
    }
  }

  public save() {
    const payload: ILead = {
      id: this.id ? parseInt(this.id.toString()) : null,
      customerId: this.selectedCustomer.customerId,
      productId: this.selectedProduct.productId,
      amount: parseFloat(this.amountCtrl.value),
      status: this.statusCtrl.value,
    };

    if(this.lead){
      payload.leadId = this.lead.leadId;
      payload.monthlyInterest = this.lead.monthlyInterest;
    }

    console.log(payload);

    this.saveOrUpdateHttpObservable(payload).subscribe(
      (data) => {

        let msg = "Added";
        if(this.id) msg = "Updated";

        this.snackBar.openFromComponent(SnackbarInfoComponent, {
          data: SnackBarConfig.successData(msg),
          ...SnackBarConfig.flashTopSuccessSnackBar(),
        });
        this.router.navigate(["/leads"]);
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

  selectCustomer() {
    this.dialog
      .open(CustomerListDialogComponent, {
        data: { from: "LEAD" },
        width: "65%",
      })
      .afterClosed()
      .subscribe((customer) => {
        if (customer) {
          this.selectedCustomer = customer;
        }
      });
  }

  selectProduct() {
    this.dialog
      .open(ProductListDialogComponent, { width: "65%" })
      .afterClosed()
      .subscribe((product) => {
        if (product) {
          this.selectedProduct = product;
          this.calculateInterest();
          this.validateFormData();
        }
      });
  }

  calculateInterest() {
    if (!this.selectedProduct || !this.amountCtrl.value) {
      return;
    }
    const monInt =
      parseFloat(this.amountCtrl.value) * (this.selectedProduct.interest / 100);
    this.monthlyInterestCtrl.setValue(monInt);
  }

  private validateFormData() {
    this.monthlyInterestCtrl.setValidators(Validators.required);
  }
}
