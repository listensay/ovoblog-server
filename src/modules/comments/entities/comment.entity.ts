import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Post } from '../../post/entities/post.entity';

@Entity('Comments')
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(() => User, (user) => user.comments, { nullable: true })
  user: User;

  @Column({ type: 'text' })
  content: string;

  @Column()
  postId: number;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @Column({ nullable: true })
  parentCommentId: number;

  @ManyToOne(() => Comments, (comment) => comment.replies, { nullable: true })
  parentComment: Comments;

  @OneToMany(() => Comments, (comment) => comment.parentComment)
  replies: Comments[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  deletedAt: Date;
}
