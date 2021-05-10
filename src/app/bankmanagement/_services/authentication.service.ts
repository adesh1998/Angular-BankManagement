import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Login } from '../_models/login';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { Customer } from '../_models/customer';
import { User } from '../_models/user.model';
import { Router } from '@angular/router';

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
    
    newCustomer = {};

    user = new Subject<User>();
    public currentUser: Observable<User>;
    token=""
    customer:Customer[]=[];

    constructor(private http: HttpClient,
      private router:Router
     
      ) {
      
    //   this.user = new BehaviorSubject<User>(JSON.parse(JSON.stringify(localStorage.getItem('dataSource') ||'{}')));
     }
  
    signup(email: string, password: string) {
      return this.http
        .post<AuthResponseData>(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDG610zqXhckM8UBXMwXx3_Bgx4nh7wxQI',
          {
            email: email,
            password: password,
            returnSecureToken: true
          }
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.token=resData.idToken;
            localStorage.setItem('token', JSON.stringify(resData.idToken));
            this.handleAuthentication(
              resData.email,
              resData.localId,
              resData.idToken,
              +resData.expiresIn
            );
          })
        );
    }
  
    signin(email: string, password: string) {
      return this.http
        .post<AuthResponseData>(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDG610zqXhckM8UBXMwXx3_Bgx4nh7wxQI',
          {
            email: email,
            password: password,
            returnSecureToken: true
          }
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.token=resData.idToken;
            localStorage.setItem('token', JSON.stringify(resData.idToken));
            this.handleAuthentication(
              resData.email,
              resData.localId,
              resData.idToken,
              +resData.expiresIn
            );
          })
        );
    }

    logout(){
      let user1=new User("","","",new Date())
      this.user.next(user1)
      localStorage.removeItem('token')
      this.router.navigate(['/login']);
    }
  
    private handleAuthentication(
      email: string,
      userId: string,
      token: string,
      expiresIn: number
    ) {
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(email, userId, token, expirationDate);
      this.user.next(user);
    }
  
    private handleError(errorRes: HttpErrorResponse) {
      let errorMessage = 'An unknown error occurred!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'This password is not correct.';
          break;
      }
      return throwError(errorMessage);
    }

  // public login(userInfo: Customer){
  //   let errorMessage ;
    // if(this.newCustomer['email']==userInfo['email'] && this.newCustomer['password']==userInfo['password']){
     
    //   return true;
    // }
    // else{

    //   return throwError(errorMessage);
    
    // }
  // }


//   login(data) {
//     this.userService.getDataJson().subscribe(customer=>this.customer.push(customer))
//     for(let i=0;i<this.customer.length;i++){
//       if(this.customer['email']==data['email'] && this.customer['password']==data['password']){
//         this.http.post<any>("http://localhost:3000/user", data, httpOptions).pipe(
//           tap((result) => this.save_token(result)),
//           catchError(this.handleError<any>('login'))
//       );
//         return true;
//       }
      
      

//     }
   
// }
// private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//         return of(result as T);
//     };
// }
// private save_token(data) {
//     if (data.success) {
//         localStorage.setItem('token', data.token);
//         return;
//     }
// }

  
  public adduser(customer1){
    this.newCustomer = customer1;
    console.log(this.newCustomer)
    return this.http.post("http://localhost:3000/user",customer1)
  }


  loggedIn(){
    return !!JSON.parse(JSON.stringify(localStorage.getItem('dataSource') || '{}'));
  }
}