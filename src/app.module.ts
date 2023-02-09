import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InventoryModule } from './inventory/inventory.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Entities from './typeorm';

@Module({
  imports: [
    InventoryModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mysql',
      password: 'password',
      database: 'nestjs_db',
      entities: Entities,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
