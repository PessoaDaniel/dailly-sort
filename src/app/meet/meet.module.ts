import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetRoutingModule } from './meet-routing.module';
import { MeetComponent } from './meet.component';
import { RoomComponent } from './components/room/room.component';


@NgModule({
  declarations: [
    MeetComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    MeetRoutingModule
  ]
})
export class MeetModule { }
