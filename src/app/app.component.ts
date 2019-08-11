import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { User } from './models/user.model';
import { UserActions, UserReducer } from './store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ngrx-wwc-push-way';

  constructor(private store: Store<UserReducer.State>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

  openModal(event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '500px'
    }

    )

    dialogRef.afterClosed().subscribe(result => this.onSaveStudentUser(result))

  }

  onSaveStudentUser(student: User) {
    if (student) {

      this.store.dispatch(UserActions.addStudent({ student }));
    }
  }
}
