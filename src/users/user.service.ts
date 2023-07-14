import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, userDocument } from './schema/users.schema';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModule: Model<userDocument>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto;

    const plainToHash = await hash(password, 10);
    createUserDto = { ...createUserDto, password: plainToHash };
    return await this.UserModule.create(createUserDto);
  }

  async findAll() {
    const list = await this.UserModule.find({});
    return list;
  }

  async findOne(id: string) {
    const data = await this.UserModule.findById({ _id: id });
    return data;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const data = await this.UserModule.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return data;
  }

  async remove(id: string) {
    return await this.UserModule.findByIdAndDelete(id);
  }
  async findOnebyUsername(username: string): Promise<User | null> {
    return await this.UserModule.findOne({ username }).exec();
  }
}
