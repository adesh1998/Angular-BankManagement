import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomvalidationService } from '../_services/customvalidation.service';
import { Customer } from '../_models/customer';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';
import { Router } from '@angular/router';
import { exhaustMap, first, map, take, tap } from 'rxjs/operators';
import { AuthenticationService, AuthResponseData } from '../_services/authentication.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  submitted = false;
  genders = ['male', 'female'];
  maritalStatus = ['single', 'married'];
  currentDate = new Date();
  
  dobirth:Date
  Account: any = ['Saving','Salaried'];
  isLoading = false;
  error: string = "";
  status="";
  amt="";
  
  

  
  
  
  
  
  
  
  

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    
    private authService:AuthenticationService,
    private userService:UserService,
    private alertService:AlertService,
    private router:Router,
    private http:HttpClient
   
    
    
    
  ) { }

 

  ngOnInit() {

    
    
    this.registerForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      username:['',[Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      guardianType: ['', Validators.required],
      guardianName: ['', Validators.required],
      citizenship: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      maritalstatus: ['', Validators.required],
      phonenumber: ['', [ Validators.required,Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],

      dob: ['', [Validators.required, 
        Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)],this.customValidator.dateNotValid.bind(this.customValidator)],
        
      dateRegister: ['', Validators.required],
      accType:['',Validators.required],
      branchName:['',Validators.required],
      citizenshipStatus:[],
      ammount:[this.amt],
      indentification:['',Validators.required],

      indentificationNo:['',[Validators.required,Validators.pattern('[A-Za-z0-9]*'),
      Validators.minLength(12), Validators.maxLength(12)]],

      referName:['',Validators.required],
      referNumber:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      referaddress:['',Validators.required],
      password: ['', Validators.required],
    
  }
    );

    this.registerForm.patchValue({
      'dateRegister':this.currentDate,
       'citizenshipStatus':this.status,
       'ammount':this.amt      
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {

    let authObs: Observable<AuthResponseData>;
    if (!this.registerForm.valid) {
      return;
    }
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

   

    this.isLoading = true;

   
      authObs=this.authService.signup(email, password);
    

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        localStorage.setItem('dataSource', JSON.stringify(this.registerForm.value));

        //  this.router.navigate(['/login']);
        this.userService.createUser(this.registerForm.value,resData.idToken)
        .pipe(first())     
              .subscribe(
                  data => {
                      
                      console.log(data);
                      this.router.navigate(['/login']);
        },
        error => {
            this.alertService.error(error);
            this.isLoading = false;
        });

        
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

  



    


  
  }




  

  // onSubmit() {
  //   console.log(this.registerForm.value)
  //   if(this.registerForm.invalid)
  //     return;
  //   this.authService.adduser(this.registerForm.value) .pipe(first())     
  //                 .subscribe(
  //                     data => {
  //                         this.alertService.success('Registration successful', true);
  //                         console.log(data);
  //                         this.router.navigate(['/login']);
    
  // },
  // error => {
  //       this.alertService.error(error);
  //       this.isLoading = false;}
  //       );

  // }
  isReadonly = true

  switch() {
   this.isReadonly = !this.isReadonly
  }


  citizenStatus(){
      const today = new Date();
      const birthDate = new Date(this.registerForm.value.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth(); 
      console.log(age);
            
           
            if(age>18 && age<=60){
              console.log(age);
              
             this.status="major"
            console.log(this.status);
            
            }
            else{
              this.status= "Senior";
              
            }
        
  }

  initialDeposit(){
    let accType=this.registerForm.value.accType
    
     if(accType=="Saving"){
       console.log(accType);
       
       this.amt="10000"
       console.log(this.amt);
       
     }
    else{
      this.amt="0"
    }

  }




  
}















        