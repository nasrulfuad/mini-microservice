import { Injectable } from '@nestjs/common';
import { IUser } from './interface';

@Injectable()
export class AppService {
  private readonly items: IUser[] = [
    { id: 1, name: 'John Doe', email: 'john@mail.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@mail.com' },
  ];

  all() {
    return this.items;
  }

  store(data: IUser) {
    this.items.push(data);
  }
}
