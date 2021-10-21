import { Injectable } from '@nestjs/common';
import { IUser } from './interface';

@Injectable()
export class AppService {
  private readonly items = [
    { id: 1, login: 'john' },
    { id: 2, login: 'jane' },
  ];

  all() {
    return this.items;
  }

  store(data: IUser) {
    const { name, email, ...restData } = data;

    const login = name
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');

    this.items.push({
      login,
      ...restData,
    });
  }
}
