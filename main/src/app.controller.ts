import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('accounts')
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  all() {
    return this.service.all();
  }

  @Post()
  store(@Body() dto: CreateUserDto) {
    return this.service.store({
      id: new Date().getTime(),
      ...dto,
    });
  }
}