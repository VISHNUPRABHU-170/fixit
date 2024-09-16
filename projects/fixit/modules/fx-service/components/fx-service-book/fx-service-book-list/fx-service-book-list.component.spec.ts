import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServiceBookListComponent } from './fx-service-book-list.component';

describe('FxServiceBookListComponent', () => {
  let component: FxServiceBookListComponent;
  let fixture: ComponentFixture<FxServiceBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServiceBookListComponent]
    });
    fixture = TestBed.createComponent(FxServiceBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
