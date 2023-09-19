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
  {path: "lekari/lekar/:username", component: DoctorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
