import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HWkoutPage } from './h-wkout.page';

describe('HWkoutPage', () => {
  let component: HWkoutPage;
  let fixture: ComponentFixture<HWkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HWkoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HWkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
