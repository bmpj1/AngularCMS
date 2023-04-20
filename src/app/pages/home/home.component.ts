import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbItem } from 'src/app/components/breadcrumb/BreadcrumbItem';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  breadcrumbItems: BreadcrumbItem[] = [];
  currentUrl: string = '';

  constructor(private router: Router) { 
    this.currentUrl = this.router.url;

    // Crea un array de BreadcrumbItem con los elementos necesarios
    this.breadcrumbItems = [
      { text: 'Home', link: '/' },
      { text: 'Current Page', link: this.currentUrl }
    ];
  }
}
