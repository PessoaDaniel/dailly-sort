import { ParticipantsModule } from './../participants/participants.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeadbarComponent } from './layout/headbar/headbar.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    SidebarComponent,
    HeadbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ParticipantsModule,
    HttpClientModule
  ],
  exports:[
    SidebarComponent,
    HeadbarComponent
  ]
})
export class SharedModule { }
