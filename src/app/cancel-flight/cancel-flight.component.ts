import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookflightserviceService } from '../services/bookflightservice.service';

@Component({
  selector: 'app-cancel-flight',
  templateUrl: './cancel-flight.component.html',
  styleUrls: ['./cancel-flight.component.css']
})
export class CancelFlightComponent implements OnInit {

  constructor(public bookflightserviceService:BookflightserviceService) { }

  ngOnInit(): void {
  }

  pnrcode:any;
  isticketvisable:boolean = true;
  pnrrows:any;
  onSubmit(signInForm:NgForm)
  {
    this.isticketvisable = false;
    this.pnrcode = signInForm.value.pnr_code;
    this.getpnrdata();

  }

  outresultrow:any;
  cancelFlightticket(incomdate:any)
  {
    this.isticketvisable  = false;
    this.bookflightserviceService.Cancelpnr(this.pnrcode).subscribe(result => {
      if(result != null){

      }
    });
    this.iscancelled = false;
    
  this.getpnrdata();
  
  }
  iscancelled:boolean = true;

  getpnrdata()
  {
    this.bookflightserviceService.getpnr(this.pnrcode).subscribe(result => {
      if(result != null){
        console.log('refreshed '+result);
        this.pnrrows = JSON.parse(result);

      }
    });
  }


}
