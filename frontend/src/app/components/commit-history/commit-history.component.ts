import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.css']
})
export class CommitHistoryComponent implements OnInit {
  commits: any[]= [];
  
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.getCommits();
  }

  getCommits() {
    this.githubService.getCommits('Mahuel18', 'git-commit-history').subscribe(data => {
      this.commits = data;
    });
  }
}
