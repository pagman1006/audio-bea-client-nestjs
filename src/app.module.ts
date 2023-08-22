import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { HttpService } from '@nestjs/axios';


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