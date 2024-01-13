import {Injectable} from '@nestjs/common';
import {CreatePropertyDto} from './dto/create-property.dto';
import {UpdatePropertyDto} from './dto/update-property.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Property} from './entities/property.entity';
import {Model} from 'mongoose';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private readonly propertyModel: Model<Property>
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
    return this.propertyModel.create(createPropertyDto);
  }

  findAll() {
    return this.propertyModel.find();
  }

  findOne(id: string) {
    return this.propertyModel.findById(id);
  }

  update(updatePropertyDto: UpdatePropertyDto) {
    return this.propertyModel.findByIdAndUpdate(
      updatePropertyDto.id,
      updatePropertyDto
    );
  }

  remove(id: string) {
    return this.propertyModel.findByIdAndDelete(id);
  }
}
