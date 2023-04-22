import { Component, OnInit } from '@angular/core';
import { DropdownOption, DropdownSettings } from 'src/app/components/dropdown/dropdown.module';
import { Widget, DefaultWidgetDropdownSettings, DefaultWidget, DefaultWidgets } from './widget.module';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
})

export class WidgetComponent implements OnInit {
  dropdownSettings!: DropdownSettings;
  selectedOption!: DropdownOption;
  widgets: Widget[] = [];
  
  constructor() {
    this.widgets = [];
    this.dropdownSettings = DefaultWidgetDropdownSettings;
  }
  ngOnInit(): void {
  }

  onOptionSelected(event: DropdownOption) {
    this.selectedOption = event;
    console.log(this.selectedOption);
    
    this.addWidget(event);
  }

  addWidget(option: DropdownOption) {
    const widget: Widget = {
      id: option.value + '-' + Math.random().toString(36).substring(2),
      label: option.label,
      title: option.value,
      parents: DefaultWidgets,
      childs: [],
      name: option.value,
      component: WidgetComponent
    };
    
    console.log(this);
    console.log(widget);
    this.widgets.push(widget);
  }
  

  removeWidget(id: string) {
    this.widgets = this.widgets.filter(widget => widget.id !== id);
  }
}
