import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { PowerComponent } from './power/power.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { CartComponent } from './cart/cart.component';
import { AmazonComponent } from './amazon/amazon.component';
import { GoogleComponent } from './google/google.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './cars/cars.component';
import { StarComponent } from './star/star.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { Cart2Component } from './cart2/cart2.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWaybindingComponent,
    CalculatorComponent,
    RectangleComponent,
    SquareComponent,
    PowerComponent,
    EventregistrationComponent,
    EmployeeRegistrationComponent,
    CartComponent,
    AmazonComponent,
    GoogleComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    CarsComponent,
    StarComponent,
    GpayComponent,
    BankComponent,
    VehicleComponent,
    TypicodeComponent,
    FlipkartComponent,
    MailComponent,
    BankDetailsComponent,
    VehicleDetailsComponent,
    CreateAccountComponent,
    CreateUserComponent,
    CreateProductComponent,
    ParentComponent,
    ChildComponent,
    ProductComponent,
    Cart2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
