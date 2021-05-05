import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthenticationService, AuthResponseData } from '../_services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthResponseData) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.idToken}`
      }
    });

    return next.handle(request);
  }
}
