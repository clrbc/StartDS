import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentosPage } from './acompanhamentos.page';

describe('AcompanhamentosPage', () => {
  let component: AcompanhamentosPage;
  let fixture: ComponentFixture<AcompanhamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
