import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../page/page.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent extends PageComponent {
  constructor() {
    super();
  }
  
  override onPageInit(): void {
    
  }
}