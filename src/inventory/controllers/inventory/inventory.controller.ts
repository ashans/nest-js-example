import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { InventoryService } from '../../services/inventory/inventory.service';
import { Request, Response } from 'express';
import { CreateInventoryItem } from '../../dtos/CreateInventoryItem.dto';
import { InventoryItem } from '../../types/InventoryItem';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('type1/:id')
  getItem(@Req() req: Request, @Res() res: Response) {
    const id = req.params.id;
    const item = this.inventoryService.getInventoryItem(id);
    if (item) {
      res.status(HttpStatus.OK).send(item);
    } else {
      res
        .status(HttpStatus.BAD_REQUEST)
        .send({ message: 'No item found for id' });
    }
  }

  @Get('type2/:id')
  getItemNum(@Param('id', ParseIntPipe) id: number): InventoryItem {
    const item = this.inventoryService.getInventoryItem(id.toString());
    if (item) {
      return item;
    } else {
      throw new HttpException('No item found for id', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('')
  createItem(@Body() createBody: CreateInventoryItem) {
    const newId = this.inventoryService.createItem({
      name: createBody.name,
      description: createBody.description,
      id: '',
    });

    return { id: newId };
  }

  @Get('')
  getAllItems() {
    return this.inventoryService.getAllItems();
  }
}
