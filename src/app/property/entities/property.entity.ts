import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, now} from 'mongoose';

export type PropertyDocument = HydratedDocument<Property>;

@Schema({versionKey: false, timestamps: true})
export class Property {
  @Prop()
  title: string;

  @Prop()
  size: number;

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

  @Prop({default: now()})
  createdAt: Date;

  @Prop({default: now()})
  updatedAt: Date;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
