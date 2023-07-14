import {
  IsString,
  IsNumber,
  MinLength,
  MaxLength,
  IsAlpha,
  IsOptional,
  IsDate,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsAlpha()
  @IsOptional()
  name: string;
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsAlpha()
  @IsOptional()
  lastname: string;
  @IsString()
  @MaxLength(20)
  @IsOptional()
  email: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsOptional()
  username: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsOptional()
  password: string;
  @IsDate()
  @IsOptional()
  dateOfBirth: string;
  @IsString()
  @IsOptional()
  country: string;
  @IsString()
  @IsOptional()
  city: string;
  @IsString()
  @IsOptional()
  phoneNumber: number;
}
