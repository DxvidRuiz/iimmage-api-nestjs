import {
  IsString,
  IsNumber,
  MinLength,
  MaxLength,
  IsAlpha,
  IsOptional,
  IsEmail,
  IsDate,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsAlpha()
  name: string;
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsAlpha()
  lastname: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;
  @IsString()
  dateOfBirth: string;
  @IsString()
  country: string;
  @IsString()
  city: string;
  @IsString()
  phoneNumber: number;


}
