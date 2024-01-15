import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument, SchemaTypes, now} from 'mongoose';
import {Property} from 'src/app/property/entities/property.entity';

export type MessageDocument = HydratedDocument<Message>;

@Schema({versionKey: false, timestamps: true})
export class Message {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  message: string;

  @Prop({type: SchemaTypes.ObjectId, ref: Property.name})
  property: Property;

  @Prop({default: now()})
  createdAt: Date;

  @Prop({default: now()})
  updatedAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
