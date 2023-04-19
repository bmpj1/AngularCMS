import { TestBed } from '@angular/core/testing';

import { WidgetWrapperService } from './widget-wrapper.service';

describe('WidgetWrapperService', () => {
  let service: WidgetWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
