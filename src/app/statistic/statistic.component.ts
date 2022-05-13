import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScheduleserviceService } from '../services/scheduleservice.service';
import { ScheduleinventoryModel } from '../model/scheduleinventory-model';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor(private scheduleserviceService:ScheduleserviceService ) { }
  ngOnInit(): void { this.refresh(); }
outresult:any

refresh()
{
  this.getmethod()
}
showForm : boolean= false;

onClickForm(){
  console.log("clicked");
    this.showForm = true;
    
}

onClickCancelSchedule(temp:any)
{
  console.log("scheduleupdate"+temp.invent_ID);
  this.scheduleserviceService.Cancelschedule(temp.invent_ID).subscribe(result => {
    if(result != null){
      console.log("RESULT"+ result);          
    }
    
  });
  console.log(temp);
  this.getmethod();
}
scheduleinventory:any;

onSubmit(signInForm:NgForm)
{
  console.log(signInForm.value.airlineCode);
  console.log(signInForm.value.distinationPlace);
  console.log(signInForm.value.onboardingPlace);
  console.log(signInForm.value.onboardingdate);
this.scheduleinventory = new ScheduleinventoryModel(signInForm.value.airlineCode,signInForm.value.onboardingPlace,signInForm.value.distinationPlace,signInForm.value.onboardingdate);
  this.scheduleserviceService.proceedaddschedule(this.scheduleinventory).subscribe(result => {
    if(result != null){
      console.log("Signature schedule");

}
this.getmethod();
});
}
//2022-06-30 03:32:53.207

onClickbuttinForm()
{
  this.showForm = false;
}

getmethod()
{
this.scheduleserviceService.proceedschedule().subscribe(result => {
  if(result != null){
    this.outresult = JSON.parse(result);
    console.log("RESULT"+ result);
        
  }
});
}

}
