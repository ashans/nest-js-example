import {
  ArrayNotEmpty,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreateInventoryItemProperty } from './CreateInventoryItemProperty';
import { Type } from 'class-transformer';

export class CreateInventoryItem {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @MaxLength(25)
  description: string;
  @ValidateNested()
  @Type(() => CreateInventoryItemProperty)
  @ArrayNotEmpty()
  properties: CreateInventoryItemProperty[];
}
