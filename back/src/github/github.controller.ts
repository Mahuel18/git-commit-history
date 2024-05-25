/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits')
  async getCommits(@Query('owner') owner: string, @Query('repo') repo: string) {
    const response = await this.githubService.getCommits(owner, repo);
    return response.data;
  }
}

