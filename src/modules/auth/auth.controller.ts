import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './decorators/public.decorator';
import { Roles } from '../role/decorators/roles.decorator';
import { Role } from '../role/enums/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @Public()
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  // @HttpCode(HttpStatus.OK)
  // @Post('register')
  // @Public()
  // register(@Body() registerDto: Record<string, any>) {
  //   return this.authService.register(registerDto);
  // }

  @UseGuards(AuthGuard)
  @Get('profile')
  @Roles(Role.Admin)
  getProfile(@Request() req) {
    console.log(req.user);
    return req.user;
  }
}
