import {
  IsString,
  IsNumber,
  MinLength,
  MaxLength,
  IsAlpha,
  IsOptional,
} from 'class-validator';

export class updateProductDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsAlpha()
  @IsOptional()
  name: string;
  @IsNumber()
  @IsOptional()
  price: number;
  @IsString()
  @IsOptional()
  brand: string;
}
