import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserReducer, UserSelectors, UserActions } from 'src/app/store';

@Component({
  selector: 'app-edit-advance-students',
  templateUrl: './edit-advance-students.component.html',
  styleUrls: ['./edit-advance-students.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditAdvanceStudentsComponent implements OnInit {

  studentUsers$: Observable<User[]>;
  advanceStudents$: Observable<User[]>;


  constructor(private store: Store<UserReducer.State>) {

    this.studentUsers$ = this.store.pipe(select(UserSelectors.selectRegularStudents));
    this.advanceStudents$ = this.store.pipe(select(UserSelectors.selectAdvanceStudents));
  }

  ngOnInit() {
  
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // transferArrayItem(event.previousContainer.data,
      //                   event.container.data,
      //                   event.previousIndex,
      //                   event.currentIndex);
      const target: User = event.previousContainer.data[event.previousIndex] as any;
      this.store.dispatch(UserActions.editAdvance({student: target, nextIndex: event.currentIndex}));
    }
  }



  isStudent(user: User): string {
    return user.isStudent ? user.isAdvanceStudent ? 'Advance Student' : 'Student' : 'Regular User';
  }

}
