import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../page/page.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent extends PageComponent {
  constructor() {
    super();
  }
  override onPageInit(): void {
  }
}
