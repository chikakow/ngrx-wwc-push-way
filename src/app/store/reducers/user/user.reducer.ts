import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { UserApiActions, UserActions } from '../../actions';


export const userFeatureKey = 'user';

export interface State {
  loaded: boolean;
  loading: boolean;
  users: User[],
  loadError: any
}

export const initialState: State = {
  loaded: false,
  loading: false,
  users: [],
  loadError: null
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(UserApiActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    loaded: true
  })),
  on(UserApiActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loadError: error,
    loading: false,
    loaded: false
  })),
  on(UserActions.addStudent, (state, { student }) => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(UserApiActions.addStudentSuccess, (state, { student }) => {
    // we need to do this because there is no back-end that puts id for this demo app.
    const nextId = getNextId(state.users);
    const s = {...student, id: nextId};
    return {
      ...state,
      users: [s, ...state.users],
      loading: false,
      loaded: true
    }
  }),
  on(UserApiActions.addStudentFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    loadError: error
  })),
  on(UserActions.editAdvance, (state, { student, nextIndex }) => {
    const s: User = { ...student, isAdvanceStudent: !student.isAdvanceStudent }
    const removed = state.users.filter(u => u.id !== student.id);

    return {
      ...state,
      users: [s, ...removed]
    }
  })
)

export function getNextId(users: User[]): number {
  let maxId = -1;
  users.forEach(u => maxId = +u.id > maxId ? +u.id : maxId);
  return maxId + 1;
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getLoadError = (state: State) => state.loadError;
export const getUsers = (state: State) => state.users;
