import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WellcomeComponent} from "./components/wellcome/wellcome.component";
import {StartComponent} from "./start.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
