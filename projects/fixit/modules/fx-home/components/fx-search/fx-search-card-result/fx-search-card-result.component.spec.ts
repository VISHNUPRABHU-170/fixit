import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxSearchCardComponent } from './fx-search-card.component';

describe('FxSearchCardComponent', () => {
  let component: FxSearchCardComponent;
  let fixture: ComponentFixture<FxSearchCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxSearchCardComponent]
    });
    fixture = TestBed.createComponent(FxSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
