import { Component, Input, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { DefaultWidget, Widget } from '../widget/widget.module';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.less']
})

export class WidgetWrapperComponent implements OnInit {
  // Declare a property for the WidgetComponent class
  @Input() widget!: Widget;
  widgetData!: Widget;
  @Output() outWidgetEvent = new EventEmitter<Widget>();
  
  constructor() {
    this.widgetData = DefaultWidget;
    console.log(this.widgetData);
  }

  ngOnInit(): void {
    console.log(this.widgetData);
    // Inicializar la propiedad component para permitir inyectar el component en el widget:
    this.widgetData = this.widget;
    // Crear el component de widget a inyectar
    
    this.onWidgetInit();
    console.log(this.widgetData);
    this.outWidgetEvent.emit(this.getWidgetData());
  }
  
  getWidgetData(): Widget | undefined { return this.widgetData; }

  onWidgetInit() { }
}
