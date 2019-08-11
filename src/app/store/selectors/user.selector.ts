import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user/user.reducer';

export const getUserState = createFeatureSelector<fromUser.State>(fromUser.userFeatureKey);

export const selectUsers = createSelector(getUserState, fromUser.getUsers);

export const selectStudents = createSelector(
    selectUsers,
    (users) => users.filter(u=> u.isStudent)
);

export const selectAdvanceStudents = createSelector(
    selectStudents,
    (students) => students.filter(s => s.isAdvanceStudent)
)

export const selectRegularStudents = createSelector(
    selectStudents,
    (students) => students.filter(s => !s.isAdvanceStudent && s.isStudent)
)