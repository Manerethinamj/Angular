import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivateAirlineServiceService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'http://localhost:17604/api/v1.0/flight/getcancelledairline';
  actURL:any;
  activateAirlineservice(airlineID:number)
  {
    this.actURL = 'http://localhost:17604/activateAirline?AirlineID='+airlineID;
    console.log(this.actURL);
return this.http.post(this.actURL,{ responseType: 'text'});
  }

  getcancelledairline()
  {
    return this.http.get(this.baseURL,{ responseType: 'text'});
  }
}
