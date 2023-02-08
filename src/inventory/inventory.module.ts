import { Module } from '@nestjs/common';
import { InventoryController } from './controllers/inventory/inventory.controller';
import { InventoryService } from './services/inventory/inventory.service';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
