import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards:Cards[]=[];
constructor(private service:CardsService){}
ngOnInit():void{
  this.service.carddetails().subscribe(data =>this.cards=data);
}
}
