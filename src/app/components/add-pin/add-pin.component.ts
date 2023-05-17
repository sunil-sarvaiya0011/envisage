import { Component,NgModule} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { PinDetailsService } from 'src/app/services/pin-details.service';
import { CustomerDetailsService } from 'src/app/services/customer-details.service';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { Router } from '@angular/router';
import {  FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.scss']
})
export class AddPinComponent {

  customerName!:any;
  formData!:any;
  file:any;
  getCustomerDetails:any=[];

  constructor(
    private pinService:PinDetailsService, 
    private customerService:CustomerDetailsService, 
    private router:Router
    ){}

  ngOnInit(){
    this.customerDetails();
    this.form();

   
  }
  
  // for form and it's validation


form(){
  this.formData= new FormGroup({
    title:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required]),
    collaborators:new FormControl('',[Validators.required]),
    privacy:new FormControl('',[Validators.required])
  })
}

// form data 


  submit(data:any){

    // this.pinService.uploader.uploadAll();

    this.pinService.postPinData(data).subscribe((res)=>{
      console.log("pinData",res);
      this.router.navigate(['/'])
      alert("data added successfully!!")
      this.formData.reset();
    })
  }

  // for get customer data 

  
  customerDetails(){
    this.customerService.getData().subscribe((res)=>{
      console.log("getCustomerDetails",res);
      this.getCustomerDetails=res;
      const tempData = Object.entries(res);
      this.customerName = tempData.map(([key, value]) => value.name);
      console.log(this.customerName);
    })
  }


  // getFile(event:any){
  //   this.file = event.target.files[0];
  //   console.log("file",this.file);
  // }

}
