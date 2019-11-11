import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsFormComponent } from './units-form.component';

describe('UnitsFormComponent', () => {
  let component: UnitsFormComponent;
  let fixture: ComponentFixture<UnitsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
