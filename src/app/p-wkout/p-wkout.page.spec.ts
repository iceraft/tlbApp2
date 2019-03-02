import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PWkoutPage } from './p-wkout.page';

describe('PWkoutPage', () => {
  let component: PWkoutPage;
  let fixture: ComponentFixture<PWkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PWkoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PWkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
