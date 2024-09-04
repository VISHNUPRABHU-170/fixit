import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxHomeViewComponent } from './fx-home-view.component';

describe('FxHomeViewComponent', () => {
  let component: FxHomeViewComponent;
  let fixture: ComponentFixture<FxHomeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxHomeViewComponent]
    });
    fixture = TestBed.createComponent(FxHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
