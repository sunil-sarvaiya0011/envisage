import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { CustomerDetailsService } from 'src/app/services/customer-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {

  formData!:any;
  countryData: any;
  regionData:any;
  optionData:any;

  constructor(private service:CustomerDetailsService, private router:Router){}

  ngOnInit(){
    this.forCountriesData();
    this.forRegionData();
    this.Form()
  }

  // for form and it's validation 

  Form(){
    this.formData= new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      region:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required])
    })
  }

// for post customer data 


    submit(data:any){
      this.service.postedData(data).subscribe((res)=>{
        console.log("customerData",res);
      // this.router.navigate(['/'])
      alert("data added successfully!!")
      this.formData.reset();
      })
    }


    // for get country data in form 


    forCountriesData(){
      this.service.countriesData().subscribe((res)=>{

      const cdata = Object.entries(res) ;   
      this.countryData  = cdata.map((key:any)=>{ 
        return  key[1].country
        });
      })
    }


    // for get region data in form 

    
    forRegionData(){
      this.service.regionData().subscribe((res)=>{

        const rdata = Object.entries(res);
        const uniqueRegions = new Set();
        const regionData: any[] = [];
  
         rdata.forEach(([countryCode, {  region }]: any) => {
          if (!uniqueRegions.has(region)) {
            uniqueRegions.add(region);
            regionData.push( region );
          }
        });
        this.regionData = regionData;
        console.log(this.regionData);
        })
    }

    
}
