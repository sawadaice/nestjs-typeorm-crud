import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'NestJS + PostgreSQL + TypeORM = Hello MotherFucker';
  }
}
