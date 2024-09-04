import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxSearchComponent } from './fx-search.component';

describe('FxSearchComponent', () => {
  let component: FxSearchComponent;
  let fixture: ComponentFixture<FxSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxSearchComponent]
    });
    fixture = TestBed.createComponent(FxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
