import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxTextComponent } from './fx-text.component';

describe('FxTextComponent', () => {
  let component: FxTextComponent;
  let fixture: ComponentFixture<FxTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxTextComponent]
    });
    fixture = TestBed.createComponent(FxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
