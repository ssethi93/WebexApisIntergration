import { TestBed } from '@angular/core/testing';

import { WebexApisService } from './webex-apis.service';

describe('WebexApisService', () => {
  let service: WebexApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebexApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
