import {
    CommandHandler,
    EventPublisher,
    ICommandHandler,
  } from '@nestjs/cqrs';
import { CreateCommand } from '../imp/create.command';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user.entity';
import { Repository } from 'typeorm';

@CommandHandler(CreateCommand)
export class CreateUserHandler implements ICommandHandler<CreateCommand>{
    constructor(@InjectRepository(User) private readonly userRepo:Repository<User>){}
    async execute(command: CreateCommand): Promise<User> {
     const {user}=command;
     const createdUser= await this.userRepo.save(user);
     return createdUser
    }

}