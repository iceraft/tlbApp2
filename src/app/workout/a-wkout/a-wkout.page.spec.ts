import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AWkoutPage } from './a-wkout.page';

describe('AWkoutPage', () => {
  let component: AWkoutPage;
  let fixture: ComponentFixture<AWkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AWkoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AWkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
