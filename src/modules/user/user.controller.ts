import { Body, Controller, Get, Param, Post } from "@nestjs/common";
// import { UserRepository } from "src/modules/repositories/user.repository";
import { Roles } from "../role/decorators/roles.decorator";
import { Role } from "../role/enums/role.enum";
import { User } from "./entity/user.entity";
import { UsersService } from "./user.service";
import { Public } from "../auth/decorators/public.decorator";



@Controller('/user')
export class UserController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @Public()
    async create(@Body() body: Partial<User>) {
        return this.usersService.create(body)
    }
    @Get()
    @Roles(Role.Admin)
    findAll() {
        return this.usersService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOneById(id);
    }
}