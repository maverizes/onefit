import { IsNotEmpty, IsString } from "class-validator";

export class CreatePartnerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

