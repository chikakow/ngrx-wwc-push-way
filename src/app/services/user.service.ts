import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }
    getUsers() {
        return this.httpClient.get('http://5d4efe2423144c001417dc0f.mockapi.io/users').pipe(
            map((users: any[]) => {
                return users.map(u => {
                    const copy = { ...u };
                    copy.isStudent = u.isStudent % 2 == 0;
                    copy.isAdvanceStudent = copy.isStudent && u.isAdvanceStudent % 2 == 0;
                    return new User(copy);
                });
            }));
    }
}