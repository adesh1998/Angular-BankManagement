import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthenticationService } from "./_services/authentication.service";

@Component({
    selector:"Bank",
    templateUrl:"./bankmanagement.component.html",
    styleUrls: ['./bankmanagement.component.css']
})
export class BankComponent  {
    isAuthenticated = false;
    private userSub: Subscription;
  
    constructor(
      
      private authService: AuthenticationService
    ) {}
  
    // ngOnInit() {

    //   this.userSub = this.authService.save_token(user => {
    //     this.isAuthenticated = !!JSON.parse(JSON.stringify(localStorage.getItem('token') || '{}')).subscribe(user=>{})
    //     console.log(!user);
    //     console.log(!!user);
    //   });
    //}


    onLogout(){
      this.authService.logout();
    }
  
}