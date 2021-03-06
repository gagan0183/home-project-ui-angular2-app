/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookStartComponent } from './book-start.component';

describe('BookStartComponent', () => {
  let component: BookStartComponent;
  let fixture: ComponentFixture<BookStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
