import { Component } from '@angular/core';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.css']
})
export class CommitHistoryComponent {
  owner: string = 'Mahuel18';
  repo: string = 'git-commit-history';
  commits: any[] = [];

  constructor(private githubService: GithubService) {}

  getCommits() {
    this.githubService.getCommits(this.owner, this.repo).subscribe(data => {
      this.commits = data;
    });
  }
}
