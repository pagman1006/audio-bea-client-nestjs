import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async inicio(@Res() res: Response) {
    const carStereoNews: CreateProductDto[] = await this.appService.getNewProducts("CARSTEREO");
    const subwooferNews: CreateProductDto[] = await this.appService.getNewProducts("SUBWOOFER");
    const alarmNews: CreateProductDto[] = await this.appService.getNewProducts("ALARM");
    const accesoryNews: CreateProductDto[] = await this.appService.getNewProducts("ACCESSORY");

    return res.render('home', {
      carStereoNews,
      subwooferNews,
      alarmNews,
      accesoryNews,
      message: "Home"
    });
  }

}