import { TestBed } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomvalidationService } from './customvalidation.service';



describe('CustomService', () => {
  let service: CustomvalidationService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // xit('should return data not valid', () => {
    
  //   service.dateNotValid()
  //   expect(service).toBeTruthy
    
  // });
});
