import { IsString } from "class-validator";
import { CreateSubBrandDto } from "./create-sub-brand.dto";
import { CreateImageDto } from "./create-image.dto";

export class CreateProductDto {

    @IsString()
    readonly productName: string;
    readonly price: number;
    readonly discount: number;
    readonly title: string;
    readonly description: string;
    readonly stock: number;
    readonly subBrand: CreateSubBrandDto;
    readonly images: CreateImageDto[];
    readonly enabled: boolean;

}
