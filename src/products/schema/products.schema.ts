import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type productsDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  brand: string;
}

export const productSchema = SchemaFactory.createForClass(Products);
