import { Component,NgModule} from '@angular/core';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { PinDetailsService } from 'src/app/services/pin-details.service';
import { CustomerDetailsService } from 'src/app/services/customer-details.service';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { Router } from '@angular/router';
import { FileItem, FileUploader } from 'ng2-file-upload';



const URL = '';

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
  selectedImageName: string = '';

  uploader!: FileUploader;
  hasBaseDropZoneOver!:boolean;

  constructor(
    private pinService:PinDetailsService, 
    private customerService:CustomerDetailsService, 
    private router:Router,
    private fb: FormBuilder

    ){

      
    this.uploader = new FileUploader({
      url: URL,
     disableMultipart: true, 
     formatDataFunctionIsAsync: true,
     formatDataFunction: async (item:any) => {
       return new Promise( (resolve, reject) => {
         resolve({
           name: item._file.name,
           length: item._file.size,
           contentType: item._file.type,
           date: new Date()
         });
       });
     }
   });


    }

  ngOnInit(){
    this.customerDetails();
    this.form();

   
  }
  
  // for form and it's validation


form(){
  this.formData= new FormGroup({
    title:new FormControl('',[Validators.required]),
    // image:new FormControl('',[Validators.required]),
    collaborators:new FormControl('',[Validators.required]),
    privacy:new FormControl('',[Validators.required])
  })
}

// form data 


  submit(data:any){

    this.pinService.postPinData(data).subscribe((res)=>{
      console.log("pinData",res);

      this.storeImgData(  res,this.uploader.queue[0]._file)


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



  // for image
  
  
  storeImgData(res: any, image: File) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgData = {
        img: event.target?.result,
        id: res.id
      };
      console.log(imgData);
      
      const storedImgData = localStorage.getItem('imageData');
      if (storedImgData) { 
        const tempData = JSON.parse(storedImgData);
        tempData.push(imgData);
        localStorage.setItem('imageData', JSON.stringify(tempData));
      } else {
        localStorage.setItem('imageData', JSON.stringify([imgData]));
      }
    };
    
    reader.readAsDataURL(image);
  }



  public imageUpload(e:any):void {
    this.hasBaseDropZoneOver = e;
    console.log();
    
  }


}
