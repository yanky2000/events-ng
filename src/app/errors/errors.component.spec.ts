import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404 } from './errors.component';

describe('ErrorsComponent', () => {
  let component: Error404;
  let fixture: ComponentFixture<Error404>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error404 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
