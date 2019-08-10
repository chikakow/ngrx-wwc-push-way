
export class User {
    joinedOn: Date;
    isStudent: boolean;
    isAdvanceStudent: boolean;
    firstName: string;
    lastName: string;
    public constructor(init?: Partial<User>) {
      Object.assign(this, init);
    }
  }