import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) { }
  getPostById(id: number){
    return this.http.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  }
  getPostByUserId(userId: number){
    return this.http.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  }
}
