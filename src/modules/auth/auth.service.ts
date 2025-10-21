
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string, username: string, roles: string, id: number }> {

    const salt = '$2b$10$8mPWK6WTE65dRNh2H6f8y.'
    const hash = await bcrypt.hash(pass, salt);
    console.log('Hashed password:', hash);
    const user = await this.usersService.findOne(username);
    if (user?.password !== hash) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username, id: user.userId, roles: user.roles };
    console.log(user);
    return {
      id: user.userId,
      access_token: await this.jwtService.signAsync(payload),
      username: user.username,
      roles: user.roles,
    };
  }
}
