import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CardService } from 'src/app/services/card.service';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private service:CardService,private fb:FormBuilder){}
  RegistrationForm=this.fb.group({
    mage:['',[Validators.required]],
  alt:['',[Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
  title:['',[Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
  description:['',[Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
  rating:['',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]],
  price:['',[Validators.required]],
  buynow:['',[Validators.required]],
  addtocart:['',[Validators.required]],
  trending:['',[Validators.required]],
  paymenttype:['',[Validators.required]],
  coupons:['',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]]
     
  })
  onsubmit(){
    if(this.RegistrationForm.valid){
    this.service.onsubmit(this.RegistrationForm.value).subscribe({
      next:(res)=>{
        alert("sucsessfully inserted" +res );
      },

      error:(err)=>{
        alert:("check connectivity" +err);
      }
    })
    }
    else{
      alert("invalid credintials");
    }
  }
}


  