import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';

@Module({
    imports: [TypeOrmModule.forRoot(config), UserModule, DeviceModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
