import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  lastname: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true, unique: true })
  password: string;
  @Prop({ required: true })
  dateOfBirth: Date;
  @Prop({ required: true })
  country: string;
  @Prop({})
  city: string;
  @Prop({})
  phoneNumber: number;
    
}


export const userSchema = SchemaFactory.createForClass(User);
 