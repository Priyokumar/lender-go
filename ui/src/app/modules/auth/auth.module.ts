import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckingLoginGuardService } from './services/checking-login-guard.service';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [CheckingLoginGuardService] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [CheckingLoginGuardService] },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: []
})
export class AuthModule { }
