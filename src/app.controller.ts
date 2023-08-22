import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async inicio(@Res() res: Response) {
    const carStereoNews: CreateProductDto[] = (await this.appService.getNewProducts("CARSTEREO"))?.data;
    const subwooferNews: CreateProductDto[] = (await this.appService.getNewProducts("SUBWOOFER"))?.data;
    const alarmNews: CreateProductDto[] = (await this.appService.getNewProducts("ALARM"))?.data;
    const accesoryNews: CreateProductDto[] = (await this.appService.getNewProducts("ACCESSORY"))?.data;
    console.log(carStereoNews);
    console.log(carStereoNews[0]);
    console.log(carStereoNews[0].subBrand);
    console.log(carStereoNews[0].images[0]);
    return res.render('home', {
      carStereoNews,
      subwooferNews,
      alarmNews,
      accesoryNews,
      message: "Home"
    });
  }

}