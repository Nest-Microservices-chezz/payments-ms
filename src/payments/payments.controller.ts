import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { retry } from 'rxjs';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession() {
    return 'Create payment session';
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
  webhook() {
    return 'Webhook';
  }
}
