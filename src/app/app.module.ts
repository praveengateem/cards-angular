import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './navgatingcomponent/products/cards/cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './navgatingcomponent/products/card/card.component';
import { CardsdetailsComponent } from './navigatingcomponent/cardsdetails/cardsdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    CardsdetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
