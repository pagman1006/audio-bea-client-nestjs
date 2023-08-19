import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [ProductsModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
