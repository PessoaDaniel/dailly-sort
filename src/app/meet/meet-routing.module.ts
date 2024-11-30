import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeetComponent} from "./meet.component";
import {RoomComponent} from "./components/room/room.component";

const routes: Routes = [
  {
    path: '',
    component: MeetComponent,
    children: [
      {
        path: 'room',
        component: RoomComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetRoutingModule { }
