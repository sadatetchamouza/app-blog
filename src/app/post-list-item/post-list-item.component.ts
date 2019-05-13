import { Component, Input, OnInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent extends PostListComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }


  onAddLoveIt(){
    this.loveits += 1;
  }

  onMunisLoveIt(){
    this.loveits -= 1;
  }
  
}
