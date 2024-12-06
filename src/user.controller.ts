import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern,Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/createuser.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({cmd:'signUp'})
  async createUser(@Payload() user:CreateUserDto) {
    
  }
}
