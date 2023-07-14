import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/schema/users.schema';
import { Model } from 'mongoose';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOnebyUsername(username);

    if (user && (await compare(password, user.password))) {
    
      const { password, ...result } = user; 
      return result;
    }
    
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
