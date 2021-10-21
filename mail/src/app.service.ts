import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { IUser } from './interface';

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');

  constructor(private readonly mailService: MailerService) {}

  async sendEmailRegistered(data: IUser) {
    const { email, name } = data;

    try {
      await this.mailService.sendMail({
        to: email,
        subject: 'Welcome to the awesome app',
        html: `Welcome to the app, ${name}`,
      });

      this.logger.log(`Email registered has been sent to ${email}`);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
