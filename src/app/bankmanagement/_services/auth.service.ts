import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string

}
@Injectable()
export class AuthService {
   
    }



