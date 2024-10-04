import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePackageDto {
    @IsString()
    @IsNotEmpty()
    type: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    user_id: number;
    partner_id: number;
}
