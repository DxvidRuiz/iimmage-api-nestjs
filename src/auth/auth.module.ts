
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './stratrgies/jwt-strategy';
import { UsersModule } from 'src/users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { LocalStrategy } from './stratrgies/jwt.local-strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/users/schema/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [AuthService, JwtStrategy , LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}