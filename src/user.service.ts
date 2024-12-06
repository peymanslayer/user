import { Injectable } from '@nestjs/common';
import { MessagePattern,Payload } from '@nestjs/microservices';
import { SignUpDto } from './dtos/createuser.dto';
import { IUser } from './interfaces/user';
import { UpdateUserDto } from './dtos/update.user.dto';
import { User } from './user.entity';
@Injectable()
export class UserService implements IUser {
  createUser(user: SignUpDto): User {
    throw new Error('Method not implemented.');
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
