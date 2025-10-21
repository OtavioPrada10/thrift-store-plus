
import { Injectable } from '@nestjs/common';
import { Role } from '../role/enums/role.enum';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '$2b$10$8mPWK6WTE65dRNh2H6f8y.HwJxAoOazvPPWSE6cYjCirOX6c8Gs6O', // hashed 'changeme'
      roles: Role.Admin,
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: Role.Admin,
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
