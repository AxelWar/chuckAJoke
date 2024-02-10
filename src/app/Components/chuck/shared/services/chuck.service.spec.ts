import { TestBed } from '@angular/core/testing';
import { ChuckService } from './chuck.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ChuckService', () => {
  let service: ChuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });

    service = TestBed.inject(ChuckService);
  });

  it('getPhrase should...', () => {
    const result = service.getPhrase();
  });
});
