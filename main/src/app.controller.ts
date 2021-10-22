import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  app() {
    return {
      APPID: process.env.APPID,
    };
  }

  @Get('accounts')
  all() {
    return this.service.all();
  }

  @Post('accounts')
  store(@Body() dto: CreateUserDto) {
    return this.service.store(dto);
  }
}
