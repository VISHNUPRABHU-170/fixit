import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxHeaderComponent } from './fx-header.component';

describe('FxHeaderComponent', () => {
  let component: FxHeaderComponent;
  let fixture: ComponentFixture<FxHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxHeaderComponent]
    });
    fixture = TestBed.createComponent(FxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
