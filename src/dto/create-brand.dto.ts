import { IsString } from "class-validator";

export class CreateBrandDto {

    @IsString()
    readonly brandName: string;
    readonly enabled: boolean;

}
