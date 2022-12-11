import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userview-component',
  templateUrl: './userview-component.component.html',
  styleUrls: ['./userview-component.component.css']
})
export class UserviewComponentComponent {
  constructor(private api:ApiService,private route:Router){}
  complaint=""
  userid:any=""
  searchdata:any=[]
  readValues=()=>{
    this.userid=localStorage.getItem("userinfo")
    let data:any={
      "userid":this.userid,
      "complaint":this.complaint
    }
    console.log(data)
    this.api.userViewComplaint(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
  
          alert("No complaints registered")
          
        } else {
          this.searchdata=response
        }
      }
    )
  }
}
