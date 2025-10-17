import { Module } from '@nestjs/common';
import { UserController } from './modules/user/user.controller';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }