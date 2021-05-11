import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../_services/authentication.service';
import { UpdatedetailComponent } from './updatedetail.component';


describe('UpdatedetailComponent', () => {
  let component: UpdatedetailComponent;
  let fixture: ComponentFixture<UpdatedetailComponent>;
  let mockRouter;

  beforeEach(async () => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    await TestBed.configureTestingModule({
      declarations: [ UpdatedetailComponent ],
      imports: [ HttpClientTestingModule , [RouterTestingModule],ReactiveFormsModule,FormsModule ],
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


 it('Should  go to login if registerForm is  valid',()=>{
  let router = TestBed.get(Router);
  let spy = spyOn(router, 'navigateByUrl');

  component.registerForm.controls.name.setValue("Adesh")
  component.registerForm.controls.username.setValue("Adesh1520")
  component.registerForm.controls.guardianType.setValue("abc")
  component.registerForm.controls.guardianName.setValue("abc")
  component.registerForm.controls.citizenship.setValue("indian")
  component.registerForm.controls.country.setValue("india")
  component.registerForm.controls.state.setValue("maharastra")
  component.registerForm.controls.address.setValue("abc")
  component.registerForm.controls.email.setValue("aadesh.15298@gmail.com")
  component.registerForm.controls.gender.setValue("male")
  component.registerForm.controls.maritalstatus.setValue("single")
  component.registerForm.controls.phonenumber.setValue("7588874140")
  component.registerForm.controls.dob.setValue("15/02/1999")
  component.registerForm.controls.dateRegister.setValue("15/02/1999")
  component.registerForm.controls.accType.setValue("saving")
  component.registerForm.controls.branchName.setValue("murum")
  component.registerForm.controls.citizenshipStatus.setValue("major")
  component.registerForm.controls.ammount.setValue("10000")
  component.registerForm.controls.indentification.setValue("abc")
  component.registerForm.controls.indentificationNo.setValue("123456789456")
  component.registerForm.controls.referName.setValue("abc")
  component.registerForm.controls.referNumber.setValue("1234")
  component.registerForm.controls.referaddress.setValue("abc")
  component.registerForm.controls.password.setValue("abc")
 

  component.onSubmit();
  fixture.detectChanges();

  expect(spy).toHaveBeenCalledWith(
    router.createUrlTree(['/home']), 
    jasmine.anything()
  );
});

 it('Should not  go to login if registerForm is not  valid',()=>{
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



 it('citizenstatus based on major  ',()=>{
  var date= new Date('1999/3/10') ;
  console.log(date);
  
  component.registerForm.controls.dob.setValue(date)
  component.citizenStatus();
  fixture.detectChanges()
  expect(component.status).toEqual("major");
 });
 it('citizenstatus based on Senior ',()=>{
  const date= new Date("10/3/1925") ;
  console.log(date);
  
  component.registerForm.controls.dob.setValue(date)
  component.citizenStatus();
  fixture.detectChanges()
  expect(component.status).toEqual("Senior");
 });

 it('ammount based on accType Saving  ',()=>{
  component.registerForm.controls.accType.setValue("Saving")
  component.initialDeposit();
  fixture.detectChanges()
  expect(component.amt).toEqual("10000");
 });
 it('ammount based on accType Salaried ',()=>{
  component.registerForm.controls.accType.setValue("salaried")
  component.initialDeposit();
  fixture.detectChanges()
  expect(component.amt).toEqual("0");
 });

});
