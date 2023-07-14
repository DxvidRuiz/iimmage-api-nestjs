import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards,Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Request as request  } from 'express';

import { JwtAuthGuard } from './guards/jwt-auth.guard';
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req : request) {
    return this.authService.login(req.body);
  }

}
