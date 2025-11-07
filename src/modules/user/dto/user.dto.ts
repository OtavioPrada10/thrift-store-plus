import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @MaxLength(100)
  @IsString()
  name: string;

  @MaxLength(100)
  @IsString()
  email: string;

  @MaxLength(100)
  @IsString()
  password: string;

  role: 'admin' | 'seller' | 'customer' | 'supplier';

  @IsBoolean()
  isActive: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  name: string;

  @MaxLength(100)
  @IsOptional()
  @IsString()
  email: string;

  @MaxLength(100)
  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  role: 'admin' | 'seller' | 'customer' | 'supplier';

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}