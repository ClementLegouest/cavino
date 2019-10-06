import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarDetailPage } from './cellar-detail.page';

describe('CellarDetailPage', () => {
  let component: CellarDetailPage;
  let fixture: ComponentFixture<CellarDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellarDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellarDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
