import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sort',
    pathMatch: 'full'
  },
  {
    path: 'sort',
    loadChildren: () => import('./sort/sort.module').then(m => m.SortModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then(m => m.MembersModule)
  },
  {
    path: '**',
    redirectTo: 'sort',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
