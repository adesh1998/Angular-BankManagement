import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bankmanagement/bankmanagement.component';
import { RegistrationComponent } from './bankmanagement/registration/registration.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './bankmanagement/login/login.component';
import { LoanComponent } from './bankmanagement/loan/loan.component';
import { UpdatedetailComponent } from './bankmanagement/updatedetail/updatedetail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AngularFireModule } from '@angular/fire';
import { LoadingSpinnerComponent } from './bankmanagement/_helpers/loading-spinner/loading-spinner.component';
import { AuthenticationService } from './bankmanagement/_services/authentication.service';
import { AuthGuard } from './bankmanagement/_helpers/auth.guard';
import { HomeComponent } from './bankmanagement/home/home.component';



var firebase={
  apiKey: "AIzaSyAwhxSCKncEHLn9pzgeInwXURcM1msD1Og",
  authDomain: "bankmanagement-b17e3.firebaseapp.com",
  databaseURL: "https://bankmanagement-b17e3-default-rtdb.firebaseio.com",
  projectId: "bankmanagement-b17e3",
  storageBucket: "bankmanagement-b17e3.appspot.com",
  messagingSenderId: "358270807062",
  appId: "1:358270807062:web:23774cf11ba6beaf9dd937",
  measurementId: "G-R8TF24BSQW"
};



@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    RegistrationComponent,
    LoginComponent,
    LoanComponent,
    UpdatedetailComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
    
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
