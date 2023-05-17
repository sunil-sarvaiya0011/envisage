import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor(private http:HttpClient) {
  }
  
  // for post customer data 

  postedData(data:any){
   return this.http.post("http://localhost:3000/customerDetails",data)
 }


//  for get the customer data 


 getData(){
  return this.http.get("http://localhost:3000/customerDetails");
 }

 
//  for get country's data 


 countriesData(){
   return this.http.get("http://localhost:3000/data",
   );
 }

 
 // countriesData(){
 //   return this.http.get("https://api.first.org/data/v1/countries");
 // }


//  for get region's data 


 regionData(){
   return this.http.get("http://localhost:3000/data");
 }

}
