// // https://www.youtube.com/watch?v=jbgqOuB8KTY&list=PLy7TtEmBFusIZQ0f1MTYQXbsjeYUrSeMA&index=6
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { UserListComponent } from './users/user-list/user-list.component';
// import { HomeComponent } from './home/home.component';
// import { UserFormComponent } from './users/user-form/user-form.component';
// import { UserDetailComponent } from './users/user-detail/user-detail.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'users', children: [
//     { path: '', component: UserListComponent },
//     { path: 'detail/:id', component: UserDetailComponent },
//     { path: 'create', component: UserFormComponent },
//     { path: 'edit/:id', component: UserFormComponent },
//   ]},
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class PagesRoutingModule { }
