import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Length} from "class-validator";
import { FeedPostEntity } from "./post.entity";

@Entity('feed_post_comment')
export class PostCommentEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1,100)
    comment: string;


    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP' })
    createdAt:Date;

    @ManyToOne(type=> FeedPostEntity, user => user.comments)
    post: FeedPostEntity;

}
