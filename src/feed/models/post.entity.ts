import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PostCommentEntity } from "./comment.entity";

@Entity('feed_post')
export class FeedPostEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    body: string;


    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP' })
    createdAt:Date;

    @OneToMany(type=> PostCommentEntity, comment=> comment.post)
    comments: Comment[]

}
