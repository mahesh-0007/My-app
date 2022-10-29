import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './amazon/amazon.component';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GoogleComponent } from './google/google.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[], children:[
   {path:'calculator',component:CalculatorComponent},
   {path:'interpolation',component:InterpolationComponent},
   {path:'event-binding',component:EventBindingComponent},
   {path:'two-waybinding',component:TwoWaybindingComponent},
   {path:'rectangle',component:RectangleComponent},
   {path:'square',component:SquareComponent},
   {path:'power',component:PowerComponent},
   {path:'eventregistration',component:EventregistrationComponent},
   {path:'employee-registration',component:EmployeeRegistrationComponent,canDeactivate:[NotifyGuard]},
   {path:'cart',component:CartComponent},
   {path:'amazon',component:AmazonComponent},
   {path:'google',component:GoogleComponent},
   {path:'pipes',component:PipesComponent},
   {path:'cars',component:CarsComponent},
   {path:'star',component:StarComponent},
   {path:'gpay',component:GpayComponent},
   {path:'bank',component:BankComponent},
   {path:'vehicle',component:VehicleComponent},
   {path:'typicode',component:TypicodeComponent},
   {path:'flipkart',component:FlipkartComponent},
   {path:'mail',component:MailComponent},
   {path:'bank-details/:id',component:BankDetailsComponent},
   {path:'vehicle-details/:id',component:VehicleDetailsComponent},
   {path:'create-account',component:CreateAccountComponent,canDeactivate:[NotifyGuard]}
  
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
