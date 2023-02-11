import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    // const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      response
        .status(exception.getStatus())
        .send({ code: 'custom_code', message: exception.getResponse() });
    } else {
      console.error(exception);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ code: 'error', message: 'Internal server error' });
    }
  }
}
