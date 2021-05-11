import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { BankComponent } from "./bankmanagement.component";
import { AuthenticationService } from "./_services/authentication.service";

describe('BankComponent', () => {
    let component: BankComponent;
    
   let service:AuthenticationService;
   let router;
   let mockRouter
  


  
    beforeEach(async () => {
      mockRouter = { navigate: jasmine.createSpy('navigate') };
        service=new AuthenticationService(null,mockRouter,null);
        component=new BankComponent(service);
      await TestBed.configureTestingModule({
        declarations: [ BankComponent ],
        imports: [ HttpClientTestingModule , RouterTestingModule,ReactiveFormsModule,FormsModule ],
        providers: [ AuthenticationService, FormBuilder]
      })
      .compileComponents();
      
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should logged out', () => {
      localStorage.setItem('token',"abc")
      component.onLogout()
      expect(component).toBeTruthy();
    });
    

    

})
  