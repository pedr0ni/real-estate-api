import {Module} from '@nestjs/common';
import {PropertyModule} from './app/property/property.module';
import {MongooseModule} from '@nestjs/mongoose';
import {MessageModule} from './message/message.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/real-estate', {
      connectionFactory: connection => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      },
    }),
    PropertyModule,
    MessageModule,
  ],
})
export class AppModule {}
