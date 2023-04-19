import { Injectable } from '@angular/core';
import * as Quill from 'quill';

@Injectable({
  providedIn: 'root'
})
export class QuillService {
  public quillModules: { [key: string]: any } = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }, { align: [] }],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }
  };

  public quillOptions: { [key: string]: any } = {
    modules: this.quillModules,
    placeholder: 'Enter text here...',
    theme: 'snow'
  };

  public getQuill(): typeof Quill {
    return Quill;
  }
}
