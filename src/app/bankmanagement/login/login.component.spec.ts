import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../_services/authentication.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule,ReactiveFormsModule,FormsModule ],
      providers: [ AuthenticationService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 2 fields in the form',()=>{
    expect(component.registerForm.contains('email')).toBeTruthy();
    expect(component.registerForm.contains('password')).toBeTruthy();
 });

 it('should make the name control required',()=>{
    let control = component.registerForm.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
 });



 it('should not redirect the customer to the loan page if loginForm is not valid',()=>{
  let router = TestBed.get(Router);
  let spy = spyOn(router, 'navigateByUrl');

  component.onSubmit();

  expect(component).toBeNull
  });

  it('should  redirect the customer to the loan page if loginForm is  valid',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');
    component.registerForm.controls.email.setValue("aadesh.15298@gmail.com")
    component.registerForm.controls.password.setValue("abc")
    component.onSubmit();
    fixture.detectChanges();

    expect(component).toBeTruthy()
    });
  


  it('should make the password control required',()=>{
    let control = component.registerForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
