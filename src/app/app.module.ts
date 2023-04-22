import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContainerWidgetComponent } from './widgets/container-widget/container-widget.component';
import { WidgetComponent } from './widgets/widget/widget.component';
import { FilterPipe } from './widgets/widget/filter.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { WidgetWrapperComponent } from './widgets/widget-wrapper/widget-wrapper.component';
import { TextWidgetComponent } from './widgets/text-widget/text-widget.component';
import { TextareaWidgetComponent } from './widgets/textarea-widget/textarea-widget.component';

@NgModule({
  declarations: [
    // Basic components
    AppComponent,
    // Layout
    HeaderComponent,
    MasterPageComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    HomeComponent,
    // Widgets
    FilterPipe,
    TextWidgetComponent,
    TextareaWidgetComponent,
    ContainerWidgetComponent,
    WidgetComponent,
    WidgetWrapperComponent,
    // Pages
    UserFormComponent,
    UserListComponent,
    UserDetailComponent,
    NotFoundComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    BreadcrumbComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
