import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePartnerDto {
  @IsString()
  @IsNotEmpty()
  readonly name?: string;
}