import { Component } from '@angular/core';
import { PinDetailsService } from 'src/app/services/pin-details.service';

@Component({
  selector: 'app-list-of-pins',
  templateUrl: './list-of-pins.component.html',
  styleUrls: ['./list-of-pins.component.scss']
})
export class ListOfPinsComponent {

  pinsData: any;


  constructor(private service:PinDetailsService){

  }
  ngOnInit(){
    this.getPinData();
  }

  // for get pin data 


  getPinData(){
    this.service.getPinData().subscribe((res)=>{
      console.log("getPinData",res);
      this.pinsData=res; 
      
      this._getImgData(res)
      
    })
  }

  // for image 

  
 
  
  _getImgData(res:any) {
    const temp = localStorage.getItem('imageData');
    if (temp) {
      const imgs = JSON.parse(temp);
      this.pinsData = res.filter((item:any) => {
        return imgs.some((img:any) => {
          if (item.id === img.id) {
            item.img = img;
            return true;
          }
          return false;
        });
      });
      console.log("pinsData",this.pinsData);
      
      
    }
  }

  // toggle 

  
  forCustomerr = false;
  forpinn=false;

  forCustomer() {
    this.forCustomerr = !this.forCustomerr;
  }

  forpin(){

    this.forpinn = !this.forpinn;


  }
  

}
