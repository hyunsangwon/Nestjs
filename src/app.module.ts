import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config, AWSConfig } from '../config';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';
import { AwsSdkModule } from 'nest-aws-sdk';

@Module({
    imports: [TypeOrmModule.forRoot(config), AwsSdkModule.forRoot(AWSConfig), UserModule, DeviceModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
