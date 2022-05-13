import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { StatisticComponent } from './statistic/statistic.component';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ActivateAirlineComponent } from './activate-airline/activate-airline.component';
import { SearchBookFlightComponent } from './search-book-flight/search-book-flight.component';
import { CancelFlightComponent } from './cancel-flight/cancel-flight.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: StatisticComponent, canActivate: [AuthGuard] },
  { path:'manageAirline',component:ManageAirlineComponent, canActivate: [AuthGuard] },
  { path:'manageDiscount',component:ManageDiscountComponent,canActivate: [AuthGuard]},
  { path:'activateairline',component:ActivateAirlineComponent,canActivate:[AuthGuard]},
  { path:'searchbookflight',component:SearchBookFlightComponent,canActivate:[AuthGuard]},
  {path:'cancelFlight',component:CancelFlightComponent,canActivate:[AuthGuard]}, 
  {path:'history',component:HistoryComponent,canActivate:[AuthGuard]},
  { path: '', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
