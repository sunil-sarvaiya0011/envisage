import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinDetailsService {

  // public uploader: FileUploader = new FileUploader({ url:"http://localhost:3000/pinDetails", itemAlias: 'file' });

  constructor(private http:HttpClient) { }

  // for post pin data 


  postPinData(data:any){
    return this.http.post("http://localhost:3000/pinDetails",data)
  }


  // for get pin data 


  getPinData(){
    return this.http.get("http://localhost:3000/pinDetails")
  }
}
