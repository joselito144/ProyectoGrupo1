import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnitComponent } from './update-unit.component';

describe('UpdateUnitComponent', () => {
  let component: UpdateUnitComponent;
  let fixture: ComponentFixture<UpdateUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
