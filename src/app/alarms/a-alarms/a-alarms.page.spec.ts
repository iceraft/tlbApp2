import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAlarmsPage } from './a-alarms.page';

describe('AAlarmsPage', () => {
  let component: AAlarmsPage;
  let fixture: ComponentFixture<AAlarmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAlarmsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAlarmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
