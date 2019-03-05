import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EWkoutPage } from './e-wkout.page';

describe('EWkoutPage', () => {
  let component: EWkoutPage;
  let fixture: ComponentFixture<EWkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EWkoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EWkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
