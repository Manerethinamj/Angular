import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchAirlineService } from '../services/search-airline.service';
import { Travelers } from '../model/travelers';
import { ManageDiscountServiceService } from '../services/manage-discount-service.service';
import { BookflightserviceService } from '../services/bookflightservice.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-book-flight',
  templateUrl: './search-book-flight.component.html',
  styleUrls: ['./search-book-flight.component.css']
})
export class SearchBookFlightComponent implements OnInit {

  constructor(public router:Router ,public bookflightserviceService:BookflightserviceService,public searchAirlineService:SearchAirlineService,public manageDiscountServiceService:ManageDiscountServiceService) { }


  ngOnInit(): void {
  }

  captureScreen() {
    let data = document.getElementById('table');
    console.log(document.getElementById('table'));
    html2canvas(data as any).then(canvas => {
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdfData = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdfData.save(`Ticket Booking.pdf`);
    });
}









inventoryID:any;



  showForm:boolean = true;
  outresult:any;
  onSubmit(signInForm:NgForm)
  {
 this.searchAirlineService.SearchAirline(signInForm.value.onboardingPlace,signInForm.value.distinationPlace).subscribe(result => {
 if(result != null)
 {
  this.outresult = JSON.parse(result);

 }

});
  }



  loginitem:any;
  loginitems:any;
  bookedrowval:any;
  showtable:boolean = true;
  ticketbool:boolean = false;
  username:any;
  Amount:any;
  email:any;
   bookticket(rowval:any)
  {
    this.loginitems = localStorage.getItem("loginInfo");
    this.loginitem = JSON.parse(this.loginitems);    
    this.username = this.loginitem.username;
    this.email =this.loginitem.email_id;
    this.bookedrowval=rowval;
    this.inventoryID = this.bookedrowval.invent_ID;
    this.Amount = this.bookedrowval.airplanECOFare;
    console.log(this.inventoryID);
    this.showtable = false;
    this.ticketbool = true;

  }


 




count:any;
  donothing()
  {
    this.count = this.travelerList.length;

    this.jsonplank= JSON.parse(JSON.stringify(this.travelerList));
console.log(this.jsonplank);
    console.log("Clicked");
  }


  dummy: any;
  myusername1:any ;
  travelerList: Array<Travelers> = [];
  jsonplank:any;
  GrandTotal:number = 0;

  blurEvent(event: any){
    this.dummy = event.target.value;
let Traveler = new Travelers((<HTMLInputElement>document.getElementById("travelername")).value,(<HTMLInputElement>document.getElementById("age")).value,(<HTMLInputElement>document.getElementById("gender")).value,(<HTMLInputElement>document.getElementById("seat")).value,this.bookedrowval.airplanECOFare);
console.log(Traveler);
this.travelerList.push(Traveler);
console.log(this.travelerList);
this.GrandTotal += this.bookedrowval.airplanECOFare;
(<HTMLInputElement>document.getElementById("travelername")).value = '';
(<HTMLInputElement>document.getElementById("age")).value = '';

(<HTMLInputElement>document.getElementById("seat")).value = '';
  }

discountcode:any;
isvaliddiscount:boolean = false;
discountresult:any;
discountamount:number = 0;
  bluredEvent(event:any)
  {
this.discountcode = event.target.value;

this.manageDiscountServiceService.getdiscountamount(this.discountcode).subscribe(result => {
  if(result != null){
    this.isvaliddiscount = true;
    this.discountresult = JSON.parse(result);
    this.discountamount = this.discountresult.discount_Amount;
    this.discountcode = this.discountresult.discount_Code;
    console.log(this.discountresult.discount_ID);
    this.GrandTotal -= this.discountamount;
}
});
  }


isticketvisable:boolean = false;
meal:any;
pnrrows:any;
isticketbooked:boolean = false;
  confirmbookticket()
  {
    if((<HTMLInputElement>document.getElementById("Meal")).value != null)
    {
        this.meal = (<HTMLInputElement>document.getElementById("Meal")).value;
    }
    this.bookflightserviceService.bookflightservice(this.inventoryID,this.username,this.meal,this.discountcode,this.jsonplank).subscribe(result => {
      if(result != null){
        this.isticketbooked = true;
        this.ticketbool = false;
      }
      
    });
    

  }

resetdata()
{
  console.log('home');
  this.router.navigate(['home']);


}

comebacktocurrentpage()
{
  console.log('searchbookflight');
  this.router.navigate(['searchbookflight']);
}


  fetchconfirmedticket()
  {
    console.log("pasenger show")
    this.bookflightserviceService.getflightticket(this.email,this.count).subscribe(result => {
      if(result != null){
        console.log(result);
        this.pnrrows = JSON.parse(result);
        this.isticketvisable = true;
      }
    });
  }


  generatePdf() {
 
    console.log("generate file");
    var opt = {
    margin: .5,
    filename: "PNR_Dtls_"+this.email+'.pdf',
    image: { type: 'jpeg', quality: 0.90 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    
    };
    }
    
    
  




}
