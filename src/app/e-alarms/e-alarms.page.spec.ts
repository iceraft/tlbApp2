import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAlarmsPage } from './e-alarms.page';

describe('EAlarmsPage', () => {
  let component: EAlarmsPage;
  let fixture: ComponentFixture<EAlarmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAlarmsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAlarmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
