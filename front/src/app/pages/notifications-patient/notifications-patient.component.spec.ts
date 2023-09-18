import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsPatientComponent } from './notifications-patient.component';

describe('NotificationsPatientComponent', () => {
  let component: NotificationsPatientComponent;
  let fixture: ComponentFixture<NotificationsPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
