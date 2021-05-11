import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoanComponent } from '../loan/loan.component';
import { Customer } from '../_models/customer';
import { User } from '../_models/user.model';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';




describe('CustomService', () => {
    let service: AuthenticationService;
    let httpClient: HttpClient;
    let userService:UserService;
    let mockRouter;
    let customer:Customer

    beforeEach(() => {
        mockRouter = { navigate: jasmine.createSpy('navigate') };
      TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule , [RouterTestingModule.withRoutes([
            { path: 'loan', component: LoanComponent }
        ])] ],
          providers: [ AuthenticationService, FormBuilder]
      });
      service = TestBed.inject(AuthenticationService);
      httpClient = TestBed.inject(HttpClient);
      
      userService = TestBed.get(UserService);
        customer = new Customer();
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  xit('should go to loan if valid input',fakeAsync(() => {
    spyOn(userService, 'getAll').and.returnValue(of([customer]).pipe(delay(1)))
   
    var customer={name:"abc",username:"abc123",guardianType:"abc",guardianName:"abc",citizenship:"indian"
,country:"india",state:"maharastra",address:"abc",email:"aadesh.15298@gmail.com",gender:"male",maritalstatus:"single",
phonenumber:"7588874140",dob:"11/11/1999",dateRegister:"11/11/2021",accType:"saving",branchName:"abc",
citizenshipStatus:"major",ammount:"10000",indentification:"abc",indentificationNo:"123456789465",
referName:"abc",referNumber:"123",referaddress:"abc",password:"a"
};


    var userdata = { email: "aadesh.15298@gmail.com" , password : "a"}
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');
    
    service.login(userdata);
    expect(spy).toHaveBeenCalledWith(
      '/login'
    );
  }));




  it('should be logged out', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');
    localStorage.setItem('token',"abc")
    service.logout();
    expect(spy).toHaveBeenCalledWith(
        router.createUrlTree(['/login']), 
        jasmine.anything()
      );
  });
  it('should be save token', () => {
     
    expect( service.save_token("abc")).toEqual("abc");
  });

  it('should be get token', () => {
    localStorage.setItem('token',"abc")
    expect( service.get_token()).toEqual("abc");
  });
});
