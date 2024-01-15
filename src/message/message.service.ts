import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Message} from './entities/message.entity';
import {Model} from 'mongoose';
import {CreateMessageDto} from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>
  ) {}

  findAll() {
    return this.messageModel.find();
  }

  create(createMessageDto: CreateMessageDto) {
    return this.messageModel.create(createMessageDto);
  }
}
