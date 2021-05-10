import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../_services/authentication.service';

import { UpdatedetailComponent } from './updatedetail.component';

describe('UpdatedetailComponent', () => {
  let component: UpdatedetailComponent;
  let fixture: ComponentFixture<UpdatedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedetailComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule,ReactiveFormsModule ,FormsModule],
      providers: [ AuthenticationService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contain 24 fields in the form',()=>{
    expect(component.registerForm.contains('name')).toBeTruthy();
    expect(component.registerForm.contains('username')).toBeTruthy();
    expect(component.registerForm.contains('guardianType')).toBeTruthy();
    expect(component.registerForm.contains('guardianName')).toBeTruthy();
    expect(component.registerForm.contains('citizenship')).toBeTruthy();
    expect(component.registerForm.contains('country')).toBeTruthy();
    expect(component.registerForm.contains('state')).toBeTruthy();
    expect(component.registerForm.contains('address')).toBeTruthy();
    expect(component.registerForm.contains('email')).toBeTruthy();
    expect(component.registerForm.contains('gender')).toBeTruthy();
    expect(component.registerForm.contains('maritalstatus')).toBeTruthy();
    expect(component.registerForm.contains('phonenumber')).toBeTruthy();
    expect(component.registerForm.contains('dob')).toBeTruthy();
    expect(component.registerForm.contains('dateRegister')).toBeTruthy();
    expect(component.registerForm.contains('accType')).toBeTruthy();
    expect(component.registerForm.contains('branchName')).toBeTruthy();
    expect(component.registerForm.contains('citizenshipStatus')).toBeTruthy();
    expect(component.registerForm.contains('ammount')).toBeTruthy();
    expect(component.registerForm.contains('indentification')).toBeTruthy();
    expect(component.registerForm.contains('indentificationNo')).toBeTruthy();
    expect(component.registerForm.contains('referName')).toBeTruthy();
    expect(component.registerForm.contains('referNumber')).toBeTruthy();
    expect(component.registerForm.contains('referaddress')).toBeTruthy();
    expect(component.registerForm.contains('password')).toBeTruthy();
    
 });

 it('Should not go to login if registerForm is valid',()=>{
  let router = TestBed.get(Router);
  let spy = spyOn(router, 'navigateByUrl');

  component.onSubmit();
  fixture.detectChanges();

  expect(spy).not.toHaveBeenCalledWith('/login');
 });



 it('phonenumber control should contain only numeric values',()=>{
  let control = component.registerForm.get('phonenumber');
  control?.setValue(7588874140);
  expect(control?.valid).toBeTruthy();
 });


 it('state control is required ',()=>{
  let control = component.registerForm.get('state');
  control?.setValue('');
  expect(control?.valid).toBeFalsy();
 });

 it('identification number control should contain only alphabets and number ',()=>{
  let control = component.registerForm.get('name');
  control?.setValue('CZX@123');
  expect(control?.valid).toBeFalsy();
 });
});
