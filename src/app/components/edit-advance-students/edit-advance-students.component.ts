import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserReducer, UserSelectors } from 'src/app/store';

@Component({
  selector: 'app-edit-advance-students',
  templateUrl: './edit-advance-students.component.html',
  styleUrls: ['./edit-advance-students.component.scss']
})
export class EditAdvanceStudentsComponent implements OnInit {

  studentUsers$: Observable<User[]>;
  advanceStudents$: Observable<User[]>;


  constructor(private store: Store<UserReducer.State>) {
  
    this.studentUsers$ = this.store.pipe(select(UserSelectors.selectRegularStudents));
    this.advanceStudents$ = this.store.pipe(select(UserSelectors.selectAdvanceStudents));
  }

  ngOnInit() {
  //      this.store.pipe(select(UserSelectors.selectRegularStudents)).subscribe(s => this.todo = s)
  // this.store.pipe(select(UserSelectors.selectAdvanceStudents)).subscribe(s => this.done = s)
  }

  todo = [
  ];

  done = [
];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     // we don't care about sorting
  //     // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     // transferArrayItem(event.previousContainer.data,
  //     //   event.container.data,
  //     //   event.previousIndex,
  //     //   event.currentIndex);
  //     console.log('student', event.previousContainer.data);
  //   }
  // }

  isStudent(user: User): string {
    return user.isStudent ? user.isAdvanceStudent ? 'Advance Student' : 'Student' : 'Regular User';
  }

}
