import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
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
  providers: [UserService],
})
export class UserModule {}
