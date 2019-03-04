import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EProfPage } from './e-prof.page';

describe('EProfPage', () => {
  let component: EProfPage;
  let fixture: ComponentFixture<EProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
