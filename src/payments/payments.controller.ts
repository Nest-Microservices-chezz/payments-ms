import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern('create.payment.session')
  createPaymentSession(@Payload() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  sucessPayment() {
    return { status: 200, message: 'Success payment' };
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
