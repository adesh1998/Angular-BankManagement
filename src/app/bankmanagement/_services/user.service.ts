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
      private authService:AuthenticationService,
        private customer:Customer 
            ) { }

  
            getAll() {
                return this.http.get<Customer[]>("http://localhost:3000/user");
            }

            createUser(user:Customer,token:string){
              
              
                 //Send Http request
                 return this.authService.user.pipe(
                postData => {
                    console.log(token);
                    
                    return this.http
                    .post(
                      'https://bankmanagementnew-default-rtdb.firebaseio.com/Register.json',
                      user, {
                        params: new HttpParams().set('auth', token)
                      }
                    );
                     
                    
                  });
                
                
                 
                

              }


              applyLoan(loan:any){
              
              
                // Send Http request
                return this.authService.user.pipe(
               postData => {
                   console.log(this.authService.token);
                   
                   return this.http
                   .post(
                     'https://bankmanagementnew-default-rtdb.firebaseio.com/loan.json',
                     loan, {
                       params: new HttpParams().set('auth', this.authService.token)
                     }
                   );
                    
                   
                 });
                 
                
               

             }
              customerInfo() {
               
               
                return this.http
                .get<Customer[]>(
                  'https://bankmanagementnew-default-rtdb.firebaseio.com/register.json',
                )
                .pipe(
                  map(recipes => {
                    return recipes.map(recipe => {
                     this.customer=recipe
                    });
                  }),
                 );
               
            }
                 
                
               

                

              fetchPosts() {
                
                
               
                
                return this.authService.user.pipe(
                  take(1),
                  exhaustMap(user => {
                    console.log(user.token);
                    
                    return this.http.get<Customer[]>(
                      'https://bankmanagementnew-default-rtdb.firebaseio.com/register.json',
                      {
                        params: new HttpParams().set('auth', (user.token||''))
                      }
                    );
                  }),
                  map(recipes => {
                    return recipes.map(recipe => {
                      return {
                       
                      };
                    });
                  }),
                 
                );
              }


              getDataJson(){
                return this.http.get<Customer>("http://localhost:3000/user") ;
              }














}