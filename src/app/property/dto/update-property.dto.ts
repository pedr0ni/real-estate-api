import {ApiProperty} from '@nestjs/swagger';
import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class UpdatePropertyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  _id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  size?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  price?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsUrl()
  image?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  gallery?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  features?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  amenities?: string[];
}
