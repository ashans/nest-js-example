import { HttpException, Injectable } from '@nestjs/common';
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

  async getUserByUsername(username: string): Promise<User> {
    const dbUser = await this.userRepository.findOne({ where: { username } });
    if (!dbUser) {
      return null;
    }
    return {
      username: dbUser.username,
      email: dbUser.email,
      password: dbUser.password,
    };
  }

  createUser(user: User): Promise<UserEntity> {
    const created = this.userRepository.create(user);
    return this.userRepository.save(created);
  }
}
