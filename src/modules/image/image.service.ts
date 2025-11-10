import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Images } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Images)
    private readonly imageRepository: Repository<Images>,
  ) {}
}
