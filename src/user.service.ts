import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dtos/createuser.dto';
import { IUser } from './interfaces/user';
import { UpdateUserDto } from './dtos/update.user.dto';
import { User } from './user.entity';
import { CreateCommand } from './cqrs/commands/imp/create.command';
@Injectable()
export class UserService implements IUser {
 constructor(private readonly commandBus:CommandBus){}
  async createUser(user: CreateUserDto): Promise<User> {
   const result= await this.commandBus.execute(CreateCommand);
   return result
  }
  updateUser(user: UpdateUserDto): User {
    throw new Error('Method not implemented.');
  }
  deleteUser(userId: number) {
    throw new Error('Method not implemented.');
  }
  findOneUser(userId: number): User {
    throw new Error('Method not implemented.');
  }
  findAllUsers(): User[] {
    throw new Error('Method not implemented.');
  }

}
