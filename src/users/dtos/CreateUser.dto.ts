import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(2)
  username: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @IsEmail()
  email: string;
}
