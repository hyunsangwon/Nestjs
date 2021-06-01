import { Controller, Get } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}

    @Get()
    getDevicelogs(): string {
        return 'hello world';
    }
}
