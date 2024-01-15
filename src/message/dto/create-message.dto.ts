import {ApiProperty} from '@nestjs/swagger';
import {IsMongoId, IsNotEmpty, IsString} from 'class-validator';

export class CreateMessageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  property: string;
}
