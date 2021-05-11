import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Customer } from '../_models/customer';
import { environment } from 'src/environments/environment';
import { AbstractControl } from '@angular/forms';
import { exhaustMap, first, map, take, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';



@Injectable({ providedIn: 'root' })
export class UserService {
  

    constructor(private http: HttpClient,
      
        private customer:Customer 
            ) { }

  
            getAll() {
                return this.http.get("http://localhost:3000/user");
            }
            public adduser(customer1){
             
              return this.http.post("http://localhost:3000/user",customer1)
            }

           











              // applyLoan(loan:any){
              
              
              //   // Send Http request
              //   return this.authService.user.pipe(
              //  postData => {
              //      console.log(this.authService.token);
                   
              //      return this.http
              //      .post(
              //        'https://bankmanagementnew-default-rtdb.firebaseio.com/loan.json',
              //        loan, {
              //          params: new HttpParams().set('auth', this.authService.token)
              //        }
              //      );
                    
                   
              //    });
                 
                
               

            // }






}