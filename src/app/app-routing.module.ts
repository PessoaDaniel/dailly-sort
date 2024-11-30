import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";
import {Error404Component} from "./shared/error404/error404.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sort',
    pathMatch: 'full'
  },
  {
    path: 'sort',
    canActivate: [AuthGuard],
    loadChildren: () => import('./sort/sort.module').then(m => m.SortModule)
  },
  {
    path: 'members',
    canActivate: [AuthGuard],
    loadChildren: () => import('./members/members.module').then(m => m.MembersModule)
  },
  {
    path: 'meet',
    canActivate: [AuthGuard],
    loadChildren: () => import('./meet/meet.module').then(m => m.MeetModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then(m => m.StartModule)
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
