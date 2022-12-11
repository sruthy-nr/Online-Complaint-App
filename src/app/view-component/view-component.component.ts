import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent {

  constructor(private api:ApiService){
    api.viewAllComplaint().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
    data:any=[]

}
