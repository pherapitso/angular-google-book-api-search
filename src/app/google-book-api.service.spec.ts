import { TestBed, inject } from '@angular/core/testing';

import { GoogleBookApiService } from './google-book-api.service';

describe('GoogleBookApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBookApiService]
    });
  });

  it('should ...', inject([GoogleBookApiService], (service: GoogleBookApiService) => {
    expect(service).toBeTruthy();
  }));
});
