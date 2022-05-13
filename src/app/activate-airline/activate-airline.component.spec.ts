import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAirlineComponent } from './activate-airline.component';

describe('ActivateAirlineComponent', () => {
  let component: ActivateAirlineComponent;
  let fixture: ComponentFixture<ActivateAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateAirlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
