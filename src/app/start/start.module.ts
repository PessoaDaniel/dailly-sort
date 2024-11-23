import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';


@NgModule({
  declarations: [
    StartComponent,
    WellcomeComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule
  ]
})
export class StartModule { }
