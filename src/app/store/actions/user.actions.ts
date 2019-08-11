import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


export const loadUsers = createAction(
  '[User Page] Load Users'
);

export const addStudent = createAction(
  '[User Page] Add Student',
  props<{ student: User}>()
)

