import { Controller, Get, Header } from '@nestjs/common';

interface AppInfo {
  name: string;
  version: string;
}

@Controller('/info')
export class AppController {
  @Get()
  @Header('content-type', 'application/json')
  getInfo(): AppInfo {
    return {
      name: 'inventory service',
      version: '0.1.0',
    };
  }
}
