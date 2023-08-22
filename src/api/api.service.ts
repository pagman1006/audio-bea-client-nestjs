import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse, isAxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {

    constructor(private readonly http: HttpService) { }

    async get<T>(url: string): Promise<AxiosResponse<T, any>> {
        try {
            return (await firstValueFrom(this.http.get(url)));
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(error.response?.data);
                return error.response;

            } else {
                console.error(error);
                return error;
            }
        }
    }

}
