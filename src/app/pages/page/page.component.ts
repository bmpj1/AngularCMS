import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export abstract class PageComponent implements OnInit {
  showSidebar: boolean[];
  // Query for a VIEW child of type `PageComponent`
  @Output() outSidebar = new EventEmitter<boolean[]>();
  
  constructor() {
    this.showSidebar = [false, false];
  }

  // Indicar al componente padre (master-page) que sidebars tiene que mostrar cuando se carga la página por primera vez
  ngOnInit(): void {
    this.onPageInit();
    console.log(this.showSidebar);
    this.outSidebar.emit(this.showSidebarEvent());
  }

  showSidebarEvent(): boolean[] {
    console.log(this.showSidebar);
    return this.showSidebar;
  }

  // Metodo abstracto que permite a los componentes que extiendan este agregar una funcionalidad al onPageInit(). Usado para indicar si se muestra el sidebar.
  abstract onPageInit(): void;
}