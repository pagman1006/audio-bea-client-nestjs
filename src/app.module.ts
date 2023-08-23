import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { ApiModule } from './api/api.module';

import { AppService } from './app.service';

import { AppController } from './app.controller';


const discountFn = (price: number, discount: number) => {
  return price - (price * discount / 100);
}

@Module({
  imports: [
    ProductsModule,
    BrandsModule,
    ApiModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }