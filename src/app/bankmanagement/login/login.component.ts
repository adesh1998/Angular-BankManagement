import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService, AuthResponseData } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  invalidcredentials = false;
  
  isLoading = false;
  error: string = "";

 
  
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
   private authService: AuthenticationService,
   private router:Router
    
    
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  

  // onSubmit() {
  //   if (!this.registerForm.valid) {
  //     return;
  //   }
  //   let authObs: Observable<AuthResponseData>;
  //   const email = this.registerForm.value.email;
  //   const password = this.registerForm.value.password;

  //     authObs=this.authService.signin(email, password);
  //     authObs.pipe(first()).subscribe(
  //       resData => {
  //         console.log(resData);
  //         this.isLoading = false;
  //         console.log(resData.idToken)
  //         this.router.navigateByUrl("/loan");
  //       },
  //       errorMessage => {
  //         console.log(errorMessage);
  //         this.error = errorMessage;
  //         this.isLoading = false;
  //       }
  //     );
    

  //     this.registerForm.reset();
  // }


  

  // goToRegister() {
  //   this.router.navigateByUrl("/register")
  // }

  onSubmit() {
   
    if(this.registerForm.invalid){
      return;
    }
    this.authService.login(this.registerForm.value);
  }
}