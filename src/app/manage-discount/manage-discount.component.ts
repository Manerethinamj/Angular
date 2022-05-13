import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageDiscountServiceService } from '../services/manage-discount-service.service';
import { DiscountModel } from '../model/discount-model';

@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.css']
})
export class ManageDiscountComponent implements OnInit {

  constructor(public manageDiscountServiceService:ManageDiscountServiceService) { }

  ngOnInit(): void {   this.refresh();
  }
  refresh()
{
  this.getmethod()
}
showForm : boolean= false;

onClickForm()
{
  console.log("clicked");
  this.showForm = true;
}

onClickbuttinForm()
{
  this.showForm = false;
}
manageDiscountModel:any;
onSubmit(signInForm:NgForm)
{

this.manageDiscountModel = new DiscountModel(signInForm.value.DiscountCode,signInForm.value.DiscountAmount);
console.log(this.manageDiscountModel);
  this.manageDiscountServiceService.proceedadddiscount(this.manageDiscountModel).subscribe(result => {
    if(result != null){
      console.log("Signature discount");
}
this.getmethod();
});
}


  outresult:any

  getmethod()
{
this.manageDiscountServiceService.proceedDiscount().subscribe(result => {
  if(result != null){
    this.outresult = JSON.parse(result);
    console.log("RESULT"+ result);
    
  }
});
}
  

}
