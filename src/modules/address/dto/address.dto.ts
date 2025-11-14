import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateAddressDto {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  userId: number;

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

export class UpdateAddressDto {
  @MaxLength(100)
  @IsString()
  @IsOptional()
  street: string;

  @MaxLength(100)
  @IsString()
  @IsOptional()
  city: string;

  @MaxLength(100)
  @IsString()
  @IsOptional()
  state: string;

  @MaxLength(100)
  @IsString()
  @IsOptional()
  country: string;

  @MaxLength(100)
  @IsString()
  @IsOptional()
  cep: string;
}
