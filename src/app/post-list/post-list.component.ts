import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postSubscription: Subscription;
  
  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }

  onRemovePost(post: Post){
    this.postService.removePost(post);
  }

  onViewPost(id: number){
    this.router.navigate(['/posts', 'view', id]);
  }

  onAddLoveIt(post: Post){
    this.postService.addLoveIt(post);
  }

  onMunisLoveIt(post: Post){
    this.postService.munisLoveIt(post);
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
