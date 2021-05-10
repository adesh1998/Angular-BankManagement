import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { Customer } from '../_models/customer';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  optionValue = '';
  loanInfo: FormGroup;
  submitted = false;
  invalidcredentials = false;
  
  isLoading = false;
  error: string = "";

 
  
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
   private authService: AuthenticationService
   ,
   private userService:UserService,
   private router:Router,
   private customer:Customer
    
    
  ) { }

  ngOnInit(){
  
// 
  this.loanInfo = this.fb.group({
    loanType : [ '', [ Validators.required ]],
    loanAmt : [ '', [ Validators.required ]],
    applyDate : [ '', [ Validators.required ]],
    courseFee : [ '', [ Validators.required ]],

    course : [ '', [ Validators.required ]],
    fatherOcc : [ '', [ Validators.required ]],
    experience : [ '', [ Validators.required ]],

    annualIncome : [ '', [ Validators.required ]],
    companyName : [ '', [ Validators.required ]],
    designation : [ '', [ Validators.required ]],
    perosnalExperience : [ '', [ Validators.required ]],
  });
  }

  
  get f() {
    return this.loanInfo.controls;
  }




  onSubmit() {
    // if (!this.loanInfo.valid) {
    //   return;
    // }
    this.router.navigateByUrl("/home")
  

      // this.userService.applyLoan(this.loanInfo.value).
      // subscribe(
      //   resData => {
      //     console.log(resData);
      //     this.isLoading = false;
          
      //     this.router.navigateByUrl("/home");
      //   },
      //   errorMessage => {
      //     console.log(errorMessage);
      //     this.error = errorMessage;
      //     this.isLoading = false;
      //   }
      // );
    

      // this.loanInfo.reset();
  }


}
