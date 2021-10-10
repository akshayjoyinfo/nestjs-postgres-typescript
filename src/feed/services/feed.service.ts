import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';

import { FeedPostEntity } from '../models/post.entity';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ){ }

    createPost(feedPost: FeedPostEntity): Observable<FeedPostEntity> {
        return from(this.feedPostRepository.save(feedPost));
    }

    getPost(postId: number) : Observable<FeedPostEntity> {
        return from(this.feedPostRepository.findOne(postId));
    }

    getPosts(): Observable<FeedPostEntity[]> {
        return from(this.feedPostRepository.find({
            relations : ['comments']
        }));
    }
}
