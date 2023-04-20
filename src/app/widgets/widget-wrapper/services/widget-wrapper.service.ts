import { Observable, of } from 'rxjs';
import { DefaultWidget, Widget } from '../../widget/widget.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetWrapperService {
  widget!: Widget;

  constructor() { }

  set(widget: Widget) {
    this.widget = widget;
  }

  clear() {
    this.widget = DefaultWidget;
  }

  getWidget(): Observable<Widget> {
    // TODO: Hacer que devuelva la lista de widgets de la base de datos
    const widget = of(DefaultWidget);
    return widget;
  }
}
