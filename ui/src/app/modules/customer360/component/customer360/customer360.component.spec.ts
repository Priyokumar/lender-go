/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Customer360Component } from './customer360.component';

describe('Customer360Component', () => {
  let component: Customer360Component;
  let fixture: ComponentFixture<Customer360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customer360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customer360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
