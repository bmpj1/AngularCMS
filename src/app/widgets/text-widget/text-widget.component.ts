import { Component } from '@angular/core';
import { WidgetWrapperComponent } from '../widget-wrapper/widget-wrapper.component';

@Component({
  selector: 'app-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.less']
})
export class TextWidgetComponent extends WidgetWrapperComponent {
  editorContent = '';
  
  bold() {
    document.execCommand('bold', false);
  }
  
  italic() {
    document.execCommand('italic', false);
  }
  
  underline() {
    document.execCommand('underline', false);
  }
}
