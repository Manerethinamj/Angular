import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchAirlineService {
  

  constructor(private http:HttpClient ) { }
isappear:boolean =false;

  SearchAirline(onboardingPlace:any,distinationPlace:any)
  {
    console.log(localStorage.getItem("token"));
    this.isappear = true;
    return this.http.get('http://localhost:17604/api/v1.0/flight/search?OnboardingPlace='+onboardingPlace+'&DistinationPlace='+distinationPlace,{ responseType: 'text'});

  }

  bookticketconfirm()
  {
    
  }
}
