import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFooterComponent } from './fx-footer.component';

describe('FxFooterComponent', () => {
  let component: FxFooterComponent;
  let fixture: ComponentFixture<FxFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxFooterComponent]
    });
    fixture = TestBed.createComponent(FxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
