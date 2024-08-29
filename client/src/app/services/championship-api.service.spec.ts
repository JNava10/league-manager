import { TestBed } from '@angular/core/testing';

import { ChampionshipApiService } from './championship-api.service';

describe('ChampionshipApiService', () => {
  let service: ChampionshipApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionshipApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
