import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBranchDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    location: string;
    
    @IsNumber()
    @IsNotEmpty()
    partner_id: number;
  }
  