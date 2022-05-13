import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { RoleValidationService } from './services/role-validation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookingairline';

  
  constructor(public authenticationService: AuthenticationService, public roleaurthservice:RoleValidationService) { }
  
  logout() {
    localStorage.clear();
    this.authenticationService.logout();
  }
}
