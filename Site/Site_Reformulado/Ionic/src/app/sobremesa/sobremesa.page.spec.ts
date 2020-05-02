import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesaPage } from './sobremesa.page';

describe('SobremesaPage', () => {
  let component: SobremesaPage;
  let fixture: ComponentFixture<SobremesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobremesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
