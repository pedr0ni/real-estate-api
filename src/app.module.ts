import {Module} from '@nestjs/common';
import {PropertyModule} from './app/property/property.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/real-estate'),
    PropertyModule,
  ],
})
export class AppModule {}
