import { Module } from '@nestjs/common';
import { PostService } from './posts.service';
import { PrismaService } from 'src/prisma.service';
import { PostResolvers } from './post.resolvers';

@Module({
  providers: [PostResolvers, PostService, PrismaService],
})
export class PostModule {}
