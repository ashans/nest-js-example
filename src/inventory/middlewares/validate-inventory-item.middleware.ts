import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateInventoryItemMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): any {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .send({ error: 'Needs authorization' });
    }
    return next();
  }
}
