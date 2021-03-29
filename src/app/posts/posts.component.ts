import { Component, OnInit } from '@angular/core';
import { PostService } from "../common/services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postHttp: PostService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postHttp.getAll().subscribe(
      (posts) => {
        this.posts = posts;
      });
  }

  createPost(input: HTMLInputElement): void {
    let post = { title: input.value };
    this.postHttp.create(post).subscribe(
      (createdPost) => {
        post['id'] = createdPost.id
        this.posts.splice(0, 0, post);
        input.value = "";
      });
  }

  updatePost(post: any): void {
    this.postHttp.update(post.id, { isRead: true }).subscribe(
      (updatedPost) => {
        // let _response = JSON.parse(response);
      });
  }

  deletePost(post: any): void {
    this.postHttp.delete(post.id).subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}