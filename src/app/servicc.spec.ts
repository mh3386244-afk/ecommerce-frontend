import { TestBed } from '@angular/core/testing';
import { Servicc } from './servicc';

describe('Servicc', () => {
  let service: Servicc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
