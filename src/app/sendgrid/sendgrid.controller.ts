import { Controller, Post, Body } from '@nestjs/common';
import { SendgridService } from './service/sendgrid.service';

@Controller('sendgrid')
export class SendgridController {
    constructor(private readonly sendgridService: SendgridService) {}
    @Post()
    sendEmail(@Body() body) {
        return this.sendgridService.sendEmail(body);
    }
}
