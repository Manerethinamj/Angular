import { Injectable } from '@angular/core';
import { SignIndata } from '../model/sign-indata';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  

  
public readonly mockUser: SignIndata = new SignIndata('user', 'test');
isAuthenticated:boolean = false;

constructor(private router: Router) { }

authenticate(){

  console.log("Authentication sign in data");
    this.isAuthenticated = true;
    this.router.navigate(['home']);
  
}

logout() {
  this.isAuthenticated = false;
  this.router.navigate(['']);
}

getIsAuthenticated(): boolean {
  return this.isAuthenticated;
}
}
