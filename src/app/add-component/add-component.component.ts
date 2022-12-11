import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {
complaint=""
userid:any=""

  constructor(private api:ApiService,private route:Router){}
readValues=()=>{
  this.userid=localStorage.getItem("userinfo")
  let data:any={
    "userid":this.userid,
    "complaint":this.complaint
  }
  console.log(data)
  this.api.addComplaint(data).subscribe(
    (response:any)=>{
      console.log(response)
      // this.data=response
      if (response.status=="success") {
        alert("Successfully submitted")
       this.complaint=""
        this.route.navigate(['/profile'])
      } 
      else {
        alert("Something went wrong")
      }
    }
  )
}
data:any=[]
}
