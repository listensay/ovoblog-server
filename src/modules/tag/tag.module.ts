import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Tags } from './entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tags])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
