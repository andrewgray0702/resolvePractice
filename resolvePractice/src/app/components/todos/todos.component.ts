import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  post: Post;
  constructor(private todoService: TodosService, private actr: ActivatedRoute) { }

  getTodo(): void{
    let postId = this.actr.snapshot.params.id;
    this.todoService.getPostById(postId).subscribe((post : Post) => this.post = post)
  }

  ngOnInit() {
    this.getTodo();
  }

}
