import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DefaultDropdownSettings, DropdownOption, DropdownOutput, DropdownSettings } from './dropdown.module';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent  {
  showDropdown = false;
  searchTerm = '';
  
  @Input() settings!: DropdownSettings;
  @Output() optionSelected;

  constructor() {
    this.settings = DefaultDropdownSettings;
    this.optionSelected = new EventEmitter<DropdownOutput>();
  }

  selectOption(option: DropdownOption) {
    this.optionSelected.emit({option});
  }
}
