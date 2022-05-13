import { Component, OnInit } from '@angular/core';
import { BookflightserviceService } from '../services/bookflightservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public bookflightserviceService:BookflightserviceService) { }

  ngOnInit(): void {
    this.gethistory();
  }
userinfo:any = localStorage.getItem("loginInfo");
jsonuserinfo:any;
emailrow:any;
gethistory()
{
this.jsonuserinfo = JSON.parse(this.userinfo);
console.log(this.jsonuserinfo.email_id);
this.bookflightserviceService.getbyemailid(this.jsonuserinfo.email_id).subscribe(result => {
  if(result != null){
    this.emailrow = JSON.parse(result);
}
});
}


}
