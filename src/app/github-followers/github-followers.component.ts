import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../common/services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest(this.route.paramMap, this.route.queryParamMap)
      .subscribe(([paramMap, queryParamMap]) => {
        let id = paramMap.get('id');
        let username = paramMap.get('username');

        let page = queryParamMap.get('page');
        let order = queryParamMap.get('order');

        this.service.getAll()
          .subscribe(followers => this.followers = followers);
      });
  }
}
