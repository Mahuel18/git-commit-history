import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'http://localhost:3000/github';

  constructor(private http: HttpClient) {}

  getCommits(owner: string, repo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/commits`, { params: { owner, repo } });
  }
}
