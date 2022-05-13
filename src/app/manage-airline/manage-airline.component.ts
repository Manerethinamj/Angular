import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageAirlineServiceService } from '../services/manage-airline-service.service';
import { AddAirlineModel } from '../model/add-airline-model';

@Component({
  selector: 'app-manage-airline',
  templateUrl: './manage-airline.component.html',
  styleUrls: ['./manage-airline.component.css']
})
export class ManageAirlineComponent implements OnInit {

  constructor(public manageAirlineServiceService:ManageAirlineServiceService) { 
    
  }

  ngOnInit(): void {
    this.refresh();
  }

  showForm:boolean = false;
  onClickForm()
  {
    console.log("clicked");
    this.showForm = true;
  }
  
  onClickbuttinForm()
  {
    this.showForm = false;
  }

  onClickCancelairline(temp:any)
  {
    console.log("scheduleupdate"+temp.airlineID);
    this.manageAirlineServiceService.CancelAirline(temp.airlineID,temp.airlineCode).subscribe(result => {
      if(result != null){
        console.log("RESULT"+ result);          
      }
      
    });
    this.getmethod()
  }



  addAirlineModel:any;
onSubmit(signInForm:NgForm)
{
  this.addAirlineModel = new AddAirlineModel(signInForm.value.AirlineIDCompany,signInForm.value.AirlineCode,signInForm.value.AirlineType,signInForm.value.AirplanBusFare,signInForm.value.AirplanECOFare,signInForm.value.MaxSeat);
   console.log(this.addAirlineModel);
   console.log(signInForm.value.AirlineType);
    this.manageAirlineServiceService.AddAlirline(this.addAirlineModel).subscribe(result => {
    if(result != null)
    {
      console.log(result);
    }
  
  });
  this.getmethod();
}
 
refresh()
{
  this.getmethod()
}
  outresult:any

  getmethod()
{
this.manageAirlineServiceService.proceedAirline().subscribe(result => {
  if(result != null){
    this.outresult = JSON.parse(result);
    console.log("RESULT"+ result);    
  }
});
}

}
