import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [InventoryModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
