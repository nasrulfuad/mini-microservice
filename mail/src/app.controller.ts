import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { IUser } from './interface';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @MessagePattern('create_account')
  sendEmailRegistered(@Payload() data: IUser, @Ctx() ctx: RmqContext) {
    return this.service.sendEmailRegistered(data);
  }
}
