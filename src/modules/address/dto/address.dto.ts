import { IsString, MaxLength } from "class-validator";

export class CreateAddressDto {
  userId: number

  @MaxLength(100)
  @IsString()
  street: string;

  @MaxLength(100)
  @IsString()
  city: string;

  @MaxLength(100)
  @IsString()
  state: string;

  @MaxLength(100)
  @IsString()
  country: string;

  @MaxLength(100)
  @IsString()
  cep: string;
}