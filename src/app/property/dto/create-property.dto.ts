import {ApiProperty} from '@nestjs/swagger';
import {IsArray, IsNotEmpty, IsString, IsUrl} from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  price: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  gallery: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  features: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  amenities: string[];
}
