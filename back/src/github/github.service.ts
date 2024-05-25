/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class GithubService {
    constructor(private readonly httpService: HttpService) {}

  async getCommits(owner: string, repo: string): Promise<AxiosResponse<any>> {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    return this.httpService.get(url).toPromise();
  }
}
