import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  student = new User();
  studentType = 'user';

  constructor(public dialogRef: MatDialogRef<AddStudentComponent>, ) {

    this.student.firstName = 'Steve';
    this.student.lastName = 'Harrington';
    this.student.joinedOn = new Date();

  }

  ngOnInit() {
  }


  save() {
    this.student.isStudent = this.studentType === 'student' || this.studentType === 'advance';
    this.student.isAdvanceStudent = this.studentType === 'advance';
    this.dialogRef.close(this.student);
  }

  onNoClick() {
    this.dialogRef.close();
  }



}
