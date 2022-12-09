import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  userid:any=""
constructor(private api:ApiService){
  this.userid=localStorage.getItem("userinfo")
  let data:any={
    "id":this.userid
  }
  this.api.getProfile(data).subscribe(
    (response:any)=>{
      console.log(response)
      this.data=response
    }
  )
}
data:any=[]

}
