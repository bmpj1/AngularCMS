import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageComponent } from '../page/page.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
// EXTENDEMOS la clase base PageComponent para reutilizar su código en todas los componentes tipo página
export class HomeComponent extends PageComponent {
  constructor() {
    super();
    this.showSidebar = [true, true];
  }
  
  override onPageInit(): void {
    console.log(this.showSidebar);
  }
}
