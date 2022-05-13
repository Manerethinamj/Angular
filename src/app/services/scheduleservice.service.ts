import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ScheduleinventoryModel } from '../model/scheduleinventory-model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {

  
  constructor(private http:HttpClient){}

  readonly baseURL = 'http://localhost:17604/api/v1.0/flight/airlineinventory';
  
  updateURL: any;
  Cancelschedule(invent_ID:any)
  {
    this.updateURL = 'http://localhost:17604/cancelschedule?inventoryID='+invent_ID.invent_ID;
      return this.http.post(this.updateURL,{ responseType: 'text'});
  }

  proceedschedule()
  {    
    return this.http.get(this.baseURL,{ responseType: 'text'});
  }
  proceedaddschedule(scheduleparm:any)
  {
return this.http.post('http://localhost:17604/api/v1.0/flight/airline/inventory/add?AirlineCode='+scheduleparm.AirlineCode+'&OnboardingTime='+scheduleparm.OnboardingTime+'&OnboardingPlace='+scheduleparm.OnboardingPlace+'&DistinationPlace='+scheduleparm.DistinationPlace,{ responseType: 'text'});
  }

  
  saveUserRegData()
  {
    
  }
}
