
import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from './BreadcrumbItem';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent {
  home: string = "/";
  items: BreadcrumbItem[] = [];
  currentRoute: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    console.log(router.url);
  }

  ngOnInit(): void {
    

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      
    ).subscribe(() => {
      this.currentRoute = this.router.url;
      let splitRoutes = this.router.url.split('/').filter((route) => { return route != ""; });
      let acumulator = '';
      this.items = [];
      
      for (let i = 0; i < splitRoutes.length; i++) {
        let route = splitRoutes[i];
        acumulator += '/' + route;
        // Create a BreadcrumbItem:
        if (route == "create") {
          let item = { text: "Crear " + splitRoutes[i - 1], link: acumulator };
          this.items.push(item);
          
        } else if (route == "edit") {
          acumulator += '/' + splitRoutes[i+1]!;
          let item = { text: "Editar " + splitRoutes[i + 1], link: acumulator };
          this.items.push(item);
          i++;

        } else if (route == "details") {
          acumulator += '/' + splitRoutes[i+1]!;
          let item = { text: "Detalles de " + splitRoutes[i + 1], link: acumulator };
          this.items.push(item);
          i++;

        } else {
          let item = { text: route, link: acumulator };
          this.items.push(item);
        }
      }
    });
  }
}
