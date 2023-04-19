import { Type } from "@angular/core";
import { WidgetComponent } from "./widget.component";
import { DropdownSettings } from "src/app/components/dropdown/dropdown.module";

export interface Title {
  singular: string;
  plural: string;
}

export interface Widget {
  id: string; // Identificador único aleatorio del widget
  name: string; // Nombre del widget, debe coincidir con el nombre que se usa para inyectarlo en el html. Ej: <app-container-widget>
  label: string; // Etiquieta del widget, se usa para mostrarlo en el widget en el <app-dropdown>. Ej: Container Widget
  title: Title; // Title title for the widget, se usa para mostrar el singular y plural del widget. Ej: title.singular = "Fila"; title.plural = "Columna";
  parents: Widget[];  // Lista ordenada de ancestros del widget, se usa para que el widget sepa dentro de que componentes se encuentra inyectado en el DOM.
  childs: Widget[]; // Lista ordenada con la descendencia del widget, se usa para que el widget sepa que widgets directos tiene inyectados
  component:  Type<any> | null; // 
}

export const DefaultTitle: Title = {
  singular: 'Widget',
  plural: 'Widgets',
};

export const DefaultWidget: Widget = {
  id: '',
  label: '',
  name: "",
  title: DefaultTitle,
  parents: [],
  childs: [],
  component: null,
};


export const DefaultWidgetDropdownSettings: DropdownSettings = {
  title: 'Agregar Widget',
  options: [
    { label: 'Container Widget', value: 'app-container-widget' },
    { label: 'Text Widget', value: 'app-text-widget' },
    { label: 'Textarea Widget', value: 'app-textarea-widget' },
  ],
  searchPlaceholder: 'Buscar widget'
};

export const DefaultWidgets: Widget[] = [];
