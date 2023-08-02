import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Marios, PayloadMarios} from "../interfaces/marios";

@Injectable({
  providedIn: 'root'
})
export class MariosService {
  mariosUrl: string = 'api/marios/';
  categories: string[] =['Thank You', 'Impressive', 'Exceptional', 'Good Job', 'WOW!','Im Proud']

  constructor(private http:HttpClient) { }

  addMarios(payload:PayloadMarios){
    return this.http.post<Marios>(this.mariosUrl +`create`, payload)
      .subscribe((data) => {
        console.log(data)
      })
  }

}
