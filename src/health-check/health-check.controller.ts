import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {

    @Get()
    healthCheck() {
        return { status: 'Client Gateway is up an running!' };
    }
}
