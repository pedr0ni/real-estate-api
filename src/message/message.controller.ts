import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiBody, ApiTags} from '@nestjs/swagger';
import {CreateMessageDto} from './dto/create-message.dto';
import {MessageService} from './message.service';

@Controller('message')
@ApiTags('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Post()
  @ApiBody({type: CreateMessageDto})
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }
}
