import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';
import { Tags } from '../../tag/entities/tag.entity';
import { Comments } from '../../comments/entities/comment.entity';

@Entity('Post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true, type: 'longtext' })
  content: string;

  @Column({ nullable: true, type: 'longtext' })
  markdownContent: string;

  @Column({ nullable: true, type: 'longtext' })
  cover: string;

  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @Column()
  authorId: number;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.posts)
  category: Category;

  @ManyToMany(() => Tags, (tag) => tag.posts)
  @JoinTable()
  tags: Tags[];

  @OneToMany(() => Comments, (comment) => comment.post)
  comments: Comments[];

  @Column({ default: 0 })
  views: number;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0, comment: '0: 文章, 1: 页面, 2: 作品' })
  type: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  deletedAt: Date;
}
