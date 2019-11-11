import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsListComponent } from './units-list.component';

describe('UnitsListComponent', () => {
  let component: UnitsListComponent;
  let fixture: ComponentFixture<UnitsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
