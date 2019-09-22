import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPage} from '../pages/auth/login/login.page';
import {RegisterPage} from '../pages/auth/register/register.page';



@NgModule({
  declarations: [
      LoginPage,
      RegisterPage
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
