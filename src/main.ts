import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { FeedModule } from './feed/feed.module';
import { LoggingInterceptor } from './rest/LoggingInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalInterceptors(new LoggingInterceptor());

  const config = new DocumentBuilder()
  .setTitle('LinkedIn Feed')
  .setDescription('This is LinkedIn Feed Application')
  .setVersion('1.0')
  .addTag('feed')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();
