import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { IProfile, IUser } from './app.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('MY_NATS')
    private readonly client: ClientProxy,
  ) {}

  async all() {
    const users = await lastValueFrom<IUser[], IUser[]>(
      this.client.send<IUser[]>('get_users', { page: 1, items: 10 }),
      { defaultValue: [{ id: 1, login: 'nousername' }] },
    );

    const profiles = await lastValueFrom<IProfile[], IProfile[]>(
      this.client.send<IProfile[]>('get_profiles', {
        ids: users.map((user) => user.id),
      }),
      { defaultValue: [{ id: 1, name: 'default user' }] },
    );

    return users.map((user) => ({
      ...user,
      ...profiles.find((profile) => profile.id === user.id),
    }));
  }

  store(data: { id: number; name: string }) {
    return this.client.emit('create_account', data);
  }
}
