import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 속성이 들어오면 자동으로 제거
      forbidNonWhitelisted: true, // 허용되지 않은 속성이 DTO에 포함되면 요청을 거부
      transform: true, // DTO에 정의된 필드 유형이 일치하지 않는 경우 자동으로 타입 변환을 수행
    }),
  );
  await app.listen(3000);
}
bootstrap();
