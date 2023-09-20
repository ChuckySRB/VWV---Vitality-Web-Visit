import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckupsComponent } from './admin-checkups.component';

describe('AdminCheckupsComponent', () => {
  let component: AdminCheckupsComponent;
  let fixture: ComponentFixture<AdminCheckupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCheckupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
