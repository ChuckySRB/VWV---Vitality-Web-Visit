import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckupsPatientComponent } from './checkups-patient.component';

describe('CheckupsPatientComponent', () => {
  let component: CheckupsPatientComponent;
  let fixture: ComponentFixture<CheckupsPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckupsPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckupsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
