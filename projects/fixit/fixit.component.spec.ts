import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixitComponent } from './fixit.component';

describe('FixitComponent', () => {
  let component: FixitComponent;
  let fixture: ComponentFixture<FixitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixitComponent]
    });
    fixture = TestBed.createComponent(FixitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
