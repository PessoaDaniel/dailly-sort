import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WellcomeComponent} from "./components/wellcome/wellcome.component";
import {StartComponent} from "./start.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    children: [
      {
        path: '',
        redirectTo: 'wellcome',
        pathMatch: 'full'
      },
      {
        path: 'wellcome',
        component: WellcomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          animation: 'loginPage'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          animation: 'loginPage'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
