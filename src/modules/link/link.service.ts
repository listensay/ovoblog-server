import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Links } from './entities/link.entity';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Links)
    private readonly linkRepository: Repository<Links>,
  ) {}
}
