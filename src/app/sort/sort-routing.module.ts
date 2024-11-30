import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigleComponent } from './components/sigle/sigle.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { SortComponent } from './sort.component';
import {ScrumPokerComponent} from "./components/scrum-poker/scrum-poker.component";

const routes: Routes = [
  {
    path: '',
    component: SortComponent,
    children: [
      {
        path: '',
        redirectTo: 'single',
        pathMatch: 'full'
      },
      {
        path: 'single',
        component: SigleComponent
      },
      {
        path: 'weekly',
        component: WeeklyComponent
      },
      {
        path: 'poker/list',
        component: ScrumPokerComponent
      },
      {
        path: '**',
        redirectTo: 'single',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortRoutingModule { }
