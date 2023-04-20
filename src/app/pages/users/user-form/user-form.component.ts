import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { BreadcrumbItem } from 'src/app/components/breadcrumb/BreadcrumbItem';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {
  operation: string = 'Form';
  userId: string | null = '0';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    // Get current url using router
    console.log(router.url);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.operation = this.userId ? 'edit' : 'create';
    });
  }
}
