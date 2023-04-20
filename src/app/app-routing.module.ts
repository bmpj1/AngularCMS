import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';

const routes: Routes = [
  { 
    path: '', component: MasterPageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'users', children: [
        { path: '', component: UserListComponent },
        { path: 'details/:id', component: UserDetailComponent },
        { path: 'create', component: UserFormComponent },
        { path: 'edit/:id', component: UserFormComponent },
      ]},
      { path: '**', component: NotFoundComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
