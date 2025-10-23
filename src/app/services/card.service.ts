import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {
private url="http://localhost:8080/api/v1/card";
  constructor(private Http:HttpClient) { }
  onsubmit(data:any):Observable<any>{
    return this.Http.post(this.url,data);
  }
}
