import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsComponent } from './datails.component';

describe('DatailsComponent', () => {
  let component: DatailsComponent;
  let fixture: ComponentFixture<DatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
