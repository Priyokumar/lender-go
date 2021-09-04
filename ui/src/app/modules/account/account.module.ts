import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountService } from "./service/account.service";
import { AccountListComponent } from "./component/account-list/account-list.component";
import { AccountCreateEditComponent } from "./component/account-create-edit/account-create-edit.component";
import { AccountViewComponent } from "./component/account-view/account-view.component";
import { RouterModule, Routes } from "@angular/router";
import { CheckingLoginGuardService } from "../auth/services/checking-login-guard.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogModule } from "../dialog/dialog.module";
import { MaterialModule } from "../shared/material/material.module";
import { LeadService } from "../lead/service/lead.service";
import { ProductService } from "../product/service/product.service";
import { EmiService } from "./service/emi.service";
import { RepaymentService } from "../repayment/service/repayment.service";
import { PipeModule } from "../pipe/pipe.module";
import { CustomerService } from "../customer/service/customer.service";
import { InvestorRouteGuardService } from "../auth/services/investor-route-guard.service";

const routes: Routes = [
  {
    path: "",
    component: AccountListComponent,
    canActivate: [CheckingLoginGuardService, InvestorRouteGuardService],
  },
  {
    path: "add",
    component: AccountCreateEditComponent,
    canActivate: [CheckingLoginGuardService, InvestorRouteGuardService, InvestorRouteGuardService],
  },
  {
    path: ":id/edit",
    component: AccountCreateEditComponent,
    canActivate: [CheckingLoginGuardService, InvestorRouteGuardService, InvestorRouteGuardService],
  },
  {
    path: ":id/view",
    component: AccountViewComponent,
    canActivate: [CheckingLoginGuardService, InvestorRouteGuardService, InvestorRouteGuardService],
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    PipeModule,
  ],
  declarations: [
    AccountListComponent,
    AccountCreateEditComponent,
    AccountViewComponent,
  ],
  providers: [
    AccountService,
    LeadService,
    EmiService,
    RepaymentService,
    ProductService,
    CustomerService,
  ],
})
export class AccountModule {}
