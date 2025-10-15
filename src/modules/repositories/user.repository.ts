import { CreateUserDto } from "../user/dto/create-user.dto";
export class UserRepository {
    private users: CreateUserDto[] = []

    async save(user: CreateUserDto) {
        this.users.push(user);
        console.log(this.users)
    }
}