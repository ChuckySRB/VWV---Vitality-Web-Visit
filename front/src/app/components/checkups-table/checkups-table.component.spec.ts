import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckupsTableComponent } from './checkups-table.component';

describe('CheckupsTableComponent', () => {
  let component: CheckupsTableComponent;
  let fixture: ComponentFixture<CheckupsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckupsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckupsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
