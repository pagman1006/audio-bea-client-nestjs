import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public')
  }),
  ProductsModule, BrandsModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
