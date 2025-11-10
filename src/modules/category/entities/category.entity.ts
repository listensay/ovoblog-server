import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { Images } from '../../image/entities/image.entity';

@Entity('Category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ nullable: true })
  cover: string;

  @Column({ nullable: true, default: 0 })
  type: number;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];

  @OneToMany(() => Images, (image) => image.category)
  images: Images[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  deletedAt: Date;
}
