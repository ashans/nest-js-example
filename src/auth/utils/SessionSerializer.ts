import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err, user: User) => void) {
    done(null, user);
  }
  async deserializeUser(payload: User, done: (err, user: User) => void) {
    const dbUser = await this.userService.findUserById(payload.id);
    return dbUser ? done(null, dbUser) : done(null, null);
  }
}
