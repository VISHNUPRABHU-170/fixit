import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServiceBookItemComponent } from './fx-service-book-item.component';

describe('FxServiceBookItemComponent', () => {
  let component: FxServiceBookItemComponent;
  let fixture: ComponentFixture<FxServiceBookItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServiceBookItemComponent]
    });
    fixture = TestBed.createComponent(FxServiceBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
