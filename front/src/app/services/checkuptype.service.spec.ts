import { TestBed } from '@angular/core/testing';

import { CheckuptypeService } from './checkuptype.service';

describe('CheckuptypeService', () => {
  let service: CheckuptypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckuptypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
