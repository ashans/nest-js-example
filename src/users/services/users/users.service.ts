import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types/User';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'dbadmin',
      password: 'passgen',
    },
    {
      username: 'andrew',
      password: 'bbb',
    },
    {
      username: 'jenna',
      password: 'fakepassword',
    },
    {
      username: 'tomc',
      password: 'cruise',
    },
  ];

  getUsers(): User[] {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
