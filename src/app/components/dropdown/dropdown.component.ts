import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultDropdownSettings, DropdownOption, DropdownOutput, DropdownSettings } from './dropdown.module';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {
  showDropdown = false;
  searchTerm = '';
  
  @Input() settings!: DropdownSettings;
  @Output() optionSelected;

  constructor() {
    this.settings = DefaultDropdownSettings;
    this.optionSelected = new EventEmitter<DropdownOutput>();
  }
  ngOnInit(): void {
    
  }

  selectOption(option: DropdownOption) {
    this.optionSelected.emit({option});
  }
}
