import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { SignIndata } from '../model/sign-indata';
import { LoginDetailService } from '../services/login-detail.service';
import { RoleValidationService } from '../services/role-validation.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(private roleValidationService:RoleValidationService ,private authenticationService: AuthenticationService ,private loginDetailService:LoginDetailService) { } 
  
  
  ngOnInit() {
  }
outresult:any
  signIndata:any
  signInForm:any
  roleID:any
  emailid:any

  onSubmit(signInForm: NgForm) {
    console.log('onsubmit button');
    this.signIndata = new SignIndata(signInForm.value.login,signInForm.value.password);
    if(signInForm.value.login != null || signInForm.value.password != null)    
      this.loginDetailService.proceedLogin(this.signIndata).subscribe(result => {
      if(result != null){
        console.log("RAW output"+JSON.stringify(result));
        
        this.outresult = JSON.parse(result);
        console.log("Parsed JSON :"+ this.outresult);
        
        console.log("token"+JSON.stringify(this.outresult.token));
        localStorage.setItem("token",this.outresult.token);


        this.roleID = this.outresult.role_id;
        localStorage.setItem("loginInfo",result);

        this.roleValidationService.RoleValidate(this.roleID);
        
        this.authenticationService.authenticate();
      }
      else{
        
        this.areCredentialsInvalid = true;
      }

    });
  

  }


}
