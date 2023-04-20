import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWidgetComponent } from './textarea-widget.component';

describe('TextareaWidgetComponent', () => {
  let component: TextareaWidgetComponent;
  let fixture: ComponentFixture<TextareaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
