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
    path: '', component: MasterPageComponent, // Ruta inicial, localhost:4200
    children: [
      { path: '', component: HomeComponent }, // Ruta inicial, localhost:4200
      { path: 'users', children: [ // Ruta para la lista de usuarios, localhost:4200/users
        { path: '', component: UserListComponent },  // Ruta para la lista de usuarios, localhost:4200/users
        { path: 'details/:id', component: UserDetailComponent }, // Ruta para ver los detalles de un usuario, localhost:4200/users/details/2
        { path: 'create', component: UserFormComponent }, // Ruta para crear un nuevo usuario, localhost:4200/users/create
        { path: 'edit/:id', component: UserFormComponent }, // Ruta para editar un usuario existente, localhost:4200/users/edit/3
      ]},
      { path: '**', component: NotFoundComponent }  // Cualquier página que no tenga una url redirecciona a la página de error 404: página no encontrada
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importamos el RouterModule y nuestras rutas definidas en el array routes.
  exports: [RouterModule] // Exportamos el RouterModule para que pueda ser usado en otros lugares de nuestra aplicación.
})
export class AppRoutingModule { }
