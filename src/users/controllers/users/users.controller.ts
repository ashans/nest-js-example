import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { SerializedUser } from '../../types/User';
import { UserNotFoundException } from '../../exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from '../../filters/HttpException.filter';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':username')
  @UseFilters(HttpExceptionFilter)
  @UseInterceptors(ClassSerializerInterceptor)
  getByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) {
      return new SerializedUser(user);
    }
    throw new UserNotFoundException();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createBody: CreateUserDto) {
    return this.userService.createUser({
      username: createBody.username,
      password: createBody.password,
      email: createBody.email,
    });
  }
}
