import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login() {
    return;
  }

  @Get()
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session, session.id);
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  getStatus(@Req() req: Request) {
    return req.user;
  }
}
