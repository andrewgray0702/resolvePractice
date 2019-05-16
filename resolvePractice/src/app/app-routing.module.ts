import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { UserResolverService } from './resolvers/user-resolver.service';

const routes: Routes = [
  {path: 'todos/:id', component: TodosComponent},
  {path: 'users/:id', component: UsersComponent, resolve:{userResolver: UserResolverService}},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
