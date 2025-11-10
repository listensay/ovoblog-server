import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { PostModule } from './modules/post/post.module';
import { TagModule } from './modules/tag/tag.module';
import { ConfigModule } from './modules/config/config.module';
import { User } from './modules/user/entities/user.entity';
import { Category } from './modules/category/entities/category.entity';
import { Post } from './modules/post/entities/post.entity';
import { Tags } from './modules/tag/entities/tag.entity';
import { Config } from './modules/config/entities/config.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'ovoblog',
      entities: [User, Category, Post, Tags, Config],
      synchronize: true,
      timezone: '+08:00',
    }),
    UserModule,
    CategoryModule,
    TagModule,
    PostModule,
    ConfigModule,
  ],
})
export class AppModule {}
