import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { BankComponent } from "./bankmanagement.component";
import { AuthenticationService } from "./_services/authentication.service";

describe('BankComponent', () => {
    let component: BankComponent;
    let fixture: ComponentFixture<BankComponent>;
    let location: Location;
  let router: Router;
  


  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BankComponent ],
        imports: [ HttpClientTestingModule , RouterTestingModule,ReactiveFormsModule,FormsModule ],
        providers: [ AuthenticationService, FormBuilder]
      })
      .compileComponents();
      router = TestBed.get(Router); 
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(BankComponent); 
    router.initialNavigation(); 
    });

    

})
  