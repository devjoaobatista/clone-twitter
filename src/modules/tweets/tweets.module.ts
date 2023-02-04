import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { TweetsRepository } from './tweets.repository';

@Module({
  imports: [PrismaModule],
  providers: [TweetsRepository],
})
export class TweetsModule {}

