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
    loading: true
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
    users: [student, ...state.users]
  })),
  on(UserActions.editAdvance, (state, { student, nextIndex }) => {
    const s: User = {...student, isAdvanceStudent: !student.isAdvanceStudent}
    const removed = state.users.filter(u => u.id !== student.id);
     
    return {
      ...state,
      users: [s, ...removed]
    }
  })
)

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getLoadError = (state: State) => state.loadError;
export const getUsers = (state: State) => state.users;
