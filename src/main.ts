import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger, ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Application');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Real Estate Api')
    .setDescription('The real estate api description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);

  logger.log('Application listening on: http://localhost:3001/api');
}
bootstrap();
