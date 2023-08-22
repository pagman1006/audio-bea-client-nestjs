import { Injectable } from '@nestjs/common';
import { ApiService } from './api/api.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class AppService {
  //private dominio = 'http://192.168.1.115:8081';
  private dominio = 'http://localhost:8081';
  constructor(private readonly apiService: ApiService) { }
  getHello(): string {
    return 'Hello World!';
  }

  async getNewProducts(choose: String) {
    const url = `${this.dominio}/v1/audio-bea/products?newProduct=true&productType=${choose}`;
    const { data } = await this.apiService.get<CreateProductDto[]>(url);
    return data;
  }

}
