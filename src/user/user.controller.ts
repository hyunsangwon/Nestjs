import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Post()
    create(@Body() userData: CreateUserDto): Promise<User> {
        return this.userService.createUser(userData);
    }

    @Get('/:id')
    getOne(@Param('id') userId: number): Promise<User> {
        return this.userService.getOneById(userId);
    }

    @Delete('/:id')
    remove(@Param('id') userId: number): Promise<User> {
        return this.userService.deleteUser(userId);
    }

    @Patch('/:id')
    update(@Param('id') userId: number, @Body() updateData: UpdateUserDto): Promise<User> {
        return this.userService.updateUser(userId, updateData);
    }
}
