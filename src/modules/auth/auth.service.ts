
import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }
  private readonly SALT_ROUNDS = 10;

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string, email: string, roles: string, id: number, name: string }> {
    // const hash = await this.hashPassword(password);
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const passwordMatches = await this.comparePassword(password, user.password);
    if (!passwordMatches) throw new UnauthorizedException('Invalid credentials');
    // if (user?.password !== hash) {
    //   throw new UnauthorizedException();
    // }
    const payload = { id: user.id, name: user.name, email: user.email, roles: user.role };
    console.log(user);
    return {
      id: user.id,
      access_token: await this.jwtService.signAsync(payload),
      email: user.email,
      name: user.name,
      roles: user.role,
    };
  }

  // cria um hash com salt único (gerado automaticamente)
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUNDS);
  }

  // compara a senha em texto puro com o hash armazenado
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
