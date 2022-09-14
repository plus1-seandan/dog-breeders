import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, PostService, UserService, PrismaService],
})
export class AppModule {}