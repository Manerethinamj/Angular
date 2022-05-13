import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleValidationService {

  constructor(private router: Router) { }
  role_admin :boolean = false;
  RoleValidate(role:any){

    console.log("Authentication Role");
    console.log(role);
    if(role == 1)
    {
      
      this.role_admin = true;
      this.router.navigate(['home']);
    }

  }

}
