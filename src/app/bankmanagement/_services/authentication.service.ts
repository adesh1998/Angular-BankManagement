import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Login } from '../_models/login';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { Customer } from '../_models/customer';
import { User } from '../_models/user.model';
import { Router } from '@angular/router';
import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
  }
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    newCustomer = {};

    user = new Subject<User>();
    public currentUser: Observable<User>;
    token=""
    customer;

    constructor(private http: HttpClient,
      private router:Router,
      private userService:UserService
     
      ) {
      
     }
  
 


  

  public login(userInfo: any){
    this.userService.getAll()
      .subscribe((result) => {
        this.customer=result;
          for(let items of this.customer){
            if(items.email == userInfo['email'] && items.password == userInfo['password']){
                this.save_token(items.username)
                this.isAuthenticatedSubject.next(true);
                this.router.navigateByUrl('/loan')
            }
          }
      }) 
  }

  logout(){
    localStorage.removeItem('token')
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  // loggedIn(){
  //   return !!JSON.parse(JSON.stringify(localStorage.getItem('dataSource') || '{}'));
  // }



  save_token(data) {
   
    localStorage.setItem('token', data);
    return data;
     
 
}

get_token()
{
  return localStorage.getItem('token')
}

}























    // signup(email: string, password: string) {
    //   return this.http
    //     .post<AuthResponseData>(
    //       'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDG610zqXhckM8UBXMwXx3_Bgx4nh7wxQI',
    //       {
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //       }
    //     )
    //     .pipe(
    //       catchError(this.handleError),
    //       tap(resData => {
    //         this.token=resData.idToken;
    //         localStorage.setItem('token', JSON.stringify(resData.idToken));
    //         this.handleAuthentication(
    //           resData.email,
    //           resData.localId,
    //           resData.idToken,
    //           +resData.expiresIn
    //         );
    //       })
    //     );
    // }
  
    // signin(email: string, password: string) {
    //   return this.http
    //     .post<AuthResponseData>(
    //       'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDG610zqXhckM8UBXMwXx3_Bgx4nh7wxQI',
    //       {
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //       }
    //     )
    //     .pipe(
    //       catchError(this.handleError),
    //       tap(resData => {
    //         this.token=resData.idToken;
    //         localStorage.setItem('token', JSON.stringify(resData.idToken));
    //         this.handleAuthentication(
    //           resData.email,
    //           resData.localId,
    //           resData.idToken,
    //           +resData.expiresIn
    //         );
    //       })
    //     );
    // }

  
    // private handleAuthentication(
    //   email: string,
    //   userId: string,
    //   token: string,
    //   expiresIn: number
    // ) {
    //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    //   const user = new User(email, userId, token, expirationDate);
    //   this.user.next(user);
    // }
  
    // private handleError(errorRes: HttpErrorResponse) {
    //   let errorMessage = 'An unknown error occurred!';
    //   if (!errorRes.error || !errorRes.error.error) {
    //     return throwError(errorMessage);
    //   }
    //   switch (errorRes.error.error.message) {
    //     case 'EMAIL_EXISTS':
    //       errorMessage = 'This email exists already';
    //       break;
    //     case 'EMAIL_NOT_FOUND':
    //       errorMessage = 'This email does not exist.';
    //       break;
    //     case 'INVALID_PASSWORD':
    //       errorMessage = 'This password is not correct.';
    //       break;
    //   }
    //   return throwError(errorMessage);
    // }
