import {
  IsString,
  IsNumber,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;
  @IsNumber()
  price: number;
  @IsString()
  brand: string;
}
