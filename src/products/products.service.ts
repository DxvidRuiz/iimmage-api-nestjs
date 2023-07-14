import { Injectable } from '@nestjs/common';
// import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Products, productsDocument } from './schema/products.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private ProductsModule: Model<productsDocument>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const dataSaved = await this.ProductsModule.create(createProductDto);
    return dataSaved;
  }

  async findAll() {
    const list = await this.ProductsModule.find({});
    return list;
  }

  async findOne(id: string) {
    const product = await this.ProductsModule.findById({ _id: id });
    return product;
  }

  async update(id: string, updateProductDto: updateProductDto) {
    const updatedProduct = await this.ProductsModule.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );

    return updatedProduct;
  }

  async remove(id: string) {
    await this.ProductsModule.deleteOne({ _id: id }).exec();
    return { message: 'item removed' };
  }
}
