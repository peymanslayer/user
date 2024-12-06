import { NestFactory } from '@nestjs/core';
import { Transport,MicroserviceOptions } from '@nestjs/microservices';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UserModule,
    {
     transport:Transport.RMQ,
     options:{
      urls:['amqp://localhost:5672'],
      queue:'users-q',
      queueOptions:{
        durable:false
      }
     }
    }
  );
  await app.listen();
}
bootstrap();
