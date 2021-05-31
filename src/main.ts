import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, //@Validator가 선언되지 않은 프로퍼티는 미리 거른다.
            forbidNonWhitelisted: true,
            transform: true, //controller에서 원하는 타입으로 변경가능
        }),
    );
    await app.listen(3000);
}
bootstrap();
