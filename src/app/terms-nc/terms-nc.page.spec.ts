import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsNcPage } from './terms-nc.page';

describe('TermsNcPage', () => {
  let component: TermsNcPage;
  let fixture: ComponentFixture<TermsNcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsNcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsNcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
