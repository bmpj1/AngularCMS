import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../page/page.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent extends PageComponent {
  constructor() {
    super();
  }
  
  override onPageInit(): void {
    
  }
}
