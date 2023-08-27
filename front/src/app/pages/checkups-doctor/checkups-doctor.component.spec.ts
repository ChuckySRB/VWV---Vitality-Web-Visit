import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckupsDoctorComponent } from './checkups-doctor.component';

describe('CheckupsDoctorComponent', () => {
  let component: CheckupsDoctorComponent;
  let fixture: ComponentFixture<CheckupsDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckupsDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckupsDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
