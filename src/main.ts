import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

import * as hbs from 'express-handlebars';

import { AppModule } from './app.module';
import { helpers } from 'handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // const discountFn = (price: number) => {
  //   return price - (price * 16 / 100);
  // };

  const hbsHelpers = {
    discountFn: (price: number, discount: number) => {
      console.log(price);
      console.log(discount);
      return price - (price * discount / 100);
    }
  };

  app.engine('hbs',
    hbs.engine(
      {
        extname: 'hbs',
        partialsDir: join(__dirname, '..', 'views/partials'),
        defaultLayout: 'layout',
        layoutsDir: join(__dirname, '..', 'views/layouts'),
        helpers: { ...helpers, ...hbsHelpers },
      }
    )
  );
  app.setViewEngine('hbs');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    }),
  );
  await app.listen(3000);
}
bootstrap();
