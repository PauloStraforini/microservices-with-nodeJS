import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { LoggingMiddleware } from './logging/logging.middleware';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000, //1 Min
        limit: 100, // 100 req per min
      },
    ]),
  ],
  providers: [LoggingMiddleware],
})
export class MiddlewareModule {}
