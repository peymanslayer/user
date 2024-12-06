import { SignUpDto } from "src/dtos/createuser.dto";
import { UpdateUserDto } from "src/dtos/update.user.dto";
import { User } from "src/user.entity";

export interface IUser{
    createUser(user:SignUpDto):User,
    updateUser(user:UpdateUserDto):User
    deleteUser(userId:number)
    findOneUser(userId:number):User
    findAllUsers():User[]
}