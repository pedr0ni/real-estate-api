import {Module} from '@nestjs/common';
import {MessageService} from './message.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Message, MessageSchema} from './entities/message.entity';
import {MessageController} from './message.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{schema: MessageSchema, name: Message.name}]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
