import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { Images } from './entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Images])],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
