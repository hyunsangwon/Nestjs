import { Controller, Get, Param } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}

    @Get('/:id')
    getDevicelogs(@Param('id') deviceId: string) {
        return this.deviceService.getTemperatureLogs(deviceId);
    }
}
