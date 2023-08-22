import { IsString } from "class-validator";
import { CreateBrandDto } from "src/brands/dto/create-brand.dto";

export class CreateSubBrandDto {

    @IsString()
    readonly subBrandName: string;
    readonly brand: CreateBrandDto;
    readonly enabled: boolean;

}
