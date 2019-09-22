import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarsPage } from './cellars.page';

describe('CellarsPage', () => {
  let component: CellarsPage;
  let fixture: ComponentFixture<CellarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellarsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
