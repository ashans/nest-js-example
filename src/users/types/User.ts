import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
  email: string;
}

export class SerializedUser {
  username: string;
  @Exclude()
  password: string;
  email: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
