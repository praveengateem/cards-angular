import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsdetailsComponent } from './cardsdetails.component';

describe('CardsdetailsComponent', () => {
  let component: CardsdetailsComponent;
  let fixture: ComponentFixture<CardsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsdetailsComponent]
    });
    fixture = TestBed.createComponent(CardsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
