import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddAirlineModel } from '../model/add-airline-model';

@Injectable({
  providedIn: 'root'
})
export class ManageAirlineServiceService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'http://localhost:17604/api/v1.0/flight/get/airline';
  readonly addURL = 'http://localhost:17604/api/v1.0/flight/airline/register';
  
  AddAlirline(airlinobj:any)  
  {
      console.log(JSON.parse(JSON.stringify(airlinobj)));
    
    return this.http.post(this.addURL,airlinobj,{ responseType: 'text'});
  }
  cancelURL:any 
  CancelAirline(airlineID:any,AirlineType:any)
  {
    console.log(airlineID);console.log(AirlineType);
    this.cancelURL = 'http://localhost:17604/cancelAirline?AirlineID='+airlineID+'&Airlinecode='+AirlineType;
    return this.http.post(this.cancelURL,{ responseType: 'text'});
  }
  

  proceedAirline()
  {    
    return this.http.get(this.baseURL,{ responseType: 'text'});
  }
}
