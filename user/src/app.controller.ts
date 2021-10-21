import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { IUser } from './interface';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @MessagePattern('get_users')
  all() {
    return this.service.all();
  }

  @MessagePattern('create_account')
  store(@Payload() data: IUser) {
    return this.service.store(data);
  }
}
