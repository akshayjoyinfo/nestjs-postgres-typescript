import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedService } from '../services/feed.service';

@Controller('feed')
@ApiTags('feed')
export class FeedController {

    constructor(
        private readonly feedService: FeedService
    ){}

    @Post()
    create(@Body() post: FeedPostEntity) : Observable<FeedPostEntity> {
        return this.feedService.createPost(post);
    }

    @Get(':id')
    getFeedPost(@Param('id') id: number) : Observable<FeedPostEntity> {
        console.log(id);
        return this.feedService.getPost(id);
    }

    @Get()
    getAllPosts() : Observable<FeedPostEntity[]> {
        return this.feedService.getPosts();
    }

  

}
