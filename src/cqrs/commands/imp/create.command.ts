import { CreateUserDto } from "src/dtos/createuser.dto";

export class CreateCommand{
    constructor(public readonly user:CreateUserDto){}
}