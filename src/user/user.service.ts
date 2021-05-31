import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

    createUser(name: string): Promise<User> {
        const newUser = this.userRepository.create({ name }); // const newUser = new User();
        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, name: string): Promise<User> {
        const user = await this.getOneById(id);
        user.name = name;
        return this.userRepository.save(user);
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.getOneById(id);
        return this.userRepository.remove(user);
    }
}
