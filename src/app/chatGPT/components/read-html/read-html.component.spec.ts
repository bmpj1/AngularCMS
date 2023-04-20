import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadHtmlComponent } from './read-html.component';

describe('ReadHtmlComponent', () => {
  let component: ReadHtmlComponent;
  let fixture: ComponentFixture<ReadHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
