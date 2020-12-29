import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTutorialComponent } from './components/tutorial/create-tutorial/create-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
import { UpdateTutorialComponent } from './components/tutorial/update-tutorial/update-tutorial.component';
import { TutorialListComponent } from './components/tutorial/tutorial-list/tutorial-list.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorAddComponent } from './components/doctor/doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './components/doctor/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './components/doctor/doctor-edit/doctor-edit.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientEditComponent } from './components/patient/patient-edit/patient-edit.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { PatientAddComponent } from './components/patient/patient-add/patient-add.component';
import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';
import { ReportAddComponent } from './components/report/report-add/report-add.component';
import { ReportDetailsComponent } from './components/report/report-details/report-details.component';
import { ReportEditComponent } from './components/report/report-edit/report-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tutorials', component: TutorialListComponent },
  { path: 'details/:id', component: TutorialDetailsComponent },
  { path: 'create', component: CreateTutorialComponent },
  { path: 'update/:id', component: UpdateTutorialComponent },
  {
    path: 'doctors', component: DoctorComponent, children: [
      { path: 'add', component: DoctorAddComponent },
      { path: 'details/:id', component: DoctorDetailsComponent },
      { path: 'update/:id', component: DoctorEditComponent }
    ]
  },
  {
    path: 'patients', component: PatientComponent, children: [
      { path: 'add', component: PatientAddComponent },
      { path: 'details/:id', component: PatientDetailsComponent },
      { path: 'update/:id', component: PatientEditComponent }
    ]
  },
  {
    path: 'reports', component: ReportComponent, children: [
      { path: 'add', component: ReportAddComponent },
      { path: 'add/:id', component: ReportAddComponent },
      { path: 'details/:id', component: ReportDetailsComponent },
      { path: 'update/:id', component: ReportEditComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
