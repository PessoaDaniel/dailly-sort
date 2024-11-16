import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule,  } from '@angular/common';

import { SortRoutingModule } from './sort-routing.module';
import { SortComponent } from './sort.component';
import { SigleComponent } from './components/sigle/sigle.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { ScrumPokerComponent } from './components/scrum-poker/scrum-poker.component';


@NgModule({
  declarations: [
    SortComponent,
    SigleComponent,
    WeeklyComponent,
    ScrumPokerComponent,
  ],
  imports: [
    CommonModule,
    SortRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple'})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SortModule { }
