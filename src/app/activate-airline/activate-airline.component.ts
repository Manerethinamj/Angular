import { Component, OnInit } from '@angular/core';
import { ActivateAirlineServiceService } from '../services/activate-airline-service.service';

@Component({
  selector: 'app-activate-airline',
  templateUrl: './activate-airline.component.html',
  styleUrls: ['./activate-airline.component.css']
})
export class ActivateAirlineComponent implements OnInit {

  constructor(public activateAirlineServiceService:ActivateAirlineServiceService) { }

  ngOnInit(): void {
    this.refresh();
  }
  onClickactivateairline(temp:any)
  {
    console.log("scheduleupdate"+temp.airlineID);
    this.activateAirlineServiceService.activateAirlineservice(temp.airlineID).subscribe(result => {
      if(result != null){
        console.log("RESULT"+ result);          
      }
      this.refresh();
    });
    
  }

   
refresh()
{
  this.getmethod()
}
  outresult:any

  getmethod()
{
this.activateAirlineServiceService.getcancelledairline().subscribe(result => {
  if(result != null){
    this.outresult = JSON.parse(result);
    console.log("RESULT"+ result);    
  }
});
}


}
