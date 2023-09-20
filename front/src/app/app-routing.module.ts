import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckupsDoctorComponent } from './pages/checkups-doctor/checkups-doctor.component';
import { CheckupsPatientComponent } from './pages/checkups-patient/checkups-patient.component';
import { OtherDoctorComponent } from './pages/other-doctor/other-doctor.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { NotificationsPatientComponent } from './pages/notifications-patient/notifications-patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDoctorsComponent } from './admin/admin-doctors/admin-doctors.component';
import { AdminCheckupsComponent } from './admin/admin-checkups/admin-checkups.component';
import { AdminOtherComponent } from './admin/admin-other/admin-other.component';
import { AdminPatientsComponent } from './admin/admin-patients/admin-patients.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profil", component: ProfileComponent},
  {path: "lekar/profil", component: ProfileComponent},
  {path: "pacijent/profil", component: ProfileComponent},
  {path: "lekar/pregledi", component: CheckupsDoctorComponent},
  {path: "pacijent/pregledi", component: CheckupsPatientComponent},
  {path: "pacijent/obaveštenja", component: NotificationsPatientComponent},
  {path: "lekar/razno", component: OtherDoctorComponent},
  {path: "lekari", component: DoctorsComponent},
  {path: "lekari/lekar/:username", component: DoctorComponent},
  {path: "admin/login", component: AdminLoginComponent},
  {path: "admin/lekari", component: AdminDoctorsComponent},
  {path: "admin/pregledi", component: AdminCheckupsComponent},
  {path: "admin/ostalo", component: AdminOtherComponent},
  {path: "admin/pacijenti", component: AdminPatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
