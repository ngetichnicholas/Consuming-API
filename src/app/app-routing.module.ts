import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentComponent } from './instrument/instrument.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students' },
  { path: 'instrument', component: InstrumentComponent },
  { path: 'students', component: StudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }