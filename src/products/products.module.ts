import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import mongoose from 'mongoose';
import { Products, productSchema } from './schema/products.schema';
import { updateProductSchema } from './schema/update-product-joi-schema';
import { User } from 'src/users/schema/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Products.name, schema: productSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
