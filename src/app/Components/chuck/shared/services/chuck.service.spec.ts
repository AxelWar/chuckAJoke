import { TestBed } from '@angular/core/testing';
import { ChuckService } from './chuck.service';

import { HttpClient } from '@angular/common/http';

describe('ChuckService', () => {
  let service: ChuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });

    service = TestBed.inject(ChuckService);
  });

  it('getPhrase should...', () => {
    const result = service.getPhrase();
  });
});
