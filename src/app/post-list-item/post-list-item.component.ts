import { Component, Input, OnInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
  }

  ngOnInit() {
  	this.post = new Post('', '', 0, Date.now());
  	const id = this.route.snapshot.params['id'];
  	this.postService.getSinglePost(+id).then(
  		(post: Post) => {
  			this.post = post;
  		}
  	);
  }

  onBack(){
  	this.router.navigate(['/posts']);
  }
}
