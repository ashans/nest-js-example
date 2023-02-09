import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types/User';
import { plainToClass } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './../../../typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  users: User[] = [];
  getUsers(): User[] {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string): User {
    return this.users.find((user) => user.username === username);
  }

  createUser(user: User) {
    const created = this.userRepository.create(user);
    return this.userRepository.save(created);
  }
}
