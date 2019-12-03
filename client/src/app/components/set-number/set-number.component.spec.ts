import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNumberComponent } from './set-number.component';

describe('SetNumberComponent', () => {
  let component: SetNumberComponent;
  let fixture: ComponentFixture<SetNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
