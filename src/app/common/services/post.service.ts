import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = "https://jsonplaceholder.typicode.com";
  apiUrlPost = this.apiUrl + "/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrlPost, { responseType: 'text' });
  }

  createPost(post: {}) {
    return this.http.post(this.apiUrlPost, post, { responseType: 'text' });
  }

  updatePost(postId: Number, post: {}) {
    return this.http.patch(this.apiUrlPost + '/' + postId, post, { responseType: 'text' });
  }

  deletePost(postId: Number) {
    return this.http.delete(this.apiUrlPost + '/' + postId, { responseType: 'text' });
  }
}
