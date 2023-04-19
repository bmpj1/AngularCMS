import { Injectable } from '@angular/core';
import { Widget } from '../widget.module';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private widgets: Widget[] = [];

  constructor() { }

  getWidgets(): Widget[] {
    return this.widgets;
  }

  getWidgetById(id: string): Widget | undefined {
    const widget = this.widgets.find(w => w.id === id) ?? undefined;
    return widget;
  }

  addWidget(widget: Widget) {
    this.widgets.push(widget);
  }

  removeWidget(id: string) {
    this.widgets = this.widgets.filter(widget => widget.id !== id);
  }

  updateWidget(widget: Widget) {
    const index = this.widgets.findIndex(w => w.id === widget.id);
    if (index !== -1) {
      this.widgets[index] = widget;
    }
  }
}
