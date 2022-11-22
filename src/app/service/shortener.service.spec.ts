/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShortenerService } from './shortener.service';

describe('Service: Shortener', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortenerService]
    });
  });

  it('should ...', inject([ShortenerService], (service: ShortenerService) => {
    expect(service).toBeTruthy();
  }));
});
