import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';



@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        else{
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token||'{}')
          });
        return next.handle(modifiedReq);
      }})
    );
  }
}