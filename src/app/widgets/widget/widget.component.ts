import { Component, Injectable, OnInit } from '@angular/core';
import { DropdownOption, DropdownSettings } from 'src/app/components/dropdown/dropdown.module';
import { Widget, DefaultWidgetDropdownSettings } from './widget.module';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
  inputs: ['title', 'parents', 'childs'] // add input property here
})

export class WidgetComponent implements OnInit {
  dropdownSettings!: DropdownSettings;
  selectedOption!: DropdownOption;
  widgets: Widget[] = [];
  
  constructor() {
  }
  ngOnInit(): void {
    this.widgets = [];

    this.dropdownSettings = DefaultWidgetDropdownSettings;
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
      parents: [],
      childs: [],
      name: option.value,
      component: WidgetComponent
    };
    
    console.log(widget);
    this.widgets.push(widget);
  }
  

  removeWidget(id: string) {
    this.widgets = this.widgets.filter(widget => widget.id !== id);
  }
}
