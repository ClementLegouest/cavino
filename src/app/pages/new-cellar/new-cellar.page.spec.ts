import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCellarPage } from './new-cellar.page';

describe('NewCellarPage', () => {
  let component: NewCellarPage;
  let fixture: ComponentFixture<NewCellarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCellarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCellarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
