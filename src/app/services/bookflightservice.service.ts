import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookflightserviceService {

  constructor(private http:HttpClient) { }


  
  bookflightservice(invent_ID:any,username:any,Meal:any,discount:string,travelerList:any)
  {
    console.log(discount);
if(discount == null)
{
  //console.log('http://localhost:17604/api/v1.0/flight/booking?InvrntoryID='+invent_ID+'&username=user1&meal='+Meal);
    return this.http.post('http://localhost:17604/api/v1.0/flight/booking?InvrntoryID='+invent_ID+'&username=user1&meal='+Meal,travelerList,{ responseType: 'text'});
}else
{
  //console.log('http://localhost:17604/api/v1.0/flight/booking?InvrntoryID='+invent_ID+'&username=user1&meal='+Meal+'&discount_code='+discount);
  return this.http.post('http://localhost:17604/api/v1.0/flight/booking?InvrntoryID='+invent_ID+'&username=user1&meal='+Meal+'&discount_code='+discount,travelerList,{ responseType: 'text'});
}
  }

  getflightticket(email:any,count:any)
  {
    return this.http.get('http://localhost:17604/api/v1.0/flight/fetchtoui?email_id='+email+'&number='+count,{ responseType: 'text'});
  }


  Cancelpnr(pnr:any)
  {
return this.http.delete('http://localhost:17604/api/v1.0/flight/booking/cancel/'+pnr,{ responseType: 'text'});
  }

  getpnr(pnrcode:any)
  {
    return this.http.get('http://localhost:17604/api/v1.0/flight/ticket/'+pnrcode,{ responseType: 'text'});
    
  }

  getbyemailid(email_id:any)
  {
    console.log(email_id);
    return this.http.get('http://localhost:17604/api/v1.0/flight/history/email?email_id='+email_id,{ responseType: 'text'});
  }

}
