import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User;
  posts: Post[];
  constructor(private actr: ActivatedRoute, private todoService: TodosService) { }

  ngOnInit() {
    this.actr.data
    .subscribe((userResponse: User) => this.user = userResponse)
    let userId = this.actr.snapshot.params.id;
    this.todoService.getPostByUserId(userId).subscribe((postsRes: Post[]) => this.posts = postsRes)
  }

}
