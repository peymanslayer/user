import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './cqrs/commands/handlers/create.handler';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
  imports: [CqrsModule,TypeOrmModule.forFeature([User]),TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'peyman1378()&P',
    database:'stockmanager',
    entities:[User],
    synchronize:true
  })],
  controllers: [UserController],
  providers: [UserService,CreateUserHandler],
})
export class UserModule {}
