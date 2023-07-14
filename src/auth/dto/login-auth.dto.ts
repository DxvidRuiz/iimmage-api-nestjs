

import {
    IsString,
    IsNumber,
    MinLength,
    MaxLength,
    IsAlpha,
    IsOptional,
    IsEmail,
  } from 'class-validator';
  
  export class LoginAuthDto {
 
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MaxLength(30)
    @MinLength(4)
    password: string;
  }
  