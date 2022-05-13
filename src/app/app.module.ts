import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { StatisticComponent } from './statistic/statistic.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ActivateAirlineComponent } from './activate-airline/activate-airline.component';

import { SearchBookFlightComponent } from './search-book-flight/search-book-flight.component';
import { CancelFlightComponent } from './cancel-flight/cancel-flight.component';
import { HistoryComponent } from './history/history.component';
import { TokeninterceptorService } from './helper/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StatisticComponent,
    ManageAirlineComponent,
    ManageDiscountComponent,
    ActivateAirlineComponent,
    
    SearchBookFlightComponent,
         CancelFlightComponent,
         HistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
