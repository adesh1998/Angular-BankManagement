import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthenticationService } from "./_services/authentication.service";

@Component({
    selector:"Bank",
    templateUrl:"./bankmanagement.component.html",
    styleUrls: ['./bankmanagement.component.css']
})
export class BankComponent  implements OnInit, OnDestroy {
    isAuthenticated = false;
    private userSub: Subscription;
  
    constructor(
      
      private authService: AuthenticationService
    ) {}
  
    ngOnInit() {

      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!JSON.parse(JSON.stringify(localStorage.getItem('dataSource') || '{}'));;
        console.log(!user);
        console.log(!!user);
      });
    }


    onLogout(){
      this.authService.logout();
    }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}