import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNumber()
    readonly id: number;
    @IsString()
    readonly name: string;
    @IsOptional()
    @IsString()
    readonly something: string;
}
