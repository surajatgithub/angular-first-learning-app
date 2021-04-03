import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  submitFromProfileDetails(event) {
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1,
        order: 'newest'
      }
    });
  }
}
