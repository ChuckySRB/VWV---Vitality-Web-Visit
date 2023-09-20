import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DoctorsTableComponent } from './components/doctors-table/doctors-table.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { CheckupsPatientComponent } from './pages/checkups-patient/checkups-patient.component';
import { CheckupsDoctorComponent } from './pages/checkups-doctor/checkups-doctor.component';
import { OtherDoctorComponent } from './pages/other-doctor/other-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NotificationsPatientComponent } from './pages/notifications-patient/notifications-patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPatientsComponent } from './admin/admin-patients/admin-patients.component';
import { AdminCheckupsComponent } from './admin/admin-checkups/admin-checkups.component';
import { AdminDoctorsComponent } from './admin/admin-doctors/admin-doctors.component';
import { AdminOtherComponent } from './admin/admin-other/admin-other.component';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';
import { CheckupsTableComponent } from './components/checkups-table/checkups-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DoctorsComponent,
    CheckupsPatientComponent,
    CheckupsDoctorComponent,
    OtherDoctorComponent,
    NotificationsPatientComponent,
    DoctorComponent,
    AdminLoginComponent,
    AdminPatientsComponent,
    AdminCheckupsComponent,
    AdminDoctorsComponent,
    AdminOtherComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CarouselComponent,
    DoctorsTableComponent,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    PatientsTableComponent,
    CheckupsTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
