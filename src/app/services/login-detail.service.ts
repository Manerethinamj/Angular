import { Injectable } from '@angular/core';
import { SignIndata } from '../model/sign-indata';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {

  constructor(private http:HttpClient){}

  readonly baseURL = 'http://localhost:17604/api/userLogin/Aurthenticate';
  formData: SignIndata = new SignIndata('','');
  

  proceedLogin(usercread:any)
  {
    console.log(usercread);
    return this.http.post(this.baseURL,usercread,{ responseType: 'text'});
  }


  
  saveUserRegData()
  {
    
  }

}
