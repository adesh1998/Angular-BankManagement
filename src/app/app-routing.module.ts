import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './bankmanagement/home/home.component';
import { LoanComponent } from './bankmanagement/loan/loan.component';
import { LoginComponent } from './bankmanagement/login/login.component';

import { RegistrationComponent } from './bankmanagement/registration/registration.component';
import { UpdatedetailComponent } from './bankmanagement/updatedetail/updatedetail.component';
import { AuthGuard } from './bankmanagement/_helpers/auth.guard';
// import { 
//   AuthGuardService as AuthGuard 
// } from './auth-guard.service';
const appRoutes:Routes=[
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'loan',component:LoanComponent,canActivate: [AuthGuard]},
  {path:'home',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'update',component:UpdatedetailComponent,canActivate: [AuthGuard]},
  // { 
  //   path: 'profile',
  //   component: RegistrationComponent,
  //   // canActivate: [AuthGuard] 
  // },
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
