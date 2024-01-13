import {PartialType} from '@nestjs/mapped-types';
import {CreatePropertyDto} from './create-property.dto';
import {ApiProperty} from '@nestjs/swagger';
import {IsMongoId, IsNotEmpty} from 'class-validator';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
