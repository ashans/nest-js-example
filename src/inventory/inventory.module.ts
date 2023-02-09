import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { InventoryController } from './controllers/inventory/inventory.controller';
import { InventoryService } from './services/inventory/inventory.service';
import { ValidateInventoryItemMiddleware } from './middlewares/validate-inventory-item.middleware';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(ValidateInventoryItemMiddleware)
      .exclude({
        path: 'inventory',
        method: RequestMethod.GET,
      })
      .forRoutes(
        {
          path: '/inventory',
          method: RequestMethod.POST,
        },
        InventoryController,
      );
  }
}
