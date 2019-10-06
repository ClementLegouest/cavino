import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarEditPage } from './cellar-edit.page';

describe('CellarEditPage', () => {
  let component: CellarEditPage;
  let fixture: ComponentFixture<CellarEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellarEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellarEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
