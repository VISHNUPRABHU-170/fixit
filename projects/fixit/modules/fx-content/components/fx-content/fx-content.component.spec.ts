import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxContentComponent } from './fx-content.component';

describe('FxContentComponent', () => {
  let component: FxContentComponent;
  let fixture: ComponentFixture<FxContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxContentComponent]
    });
    fixture = TestBed.createComponent(FxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
