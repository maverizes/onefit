import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    phone_number: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    image?: string;
}
