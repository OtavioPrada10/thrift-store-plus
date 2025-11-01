
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
  async findAll() {
    const users = await this.userRepository.find();
    return this.removePasswordFromMany(users);
  }

  async findOneById(id: number) {
  const user = await this.userRepository.findOne({ where: { id } });
  return user ? this.removePassword(user) : null;
}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  private removePassword(user: User): Omit<User, 'password'> {
    const { password, ...rest } = user;
    return rest;
  }

  private removePasswordFromMany(users: User[]): Omit<User, 'password'>[] {
    return users.map(({ password, ...rest }) => rest);
  }
}
