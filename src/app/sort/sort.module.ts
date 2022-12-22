import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortRoutingModule } from './sort-routing.module';
import { SortComponent } from './sort.component';
import { SigleComponent } from './components/sigle/sigle.component';
import { WeeklyComponent } from './components/weekly/weekly.component';


@NgModule({
  declarations: [
    SortComponent,
    SigleComponent,
    WeeklyComponent
  ],
  imports: [
    CommonModule,
    SortRoutingModule
  ]
})
export class SortModule { }
