import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './posts/posts.module';

@Module({
  imports: [
    PostModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver, // <--- "driver" should be here, as shown in the docs
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}
