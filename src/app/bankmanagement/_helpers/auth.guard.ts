import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';


import { AuthenticationService } from '../_services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ){}
 canActivate(): boolean{
   if(localStorage.getItem('token')==null){
    this._router.navigate(['/login'])
     return false
   }else{
     
     return true
   }
 }
}
