import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorListComponent } from './components/investor-list/investor-list.component';
import { InvestorCreateEditComponent } from './components/investor-create-edit/investor-create-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckingLoginGuardService } from '../auth/services/checking-login-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { UserService } from '../security/service/user.service';

const routes: Routes = [
  { path: '', component: InvestorListComponent, canActivate: [CheckingLoginGuardService] },
  { path: 'add', component: InvestorCreateEditComponent, canActivate: [CheckingLoginGuardService] },
  { path: ':id/edit', component: InvestorCreateEditComponent, canActivate: [CheckingLoginGuardService] }
];

@NgModule({
  declarations: [
    InvestorListComponent,
    InvestorCreateEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[UserService]
})
export class InvestorModule { }
