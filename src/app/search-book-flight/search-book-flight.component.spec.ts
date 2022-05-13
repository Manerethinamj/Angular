import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookFlightComponent } from './search-book-flight.component';

describe('SearchBookFlightComponent', () => {
  let component: SearchBookFlightComponent;
  let fixture: ComponentFixture<SearchBookFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
