import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    ClientsModule.register([
      {
        name: 'MY_NATS',
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_HOST],
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
