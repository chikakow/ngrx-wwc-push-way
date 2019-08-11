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

  constructor( public dialogRef: MatDialogRef<AddStudentComponent>,) {
    
    this.student.isStudent = true;
  }

  ngOnInit() {
  }
  
  onNoClick() {
    this.dialogRef.close();
  }

}
