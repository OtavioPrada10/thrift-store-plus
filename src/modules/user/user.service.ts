
import { Injectable } from '@nestjs/common';
import { Role } from '../role/enums/role.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private authService: AuthService,
  ) { }

  async create(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    if (user.password) {
    user.password = await this.authService.hashPassword(user.password);
  }
    return await this.userRepository.save(user)
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<User | null> {
    return this.userRepository.findOne({where: {id: id}});
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
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

  // async findOne(username: string): Promise<User | null> {
  //   return this.users.find(user => user.username === username);
  // }
}
