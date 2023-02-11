import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req: Request) {}

  @Get()
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session, session.id);
  }
}
