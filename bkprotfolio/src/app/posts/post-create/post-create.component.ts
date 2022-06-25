import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredValue = '';
  newPost = 'this is a post'
  onAddPost(){
    this.newPost = this.enteredValue;
  }

  @Input()posts : Post[] = [];

}
