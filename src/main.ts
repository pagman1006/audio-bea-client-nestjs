import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

import * as hbs from 'express-handlebars';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('hbs', 
    hbs.engine(
      { 
        extname: 'hbs', 
        partialsDir: join(__dirname, '..', 'views/partials'),
        defaultLayout: 'layout',
        layoutsDir: join(__dirname,'..', 'views/layouts'),
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
