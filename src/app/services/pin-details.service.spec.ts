import { TestBed } from '@angular/core/testing';

import { PinDetailsService } from './pin-details.service';

describe('PinDetailsService', () => {
  let service: PinDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
