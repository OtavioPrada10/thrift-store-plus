import { Body, Controller, Post } from "@nestjs/common";
import { UserRepository } from "src/modules/repositories/user.repository";
import { CreateUserDto } from './dto/create-user.dto'; 
import { Roles } from "../role/decorators/roles.decorator";
import { Role } from "../role/enums/role.enum";



@Controller('/user')
export class UserController{
    private userRepository = new UserRepository()

    @Post()
    @Roles(Role.Admin)
    async createUser(@Body() data: CreateUserDto) {
        this.userRepository.save(data);
        return data;
    }
}