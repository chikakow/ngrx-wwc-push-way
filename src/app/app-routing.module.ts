import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EditAdvanceStudentsComponent } from './edit-advance-students/edit-advance-students.component';


const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'edit-student', component: EditAdvanceStudentsComponent},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
