import { Body, Controller, Post } from "@nestjs/common";
import { UserRepository } from "src/modules/repositories/user.repository";
import { CreateUserDto } from './dto/create-user.dto'; 



@Controller('/user')
export class UserController{
    private userRepository = new UserRepository()

    @Post()
    async createUser(@Body() data: CreateUserDto) {
        this.userRepository.save(data);
        return data;
    }
}