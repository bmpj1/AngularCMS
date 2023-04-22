import { ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { PageComponent } from 'src/app/pages/page/page.component';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.less']
})
export class MasterPageComponent implements OnInit {
  showSidebar: boolean[];
  // Query for a VIEW child of type `PageComponent`
  @ViewChild(PageComponent) viewChild!: PageComponent;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.showSidebar = [false, false];
  }

  // Se ejecuta al inicializar el componente
  ngOnInit(): void {
    
  }
  
  // Se ejecuta al inyectar el componente hijo (la página que quieres cargar con el <router-outlet>). Permite ver y modificar valores del componente a cargar antes de que se muestre.
  
  onActivate(component: any) {
    console.log(component);
    console.log(component.showSidebar);
    this.showSidebar = component.showSidebar;
    this.cdr.detectChanges();
  }  
  
}
