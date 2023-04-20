import { DefaultWidget, Widget } from './../widget/widget.module';
import { Component, Input, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.less']
})

export class WidgetWrapperComponent implements OnInit {
  Injector!: Injector;
  // Declare a property for the WidgetComponent class
  @Input() widget!: Widget;
  widgetData!: Widget;
  
  constructor(injector: Injector) {
    this.Injector = Injector.create({providers: [], parent: injector});
    this.widgetData = DefaultWidget;
    console.log(this.widgetData);
  }

  ngOnInit(): void {
    console.log(this.widget);
    // Inicializar la propiedad component para permitir inyectar el component en el widget:
    this.widgetData = this.widget;
    // Crear el component de widget a inyectar
  }
}
