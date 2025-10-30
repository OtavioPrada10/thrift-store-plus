
import { Injectable } from '@nestjs/common';
import { Role } from '../role/enums/role.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user)
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
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
