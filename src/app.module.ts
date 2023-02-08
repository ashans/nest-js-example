import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InventoryModule } from './inventory/inventory.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [InventoryModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
