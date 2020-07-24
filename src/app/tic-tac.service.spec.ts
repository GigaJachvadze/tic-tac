import { TestBed } from '@angular/core/testing';

import { TicTacService } from './tic-tac.service';

describe('TicTacService', () => {
  let service: TicTacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicTacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
