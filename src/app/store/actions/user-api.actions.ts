import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUsersSuccess = createAction(
    '[User/API] Load Users Success',
    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    '[User/API] Load Users Failure',
    props<{ error: any }>()
);

export const addStudentSuccess = createAction(
    '[User/API] Add Student Success',
    props<{ student: User }>()
);

export const addStudentFailure = createAction(
    '[User/API] Add Student Failure',
    props<{ error: any }>()
);