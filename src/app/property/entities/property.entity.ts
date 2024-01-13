import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type PropertyDocument = HydratedDocument<Property>;

@Schema({versionKey: false})
export class Property {
  @Prop()
  title: string;

  @Prop()
  price: string;

  @Prop()
  address: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  gallery: string[];

  @Prop()
  features: string[];

  @Prop()
  amenities: string[];
}

export const PropertySchema = SchemaFactory.createForClass(Property);
