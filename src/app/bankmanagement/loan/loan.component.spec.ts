import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../_services/authentication.service';

import { LoanComponent } from './loan.component';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule,ReactiveFormsModule,FormsModule ],
      providers: [ AuthenticationService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  it('should contain 15 fields in the form',()=>{
    expect(component.loanInfo.contains('loanType')).toBeTruthy();
    expect(component.loanInfo.contains('loanAmt')).toBeTruthy();
    expect(component.loanInfo.contains('applyDate')).toBeTruthy();
   expect(component.loanInfo.contains('courseFee')).toBeTruthy();
    expect(component.loanInfo.contains('course')).toBeTruthy();
    expect(component.loanInfo.contains('fatherOcc')).toBeTruthy();
    expect(component.loanInfo.contains('experience')).toBeTruthy();
    expect(component.loanInfo.contains('annualIncome')).toBeTruthy();
    expect(component.loanInfo.contains('companyName')).toBeTruthy();
    expect(component.loanInfo.contains('designation')).toBeTruthy();
    expect(component.loanInfo.contains('perosnalExperience')).toBeTruthy();
 });

 it('should redirect the customer to the home page',()=>{
  let router = TestBed.get(Router);
  let spy = spyOn(router, 'navigateByUrl');

  component.onSubmit();

  expect(spy).toHaveBeenCalledWith('/home');
  });

 

 

});
