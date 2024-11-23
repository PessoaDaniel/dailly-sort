import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    StartComponent,
    WellcomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule
  ]
})
export class StartModule { }
