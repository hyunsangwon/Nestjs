import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import config from '../ormconfig';
import { User } from './user/entities/user.entity';
import { UserService } from './user/user.service';

@Module({
    imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User])],
    controllers: [AppController, UserController],
    providers: [AppService, UserService],
})
export class AppModule {}
