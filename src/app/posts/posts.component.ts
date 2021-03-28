import { Component, OnInit } from '@angular/core';
import { PostService } from '../common/services/post.service';
import { HttpResponseBase } from '@angular/common/http';

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
    this.postHttp.getPosts().subscribe(
      (response) => {
        this.posts = JSON.parse(response);
      },
      (error: HttpResponseBase) => {
        // console.log('Unexpected error occured.');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement): void {
    let post = { title: input.value };
    this.postHttp.createPost(post).subscribe(
      (response) => {
        let _response = JSON.parse(response);
        post['id'] = _response.id
        this.posts.splice(0, 0, post);
        input.value = "";
      },
      (error: HttpResponseBase) => {
        // console.log('Unexpected error occured.');
        console.log(error);
      });
  }

  updatePost(post: any): void {
    this.postHttp.updatePost(post.id, { isRead: true }).subscribe(
      (response) => {
        // let _response = JSON.parse(response);
      },
      (error: HttpResponseBase) => {
        // console.log('Unexpected error occured.');
        console.log(error);
      });
  }

  deletePost(post: any): void {
    this.postHttp.deletePost(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: HttpResponseBase) => {
        // console.log('Unexpected error occured.');
        console.log('3: ', error);
      });
  }
}