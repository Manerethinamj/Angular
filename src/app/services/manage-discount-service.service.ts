import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDiscountServiceService {

  constructor(private http:HttpClient) { }

  
  readonly baseURL = 'http://localhost:17604/api/v1.0/flight/getdiscount';
  
  proceedDiscount()
  {
    return this.http.get(this.baseURL,{ responseType: 'text'});
  }
  tranURL:any;
  proceedadddiscount(manageDiscount:any)
  {
    console.log(manageDiscount.dicountCode);
    console.log(manageDiscount.amount);
    this.tranURL = 'http://localhost:17604/api/v1.0/flight/add/admin/discount?discountCode='+manageDiscount.dicountCode+'&amount='+manageDiscount.amount;
    console.log(this.tranURL);
    return this.http.post(this.tranURL,{ responseType: 'text'});
  }

  getdiscountamount(discountCode:any)
  {
    return this.http.get('http://localhost:17604/api/v1.0/getdiscountbycode?discountcode='+discountCode,{ responseType: 'text'});
  }

}
