import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable({
    providedIn: 'root',
  })
export class Customer {

    $key: string;
    name:string;
    username:string;
    guardianType:string;
    guardianName:string;
    address:string;
    citizenship:string;
    country:string;
    state:string;
    email:string;
    gender:string;
    maritalstatus:string;
    phonenumber:string;
    dob:string;
    dateRegister:string;
    accType:string;
    branchName:string;
    citizenshipStatus:string;
    ammount:string;
    indentification:string;
    indentificationNo:string;
    referName:string;
    referNumber:string;
    referaddress:string;
    password:string;



}
