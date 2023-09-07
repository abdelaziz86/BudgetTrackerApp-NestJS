import { NestFactory } from '@nestjs/core'; 
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get configuration from ConfigService (if you are using Nest ConfigModule)
  const configService = app.get(ConfigService);
  const corsOptions: CorsOptions = {
    origin: configService.get('CORS_ORIGIN'), // Allow specific origins or '*' for any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  };

  app.enableCors(corsOptions);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

