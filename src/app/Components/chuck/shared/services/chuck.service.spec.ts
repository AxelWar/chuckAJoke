import { TestBed } from '@angular/core/testing';
import { ChuckService } from './chuck.service';

import { HttpClientModule } from '@angular/common/http';

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
    expect(service).toBeTruthy();
  });
});
