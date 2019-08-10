import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store, select } from '@ngrx/store';
import { UserReducer, UserSelectors, UserActions } from '../store';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  users$: Observable<User[]>;
  studentUsers$: Observable<User[]>;
  advanceStudents$: Observable<User[]>; 

  // We are not going to need this anymore.
  // subscriptions: Subscription[];

  constructor(private store: Store<UserReducer.State>) {
    this.users$ = this.store.pipe(select(UserSelectors.selectUsers));
    this.studentUsers$ = this.store.pipe(select(UserSelectors.selectStudents));
    this.advanceStudents$ = this.store.pipe(select(UserSelectors.selectAdvanceStudents));
  }
  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }

  onSaveStudentUser(user: User) {
    // this.store.dispatch(new UserActions.CreateStudent(user));
  }

}
