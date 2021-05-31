import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    getAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getOneById(id: number): Promise<User> {
        try {
            const user = await this.userRepository.findOneOrFail(id);
            return user;
        } catch (err) {
            throw err;
        }
    }

    createUser(userData: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(userData); // const newUser = new User();
        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, userData: UpdateUserDto): Promise<User> {
        const user = await this.getOneById(id);
        try {
            const user = await this.userRepository.findOneOrFail(id);
            if (!user) return this.userRepository.save(userData);
        } catch (err) {
            throw err;
        }
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.getOneById(id);
        return this.userRepository.remove(user);
    }
}
