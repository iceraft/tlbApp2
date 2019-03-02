import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SWkoutPage } from './s-wkout.page';

describe('SWkoutPage', () => {
  let component: SWkoutPage;
  let fixture: ComponentFixture<SWkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SWkoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SWkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
