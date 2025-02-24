import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { retry } from 'rxjs';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  sucessPayment() {
    return 'Success payment';
  }

  @Get('cancel')
  cancelPayment() {
    return 'Cancel payment';
  }

  @Post('webhook')
  webhook(@Req() req, @Res() res) {
    return this.paymentsService.stripeWebhookHandler(req, res);
  }
}
