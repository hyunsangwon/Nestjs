import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNumber()
    readonly id: number;
    @IsString()
    readonly name: string;
    @IsString()
    readonly something: string;
}
