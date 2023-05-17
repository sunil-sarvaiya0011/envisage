import { Component } from '@angular/core';
import { PinDetailsService } from 'src/app/services/pin-details.service';

@Component({
  selector: 'app-list-of-pins',
  templateUrl: './list-of-pins.component.html',
  styleUrls: ['./list-of-pins.component.scss']
})
export class ListOfPinsComponent {

  pinData:any=[];

  constructor(private service:PinDetailsService){

  }
  ngOnInit(){
    this.getPinData();
  }

  // for get pin data 


  getPinData(){
    this.service.getPinData().subscribe((res)=>{
      console.log("getPinData",res);
      this.pinData=res;      
    })
  }

  
}
