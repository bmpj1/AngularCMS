import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { BreadcrumbItem } from 'src/app/components/breadcrumb/BreadcrumbItem';
import { PageComponent } from '../../page/page.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})
export class UserFormComponent extends PageComponent {
  operation: string = 'Form';
  userId: string | null = '0';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
    // Get current url using router
    console.log(router.url);
  }
  
  override onPageInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.operation = this.userId ? 'edit' : 'create';
    });
  }
}