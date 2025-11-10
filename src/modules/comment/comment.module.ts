import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comments } from './entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comments])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
