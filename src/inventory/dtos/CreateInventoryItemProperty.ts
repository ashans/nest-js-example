import { IsNotEmpty } from 'class-validator';

export class CreateInventoryItemProperty {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  value: string;
}
