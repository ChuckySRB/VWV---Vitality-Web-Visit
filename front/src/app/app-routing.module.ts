import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AgenciesComponent } from './pages/agencies/agencies.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ObjectsComponent } from './pages/objects/objects.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "profil", component: ProfileComponent},
  {path: 'agencije', component:AgenciesComponent },
  {path: 'poslovi', component: JobsComponent },
  {path: 'objekti', component: ObjectsComponent},
  {path: 'radnici', component: WorkersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
