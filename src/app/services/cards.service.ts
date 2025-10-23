import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
private url="http://localhost:8080/api/v1/cardsdetails";
  constructor(private http:HttpClient) { }
  carddetails():Observable<Cards[]>{
    return this.http.get<Cards[]>(this.url);
  }
}
