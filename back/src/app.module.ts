/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GithubService } from './github/github.service';
import { GithubController } from './github/github.controller';
import {HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [GithubController],
  providers: [GithubService],
})
export class AppModule {}
