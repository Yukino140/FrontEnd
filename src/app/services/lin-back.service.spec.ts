import { TestBed } from '@angular/core/testing';

import { LinBackService } from './lin-back.service';

describe('LinBackService', () => {
  let service: LinBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
