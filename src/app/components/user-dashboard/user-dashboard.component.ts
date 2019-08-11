import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Store, select } from '@ngrx/store';
import { UserReducer, UserSelectors } from '../../store';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDashboardComponent implements OnInit {

  // Faucets of streams 🚰
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

  }

  isStudent(user: User): string {
    return user.isStudent ? user.isAdvanceStudent ? 'Advance Student' : 'Student' : 'Regular User';
  }

}
