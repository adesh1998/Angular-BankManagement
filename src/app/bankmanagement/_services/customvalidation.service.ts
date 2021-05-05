import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  

    
  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateUserName(userName: string) {

    /* A static array is used to validate the availability of user names.
    *  Ideally it should be a service call to the server to search the value from a database.
    */

    const UserList = ['ankit', 'admin', 'user', 'superuser'];
    return (UserList.indexOf(userName) > -1);
  }


  dateNotValid(control:AbstractControl){
    return new Promise(resolve => {
      setTimeout(() => {
        let currentDate = new Date();
        let dob = new Date(control.value);
            let dobYear = dob.getFullYear();
            let maxDobYear = currentDate.getFullYear() - 18;
            //console.log(dobYear, maxDobYear)
            if (maxDobYear < dobYear) {
          resolve({ ageNotValid: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  citizenStatus(control:AbstractControl){
    let currentDate = new Date();
        let dob = new Date(control.value);
            let dobYear = dob.getFullYear();
            let maxDobYear = currentDate.getFullYear();
            let age=maxDobYear-dobYear;
            if(age<18){
              return "Minor";
            }
            if(age>18 && age<=60){
              return "Major";
            }
            else{
              return "Senior";
            }
      
  }



}