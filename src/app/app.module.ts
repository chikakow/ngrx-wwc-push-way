import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers, metaReducers } from './store/reducers';
import { AppEffects } from './store/effects/app.effects';
import { UserEffects } from './store/effects/user/user.effects';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { EditAdvanceStudentsComponent } from './components/edit-advance-students/edit-advance-students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    EditAdvanceStudentsComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects, UserEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddStudentComponent]
})
export class AppModule { }
