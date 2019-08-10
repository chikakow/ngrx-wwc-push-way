import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { UserActions, UserApiActions } from '../../actions';
import { switchMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';



@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) { }

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    switchMap(() =>
      this.userService.getUsers().pipe(
        map((users: User[]) =>
          UserApiActions.loadUsersSuccess({ users })
        ),
        catchError(error =>
          of(UserApiActions.loadUsersFailure({ error }))
        )
      )
    )
  ));

}
