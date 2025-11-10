import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import { Links } from './entities/link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Links])],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {}
